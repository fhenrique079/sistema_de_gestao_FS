export let bancoDeDados = {
    "usuarios": [
        {
            "id_usuario": 1,
            "login": "admin",
            "senha": "123",
            "email": "admin@ifba.edu.br",
            "nivel_acesso": "Administrador"
        },
        {
            "id_usuario": 2,
            "login": "voluntario1",
            "senha": "123",
            "email": "vol1@ifba.edu.br",
            "nivel_acesso": "Volunt\u00e1rio"
        }
    ],
    "compromissos": [
        {
            "id_compromisso": 1,
            "titulo": "Visita Vet",
            "tipo": "Veterin\u00e1rio",
            "descricao": "Consulta de rotina do Toddy.",
            "data": "2026-05-20",
            "hora": "14:00",
            "local": "Sede do Santu\u00e1rio",
            "status": "Conclu\u00eddo",
            "criado_por": "admin"
        },
        {
            "id_compromisso": 2,
            "titulo": "Reuni\u00e3o de Volunt\u00e1rios",
            "tipo": "Reuni\u00e3o",
            "descricao": "Alinhamento das atividades do m\u00eas e divis\u00e3o de tarefas.",
            "data": "2026-06-20",
            "hora": "10:00",
            "local": "Sede do Santu\u00e1rio",
            "status": "Agendado",
            "criado_por": "admin"
        },
        {
            "id_compromisso": 3,
            "titulo": "Buscar Doa\u00e7\u00e3o",
            "tipo": "Alimenta\u00e7\u00e3o",
            "descricao": "Recolher sacos de ra\u00e7\u00e3o doados pela AgroFeliz.",
            "data": "2026-06-15",
            "hora": "15:30",
            "local": "AgroFeliz Centro",
            "status": "Conclu\u00eddo",
            "criado_por": "voluntario1"
        },
        {
            "id_compromisso": 4,
            "titulo": "Limpeza das Baias",
            "tipo": "Limpeza",
            "descricao": "Higieniza\u00e7\u00e3o completa da \u00e1rea dos cavalos e bovinos.",
            "data": "2026-06-18",
            "hora": "08:00",
            "local": "\u00c1rea Externa",
            "status": "Agendado",
            "criado_por": "admin"
        },
        {
            "id_compromisso": 5,
            "titulo": "Vacina\u00e7\u00e3o Gatos",
            "tipo": "Veterin\u00e1rio",
            "descricao": "Aplica\u00e7\u00e3o da vacina V4 nos filhotes resgatados.",
            "data": "2026-06-25",
            "hora": "13:00",
            "local": "Cl\u00ednica Parceira",
            "status": "Agendado",
            "criado_por": "admin"
        }
    ],
    "parceiros": [
        {
            "id_parceiro": 1,
            "nome": "PetShop do Bairro",
            "telefone": "(11) 99999-9999",
            "email": "contato@petshop.com",
            "ramo_atividade": "Banho e Tosa"
        },
        {
            "id_parceiro": 2,
            "nome": "AgroFeliz Suprimentos",
            "telefone": "(11) 98888-7777",
            "email": "vendas@agrofeliz.com",
            "ramo_atividade": "Alimenta\u00e7\u00e3o e Suplementos"
        },
        {
            "id_parceiro": 3,
            "nome": "Cl\u00ednica Vet Sa\u00fade Animal",
            "telefone": "(11) 97777-6666",
            "email": "contato@vetsaude.com",
            "ramo_atividade": "Atendimento Veterin\u00e1rio"
        },
        {
            "id_parceiro": 4,
            "nome": "Transportes Seguro Pet",
            "telefone": "(11) 96666-5555",
            "email": "logistica@seguropet.com",
            "ramo_atividade": "Transporte e Resgate"
        },
        {
            "id_parceiro": 5,
            "nome": "Gr\u00e1fica Imprime Tudo",
            "telefone": "(11) 95555-4444",
            "email": "atendimento@imprimetudo.com",
            "ramo_atividade": "Material Promocional e Gr\u00e1fica"
        }
    ],
    "animais": [
        {
            "id_animal": 1,
            "chip": "SFDS52269",
            "nome": "Toddy",
            "especie": "Cachorro",
            "raca": "Shitzu",
            "sexo": "Macho",
            "data_nascimento": "2014-08-09",
            "cor": "Branco/Marrom",
            "peso": 8.9,
            "condicao_chegada": "Resgatado por abandono",
            "observacao": null
        },
        {
            "id_animal": 2,
            "chip": "SFDS25478",
            "nome": "Lila",
            "especie": "Cachorro",
            "raca": "Border Collie",
            "sexo": "F\u00eamea",
            "data_nascimento": "2020-05-09",
            "cor": "Branco/Preto",
            "peso": 10.4,
            "condicao_chegada": "Apareceu no Santu\u00e1rio",
            "observacao": "Estava gr\u00e1vida"
        },
        {
            "id_animal": 3,
            "chip": "SFDS11247",
            "nome": "Pipo",
            "especie": "Gato",
            "raca": "Frajola",
            "sexo": "Macho",
            "data_nascimento": "2024-03-09",
            "cor": "Branco/Preto",
            "peso": 2.4,
            "condicao_chegada": "Resgatado por atropelamento",
            "observacao": "Pata traseira esquerda quebrada"
        },
        {
            "id_animal": 4,
            "chip": "SFDS55489",
            "nome": "Mia",
            "especie": "Tartaruga",
            "raca": "Jabuti",
            "sexo": "F\u00eamea",
            "data_nascimento": "2010-06-21",
            "cor": "Marrom",
            "peso": 10.5,
            "condicao_chegada": "Resgatada por abandono",
            "observacao": "Foi encontrada desidratada"
        },
        {
            "id_animal": 5,
            "chip": "SFDS44521",
            "nome": "Amora",
            "especie": "Cavalo",
            "raca": "Mangalarga",
            "sexo": "F\u00eamea",
            "data_nascimento": "2015-01-27",
            "cor": "Marrom",
            "peso": 612.0,
            "condicao_chegada": "Resgatada por maus tratos",
            "observacao": "Encontrata desidratada e ferida"
        },
        {
            "id_animal": 6,
            "chip": "SFDS55517",
            "nome": "Mike",
            "especie": "Cachorro",
            "raca": "Vira-Lata",
            "sexo": "Macho",
            "data_nascimento": "2022-07-01",
            "cor": "Caramelo",
            "peso": 5.7,
            "condicao_chegada": null,
            "observacao": null
        },
        {
            "id_animal": 7,
            "chip": "SFDS99512",
            "nome": "Luca",
            "especie": "Lagarto",
            "raca": "Iguana",
            "sexo": "Macho",
            "data_nascimento": "2019-09-08",
            "cor": "Verde",
            "peso": 3.2,
            "condicao_chegada": "Resgatado por atropelamento",
            "observacao": "Resgatado com o rabo quebrado"
        },
        {
            "id_animal": 8,
            "chip": "SFDS95123",
            "nome": "Violeta",
            "especie": "Vaca",
            "raca": "Holstein-Fr\u00edsia",
            "sexo": "F\u00eamea",
            "data_nascimento": "2024-06-02",
            "cor": "Branco/Preto",
            "peso": 457.0,
            "condicao_chegada": null,
            "observacao": "Encontrada machucada"
        },
        {
            "id_animal": 9,
            "chip": "SFDS67877",
            "nome": "Rabito",
            "especie": "Cachorro",
            "raca": "Border Collie",
            "sexo": "Macho",
            "data_nascimento": "2026-01-25",
            "cor": "Branco/Preto",
            "peso": 7.4,
            "condicao_chegada": null,
            "observacao": "Nascido no santu\u00e1rio"
        },
        {
            "id_animal": 10,
            "chip": "SFDS47445",
            "nome": "Fred",
            "especie": "Cavalo",
            "raca": "Mangalarga",
            "sexo": "Macho",
            "data_nascimento": "2018-09-07",
            "cor": "Preto",
            "peso": 580.7,
            "condicao_chegada": "Resgatado por abandono",
            "observacao": null
        },
        {
            "id_animal": 11,
            "chip": "SFDS51247",
            "nome": "Pigui",
            "especie": "Porco",
            "raca": "Mini Pig",
            "sexo": "F\u00eamea",
            "data_nascimento": "2022-06-14",
            "cor": "Rosa",
            "peso": 36.9,
            "condicao_chegada": "Comprada como pet mas foi abandonada pelo tamanho",
            "observacao": "Encontrada saud\u00e1vel"
        },
        {
            "id_animal": 12,
            "chip": "SFDS66514",
            "nome": "Zig",
            "especie": "Galinha",
            "raca": "Legorne",
            "sexo": "F\u00eamea",
            "data_nascimento": "2021-10-22",
            "cor": "Branco",
            "peso": 4.9,
            "condicao_chegada": null,
            "observacao": "Apareceu no Santu\u00e1rio e decidimos cuidar"
        },
        {
            "id_animal": 13,
            "chip": "SFDS74589",
            "nome": "Wine",
            "especie": "Tartaruga",
            "raca": "Jabuti",
            "sexo": "Macho",
            "data_nascimento": "2005-03-11",
            "cor": "Marrom",
            "peso": 11.2,
            "condicao_chegada": "Resgatado por abandono",
            "observacao": "Encontrado na rua"
        },
        {
            "id_animal": 14,
            "chip": "SFDS85234",
            "nome": "Puzi",
            "especie": "Lagarto",
            "raca": "Drag\u00e3o Barbudo",
            "sexo": "Macho",
            "data_nascimento": "2018-11-07",
            "cor": "Laranja",
            "peso": 4.6,
            "condicao_chegada": "Apareceu no Santu\u00e1rio",
            "observacao": null
        },
        {
            "id_animal": 15,
            "chip": "SFDS36541",
            "nome": "Jax",
            "especie": "Coelho",
            "raca": "Angor\u00e1",
            "sexo": "Macho",
            "data_nascimento": "2022-09-10",
            "cor": "Branco",
            "peso": 1.2,
            "condicao_chegada": "Abandonado p\u00f3s-p\u00e1scoa",
            "observacao": "Deixado na pista pr\u00f3ximo ao Santu\u00e1rio"
        },
        {
            "id_animal": 16,
            "chip": "SFDS55121",
            "nome": "Pomini",
            "especie": "Coruja",
            "raca": "Suindara",
            "sexo": "F\u00eamea",
            "data_nascimento": "2021-12-06",
            "cor": "Branco",
            "peso": 2.8,
            "condicao_chegada": "Encontrada com a asa machucada",
            "observacao": null
        },
        {
            "id_animal": 17,
            "chip": "SFDS66632",
            "nome": "Nina",
            "especie": "Porquinho-da-\u00cdndia",
            "raca": "Peruano",
            "sexo": "F\u00eamea",
            "data_nascimento": "2025-09-17",
            "cor": "Tricolor",
            "peso": 0.9,
            "condicao_chegada": null,
            "observacao": "Doada por uma fam\u00edlia de outro estado"
        },
        {
            "id_animal": 18,
            "chip": "SFDS65213",
            "nome": "Vlad",
            "especie": "Morcego",
            "raca": "Frug\u00edvero",
            "sexo": "Macho",
            "data_nascimento": "2026-04-20",
            "cor": "Preto",
            "peso": 0.4,
            "condicao_chegada": "Caiu do telhado do Santu\u00e1rio",
            "observacao": "Em reabilita\u00e7\u00e3o"
        },
        {
            "id_animal": 19,
            "chip": "SFDS12050",
            "nome": "Vik",
            "especie": "Papagaio",
            "raca": "Verdadeiro",
            "sexo": "Macho",
            "data_nascimento": "2012-02-24",
            "cor": "Verde",
            "peso": 0.3,
            "condicao_chegada": "Capturada por um gato mas salva a tempo",
            "observacao": "Perdeu uma das asas"
        },
        {
            "id_animal": 20,
            "chip": "SFDS20254",
            "nome": "Apolo",
            "especie": "Cavalo",
            "raca": "Puro-Sangue",
            "sexo": "Macho",
            "data_nascimento": "2017-09-20",
            "cor": "Marrom",
            "peso": 350.8,
            "condicao_chegada": "Resgatado em um descarte de corrida",
            "observacao": "Possui um problema cr\u00f4nico no casco direito"
        }
    ],
    "vacinas": [
        {
            "id_vacina": 1,
            "tipo_vacina": "Antirr\u00e1bica Canina",
            "lote": "RAB-2026-A",
            "validade_dias": 365,
            "id_animal": 1
        },
        {
            "id_vacina": 2,
            "tipo_vacina": "V10 (M\u00faltipla Canina)",
            "lote": "V10-XPT01",
            "validade_dias": 365,
            "id_animal": 1
        },
        {
            "id_vacina": 3,
            "tipo_vacina": "V10 (M\u00faltipla Canina)",
            "lote": "V10-XPT01",
            "validade_dias": 365,
            "id_animal": 2
        },
        {
            "id_vacina": 4,
            "tipo_vacina": "V4 (Qu\u00e1drupla Felina)",
            "lote": "TET-CAV01",
            "validade_dias": 365,
            "id_animal": 3
        },
        {
            "id_vacina": 5,
            "tipo_vacina": "Antirr\u00e1bica Felina",
            "lote": "RAB-2026-B",
            "validade_dias": 365,
            "id_animal": 3
        },
        {
            "id_vacina": 6,
            "tipo_vacina": "T\u00e9tano Equino",
            "lote": "TET-CAV01",
            "validade_dias": 365,
            "id_animal": 5
        },
        {
            "id_vacina": 7,
            "tipo_vacina": "Influenza Equina",
            "lote": "INF-CAV03",
            "validade_dias": 180,
            "id_animal": 5
        },
        {
            "id_vacina": 8,
            "tipo_vacina": "Gi\u00e1rdia Canina",
            "lote": "GIA-2025",
            "validade_dias": 365,
            "id_animal": 6
        },
        {
            "id_vacina": 9,
            "tipo_vacina": "Febre Aftosa",
            "lote": "AFT-BOV01",
            "validade_dias": 180,
            "id_animal": 8
        },
        {
            "id_vacina": 10,
            "tipo_vacina": "Clostridiose",
            "lote": "CLO-BOV02",
            "validade_dias": 365,
            "id_animal": 8
        },
        {
            "id_vacina": 11,
            "tipo_vacina": "V10 (M\u00faltipla Canina)",
            "lote": "V10-XPTO1",
            "validade_dias": 365,
            "id_animal": 9
        },
        {
            "id_vacina": 12,
            "tipo_vacina": "Encefalomielite Equina",
            "lote": "ENC-CAV02",
            "validade_dias": 365,
            "id_animal": 10
        },
        {
            "id_vacina": 13,
            "tipo_vacina": "Erisipela Su\u00edna",
            "lote": "ERI-SUI10",
            "validade_dias": 180,
            "id_animal": 11
        },
        {
            "id_vacina": 14,
            "tipo_vacina": "Doen\u00e7a de Newcastle",
            "lote": "NEW-AVE01",
            "validade_dias": 180,
            "id_animal": 12
        },
        {
            "id_vacina": 15,
            "tipo_vacina": "Mixomatose",
            "lote": "MIX-COE01",
            "validade_dias": 365,
            "id_animal": 15
        },
        {
            "id_vacina": 16,
            "tipo_vacina": "Febre Aftosa",
            "lote": "AFT-BOV01",
            "validade_dias": 180,
            "id_animal": 21
        },
        {
            "id_vacina": 17,
            "tipo_vacina": "Influenza Equina",
            "lote": "INF-CAV03",
            "validade_dias": 180,
            "id_animal": 20
        },
        {
            "id_vacina": 18,
            "tipo_vacina": "Clostridiose",
            "lote": "CLO-BOV02",
            "validade_dias": 365,
            "id_animal": 22
        },
        {
            "id_vacina": 19,
            "tipo_vacina": "V4 (Qu\u00e1drupla Felina)",
            "lote": "FEL4-001",
            "validade_dias": 365,
            "id_animal": 23
        }
    ],
    "apoiadores": [
        {
            "id_apoiador": 1,
            "nome": "Jo\u00e3o Pedro Rodrigues",
            "telefone": "(11) 92284-5621",
            "email": "jprodrigues@gmail.com",
            "cidade": "Itatiba",
            "bairro": "Centro",
            "logradouro": "Rua dos Gavi\u00f5es",
            "cep": null
        },
        {
            "id_apoiador": 2,
            "nome": "Lucas Freitas",
            "telefone": "(14) 96621-8541",
            "email": "lucasfreitas@gmail.com",
            "cidade": "Ja\u00fa",
            "bairro": "Pra\u00e7a",
            "logradouro": "Av. dos Bichos",
            "cep": "59631-890"
        },
        {
            "id_apoiador": 3,
            "nome": "Natalie Calderini",
            "telefone": "(11) 91234-5678",
            "email": "nataliecald@gmail.com",
            "cidade": "Bragan\u00e7a Paulista",
            "bairro": "Jardim Europa",
            "logradouro": null,
            "cep": "12907-820"
        },
        {
            "id_apoiador": 4,
            "nome": "Jo\u00e3o Guilherme Silva",
            "telefone": "(11) 98765-4321",
            "email": "guilhermesilva@gmail.com",
            "cidade": "Bragan\u00e7a Paulista",
            "bairro": "Matadouro",
            "logradouro": null,
            "cep": null
        },
        {
            "id_apoiador": 5,
            "nome": "Gustavo Rocha",
            "telefone": "(11) 99988-7766",
            "email": "rocha.gustavo@gmail.com",
            "cidade": "Atibaia",
            "bairro": "Alvin\u00f3polis",
            "logradouro": "Rua das Flores, 45",
            "cep": null
        },
        {
            "id_apoiador": 6,
            "nome": "Luciana Aparecida",
            "telefone": "(11) 95591-4852",
            "email": "leticia.brandi@gmail.com",
            "cidade": "Bragan\u00e7a Paulista",
            "bairro": "Santa Luzia",
            "logradouro": "Rua Am\u00e9rica, 99",
            "cep": "12900-111"
        },
        {
            "id_apoiador": 7,
            "nome": "Carlos Victor Silva",
            "telefone": "(19) 99127-6235",
            "email": "cavicsil@gmail.com",
            "cidade": "Campinas",
            "bairro": "Cambu\u00ed",
            "logradouro": "Av. Orosimbo Maia, 1020",
            "cep": null
        },
        {
            "id_apoiador": 8,
            "nome": "Ana Oliveira",
            "telefone": "(11) 99963-5885",
            "email": "ana.oliveira@gmail.com",
            "cidade": "Bragan\u00e7a Paulista",
            "bairro": "Jardim do Sul",
            "logradouro": "Rua dos P\u00e1ssaros, 33",
            "cep": "12914-033"
        },
        {
            "id_apoiador": 9,
            "nome": "Roberto Almeida",
            "telefone": "(35) 92357-1120",
            "email": "roberto.alm@gmail.com",
            "cidade": "Extrema",
            "bairro": null,
            "logradouro": "Pra\u00e7a da Matriz, 12",
            "cep": "37640-778"
        },
        {
            "id_apoiador": 10,
            "nome": "Mariana Souza",
            "telefone": "(11) 93530-2742",
            "email": "mari.souza@gemail.com",
            "cidade": "Atibaia",
            "bairro": "Centro",
            "logradouro": "Rua Jos\u00e9 Lucas, 78",
            "cep": "12940-112"
        }
    ]
};
