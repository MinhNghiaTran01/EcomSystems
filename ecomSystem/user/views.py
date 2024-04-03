from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer,MyTokenObtainPairSerializer,ProfileSerializer
from drf_yasg.utils import swagger_auto_schema
from .models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
# Chú ý rằng chúng ta sử dụng `serializer_class` để Swagger biết được cấu trúc của request body
@swagger_auto_schema(methods=['POST'], request_body=UserRegistrationSerializer)
@api_view(['POST'])
def registration_req(request):
    if request.method == "POST":
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User is registered successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfile(request):
    user = request.user
    serializer = ProfileSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateProfile(request):
    user = request.user
    serializer = ProfileSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def list_user(request):
    if request.method == "GET":
        users = User.objects.all()
        serializer = UserRegistrationSerializer(users,many=True)
        return Response(serializer.data)
      

