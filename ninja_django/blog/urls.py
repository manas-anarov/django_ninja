from blog import views
from django.urls import path

urlpatterns = [
    path('list/', views.PostListAPIView.as_view(), name='blog-list'),
    path('add/', views.AddPost.as_view(), name='blog-add'),
    path('<id>/', views.ShowPost.as_view(), name='blog-show'),
    path('delete/<id>/', views.DeletePost.as_view(), name='blog-delete'),
    path('edit/<id>/', views.UpdatePost.as_view(), name='blog-edit')
]
