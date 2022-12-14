import {
  SkillEfficacyType,
  MusicChartType,
  SkillFailureType,
} from "./proto/proto_enum"
import {
  UserCard,
  Equipment,
} from "./user_types"
import {
  WapLiveBeat,
  WapQuest, WapSkill, WapSkillLevel,
} from "./wrapper_types"

export type UserStatus = {
  userIndex: number,
  combo: number,
}

export type LiveCard = UserCard & {
  deckVocal: number,
  deckDance: number,
  deckVisual: number,
  deckStamina: number,
  deckMental: number,
  deckTechnique: number,
  audienceAmount?: number,
  arbitrary?: boolean,
}

export type LiveDeck = {
  idAlly: string,
  deckNameAlly: string,
  idOppt?: string,
  deckNameOppt?: string,
  liveCards: {
    index: number,
    liveCard: LiveCard,
  }[], 
  liveEquipments?: { 
    index: number,
    equipment: Equipment,
  }[],
}

export type SkillStatus = {
  skillIndex: number,
  coolTime: number,
  remainCount: number,
}

// a superior Effect type used for calculation
export type DetEffect = {
  efficacyType: SkillEfficacyType,
  grade: number,
  value: number,
  isInstant: boolean,
}

export type Effect = DetEffect & {
  remain: number,
  // additions
  include: boolean,
  id: string,
  sourceIndex: number,
  sourceSkillIndex: number,
}

export type EfficacyDetail = {
  efficacyIndex: number,
  efficacyType: SkillEfficacyType,
  targetIndexes?: number[],
  value?: number,
}

export type ActSkill = {
  cardIndex: number,
  skillIndex: number,
  order: number,
  stamina: number,
  details: EfficacyDetail[],
  isCritical: boolean,
  isComboBreak: boolean,
  score?: number,
}

export type CardStatus = {
  cardIndex: number,
  vocal: number,
  dance: number,
  visual: number,
  stamina: number,
  technique: number,
  mental: number,
  skillStatuses: SkillStatus[],
  effects?: Effect[],
}

// 🚩
export type Chart = {
  chartType: MusicChartType,
  sequence: number,
  actPosition: number,
  cardStatuses: CardStatus[],
  userStatuses: UserStatus[],
  beats?: WapLiveBeat[],
  stageSkillStatuses?: SkillStatus[],
  actSkill?: ActSkill,
  actPSkills?: ActSkill[],
  failureFlag?: SkillFailureType,
}

export type Live = {
  charts: Chart[],
  quest: WapQuest,
  liveDeck: LiveDeck,
  isBattle: boolean,
  exSkills?: WapSkill[],
  yells?: any[], // TODO: implementation
}

export type Concert = {
  
}
