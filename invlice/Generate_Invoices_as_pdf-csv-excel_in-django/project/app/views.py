from django.shortcuts import render
from django.http import HttpResponse
from .models import Student
# Create your views here.


import openpyxl
def home(req):
    return render(req,'home.html')

def download_excel(req):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Data" # Data is tab name in excel sheet.
    
    # Header row
    ws.append(["ID", "Name", "Email","DOB","Contact", "City"])
    for i in Student.objects.all():
            ws.append([i.id, i.name, i.email,i.dob,i.contact, i.city])

    # Prepare response
    response = HttpResponse(content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    response["Content-Disposition"] = "attachment; filename=student.xlsx" # student is excel file predefine name
    wb.save(response)
    return response


import csv
def download_csv(request):

    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="data.csv"'
    writer = csv.writer(response)
    
    # Header row
    writer.writerow(["ID", "Name", "Email","DOB","Contact", "City"])
    
    # Data rows
    for obj in Student.objects.all():
        writer.writerow([obj.id, obj.name,obj.email, obj.dob,obj.contact, obj.city])
    return response


from django.template.loader import get_template
from xhtml2pdf import pisa

def download_pdf(request):
    template_path = 'pdf_template.html'
    data = {'records': Student.objects.all().values()}
    
    # Load and render the HTML template
    template = get_template(template_path)
    html = template.render(data)
    
    # Create a response object and specify content_type as PDF
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="data.pdf"'
    
    # Create PDF
    pisa_status = pisa.CreatePDF(html, dest=response)
    
    if pisa_status.err:
        return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response
