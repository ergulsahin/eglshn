document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // =================================================================================
    // ÇOK ÖNEMLİ: KENDİ VERİNİ EKLEME ADIMI
    // =================================================================================
    const kuyuVerisi = [
    {
        "kuyu_id": "1",
        "kuyu_adi": "1",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "10",
        "kuyu_adi": "10",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "100",
        "kuyu_adi": "100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1000",
        "kuyu_adi": "1000",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1001",
        "kuyu_adi": "1001",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1002",
        "kuyu_adi": "1002",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1003",
        "kuyu_adi": "1003",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1004",
        "kuyu_adi": "1004",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1005",
        "kuyu_adi": "1005",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1006",
        "kuyu_adi": "1006",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1007",
        "kuyu_adi": "1007",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1008",
        "kuyu_adi": "1008",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1009",
        "kuyu_adi": "1009",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "101",
        "kuyu_adi": "101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1010",
        "kuyu_adi": "1010",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1011",
        "kuyu_adi": "1011",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1012",
        "kuyu_adi": "1012",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1013",
        "kuyu_adi": "1013",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1014",
        "kuyu_adi": "1014",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1015",
        "kuyu_adi": "1015",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1016",
        "kuyu_adi": "1016",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1017",
        "kuyu_adi": "1017",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1018",
        "kuyu_adi": "1018",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1019",
        "kuyu_adi": "1019",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "102",
        "kuyu_adi": "102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1020",
        "kuyu_adi": "1020",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1021",
        "kuyu_adi": "1021",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1022",
        "kuyu_adi": "1022",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1023",
        "kuyu_adi": "1023",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1024",
        "kuyu_adi": "1024",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1025",
        "kuyu_adi": "1025",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1026",
        "kuyu_adi": "1026",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1027",
        "kuyu_adi": "1027",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1028",
        "kuyu_adi": "1028",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1029",
        "kuyu_adi": "1029",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "103",
        "kuyu_adi": "103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1030",
        "kuyu_adi": "1030",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1031",
        "kuyu_adi": "1031",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1032",
        "kuyu_adi": "1032",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1033",
        "kuyu_adi": "1033",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1034",
        "kuyu_adi": "1034",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1035",
        "kuyu_adi": "1035",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1036",
        "kuyu_adi": "1036",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1037",
        "kuyu_adi": "1037",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1038",
        "kuyu_adi": "1038",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1039",
        "kuyu_adi": "1039",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "104",
        "kuyu_adi": "104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1040",
        "kuyu_adi": "1040",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1041",
        "kuyu_adi": "1041",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1042",
        "kuyu_adi": "1042",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1043",
        "kuyu_adi": "1043",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1044",
        "kuyu_adi": "1044",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1045",
        "kuyu_adi": "1045",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1046",
        "kuyu_adi": "1046",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1047",
        "kuyu_adi": "1047",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1048",
        "kuyu_adi": "1048",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1049",
        "kuyu_adi": "1049",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "105",
        "kuyu_adi": "105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1050",
        "kuyu_adi": "1050",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1051",
        "kuyu_adi": "1051",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1052",
        "kuyu_adi": "1052",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1053",
        "kuyu_adi": "1053",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1054",
        "kuyu_adi": "1054",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1055",
        "kuyu_adi": "1055",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1056",
        "kuyu_adi": "1056",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1057",
        "kuyu_adi": "1057",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1058",
        "kuyu_adi": "1058",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1059",
        "kuyu_adi": "1059",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "106",
        "kuyu_adi": "106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1060",
        "kuyu_adi": "1060",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1061",
        "kuyu_adi": "1061",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1062",
        "kuyu_adi": "1062",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1063",
        "kuyu_adi": "1063",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1064",
        "kuyu_adi": "1064",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1065",
        "kuyu_adi": "1065",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1066",
        "kuyu_adi": "1066",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1067",
        "kuyu_adi": "1067",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1068",
        "kuyu_adi": "1068",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1069",
        "kuyu_adi": "1069",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "107",
        "kuyu_adi": "107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1070",
        "kuyu_adi": "1070",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1071",
        "kuyu_adi": "1071",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1072",
        "kuyu_adi": "1072",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1073",
        "kuyu_adi": "1073",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1074",
        "kuyu_adi": "1074",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1075",
        "kuyu_adi": "1075",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1076",
        "kuyu_adi": "1076",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1077",
        "kuyu_adi": "1077",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1078",
        "kuyu_adi": "1078",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1079",
        "kuyu_adi": "1079",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "108",
        "kuyu_adi": "108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1080",
        "kuyu_adi": "1080",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1081",
        "kuyu_adi": "1081",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1082",
        "kuyu_adi": "1082",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1083",
        "kuyu_adi": "1083",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1084",
        "kuyu_adi": "1084",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1085",
        "kuyu_adi": "1085",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1086",
        "kuyu_adi": "1086",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1087",
        "kuyu_adi": "1087",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1088",
        "kuyu_adi": "1088",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1089",
        "kuyu_adi": "1089",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "109",
        "kuyu_adi": "109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1090",
        "kuyu_adi": "1090",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1091",
        "kuyu_adi": "1091",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1092",
        "kuyu_adi": "1092",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1093",
        "kuyu_adi": "1093",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1094",
        "kuyu_adi": "1094",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1095",
        "kuyu_adi": "1095",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1096",
        "kuyu_adi": "1096",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1097",
        "kuyu_adi": "1097",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1098",
        "kuyu_adi": "1098",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1099",
        "kuyu_adi": "1099",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "11",
        "kuyu_adi": "11",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "110",
        "kuyu_adi": "110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1100",
        "kuyu_adi": "1100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1101",
        "kuyu_adi": "1101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1102",
        "kuyu_adi": "1102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1103",
        "kuyu_adi": "1103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1104",
        "kuyu_adi": "1104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1105",
        "kuyu_adi": "1105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1106",
        "kuyu_adi": "1106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1107",
        "kuyu_adi": "1107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1108",
        "kuyu_adi": "1108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1109",
        "kuyu_adi": "1109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "111",
        "kuyu_adi": "111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1110",
        "kuyu_adi": "1110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1111",
        "kuyu_adi": "1111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1112",
        "kuyu_adi": "1112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1113",
        "kuyu_adi": "1113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1114",
        "kuyu_adi": "1114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1115",
        "kuyu_adi": "1115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1116",
        "kuyu_adi": "1116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1117",
        "kuyu_adi": "1117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1118",
        "kuyu_adi": "1118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1119",
        "kuyu_adi": "1119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "112",
        "kuyu_adi": "112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1120",
        "kuyu_adi": "1120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1121",
        "kuyu_adi": "1121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1122",
        "kuyu_adi": "1122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1123",
        "kuyu_adi": "1123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1124",
        "kuyu_adi": "1124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1125",
        "kuyu_adi": "1125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1126",
        "kuyu_adi": "1126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1127",
        "kuyu_adi": "1127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1128",
        "kuyu_adi": "1128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1129",
        "kuyu_adi": "1129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "113",
        "kuyu_adi": "113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1130",
        "kuyu_adi": "1130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1131",
        "kuyu_adi": "1131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1132",
        "kuyu_adi": "1132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1133",
        "kuyu_adi": "1133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1134",
        "kuyu_adi": "1134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1135",
        "kuyu_adi": "1135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1136",
        "kuyu_adi": "1136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1137",
        "kuyu_adi": "1137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1138",
        "kuyu_adi": "1138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1139",
        "kuyu_adi": "1139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "114",
        "kuyu_adi": "114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1140",
        "kuyu_adi": "1140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1141",
        "kuyu_adi": "1141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1142",
        "kuyu_adi": "1142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1143",
        "kuyu_adi": "1143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1144",
        "kuyu_adi": "1144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1145",
        "kuyu_adi": "1145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1146",
        "kuyu_adi": "1146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1147",
        "kuyu_adi": "1147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1148",
        "kuyu_adi": "1148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1149",
        "kuyu_adi": "1149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "115",
        "kuyu_adi": "115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1150",
        "kuyu_adi": "1150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1151",
        "kuyu_adi": "1151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1152",
        "kuyu_adi": "1152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1153",
        "kuyu_adi": "1153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1154",
        "kuyu_adi": "1154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1155",
        "kuyu_adi": "1155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1156",
        "kuyu_adi": "1156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1157",
        "kuyu_adi": "1157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1158",
        "kuyu_adi": "1158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1159",
        "kuyu_adi": "1159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "116",
        "kuyu_adi": "116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1160",
        "kuyu_adi": "1160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1161",
        "kuyu_adi": "1161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1162",
        "kuyu_adi": "1162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1163",
        "kuyu_adi": "1163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1164",
        "kuyu_adi": "1164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1165",
        "kuyu_adi": "1165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1166",
        "kuyu_adi": "1166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1167",
        "kuyu_adi": "1167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1168",
        "kuyu_adi": "1168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1169",
        "kuyu_adi": "1169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "117",
        "kuyu_adi": "117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1170",
        "kuyu_adi": "1170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1171",
        "kuyu_adi": "1171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1172",
        "kuyu_adi": "1172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1173",
        "kuyu_adi": "1173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1174",
        "kuyu_adi": "1174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1175",
        "kuyu_adi": "1175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1176",
        "kuyu_adi": "1176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1177",
        "kuyu_adi": "1177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1178",
        "kuyu_adi": "1178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1179",
        "kuyu_adi": "1179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "118",
        "kuyu_adi": "118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1180",
        "kuyu_adi": "1180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1181",
        "kuyu_adi": "1181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1182",
        "kuyu_adi": "1182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1183",
        "kuyu_adi": "1183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1184",
        "kuyu_adi": "1184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1185",
        "kuyu_adi": "1185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1186",
        "kuyu_adi": "1186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1187",
        "kuyu_adi": "1187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1188",
        "kuyu_adi": "1188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1189",
        "kuyu_adi": "1189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "119",
        "kuyu_adi": "119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1190",
        "kuyu_adi": "1190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1191",
        "kuyu_adi": "1191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1192",
        "kuyu_adi": "1192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1193",
        "kuyu_adi": "1193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1194",
        "kuyu_adi": "1194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1195",
        "kuyu_adi": "1195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1196",
        "kuyu_adi": "1196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1197",
        "kuyu_adi": "1197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1198",
        "kuyu_adi": "1198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1199",
        "kuyu_adi": "1199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "12",
        "kuyu_adi": "12",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "120",
        "kuyu_adi": "120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1200",
        "kuyu_adi": "1200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1201",
        "kuyu_adi": "1201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1202",
        "kuyu_adi": "1202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1203",
        "kuyu_adi": "1203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1204",
        "kuyu_adi": "1204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1205",
        "kuyu_adi": "1205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1206",
        "kuyu_adi": "1206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1207",
        "kuyu_adi": "1207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1208",
        "kuyu_adi": "1208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1209",
        "kuyu_adi": "1209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "121",
        "kuyu_adi": "121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1210",
        "kuyu_adi": "1210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1211",
        "kuyu_adi": "1211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1212",
        "kuyu_adi": "1212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1213",
        "kuyu_adi": "1213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1214",
        "kuyu_adi": "1214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1215",
        "kuyu_adi": "1215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1216",
        "kuyu_adi": "1216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1217",
        "kuyu_adi": "1217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1218",
        "kuyu_adi": "1218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1219",
        "kuyu_adi": "1219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "122",
        "kuyu_adi": "122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1220",
        "kuyu_adi": "1220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1221",
        "kuyu_adi": "1221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1222",
        "kuyu_adi": "1222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1223",
        "kuyu_adi": "1223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1224",
        "kuyu_adi": "1224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1225",
        "kuyu_adi": "1225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1226",
        "kuyu_adi": "1226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1227",
        "kuyu_adi": "1227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1228",
        "kuyu_adi": "1228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1229",
        "kuyu_adi": "1229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "123",
        "kuyu_adi": "123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1230",
        "kuyu_adi": "1230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1231",
        "kuyu_adi": "1231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1232",
        "kuyu_adi": "1232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1233",
        "kuyu_adi": "1233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1234",
        "kuyu_adi": "1234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1235",
        "kuyu_adi": "1235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1236",
        "kuyu_adi": "1236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1237",
        "kuyu_adi": "1237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1238",
        "kuyu_adi": "1238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1239",
        "kuyu_adi": "1239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "124",
        "kuyu_adi": "124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1240",
        "kuyu_adi": "1240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1241",
        "kuyu_adi": "1241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1242",
        "kuyu_adi": "1242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1243",
        "kuyu_adi": "1243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1244",
        "kuyu_adi": "1244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1245",
        "kuyu_adi": "1245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1246",
        "kuyu_adi": "1246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1247",
        "kuyu_adi": "1247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1248",
        "kuyu_adi": "1248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1249",
        "kuyu_adi": "1249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "125",
        "kuyu_adi": "125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1250",
        "kuyu_adi": "1250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1251",
        "kuyu_adi": "1251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1252",
        "kuyu_adi": "1252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1253",
        "kuyu_adi": "1253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1254",
        "kuyu_adi": "1254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1255",
        "kuyu_adi": "1255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1256",
        "kuyu_adi": "1256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1257",
        "kuyu_adi": "1257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1258",
        "kuyu_adi": "1258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1259",
        "kuyu_adi": "1259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "126",
        "kuyu_adi": "126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1260",
        "kuyu_adi": "1260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1261",
        "kuyu_adi": "1261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1262",
        "kuyu_adi": "1262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1263",
        "kuyu_adi": "1263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1264",
        "kuyu_adi": "1264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1265",
        "kuyu_adi": "1265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1266",
        "kuyu_adi": "1266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1267",
        "kuyu_adi": "1267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1268",
        "kuyu_adi": "1268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1269",
        "kuyu_adi": "1269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "127",
        "kuyu_adi": "127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1270",
        "kuyu_adi": "1270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1271",
        "kuyu_adi": "1271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1272",
        "kuyu_adi": "1272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1273",
        "kuyu_adi": "1273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1274",
        "kuyu_adi": "1274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1275",
        "kuyu_adi": "1275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1276",
        "kuyu_adi": "1276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1277",
        "kuyu_adi": "1277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1278",
        "kuyu_adi": "1278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1279",
        "kuyu_adi": "1279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "128",
        "kuyu_adi": "128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1280",
        "kuyu_adi": "1280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1281",
        "kuyu_adi": "1281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1282",
        "kuyu_adi": "1282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1283",
        "kuyu_adi": "1283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1284",
        "kuyu_adi": "1284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1285",
        "kuyu_adi": "1285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1286",
        "kuyu_adi": "1286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1287",
        "kuyu_adi": "1287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1288",
        "kuyu_adi": "1288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1289",
        "kuyu_adi": "1289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "129",
        "kuyu_adi": "129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1290",
        "kuyu_adi": "1290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1291",
        "kuyu_adi": "1291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1292",
        "kuyu_adi": "1292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1293",
        "kuyu_adi": "1293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1294",
        "kuyu_adi": "1294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1295",
        "kuyu_adi": "1295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1296",
        "kuyu_adi": "1296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1297",
        "kuyu_adi": "1297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1298",
        "kuyu_adi": "1298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1299",
        "kuyu_adi": "1299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "13",
        "kuyu_adi": "13",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "130",
        "kuyu_adi": "130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1300",
        "kuyu_adi": "1300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1301",
        "kuyu_adi": "1301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1302",
        "kuyu_adi": "1302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1303",
        "kuyu_adi": "1303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1304",
        "kuyu_adi": "1304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1305",
        "kuyu_adi": "1305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1306",
        "kuyu_adi": "1306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1307",
        "kuyu_adi": "1307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1308",
        "kuyu_adi": "1308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1309",
        "kuyu_adi": "1309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "131",
        "kuyu_adi": "131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1310",
        "kuyu_adi": "1310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1311",
        "kuyu_adi": "1311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1312",
        "kuyu_adi": "1312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1313",
        "kuyu_adi": "1313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1314",
        "kuyu_adi": "1314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1315",
        "kuyu_adi": "1315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1316",
        "kuyu_adi": "1316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1317",
        "kuyu_adi": "1317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1318",
        "kuyu_adi": "1318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1319",
        "kuyu_adi": "1319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "132",
        "kuyu_adi": "132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1320",
        "kuyu_adi": "1320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1321",
        "kuyu_adi": "1321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1322",
        "kuyu_adi": "1322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1323",
        "kuyu_adi": "1323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1324",
        "kuyu_adi": "1324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1325",
        "kuyu_adi": "1325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1326",
        "kuyu_adi": "1326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1327",
        "kuyu_adi": "1327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1328",
        "kuyu_adi": "1328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1329",
        "kuyu_adi": "1329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "133",
        "kuyu_adi": "133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1330",
        "kuyu_adi": "1330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1331",
        "kuyu_adi": "1331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1332",
        "kuyu_adi": "1332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1333",
        "kuyu_adi": "1333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1334",
        "kuyu_adi": "1334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1335",
        "kuyu_adi": "1335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1336",
        "kuyu_adi": "1336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1337",
        "kuyu_adi": "1337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1338",
        "kuyu_adi": "1338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1339",
        "kuyu_adi": "1339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "134",
        "kuyu_adi": "134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1340",
        "kuyu_adi": "1340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1341",
        "kuyu_adi": "1341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1342",
        "kuyu_adi": "1342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1343",
        "kuyu_adi": "1343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1344",
        "kuyu_adi": "1344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1345",
        "kuyu_adi": "1345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1346",
        "kuyu_adi": "1346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1347",
        "kuyu_adi": "1347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1348",
        "kuyu_adi": "1348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1349",
        "kuyu_adi": "1349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "135",
        "kuyu_adi": "135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1350",
        "kuyu_adi": "1350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1351",
        "kuyu_adi": "1351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1352",
        "kuyu_adi": "1352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1353",
        "kuyu_adi": "1353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1354",
        "kuyu_adi": "1354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1355",
        "kuyu_adi": "1355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1356",
        "kuyu_adi": "1356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1357",
        "kuyu_adi": "1357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1358",
        "kuyu_adi": "1358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1359",
        "kuyu_adi": "1359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "136",
        "kuyu_adi": "136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1360",
        "kuyu_adi": "1360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1361",
        "kuyu_adi": "1361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1362",
        "kuyu_adi": "1362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1363",
        "kuyu_adi": "1363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1364",
        "kuyu_adi": "1364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1365",
        "kuyu_adi": "1365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1366",
        "kuyu_adi": "1366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1367",
        "kuyu_adi": "1367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1368",
        "kuyu_adi": "1368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1369",
        "kuyu_adi": "1369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "137",
        "kuyu_adi": "137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1370",
        "kuyu_adi": "1370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1371",
        "kuyu_adi": "1371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1372",
        "kuyu_adi": "1372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1373",
        "kuyu_adi": "1373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1374",
        "kuyu_adi": "1374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1375",
        "kuyu_adi": "1375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1376",
        "kuyu_adi": "1376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1377",
        "kuyu_adi": "1377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1378",
        "kuyu_adi": "1378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1379",
        "kuyu_adi": "1379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "138",
        "kuyu_adi": "138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1380",
        "kuyu_adi": "1380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1381",
        "kuyu_adi": "1381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1382",
        "kuyu_adi": "1382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1383",
        "kuyu_adi": "1383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1384",
        "kuyu_adi": "1384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1385",
        "kuyu_adi": "1385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1386",
        "kuyu_adi": "1386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1387",
        "kuyu_adi": "1387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1388",
        "kuyu_adi": "1388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1389",
        "kuyu_adi": "1389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "139",
        "kuyu_adi": "139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1390",
        "kuyu_adi": "1390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1391",
        "kuyu_adi": "1391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1392",
        "kuyu_adi": "1392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1393",
        "kuyu_adi": "1393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1394",
        "kuyu_adi": "1394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1395",
        "kuyu_adi": "1395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1396",
        "kuyu_adi": "1396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1397",
        "kuyu_adi": "1397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1398",
        "kuyu_adi": "1398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1399",
        "kuyu_adi": "1399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "14",
        "kuyu_adi": "14",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "140",
        "kuyu_adi": "140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1400",
        "kuyu_adi": "1400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1401",
        "kuyu_adi": "1401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1402",
        "kuyu_adi": "1402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1403",
        "kuyu_adi": "1403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1404",
        "kuyu_adi": "1404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1405",
        "kuyu_adi": "1405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1406",
        "kuyu_adi": "1406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1407",
        "kuyu_adi": "1407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1408",
        "kuyu_adi": "1408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1409",
        "kuyu_adi": "1409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "141",
        "kuyu_adi": "141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1410",
        "kuyu_adi": "1410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1411",
        "kuyu_adi": "1411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1412",
        "kuyu_adi": "1412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1413",
        "kuyu_adi": "1413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1414",
        "kuyu_adi": "1414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1415",
        "kuyu_adi": "1415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1416",
        "kuyu_adi": "1416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1417",
        "kuyu_adi": "1417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1418",
        "kuyu_adi": "1418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1419",
        "kuyu_adi": "1419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "142",
        "kuyu_adi": "142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1420",
        "kuyu_adi": "1420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1421",
        "kuyu_adi": "1421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1422",
        "kuyu_adi": "1422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1423",
        "kuyu_adi": "1423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1424",
        "kuyu_adi": "1424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1425",
        "kuyu_adi": "1425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1426",
        "kuyu_adi": "1426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1427",
        "kuyu_adi": "1427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1428",
        "kuyu_adi": "1428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1429",
        "kuyu_adi": "1429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "143",
        "kuyu_adi": "143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1430",
        "kuyu_adi": "1430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1431",
        "kuyu_adi": "1431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1432",
        "kuyu_adi": "1432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1433",
        "kuyu_adi": "1433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1434",
        "kuyu_adi": "1434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1435",
        "kuyu_adi": "1435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1436",
        "kuyu_adi": "1436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1437",
        "kuyu_adi": "1437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1438",
        "kuyu_adi": "1438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1439",
        "kuyu_adi": "1439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "144",
        "kuyu_adi": "144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1440",
        "kuyu_adi": "1440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1441",
        "kuyu_adi": "1441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1442",
        "kuyu_adi": "1442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1443",
        "kuyu_adi": "1443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1444",
        "kuyu_adi": "1444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1445",
        "kuyu_adi": "1445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1446",
        "kuyu_adi": "1446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1447",
        "kuyu_adi": "1447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1448",
        "kuyu_adi": "1448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1449",
        "kuyu_adi": "1449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "145",
        "kuyu_adi": "145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1450",
        "kuyu_adi": "1450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1451",
        "kuyu_adi": "1451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1452",
        "kuyu_adi": "1452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1453",
        "kuyu_adi": "1453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1454",
        "kuyu_adi": "1454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1455",
        "kuyu_adi": "1455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1456",
        "kuyu_adi": "1456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1457",
        "kuyu_adi": "1457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1458",
        "kuyu_adi": "1458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1459",
        "kuyu_adi": "1459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "146",
        "kuyu_adi": "146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1460",
        "kuyu_adi": "1460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1461",
        "kuyu_adi": "1461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1462",
        "kuyu_adi": "1462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1463",
        "kuyu_adi": "1463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1464",
        "kuyu_adi": "1464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1465",
        "kuyu_adi": "1465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1466",
        "kuyu_adi": "1466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1467",
        "kuyu_adi": "1467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1468",
        "kuyu_adi": "1468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1469",
        "kuyu_adi": "1469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "147",
        "kuyu_adi": "147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1470",
        "kuyu_adi": "1470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1471",
        "kuyu_adi": "1471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1472",
        "kuyu_adi": "1472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1473",
        "kuyu_adi": "1473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1474",
        "kuyu_adi": "1474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1475",
        "kuyu_adi": "1475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1476",
        "kuyu_adi": "1476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1477",
        "kuyu_adi": "1477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1478",
        "kuyu_adi": "1478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1479",
        "kuyu_adi": "1479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "148",
        "kuyu_adi": "148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1480",
        "kuyu_adi": "1480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1481",
        "kuyu_adi": "1481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1482",
        "kuyu_adi": "1482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1483",
        "kuyu_adi": "1483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1484",
        "kuyu_adi": "1484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1485",
        "kuyu_adi": "1485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1486",
        "kuyu_adi": "1486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1487",
        "kuyu_adi": "1487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1488",
        "kuyu_adi": "1488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1489",
        "kuyu_adi": "1489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "149",
        "kuyu_adi": "149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1490",
        "kuyu_adi": "1490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1491",
        "kuyu_adi": "1491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1492",
        "kuyu_adi": "1492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1493",
        "kuyu_adi": "1493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1494",
        "kuyu_adi": "1494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1495",
        "kuyu_adi": "1495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1496",
        "kuyu_adi": "1496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1497",
        "kuyu_adi": "1497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1498",
        "kuyu_adi": "1498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1499",
        "kuyu_adi": "1499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "15",
        "kuyu_adi": "15",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "150",
        "kuyu_adi": "150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1500",
        "kuyu_adi": "1500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1501",
        "kuyu_adi": "1501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1502",
        "kuyu_adi": "1502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1503",
        "kuyu_adi": "1503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1504",
        "kuyu_adi": "1504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1505",
        "kuyu_adi": "1505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1506",
        "kuyu_adi": "1506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1507",
        "kuyu_adi": "1507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1508",
        "kuyu_adi": "1508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1509",
        "kuyu_adi": "1509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "151",
        "kuyu_adi": "151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1510",
        "kuyu_adi": "1510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1511",
        "kuyu_adi": "1511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1512",
        "kuyu_adi": "1512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1513",
        "kuyu_adi": "1513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1514",
        "kuyu_adi": "1514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1515",
        "kuyu_adi": "1515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1516",
        "kuyu_adi": "1516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1517",
        "kuyu_adi": "1517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1518",
        "kuyu_adi": "1518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1519",
        "kuyu_adi": "1519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "152",
        "kuyu_adi": "152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1520",
        "kuyu_adi": "1520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1521",
        "kuyu_adi": "1521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1522",
        "kuyu_adi": "1522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1523",
        "kuyu_adi": "1523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1524",
        "kuyu_adi": "1524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1525",
        "kuyu_adi": "1525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1526",
        "kuyu_adi": "1526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1527",
        "kuyu_adi": "1527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1528",
        "kuyu_adi": "1528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1529",
        "kuyu_adi": "1529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "153",
        "kuyu_adi": "153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1530",
        "kuyu_adi": "1530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1531",
        "kuyu_adi": "1531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1532",
        "kuyu_adi": "1532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1533",
        "kuyu_adi": "1533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1534",
        "kuyu_adi": "1534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1535",
        "kuyu_adi": "1535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1536",
        "kuyu_adi": "1536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1537",
        "kuyu_adi": "1537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1538",
        "kuyu_adi": "1538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1539",
        "kuyu_adi": "1539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "154",
        "kuyu_adi": "154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1540",
        "kuyu_adi": "1540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1541",
        "kuyu_adi": "1541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1542",
        "kuyu_adi": "1542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1543",
        "kuyu_adi": "1543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1544",
        "kuyu_adi": "1544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1545",
        "kuyu_adi": "1545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1546",
        "kuyu_adi": "1546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1547",
        "kuyu_adi": "1547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1548",
        "kuyu_adi": "1548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1549",
        "kuyu_adi": "1549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "155",
        "kuyu_adi": "155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1550",
        "kuyu_adi": "1550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1551",
        "kuyu_adi": "1551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1552",
        "kuyu_adi": "1552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1553",
        "kuyu_adi": "1553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1554",
        "kuyu_adi": "1554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1555",
        "kuyu_adi": "1555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1556",
        "kuyu_adi": "1556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1557",
        "kuyu_adi": "1557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1558",
        "kuyu_adi": "1558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1559",
        "kuyu_adi": "1559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "156",
        "kuyu_adi": "156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1560",
        "kuyu_adi": "1560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1561",
        "kuyu_adi": "1561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1562",
        "kuyu_adi": "1562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1563",
        "kuyu_adi": "1563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1564",
        "kuyu_adi": "1564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1565",
        "kuyu_adi": "1565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1566",
        "kuyu_adi": "1566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1567",
        "kuyu_adi": "1567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1568",
        "kuyu_adi": "1568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1569",
        "kuyu_adi": "1569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "157",
        "kuyu_adi": "157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1570",
        "kuyu_adi": "1570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1571",
        "kuyu_adi": "1571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1572",
        "kuyu_adi": "1572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1573",
        "kuyu_adi": "1573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1574",
        "kuyu_adi": "1574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1575",
        "kuyu_adi": "1575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1576",
        "kuyu_adi": "1576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1577",
        "kuyu_adi": "1577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1578",
        "kuyu_adi": "1578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1579",
        "kuyu_adi": "1579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "158",
        "kuyu_adi": "158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1580",
        "kuyu_adi": "1580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1581",
        "kuyu_adi": "1581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1582",
        "kuyu_adi": "1582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1583",
        "kuyu_adi": "1583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1584",
        "kuyu_adi": "1584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1585",
        "kuyu_adi": "1585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1586",
        "kuyu_adi": "1586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1587",
        "kuyu_adi": "1587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1588",
        "kuyu_adi": "1588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1589",
        "kuyu_adi": "1589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "159",
        "kuyu_adi": "159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1590",
        "kuyu_adi": "1590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1591",
        "kuyu_adi": "1591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1592",
        "kuyu_adi": "1592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1593",
        "kuyu_adi": "1593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1594",
        "kuyu_adi": "1594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1595",
        "kuyu_adi": "1595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1596",
        "kuyu_adi": "1596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1597",
        "kuyu_adi": "1597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1598",
        "kuyu_adi": "1598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1599",
        "kuyu_adi": "1599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "16",
        "kuyu_adi": "16",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "160",
        "kuyu_adi": "160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1600",
        "kuyu_adi": "1600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1601",
        "kuyu_adi": "1601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1602",
        "kuyu_adi": "1602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1603",
        "kuyu_adi": "1603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1604",
        "kuyu_adi": "1604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1605",
        "kuyu_adi": "1605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1606",
        "kuyu_adi": "1606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1607",
        "kuyu_adi": "1607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1608",
        "kuyu_adi": "1608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1609",
        "kuyu_adi": "1609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "161",
        "kuyu_adi": "161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1610",
        "kuyu_adi": "1610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1611",
        "kuyu_adi": "1611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1612",
        "kuyu_adi": "1612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1613",
        "kuyu_adi": "1613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1614",
        "kuyu_adi": "1614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1615",
        "kuyu_adi": "1615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1616",
        "kuyu_adi": "1616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1617",
        "kuyu_adi": "1617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1618",
        "kuyu_adi": "1618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1619",
        "kuyu_adi": "1619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "162",
        "kuyu_adi": "162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1620",
        "kuyu_adi": "1620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1621",
        "kuyu_adi": "1621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1622",
        "kuyu_adi": "1622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1623",
        "kuyu_adi": "1623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1624",
        "kuyu_adi": "1624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1625",
        "kuyu_adi": "1625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1626",
        "kuyu_adi": "1626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1627",
        "kuyu_adi": "1627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1628",
        "kuyu_adi": "1628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1629",
        "kuyu_adi": "1629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "163",
        "kuyu_adi": "163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1630",
        "kuyu_adi": "1630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1631",
        "kuyu_adi": "1631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1632",
        "kuyu_adi": "1632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1633",
        "kuyu_adi": "1633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1634",
        "kuyu_adi": "1634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1635",
        "kuyu_adi": "1635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1636",
        "kuyu_adi": "1636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1637",
        "kuyu_adi": "1637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1638",
        "kuyu_adi": "1638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1639",
        "kuyu_adi": "1639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "164",
        "kuyu_adi": "164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1640",
        "kuyu_adi": "1640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1641",
        "kuyu_adi": "1641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1642",
        "kuyu_adi": "1642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1643",
        "kuyu_adi": "1643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1644",
        "kuyu_adi": "1644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1645",
        "kuyu_adi": "1645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1646",
        "kuyu_adi": "1646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1647",
        "kuyu_adi": "1647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1648",
        "kuyu_adi": "1648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1649",
        "kuyu_adi": "1649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "165",
        "kuyu_adi": "165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1650",
        "kuyu_adi": "1650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1651",
        "kuyu_adi": "1651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1652",
        "kuyu_adi": "1652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1653",
        "kuyu_adi": "1653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1654",
        "kuyu_adi": "1654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1655",
        "kuyu_adi": "1655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1656",
        "kuyu_adi": "1656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1657",
        "kuyu_adi": "1657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1658",
        "kuyu_adi": "1658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1659",
        "kuyu_adi": "1659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "166",
        "kuyu_adi": "166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1660",
        "kuyu_adi": "1660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1661",
        "kuyu_adi": "1661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1662",
        "kuyu_adi": "1662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1663",
        "kuyu_adi": "1663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1664",
        "kuyu_adi": "1664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1665",
        "kuyu_adi": "1665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1666",
        "kuyu_adi": "1666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1667",
        "kuyu_adi": "1667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1668",
        "kuyu_adi": "1668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1669",
        "kuyu_adi": "1669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "167",
        "kuyu_adi": "167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1670",
        "kuyu_adi": "1670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1671",
        "kuyu_adi": "1671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1672",
        "kuyu_adi": "1672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1673",
        "kuyu_adi": "1673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1674",
        "kuyu_adi": "1674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1675",
        "kuyu_adi": "1675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1676",
        "kuyu_adi": "1676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1677",
        "kuyu_adi": "1677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1678",
        "kuyu_adi": "1678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1679",
        "kuyu_adi": "1679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "168",
        "kuyu_adi": "168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1680",
        "kuyu_adi": "1680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1681",
        "kuyu_adi": "1681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1682",
        "kuyu_adi": "1682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1683",
        "kuyu_adi": "1683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1684",
        "kuyu_adi": "1684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1685",
        "kuyu_adi": "1685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1686",
        "kuyu_adi": "1686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1687",
        "kuyu_adi": "1687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1688",
        "kuyu_adi": "1688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1689",
        "kuyu_adi": "1689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "169",
        "kuyu_adi": "169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1690",
        "kuyu_adi": "1690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1691",
        "kuyu_adi": "1691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1692",
        "kuyu_adi": "1692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1693",
        "kuyu_adi": "1693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1694",
        "kuyu_adi": "1694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1695",
        "kuyu_adi": "1695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1696",
        "kuyu_adi": "1696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1697",
        "kuyu_adi": "1697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1698",
        "kuyu_adi": "1698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1699",
        "kuyu_adi": "1699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "17",
        "kuyu_adi": "17",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "170",
        "kuyu_adi": "170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1700",
        "kuyu_adi": "1700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1701",
        "kuyu_adi": "1701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1702",
        "kuyu_adi": "1702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1703",
        "kuyu_adi": "1703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1704",
        "kuyu_adi": "1704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1705",
        "kuyu_adi": "1705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1706",
        "kuyu_adi": "1706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1707",
        "kuyu_adi": "1707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1708",
        "kuyu_adi": "1708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1709",
        "kuyu_adi": "1709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "171",
        "kuyu_adi": "171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1710",
        "kuyu_adi": "1710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1711",
        "kuyu_adi": "1711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1712",
        "kuyu_adi": "1712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1713",
        "kuyu_adi": "1713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1714",
        "kuyu_adi": "1714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1715",
        "kuyu_adi": "1715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1716",
        "kuyu_adi": "1716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1717",
        "kuyu_adi": "1717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1718",
        "kuyu_adi": "1718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1719",
        "kuyu_adi": "1719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "172",
        "kuyu_adi": "172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1720",
        "kuyu_adi": "1720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1721",
        "kuyu_adi": "1721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1722",
        "kuyu_adi": "1722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1723",
        "kuyu_adi": "1723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1724",
        "kuyu_adi": "1724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1725",
        "kuyu_adi": "1725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1726",
        "kuyu_adi": "1726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1727",
        "kuyu_adi": "1727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1728",
        "kuyu_adi": "1728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1729",
        "kuyu_adi": "1729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "173",
        "kuyu_adi": "173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1730",
        "kuyu_adi": "1730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1731",
        "kuyu_adi": "1731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1732",
        "kuyu_adi": "1732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1733",
        "kuyu_adi": "1733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1734",
        "kuyu_adi": "1734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1735",
        "kuyu_adi": "1735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1736",
        "kuyu_adi": "1736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1737",
        "kuyu_adi": "1737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1738",
        "kuyu_adi": "1738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1739",
        "kuyu_adi": "1739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "174",
        "kuyu_adi": "174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1740",
        "kuyu_adi": "1740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1741",
        "kuyu_adi": "1741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1742",
        "kuyu_adi": "1742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1743",
        "kuyu_adi": "1743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1744",
        "kuyu_adi": "1744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1745",
        "kuyu_adi": "1745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1746",
        "kuyu_adi": "1746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1747",
        "kuyu_adi": "1747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1748",
        "kuyu_adi": "1748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1749",
        "kuyu_adi": "1749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "175",
        "kuyu_adi": "175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1750",
        "kuyu_adi": "1750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1751",
        "kuyu_adi": "1751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1752",
        "kuyu_adi": "1752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1753",
        "kuyu_adi": "1753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1754",
        "kuyu_adi": "1754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1755",
        "kuyu_adi": "1755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1756",
        "kuyu_adi": "1756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1757",
        "kuyu_adi": "1757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1758",
        "kuyu_adi": "1758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1759",
        "kuyu_adi": "1759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "176",
        "kuyu_adi": "176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1760",
        "kuyu_adi": "1760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1761",
        "kuyu_adi": "1761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1762",
        "kuyu_adi": "1762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1763",
        "kuyu_adi": "1763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1764",
        "kuyu_adi": "1764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1765",
        "kuyu_adi": "1765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1766",
        "kuyu_adi": "1766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1767",
        "kuyu_adi": "1767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1768",
        "kuyu_adi": "1768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1769",
        "kuyu_adi": "1769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "177",
        "kuyu_adi": "177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1770",
        "kuyu_adi": "1770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1771",
        "kuyu_adi": "1771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1772",
        "kuyu_adi": "1772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1773",
        "kuyu_adi": "1773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1774",
        "kuyu_adi": "1774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1775",
        "kuyu_adi": "1775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1776",
        "kuyu_adi": "1776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1777",
        "kuyu_adi": "1777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1778",
        "kuyu_adi": "1778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1779",
        "kuyu_adi": "1779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "178",
        "kuyu_adi": "178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1780",
        "kuyu_adi": "1780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1781",
        "kuyu_adi": "1781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1782",
        "kuyu_adi": "1782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1783",
        "kuyu_adi": "1783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1784",
        "kuyu_adi": "1784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1785",
        "kuyu_adi": "1785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1786",
        "kuyu_adi": "1786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1787",
        "kuyu_adi": "1787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1788",
        "kuyu_adi": "1788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1789",
        "kuyu_adi": "1789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "179",
        "kuyu_adi": "179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1790",
        "kuyu_adi": "1790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1791",
        "kuyu_adi": "1791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1792",
        "kuyu_adi": "1792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1793",
        "kuyu_adi": "1793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1794",
        "kuyu_adi": "1794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1795",
        "kuyu_adi": "1795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1796",
        "kuyu_adi": "1796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1797",
        "kuyu_adi": "1797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1798",
        "kuyu_adi": "1798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1799",
        "kuyu_adi": "1799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "18",
        "kuyu_adi": "18",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "180",
        "kuyu_adi": "180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1800",
        "kuyu_adi": "1800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1801",
        "kuyu_adi": "1801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1802",
        "kuyu_adi": "1802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1803",
        "kuyu_adi": "1803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1804",
        "kuyu_adi": "1804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1805",
        "kuyu_adi": "1805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1806",
        "kuyu_adi": "1806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1807",
        "kuyu_adi": "1807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1808",
        "kuyu_adi": "1808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1809",
        "kuyu_adi": "1809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "181",
        "kuyu_adi": "181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1810",
        "kuyu_adi": "1810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1811",
        "kuyu_adi": "1811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1812",
        "kuyu_adi": "1812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1813",
        "kuyu_adi": "1813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1814",
        "kuyu_adi": "1814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1815",
        "kuyu_adi": "1815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1816",
        "kuyu_adi": "1816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1817",
        "kuyu_adi": "1817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1818",
        "kuyu_adi": "1818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1819",
        "kuyu_adi": "1819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "182",
        "kuyu_adi": "182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1820",
        "kuyu_adi": "1820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1821",
        "kuyu_adi": "1821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1822",
        "kuyu_adi": "1822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1823",
        "kuyu_adi": "1823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1824",
        "kuyu_adi": "1824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1825",
        "kuyu_adi": "1825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1826",
        "kuyu_adi": "1826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1827",
        "kuyu_adi": "1827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1828",
        "kuyu_adi": "1828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1829",
        "kuyu_adi": "1829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "183",
        "kuyu_adi": "183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1830",
        "kuyu_adi": "1830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1831",
        "kuyu_adi": "1831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1832",
        "kuyu_adi": "1832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1833",
        "kuyu_adi": "1833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1834",
        "kuyu_adi": "1834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1835",
        "kuyu_adi": "1835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1836",
        "kuyu_adi": "1836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1837",
        "kuyu_adi": "1837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1838",
        "kuyu_adi": "1838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1839",
        "kuyu_adi": "1839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "184",
        "kuyu_adi": "184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1840",
        "kuyu_adi": "1840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1841",
        "kuyu_adi": "1841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1842",
        "kuyu_adi": "1842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1843",
        "kuyu_adi": "1843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1844",
        "kuyu_adi": "1844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1845",
        "kuyu_adi": "1845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1846",
        "kuyu_adi": "1846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1847",
        "kuyu_adi": "1847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1848",
        "kuyu_adi": "1848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1849",
        "kuyu_adi": "1849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "185",
        "kuyu_adi": "185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1850",
        "kuyu_adi": "1850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1851",
        "kuyu_adi": "1851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1852",
        "kuyu_adi": "1852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1853",
        "kuyu_adi": "1853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1854",
        "kuyu_adi": "1854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1855",
        "kuyu_adi": "1855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1856",
        "kuyu_adi": "1856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1857",
        "kuyu_adi": "1857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1858",
        "kuyu_adi": "1858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1859",
        "kuyu_adi": "1859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "186",
        "kuyu_adi": "186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1860",
        "kuyu_adi": "1860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1861",
        "kuyu_adi": "1861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1862",
        "kuyu_adi": "1862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1863",
        "kuyu_adi": "1863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1864",
        "kuyu_adi": "1864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1865",
        "kuyu_adi": "1865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1866",
        "kuyu_adi": "1866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1867",
        "kuyu_adi": "1867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1868",
        "kuyu_adi": "1868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1869",
        "kuyu_adi": "1869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "187",
        "kuyu_adi": "187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1870",
        "kuyu_adi": "1870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1871",
        "kuyu_adi": "1871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1872",
        "kuyu_adi": "1872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1873",
        "kuyu_adi": "1873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1874",
        "kuyu_adi": "1874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1875",
        "kuyu_adi": "1875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1876",
        "kuyu_adi": "1876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1877",
        "kuyu_adi": "1877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1878",
        "kuyu_adi": "1878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1879",
        "kuyu_adi": "1879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "188",
        "kuyu_adi": "188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1880",
        "kuyu_adi": "1880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1881",
        "kuyu_adi": "1881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1882",
        "kuyu_adi": "1882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1883",
        "kuyu_adi": "1883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1884",
        "kuyu_adi": "1884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1885",
        "kuyu_adi": "1885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1886",
        "kuyu_adi": "1886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1887",
        "kuyu_adi": "1887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1888",
        "kuyu_adi": "1888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1889",
        "kuyu_adi": "1889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "189",
        "kuyu_adi": "189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1890",
        "kuyu_adi": "1890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1891",
        "kuyu_adi": "1891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1892",
        "kuyu_adi": "1892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1893",
        "kuyu_adi": "1893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1894",
        "kuyu_adi": "1894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1895",
        "kuyu_adi": "1895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1896",
        "kuyu_adi": "1896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1897",
        "kuyu_adi": "1897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1898",
        "kuyu_adi": "1898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1899",
        "kuyu_adi": "1899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "19",
        "kuyu_adi": "19",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "190",
        "kuyu_adi": "190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1900",
        "kuyu_adi": "1900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1901",
        "kuyu_adi": "1901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1902",
        "kuyu_adi": "1902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1903",
        "kuyu_adi": "1903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1904",
        "kuyu_adi": "1904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1905",
        "kuyu_adi": "1905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1906",
        "kuyu_adi": "1906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1907",
        "kuyu_adi": "1907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1908",
        "kuyu_adi": "1908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1909",
        "kuyu_adi": "1909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "191",
        "kuyu_adi": "191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1910",
        "kuyu_adi": "1910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1911",
        "kuyu_adi": "1911",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1912",
        "kuyu_adi": "1912",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1913",
        "kuyu_adi": "1913",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1914",
        "kuyu_adi": "1914",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1915",
        "kuyu_adi": "1915",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1916",
        "kuyu_adi": "1916",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1917",
        "kuyu_adi": "1917",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1918",
        "kuyu_adi": "1918",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1919",
        "kuyu_adi": "1919",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "192",
        "kuyu_adi": "192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1920",
        "kuyu_adi": "1920",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1921",
        "kuyu_adi": "1921",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1922",
        "kuyu_adi": "1922",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1923",
        "kuyu_adi": "1923",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1924",
        "kuyu_adi": "1924",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1925",
        "kuyu_adi": "1925",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1926",
        "kuyu_adi": "1926",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1927",
        "kuyu_adi": "1927",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1928",
        "kuyu_adi": "1928",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1929",
        "kuyu_adi": "1929",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "193",
        "kuyu_adi": "193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1930",
        "kuyu_adi": "1930",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1931",
        "kuyu_adi": "1931",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1932",
        "kuyu_adi": "1932",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1933",
        "kuyu_adi": "1933",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1934",
        "kuyu_adi": "1934",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1935",
        "kuyu_adi": "1935",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1936",
        "kuyu_adi": "1936",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1937",
        "kuyu_adi": "1937",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1938",
        "kuyu_adi": "1938",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1939",
        "kuyu_adi": "1939",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "194",
        "kuyu_adi": "194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1940",
        "kuyu_adi": "1940",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1941",
        "kuyu_adi": "1941",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1942",
        "kuyu_adi": "1942",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1943",
        "kuyu_adi": "1943",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1944",
        "kuyu_adi": "1944",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1945",
        "kuyu_adi": "1945",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1946",
        "kuyu_adi": "1946",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1947",
        "kuyu_adi": "1947",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1948",
        "kuyu_adi": "1948",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1949",
        "kuyu_adi": "1949",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "195",
        "kuyu_adi": "195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1950",
        "kuyu_adi": "1950",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1951",
        "kuyu_adi": "1951",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1952",
        "kuyu_adi": "1952",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1953",
        "kuyu_adi": "1953",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1954",
        "kuyu_adi": "1954",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1955",
        "kuyu_adi": "1955",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1956",
        "kuyu_adi": "1956",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1957",
        "kuyu_adi": "1957",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1958",
        "kuyu_adi": "1958",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1959",
        "kuyu_adi": "1959",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "196",
        "kuyu_adi": "196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1960",
        "kuyu_adi": "1960",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1961",
        "kuyu_adi": "1961",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1962",
        "kuyu_adi": "1962",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1963",
        "kuyu_adi": "1963",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1964",
        "kuyu_adi": "1964",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1965",
        "kuyu_adi": "1965",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1966",
        "kuyu_adi": "1966",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1967",
        "kuyu_adi": "1967",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1968",
        "kuyu_adi": "1968",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1969",
        "kuyu_adi": "1969",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "197",
        "kuyu_adi": "197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1970",
        "kuyu_adi": "1970",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1971",
        "kuyu_adi": "1971",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1972",
        "kuyu_adi": "1972",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1973",
        "kuyu_adi": "1973",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1974",
        "kuyu_adi": "1974",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1975",
        "kuyu_adi": "1975",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1976",
        "kuyu_adi": "1976",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1977",
        "kuyu_adi": "1977",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1978",
        "kuyu_adi": "1978",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1979",
        "kuyu_adi": "1979",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "198",
        "kuyu_adi": "198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1980",
        "kuyu_adi": "1980",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1981",
        "kuyu_adi": "1981",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1982",
        "kuyu_adi": "1982",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1983",
        "kuyu_adi": "1983",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1984",
        "kuyu_adi": "1984",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1985",
        "kuyu_adi": "1985",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1986",
        "kuyu_adi": "1986",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1987",
        "kuyu_adi": "1987",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1988",
        "kuyu_adi": "1988",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1989",
        "kuyu_adi": "1989",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "199",
        "kuyu_adi": "199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1990",
        "kuyu_adi": "1990",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1991",
        "kuyu_adi": "1991",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1992",
        "kuyu_adi": "1992",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1993",
        "kuyu_adi": "1993",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1994",
        "kuyu_adi": "1994",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1995",
        "kuyu_adi": "1995",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1996",
        "kuyu_adi": "1996",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1997",
        "kuyu_adi": "1997",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1998",
        "kuyu_adi": "1998",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "1999",
        "kuyu_adi": "1999",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2",
        "kuyu_adi": "2",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "20",
        "kuyu_adi": "20",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "200",
        "kuyu_adi": "200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2000",
        "kuyu_adi": "2000",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2001",
        "kuyu_adi": "2001",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2002",
        "kuyu_adi": "2002",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2003",
        "kuyu_adi": "2003",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2004",
        "kuyu_adi": "2004",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2005",
        "kuyu_adi": "2005",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2006",
        "kuyu_adi": "2006",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2007",
        "kuyu_adi": "2007",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2008",
        "kuyu_adi": "2008",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2009",
        "kuyu_adi": "2009",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "201",
        "kuyu_adi": "201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2010",
        "kuyu_adi": "2010",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2011",
        "kuyu_adi": "2011",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2012",
        "kuyu_adi": "2012",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2013",
        "kuyu_adi": "2013",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2014",
        "kuyu_adi": "2014",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2015",
        "kuyu_adi": "2015",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2016",
        "kuyu_adi": "2016",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2017",
        "kuyu_adi": "2017",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2018",
        "kuyu_adi": "2018",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2019",
        "kuyu_adi": "2019",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "202",
        "kuyu_adi": "202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2020",
        "kuyu_adi": "2020",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2021",
        "kuyu_adi": "2021",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2022",
        "kuyu_adi": "2022",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2023",
        "kuyu_adi": "2023",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2024",
        "kuyu_adi": "2024",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2025",
        "kuyu_adi": "2025",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2026",
        "kuyu_adi": "2026",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2027",
        "kuyu_adi": "2027",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2028",
        "kuyu_adi": "2028",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2029",
        "kuyu_adi": "2029",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "203",
        "kuyu_adi": "203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2030",
        "kuyu_adi": "2030",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2031",
        "kuyu_adi": "2031",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2032",
        "kuyu_adi": "2032",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2033",
        "kuyu_adi": "2033",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2034",
        "kuyu_adi": "2034",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2035",
        "kuyu_adi": "2035",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2036",
        "kuyu_adi": "2036",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2037",
        "kuyu_adi": "2037",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2038",
        "kuyu_adi": "2038",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2039",
        "kuyu_adi": "2039",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "204",
        "kuyu_adi": "204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2040",
        "kuyu_adi": "2040",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2041",
        "kuyu_adi": "2041",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2042",
        "kuyu_adi": "2042",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2043",
        "kuyu_adi": "2043",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2044",
        "kuyu_adi": "2044",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2045",
        "kuyu_adi": "2045",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2046",
        "kuyu_adi": "2046",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2047",
        "kuyu_adi": "2047",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2048",
        "kuyu_adi": "2048",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2049",
        "kuyu_adi": "2049",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "205",
        "kuyu_adi": "205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2050",
        "kuyu_adi": "2050",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2051",
        "kuyu_adi": "2051",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2052",
        "kuyu_adi": "2052",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2053",
        "kuyu_adi": "2053",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2054",
        "kuyu_adi": "2054",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2055",
        "kuyu_adi": "2055",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2056",
        "kuyu_adi": "2056",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2057",
        "kuyu_adi": "2057",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2058",
        "kuyu_adi": "2058",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2059",
        "kuyu_adi": "2059",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "206",
        "kuyu_adi": "206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2060",
        "kuyu_adi": "2060",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2061",
        "kuyu_adi": "2061",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2062",
        "kuyu_adi": "2062",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2063",
        "kuyu_adi": "2063",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2064",
        "kuyu_adi": "2064",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2065",
        "kuyu_adi": "2065",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2066",
        "kuyu_adi": "2066",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2067",
        "kuyu_adi": "2067",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2068",
        "kuyu_adi": "2068",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2069",
        "kuyu_adi": "2069",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "207",
        "kuyu_adi": "207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2070",
        "kuyu_adi": "2070",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2071",
        "kuyu_adi": "2071",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2072",
        "kuyu_adi": "2072",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2073",
        "kuyu_adi": "2073",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2074",
        "kuyu_adi": "2074",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2075",
        "kuyu_adi": "2075",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2076",
        "kuyu_adi": "2076",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2077",
        "kuyu_adi": "2077",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2078",
        "kuyu_adi": "2078",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2079",
        "kuyu_adi": "2079",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "208",
        "kuyu_adi": "208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2080",
        "kuyu_adi": "2080",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2081",
        "kuyu_adi": "2081",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2082",
        "kuyu_adi": "2082",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2083",
        "kuyu_adi": "2083",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2084",
        "kuyu_adi": "2084",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2085",
        "kuyu_adi": "2085",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2086",
        "kuyu_adi": "2086",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2087",
        "kuyu_adi": "2087",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2088",
        "kuyu_adi": "2088",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2089",
        "kuyu_adi": "2089",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "209",
        "kuyu_adi": "209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2090",
        "kuyu_adi": "2090",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2091",
        "kuyu_adi": "2091",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2092",
        "kuyu_adi": "2092",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2093",
        "kuyu_adi": "2093",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2094",
        "kuyu_adi": "2094",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2095",
        "kuyu_adi": "2095",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2096",
        "kuyu_adi": "2096",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2097",
        "kuyu_adi": "2097",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2098",
        "kuyu_adi": "2098",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2099",
        "kuyu_adi": "2099",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "21",
        "kuyu_adi": "21",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "210",
        "kuyu_adi": "210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2100",
        "kuyu_adi": "2100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2101",
        "kuyu_adi": "2101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2102",
        "kuyu_adi": "2102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2103",
        "kuyu_adi": "2103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2104",
        "kuyu_adi": "2104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2105",
        "kuyu_adi": "2105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2106",
        "kuyu_adi": "2106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2107",
        "kuyu_adi": "2107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2108",
        "kuyu_adi": "2108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2109",
        "kuyu_adi": "2109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "211",
        "kuyu_adi": "211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2110",
        "kuyu_adi": "2110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2111",
        "kuyu_adi": "2111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2112",
        "kuyu_adi": "2112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2113",
        "kuyu_adi": "2113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2114",
        "kuyu_adi": "2114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2115",
        "kuyu_adi": "2115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2116",
        "kuyu_adi": "2116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2117",
        "kuyu_adi": "2117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2118",
        "kuyu_adi": "2118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2119",
        "kuyu_adi": "2119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "212",
        "kuyu_adi": "212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2120",
        "kuyu_adi": "2120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2121",
        "kuyu_adi": "2121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2122",
        "kuyu_adi": "2122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2123",
        "kuyu_adi": "2123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2124",
        "kuyu_adi": "2124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2125",
        "kuyu_adi": "2125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2126",
        "kuyu_adi": "2126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2127",
        "kuyu_adi": "2127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2128",
        "kuyu_adi": "2128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2129",
        "kuyu_adi": "2129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "213",
        "kuyu_adi": "213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2130",
        "kuyu_adi": "2130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2131",
        "kuyu_adi": "2131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2132",
        "kuyu_adi": "2132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2133",
        "kuyu_adi": "2133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2134",
        "kuyu_adi": "2134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2135",
        "kuyu_adi": "2135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2136",
        "kuyu_adi": "2136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2137",
        "kuyu_adi": "2137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2138",
        "kuyu_adi": "2138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2139",
        "kuyu_adi": "2139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "214",
        "kuyu_adi": "214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2140",
        "kuyu_adi": "2140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2141",
        "kuyu_adi": "2141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2142",
        "kuyu_adi": "2142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2143",
        "kuyu_adi": "2143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2144",
        "kuyu_adi": "2144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2145",
        "kuyu_adi": "2145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2146",
        "kuyu_adi": "2146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2147",
        "kuyu_adi": "2147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2148",
        "kuyu_adi": "2148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2149",
        "kuyu_adi": "2149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "215",
        "kuyu_adi": "215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2150",
        "kuyu_adi": "2150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2151",
        "kuyu_adi": "2151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2152",
        "kuyu_adi": "2152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2153",
        "kuyu_adi": "2153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2154",
        "kuyu_adi": "2154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2155",
        "kuyu_adi": "2155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2156",
        "kuyu_adi": "2156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2157",
        "kuyu_adi": "2157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2158",
        "kuyu_adi": "2158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2159",
        "kuyu_adi": "2159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "216",
        "kuyu_adi": "216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2160",
        "kuyu_adi": "2160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2161",
        "kuyu_adi": "2161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2162",
        "kuyu_adi": "2162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2163",
        "kuyu_adi": "2163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2164",
        "kuyu_adi": "2164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2165",
        "kuyu_adi": "2165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2166",
        "kuyu_adi": "2166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2167",
        "kuyu_adi": "2167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2168",
        "kuyu_adi": "2168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2169",
        "kuyu_adi": "2169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "217",
        "kuyu_adi": "217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2170",
        "kuyu_adi": "2170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2171",
        "kuyu_adi": "2171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2172",
        "kuyu_adi": "2172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2173",
        "kuyu_adi": "2173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2174",
        "kuyu_adi": "2174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2175",
        "kuyu_adi": "2175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2176",
        "kuyu_adi": "2176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2177",
        "kuyu_adi": "2177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2178",
        "kuyu_adi": "2178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2179",
        "kuyu_adi": "2179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "218",
        "kuyu_adi": "218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2180",
        "kuyu_adi": "2180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2181",
        "kuyu_adi": "2181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2182",
        "kuyu_adi": "2182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2183",
        "kuyu_adi": "2183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2184",
        "kuyu_adi": "2184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2185",
        "kuyu_adi": "2185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2186",
        "kuyu_adi": "2186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2187",
        "kuyu_adi": "2187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2188",
        "kuyu_adi": "2188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2189",
        "kuyu_adi": "2189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "219",
        "kuyu_adi": "219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2190",
        "kuyu_adi": "2190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2191",
        "kuyu_adi": "2191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2192",
        "kuyu_adi": "2192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2193",
        "kuyu_adi": "2193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2194",
        "kuyu_adi": "2194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2195",
        "kuyu_adi": "2195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2196",
        "kuyu_adi": "2196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2197",
        "kuyu_adi": "2197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2198",
        "kuyu_adi": "2198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2199",
        "kuyu_adi": "2199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "22",
        "kuyu_adi": "22",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "220",
        "kuyu_adi": "220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2200",
        "kuyu_adi": "2200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2201",
        "kuyu_adi": "2201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2202",
        "kuyu_adi": "2202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2203",
        "kuyu_adi": "2203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2204",
        "kuyu_adi": "2204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2205",
        "kuyu_adi": "2205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2206",
        "kuyu_adi": "2206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2207",
        "kuyu_adi": "2207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2208",
        "kuyu_adi": "2208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2209",
        "kuyu_adi": "2209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "221",
        "kuyu_adi": "221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2210",
        "kuyu_adi": "2210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2211",
        "kuyu_adi": "2211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2212",
        "kuyu_adi": "2212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2213",
        "kuyu_adi": "2213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2214",
        "kuyu_adi": "2214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2215",
        "kuyu_adi": "2215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2216",
        "kuyu_adi": "2216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2217",
        "kuyu_adi": "2217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2218",
        "kuyu_adi": "2218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2219",
        "kuyu_adi": "2219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "222",
        "kuyu_adi": "222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2220",
        "kuyu_adi": "2220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2221",
        "kuyu_adi": "2221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2222",
        "kuyu_adi": "2222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2223",
        "kuyu_adi": "2223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2224",
        "kuyu_adi": "2224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2225",
        "kuyu_adi": "2225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2226",
        "kuyu_adi": "2226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2227",
        "kuyu_adi": "2227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2228",
        "kuyu_adi": "2228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2229",
        "kuyu_adi": "2229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "223",
        "kuyu_adi": "223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2230",
        "kuyu_adi": "2230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2231",
        "kuyu_adi": "2231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2232",
        "kuyu_adi": "2232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2233",
        "kuyu_adi": "2233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2234",
        "kuyu_adi": "2234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2235",
        "kuyu_adi": "2235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2236",
        "kuyu_adi": "2236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2237",
        "kuyu_adi": "2237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2238",
        "kuyu_adi": "2238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2239",
        "kuyu_adi": "2239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "224",
        "kuyu_adi": "224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2240",
        "kuyu_adi": "2240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2241",
        "kuyu_adi": "2241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2242",
        "kuyu_adi": "2242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2243",
        "kuyu_adi": "2243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2244",
        "kuyu_adi": "2244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2245",
        "kuyu_adi": "2245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2246",
        "kuyu_adi": "2246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2247",
        "kuyu_adi": "2247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2248",
        "kuyu_adi": "2248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2249",
        "kuyu_adi": "2249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "225",
        "kuyu_adi": "225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2250",
        "kuyu_adi": "2250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2251",
        "kuyu_adi": "2251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2252",
        "kuyu_adi": "2252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2253",
        "kuyu_adi": "2253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2254",
        "kuyu_adi": "2254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2255",
        "kuyu_adi": "2255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2256",
        "kuyu_adi": "2256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2257",
        "kuyu_adi": "2257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2258",
        "kuyu_adi": "2258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2259",
        "kuyu_adi": "2259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "226",
        "kuyu_adi": "226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2260",
        "kuyu_adi": "2260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2261",
        "kuyu_adi": "2261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2262",
        "kuyu_adi": "2262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2263",
        "kuyu_adi": "2263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2264",
        "kuyu_adi": "2264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2265",
        "kuyu_adi": "2265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2266",
        "kuyu_adi": "2266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2267",
        "kuyu_adi": "2267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2268",
        "kuyu_adi": "2268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2269",
        "kuyu_adi": "2269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "227",
        "kuyu_adi": "227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2270",
        "kuyu_adi": "2270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2271",
        "kuyu_adi": "2271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2272",
        "kuyu_adi": "2272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2273",
        "kuyu_adi": "2273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2274",
        "kuyu_adi": "2274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2275",
        "kuyu_adi": "2275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2276",
        "kuyu_adi": "2276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2277",
        "kuyu_adi": "2277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2278",
        "kuyu_adi": "2278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2279",
        "kuyu_adi": "2279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "228",
        "kuyu_adi": "228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2280",
        "kuyu_adi": "2280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2281",
        "kuyu_adi": "2281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2282",
        "kuyu_adi": "2282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2283",
        "kuyu_adi": "2283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2284",
        "kuyu_adi": "2284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2285",
        "kuyu_adi": "2285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2286",
        "kuyu_adi": "2286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2287",
        "kuyu_adi": "2287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2288",
        "kuyu_adi": "2288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2289",
        "kuyu_adi": "2289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "229",
        "kuyu_adi": "229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2290",
        "kuyu_adi": "2290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2291",
        "kuyu_adi": "2291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2292",
        "kuyu_adi": "2292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2293",
        "kuyu_adi": "2293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2294",
        "kuyu_adi": "2294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2295",
        "kuyu_adi": "2295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2296",
        "kuyu_adi": "2296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2297",
        "kuyu_adi": "2297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2298",
        "kuyu_adi": "2298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2299",
        "kuyu_adi": "2299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "23",
        "kuyu_adi": "23",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "230",
        "kuyu_adi": "230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2300",
        "kuyu_adi": "2300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2301",
        "kuyu_adi": "2301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2302",
        "kuyu_adi": "2302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2303",
        "kuyu_adi": "2303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2304",
        "kuyu_adi": "2304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2305",
        "kuyu_adi": "2305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2306",
        "kuyu_adi": "2306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2307",
        "kuyu_adi": "2307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2308",
        "kuyu_adi": "2308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2309",
        "kuyu_adi": "2309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "231",
        "kuyu_adi": "231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2310",
        "kuyu_adi": "2310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2311",
        "kuyu_adi": "2311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2312",
        "kuyu_adi": "2312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2313",
        "kuyu_adi": "2313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2314",
        "kuyu_adi": "2314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2315",
        "kuyu_adi": "2315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2316",
        "kuyu_adi": "2316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2317",
        "kuyu_adi": "2317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2318",
        "kuyu_adi": "2318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2319",
        "kuyu_adi": "2319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "232",
        "kuyu_adi": "232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2320",
        "kuyu_adi": "2320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2321",
        "kuyu_adi": "2321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2322",
        "kuyu_adi": "2322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2323",
        "kuyu_adi": "2323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2324",
        "kuyu_adi": "2324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2325",
        "kuyu_adi": "2325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2326",
        "kuyu_adi": "2326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2327",
        "kuyu_adi": "2327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2328",
        "kuyu_adi": "2328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2329",
        "kuyu_adi": "2329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "233",
        "kuyu_adi": "233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2330",
        "kuyu_adi": "2330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2331",
        "kuyu_adi": "2331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2332",
        "kuyu_adi": "2332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2333",
        "kuyu_adi": "2333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2334",
        "kuyu_adi": "2334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2335",
        "kuyu_adi": "2335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2336",
        "kuyu_adi": "2336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2337",
        "kuyu_adi": "2337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2338",
        "kuyu_adi": "2338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2339",
        "kuyu_adi": "2339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "234",
        "kuyu_adi": "234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2340",
        "kuyu_adi": "2340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2341",
        "kuyu_adi": "2341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2342",
        "kuyu_adi": "2342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2343",
        "kuyu_adi": "2343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2344",
        "kuyu_adi": "2344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2345",
        "kuyu_adi": "2345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2346",
        "kuyu_adi": "2346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2347",
        "kuyu_adi": "2347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2348",
        "kuyu_adi": "2348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2349",
        "kuyu_adi": "2349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "235",
        "kuyu_adi": "235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2350",
        "kuyu_adi": "2350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2351",
        "kuyu_adi": "2351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2352",
        "kuyu_adi": "2352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2353",
        "kuyu_adi": "2353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2354",
        "kuyu_adi": "2354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2355",
        "kuyu_adi": "2355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2356",
        "kuyu_adi": "2356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2357",
        "kuyu_adi": "2357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2358",
        "kuyu_adi": "2358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2359",
        "kuyu_adi": "2359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "236",
        "kuyu_adi": "236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2360",
        "kuyu_adi": "2360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2361",
        "kuyu_adi": "2361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2362",
        "kuyu_adi": "2362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2363",
        "kuyu_adi": "2363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2364",
        "kuyu_adi": "2364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2365",
        "kuyu_adi": "2365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2366",
        "kuyu_adi": "2366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2367",
        "kuyu_adi": "2367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2368",
        "kuyu_adi": "2368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2369",
        "kuyu_adi": "2369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "237",
        "kuyu_adi": "237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2370",
        "kuyu_adi": "2370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2371",
        "kuyu_adi": "2371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2372",
        "kuyu_adi": "2372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2373",
        "kuyu_adi": "2373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2374",
        "kuyu_adi": "2374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2375",
        "kuyu_adi": "2375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2376",
        "kuyu_adi": "2376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2377",
        "kuyu_adi": "2377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2378",
        "kuyu_adi": "2378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2379",
        "kuyu_adi": "2379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "238",
        "kuyu_adi": "238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2380",
        "kuyu_adi": "2380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2381",
        "kuyu_adi": "2381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2382",
        "kuyu_adi": "2382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2383",
        "kuyu_adi": "2383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2384",
        "kuyu_adi": "2384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2385",
        "kuyu_adi": "2385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2386",
        "kuyu_adi": "2386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2387",
        "kuyu_adi": "2387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2388",
        "kuyu_adi": "2388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2389",
        "kuyu_adi": "2389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "239",
        "kuyu_adi": "239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2390",
        "kuyu_adi": "2390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2391",
        "kuyu_adi": "2391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2392",
        "kuyu_adi": "2392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2393",
        "kuyu_adi": "2393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2394",
        "kuyu_adi": "2394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2395",
        "kuyu_adi": "2395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2396",
        "kuyu_adi": "2396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2397",
        "kuyu_adi": "2397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2398",
        "kuyu_adi": "2398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2399",
        "kuyu_adi": "2399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "24",
        "kuyu_adi": "24",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "240",
        "kuyu_adi": "240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2400",
        "kuyu_adi": "2400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2401",
        "kuyu_adi": "2401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2402",
        "kuyu_adi": "2402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2403",
        "kuyu_adi": "2403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2404",
        "kuyu_adi": "2404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2405",
        "kuyu_adi": "2405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2406",
        "kuyu_adi": "2406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2407",
        "kuyu_adi": "2407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2408",
        "kuyu_adi": "2408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2409",
        "kuyu_adi": "2409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "241",
        "kuyu_adi": "241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2410",
        "kuyu_adi": "2410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2411",
        "kuyu_adi": "2411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2412",
        "kuyu_adi": "2412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2413",
        "kuyu_adi": "2413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2414",
        "kuyu_adi": "2414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2415",
        "kuyu_adi": "2415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2416",
        "kuyu_adi": "2416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2417",
        "kuyu_adi": "2417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2418",
        "kuyu_adi": "2418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2419",
        "kuyu_adi": "2419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "242",
        "kuyu_adi": "242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2420",
        "kuyu_adi": "2420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2421",
        "kuyu_adi": "2421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2422",
        "kuyu_adi": "2422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2423",
        "kuyu_adi": "2423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2424",
        "kuyu_adi": "2424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2425",
        "kuyu_adi": "2425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2426",
        "kuyu_adi": "2426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2427",
        "kuyu_adi": "2427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2428",
        "kuyu_adi": "2428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2429",
        "kuyu_adi": "2429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "243",
        "kuyu_adi": "243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2430",
        "kuyu_adi": "2430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2431",
        "kuyu_adi": "2431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2432",
        "kuyu_adi": "2432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2433",
        "kuyu_adi": "2433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2434",
        "kuyu_adi": "2434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2435",
        "kuyu_adi": "2435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2436",
        "kuyu_adi": "2436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2437",
        "kuyu_adi": "2437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2438",
        "kuyu_adi": "2438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2439",
        "kuyu_adi": "2439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "244",
        "kuyu_adi": "244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2440",
        "kuyu_adi": "2440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2441",
        "kuyu_adi": "2441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2442",
        "kuyu_adi": "2442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2443",
        "kuyu_adi": "2443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2444",
        "kuyu_adi": "2444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2445",
        "kuyu_adi": "2445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2446",
        "kuyu_adi": "2446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2447",
        "kuyu_adi": "2447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2448",
        "kuyu_adi": "2448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2449",
        "kuyu_adi": "2449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "245",
        "kuyu_adi": "245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2450",
        "kuyu_adi": "2450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2451",
        "kuyu_adi": "2451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2452",
        "kuyu_adi": "2452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2453",
        "kuyu_adi": "2453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2454",
        "kuyu_adi": "2454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2455",
        "kuyu_adi": "2455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2456",
        "kuyu_adi": "2456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2457",
        "kuyu_adi": "2457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2458",
        "kuyu_adi": "2458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2459",
        "kuyu_adi": "2459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "246",
        "kuyu_adi": "246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2460",
        "kuyu_adi": "2460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2461",
        "kuyu_adi": "2461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2462",
        "kuyu_adi": "2462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2463",
        "kuyu_adi": "2463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2464",
        "kuyu_adi": "2464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2465",
        "kuyu_adi": "2465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2466",
        "kuyu_adi": "2466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2467",
        "kuyu_adi": "2467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2468",
        "kuyu_adi": "2468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2469",
        "kuyu_adi": "2469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "247",
        "kuyu_adi": "247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2470",
        "kuyu_adi": "2470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2471",
        "kuyu_adi": "2471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2472",
        "kuyu_adi": "2472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2473",
        "kuyu_adi": "2473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2474",
        "kuyu_adi": "2474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2475",
        "kuyu_adi": "2475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2476",
        "kuyu_adi": "2476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2477",
        "kuyu_adi": "2477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2478",
        "kuyu_adi": "2478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2479",
        "kuyu_adi": "2479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "248",
        "kuyu_adi": "248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2480",
        "kuyu_adi": "2480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2481",
        "kuyu_adi": "2481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2482",
        "kuyu_adi": "2482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2483",
        "kuyu_adi": "2483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2484",
        "kuyu_adi": "2484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2485",
        "kuyu_adi": "2485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2486",
        "kuyu_adi": "2486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2487",
        "kuyu_adi": "2487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2488",
        "kuyu_adi": "2488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2489",
        "kuyu_adi": "2489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "249",
        "kuyu_adi": "249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2490",
        "kuyu_adi": "2490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2491",
        "kuyu_adi": "2491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2492",
        "kuyu_adi": "2492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2493",
        "kuyu_adi": "2493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2494",
        "kuyu_adi": "2494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2495",
        "kuyu_adi": "2495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2496",
        "kuyu_adi": "2496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2497",
        "kuyu_adi": "2497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2498",
        "kuyu_adi": "2498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2499",
        "kuyu_adi": "2499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "25",
        "kuyu_adi": "25",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "250",
        "kuyu_adi": "250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2500",
        "kuyu_adi": "2500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2501",
        "kuyu_adi": "2501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2502",
        "kuyu_adi": "2502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2503",
        "kuyu_adi": "2503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2504",
        "kuyu_adi": "2504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2505",
        "kuyu_adi": "2505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2506",
        "kuyu_adi": "2506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2507",
        "kuyu_adi": "2507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2508",
        "kuyu_adi": "2508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2509",
        "kuyu_adi": "2509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "251",
        "kuyu_adi": "251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2510",
        "kuyu_adi": "2510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2511",
        "kuyu_adi": "2511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2512",
        "kuyu_adi": "2512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2513",
        "kuyu_adi": "2513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2514",
        "kuyu_adi": "2514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2515",
        "kuyu_adi": "2515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2516",
        "kuyu_adi": "2516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2517",
        "kuyu_adi": "2517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2518",
        "kuyu_adi": "2518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2519",
        "kuyu_adi": "2519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "252",
        "kuyu_adi": "252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2520",
        "kuyu_adi": "2520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2521",
        "kuyu_adi": "2521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2522",
        "kuyu_adi": "2522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2523",
        "kuyu_adi": "2523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2524",
        "kuyu_adi": "2524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2525",
        "kuyu_adi": "2525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2526",
        "kuyu_adi": "2526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2527",
        "kuyu_adi": "2527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2528",
        "kuyu_adi": "2528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2529",
        "kuyu_adi": "2529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "253",
        "kuyu_adi": "253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2530",
        "kuyu_adi": "2530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2531",
        "kuyu_adi": "2531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2532",
        "kuyu_adi": "2532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2533",
        "kuyu_adi": "2533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2534",
        "kuyu_adi": "2534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2535",
        "kuyu_adi": "2535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2536",
        "kuyu_adi": "2536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2537",
        "kuyu_adi": "2537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2538",
        "kuyu_adi": "2538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2539",
        "kuyu_adi": "2539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "254",
        "kuyu_adi": "254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2540",
        "kuyu_adi": "2540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2541",
        "kuyu_adi": "2541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2542",
        "kuyu_adi": "2542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2543",
        "kuyu_adi": "2543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2544",
        "kuyu_adi": "2544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2545",
        "kuyu_adi": "2545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2546",
        "kuyu_adi": "2546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2547",
        "kuyu_adi": "2547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2548",
        "kuyu_adi": "2548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2549",
        "kuyu_adi": "2549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "255",
        "kuyu_adi": "255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2550",
        "kuyu_adi": "2550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2551",
        "kuyu_adi": "2551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2552",
        "kuyu_adi": "2552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2553",
        "kuyu_adi": "2553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2554",
        "kuyu_adi": "2554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2555",
        "kuyu_adi": "2555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2556",
        "kuyu_adi": "2556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2557",
        "kuyu_adi": "2557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2558",
        "kuyu_adi": "2558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2559",
        "kuyu_adi": "2559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "256",
        "kuyu_adi": "256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2560",
        "kuyu_adi": "2560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2561",
        "kuyu_adi": "2561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2562",
        "kuyu_adi": "2562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2563",
        "kuyu_adi": "2563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2564",
        "kuyu_adi": "2564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2565",
        "kuyu_adi": "2565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2566",
        "kuyu_adi": "2566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2567",
        "kuyu_adi": "2567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2568",
        "kuyu_adi": "2568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2569",
        "kuyu_adi": "2569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "257",
        "kuyu_adi": "257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2570",
        "kuyu_adi": "2570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2571",
        "kuyu_adi": "2571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2572",
        "kuyu_adi": "2572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2573",
        "kuyu_adi": "2573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2574",
        "kuyu_adi": "2574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2575",
        "kuyu_adi": "2575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2576",
        "kuyu_adi": "2576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2577",
        "kuyu_adi": "2577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2578",
        "kuyu_adi": "2578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2579",
        "kuyu_adi": "2579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "258",
        "kuyu_adi": "258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2580",
        "kuyu_adi": "2580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2581",
        "kuyu_adi": "2581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2582",
        "kuyu_adi": "2582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2583",
        "kuyu_adi": "2583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2584",
        "kuyu_adi": "2584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2585",
        "kuyu_adi": "2585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2586",
        "kuyu_adi": "2586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2587",
        "kuyu_adi": "2587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2588",
        "kuyu_adi": "2588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2589",
        "kuyu_adi": "2589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "259",
        "kuyu_adi": "259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2590",
        "kuyu_adi": "2590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2591",
        "kuyu_adi": "2591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2592",
        "kuyu_adi": "2592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2593",
        "kuyu_adi": "2593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2594",
        "kuyu_adi": "2594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2595",
        "kuyu_adi": "2595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2596",
        "kuyu_adi": "2596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2597",
        "kuyu_adi": "2597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2598",
        "kuyu_adi": "2598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2599",
        "kuyu_adi": "2599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "26",
        "kuyu_adi": "26",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "260",
        "kuyu_adi": "260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2600",
        "kuyu_adi": "2600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2601",
        "kuyu_adi": "2601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2602",
        "kuyu_adi": "2602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2603",
        "kuyu_adi": "2603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2604",
        "kuyu_adi": "2604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2605",
        "kuyu_adi": "2605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2606",
        "kuyu_adi": "2606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2607",
        "kuyu_adi": "2607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2608",
        "kuyu_adi": "2608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2609",
        "kuyu_adi": "2609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "261",
        "kuyu_adi": "261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2610",
        "kuyu_adi": "2610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2611",
        "kuyu_adi": "2611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2612",
        "kuyu_adi": "2612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2613",
        "kuyu_adi": "2613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2614",
        "kuyu_adi": "2614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2615",
        "kuyu_adi": "2615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2616",
        "kuyu_adi": "2616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2617",
        "kuyu_adi": "2617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2618",
        "kuyu_adi": "2618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2619",
        "kuyu_adi": "2619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "262",
        "kuyu_adi": "262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2620",
        "kuyu_adi": "2620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2621",
        "kuyu_adi": "2621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2622",
        "kuyu_adi": "2622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2623",
        "kuyu_adi": "2623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2624",
        "kuyu_adi": "2624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2625",
        "kuyu_adi": "2625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2626",
        "kuyu_adi": "2626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2627",
        "kuyu_adi": "2627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2628",
        "kuyu_adi": "2628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2629",
        "kuyu_adi": "2629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "263",
        "kuyu_adi": "263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2630",
        "kuyu_adi": "2630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2631",
        "kuyu_adi": "2631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2632",
        "kuyu_adi": "2632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2633",
        "kuyu_adi": "2633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2634",
        "kuyu_adi": "2634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2635",
        "kuyu_adi": "2635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2636",
        "kuyu_adi": "2636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2637",
        "kuyu_adi": "2637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2638",
        "kuyu_adi": "2638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2639",
        "kuyu_adi": "2639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "264",
        "kuyu_adi": "264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2640",
        "kuyu_adi": "2640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2641",
        "kuyu_adi": "2641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2642",
        "kuyu_adi": "2642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2643",
        "kuyu_adi": "2643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2644",
        "kuyu_adi": "2644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2645",
        "kuyu_adi": "2645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2646",
        "kuyu_adi": "2646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2647",
        "kuyu_adi": "2647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2648",
        "kuyu_adi": "2648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2649",
        "kuyu_adi": "2649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "265",
        "kuyu_adi": "265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2650",
        "kuyu_adi": "2650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2651",
        "kuyu_adi": "2651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2652",
        "kuyu_adi": "2652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2653",
        "kuyu_adi": "2653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2654",
        "kuyu_adi": "2654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2655",
        "kuyu_adi": "2655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2656",
        "kuyu_adi": "2656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2657",
        "kuyu_adi": "2657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2658",
        "kuyu_adi": "2658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2659",
        "kuyu_adi": "2659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "266",
        "kuyu_adi": "266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2660",
        "kuyu_adi": "2660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2661",
        "kuyu_adi": "2661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2662",
        "kuyu_adi": "2662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2663",
        "kuyu_adi": "2663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2664",
        "kuyu_adi": "2664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2665",
        "kuyu_adi": "2665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2666",
        "kuyu_adi": "2666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2667",
        "kuyu_adi": "2667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2668",
        "kuyu_adi": "2668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2669",
        "kuyu_adi": "2669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "267",
        "kuyu_adi": "267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2670",
        "kuyu_adi": "2670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2671",
        "kuyu_adi": "2671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2672",
        "kuyu_adi": "2672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2673",
        "kuyu_adi": "2673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2674",
        "kuyu_adi": "2674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2675",
        "kuyu_adi": "2675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2676",
        "kuyu_adi": "2676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2677",
        "kuyu_adi": "2677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2678",
        "kuyu_adi": "2678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2679",
        "kuyu_adi": "2679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "268",
        "kuyu_adi": "268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2680",
        "kuyu_adi": "2680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2681",
        "kuyu_adi": "2681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2682",
        "kuyu_adi": "2682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2683",
        "kuyu_adi": "2683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2684",
        "kuyu_adi": "2684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2685",
        "kuyu_adi": "2685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2686",
        "kuyu_adi": "2686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2687",
        "kuyu_adi": "2687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2688",
        "kuyu_adi": "2688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2689",
        "kuyu_adi": "2689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "269",
        "kuyu_adi": "269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2690",
        "kuyu_adi": "2690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2691",
        "kuyu_adi": "2691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2692",
        "kuyu_adi": "2692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2693",
        "kuyu_adi": "2693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2694",
        "kuyu_adi": "2694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2695",
        "kuyu_adi": "2695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2696",
        "kuyu_adi": "2696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2697",
        "kuyu_adi": "2697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2698",
        "kuyu_adi": "2698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2699",
        "kuyu_adi": "2699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "27",
        "kuyu_adi": "27",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "270",
        "kuyu_adi": "270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2700",
        "kuyu_adi": "2700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2701",
        "kuyu_adi": "2701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2702",
        "kuyu_adi": "2702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2703",
        "kuyu_adi": "2703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2704",
        "kuyu_adi": "2704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2705",
        "kuyu_adi": "2705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2706",
        "kuyu_adi": "2706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2707",
        "kuyu_adi": "2707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2708",
        "kuyu_adi": "2708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2709",
        "kuyu_adi": "2709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "271",
        "kuyu_adi": "271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2710",
        "kuyu_adi": "2710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2711",
        "kuyu_adi": "2711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2712",
        "kuyu_adi": "2712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2713",
        "kuyu_adi": "2713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2714",
        "kuyu_adi": "2714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2715",
        "kuyu_adi": "2715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2716",
        "kuyu_adi": "2716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2717",
        "kuyu_adi": "2717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2718",
        "kuyu_adi": "2718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2719",
        "kuyu_adi": "2719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "272",
        "kuyu_adi": "272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2720",
        "kuyu_adi": "2720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2721",
        "kuyu_adi": "2721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2722",
        "kuyu_adi": "2722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2723",
        "kuyu_adi": "2723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2724",
        "kuyu_adi": "2724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2725",
        "kuyu_adi": "2725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2726",
        "kuyu_adi": "2726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2727",
        "kuyu_adi": "2727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2728",
        "kuyu_adi": "2728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2729",
        "kuyu_adi": "2729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "273",
        "kuyu_adi": "273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2730",
        "kuyu_adi": "2730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2731",
        "kuyu_adi": "2731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2732",
        "kuyu_adi": "2732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2733",
        "kuyu_adi": "2733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2734",
        "kuyu_adi": "2734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2735",
        "kuyu_adi": "2735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2736",
        "kuyu_adi": "2736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2737",
        "kuyu_adi": "2737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2738",
        "kuyu_adi": "2738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2739",
        "kuyu_adi": "2739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "274",
        "kuyu_adi": "274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2740",
        "kuyu_adi": "2740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2741",
        "kuyu_adi": "2741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2742",
        "kuyu_adi": "2742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2743",
        "kuyu_adi": "2743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2744",
        "kuyu_adi": "2744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2745",
        "kuyu_adi": "2745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2746",
        "kuyu_adi": "2746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2747",
        "kuyu_adi": "2747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2748",
        "kuyu_adi": "2748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2749",
        "kuyu_adi": "2749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "275",
        "kuyu_adi": "275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2750",
        "kuyu_adi": "2750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2751",
        "kuyu_adi": "2751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2752",
        "kuyu_adi": "2752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2753",
        "kuyu_adi": "2753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2754",
        "kuyu_adi": "2754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2755",
        "kuyu_adi": "2755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2756",
        "kuyu_adi": "2756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2757",
        "kuyu_adi": "2757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2758",
        "kuyu_adi": "2758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2759",
        "kuyu_adi": "2759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "276",
        "kuyu_adi": "276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2760",
        "kuyu_adi": "2760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2761",
        "kuyu_adi": "2761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2762",
        "kuyu_adi": "2762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2763",
        "kuyu_adi": "2763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2764",
        "kuyu_adi": "2764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2765",
        "kuyu_adi": "2765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2766",
        "kuyu_adi": "2766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2767",
        "kuyu_adi": "2767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2768",
        "kuyu_adi": "2768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2769",
        "kuyu_adi": "2769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "277",
        "kuyu_adi": "277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2770",
        "kuyu_adi": "2770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2771",
        "kuyu_adi": "2771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2772",
        "kuyu_adi": "2772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2773",
        "kuyu_adi": "2773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2774",
        "kuyu_adi": "2774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2775",
        "kuyu_adi": "2775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2776",
        "kuyu_adi": "2776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2777",
        "kuyu_adi": "2777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2778",
        "kuyu_adi": "2778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2779",
        "kuyu_adi": "2779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "278",
        "kuyu_adi": "278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2780",
        "kuyu_adi": "2780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2781",
        "kuyu_adi": "2781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2782",
        "kuyu_adi": "2782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2783",
        "kuyu_adi": "2783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2784",
        "kuyu_adi": "2784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2785",
        "kuyu_adi": "2785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2786",
        "kuyu_adi": "2786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2787",
        "kuyu_adi": "2787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2788",
        "kuyu_adi": "2788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2789",
        "kuyu_adi": "2789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "279",
        "kuyu_adi": "279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2790",
        "kuyu_adi": "2790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2791",
        "kuyu_adi": "2791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2792",
        "kuyu_adi": "2792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2793",
        "kuyu_adi": "2793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2794",
        "kuyu_adi": "2794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2795",
        "kuyu_adi": "2795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2796",
        "kuyu_adi": "2796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2797",
        "kuyu_adi": "2797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2798",
        "kuyu_adi": "2798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2799",
        "kuyu_adi": "2799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "28",
        "kuyu_adi": "28",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "280",
        "kuyu_adi": "280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2800",
        "kuyu_adi": "2800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2801",
        "kuyu_adi": "2801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2802",
        "kuyu_adi": "2802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2803",
        "kuyu_adi": "2803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2804",
        "kuyu_adi": "2804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2805",
        "kuyu_adi": "2805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2806",
        "kuyu_adi": "2806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2807",
        "kuyu_adi": "2807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2808",
        "kuyu_adi": "2808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2809",
        "kuyu_adi": "2809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "281",
        "kuyu_adi": "281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2810",
        "kuyu_adi": "2810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2811",
        "kuyu_adi": "2811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2812",
        "kuyu_adi": "2812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2813",
        "kuyu_adi": "2813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2814",
        "kuyu_adi": "2814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2815",
        "kuyu_adi": "2815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2816",
        "kuyu_adi": "2816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2817",
        "kuyu_adi": "2817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2818",
        "kuyu_adi": "2818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2819",
        "kuyu_adi": "2819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "282",
        "kuyu_adi": "282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2820",
        "kuyu_adi": "2820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2821",
        "kuyu_adi": "2821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2822",
        "kuyu_adi": "2822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2823",
        "kuyu_adi": "2823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2824",
        "kuyu_adi": "2824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2825",
        "kuyu_adi": "2825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2826",
        "kuyu_adi": "2826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2827",
        "kuyu_adi": "2827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2828",
        "kuyu_adi": "2828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2829",
        "kuyu_adi": "2829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "283",
        "kuyu_adi": "283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2830",
        "kuyu_adi": "2830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2831",
        "kuyu_adi": "2831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2832",
        "kuyu_adi": "2832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2833",
        "kuyu_adi": "2833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2834",
        "kuyu_adi": "2834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2835",
        "kuyu_adi": "2835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2836",
        "kuyu_adi": "2836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2837",
        "kuyu_adi": "2837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2838",
        "kuyu_adi": "2838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2839",
        "kuyu_adi": "2839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "284",
        "kuyu_adi": "284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2840",
        "kuyu_adi": "2840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2841",
        "kuyu_adi": "2841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2842",
        "kuyu_adi": "2842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2843",
        "kuyu_adi": "2843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2844",
        "kuyu_adi": "2844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2845",
        "kuyu_adi": "2845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2846",
        "kuyu_adi": "2846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2847",
        "kuyu_adi": "2847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2848",
        "kuyu_adi": "2848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2849",
        "kuyu_adi": "2849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "285",
        "kuyu_adi": "285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2850",
        "kuyu_adi": "2850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2851",
        "kuyu_adi": "2851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2852",
        "kuyu_adi": "2852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2853",
        "kuyu_adi": "2853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2854",
        "kuyu_adi": "2854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2855",
        "kuyu_adi": "2855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2856",
        "kuyu_adi": "2856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2857",
        "kuyu_adi": "2857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2858",
        "kuyu_adi": "2858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2859",
        "kuyu_adi": "2859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "286",
        "kuyu_adi": "286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2860",
        "kuyu_adi": "2860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2861",
        "kuyu_adi": "2861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2862",
        "kuyu_adi": "2862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2863",
        "kuyu_adi": "2863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2864",
        "kuyu_adi": "2864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2865",
        "kuyu_adi": "2865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2866",
        "kuyu_adi": "2866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2867",
        "kuyu_adi": "2867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2868",
        "kuyu_adi": "2868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2869",
        "kuyu_adi": "2869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "287",
        "kuyu_adi": "287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2870",
        "kuyu_adi": "2870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2871",
        "kuyu_adi": "2871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2872",
        "kuyu_adi": "2872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2873",
        "kuyu_adi": "2873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2874",
        "kuyu_adi": "2874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2875",
        "kuyu_adi": "2875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2876",
        "kuyu_adi": "2876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2877",
        "kuyu_adi": "2877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2878",
        "kuyu_adi": "2878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2879",
        "kuyu_adi": "2879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "288",
        "kuyu_adi": "288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2880",
        "kuyu_adi": "2880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2881",
        "kuyu_adi": "2881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2882",
        "kuyu_adi": "2882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2883",
        "kuyu_adi": "2883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2884",
        "kuyu_adi": "2884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2885",
        "kuyu_adi": "2885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2886",
        "kuyu_adi": "2886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2887",
        "kuyu_adi": "2887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2888",
        "kuyu_adi": "2888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2889",
        "kuyu_adi": "2889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "289",
        "kuyu_adi": "289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2890",
        "kuyu_adi": "2890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2891",
        "kuyu_adi": "2891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2892",
        "kuyu_adi": "2892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2893",
        "kuyu_adi": "2893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2894",
        "kuyu_adi": "2894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2895",
        "kuyu_adi": "2895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2896",
        "kuyu_adi": "2896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2897",
        "kuyu_adi": "2897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2898",
        "kuyu_adi": "2898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2899",
        "kuyu_adi": "2899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "29",
        "kuyu_adi": "29",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "290",
        "kuyu_adi": "290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2900",
        "kuyu_adi": "2900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2901",
        "kuyu_adi": "2901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2902",
        "kuyu_adi": "2902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2903",
        "kuyu_adi": "2903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2904",
        "kuyu_adi": "2904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2905",
        "kuyu_adi": "2905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2906",
        "kuyu_adi": "2906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2907",
        "kuyu_adi": "2907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2908",
        "kuyu_adi": "2908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2909",
        "kuyu_adi": "2909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "291",
        "kuyu_adi": "291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2910",
        "kuyu_adi": "2910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2911",
        "kuyu_adi": "2911",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2912",
        "kuyu_adi": "2912",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2913",
        "kuyu_adi": "2913",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2914",
        "kuyu_adi": "2914",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2915",
        "kuyu_adi": "2915",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2916",
        "kuyu_adi": "2916",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2917",
        "kuyu_adi": "2917",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2918",
        "kuyu_adi": "2918",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2919",
        "kuyu_adi": "2919",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "292",
        "kuyu_adi": "292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2920",
        "kuyu_adi": "2920",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2921",
        "kuyu_adi": "2921",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2922",
        "kuyu_adi": "2922",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2923",
        "kuyu_adi": "2923",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2924",
        "kuyu_adi": "2924",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2925",
        "kuyu_adi": "2925",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2926",
        "kuyu_adi": "2926",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2927",
        "kuyu_adi": "2927",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2928",
        "kuyu_adi": "2928",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2929",
        "kuyu_adi": "2929",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "293",
        "kuyu_adi": "293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2930",
        "kuyu_adi": "2930",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2931",
        "kuyu_adi": "2931",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2932",
        "kuyu_adi": "2932",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2933",
        "kuyu_adi": "2933",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2934",
        "kuyu_adi": "2934",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2935",
        "kuyu_adi": "2935",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2936",
        "kuyu_adi": "2936",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2937",
        "kuyu_adi": "2937",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2938",
        "kuyu_adi": "2938",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2939",
        "kuyu_adi": "2939",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "294",
        "kuyu_adi": "294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2940",
        "kuyu_adi": "2940",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2941",
        "kuyu_adi": "2941",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2942",
        "kuyu_adi": "2942",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2943",
        "kuyu_adi": "2943",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2944",
        "kuyu_adi": "2944",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2945",
        "kuyu_adi": "2945",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2946",
        "kuyu_adi": "2946",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2947",
        "kuyu_adi": "2947",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2948",
        "kuyu_adi": "2948",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2949",
        "kuyu_adi": "2949",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "295",
        "kuyu_adi": "295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2950",
        "kuyu_adi": "2950",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2951",
        "kuyu_adi": "2951",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2952",
        "kuyu_adi": "2952",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2953",
        "kuyu_adi": "2953",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2954",
        "kuyu_adi": "2954",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2955",
        "kuyu_adi": "2955",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2956",
        "kuyu_adi": "2956",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2957",
        "kuyu_adi": "2957",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2958",
        "kuyu_adi": "2958",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2959",
        "kuyu_adi": "2959",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "296",
        "kuyu_adi": "296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2960",
        "kuyu_adi": "2960",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2961",
        "kuyu_adi": "2961",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2962",
        "kuyu_adi": "2962",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2963",
        "kuyu_adi": "2963",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2964",
        "kuyu_adi": "2964",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2965",
        "kuyu_adi": "2965",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2966",
        "kuyu_adi": "2966",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2967",
        "kuyu_adi": "2967",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2968",
        "kuyu_adi": "2968",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2969",
        "kuyu_adi": "2969",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "297",
        "kuyu_adi": "297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2970",
        "kuyu_adi": "2970",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2971",
        "kuyu_adi": "2971",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2972",
        "kuyu_adi": "2972",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2973",
        "kuyu_adi": "2973",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2974",
        "kuyu_adi": "2974",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2975",
        "kuyu_adi": "2975",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2976",
        "kuyu_adi": "2976",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2977",
        "kuyu_adi": "2977",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2978",
        "kuyu_adi": "2978",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2979",
        "kuyu_adi": "2979",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "298",
        "kuyu_adi": "298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2980",
        "kuyu_adi": "2980",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2981",
        "kuyu_adi": "2981",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2982",
        "kuyu_adi": "2982",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2983",
        "kuyu_adi": "2983",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2984",
        "kuyu_adi": "2984",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2985",
        "kuyu_adi": "2985",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2986",
        "kuyu_adi": "2986",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2987",
        "kuyu_adi": "2987",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2988",
        "kuyu_adi": "2988",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2989",
        "kuyu_adi": "2989",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "299",
        "kuyu_adi": "299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2990",
        "kuyu_adi": "2990",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2991",
        "kuyu_adi": "2991",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2992",
        "kuyu_adi": "2992",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2993",
        "kuyu_adi": "2993",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2994",
        "kuyu_adi": "2994",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2995",
        "kuyu_adi": "2995",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2996",
        "kuyu_adi": "2996",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2997",
        "kuyu_adi": "2997",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2998",
        "kuyu_adi": "2998",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "2999",
        "kuyu_adi": "2999",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3",
        "kuyu_adi": "3",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "30",
        "kuyu_adi": "30",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "300",
        "kuyu_adi": "300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3000",
        "kuyu_adi": "3000",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3001",
        "kuyu_adi": "3001",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3002",
        "kuyu_adi": "3002",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3003",
        "kuyu_adi": "3003",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3004",
        "kuyu_adi": "3004",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3005",
        "kuyu_adi": "3005",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3006",
        "kuyu_adi": "3006",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3007",
        "kuyu_adi": "3007",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3008",
        "kuyu_adi": "3008",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3009",
        "kuyu_adi": "3009",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "301",
        "kuyu_adi": "301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3010",
        "kuyu_adi": "3010",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3011",
        "kuyu_adi": "3011",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3012",
        "kuyu_adi": "3012",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3013",
        "kuyu_adi": "3013",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3014",
        "kuyu_adi": "3014",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3015",
        "kuyu_adi": "3015",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3016",
        "kuyu_adi": "3016",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3017",
        "kuyu_adi": "3017",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3018",
        "kuyu_adi": "3018",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3019",
        "kuyu_adi": "3019",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "302",
        "kuyu_adi": "302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3020",
        "kuyu_adi": "3020",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3021",
        "kuyu_adi": "3021",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3022",
        "kuyu_adi": "3022",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3023",
        "kuyu_adi": "3023",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3024",
        "kuyu_adi": "3024",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3025",
        "kuyu_adi": "3025",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3026",
        "kuyu_adi": "3026",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3027",
        "kuyu_adi": "3027",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3028",
        "kuyu_adi": "3028",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3029",
        "kuyu_adi": "3029",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "303",
        "kuyu_adi": "303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3030",
        "kuyu_adi": "3030",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3031",
        "kuyu_adi": "3031",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3032",
        "kuyu_adi": "3032",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3033",
        "kuyu_adi": "3033",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3034",
        "kuyu_adi": "3034",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3035",
        "kuyu_adi": "3035",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3036",
        "kuyu_adi": "3036",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3037",
        "kuyu_adi": "3037",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3038",
        "kuyu_adi": "3038",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3039",
        "kuyu_adi": "3039",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "304",
        "kuyu_adi": "304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3040",
        "kuyu_adi": "3040",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3041",
        "kuyu_adi": "3041",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3042",
        "kuyu_adi": "3042",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3043",
        "kuyu_adi": "3043",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3044",
        "kuyu_adi": "3044",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3045",
        "kuyu_adi": "3045",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3046",
        "kuyu_adi": "3046",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3047",
        "kuyu_adi": "3047",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3048",
        "kuyu_adi": "3048",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3049",
        "kuyu_adi": "3049",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "305",
        "kuyu_adi": "305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3050",
        "kuyu_adi": "3050",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3051",
        "kuyu_adi": "3051",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3052",
        "kuyu_adi": "3052",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3053",
        "kuyu_adi": "3053",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3054",
        "kuyu_adi": "3054",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3055",
        "kuyu_adi": "3055",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3056",
        "kuyu_adi": "3056",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3057",
        "kuyu_adi": "3057",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3058",
        "kuyu_adi": "3058",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3059",
        "kuyu_adi": "3059",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "306",
        "kuyu_adi": "306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3060",
        "kuyu_adi": "3060",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3061",
        "kuyu_adi": "3061",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3062",
        "kuyu_adi": "3062",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3063",
        "kuyu_adi": "3063",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3064",
        "kuyu_adi": "3064",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3065",
        "kuyu_adi": "3065",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3066",
        "kuyu_adi": "3066",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3067",
        "kuyu_adi": "3067",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3068",
        "kuyu_adi": "3068",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3069",
        "kuyu_adi": "3069",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "307",
        "kuyu_adi": "307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3070",
        "kuyu_adi": "3070",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3071",
        "kuyu_adi": "3071",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3072",
        "kuyu_adi": "3072",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3073",
        "kuyu_adi": "3073",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3074",
        "kuyu_adi": "3074",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3075",
        "kuyu_adi": "3075",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3076",
        "kuyu_adi": "3076",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3077",
        "kuyu_adi": "3077",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3078",
        "kuyu_adi": "3078",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3079",
        "kuyu_adi": "3079",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "308",
        "kuyu_adi": "308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3080",
        "kuyu_adi": "3080",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3081",
        "kuyu_adi": "3081",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3082",
        "kuyu_adi": "3082",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3083",
        "kuyu_adi": "3083",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3084",
        "kuyu_adi": "3084",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3085",
        "kuyu_adi": "3085",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3086",
        "kuyu_adi": "3086",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3087",
        "kuyu_adi": "3087",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3088",
        "kuyu_adi": "3088",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3089",
        "kuyu_adi": "3089",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "309",
        "kuyu_adi": "309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3090",
        "kuyu_adi": "3090",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3091",
        "kuyu_adi": "3091",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3092",
        "kuyu_adi": "3092",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3093",
        "kuyu_adi": "3093",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3094",
        "kuyu_adi": "3094",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3095",
        "kuyu_adi": "3095",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3096",
        "kuyu_adi": "3096",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3097",
        "kuyu_adi": "3097",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3098",
        "kuyu_adi": "3098",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3099",
        "kuyu_adi": "3099",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "31",
        "kuyu_adi": "31",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "310",
        "kuyu_adi": "310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3100",
        "kuyu_adi": "3100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3101",
        "kuyu_adi": "3101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3102",
        "kuyu_adi": "3102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3103",
        "kuyu_adi": "3103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3104",
        "kuyu_adi": "3104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3105",
        "kuyu_adi": "3105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3106",
        "kuyu_adi": "3106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3107",
        "kuyu_adi": "3107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3108",
        "kuyu_adi": "3108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3109",
        "kuyu_adi": "3109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "311",
        "kuyu_adi": "311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3110",
        "kuyu_adi": "3110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3111",
        "kuyu_adi": "3111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3112",
        "kuyu_adi": "3112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3113",
        "kuyu_adi": "3113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3114",
        "kuyu_adi": "3114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3115",
        "kuyu_adi": "3115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3116",
        "kuyu_adi": "3116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3117",
        "kuyu_adi": "3117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3118",
        "kuyu_adi": "3118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3119",
        "kuyu_adi": "3119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "312",
        "kuyu_adi": "312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3120",
        "kuyu_adi": "3120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3121",
        "kuyu_adi": "3121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3122",
        "kuyu_adi": "3122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3123",
        "kuyu_adi": "3123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3124",
        "kuyu_adi": "3124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3125",
        "kuyu_adi": "3125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3126",
        "kuyu_adi": "3126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3127",
        "kuyu_adi": "3127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3128",
        "kuyu_adi": "3128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3129",
        "kuyu_adi": "3129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "313",
        "kuyu_adi": "313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3130",
        "kuyu_adi": "3130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3131",
        "kuyu_adi": "3131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3132",
        "kuyu_adi": "3132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3133",
        "kuyu_adi": "3133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3134",
        "kuyu_adi": "3134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3135",
        "kuyu_adi": "3135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3136",
        "kuyu_adi": "3136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3137",
        "kuyu_adi": "3137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3138",
        "kuyu_adi": "3138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3139",
        "kuyu_adi": "3139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "314",
        "kuyu_adi": "314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3140",
        "kuyu_adi": "3140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3141",
        "kuyu_adi": "3141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3142",
        "kuyu_adi": "3142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3143",
        "kuyu_adi": "3143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3144",
        "kuyu_adi": "3144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3145",
        "kuyu_adi": "3145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3146",
        "kuyu_adi": "3146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3147",
        "kuyu_adi": "3147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3148",
        "kuyu_adi": "3148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3149",
        "kuyu_adi": "3149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "315",
        "kuyu_adi": "315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3150",
        "kuyu_adi": "3150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3151",
        "kuyu_adi": "3151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3152",
        "kuyu_adi": "3152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3153",
        "kuyu_adi": "3153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3154",
        "kuyu_adi": "3154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3155",
        "kuyu_adi": "3155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3156",
        "kuyu_adi": "3156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3157",
        "kuyu_adi": "3157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3158",
        "kuyu_adi": "3158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3159",
        "kuyu_adi": "3159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "316",
        "kuyu_adi": "316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3160",
        "kuyu_adi": "3160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3161",
        "kuyu_adi": "3161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3162",
        "kuyu_adi": "3162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3163",
        "kuyu_adi": "3163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3164",
        "kuyu_adi": "3164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3165",
        "kuyu_adi": "3165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3166",
        "kuyu_adi": "3166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3167",
        "kuyu_adi": "3167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3168",
        "kuyu_adi": "3168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3169",
        "kuyu_adi": "3169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "317",
        "kuyu_adi": "317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3170",
        "kuyu_adi": "3170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3171",
        "kuyu_adi": "3171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3172",
        "kuyu_adi": "3172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3173",
        "kuyu_adi": "3173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3174",
        "kuyu_adi": "3174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3175",
        "kuyu_adi": "3175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3176",
        "kuyu_adi": "3176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3177",
        "kuyu_adi": "3177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3178",
        "kuyu_adi": "3178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3179",
        "kuyu_adi": "3179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "318",
        "kuyu_adi": "318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3180",
        "kuyu_adi": "3180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3181",
        "kuyu_adi": "3181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3182",
        "kuyu_adi": "3182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3183",
        "kuyu_adi": "3183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3184",
        "kuyu_adi": "3184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3185",
        "kuyu_adi": "3185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3186",
        "kuyu_adi": "3186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3187",
        "kuyu_adi": "3187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3188",
        "kuyu_adi": "3188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3189",
        "kuyu_adi": "3189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "319",
        "kuyu_adi": "319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3190",
        "kuyu_adi": "3190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3191",
        "kuyu_adi": "3191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3192",
        "kuyu_adi": "3192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3193",
        "kuyu_adi": "3193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3194",
        "kuyu_adi": "3194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3195",
        "kuyu_adi": "3195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3196",
        "kuyu_adi": "3196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3197",
        "kuyu_adi": "3197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3198",
        "kuyu_adi": "3198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3199",
        "kuyu_adi": "3199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "32",
        "kuyu_adi": "32",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "320",
        "kuyu_adi": "320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3200",
        "kuyu_adi": "3200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3201",
        "kuyu_adi": "3201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3202",
        "kuyu_adi": "3202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3203",
        "kuyu_adi": "3203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3204",
        "kuyu_adi": "3204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3205",
        "kuyu_adi": "3205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3206",
        "kuyu_adi": "3206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3207",
        "kuyu_adi": "3207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3208",
        "kuyu_adi": "3208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3209",
        "kuyu_adi": "3209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "321",
        "kuyu_adi": "321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3210",
        "kuyu_adi": "3210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3211",
        "kuyu_adi": "3211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3212",
        "kuyu_adi": "3212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3213",
        "kuyu_adi": "3213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3214",
        "kuyu_adi": "3214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3215",
        "kuyu_adi": "3215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3216",
        "kuyu_adi": "3216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3217",
        "kuyu_adi": "3217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3218",
        "kuyu_adi": "3218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3219",
        "kuyu_adi": "3219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "322",
        "kuyu_adi": "322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3220",
        "kuyu_adi": "3220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3221",
        "kuyu_adi": "3221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3222",
        "kuyu_adi": "3222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3223",
        "kuyu_adi": "3223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3224",
        "kuyu_adi": "3224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3225",
        "kuyu_adi": "3225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3226",
        "kuyu_adi": "3226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3227",
        "kuyu_adi": "3227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3228",
        "kuyu_adi": "3228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3229",
        "kuyu_adi": "3229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "323",
        "kuyu_adi": "323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3230",
        "kuyu_adi": "3230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3231",
        "kuyu_adi": "3231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3232",
        "kuyu_adi": "3232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3233",
        "kuyu_adi": "3233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3234",
        "kuyu_adi": "3234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3235",
        "kuyu_adi": "3235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3236",
        "kuyu_adi": "3236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3237",
        "kuyu_adi": "3237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3238",
        "kuyu_adi": "3238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3239",
        "kuyu_adi": "3239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "324",
        "kuyu_adi": "324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3240",
        "kuyu_adi": "3240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3241",
        "kuyu_adi": "3241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3242",
        "kuyu_adi": "3242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3243",
        "kuyu_adi": "3243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3244",
        "kuyu_adi": "3244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3245",
        "kuyu_adi": "3245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3246",
        "kuyu_adi": "3246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3247",
        "kuyu_adi": "3247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3248",
        "kuyu_adi": "3248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3249",
        "kuyu_adi": "3249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "325",
        "kuyu_adi": "325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3250",
        "kuyu_adi": "3250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3251",
        "kuyu_adi": "3251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3252",
        "kuyu_adi": "3252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3253",
        "kuyu_adi": "3253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3254",
        "kuyu_adi": "3254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3255",
        "kuyu_adi": "3255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3256",
        "kuyu_adi": "3256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3257",
        "kuyu_adi": "3257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3258",
        "kuyu_adi": "3258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3259",
        "kuyu_adi": "3259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "326",
        "kuyu_adi": "326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3260",
        "kuyu_adi": "3260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3261",
        "kuyu_adi": "3261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3262",
        "kuyu_adi": "3262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3263",
        "kuyu_adi": "3263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3264",
        "kuyu_adi": "3264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3265",
        "kuyu_adi": "3265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3266",
        "kuyu_adi": "3266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3267",
        "kuyu_adi": "3267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3268",
        "kuyu_adi": "3268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3269",
        "kuyu_adi": "3269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "327",
        "kuyu_adi": "327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3270",
        "kuyu_adi": "3270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3271",
        "kuyu_adi": "3271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3272",
        "kuyu_adi": "3272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3273",
        "kuyu_adi": "3273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3274",
        "kuyu_adi": "3274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3275",
        "kuyu_adi": "3275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3276",
        "kuyu_adi": "3276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3277",
        "kuyu_adi": "3277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3278",
        "kuyu_adi": "3278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3279",
        "kuyu_adi": "3279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "328",
        "kuyu_adi": "328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3280",
        "kuyu_adi": "3280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3281",
        "kuyu_adi": "3281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3282",
        "kuyu_adi": "3282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3283",
        "kuyu_adi": "3283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3284",
        "kuyu_adi": "3284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3285",
        "kuyu_adi": "3285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3286",
        "kuyu_adi": "3286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3287",
        "kuyu_adi": "3287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3288",
        "kuyu_adi": "3288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3289",
        "kuyu_adi": "3289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "329",
        "kuyu_adi": "329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3290",
        "kuyu_adi": "3290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3291",
        "kuyu_adi": "3291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3292",
        "kuyu_adi": "3292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3293",
        "kuyu_adi": "3293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3294",
        "kuyu_adi": "3294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3295",
        "kuyu_adi": "3295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3296",
        "kuyu_adi": "3296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3297",
        "kuyu_adi": "3297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3298",
        "kuyu_adi": "3298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3299",
        "kuyu_adi": "3299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "33",
        "kuyu_adi": "33",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "330",
        "kuyu_adi": "330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3300",
        "kuyu_adi": "3300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3301",
        "kuyu_adi": "3301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3302",
        "kuyu_adi": "3302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3303",
        "kuyu_adi": "3303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3304",
        "kuyu_adi": "3304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3305",
        "kuyu_adi": "3305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3306",
        "kuyu_adi": "3306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3307",
        "kuyu_adi": "3307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3308",
        "kuyu_adi": "3308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3309",
        "kuyu_adi": "3309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "331",
        "kuyu_adi": "331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3310",
        "kuyu_adi": "3310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3311",
        "kuyu_adi": "3311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3312",
        "kuyu_adi": "3312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3313",
        "kuyu_adi": "3313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3314",
        "kuyu_adi": "3314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3315",
        "kuyu_adi": "3315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3316",
        "kuyu_adi": "3316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3317",
        "kuyu_adi": "3317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3318",
        "kuyu_adi": "3318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3319",
        "kuyu_adi": "3319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "332",
        "kuyu_adi": "332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3320",
        "kuyu_adi": "3320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3321",
        "kuyu_adi": "3321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3322",
        "kuyu_adi": "3322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3323",
        "kuyu_adi": "3323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3324",
        "kuyu_adi": "3324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3325",
        "kuyu_adi": "3325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3326",
        "kuyu_adi": "3326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3327",
        "kuyu_adi": "3327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3328",
        "kuyu_adi": "3328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3329",
        "kuyu_adi": "3329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "333",
        "kuyu_adi": "333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3330",
        "kuyu_adi": "3330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3331",
        "kuyu_adi": "3331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3332",
        "kuyu_adi": "3332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3333",
        "kuyu_adi": "3333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3334",
        "kuyu_adi": "3334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3335",
        "kuyu_adi": "3335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3336",
        "kuyu_adi": "3336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3337",
        "kuyu_adi": "3337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3338",
        "kuyu_adi": "3338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3339",
        "kuyu_adi": "3339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "334",
        "kuyu_adi": "334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3340",
        "kuyu_adi": "3340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3341",
        "kuyu_adi": "3341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3342",
        "kuyu_adi": "3342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3343",
        "kuyu_adi": "3343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3344",
        "kuyu_adi": "3344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3345",
        "kuyu_adi": "3345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3346",
        "kuyu_adi": "3346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3347",
        "kuyu_adi": "3347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3348",
        "kuyu_adi": "3348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3349",
        "kuyu_adi": "3349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "335",
        "kuyu_adi": "335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3350",
        "kuyu_adi": "3350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3351",
        "kuyu_adi": "3351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3352",
        "kuyu_adi": "3352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3353",
        "kuyu_adi": "3353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3354",
        "kuyu_adi": "3354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3355",
        "kuyu_adi": "3355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3356",
        "kuyu_adi": "3356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3357",
        "kuyu_adi": "3357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3358",
        "kuyu_adi": "3358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3359",
        "kuyu_adi": "3359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "336",
        "kuyu_adi": "336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3360",
        "kuyu_adi": "3360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3361",
        "kuyu_adi": "3361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3362",
        "kuyu_adi": "3362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3363",
        "kuyu_adi": "3363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3364",
        "kuyu_adi": "3364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3365",
        "kuyu_adi": "3365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3366",
        "kuyu_adi": "3366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3367",
        "kuyu_adi": "3367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3368",
        "kuyu_adi": "3368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3369",
        "kuyu_adi": "3369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "337",
        "kuyu_adi": "337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3370",
        "kuyu_adi": "3370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3371",
        "kuyu_adi": "3371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3372",
        "kuyu_adi": "3372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3373",
        "kuyu_adi": "3373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3374",
        "kuyu_adi": "3374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3375",
        "kuyu_adi": "3375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3376",
        "kuyu_adi": "3376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3377",
        "kuyu_adi": "3377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3378",
        "kuyu_adi": "3378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3379",
        "kuyu_adi": "3379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "338",
        "kuyu_adi": "338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3380",
        "kuyu_adi": "3380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3381",
        "kuyu_adi": "3381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3382",
        "kuyu_adi": "3382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3383",
        "kuyu_adi": "3383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3384",
        "kuyu_adi": "3384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3385",
        "kuyu_adi": "3385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3386",
        "kuyu_adi": "3386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3387",
        "kuyu_adi": "3387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3388",
        "kuyu_adi": "3388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3389",
        "kuyu_adi": "3389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "339",
        "kuyu_adi": "339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3390",
        "kuyu_adi": "3390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3391",
        "kuyu_adi": "3391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3392",
        "kuyu_adi": "3392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3393",
        "kuyu_adi": "3393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3394",
        "kuyu_adi": "3394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3395",
        "kuyu_adi": "3395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3396",
        "kuyu_adi": "3396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3397",
        "kuyu_adi": "3397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3398",
        "kuyu_adi": "3398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3399",
        "kuyu_adi": "3399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "34",
        "kuyu_adi": "34",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "340",
        "kuyu_adi": "340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3400",
        "kuyu_adi": "3400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3401",
        "kuyu_adi": "3401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3402",
        "kuyu_adi": "3402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3403",
        "kuyu_adi": "3403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3404",
        "kuyu_adi": "3404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3405",
        "kuyu_adi": "3405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3406",
        "kuyu_adi": "3406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3407",
        "kuyu_adi": "3407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3408",
        "kuyu_adi": "3408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3409",
        "kuyu_adi": "3409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "341",
        "kuyu_adi": "341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3410",
        "kuyu_adi": "3410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3411",
        "kuyu_adi": "3411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3412",
        "kuyu_adi": "3412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3413",
        "kuyu_adi": "3413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3414",
        "kuyu_adi": "3414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3415",
        "kuyu_adi": "3415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3416",
        "kuyu_adi": "3416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3417",
        "kuyu_adi": "3417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3418",
        "kuyu_adi": "3418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3419",
        "kuyu_adi": "3419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "342",
        "kuyu_adi": "342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3420",
        "kuyu_adi": "3420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3421",
        "kuyu_adi": "3421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3422",
        "kuyu_adi": "3422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3423",
        "kuyu_adi": "3423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3424",
        "kuyu_adi": "3424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3425",
        "kuyu_adi": "3425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3426",
        "kuyu_adi": "3426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3427",
        "kuyu_adi": "3427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3428",
        "kuyu_adi": "3428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3429",
        "kuyu_adi": "3429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "343",
        "kuyu_adi": "343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3430",
        "kuyu_adi": "3430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3431",
        "kuyu_adi": "3431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3432",
        "kuyu_adi": "3432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3433",
        "kuyu_adi": "3433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3434",
        "kuyu_adi": "3434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3435",
        "kuyu_adi": "3435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3436",
        "kuyu_adi": "3436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3437",
        "kuyu_adi": "3437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3438",
        "kuyu_adi": "3438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3439",
        "kuyu_adi": "3439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "344",
        "kuyu_adi": "344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3440",
        "kuyu_adi": "3440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3441",
        "kuyu_adi": "3441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3442",
        "kuyu_adi": "3442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3443",
        "kuyu_adi": "3443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3444",
        "kuyu_adi": "3444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3445",
        "kuyu_adi": "3445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3446",
        "kuyu_adi": "3446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3447",
        "kuyu_adi": "3447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3448",
        "kuyu_adi": "3448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3449",
        "kuyu_adi": "3449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "345",
        "kuyu_adi": "345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3450",
        "kuyu_adi": "3450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3451",
        "kuyu_adi": "3451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3452",
        "kuyu_adi": "3452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3453",
        "kuyu_adi": "3453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3454",
        "kuyu_adi": "3454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3455",
        "kuyu_adi": "3455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3456",
        "kuyu_adi": "3456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3457",
        "kuyu_adi": "3457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3458",
        "kuyu_adi": "3458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3459",
        "kuyu_adi": "3459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "346",
        "kuyu_adi": "346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3460",
        "kuyu_adi": "3460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3461",
        "kuyu_adi": "3461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3462",
        "kuyu_adi": "3462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3463",
        "kuyu_adi": "3463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3464",
        "kuyu_adi": "3464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3465",
        "kuyu_adi": "3465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3466",
        "kuyu_adi": "3466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3467",
        "kuyu_adi": "3467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3468",
        "kuyu_adi": "3468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3469",
        "kuyu_adi": "3469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "347",
        "kuyu_adi": "347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3470",
        "kuyu_adi": "3470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3471",
        "kuyu_adi": "3471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3472",
        "kuyu_adi": "3472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3473",
        "kuyu_adi": "3473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3474",
        "kuyu_adi": "3474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3475",
        "kuyu_adi": "3475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3476",
        "kuyu_adi": "3476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3477",
        "kuyu_adi": "3477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3478",
        "kuyu_adi": "3478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3479",
        "kuyu_adi": "3479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "348",
        "kuyu_adi": "348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3480",
        "kuyu_adi": "3480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3481",
        "kuyu_adi": "3481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3482",
        "kuyu_adi": "3482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3483",
        "kuyu_adi": "3483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3484",
        "kuyu_adi": "3484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3485",
        "kuyu_adi": "3485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3486",
        "kuyu_adi": "3486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3487",
        "kuyu_adi": "3487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3488",
        "kuyu_adi": "3488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3489",
        "kuyu_adi": "3489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "349",
        "kuyu_adi": "349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3490",
        "kuyu_adi": "3490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3491",
        "kuyu_adi": "3491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3492",
        "kuyu_adi": "3492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3493",
        "kuyu_adi": "3493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3494",
        "kuyu_adi": "3494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3495",
        "kuyu_adi": "3495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3496",
        "kuyu_adi": "3496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3497",
        "kuyu_adi": "3497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3498",
        "kuyu_adi": "3498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3499",
        "kuyu_adi": "3499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "35",
        "kuyu_adi": "35",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "350",
        "kuyu_adi": "350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3500",
        "kuyu_adi": "3500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3501",
        "kuyu_adi": "3501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3502",
        "kuyu_adi": "3502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3503",
        "kuyu_adi": "3503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3504",
        "kuyu_adi": "3504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3505",
        "kuyu_adi": "3505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3506",
        "kuyu_adi": "3506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3507",
        "kuyu_adi": "3507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3508",
        "kuyu_adi": "3508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3509",
        "kuyu_adi": "3509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "351",
        "kuyu_adi": "351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3510",
        "kuyu_adi": "3510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3511",
        "kuyu_adi": "3511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3512",
        "kuyu_adi": "3512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3513",
        "kuyu_adi": "3513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3514",
        "kuyu_adi": "3514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3515",
        "kuyu_adi": "3515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3516",
        "kuyu_adi": "3516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3517",
        "kuyu_adi": "3517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3518",
        "kuyu_adi": "3518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3519",
        "kuyu_adi": "3519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "352",
        "kuyu_adi": "352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3520",
        "kuyu_adi": "3520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3521",
        "kuyu_adi": "3521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3522",
        "kuyu_adi": "3522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3523",
        "kuyu_adi": "3523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3524",
        "kuyu_adi": "3524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3525",
        "kuyu_adi": "3525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3526",
        "kuyu_adi": "3526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3527",
        "kuyu_adi": "3527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3528",
        "kuyu_adi": "3528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3529",
        "kuyu_adi": "3529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "353",
        "kuyu_adi": "353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3530",
        "kuyu_adi": "3530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3531",
        "kuyu_adi": "3531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3532",
        "kuyu_adi": "3532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3533",
        "kuyu_adi": "3533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3534",
        "kuyu_adi": "3534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3535",
        "kuyu_adi": "3535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3536",
        "kuyu_adi": "3536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3537",
        "kuyu_adi": "3537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3538",
        "kuyu_adi": "3538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3539",
        "kuyu_adi": "3539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "354",
        "kuyu_adi": "354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3540",
        "kuyu_adi": "3540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3541",
        "kuyu_adi": "3541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3542",
        "kuyu_adi": "3542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3543",
        "kuyu_adi": "3543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3544",
        "kuyu_adi": "3544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3545",
        "kuyu_adi": "3545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3546",
        "kuyu_adi": "3546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3547",
        "kuyu_adi": "3547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3548",
        "kuyu_adi": "3548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3549",
        "kuyu_adi": "3549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "355",
        "kuyu_adi": "355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3550",
        "kuyu_adi": "3550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3551",
        "kuyu_adi": "3551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3552",
        "kuyu_adi": "3552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3553",
        "kuyu_adi": "3553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3554",
        "kuyu_adi": "3554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3555",
        "kuyu_adi": "3555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3556",
        "kuyu_adi": "3556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3557",
        "kuyu_adi": "3557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3558",
        "kuyu_adi": "3558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3559",
        "kuyu_adi": "3559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "356",
        "kuyu_adi": "356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3560",
        "kuyu_adi": "3560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3561",
        "kuyu_adi": "3561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3562",
        "kuyu_adi": "3562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3563",
        "kuyu_adi": "3563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3564",
        "kuyu_adi": "3564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3565",
        "kuyu_adi": "3565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3566",
        "kuyu_adi": "3566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3567",
        "kuyu_adi": "3567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3568",
        "kuyu_adi": "3568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3569",
        "kuyu_adi": "3569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "357",
        "kuyu_adi": "357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3570",
        "kuyu_adi": "3570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3571",
        "kuyu_adi": "3571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3572",
        "kuyu_adi": "3572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3573",
        "kuyu_adi": "3573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3574",
        "kuyu_adi": "3574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3575",
        "kuyu_adi": "3575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3576",
        "kuyu_adi": "3576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3577",
        "kuyu_adi": "3577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3578",
        "kuyu_adi": "3578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3579",
        "kuyu_adi": "3579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "358",
        "kuyu_adi": "358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3580",
        "kuyu_adi": "3580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3581",
        "kuyu_adi": "3581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3582",
        "kuyu_adi": "3582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3583",
        "kuyu_adi": "3583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3584",
        "kuyu_adi": "3584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3585",
        "kuyu_adi": "3585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3586",
        "kuyu_adi": "3586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3587",
        "kuyu_adi": "3587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3588",
        "kuyu_adi": "3588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3589",
        "kuyu_adi": "3589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "359",
        "kuyu_adi": "359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3590",
        "kuyu_adi": "3590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3591",
        "kuyu_adi": "3591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3592",
        "kuyu_adi": "3592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3593",
        "kuyu_adi": "3593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3594",
        "kuyu_adi": "3594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3595",
        "kuyu_adi": "3595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3596",
        "kuyu_adi": "3596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3597",
        "kuyu_adi": "3597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3598",
        "kuyu_adi": "3598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3599",
        "kuyu_adi": "3599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "36",
        "kuyu_adi": "36",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "360",
        "kuyu_adi": "360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3600",
        "kuyu_adi": "3600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3601",
        "kuyu_adi": "3601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3602",
        "kuyu_adi": "3602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3603",
        "kuyu_adi": "3603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3604",
        "kuyu_adi": "3604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3605",
        "kuyu_adi": "3605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3606",
        "kuyu_adi": "3606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3607",
        "kuyu_adi": "3607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3608",
        "kuyu_adi": "3608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3609",
        "kuyu_adi": "3609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "361",
        "kuyu_adi": "361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3610",
        "kuyu_adi": "3610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3611",
        "kuyu_adi": "3611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3612",
        "kuyu_adi": "3612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3613",
        "kuyu_adi": "3613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3614",
        "kuyu_adi": "3614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3615",
        "kuyu_adi": "3615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3616",
        "kuyu_adi": "3616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3617",
        "kuyu_adi": "3617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3618",
        "kuyu_adi": "3618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3619",
        "kuyu_adi": "3619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "362",
        "kuyu_adi": "362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3620",
        "kuyu_adi": "3620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3621",
        "kuyu_adi": "3621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3622",
        "kuyu_adi": "3622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3623",
        "kuyu_adi": "3623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3624",
        "kuyu_adi": "3624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3625",
        "kuyu_adi": "3625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3626",
        "kuyu_adi": "3626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3627",
        "kuyu_adi": "3627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3628",
        "kuyu_adi": "3628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3629",
        "kuyu_adi": "3629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "363",
        "kuyu_adi": "363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3630",
        "kuyu_adi": "3630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3631",
        "kuyu_adi": "3631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3632",
        "kuyu_adi": "3632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3633",
        "kuyu_adi": "3633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3634",
        "kuyu_adi": "3634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3635",
        "kuyu_adi": "3635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3636",
        "kuyu_adi": "3636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3637",
        "kuyu_adi": "3637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3638",
        "kuyu_adi": "3638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3639",
        "kuyu_adi": "3639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "364",
        "kuyu_adi": "364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3640",
        "kuyu_adi": "3640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3641",
        "kuyu_adi": "3641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3642",
        "kuyu_adi": "3642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3643",
        "kuyu_adi": "3643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3644",
        "kuyu_adi": "3644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3645",
        "kuyu_adi": "3645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3646",
        "kuyu_adi": "3646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3647",
        "kuyu_adi": "3647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3648",
        "kuyu_adi": "3648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3649",
        "kuyu_adi": "3649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "365",
        "kuyu_adi": "365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3650",
        "kuyu_adi": "3650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3651",
        "kuyu_adi": "3651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3652",
        "kuyu_adi": "3652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3653",
        "kuyu_adi": "3653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3654",
        "kuyu_adi": "3654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3655",
        "kuyu_adi": "3655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3656",
        "kuyu_adi": "3656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3657",
        "kuyu_adi": "3657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3658",
        "kuyu_adi": "3658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3659",
        "kuyu_adi": "3659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "366",
        "kuyu_adi": "366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3660",
        "kuyu_adi": "3660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3661",
        "kuyu_adi": "3661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3662",
        "kuyu_adi": "3662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3663",
        "kuyu_adi": "3663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3664",
        "kuyu_adi": "3664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3665",
        "kuyu_adi": "3665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3666",
        "kuyu_adi": "3666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3667",
        "kuyu_adi": "3667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3668",
        "kuyu_adi": "3668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3669",
        "kuyu_adi": "3669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "367",
        "kuyu_adi": "367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3670",
        "kuyu_adi": "3670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3671",
        "kuyu_adi": "3671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3672",
        "kuyu_adi": "3672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3673",
        "kuyu_adi": "3673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3674",
        "kuyu_adi": "3674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3675",
        "kuyu_adi": "3675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3676",
        "kuyu_adi": "3676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3677",
        "kuyu_adi": "3677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3678",
        "kuyu_adi": "3678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3679",
        "kuyu_adi": "3679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "368",
        "kuyu_adi": "368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3680",
        "kuyu_adi": "3680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3681",
        "kuyu_adi": "3681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3682",
        "kuyu_adi": "3682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3683",
        "kuyu_adi": "3683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3684",
        "kuyu_adi": "3684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3685",
        "kuyu_adi": "3685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3686",
        "kuyu_adi": "3686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3687",
        "kuyu_adi": "3687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3688",
        "kuyu_adi": "3688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3689",
        "kuyu_adi": "3689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "369",
        "kuyu_adi": "369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3690",
        "kuyu_adi": "3690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3691",
        "kuyu_adi": "3691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3692",
        "kuyu_adi": "3692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3693",
        "kuyu_adi": "3693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3694",
        "kuyu_adi": "3694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3695",
        "kuyu_adi": "3695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3696",
        "kuyu_adi": "3696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3697",
        "kuyu_adi": "3697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3698",
        "kuyu_adi": "3698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3699",
        "kuyu_adi": "3699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "37",
        "kuyu_adi": "37",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "370",
        "kuyu_adi": "370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3700",
        "kuyu_adi": "3700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3701",
        "kuyu_adi": "3701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3702",
        "kuyu_adi": "3702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3703",
        "kuyu_adi": "3703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3704",
        "kuyu_adi": "3704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3705",
        "kuyu_adi": "3705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3706",
        "kuyu_adi": "3706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3707",
        "kuyu_adi": "3707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3708",
        "kuyu_adi": "3708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3709",
        "kuyu_adi": "3709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "371",
        "kuyu_adi": "371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3710",
        "kuyu_adi": "3710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3711",
        "kuyu_adi": "3711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3712",
        "kuyu_adi": "3712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3713",
        "kuyu_adi": "3713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3714",
        "kuyu_adi": "3714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3715",
        "kuyu_adi": "3715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3716",
        "kuyu_adi": "3716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3717",
        "kuyu_adi": "3717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3718",
        "kuyu_adi": "3718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3719",
        "kuyu_adi": "3719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "372",
        "kuyu_adi": "372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3720",
        "kuyu_adi": "3720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3721",
        "kuyu_adi": "3721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3722",
        "kuyu_adi": "3722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3723",
        "kuyu_adi": "3723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3724",
        "kuyu_adi": "3724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3725",
        "kuyu_adi": "3725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3726",
        "kuyu_adi": "3726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3727",
        "kuyu_adi": "3727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3728",
        "kuyu_adi": "3728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3729",
        "kuyu_adi": "3729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "373",
        "kuyu_adi": "373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3730",
        "kuyu_adi": "3730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3731",
        "kuyu_adi": "3731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3732",
        "kuyu_adi": "3732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3733",
        "kuyu_adi": "3733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3734",
        "kuyu_adi": "3734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3735",
        "kuyu_adi": "3735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3736",
        "kuyu_adi": "3736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3737",
        "kuyu_adi": "3737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3738",
        "kuyu_adi": "3738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3739",
        "kuyu_adi": "3739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "374",
        "kuyu_adi": "374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3740",
        "kuyu_adi": "3740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3741",
        "kuyu_adi": "3741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3742",
        "kuyu_adi": "3742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3743",
        "kuyu_adi": "3743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3744",
        "kuyu_adi": "3744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3745",
        "kuyu_adi": "3745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3746",
        "kuyu_adi": "3746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3747",
        "kuyu_adi": "3747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3748",
        "kuyu_adi": "3748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3749",
        "kuyu_adi": "3749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "375",
        "kuyu_adi": "375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3750",
        "kuyu_adi": "3750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3751",
        "kuyu_adi": "3751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3752",
        "kuyu_adi": "3752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3753",
        "kuyu_adi": "3753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3754",
        "kuyu_adi": "3754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3755",
        "kuyu_adi": "3755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3756",
        "kuyu_adi": "3756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3757",
        "kuyu_adi": "3757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3758",
        "kuyu_adi": "3758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3759",
        "kuyu_adi": "3759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "376",
        "kuyu_adi": "376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3760",
        "kuyu_adi": "3760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3761",
        "kuyu_adi": "3761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3762",
        "kuyu_adi": "3762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3763",
        "kuyu_adi": "3763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3764",
        "kuyu_adi": "3764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3765",
        "kuyu_adi": "3765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3766",
        "kuyu_adi": "3766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3767",
        "kuyu_adi": "3767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3768",
        "kuyu_adi": "3768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3769",
        "kuyu_adi": "3769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "377",
        "kuyu_adi": "377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3770",
        "kuyu_adi": "3770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3771",
        "kuyu_adi": "3771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3772",
        "kuyu_adi": "3772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3773",
        "kuyu_adi": "3773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3774",
        "kuyu_adi": "3774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3775",
        "kuyu_adi": "3775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3776",
        "kuyu_adi": "3776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3777",
        "kuyu_adi": "3777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3778",
        "kuyu_adi": "3778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3779",
        "kuyu_adi": "3779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "378",
        "kuyu_adi": "378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3780",
        "kuyu_adi": "3780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3781",
        "kuyu_adi": "3781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3782",
        "kuyu_adi": "3782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3783",
        "kuyu_adi": "3783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3784",
        "kuyu_adi": "3784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3785",
        "kuyu_adi": "3785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3786",
        "kuyu_adi": "3786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3787",
        "kuyu_adi": "3787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3788",
        "kuyu_adi": "3788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3789",
        "kuyu_adi": "3789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "379",
        "kuyu_adi": "379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3790",
        "kuyu_adi": "3790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3791",
        "kuyu_adi": "3791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3792",
        "kuyu_adi": "3792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3793",
        "kuyu_adi": "3793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3794",
        "kuyu_adi": "3794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3795",
        "kuyu_adi": "3795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3796",
        "kuyu_adi": "3796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3797",
        "kuyu_adi": "3797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3798",
        "kuyu_adi": "3798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3799",
        "kuyu_adi": "3799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "38",
        "kuyu_adi": "38",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "380",
        "kuyu_adi": "380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3800",
        "kuyu_adi": "3800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3801",
        "kuyu_adi": "3801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3802",
        "kuyu_adi": "3802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3803",
        "kuyu_adi": "3803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3804",
        "kuyu_adi": "3804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3805",
        "kuyu_adi": "3805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3806",
        "kuyu_adi": "3806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3807",
        "kuyu_adi": "3807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3808",
        "kuyu_adi": "3808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3809",
        "kuyu_adi": "3809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "381",
        "kuyu_adi": "381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3810",
        "kuyu_adi": "3810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3811",
        "kuyu_adi": "3811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3812",
        "kuyu_adi": "3812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3813",
        "kuyu_adi": "3813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3814",
        "kuyu_adi": "3814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3815",
        "kuyu_adi": "3815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3816",
        "kuyu_adi": "3816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3817",
        "kuyu_adi": "3817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3818",
        "kuyu_adi": "3818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3819",
        "kuyu_adi": "3819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "382",
        "kuyu_adi": "382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3820",
        "kuyu_adi": "3820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3821",
        "kuyu_adi": "3821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3822",
        "kuyu_adi": "3822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3823",
        "kuyu_adi": "3823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3824",
        "kuyu_adi": "3824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3825",
        "kuyu_adi": "3825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3826",
        "kuyu_adi": "3826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3827",
        "kuyu_adi": "3827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3828",
        "kuyu_adi": "3828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3829",
        "kuyu_adi": "3829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "383",
        "kuyu_adi": "383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3830",
        "kuyu_adi": "3830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3831",
        "kuyu_adi": "3831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3832",
        "kuyu_adi": "3832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3833",
        "kuyu_adi": "3833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3834",
        "kuyu_adi": "3834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3835",
        "kuyu_adi": "3835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3836",
        "kuyu_adi": "3836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3837",
        "kuyu_adi": "3837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3838",
        "kuyu_adi": "3838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3839",
        "kuyu_adi": "3839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "384",
        "kuyu_adi": "384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3840",
        "kuyu_adi": "3840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3841",
        "kuyu_adi": "3841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3842",
        "kuyu_adi": "3842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3843",
        "kuyu_adi": "3843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3844",
        "kuyu_adi": "3844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3845",
        "kuyu_adi": "3845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3846",
        "kuyu_adi": "3846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3847",
        "kuyu_adi": "3847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3848",
        "kuyu_adi": "3848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3849",
        "kuyu_adi": "3849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "385",
        "kuyu_adi": "385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3850",
        "kuyu_adi": "3850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3851",
        "kuyu_adi": "3851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3852",
        "kuyu_adi": "3852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3853",
        "kuyu_adi": "3853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3854",
        "kuyu_adi": "3854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3855",
        "kuyu_adi": "3855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3856",
        "kuyu_adi": "3856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3857",
        "kuyu_adi": "3857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3858",
        "kuyu_adi": "3858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3859",
        "kuyu_adi": "3859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "386",
        "kuyu_adi": "386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3860",
        "kuyu_adi": "3860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3861",
        "kuyu_adi": "3861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3862",
        "kuyu_adi": "3862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3863",
        "kuyu_adi": "3863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3864",
        "kuyu_adi": "3864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3865",
        "kuyu_adi": "3865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3866",
        "kuyu_adi": "3866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3867",
        "kuyu_adi": "3867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3868",
        "kuyu_adi": "3868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3869",
        "kuyu_adi": "3869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "387",
        "kuyu_adi": "387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3870",
        "kuyu_adi": "3870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3871",
        "kuyu_adi": "3871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3872",
        "kuyu_adi": "3872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3873",
        "kuyu_adi": "3873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3874",
        "kuyu_adi": "3874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3875",
        "kuyu_adi": "3875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3876",
        "kuyu_adi": "3876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3877",
        "kuyu_adi": "3877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3878",
        "kuyu_adi": "3878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3879",
        "kuyu_adi": "3879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "388",
        "kuyu_adi": "388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3880",
        "kuyu_adi": "3880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3881",
        "kuyu_adi": "3881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3882",
        "kuyu_adi": "3882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3883",
        "kuyu_adi": "3883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3884",
        "kuyu_adi": "3884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3885",
        "kuyu_adi": "3885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3886",
        "kuyu_adi": "3886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3887",
        "kuyu_adi": "3887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3888",
        "kuyu_adi": "3888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3889",
        "kuyu_adi": "3889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "389",
        "kuyu_adi": "389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3890",
        "kuyu_adi": "3890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3891",
        "kuyu_adi": "3891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3892",
        "kuyu_adi": "3892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3893",
        "kuyu_adi": "3893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3894",
        "kuyu_adi": "3894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3895",
        "kuyu_adi": "3895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3896",
        "kuyu_adi": "3896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3897",
        "kuyu_adi": "3897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3898",
        "kuyu_adi": "3898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3899",
        "kuyu_adi": "3899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "39",
        "kuyu_adi": "39",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "390",
        "kuyu_adi": "390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3900",
        "kuyu_adi": "3900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3901",
        "kuyu_adi": "3901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3902",
        "kuyu_adi": "3902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3903",
        "kuyu_adi": "3903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3904",
        "kuyu_adi": "3904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3905",
        "kuyu_adi": "3905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3906",
        "kuyu_adi": "3906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3907",
        "kuyu_adi": "3907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3908",
        "kuyu_adi": "3908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3909",
        "kuyu_adi": "3909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "391",
        "kuyu_adi": "391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3910",
        "kuyu_adi": "3910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3911",
        "kuyu_adi": "3911",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3912",
        "kuyu_adi": "3912",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3913",
        "kuyu_adi": "3913",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3914",
        "kuyu_adi": "3914",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3915",
        "kuyu_adi": "3915",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3916",
        "kuyu_adi": "3916",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3917",
        "kuyu_adi": "3917",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3918",
        "kuyu_adi": "3918",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3919",
        "kuyu_adi": "3919",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "392",
        "kuyu_adi": "392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3920",
        "kuyu_adi": "3920",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3921",
        "kuyu_adi": "3921",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3922",
        "kuyu_adi": "3922",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3923",
        "kuyu_adi": "3923",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3924",
        "kuyu_adi": "3924",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3925",
        "kuyu_adi": "3925",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3926",
        "kuyu_adi": "3926",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3927",
        "kuyu_adi": "3927",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3928",
        "kuyu_adi": "3928",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3929",
        "kuyu_adi": "3929",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "393",
        "kuyu_adi": "393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3930",
        "kuyu_adi": "3930",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3931",
        "kuyu_adi": "3931",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3932",
        "kuyu_adi": "3932",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3933",
        "kuyu_adi": "3933",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3934",
        "kuyu_adi": "3934",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3935",
        "kuyu_adi": "3935",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3936",
        "kuyu_adi": "3936",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3937",
        "kuyu_adi": "3937",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3938",
        "kuyu_adi": "3938",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3939",
        "kuyu_adi": "3939",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "394",
        "kuyu_adi": "394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3940",
        "kuyu_adi": "3940",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3941",
        "kuyu_adi": "3941",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3942",
        "kuyu_adi": "3942",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3943",
        "kuyu_adi": "3943",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3944",
        "kuyu_adi": "3944",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3945",
        "kuyu_adi": "3945",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3946",
        "kuyu_adi": "3946",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3947",
        "kuyu_adi": "3947",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3948",
        "kuyu_adi": "3948",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3949",
        "kuyu_adi": "3949",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "395",
        "kuyu_adi": "395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3950",
        "kuyu_adi": "3950",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3951",
        "kuyu_adi": "3951",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3952",
        "kuyu_adi": "3952",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3953",
        "kuyu_adi": "3953",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3954",
        "kuyu_adi": "3954",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3955",
        "kuyu_adi": "3955",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3956",
        "kuyu_adi": "3956",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3957",
        "kuyu_adi": "3957",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3958",
        "kuyu_adi": "3958",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3959",
        "kuyu_adi": "3959",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "396",
        "kuyu_adi": "396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3960",
        "kuyu_adi": "3960",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3961",
        "kuyu_adi": "3961",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3962",
        "kuyu_adi": "3962",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3963",
        "kuyu_adi": "3963",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3964",
        "kuyu_adi": "3964",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3965",
        "kuyu_adi": "3965",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3966",
        "kuyu_adi": "3966",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3967",
        "kuyu_adi": "3967",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3968",
        "kuyu_adi": "3968",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3969",
        "kuyu_adi": "3969",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "397",
        "kuyu_adi": "397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3970",
        "kuyu_adi": "3970",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3971",
        "kuyu_adi": "3971",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3972",
        "kuyu_adi": "3972",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3973",
        "kuyu_adi": "3973",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3974",
        "kuyu_adi": "3974",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3975",
        "kuyu_adi": "3975",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3976",
        "kuyu_adi": "3976",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3977",
        "kuyu_adi": "3977",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3978",
        "kuyu_adi": "3978",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3979",
        "kuyu_adi": "3979",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "398",
        "kuyu_adi": "398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3980",
        "kuyu_adi": "3980",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3981",
        "kuyu_adi": "3981",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3982",
        "kuyu_adi": "3982",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3983",
        "kuyu_adi": "3983",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3984",
        "kuyu_adi": "3984",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3985",
        "kuyu_adi": "3985",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3986",
        "kuyu_adi": "3986",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3987",
        "kuyu_adi": "3987",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3988",
        "kuyu_adi": "3988",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3989",
        "kuyu_adi": "3989",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "399",
        "kuyu_adi": "399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3990",
        "kuyu_adi": "3990",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3991",
        "kuyu_adi": "3991",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3992",
        "kuyu_adi": "3992",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3993",
        "kuyu_adi": "3993",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3994",
        "kuyu_adi": "3994",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3995",
        "kuyu_adi": "3995",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3996",
        "kuyu_adi": "3996",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3997",
        "kuyu_adi": "3997",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3998",
        "kuyu_adi": "3998",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "3999",
        "kuyu_adi": "3999",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4",
        "kuyu_adi": "4",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "40",
        "kuyu_adi": "40",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "400",
        "kuyu_adi": "400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4000",
        "kuyu_adi": "4000",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4001",
        "kuyu_adi": "4001",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4002",
        "kuyu_adi": "4002",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4003",
        "kuyu_adi": "4003",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4004",
        "kuyu_adi": "4004",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4005",
        "kuyu_adi": "4005",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4006",
        "kuyu_adi": "4006",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4007",
        "kuyu_adi": "4007",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4008",
        "kuyu_adi": "4008",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4009",
        "kuyu_adi": "4009",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "401",
        "kuyu_adi": "401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4010",
        "kuyu_adi": "4010",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4011",
        "kuyu_adi": "4011",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4012",
        "kuyu_adi": "4012",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4013",
        "kuyu_adi": "4013",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4014",
        "kuyu_adi": "4014",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4015",
        "kuyu_adi": "4015",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4016",
        "kuyu_adi": "4016",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4017",
        "kuyu_adi": "4017",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4018",
        "kuyu_adi": "4018",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4019",
        "kuyu_adi": "4019",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "402",
        "kuyu_adi": "402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4020",
        "kuyu_adi": "4020",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4021",
        "kuyu_adi": "4021",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4022",
        "kuyu_adi": "4022",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4023",
        "kuyu_adi": "4023",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4024",
        "kuyu_adi": "4024",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4025",
        "kuyu_adi": "4025",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4026",
        "kuyu_adi": "4026",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4027",
        "kuyu_adi": "4027",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4028",
        "kuyu_adi": "4028",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4029",
        "kuyu_adi": "4029",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "403",
        "kuyu_adi": "403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4030",
        "kuyu_adi": "4030",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4031",
        "kuyu_adi": "4031",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4032",
        "kuyu_adi": "4032",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4033",
        "kuyu_adi": "4033",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4034",
        "kuyu_adi": "4034",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4035",
        "kuyu_adi": "4035",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4036",
        "kuyu_adi": "4036",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4037",
        "kuyu_adi": "4037",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4038",
        "kuyu_adi": "4038",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4039",
        "kuyu_adi": "4039",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "404",
        "kuyu_adi": "404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4040",
        "kuyu_adi": "4040",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4041",
        "kuyu_adi": "4041",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4042",
        "kuyu_adi": "4042",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4043",
        "kuyu_adi": "4043",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4044",
        "kuyu_adi": "4044",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4045",
        "kuyu_adi": "4045",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4046",
        "kuyu_adi": "4046",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4047",
        "kuyu_adi": "4047",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4048",
        "kuyu_adi": "4048",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4049",
        "kuyu_adi": "4049",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "405",
        "kuyu_adi": "405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4050",
        "kuyu_adi": "4050",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4051",
        "kuyu_adi": "4051",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4052",
        "kuyu_adi": "4052",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4053",
        "kuyu_adi": "4053",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4054",
        "kuyu_adi": "4054",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4055",
        "kuyu_adi": "4055",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4056",
        "kuyu_adi": "4056",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4057",
        "kuyu_adi": "4057",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4058",
        "kuyu_adi": "4058",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4059",
        "kuyu_adi": "4059",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "406",
        "kuyu_adi": "406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4060",
        "kuyu_adi": "4060",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4061",
        "kuyu_adi": "4061",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4062",
        "kuyu_adi": "4062",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4063",
        "kuyu_adi": "4063",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4064",
        "kuyu_adi": "4064",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4065",
        "kuyu_adi": "4065",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4066",
        "kuyu_adi": "4066",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4067",
        "kuyu_adi": "4067",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4068",
        "kuyu_adi": "4068",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4069",
        "kuyu_adi": "4069",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "407",
        "kuyu_adi": "407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4070",
        "kuyu_adi": "4070",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4071",
        "kuyu_adi": "4071",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4072",
        "kuyu_adi": "4072",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4073",
        "kuyu_adi": "4073",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4074",
        "kuyu_adi": "4074",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4075",
        "kuyu_adi": "4075",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4076",
        "kuyu_adi": "4076",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4077",
        "kuyu_adi": "4077",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4078",
        "kuyu_adi": "4078",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4079",
        "kuyu_adi": "4079",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "408",
        "kuyu_adi": "408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4080",
        "kuyu_adi": "4080",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4081",
        "kuyu_adi": "4081",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4082",
        "kuyu_adi": "4082",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4083",
        "kuyu_adi": "4083",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4084",
        "kuyu_adi": "4084",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4085",
        "kuyu_adi": "4085",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4086",
        "kuyu_adi": "4086",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4087",
        "kuyu_adi": "4087",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4088",
        "kuyu_adi": "4088",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4089",
        "kuyu_adi": "4089",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "409",
        "kuyu_adi": "409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4090",
        "kuyu_adi": "4090",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4091",
        "kuyu_adi": "4091",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4092",
        "kuyu_adi": "4092",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4093",
        "kuyu_adi": "4093",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4094",
        "kuyu_adi": "4094",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4095",
        "kuyu_adi": "4095",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4096",
        "kuyu_adi": "4096",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4097",
        "kuyu_adi": "4097",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4098",
        "kuyu_adi": "4098",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4099",
        "kuyu_adi": "4099",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "41",
        "kuyu_adi": "41",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "410",
        "kuyu_adi": "410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4100",
        "kuyu_adi": "4100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4101",
        "kuyu_adi": "4101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4102",
        "kuyu_adi": "4102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4103",
        "kuyu_adi": "4103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4104",
        "kuyu_adi": "4104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4105",
        "kuyu_adi": "4105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4106",
        "kuyu_adi": "4106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4107",
        "kuyu_adi": "4107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4108",
        "kuyu_adi": "4108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4109",
        "kuyu_adi": "4109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "411",
        "kuyu_adi": "411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4110",
        "kuyu_adi": "4110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4111",
        "kuyu_adi": "4111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4112",
        "kuyu_adi": "4112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4113",
        "kuyu_adi": "4113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4114",
        "kuyu_adi": "4114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4115",
        "kuyu_adi": "4115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4116",
        "kuyu_adi": "4116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4117",
        "kuyu_adi": "4117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4118",
        "kuyu_adi": "4118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4119",
        "kuyu_adi": "4119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "412",
        "kuyu_adi": "412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4120",
        "kuyu_adi": "4120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4121",
        "kuyu_adi": "4121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4122",
        "kuyu_adi": "4122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4123",
        "kuyu_adi": "4123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4124",
        "kuyu_adi": "4124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4125",
        "kuyu_adi": "4125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4126",
        "kuyu_adi": "4126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4127",
        "kuyu_adi": "4127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4128",
        "kuyu_adi": "4128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4129",
        "kuyu_adi": "4129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "413",
        "kuyu_adi": "413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4130",
        "kuyu_adi": "4130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4131",
        "kuyu_adi": "4131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4132",
        "kuyu_adi": "4132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4133",
        "kuyu_adi": "4133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4134",
        "kuyu_adi": "4134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4135",
        "kuyu_adi": "4135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4136",
        "kuyu_adi": "4136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4137",
        "kuyu_adi": "4137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4138",
        "kuyu_adi": "4138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4139",
        "kuyu_adi": "4139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "414",
        "kuyu_adi": "414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4140",
        "kuyu_adi": "4140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4141",
        "kuyu_adi": "4141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4142",
        "kuyu_adi": "4142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4143",
        "kuyu_adi": "4143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4144",
        "kuyu_adi": "4144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4145",
        "kuyu_adi": "4145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4146",
        "kuyu_adi": "4146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4147",
        "kuyu_adi": "4147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4148",
        "kuyu_adi": "4148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4149",
        "kuyu_adi": "4149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "415",
        "kuyu_adi": "415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4150",
        "kuyu_adi": "4150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4151",
        "kuyu_adi": "4151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4152",
        "kuyu_adi": "4152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4153",
        "kuyu_adi": "4153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4154",
        "kuyu_adi": "4154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4155",
        "kuyu_adi": "4155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4156",
        "kuyu_adi": "4156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4157",
        "kuyu_adi": "4157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4158",
        "kuyu_adi": "4158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4159",
        "kuyu_adi": "4159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "416",
        "kuyu_adi": "416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4160",
        "kuyu_adi": "4160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4161",
        "kuyu_adi": "4161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4162",
        "kuyu_adi": "4162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4163",
        "kuyu_adi": "4163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4164",
        "kuyu_adi": "4164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4165",
        "kuyu_adi": "4165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4166",
        "kuyu_adi": "4166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4167",
        "kuyu_adi": "4167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4168",
        "kuyu_adi": "4168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4169",
        "kuyu_adi": "4169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "417",
        "kuyu_adi": "417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4170",
        "kuyu_adi": "4170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4171",
        "kuyu_adi": "4171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4172",
        "kuyu_adi": "4172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4173",
        "kuyu_adi": "4173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4174",
        "kuyu_adi": "4174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4175",
        "kuyu_adi": "4175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4176",
        "kuyu_adi": "4176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4177",
        "kuyu_adi": "4177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4178",
        "kuyu_adi": "4178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4179",
        "kuyu_adi": "4179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "418",
        "kuyu_adi": "418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4180",
        "kuyu_adi": "4180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4181",
        "kuyu_adi": "4181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4182",
        "kuyu_adi": "4182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4183",
        "kuyu_adi": "4183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4184",
        "kuyu_adi": "4184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4185",
        "kuyu_adi": "4185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4186",
        "kuyu_adi": "4186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4187",
        "kuyu_adi": "4187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4188",
        "kuyu_adi": "4188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4189",
        "kuyu_adi": "4189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "419",
        "kuyu_adi": "419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4190",
        "kuyu_adi": "4190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4191",
        "kuyu_adi": "4191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4192",
        "kuyu_adi": "4192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4193",
        "kuyu_adi": "4193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4194",
        "kuyu_adi": "4194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4195",
        "kuyu_adi": "4195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4196",
        "kuyu_adi": "4196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4197",
        "kuyu_adi": "4197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4198",
        "kuyu_adi": "4198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4199",
        "kuyu_adi": "4199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "42",
        "kuyu_adi": "42",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "420",
        "kuyu_adi": "420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4200",
        "kuyu_adi": "4200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4201",
        "kuyu_adi": "4201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4202",
        "kuyu_adi": "4202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4203",
        "kuyu_adi": "4203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4204",
        "kuyu_adi": "4204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4205",
        "kuyu_adi": "4205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4206",
        "kuyu_adi": "4206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4207",
        "kuyu_adi": "4207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4208",
        "kuyu_adi": "4208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4209",
        "kuyu_adi": "4209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "421",
        "kuyu_adi": "421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4210",
        "kuyu_adi": "4210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4211",
        "kuyu_adi": "4211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4212",
        "kuyu_adi": "4212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4213",
        "kuyu_adi": "4213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4214",
        "kuyu_adi": "4214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4215",
        "kuyu_adi": "4215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4216",
        "kuyu_adi": "4216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4217",
        "kuyu_adi": "4217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4218",
        "kuyu_adi": "4218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4219",
        "kuyu_adi": "4219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "422",
        "kuyu_adi": "422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4220",
        "kuyu_adi": "4220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4221",
        "kuyu_adi": "4221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4222",
        "kuyu_adi": "4222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4223",
        "kuyu_adi": "4223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4224",
        "kuyu_adi": "4224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4225",
        "kuyu_adi": "4225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4226",
        "kuyu_adi": "4226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4227",
        "kuyu_adi": "4227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4228",
        "kuyu_adi": "4228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4229",
        "kuyu_adi": "4229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "423",
        "kuyu_adi": "423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4230",
        "kuyu_adi": "4230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4231",
        "kuyu_adi": "4231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4232",
        "kuyu_adi": "4232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4233",
        "kuyu_adi": "4233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4234",
        "kuyu_adi": "4234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4235",
        "kuyu_adi": "4235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4236",
        "kuyu_adi": "4236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4237",
        "kuyu_adi": "4237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4238",
        "kuyu_adi": "4238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4239",
        "kuyu_adi": "4239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "424",
        "kuyu_adi": "424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4240",
        "kuyu_adi": "4240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4241",
        "kuyu_adi": "4241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4242",
        "kuyu_adi": "4242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4243",
        "kuyu_adi": "4243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4244",
        "kuyu_adi": "4244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4245",
        "kuyu_adi": "4245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4246",
        "kuyu_adi": "4246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4247",
        "kuyu_adi": "4247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4248",
        "kuyu_adi": "4248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4249",
        "kuyu_adi": "4249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "425",
        "kuyu_adi": "425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4250",
        "kuyu_adi": "4250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4251",
        "kuyu_adi": "4251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4252",
        "kuyu_adi": "4252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4253",
        "kuyu_adi": "4253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4254",
        "kuyu_adi": "4254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4255",
        "kuyu_adi": "4255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4256",
        "kuyu_adi": "4256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4257",
        "kuyu_adi": "4257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4258",
        "kuyu_adi": "4258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4259",
        "kuyu_adi": "4259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "426",
        "kuyu_adi": "426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4260",
        "kuyu_adi": "4260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4261",
        "kuyu_adi": "4261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4262",
        "kuyu_adi": "4262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4263",
        "kuyu_adi": "4263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4264",
        "kuyu_adi": "4264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4265",
        "kuyu_adi": "4265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4266",
        "kuyu_adi": "4266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4267",
        "kuyu_adi": "4267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4268",
        "kuyu_adi": "4268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4269",
        "kuyu_adi": "4269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "427",
        "kuyu_adi": "427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4270",
        "kuyu_adi": "4270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4271",
        "kuyu_adi": "4271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4272",
        "kuyu_adi": "4272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4273",
        "kuyu_adi": "4273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4274",
        "kuyu_adi": "4274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4275",
        "kuyu_adi": "4275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4276",
        "kuyu_adi": "4276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4277",
        "kuyu_adi": "4277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4278",
        "kuyu_adi": "4278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4279",
        "kuyu_adi": "4279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "428",
        "kuyu_adi": "428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4280",
        "kuyu_adi": "4280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4281",
        "kuyu_adi": "4281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4282",
        "kuyu_adi": "4282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4283",
        "kuyu_adi": "4283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4284",
        "kuyu_adi": "4284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4285",
        "kuyu_adi": "4285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4286",
        "kuyu_adi": "4286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4287",
        "kuyu_adi": "4287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4288",
        "kuyu_adi": "4288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4289",
        "kuyu_adi": "4289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "429",
        "kuyu_adi": "429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4290",
        "kuyu_adi": "4290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4291",
        "kuyu_adi": "4291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4292",
        "kuyu_adi": "4292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4293",
        "kuyu_adi": "4293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4294",
        "kuyu_adi": "4294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4295",
        "kuyu_adi": "4295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4296",
        "kuyu_adi": "4296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4297",
        "kuyu_adi": "4297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4298",
        "kuyu_adi": "4298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4299",
        "kuyu_adi": "4299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "43",
        "kuyu_adi": "43",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "430",
        "kuyu_adi": "430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4300",
        "kuyu_adi": "4300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4301",
        "kuyu_adi": "4301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4302",
        "kuyu_adi": "4302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4303",
        "kuyu_adi": "4303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4304",
        "kuyu_adi": "4304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4305",
        "kuyu_adi": "4305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4306",
        "kuyu_adi": "4306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4307",
        "kuyu_adi": "4307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4308",
        "kuyu_adi": "4308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4309",
        "kuyu_adi": "4309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "431",
        "kuyu_adi": "431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4310",
        "kuyu_adi": "4310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4311",
        "kuyu_adi": "4311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4312",
        "kuyu_adi": "4312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4313",
        "kuyu_adi": "4313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4314",
        "kuyu_adi": "4314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4315",
        "kuyu_adi": "4315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4316",
        "kuyu_adi": "4316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4317",
        "kuyu_adi": "4317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4318",
        "kuyu_adi": "4318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4319",
        "kuyu_adi": "4319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "432",
        "kuyu_adi": "432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4320",
        "kuyu_adi": "4320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4321",
        "kuyu_adi": "4321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4322",
        "kuyu_adi": "4322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4323",
        "kuyu_adi": "4323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4324",
        "kuyu_adi": "4324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4325",
        "kuyu_adi": "4325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4326",
        "kuyu_adi": "4326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4327",
        "kuyu_adi": "4327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4328",
        "kuyu_adi": "4328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4329",
        "kuyu_adi": "4329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "433",
        "kuyu_adi": "433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4330",
        "kuyu_adi": "4330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4331",
        "kuyu_adi": "4331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4332",
        "kuyu_adi": "4332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4333",
        "kuyu_adi": "4333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4334",
        "kuyu_adi": "4334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4335",
        "kuyu_adi": "4335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4336",
        "kuyu_adi": "4336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4337",
        "kuyu_adi": "4337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4338",
        "kuyu_adi": "4338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4339",
        "kuyu_adi": "4339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "434",
        "kuyu_adi": "434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4340",
        "kuyu_adi": "4340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4341",
        "kuyu_adi": "4341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4342",
        "kuyu_adi": "4342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4343",
        "kuyu_adi": "4343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4344",
        "kuyu_adi": "4344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4345",
        "kuyu_adi": "4345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4346",
        "kuyu_adi": "4346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4347",
        "kuyu_adi": "4347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4348",
        "kuyu_adi": "4348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4349",
        "kuyu_adi": "4349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "435",
        "kuyu_adi": "435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4350",
        "kuyu_adi": "4350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4351",
        "kuyu_adi": "4351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4352",
        "kuyu_adi": "4352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4353",
        "kuyu_adi": "4353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4354",
        "kuyu_adi": "4354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4355",
        "kuyu_adi": "4355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4356",
        "kuyu_adi": "4356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4357",
        "kuyu_adi": "4357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4358",
        "kuyu_adi": "4358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4359",
        "kuyu_adi": "4359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "436",
        "kuyu_adi": "436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4360",
        "kuyu_adi": "4360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4361",
        "kuyu_adi": "4361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4362",
        "kuyu_adi": "4362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4363",
        "kuyu_adi": "4363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4364",
        "kuyu_adi": "4364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4365",
        "kuyu_adi": "4365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4366",
        "kuyu_adi": "4366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4367",
        "kuyu_adi": "4367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4368",
        "kuyu_adi": "4368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4369",
        "kuyu_adi": "4369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "437",
        "kuyu_adi": "437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4370",
        "kuyu_adi": "4370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4371",
        "kuyu_adi": "4371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4372",
        "kuyu_adi": "4372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4373",
        "kuyu_adi": "4373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4374",
        "kuyu_adi": "4374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4375",
        "kuyu_adi": "4375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4376",
        "kuyu_adi": "4376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4377",
        "kuyu_adi": "4377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4378",
        "kuyu_adi": "4378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4379",
        "kuyu_adi": "4379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "438",
        "kuyu_adi": "438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4380",
        "kuyu_adi": "4380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4381",
        "kuyu_adi": "4381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4382",
        "kuyu_adi": "4382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4383",
        "kuyu_adi": "4383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4384",
        "kuyu_adi": "4384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4385",
        "kuyu_adi": "4385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4386",
        "kuyu_adi": "4386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4387",
        "kuyu_adi": "4387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4388",
        "kuyu_adi": "4388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4389",
        "kuyu_adi": "4389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "439",
        "kuyu_adi": "439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4390",
        "kuyu_adi": "4390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4391",
        "kuyu_adi": "4391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4392",
        "kuyu_adi": "4392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4393",
        "kuyu_adi": "4393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4394",
        "kuyu_adi": "4394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4395",
        "kuyu_adi": "4395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4396",
        "kuyu_adi": "4396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4397",
        "kuyu_adi": "4397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4398",
        "kuyu_adi": "4398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4399",
        "kuyu_adi": "4399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "44",
        "kuyu_adi": "44",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "440",
        "kuyu_adi": "440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4400",
        "kuyu_adi": "4400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4401",
        "kuyu_adi": "4401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4402",
        "kuyu_adi": "4402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4403",
        "kuyu_adi": "4403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4404",
        "kuyu_adi": "4404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4405",
        "kuyu_adi": "4405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4406",
        "kuyu_adi": "4406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4407",
        "kuyu_adi": "4407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4408",
        "kuyu_adi": "4408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4409",
        "kuyu_adi": "4409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "441",
        "kuyu_adi": "441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4410",
        "kuyu_adi": "4410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4411",
        "kuyu_adi": "4411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4412",
        "kuyu_adi": "4412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4413",
        "kuyu_adi": "4413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4414",
        "kuyu_adi": "4414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4415",
        "kuyu_adi": "4415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4416",
        "kuyu_adi": "4416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4417",
        "kuyu_adi": "4417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4418",
        "kuyu_adi": "4418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4419",
        "kuyu_adi": "4419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "442",
        "kuyu_adi": "442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4420",
        "kuyu_adi": "4420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4421",
        "kuyu_adi": "4421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4422",
        "kuyu_adi": "4422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4423",
        "kuyu_adi": "4423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4424",
        "kuyu_adi": "4424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4425",
        "kuyu_adi": "4425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4426",
        "kuyu_adi": "4426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4427",
        "kuyu_adi": "4427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4428",
        "kuyu_adi": "4428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4429",
        "kuyu_adi": "4429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "443",
        "kuyu_adi": "443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4430",
        "kuyu_adi": "4430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4431",
        "kuyu_adi": "4431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4432",
        "kuyu_adi": "4432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4433",
        "kuyu_adi": "4433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4434",
        "kuyu_adi": "4434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4435",
        "kuyu_adi": "4435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4436",
        "kuyu_adi": "4436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4437",
        "kuyu_adi": "4437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4438",
        "kuyu_adi": "4438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4439",
        "kuyu_adi": "4439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "444",
        "kuyu_adi": "444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4440",
        "kuyu_adi": "4440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4441",
        "kuyu_adi": "4441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4442",
        "kuyu_adi": "4442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4443",
        "kuyu_adi": "4443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4444",
        "kuyu_adi": "4444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4445",
        "kuyu_adi": "4445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4446",
        "kuyu_adi": "4446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4447",
        "kuyu_adi": "4447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4448",
        "kuyu_adi": "4448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4449",
        "kuyu_adi": "4449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "445",
        "kuyu_adi": "445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4450",
        "kuyu_adi": "4450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4451",
        "kuyu_adi": "4451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4452",
        "kuyu_adi": "4452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4453",
        "kuyu_adi": "4453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4454",
        "kuyu_adi": "4454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4455",
        "kuyu_adi": "4455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4456",
        "kuyu_adi": "4456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4457",
        "kuyu_adi": "4457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4458",
        "kuyu_adi": "4458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4459",
        "kuyu_adi": "4459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "446",
        "kuyu_adi": "446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4460",
        "kuyu_adi": "4460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4461",
        "kuyu_adi": "4461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4462",
        "kuyu_adi": "4462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4463",
        "kuyu_adi": "4463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4464",
        "kuyu_adi": "4464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4465",
        "kuyu_adi": "4465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4466",
        "kuyu_adi": "4466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4467",
        "kuyu_adi": "4467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4468",
        "kuyu_adi": "4468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4469",
        "kuyu_adi": "4469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "447",
        "kuyu_adi": "447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4470",
        "kuyu_adi": "4470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4471",
        "kuyu_adi": "4471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4472",
        "kuyu_adi": "4472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4473",
        "kuyu_adi": "4473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4474",
        "kuyu_adi": "4474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4475",
        "kuyu_adi": "4475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4476",
        "kuyu_adi": "4476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4477",
        "kuyu_adi": "4477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4478",
        "kuyu_adi": "4478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4479",
        "kuyu_adi": "4479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "448",
        "kuyu_adi": "448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4480",
        "kuyu_adi": "4480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4481",
        "kuyu_adi": "4481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4482",
        "kuyu_adi": "4482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4483",
        "kuyu_adi": "4483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4484",
        "kuyu_adi": "4484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4485",
        "kuyu_adi": "4485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4486",
        "kuyu_adi": "4486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4487",
        "kuyu_adi": "4487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4488",
        "kuyu_adi": "4488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4489",
        "kuyu_adi": "4489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "449",
        "kuyu_adi": "449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4490",
        "kuyu_adi": "4490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4491",
        "kuyu_adi": "4491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4492",
        "kuyu_adi": "4492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4493",
        "kuyu_adi": "4493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4494",
        "kuyu_adi": "4494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4495",
        "kuyu_adi": "4495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4496",
        "kuyu_adi": "4496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4497",
        "kuyu_adi": "4497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4498",
        "kuyu_adi": "4498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4499",
        "kuyu_adi": "4499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "45",
        "kuyu_adi": "45",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "450",
        "kuyu_adi": "450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4500",
        "kuyu_adi": "4500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4501",
        "kuyu_adi": "4501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4502",
        "kuyu_adi": "4502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4503",
        "kuyu_adi": "4503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4504",
        "kuyu_adi": "4504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4505",
        "kuyu_adi": "4505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4506",
        "kuyu_adi": "4506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4507",
        "kuyu_adi": "4507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4508",
        "kuyu_adi": "4508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4509",
        "kuyu_adi": "4509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "451",
        "kuyu_adi": "451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4510",
        "kuyu_adi": "4510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4511",
        "kuyu_adi": "4511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4512",
        "kuyu_adi": "4512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4513",
        "kuyu_adi": "4513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4514",
        "kuyu_adi": "4514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4515",
        "kuyu_adi": "4515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4516",
        "kuyu_adi": "4516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4517",
        "kuyu_adi": "4517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4518",
        "kuyu_adi": "4518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4519",
        "kuyu_adi": "4519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "452",
        "kuyu_adi": "452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4520",
        "kuyu_adi": "4520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4521",
        "kuyu_adi": "4521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4522",
        "kuyu_adi": "4522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4523",
        "kuyu_adi": "4523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4524",
        "kuyu_adi": "4524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4525",
        "kuyu_adi": "4525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4526",
        "kuyu_adi": "4526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4527",
        "kuyu_adi": "4527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4528",
        "kuyu_adi": "4528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4529",
        "kuyu_adi": "4529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "453",
        "kuyu_adi": "453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4530",
        "kuyu_adi": "4530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4531",
        "kuyu_adi": "4531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4532",
        "kuyu_adi": "4532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4533",
        "kuyu_adi": "4533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4534",
        "kuyu_adi": "4534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4535",
        "kuyu_adi": "4535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4536",
        "kuyu_adi": "4536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4537",
        "kuyu_adi": "4537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4538",
        "kuyu_adi": "4538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4539",
        "kuyu_adi": "4539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "454",
        "kuyu_adi": "454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4540",
        "kuyu_adi": "4540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4541",
        "kuyu_adi": "4541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4542",
        "kuyu_adi": "4542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4543",
        "kuyu_adi": "4543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4544",
        "kuyu_adi": "4544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4545",
        "kuyu_adi": "4545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4546",
        "kuyu_adi": "4546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4547",
        "kuyu_adi": "4547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4548",
        "kuyu_adi": "4548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4549",
        "kuyu_adi": "4549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "455",
        "kuyu_adi": "455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4550",
        "kuyu_adi": "4550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4551",
        "kuyu_adi": "4551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4552",
        "kuyu_adi": "4552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4553",
        "kuyu_adi": "4553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4554",
        "kuyu_adi": "4554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4555",
        "kuyu_adi": "4555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4556",
        "kuyu_adi": "4556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4557",
        "kuyu_adi": "4557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4558",
        "kuyu_adi": "4558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4559",
        "kuyu_adi": "4559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "456",
        "kuyu_adi": "456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4560",
        "kuyu_adi": "4560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4561",
        "kuyu_adi": "4561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4562",
        "kuyu_adi": "4562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4563",
        "kuyu_adi": "4563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4564",
        "kuyu_adi": "4564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4565",
        "kuyu_adi": "4565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4566",
        "kuyu_adi": "4566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4567",
        "kuyu_adi": "4567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4568",
        "kuyu_adi": "4568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4569",
        "kuyu_adi": "4569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "457",
        "kuyu_adi": "457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4570",
        "kuyu_adi": "4570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4571",
        "kuyu_adi": "4571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4572",
        "kuyu_adi": "4572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4573",
        "kuyu_adi": "4573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4574",
        "kuyu_adi": "4574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4575",
        "kuyu_adi": "4575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4576",
        "kuyu_adi": "4576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4577",
        "kuyu_adi": "4577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4578",
        "kuyu_adi": "4578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4579",
        "kuyu_adi": "4579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "458",
        "kuyu_adi": "458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4580",
        "kuyu_adi": "4580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4581",
        "kuyu_adi": "4581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4582",
        "kuyu_adi": "4582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4583",
        "kuyu_adi": "4583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4584",
        "kuyu_adi": "4584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4585",
        "kuyu_adi": "4585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4586",
        "kuyu_adi": "4586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4587",
        "kuyu_adi": "4587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4588",
        "kuyu_adi": "4588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4589",
        "kuyu_adi": "4589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "459",
        "kuyu_adi": "459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4590",
        "kuyu_adi": "4590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4591",
        "kuyu_adi": "4591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4592",
        "kuyu_adi": "4592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4593",
        "kuyu_adi": "4593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4594",
        "kuyu_adi": "4594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4595",
        "kuyu_adi": "4595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4596",
        "kuyu_adi": "4596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4597",
        "kuyu_adi": "4597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4598",
        "kuyu_adi": "4598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4599",
        "kuyu_adi": "4599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "46",
        "kuyu_adi": "46",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "460",
        "kuyu_adi": "460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4600",
        "kuyu_adi": "4600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4601",
        "kuyu_adi": "4601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4602",
        "kuyu_adi": "4602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4603",
        "kuyu_adi": "4603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4604",
        "kuyu_adi": "4604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4605",
        "kuyu_adi": "4605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4606",
        "kuyu_adi": "4606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4607",
        "kuyu_adi": "4607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4608",
        "kuyu_adi": "4608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4609",
        "kuyu_adi": "4609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "461",
        "kuyu_adi": "461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4610",
        "kuyu_adi": "4610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4611",
        "kuyu_adi": "4611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4612",
        "kuyu_adi": "4612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4613",
        "kuyu_adi": "4613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4614",
        "kuyu_adi": "4614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4615",
        "kuyu_adi": "4615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4616",
        "kuyu_adi": "4616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4617",
        "kuyu_adi": "4617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4618",
        "kuyu_adi": "4618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4619",
        "kuyu_adi": "4619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "462",
        "kuyu_adi": "462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4620",
        "kuyu_adi": "4620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4621",
        "kuyu_adi": "4621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4622",
        "kuyu_adi": "4622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4623",
        "kuyu_adi": "4623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4624",
        "kuyu_adi": "4624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4625",
        "kuyu_adi": "4625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4626",
        "kuyu_adi": "4626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4627",
        "kuyu_adi": "4627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4628",
        "kuyu_adi": "4628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4629",
        "kuyu_adi": "4629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "463",
        "kuyu_adi": "463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4630",
        "kuyu_adi": "4630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4631",
        "kuyu_adi": "4631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4632",
        "kuyu_adi": "4632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4633",
        "kuyu_adi": "4633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4634",
        "kuyu_adi": "4634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4635",
        "kuyu_adi": "4635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4636",
        "kuyu_adi": "4636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4637",
        "kuyu_adi": "4637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4638",
        "kuyu_adi": "4638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4639",
        "kuyu_adi": "4639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "464",
        "kuyu_adi": "464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4640",
        "kuyu_adi": "4640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4641",
        "kuyu_adi": "4641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4642",
        "kuyu_adi": "4642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4643",
        "kuyu_adi": "4643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4644",
        "kuyu_adi": "4644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4645",
        "kuyu_adi": "4645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4646",
        "kuyu_adi": "4646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4647",
        "kuyu_adi": "4647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4648",
        "kuyu_adi": "4648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4649",
        "kuyu_adi": "4649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "465",
        "kuyu_adi": "465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4650",
        "kuyu_adi": "4650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4651",
        "kuyu_adi": "4651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4652",
        "kuyu_adi": "4652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4653",
        "kuyu_adi": "4653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4654",
        "kuyu_adi": "4654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4655",
        "kuyu_adi": "4655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4656",
        "kuyu_adi": "4656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4657",
        "kuyu_adi": "4657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4658",
        "kuyu_adi": "4658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4659",
        "kuyu_adi": "4659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "466",
        "kuyu_adi": "466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4660",
        "kuyu_adi": "4660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4661",
        "kuyu_adi": "4661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4662",
        "kuyu_adi": "4662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4663",
        "kuyu_adi": "4663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4664",
        "kuyu_adi": "4664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4665",
        "kuyu_adi": "4665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4666",
        "kuyu_adi": "4666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4667",
        "kuyu_adi": "4667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4668",
        "kuyu_adi": "4668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4669",
        "kuyu_adi": "4669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "467",
        "kuyu_adi": "467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4670",
        "kuyu_adi": "4670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4671",
        "kuyu_adi": "4671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4672",
        "kuyu_adi": "4672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4673",
        "kuyu_adi": "4673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4674",
        "kuyu_adi": "4674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4675",
        "kuyu_adi": "4675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4676",
        "kuyu_adi": "4676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4677",
        "kuyu_adi": "4677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4678",
        "kuyu_adi": "4678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4679",
        "kuyu_adi": "4679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "468",
        "kuyu_adi": "468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4680",
        "kuyu_adi": "4680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4681",
        "kuyu_adi": "4681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4682",
        "kuyu_adi": "4682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4683",
        "kuyu_adi": "4683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4684",
        "kuyu_adi": "4684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4685",
        "kuyu_adi": "4685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4686",
        "kuyu_adi": "4686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4687",
        "kuyu_adi": "4687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4688",
        "kuyu_adi": "4688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4689",
        "kuyu_adi": "4689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "469",
        "kuyu_adi": "469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4690",
        "kuyu_adi": "4690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4691",
        "kuyu_adi": "4691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4692",
        "kuyu_adi": "4692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4693",
        "kuyu_adi": "4693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4694",
        "kuyu_adi": "4694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4695",
        "kuyu_adi": "4695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4696",
        "kuyu_adi": "4696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4697",
        "kuyu_adi": "4697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4698",
        "kuyu_adi": "4698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4699",
        "kuyu_adi": "4699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "47",
        "kuyu_adi": "47",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "470",
        "kuyu_adi": "470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4700",
        "kuyu_adi": "4700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4701",
        "kuyu_adi": "4701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4702",
        "kuyu_adi": "4702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4703",
        "kuyu_adi": "4703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4704",
        "kuyu_adi": "4704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4705",
        "kuyu_adi": "4705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4706",
        "kuyu_adi": "4706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4707",
        "kuyu_adi": "4707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4708",
        "kuyu_adi": "4708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4709",
        "kuyu_adi": "4709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "471",
        "kuyu_adi": "471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4710",
        "kuyu_adi": "4710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4711",
        "kuyu_adi": "4711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4712",
        "kuyu_adi": "4712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4713",
        "kuyu_adi": "4713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4714",
        "kuyu_adi": "4714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4715",
        "kuyu_adi": "4715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4716",
        "kuyu_adi": "4716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4717",
        "kuyu_adi": "4717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4718",
        "kuyu_adi": "4718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4719",
        "kuyu_adi": "4719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "472",
        "kuyu_adi": "472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4720",
        "kuyu_adi": "4720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4721",
        "kuyu_adi": "4721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4722",
        "kuyu_adi": "4722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4723",
        "kuyu_adi": "4723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4724",
        "kuyu_adi": "4724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4725",
        "kuyu_adi": "4725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4726",
        "kuyu_adi": "4726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4727",
        "kuyu_adi": "4727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4728",
        "kuyu_adi": "4728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4729",
        "kuyu_adi": "4729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "473",
        "kuyu_adi": "473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4730",
        "kuyu_adi": "4730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4731",
        "kuyu_adi": "4731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4732",
        "kuyu_adi": "4732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4733",
        "kuyu_adi": "4733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4734",
        "kuyu_adi": "4734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4735",
        "kuyu_adi": "4735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4736",
        "kuyu_adi": "4736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4737",
        "kuyu_adi": "4737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4738",
        "kuyu_adi": "4738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4739",
        "kuyu_adi": "4739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "474",
        "kuyu_adi": "474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4740",
        "kuyu_adi": "4740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4741",
        "kuyu_adi": "4741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4742",
        "kuyu_adi": "4742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4743",
        "kuyu_adi": "4743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4744",
        "kuyu_adi": "4744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4745",
        "kuyu_adi": "4745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4746",
        "kuyu_adi": "4746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4747",
        "kuyu_adi": "4747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4748",
        "kuyu_adi": "4748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4749",
        "kuyu_adi": "4749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "475",
        "kuyu_adi": "475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4750",
        "kuyu_adi": "4750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4751",
        "kuyu_adi": "4751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4752",
        "kuyu_adi": "4752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4753",
        "kuyu_adi": "4753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4754",
        "kuyu_adi": "4754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4755",
        "kuyu_adi": "4755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4756",
        "kuyu_adi": "4756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4757",
        "kuyu_adi": "4757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4758",
        "kuyu_adi": "4758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4759",
        "kuyu_adi": "4759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "476",
        "kuyu_adi": "476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4760",
        "kuyu_adi": "4760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4761",
        "kuyu_adi": "4761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4762",
        "kuyu_adi": "4762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4763",
        "kuyu_adi": "4763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4764",
        "kuyu_adi": "4764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4765",
        "kuyu_adi": "4765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4766",
        "kuyu_adi": "4766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4767",
        "kuyu_adi": "4767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4768",
        "kuyu_adi": "4768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4769",
        "kuyu_adi": "4769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "477",
        "kuyu_adi": "477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4770",
        "kuyu_adi": "4770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4771",
        "kuyu_adi": "4771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4772",
        "kuyu_adi": "4772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4773",
        "kuyu_adi": "4773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4774",
        "kuyu_adi": "4774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4775",
        "kuyu_adi": "4775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4776",
        "kuyu_adi": "4776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4777",
        "kuyu_adi": "4777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4778",
        "kuyu_adi": "4778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4779",
        "kuyu_adi": "4779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "478",
        "kuyu_adi": "478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4780",
        "kuyu_adi": "4780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4781",
        "kuyu_adi": "4781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4782",
        "kuyu_adi": "4782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4783",
        "kuyu_adi": "4783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4784",
        "kuyu_adi": "4784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4785",
        "kuyu_adi": "4785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4786",
        "kuyu_adi": "4786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4787",
        "kuyu_adi": "4787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4788",
        "kuyu_adi": "4788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4789",
        "kuyu_adi": "4789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "479",
        "kuyu_adi": "479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4790",
        "kuyu_adi": "4790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4791",
        "kuyu_adi": "4791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4792",
        "kuyu_adi": "4792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4793",
        "kuyu_adi": "4793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4794",
        "kuyu_adi": "4794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4795",
        "kuyu_adi": "4795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4796",
        "kuyu_adi": "4796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4797",
        "kuyu_adi": "4797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4798",
        "kuyu_adi": "4798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4799",
        "kuyu_adi": "4799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "48",
        "kuyu_adi": "48",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "480",
        "kuyu_adi": "480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4800",
        "kuyu_adi": "4800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4801",
        "kuyu_adi": "4801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4802",
        "kuyu_adi": "4802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4803",
        "kuyu_adi": "4803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4804",
        "kuyu_adi": "4804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4805",
        "kuyu_adi": "4805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4806",
        "kuyu_adi": "4806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4807",
        "kuyu_adi": "4807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4808",
        "kuyu_adi": "4808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4809",
        "kuyu_adi": "4809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "481",
        "kuyu_adi": "481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4810",
        "kuyu_adi": "4810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4811",
        "kuyu_adi": "4811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4812",
        "kuyu_adi": "4812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4813",
        "kuyu_adi": "4813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4814",
        "kuyu_adi": "4814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4815",
        "kuyu_adi": "4815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4816",
        "kuyu_adi": "4816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4817",
        "kuyu_adi": "4817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4818",
        "kuyu_adi": "4818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4819",
        "kuyu_adi": "4819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "482",
        "kuyu_adi": "482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4820",
        "kuyu_adi": "4820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4821",
        "kuyu_adi": "4821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4822",
        "kuyu_adi": "4822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4823",
        "kuyu_adi": "4823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4824",
        "kuyu_adi": "4824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4825",
        "kuyu_adi": "4825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4826",
        "kuyu_adi": "4826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4827",
        "kuyu_adi": "4827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4828",
        "kuyu_adi": "4828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4829",
        "kuyu_adi": "4829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "483",
        "kuyu_adi": "483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4830",
        "kuyu_adi": "4830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4831",
        "kuyu_adi": "4831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4832",
        "kuyu_adi": "4832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4833",
        "kuyu_adi": "4833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4834",
        "kuyu_adi": "4834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4835",
        "kuyu_adi": "4835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4836",
        "kuyu_adi": "4836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4837",
        "kuyu_adi": "4837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4838",
        "kuyu_adi": "4838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4839",
        "kuyu_adi": "4839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "484",
        "kuyu_adi": "484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4840",
        "kuyu_adi": "4840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4841",
        "kuyu_adi": "4841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4842",
        "kuyu_adi": "4842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4843",
        "kuyu_adi": "4843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4844",
        "kuyu_adi": "4844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4845",
        "kuyu_adi": "4845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4846",
        "kuyu_adi": "4846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4847",
        "kuyu_adi": "4847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4848",
        "kuyu_adi": "4848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4849",
        "kuyu_adi": "4849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "485",
        "kuyu_adi": "485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4850",
        "kuyu_adi": "4850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4851",
        "kuyu_adi": "4851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4852",
        "kuyu_adi": "4852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4853",
        "kuyu_adi": "4853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4854",
        "kuyu_adi": "4854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4855",
        "kuyu_adi": "4855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4856",
        "kuyu_adi": "4856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4857",
        "kuyu_adi": "4857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4858",
        "kuyu_adi": "4858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4859",
        "kuyu_adi": "4859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "486",
        "kuyu_adi": "486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4860",
        "kuyu_adi": "4860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4861",
        "kuyu_adi": "4861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4862",
        "kuyu_adi": "4862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4863",
        "kuyu_adi": "4863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4864",
        "kuyu_adi": "4864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4865",
        "kuyu_adi": "4865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4866",
        "kuyu_adi": "4866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4867",
        "kuyu_adi": "4867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4868",
        "kuyu_adi": "4868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4869",
        "kuyu_adi": "4869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "487",
        "kuyu_adi": "487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4870",
        "kuyu_adi": "4870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4871",
        "kuyu_adi": "4871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4872",
        "kuyu_adi": "4872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4873",
        "kuyu_adi": "4873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4874",
        "kuyu_adi": "4874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4875",
        "kuyu_adi": "4875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4876",
        "kuyu_adi": "4876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4877",
        "kuyu_adi": "4877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4878",
        "kuyu_adi": "4878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4879",
        "kuyu_adi": "4879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "488",
        "kuyu_adi": "488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4880",
        "kuyu_adi": "4880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4881",
        "kuyu_adi": "4881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4882",
        "kuyu_adi": "4882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4883",
        "kuyu_adi": "4883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4884",
        "kuyu_adi": "4884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4885",
        "kuyu_adi": "4885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4886",
        "kuyu_adi": "4886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4887",
        "kuyu_adi": "4887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4888",
        "kuyu_adi": "4888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4889",
        "kuyu_adi": "4889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "489",
        "kuyu_adi": "489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4890",
        "kuyu_adi": "4890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4891",
        "kuyu_adi": "4891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4892",
        "kuyu_adi": "4892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4893",
        "kuyu_adi": "4893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4894",
        "kuyu_adi": "4894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4895",
        "kuyu_adi": "4895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4896",
        "kuyu_adi": "4896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4897",
        "kuyu_adi": "4897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4898",
        "kuyu_adi": "4898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4899",
        "kuyu_adi": "4899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "49",
        "kuyu_adi": "49",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "490",
        "kuyu_adi": "490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4900",
        "kuyu_adi": "4900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4901",
        "kuyu_adi": "4901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4902",
        "kuyu_adi": "4902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4903",
        "kuyu_adi": "4903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4904",
        "kuyu_adi": "4904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4905",
        "kuyu_adi": "4905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4906",
        "kuyu_adi": "4906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4907",
        "kuyu_adi": "4907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4908",
        "kuyu_adi": "4908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4909",
        "kuyu_adi": "4909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "491",
        "kuyu_adi": "491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4910",
        "kuyu_adi": "4910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4911",
        "kuyu_adi": "4911",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4912",
        "kuyu_adi": "4912",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4913",
        "kuyu_adi": "4913",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4914",
        "kuyu_adi": "4914",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4915",
        "kuyu_adi": "4915",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4916",
        "kuyu_adi": "4916",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4917",
        "kuyu_adi": "4917",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4918",
        "kuyu_adi": "4918",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4919",
        "kuyu_adi": "4919",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "492",
        "kuyu_adi": "492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4920",
        "kuyu_adi": "4920",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4921",
        "kuyu_adi": "4921",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4922",
        "kuyu_adi": "4922",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4923",
        "kuyu_adi": "4923",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4924",
        "kuyu_adi": "4924",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4925",
        "kuyu_adi": "4925",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4926",
        "kuyu_adi": "4926",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4927",
        "kuyu_adi": "4927",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4928",
        "kuyu_adi": "4928",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4929",
        "kuyu_adi": "4929",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "493",
        "kuyu_adi": "493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4930",
        "kuyu_adi": "4930",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4931",
        "kuyu_adi": "4931",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4932",
        "kuyu_adi": "4932",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4933",
        "kuyu_adi": "4933",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4934",
        "kuyu_adi": "4934",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4935",
        "kuyu_adi": "4935",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4936",
        "kuyu_adi": "4936",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4937",
        "kuyu_adi": "4937",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4938",
        "kuyu_adi": "4938",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4939",
        "kuyu_adi": "4939",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "494",
        "kuyu_adi": "494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4940",
        "kuyu_adi": "4940",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4941",
        "kuyu_adi": "4941",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4942",
        "kuyu_adi": "4942",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4943",
        "kuyu_adi": "4943",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4944",
        "kuyu_adi": "4944",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4945",
        "kuyu_adi": "4945",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4946",
        "kuyu_adi": "4946",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4947",
        "kuyu_adi": "4947",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4948",
        "kuyu_adi": "4948",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4949",
        "kuyu_adi": "4949",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "495",
        "kuyu_adi": "495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4950",
        "kuyu_adi": "4950",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4951",
        "kuyu_adi": "4951",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4952",
        "kuyu_adi": "4952",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4953",
        "kuyu_adi": "4953",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4954",
        "kuyu_adi": "4954",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4955",
        "kuyu_adi": "4955",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4956",
        "kuyu_adi": "4956",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4957",
        "kuyu_adi": "4957",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4958",
        "kuyu_adi": "4958",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4959",
        "kuyu_adi": "4959",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "496",
        "kuyu_adi": "496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4960",
        "kuyu_adi": "4960",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4961",
        "kuyu_adi": "4961",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4962",
        "kuyu_adi": "4962",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4963",
        "kuyu_adi": "4963",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4964",
        "kuyu_adi": "4964",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4965",
        "kuyu_adi": "4965",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4966",
        "kuyu_adi": "4966",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4967",
        "kuyu_adi": "4967",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4968",
        "kuyu_adi": "4968",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4969",
        "kuyu_adi": "4969",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "497",
        "kuyu_adi": "497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4970",
        "kuyu_adi": "4970",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4971",
        "kuyu_adi": "4971",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4972",
        "kuyu_adi": "4972",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4973",
        "kuyu_adi": "4973",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4974",
        "kuyu_adi": "4974",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4975",
        "kuyu_adi": "4975",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4976",
        "kuyu_adi": "4976",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4977",
        "kuyu_adi": "4977",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4978",
        "kuyu_adi": "4978",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4979",
        "kuyu_adi": "4979",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "498",
        "kuyu_adi": "498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4980",
        "kuyu_adi": "4980",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4981",
        "kuyu_adi": "4981",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4982",
        "kuyu_adi": "4982",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4983",
        "kuyu_adi": "4983",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4984",
        "kuyu_adi": "4984",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4985",
        "kuyu_adi": "4985",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4986",
        "kuyu_adi": "4986",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4987",
        "kuyu_adi": "4987",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4988",
        "kuyu_adi": "4988",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4989",
        "kuyu_adi": "4989",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "499",
        "kuyu_adi": "499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4990",
        "kuyu_adi": "4990",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4991",
        "kuyu_adi": "4991",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4992",
        "kuyu_adi": "4992",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4993",
        "kuyu_adi": "4993",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4994",
        "kuyu_adi": "4994",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4995",
        "kuyu_adi": "4995",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4996",
        "kuyu_adi": "4996",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4997",
        "kuyu_adi": "4997",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4998",
        "kuyu_adi": "4998",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "4999",
        "kuyu_adi": "4999",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5",
        "kuyu_adi": "5",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "50",
        "kuyu_adi": "50",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "500",
        "kuyu_adi": "500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5000",
        "kuyu_adi": "5000",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5001",
        "kuyu_adi": "5001",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5002",
        "kuyu_adi": "5002",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5003",
        "kuyu_adi": "5003",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5004",
        "kuyu_adi": "5004",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5005",
        "kuyu_adi": "5005",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5006",
        "kuyu_adi": "5006",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5007",
        "kuyu_adi": "5007",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5008",
        "kuyu_adi": "5008",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5009",
        "kuyu_adi": "5009",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "501",
        "kuyu_adi": "501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5010",
        "kuyu_adi": "5010",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5011",
        "kuyu_adi": "5011",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5012",
        "kuyu_adi": "5012",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5013",
        "kuyu_adi": "5013",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5014",
        "kuyu_adi": "5014",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5015",
        "kuyu_adi": "5015",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5016",
        "kuyu_adi": "5016",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5017",
        "kuyu_adi": "5017",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5018",
        "kuyu_adi": "5018",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5019",
        "kuyu_adi": "5019",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "502",
        "kuyu_adi": "502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5020",
        "kuyu_adi": "5020",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5021",
        "kuyu_adi": "5021",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5022",
        "kuyu_adi": "5022",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5023",
        "kuyu_adi": "5023",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5024",
        "kuyu_adi": "5024",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5025",
        "kuyu_adi": "5025",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5026",
        "kuyu_adi": "5026",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5027",
        "kuyu_adi": "5027",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5028",
        "kuyu_adi": "5028",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5029",
        "kuyu_adi": "5029",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "503",
        "kuyu_adi": "503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5030",
        "kuyu_adi": "5030",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5031",
        "kuyu_adi": "5031",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5032",
        "kuyu_adi": "5032",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5033",
        "kuyu_adi": "5033",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5034",
        "kuyu_adi": "5034",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5035",
        "kuyu_adi": "5035",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5036",
        "kuyu_adi": "5036",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5037",
        "kuyu_adi": "5037",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5038",
        "kuyu_adi": "5038",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5039",
        "kuyu_adi": "5039",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "504",
        "kuyu_adi": "504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5040",
        "kuyu_adi": "5040",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5041",
        "kuyu_adi": "5041",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5042",
        "kuyu_adi": "5042",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5043",
        "kuyu_adi": "5043",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5044",
        "kuyu_adi": "5044",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5045",
        "kuyu_adi": "5045",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5046",
        "kuyu_adi": "5046",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5047",
        "kuyu_adi": "5047",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5048",
        "kuyu_adi": "5048",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5049",
        "kuyu_adi": "5049",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "505",
        "kuyu_adi": "505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5050",
        "kuyu_adi": "5050",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5051",
        "kuyu_adi": "5051",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5052",
        "kuyu_adi": "5052",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5053",
        "kuyu_adi": "5053",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5054",
        "kuyu_adi": "5054",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5055",
        "kuyu_adi": "5055",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5056",
        "kuyu_adi": "5056",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5057",
        "kuyu_adi": "5057",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5058",
        "kuyu_adi": "5058",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5059",
        "kuyu_adi": "5059",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "506",
        "kuyu_adi": "506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5060",
        "kuyu_adi": "5060",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5061",
        "kuyu_adi": "5061",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5062",
        "kuyu_adi": "5062",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5063",
        "kuyu_adi": "5063",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5064",
        "kuyu_adi": "5064",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5065",
        "kuyu_adi": "5065",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5066",
        "kuyu_adi": "5066",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5067",
        "kuyu_adi": "5067",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5068",
        "kuyu_adi": "5068",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5069",
        "kuyu_adi": "5069",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "507",
        "kuyu_adi": "507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5070",
        "kuyu_adi": "5070",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5071",
        "kuyu_adi": "5071",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5072",
        "kuyu_adi": "5072",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5073",
        "kuyu_adi": "5073",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5074",
        "kuyu_adi": "5074",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5075",
        "kuyu_adi": "5075",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5076",
        "kuyu_adi": "5076",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5077",
        "kuyu_adi": "5077",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5078",
        "kuyu_adi": "5078",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5079",
        "kuyu_adi": "5079",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "508",
        "kuyu_adi": "508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5080",
        "kuyu_adi": "5080",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5081",
        "kuyu_adi": "5081",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5082",
        "kuyu_adi": "5082",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5083",
        "kuyu_adi": "5083",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5084",
        "kuyu_adi": "5084",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5085",
        "kuyu_adi": "5085",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5086",
        "kuyu_adi": "5086",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5087",
        "kuyu_adi": "5087",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5088",
        "kuyu_adi": "5088",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5089",
        "kuyu_adi": "5089",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "509",
        "kuyu_adi": "509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5090",
        "kuyu_adi": "5090",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5091",
        "kuyu_adi": "5091",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5092",
        "kuyu_adi": "5092",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5093",
        "kuyu_adi": "5093",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5094",
        "kuyu_adi": "5094",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5095",
        "kuyu_adi": "5095",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5096",
        "kuyu_adi": "5096",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5097",
        "kuyu_adi": "5097",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5098",
        "kuyu_adi": "5098",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5099",
        "kuyu_adi": "5099",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "51",
        "kuyu_adi": "51",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "510",
        "kuyu_adi": "510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5100",
        "kuyu_adi": "5100",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5101",
        "kuyu_adi": "5101",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5102",
        "kuyu_adi": "5102",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5103",
        "kuyu_adi": "5103",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5104",
        "kuyu_adi": "5104",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5105",
        "kuyu_adi": "5105",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5106",
        "kuyu_adi": "5106",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5107",
        "kuyu_adi": "5107",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5108",
        "kuyu_adi": "5108",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5109",
        "kuyu_adi": "5109",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "511",
        "kuyu_adi": "511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5110",
        "kuyu_adi": "5110",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5111",
        "kuyu_adi": "5111",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5112",
        "kuyu_adi": "5112",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5113",
        "kuyu_adi": "5113",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5114",
        "kuyu_adi": "5114",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5115",
        "kuyu_adi": "5115",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5116",
        "kuyu_adi": "5116",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5117",
        "kuyu_adi": "5117",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5118",
        "kuyu_adi": "5118",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5119",
        "kuyu_adi": "5119",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "512",
        "kuyu_adi": "512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5120",
        "kuyu_adi": "5120",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5121",
        "kuyu_adi": "5121",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5122",
        "kuyu_adi": "5122",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5123",
        "kuyu_adi": "5123",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5124",
        "kuyu_adi": "5124",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5125",
        "kuyu_adi": "5125",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5126",
        "kuyu_adi": "5126",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5127",
        "kuyu_adi": "5127",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5128",
        "kuyu_adi": "5128",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5129",
        "kuyu_adi": "5129",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "513",
        "kuyu_adi": "513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5130",
        "kuyu_adi": "5130",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5131",
        "kuyu_adi": "5131",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5132",
        "kuyu_adi": "5132",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5133",
        "kuyu_adi": "5133",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5134",
        "kuyu_adi": "5134",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5135",
        "kuyu_adi": "5135",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5136",
        "kuyu_adi": "5136",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5137",
        "kuyu_adi": "5137",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5138",
        "kuyu_adi": "5138",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5139",
        "kuyu_adi": "5139",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "514",
        "kuyu_adi": "514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5140",
        "kuyu_adi": "5140",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5141",
        "kuyu_adi": "5141",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5142",
        "kuyu_adi": "5142",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5143",
        "kuyu_adi": "5143",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5144",
        "kuyu_adi": "5144",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5145",
        "kuyu_adi": "5145",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5146",
        "kuyu_adi": "5146",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5147",
        "kuyu_adi": "5147",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5148",
        "kuyu_adi": "5148",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5149",
        "kuyu_adi": "5149",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "515",
        "kuyu_adi": "515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5150",
        "kuyu_adi": "5150",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5151",
        "kuyu_adi": "5151",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5152",
        "kuyu_adi": "5152",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5153",
        "kuyu_adi": "5153",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5154",
        "kuyu_adi": "5154",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5155",
        "kuyu_adi": "5155",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5156",
        "kuyu_adi": "5156",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5157",
        "kuyu_adi": "5157",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5158",
        "kuyu_adi": "5158",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5159",
        "kuyu_adi": "5159",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "516",
        "kuyu_adi": "516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5160",
        "kuyu_adi": "5160",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5161",
        "kuyu_adi": "5161",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5162",
        "kuyu_adi": "5162",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5163",
        "kuyu_adi": "5163",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5164",
        "kuyu_adi": "5164",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5165",
        "kuyu_adi": "5165",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5166",
        "kuyu_adi": "5166",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5167",
        "kuyu_adi": "5167",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5168",
        "kuyu_adi": "5168",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5169",
        "kuyu_adi": "5169",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "517",
        "kuyu_adi": "517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5170",
        "kuyu_adi": "5170",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5171",
        "kuyu_adi": "5171",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5172",
        "kuyu_adi": "5172",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5173",
        "kuyu_adi": "5173",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5174",
        "kuyu_adi": "5174",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5175",
        "kuyu_adi": "5175",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5176",
        "kuyu_adi": "5176",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5177",
        "kuyu_adi": "5177",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5178",
        "kuyu_adi": "5178",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5179",
        "kuyu_adi": "5179",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "518",
        "kuyu_adi": "518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5180",
        "kuyu_adi": "5180",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5181",
        "kuyu_adi": "5181",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5182",
        "kuyu_adi": "5182",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5183",
        "kuyu_adi": "5183",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5184",
        "kuyu_adi": "5184",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5185",
        "kuyu_adi": "5185",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5186",
        "kuyu_adi": "5186",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5187",
        "kuyu_adi": "5187",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5188",
        "kuyu_adi": "5188",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5189",
        "kuyu_adi": "5189",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "519",
        "kuyu_adi": "519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5190",
        "kuyu_adi": "5190",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5191",
        "kuyu_adi": "5191",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5192",
        "kuyu_adi": "5192",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5193",
        "kuyu_adi": "5193",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5194",
        "kuyu_adi": "5194",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5195",
        "kuyu_adi": "5195",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5196",
        "kuyu_adi": "5196",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5197",
        "kuyu_adi": "5197",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5198",
        "kuyu_adi": "5198",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5199",
        "kuyu_adi": "5199",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "52",
        "kuyu_adi": "52",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "520",
        "kuyu_adi": "520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5200",
        "kuyu_adi": "5200",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5201",
        "kuyu_adi": "5201",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5202",
        "kuyu_adi": "5202",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5203",
        "kuyu_adi": "5203",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5204",
        "kuyu_adi": "5204",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5205",
        "kuyu_adi": "5205",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5206",
        "kuyu_adi": "5206",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5207",
        "kuyu_adi": "5207",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5208",
        "kuyu_adi": "5208",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5209",
        "kuyu_adi": "5209",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "521",
        "kuyu_adi": "521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5210",
        "kuyu_adi": "5210",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5211",
        "kuyu_adi": "5211",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5212",
        "kuyu_adi": "5212",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5213",
        "kuyu_adi": "5213",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5214",
        "kuyu_adi": "5214",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5215",
        "kuyu_adi": "5215",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5216",
        "kuyu_adi": "5216",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5217",
        "kuyu_adi": "5217",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5218",
        "kuyu_adi": "5218",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5219",
        "kuyu_adi": "5219",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "522",
        "kuyu_adi": "522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5220",
        "kuyu_adi": "5220",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5221",
        "kuyu_adi": "5221",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5222",
        "kuyu_adi": "5222",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5223",
        "kuyu_adi": "5223",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5224",
        "kuyu_adi": "5224",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5225",
        "kuyu_adi": "5225",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5226",
        "kuyu_adi": "5226",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5227",
        "kuyu_adi": "5227",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5228",
        "kuyu_adi": "5228",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5229",
        "kuyu_adi": "5229",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "523",
        "kuyu_adi": "523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5230",
        "kuyu_adi": "5230",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5231",
        "kuyu_adi": "5231",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5232",
        "kuyu_adi": "5232",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5233",
        "kuyu_adi": "5233",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5234",
        "kuyu_adi": "5234",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5235",
        "kuyu_adi": "5235",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5236",
        "kuyu_adi": "5236",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5237",
        "kuyu_adi": "5237",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5238",
        "kuyu_adi": "5238",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5239",
        "kuyu_adi": "5239",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "524",
        "kuyu_adi": "524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5240",
        "kuyu_adi": "5240",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5241",
        "kuyu_adi": "5241",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5242",
        "kuyu_adi": "5242",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5243",
        "kuyu_adi": "5243",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5244",
        "kuyu_adi": "5244",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5245",
        "kuyu_adi": "5245",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5246",
        "kuyu_adi": "5246",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5247",
        "kuyu_adi": "5247",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5248",
        "kuyu_adi": "5248",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5249",
        "kuyu_adi": "5249",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "525",
        "kuyu_adi": "525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5250",
        "kuyu_adi": "5250",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5251",
        "kuyu_adi": "5251",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5252",
        "kuyu_adi": "5252",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5253",
        "kuyu_adi": "5253",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5254",
        "kuyu_adi": "5254",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5255",
        "kuyu_adi": "5255",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5256",
        "kuyu_adi": "5256",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5257",
        "kuyu_adi": "5257",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5258",
        "kuyu_adi": "5258",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5259",
        "kuyu_adi": "5259",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "526",
        "kuyu_adi": "526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5260",
        "kuyu_adi": "5260",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5261",
        "kuyu_adi": "5261",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5262",
        "kuyu_adi": "5262",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5263",
        "kuyu_adi": "5263",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5264",
        "kuyu_adi": "5264",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5265",
        "kuyu_adi": "5265",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5266",
        "kuyu_adi": "5266",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5267",
        "kuyu_adi": "5267",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5268",
        "kuyu_adi": "5268",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5269",
        "kuyu_adi": "5269",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "527",
        "kuyu_adi": "527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5270",
        "kuyu_adi": "5270",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5271",
        "kuyu_adi": "5271",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5272",
        "kuyu_adi": "5272",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5273",
        "kuyu_adi": "5273",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5274",
        "kuyu_adi": "5274",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5275",
        "kuyu_adi": "5275",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5276",
        "kuyu_adi": "5276",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5277",
        "kuyu_adi": "5277",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5278",
        "kuyu_adi": "5278",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5279",
        "kuyu_adi": "5279",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "528",
        "kuyu_adi": "528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5280",
        "kuyu_adi": "5280",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5281",
        "kuyu_adi": "5281",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5282",
        "kuyu_adi": "5282",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5283",
        "kuyu_adi": "5283",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5284",
        "kuyu_adi": "5284",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5285",
        "kuyu_adi": "5285",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5286",
        "kuyu_adi": "5286",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5287",
        "kuyu_adi": "5287",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5288",
        "kuyu_adi": "5288",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5289",
        "kuyu_adi": "5289",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "529",
        "kuyu_adi": "529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5290",
        "kuyu_adi": "5290",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5291",
        "kuyu_adi": "5291",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5292",
        "kuyu_adi": "5292",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5293",
        "kuyu_adi": "5293",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5294",
        "kuyu_adi": "5294",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5295",
        "kuyu_adi": "5295",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5296",
        "kuyu_adi": "5296",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5297",
        "kuyu_adi": "5297",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5298",
        "kuyu_adi": "5298",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5299",
        "kuyu_adi": "5299",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "53",
        "kuyu_adi": "53",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "530",
        "kuyu_adi": "530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5300",
        "kuyu_adi": "5300",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5301",
        "kuyu_adi": "5301",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5302",
        "kuyu_adi": "5302",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5303",
        "kuyu_adi": "5303",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5304",
        "kuyu_adi": "5304",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5305",
        "kuyu_adi": "5305",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5306",
        "kuyu_adi": "5306",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5307",
        "kuyu_adi": "5307",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5308",
        "kuyu_adi": "5308",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5309",
        "kuyu_adi": "5309",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "531",
        "kuyu_adi": "531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5310",
        "kuyu_adi": "5310",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5311",
        "kuyu_adi": "5311",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5312",
        "kuyu_adi": "5312",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5313",
        "kuyu_adi": "5313",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5314",
        "kuyu_adi": "5314",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5315",
        "kuyu_adi": "5315",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5316",
        "kuyu_adi": "5316",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5317",
        "kuyu_adi": "5317",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5318",
        "kuyu_adi": "5318",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5319",
        "kuyu_adi": "5319",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "532",
        "kuyu_adi": "532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5320",
        "kuyu_adi": "5320",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5321",
        "kuyu_adi": "5321",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5322",
        "kuyu_adi": "5322",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5323",
        "kuyu_adi": "5323",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5324",
        "kuyu_adi": "5324",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5325",
        "kuyu_adi": "5325",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5326",
        "kuyu_adi": "5326",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5327",
        "kuyu_adi": "5327",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5328",
        "kuyu_adi": "5328",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5329",
        "kuyu_adi": "5329",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "533",
        "kuyu_adi": "533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5330",
        "kuyu_adi": "5330",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5331",
        "kuyu_adi": "5331",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5332",
        "kuyu_adi": "5332",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5333",
        "kuyu_adi": "5333",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5334",
        "kuyu_adi": "5334",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5335",
        "kuyu_adi": "5335",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5336",
        "kuyu_adi": "5336",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5337",
        "kuyu_adi": "5337",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5338",
        "kuyu_adi": "5338",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5339",
        "kuyu_adi": "5339",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "534",
        "kuyu_adi": "534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5340",
        "kuyu_adi": "5340",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5341",
        "kuyu_adi": "5341",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5342",
        "kuyu_adi": "5342",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5343",
        "kuyu_adi": "5343",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5344",
        "kuyu_adi": "5344",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5345",
        "kuyu_adi": "5345",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5346",
        "kuyu_adi": "5346",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5347",
        "kuyu_adi": "5347",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5348",
        "kuyu_adi": "5348",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5349",
        "kuyu_adi": "5349",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "535",
        "kuyu_adi": "535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5350",
        "kuyu_adi": "5350",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5351",
        "kuyu_adi": "5351",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5352",
        "kuyu_adi": "5352",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5353",
        "kuyu_adi": "5353",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5354",
        "kuyu_adi": "5354",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5355",
        "kuyu_adi": "5355",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5356",
        "kuyu_adi": "5356",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5357",
        "kuyu_adi": "5357",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5358",
        "kuyu_adi": "5358",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5359",
        "kuyu_adi": "5359",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "536",
        "kuyu_adi": "536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5360",
        "kuyu_adi": "5360",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5361",
        "kuyu_adi": "5361",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5362",
        "kuyu_adi": "5362",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5363",
        "kuyu_adi": "5363",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5364",
        "kuyu_adi": "5364",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5365",
        "kuyu_adi": "5365",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5366",
        "kuyu_adi": "5366",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5367",
        "kuyu_adi": "5367",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5368",
        "kuyu_adi": "5368",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5369",
        "kuyu_adi": "5369",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "537",
        "kuyu_adi": "537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5370",
        "kuyu_adi": "5370",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5371",
        "kuyu_adi": "5371",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5372",
        "kuyu_adi": "5372",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5373",
        "kuyu_adi": "5373",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5374",
        "kuyu_adi": "5374",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5375",
        "kuyu_adi": "5375",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5376",
        "kuyu_adi": "5376",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5377",
        "kuyu_adi": "5377",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5378",
        "kuyu_adi": "5378",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5379",
        "kuyu_adi": "5379",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "538",
        "kuyu_adi": "538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5380",
        "kuyu_adi": "5380",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5381",
        "kuyu_adi": "5381",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5382",
        "kuyu_adi": "5382",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5383",
        "kuyu_adi": "5383",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5384",
        "kuyu_adi": "5384",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5385",
        "kuyu_adi": "5385",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5386",
        "kuyu_adi": "5386",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5387",
        "kuyu_adi": "5387",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5388",
        "kuyu_adi": "5388",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5389",
        "kuyu_adi": "5389",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "539",
        "kuyu_adi": "539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5390",
        "kuyu_adi": "5390",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5391",
        "kuyu_adi": "5391",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5392",
        "kuyu_adi": "5392",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5393",
        "kuyu_adi": "5393",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5394",
        "kuyu_adi": "5394",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5395",
        "kuyu_adi": "5395",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5396",
        "kuyu_adi": "5396",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5397",
        "kuyu_adi": "5397",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5398",
        "kuyu_adi": "5398",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5399",
        "kuyu_adi": "5399",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "54",
        "kuyu_adi": "54",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "540",
        "kuyu_adi": "540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5400",
        "kuyu_adi": "5400",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5401",
        "kuyu_adi": "5401",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5402",
        "kuyu_adi": "5402",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5403",
        "kuyu_adi": "5403",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5404",
        "kuyu_adi": "5404",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5405",
        "kuyu_adi": "5405",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5406",
        "kuyu_adi": "5406",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5407",
        "kuyu_adi": "5407",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5408",
        "kuyu_adi": "5408",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5409",
        "kuyu_adi": "5409",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "541",
        "kuyu_adi": "541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5410",
        "kuyu_adi": "5410",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5411",
        "kuyu_adi": "5411",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5412",
        "kuyu_adi": "5412",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5413",
        "kuyu_adi": "5413",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5414",
        "kuyu_adi": "5414",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5415",
        "kuyu_adi": "5415",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5416",
        "kuyu_adi": "5416",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5417",
        "kuyu_adi": "5417",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5418",
        "kuyu_adi": "5418",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5419",
        "kuyu_adi": "5419",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "542",
        "kuyu_adi": "542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5420",
        "kuyu_adi": "5420",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5421",
        "kuyu_adi": "5421",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5422",
        "kuyu_adi": "5422",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5423",
        "kuyu_adi": "5423",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5424",
        "kuyu_adi": "5424",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5425",
        "kuyu_adi": "5425",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5426",
        "kuyu_adi": "5426",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5427",
        "kuyu_adi": "5427",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5428",
        "kuyu_adi": "5428",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5429",
        "kuyu_adi": "5429",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "543",
        "kuyu_adi": "543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5430",
        "kuyu_adi": "5430",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5431",
        "kuyu_adi": "5431",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5432",
        "kuyu_adi": "5432",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5433",
        "kuyu_adi": "5433",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5434",
        "kuyu_adi": "5434",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5435",
        "kuyu_adi": "5435",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5436",
        "kuyu_adi": "5436",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5437",
        "kuyu_adi": "5437",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5438",
        "kuyu_adi": "5438",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5439",
        "kuyu_adi": "5439",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "544",
        "kuyu_adi": "544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5440",
        "kuyu_adi": "5440",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5441",
        "kuyu_adi": "5441",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5442",
        "kuyu_adi": "5442",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5443",
        "kuyu_adi": "5443",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5444",
        "kuyu_adi": "5444",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5445",
        "kuyu_adi": "5445",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5446",
        "kuyu_adi": "5446",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5447",
        "kuyu_adi": "5447",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5448",
        "kuyu_adi": "5448",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5449",
        "kuyu_adi": "5449",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "545",
        "kuyu_adi": "545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5450",
        "kuyu_adi": "5450",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5451",
        "kuyu_adi": "5451",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5452",
        "kuyu_adi": "5452",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5453",
        "kuyu_adi": "5453",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5454",
        "kuyu_adi": "5454",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5455",
        "kuyu_adi": "5455",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5456",
        "kuyu_adi": "5456",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5457",
        "kuyu_adi": "5457",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5458",
        "kuyu_adi": "5458",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5459",
        "kuyu_adi": "5459",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "546",
        "kuyu_adi": "546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5460",
        "kuyu_adi": "5460",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5461",
        "kuyu_adi": "5461",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5462",
        "kuyu_adi": "5462",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5463",
        "kuyu_adi": "5463",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5464",
        "kuyu_adi": "5464",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5465",
        "kuyu_adi": "5465",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5466",
        "kuyu_adi": "5466",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5467",
        "kuyu_adi": "5467",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5468",
        "kuyu_adi": "5468",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5469",
        "kuyu_adi": "5469",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "547",
        "kuyu_adi": "547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5470",
        "kuyu_adi": "5470",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5471",
        "kuyu_adi": "5471",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5472",
        "kuyu_adi": "5472",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5473",
        "kuyu_adi": "5473",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5474",
        "kuyu_adi": "5474",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5475",
        "kuyu_adi": "5475",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5476",
        "kuyu_adi": "5476",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5477",
        "kuyu_adi": "5477",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5478",
        "kuyu_adi": "5478",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5479",
        "kuyu_adi": "5479",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "548",
        "kuyu_adi": "548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5480",
        "kuyu_adi": "5480",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5481",
        "kuyu_adi": "5481",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5482",
        "kuyu_adi": "5482",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5483",
        "kuyu_adi": "5483",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5484",
        "kuyu_adi": "5484",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5485",
        "kuyu_adi": "5485",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5486",
        "kuyu_adi": "5486",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5487",
        "kuyu_adi": "5487",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5488",
        "kuyu_adi": "5488",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5489",
        "kuyu_adi": "5489",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "549",
        "kuyu_adi": "549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5490",
        "kuyu_adi": "5490",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5491",
        "kuyu_adi": "5491",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5492",
        "kuyu_adi": "5492",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5493",
        "kuyu_adi": "5493",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5494",
        "kuyu_adi": "5494",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5495",
        "kuyu_adi": "5495",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5496",
        "kuyu_adi": "5496",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5497",
        "kuyu_adi": "5497",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5498",
        "kuyu_adi": "5498",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5499",
        "kuyu_adi": "5499",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "55",
        "kuyu_adi": "55",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "550",
        "kuyu_adi": "550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5500",
        "kuyu_adi": "5500",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5501",
        "kuyu_adi": "5501",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5502",
        "kuyu_adi": "5502",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5503",
        "kuyu_adi": "5503",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5504",
        "kuyu_adi": "5504",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5505",
        "kuyu_adi": "5505",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5506",
        "kuyu_adi": "5506",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5507",
        "kuyu_adi": "5507",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5508",
        "kuyu_adi": "5508",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5509",
        "kuyu_adi": "5509",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "551",
        "kuyu_adi": "551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5510",
        "kuyu_adi": "5510",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5511",
        "kuyu_adi": "5511",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5512",
        "kuyu_adi": "5512",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5513",
        "kuyu_adi": "5513",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5514",
        "kuyu_adi": "5514",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5515",
        "kuyu_adi": "5515",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5516",
        "kuyu_adi": "5516",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5517",
        "kuyu_adi": "5517",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5518",
        "kuyu_adi": "5518",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5519",
        "kuyu_adi": "5519",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "552",
        "kuyu_adi": "552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5520",
        "kuyu_adi": "5520",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5521",
        "kuyu_adi": "5521",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5522",
        "kuyu_adi": "5522",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5523",
        "kuyu_adi": "5523",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5524",
        "kuyu_adi": "5524",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5525",
        "kuyu_adi": "5525",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5526",
        "kuyu_adi": "5526",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5527",
        "kuyu_adi": "5527",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5528",
        "kuyu_adi": "5528",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5529",
        "kuyu_adi": "5529",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "553",
        "kuyu_adi": "553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5530",
        "kuyu_adi": "5530",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5531",
        "kuyu_adi": "5531",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5532",
        "kuyu_adi": "5532",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5533",
        "kuyu_adi": "5533",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5534",
        "kuyu_adi": "5534",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5535",
        "kuyu_adi": "5535",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5536",
        "kuyu_adi": "5536",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5537",
        "kuyu_adi": "5537",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5538",
        "kuyu_adi": "5538",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5539",
        "kuyu_adi": "5539",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "554",
        "kuyu_adi": "554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5540",
        "kuyu_adi": "5540",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5541",
        "kuyu_adi": "5541",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5542",
        "kuyu_adi": "5542",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5543",
        "kuyu_adi": "5543",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5544",
        "kuyu_adi": "5544",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5545",
        "kuyu_adi": "5545",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5546",
        "kuyu_adi": "5546",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5547",
        "kuyu_adi": "5547",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5548",
        "kuyu_adi": "5548",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5549",
        "kuyu_adi": "5549",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "555",
        "kuyu_adi": "555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5550",
        "kuyu_adi": "5550",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5551",
        "kuyu_adi": "5551",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5552",
        "kuyu_adi": "5552",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5553",
        "kuyu_adi": "5553",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5554",
        "kuyu_adi": "5554",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5555",
        "kuyu_adi": "5555",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5556",
        "kuyu_adi": "5556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5557",
        "kuyu_adi": "5557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5558",
        "kuyu_adi": "5558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5559",
        "kuyu_adi": "5559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "556",
        "kuyu_adi": "556",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5560",
        "kuyu_adi": "5560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5561",
        "kuyu_adi": "5561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5562",
        "kuyu_adi": "5562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5563",
        "kuyu_adi": "5563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5564",
        "kuyu_adi": "5564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5565",
        "kuyu_adi": "5565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5566",
        "kuyu_adi": "5566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5567",
        "kuyu_adi": "5567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5568",
        "kuyu_adi": "5568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5569",
        "kuyu_adi": "5569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "557",
        "kuyu_adi": "557",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5570",
        "kuyu_adi": "5570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5571",
        "kuyu_adi": "5571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5572",
        "kuyu_adi": "5572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5573",
        "kuyu_adi": "5573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5574",
        "kuyu_adi": "5574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5575",
        "kuyu_adi": "5575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5576",
        "kuyu_adi": "5576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5577",
        "kuyu_adi": "5577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5578",
        "kuyu_adi": "5578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5579",
        "kuyu_adi": "5579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "558",
        "kuyu_adi": "558",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5580",
        "kuyu_adi": "5580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5581",
        "kuyu_adi": "5581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5582",
        "kuyu_adi": "5582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5583",
        "kuyu_adi": "5583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5584",
        "kuyu_adi": "5584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5585",
        "kuyu_adi": "5585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5586",
        "kuyu_adi": "5586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5587",
        "kuyu_adi": "5587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5588",
        "kuyu_adi": "5588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5589",
        "kuyu_adi": "5589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "559",
        "kuyu_adi": "559",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5590",
        "kuyu_adi": "5590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5591",
        "kuyu_adi": "5591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5592",
        "kuyu_adi": "5592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5593",
        "kuyu_adi": "5593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5594",
        "kuyu_adi": "5594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5595",
        "kuyu_adi": "5595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5596",
        "kuyu_adi": "5596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5597",
        "kuyu_adi": "5597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5598",
        "kuyu_adi": "5598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5599",
        "kuyu_adi": "5599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "56",
        "kuyu_adi": "56",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "560",
        "kuyu_adi": "560",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5600",
        "kuyu_adi": "5600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5601",
        "kuyu_adi": "5601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5602",
        "kuyu_adi": "5602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5603",
        "kuyu_adi": "5603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5604",
        "kuyu_adi": "5604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5605",
        "kuyu_adi": "5605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5606",
        "kuyu_adi": "5606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5607",
        "kuyu_adi": "5607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5608",
        "kuyu_adi": "5608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5609",
        "kuyu_adi": "5609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "561",
        "kuyu_adi": "561",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5610",
        "kuyu_adi": "5610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5611",
        "kuyu_adi": "5611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5612",
        "kuyu_adi": "5612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5613",
        "kuyu_adi": "5613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5614",
        "kuyu_adi": "5614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5615",
        "kuyu_adi": "5615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5616",
        "kuyu_adi": "5616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5617",
        "kuyu_adi": "5617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5618",
        "kuyu_adi": "5618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5619",
        "kuyu_adi": "5619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "562",
        "kuyu_adi": "562",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5620",
        "kuyu_adi": "5620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5621",
        "kuyu_adi": "5621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5622",
        "kuyu_adi": "5622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5623",
        "kuyu_adi": "5623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5624",
        "kuyu_adi": "5624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5625",
        "kuyu_adi": "5625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5626",
        "kuyu_adi": "5626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5627",
        "kuyu_adi": "5627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5628",
        "kuyu_adi": "5628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5629",
        "kuyu_adi": "5629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "563",
        "kuyu_adi": "563",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5630",
        "kuyu_adi": "5630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5631",
        "kuyu_adi": "5631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5632",
        "kuyu_adi": "5632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5633",
        "kuyu_adi": "5633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5634",
        "kuyu_adi": "5634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5635",
        "kuyu_adi": "5635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5636",
        "kuyu_adi": "5636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5637",
        "kuyu_adi": "5637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5638",
        "kuyu_adi": "5638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5639",
        "kuyu_adi": "5639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "564",
        "kuyu_adi": "564",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5640",
        "kuyu_adi": "5640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5641",
        "kuyu_adi": "5641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5642",
        "kuyu_adi": "5642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5643",
        "kuyu_adi": "5643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5644",
        "kuyu_adi": "5644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5645",
        "kuyu_adi": "5645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5646",
        "kuyu_adi": "5646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5647",
        "kuyu_adi": "5647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5648",
        "kuyu_adi": "5648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5649",
        "kuyu_adi": "5649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "565",
        "kuyu_adi": "565",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5650",
        "kuyu_adi": "5650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5651",
        "kuyu_adi": "5651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5652",
        "kuyu_adi": "5652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5653",
        "kuyu_adi": "5653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5654",
        "kuyu_adi": "5654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5655",
        "kuyu_adi": "5655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5656",
        "kuyu_adi": "5656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5657",
        "kuyu_adi": "5657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5658",
        "kuyu_adi": "5658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5659",
        "kuyu_adi": "5659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "566",
        "kuyu_adi": "566",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5660",
        "kuyu_adi": "5660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5661",
        "kuyu_adi": "5661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5662",
        "kuyu_adi": "5662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5663",
        "kuyu_adi": "5663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5664",
        "kuyu_adi": "5664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5665",
        "kuyu_adi": "5665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5666",
        "kuyu_adi": "5666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5667",
        "kuyu_adi": "5667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5668",
        "kuyu_adi": "5668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5669",
        "kuyu_adi": "5669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "567",
        "kuyu_adi": "567",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5670",
        "kuyu_adi": "5670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5671",
        "kuyu_adi": "5671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5672",
        "kuyu_adi": "5672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5673",
        "kuyu_adi": "5673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5674",
        "kuyu_adi": "5674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5675",
        "kuyu_adi": "5675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5676",
        "kuyu_adi": "5676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5677",
        "kuyu_adi": "5677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5678",
        "kuyu_adi": "5678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5679",
        "kuyu_adi": "5679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "568",
        "kuyu_adi": "568",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5680",
        "kuyu_adi": "5680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5681",
        "kuyu_adi": "5681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5682",
        "kuyu_adi": "5682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5683",
        "kuyu_adi": "5683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5684",
        "kuyu_adi": "5684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5685",
        "kuyu_adi": "5685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5686",
        "kuyu_adi": "5686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5687",
        "kuyu_adi": "5687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5688",
        "kuyu_adi": "5688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5689",
        "kuyu_adi": "5689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "569",
        "kuyu_adi": "569",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5690",
        "kuyu_adi": "5690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5691",
        "kuyu_adi": "5691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5692",
        "kuyu_adi": "5692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5693",
        "kuyu_adi": "5693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5694",
        "kuyu_adi": "5694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5695",
        "kuyu_adi": "5695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5696",
        "kuyu_adi": "5696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5697",
        "kuyu_adi": "5697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5698",
        "kuyu_adi": "5698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5699",
        "kuyu_adi": "5699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "57",
        "kuyu_adi": "57",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "570",
        "kuyu_adi": "570",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5700",
        "kuyu_adi": "5700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5701",
        "kuyu_adi": "5701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5702",
        "kuyu_adi": "5702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5703",
        "kuyu_adi": "5703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5704",
        "kuyu_adi": "5704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5705",
        "kuyu_adi": "5705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5706",
        "kuyu_adi": "5706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5707",
        "kuyu_adi": "5707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5708",
        "kuyu_adi": "5708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5709",
        "kuyu_adi": "5709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "571",
        "kuyu_adi": "571",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5710",
        "kuyu_adi": "5710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5711",
        "kuyu_adi": "5711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5712",
        "kuyu_adi": "5712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5713",
        "kuyu_adi": "5713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5714",
        "kuyu_adi": "5714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5715",
        "kuyu_adi": "5715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5716",
        "kuyu_adi": "5716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5717",
        "kuyu_adi": "5717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5718",
        "kuyu_adi": "5718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5719",
        "kuyu_adi": "5719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "572",
        "kuyu_adi": "572",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5720",
        "kuyu_adi": "5720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5721",
        "kuyu_adi": "5721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5722",
        "kuyu_adi": "5722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5723",
        "kuyu_adi": "5723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5724",
        "kuyu_adi": "5724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5725",
        "kuyu_adi": "5725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5726",
        "kuyu_adi": "5726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5727",
        "kuyu_adi": "5727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5728",
        "kuyu_adi": "5728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5729",
        "kuyu_adi": "5729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "573",
        "kuyu_adi": "573",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5730",
        "kuyu_adi": "5730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5731",
        "kuyu_adi": "5731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5732",
        "kuyu_adi": "5732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5733",
        "kuyu_adi": "5733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5734",
        "kuyu_adi": "5734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5735",
        "kuyu_adi": "5735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5736",
        "kuyu_adi": "5736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5737",
        "kuyu_adi": "5737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5738",
        "kuyu_adi": "5738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5739",
        "kuyu_adi": "5739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "574",
        "kuyu_adi": "574",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5740",
        "kuyu_adi": "5740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5741",
        "kuyu_adi": "5741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5742",
        "kuyu_adi": "5742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5743",
        "kuyu_adi": "5743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5744",
        "kuyu_adi": "5744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5745",
        "kuyu_adi": "5745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5746",
        "kuyu_adi": "5746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5747",
        "kuyu_adi": "5747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5748",
        "kuyu_adi": "5748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5749",
        "kuyu_adi": "5749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "575",
        "kuyu_adi": "575",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5750",
        "kuyu_adi": "5750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5751",
        "kuyu_adi": "5751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5752",
        "kuyu_adi": "5752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5753",
        "kuyu_adi": "5753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5754",
        "kuyu_adi": "5754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5755",
        "kuyu_adi": "5755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5756",
        "kuyu_adi": "5756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5757",
        "kuyu_adi": "5757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5758",
        "kuyu_adi": "5758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5759",
        "kuyu_adi": "5759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "576",
        "kuyu_adi": "576",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5760",
        "kuyu_adi": "5760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5761",
        "kuyu_adi": "5761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5762",
        "kuyu_adi": "5762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5763",
        "kuyu_adi": "5763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5764",
        "kuyu_adi": "5764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5765",
        "kuyu_adi": "5765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5766",
        "kuyu_adi": "5766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5767",
        "kuyu_adi": "5767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5768",
        "kuyu_adi": "5768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5769",
        "kuyu_adi": "5769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "577",
        "kuyu_adi": "577",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5770",
        "kuyu_adi": "5770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5771",
        "kuyu_adi": "5771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5772",
        "kuyu_adi": "5772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5773",
        "kuyu_adi": "5773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5774",
        "kuyu_adi": "5774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5775",
        "kuyu_adi": "5775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5776",
        "kuyu_adi": "5776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5777",
        "kuyu_adi": "5777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5778",
        "kuyu_adi": "5778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5779",
        "kuyu_adi": "5779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "578",
        "kuyu_adi": "578",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5780",
        "kuyu_adi": "5780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5781",
        "kuyu_adi": "5781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5782",
        "kuyu_adi": "5782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5783",
        "kuyu_adi": "5783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5784",
        "kuyu_adi": "5784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5785",
        "kuyu_adi": "5785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5786",
        "kuyu_adi": "5786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5787",
        "kuyu_adi": "5787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5788",
        "kuyu_adi": "5788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5789",
        "kuyu_adi": "5789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "579",
        "kuyu_adi": "579",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5790",
        "kuyu_adi": "5790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5791",
        "kuyu_adi": "5791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5792",
        "kuyu_adi": "5792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5793",
        "kuyu_adi": "5793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5794",
        "kuyu_adi": "5794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5795",
        "kuyu_adi": "5795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5796",
        "kuyu_adi": "5796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5797",
        "kuyu_adi": "5797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5798",
        "kuyu_adi": "5798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5799",
        "kuyu_adi": "5799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "58",
        "kuyu_adi": "58",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "580",
        "kuyu_adi": "580",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5800",
        "kuyu_adi": "5800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5801",
        "kuyu_adi": "5801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5802",
        "kuyu_adi": "5802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5803",
        "kuyu_adi": "5803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5804",
        "kuyu_adi": "5804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5805",
        "kuyu_adi": "5805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5806",
        "kuyu_adi": "5806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5807",
        "kuyu_adi": "5807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5808",
        "kuyu_adi": "5808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5809",
        "kuyu_adi": "5809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "581",
        "kuyu_adi": "581",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5810",
        "kuyu_adi": "5810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5811",
        "kuyu_adi": "5811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5812",
        "kuyu_adi": "5812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5813",
        "kuyu_adi": "5813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5814",
        "kuyu_adi": "5814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5815",
        "kuyu_adi": "5815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5816",
        "kuyu_adi": "5816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5817",
        "kuyu_adi": "5817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5818",
        "kuyu_adi": "5818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5819",
        "kuyu_adi": "5819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "582",
        "kuyu_adi": "582",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5820",
        "kuyu_adi": "5820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5821",
        "kuyu_adi": "5821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5822",
        "kuyu_adi": "5822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5823",
        "kuyu_adi": "5823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5824",
        "kuyu_adi": "5824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5825",
        "kuyu_adi": "5825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5826",
        "kuyu_adi": "5826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5827",
        "kuyu_adi": "5827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5828",
        "kuyu_adi": "5828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5829",
        "kuyu_adi": "5829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "583",
        "kuyu_adi": "583",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5830",
        "kuyu_adi": "5830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5831",
        "kuyu_adi": "5831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5832",
        "kuyu_adi": "5832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5833",
        "kuyu_adi": "5833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5834",
        "kuyu_adi": "5834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5835",
        "kuyu_adi": "5835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5836",
        "kuyu_adi": "5836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5837",
        "kuyu_adi": "5837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5838",
        "kuyu_adi": "5838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5839",
        "kuyu_adi": "5839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "584",
        "kuyu_adi": "584",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5840",
        "kuyu_adi": "5840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5841",
        "kuyu_adi": "5841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5842",
        "kuyu_adi": "5842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5843",
        "kuyu_adi": "5843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5844",
        "kuyu_adi": "5844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5845",
        "kuyu_adi": "5845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5846",
        "kuyu_adi": "5846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5847",
        "kuyu_adi": "5847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5848",
        "kuyu_adi": "5848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5849",
        "kuyu_adi": "5849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "585",
        "kuyu_adi": "585",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5850",
        "kuyu_adi": "5850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5851",
        "kuyu_adi": "5851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5852",
        "kuyu_adi": "5852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5853",
        "kuyu_adi": "5853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5854",
        "kuyu_adi": "5854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5855",
        "kuyu_adi": "5855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5856",
        "kuyu_adi": "5856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5857",
        "kuyu_adi": "5857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5858",
        "kuyu_adi": "5858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5859",
        "kuyu_adi": "5859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "586",
        "kuyu_adi": "586",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5860",
        "kuyu_adi": "5860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5861",
        "kuyu_adi": "5861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5862",
        "kuyu_adi": "5862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5863",
        "kuyu_adi": "5863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5864",
        "kuyu_adi": "5864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5865",
        "kuyu_adi": "5865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5866",
        "kuyu_adi": "5866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5867",
        "kuyu_adi": "5867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5868",
        "kuyu_adi": "5868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5869",
        "kuyu_adi": "5869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "587",
        "kuyu_adi": "587",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5870",
        "kuyu_adi": "5870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5871",
        "kuyu_adi": "5871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5872",
        "kuyu_adi": "5872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5873",
        "kuyu_adi": "5873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5874",
        "kuyu_adi": "5874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5875",
        "kuyu_adi": "5875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5876",
        "kuyu_adi": "5876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5877",
        "kuyu_adi": "5877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5878",
        "kuyu_adi": "5878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5879",
        "kuyu_adi": "5879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "588",
        "kuyu_adi": "588",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5880",
        "kuyu_adi": "5880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5881",
        "kuyu_adi": "5881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5882",
        "kuyu_adi": "5882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5883",
        "kuyu_adi": "5883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5884",
        "kuyu_adi": "5884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5885",
        "kuyu_adi": "5885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5886",
        "kuyu_adi": "5886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5887",
        "kuyu_adi": "5887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5888",
        "kuyu_adi": "5888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5889",
        "kuyu_adi": "5889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "589",
        "kuyu_adi": "589",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5890",
        "kuyu_adi": "5890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5891",
        "kuyu_adi": "5891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5892",
        "kuyu_adi": "5892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5893",
        "kuyu_adi": "5893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5894",
        "kuyu_adi": "5894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5895",
        "kuyu_adi": "5895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5896",
        "kuyu_adi": "5896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5897",
        "kuyu_adi": "5897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5898",
        "kuyu_adi": "5898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5899",
        "kuyu_adi": "5899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "59",
        "kuyu_adi": "59",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "590",
        "kuyu_adi": "590",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5900",
        "kuyu_adi": "5900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5901",
        "kuyu_adi": "5901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5902",
        "kuyu_adi": "5902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5903",
        "kuyu_adi": "5903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5904",
        "kuyu_adi": "5904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5905",
        "kuyu_adi": "5905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5906",
        "kuyu_adi": "5906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5907",
        "kuyu_adi": "5907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5908",
        "kuyu_adi": "5908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5909",
        "kuyu_adi": "5909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "591",
        "kuyu_adi": "591",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "5910",
        "kuyu_adi": "5910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "592",
        "kuyu_adi": "592",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "593",
        "kuyu_adi": "593",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "594",
        "kuyu_adi": "594",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "595",
        "kuyu_adi": "595",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "596",
        "kuyu_adi": "596",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "597",
        "kuyu_adi": "597",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "598",
        "kuyu_adi": "598",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "599",
        "kuyu_adi": "599",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "6",
        "kuyu_adi": "6",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "60",
        "kuyu_adi": "60",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "600",
        "kuyu_adi": "600",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "601",
        "kuyu_adi": "601",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "602",
        "kuyu_adi": "602",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "603",
        "kuyu_adi": "603",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "604",
        "kuyu_adi": "604",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "605",
        "kuyu_adi": "605",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "606",
        "kuyu_adi": "606",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "607",
        "kuyu_adi": "607",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "608",
        "kuyu_adi": "608",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "609",
        "kuyu_adi": "609",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "61",
        "kuyu_adi": "61",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "610",
        "kuyu_adi": "610",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "611",
        "kuyu_adi": "611",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "612",
        "kuyu_adi": "612",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "613",
        "kuyu_adi": "613",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "614",
        "kuyu_adi": "614",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "615",
        "kuyu_adi": "615",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "616",
        "kuyu_adi": "616",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "617",
        "kuyu_adi": "617",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "618",
        "kuyu_adi": "618",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "619",
        "kuyu_adi": "619",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "62",
        "kuyu_adi": "62",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "620",
        "kuyu_adi": "620",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "621",
        "kuyu_adi": "621",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "622",
        "kuyu_adi": "622",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "623",
        "kuyu_adi": "623",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "624",
        "kuyu_adi": "624",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "625",
        "kuyu_adi": "625",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "626",
        "kuyu_adi": "626",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "627",
        "kuyu_adi": "627",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "628",
        "kuyu_adi": "628",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "629",
        "kuyu_adi": "629",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "63",
        "kuyu_adi": "63",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "630",
        "kuyu_adi": "630",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "631",
        "kuyu_adi": "631",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "632",
        "kuyu_adi": "632",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "633",
        "kuyu_adi": "633",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "634",
        "kuyu_adi": "634",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "635",
        "kuyu_adi": "635",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "636",
        "kuyu_adi": "636",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "637",
        "kuyu_adi": "637",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "638",
        "kuyu_adi": "638",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "639",
        "kuyu_adi": "639",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "64",
        "kuyu_adi": "64",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "640",
        "kuyu_adi": "640",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "641",
        "kuyu_adi": "641",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "642",
        "kuyu_adi": "642",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "643",
        "kuyu_adi": "643",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "644",
        "kuyu_adi": "644",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "645",
        "kuyu_adi": "645",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "646",
        "kuyu_adi": "646",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "647",
        "kuyu_adi": "647",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "648",
        "kuyu_adi": "648",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "649",
        "kuyu_adi": "649",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "65",
        "kuyu_adi": "65",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "650",
        "kuyu_adi": "650",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "651",
        "kuyu_adi": "651",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "652",
        "kuyu_adi": "652",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "653",
        "kuyu_adi": "653",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "654",
        "kuyu_adi": "654",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "655",
        "kuyu_adi": "655",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "656",
        "kuyu_adi": "656",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "657",
        "kuyu_adi": "657",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "658",
        "kuyu_adi": "658",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "659",
        "kuyu_adi": "659",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "66",
        "kuyu_adi": "66",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "660",
        "kuyu_adi": "660",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "661",
        "kuyu_adi": "661",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "662",
        "kuyu_adi": "662",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "663",
        "kuyu_adi": "663",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "664",
        "kuyu_adi": "664",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "665",
        "kuyu_adi": "665",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "666",
        "kuyu_adi": "666",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "667",
        "kuyu_adi": "667",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "668",
        "kuyu_adi": "668",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "669",
        "kuyu_adi": "669",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "67",
        "kuyu_adi": "67",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "670",
        "kuyu_adi": "670",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "671",
        "kuyu_adi": "671",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "672",
        "kuyu_adi": "672",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "673",
        "kuyu_adi": "673",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "674",
        "kuyu_adi": "674",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "675",
        "kuyu_adi": "675",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "676",
        "kuyu_adi": "676",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "677",
        "kuyu_adi": "677",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "678",
        "kuyu_adi": "678",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "679",
        "kuyu_adi": "679",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "68",
        "kuyu_adi": "68",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "680",
        "kuyu_adi": "680",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "681",
        "kuyu_adi": "681",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "682",
        "kuyu_adi": "682",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "683",
        "kuyu_adi": "683",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "684",
        "kuyu_adi": "684",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "685",
        "kuyu_adi": "685",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "686",
        "kuyu_adi": "686",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "687",
        "kuyu_adi": "687",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "688",
        "kuyu_adi": "688",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "689",
        "kuyu_adi": "689",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "69",
        "kuyu_adi": "69",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "690",
        "kuyu_adi": "690",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "691",
        "kuyu_adi": "691",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "692",
        "kuyu_adi": "692",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "693",
        "kuyu_adi": "693",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "694",
        "kuyu_adi": "694",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "695",
        "kuyu_adi": "695",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "696",
        "kuyu_adi": "696",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "697",
        "kuyu_adi": "697",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "698",
        "kuyu_adi": "698",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "699",
        "kuyu_adi": "699",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "7",
        "kuyu_adi": "7",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "70",
        "kuyu_adi": "70",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "700",
        "kuyu_adi": "700",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "701",
        "kuyu_adi": "701",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "702",
        "kuyu_adi": "702",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "703",
        "kuyu_adi": "703",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "704",
        "kuyu_adi": "704",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "705",
        "kuyu_adi": "705",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "706",
        "kuyu_adi": "706",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "707",
        "kuyu_adi": "707",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "708",
        "kuyu_adi": "708",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "709",
        "kuyu_adi": "709",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "71",
        "kuyu_adi": "71",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "710",
        "kuyu_adi": "710",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "711",
        "kuyu_adi": "711",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "712",
        "kuyu_adi": "712",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "713",
        "kuyu_adi": "713",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "714",
        "kuyu_adi": "714",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "715",
        "kuyu_adi": "715",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "716",
        "kuyu_adi": "716",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "717",
        "kuyu_adi": "717",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "718",
        "kuyu_adi": "718",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "719",
        "kuyu_adi": "719",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "72",
        "kuyu_adi": "72",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "720",
        "kuyu_adi": "720",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "721",
        "kuyu_adi": "721",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "722",
        "kuyu_adi": "722",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "723",
        "kuyu_adi": "723",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "724",
        "kuyu_adi": "724",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "725",
        "kuyu_adi": "725",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "726",
        "kuyu_adi": "726",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "727",
        "kuyu_adi": "727",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "728",
        "kuyu_adi": "728",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "729",
        "kuyu_adi": "729",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "73",
        "kuyu_adi": "73",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "730",
        "kuyu_adi": "730",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "731",
        "kuyu_adi": "731",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "732",
        "kuyu_adi": "732",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "733",
        "kuyu_adi": "733",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "734",
        "kuyu_adi": "734",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "735",
        "kuyu_adi": "735",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "736",
        "kuyu_adi": "736",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "737",
        "kuyu_adi": "737",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "738",
        "kuyu_adi": "738",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "739",
        "kuyu_adi": "739",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "74",
        "kuyu_adi": "74",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "740",
        "kuyu_adi": "740",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "741",
        "kuyu_adi": "741",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "742",
        "kuyu_adi": "742",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "743",
        "kuyu_adi": "743",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "744",
        "kuyu_adi": "744",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "745",
        "kuyu_adi": "745",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "746",
        "kuyu_adi": "746",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "747",
        "kuyu_adi": "747",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "748",
        "kuyu_adi": "748",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "749",
        "kuyu_adi": "749",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "75",
        "kuyu_adi": "75",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "750",
        "kuyu_adi": "750",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "751",
        "kuyu_adi": "751",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "752",
        "kuyu_adi": "752",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "753",
        "kuyu_adi": "753",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "754",
        "kuyu_adi": "754",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "755",
        "kuyu_adi": "755",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "756",
        "kuyu_adi": "756",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "757",
        "kuyu_adi": "757",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "758",
        "kuyu_adi": "758",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "759",
        "kuyu_adi": "759",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "76",
        "kuyu_adi": "76",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "760",
        "kuyu_adi": "760",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "761",
        "kuyu_adi": "761",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "762",
        "kuyu_adi": "762",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "763",
        "kuyu_adi": "763",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "764",
        "kuyu_adi": "764",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "765",
        "kuyu_adi": "765",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "766",
        "kuyu_adi": "766",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "767",
        "kuyu_adi": "767",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "768",
        "kuyu_adi": "768",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "769",
        "kuyu_adi": "769",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "77",
        "kuyu_adi": "77",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "770",
        "kuyu_adi": "770",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "771",
        "kuyu_adi": "771",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "772",
        "kuyu_adi": "772",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "773",
        "kuyu_adi": "773",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "774",
        "kuyu_adi": "774",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "775",
        "kuyu_adi": "775",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "776",
        "kuyu_adi": "776",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "777",
        "kuyu_adi": "777",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "778",
        "kuyu_adi": "778",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "779",
        "kuyu_adi": "779",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "78",
        "kuyu_adi": "78",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "780",
        "kuyu_adi": "780",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "781",
        "kuyu_adi": "781",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "782",
        "kuyu_adi": "782",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "783",
        "kuyu_adi": "783",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "784",
        "kuyu_adi": "784",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "785",
        "kuyu_adi": "785",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "786",
        "kuyu_adi": "786",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "787",
        "kuyu_adi": "787",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "788",
        "kuyu_adi": "788",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "789",
        "kuyu_adi": "789",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "79",
        "kuyu_adi": "79",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "790",
        "kuyu_adi": "790",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "791",
        "kuyu_adi": "791",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "792",
        "kuyu_adi": "792",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "793",
        "kuyu_adi": "793",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "794",
        "kuyu_adi": "794",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "795",
        "kuyu_adi": "795",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "796",
        "kuyu_adi": "796",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "797",
        "kuyu_adi": "797",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "798",
        "kuyu_adi": "798",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "799",
        "kuyu_adi": "799",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "8",
        "kuyu_adi": "8",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "80",
        "kuyu_adi": "80",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "800",
        "kuyu_adi": "800",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "801",
        "kuyu_adi": "801",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "802",
        "kuyu_adi": "802",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "803",
        "kuyu_adi": "803",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "804",
        "kuyu_adi": "804",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "805",
        "kuyu_adi": "805",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "806",
        "kuyu_adi": "806",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "807",
        "kuyu_adi": "807",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "808",
        "kuyu_adi": "808",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "809",
        "kuyu_adi": "809",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "81",
        "kuyu_adi": "81",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "810",
        "kuyu_adi": "810",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "811",
        "kuyu_adi": "811",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "812",
        "kuyu_adi": "812",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "813",
        "kuyu_adi": "813",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "814",
        "kuyu_adi": "814",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "815",
        "kuyu_adi": "815",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "816",
        "kuyu_adi": "816",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "817",
        "kuyu_adi": "817",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "818",
        "kuyu_adi": "818",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "819",
        "kuyu_adi": "819",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "82",
        "kuyu_adi": "82",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "820",
        "kuyu_adi": "820",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "821",
        "kuyu_adi": "821",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "822",
        "kuyu_adi": "822",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "823",
        "kuyu_adi": "823",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "824",
        "kuyu_adi": "824",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "825",
        "kuyu_adi": "825",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "826",
        "kuyu_adi": "826",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "827",
        "kuyu_adi": "827",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "828",
        "kuyu_adi": "828",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "829",
        "kuyu_adi": "829",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "83",
        "kuyu_adi": "83",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "830",
        "kuyu_adi": "830",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "831",
        "kuyu_adi": "831",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "832",
        "kuyu_adi": "832",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "833",
        "kuyu_adi": "833",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "834",
        "kuyu_adi": "834",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "835",
        "kuyu_adi": "835",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "836",
        "kuyu_adi": "836",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "837",
        "kuyu_adi": "837",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "838",
        "kuyu_adi": "838",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "839",
        "kuyu_adi": "839",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "84",
        "kuyu_adi": "84",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "840",
        "kuyu_adi": "840",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "841",
        "kuyu_adi": "841",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "842",
        "kuyu_adi": "842",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "843",
        "kuyu_adi": "843",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "844",
        "kuyu_adi": "844",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "845",
        "kuyu_adi": "845",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "846",
        "kuyu_adi": "846",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "847",
        "kuyu_adi": "847",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "848",
        "kuyu_adi": "848",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "849",
        "kuyu_adi": "849",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "85",
        "kuyu_adi": "85",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "850",
        "kuyu_adi": "850",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "851",
        "kuyu_adi": "851",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "852",
        "kuyu_adi": "852",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "853",
        "kuyu_adi": "853",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "854",
        "kuyu_adi": "854",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "855",
        "kuyu_adi": "855",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "856",
        "kuyu_adi": "856",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "857",
        "kuyu_adi": "857",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "858",
        "kuyu_adi": "858",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "859",
        "kuyu_adi": "859",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "86",
        "kuyu_adi": "86",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "860",
        "kuyu_adi": "860",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "861",
        "kuyu_adi": "861",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "862",
        "kuyu_adi": "862",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "863",
        "kuyu_adi": "863",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "864",
        "kuyu_adi": "864",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "865",
        "kuyu_adi": "865",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "866",
        "kuyu_adi": "866",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "867",
        "kuyu_adi": "867",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "868",
        "kuyu_adi": "868",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "869",
        "kuyu_adi": "869",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "87",
        "kuyu_adi": "87",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "870",
        "kuyu_adi": "870",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "871",
        "kuyu_adi": "871",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "872",
        "kuyu_adi": "872",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "873",
        "kuyu_adi": "873",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "874",
        "kuyu_adi": "874",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "875",
        "kuyu_adi": "875",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "876",
        "kuyu_adi": "876",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "877",
        "kuyu_adi": "877",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "878",
        "kuyu_adi": "878",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "879",
        "kuyu_adi": "879",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "88",
        "kuyu_adi": "88",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "880",
        "kuyu_adi": "880",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "881",
        "kuyu_adi": "881",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "882",
        "kuyu_adi": "882",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "883",
        "kuyu_adi": "883",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "884",
        "kuyu_adi": "884",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "885",
        "kuyu_adi": "885",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "886",
        "kuyu_adi": "886",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "887",
        "kuyu_adi": "887",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "888",
        "kuyu_adi": "888",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "889",
        "kuyu_adi": "889",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "89",
        "kuyu_adi": "89",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "890",
        "kuyu_adi": "890",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "891",
        "kuyu_adi": "891",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "892",
        "kuyu_adi": "892",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "893",
        "kuyu_adi": "893",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "894",
        "kuyu_adi": "894",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "895",
        "kuyu_adi": "895",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "896",
        "kuyu_adi": "896",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "897",
        "kuyu_adi": "897",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "898",
        "kuyu_adi": "898",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "899",
        "kuyu_adi": "899",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "9",
        "kuyu_adi": "9",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "90",
        "kuyu_adi": "90",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "900",
        "kuyu_adi": "900",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "901",
        "kuyu_adi": "901",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "902",
        "kuyu_adi": "902",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "903",
        "kuyu_adi": "903",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "904",
        "kuyu_adi": "904",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "905",
        "kuyu_adi": "905",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "906",
        "kuyu_adi": "906",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "907",
        "kuyu_adi": "907",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "908",
        "kuyu_adi": "908",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "909",
        "kuyu_adi": "909",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "91",
        "kuyu_adi": "91",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "910",
        "kuyu_adi": "910",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "911",
        "kuyu_adi": "911",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "912",
        "kuyu_adi": "912",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "913",
        "kuyu_adi": "913",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "914",
        "kuyu_adi": "914",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "915",
        "kuyu_adi": "915",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "916",
        "kuyu_adi": "916",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "917",
        "kuyu_adi": "917",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "918",
        "kuyu_adi": "918",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "919",
        "kuyu_adi": "919",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "92",
        "kuyu_adi": "92",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "920",
        "kuyu_adi": "920",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "921",
        "kuyu_adi": "921",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "922",
        "kuyu_adi": "922",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "923",
        "kuyu_adi": "923",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "924",
        "kuyu_adi": "924",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "925",
        "kuyu_adi": "925",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "926",
        "kuyu_adi": "926",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "927",
        "kuyu_adi": "927",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "928",
        "kuyu_adi": "928",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "929",
        "kuyu_adi": "929",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "93",
        "kuyu_adi": "93",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "930",
        "kuyu_adi": "930",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "931",
        "kuyu_adi": "931",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "932",
        "kuyu_adi": "932",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "933",
        "kuyu_adi": "933",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "934",
        "kuyu_adi": "934",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "935",
        "kuyu_adi": "935",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "936",
        "kuyu_adi": "936",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "937",
        "kuyu_adi": "937",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "938",
        "kuyu_adi": "938",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "939",
        "kuyu_adi": "939",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "94",
        "kuyu_adi": "94",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "940",
        "kuyu_adi": "940",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "941",
        "kuyu_adi": "941",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "942",
        "kuyu_adi": "942",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "943",
        "kuyu_adi": "943",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "944",
        "kuyu_adi": "944",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "945",
        "kuyu_adi": "945",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "946",
        "kuyu_adi": "946",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "947",
        "kuyu_adi": "947",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "948",
        "kuyu_adi": "948",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "949",
        "kuyu_adi": "949",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "95",
        "kuyu_adi": "95",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "950",
        "kuyu_adi": "950",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "951",
        "kuyu_adi": "951",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "952",
        "kuyu_adi": "952",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "953",
        "kuyu_adi": "953",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "954",
        "kuyu_adi": "954",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "955",
        "kuyu_adi": "955",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "956",
        "kuyu_adi": "956",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "957",
        "kuyu_adi": "957",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "958",
        "kuyu_adi": "958",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "959",
        "kuyu_adi": "959",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "96",
        "kuyu_adi": "96",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "960",
        "kuyu_adi": "960",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "961",
        "kuyu_adi": "961",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "962",
        "kuyu_adi": "962",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "963",
        "kuyu_adi": "963",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "964",
        "kuyu_adi": "964",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "965",
        "kuyu_adi": "965",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "966",
        "kuyu_adi": "966",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "967",
        "kuyu_adi": "967",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "968",
        "kuyu_adi": "968",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "969",
        "kuyu_adi": "969",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "97",
        "kuyu_adi": "97",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "970",
        "kuyu_adi": "970",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "971",
        "kuyu_adi": "971",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "972",
        "kuyu_adi": "972",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "973",
        "kuyu_adi": "973",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "974",
        "kuyu_adi": "974",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "975",
        "kuyu_adi": "975",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "976",
        "kuyu_adi": "976",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "977",
        "kuyu_adi": "977",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "978",
        "kuyu_adi": "978",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "979",
        "kuyu_adi": "979",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "98",
        "kuyu_adi": "98",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "980",
        "kuyu_adi": "980",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "981",
        "kuyu_adi": "981",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "982",
        "kuyu_adi": "982",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "983",
        "kuyu_adi": "983",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "984",
        "kuyu_adi": "984",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "985",
        "kuyu_adi": "985",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "986",
        "kuyu_adi": "986",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "987",
        "kuyu_adi": "987",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "988",
        "kuyu_adi": "988",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "989",
        "kuyu_adi": "989",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "99",
        "kuyu_adi": "99",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "990",
        "kuyu_adi": "990",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "991",
        "kuyu_adi": "991",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "992",
        "kuyu_adi": "992",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "993",
        "kuyu_adi": "993",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "994",
        "kuyu_adi": "994",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "995",
        "kuyu_adi": "995",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "996",
        "kuyu_adi": "996",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "997",
        "kuyu_adi": "997",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "998",
        "kuyu_adi": "998",
        "durum": "Devam Ediyor"
    },
    {
        "kuyu_id": "999",
        "kuyu_adi": "999",
        "durum": "Devam Ediyor"
    }
];
    // =================================================================================

    const infoText = document.getElementById('info-text');
    const totalWellsEl = document.getElementById('total-wells');
    const completedWellsEl = document.getElementById('completed-wells');
    const ongoingWellsEl = document.getElementById('ongoing-wells');
    const wellListEl = document.getElementById('well-list');
    const searchInput = document.getElementById('search-input');

    function renderData(data) {
        const total = data.length;
        const completed = data.filter(w => w.durum === 'Tamamlandı').length;
        const ongoing = total - completed;

        totalWellsEl.textContent = total;
        completedWellsEl.textContent = completed;
        ongoingWellsEl.textContent = ongoing;

        wellListEl.innerHTML = '';
        if (data.length === 0) {
            wellListEl.innerHTML = '<p style="text-align:center; color: var(--tg-hint-color);">Sonuç bulunamadı.</p>';
            return;
        }

        data.forEach(well => {
            const card = document.createElement('div');
            card.className = 'well-card';
            if (well.durum === 'Tamamlandı') {
                card.classList.add('completed');
            } else {
                card.classList.add('ongoing');
            }

            // Mahalle bilgisi kaldırıldı
            card.innerHTML = `
                <h4>${well.kuyu_adi}</h4>
                <div class="well-info">
                    <p><strong>Durum:</strong> ${well.durum}</p>
                </div>
            `;
            wellListEl.appendChild(card);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Arama sadece kuyu adına göre yapılıyor
        const filteredData = kuyuVerisi.filter(well =>
            well.kuyu_adi.toLowerCase().includes(searchTerm)
        );
        renderData(filteredData);
    });
    
    if (kuyuVerisi.length > 0 && kuyuVerisi[0].kuyu_id) {
         infoText.textContent = `Toplam ${kuyuVerisi.length} kuyu bulundu.`;
         renderData(kuyuVerisi);
    } else {
        infoText.textContent = "Lütfen bottan veri alıp bu dosyaya yapıştırın.";
    }
});
