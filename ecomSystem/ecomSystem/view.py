from django.http import FileResponse
import os
from django.conf import settings
from django.http import HttpResponse,Http404
def download_file(request,filename):
    file_path = os.path.join('images', filename) 
    if not os.path.exists(file_path):
        raise Http404("Image does not exist")
    
    # Trả về file ảnh
    return FileResponse(open(file_path, 'rb'), content_type='image/jpeg')
