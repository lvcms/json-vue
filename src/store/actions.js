import * as types from './mutation-types'
import * as cache from './cache'
import axios from 'axios'

// console.log(cache.set('aaa','bb'));
//
// cache.get('aaa').then((value) => {
//     console.log(value)
// })
// cache.has('aaa')
console.log(cache.remember('aaa',0,'ccc'));
