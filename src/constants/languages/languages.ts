import {
  AFRIKAANS,
  ALBANIAN,
  ARABIC,
  ARMENIAN,
  AZERBAIJANI,
  BASQUE,
  BELARUSIAN,
  BENGALI,
  BOSNIAN,
  BULGARIAN,
  CATALAN,
  CHINESE,
  CROATIAN,
  CZECH,
  DANISH,
  DUTCH,
  ENGLISH,
  ESPERANTO,
  ESTONIAN,
  FINNISH,
  FRENCH,
  GALICIAN,
  GEORGIAN,
  GERMAN,
  GREEK,
  GUJARATI,
  HAITIAN,
  HAUSA,
  HEBREW,
  HINDI,
  HUNGARIAN,
  ICELANDIC,
  INDONESIAN,
  IRISH,
  ITALIAN,
  JAPANESE,
  KANNADA,
  KAZAKH,
  KHMER,
  KOREAN,
  LAO,
  LATVIAN,
  LITHUANIAN,
  LUXEMBOURGISH,
  MACEDONIAN,
  MALAY,
  MALAYALAM,
  MALTESE,
  MARATHI,
  MONGOLIAN,
  Name,
  NEPALI,
  NORWEGIAN,
  ODIA,
  PASHTO,
  PERSIAN,
  POLISH,
  PORTUGUESE,
  PUNJABI,
  ROMANIAN,
  RUSSIAN,
  SERBIAN,
  SESOTHO,
  SINHALA,
  SLOVAK,
  SLOVENIAN,
  SOMALI,
  SPANISH,
  SUNDANESE,
  SWAHILI,
  SWEDISH,
  TAMIL,
  TELUGU,
  THAI,
  TIBETAN,
  TIGRINYA,
  TURKISH,
  UKRAINIAN,
  URDU,
  UZBEK,
  VIETNAMESE,
  WELSH,
  XHOSA,
  YIDDISH,
  ZULU,
} from './names';
import {
  AF_ZA,
  AR_LIST,
  AZ_AZ,
  BE_BY,
  BG_BG,
  BN_LIST,
  BO_CN,
  BS_BA,
  CA_ES,
  CS_CZ,
  CY_GB,
  DA_DK,
  DE_LIST,
  EL_GR,
  EN_LIST,
  EO_,
  ES_LIST,
  ET_EE,
  EU_SE,
  FA_IR,
  FI_FI,
  FR_LIST,
  GA_IE,
  GL_ES,
  GU_IN,
  HA_LIST,
  HE_IL,
  HI_IN,
  HR_HR,
  HT_HT,
  HU_HU,
  HY_AM,
  ID_ID,
  IS_IS,
  IT_IT,
  JA_JP,
  KA_GE,
  KK_KZ,
  KM_KH,
  KN_IN,
  KO_KR,
  LB_LU,
  LO_LA,
  LT_LT,
  LV_LV,
  MK_MK,
  ML_IN,
  MN_MN,
  MR_IN,
  MS_LIST,
  MT_MT,
  NE_NP,
  NL_LIST,
  NO_LIST,
  OR_IN,
  PA_LIST,
  PL_PL,
  PS_AF,
  PT_LIST,
  Regional,
  RegionalGrouped,
  RO_RO,
  RU_RU,
  SI_LK,
  SK_SK,
  SL_SI,
  SO_SO,
  SQ_AL,
  SR_RS,
  ST_ZA,
  SU_ID,
  SV_SE,
  SW_LIST,
  TA_LIST,
  TE_IN,
  TH_TH,
  TI_LIST,
  TR_TR,
  UK_UA,
  UR_LIST,
  UZ_UZ,
  VI_VN,
  XH_ZA,
  YI_,
  ZH_LIST,
  ZU_ZA,
} from './regionals';
import {
  AF,
  SQ,
  AR,
  HY,
  AZ,
  EU,
  BE,
  BN,
  BS,
  BG,
  CA,
  ZH,
  HR,
  CS,
  DA,
  NL,
  EN,
  EO,
  ET,
  FI,
  FR,
  GL,
  KA,
  DE,
  EL,
  GU,
  HT,
  HA,
  HE,
  HI,
  HU,
  IS,
  ID,
  GA,
  IT,
  JA,
  KN,
  KK,
  KM,
  KO,
  LO,
  LV,
  LT,
  LB,
  MK,
  MS,
  ML,
  MT,
  MR,
  MN,
  NE,
  NO,
  OR,
  PS,
  FA,
  PL,
  PT,
  PA,
  RO,
  RU,
  SR,
  ST,
  SI,
  SK,
  SL,
  SO,
  ES,
  SU,
  SW,
  SV,
  TA,
  TE,
  TH,
  BO,
  TI,
  TR,
  UK,
  UR,
  UZ,
  VI,
  CY,
  XH,
  YI,
  ZU,
  Shortcut,
} from './shortcuts';

