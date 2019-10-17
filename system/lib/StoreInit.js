import CommonLib from './CommonLib'

class StoreInit {

  set(key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }

  get(key, objKey = '') {
    let storeItem = localStorage.getItem(key)
    if (storeItem === null) {
      return '';

    }
    if (objKey == '') {
      return storeItem;
    }

    if (CommonLib.isJson(storeItem) !== false) {
      storeItem = JSON.parse(storeItem)
      if (typeof storeItem[objKey] !== 'undefined') {
        return storeItem[objKey];
      } else {
        return '';
      }
    }
  }

  update(key, objKey, value = '') {
    let storeItem = localStorage.getItem(key)

    if (CommonLib.isJson(storeItem) !== false) {
      storeItem = JSON.parse(storeItem)
      storeItem[objKey] = value
    }

    if (typeof storeItem === 'object') {
      storeItem = JSON.stringify(storeItem)
    }
    localStorage.setItem(key, storeItem)
  }

  remove(val) {
    localStorage.removeItem(val)
    if (typeof localStorage.removeItem(val === 'undefined')) {
      return ''
    }
  }

  setUserdata(objData) {
    this.set('userdata', objData)
  }

  getUserdata(objKey = '') {
    if (objKey == '') {
      return this.get('userdata')
    }
    if (this.get('userdata', objKey) != '') {
      return this.get('userdata', objKey)
    } else {
      return ''
    }
  }

  removeUserdata() {
    this.remove('userdata')
  }
}

export default new StoreInit()