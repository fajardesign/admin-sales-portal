import * as React from 'react';
export type FlagName =
  | "Abkhazia"
  | "Afghanistan"
  | "AlandIslands"
  | "Albania"
  | "Algeria"
  | "AmericanSamoa"
  | "Andorra"
  | "Angola"
  | "Anguilla"
  | "AntiguaAndBarbuda"
  | "Argentina"
  | "Armenia"
  | "Aruba"
  | "Australia"
  | "Austria"
  | "Azerbaijan"
  | "AzoresIslands"
  | "Bahamas"
  | "Bahrain"
  | "BalearicIslands"
  | "Bangladesh"
  | "Barbados"
  | "BasqueCountry"
  | "Belarus"
  | "Belgium"
  | "Belize"
  | "Benin"
  | "Bermuda"
  | "Bhutan"
  | "Bolivia"
  | "Bonaire"
  | "BosniaAndHerzegovina"
  | "Botswana"
  | "Brazil"
  | "BritishColumbia"
  | "BritishIndianOceanTerritory"
  | "BritishVirginIslands"
  | "Brunei"
  | "Bulgaria"
  | "BurkinaFaso"
  | "Burundi"
  | "Cambodia"
  | "Cameroon"
  | "Canada"
  | "CanaryIslands"
  | "CapeVerde"
  | "CaymanIslands"
  | "CentralAfricanRepublic"
  | "Ceuta"
  | "Chad"
  | "Chile"
  | "China"
  | "ChristmasIsland"
  | "CocosIsland"
  | "Colombia"
  | "Comoros"
  | "CookIslands"
  | "Corsica"
  | "CostaRica"
  | "Croatia"
  | "Cuba"
  | "Curacao"
  | "Cyprus"
  | "CzechRepublic"
  | "DemocraticRepublicOfCongo"
  | "Denmark"
  | "Djibouti"
  | "Dominica"
  | "DominicanRepublic"
  | "EastTimor"
  | "Ecuador"
  | "Egypt"
  | "ElSalvador"
  | "England"
  | "EquatorialGuinea"
  | "Eritrea"
  | "Estonia"
  | "Ethiopia"
  | "EuropeanUnion"
  | "FalklandIslands"
  | "FaroeIslands"
  | "Fiji"
  | "Finland"
  | "France"
  | "FrenchPolynesia"
  | "Gabon"
  | "GalapagosIslands"
  | "Gambia"
  | "Georgia"
  | "Germany"
  | "Ghana"
  | "Gibraltar"
  | "Greece"
  | "Greenland"
  | "Grenada"
  | "Guam"
  | "Guatemala"
  | "Guernsey"
  | "Guinea"
  | "GuineaBissau"
  | "Guyana"
  | "Haiti"
  | "Hawaii"
  | "Honduras"
  | "HongKong"
  | "Hungary"
  | "Iceland"
  | "India"
  | "Indonesia"
  | "Iran"
  | "Iraq"
  | "Ireland"
  | "IsleOfMan"
  | "Israel"
  | "Italy"
  | "IvoryCoast"
  | "Jamaica"
  | "Japan"
  | "Jersey"
  | "Jordan"
  | "Kazakhstan"
  | "Kenya"
  | "Kiribati"
  | "Kosovo"
  | "Kuwait"
  | "Kyrgyzstan"
  | "Laos"
  | "Latvia"
  | "Lebanon"
  | "Lesotho"
  | "Liberia"
  | "Libya"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "Macao"
  | "Madagascar"
  | "Madeira"
  | "Malawi"
  | "Malaysia"
  | "Maldives"
  | "Mali"
  | "Malta"
  | "MarshallIsland"
  | "Martinique"
  | "Mauritania"
  | "Mauritus"
  | "Melilla"
  | "Mexico"
  | "Micronesia"
  | "Moldova"
  | "Monaco"
  | "Mongolia"
  | "Montenegro"
  | "Montserrat"
  | "Morocco"
  | "Mozambique"
  | "Myanmar"
  | "Namibia"
  | "Nato"
  | "Nauru"
  | "Nepal"
  | "Netherlands"
  | "NewZealand"
  | "Nicaragua"
  | "Niger"
  | "Nigeria"
  | "Niue"
  | "NorfolkIsland"
  | "NorthKorea"
  | "NorthernCyprus"
  | "NorthernMarianasIslands"
  | "Norway"
  | "Oman"
  | "OrkneyIslands"
  | "Ossetia"
  | "Pakistan"
  | "Palau"
  | "Palestine"
  | "Panama"
  | "PapuaNewGuinea"
  | "Paraguay"
  | "Peru"
  | "Philippines"
  | "PitcairnIslands"
  | "Poland"
  | "Portugal"
  | "PuertoRico"
  | "Qatar"
  | "RapaNui"
  | "RepublicOfMacedonia"
  | "RepublicOfTheCongo"
  | "Romania"
  | "Russia"
  | "Rwanda"
  | "SabaIsland"
  | "SahrawiArabDemocraticRepublic"
  | "SaintKittsAndNevis"
  | "Samoa"
  | "SanMarino"
  | "SaoTomeAndPrince"
  | "Sardinia"
  | "SaudiArabia"
  | "Scotland"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "SierraLeone"
  | "Singapore"
  | "SintEustatius"
  | "SintMaarten"
  | "Slovakia"
  | "Slovania"
  | "SolomonIslands"
  | "Somalia"
  | "Somaliland"
  | "SouthAfrica"
  | "SouthKorea"
  | "SouthSudan"
  | "Spain"
  | "SriLanka"
  | "StBarts"
  | "StLucia"
  | "StVincentAndTheGrenadines"
  | "Sudan"
  | "Suriname"
  | "Swaziland"
  | "Sweden"
  | "Switzerland"
  | "Syria"
  | "Taijikistan"
  | "Taiwan"
  | "Tanzania"
  | "Thailand"
  | "Tibet"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "Transnistria"
  | "TrinidadAndTobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "TurksAndCaicos"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "UnitedArabEmirates"
  | "UnitedKingdom"
  | "UnitedNations"
  | "UnitedStates"
  | "Uruguay"
  | "UzbekistaN"
  | "Vanuatu"
  | "VaticanCity"
  | "Venezuela"
  | "Vietnam"
  | "VirginIslands"
  | "Wales"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe";