type HorizontalOrientationType = 'left-to-right' | 'right-to-left';
type VerticalOrientationType = 'top-to-bottom';
type OrientationType =
  | { char: HorizontalOrientationType; line: VerticalOrientationType }
  | { char: VerticalOrientationType; line: HorizontalOrientationType };

interface OrientationProps {
  orientation: OrientationType;
}

export interface LanguageProps {
  name: Name;
  shortcut: Shortcut;
  regional: Regional | RegionalGrouped;
  orientation: OrientationType | OrientationType[];
}

const DEFAULT_TEXT_ORIENTATION: OrientationProps = {
  orientation: { char: 'left-to-right', line: 'top-to-bottom' },
};

const ARABIC_TEXT_ORIENTATION: OrientationProps = {
  orientation: { char: 'right-to-left', line: 'top-to-bottom' },
};

export const AFRIKAANS_LANG: LanguageProps = {
  name: AFRIKAANS,
  shortcut: AF,
  regional: AF_ZA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ALBANIAN_LANG: LanguageProps = {
  name: ALBANIAN,
  shortcut: SQ,
  regional: SQ_AL,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ARABIC_LANG: LanguageProps = {
  name: ARABIC,
  shortcut: AR,
  regional: AR_LIST,
  ...ARABIC_TEXT_ORIENTATION,
};

export const ARMENIAN_LANG: LanguageProps = {
  name: ARMENIAN,
  shortcut: HY,
  regional: HY_AM,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const AZERBAIJANI_LANG: LanguageProps = {
  name: AZERBAIJANI,
  shortcut: AZ,
  regional: AZ_AZ,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const BASQUE_LANG: LanguageProps = {
  name: BASQUE,
  shortcut: EU,
  regional: EU_SE,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const BELARUSIAN_LANG: LanguageProps = {
  name: BELARUSIAN,
  shortcut: BE,
  regional: BE_BY,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const BENGALI_LANG: LanguageProps = {
  name: BENGALI,
  shortcut: BN,
  regional: BN_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const BOSNIAN_LANG: LanguageProps = {
  name: BOSNIAN,
  shortcut: BS,
  regional: BS_BA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const BULGARIAN_LANG: LanguageProps = {
  name: BULGARIAN,
  shortcut: BG,
  regional: BG_BG,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const CATALAN_LANG: LanguageProps = {
  name: CATALAN,
  shortcut: CA,
  regional: CA_ES,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const CHINESE_LANG: LanguageProps = {
  name: CHINESE,
  shortcut: ZH,
  regional: ZH_LIST,
  orientation: [
    { char: 'left-to-right', line: 'top-to-bottom' },
    { char: 'top-to-bottom', line: 'right-to-left' },
  ],
};

export const CROATIAN_LANG: LanguageProps = {
  name: CROATIAN,
  shortcut: HR,
  regional: HR_HR,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const CZECH_LANG: LanguageProps = {
  name: CZECH,
  shortcut: CS,
  regional: CS_CZ,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const DANISH_LANG: LanguageProps = {
  name: DANISH,
  shortcut: DA,
  regional: DA_DK,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const DUTCH_LANG: LanguageProps = {
  name: DUTCH,
  shortcut: NL,
  regional: NL_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ENGLISH_LANG: LanguageProps = {
  name: ENGLISH,
  shortcut: EN,
  regional: EN_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ESPERANTO_LANG: LanguageProps = {
  name: ESPERANTO,
  shortcut: EO,
  regional: EO_,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ESTONIAN_LANG: LanguageProps = {
  name: ESTONIAN,
  shortcut: ET,
  regional: ET_EE,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const FINNISH_LANG: LanguageProps = {
  name: FINNISH,
  shortcut: FI,
  regional: FI_FI,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const FRENCH_LANG: LanguageProps = {
  name: FRENCH,
  shortcut: FR,
  regional: FR_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const GALICIAN_LANG: LanguageProps = {
  name: GALICIAN,
  shortcut: GL,
  regional: GL_ES,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const GEORGIAN_LANG: LanguageProps = {
  name: GEORGIAN,
  shortcut: KA,
  regional: KA_GE,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const GERMAN_LANG: LanguageProps = {
  name: GERMAN,
  shortcut: DE,
  regional: DE_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const GREEK_LANG: LanguageProps = {
  name: GREEK,
  shortcut: EL,
  regional: EL_GR,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const GUJARATI_LANG: LanguageProps = {
  name: GUJARATI,
  shortcut: GU,
  regional: GU_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const HAITIAN_LANG: LanguageProps = {
  name: HAITIAN,
  shortcut: HT,
  regional: HT_HT,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const HAUSA_LANG: LanguageProps = {
  name: HAUSA,
  shortcut: HA,
  regional: HA_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const HEBREW_LANG: LanguageProps = {
  name: HEBREW,
  shortcut: HE,
  regional: HE_IL,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const HINDI_LANG: LanguageProps = {
  name: HINDI,
  shortcut: HI,
  regional: HI_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const HUNGARIAN_LANG: LanguageProps = {
  name: HUNGARIAN,
  shortcut: HU,
  regional: HU_HU,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ICELANDIC_LANG: LanguageProps = {
  name: ICELANDIC,
  shortcut: IS,
  regional: IS_IS,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const INDONESIAN_LANG: LanguageProps = {
  name: INDONESIAN,
  shortcut: ID,
  regional: ID_ID,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const IRISH_LANG: LanguageProps = {
  name: IRISH,
  shortcut: GA,
  regional: GA_IE,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ITALIAN_LANG: LanguageProps = {
  name: ITALIAN,
  shortcut: IT,
  regional: IT_IT,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const JAPANESE_LANG: LanguageProps = {
  name: JAPANESE,
  shortcut: JA,
  regional: JA_JP,
  orientation: [
    { char: 'left-to-right', line: 'top-to-bottom' },
    { char: 'top-to-bottom', line: 'right-to-left' },
  ],
};

export const KANNADA_LANG: LanguageProps = {
  name: KANNADA,
  shortcut: KN,
  regional: KN_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const KAZAKH_LANG: LanguageProps = {
  name: KAZAKH,
  shortcut: KK,
  regional: KK_KZ,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const KHMER_LANG: LanguageProps = {
  name: KHMER,
  shortcut: KM,
  regional: KM_KH,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const KOREAN_LANG: LanguageProps = {
  name: KOREAN,
  shortcut: KO,
  regional: KO_KR,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const LAO_LANG: LanguageProps = {
  name: LAO,
  shortcut: LO,
  regional: LO_LA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const LATVIAN_LANG: LanguageProps = {
  name: LATVIAN,
  shortcut: LV,
  regional: LV_LV,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const LITHUANIAN_LANG: LanguageProps = {
  name: LITHUANIAN,
  shortcut: LT,
  regional: LT_LT,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const LUXEMBOURGISH_LANG: LanguageProps = {
  name: LUXEMBOURGISH,
  shortcut: LB,
  regional: LB_LU,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MACEDONIAN_LANG: LanguageProps = {
  name: MACEDONIAN,
  shortcut: MK,
  regional: MK_MK,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MALAY_LANG: LanguageProps = {
  name: MALAY,
  shortcut: MS,
  regional: MS_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MALAYALAM_LANG: LanguageProps = {
  name: MALAYALAM,
  shortcut: ML,
  regional: ML_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MALTESE_LANG: LanguageProps = {
  name: MALTESE,
  shortcut: MT,
  regional: MT_MT,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MARATHI_LANG: LanguageProps = {
  name: MARATHI,
  shortcut: MR,
  regional: MR_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const MONGOLIAN_LANG: LanguageProps = {
  name: MONGOLIAN,
  shortcut: MN,
  regional: MN_MN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const NEPALI_LANG: LanguageProps = {
  name: NEPALI,
  shortcut: NE,
  regional: NE_NP,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const NORWEGIAN_LANG: LanguageProps = {
  name: NORWEGIAN,
  shortcut: NO,
  regional: NO_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ODIA_LANG: LanguageProps = {
  name: ODIA,
  shortcut: OR,
  regional: OR_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const PASHTO_LANG: LanguageProps = {
  name: PASHTO,
  shortcut: PS,
  regional: PS_AF,
  ...ARABIC_TEXT_ORIENTATION,
};

export const PERSIAN_LANG: LanguageProps = {
  name: PERSIAN,
  shortcut: FA,
  regional: FA_IR,
  ...ARABIC_TEXT_ORIENTATION,
};

export const POLISH_LANG: LanguageProps = {
  name: POLISH,
  shortcut: PL,
  regional: PL_PL,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const PORTUGUESE_LANG: LanguageProps = {
  name: PORTUGUESE,
  shortcut: PT,
  regional: PT_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const PUNJABI_LANG: LanguageProps = {
  name: PUNJABI,
  shortcut: PA,
  regional: PA_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const ROMANIAN_LANG: LanguageProps = {
  name: ROMANIAN,
  shortcut: RO,
  regional: RO_RO,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const RUSSIAN_LANG: LanguageProps = {
  name: RUSSIAN,
  shortcut: RU,
  regional: RU_RU,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SERBIAN_LANG: LanguageProps = {
  name: SERBIAN,
  shortcut: SR,
  regional: SR_RS,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SESOTHO_LANG: LanguageProps = {
  name: SESOTHO,
  shortcut: ST,
  regional: ST_ZA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SINHALA_LANG: LanguageProps = {
  name: SINHALA,
  shortcut: SI,
  regional: SI_LK,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SLOVAK_LANG: LanguageProps = {
  name: SLOVAK,
  shortcut: SK,
  regional: SK_SK,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SLOVENIAN_LANG: LanguageProps = {
  name: SLOVENIAN,
  shortcut: SL,
  regional: SL_SI,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SOMALI_LANG: LanguageProps = {
  name: SOMALI,
  shortcut: SO,
  regional: SO_SO,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SPANISH_LANG: LanguageProps = {
  name: SPANISH,
  shortcut: ES,
  regional: ES_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SUNDANESE_LANG: LanguageProps = {
  name: SUNDANESE,
  shortcut: SU,
  regional: SU_ID,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SWAHILI_LANG: LanguageProps = {
  name: SWAHILI,
  shortcut: SW,
  regional: SW_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const SWEDISH_LANG: LanguageProps = {
  name: SWEDISH,
  shortcut: SV,
  regional: SV_SE,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const TAMIL_LANG: LanguageProps = {
  name: TAMIL,
  shortcut: TA,
  regional: TA_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const TELUGU_LANG: LanguageProps = {
  name: TELUGU,
  shortcut: TE,
  regional: TE_IN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const THAI_LANG: LanguageProps = {
  name: THAI,
  shortcut: TH,
  regional: TH_TH,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const TIBETAN_LANG: LanguageProps = {
  name: TIBETAN,
  shortcut: BO,
  regional: BO_CN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const TIGRINYA_LANG: LanguageProps = {
  name: TIGRINYA,
  shortcut: TI,
  regional: TI_LIST,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const TURKISH_LANG: LanguageProps = {
  name: TURKISH,
  shortcut: TR,
  regional: TR_TR,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const UKRAINIAN_LANG: LanguageProps = {
  name: UKRAINIAN,
  shortcut: UK,
  regional: UK_UA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const URDU_LANG: LanguageProps = {
  name: URDU,
  shortcut: UR,
  regional: UR_LIST,
  ...ARABIC_TEXT_ORIENTATION,
};

export const UZBEK_LANG: LanguageProps = {
  name: UZBEK,
  shortcut: UZ,
  regional: UZ_UZ,
  ...ARABIC_TEXT_ORIENTATION,
};

export const VIETNAMESE_LANG: LanguageProps = {
  name: VIETNAMESE,
  shortcut: VI,
  regional: VI_VN,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const WELSH_LANG: LanguageProps = {
  name: WELSH,
  shortcut: CY,
  regional: CY_GB,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const XHOSA_LANG: LanguageProps = {
  name: XHOSA,
  shortcut: XH,
  regional: XH_ZA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const YIDDISH_LANG: LanguageProps = {
  name: YIDDISH,
  shortcut: YI,
  regional: YI_,
  ...ARABIC_TEXT_ORIENTATION,
};

export const ZULU_LANG: LanguageProps = {
  name: ZULU,
  shortcut: ZU,
  regional: ZU_ZA,
  ...DEFAULT_TEXT_ORIENTATION,
};

export const LANGUAGES = [
  AFRIKAANS_LANG,
  ALBANIAN_LANG,
  ARABIC_LANG,
  ARMENIAN_LANG,
  AZERBAIJANI_LANG,
  BASQUE_LANG,
  BELARUSIAN_LANG,
  BENGALI_LANG,
  BOSNIAN_LANG,
  BULGARIAN_LANG,
  CATALAN_LANG,
  CHINESE_LANG,
  CROATIAN_LANG,
  CZECH_LANG,
  DANISH_LANG,
  DUTCH_LANG,
  ENGLISH_LANG,
  ESPERANTO_LANG,
  ESTONIAN_LANG,
  FINNISH_LANG,
  FRENCH_LANG,
  GALICIAN_LANG,
  GEORGIAN_LANG,
  GERMAN_LANG,
  GREEK_LANG,
  GUJARATI_LANG,
  HAITIAN_LANG,
  HAUSA_LANG,
  HEBREW_LANG,
  HINDI_LANG,
  HUNGARIAN_LANG,
  ICELANDIC_LANG,
  INDONESIAN_LANG,
  IRISH_LANG,
  ITALIAN_LANG,
  JAPANESE_LANG,
  KANNADA_LANG,
  KAZAKH_LANG,
  KHMER_LANG,
  KOREAN_LANG,
  LAO_LANG,
  LATVIAN_LANG,
  LITHUANIAN_LANG,
  LUXEMBOURGISH_LANG,
  MACEDONIAN_LANG,
  MALAY_LANG,
  MALAYALAM_LANG,
  MALTESE_LANG,
  MARATHI_LANG,
  MONGOLIAN_LANG,
  NEPALI_LANG,
  NORWEGIAN_LANG,
  ODIA_LANG,
  PASHTO_LANG,
  PERSIAN_LANG,
  POLISH_LANG,
  PORTUGUESE_LANG,
  PUNJABI_LANG,
  ROMANIAN_LANG,
  RUSSIAN_LANG,
  SERBIAN_LANG,
  SESOTHO_LANG,
  SINHALA_LANG,
  SLOVAK_LANG,
  SLOVENIAN_LANG,
  SOMALI_LANG,
  SPANISH_LANG,
  SUNDANESE_LANG,
  SWAHILI_LANG,
  SWEDISH_LANG,
  TAMIL_LANG,
  TELUGU_LANG,
  THAI_LANG,
  TIBETAN_LANG,
  TIGRINYA_LANG,
  TURKISH_LANG,
  UKRAINIAN_LANG,
  URDU_LANG,
  UZBEK_LANG,
  VIETNAMESE_LANG,
  WELSH_LANG,
  XHOSA_LANG,
  YIDDISH_LANG,
  ZULU_LANG,
] as const;
