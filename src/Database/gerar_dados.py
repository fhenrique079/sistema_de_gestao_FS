import json
import os

#dados simulados
dados_banco = {
    "usuarios": [
        {"id_usuario": 1, "login": "admin", "senha": "123", "email": "admin@ifba.edu.br", "nivel_acesso": "Administrador"},
        {"id_usuario": 2, "login": "voluntario1", "senha": "123", "email": "vol1@ifba.edu.br", "nivel_acesso": "Voluntário"}
    ],
    "compromissos": [
        {"id_compromisso": 1, "titulo": "Visita Vet", "tipo": "Veterinário", "descricao": "Consulta de rotina do Toddy.", "data": "2026-05-20", "hora": "14:00", "local": "Sede do Santuário", "status": "Concluído", "criado_por": "admin"},
        {"id_compromisso": 2, "titulo": "Reunião de Voluntários", "tipo": "Reunião", "descricao": "Alinhamento das atividades do mês e divisão de tarefas.", "data": "2026-06-20", "hora": "10:00", "local": "Sede do Santuário", "status": "Agendado", "criado_por": "admin"},
        {"id_compromisso": 3, "titulo": "Buscar Doação", "tipo": "Alimentação", "descricao": "Recolher sacos de ração doados pela AgroFeliz.", "data": "2026-06-15", "hora": "15:30", "local": "AgroFeliz Centro", "status": "Concluído", "criado_por": "voluntario1"},
        {"id_compromisso": 4, "titulo": "Limpeza das Baias", "tipo": "Limpeza", "descricao": "Higienização completa da área dos cavalos e bovinos.", "data": "2026-06-18", "hora": "08:00", "local": "Área Externa", "status": "Agendado", "criado_por": "admin"},
        {"id_compromisso": 5, "titulo": "Vacinação Gatos", "tipo": "Veterinário", "descricao": "Aplicação da vacina V4 nos filhotes resgatados.", "data": "2026-06-25", "hora": "13:00", "local": "Clínica Parceira", "status": "Agendado", "criado_por": "admin"}
    ],
    "parceiros": [
        {"id_parceiro": 1, "nome": "PetShop do Bairro", "telefone": "(11) 99999-9999", "email": "contato@petshop.com", "ramo_atividade": "Banho e Tosa"},
        {"id_parceiro": 2, "nome": "AgroFeliz Suprimentos", "telefone": "(11) 98888-7777", "email": "vendas@agrofeliz.com", "ramo_atividade": "Alimentação e Suplementos"},
        {"id_parceiro": 3, "nome": "Clínica Vet Saúde Animal", "telefone": "(11) 97777-6666", "email": "contato@vetsaude.com", "ramo_atividade": "Atendimento Veterinário"},
        {"id_parceiro": 4, "nome": "Transportes Seguro Pet", "telefone": "(11) 96666-5555", "email": "logistica@seguropet.com", "ramo_atividade": "Transporte e Resgate"},
        {"id_parceiro": 5, "nome": "Gráfica Imprime Tudo", "telefone": "(11) 95555-4444", "email": "atendimento@imprimetudo.com", "ramo_atividade": "Material Promocional e Gráfica"}
    ],
    "animais": [
        {"id_animal": 1, "chip": "SFDS52269", "nome": "Toddy", "especie": "Cachorro", "raca": "Shitzu", "sexo": "Macho", "data_nascimento": "2014-08-09", "cor": "Branco/Marrom", "peso": 8.9, "condicao_chegada": "Resgatado por abandono", "observacao": None},
        {"id_animal": 2, "chip": "SFDS25478", "nome": "Lila", "especie": "Cachorro", "raca": "Border Collie", "sexo": "Fêmea", "data_nascimento": "2020-05-09", "cor": "Branco/Preto", "peso": 10.4, "condicao_chegada": "Apareceu no Santuário", "observacao": "Estava grávida"},
        {"id_animal": 3, "chip": "SFDS11247", "nome": "Pipo", "especie": "Gato", "raca": "Frajola", "sexo": "Macho", "data_nascimento": "2024-03-09", "cor": "Branco/Preto", "peso": 2.4, "condicao_chegada": "Resgatado por atropelamento", "observacao": "Pata traseira esquerda quebrada"},
        {"id_animal": 4, "chip": "SFDS55489", "nome": "Mia", "especie": "Tartaruga", "raca": "Jabuti", "sexo": "Fêmea", "data_nascimento": "2010-06-21", "cor": "Marrom", "peso": 10.5, "condicao_chegada": "Resgatada por abandono", "observacao": "Foi encontrada desidratada"},
        {"id_animal": 5, "chip": "SFDS44521", "nome": "Amora", "especie": "Cavalo", "raca": "Mangalarga", "sexo": "Fêmea", "data_nascimento": "2015-01-27", "cor": "Marrom", "peso": 612.0, "condicao_chegada": "Resgatada por maus tratos", "observacao": "Encontrata desidratada e ferida"},
        {"id_animal": 6, "chip": "SFDS55517", "nome": "Mike", "especie": "Cachorro", "raca": "Vira-Lata", "sexo": "Macho", "data_nascimento": "2022-07-01", "cor": "Caramelo", "peso": 5.7, "condicao_chegada": None, "observacao": None},
        {"id_animal": 7, "chip": "SFDS99512", "nome": "Luca", "especie": "Lagarto", "raca": "Iguana", "sexo": "Macho", "data_nascimento": "2019-09-08", "cor": "Verde", "peso": 3.2, "condicao_chegada": "Resgatado por atropelamento", "observacao": "Resgatado com o rabo quebrado"},
        {"id_animal": 8, "chip": "SFDS95123", "nome": "Violeta", "especie": "Vaca", "raca": "Holstein-Frísia", "sexo": "Fêmea", "data_nascimento": "2024-06-02", "cor": "Branco/Preto", "peso": 457.0, "condicao_chegada": None, "observacao": "Encontrada machucada"},
        {"id_animal": 9, "chip": "SFDS67877", "nome": "Rabito", "especie": "Cachorro", "raca": "Border Collie", "sexo": "Macho", "data_nascimento": "2026-01-25", "cor": "Branco/Preto", "peso": 7.4, "condicao_chegada": None, "observacao": "Nascido no santuário"},
        {"id_animal": 10, "chip": "SFDS47445", "nome": "Fred", "especie": "Cavalo", "raca": "Mangalarga", "sexo": "Macho", "data_nascimento": "2018-09-07", "cor": "Preto", "peso": 580.7, "condicao_chegada": "Resgatado por abandono", "observacao": None},
        {"id_animal": 11, "chip": "SFDS51247", "nome": "Pigui", "especie": "Porco", "raca": "Mini Pig", "sexo": "Fêmea", "data_nascimento": "2022-06-14", "cor": "Rosa", "peso": 36.9, "condicao_chegada": "Comprada como pet mas foi abandonada pelo tamanho", "observacao": "Encontrada saudável"},
        {"id_animal": 12, "chip": "SFDS66514", "nome": "Zig", "especie": "Galinha", "raca": "Legorne", "sexo": "Fêmea", "data_nascimento": "2021-10-22", "cor": "Branco", "peso": 4.9, "condicao_chegada": None, "observacao": "Apareceu no Santuário e decidimos cuidar"},
        {"id_animal": 13, "chip": "SFDS74589", "nome": "Wine", "especie": "Tartaruga", "raca": "Jabuti", "sexo": "Macho", "data_nascimento": "2005-03-11", "cor": "Marrom", "peso": 11.2, "condicao_chegada": "Resgatado por abandono", "observacao": "Encontrado na rua"},
        {"id_animal": 14, "chip": "SFDS85234", "nome": "Puzi", "especie": "Lagarto", "raca": "Dragão Barbudo", "sexo": "Macho", "data_nascimento": "2018-11-07", "cor": "Laranja", "peso": 4.6, "condicao_chegada": "Apareceu no Santuário", "observacao": None},
        {"id_animal": 15, "chip": "SFDS36541", "nome": "Jax", "especie": "Coelho", "raca": "Angorá", "sexo": "Macho", "data_nascimento": "2022-09-10", "cor": "Branco", "peso": 1.2, "condicao_chegada": "Abandonado pós-páscoa", "observacao": "Deixado na pista próximo ao Santuário"},
        {"id_animal": 16, "chip": "SFDS55121", "nome": "Pomini", "especie": "Coruja", "raca": "Suindara", "sexo": "Fêmea", "data_nascimento": "2021-12-06", "cor": "Branco", "peso": 2.8, "condicao_chegada": "Encontrada com a asa machucada", "observacao": None},
        {"id_animal": 17, "chip": "SFDS66632", "nome": "Nina", "especie": "Porquinho-da-Índia", "raca": "Peruano", "sexo": "Fêmea", "data_nascimento": "2025-09-17", "cor": "Tricolor", "peso": 0.9, "condicao_chegada": None, "observacao": "Doada por uma família de outro estado"},
        {"id_animal": 18, "chip": "SFDS65213", "nome": "Vlad", "especie": "Morcego", "raca": "Frugívero", "sexo": "Macho", "data_nascimento": "2026-04-20", "cor": "Preto", "peso": 0.4, "condicao_chegada": "Caiu do telhado do Santuário", "observacao": "Em reabilitação"},
        {"id_animal": 19, "chip": "SFDS12050", "nome": "Vik", "especie": "Papagaio", "raca": "Verdadeiro", "sexo": "Macho", "data_nascimento": "2012-02-24", "cor": "Verde", "peso": 0.3, "condicao_chegada": "Capturada por um gato mas salva a tempo", "observacao": "Perdeu uma das asas"},
        {"id_animal": 20, "chip": "SFDS20254", "nome": "Apolo", "especie": "Cavalo", "raca": "Puro-Sangue", "sexo": "Macho", "data_nascimento": "2017-09-20", "cor": "Marrom", "peso": 350.8, "condicao_chegada": "Resgatado em um descarte de corrida", "observacao": "Possui um problema crônico no casco direito"}
    ],
    "vacinas": [
        {"id_vacina": 1, "tipo_vacina": "Antirrábica Canina", "lote": "RAB-2026-A", "validade_dias": 365, "id_animal": 1},
        {"id_vacina": 2, "tipo_vacina": "V10 (Múltipla Canina)", "lote": "V10-XPT01", "validade_dias": 365, "id_animal": 1},
        {"id_vacina": 3, "tipo_vacina": "V10 (Múltipla Canina)", "lote": "V10-XPT01", "validade_dias": 365, "id_animal": 2},
        {"id_vacina": 4, "tipo_vacina": "V4 (Quádrupla Felina)", "lote": "TET-CAV01", "validade_dias": 365, "id_animal": 3},
        {"id_vacina": 5, "tipo_vacina": "Antirrábica Felina", "lote": "RAB-2026-B", "validade_dias": 365, "id_animal": 3},
        {"id_vacina": 6, "tipo_vacina": "Tétano Equino", "lote": "TET-CAV01", "validade_dias": 365, "id_animal": 5},
        {"id_vacina": 7, "tipo_vacina": "Influenza Equina", "lote": "INF-CAV03", "validade_dias": 180, "id_animal": 5},
        {"id_vacina": 8, "tipo_vacina": "Giárdia Canina", "lote": "GIA-2025", "validade_dias": 365, "id_animal": 6},
        {"id_vacina": 9, "tipo_vacina": "Febre Aftosa", "lote": "AFT-BOV01", "validade_dias": 180, "id_animal": 8},
        {"id_vacina": 10, "tipo_vacina": "Clostridiose", "lote": "CLO-BOV02", "validade_dias": 365, "id_animal": 8},
        {"id_vacina": 11, "tipo_vacina": "V10 (Múltipla Canina)", "lote": "V10-XPTO1", "validade_dias": 365, "id_animal": 9},
        {"id_vacina": 12, "tipo_vacina": "Encefalomielite Equina", "lote": "ENC-CAV02", "validade_dias": 365, "id_animal": 10},
        {"id_vacina": 13, "tipo_vacina": "Erisipela Suína", "lote": "ERI-SUI10", "validade_dias": 180, "id_animal": 11},
        {"id_vacina": 14, "tipo_vacina": "Doença de Newcastle", "lote": "NEW-AVE01", "validade_dias": 180, "id_animal": 12},
        {"id_vacina": 15, "tipo_vacina": "Mixomatose", "lote": "MIX-COE01", "validade_dias": 365, "id_animal": 15},
        {"id_vacina": 16, "tipo_vacina": "Febre Aftosa", "lote": "AFT-BOV01", "validade_dias": 180, "id_animal": 21},
        {"id_vacina": 17, "tipo_vacina": "Influenza Equina", "lote": "INF-CAV03", "validade_dias": 180, "id_animal": 20},
        {"id_vacina": 18, "tipo_vacina": "Clostridiose", "lote": "CLO-BOV02", "validade_dias": 365, "id_animal": 22},
        {"id_vacina": 19, "tipo_vacina": "V4 (Quádrupla Felina)", "lote": "FEL4-001", "validade_dias": 365, "id_animal": 23}
    ],
    "apoiadores": [
        {"id_apoiador": 1, "nome": "João Pedro Rodrigues", "telefone": "(11) 92284-5621", "email": "jprodrigues@gmail.com", "cidade": "Itatiba", "bairro": "Centro", "logradouro": "Rua dos Gaviões", "cep": None},
        {"id_apoiador": 2, "nome": "Lucas Freitas", "telefone": "(14) 96621-8541", "email": "lucasfreitas@gmail.com", "cidade": "Jaú", "bairro": "Praça", "logradouro": "Av. dos Bichos", "cep": "59631-890"},
        {"id_apoiador": 3, "nome": "Natalie Calderini", "telefone": "(11) 91234-5678", "email": "nataliecald@gmail.com", "cidade": "Bragança Paulista", "bairro": "Jardim Europa", "logradouro": None, "cep": "12907-820"},
        {"id_apoiador": 4, "nome": "João Guilherme Silva", "telefone": "(11) 98765-4321", "email": "guilhermesilva@gmail.com", "cidade": "Bragança Paulista", "bairro": "Matadouro", "logradouro": None, "cep": None},
        {"id_apoiador": 5, "nome": "Gustavo Rocha", "telefone": "(11) 99988-7766", "email": "rocha.gustavo@gmail.com", "cidade": "Atibaia", "bairro": "Alvinópolis", "logradouro": "Rua das Flores, 45", "cep": None},
        {"id_apoiador": 6, "nome": "Luciana Aparecida", "telefone": "(11) 95591-4852", "email": "leticia.brandi@gmail.com", "cidade": "Bragança Paulista", "bairro": "Santa Luzia", "logradouro": "Rua América, 99", "cep": "12900-111"},
        {"id_apoiador": 7, "nome": "Carlos Victor Silva", "telefone": "(19) 99127-6235", "email": "cavicsil@gmail.com", "cidade": "Campinas", "bairro": "Cambuí", "logradouro": "Av. Orosimbo Maia, 1020", "cep": None},
        {"id_apoiador": 8, "nome": "Ana Oliveira", "telefone": "(11) 99963-5885", "email": "ana.oliveira@gmail.com", "cidade": "Bragança Paulista", "bairro": "Jardim do Sul", "logradouro": "Rua dos Pássaros, 33", "cep": "12914-033"},
        {"id_apoiador": 9, "nome": "Roberto Almeida", "telefone": "(35) 92357-1120", "email": "roberto.alm@gmail.com", "cidade": "Extrema", "bairro": None, "logradouro": "Praça da Matriz, 12", "cep": "37640-778"},
        {"id_apoiador": 10, "nome": "Mariana Souza", "telefone": "(11) 93530-2742", "email": "mari.souza@gemail.com", "cidade": "Atibaia", "bairro": "Centro", "logradouro": "Rua José Lucas, 78", "cep": "12940-112"}
        
    ]
}

os.makedirs("src/Database", exist_ok=True)

# Transformar em JS
conteudo_js = f"export let bancoDeDados = {json.dumps(dados_banco, indent=4)};\n"

with open("src/Database/dados.js", "w", encoding="utf-8") as arquivo:
    arquivo.write(conteudo_js)

print("Arquivo gerado com sucesso!")