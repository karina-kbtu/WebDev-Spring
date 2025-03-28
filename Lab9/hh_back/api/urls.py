from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, VacancyViewSet, company_vacancies, top_ten_vacancies, api_root

router = DefaultRouter()
router.register(r'companies', CompanyViewSet, basename='company')
router.register(r'vacancies', VacancyViewSet, basename='vacancy')

urlpatterns = [
    path("", api_root, name="api-root"),
    path("companies/<int:id>/vacancies/", company_vacancies, name="company-vacancies"),
    path("vacancies/top_ten/", top_ten_vacancies, name="top-ten-vacancies"),
    path("", include(router.urls)),]