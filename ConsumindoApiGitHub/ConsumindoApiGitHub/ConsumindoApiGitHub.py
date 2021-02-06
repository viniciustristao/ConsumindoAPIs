# coding: utf-8
import json
from urllib import request
APIUsuario = 'https://api.github.com/users/{0}'
APISeguidores = 'https://api.github.com/users/{0}/followers?per_page=100;page{1}'
APIRepo =  'https://api.github.com/users/{0}/repos?type=owner'
usuario = input('Fornceça um nome de usuario: ')
retornousuario = request.urlopen(APIUsuario.format(usuario)).read()
juser = json.loads(retornousuario)

print ("\n\nUsuario da Consulta: {0}\n\n".format(juser['login']))
print ("{0} seguidores:\n\n".format(juser['followers']))
i = 0
p = 0
m = int(int(juser['followers'])/100)+1
while p<=m:
    p=p+1
    jfol = json.loads(request.urlopen(APISeguidores.format(usuario,p)).read())
    for seguidor in jfol:
        i=i+1
        jseg=json.loads(request.urlopen(APIUsuario.format(seguidor['login'])).read())
        print('\n',jseg['name'],'\n\t')
        jrepo = json.loads(request.urlopen(APIRepo.format(seguidor['login'])).read())
        for repo in jrepo:
            print(repo['name'],'\n\t')