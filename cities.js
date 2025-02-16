const cities = [
    "Kabul, Afganistán",
    "Tirana, Albania",
    "Argel, Argelia",
    "Andorra la Vella, Andorra",
    "Luanda, Angola",
    "Saint John's, Antigua y Barbuda",
    "Buenos Aires, Argentina",
    "Ereván, Armenia",
    "Canberra, Australia",
    "Viena, Austria",
    "Bakú, Azerbaiyán",
    "Nassau, Bahamas",
    "Manama, Baréin",
    "Daca, Bangladesh",
    "Bridgetown, Barbados",
    "Minsk, Bielorrusia",
    "Bruselas, Bélgica",
    "Belmopán, Belice",
    "Porto-Novo, Benín",
    "Thimphu, Bután",
    "Sucre, Bolivia",
    "Sarajevo, Bosnia y Herzegovina",
    "Gaborone, Botsuana",
    "Brasília, Brasil",
    "Bandar Seri Begawan, Brunéi",
    "Sofía, Bulgaria",
    "Uagadugú, Burkina Faso",
    "Gitega, Burundi",
    "Praia, Cabo Verde",
    "Phnom Penh, Camboya",
    "Yaundé, Camerún",
    "Ottawa, Canadá",
    "Bangui, República Centroafricana",
    "Yamena, Chad",
    "Santiago, Chile",
    "Pekín, China",
    "Bogotá, Colombia",
    "Moroni, Comoras",
    "Kinshasa, República Democrática del Congo",
    "Brazzaville, República del Congo",
    "San José, Costa Rica",
    "Zagreb, Croacia",
    "La Habana, Cuba",
    "Nicosia, Chipre",
    "Praga, República Checa",
    "Copenhague, Dinamarca",
    "Yibuti, Yibuti",
    "Roseau, Dominica",
    "Santo Domingo, República Dominicana",
    "Quito, Ecuador",
    "El Cairo, Egipto",
    "San Salvador, El Salvador",
    "Malabo, Guinea Ecuatorial",
    "Asmara, Eritrea",
    "Tallin, Estonia",
    "Mbabane, Esuatini",
    "Adís Abeba, Etiopía",
    "Suva, Fiyi",
    "Helsinki, Finlandia",
    "París, Francia",
    "Libreville, Gabón",
    "Banjul, Gambia",
    "Tiflis, Georgia",
    "Berlín, Alemania",
    "Acra, Ghana",
    "Atenas, Grecia",
    "Saint George's, Granada",
    "Ciudad de Guatemala, Guatemala",
    "Conakri, Guinea",
    "Bissau, Guinea-Bisáu",
    "Georgetown, Guyana",
    "Puerto Príncipe, Haití",
    "Tegucigalpa, Honduras",
    "Budapest, Hungría",
    "Reikiavik, Islandia",
    "Nueva Delhi, India",
    "Jakarta, Indonesia",
    "Teherán, Irán",
    "Bagdad, Irak",
    "Dublín, Irlanda",
    "Jerusalén, Israel",
    "Roma, Italia",
    "Kingston, Jamaica",
    "Tokio, Japón",
    "Amán, Jordania",
    "Nairobi, Kenia",
    "Tarawa, Kiribati",
    "Pionyang, Corea del Norte",
    "Seúl, Corea del Sur",
    "Pristina, Kosovo",
    "Kuwait, Kuwait",
    "Biskek, Kirguistán",
    "Vientián, Laos",
    "Riga, Letonia",
    "Beirut, Líbano",
    "Maseru, Lesoto",
    "Monrovia, Liberia",
    "Trípoli, Libia",
    "Vaduz, Liechtenstein",
    "Vilna, Lituania",
    "Luxemburgo, Luxemburgo",
    "Antananarivo, Madagascar",
    "Lilongüe, Malaui",
    "Kuala Lumpur, Malasia",
    "Malé, Maldivas",
    "Bamako, Malí",
    "La Valeta, Malta",
    "Majuro, Islas Marshall",
    "Nuakchot, Mauritania",
    "Port Louis, Mauricio",
    "Ciudad de México, México",
    "Palikir, Micronesia",
    "Chisinau, Moldavia",
    "Monaco, Mónaco",
    "Ulaanbaatar, Mongolia",
    "Podgorica, Montenegro",
    "Rabat, Marruecos",
    "Maputo, Mozambique",
    "Naypyidaw, Birmania",
    "Windhoek, Namibia",
    "Kathmandu, Nepal",
    "Ámsterdam, Países Bajos",
    "Wellington, Nueva Zelanda",
    "Managua, Nicaragua",
    "Niamey, Níger",
    "Abuja, Nigeria",
    "Oslo, Noruega",
    "Mascate, Omán",
    "Islamabad, Pakistán",
    "República de Palaos, Palaos",
    "Ciudad de Panamá, Panamá",
    "Puerto Moresby, Papúa Nueva Guinea",
    "Asunción, Paraguay",
    "Lima, Perú",
    "Manila, Filipinas",
    "Varsovia, Polonia",
    "Lisboa, Portugal",
    "Doha, Catar",
    "Bucharest, Rumania",
    "Moscú, Rusia",
    "Kigali, Ruanda",
    "Basseterre, San Cristóbal y Nieves",
    "Castries, Santa Lucía",
    "Kingstown, San Vicente y las Granadinas",
    "Apia, Samoa",
    "San Marino, San Marino",
    "Riad, Arabia Saudita",
    "Dakar, Senegal",
    "Belgrado, Serbia",
    "Victoria, Seychelles",
    "Freetown, Sierra Leona",
    "Singapur, Singapur",
    "Bratislava, Eslovaquia",
    "Liubliana, Eslovenia",
    "Honiara, Islas Salomón",
    "Mogadiscio, Somalia",
    "Pretoria, Sudáfrica",
    "Juba, Sudán del Sur",
    "Madrid, España",
    "Sri Jayawardenepura Kotte, Sri Lanka",
    "Khartoum, Sudán",
    "Paramaribo, Surinam",
    "Estocolmo, Suecia",
    "Berna, Suiza",
    "Damasco, Siria",
    "Taipei, Taiwán",
    "Dushanbe, Tayikistán",
    "Dodoma, Tanzania",
    "Bangkok, Tailandia",
    "Lomé, Togo",
    "Nukualofa, Tonga",
    "Puerto España, Trinidad y Tobago",
    "Túnez, Túnez",
    "Ankara, Turquía",
    "Asjabad, Turkmenistán",
    "Funafuti, Tuvalu",
    "Kampala, Uganda",
    "Kiev, Ucrania",
    "Abu Dhabi, Emiratos Árabes Unidos",
    "Londres, Reino Unido",
    "Washington D. C., Estados Unidos",
    "Montevideo, Uruguay",
    "Taskent, Uzbekistán",
    "Port Vila, Vanuatu",
    "Caracas, Venezuela",
    "Hanoi, Vietnam",
    "Sana'a, Yemen",
    "Lusaka, Zambia",
    "Harare, Zimbabue"
];

