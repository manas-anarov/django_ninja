from .serializers import (
    ListSerializer,
    AddSerializer,
    ShowSerializer,
    DeleteSerializer,
    UpdateSerializer
)

from rest_framework.generics import (CreateAPIView, RetrieveUpdateAPIView, DestroyAPIView, ListAPIView, RetrieveAPIView)

from blog.models import Post


class PostListAPIView(ListAPIView):
    serializer_class = ListSerializer
    queryset = Post.objects.all()


class AddPost(CreateAPIView):
    serializer_class = AddSerializer
    queryset = Post.objects.all()


class ShowPost(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = ShowSerializer
    lookup_field = 'id'


class DeletePost(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = DeleteSerializer
    lookup_field = 'id'


class UpdatePost(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = UpdateSerializer
    lookup_field = 'id'
