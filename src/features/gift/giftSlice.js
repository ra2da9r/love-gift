import { createSlice } from '@reduxjs/toolkit'

const PASSWORDS_BY_NAME = {
  любимый: {
    password: '80085',
    hint: 'А дальше нельзя, шалунишка, ну если ты разгадаешь пароль :>',
    riddle: '0KzQvNGN0YvRiNC4INC90LDQvdGOINGB0LTQstC40LMgNiBfIDc=',
  },
  сладкий: {
    password: 'самоотсос',
    hint: 'Секрет не так интересен, как пытать людей, не рассказывая его. А что написать именно в пароль, то догадайся хехе',
    riddle: 'Мхм мхмхм мхмхмхмх мххмхмх мхмхмхмх',
  },
  iloveu: {
    password: 'морковочка', 
    hint: '42 кастом', 
    riddle: 'хшщфчлчбуй'
  },
  арзик: {
    password: 'зайка', 
    hint: 'я хотела другой пароль, но к сожалению он не принимался по каким то причинам и считался неверным :(', 
    riddle: 'Я хотел прийти в пятницу ради _ _ _ _ или по-другому _ _ _ _ _'
  }, 
  папочка: {
    password: 'киса', 
    hint: 'я кошечка гламур мур мур я', 
    riddle: '!!!'
  }
}

export function getPasswordClue(name) {
  const entry = PASSWORDS_BY_NAME[name.trim().toLocaleLowerCase()]
  if (!entry) {
    return {
      hint: 'Баг',
      riddle: 'Баг',
    }
  }
  return {
    hint: entry.hint,
    riddle: entry.riddle,
  }
}

export const LETTERS_BY_NAME = {
  любимый: {
    greeting: 'Арзик,',
    message: 'надеюсь ты догадался, что я исспользовала твою же шифровку, которую ты мне давалл. Мне очень нраавилось решать такие загадки! И честно очень хочется ещё, но поводдов для таккого пока что нет. Так что я решиила создать этот самыйй повод, создав эту ерунду :з',
    closing: 'А кстати, от разных имён зависит письмецо. Я уверена, что ты найдёшь подсказки в каждом моём письме. Ну ещё по крайней мере надеюсь, что ты не будешь залезать в код, иначе всё это как-то нечеснооооо :< ',
  },
  сладкий: {
    greeting: 'Моя галактика,',
    message: 'ты просто чудо. Я тебя очень люблю!!! Просто шикарно, что я тебя встретила!! Ведь ты ТАКОООЙ ТАКОООООООООЙ КЛАССНЫЙ!!! !',
    closing: 'Хочеца ещё?? Тогда, моё чудо, реши это 9x - 7i > 3(3x - 7u). Пиши следующее кодовое имя латиницей и слитно!!',
  },
  iloveu: {
    greeting: 'Морковочка,', 
    message: 'Да :з, у меня до сих пор твой шифратор текста. Расшифруй это (Обычный, 9) щв ухр шжувр тезпувр исъшфвр, штжкспр цпчхнхюлс! Тезте тезте!! Сшщжщп ктё фпнфлр ычжов с цхкшсжосл с пулфп чляп дщх 6:2(1+2)', 
    closing: 'Ищрсу рбрпшлб'
  },
  арзик: {
    greeting: 'Красавчик,', 
    message: 'прости, что мне пришлось для кодового имени писать твоё имя с маленькой буквы!!! Люблю тебя, очень очень очень очень сильно!', 
    closing: 'наверно всё?'
  }, 
  папочка: {
    greeting: 'кисааа', 
    message: 'кис кис кисааа', 
    closing: 'возможно всё?'
  }
}

const initialState = {
  screen: 'name',
  name: '',
  passwordError: false,
}

const giftSlice = createSlice({
  name: 'gift',
  initialState,
  reducers: {
    saveName(state, action) {
      const name = action.payload.trim()
      if (!name) return

      state.name = name
      state.screen = 'password'
      state.passwordError = false
    },

    checkPassword(state, action) {
      const normalizedName = state.name.toLocaleLowerCase()
      const expectedPassword = PASSWORDS_BY_NAME[normalizedName]?.password
      const enteredPassword = action.payload.trim().toLocaleLowerCase()
      const isCorrect = Boolean(expectedPassword) && enteredPassword === expectedPassword

      state.passwordError = !isCorrect
      if (isCorrect) state.screen = 'letter'
    },
    resetGift() {
      return initialState
    },
  },
})

export const { saveName, checkPassword, resetGift } = giftSlice.actions
export default giftSlice.reducer
