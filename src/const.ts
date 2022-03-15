import dealData from './data/dealData.json'

export const DAILY_MODE = 'DAILY_MODE'
export const RANDOM_MODE = 'RANDOM_MODE'
export const MAIN_KEY = 'name'
export const GAME_NAME = '干员猜猜乐'
export const TYPES = [
  {label: '稀有度', key: 'rarity', type: 'number'},
  {label: '阵营', key: 'team', type: 'array'},
  {label: '职业', key: 'className', type: 'array'},
  {label: '种族', key: 'race', type: 'array'},
  {label: '画师', key: 'painter', type: 'string'},
  {label: '干员', key: 'guess'},
]
export const VAL_DICT = {
  'correct': '🟩',
  'wrong': '🟥',
  'wrongpos': '🟨',
  'up': '🔼',
  'down': '🔽',
}
export const chartsData = dealData;
export const defaultTryTimes = 8;
export const updateData = '2022-3-5';

export const githubUrl = 'https://github.com/lie5860/ak-guess/issues'
// 反馈问卷链接
export const questionnaireUrl = 'https://www.wjx.top/vj/QgfS7Yd.aspx'
