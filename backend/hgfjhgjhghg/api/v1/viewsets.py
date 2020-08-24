from rest_framework import authentication
from hgfjhgjhghg.models import Gvhfhgfhgfhg
from .serializers import GvhfhgfhgfhgSerializer
from rest_framework import viewsets


class GvhfhgfhgfhgViewSet(viewsets.ModelViewSet):
    serializer_class = GvhfhgfhgfhgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Gvhfhgfhgfhg.objects.all()