const cityMap = {
    "Kabul, Afganistán": "Kabul,AF",
    "Tirana, Albania": "Tirana,AL",
    "Argel, Argelia": "Argel, DZ",
    "Andorra la Vella, Andorra": "Andorra la Vella,AD",
    "Luanda, Angola": "Luanda,AO",
    "Saint John's, Antigua y Barbuda": "Saint Johns,AG",
    "Buenos Aires, Argentina": "Buenos Aires,AR",
    "Ereván, Armenia": "Erevan,AM",
    "Canberra, Australia": "Canberra,AU",
    "Viena, Austria": "Viena,AT",
    "Bakú, Azerbaiyán": "Bakú,AZ",
    "Nassau, Bahamas": "Nassau,BS",
    "Manama, Baréin": "Manama,BH",
    "Daca, Bangladesh": "Daca,BD",
    "Bridgetown, Barbados": "Bridgetown,BB",
    "Minsk, Bielorrusia": "Minsk,BY",
    "Bruselas, Bélgica": "Brussels,BE",
    "Belmopán, Belice": "Belmopán,BZ",
    "Porto-Novo, Benín": "Porto-Novo,BJ",
    "Thimphu, Bután": "Thimphu,BT",
    "Sucre, Bolivia": "Sucre,BO",
    "Sarajevo, Bosnia y Herzegovina": "Sarajevo,BA",
    "Gaborone, Botsuana": "Gaborone,BW",
    "Brasília, Brasil": "Brasília,BR",
    "Bandar Seri Begawan, Brunéi": "Bandar Seri Begawan,BN",
    "Sofía, Bulgaria": "Sofía,BG",
    "Uagadugú, Burkina Faso": "Uagadugú,BF",
    "Gitega, Burundi": "Gitega,BI",
    "Praia, Cabo Verde": "Praia,CV",
    "Phnom Penh, Camboya": "Phnom Penh,KH",
    "Yaundé, Camerún": "Yaunde,CM",
    "Ottawa, Canadá": "Ottawa,CA",
    "Bangui, República Centroafricana": "Bangui,CF",
    "Yamena, Chad": "N'Djamena,TD",
    "Santiago, Chile": "Santiago,CL",
    "Pekín, China": "Pekin,CN",
    "Bogotá, Colombia": "Bogotá,CO",
    "Moroni, Comoras": "Moroni,KM",
    "Kinshasa, República Democrática del Congo": "Kinshasa,CD",
    "Brazzaville, República del Congo": "Brazzaville,CG",
    "San José, Costa Rica": "San José,CR",
    "Zagreb, Croacia": "Zagreb,HR",
    "La Habana, Cuba": "La Habana,CU",
    "Nicosia, Chipre": "Nicosia,CY",
    "Praga, República Checa": "Praga,CZ",
    "Copenhague, Dinamarca": "Copenhague,DK",
    "Yibuti, Yibuti": "Djibouti,DJ",
    "Roseau, Dominica": "Roseau,DM",
    "Santo Domingo, República Dominicana": "Santo Domingo,DO",
    "Quito, Ecuador": "Quito,EC",
    "El Cairo, Egipto": "Cairo,EG",
    "San Salvador, El Salvador": "San Salvador,SV",
    "Malabo, Guinea Ecuatorial": "Malabo,GQ",
    "Asmara, Eritrea": "Asmara,ER",
    "Tallin, Estonia": "Tallinn,EE",
    "Mbabane, Esuatini": "Mbabane,SZ",
    "Adís Abeba, Etiopía": "Adís Abeba,ET",
    "Suva, Fiyi": "Suva,FJ",
    "Helsinki, Finlandia": "Helsinki,FI",
    "París, Francia": "París,FR",
    "Libreville, Gabón": "Libreville,GA",
    "Banjul, Gambia": "Banjul,GM",
    "Tiflis, Georgia": "Tiflis,GE",
    "Berlín, Alemania": "Berlín,DE",
    "Acra, Ghana": "Acra,GH",
    "Atenas, Grecia": "Atenas,GR",
    "Saint George's, Granada": "Saint George's,GD",
    "Ciudad de Guatemala, Guatemala": "Ciudad de Guatemala,GT",
    "Conakri, Guinea": "Conakry,GN",
    "Bissau, Guinea-Bisáu": "Bissau,GW",
    "Georgetown, Guyana": "Georgetown,GY",
    "Puerto Príncipe, Haití": "Port-au-Prince,HT",
    "Tegucigalpa, Honduras": "Tegucigalpa,HN",
    "Budapest, Hungría": "Budapest,HU",
    "Reikiavik, Islandia": "Reykjavik,IS",
    "Nueva Delhi, India": "New Delhi,IN",
    "Jakarta, Indonesia": "Jakarta,ID",
    "Teherán, Irán": "Teherán,IR",
    "Bagdad, Irak": "Bagdad,IQ",
    "Dublín, Irlanda": "Dublín,IE",
    "Jerusalén, Israel": "Jerusalem,IL",
    "Roma, Italia": "Roma,IT",
    "Kingston, Jamaica": "Kingston,JM",
    "Tokio, Japón": "Tokio,JP",
    "Amán, Jordania": "Amán,JO",
    "Nairobi, Kenia": "Nairobi,KE",
    "Tarawa, Kiribati": "Tarawa,KI",
    "Pionyang, Corea del Norte": "Pyongyang,KP",
    "Seúl, Corea del Sur": "Seúl,KR",
    "Pristina, Kosovo": "Pristina,XK",
    "Kuwait, Kuwait": "Kuwait,KW",
    "Biskek, Kirguistán": "Biskek,KG",
    "Vientián, Laos": "Vientián,LA",
    "Riga, Letonia": "Riga,LV",
    "Beirut, Líbano": "Beirut,LB",
    "Maseru, Lesoto": "Maseru,LS",
    "Monrovia, Liberia": "Monrovia,LR",
    "Trípoli, Libia": "Trípoli,LY",
    "Vaduz, Liechtenstein": "Vaduz,LI",
    "Vilna, Lituania": "Vilna,LT",
    "Luxemburgo, Luxemburgo": "Luxemburgo,LU",
    "Antananarivo, Madagascar": "Antananarivo,MG",
    "Lilongüe, Malaui": "Lilongwe,MW",
    "Kuala Lumpur, Malasia": "Kuala Lumpur,MY",
    "Malé, Maldivas": "Malé,MV",
    "Bamako, Malí": "Bamako,ML",
    "La Valeta, Malta": "Valletta,MT",
    "Majuro, Islas Marshall": "Majuro,MH",
    "Nuakchot, Mauritania": "Nouakchott,MR",
    "Port Louis, Mauricio": "Port Louis,MU",
    "Ciudad de México, México": "Ciudad de México,MX",
    "Palikir, Micronesia": "Palikir,FM",
    "Chisináu, Moldavia": "Chișinău,MD",
    "Mónaco, Mónaco": "Mónaco,MC",
    "Ulán Bator, Mongolia": "Ulaanbaatar,MN",
    "Podgorica, Montenegro": "Podgorica,ME",
    "Rabat, Marruecos": "Rabat,MA",
    "Maputo, Mozambique": "Maputo,MZ",
    "Naypidó, Birmania": "Myanmar,MM",
    "Windhoek, Namibia": "Windhoek,NA",
    "Katmandú, Nepal": "Katmandú,NP",
    "Ámsterdam, Países Bajos": "Amsterdam,NL",
    "Wellington, Nueva Zelanda": "Wellington,NZ",
    "Managua, Nicaragua": "Managua,NI",
    "Niamey, Níger": "Niamey,NE",
    "Abuya, Nigeria": "Abuja,NG",
    "Oslo, Noruega": "Oslo,NO",
    "Mascate, Omán": "Mascate,OM",
    "Islamabad, Pakistán": "Islamabad,PK",
    "República de Palaos, Palaos": "Republic of Palau,PW",
    "Ciudad de Panamá, Panamá": "Ciudad de Panamá,PA",
    "Puerto Moresby, Papúa Nueva Guinea": "Port Moresby,PG",
    "Asunción, Paraguay": "Asunción,PY",
    "Lima, Perú": "Lima,PE",
    "Manila, Filipinas": "Manila,PH",
    "Varsovia, Polonia": "Varsovia,PL",
    "Lisboa, Portugal": "Lisboa,PT",
    "Doha, Catar": "Doha,QA",
    "Bucarest, Rumania": "Bucarest,RO",
    "Moscú, Rusia": "Moscow,RU",
    "Kigali, Ruanda": "Kigali,RW",
    "Basseterre, San Cristóbal y Nieves": "Basseterre,KN",
    "Castries, Santa Lucía": "Castries,LC",
    "Kingstown, San Vicente y las Granadinas": "Kingstown,VC",
    "Apia, Samoa": "Apia,WS",
    "San Marino, San Marino": "San Marino,SM",
    "Riad, Arabia Saudita": "Riad,SA",
    "Dakar, Senegal": "Dakar,SN",
    "Belgrado, Serbia": "Belgrado,RS",
    "Victoria, Seychelles": "Victoria,SC",
    "Freetown, Sierra Leona": "Freetown,SL",
    "Singapur, Singapur": "Singapur,SG",
    "Bratislava, Eslovaquia": "Bratislava,SK",
    "Liubliana, Eslovenia": "Liubliana,SI",
    "Honiara, Islas Salomón": "Honiara,SB",
    "Mogadiscio, Somalia": "Mogadiscio,SO",
    "Pretoria, Sudáfrica": "Pretoria,ZA",
    "Juba, Sudán del Sur": "Juba,SS",
    "Madrid, España": "Madrid,ES",
    "Sri Jayawardenepura Kotte, Sri Lanka": "Sri Jayawardenepura Kotte,LK",
    "Jartum, Sudán": "Khartoum,SD",
    "Paramaribo, Surinam": "Paramaribo,SR",
    "Estocolmo, Suecia": "Estocolmo,SE",
    "Berna, Suiza": "Berna,CH",
    "Damasco, Siria": "Damasco,SY",
    "Taipéi, Taiwán": "Taipei,TW",
    "Dusambé, Tayikistán": "Dushanbe,TJ",
    "Dodoma, Tanzania": "Dodoma,TZ",
    "Bangkok, Tailandia": "Bangkok,TH",
    "Lomé, Togo": "Lomé,TG",
    "Nukualofa, Tonga": "Nukualofa,TO",
    "Puerto España, Trinidad y Tobago": "Port of Spain,TT",
    "Túnez, Túnez": "Tunis,TN",
    "Ankara, Turquía": "Ankara,TR",
    "Asjabad, Turkmenistán": "Ashgabat,TM",
    "Funafuti, Tuvalu": "Funafuti,TV",
    "Kampala, Uganda": "Kampala,UG",
    "Kiev, Ucrania": "Kiev,UA",
    "Abu Dhabi, Emiratos Árabes Unidos": "Abu Dhabi,AE",
    "Londres, Reino Unido": "Londres,GB",
    "Washington D. C., Estados Unidos": "Washington D.C.,US",
    "Montevideo, Uruguay": "Montevideo,UY",
    "Taskent, Uzbekistán": "Taskent,UZ",
    "Port Vila, Vanuatu": "Port Vila,VU",
    "Caracas, Venezuela": "Caracas,VE",
    "Hanoi, Vietnam": "Hanoi,VN",
    "Saná, Yemen": "Saná,YE",
    "Lusaka, Zambia": "Lusaka,ZM",
    "Harare, Zimbabue": "Harare,ZW"
};

