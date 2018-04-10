import localForage from 'localforage'

//从缓存中获取数据
export const get = (key) => {
  return new Promise((resolve, reject) => {
      localForage.getItem(key).then((value) => {
          resolve(value)
      }).catch((err) => {
          reject(err)
      })
  })
}

export const set = (key, minutes = 0, value) => {
  return new Promise((resolve, reject) => {
      localForage.setItem(key, {
        value: value,
        minutes: expiryTime(minutes)
      }).then((value) => {
          resolve(value)
      }).catch((err) => {
          reject(err)
      })
  })
}
//确认项目是否存在
export const has = (key) => {
  return new Promise((resolve, reject) => {
      localForage.getItem(key).then((value) => {
          let has = value? true: false
          resolve(has)
      }).catch((err) => {
          reject(false)
      })
  })
}

//请求的数据不存在时，程序能为你存储默认值
export const remember = async (key,  minutes = 0, value) => {
  if (await has(key)) {
    return get(key)
  }else{
    return set(key, minutes, value)
  }

}
// 过期时间
const expiryTime = (minutes) => {
  if (minutes) {
    return new Date().getTime() + minutes*60*1000
  }else{
    return minutes
  }

}
