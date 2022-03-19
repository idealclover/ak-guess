import ContributorList from "./component/ContributorList";

export const DAILY_MODE = 'DAILY_MODE'
export const RANDOM_MODE = 'RANDOM_MODE'
export const MAIN_KEY = 'name'
export const GAME_NAME = '干员猜猜乐'
export const TYPES = [
  {label: '稀有度', i18nKey: 'rarity', key: 'rarity', type: 'number'},
  {label: '阵营', i18nKey: 'camp', key: 'team', type: 'array'},
  {label: '职业', i18nKey: 'className', key: 'className', type: 'array'},
  {label: '种族', i18nKey: 'race', key: 'race', type: 'array'},
  {label: '画师', i18nKey: 'painter', key: 'painter', type: 'string'},
  {label: '干员', i18nKey: 'chartsName', key: 'guess'},
]
export const VAL_DICT: { [key: string]: string } = {
  'correct': '🟩',
  'wrong': '🟥',
  'wrongpos': '🟨',
  'up': '🔼',
  'down': '🔽',
}
export const defaultTryTimes = 8;
export const updateData = '2022-3-5';

export const githubUrl = 'https://github.com/lie5860/ak-guess/issues'

export const CONTRIBUTORS = [
  {
    icon: 'code',
    title: 'Developers',
    userList: [
      {
        name: 'lie',
        homeUrl: 'https://github.com/lie5860',
        avatar: 'https://avatars.githubusercontent.com/u/30894657'
      },
      {
        name: 'YOYO',
        homeUrl: 'https://github.com/lindsayee',
        avatar: 'https://avatars.githubusercontent.com/u/4250090',
        tip: 'LOVE WHISLASH'
      },
    ]
  },
  {
    icon: 'g_translate',
    title: 'Translators',
    userList: [
      {
        name: '圈',
        homeUrl: 'https://twitter.com/mirukudonatu',
        avatar: 'http://akguess.saki.cc/images/translator_mirukudonatu.jpg',
        tip: 'JPN'
      },
      {
        name: 'Petris',
        homeUrl: 'https://twitter.com/PetrisWhite',
        avatar: 'http://akguess.saki.cc/images/translator_petris.jpg',
        tip: 'ENG'
      },
      {
        name: 'shana1224',
        homeUrl: 'https://twitter.com/hasaki1224',
        avatar: 'http://akguess.saki.cc/images/translator_shana1224.jpg',
        tip: 'JPN'
      },
      {
        name: 'Tamamo Tomato',
        homeUrl: 'https://twitter.com/Tamamo35638628',
        avatar: 'http://akguess.saki.cc/images/translator_tamato.jpg',
        tip: 'ENG'
      },
    ]
  }
]