const countryCode = (country) => {
    switch (country) {
        case 'US':
            return 'Estados Unidos';
        case 'AF':
            return 'Afganistán';
        case 'AL':
            return 'Albania';
        case 'DZ':
            return 'Argelia';
        case 'AD':
            return 'Andorra';
        case 'AO':
            return 'Angola';
        case 'AG':
            return 'Antigua y Barbuda';
        case 'AR':
            return 'Argentina';
        case 'AM':
            return 'Armenia';
        case 'AU':
            return 'Australia';
        case 'AT':
            return 'Austria';
        case 'AZ':
            return 'Azerbaiyán';
        case 'BS':
            return 'Bahamas';
        case 'BH':
            return 'Baréin';
        case 'BD':
            return 'Bangladesh';
        case 'BB':
            return 'Barbados';
        case 'BY':
            return 'Bielorrusia';
        case 'BE':
            return 'Bélgica';
        case 'BZ':
            return 'Belice';
        case 'BJ':
            return 'Benín';
        case 'BT':
            return 'Bután';
        case 'BG':
            return 'Bulgaria';
        case 'BO':
            return 'Bolivia';
        case 'BA':
            return 'Bosnia y Herzegovina';
        case 'BW':
            return 'Botsuana';
        case 'BR':
            return 'Brasil';
        case 'BN':
            return 'Brunéi';
        case 'BF':
            return 'Burkina Faso';
        case 'BI':
            return 'Burundi';
        case 'CV':
            return 'Cabo Verde';
        case 'KH':
            return 'Camboya';
        case 'CM':
            return 'Camerún';
        case 'CA':
            return 'Canadá';
        case 'CF':
            return 'República Centroafricana';
        case 'TD':
            return 'Chad';
        case 'CL':
            return 'Chile';
        case 'CN':
            return 'China';
        case 'CO':
            return 'Colombia';
        case 'KM':
            return 'Comoras';
        case 'CD':
            return 'República Democrática del Congo';
        case 'CG':
            return 'República del Congo';
        case 'CR':
            return 'Costa Rica';
        case 'HR':
            return 'Croacia';
        case 'CU':
            return 'Cuba';
        case 'CY':
            return 'Chipre';
        case 'CZ':
            return 'República Checa';
        case 'DK':
            return 'Dinamarca';
        case 'DJ':
            return 'Yibuti';
        case 'DM':
            return 'Dominica';
        case 'DO':
            return 'República Dominicana';
        case 'EC':
            return 'Ecuador';
        case 'EG':
            return 'Egipto';
        case 'SV':
            return 'El Salvador';
        case 'GQ':
            return 'Guinea Ecuatorial';
        case 'ER':
            return 'Eritrea';
        case 'EE':
            return 'Estonia';
        case 'SZ':
            return 'Esuatini';
        case 'ET':
            return 'Etiopía';
        case 'FJ':
            return 'Fiyi';
        case 'FI':
            return 'Finlandia';
        case 'FR':
            return 'Francia';
        case 'GA':
            return 'Gabón';
        case 'GM':
            return 'Gambia';
        case 'GE':
            return 'Georgia';
        case 'DE':
            return 'Alemania';
        case 'GH':
            return 'Ghana';
        case 'GR':
            return 'Grecia';
        case 'GD':
            return 'Granada';
        case 'GT':
            return 'Guatemala';
        case 'GN':
            return 'Guinea';
        case 'GW':
            return 'Guinea-Bisáu';
        case 'GY':
            return 'Guyana';
        case 'HT':
            return 'Haití';
        case 'HN':
            return 'Honduras';
        case 'HU':
            return 'Hungría';
        case 'IS':
            return 'Islandia';
        case 'IN':
            return 'India';
        case 'ID':
            return 'Indonesia';
        case 'IR':
            return 'Irán';
        case 'IQ':
            return 'Irak';
        case 'IE':
            return 'Irlanda';
        case 'IL':
            return 'Israel';
        case 'IT':
            return 'Italia';
        case 'JM':
            return 'Jamaica';
        case 'JP':
            return 'Japón';
        case 'JO':
            return 'Jordania';
        case 'KE':
            return 'Kenia';
        case 'KI':
            return 'Kiribati';
        case 'KP':
            return 'Corea del Norte';
        case 'KR':
            return 'Corea del Sur';
        case 'XK':
            return 'Kosovo';
        case 'KW':
            return 'Kuwait';
        case 'KG':
            return 'Kirguistán';
        case 'LA':
            return 'Laos';
        case 'LV':
            return 'Letonia';
        case 'LB':
            return 'Líbano';
        case 'LS':
            return 'Lesoto';
        case 'LR':
            return 'Liberia';
        case 'LY':
            return 'Libia';
        case 'LI':
            return 'Liechtenstein';
        case 'LT':
            return 'Lituania';
        case 'LU':
            return 'Luxemburgo';
        case 'MG':
            return 'Madagascar';
        case 'MW':
            return 'Malaui';
        case 'MY':
            return 'Malasia';
        case 'MV':
            return 'Maldivas';
        case 'ML':
            return 'Malí';
        case 'MT':
            return 'Malta';
        case 'MH':
            return 'Islas Marshall';
        case 'MR':
            return 'Mauritania';
        case 'MU':
            return 'Mauricio';
        case 'MX':
            return 'México';
        case 'FM':
            return 'Micronesia';
        case 'MD':
            return 'Moldavia';
        case 'MC':
            return 'Mónaco';
        case 'MN':
            return 'Mongolia';
        case 'ME':
            return 'Montenegro';
        case 'MA':
            return 'Marruecos';
        case 'MZ':
            return 'Mozambique';
        case 'MM':
            return 'Birmania';
        case 'NA':
            return 'Namibia';
        case 'NP':
            return 'Nepal';
        case 'NL':
            return 'Países Bajos';
        case 'NZ':
            return 'Nueva Zelanda';
        case 'NI':
            return 'Nicaragua';
        case 'NE':
            return 'Níger';
        case 'NG':
            return 'Nigeria';
        case 'NO':
            return 'Noruega';
        case 'OM':
            return 'Omán';
        case 'PK':
            return 'Pakistán';
        case 'PW':
            return 'Palaos';
        case 'PA':
            return 'Panamá';
        case 'PG':
            return 'Papúa Nueva Guinea';
        case 'PY':
            return 'Paraguay';
        case 'PE':
            return 'Perú';
        case 'PH':
            return 'Filipinas';
        case 'PL':
            return 'Polonia';
        case 'PT':
            return 'Portugal';
        case 'QA':
            return 'Catar';
        case 'RO':
            return 'Rumania';
        case 'RU':
            return 'Rusia';
        case 'RW':
            return 'Ruanda';
        case 'KN':
            return 'San Cristóbal y Nieves';
        case 'LC':
            return 'Santa Lucía';
        case 'VC':
            return 'San Vicente y las Granadinas';
        case 'WS':
            return 'Samoa';
        case 'SM':
            return 'San Marino';
        case 'SA':
            return 'Arabia Saudita';
        case 'SN':
            return 'Senegal';
        case 'RS':
            return 'Serbia';
        case 'SC':
            return 'Seychelles';
        case 'SL':
            return 'Sierra Leona';
        case 'SG':
            return 'Singapur';
        case 'SK':
            return 'Eslovaquia';
        case 'SI':
            return 'Eslovenia';
        case 'SB':
            return 'Islas Salomón';
        case 'SO':
            return 'Somalia';
        case 'ZA':
            return 'Sudáfrica';
        case 'SS':
            return 'Sudán del Sur';
        case 'ES':
            return 'España';
        case 'LK':
            return 'Sri Lanka';
        case 'SD':
            return 'Sudán';
        case 'SR':
            return 'Surinam';
        case 'SE':
            return 'Suecia';
        case 'CH':
            return 'Suiza';
        case 'SY':
            return 'Siria';
        case 'TW':
            return 'Taiwán';
        case 'TJ':
            return 'Tayikistán';
        case 'TZ':
            return 'Tanzania';
        case 'TH':
            return 'Tailandia';
        case 'TG':
            return 'Togo';
        case 'TO':
            return 'Tonga';
        case 'TT':
            return 'Trinidad y Tobago';
        case 'TN':
            return 'Túnez';
        case 'TR':
            return 'Turquia';
        case 'TM':
            return 'Turkmenistán';
        case 'TV':
            return 'Tuvalu';
        case 'UG':
            return 'Uganda';
        case 'UA':
            return 'Ucrania';
        case 'AE':
            return 'Emiratos Árabes Unidos';
        case 'GB':
            return 'Reino Unido';
        case 'UY':
            return 'Uruguay';
        case 'UZ':
            return 'Uzbekistán';
        case 'VU':
            return 'Vanuatu';
        case 'VE':
            return 'Venezuela';
        case 'VN':
            return 'Vietnam';
        case 'YE':
            return 'Yemen';
        case 'ZM':
            return 'Zambia';
        case 'ZW':
            return 'Zimbabue';
        default:
            return 'No se pudo encontrar el País';
    };
}