import * as types from './mutation-types'
import Cache from 'lf-cache'
import axios from 'axios'

console.log(Cache.set('aaa','bb'));
//
// cache.get('aaa').then((value) => {
//     console.log(value)
// })
// cache.has('aaa')
// console.log(cache.remember('aaa','ccc',0));
console.log(Cache.get('aaa'));