export interface FlagProps { name?: FlagName; size?: number; style?: React.CSSProperties; }
export declare function Flag(props: FlagProps): React.ReactElement;
export declare const FLAG_NAMES: FlagName[];
export declare function Abkhazia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Afghanistan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function AlandIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Albania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Algeria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function AmericanSamoa(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Andorra(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Angola(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Anguilla(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function AntiguaAndBarbuda(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Argentina(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Armenia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Aruba(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Australia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Austria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Azerbaijan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function AzoresIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bahamas(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bahrain(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BalearicIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bangladesh(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Barbados(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BasqueCountry(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Belarus(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Belgium(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Belize(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Benin(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bermuda(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bhutan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bolivia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bonaire(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BosniaAndHerzegovina(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Botswana(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Brazil(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BritishColumbia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BritishIndianOceanTerritory(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BritishVirginIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Brunei(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Bulgaria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function BurkinaFaso(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Burundi(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Cambodia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Cameroon(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Canada(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CanaryIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CapeVerde(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CaymanIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CentralAfricanRepublic(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ceuta(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Chad(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Chile(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function China(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function ChristmasIsland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CocosIsland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Colombia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Comoros(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CookIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Corsica(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CostaRica(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Croatia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Cuba(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Curacao(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Cyprus(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function CzechRepublic(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function DemocraticRepublicOfCongo(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Denmark(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Djibouti(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Dominica(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function DominicanRepublic(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function EastTimor(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ecuador(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Egypt(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function ElSalvador(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function England(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function EquatorialGuinea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Eritrea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Estonia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ethiopia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function EuropeanUnion(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function FalklandIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function FaroeIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Fiji(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Finland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function France(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function FrenchPolynesia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Gabon(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function GalapagosIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Gambia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Georgia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Germany(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ghana(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Gibraltar(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Greece(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Greenland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Grenada(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Guam(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Guatemala(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Guernsey(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Guinea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function GuineaBissau(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Guyana(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Haiti(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Hawaii(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Honduras(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function HongKong(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Hungary(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Iceland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function India(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Indonesia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Iran(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Iraq(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ireland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function IsleOfMan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Israel(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Italy(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function IvoryCoast(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Jamaica(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Japan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Jersey(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Jordan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kazakhstan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kenya(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kiribati(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kosovo(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kuwait(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Kyrgyzstan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Laos(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Latvia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Lebanon(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Lesotho(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Liberia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Libya(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Liechtenstein(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Lithuania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Luxembourg(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Macao(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Madagascar(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Madeira(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Malawi(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Malaysia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Maldives(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mali(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Malta(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function MarshallIsland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Martinique(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mauritania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mauritus(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Melilla(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mexico(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Micronesia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Moldova(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Monaco(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mongolia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Montenegro(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Montserrat(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Morocco(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Mozambique(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Myanmar(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Namibia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Nato(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Nauru(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Nepal(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Netherlands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function NewZealand(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Nicaragua(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Niger(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Nigeria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Niue(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function NorfolkIsland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function NorthKorea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function NorthernCyprus(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function NorthernMarianasIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Norway(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Oman(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function OrkneyIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ossetia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Pakistan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Palau(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Palestine(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Panama(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function PapuaNewGuinea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Paraguay(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Peru(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Philippines(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function PitcairnIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Poland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Portugal(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function PuertoRico(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Qatar(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function RapaNui(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function RepublicOfMacedonia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function RepublicOfTheCongo(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Romania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Russia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Rwanda(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SabaIsland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SahrawiArabDemocraticRepublic(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SaintKittsAndNevis(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Samoa(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SanMarino(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SaoTomeAndPrince(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Sardinia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SaudiArabia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Scotland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Senegal(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Serbia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Seychelles(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SierraLeone(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Singapore(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SintEustatius(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SintMaarten(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Slovakia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Slovania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SolomonIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Somalia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Somaliland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SouthAfrica(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SouthKorea(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SouthSudan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Spain(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function SriLanka(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function StBarts(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function StLucia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function StVincentAndTheGrenadines(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Sudan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Suriname(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Swaziland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Sweden(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Switzerland(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Syria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Taijikistan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Taiwan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tanzania(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Thailand(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tibet(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Togo(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tokelau(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tonga(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Transnistria(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function TrinidadAndTobago(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tunisia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Turkey(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Turkmenistan(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function TurksAndCaicos(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Tuvalu(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Uganda(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Ukraine(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function UnitedArabEmirates(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function UnitedKingdom(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function UnitedNations(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function UnitedStates(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Uruguay(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function UzbekistaN(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Vanuatu(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function VaticanCity(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Venezuela(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Vietnam(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function VirginIslands(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Wales(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Yemen(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Zambia(props: Omit<FlagProps, "name">): React.ReactElement;
export declare function Zimbabwe(props: Omit<FlagProps, "name">): React.ReactElement;
export default Flag;
