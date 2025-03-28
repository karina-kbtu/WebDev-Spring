from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.urls import reverse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

@api_view(['GET'])
def company_vacancies(request, id):
    company = get_object_or_404(Company, id=id)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def api_root(request):
    return Response({
        'companies': request.build_absolute_uri(reverse('company-list')),
        'company_detail': request.build_absolute_uri(reverse('company-detail', args=[1])),
        'company_vacancies': request.build_absolute_uri(reverse('company-vacancies', args=[1])),
        'vacancies': request.build_absolute_uri(reverse('vacancy-list')),
        'vacancy_detail': request.build_absolute_uri(reverse('vacancy-detail', args=[1])),
        'top_ten_vacancies': request.build_absolute_uri(reverse('top-ten-vacancies')),
    })
