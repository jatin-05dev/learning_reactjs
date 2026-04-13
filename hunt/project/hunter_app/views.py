from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
import time

class LoginView(APIView):
    """
    Step 1: Yahan se token milega.
    Token expiry settings.py mein control hoti hai.
    """
    permission_classes = [AllowAny] # Sabke liye open

    def post(self, request):
        # Hunter user create ya get karo
        user, created = User.objects.get_or_create(username='hunter_pro')
        if created:
            user.set_password('hunt_password_2026')
            user.save()
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),
            'message': 'Token generated! Use it in Authorization header as Bearer <token>'
        })

class VaultView(APIView):
    """
    Step 2: Yeh asali vault hai.
    Team ko yahan 2 hurdles milenge:
    1. Middleware Hash (Jo settings/middleware mein set hai)
    2. Artificial Server Lag (Jise optimize karna challenge ka part ho sakta hai)
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # --- HURDLE: ARTIFICIAL DELAY / LOOP ---
        # Team ko lagega server down hai ya request stuck hai.
        # Unhe frontend ya headers ke through isse bypass ya optimize karna hoga.
        
        start_time = time.time()
      
        # Optional: Add a real sleep to test their patience
        # time.sleep(2) 

        return Response({
            'flag': 'TECHHUNT{JW7_M1DDL3W4R3_0P71M1Z3D}',
            'status': 'Vault Decrypted',
            'processing_time': f"{time.time() - start_time:.2f}s",
            'message': 'Legendary! You cleared the middleware trap and waited out the lag.'
        })

# --- EXTRA: Root View (For testing) ---
class HomeView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        return Response({"message": "Server is up! Go to /api/login/ to start."})