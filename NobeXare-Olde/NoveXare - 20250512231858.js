/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 12  23：18：58
 *不是不报,是时候未到.
 */
try {
    function Version() {
        const _0x2d01f5 = getResource() + '/version.json';
        const _0x54bc6c = read_file(_0x2d01f5);
        const _0xe1a9e2 = JSON['parse'](_0x54bc6c);
        return _0xe1a9e2['version_name']['replace'](/\./g, '');
    }
    const version = Version();
    curl_get("http://w.t3yanzheng.com/NXVersion", {}, function(code, msg) {
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b12§f231858§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });
    
  const sendShadow = (_0xd45525, _0x38b67b, _0x33523f) => sendPlayerAction({
    'id': self_id,
    'pos': {
      'x': _0xd45525,
      'y': _0x38b67b,
      'z': _0x33523f
    },
    'type': 0x11
  });
  const getPos = _0x5762ac => {
    let _0x59d5a1 = getEntityPos(_0x5762ac);
    if (_0x59d5a1) _0x59d5a1['y'] += getPos_offset;
    return _0x59d5a1 || {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    };
  };
  const silentMove = (_0x859a8b, _0x10fabc, _0x5323c4) => sendPlayerAuthInput({
    'inputMode': 0x2,
    'playMode': 0x0,
    'pos': {
      'x': _0x859a8b,
      'y': _0x10fabc,
      'z': _0x5323c4
    }
  });
  const 左迁九江郡 = _0x3d5b14 => {
    const _0xddee1b = new Uint8Array(_0x3d5b14);
    let _0xd1befd = '';
    for (let _0x34be27 = 0x0; _0x34be27 < _0xddee1b['length'];) {
      let _0x52c025 = _0xddee1b[_0x34be27++];
      if (_0x52c025 <= 0x7f) _0xd1befd += String['fromCharCode'](_0x52c025);else if (_0x52c025 >> 0x5 === 0x6) {
        let _0x5b09a5 = _0xddee1b[_0x34be27++];
        _0xd1befd += String['fromCharCode']((_0x52c025 & 0x1f) << 0x6 | _0x5b09a5 & 0x3f);
      } else if (_0x52c025 >> 0x4 === 0xe) {
        let _0x2271d4 = _0xddee1b[_0x34be27++];
        let _0x45d87c = _0xddee1b[_0x34be27++];
        _0xd1befd += String['fromCharCode']((_0x52c025 & 0xf) << 0xc | (_0x2271d4 & 0x3f) << 0x6 | _0x45d87c & 0x3f);
      } else if (_0x52c025 >> 0x3 === 0x1e) {
        let _0x283b0c = _0xddee1b[_0x34be27++];
        let _0xec94f9 = _0xddee1b[_0x34be27++];
        let _0x55b19f = _0xddee1b[_0x34be27++];
        let _0x5554c6 = (_0x52c025 & 0x7) << 0x12 | (_0x283b0c & 0x3f) << 0xc | (_0xec94f9 & 0x3f) << 0x6 | _0x55b19f & 0x3f;
        _0xd1befd += String['fromCodePoint'](_0x5554c6);
      }
    }
    return _0xd1befd;
  };
  const 司马明年秋 = (_0x416d3f, _0x249a7e, _0x1c620c, _0x25ad97) => {
    let _0x257214 = _0x416d3f['indexOf'](_0x249a7e) + _0x249a7e['length'];
    let _0x336695 = _0x416d3f['indexOf'](_0x1c620c, _0x257214);
    if (typeof _0x25ad97 !== 'undefined' && _0x416d3f['indexOf'](_0x25ad97, _0x257214) < _0x336695 && _0x416d3f['indexOf'](_0x25ad97, _0x257214) != -0x1) _0x336695 = _0x416d3f['indexOf'](_0x25ad97, _0x257214);
    if (_0x257214 === -0x1 || _0x336695 === -0x1) return null;
    return _0x416d3f['substring'](_0x257214, _0x336695);
  };
  const 送客湓浦口 = _0x5754a7 => {
    let _0x494167 = _0x5754a7['split']('');
    let _0x3a5a91 = '';
    let _0x3ad218 = '4c6e2a3b195d'['split']('');
    for (let _0x408815 in _0x494167) _0x3a5a91 += '§' + _0x3ad218[_0x408815 % _0x3ad218['length']] + _0x494167[_0x408815];
    return _0x3a5a91;
  };
  const 闻舟中夜弹 = _0x67a0da => {
    if (_0x67a0da['startsWith']('0x')) _0x67a0da = _0x67a0da['slice'](0x2);
    const _0x3f9d26 = [];
    for (let _0x2aab37 = 0x0; _0x2aab37 < _0x67a0da['length']; _0x2aab37 += 0x2) {
      const _0x283a0b = parseInt(_0x67a0da['slice'](_0x2aab37, _0x2aab37 + 0x2), 0x10);
      _0x3f9d26['push'](_0x283a0b);
    }
    return new Uint8Array(_0x3f9d26);
  };
  const 琵琶者听其 = (_0x28286a, _0x1a2cf5, _0x108955 = 0x0) => {
    if (_0x108955 == 0x1) sendRpc(_0x28286a, 闻舟中夜弹(_0x1a2cf5));
    if (_0x108955 == 0x2) sendRpc(_0x28286a, _0x1a2cf5);
    if (_0x108955 == 0x3) {
      const _0x109a0b = new Uint8Array(str['length']);
      for (let _0x39ecd4 = 0x0; _0x39ecd4 < str['length']; _0x39ecd4++) _0x109a0b[_0x39ecd4] = str['charCodeAt'](_0x39ecd4);
      sendRpc(_0x28286a, _0x109a0b);
    }
  };
  const 音铮铮然有 = _0x12e322 => {
    if (nx_nbts[_0x12e322] !== undefined) return nx_nbts[_0x12e322];
    const _0xd44e4c = 司马明年秋(_0x12e322, ',Name:"', '",WasPickedUp');
    if (_0xd44e4c === '' || typeof _0xd44e4c !== 'string') return {
      'aux': 0x0,
      'count': 0x0,
      'namespace': 'minecraft:air',
      'enchants': []
    };
    const _0x388d3f = Number(司马明年秋(_0x12e322, ',aux:', ','));
    const _0x24f27b = Number(司马明年秋(_0x12e322, 'Count:', 'b,D'));
    const _0x415c73 = _0x12e322['includes'](',name:"') ? 司马明年秋(_0x12e322, ',name:"', '",') : _0xd44e4c['replace']('minecraft:', '');
    const _0x59890a = _0x12e322['includes'](',netId:') ? Number(司马明年秋(_0x12e322, ',netId:', '}')) : 0x0;
    const _0x382dc1 = _0x12e322['includes']('maxDamage') ? Number(司马明年秋(_0x12e322, ',maxDamage:', ',')) : 0x0;
    const _0x1df414 = _0x12e322['includes']('attackDamage') ? Number(司马明年秋(_0x12e322, 'attackDamage:', ',')) : 0x1;
    const _0x32ef8b = _0x12e322['includes']('customColor') ? 司马明年秋(_0x12e322, 'customColor:', '}', ',') : '';
    const _0xb84f76 = _0x12e322['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x12e322, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
    const _0x22a389 = _0x12e322['startsWith']('{Block:');
    const _0x281c11 = {
      'name': _0x415c73,
      'namespace': _0xd44e4c,
      'aux': _0x388d3f,
      'damage': _0x382dc1,
      'attackDamage': _0x1df414,
      'count': _0x24f27b,
      'color': _0x32ef8b,
      'isBlock': _0x22a389,
      'id': _0x59890a,
      'enchants': JSON['parse'](_0xb84f76)
    };
    nx_nbts[_0x12e322] = _0x281c11;
    return _0x281c11;
  };
  const 京都声问其 = _0x1696ab => {
    const _0x59e7b0 = getEntitySize(_0x1696ab);
    const _0x1633a0 = getEntityMotion(_0x1696ab);
    const _0x354352 = getPos(_0x1696ab);
    const _0x54dfd9 = getEntityName(_0x1696ab);
    const _0x3120b3 = getEntityNamespace(_0x1696ab);
    const _0x30891a = 声暗问弹者(self_id, _0x1696ab);
    const _0x33bd4f = getCarried(_0x1696ab);
    const _0x522a0b = 瑟瑟主人下(_0x1696ab);
    const _0x2826ca = getEntityAttribute(_0x1696ab, 'minecraft:health');
    const _0x5f25a1 = getEntityAttribute(_0x1696ab, 'minecraft:movement');
    const _0x40d82d = getEntityTypeId(_0x1696ab);
    const _0xd906fa = getEntityTarget(_0x1696ab);
    const _0x3d44f5 = getPlayerInventorySize(_0x1696ab);
    const _0x492992 = getPlayerHotBarSize(_0x1696ab);
    const {
      yaw,
      pitch
    } = getEntityRot(_0x1696ab);
    const _0x52d521 = _0x1914c8 => _0x1914c8['toFixed'](0x2);
    const _0x11653f = ['唯一ID:' + _0x1696ab + ' 昵称:' + _0x54dfd9 + '§r 实体命名空间:' + _0x3120b3 + ' 水平碰撞箱:' + _0x52d521(_0x59e7b0['x']) + ' 垂直碰撞箱:' + _0x52d521(_0x59e7b0['y']) + ' Mot速度:' + _0x522a0b, 'ability速度:[max:' + _0x5f25a1['max'] + ', min:' + _0x5f25a1['min'] + ', current:' + _0x5f25a1['current'] + '] 血量:[max:' + _0x2826ca['max'] + ', min:' + _0x2826ca['min'] + ', current:' + _0x2826ca['current'] + ']', '手持:[id:' + _0x33bd4f['id'] + ', namespace:' + _0x33bd4f['namespace'] + ', name:' + _0x33bd4f['name'] + '§r, aux:' + _0x33bd4f['aux'] + '] 距离:' + _0x30891a + ' 实体类型:' + _0x40d82d, '仰俯角:' + _0x52d521(pitch) + '° 偏航角:' + _0x52d521(yaw) + '° 仇恨目标:' + getEntityName(_0xd906fa) + '^' + _0xd906fa, '移动值:[' + _0x52d521(_0x1633a0['x']) + ', ' + _0x52d521(_0x1633a0['y']) + ', ' + _0x52d521(_0x1633a0['z']) + '] 坐标值:[' + _0x52d521(_0x354352['x']) + ', ' + _0x52d521(_0x354352['y']) + ', ' + _0x52d521(_0x354352['z']) + ']', '背包容量:' + _0x3d44f5 + ' 物品栏容量:' + _0x492992];
    return _0x11653f['join']('\n');
  };
  const getCarried = _0x44033c => 音铮铮然有(getEntityCarriedItem(_0x44033c));
  const getOffhand = _0x5c0752 => 音铮铮然有(getEntityOffhandItem(_0x5c0752));
  const getInventory = (_0x24b971, _0x19d176) => 音铮铮然有(getPlayerInventoryItem(_0x24b971, _0x19d176));
  const 人本长安倡 = (_0x23e1a9, _0x501f70, _0x16b12e, _0x22fd1f = false, _0x4d1136 = false) => {
    let _0x400e07 = {
      'x': _0x23e1a9,
      'y': _0x501f70,
      'z': _0x16b12e
    };
    const _0x52e91e = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
    const _0x15e115 = _0x5ec6ac => sendPlayerAuthInput({
      'pos': self_pos,
      'inputMode': 0x2,
      'playMode': 0x0,
      'flags': [0x23],
      'actions': _0x5ec6ac['map'](_0x541c32 => ({
        'type': _0x541c32,
        'pos': _0x400e07,
        'value': 0x1
      }))
    });
    const _0x1cbeca = _0x4087c6 => sendPlayerAction({
      'id': self_id,
      'pos': _0x400e07,
      'type': _0x4087c6
    });
    if (_0x22fd1f) _0x15e115(_0x52e91e);
    if (_0x4d1136) _0x52e91e['forEach'](_0x3703dc => _0x1cbeca(_0x3703dc));
  };
  const 女尝学琵琶 = (_0x250ffa, _0x505712, _0x21c40f = true, _0x5172a7 = false) => {
    if (_0x250ffa === _0x505712) return false;
    let _0x1c18b6 = getInventory(self_id, _0x250ffa);
    let _0x5e0222 = getInventory(self_id, _0x505712);
    if (_0x21c40f && _0x505712 < 0x9 && _0x5e0222['namespace'] != 'minecraft:air') {
      for (let _0x1f040b = 0x23; _0x1f040b > 0x8; _0x1f040b--) {
        const _0x3ea7e5 = getInventory(self_id, _0x1f040b);
        if (_0x3ea7e5['namespace'] === 'minecraft:air') {
          moveInventoryItem(_0x505712, _0x1f040b);
          break;
        }
      }
    }
    if (_0x5172a7) {
      for (var _0x279246 = 0x23; _0x279246 > 0x0; _0x279246--) {
        const _0x4ffbf3 = getInventory(self_id, _0x279246);
        if (_0x4ffbf3['namespace'] === 'minecraft:air') {
          moveInventoryItem(_0x505712, _0x279246);
          break;
        }
      }
    }
    if (_0x1c18b6['namespace'] != 'minecraft:air' && _0x5e0222['namespace'] === 'minecraft:air') moveInventoryItem(_0x250ffa, _0x505712);
    if (_0x5172a7 && _0x279246) moveInventoryItem(_0x279246, _0x505712);
  };
  const 于穆曹二善 = (_0x1d42fe, _0x12af60) => {
    let _0x263359 = _0x12af60 - 0xb4;
    if (_0x1d42fe > 0x5a) _0x1d42fe -= 0x5a;
    if (_0x1d42fe < -0x5a) _0x1d42fe += 0x5a;
    if (_0x263359 > 0xb4) _0x263359 = _0x263359 - 0x168;
    if (_0x263359 < -0xb4) _0x263359 = 0x168 + _0x263359;
    if (getPlayerViewPerspective() === 0x0 || _0x263359 > 0xb4 || _0x263359 < -0xb4 || _0x1d42fe > 0x5a || _0x1d42fe < -0x5a) return false;
    setEntityBodyRot(self_id, _0x263359);
    setEntityRot(self_id, _0x1d42fe, _0x263359);
  };
  const 才年长色衰 = _0x3ee6f2 => {
    const _0xd0cb9d = getEntityAttribute(_0x3ee6f2, 'minecraft:health');
    const _0xd0e332 = getPos(_0x3ee6f2);
    if (typeof _0xd0e332 != 'object' || !_0xd0e332 || !_0xd0e332['x'] || !_0xd0e332['y'] || !_0xd0e332['z']) return false;
    if (!findEntity(_0x3ee6f2) && (_0xd0cb9d['max'] === undefined || _0xd0cb9d['min'] === undefined || _0xd0cb9d['current'] === undefined)) return false;
    if (_0xd0cb9d['current'] > 0x0) return true;
  };
  const 委身为贾人 = (_0x303acb, _0x4ee50c) => {
    if (typeof globalThis[_0x303acb] === 'undefined' || globalThis[_0x303acb] === _0x4ee50c) return;
    globalThis[_0x303acb] = _0x4ee50c;
    nx_cfg[_0x303acb] = _0x4ee50c;
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x4ee50c ? 'on' : 'off') + '.mp3', 0x64, 0x64);
    if (FuncSwitchTip && (!FuncMessage || !_0x303acb['includes']('_'))) {
      if (modes['tip_mode'] === 0x0) {
        if (_0x4ee50c) 归客不发寻(0x0, _0x303acb, '§oEnable ◆', '§a');else 归客不发寻(0x0, _0x303acb, '§oDisable ◇', '§c');
      }
      if (modes['tip_mode'] === 0x1) {
        addCustomArrayList(_0x303acb, _0x303acb + (_0x4ee50c ? ' - Enable' : ' - Disable'), _0x303acb + (_0x4ee50c ? ' - Enable' : ' - Disable'), true);
        setTimeout(() => addCustomArrayList(_0x303acb, _0x303acb + (_0x4ee50c ? ' - Enable' : ' - Disable'), _0x303acb + (_0x4ee50c ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
      }
    }
    if (typeof nx_arraylist[_0x303acb] !== 'undefined') addCustomArrayList(_0x303acb, nx_arraylist[_0x303acb]['CN'], nx_arraylist[_0x303acb]['EN'], _0x4ee50c);else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x303acb['includes']('_')) addCustomArrayList(_0x303acb, _0x303acb, _0x303acb, _0x4ee50c);
    if (typeof nx_binds[_0x303acb] !== 'undefined') nx_binds[_0x303acb]['forEach'](_0x3e63dd => 委身为贾人(_0x3e63dd, _0x4ee50c));
    if (typeof nx_raBinds[_0x303acb] !== 'undefined' && !nx_raBinds[_0x303acb]['isNX']) callModule(nx_funcid[nx_raBinds[_0x303acb]['module']], JSON['stringify']({
      'value': _0x4ee50c
    }));
  };
  const 妇遂命酒使 = (_0x39ba2d, _0x2945bc, _0x5038fb, _0x37b6a5, _0x54ddb9, _0x2af4d3 = false, _0xba0f6e = {}) => {
    for (let _0x323931 = 0x0; _0x323931 < _0x54ddb9; _0x323931++) addParticle(Number(_0x39ba2d), _0x2945bc, _0x5038fb, _0x37b6a5, _0x2af4d3 ? _0xba0f6e['x'] : _0x2945bc, _0x2af4d3 ? _0xba0f6e['y'] : _0x5038fb, _0x2af4d3 ? _0xba0f6e['z'] : _0x37b6a5, 0x1, _0x2af4d3);
  };
  const 快弹数曲曲 = () => {
    const _0x8dee14 = getEntityCarriedItem(self_id);
    const _0x4f4b47 = getPos(self_id);
    if (!_0x8dee14['includes']('count:0')) buildBlock(self_id, _0x4f4b47['x'], _0x4f4b47['y'], _0x4f4b47['z'], 0x6);
  };
  const 罢悯然自叙 = _0xad7484 => {
    const _0x3ac273 = getInventory(self_id, _0xad7484);
    const _0x40ef1a = 迁谪意因为(self_id, _0xad7484);
    const _0x2e20c8 = ['helmet', 'chestplate', 'leggings', 'boots'];
    if (_0x3ac273['namespace'] != 'minecraft:air' && _0x3ac273['count'] > 0x0 && _0x2e20c8['includes'](_0x40ef1a) && selectPlayerInventorySlot(self_id, _0xad7484)) {
      const _0x1b85d3 = getPlayerSelectItemSlot(self_id);
      if (_0x1b85d3 === _0xad7484) 快弹数曲曲();
    }
  };
  const 少小时欢乐 = (_0x2d4b7d, _0x3e853d, _0x5444d6, _0x22d3c7) => {
    let _0x2aeb19 = _0x3e853d > 0x0;
    _0x3e853d = Math['abs'](_0x3e853d);
    let _0x1fe094 = _0x5444d6 * Math['cos'](_0x3e853d * Math['PI'] / 0xb4);
    let _0x39dee1 = _0x5444d6 * Math['sin'](_0x3e853d * Math['PI'] / 0xb4);
    let _0x53735c = _0x39dee1 / _0x22d3c7;
    let _0x2d8f53 = _0x22d3c7 * (_0x53735c * _0x53735c) * 0.5;
    let _0x597984 = _0x1fe094 * _0x53735c;
    let _0x2547ae = -_0x2d8f53 / (_0x597984 * _0x597984);
    return {
      'data': _0x2547ae * Math['pow'](_0x2d4b7d - (_0x2aeb19 ? -_0x597984 : _0x597984), 0x2) + _0x2d8f53,
      'bool': _0x2aeb19
    };
  };
  const getLocal = _0x176c20 => typeof _0x176c20 === 'undefined' || _0x176c20 === null ? getLocalPlayerUniqueID() : _0x176c20;
  const 事今漂沦憔 = (_0x36c7a2, _0x485ca4, _0x34223e) => {
    const _0x5693a7 = [[_0x36c7a2, _0x485ca4 + 0x1, _0x34223e], [_0x36c7a2, _0x485ca4 - 0x1, _0x34223e], [_0x36c7a2, _0x485ca4, _0x34223e + 0x1], [_0x36c7a2, _0x485ca4, _0x34223e - 0x1], [_0x36c7a2 + 0x1, _0x485ca4, _0x34223e], [_0x36c7a2 - 0x1, _0x485ca4, _0x34223e]];
    _0x5693a7['some']((_0x1d0a65, _0x22d4bc) => {
      const _0x3e37bd = getBlock(_0x1d0a65[0x0], _0x1d0a65[0x1], _0x1d0a65[0x2]);
      if (_0x3e37bd['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x1d0a65[0x0], _0x1d0a65[0x1], _0x1d0a65[0x2], _0x22d4bc);
    });
  };
  const 湖间予出官 = (_0x542b19, _0x413e5c) => {
    const _0x1a62c4 = getPos(self_id);
    sendSound(_0x542b19, _0x1a62c4['x'], _0x1a62c4['y'], _0x1a62c4['z'], _0x413e5c);
  };
  const 二年恬然自 = (_0x1db2b8, _0x421631, _0x4edfb9) => {
    const _0x9049ca = getPos(self_id);
    motion_list['push']([_0x1db2b8 - _0x9049ca['x'], _0x421631 - _0x9049ca['y'], _0x4edfb9 - _0x9049ca['z']]);
    motion_list['push']([0x0, 0x0, 0x0]);
  };
  const 安感斯人言 = (_0x4b9ede, _0x5930b2) => {
    let _0x539159 = _0x4b9ede === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x4b9ede);
    if (typeof _0x5930b2 !== 'undefined') _0x539159['namespace'] = _0x5930b2;
    return Array['from']({
      'length': 0x24
    }, (_0xeedece, _0x16cff4) => getInventory(self_id, _0x16cff4))['filter'](_0x18267c => _0x18267c['namespace'] === _0x539159['namespace'] && (typeof _0x5930b2 !== 'undefined' || _0x18267c['aux'] === _0x539159['aux']))['reduce']((_0x1f2b3d, _0x23d15b) => _0x1f2b3d + _0x23d15b['count'], 0x0);
  };
  const 是夕始觉有 = (_0x3a8d04, _0x5b4e8c, _0x597c0c = 'hotbar', _0x4c2110 = 0x0) => {
    const _0x39817d = _0x597c0c == 'hotbar' ? 0x9 : 0x24;
    let _0x593d52 = Array['from']({
      'length': _0x39817d
    }, (_0x2fb43b, _0x2fe263) => getInventory(_0x3a8d04, _0x2fe263));
    let _0x3c9494 = _0x593d52['some'](_0x460cd1 => _0x460cd1['namespace']['includes'](_0x5b4e8c));
    let _0x2fa8e7 = _0x593d52['reduce']((_0x106710, _0x294e8c) => _0x106710 + _0x294e8c['count'], 0x0);
    return _0x3c9494 && _0x2fa8e7 > _0x4c2110;
  };
  const 迁谪意因为 = (_0x3e3f65, _0x1de61c, _0xbf4ccb) => {
    let _0x5b1315 = _0x1de61c === -0x1 ? getCarried(_0x3e3f65) : getInventory(_0x3e3f65, _0x1de61c);
    if (!_0x5b1315['namespace']['includes']('_') && typeof _0xbf4ccb === 'undefined') return 'other';
    let _0x23cde8 = typeof _0xbf4ccb === 'undefined' ? _0x5b1315['namespace']['replace']('minecraft:', '') : _0xbf4ccb['replace']('minecraft:', '');
    const _0xe59dce = _0x23cde8['split']('_');
    return _0xe59dce[0x1];
  };
  const getEntityMaxDamage = _0x359658 => Array['from']({
    'length': 0x24
  }, (_0x57df08, _0x144299) => 十六言命曰(_0x359658, _0x144299))['reduce']((_0x12ea07, _0x140acf) => Math['max'](_0x12ea07, _0x140acf), 0x0);
  const 长句歌以赠 = (_0x3d8daf, _0xae95e0, _0x59eff6 = false) => {
    let _0x55b0d0 = _0x59eff6 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
    const _0x3f5a54 = ['helmet', 'chestplate', 'leggings', 'boots'];
    for (let _0x46f799 = 0x0; _0x46f799 < 0x24; _0x46f799++) {
      const _0x27c88b = 迁谪意因为(_0x3d8daf, _0x46f799);
      const _0x1c198d = _0x3f5a54['indexOf'](_0x27c88b);
      if (_0x1c198d === -0x1) continue;
      const _0xa5e210 = 之凡六百一(_0x3d8daf, _0x46f799);
      if (!_0x59eff6 && _0x27c88b === _0xae95e0 && _0x55b0d0 < _0xa5e210) _0x55b0d0 = _0xa5e210;
      if (_0x59eff6 && _0x55b0d0[_0x1c198d] < _0xa5e210) _0x55b0d0[_0x1c198d] = _0xa5e210;
    }
    return _0x55b0d0;
  };
  const 之凡六百一 = (_0x5dc9d1, _0xe48c83, _0x1e134d = true, _0x5cda1c = true) => {
    let _0x47d6ab = _0xe48c83 === -0x1 ? getCarried(_0x5dc9d1) : getInventory(_0x5dc9d1, _0xe48c83);
    if (_0xe48c83 < -0x1) _0x47d6ab = 音铮铮然有(getPlayerArmorItem(_0x5dc9d1, Math['abs'](_0xe48c83) - 0x2));
    if (_0x47d6ab['count'] === 0x0 || _0x47d6ab['damage'] === 0x0) return 0x0;
    if (!_0x5cda1c) return _0x47d6ab['damage'];
    let _0x47a63b = 0x0;
    let _0x54a4f8 = _0x47d6ab['enchants']['findIndex'](_0x5dacb7 => _0x5dacb7['id'] === 0x0);
    if (_0x54a4f8 > -0x1) _0x47a63b = _0x47d6ab['enchants'][_0x54a4f8]['lvl'];
    if (!_0x1e134d) return 0x1 + _0x47a63b / 0xa;
    return _0x47d6ab['damage'] * (0x1 + _0x47a63b / 0xa);
  };
  const 十六言命曰 = (_0x4c6cd8, _0x5e16e0, _0x2ab4cb = true, _0x23ec1c = true) => {
    let _0x27ebcf = _0x5e16e0 === -0x1 ? getCarried(_0x4c6cd8) : getInventory(_0x4c6cd8, _0x5e16e0);
    if (_0x27ebcf['count'] === 0x0 || _0x27ebcf['attackDamage'] === 0x0) return 0x1;
    if (!_0x23ec1c) return _0x27ebcf['attackDamage'];
    let _0x3c1623 = 0x0;
    let _0xddbc96 = _0x27ebcf['enchants']['findIndex'](_0x14a8c4 => _0x14a8c4['id'] === 0x9);
    if (_0xddbc96 > -0x1) _0x3c1623 = _0x27ebcf['enchants'][_0xddbc96]['lvl'] * 1.25;
    if (!_0x2ab4cb) return _0x3c1623;
    return _0x27ebcf['attackDamage'] + _0x3c1623;
  };
  const b2s = _0x16d585 => _0x16d585 ? 'true' : 'false';
  const 琵琶行浔阳 = (_0x2c1b45, _0x13aa6a, _0x30c5d0) => {
    let _0x578b0e = _0x2c1b45['split'](_0x13aa6a)['length'] - 0x1;
    let _0x139f1b = 0x0;
    let _0x163e84 = [];
    for (let _0x1150ab = 0x0; _0x1150ab < _0x578b0e; _0x1150ab++) {
      let _0x30e94e = _0x2c1b45['indexOf'](_0x13aa6a, _0x139f1b) + _0x13aa6a['length'];
      let _0x567952 = _0x2c1b45['indexOf'](_0x30c5d0, _0x30e94e);
      if (_0x567952 === -0x1 || _0x30e94e === -0x1) break;
      _0x139f1b = _0x567952;
      _0x163e84['push'](_0x2c1b45['substring'](_0x30e94e, _0x567952));
    }
    return _0x578b0e > 0x1 ? _0x163e84 : _0x163e84[0x0];
  };
  const 江头夜送客 = (_0x4421da, _0x1e572e) => {
    if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
    return attackEntity(_0x4421da, _0x1e572e);
  };
  const 枫叶荻花秋 = (_0x548b8a, _0x3d0fbf, _0x4b9df9, _0x315301) => {
    if (typeof _0x4b9df9 === 'undefined') _0x4b9df9 = -0x1;
    if (typeof _0x315301 === 'undefined') _0x315301 = -0x1;
    let _0x17e2fe = null;
    for (index = 0x0; index < 0x9; index++) {
      const _0x1e170a = getInventory(_0x548b8a, index);
      if (!_0x1e170a['namespace'] || !_0x1e170a['name']) continue;
      if (_0x1e170a['namespace']['includes'](_0x3d0fbf) && (_0x1e170a['aux'] === _0x4b9df9 || _0x4b9df9 === -0x1) && (_0x1e170a['name']['includes'](_0x315301) || _0x315301 === -0x1)) {
        _0x17e2fe = index;
        break;
      }
    }
    return _0x17e2fe;
  };
  const 瑟瑟主人下 = _0x1bb9f3 => {
    const _0x1a7af3 = getEntityMotion(_0x1bb9f3);
    const _0x43e620 = Math['sqrt'](_0x1a7af3['x'] * _0x1a7af3['x'] + _0x1a7af3['y'] * _0x1a7af3['y'] + _0x1a7af3['z'] * _0x1a7af3['z']);
    return _0x43e620 * 0x14;
  };
  const 马客在船举 = (_0x54a13a, _0x142e38) => {
    const _0x3beff9 = _0x142e38 - _0x54a13a + 0x1;
    return Math['floor'](Math['random']() * _0x3beff9) + _0x54a13a;
  };
  const 酒欲饮无管 = (_0x319ef4, _0xb4ec61, _0x17488e) => {
    return {
      'x': _0xb4ec61['x'] + _0x319ef4['x'] * _0x17488e,
      'y': _0xb4ec61['y'] + _0x319ef4['x'] * _0x17488e,
      'z': _0xb4ec61['z'] + _0x319ef4['z'] * _0x17488e
    };
  };
  const 弦醉不成欢 = _0x3809c8 => {
    if (_0x3809c8 < 0x3c) return _0x3809c8 + 's';
    if (_0x3809c8 >= 0x3c) return Math['floor'](_0x3809c8 / 0x3c) + 'min ' + _0x3809c8 % 0x3c + 's';
  };
  const 惨将别别时 = (_0x266df5, _0x255d32, _0x2ef24e, _0x471294 = 0x0, _0x3b1c25 = 0x0) => {
    if (!_0x2ef24e) return true;
    _0x266df5['y'] += _0x471294;
    _0x255d32['y'] += _0x3b1c25;
    const _0x37c546 = 弦弦掩抑声(_0x266df5, _0x255d32, 'yaw_pos');
    const _0x4c1883 = -弦弦掩抑声(_0x266df5, _0x255d32, 'pitch_pos');
    const _0x4fb031 = getDistance(_0x266df5, _0x255d32);
    let _0x12a017 = true;
    for (let _0x40d402 = 0x0; _0x40d402 < _0x4fb031; _0x40d402 += 0.5) {
      const _0x1eb78d = 忽闻水上琵(_0x40d402, _0x255d32, {
        'yaw': _0x37c546,
        'pitch': _0x4c1883
      });
      const _0x521bec = getBlock(_0x1eb78d['x'], _0x1eb78d['y'], _0x1eb78d['z']);
      if (_0x521bec['namespace'] != 'minecraft:air') {
        _0x12a017 = false;
        break;
      }
    }
    return _0x12a017;
  };
  const 茫茫江浸月 = (_0x3d0de6, _0x189224) => {
    let _0x98a19d = getWorldPlayerList()['sort']((_0xedf797, _0x4cac5b) => _0xedf797['name']['localeCompare'](_0x4cac5b['name']));
    let _0x5aaec3 = _0x98a19d['length'] > 0x0 ? _0x98a19d['map'](_0x2dd5a1 => ({
      'text': '§e' + _0x2dd5a1['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x2dd5a1['id'])['toFixed'](0x2)
    })) : [{
      'text': '没有玩家'
    }];
    let _0x42d8b8 = {
      'type': 'form',
      'title': '§5选择',
      'content': '§5选择一个目标',
      'buttons': _0x5aaec3
    };
    const _0x2dff5a = JSON['stringify'](_0x42d8b8);
    addForm(_0x2dff5a, function (_0x276f1b) {
      if (_0x98a19d['length'] > 0x0 && _0x276f1b >= 0x0) {
        var _0x338580 = _0x189224 === 0x0 ? _0x98a19d[_0x276f1b]['name'] : _0x98a19d[_0x276f1b]['id'];
        if (typeof globalThis[_0x3d0de6] === 'object') globalThis[_0x3d0de6]['push'](_0x338580);
        if (typeof globalThis[_0x3d0de6] === 'string') globalThis[_0x3d0de6] = _0x338580;
        归客不发寻(0x0, 'addTarget', _0x338580, '§r');
      }
    });
  };
  const 忽闻水上琵 = (_0x368584, _0x39486f, _0x5de1de) => {
    let _0x5cd40f = _0x368584 < 0x0 ? true : false;
    let {
      yaw,
      pitch
    } = _0x5de1de;
    if (yaw > 0xb4) yaw = yaw - 0x168;
    if (yaw < -0xb4) yaw = 0x168 + yaw;
    _0x368584 = Math['abs'](_0x368584);
    const _0x18c1a7 = yaw * Math['PI'] / 0xb4;
    const _0xab2ad7 = pitch * Math['PI'] / 0xb4;
    let _0x236f21 = pitch != 0x0 ? Math['sin'](_0xab2ad7) * _0x368584 : 0x0;
    let _0x4ad591 = pitch != 0x0 ? _0x236f21 / Math['tan'](_0xab2ad7) : _0x368584;
    let _0x33869f = _0x4ad591 < 0x0;
    _0x4ad591 = Math['abs'](_0x4ad591);
    const _0x548892 = Math['cos'](_0x18c1a7) * _0x4ad591;
    const _0x4d83d4 = Math['sin'](_0x18c1a7) * _0x4ad591;
    let _0x2dcb49 = -Math['sin'](_0x18c1a7) * _0x4ad591;
    let _0x1f0d78 = Math['cos'](_0x18c1a7) * _0x4ad591;
    if (_0x5cd40f || _0x33869f) {
      _0x2dcb49 = -_0x2dcb49;
      if (!_0x33869f) _0x236f21 = -_0x236f21;
      _0x1f0d78 = -_0x1f0d78;
    }
    return {
      'x': _0x39486f['x'] + _0x2dcb49,
      'y': _0x39486f['y'] - _0x236f21,
      'z': _0x39486f['z'] + _0x1f0d78
    };
  };
  const getPlayerItemCount = _0x4a1018 => Array['from']({
    'length': 0x24
  }, (_0x47095f, _0x1d3077) => getInventory(_0x4a1018, _0x1d3077))['filter'](_0x51e70c => _0x51e70c['count'] !== 0x0)['reduce']((_0x3587da, _0x21fd30) => _0x3587da + _0x21fd30['count'], 0x0);
  const isSimilar = (_0x4b152c, _0x6c1495, _0x496389) => Math['abs'](_0x4b152c - _0x6c1495) < _0x496389;
  const 琶声主人忘 = _0x3f9e67 => {
    let _0x542956 = [];
    if (at_entity) _0x542956['push'](...getEntityList());
    if (at_player) _0x542956['push'](...getPlayerList());
    let _0xe7db70 = Math['min'](at_maxCount, _0x542956['length']);
    let _0x292c1 = [];
    for (const _0x7afaf4 of _0x542956) {
      if (!才年长色衰(_0x7afaf4)) continue;
      const _0x1febda = getEntityNamespace(_0x7afaf4);
      if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0xc8496 => _0x1febda['includes'](_0xc8496)) != at_back) continue;
      const _0x3db443 = getPos(_0x7afaf4);
      const _0x1f91d4 = getDistance(_0x3db443, getPos(_0x3f9e67));
      if ((_0x1f91d4 > at_maxDist || _0x1f91d4 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
      const _0x186663 = getEntityAttribute(_0x7afaf4, 'minecraft:health');
      if (at_heal && (!_0x186663 || _0x186663['min'] > _0x186663['max'] || _0x186663['max'] > 0x186a0 || _0x186663['current'] <= 0x0 || _0x186663['max'] === 0x0) != at_back) continue;
      if (_0x1febda === 'minecraft:player') {
        const _0x1716a0 = getEntityRot(_0x7afaf4);
        const _0x345a27 = at_BWM ? getEntityAttribute(_0x7afaf4, 'minecraft:movement') : {
          'current': 0x0
        };
        const _0x2d5e11 = getEntityName(_0x7afaf4);
        if (at_BWM && _0x345a27['current'] >= 0.5 && !_0x2d5e11['includes']('[') && !_0x2d5e11['includes']('【')) {
          if (DeleteDummy) removeEntity(_0x7afaf4);
          continue;
        }
        if (at_fov && (typeof _0x1716a0['yaw'] === 'undefined' || typeof _0x1716a0['pitch'] === 'undefined' || _0x1716a0['yaw']['toFixed'](0x2) === 0x0 || _0x1716a0['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
        const _0x3693c6 = getEntityFlag(_0x7afaf4, 0x5);
        if (at_hide && _0x3693c6 != at_back) continue;
        const _0x524535 = getEntityIsGround(_0x7afaf4);
        if (at_ground && _0x524535 === at_back) continue;
        if (at_wall && !惨将别别时(getPos(self_id), _0x3db443, at_wall, true, 1.53, 0.9) != at_back) continue;
        if (Teams && teams_name && (_0x2d5e11['startsWith'](ct_team) || ct_team['includes']('[') && _0x2d5e11['includes'](ct_team))) continue;
        if (at_whileLists['includes'](_0x7afaf4) != at_back || !at_name && (_0x2d5e11 === getEntityName(_0x3f9e67) || _0x2d5e11 === '') != at_back || (_0x3db443['y'] > at_maxY || _0x3db443['y'] < at_minY) != at_back && !at_infY || _0x7afaf4 === self_id) continue;
        if (at_regexEnable && at_regex['some'](_0x156152 => _0x2d5e11['includes'](_0x156152))) continue;
        const _0x49dd7b = teams_armor ? teams_blur ? getPlayerArmorItem(_0x7afaf4, teams_slot) : 音铮铮然有(getPlayerArmorItem(_0x7afaf4, teams_slot)) : {};
        if (Teams && teams_armor && (teams_blur && _0x49dd7b != '{}' && _0x49dd7b === teams_self || !teams_blur && _0x49dd7b['color'] && _0x49dd7b['color'] === teams_self['color'])) continue;
        const _0x2a5bfc = at_size ? getEntitySize(_0x7afaf4) : {
          'x': 0x0,
          'y': 0x0
        };
        if (at_size && !HitBox && ((_0x2a5bfc['x'] > at_defaultSize['x'] + 0.1 || _0x2a5bfc['x'] < at_defaultSize['x'] - 0.1) && (_0x2a5bfc['y'] > 1.66 || _0x2a5bfc['y'] < 1.64) && (_0x2a5bfc['y'] < at_defaultSize['y'] || _0x2a5bfc['y'] > at_defaultSize['y'] + 0.1) && (_0x2a5bfc['y'] > 1.51 || _0x2a5bfc['y'] < 1.49)) != at_back) continue;
      }
      const _0x3b5786 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x7afaf4) : 0x0;
      const _0xe662dd = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x7afaf4, 'yaw_rot') : 0x0;
      const _0x5701dd = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x7afaf4, 'pitch_rot') : 0x0;
      const _0x2dd930 = modes['at_mode'] === 0x2 ? 十六言命曰(_0x7afaf4, -0x1) : 0x0;
      _0x292c1['push']({
        'distance': _0x1f91d4,
        'target': _0x7afaf4,
        'damage': _0x2dd930,
        'heal': _0x186663['current'],
        'crosshair': Math['sqrt'](_0xe662dd * _0xe662dd + _0x5701dd * _0x5701dd),
        'items': _0x3b5786,
        'random': 马客在船举(0x0, _0x542956['length'] - 0x1)
      });
    }
    const _0x24540f = [(_0x41cce6, _0x21c303) => _0x41cce6['distance'] - _0x21c303['distance'], (_0x742356, _0x4453b4) => _0x742356['heal'] - _0x4453b4['heal'], (_0x6a49fc, _0x203f63) => _0x6a49fc['damage'] - _0x203f63['damage'], (_0x390aac, _0x44f496) => _0x390aac['crosshair'] - _0x44f496['crosshair'], (_0x254a38, _0x334642) => _0x334642['items'] - _0x254a38['items'], (_0x3f0f0a, _0x2a4155) => _0x3f0f0a['random'] - _0x2a4155['random']];
    _0x292c1['sort'](_0x24540f[modes['at_mode']]);
    if (at_reverse) _0x292c1['reverse']();
    if (at_infCount) return _0x292c1['map'](_0x555da2 => _0x555da2['target']);
    return _0x292c1['slice'](0x0, _0xe7db70)['map'](_0x152e47 => _0x152e47['target']);
  };
  const 归客不发寻 = (_0x95444d = 0x0, _0x5863df = 'Tip', _0x53d1b9, _0x91393f = '§r') => {
    if (!FuncTip) return false;
    if (_0x95444d == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x5863df + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x91393f) + ' ' + _0x53d1b9);
    if (_0x95444d == 0x1) {
      if (modes['tipType_mode'] === 0x0) return '§r' + _0x5863df + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x91393f) + _0x53d1b9;
      if (modes['tipType_mode'] === 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x91393f) + _0x53d1b9;
    }
  };
  const getDistance = (_0x320c04, _0x1a2c7b) => Math['sqrt'](Math['pow'](_0x320c04['x'] - _0x1a2c7b['x'], 0x2) + Math['pow'](_0x320c04['y'] - _0x1a2c7b['y'], 0x2) + Math['pow'](_0x320c04['z'] - _0x1a2c7b['z'], 0x2));
  const 声暗问弹者 = (_0x2a640a, _0x5d3ab7) => {
    if (!才年长色衰(_0x2a640a) || !才年长色衰(_0x5d3ab7)) return Infinity;
    const _0x589f6c = getPos(_0x2a640a);
    const _0x1711cd = getPos(_0x5d3ab7);
    return Math['sqrt'](Math['pow'](_0x589f6c['x'] - _0x1711cd['x'], 0x2) + Math['pow'](_0x589f6c['y'] - _0x1711cd['y'], 0x2) + Math['pow'](_0x589f6c['z'] - _0x1711cd['z'], 0x2));
  };
  const 谁琵琶声停 = (_0x13959d, _0x1e8ea2) => {
    if (!才年长色衰(_0x13959d) || !才年长色衰(_0x1e8ea2)) return Infinity;
    const _0x44e872 = getPos(_0x13959d);
    const _0x2dfe97 = getPos(_0x1e8ea2);
    return Math['sqrt'](Math['pow'](_0x44e872['x'] - _0x2dfe97['x'], 0x2) + Math['pow'](_0x44e872['z'] - _0x2dfe97['z'], 0x2));
  };
  const 欲语迟移船 = (_0x493322, _0x122739, _0x493c4a) => {
    let _0x4b8501 = {
      'fn-set-player-pos': {
        'x': _0x493322,
        'y': _0x122739,
        'z': _0x493c4a
      }
    };
    callModule(0x5, JSON['stringify'](_0x4b8501));
  };
  const getHorizontalDistance = (_0x344c95, _0x2075d0) => Math['sqrt'](Math['pow'](_0x344c95['x'] - _0x2075d0['x'], 0x2) + Math['pow'](_0x344c95['z'] - _0x2075d0['z'], 0x2));
  const setRealPos = (_0x58b8e6, _0x3ce28f, _0x984b2d, _0xe63b71) => setEntityPos(_0x58b8e6, _0x3ce28f, _0x984b2d + setPos_offset, _0xe63b71);
  const setPos = (_0x154672, _0x32be36, _0x117b41) => setRealPos(self_id, _0x154672, _0x32be36, _0x117b41);
  const setMotion = (_0x2f9c04, _0x40c220, _0x37dc13) => setEntityMotion(self_id, _0x2f9c04, _0x40c220, _0x37dc13);
  const 相近邀相见 = _0x2afefc => {
    if (_0x2afefc === '') return [];
    return _0x2afefc['split'](',');
  };
  const 添酒回灯重 = _0x133e2b => {
    if (typeof _0x133e2b != 'object' || _0x133e2b['length'] === 0x0) return '';
    return _0x133e2b['join'](',');
  };
  const 开宴千呼万 = (_0x40503e, _0x3326f6) => {
    let _0x5856a2 = typeof _0x3326f6 === 'object' ? 添酒回灯重(_0x3326f6) : _0x3326f6;
    let _0x13ddd7 = typeof _0x3326f6 === 'object' ? 0x0 : 0x1;
    addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x40503e + '","placeholder":"","default":"' + _0x5856a2 + '"}]}', function (_0x5ddaf1) {
      if (_0x13ddd7 === 0x1) globalThis[_0x40503e] = _0x5ddaf1;
      if (_0x13ddd7 === 0x0) globalThis[_0x40503e] = 相近邀相见(_0x5ddaf1);
      归客不发寻(0x0, 'setValue', _0x40503e + ' §7>>>§r ' + _0x5ddaf1, '§r');
      nx_cfg[_0x40503e] = globalThis[_0x40503e];
    });
  };
  const 唤始出来犹 = _0x51484a => {
    if (typeof _0x51484a != 'string' || _0x51484a === '') return 'None';
    let _0x39a8ae = _0x51484a['match'](/\[(.*?)\]/g);
    if (_0x39a8ae === null) return 'None';
    return _0x39a8ae[0x0];
  };
  const 抱琵琶半遮 = _0x5aab97 => {
    if (!File['exist'](_0x5aab97)) return '{}';
    const _0x2a328e = File['read'](_0x5aab97);
    return _0x2a328e ? _0x2a328e : '{}';
  };
  const 面转轴拨弦 = _0x22b5e7 => {
    const _0x2a026e = getPos(_0x22b5e7);
    let _0x2d681b = _0x22b5e7 === self_id ? Math['floor'](_0x2a026e['y']) - 0x1 : Math['floor'](_0x2a026e['y']);
    return {
      'x': Math['floor'](_0x2a026e['x']),
      'y': _0x2d681b,
      'z': Math['floor'](_0x2a026e['z'])
    };
  };
  const 三两声未成 = (_0x448927, _0x380dca) => {
    if (_0x448927['length'] === _0x380dca['length']) {
      return [];
    }
    const _0x52a99c = _0x448927['length'] >= _0x380dca['length'] ? _0x448927 : _0x380dca;
    const _0x59d827 = _0x448927['length'] < _0x380dca['length'] ? _0x448927 : _0x380dca;
    return _0x52a99c['filter'](_0xcfb32f => !_0x59d827['includes'](_0xcfb32f));
  };
  const 曲调先有情 = (_0x31c35c, _0xf0622b) => {
    const _0x513a8e = aa_speed;
    const _0x1dc520 = aa_g;
    const _0x2e45d7 = Math['atan'](Math['floor'](-_0xf0622b) / _0x31c35c);
    const _0x26ce06 = Math['sqrt'](_0x31c35c * _0x31c35c + _0xf0622b * _0xf0622b);
    const _0x58de48 = Math['atan'](_0x26ce06 / _0x513a8e / 0x2 / _0x513a8e * _0x1dc520);
    return -((_0x58de48 + _0x2e45d7) / Math['PI'] * 0xb4);
  };
  const getFlyTime = (_0x20de20, _0x2f5a3a) => _0x20de20 / _0x2f5a3a;
  const roundAngle = (_0x491a4f, _0x48cf7a) => Math['round'](_0x491a4f / _0x48cf7a) * _0x48cf7a;
  const 弦弦掩抑声 = (_0x452d2b, _0x3e26ff, _0x164282, _0xad66fe = false, _0x26acf6 = false, _0x5f4868 = 0x0, _0x5c1c3d = 0x0) => {
    let _0x547dd9 = typeof _0x3e26ff != 'string' ? _0x3e26ff : getPos(_0x3e26ff);
    let _0x4e7afd = typeof _0x452d2b != 'string' ? _0x452d2b : getPos(_0x452d2b);
    let _0x31f164 = getEntityRot(_0x452d2b);
    if (!_0x547dd9 || !_0x4e7afd) return Infinity;
    const _0x38ce69 = getHorizontalDistance(_0x4e7afd, _0x547dd9);
    if (_0xad66fe) _0x547dd9 = 酒欲饮无管(getEntityMotion(_0x3e26ff), getPos(_0x3e26ff), getFlyTime(_0x38ce69, aa_speed) * 0x14);
    let _0x519a48 = _0x547dd9['x'] - _0x4e7afd['x'];
    let _0x401f81 = _0x4e7afd['y'] - _0x547dd9['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x5c1c3d, _0x5c1c3d) / 0xa;
    let _0x191f8f = _0x547dd9['z'] - _0x4e7afd['z'];
    let _0xdc77b8 = Math['atan2'](_0x191f8f, _0x519a48) * 0xb4 / Math['PI'];
    const _0x354280 = 曲调先有情(_0x38ce69, _0x401f81);
    let _0x585d4b = _0x26acf6 ? _0x354280 : Math['atan2'](_0x401f81, _0x38ce69) * 0xb4 / Math['PI'];
    if (_0x164282 === 'yaw_pos') return _0xdc77b8 > -0xb4 && _0xdc77b8 <= 0x5a ? _0xdc77b8 + 0x5a : _0xdc77b8 - 0x10e;
    if (_0x164282 === 'yaw_rot') {
      _0xdc77b8 = _0xdc77b8 > -0xb4 && _0xdc77b8 <= 0x5a ? _0xdc77b8 + 0x5a : _0xdc77b8 - 0x10e;
      let _0x2aee70 = _0xdc77b8 - _0x31f164['yaw'] + 马客在船举(-_0x5f4868 / 0x2, _0x5f4868 / 0x2);
      return _0x2aee70 > 0x0 ? -_0x2aee70 + 0xb4 : -_0x2aee70 - 0xb4;
    }
    if (_0x164282 === 'pitch_pos') return _0x585d4b;
    if (_0x164282 === 'pitch_rot') return _0x585d4b - _0x31f164['pitch'];
  };
  const 声思似诉平 = (_0x4a6f29, _0xd3f734, _0x333ea6, _0x226d0e) => {
    let _0x1faa23 = Math['abs'](弦弦掩抑声(_0x4a6f29, _0xd3f734, 'yaw_rot'));
    let _0x585135 = Math['abs'](弦弦掩抑声(_0x4a6f29, _0xd3f734, 'pitch_rot'));
    if (_0x226d0e === 0x0) return Math['sqrt'](_0x1faa23 * _0x1faa23 + _0x585135 * _0x585135) < _0x333ea6;
    if (_0x226d0e === 0x1) return Math['abs'](_0x1faa23) < _0x333ea6;
    if (_0x226d0e === 0x2) return Math['abs'](_0x585135) < _0x333ea6;
  };
  const 生不得志低 = _0x293a82 => {
    let _0xbfc656 = '';
    for (let _0x4200ec = 0x0; _0x4200ec < _0x293a82['length']; _0x4200ec += 0x2) {
      _0xbfc656 += String['fromCharCode'](parseInt(_0x293a82['substr'](_0x4200ec, 0x2), 0x10));
    }
    return _0xbfc656;
  };
  const 眉信手续续 = (_0xfc9deb, _0x18bc05, _0x34f2da = 0.5, _0x408ef3 = false) => {
    let _0x4df12c = [];
    let _0x203757 = 弦弦掩抑声(_0xfc9deb, _0x18bc05, 'yaw_pos');
    let _0x5693bb = 弦弦掩抑声(_0xfc9deb, _0x18bc05, 'pitch_pos');
    if (getDistance(_0xfc9deb, _0x18bc05) < _0x34f2da) return [_0xfc9deb];
    for (let _0x4978a5 = 0x0; _0x4978a5 <= getDistance(_0xfc9deb, _0x18bc05); _0x4978a5 += _0x34f2da) {
      let _0x118a51 = 忽闻水上琵(-_0x4978a5, _0xfc9deb, {
        'yaw': _0x203757,
        'pitch': _0x408ef3 ? -_0x5693bb : 0x0
      });
      if (getBlock(_0x118a51['x'], _0x118a51['y'], _0x118a51['z'])['namespace'] === 'minecraft:air') _0x4df12c['push']({
        'x': _0x118a51['x'],
        'y': _0x118a51['y'],
        'z': _0x118a51['z']
      });
    }
    return _0x4df12c;
  };
  const 弹说尽心中 = (_0x596aed, _0x217b76) => {
    let _0x4a21ad = getEntityAttribute(_0x596aed, 'minecraft:health');
    let _0x1a605c = _0x4a21ad['current'];
    let _0x3499bb = _0x4a21ad['max'];
    const _0x301fa3 = _0x1a605c / _0x3499bb;
    switch (_0x217b76) {
      case 0x0:
        return _0x301fa3['toFixed'](0x2) * 0x64 + '%%';
      case 0x1:
        let _0x2a9b65 = '§c';
        for (let _0x2a52a0 = 0x0; _0x2a52a0 < Math['floor'](_0x301fa3 * 0x14); _0x2a52a0++) _0x2a9b65 += '❤';
        return _0x2a9b65 + '§r';
      case 0x2:
        return '§c❤§rx' + Math['floor'](_0x1a605c);
      case 0x3:
        return Math['floor'](_0x1a605c) + '/' + Math['floor'](_0x3499bb);
      default:
        return _0x1a605c;
    }
  };
  const 无限事轻拢 = _0x9f9012 => {
    let _0x8060da = '';
    let _0x44aa00 = '.,?!@":;+-*/=~|_\\^`&#%$·'['split']('');
    for (let _0x1a7602 = 0x0; _0x1a7602 < _0x9f9012; _0x1a7602++) {
      let _0x243a7c = 马客在船举(0x0, _0x44aa00['length'] - 0x1);
      _0x8060da += _0x44aa00[_0x243a7c];
    }
    return _0x8060da;
  };
  const 慢捻抹复挑 = _0x5e981e => {
    for (let _0x424546 = Math['ceil'](-cd_size / 0x2); _0x424546 < Math['floor'](cd_size / 0x2 + 0x1); _0x424546++) {
      for (let _0x58739b = Math['ceil'](-cd_size / 0x2); _0x58739b < Math['floor'](cd_size / 0x2 + 0x1); _0x58739b++) {
        for (let _0x3323eb = Math['ceil'](-cd_size / 0x2); _0x3323eb < Math['floor'](cd_size / 0x2 + 0x1); _0x3323eb++) {
          const {
            x,
            y,
            z
          } = _0x5e981e;
          const _0x390017 = getBlock(x + _0x424546, y + _0x58739b, z + _0x3323eb);
          if (_0x390017['namespace'] === 'minecraft:air') continue;
          if (cd_exclude && _0x5e981e['y'] + _0x58739b <= _0x5e981e['y'] - 0x1) continue;
          if (cd_fake) setBlock(x + _0x424546, y + _0x58739b, z + _0x3323eb, 'air', 0x0);
          if (!cd_fake) destroyBlock(self_id, _0x5e981e['x'] + _0x424546, _0x5e981e['y'] + _0x58739b, _0x5e981e['z'] + _0x3323eb, 0x0);
          if (cd_packet) 人本长安倡(_0x5e981e['x'] + _0x424546, _0x5e981e['y'] + _0x58739b, _0x5e981e['z'] + _0x3323eb, true, true);
        }
      }
    }
  };
  const 初为霓裳后 = () => {
    if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
    if (ia_comeClick) {
      buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
      if (!ia_nopacket && modes['ia_mode'] === 0x0) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
    }
    if (ia_back) {
      for (let _0x46e77c = 0x0; _0x46e77c < ia_move; _0x46e77c++) {
        if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
      }
      setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
    }
    InfiniteAura_backMot = null;
    InfiniteAura_backPos = null;
  };
  const 六幺大弦嘈 = _0x47c54f => {
    let _0x3ff041 = '';
    let _0x6449a7 = _0x47c54f['split']('');
    for (let _0x412b57 in _0x6449a7) {
      let _0x35fdea = _0x6449a7[_0x412b57]['toUpperCase']();
      if (_0x412b57 != _0x6449a7['length'] - 0x1) {
        if (_0x412b57 % 0x2 === 0x1) _0x3ff041 += _0x35fdea + ' ';else _0x3ff041 += _0x35fdea;
      } else _0x3ff041 += _0x35fdea;
    }
    if (rpc_remark) {
      let _0x1a51b6 = _0x3ff041['split'](' ');
      let _0x4b0ebd = '';
      for (let _0x51b6ee in _0x1a51b6) _0x4b0ebd += _0x1a51b6[_0x51b6ee] + '(' + 生不得志低(_0x1a51b6[_0x51b6ee]) + ') ';
      return _0x4b0ebd;
    } else return _0x3ff041;
  };
  const 嘈如急雨小 = (_0x1b5661, _0x106fc8, _0x49ca0c = false) => {
    setEntityTarget(_0x1b5661, _0x106fc8);
    if (_0x49ca0c) setEntityTarget(_0x106fc8, _0x1b5661);
  };
  var self_id = getLocal(otherId);
  var prev_id = getLocal(otherId);
  var prev_heal = 0x14;
  var last_world_player = [];
  var self_pos = getEntityPos(self_id);
  var prev_pos = getEntityPosPrev(self_id);
  var kills = 0x0;
  var seconds = 0x0;
  var ticks = 0x0;
  var self_itemCount = 0x0;
  var prev_itemCount = 0x0;
  var ct_team = 'NoveXare';
  var death_pos = {};
  var prev_item = {};
  var gd_ping = 0x0;
  var gd_ping1 = 0x0;
  var gd_ping2 = 0x0;
  var attack_list = [];
  var self_moving = false;
  var self_item = {};
  var prev_ground = true;
  var max_damage = 0x0;
  var max_armor = [0x0, 0x0, 0x0, 0x0];
  var nx_nbts = {};
  var nx_paths = getResource() + '/NoveXare';
  var nx_screen = getScreenSizeData();
  var nx_arraylist = JSON['parse'](抱琵琶半遮(nx_paths + '/FuncArrayList.json'));
  var nx_funcid = JSON['parse'](抱琵琶半遮(nx_paths + '/RunAwayFunc.json'));
  var nx_keys = [];
  var nx_cfgs = getResource() + '/NX_Config';
  var nx_ui = JSON['parse'](抱琵琶半遮(getResource() + '/ui/ui_definition.json'));
  var nx_blocks = 抱琵琶半遮(getResource() + '/NoveXare/blocks.json');
  var nx_binds = {};
  var nx_goal = null;
  var nx_raBinds = [];
  var nx_cfg = {
    'binds': {},
    'key_binds': [],
    'nx_raBinds': [],
    'name': getEntityName(self_id)
  };
  var modes = {};
  var nx_goalSpeed = 1.5;
  var nx_isBind = null;
  var nx_armors = ['helmet', 'chestplate', 'leggings', 'boots'];
  let nx_defaultName = getData('nx_defaultCfg', 'null');
  let nx_defaultCfg = nx_defaultName !== '' ? 抱琵琶半遮(nx_cfgs + '/' + nx_defaultName + '.json') : '{}';
  var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
  var PacketCfg = JSON['parse'](抱琵琶半遮(nx_paths + '/PacketManager.json'));
  var PacketTranslate = JSON['parse'](抱琵琶半遮(getResource() + '/ui/conf_packet.json'))['packets'];
  var cleaner_path = getResource() + '/NoveXare/Cleaner.json';
  var PacketTmp = {
    'send': {},
    'receive': {}
  };
  var srp_ignore = false;
  var srp_id = true;
  var sp_id = true;
  var srp_name = true;
  var srp_trans = true;
  var sp_name = true;
  var sp_trans = true;
  var srp_save = false;
  var sp_save = false;
  var srp_intercept = false;
  var sp_ignore = false;
  var sp_intercept = false;
  var sp_statistic = false;
  var srp_statistic = false;
  var dr_mot = 1.3;
  var {
    clear_config,
    trash_slot
  } = JSON['parse'](抱琵琶半遮(cleaner_path));
  var ic_max = 0x24;
  var ic_delay = 0x1;
  modes['ic_mode'] = 0x0;
  var cleaner_slot = 0x23;
  var ic_bow = false;
  var ic_chest = false;
  var ic_change = false;
  var ic_move = true;
  var {
    SmartInvCfg,
    move_armor_slot
  } = JSON['parse'](抱琵琶半遮(nx_paths + '/SmartInv.json'));
  var armor_slot = 0x0;
  var da_bow = false;
  var da_enchant = true;
  var da_texture = true;
  var da_weapon = true;
  var da_armor = true;
  var da_chest = false;
  var da_move = true;
  var da_change = false;
  var da_delay = 0x1;
  var da_slot = 0x1;
  var motion_list = [];
  var ca_chest_pos = [];
  var isChest = false;
  var chestStates = {
    'packet': false,
    'click': false
  };
  var ca_range = 0x3;
  var ca_wall = false;
  var ca_exclude = true;
  var ca_fov = 0x5a;
  var ca_rot = false;
  var ca_check = false;
  var ca_block = false;
  var mine_list = [];
  var mine_destroy = false;
  var mine_name = null;
  var mine_current = 0x0;
  var mine_num = 0x14;
  var mine_distance = 0x5;
  var mine_speed = 0x5;
  var mine_white = [];
  var mine_black = [];
  var dl_list = [];
  var di_speed = 0x1;
  var sp_file = null;
  var sp_target = false;
  var sp_entity = false;
  var sp_vec = 0x1;
  var sp_exclude = false;
  var sp_data = [];
  var sp_count = 0x1;
  var sp_yaw = -0xb4;
  var sp_loop = false;
  var sp_distance = 0x5;
  var sp_posList = [];
  var sp_all = true;
  var sp_type = 0x51;
  var sp_range = 0x8;
  var sp_space = 0x10;
  var sp_large = false;
  var sp_level = 0x0;
  var sp_y = 0x0;
  var otherId = null;
  var fl_abnormal = 0x5;
  var fl_t = 0x0;
  var fl_show = false;
  modes['fl_mode'] = 0x0;
  var fl_reverse = true;
  var fakelag_status = false;
  var fl_normal = 0x14;
  var at_defaultSize = {
    'x': 0.6,
    'y': 1.8
  };
  var at_regex = ['player', 'entity', '主城', '商店', '[LV', 'CIT-', 'ˉ', '－', '%', '-', '%'];
  var at_typeWhite = [];
  var at_hide = true;
  var at_lists = [];
  var at_whileLists = [];
  var at_maxCount = 0x3;
  var at_maxDist = 0x6;
  var at_minDist = 0x0;
  var at_entity = false;
  var at_player = true;
  var at_maxY = 0x17c;
  var at_minY = -0x3c;
  var at_infY = true;
  var at_inf = false;
  var at_size = true;
  var at_fov = true;
  var at_infCount = false;
  var at_heal = true;
  var at_BWM = true;
  modes['at_mode'] = 0x0;
  var at_regexEnable = true;
  var at_back = false;
  var at_reverse = false;
  var at_wall = false;
  var at_ground = false;
  var at_name = true;
  var at_delay = 0x1;
  var at_lock = false;
  var debuff = [0x2, 0x4, 0x7, 0x9, 0xf, 0x11, 0x12, 0x13, 0x14, 0x1b, 0x1f, 0x21];
  var gm_pos = {};
  var gm_mot = {};
  var gm_back = false;
  var gm_local = false;
  var gm_tick = 0x0;
  var gm_move = false;
  var gm_ground = false;
  var gm_y = 0x0;
  var gm_cycle = 0x1;
  var gm_delay = 0x1;
  var gm_xz = false;
  var gm_edit_y = true;
  var gm_count = 0x5;
  modes['gm_mode'] = 0x0;
  var sca_y = false;
  var sca_count = false;
  var sca_yaw = 0x0;
  var sca_len = 0x2;
  var sca_prec = 0x1e;
  var sca_surface = true;
  var sca_fake = false;
  var sca_move = true;
  var sca_moveRot = false;
  var sca_clickRot = false;
  var sca_up = false;
  var sca_block = true;
  var sca_auto = false;
  var sca_keep = false;
  var sca_current = 0x0;
  var sca_pitch = 0x3c;
  var sca_acc = false;
  var rpc_config = JSON['parse'](抱琵琶半遮(getResource() + '/NoveXare/PyRpc_Config.json'));
  var rpc_black = ['kick', 'movemcpkick', 'rank', 'music', 'setcan'];
  var rpc_white = [];
  var rpc_sendBlack = ['pongggg', 'clicked'];
  var rpc_sendWhite = [];
  var rpc_recBlack = [];
  var rpc_recWhite = [];
  var rpc_t = 0x0;
  var prev_rpc = {};
  var rpc_repeat_times = 0x1;
  var rpc_exclude = false;
  var rpc_showDisintercept = false;
  var rpc_showIntercept = false;
  modes['rpc_mode'] = 0x0;
  var rpc_tipWhite = ['refresh', 'player', 'unload', 'upload', 'vip', 'music', 'textboard', 'scoreboard', 'start', 'condition'];
  var rpc_cycle = false;
  var rpc_repeat_ticks = 0x1;
  var rpc_id = true;
  var rpc_remark = false;
  var rpc_store = false;
  var rpc_intercept = false;
  var rpc_temp = [];
  var rpc_send = true;
  var rpc_rec = false;
  var rpc_tip = false;
  var rpc_record = false;
  var fc_pos = {};
  modes['fc_mode'] = 0x0;
  var fc_draw = false;
  var fc_dist = false;
  var fmo_pos = {};
  modes['av_mode'] = 0x0;
  var av_pos = [];
  var av_running = false;
  var av_minY = 0.8;
  var av_derp = false;
  var aa_pos = {};
  var shift_tick = 0x0;
  var shift_num = 0x64;
  var cd_fake = false;
  var cd_size = 0x1;
  var cd_delay = 0x1;
  var cd_exclude = false;
  var lr_delay = 0x0;
  var lr_random = 0x1;
  var mini_title = true;
  var mini_tip = ['重重一击', '两连击', '三连击', '非常犀利', '无人能挡', '主宰比赛', '迈向超神', '正在暴走', '如神一般', '已经超神'];
  var mini_tick = 0x0;
  var mini_delay = 0x0;
  var mini_kills = 0x0;
  var fst_y = 0x0;
  var fst_x = 0x0;
  var fst_time = 0x14;
  modes['tip_mode'] = 0x0;
  var as_config = JSON['parse'](抱琵琶半遮(nx_paths + '/Staff.json'));
  modes['as_mode'] = 0x0;
  modes['anti_mode'] = 0x0;
  var as_ground = false;
  var as_hide = false;
  var bc_select = false;
  var bc_packet = false;
  var bc_delay = 0x1;
  var ac_pos = [];
  var rgb_color = '4c6e2a3b195d591b3a2e6c4'['split']('');
  var rgb_l = 0x0;
  var rgb_t = 0x0;
  var rgb_cycle = 0x2;
  var Edit_Y = 0x55;
  var ac_auto = false;
  var ab_delay = 0x1;
  var ac_delay = 0x1;
  var ac_count = 0x1;
  var ac_tp = false;
  var ca_distTo = 0x3;
  var ab_auto = false;
  var aj_speed = 0x5;
  var aj_height = 0x2a;
  var arrow_rot = {};
  var select_slot = 0x0;
  var select_t = 0x0;
  var selectitems = [];
  var hs_slot = [];
  var hs_use = false;
  var hs_delay = 0x1;
  modes['ca_mode'] = 0x0;
  var ca_delay = 0x1;
  var gg_list = ['easecation:all_games', 'minecraft:emerald'];
  modes['gg_mode'] = 0x0;
  var aa_prec = 0x0;
  var aa_min = 0x14;
  var aa_max = 0x14;
  var aa_pred = false;
  var aa_auto = false;
  var aa_range = 0x5;
  var aa_fov = 0x5a;
  var aa_randomY = 0x0;
  var aa_xz = 0x0;
  var aa_speed = 0x64;
  var aa_g = 0x10;
  var aa_throw = false;
  var aa_silent = false;
  var aa_y = 0x14;
  modes['AssistAim_mode'] = 0x1;
  var ap_autobag = false;
  var ap_min = 0x3;
  var ap_slot = -0x1;
  var ie_drop = true;
  var ie_data = '0';
  var ie_delay = 0x14;
  modes['itemedit_mode'] = 0x0;
  var nf_max = 0.42;
  modes['nf_mode'] = 0x0;
  var cs_text = 'This is a suffix';
  var lp_offset = 0x0;
  var lp_type = 0x3;
  var lp_size = 0x1;
  var at_remove = false;
  var aaa_aps = 0xa;
  var aaa_fov = 0xf;
  var aa_use = false;
  var aim_t0 = -Infinity;
  var aim_t1 = 0x0;
  var rid_random = false;
  var rid_y = 0x1;
  var bt_lock = false;
  modes['bm_mode'] = 0x0;
  var as_gradually = true;
  var as_type = 0x51;
  var as_level = 0x0;
  var cw_size = 0x6;
  var srp_y = 0x0;
  var srp_len = 0x0;
  var srp_speed = 0x5;
  var bhop_heigh = 0.42;
  var bhop_pos = {
    'x': 0x0,
    'y': 0x0,
    'z': 0x0
  };
  var bhop_mot = {
    'x': 0x0,
    'y': 0x0,
    'z': 0x0
  };
  var bhop_speed = 0x5;
  modes['bhop_mode'] = 0x0;
  var bhop_airjump = false;
  var ka_empty = 0x0;
  var ka_delay = 0x0;
  var ka_times = 0x1;
  var ka_balance = false;
  var ka_max = 0xa;
  var ka_min = 0xa;
  var ka_fov = 0x5a;
  var ka_range = 0x4;
  var ka_infDist = false;
  var KillAura_d_1 = [];
  var KillAura_d_2 = [];
  var ka_close = true;
  var ka_fall = false;
  var ka_third = false;
  var random_num = 0x0;
  var random_delay = 0x0;
  var ka_wall = true;
  var nl_water = {};
  var nl_lava = {};
  var ia_random = false;
  var ia_packet = 0x3;
  var ia_nopacket = false;
  var ia_jump = false;
  var ia_range = 0x64;
  var ia_move = 0x1;
  var ia_return = 0x1;
  var ia_multi = false;
  var ia_back = true;
  var ia_switch = 0x0;
  var ia_delay_r = 0xa;
  var ia_tmp_list = [];
  var ia_targets = [];
  var ia_delay = 0x5;
  var ia_tick = 0xa;
  var ia_attack = 0x1;
  modes['ia_mode'] = 0x1;
  var InfiniteAura_backPos = null;
  var InfiniteAura_backMot = null;
  var ia_toClick = true;
  var ia_comeClick = true;
  var ia_offset = 0x0;
  var ia_fix = true;
  var ad_min = 0xa;
  modes['ad_mode'] = 0x0;
  modes['person_mode'] = 0x0;
  var aai_len = 0x3;
  var aai_max = 0x2;
  var aai_current = -0xb4;
  var sur_speed = 0x5;
  var aai_min = 0x0;
  var aai_speed = 0x5;
  var aai_h = 0x0;
  var aai_reverse = false;
  modes['sur_mode'] = 0x0;
  var srp_current = -0xb4;
  var srp_type = 0x13;
  var srp_size = 0x1;
  var srp_move = 0x0;
  var spr_speed = 0x5;
  var spr_hor = false;
  var spr_packet = false;
  var spr_auth = false;
  modes['sprint_mode'] = 0x0;
  var spr_nowall = false;
  var spr_move = false;
  var fly_playerAuth = false;
  var fly_moveplayer = false;
  var fly_speed = 0xf;
  var fly_move = false;
  var fly_zero = true;
  var fly_y = false;
  var fly_ud = false;
  var fly_ud_val = 0xa;
  var fly_current = 0x1;
  var fly_air = false;
  modes['fly_mode'] = 0x0;
  var up_down_speed = 0x1;
  var tra_range = 0x5;
  var tra_speed = 0x5;
  var km_text = 'Lmao';
  var km_hide = false;
  var cm_black = [];
  var cm_length = 0x64;
  var cm_self = false;
  var cm_target = '';
  var cm_fake = false;
  var cm_other = false;
  var cm_repeat_times = 0x1;
  var cm_list = {
    'self': null,
    'other': null
  };
  var isRepeating = false;
  var suck_range = 0x3;
  var sd_speed = 0x5;
  var kd_distance = 0x3;
  var kd_only_ground = false;
  var kd_speed = 0x5;
  var kd_anti = false;
  var ka_packet = 0x1f4;
  var ka_multi = false;
  var ka_count = 0x32;
  var ka_text = '🤓';
  var ka_repeat = 0x32;
  var ka_fake = false;
  var ka_target = false;
  var ka_player = false;
  modes['ka_mode'] = 0x0;
  var cs_packet = 0x1f4;
  var cs_multi = false;
  var cs_count = 0x32;
  modes['cs_mode'] = 0x0;
  var hb_hor = 0x2;
  var hb_y = 1.8;
  modes['health_mode'] = 0x0;
  var hj_height = 0.42;
  modes['cpvp_mode'] = 0x0;
  var lj_len = 0x5;
  var lj_y = 0.5;
  var ckb_len = 0x1;
  var ckb_y = 0.5;
  var spm_text = 'NoveXare YYDS';
  var spm_delay = 0x14;
  var spm_random = false;
  var spm_gradual = false;
  var spm_rainbow = false;
  var spm_attack = false;
  var spm_file = false;
  var spm_count = 0x1;
  var rush_length = 0x5;
  var fb_len = 0x4;
  var fb_delay = 0xa;
  var fb_t = 0x0;
  var fb_list = [];
  var fb_success = true;
  var rc_speed = 0x8;
  var rc_lock = 0x3;
  var rc_follow = true;
  var rc_bhop = true;
  var rc_ahop = false;
  var rc_legal = true;
  modes['rocker_mode'] = 0x0;
  modes['rc_mode'] = 0x0;
  var rc_surround = true;
  var rc_dist = 1.5;
  var rc_angles = {};
  var rc_directions = {};
  var rc_uds = {};
  var rc_relative = true;
  var rc_range = 0xb4;
  var rc_roll = 0x0;
  var rc_yaw = getEntityRot(self_id)['yaw'];
  var rc_pitch = 0xb4 - (getEntityRot(self_id)['pitch'] + 0x5a);
  var Camera_anchor_pos = {
    'x': 0x0,
    'y': 0x0,
    'z': 0x0
  };
  var rc_boost = false;
  var rc_y = 0.42;
  modes['LookTP_mode'] = 0x0;
  var bk_bed = true;
  var bk_chest = true;
  var bk_tool = false;
  var bk_range = 0x5;
  var bk_last = 0x1;
  var bk_pos = null;
  var bk_timer = 0x0;
  var bk_up = false;
  var bk_action = false;
  var bk_auth = false;
  var cd_packet = false;
  var bk_auto = false;
  var bk_origin = false;
  var as_fake = false;
  var as_near = false;
  var as_keep = true;
  var as_block = true;
  var as_water = false;
  var as_minY = 0.42;
  var ap_count = 0x14;
  var ap_type = 0x3;
  var tp_size = 0x1;
  var tp_type = 0x0;
  var click_num = 0x0;
  var click_t = 0x0;
  var isClicking = false;
  var ka_show = true;
  var attack_tick = 0x0;
  var attack_ticks = 0x0;
  var isAttacking = false;
  var attack_frequency = 0x0;
  var real_attack = 0x0;
  var last_attack_target = [];
  var show_real_aps = false;
  var show_pos = false;
  var show_item = false;
  var show_speed = false;
  var show_target_dis = false;
  var show_player_list = false;
  var show_attack_rate = false;
  var show_ping = false;
  var show_detail_item = false;
  var show_self_health = false;
  var show_resources = false;
  var show_time = true;
  var show_kill_num = false;
  var show_real_time = false;
  var ab_running = false;
  var tt_speed = 0.5;
  var arp_type = 0xc;
  modes['avoid_mode'] = 0x0;
  var at_range = 0x5;
  var cs_delay = 0x0;
  var cs_close = false;
  var cs_maxCount = 0x24;
  var cs_current = 0x0;
  var cs_tick = 0x1;
  var cs_timer = 0x1;
  var cs_slot = 0x0;
  var cs_sort = true;
  var cs_max = 0x23;
  var cs_min = 0x0;
  var cs_min_damage = 0x0;
  var cs_min_lasting = 0x0;
  var cs_weapon = true;
  var cs_armor = true;
  var cs_other = true;
  var cs_white = [];
  var cs_black = ['planks', 'stone', 'apple', 'ender', 'sword', 'helmet', 'leggings', 'chestplate', 'boots', 'totem'];
  var ri_click = false;
  var ri_save = false;
  var fb_legal = false;
  var fb_seek = 0x4;
  var fb_moveSpeed = 0x5;
  var fb_heal = 0x0;
  var fb_jump = false;
  var fb_ka = true;
  var fb_aa = false;
  var fb_kd = false;
  var fb_combo = false;
  var fb_y = 0.42;
  var fb_sca = false;
  var fb_chest = false;
  var fb_jumpRate = 0x21;
  var fb_moveRate = 0x21;
  var fb_fishRate = 0x0;
  var fb_snowRate = 0x0;
  var fb_randJump = false;
  var fb_randMove = false;
  var fb_weapon = false;
  var mt_custom = 0x19;
  modes['mt_time'] = 0x0;
  var aj_y = 0x2a;
  var akb_hor = 0x64;
  var akb_y = 0x64;
  var tr_g = 0x14;
  var tr_speed = 0x64;
  var tr_len = 0xc8;
  var tr_type = 0x37;
  var tr_offset = 0x14;
  var tr_show = true;
  var tr_dens = 0xa;
  modes['tr_mode'] = 0x0;
  var ad_sword = false;
  var cc_status = false;
  var fpsr_rate = 0xa;
  var fb_speed = 0x5;
  modes['custom_mode'] = 0x0;
  var ci_slot = 0x0;
  modes['fakeTip_mode'] = 0x0;
  var current_poem = '';
  var tip_t1 = 0xc9;
  var BalanceTimer_t = 0x0;
  var BalanceTimer_st = false;
  var sv_player = false;
  var sv_id = false;
  var ms_speed = 0x11;
  var sm_attack = false;
  var sm_destroy = false;
  var sm_build = false;
  var sm_hurt = false;
  var sm_switch = false;
  var sm_kill = false;
  var av_x = 0xa;
  var av_z = 0xa;
  var av_y = 0xa;
  var av_id = null;
  var av_list = [];
  var cm_x = 0x19;
  var cm_y = 0x19;
  var cm_z = 0x19;
  var cm_pitch = 0x5a;
  var cm_anchor_y = 0xf;
  var cm_roll = 0x0;
  var cm_unlock = false;
  var cm_pos = {
    'x': 0x0,
    'y': 0x0,
    'z': 0x0
  };
  var cm_moverange = 0x5;
  var cm_editanchor = false;
  var cm_actioncamera = false;
  var cm_follow = false;
  var cm_ts_delay = 0x1;
  var cm_attack = null;
  var cm_transfer = false;
  var cm_id = self_id;
  var sa_fov = 0x32;
  var sa_size = 0.8;
  var sa_range = 0x4;
  var dp_pitch = 0x5a;
  var dp_yaw = -0xb4;
  modes['derp_mode'] = 0x0;
  var dp_bodySpeed = 0x1e;
  var dp_headSpeed = 0x5;
  var dp_head = false;
  var dp_body = true;
  var dp_lock = true;
  var dp_random = false;
  var TestModule = false;
  var ac_min = 0xa;
  var ac_aimed = false;
  var ac_fov = 0xf;
  var ac_max = 0xa;
  var ac_t_1 = 0x0;
  var ac_excludeY = false;
  var ac_click = false;
  var ac_use = false;
  var ac_times = false;
  var ac_t_2 = -Infinity;
  var nc_depart = false;
  var nc_bypass = true;
  var nc_dist = 0xf;
  var nc_blink = true;
  var nc_pos = {};
  var sl_hook = false;
  var Sauths = getData('sauths', '');
  var bantip = '';
  var am_count = 0x1;
  var am_id = 0x0;
  var am_value = 0x0;
  var am_delay = 0x0;
  var am_tick = 0x0;
  var am_file = false;
  var pam_delay = 0x1;
  var pam_id = 0x0;
  var pam_value = 0x0;
  var pam_array = [0x0];
  var pam_count = 0x1;
  var tower_continuously = true;
  var tower_delay = 0xa;
  var teams_name = false;
  var teams_armor = true;
  var teams_blur = false;
  var teams_self = {};
  var teams_slot = 0x0;
  var te_all = false;
  var te_two = false;
  var te_target = null;
  var btc_pos = null;
  var enc_target = null;
  var re_cancel = false;
  var ral_length = 0x5;
  var ral_num = 0x3;
  var sm_speed = 0xa;
  var sm_circulate_last_tick = 0x14;
  var sm_onhurt = false;
  var sm_onhit = false;
  var sm_onkill = false;
  var sm_circulate_tick = 0x3c;
  var sm_circulate_t = 0x0;
  var sm_circulate = false;
  var sm_status = false;
  var fc_target = '';
  var fw_target = '';
  var do_density = 0x14;
  var do_s_axis = 0x1;
  var do_l_axis = 0x1;
  var do_pos = [0x0, 0x0, 0x0];
  var do_delay = 0x64;
  var do_jump = true;
  var do_lock = true;
  var do_cycle = false;
  var ir_move = false;
  var ir_min = 0x0;
  var ir_max = 0x168;
  var ir_speed = 0x1;
  var ir_angle = 0x0;
  var ir_isBack = false;
  modes['aa_mode'] = 0x0;
  var aa_delay = 0x1;
  var aa_times = 0x3;
  var sm_proportion = 0x5;
  var sm_size = 0x64;
  var sm_entity = false;
  var sm_target = true;
  var sm_player = false;
  var at_max_text = 0x5;
  var at_max_time = 0x14;
  var at_current = 0x0;
  var rt_target = false;
  var rt_y = false;
  var rt_delay = 0xa;
  var rt_range = 0x5;
  var sp_speed = 0x5;
  var as_time = 0x14;
  var as_time_t = 0x15;
  var am_text = '是不是';
  var th_dist = true;
  var th_pos = false;
  var th_carry = true;
  var th_health = true;
  var th_name = true;
  modes['th_health_mode'] = 0x0;
  modes['th_select_mode'] = 0x0;
  var th_x = 0x3c;
  var th_y = 0x28;
  var th_a = 0x0;
  var th_r = 0x64;
  var th_g = 0x64;
  var th_b = 0x64;
  var th_target = null;
  var th_id = createText('', 'Center', th_x, th_y);
  var nh_exclude = false;
  var fm_auto = false;
  var fm_cycle = 0x14;
  var fm_range = -0x1;
  var fm_item = false;
  var fm_pos = null;
  var sb_length = 0x1;
  var sb_offset = 0x0;
  var sb_ud = 0x0;
  var sb_exclude = true;
  var sb_hide = false;
  var sb_tick = 0x5;
  modes['sb_mode'] = 0x0;
  var sb_pos = null;
  var sb_rot = false;
  var sb_custom = false;
  var sb_rc_yaw = 0x0;
  var fb_attack = 0x1;
  var fb_ishurt = false;
  var fb_range = 0x7;
  modes['fb_mode'] = 0x0;
  var dc_pos = [];
  var nl_offset = 0x1;
  var rmer_item = false;
  var rmer_entity = false;
  var as_range = 0x14;
  modes['tipType_mode'] = 0x0;
  var tip_x_offset = 0x3c;
  var tip_y_offset = 0x28;
  var tip_a = 0x0;
  var tip_r = 0x64;
  var tip_g = 0x64;
  var tip_b = 0x64;
  var tip_id = createText('', 'Center', tip_x_offset, tip_y_offset);
  var bn_max = 0x5;
  var bn_min = 0x5;
  var bn_range = 0x32;
  var bn_exclude = false;
  var bn_intercept = false;
  var bn_format = '[名字]: [消息]';
  var bn_list = [];
  var CPvP = false;
  var ECAttack = false;
  var Swing = true;
  var BlockClicker = false;
  var BypassMute = false;
  var FuncMessage = true;
  var KillAura = false;
  var AutoTarget = true;
  var FuncTip = true;
  var vec_bhop = false;
  var Velocity = false;
  var AutoDo = false;
  var ClickTarget = false;
  var ClickWhiteList = false;
  var AutoClicker = false;
  var NoLiquid = false;
  var ShowTargetList = false;
  var Rider = false;
  var ShowInfo = false;
  var Jesus = false;
  var Teams = false;
  var AssistAim = false;
  var ClickTeam = false;
  var AssAssInate = false;
  var Surround = false;
  var JetPack = false;
  var Trace = false;
  var Suspend = false;
  var InfiniteAura = false;
  var GodMode = false;
  var Fly = false;
  var SafeWalk = false;
  var KillMessage = false;
  var Sucker = false;
  var Scaffold = false;
  var SlowDown = false;
  var AirJump = false;
  var KeepDistance = false;
  var Crasher = false;
  var HitBox = false;
  var PauseNX = false;
  var InvCleaner = false;
  var LongJump = false;
  var AntiVoid = false;
  var CustomKB = false;
  var SmartWeapon = false;
  var PyRpcManager = false;
  var Spammer = false;
  var Derp = false;
  var AttackSelf = false;
  var aai_random = false;
  var ResShop = false;
  var AutoSave = false;
  var AutoSaveCfg = false;
  var AutoLoadCfg = false;
  var FastBuild = false;
  var RecordInfo = false;
  var NoFall = false;
  var Rocker = false;
  var ShowHurt = false;
  var Breaker = false;
  var FreeCam = false;
  var AutoBed = false;
  var TargetParticle = false;
  var SurroundParticle = false;
  var ClickDestroy = false;
  var AutoDestroy = false;
  var AutoCrystal = false;
  var AutoBomb = false;
  var AvoidAttack = false;
  var AttackRender = false;
  var ThrowTracer = false;
  var ThrowFly = false;
  var ArrowView = false;
  var CrystalAura = false;
  var ArrowParticle = false;
  var Remover = false;
  var NoHider = false;
  var FarmAura = false;
  var DropRes = false;
  var PlayerAuthInputPacket = false;
  var PVPDaLao = false;
  var ActivitySender = false;
  var ShowClickBlock = false;
  var SmartInv = false;
  var AttackAim = false;
  var FakeLag = false;
  var FakeWater = false;
  var DeathInfo = false;
  var LocalRespawn = false;
  var AttackParticle = false;
  var AutoVoid = false;
  var Tower = false;
  var Hover = false;
  var ChestAura = false;
  var ShowPressKey = false;
  var ShowUpliftKey = false;
  var ShowClientMessage = false;
  var ShowUI = false;
  var ShowCommand = false;
  var ShowCommandOutput = false;
  var WorldPlayerInfo = false;
  var TargetHealth = false;
  var RainbowTip = false;
  var RandomDrop = false;
  var RandomSelect = false;
  var OtherUser = false;
  var AvoidThrow = false;
  var Miner = false;
  var ChestStealer = false;
  var Criticals = false;
  var FightBot = false;
  var AttackSound = false;
  var SoundPlayer = false;
  var InteractAura = false;
  var FPSReducer = false;
  var ChatManager = false;
  var AvoidInvalid = false;
  var CheckAxe = false;
  var NoAnyReceive = false;
  var AutoJump = false;
  var AntiKB = false;
  var TrajectoryRender = false;
  var KickAura = false;
  var HotbarSelector = false;
  var AutoSelect = false;
  var AutoArmor = false;
  var AutoGG = false;
  var LineParticle = false;
  var FlexibleMove = false;
  var AntiStaff = false;
  var FakeBuilder = false;
  var ClickBlock = false;
  var FakeTip = false;
  var FakeWhisper = false;
  var FakeChat = false;
  var BalanceTimer = false;
  var ShowVariable = false;
  var ShowDestroyBlock = false;
  var ClickTP = false;
  var NightVision = false;
  var ModifySwing = false;
  var ModifyTime = false;
  var ShowGameInfo = false;
  var ShowEntityAnime = false;
  var ChunkRender = false;
  var ChatSuffix = false;
  var FakeMove = false;
  var AutoShifter = false;
  var ActionManager = false;
  var PlayerAuthManager = false;
  var FunnyKill = false;
  var LockPerson = false;
  var NoDebuff = false;
  var ShortList = false;
  var getDelay = false;
  var MoveJump = false;
  var SafeAttack = false;
  var FastStop = false;
  var HurtJump = false;
  var FakeMotion = false;
  var GetCommand = false;
  var ShowReceivePacket = false;
  var ShowSendPacket = false;
  var ArrayList = true;
  var NoCamShake = false;
  var DumpResponseSauth = false;
  var DumpCookieSauth = false;
  var DumpRequestSauth = false;
  var AutoPot = false;
  var SpinAttack = false;
  var NoWall = false;
  var TargetEdit = false;
  var RiderEdit = false;
  var InfinityExp = false;
  var NoHunger = false;
  var CameraManager = false;
  var SoundManager = false;
  var ClickSwing = false;
  var FuncSwitchTip = true;
  var ClickRot = false;
  var CustomItem = false;
  var EntityNBTCopy = false;
  var BlockTagCopy = false;
  var DeleteDummy = false;
  var BJDEscape = false;
  var AutoCamera = false;
  var RandomArrayList = false;
  var SlowMotion = false;
  var DeviceShake = false;
  var DrawOval = false;
  var ItemRotation = false;
  var ShowNowTime = false;
  var NoClip = false;
  var SmallMap = false;
  var AntiText = false;
  var RandomTP = false;
  var AirStuck = false;
  var Spider = false;
  var AttackMessage = false;
  var TimePause = false;
  var TargetHud = false;
  var ShadowBoomer = false;
  var FightBack = false;
  var ShowMoveContainer = false;
  var AutoSwing = false;
  var DeadCross = false;
  var AdminShow = false;
  var getSelf = 0x64;
  var setPos_offset = 0x0;
  var getPos_offset = 0x0;
  var BulletNotice = false;
  function onTickEvent() {
    try {
      if (PauseNX) return;
      let _0x482098 = [];
      self_id = getLocal(otherId);
      self_pos = getPos(self_id);
      prev_pos = getEntityPosPrev(self_id);
      teams_self = 音铮铮然有(getPlayerArmorItem(self_id, teams_slot));
      let _0x14266b = getEntityAttribute(self_id, 'minecraft:health');
      let _0x2a8344 = getEntityMotion(self_id);
      self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
      if (FastStop && !self_moving) setMotion(0x0, _0x2a8344['y'], 0x0);
      let _0x25ed14 = getCameraRotation();
      let _0x5610cd = {
        'yaw': _0x25ed14['yaw'] > 0x0 ? 0xb4 - _0x25ed14['yaw'] : -0xb4 - _0x25ed14['yaw'],
        'pitch': -_0x25ed14['pitch']
      };
      let _0x37cf15 = getDistance(self_pos, prev_pos) / 0.05;
      let _0x415153 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
      let _0x41eeb6 = 瑟瑟主人下(self_id);
      let _0x2e46c1 = 面转轴拨弦(self_id);
      let _0x186700 = getWorldPlayerList();
      let _0x1418ab = getEntityIsGround(self_id);
      if (ticks % getSelf == 0x0) {
        if (getDelay) {
          gd_ping1 = Date['now']();
          curl_get('https://www.baidu.com', {}, (_0x5d68ba, _0x22ad49) => globalThis['gd_ping2'] = Date['now']());
          gd_ping = Math['abs'](gd_ping2 - gd_ping1);
        }
        if (InvCleaner && ic_change || SmartInv && da_change) self_itemCount = getPlayerItemCount(self_id);
      }
      self_item = getCarried(self_id);
      if (_0x14266b['current'] - prev_heal > 0x8) {
        if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
        if (LocalRespawn) setTimeout(() => {
          departCamera();
          setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
          setTimeout(() => resetCamera(), 0xc8);
        }, 0x32 * lr_delay);
        if (DeadCross) dc_pos['push'](death_pos);
      } else if (_0x14266b['current'] < prev_heal) death_pos = self_pos;
      if (TestModule) closeInventory();
      if (DeadCross) dc_pos['forEach'](_0xcb9577 => {
        sendShadow(_0xcb9577['x'], _0xcb9577['y'], _0xcb9577['z']);
        sendShadow(_0xcb9577['x'], _0xcb9577['y'] + 0x1, _0xcb9577['z']);
        sendShadow(_0xcb9577['x'], _0xcb9577['y'] + 0x2, _0xcb9577['z']);
        sendShadow(_0xcb9577['x'] + 0x1, _0xcb9577['y'] + 0x2, _0xcb9577['z']);
        sendShadow(_0xcb9577['x'] - 0x1, _0xcb9577['y'] + 0x2, _0xcb9577['z']);
        sendShadow(_0xcb9577['x'], _0xcb9577['y'] + 0x3, _0xcb9577['z']);
      });
      if (AdminShow) {
        let _0x411f6b = _0x186700['filter'](_0x558dd0 => _0x558dd0['permissionLevel'] != -0x1 || _0x558dd0['commandPermissionLevel'] != -0x1);
        if (_0x411f6b['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x411f6b['map'](_0x2d91bc => _0x2d91bc['name'])), '§r'));
        let _0x505670 = _0x411f6b['filter'](_0x1eb497 => 声暗问弹者(_0x1eb497['id'], self_id) < as_range);
        if (_0x505670['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x505670['map'](_0x24ea4b => _0x24ea4b['name'])), '§r'));
      }
      if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 琶声主人忘(self_id);
      if (NoHider) {
        const _0x422a1a = getPlayerList();
        _0x422a1a['forEach'](_0x5d73c1 => {
          if (_0x5d73c1 != self_id) {
            removeEntityEffect(_0x5d73c1, 0xe);
            setEntityFlag(_0x5d73c1, 0x5, false);
            if (nh_exclude && at_lists['includes'](_0x5d73c1)) at_lists['splice'](at_lists['indexOf'](_0x5d73c1), 0x1);
          }
        });
      }
      if (BJDEscape && getBlock(_0x2e46c1['x'], _0x2e46c1['y'] - 0x1, _0x2e46c1['z'])['namespace'] === 'minecraft:glass' && _0x1418ab) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
      if (AutoSwing) swingArm();
      if (AutoCamera) {
        if (getPlayerViewPerspective() === 0x0) resetCamera();else departCamera();
      }
      if (Criticals && !cc_status && _0x2a8344['y'] < 0x0) {
        cc_status = true;
        callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
        playerJump();
      }
      if (SpinAttack) setEntityFlag(self_id, 0x38, true);
      if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
        const _0x3fd1bf = rt_target ? getPos(at_lists[0x0]) : self_pos;
        if (_0x3fd1bf) setPos(_0x3fd1bf['x'] + 马客在船举(-rt_range, rt_range), _0x3fd1bf['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x3fd1bf['z'] + 马客在船举(-rt_range, rt_range));
      }
      if (NoWall) setEntityFlag(self_id, 0x30, false);
      if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
        let _0x4eb99e = 马客在船举(ac_min, ac_max);
        let _0x26af00 = Math['round'](0x3e8 / _0x4eb99e);
        const _0x4a10f4 = at_lists['length'] > 0x0 ? 声思似诉平(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
        for (let _0x344dbd = 0x0; _0x344dbd < ac_times; _0x344dbd++) {
          if (!_0x4a10f4) break;
          if (ac_click) simulateClick();
          if (ac_use) 快弹数曲曲();
        }
        ac_t_2 = ac_t_1 + _0x26af00;
      }
      ac_t_1 = Date['now']();
      if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
        const _0x156019 = getEntityList()['forEach'](_0xe17082 => {
          if (getEntityNamespace(_0xe17082) != 'minecraft:item' || !findEntity(_0xe17082) || 声暗问弹者(_0xe17082, self_id) > fm_range && fm_range != -0x1) return;
          const _0x309922 = getPos(_0xe17082);
          silentMove(_0x309922['x'], _0x309922['y'], _0x309922['z']);
        });
      } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
        'pos': fm_pos,
        'rot': _0x5610cd,
        'inputMode': 0x2,
        'playMode': 0x0,
        'yHeadRot': _0x5610cd['yaw']
      });
      if (CustomItem) {
        const _0x13d9fc = getEntityCarriedItem(self_id);
        if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x13d9fc);else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x13d9fc);else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x13d9fc);
      }
      if (ShadowBoomer && ticks % sb_tick == 0x0) {
        let _0x4a3841 = [];
        if (modes['sb_mode'] == 0x0) _0x4a3841 = getPlayerList();
        if (modes['sb_mode'] == 0x1) _0x4a3841 = at_lists;
        if (modes['sb_mode'] == 0x2) _0x4a3841 = ['lock_pos'];
        _0x4a3841['forEach'](_0x25a82e => {
          if (sb_exclude && _0x25a82e == self_id) return;
          let _0x3bd16f = null;
          if (_0x25a82e == 'lock_pos') _0x3bd16f = sb_pos;else _0x3bd16f = 面转轴拨弦(_0x25a82e);
          if (!_0x3bd16f) return;
          let _0x4db771 = getEntityRot(_0x25a82e);
          if (modes['sb_mode'] < 0x2) {
            _0x3bd16f = 忽闻水上琵(sb_offset, _0x3bd16f, _0x4db771);
            _0x3bd16f['y'] += sb_ud;
          }
          if (sb_custom) {
            const _0x20abf4 = JSON['parse'](抱琵琶半遮(nx_paths + '/Shadow.json'));
            _0x20abf4['forEach'](_0x4a7cdb => {
              let _0x765007 = Math['sqrt'](_0x4a7cdb['x'] * _0x4a7cdb['x'] + _0x4a7cdb['y'] * _0x4a7cdb['y'] + _0x4a7cdb['z'] * _0x4a7cdb['z']);
              let _0x2f7fe1 = 弦弦掩抑声({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x4a7cdb, 'yaw_pos');
              let _0x5911ae = 弦弦掩抑声({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x4a7cdb, 'pitch_pos');
              let _0x33560e = 忽闻水上琵(_0x765007, {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, {
                'pitch': _0x5911ae,
                'yaw': _0x2f7fe1 + sb_rc_yaw
              });
              sendShadow(_0x3bd16f['x'] + _0x33560e['x'], _0x3bd16f['y'] + _0x33560e['y'], _0x3bd16f['z'] + _0x33560e['z']);
            });
          } else {
            for (let _0x49bce4 = Math['ceil'](-sb_length / 0x2); _0x49bce4 < Math['floor'](sb_length / 0x2 + 0x1); _0x49bce4++) {
              for (let _0x2e25dd = Math['ceil'](-sb_length / 0x2); _0x2e25dd < Math['floor'](sb_length / 0x2 + 0x1); _0x2e25dd++) {
                for (let _0xcfc63e = Math['ceil'](-sb_length / 0x2); _0xcfc63e < Math['floor'](sb_length / 0x2 + 0x1); _0xcfc63e++) {
                  sendShadow(_0x3bd16f['x'] + _0x49bce4, _0x3bd16f['y'] + _0x2e25dd + 0x2, _0x3bd16f['z'] + _0xcfc63e);
                }
              }
            }
          }
        });
      }
      if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;else sb_rc_yaw = -0xb4;
      if (SmallMap) {
        let _0x4295a3 = [['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['一', '一', '一', '一', '一', '十', '一', '一', '一', '一', '一'], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  ']];
        let _0x476c94 = [];
        if (sm_player) _0x476c94['push'](...getPlayerList());
        if (sm_entity) _0x476c94['push'](...getEntityList());
        if (sm_target) _0x476c94['push'](...at_lists);
        _0x476c94['forEach'](_0x3745e2 => {
          let _0x18fb64 = 弦弦掩抑声(self_id, _0x3745e2, 'yaw_rot');
          let _0x38267a = 声暗问弹者(self_id, _0x3745e2);
          let _0x2d3d23 = Math['floor'](_0x38267a / sm_size * sm_proportion * -Math['sin'](_0x18fb64 * Math['PI'] / 0xb4) * 0xa);
          let _0x988390 = Math['floor'](_0x38267a / sm_size * sm_proportion * -Math['cos'](_0x18fb64 * Math['PI'] / 0xb4) * 0xa);
          if (_0x2d3d23 > 0x5) _0x2d3d23 = 0x5;
          if (_0x988390 > 0x5) _0x988390 = 0x5;
          if (_0x2d3d23 < -0x5) _0x2d3d23 = -0x5;
          if (_0x988390 < -0x5) _0x988390 = -0x5;
          _0x4295a3[_0x988390 + 0x5][_0x2d3d23 + 0x5] = ' §e◆§r ';
        });
        let _0x1bdfa9 = _0x4295a3['map'](_0x73ca1c => _0x73ca1c['join'](''))['join']('\n');
        _0x482098['push'](归客不发寻(0x1, 'Map', '\n' + _0x1bdfa9, '§r'));
      }
      if (CameraManager) {
        if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
        if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);else {
          const _0x228345 = getPos(cm_id);
          const _0xb2a87b = getEntitySize(cm_id);
          setCameraAnchor(_0x228345['x'] - self_pos['x'], _0x228345['y'] - self_pos['y'] + 0.85 * _0xb2a87b['y'], -_0x228345['z'] + self_pos['z']);
        }
        if (cm_attack != null) {
          const _0x246f3c = getPos(cm_attack);
          const _0x40e691 = getEntitySize(cm_attack);
          setCameraAnchor(_0x246f3c['x'] - self_pos['x'], _0x246f3c['y'] - self_pos['y'] + 0.85 * _0x40e691['y'], -_0x246f3c['z'] + self_pos['z']);
        } else if (cm_actioncamera) setCameraAnchor(-_0x2a8344['x'] * cm_moverange, -_0x2a8344['y'] * cm_moverange, _0x2a8344['z'] * cm_moverange);else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
        setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
        setCameraPitchLimit(-cm_pitch, cm_pitch);
        if (!cm_unlock) cm_pos = self_pos;
        if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
      }
      if (_0x14266b['current'] < prev_heal) prev_heal = _0x14266b['current'];
      if (NoDebuff) debuff['forEach'](_0x46ac86 => removeEntityEffect(self_id, _0x46ac86));
      if (MoveJump && self_moving && _0x1418ab) playerJump();
      if (ChunkRender) {
        let _0x2d20ea = {
          'x': Math['floor'](self_pos['x'] / 0x10),
          'z': Math['floor'](self_pos['z'] / 0x10)
        };
        let _0xcd28c5 = {
          'x': _0x2d20ea['x'] * 0x10,
          'z': _0x2d20ea['z'] * 0x10
        };
        let _0x59694d = {
          'x': (_0x2d20ea['x'] + 0x1) * 0x10,
          'z': (_0x2d20ea['z'] + 0x1) * 0x10
        };
        for (let _0x3b681f = 0x0; _0x3b681f < 0x10; _0x3b681f++) {
          妇遂命酒使(0x37, _0xcd28c5['x'] + _0x3b681f, self_pos['y'], _0xcd28c5['z'], 0x1);
          妇遂命酒使(0x37, _0xcd28c5['x'], self_pos['y'], _0xcd28c5['z'] + _0x3b681f, 0x1);
          妇遂命酒使(0x37, _0x59694d['x'] - _0x3b681f, self_pos['y'], _0x59694d['z'], 0x1);
          妇遂命酒使(0x37, _0x59694d['x'], self_pos['y'], _0x59694d['z'] - _0x3b681f, 0x1);
        }
        _0x482098['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x2d20ea['x'] + '， ' + _0x2d20ea['z'], '§r'));
      }
      if (AutoGG) {
        for (let _0x98c924 of gg_list) {
          if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x98c924, -0x1, '一局'), false, true);
          if (modes['gg_mode'] === 0x1) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x98c924, -0x1, '一局'));
            const _0x1a4805 = getCarried(self_id);
            if (_0x1a4805['name']['includes']('一局')) 快弹数曲曲();
          }
        }
      }
      if (nx_goal != null) {
        const _0x4efe5e = getHorizontalDistance(self_pos, nx_goal);
        const _0x29f200 = getDistance(self_pos, nx_goal);
        if (_0x29f200 >= 0x5) {
          let _0xeb8aa0 = 弦弦掩抑声(self_id, nx_goal, 'yaw_pos');
          let _0x48ad19 = 忽闻水上琵(-nx_goalSpeed / 0xa, self_pos, {
            'yaw': _0xeb8aa0,
            'pitch': 0x0
          });
          if (_0x4efe5e >= 0x3) setMotion(_0x48ad19['x'] - self_pos['x'], _0x2a8344['y'], _0x48ad19['z'] - self_pos['z']);else setMotion(_0x2a8344['x'], (_0x48ad19['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x2a8344['z']);
        } else {
          nx_goal = null;
          归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
        }
      }
      if (RandomArrayList) {
        for (let _0x4f4110 = 0x0; _0x4f4110 < ral_num; _0x4f4110++) {
          const _0xdda6f3 = 无限事轻拢(ral_length);
          addCustomArrayList('RandomArrayList' + _0x4f4110, _0xdda6f3, _0xdda6f3, true);
        }
      }
      if (ShowNowTime) {
        const _0x1c8db9 = new Date();
        const _0x151a0f = _0x1c8db9['getFullYear']();
        const _0x496139 = ('0' + (_0x1c8db9['getMonth']() + 0x1))['slice'](-0x2);
        const _0x1b2494 = ('0' + _0x1c8db9['getDate']())['slice'](-0x2);
        const _0x4388c3 = ('0' + _0x1c8db9['getHours']())['slice'](-0x2);
        const _0x2935d5 = ('0' + _0x1c8db9['getMinutes']())['slice'](-0x2);
        const _0x3bb76b = ('0' + _0x1c8db9['getSeconds']())['slice'](-0x2);
        const _0x88efe0 = _0x151a0f + '-' + _0x496139 + '-' + _0x1b2494 + ' ' + _0x4388c3 + ':' + _0x2935d5 + ':' + _0x3bb76b;
        addCustomArrayList('ShowNowTime', '当前时间: ' + _0x88efe0, '当前时间: ' + _0x88efe0, true);
      }
      if (ChestAura) {
        let _0x4d413b = 面转轴拨弦(self_id);
        let _0x4b5395 = ca_range;
        for (let _0x3a7b32 = -_0x4b5395; _0x3a7b32 < _0x4b5395; _0x3a7b32++) {
          for (let _0x2d1a72 = -_0x4b5395; _0x2d1a72 < _0x4b5395; _0x2d1a72++) {
            for (let _0x561266 = -_0x4b5395; _0x561266 < _0x4b5395; _0x561266++) {
              const _0x1dbb26 = getBlock(_0x4d413b['x'] + _0x3a7b32, _0x4d413b['y'] + _0x2d1a72, _0x4d413b['z'] + _0x561266);
              if (_0x1dbb26['namespace'] != 'minecraft:chest') continue;
              const _0x1b9770 = getBlock(_0x4d413b['x'] + _0x3a7b32, _0x4d413b['y'] + _0x2d1a72 + 0x1, _0x4d413b['z'] + _0x561266);
              const _0x46c650 = {
                'x': _0x4d413b['x'] + _0x3a7b32,
                'y': _0x4d413b['y'] + _0x2d1a72,
                'z': _0x4d413b['z'] + _0x561266
              };
              if (ca_chest_pos['includes'](JSON['stringify'](_0x46c650)) && ca_exclude || isChest || !惨将别别时(_0x4d413b, _0x46c650, ca_wall, 1.53, 0.5) || ca_block && _0x1b9770['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x46c650, ca_fov, 0x0)) continue;
              buildBlock(self_id, _0x4d413b['x'] + _0x3a7b32, _0x4d413b['y'] + _0x2d1a72, _0x4d413b['z'] + _0x561266, 0x1);
              if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x46c650));
              if (ca_check && chestStates['packet'] && chestStates['click']) {
                chestStates['click'] = false;
                chestStates['packet'] = false;
              }
            }
          }
        }
      }
      if (AntiStaff) {
        _0x186700['forEach'](_0x2cf080 => {
          const {
            name,
            id
          } = _0x2cf080;
          if (id === self_id || name === '') return;
          let _0x1afe18 = null;
          if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x1afe18 = id;
          if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x1afe18 = id;
          if (modes['as_mode'] === 0x2) {
            as_config['forEach'](_0x456895 => {
              if (_0x456895['match_mode'] === '精准' && _0x456895['has_mode'] === '存在' && _0x456895['texts']['some'](_0x597bbc => name === _0x597bbc) != _0x456895['reverse_selection']) _0x1afe18 = id;
              if (_0x456895['match_mode'] === '精准' && _0x456895['has_mode'] === '同时' && _0x456895['texts']['every'](_0x188bdc => name === _0x188bdc) != _0x456895['reverse_selection']) _0x1afe18 = id;
              if (_0x456895['match_mode'] === '模糊' && _0x456895['has_mode'] === '存在' && _0x456895['texts']['some'](_0x543408 => name['includes'](_0x543408)) != _0x456895['reverse_selection']) _0x1afe18 = id;
              if (_0x456895['match_mode'] === '精准' && _0x456895['has_mode'] === '存在' && _0x456895['texts']['every'](_0x33af5f => name['includes'](_0x33af5f)) != _0x456895['reverse_selection']) _0x1afe18 = id;
            });
          }
          if (modes['as_mode'] === 0x3) _0x1afe18 = id;
          if (as_hide && !getEntityFlag(id, 0x5)) _0x1afe18 = null;
          if (as_ground && getEntityIsGround(id)) _0x1afe18 = null;
          if (_0x1afe18 === null) return;
          if (modes['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');else if (modes['anti_mode'] === 0x1) executeCommand('/hub');else if (modes['anti_mode'] === 0x2) executeCommand('/again');else if (modes['anti_mode'] === 0x3) _0x482098['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));else if (modes['anti_mode'] === 0x4) leaveWorld();
        });
      }
      if (InteractAura) at_lists['forEach'](_0x208796 => interactEntity(_0x208796));
      if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
        'current': 0x7fff
      });
      if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
        'current': 0x14
      });
      if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
      if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
      if (Tower && (_0x5610cd['pitch'] < -0x50 || _0x5610cd['pitch'] > 0x50) && self_item['isBlock']) {
        if (_0x1418ab || tower_continuously) {
          playerJump();
          setTimeout(() => 事今漂沦憔(_0x2e46c1['x'], self_pos['y'] - 0x2, _0x2e46c1['z']), tower_delay * 0xa);
        }
      }
      if (ShowVariable) {
        if (sv_player && last_world_player['length'] != _0x186700['length']) {
          归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x186700['length'], '§r');
          last_world_player = _0x186700;
        }
        if (sv_id && self_id != prev_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
      }
      if (CheckAxe && ticks % ca_delay === 0x1) {
        let _0x31fe06 = [];
        _0x186700['forEach'](_0x2b8490 => {
          if (modes['ca_mode'] == 0x0 && 十六言命曰(_0x2b8490['id'], -0x1) > 0x14) _0x31fe06['push'](getEntityName(_0x2b8490['id']));
          if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x2b8490['id']) > 0x14) _0x31fe06['push'](getEntityName(_0x2b8490['id']));
        });
        if (_0x31fe06['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x31fe06), '§r'));
      }
      if (WorldPlayerInfo && last_world_player['length'] != _0x186700['length']) {
        const _0xf26bd = _0x186700['map'](_0x3472f2 => _0x3472f2['name']);
        let _0x2d6c2c = 三两声未成(last_world_player, _0xf26bd);
        let _0x2214f1 = last_world_player['length'] < _0xf26bd['length'];
        if (_0x2214f1) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2d6c2c) + '进入了世界', '§r');else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2d6c2c) + '离开了世界', '§r');
        last_world_player = _0xf26bd;
      }
      if (DropRes && _0x2a8344['y'] < -dr_mot) {
        for (index = 0x0; index < 0x24; index++) {
          const _0xcaeedc = getInventory(self_id, index);
          if (resList['includes'](_0xcaeedc['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
        }
      }
      if (AttackAim) {
        if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
          at_lists['forEach'](_0x416162 => {
            if (声思似诉平(self_id, _0x416162, aaa_fov, 0x0)) {
              if (aa_use) 快弹数曲曲();else 江头夜送客(_0x416162, Swing);
            }
          });
          aim_t0 = aim_t1;
        }
        aim_t1 = Date['now']();
      }
      if (HotbarSelector) {
        let _0xce921b = getInventory(self_id, select_slot);
        if (hs_slot['length'] > 0x0) {
          if (hs_slot['includes'](select_slot + '')) {
            selectPlayerInventorySlot(self_id, select_slot);
            const _0x3de0d6 = getCarried(self_id);
            if (hs_use && !_0x3de0d6['namespace']['includes']('air')) 快弹数曲曲();
          }
        } else if (selectitems['includes'](_0xce921b['name']) || selectitems['includes'](_0xce921b['namespace']) || selectitems['length'] === 0x0) {
          selectPlayerInventorySlot(self_id, select_slot);
          const _0x494ea9 = getCarried(self_id);
          if (hs_use && !_0x494ea9['namespace']['includes']('air')) 快弹数曲曲();
        }
      }
      if (AutoPot) {
        const _0x3cdace = 是夕始觉有(self_id, 'splash_potion', 'hotbar', ap_min);
        const _0x5386ec = 是夕始觉有(self_id, 'splash_potion', 'inv', 0x0);
        if (_0x5386ec) {
          if (ap_autobag && !_0x3cdace) openInventory();
          if (!_0x3cdace) {
            for (let _0x9b79b8 = ap_slot === -0x1 ? 0x23 : 0x9; _0x9b79b8 > -0x1; _0x9b79b8--) {
              if (ap_slot > -0x1) {
                const _0x2e0841 = getInventory(self_id, _0x9b79b8);
                if (_0x2e0841['namespace'] === 'minecraft:air') {
                  女尝学琵琶(ap_slot, _0x9b79b8, false);
                  ap_slot = -0x1;
                  break;
                }
              }
              const _0x576e01 = getInventory(self_id, _0x9b79b8);
              if (ap_slot === -0x1 && _0x576e01['namespace'] === 'minecraft:splash_potion') ap_slot = _0x9b79b8;
            }
          }
          if (ap_autobag && _0x3cdace) setTimeout(() => closeInventory(), 0x64);
        }
      }
      if (SmartInv && (!da_change || self_itemCount != prev_itemCount) && (!da_bow || _0x5610cd['pitch'] > 0x50) && (!da_chest || isChest)) {
        const _0x1c2f32 = 迁谪意因为(self_id, da_slot);
        const _0x5eb700 = nx_armors['indexOf'](_0x1c2f32);
        if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x1c2f32)) {
          const _0x1f6eca = 十六言命曰(self_id, da_slot, da_texture, da_enchant);
          if (_0x1f6eca < 0x14) {
            if (_0x1f6eca > max_damage) {
              max_damage = _0x1f6eca;
              if (da_move) 女尝学琵琶(da_slot, SmartInvCfg['sword'], false, true);
            } else dropPlayerInventorySlot(self_id, da_slot, false, true);
          }
        }
        if (da_armor && _0x5eb700 !== -0x1) {
          const _0xe1de47 = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
          if (_0xe1de47 > max_armor[_0x5eb700]) {
            max_armor[_0x5eb700] = _0xe1de47;
            if (da_move) {
              if (move_armor_slot < 0x0) 女尝学琵琶(da_slot, SmartInvCfg[nx_armors[_0x5eb700]], false, true);
              if (move_armor_slot > -0x1) 女尝学琵琶(da_slot, move_armor_slot, false, true);
            }
          } else dropPlayerInventorySlot(self_id, da_slot, false, true);
        }
        if (da_chest) isChest = false;
      }
      if (AutoArmor) {
        let _0x211466 = 迁谪意因为(self_id, armor_slot);
        let _0x1da448 = 之凡六百一(self_id, armor_slot);
        if (_0x211466 != 'other' && _0x1da448 !== 0x0) {
          for (let _0x1531cd = 0x0; _0x1531cd < aa_times; _0x1531cd++) {
            if (_0x211466 === 'helmet' && _0x1da448 > 之凡六百一(self_id, -0x2)) 罢悯然自叙(armor_slot);
            if (_0x211466 === 'chestplate' && _0x1da448 > 之凡六百一(self_id, -0x3)) 罢悯然自叙(armor_slot);
            if (_0x211466 === 'leggings' && _0x1da448 > 之凡六百一(self_id, -0x4)) 罢悯然自叙(armor_slot);
            if (_0x211466 === 'boots' && _0x1da448 > 之凡六百一(self_id, -0x5)) 罢悯然自叙(armor_slot);
          }
          if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
        }
      }
      if (Remover) {
        const _0x236581 = getEntityList();
        _0x236581['forEach'](_0x4595d2 => {
          let _0x1db382 = false;
          if (rmer_entity) _0x1db382 = !isPlayer(_0x4595d2);
          if (rmer_item) _0x1db382 = getEntityNamespace(_0x4595d2) == 'minecraft:item';
          if (_0x1db382) removeEntity(_0x4595d2);
        });
      }
      if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
        for (let _0x2bcc6c = 0x8; _0x2bcc6c >= 0x0; _0x2bcc6c--) {
          let _0x184844 = getInventory(self_id, _0x2bcc6c);
          if (_0x184844['namespace'] === prev_item['namespace']) {
            selectPlayerInventorySlot(self_id, _0x2bcc6c);
            break;
          }
        }
      }
      if (FreeCam && fc_pos != {}) {
        if (fc_draw) {
          for (let _0x7df9bf = 0x0; _0x7df9bf <= 0x12; _0x7df9bf += 0x2) 妇遂命酒使(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x7df9bf / 0xa, fc_pos['z'], 0x1);
          _0x482098['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
        }
        if (fc_dist) _0x482098['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
      }
      if (ThrowTracer) {
        const _0x4cb894 = getEntityList();
        _0x4cb894['forEach'](_0x2c5573 => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x2c5573)) && at_lists['length'] > 0x0) {
            const _0x13a0da = getPos(at_lists[0x0]);
            let _0x33f8e3 = 弦弦掩抑声(_0x13a0da, getPos(_0x2c5573), 'yaw_pos');
            let _0x2e11f0 = -弦弦掩抑声(_0x13a0da, getPos(_0x2c5573), 'pitch_pos');
            const _0x3c7f35 = getPos(_0x2c5573);
            const _0x566be5 = 忽闻水上琵(tt_speed, _0x3c7f35, {
              'yaw': _0x33f8e3,
              'pitch': _0x2e11f0
            });
            setEntityMotion(_0x2c5573, _0x566be5['x'] - _0x3c7f35['x'], _0x566be5['y'] - _0x3c7f35['y'], _0x566be5['z'] - _0x3c7f35['z']);
          }
        });
        if (at_lists['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
      }
      if (ThrowFly) {
        const _0xe2d4dd = getEntityList();
        _0xe2d4dd['forEach'](_0x363cdf => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x363cdf))) {
            const _0x2aec63 = getPos(_0x363cdf);
            if (typeof arrow_rot[_0x363cdf] === 'undefined') arrow_rot[_0x363cdf] = _0x5610cd;
            const _0x2f1994 = arrow_rot[_0x363cdf]['yaw'];
            const _0x20c576 = arrow_rot[_0x363cdf]['pitch'];
            const _0x5c0a0a = 忽闻水上琵(0x1, _0x2aec63, {
              'yaw': _0x2f1994,
              'pitch': _0x20c576
            });
            setEntityMotion(_0x363cdf, _0x5c0a0a['x'] - _0x2aec63['x'], _0x5c0a0a['y'] - _0x2aec63['y'], _0x5c0a0a['z'] - _0x2aec63['z']);
          }
        });
      }
      if (ArrowView) {
        const _0x2fa93b = getEntityList();
        _0x2fa93b['forEach'](_0x33f1aa => {
          if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x33f1aa)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x33f1aa;
        });
        if (av_id != null) {
          if (!av_list['includes'](av_id)) av_list['push'](av_id);
          let _0x42afc8 = getPos(av_id);
          setCameraAnchor(_0x42afc8['x'] - self_pos['x'] + (av_x - 0xa), _0x42afc8['y'] - self_pos['y'] + (av_y - 0xa), -_0x42afc8['z'] + self_pos['z'] + (av_z - 0xa));
        } else setCameraAnchor(0x0, 0x0, 0x0);
        if (!findEntity(av_id)) av_id = null;
      }
      if (FPSReducer) {
        for (let _0x48d802 = 0x0; _0x48d802 < fpsr_rate * 0xa; _0x48d802++) {
          for (let _0x37a8a7 = 0x0; _0x37a8a7 < fpsr_rate * 0xa; _0x37a8a7++) getEntityName(_0x48d802 + _0x37a8a7);
        }
      }
      if (ArrowParticle) {
        const _0x2af666 = getEntityList();
        _0x2af666['forEach'](_0x2c1ef6 => {
          if (getEntityNamespace(_0x2c1ef6) === 'minecraft:arrow') {
            const _0x4b5da1 = getPos(_0x2c1ef6);
            妇遂命酒使(arp_type, _0x4b5da1['x'], _0x4b5da1['y'], _0x4b5da1['z'], 0x1);
          }
        });
      }
      if (FightBot && at_lists['length'] > 0x0) {
        let _0x594bbe = getPos(at_lists[0x0]);
        let _0x1f474c = {};
        if (fb_chest) {
          const _0x2c1cc5 = 面转轴拨弦(self_id);
          for (let _0x45d305 = -0x2; _0x45d305 < 0x3; _0x45d305++) {
            for (let _0xef8918 = -0x2; _0xef8918 < 0x3; _0xef8918++) {
              for (let _0x1d7a87 = -0x2; _0x1d7a87 < 0x3; _0x1d7a87++) {
                const _0x11eeb7 = getBlock(_0x2c1cc5['x'] + _0x45d305, _0x2c1cc5['y'] + _0xef8918, _0x2c1cc5['z'] + _0x1d7a87);
                const _0x3e6410 = 添酒回灯重([_0x2c1cc5['x'] + _0x45d305, _0x2c1cc5['y'] + _0xef8918, _0x2c1cc5['z'] + _0x1d7a87]);
                if (_0x11eeb7['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x3e6410)) {
                  _0x1f474c = {
                    'x': _0x2c1cc5['x'] + _0x45d305,
                    'y': _0x2c1cc5['y'] + _0xef8918,
                    'z': _0x2c1cc5['z'] + _0x1d7a87
                  };
                  ca_chest_pos['push'](_0x3e6410);
                  break;
                }
              }
            }
          }
        }
        let _0x2cbae5 = (_0x1418ab ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
        let _0x1c0e3e = 马客在船举(0x0, 0x64) < fb_moveRate;
        if (fb_randMove && _0x1c0e3e) {
          _0x594bbe = 忽闻水上琵(_0x2cbae5, _0x594bbe, {
            'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
            'pitch': 0x0
          });
        }
        let _0xa25fd1 = 弦弦掩抑声(self_id, _0x594bbe, 'yaw_pos');
        let _0x18a152 = 忽闻水上琵(_0x2cbae5, getPos(self_id), {
          'yaw': _0xa25fd1,
          'pitch': 0x0
        });
        if (_0x14266b['current'] < fb_heal) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));else {
            setLocalPlayerTurn(-0x5a, 0x0);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
          }
        }
        const _0x1437aa = 谁琵琶声停(self_id, at_lists[0x0]);
        if (_0x1437aa > fb_seek) {
          if (_0x1418ab) setEntityMotion(self_id, _0x18a152['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x1418ab ? fb_y : _0x2a8344['y'], _0x18a152['z'] - self_pos['z']);
          KillAura = false;
          KeepDistance = false;
          if (fb_sca) Scaffold = true;
          if (Scaffold && sca_keep) sca_current = 0x0;
          if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0) && _0x1437aa < fb_seek * 0x3) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
            if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
          }
        } else {
          if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0)) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
            if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
          }
          if (_0x1418ab) setEntityMotion(self_id, fb_randMove && _0x1c0e3e ? _0x18a152['x'] - self_pos['x'] : _0x2a8344['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x2a8344['y'], fb_randMove && _0x1c0e3e ? _0x18a152['z'] - self_pos['z'] : _0x2a8344['z']);
          if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
          if (fb_ka) KillAura = true;
          if (fb_kd) KeepDistance = true;
          if (fb_aa) AssistAim = true;
          Scaffold = false;
        }
        if (JSON['stringify'](_0x1f474c) != '{}') {
          let _0x4880a7 = 弦弦掩抑声(self_id, _0x1f474c, 'yaw_pos');
          let _0x265a9f = 忽闻水上琵(_0x2cbae5, getPos(self_id), {
            'yaw': _0x4880a7,
            'pitch': 0x0
          });
          if (_0x1418ab) setEntityMotion(self_id, _0x265a9f['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x1418ab ? fb_y : _0x2a8344['y'], _0x265a9f['z'] - self_pos['z']);
        }
      }
      if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
        for (let _0x4dfdc0 = 0x0; _0x4dfdc0 < rpc_repeat_times; _0x4dfdc0++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        rpc_t = 0x0;
      }
      if (AutoShifter && ticks % shift_tick == 0x0) {
        for (let _0x4ffbfa = 0x0; _0x4ffbfa < shift_num; _0x4ffbfa++) setEntityFlag(self_id, 0x1, true);
      }
      if (AutoCrystal && at_lists['length'] > 0x0) {
        if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
        if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
          let _0x4edc1f = 0x0;
          at_lists['forEach'](_0x15ec34 => {
            let _0x2a057c = 面转轴拨弦(_0x15ec34);
            if (ac_excludeY && Math['abs'](_0x2a057c['y'] - self_pos['y']) < 0x1) return;
            if (ac_tp) setPos(_0x2a057c['x'], _0x2a057c['y'] + 0x1, _0x2a057c['z']);
            _0x4d1fe3: for (let _0x5c4567 = -0x1; _0x5c4567 < 0x2; _0x5c4567++) {
              for (let _0x1db5a9 = -0x2; _0x1db5a9 < 0x0; _0x1db5a9++) {
                for (let _0x281ba6 = -0x1; _0x281ba6 < 0x2; _0x281ba6++) {
                  let _0x2c870a = getBlock(_0x2a057c['x'] + _0x5c4567, _0x2a057c['y'] + _0x281ba6, _0x2a057c['z'] + _0x1db5a9);
                  if (_0x4edc1f > ac_count) break _0x4d1fe3;
                  if ((_0x2c870a['namespace'] === 'minecraft:bedrock' || _0x2c870a['namespace'] === 'minecraft:obsidian') && _0x4edc1f < ac_count) {
                    buildBlock(self_id, _0x2a057c['x'] + _0x5c4567, _0x2a057c['y'] + _0x281ba6, _0x2a057c['z'] + _0x1db5a9, 0x1);
                    _0x4edc1f += 0x1;
                  }
                }
              }
            }
          });
        } else _0x482098['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
      }
      if (CrystalAura) {
        const _0x26ac9c = getEntityList();
        _0x26ac9c['forEach'](_0x3c6b8c => {
          if (!才年长色衰(_0x3c6b8c)) return;
          const _0x45c5b1 = getPos(_0x3c6b8c);
          if (getEntityTypeId(_0x3c6b8c) !== 0x47 || 声暗问弹者(_0x3c6b8c, at_lists[0x0]) > ca_distTo) return;
          if (ca_block && !self_item['isBlock']) {
            for (let _0x4cd8c5 = 0x0; _0x4cd8c5 < 0x9; _0x4cd8c5++) {
              const _0x2ec261 = getInventory(self_id, _0x4cd8c5);
              if (_0x2ec261['isBlock']) {
                selectPlayerInventorySlot(self_id, _0x4cd8c5);
                break;
              }
            }
            buildBlock(self_id, (_0x2e46c1['x'] + _0x45c5b1['x']) / 0x2, (_0x2e46c1['y'] + _0x45c5b1['y']) / 0x2, (_0x2e46c1['z'] + _0x45c5b1['z']) / 0x2, 0x0);
            江头夜送客(_0x3c6b8c, Swing);
          }
        });
      }
      if (AutoBomb && at_lists['length'] > 0x0) {
        if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
        if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
          at_lists['forEach'](_0x3ded7a => {
            let _0x54c6a5 = 面转轴拨弦(_0x3ded7a);
            let _0x1eabfb = getBlock(_0x54c6a5['x'], _0x54c6a5['y'] + 0x2, _0x54c6a5['z']);
            if (_0x1eabfb['namespace'] === 'minecraft:air') buildBlock(self_id, _0x54c6a5['x'], _0x54c6a5['y'] + 0x2, _0x54c6a5['z'], 0x0);
            _0x1eabfb = getBlock(_0x54c6a5['x'], _0x54c6a5['y'] + 0x2, _0x54c6a5['z']);
            if (_0x1eabfb['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x54c6a5['x'], _0x54c6a5['y'] + 0x2, _0x54c6a5['z'], 0x0);
          });
        } else _0x482098['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
      }
      if (CPvP && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x51e7b6 => {
          const _0x5302dd = 面转轴拨弦(_0x51e7b6);
          let _0xee8de3 = [[_0x5302dd['x'], _0x5302dd['y'] + 0x2, _0x5302dd['z']], [_0x5302dd['x'] + 0x1, _0x5302dd['y'], _0x5302dd['z']], [_0x5302dd['x'] - 0x1, _0x5302dd['y'], _0x5302dd['z']], [_0x5302dd['x'], _0x5302dd['y'], _0x5302dd['z'] + 0x1], [_0x5302dd['x'], _0x5302dd['y'], _0x5302dd['z'] - 0x1], [_0x5302dd['x'] + 0x1, _0x5302dd['y'] + 0x1, _0x5302dd['z']], [_0x5302dd['x'] - 0x1, _0x5302dd['y'] + 0x1, _0x5302dd['z']], [_0x5302dd['x'], _0x5302dd['y'] + 0x1, _0x5302dd['z'] + 0x1], [_0x5302dd['x'], _0x5302dd['y'] + 0x1, _0x5302dd['z'] - 0x1]];
          for (pos of _0xee8de3) {
            let _0x1178f6 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
            if (_0x1178f6['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
            if (_0x1178f6['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
          }
        });
      }
      if (KillAura && at_lists['length'] > 0x0) {
        let _0x3acd73 = [];
        let _0x19a392 = false;
        random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
        random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
        at_lists['forEach'](_0x23232f => {
          let _0x3e15ef = getPos(_0x23232f);
          if (!((声暗问弹者(self_id, _0x23232f) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x23232f, ka_fov, 0x0) && 惨将别别时(self_pos, _0x3e15ef, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x2a8344['y'] < -0.42))) return;
          _0x3acd73['push'](_0x23232f);
          KillAura_d_1[_0x23232f] = Date['now']();
          if (typeof KillAura_d_2[_0x23232f] !== 'undefined' && KillAura_d_1[_0x23232f] - KillAura_d_2[_0x23232f] < 0x0) return;
          _0x19a392 = true;
          for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x23232f, Swing);
          KillAura_d_2[_0x23232f] = KillAura_d_1[_0x23232f] + random_delay;
          if (ka_third) setPlayerViewPerspective(_0x19a392 ? 0x1 : 0x0);
        });
        if (_0x3acd73['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x3acd73['length'] + '个目标' : 添酒回灯重(_0x3acd73['map'](_0x4e50bf => getEntityName(_0x4e50bf))), '§r'));
        const _0x3976d9 = _0x3acd73['length'] * random_num * ka_times;
        if (ka_show) _0x482098['push'](归客不发寻(0x1, 'APS', _0x3976d9 + '/s', '§r'));
      }
      if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
      if (SlowDown && _0x2a8344['y'] < -0.074 && !_0x1418ab) setMotion(_0x2a8344['x'], -sd_speed / 0xf, _0x2a8344['z']);
      if (SurroundParticle && (self_moving || !srp_move)) {
        srp_current = srp_current + srp_speed * 0x3;
        if (srp_current > 0xb4) srp_current = -0xb4;
        let _0x13824a = 忽闻水上琵(srp_len, self_pos, {
          'yaw': srp_current,
          'pitch': 0x0
        });
        妇遂命酒使(srp_type, _0x13824a['x'], _0x13824a['y'] - 1.8 + srp_y, _0x13824a['z'], srp_size);
      }
      if (motion_list['length'] > 0x0) {
        const _0x369103 = motion_list['shift']();
        setMotion(_0x369103[0x0], _0x369103[0x1], _0x369103[0x2]);
      }
      if (Scaffold && self_item['isBlock']) {
        sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
        if (sca_count) _0x482098['push'](归客不发寻(0x1, self_item['name'] + ' x' + self_item['count'], '§r'));
        const _0x2e0362 = 酒欲饮无管(_0x2a8344, self_pos, 0xa);
        var _0x7f400a = sca_move || self_moving ? 弦弦掩抑声(_0x2e0362, self_id, 'yaw_pos') : _0x5610cd['yaw'];
        var _0x585e9b = sca_move || self_moving ? 弦弦掩抑声(_0x2e0362, self_id, 'pitch_pos') : _0x5610cd['pitch'];
        if (!sca_acc) _0x7f400a = roundAngle(_0x7f400a, sca_prec);
        if (!sca_acc) _0x585e9b = roundAngle(_0x585e9b, sca_prec);
        if (sca_auto) {
          let _0x3104c6 = {};
          let _0x3493d5 = Infinity;
          for (let _0x5c2d5e = -0x3; _0x5c2d5e <= 0x3; _0x5c2d5e++) {
            for (let _0x2d44e4 = -0x3; _0x2d44e4 <= -0x1; _0x2d44e4++) {
              for (let _0x122d50 = -0x3; _0x122d50 <= 0x3; _0x122d50++) {
                let _0x6be486 = {
                  'x': _0x5c2d5e + _0x2e46c1['x'],
                  'y': Math['floor'](sca_current) - 0x1 + _0x2d44e4,
                  'z': _0x122d50 + _0x2e46c1['z']
                };
                const _0x5cd0eb = getBlock(_0x6be486['x'], _0x6be486['y'], _0x6be486['z']);
                if (_0x5cd0eb['namespace'] == 'minecraft:air') continue;
                let _0x2e01cf = Math['sqrt'](_0x5c2d5e * _0x5c2d5e - _0x2d44e4 * _0x2d44e4 + _0x122d50 * _0x122d50);
                if (_0x2e01cf < _0x3493d5) {
                  _0x3493d5 = _0x2e01cf;
                  _0x3104c6 = _0x6be486;
                }
              }
            }
          }
          if (JSON['stringify'](_0x3104c6) != '{}') {
            let _0x2a69ea = 眉信手续续(_0x3104c6, _0x2e46c1, 0x1, true);
            _0x2a69ea['forEach'](_0x22a796 => {
              if (sca_surface) 事今漂沦憔(Math['round'](_0x22a796['x']), Math['round'](sca_current - 0x1), Math['round'](_0x22a796['z']));else buildBlock(self_id, Math['round'](_0x22a796['x']), Math['round'](sca_current - 0x1), Math['round'](_0x22a796['z']), 0x1);
            });
          }
        }
        for (let _0x3eae15 = 0x0; _0x3eae15 < sca_len; _0x3eae15++) {
          const _0x2d048b = 忽闻水上琵(_0x3eae15, self_pos, {
            'yaw': _0x7f400a,
            'pitch': sca_y ? _0x585e9b : 0x0
          });
          let _0x21baf6 = {
            'x': Math['floor'](_0x2d048b['x']),
            'y': Math['floor'](sca_current) - 0x1,
            'z': Math['floor'](_0x2d048b['z'])
          };
          let _0x1df776 = getBlock(_0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z']);
          if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x1df776['namespace'])) continue;
          if (sca_fake) setBlock(_0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z'], self_item['namespace'], self_item['aux']);else if (sca_surface) 事今漂沦憔(_0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z']);else buildBlock(self_id, _0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z'], 0x1);
          if (sca_up) {
            const _0x4323d1 = getBlock(_0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z']);
            if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x4323d1['namespace'])) buildBlock(self_id, _0x21baf6['x'], Math['floor'](_0x21baf6['y']), _0x21baf6['z'], 0x0);
          }
          ;
        }
      }
      if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
        for (let _0xc61173 = 0x0; _0xc61173 < 0x9; _0xc61173++) {
          const _0x19f814 = getInventory(self_id, _0xc61173);
          if (_0x19f814['isBlock']) {
            selectPlayerInventorySlot(self_id, _0xc61173);
            break;
          }
        }
      }
      if (AttackSelf) 江头夜送客(self_id, Swing);
      if (TargetHud) {
        if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
        if (th_target) {
          let _0x398e9b = [];
          const _0x53103c = isPlayer(th_target) ? getCarried(th_target) : {
            'name': '无',
            'count': 0x0
          };
          const _0x756f0d = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
          const _0xe60e66 = 面转轴拨弦(th_target);
          if (th_name) _0x398e9b['push'](getEntityName(th_target));
          if (th_carry) _0x398e9b['push'](_0x53103c['name'] + ' x' + _0x53103c['count']);
          if (th_dist) _0x398e9b['push']('距离: ' + _0x756f0d + 'm');
          if (th_health) _0x398e9b['push']('血量: ' + 弹说尽心中(th_target, modes['th_health_mode']));
          if (th_pos) _0x398e9b['push']('[' + _0xe60e66['x'] + ', ' + _0xe60e66['y'] + ', ' + _0xe60e66['z'] + ']');
          updateTextContent(th_id, _0x398e9b['join']('\n'));
          updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
          updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
        }
      }
      if (AntiVoid) {
        if (modes['av_mode'] === 0x0) {
          if (!av_running && !_0x1418ab && _0x2a8344['y'] > -av_minY) av_pos['push'](_0x2e46c1);
          if (!av_running && _0x1418ab) av_pos = [];
          if (!av_running && _0x2a8344['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x5a725d = av_pos.pop();
              setPos(_0x5a725d['x'], _0x5a725d['y'], _0x5a725d['z']);
              if (av_derp) setLocalPlayerTurn(0x0, 0x78);
            } else av_running = false;
          }
        }
        if (_0x2a8344['y'] <= -av_minY && modes['av_mode'] === 0x1) {
          const _0xdcb880 = {
            'rot': _0x5610cd,
            'yHeadRot': 0x0
          };
          const _0x347677 = {
            'inputMode': 0x2,
            'playMode': 0x0,
            'pos': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            'motion': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            ..._0xdcb880
          };
          const _0x439ed7 = {
            'id': self_id,
            'pos': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            'mode': 0x1,
            'ground': true,
            ..._0xdcb880
          };
          sendPlayerAuthInput(_0x347677);
          sendMovePlayer(_0x439ed7);
        }
        if (modes['av_mode'] === 0x2) {
          if (!av_running && _0x1418ab && _0x2a8344['y'] > -av_minY) av_pos[0x0] = self_pos;
          if (!av_running && _0x2a8344['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x34e2e0 = av_pos[0x0];
              setPos(_0x34e2e0['x'], _0x34e2e0['y'], _0x34e2e0['z']);
              av_pos = [];
            } else av_running = false;
          }
        }
      }
      if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x1418ab)) {
        if (gm_tick <= gm_cycle) {
          gm_pos = getPos(self_id);
          gm_mot = getEntityMotion(self_id);
          for (let _0x4c9d02 = 0x0; _0x4c9d02 < gm_count; _0x4c9d02++) {
            if (modes['gm_mode'] === 0x0) 二年恬然自(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
            if (modes['gm_mode'] === 0x1) setPos(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
            if (modes['gm_mode'] === 0x2) sendPlayerAuthInput({
              'pos': {
                'x': gm_xz ? 0x1bf52 : self_pos['x'],
                'y': gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'],
                'z': gm_xz ? 0x1bf52 : self_pos['z']
              },
              'inputMode': 0x2,
              'playMode': 0x0,
              'motion': {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              },
              'rot': _0x5610cd,
              'yHeadRot': 0x0
            });
          }
          if (!gm_back) gm_tick = 0x0;
        }
        if (gm_back && gm_tick >= gm_cycle + gm_delay) {
          for (let _0x343db2 = 0x0; _0x343db2 < gm_count; _0x343db2++) {
            if (modes['gm_mode'] < 0x2) setPos(gm_pos['x'], gm_pos['y'], gm_pos['z']);
            if (modes['gm_mode'] < 0x2) setMotion(gm_mot['x'], gm_mot['y'], gm_mot['z']);
            if (modes['gm_mode'] === 0x2) {
              if (gm_local) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
              sendPlayerAuthInput({
                'inputMode': 0x2,
                'playMode': 0x0,
                'pos': {
                  'x': self_pos['x'],
                  'y': self_pos['y'],
                  'z': self_pos['z']
                },
                'motion': {
                  'x': 0x0,
                  'y': 0x0,
                  'z': 0x0
                },
                'rot': _0x5610cd,
                'yHeadRot': 0x0
              });
            }
          }
          gm_tick = 0x0;
        }
      }
      if (KeepDistance && at_lists['length'] > 0x0 && 谁琵琶声停(self_id, at_lists[0x0]) < kd_distance && (_0x1418ab || !kd_only_ground)) {
        const _0x554eb6 = 弦弦掩抑声(getPos(at_lists[0x0]), self_id, 'yaw_pos');
        const _0x488587 = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
          'yaw': _0x554eb6,
          'pitch': _0x5610cd['pitch']
        });
        if (kd_anti) silentMove(_0x488587['x'] * 0x2, _0x488587['y'] * 0x2, _0x488587['z'] * 0x2);else setMotion(_0x488587['x'] - self_pos['x'], _0x2a8344['y'], _0x488587['z'] - self_pos['z']);
      }
      if (AirJump && _0x2a8344['y'] < -0.42) {
        let _0xfd8238 = 酒欲饮无管(_0x2a8344, self_pos, 瑟瑟主人下(self_id));
        let _0x1994d7 = 弦弦掩抑声(_0xfd8238, self_id, 'yaw_pos');
        let _0xd65f25 = 忽闻水上琵(aj_speed / 0xa, self_pos, {
          'yaw': _0x1994d7,
          'pitch': 0x0
        });
        setMotion(_0xd65f25['x'] - self_pos['x'], aj_height / 0x64, _0xd65f25['z'] - self_pos['z']);
      }
      if (dl_list['length'] > 0x0) {
        for (let _0x38b9c7 = 0x0; _0x38b9c7 < di_speed; _0x38b9c7++) {
          let _0xf743cc = dl_list.pop();
          dropPlayerInventorySlot(self_id, _0xf743cc, false, true);
        }
      }
      if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
      if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
      if (Trace && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) > tra_range) {
        let _0x39e367 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
        let _0x15c90d = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
        let _0x3ebde3 = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
          'yaw': _0x39e367,
          'pitch': -_0x15c90d
        });
        setPos(_0x3ebde3['x'], _0x3ebde3['y'], _0x3ebde3['z']);
      }
      if (LineParticle && at_lists['length'] > 0x0) {
        let _0x4c696c = getPos(self_id);
        _0x4c696c['y'] += lp_offset / 0xa;
        at_lists['forEach'](_0x55a5bb => {
          let _0xd54b40 = getPos(_0x55a5bb);
          _0xd54b40['y'] += 0.765;
          let _0x1face0 = 弦弦掩抑声(_0x4c696c, _0xd54b40, 'yaw_pos');
          let _0x49433c = 弦弦掩抑声(_0x4c696c, _0xd54b40, 'pitch_pos');
          for (let _0x1a82e7 = 0x0; _0x1a82e7 < 声暗问弹者(_0x55a5bb, self_id); _0x1a82e7 += (0xb - lp_size) / 0x5) {
            let _0x2670e4 = 忽闻水上琵(-_0x1a82e7, getPos(self_id), {
              'yaw': _0x1face0,
              'pitch': -_0x49433c
            });
            妇遂命酒使(lp_type, _0x2670e4['x'], _0x2670e4['y'] - 1.53 + lp_offset / 0xa, _0x2670e4['z'], 0x1);
          }
        });
      }
      if (Spammer && ticks % spm_delay == 0x0) {
        let _0xd8c273 = spm_text;
        const _0x370734 = 'abcdef';
        if (spm_gradual) _0xd8c273 = 送客湓浦口(_0xd8c273);
        if (spm_rainbow) _0xd8c273 = '§' + _0x370734[马客在船举(0x0, _0x370734['length'] - 0x1)] + _0xd8c273;
        if (spm_file) {
          let _0x26c6c3 = 抱琵琶半遮(nx_paths + '/Spammer.txt')['split']('\n');
          _0xd8c273 = _0x26c6c3[马客在船举(0x0, _0x26c6c3['length'] - 0x1)];
        }
        if (spm_attack && at_lists['length'] > 0x0) _0xd8c273 = ' §e@' + at_lists['map'](_0x288e8d => getEntityName(_0x288e8d))['join'](',') + ' §r' + _0xd8c273;
        for (let _0x3dc975 = 0x0; _0x3dc975 < spm_count; _0x3dc975++) {
          let _0x205274 = 无限事轻拢(0x6);
          sendChatMessage(spm_random ? _0xd8c273 + '§r || ' + _0x205274 : _0xd8c273);
        }
      }
      if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x380999 => setEntitySize(_0x380999, hb_hor, hb_y));
      if (Sucker && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x41868d => {
          const _0x139e35 = 忽闻水上琵(suck_range, self_pos, _0x5610cd);
          setRealPos(_0x41868d, _0x139e35['x'], _0x139e35['y'], _0x139e35['z']);
        });
      }
      if (Velocity && self_moving) {
        let _0x1fa604 = _0x5610cd['yaw'];
        if (modes['bhop_mode'] === 0x1) {
          bhop_mot = getEntityMotion(self_id);
          bhop_pos = getPos(self_id);
          const _0x56e964 = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
          _0x1fa604 = 弦弦掩抑声(self_id, _0x56e964, 'yaw_pos');
        }
        let _0x44a707 = 忽闻水上琵((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
          'yaw': _0x1fa604,
          'pitch': 0x0
        });
        setMotion(_0x44a707['x'] - self_pos['x'], vec_bhop && (_0x1418ab || bhop_airjump) && (!bhop_airjump || _0x2a8344['y'] < -0.42) ? bhop_heigh : _0x2a8344['y'], _0x44a707['z'] - self_pos['z']);
      }
      if (FlexibleMove) {
        const _0xba45c1 = getCameraRotation();
        const _0x2058ff = 忽闻水上琵(fb_speed / 0xa, self_pos, {
          'yaw': _0xba45c1['yaw'] > 0x0 ? 0xb4 - _0xba45c1['yaw'] : -0xb4 - _0xba45c1['yaw'],
          'pitch': -_0xba45c1['pitch']
        });
        if (!_0x1418ab && self_moving) setMotion(_0x2058ff['x'] - self_pos['x'], 0x0, _0x2058ff['z'] - self_pos['z']);
      }
      if (TargetParticle) {
        at_lists['forEach'](_0x19ade2 => {
          const _0x157d6a = getPos(_0x19ade2);
          妇遂命酒使(tp_type, _0x157d6a['x'], _0x157d6a['y'] + 0.3, _0x157d6a['z'], tp_size);
        });
      }
      if (InvCleaner && modes['ic_mode'] < 0x2 && (self_itemCount != prev_itemCount || cleaner_slot != 0x23 || !ic_change) && ticks % ic_delay === 0x0 && (!ic_bow || _0x5610cd['pitch'] > 0x50) && (!ic_chest || isChest)) {
        let _0x237d3c = {};
        for (let _0xcb5188 = 0x0; _0xcb5188 < ic_max; _0xcb5188++) {
          let _0x1b5ddb = cleaner_slot - _0xcb5188;
          const _0x1b6c36 = getInventory(self_id, _0x1b5ddb);
          if (_0x1b6c36['count'] === 0x0) continue;
          let _0x5d74c5 = false;
          let _0x20b4de = clear_config[_0x1b6c36['namespace']];
          if (typeof _0x237d3c[_0x1b6c36['namespace']] === 'undefined') _0x237d3c[_0x1b6c36['namespace']] = 安感斯人言(-0x2, _0x1b6c36['namespace']);
          let _0xab8630 = _0x237d3c[_0x1b6c36['namespace']];
          if (modes['ic_mode'] === 0x0 && _0x20b4de) _0x5d74c5 = true;
          if (modes['ic_mode'] === 0x1 && (!_0x20b4de || _0x20b4de && (_0x20b4de['max_num'] === -0x1 || _0xab8630 > _0x20b4de['max_num']) && (_0x20b4de['aux'] === 'any' || _0x1b6c36['aux'] === _0x20b4de['aux']))) _0x5d74c5 = true;
          if (ic_move && !_0x5d74c5 && typeof _0x20b4de !== 'undefined' && _0x20b4de['slot'] !== 'undefined') 女尝学琵琶(_0x1b5ddb, _0x20b4de['slot'], false, true);
          if (_0x5d74c5) {
            if (trash_slot > -0x1 && _0x1b5ddb > 0x8) 女尝学琵琶(_0x1b5ddb, trash_slot, false, true);
            dropPlayerInventorySlot(self_id, _0x1b5ddb, false, modes['ic_mode'] === 0x0 && _0x20b4de || modes['ic_mode'] === 0x1 && !_0x20b4de);
          }
        }
        if (cleaner_slot > 0x0) cleaner_slot -= ic_delay;else cleaner_slot = 0x23;
        if (ic_chest) isChest = false;
      }
      if (SafeWalk && self_moving) {
        const _0x15a7d3 = getEntityRot(self_id)['yaw'];
        const _0x2fa6c4 = 忽闻水上琵(0.3, _0x2e46c1, {
          'yaw': _0x15a7d3,
          'pitch': 0x0
        });
        const _0x3ccb3e = getBlock(_0x2fa6c4['x'], _0x2fa6c4['y'] - 0x1, _0x2fa6c4['z']);
        if (_0x3ccb3e['namespace'] === 'minecraft:air' && _0x1418ab) setMotion((-_0x2fa6c4['x'] + self_pos['x']) / 0x8, _0x2a8344['y'], (-_0x2fa6c4['z'] + self_pos['z']) / 0x8);
      }
      if (Spider && self_moving) {
        const _0x2f15ac = getEntityRot(self_id)['yaw'];
        const _0x14c585 = 忽闻水上琵(0.5, _0x2e46c1, {
          'yaw': _0x2f15ac,
          'pitch': 0x0
        });
        const _0x50adb7 = getBlock(_0x14c585['x'], _0x14c585['y'], _0x14c585['z']);
        if (_0x50adb7['namespace'] != 'minecraft:air') setMotion(_0x2a8344['x'], sp_speed / 0xf, _0x2a8344['z']);
      }
      if (Fly && (!_0x1418ab || !fly_air) && (!fly_move || self_moving)) {
        const _0x325e4a = fly_ud ? fly_current : 0x0;
        let _0x43bdf4 = 酒欲饮无管(_0x2a8344, self_pos, fly_speed * 2.5);
        if (modes['fly_mode'] === 0x0) {
          if (!fly_y) setPos(_0x43bdf4['x'], self_pos['y'] + _0x325e4a, _0x43bdf4['z']);
          if (fly_y) setPos(self_pos['x'], _0x43bdf4['y'], self_pos['z']);
          if (fly_zero) setMotion(0x0, -0.01, 0x0);
        }
        if (modes['fly_mode'] === 0x1) setMotion(_0x43bdf4['x'] - self_pos['x'], _0x43bdf4['y'] - self_pos['y'] + _0x325e4a, _0x43bdf4['z'] - self_pos['z']);
        if (fly_playerAuth) silentMove(_0x43bdf4['x'], _0x43bdf4['y'], _0x43bdf4['z']);
        if (fly_moveplayer) sendMovePlayer({
          'id': self_id,
          'pos': {
            'x': _0x43bdf4['x'],
            'y': _0x43bdf4['y'],
            'z': _0x43bdf4['z']
          },
          'mode': 0x1,
          'ground': true,
          'rot': {
            'pitch': _0x5610cd['pitch'],
            'yaw': _0x5610cd['yaw']
          },
          'yHeadRot': getEntityBodyRot(self_id)
        });
        fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
      }
      if (ActivitySender && self_moving) {
        let _0x5006f3 = 酒欲饮无管(_0x2a8344, self_pos, 0x1);
        const _0x3a6e47 = 弦弦掩抑声(self_id, _0x5006f3, 'yaw_pos');
        sendChatMessage('我正在向' + Math['round'](_0x3a6e47) + '°方向移动');
      }
      if (FakeWater) setBlock(_0x2e46c1['x'], _0x2e46c1['y'], _0x2e46c1['z'], 'minecraft:water', 0x0);
      if (Suspend) setMotion(_0x2a8344['x'], -0x186a0, _0x2a8344['z']);
      if (Hover) setMotion(_0x2a8344['x'], 0.05, _0x2a8344['z']);
      if (Rider && at_lists['length'] > 0x0) {
        let _0x4f32fd = getPos(at_lists[0x0]);
        const _0x431561 = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
        欲语迟移船(_0x4f32fd['x'] + _0x431561, _0x4f32fd['y'] + rid_y + 0x1, _0x4f32fd['z'] + _0x431561);
        _0x482098['push'](归客不发寻(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
      }
      if (JetPack) {
        const _0x271ead = getCameraRotation();
        if (self_moving || !spr_move) {
          let _0x10c029 = 忽闻水上琵(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
            'yaw': _0x271ead['yaw'] > 0x0 ? 0xb4 - _0x271ead['yaw'] : -0xb4 - _0x271ead['yaw'],
            'pitch': -_0x271ead['pitch']
          });
          if (spr_hor) _0x10c029['y'] = self_pos['y'];
          const _0x594c6a = getBlock(_0x10c029['x'], _0x10c029['y'], _0x10c029['z']);
          if (_0x594c6a['namespace'] === 'minecraft:air' || spr_nowall) {
            if (modes['sprint_mode'] === 0x0) {
              setPos(_0x10c029['x'], _0x10c029['y'], _0x10c029['z']);
              setEntityMotion(self_id, _0x2a8344['x'], -1e-7, _0x2a8344['z']);
            }
            if (modes['sprint_mode'] === 0x1) setMotion(_0x10c029['x'] - self_pos['x'], _0x10c029['y'] - self_pos['y'], _0x10c029['z'] - self_pos['z']);
            if (spr_auth) silentMove(_0x10c029['x'], _0x10c029['y'], _0x10c029['z']);
            if (spr_packet) sendMovePlayer({
              'id': self_id,
              'pos': {
                'x': _0x10c029['x'],
                'y': _0x10c029['y'],
                'z': _0x10c029['z']
              },
              'mode': 0x1,
              'ground': true,
              'rot': {
                'pitch': _0x5610cd['pitch'],
                'yaw': _0x5610cd['yaw']
              },
              'yHeadRot': getEntityBodyRot(self_id)
            });
          } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        }
      }
      if (Crasher) {
        for (let _0x32482e = Math['round'](-cs_count / 0x2); _0x32482e <= Math['round'](cs_count / 0x2); _0x32482e++) {
          const _0x2fce68 = 0xa ** _0x32482e;
          if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x2e46c1['x'], _0x2e46c1['y'], _0x2e46c1['z'], _0x2fce68 ** 0x2);
          if (modes['cs_mode'] === 0x1) sendRpc(prev_rpc['id'], prev_rpc['data']);
          if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n'['repeat'](0x64));
          if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n'['repeat'](0x64));
          if (modes['cs_mode'] === 0x4) sendSound(_0x2fce68, _0x2fce68, _0x2fce68, _0x2fce68, _0x32482e);
          if (modes['cs_mode'] === 0x5) getEntityList()['forEach'](_0x37a643 => 江头夜送客(_0x37a643, false));
        }
      }
      if (KickAura && at_lists['length'] > 0x0) {
        let _0x5d5d65 = [];
        if (ka_player) _0x5d5d65['concat'](_0x186700['map'](_0x40dcad => _0x40dcad['id']));
        if (ka_target) _0x5d5d65['concat'](at_lists);
        if (modes['ka_mode'] == 0x0) _0x5d5d65['forEach'](_0xe9c3ba => {
          if (_0xe9c3ba == self_id) return;
          const _0x1ad9ff = getEntityName(_0xe9c3ba);
          let _0x6e514e = _0x1ad9ff['indexOf'](']') - 0x2;
          let _0x2d4f4d = ['b', 'c', 'e', 'a'];
          for (let _0x6152fa of _0x2d4f4d) {
            if (_0x1ad9ff['indexOf']('·§' + _0x6152fa) != -0x1) {
              _0x6e514e = _0x1ad9ff['indexOf']('·§' + _0x6152fa);
              break;
            }
          }
          let _0x40da40 = _0x6e514e === -0x1 ? _0x1ad9ff : _0x1ad9ff['slice'](_0x6e514e + 0x3, _0x1ad9ff['length']);
          if (_0x40da40['includes']('【') && _0x40da40['includes']('】')) _0x40da40 = 琵琶行浔阳(_0x40da40, '【', '】');
          for (let _0x34219a = 0x0; _0x34219a < ka_count; _0x34219a++) executeCommand('/tell "' + _0x40da40 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
        });
        if (modes['ka_mode'] == 0x1) {
          for (let _0x44057a = 0x0; _0x44057a < ka_count; _0x44057a++) executeCommand('/tell @a[' + _0x5d5d65['map'](_0x30eb8e => 'name="' + getEntityName(_0x30eb8e) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
        }
      }
      if (AutoSave && _0x2a8344['y'] < -as_minY && !_0x1418ab) {
        if (as_block && !self_item['isBlock']) {
          for (let _0x4ca480 = 0x0; _0x4ca480 < 0x9; _0x4ca480++) {
            const _0x17a181 = getInventory(self_id, _0x4ca480);
            if (_0x17a181['isBlock'] || as_water && _0x17a181['namespace'] === 'minecraft:water_bucket') {
              selectPlayerInventorySlot(self_id, _0x4ca480);
              break;
            }
          }
        }
        if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
          for (let _0x35e5f9 of 眉信手续续(_0x2e46c1, {
            'x': _0x2e46c1['x'],
            'y': _0x2e46c1['y'] - as_minY * 0x5,
            'z': _0x2e46c1['z']
          }, 0x1, true)) {
            const _0x2ae682 = getBlock(_0x35e5f9['x'], _0x35e5f9['y'], _0x35e5f9['z']);
            if (_0x2ae682['namespace'] != 'minecraft:air') continue;
            const _0x124008 = getBlock(_0x35e5f9['x'], _0x35e5f9['y'] - 0x1, _0x35e5f9['z']);
            if (_0x124008['namespace'] === 'minecraft:air' || _0x124008['namespace'] === 'minecraft:water') continue;
            buildBlock(self_id, _0x35e5f9['x'], _0x35e5f9['y'], _0x35e5f9['z'], 0x0);
          }
        }
        if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        if (!as_near && self_item['namespace'] != 'minecraft:water_bucket') {
          if (as_fake) callModule(0x25, '{"value":true}');
          buildBlock(self_id, _0x2e46c1['x'], _0x2e46c1['y'] - as_minY * 3.1, _0x2e46c1['z'], 0x0);
          if (as_fake) callModule(0x25, '{"value":false}');
        }
        if (as_near) {
          let _0x50fac0 = {};
          let _0x415127 = Infinity;
          for (let _0x41b976 = -0x5; _0x41b976 <= 0x5; _0x41b976++) {
            for (let _0x4504de = -0x1; _0x4504de <= 0x0; _0x4504de++) {
              for (let _0x4ccdb9 = -0x5; _0x4ccdb9 <= 0x5; _0x4ccdb9++) {
                let _0x1b4434 = Math['sqrt'](_0x41b976 * _0x41b976 + _0x4ccdb9 * _0x4ccdb9 + _0x4504de * _0x4504de);
                let _0x3861ed = {
                  'x': _0x41b976 + _0x2e46c1['x'],
                  'y': _0x4504de + _0x2e46c1['y'],
                  'z': _0x4ccdb9 + _0x2e46c1['z']
                };
                const _0x194bfe = getBlock(_0x3861ed['x'], _0x3861ed['y'], _0x3861ed['z']);
                if (_0x194bfe['namespace'] === 'minecraft:air') continue;
                if (_0x1b4434 < _0x415127) {
                  _0x415127 = _0x1b4434;
                  _0x50fac0 = _0x3861ed;
                }
              }
            }
          }
          if (_0x50fac0 != {}) {
            let _0x451d6f = {
              'x': _0x2e46c1['x'],
              'y': _0x2e46c1['y'] - 0x1 + _0x2a8344['y'] * 0x3,
              'z': _0x2e46c1['z']
            };
            let _0x104415 = 眉信手续续(_0x50fac0, _0x451d6f, 0.8, true);
            _0x104415['forEach'](_0x4585b2 => {
              const _0x1d4d1e = getBlock(_0x4585b2['x'], _0x4585b2['y'], _0x4585b2['z']);
              if (_0x1d4d1e['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x4585b2['x']), Math['floor'](_0x4585b2['y']), Math['floor'](_0x4585b2['z']));
            });
          }
        }
      }
      if (AssAssInate && at_lists['length'] > 0x0) {
        let _0x4c620a = getEntityRot(at_lists[0x0]);
        let _0x4ad36d = getPos(at_lists[0x0]);
        if (aai_h > aai_max) aai_reverse = true;else if (aai_h < aai_min) aai_reverse = false;
        aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
        const _0x2c3dbc = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
        aai_current = Surround ? aai_current + _0x2c3dbc : _0x4c620a['yaw'];
        if (Surround && aai_current > 0xb4) aai_current = -0xb4;
        let _0x570d45 = 忽闻水上琵(-aai_len, _0x4ad36d, {
          'yaw': aai_current,
          'pitch': 0x0
        });
        if (modes['sur_mode'] === 0x0) setPos(_0x570d45['x'], _0x4ad36d['y'] + 1.83 + aai_h, _0x570d45['z']);
        if (modes['sur_mode'] === 0x1) 二年恬然自(_0x570d45['x'], _0x4ad36d['y'] + 1.83 + aai_h, _0x570d45['z']);
        _0x482098['push'](归客不发寻(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
      }
      if (SoundPlayer || sp_data['length'] > 0x0) {
        let _0x73dc4 = [];
        if (sp_target) _0x73dc4 = at_lists;
        if (sp_all) _0x73dc4 = getPlayerList();
        if (sp_entity) _0x73dc4 = getEntityList();
        if (sp_posList['length'] > 0x0) _0x73dc4 = sp_posList;
        let _0x37907b = [{
          'sound': sp_type,
          'level': sp_level
        }];
        sp_yaw += 0x14;
        if (sp_yaw > 0xb4) sp_yaw = -0xb4;
        for (let _0x2e5d1a = 0x0; _0x2e5d1a < sp_vec; _0x2e5d1a++) {
          if (sp_data['length'] > 0x0) _0x37907b = sp_data['shift']()['sounds'];
          if (_0x37907b['length'] > 0x0) {
            _0x1e86f8: for (let _0x21ba76 of _0x37907b) {
              let _0x351a5f = _0x21ba76['sound'];
              let _0x109c38 = _0x21ba76['level'];
              if (sp_large) {
                const _0x43bad9 = Math['round'](sp_range * sp_space / 0x2);
                for (let _0x7810a7 = -_0x43bad9; _0x7810a7 <= _0x43bad9; _0x7810a7 += sp_space) {
                  for (let _0x4f3d0a = -_0x43bad9; _0x4f3d0a <= _0x43bad9; _0x4f3d0a += sp_space) {
                    sendSound(Number(_0x351a5f), self_pos['x'] + _0x7810a7, self_pos['y'] + sp_y, self_pos['z'] + _0x4f3d0a, Number(_0x109c38));
                  }
                }
                continue _0x1e86f8;
              }
              _0x73dc4['forEach'](_0x2bbb91 => {
                if (typeof _0x2bbb91 != 'string') for (let _0x2a440e = 0x0; _0x2a440e < sp_count; _0x2a440e++) sendSound(Number(_0x351a5f), _0x2bbb91['x'], _0x2bbb91['y'] + sp_y, _0x2bbb91['z'], Number(_0x109c38));else {
                  if (_0x2bbb91 === self_id && sp_exclude) return;
                  const _0x54f33d = getPos(_0x2bbb91);
                  let _0x318ea4 = 忽闻水上琵(sp_distance, _0x54f33d, {
                    'yaw': sp_yaw,
                    'pitch': 0x0
                  });
                  for (let _0xe7d872 = 0x0; _0xe7d872 < sp_count; _0xe7d872++) sendSound(Number(_0x351a5f), _0x318ea4['x'], _0x318ea4['y'] + sp_y, _0x318ea4['z'], Number(_0x109c38));
                }
              });
            }
          }
        }
        if (sp_data['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
      }
      if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
        sp_data = JSON['parse'](sp_file);
        归客不发寻(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
      }
      if (_0x14266b['current'] < 0x6) _0x482098['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
      if (AutoDo && Math['round'](_0x14266b['current']) <= ad_min) {
        const _0x523a78 = modes['ad_mode'];
        if (_0x523a78 === 0x2) removeEntity(self_id);
        if (_0x523a78 === 0x0 || _0x523a78 === 0x1) executeCommand(_0x523a78 === 0x0 ? '/hub' : '/again');
        if (_0x523a78 === 0x3) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));else {
            setEntityRot(self_id, 0x5a, _0x5610cd['yaw']);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x523a78 === 0x4) {
          if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));else {
            快弹数曲曲();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x523a78 === 0x5) {
          if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));else {
            快弹数曲曲();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x523a78 === 0x6) leaveWorld();
      }
      if (NoLiquid) {
        let {
          max,
          current,
          min
        } = getEntityAttribute(self_id, 'minecraft:movement');
        max *= nl_offset;
        min *= nl_offset;
        current *= nl_offset;
        setEntityAttribute(self_id, 'minecraft:lava_movement', {
          'max': max,
          'min': min,
          'current': current
        });
        setEntityAttribute(self_id, 'minecraft:underwater_movement', {
          'max': max,
          'min': min,
          'current': current
        });
      }
      if (Breaker && bk_auto) buildBlock(self_id, self_pos['x'], self_pos['y'], self_pos['z'], 0x1);
      if (Jesus) {
        const _0x15b492 = getBlock(_0x2e46c1['x'], _0x2e46c1['y'] - 0x1, _0x2e46c1['z']);
        if (_0x15b492['namespace'] === 'minecraft:flowing_water' || _0x15b492['namespace'] === 'minecraft:water' || _0x15b492['namespace'] === 'minecraft:flowing_lava' || _0x15b492['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x2a8344['x'], 0x0, _0x2a8344['z']);
      }
      if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x469fb5 => {
          let _0x162400 = 京都声问其(_0x469fb5);
          归客不发寻(0x0, 'TargetInfo', '\n' + _0x162400 + '\n§r§b==============================', '§r');
          if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x469fb5) + '_' + _0x469fb5 + '.txt', _0x162400);
        });
      }
      if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
      if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
        const _0x31410a = at_lists[0x0];
        const _0x4bb5c6 = 声暗问弹者(self_id, _0x31410a);
        const _0x5dd7f7 = 声思似诉平(self_id, _0x31410a, aa_fov, 0x0);
        if (_0x4bb5c6 <= aa_range && _0x5dd7f7 || aa_throw) {
          const _0x75cee0 = 马客在船举(aa_min, aa_max);
          let _0x1e7e91 = 弦弦掩抑声(self_id, _0x31410a, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          let _0x177a6d = 弦弦掩抑声(self_id, _0x31410a, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          if (_0x1e7e91 <= 0xb4 && _0x1e7e91 >= -0xb4 && _0x177a6d <= 0x5a && _0x177a6d >= -0x5a) {
            let _0x2f4cfa = _0x1e7e91 >= 0x0 ? -_0x75cee0 : _0x75cee0;
            let _0x3b9283 = _0x177a6d >= 0x0 ? _0x75cee0 : -_0x75cee0;
            if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x1e7e91) < _0x75cee0 || Math['abs'](_0x177a6d) < _0x75cee0)) {
              _0x2f4cfa = -_0x1e7e91 / ((0x28 - _0x75cee0) / 0x2);
              _0x3b9283 = -_0x177a6d / ((0x28 - _0x75cee0) / 1.125);
            }
            const _0x5b4f52 = 声思似诉平(self_id, _0x31410a, aa_prec * 0x2, 0x1);
            const _0x2ff195 = 声思似诉平(self_id, _0x31410a, aa_prec * 0x4, 0x2);
            if (!_0x5b4f52) setLocalPlayerTurn(0x0, _0x2f4cfa);
            if (!_0x2ff195 && !aa_throw || !isSimilar(_0x177a6d, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x3b9283, 0x0);
          }
          _0x482098['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x31410a), '§r'));
        }
      }
      if (InfiniteAura && ia_targets['length'] > 0x0) {
        ia_targets['forEach'](_0x54268b => {
          const _0x3f4ea2 = _0x54268b;
          const _0x3c7b16 = getPos(_0x3f4ea2);
          if (!_0x3f4ea2 || !findEntity(_0x3f4ea2)) return;
          if (声暗问弹者(ia_targets[0x0], self_id) > ia_range) return;
          if (ia_tick === 0x0) {
            const _0x37f1c7 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMot = _0x2a8344;
            for (let _0x3c3117 = 0x0; _0x3c3117 < ia_move; _0x3c3117++) {
              if (ia_toClick) {
                buildBlock(self_id, _0x3c7b16['x'] + _0x37f1c7, _0x3c7b16['y'], _0x3c7b16['z'] + _0x37f1c7, 0x1);
                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                  'pos': {
                    'x': _0x3c7b16['x'] + _0x37f1c7,
                    'y': _0x3c7b16['y'] + ia_offset / 0x5,
                    'z': _0x3c7b16['z'] + _0x37f1c7
                  }
                });
              }
              if (modes['ia_mode'] === 0x0) setPos(_0x3c7b16['x'], _0x3c7b16['y'], _0x3c7b16['z']);
              if (modes['ia_mode'] === 0x1) sendPlayerAuthInput({
                'pos': {
                  'x': _0x3c7b16['x'] + _0x37f1c7,
                  'y': _0x3c7b16['y'] + ia_offset / 0x5,
                  'z': _0x3c7b16['z'] + _0x37f1c7
                }
              });
            }
            if (ia_jump) playerJump();
            for (let _0x2adc4b = 0x0; _0x2adc4b < ia_attack; _0x2adc4b++) 江头夜送客(_0x3f4ea2, Swing);
          }
          if (ia_tick <= -ia_return && ia_fix) 初为霓裳后();
        });
        if (ia_tick <= -ia_return) {
          if (!ia_fix) 初为霓裳后();
          ia_tick = ia_delay;
        }
        if (ia_tick > -ia_return) ia_tick--;
        _0x482098['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 添酒回灯重(ia_targets['map'](_0x344db6 => getEntityName(_0x344db6))), '§r'));
      }
      if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 慢捻抹复挑(_0x2e46c1);
      if (AutoVoid) {
        const _0x52db60 = 面转轴拨弦(self_id);
        const _0x6b35d = getBlock(_0x52db60['x'], _0x2e46c1['y'] - 0x1, _0x52db60['z']);
        for (let _0x5281eb = -0x2; _0x5281eb < 0x3; _0x5281eb++) {
          for (let _0x5a7021 = -0x2; _0x5a7021 < 0x3; _0x5a7021++) {
            const _0x29c697 = getBlock(_0x52db60['x'] + _0x5281eb, _0x2e46c1['y'] - 0x1, _0x52db60['z'] + _0x5a7021);
            if (_0x29c697['namespace'] === 'minecraft:air' && _0x2a8344['y'] < -0.0783 && _0x2a8344['y'] > -0.0785 && _0x6b35d['namespace'] != 'minecraft:air') {
              const _0x47b8c1 = -弦弦掩抑声(self_id, {
                'x': _0x52db60['x'] + _0x5281eb,
                'y': self_pos['y'],
                'z': _0x52db60['z'] - _0x5a7021
              }, 'yaw_pos');
              const _0x3526cf = 忽闻水上琵(0.5, self_pos, {
                'yaw': _0x47b8c1,
                'pitch': 0x0
              });
              setMotion(_0x3526cf['x'] - self_pos['x'], _0x2a8344['y'], _0x3526cf['z'] - self_pos['z']);
              break;
            }
          }
        }
      }
      if (AvoidThrow) {
        const _0x4cc5b2 = getEntityList();
        _0x4cc5b2['forEach'](_0xb4de87 => {
          if ((getEntityTypeId(_0xb4de87) === 0x400055 || getEntityTypeId(_0xb4de87) === 0x400056 || getEntityTypeId(_0xb4de87) === 0xc00050) && 声暗问弹者(_0xb4de87, self_id) <= at_range) {
            if (at_remove) removeEntity(_0xb4de87);
            if (modes['avoid_mode'] === 0x0) {
              const _0xc73ec8 = 弦弦掩抑声(getPos(_0xb4de87), self_id, 'yaw_pos');
              const _0x397bf5 = 忽闻水上琵(0.5, self_pos, {
                'yaw': _0xc73ec8,
                'pitch': _0x5610cd['pitch']
              });
              setMotion(_0x397bf5['x'] - self_pos['x'], _0x2a8344['y'], _0x397bf5['z'] - self_pos['z']);
            }
            if (modes['avoid_mode'] === 0x1) 江头夜送客(_0xb4de87, Swing);
            if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
          }
        });
      }
      if (TrajectoryRender) {
        const _0x1c0817 = getPlayerList();
        let _0x24e662 = [];
        let _0x56a514 = false;
        let _0x466851 = {
          'x': 0x0,
          'y': 0x0,
          'z': 0x0
        };
        for (let _0x1dfe2c = 0x1; _0x1dfe2c <= tr_len; _0x1dfe2c += tr_dens / 0xa) {
          let _0x44e76f = 少小时欢乐(_0x1dfe2c, _0x5610cd['pitch'], tr_speed, tr_g)['data'];
          let _0x4c7463 = 忽闻水上琵(_0x1dfe2c, self_pos, {
            'yaw': _0x5610cd['yaw'],
            'pitch': 0x0
          });
          let _0xf186b8 = getBlock(_0x4c7463['x'], _0x4c7463['y'] + _0x44e76f, _0x4c7463['z']);
          if (tr_show || !_0x56a514) {
            _0x1c0817['forEach'](_0x13f6b7 => {
              if (!_0x56a514) {
                let _0x3b496f = getPos(_0x13f6b7);
                let _0x2cd4f7 = {
                  'x': _0x4c7463['x'],
                  'y': _0x4c7463['y'] + _0x44e76f,
                  'z': _0x4c7463['z']
                };
                let _0x14db70 = getEntitySize(_0x13f6b7);
                if (_0x2cd4f7['x'] <= _0x3b496f['x'] + _0x14db70['x'] / 0x2 && _0x2cd4f7['x'] >= _0x3b496f['x'] - _0x14db70['x'] / 0x2 && _0x2cd4f7['y'] <= _0x3b496f['y'] + _0x14db70['y'] / 0x2 && _0x2cd4f7['y'] >= _0x3b496f['y'] - _0x14db70['y'] / 0x2 && _0x2cd4f7['z'] <= _0x3b496f['z'] + _0x14db70['x'] / 0x2 && _0x2cd4f7['z'] >= _0x3b496f['z'] - _0x14db70['x'] / 0x2) {
                  _0x482098['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x13f6b7), '§r'));
                  _0x56a514 = true;
                }
              }
            });
          }
          if (_0xf186b8['namespace'] != 'minecraft:air' || _0x56a514) {
            _0x466851 = _0x4c7463;
            if (modes['tr_mode'] === 0x1 && _0xf186b8['namespace'] != 'minecraft:air') {
              for (let _0x37c69c = 0x0; _0x37c69c <= 0x14; _0x37c69c += 0x2) 妇遂命酒使(tr_type, _0x466851['x'], _0x466851['y'] + _0x44e76f + _0x37c69c / 0xa, _0x466851['z'], 0x1);
            }
            break;
          }
        }
        if (modes['tr_mode'] === 0x0) {
          let _0x3c5cfe = getDistance(_0x466851, self_pos);
          for (let _0x1d532a = 0x1; _0x1d532a <= _0x3c5cfe; _0x1d532a += tr_dens / 0xa) {
            let _0x1793e1 = 少小时欢乐(_0x1d532a, _0x5610cd['pitch'], tr_speed, tr_g)['data'];
            let _0x12d9fe = (tr_offset - 0xa) / 0xa;
            let _0x484739 = _0x5610cd['yaw'] + 0x5a;
            if (_0x484739 > 0xb4) _0x484739 = _0x484739 - 0x168;
            if (_0x484739 < -0xb4) _0x484739 = _0x484739 + 0x168;
            let _0xe67093 = 忽闻水上琵(_0x12d9fe, self_pos, {
              'yaw': _0x484739,
              'pitch': 0x0
            });
            let _0x35d4bb = 忽闻水上琵(_0x1d532a, _0xe67093, {
              'yaw': _0x5610cd['yaw'] - Math['atan'](_0x12d9fe / _0x3c5cfe) * (0xb4 / Math['PI']),
              'pitch': 0x0
            });
            let _0x34edfb = getBlock(_0x35d4bb['x'], _0x35d4bb['y'] + _0x1793e1, _0x35d4bb['z']);
            if (modes['tr_mode'] === 0x0 && _0x34edfb['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x35d4bb['x'], _0x35d4bb['y'] + _0x1793e1 + 0.5, _0x35d4bb['z'], 0x1);
          }
        }
      }
      if (FarmAura) {
        const _0x50c040 = 面转轴拨弦(self_id);
        for (let _0x7f6adb = -0x4; _0x7f6adb < 0x5; _0x7f6adb++) {
          for (let _0x340c0e = -0x4; _0x340c0e < 0x5; _0x340c0e++) {
            const _0x28585c = getBlock(_0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'] - 0x1, _0x50c040['z'] + _0x340c0e);
            const _0x41b820 = getBlock(_0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'], _0x50c040['z'] + _0x340c0e);
            if ((_0x28585c['namespace'] === 'minecraft:dirt' || _0x28585c['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'] - 0x1, _0x50c040['z'] + _0x340c0e, 0x1);
            if (_0x28585c['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'] - 0x1, _0x50c040['z'] + _0x340c0e, 0x1);
            if (_0x41b820['aux'] === 0x7 && (_0x41b820['namespace'] === 'minecraft:beetroot' || _0x41b820['namespace'] === 'minecraft:wheat' || _0x41b820['namespace'] === 'minecraft:carrots' || _0x41b820['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'], _0x50c040['z'] + _0x340c0e, 0x1);
            if (self_item['namespace'] === 'minecraft:bone_meal' && _0x41b820['aux'] <= 0x6 && (_0x41b820['namespace'] === 'minecraft:beetroot' || _0x41b820['namespace'] === 'minecraft:wheat' || _0x41b820['namespace'] === 'minecraft:carrots' || _0x41b820['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x50c040['x'] + _0x7f6adb, _0x2e46c1['y'], _0x50c040['z'] + _0x340c0e, 0x1);
          }
        }
      }
      if (ActionManager) {
        if (!am_file) {
          if (ticks % am_delay == 0x0) {
            for (let _0x51ad0f = 0x0; _0x51ad0f < am_count; _0x51ad0f++) sendPlayerAction({
              'id': self_id,
              'pos': {
                'x': _0x2e46c1['x'],
                'y': _0x2e46c1['y'] - 0x1,
                'z': _0x2e46c1['z']
              },
              'type': Number(am_id),
              'value': Number(am_value)
            });
          }
        } else {
          const _0x156e25 = JSON['parse'](抱琵琶半遮(nx_paths + '/PlayerAction.json'));
          _0x156e25['forEach'](_0x58f63c => {
            if (_0x58f63c['delay'] % am_tick === 0x0) {
              for (let _0x513606 = 0x0; _0x513606 < _0x58f63c['count']; _0x513606++) sendPlayerAction({
                'id': self_id,
                'pos': self_pos,
                'value': _0x58f63c['value'],
                'type': Number(_0x58f63c['id'])
              });
            }
          });
        }
      }
      if (PlayerAuthManager && ticks % pam_delay === 0x0) {
        for (let _0x22091e = 0x0; _0x22091e < pam_count; _0x22091e++) sendPlayerAuthInput({
          'pos': {
            'x': _0x2e46c1['x'],
            'y': _0x2e46c1['y'] - 0x1,
            'z': _0x2e46c1['z']
          },
          'inputs': pam_array['map'](_0xe9279d => Number(_0xe9279d)),
          'actions': [{
            'id': self_id,
            'pos': self_pos,
            'type': Number(pam_id),
            'value': Number(pam_value)
          }]
        });
      }
      if (mine_destroy && (mine_list['length'] === 0x0 || mine_current >= mine_num)) {
        mine_destroy = false;
        mine_name = null;
        mine_list = [];
        mine_current = 0x0;
      }
      if (AutoJump && _0x1418ab) setMotion(_0x2a8344['x'], aj_y / 0x64, _0x2a8344['z']);
      if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x4c192e => {
        if (bc_packet) silentMove(_0x4c192e['x'], _0x4c192e['y'], _0x4c192e['z']);
        buildBlock(self_id, _0x4c192e['x'], _0x4c192e['y'], _0x4c192e['z'], 0x0);
      });
      if (NoFall && _0x2a8344['y'] < -nf_max && !_0x1418ab) {
        if (modes['nf_mode'] === 0x0) setMotion(0x0, 0x0, 0x0);
        if (modes['nf_mode'] === 0x1) {
          callModule(0x25, '{"value":true}');
          setTimeout(() => callModule(0x25, '{"value":false}'), 0x4b);
        }
        if (modes['nf_mode'] === 0x2) {
          callModule(0x1e, '{"value":true,"speed":0}');
          setTimeout(() => callModule(0x1e, '{"value":false}'), 0x4b);
        }
        if (modes['nf_mode'] === 0x3) sendPlayerAction({
          'id': self_id,
          'pos': self_pos,
          'value': 0x1,
          'type': 0x7
        });
      }
      if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x1418ab && _0x1418ab)) {
        if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
        for (let _0x4828aa = 0x0; _0x4828aa < 0x168; _0x4828aa += do_density / 0xa) {
          const _0x42cb03 = do_l_axis * Math['cos'](_0x4828aa * Math['PI'] / 0xb4);
          const _0x567a03 = do_s_axis * Math['sin'](_0x4828aa * Math['PI'] / 0xb4);
          妇遂命酒使(0x37, do_pos[0x0] + _0x42cb03, do_pos[0x1], do_pos[0x2] + _0x567a03, 0x1);
        }
      }
      if (FakeLag) {
        if (fl_t >= fl_normal + fl_abnormal) {
          fakelag_status = !fl_reverse;
          fl_t = 0x0;
        }
        if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
        if (fl_show) _0x482098['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
      }
      if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
        const _0x5cca3d = fb_list['shift']();
        buildBlock(self_id, Math['round'](_0x5cca3d['x']), Math['round'](_0x5cca3d['y'] - 0x1), Math['round'](_0x5cca3d['z']), 0x0);
        fb_t = 0x0;
        if (fb_list['length'] === 0x0) fb_success = true;
      }
      if (TargetHealth && at_lists['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Health', 'Health: ' + 弹说尽心中(at_lists[0x0], modes['health_mode']), '§r'));
      if (ShowTargetList && at_lists['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(at_lists['map'](_0x27fac6 => getEntityName(_0x27fac6))), '§r'));
      if (ShowInfo) {
        const _0x5286a0 = getEntityAttribute(self_id, 'minecraft:movement');
        const _0x385591 = Math['sqrt'](_0x2a8344['x'] * _0x2a8344['x'] + _0x2a8344['z'] * _0x2a8344['z']);
        if (show_speed) _0x482098['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x385591['toFixed'](0x2) + 'm/s 移动速度: ' + _0x41eeb6['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x415153['toFixed'](0x2) + 'm/s 坐标速度:' + _0x37cf15['toFixed'](0x2) + 'm/s 能力速度:' + _0x5286a0['current']['toFixed'](0x2) + ('\n移动值: [' + _0x2a8344['x']['toFixed'](0x2) + ', ' + _0x2a8344['y']['toFixed'](0x2) + ', ' + _0x2a8344['z']['toFixed'](0x2) + ']'), '§r'));
        if (show_pos) _0x482098['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x2e46c1['x'] + ', Y:' + _0x2e46c1['y'] + ', Z:' + _0x2e46c1['z'] + ']', '§r'));
        if (show_item && self_item['count'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
        if (show_resources) {
          const _0x4097cd = {
            'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
            'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
            'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
            'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
            'star': 安感斯人言(-0x2, 'minecraft:nether_star')
          };
          const _0x47a57e = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
          _0x482098['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x4097cd['emerald'] + ', 钻石:' + _0x4097cd['diamond'] + ', 金锭:' + _0x4097cd['gold'] + ', 铁锭:' + _0x4097cd['iron'] + '\n下界之心:' + _0x4097cd['star'] + ', 经验:' + _0x47a57e, '§r'));
        }
        if (show_target_dis && at_lists['length'] > 0x0) _0x482098['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
        if (show_player_list) _0x482098['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x186700['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
        if (show_kill_num) _0x482098['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
        if (show_time) _0x482098['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
        if (show_attack_rate) _0x482098['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
        if (show_real_aps) _0x482098['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
        if (show_ping) _0x482098['push'](归客不发寻(0x1, 'PING', gd_ping + 'ms', '§r'));
        if (show_self_health) _0x482098['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x14266b['current'] + ', 最大值:' + _0x14266b['max'] + ', 最小值:' + _0x14266b['min'], '§r'));
        if (show_detail_item) _0x482098['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
        if (show_real_time) {
          const _0x250fc4 = new Date();
          const _0x2ba29c = _0x250fc4['getFullYear']();
          const _0x12a927 = ('0' + (_0x250fc4['getMonth']() + 0x1))['slice'](-0x2);
          const _0x1858bc = ('0' + _0x250fc4['getDate']())['slice'](-0x2);
          const _0x592154 = ('0' + _0x250fc4['getHours']())['slice'](-0x2);
          const _0xb13ca6 = ('0' + _0x250fc4['getMinutes']())['slice'](-0x2);
          const _0x4fbcdd = ('0' + _0x250fc4['getSeconds']())['slice'](-0x2);
          const _0x249c58 = _0x2ba29c + '-' + _0x12a927 + '-' + _0x1858bc + ' ' + _0x592154 + ':' + _0xb13ca6 + ':' + _0x4fbcdd;
          _0x482098['push'](归客不发寻(0x1, 'RealTime', _0x249c58, '§r'));
        }
      }
      if (ModifySwing && ms_speed != 0x11) setEntityEffect(self_id, {
        'id': ms_speed < 0x11 ? 0x4 : 0x3,
        'duration': 0x2,
        'amplifier': ms_speed < 0x11 ? 0x11 - ms_speed : ms_speed - 0x11,
        'displayOnScreenTextureAnimation': false,
        'noCounter': true,
        'ambient': true,
        'effectVisible': false
      });
      if (NightVision) setEntityEffect(self_id, {
        'id': 0x10,
        'duration': 0x258,
        'amplifier': 0x1,
        'displayOnScreenTextureAnimation': false,
        'noCounter': true,
        'effectVisible': false,
        'ambient': true
      });
      if (typeof rc_angles['angle'] !== 'undefined') {
        let _0x10735c = _0x5610cd['yaw'];
        _0x10735c += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
        if (_0x10735c >= 0xb4) _0x10735c -= 0x168;
        if (_0x10735c <= -0xb4) _0x10735c += 0x168;
        let _0x522c96 = (_0x1418ab ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x246ebf = (_0x1418ab ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x3d2c53 = {};
        if (rc_surround && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) <= rc_lock) {
          let _0x18325c = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
          let _0x15ec62 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_rot');
          let _0x3dc066 = _0x15ec62 > -0x5a || _0x15ec62 < 0x5a ? rc_speed : -rc_speed;
          let _0x42087a = _0x10735c > -0x5a || _0x10735c < 0x5a ? rc_speed : -rc_speed;
          let _0x32231c = rc_relative ? _0x3dc066 : _0x42087a;
          Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x18325c -= _0x32231c * 0x5 : _0x18325c += _0x32231c * 0x5;
          if (_0x18325c > 0xb4) _0x18325c -= 0x168;
          if (_0x18325c < -0xb4) _0x18325c += 0x168;
          let _0x32b88c = 忽闻水上琵(rc_dist, getPos(at_lists[0x0]), {
            'yaw': _0x18325c,
            'pitch': 0x0
          });
          let _0xb06efb = 弦弦掩抑声(_0x32b88c, self_id, 'yaw_pos');
          _0x3d2c53 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x522c96 : _0x246ebf : rc_speed / 0x8, self_pos, {
            'yaw': _0xb06efb,
            'pitch': 0x0
          });
        } else _0x3d2c53 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x522c96 : _0x246ebf : rc_speed / 0x8, self_pos, {
          'yaw': _0x10735c,
          'pitch': 0x0
        });
        Camera_anchor_pos = {
          'x': Camera_anchor_pos['x'] + (_0x3d2c53['x'] - self_pos['x']),
          'y': Camera_anchor_pos['y'],
          'z': Camera_anchor_pos['z'] + (-_0x3d2c53['z'] + self_pos['z'])
        };
        if (rc_follow && modes['rocker_mode'] < 0x3) {
          if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x10735c + sca_yaw);else 于穆曹二善(_0x5610cd['pitch'], _0x10735c - 0xb4);
        }
        if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
        if (modes['rocker_mode'] === 0x3) {
          if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
            _0x3d2c53 = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x5610cd);
            setMotion(_0x3d2c53['x'] - self_pos['x'], _0x3d2c53['y'] - self_pos['y'], _0x3d2c53['z'] - self_pos['z']);
          } else {
            const _0xd9e55d = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
            const _0x583bf4 = getCameraRotation();
            rc_roll += (_0xd9e55d ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (modes['rocker_mode'] === 0x0) setMotion(_0x3d2c53['x'] - self_pos['x'], rc_bhop && _0x1418ab || rc_ahop && _0x2a8344['y'] < -0.4 ? rc_y : _0x2a8344['y'], _0x3d2c53['z'] - self_pos['z']);
        if (modes['rocker_mode'] === 0x1) setPos(_0x3d2c53['x'], self_pos['y'], _0x3d2c53['z']);
        if (rc_directions['direction'] === 0x0) rc_angles = {};
      }
      if (typeof rc_uds['operation'] !== 'undefined') {
        const _0x2e0fa8 = getEntityMotion(self_id);
        const _0x17d619 = getCameraRotation();
        if (rc_uds['operation'] === 'up') {
          Camera_anchor_pos['y'] += rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x2e0fa8['x'], rc_y, _0x2e0fa8['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw -= Math['sin'](_0x17d619['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch += Math['cos'](_0x17d619['roll'] * Math['PI'] / 0xb4) * 0x2;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (rc_uds['operation'] === 'down') {
          Camera_anchor_pos['y'] -= rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x2e0fa8['x'], -rc_y, _0x2e0fa8['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw += Math['sin'](_0x17d619['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch -= Math['cos'](_0x17d619['roll'] * Math['PI'] / 0xb4) * 0x2;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (rc_yaw >= 0xb4) rc_yaw -= 0x168;
        if (rc_yaw <= -0xb4) rc_yaw += 0x168;
        if (rc_pitch > 0xb4) rc_pitch = 0xb4;
        if (rc_pitch < 0x0) rc_pitch = 0x0;
        if (rc_uds['operation'] === 'none') rc_uds = {};
      }
      if (BalanceTimer || BalanceTimer_st) {
        _0x482098['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
        if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
          callModule(0x1e, '{"value":false}');
          BalanceTimer_st = false;
        }
        if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
      }
      if (ModifyTime) {
        if (mt_custom === 0x19) {
          let _0x4a6aa7 = 0x0;
          if (modes['mt_time'] === 0x0) _0x4a6aa7 = 0x3e8;
          if (modes['mt_time'] === 0x1) _0x4a6aa7 = 0x32c8;
          if (modes['mt_time'] === 0x2) _0x4a6aa7 = 0x1770;
          if (modes['mt_time'] === 0x3) _0x4a6aa7 = 0x30d4;
          setWorldData({
            'time': _0x4a6aa7
          });
        } else setWorldData({
          'time': mt_custom * 0x3e8
        });
      }
      if (!BalanceTimer && BalanceTimer_t > 0x0 && BalanceTimer_st) BalanceTimer_t--;
      if (bk_pos != null) {
        const {
          ex,
          ey,
          ez
        } = bk_pos;
        destroyBlock(self_id, ex, ey, ez, 0x0);
        人本长安倡(ex, ey, ez, bk_auth, bk_action);
        if (bk_timer > bk_last) bk_pos = null;
        bk_timer++;
      }
      if (FakeTip) {
        switch (modes['fakeTip_mode']) {
          case 0x0:
            showTipMessage('§bProtoHax §r| ' + _0x37cf15['toFixed'](0x2) + ' §eBlocks/sec');
            break;
          case 0x1:
            if (tip_t1 > 0xc8) {
              curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x55c4b6, _0x1e2c50) => globalThis['current_poem'] = JSON['parse'](_0x1e2c50)['content']);
              tip_t1 = 0x0;
            }
            showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
            break;
          case 0x5:
            showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x37cf15['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
            break;
          case 0x6:
            showTipMessage('§cWelcome to use §rTianYuByte');
            break;
        }
      }
      if (sm_circulate_t > sm_circulate_tick && !sm_status) {
        sm_status = true;
        sm_circulate_t = 0x0;
      }
      if (SlowMotion && sm_status) {
        callModule(0x1e, '{"value":true,"speed":' + sm_speed / 0xa + '}');
        setTimeout(() => {
          callModule(0x1e, '{"value":false,"speed":20.0}');
          sm_status = false;
        }, sm_circulate_last_tick * 0x32);
      }
      if (mine_list['length'] > 0x0 && mine_destroy) {
        for (let _0x14fa90 = 0x0; _0x14fa90 < mine_speed; _0x14fa90++) {
          let _0x4ebb6c = mine_list['shift']();
          if (typeof _0x4ebb6c != 'object' || _0x4ebb6c['length'] === 0x0) continue;
          const _0x17d343 = getBlock(_0x4ebb6c[0x0], _0x4ebb6c[0x1], _0x4ebb6c[0x2]);
          if (_0x17d343['namespace'] != 'minecraft:air' && _0x17d343['namespace'] === mine_name) {
            destroyBlock(self_id, _0x4ebb6c[0x0], _0x4ebb6c[0x1], _0x4ebb6c[0x2], 0x0);
            mine_current++;
          }
        }
        _0x482098['push'](归客不发寻(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
      }
      if (AirStuck && as_time_t < as_time && !_0x1418ab) setMotion(0x0, 0x0, 0x0);
      if (_0x482098['length'] > 0x0 && !FakeTip) {
        if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x482098['join']('\n'));
        if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x482098['join']('\n'));
      }
      if (modes['tipType_mode'] === 0x1) {
        updateTextPosition(tip_id, nx_screen['screenWidth'] * tip_x_offset / 0x64, nx_screen['screenHeight'] * tip_y_offset / 0x64);
        updateTextColor(tip_id, tip_r / 0x64, tip_g / 0x64, tip_b / 0x64, tip_a / 0x64);
      } else updateTextContent(tip_id, '');
      if (prev_id != self_id) prev_id = self_id;
      if (FakeLag) fl_t++;
      if (GodMode) gm_tick++;
      if (SlowMotion && sm_circulate && !sm_status) sm_circulate_t++;
      if (FastBuild && fb_list['length'] > 0x0) fb_t++;
      if (ticks % rgb_cycle == 0x0) rgb_l++;
      if (rgb_l >= rgb_color['length']) rgb_l = 0x0;
      if (attack_tick > 0x14 && as_gradually) as_level = 0x0;
      if (isAttacking) {
        attack_ticks++;
        isAttacking = false;
      }
      if (isClicking) {
        click_t++;
        isClicking = false;
      }
      attack_tick++;
      if (SmartInv && ticks % da_delay === 0x0) da_slot++;
      if (da_slot > 0x23) {
        da_slot = 0x0;
        max_damage = 0x0;
        max_armor = [0x0, 0x0, 0x0, 0x0];
      }
      if (ChestStealer && ticks % cs_tick === 0x0) cs_current = 0x0;
      if (ChestStealer && cs_close && cs_timer === cs_delay + 0x1) closeInventory();
      if (ChestStealer && cs_timer > cs_tick) cs_sort = 0x0;
      if (ChestStealer) cs_timer++;
      if (HotbarSelector) select_t++;
      if (rpc_cycle) rpc_t++;
      if (InfiniteAura) ia_delay_r++;
      if (AutoArmor && ticks % aa_delay == 0x0) armor_slot++;
      if (FakeTip && modes['fakeTip_mode'] === 0x1) tip_t1++;
      if (select_t > hs_delay) {
        select_slot++;
        select_t = 0x0;
      }
      if (select_slot > 0x8) select_slot = 0x0;
      if (at_lists['length'] > 0x0 && ia_switch === 0x0) ia_tmp_list = at_lists;
      if (ia_switch > 0x0 && ia_delay_r > ia_switch && ia_tmp_list['length'] > 0x0) {
        ia_targets[0x0] = ia_tmp_list['shift']();
        ia_delay_r = 0x0;
      }
      if (ia_switch === 0x0 && at_lists['length'] > 0x0) ia_targets = at_lists;
      if (mini_kills > 0x0) mini_tick++;
      if (ticks % at_max_time == 0x0) at_current = 0x0;
      if (mini_tick > 0x64) {
        mini_kills = 0x0;
        mini_tick = 0x0;
      }
      if (BalanceTimer && !BalanceTimer_st) BalanceTimer_t++;
      seconds = Math['floor'](ticks / 0x14);
      ticks++;
      if (AirStuck) as_time_t++;
      prev_pos = self_pos;
      prev_item = self_item;
      prev_heal = _0x14266b['current'];
      prev_ground = _0x1418ab;
      prev_itemCount = self_itemCount;
    } catch (_0x4468fa) {
      clientMessage(_0x4468fa['stack']);
    }
  }
  setInterval(() => {
    if (bn_list['length'] > 0x0) {
      for (let _0x2339f9 = bn_list['length'] - 0x1; _0x2339f9 >= 0x0; _0x2339f9--) {
        let _0x57f29c = bn_list[_0x2339f9];
        _0x57f29c['x'] -= _0x57f29c['speed'];
        if (_0x57f29c['x'] < 0x0) {
          bn_list['splice'](_0x2339f9, 0x1);
          removeText(_0x57f29c['id']);
        } else updateTextPosition(_0x57f29c['id'], _0x57f29c['x'], _0x57f29c['y']);
      }
    }
    if (Derp) {
      var _0x34929c = getEntityRot(self_id);
      if (modes['derp_mode'] === 0x0) {
        setEntityRot(self_id, dp_pitch, dp_yaw);
        setEntityBodyRot(self_id, dp_yaw);
      }
      if (modes['derp_mode'] === 0x1) sendPlayerAuthInput({
        'inputMode': 0x2,
        'playMode': 0x0,
        'pos': self_pos,
        'motion': getEntityMotion(self_id),
        'rot': {
          'pitch': dp_pitch,
          'yaw': dp_yaw
        },
        'yHeadRot': dp_yaw,
        'inputs': []
      });
      if (modes['derp_mode'] === 0x2) sendMovePlayer({
        'id': self_id,
        'pos': self_pos,
        'mode': 0x0,
        'ground': getEntityIsGround(self_id),
        'rot': {
          'pitch': dp_pitch,
          'yaw': dp_yaw
        },
        'yHeadRot': 0x0
      });
      dp_pitch -= dp_random ? 马客在船举(-0xa, 0xa) : dp_headSpeed * 0x2;
      dp_yaw += dp_random ? 马客在船举(-0xa, 0xa) : dp_bodySpeed * 0x2;
      if (dp_pitch < -0x5a) dp_pitch = 0x5a;
      if (dp_yaw > 0xb4) dp_yaw = dp_yaw - 0x168;
      if (!dp_head) dp_pitch = _0x34929c['pitch'];
      if (!dp_body) dp_yaw = _0x34929c['yaw'];
      if (dp_lock) dp_pitch = 0x5a;
    }
    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
      const _0x271891 = getCameraRotation();
      const _0x49dd03 = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
      const _0x56c6b6 = sca_move ? 弦弦掩抑声(_0x49dd03, self_id, 'yaw_pos') : _0x271891['yaw'] > 0x0 ? 0xb4 - _0x271891['yaw'] : -0xb4 - _0x271891['yaw'];
      于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x56c6b6 + sca_yaw);
    }
    if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
      let _0x9264b8 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
      let _0x1ed0c2 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
      于穆曹二善(_0x9264b8, _0x1ed0c2);
    }
    if (ItemRotation) {
      ir_angle += (ir_isBack ? -0x1 : 0x1) * 0.0175 * ir_speed;
      if (ir_angle >= 6.3 * ir_max / 0x168) {
        if (ir_move) ir_isBack = true;else ir_angle = ir_min;
      }
      if (ir_angle <= 6.3 * ir_min / 0x168) ir_isBack = false;
      callModule(0x26, JSON['stringify']({
        'rotate_angle': ir_angle
      }));
    }
  }, 0xa);
  function onExecuteCommandEvent(_0x4f5bce) {
    if (ActivitySender) sendChatMessage('我正在执行命令');
    if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x4f5bce, '§r');
    const _0x540588 = _0x4f5bce['split'](' ');
    if (_0x540588[0x0] === '/set' && _0x540588[0x1] === 'pos') {
      nx_goal = {
        'x': Number(_0x540588[0x2]),
        'y': Number(_0x540588[0x3]),
        'z': Number(_0x540588[0x4])
      };
      if (_0x540588[0x5]) nx_goalSpeed = Number(_0x540588[0x5]);
      归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
      return true;
    }
    if (_0x540588[0x0] === '/set' && _0x540588[0x1] === 'default' && _0x540588[0x2] === 'config') {
      if (_0x540588[0x3] === 'clear') {
        归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
        setData('nx_defaultCfg', 'null');
        return true;
      }
      if (抱琵琶半遮(nx_cfgs + '/' + _0x540588[0x3] + '.json') != '{}') {
        setData('nx_defaultCfg', _0x540588[0x3]);
        归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x540588[0x3], '§r');
      } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x540588[0x3], '§r');
      return true;
    }
    if (_0x540588[0x0] === '/target') {
      if (_0x540588[0x1] === 'self') at_lists[0x0] = self_id;
      if (_0x540588[0x1] === 'player') at_lists = getPlayerList();
      if (_0x540588[0x1] === 'all') at_lists = getEntityList();
      归客不发寻(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
      return true;
    }
    if (_0x540588[0x0] === '/cleaner') {
      if (_0x540588[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
      if (_0x540588[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x540588[0x2]));
    }
    if (_0x540588[0x0] === '/bind') {
      if (_0x540588[0x1] === 'RunAway') {
        if (typeof globalThis[_0x540588[0x2]] == 'undefined' && typeof nx_funcid[_0x540588[0x2]] == 'undefined' || typeof globalThis[_0x540588[0x3]] == 'undefined' && typeof nx_funcid[_0x540588[0x3]] == 'undefined') {
          归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
          return true;
        }
        let _0x1342f3 = typeof globalThis[_0x540588[0x3]] !== 'undefined';
        nx_raBinds[_0x540588[0x2]] = {
          'module': _0x540588[0x3],
          'isNX': _0x1342f3
        };
        归客不发寻(0x0, 'Tip', '绑定 ' + _0x540588[0x2] + ' 与 ' + _0x540588[0x3] + ' 成功', '§r');
        nx_cfg['nx_raBinds'] = nx_raBinds;
        return true;
      }
      if (_0x540588[0x1] === 'key' && typeof globalThis[_0x540588[0x2]] !== 'undefined') {
        nx_isBind = _0x540588[0x2];
        归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x540588[0x2] + '绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x540588[0x1]] === 'undefined') nx_binds[_0x540588[0x1]] = [];
      if (typeof globalThis[_0x540588[0x2]] !== 'undefined' && typeof globalThis[_0x540588[0x1]] !== 'undefined') {
        nx_binds[_0x540588[0x1]]['push'](_0x540588[0x2]);
        归客不发寻(0x0, 'Tip', '绑定 ' + _0x540588[0x1] + ' 与 ' + _0x540588[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x540588[0x0] === '/unbind') {
      if (_0x540588[0x1] === 'key' && typeof globalThis[_0x540588[0x2]] !== 'undefined') {
        for (let _0x39a14e in nx_keys) {
          if (nx_keys[_0x39a14e] === _0x540588[0x2]) {
            delete nx_keys[_0x39a14e];
            break;
          }
        }
        nx_isBind = _0x540588[0x2];
        归客不发寻(0x0, 'Tip', '解除' + _0x540588[0x2] + '的按键绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x540588[0x1]] === 'undefined') {
        归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
        return true;
      }
      if (typeof globalThis[_0x540588[0x1]] !== 'undefined' && _0x540588[0x2] === 'all') {
        delete nx_binds[_0x540588[0x1]];
        归客不发寻(0x0, 'Tip', '解除 ' + _0x540588[0x1] + ' 的所有绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (_0x540588[0x1] === 'all') {
        nx_binds = {};
        归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (typeof globalThis[_0x540588[0x2]] !== 'undefined' && typeof globalThis[_0x540588[0x1]] !== 'undefined') {
        nx_binds[_0x540588[0x1]]['splice'](nx_binds[_0x540588[0x1]]['indexOf'](_0x540588[0x2]), 0x1);
        if (nx_binds[_0x540588[0x1]]['length'] === 0x0) delete nx_binds[_0x540588[0x1]];
        归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x540588[0x1] + ' 和 ' + _0x540588[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x540588[0x0] === '/nx') {
      if (typeof globalThis[_0x540588[0x2]] === 'undefined') {
        归客不发寻(0x0, 'Tip', '变量不存在', '§r');
        return true;
      }
      if (_0x540588[0x1] === 'num') globalThis[_0x540588[0x2]] = Number(_0x540588[0x3]);
      if (_0x540588[0x1] === 'bool') globalThis[_0x540588[0x2]] = Boolean(_0x540588[0x3]);
      if (_0x540588[0x1] === 'str') globalThis[_0x540588[0x2]] = _0x540588[0x3];
      if (_0x540588[0x1] === 'arr') globalThis[_0x540588[0x2]] = 相近邀相见(_0x540588[0x3]);
      if (_0x540588[0x1] === 'obj') globalThis[_0x540588[0x2]] = JSON['parse'](_0x540588[0x3]);
      归客不发寻(0x0, 'setValue', globalThis[_0x540588[0x2]] + ' => ' + _0x540588[0x2], '§r');
      return true;
    }
  }
  function onCommandOutputEvent(_0x1a8d1c, _0x13c2ec, _0x3e7c1a) {
    if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x1a8d1c + ' §e结果:§r' + _0x3e7c1a + ' §e数据:§r' + JSON['stringify'](_0x13c2ec, null, 0x2), '§r');
    if (!_0x3e7c1a) return true;
  }
  function onCallModuleEvent(_0x4c120a) {
    try {
      if (typeof _0x4c120a !== 'undefined' && typeof _0x4c120a['fun'] !== 'undefined' && typeof nx_raBinds[_0x4c120a['fun']] !== 'undefined') {
        const _0x49a0e6 = nx_raBinds[_0x4c120a['fun']]['module'];
        if (!nx_raBinds[_0x4c120a['fun']]['isNX']) callModule(nx_funcid[_0x49a0e6], JSON['stringify']({
          'value': _0x4c120a['value']
        }));else 委身为贾人(_0x49a0e6, _0x4c120a['value']);
      }
      if (ActivitySender) sendChatMessage('我正在调用UI');
      if (PVPDaLao) setTitle('又或是红石大佬');
      if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x4c120a, null, 0x4), '§r');
      if (typeof _0x4c120a['name'] === 'undefined') {
        if (Rocker && typeof _0x4c120a['angle'] !== 'undefined') rc_angles = _0x4c120a;
        if (Rocker && typeof _0x4c120a['direction'] !== 'undefined') rc_directions = _0x4c120a;
        if (Rocker && typeof _0x4c120a['operation'] !== 'undefined') rc_uds = _0x4c120a;
        return;
      }
      if (!_0x4c120a['name']['includes']('NoveXare') && _0x4c120a['fun'] != 'fun_ride_flying') return;
      if (typeof _0x4c120a['SauthLogin'] !== 'undefined') {
        Sauths = _0x4c120a['SauthLogin'];
        setData('sauths', Sauths);
        showToast('请退出我的世界登录 并重新登录');
      }
      if (typeof _0x4c120a['CustomBanTip'] !== 'undefined') bantip = _0x4c120a['CustomBanTip'];
      if (typeof _0x4c120a['key'] !== 'undefined') {
        const _0x101669 = _0x4c120a['key'];
        if (_0x101669 === 'ct_team' || _0x101669 === 'km_text') 开宴千呼万(_0x101669, _0x101669 === 'ct_team' ? ct_team : km_text);
        if (_0x101669 === 'ItemEditor') {
          const _0x164a27 = getEntityCarriedItem(self_id);
          const _0x4d9319 = 司马明年秋(_0x164a27, 'Damage:', 's');
          const _0x599133 = 司马明年秋(_0x164a27, '{Damage:', '}', ',');
          if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x164a27['replace']('Damage:' + _0x4d9319 + 's', 'Damage:' + ie_data + 's'));
          if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x164a27['replace']('{Damage:' + _0x599133, '{Damage:' + ie_data));
          if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x164a27['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
          if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);else showToast('请长按物品栏丢弃手中物品');
        }
        if (_0x101669 === 'EditBackGround') {
          const _0x2d70eb = 'loginVideoNew.mp4';
          const _0xd3d8e5 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
          if (!file_exist(getResource() + '/' + _0x2d70eb)) {
            showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
            return;
          }
          file_delete(_0xd3d8e5 + _0x2d70eb);
          file_copy(getResource() + '/' + _0x2d70eb, _0xd3d8e5 + _0x2d70eb);
          showToast('已复制文件');
        }
        if (_0x101669 === 'spm_text') 开宴千呼万(_0x101669, spm_text);
        if (_0x101669 === 'am_text') 开宴千呼万(_0x101669, am_text);
        if (_0x101669 === 'BJDTp') {
          let _0x593a91 = getPlayerList();
          let _0x4eaf8d = _0x593a91['length'] > 0x0 ? _0x593a91['map'](_0x163f7c => ({
            'text': getEntityName(_0x163f7c) + '\n距离: ' + 声暗问弹者(self_id, _0x163f7c)['toFixed'](0x2)
          })) : [{
            'text': '没有数据'
          }];
          let _0x56c1a3 = {
            'type': 'form',
            'title': '选择',
            'content': '选择一个目标',
            'buttons': _0x4eaf8d
          };
          const _0x4ac5c9 = JSON['stringify'](_0x56c1a3);
          addForm(_0x4ac5c9, function (_0x35aa11) {
            if (_0x593a91['length'] > 0x0 && _0x35aa11 >= 0x0) {
              var _0x3d463d = _0x593a91[_0x35aa11];
              var _0x1673da = getPos(_0x3d463d);
              setPos(_0x1673da['x'], _0x1673da['y'] + 1.8, _0x1673da['z']);
              buildBlock(self_id, _0x1673da['x'], _0x1673da['y'], _0x1673da['z'], 0x1);
            }
          });
        }
        if (_0x101669 === 'ka_text') 开宴千呼万(_0x101669, ka_text);
        if (_0x101669 === 'tp_type') 开宴千呼万(_0x101669, tp_type);
        if (_0x101669 === 'lp_type') 开宴千呼万(_0x101669, lp_type);
        if (_0x101669 === 'ap_type') 开宴千呼万(_0x101669, ap_type);
        if (_0x101669 === 'arp_type') 开宴千呼万(_0x101669, arp_type);
        if (_0x101669 === 'srp_type') 开宴千呼万(_0x101669, srp_type);
        if (_0x101669 === 'tr_type') 开宴千呼万(_0x101669, tr_type);
        if (_0x101669 === 'as_type') 开宴千呼万(_0x101669, as_type);
        if (_0x101669 === 'exit') {
          归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
          if (AutoSaveCfg) {
            归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
            const _0x49cd38 = Date['now']();
            File['write'](nx_cfgs + '/自动保存配置 - ' + _0x49cd38 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x49cd38);
          }
          exit();
          gc();
        }
        if (_0x101669 === 'sp_type') 开宴千呼万(_0x101669, sp_type);
        if (_0x101669 === 'as_level') 开宴千呼万(_0x101669, as_level);
        if (_0x101669 === 'am_id') 开宴千呼万(_0x101669, am_id);
        if (_0x101669 === 'am_value') 开宴千呼万(_0x101669, am_value);
        if (_0x101669 === 'pam_id') 开宴千呼万(_0x101669, pam_id);
        if (_0x101669 === 'pam_value') 开宴千呼万(_0x101669, pam_value);
        if (_0x101669 === 'pam_array') 开宴千呼万(_0x101669, pam_array);
        if (_0x101669 === 'sp_level') 开宴千呼万(_0x101669, sp_level);
        if (_0x101669 === 'cs_text') 开宴千呼万(_0x101669, cs_text);
        if (_0x101669 === 'DropInv') {
          for (let _0x519cd6 = 0x0; _0x519cd6 < 0x24; _0x519cd6++) {
            const _0x21d78b = getInventory(self_id, _0x519cd6);
            if (_0x21d78b['namespace'] === 'minecraft:air') continue;
            if (_0x21d78b['count'] < 0x1) continue;
            dl_list['push'](_0x519cd6);
          }
        }
        if (_0x101669 === 'LookTP') {
          let _0x1f0a01 = {};
          for (let _0x3131fc = 0x0; _0x3131fc < 0x1f4; _0x3131fc++) {
            _0x1f0a01 = 忽闻水上琵(_0x3131fc, getPos(self_id), getEntityRot(self_id));
            const _0x9806b6 = getBlock(_0x1f0a01['x'], _0x1f0a01['y'], _0x1f0a01['z']);
            if (_0x9806b6['namespace'] != 'minecraft:air') break;
          }
          if (_0x1f0a01 != {}) {
            const _0x459d94 = getPos(self_id);
            if (modes['LookTP_mode'] === 0x0) 二年恬然自(_0x1f0a01['x'], _0x1f0a01['y'] + 1.53, _0x1f0a01['z']);
            if (modes['LookTP_mode'] === 0x1) setPos(_0x1f0a01['x'], _0x1f0a01['y'] + 1.53, _0x1f0a01['z']);
          }
        }
        if (_0x101669 === 'OpenChest') {
          let _0x130f66 = {
            'type': 'form',
            'title': '容器列表',
            'content': '请选择需要打开的容器',
            'buttons': [{
              'text': '暂无容器'
            }]
          };
          let _0x1bb56d = [];
          let _0x23e544 = 0x0;
          let _0x24b6f2 = 面转轴拨弦(self_id);
          const _0x46895c = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
          const _0x24567e = 'shulker_box';
          for (let _0x5b8269 = -0x7; _0x5b8269 < 0x7; _0x5b8269++) {
            for (let _0xc44f65 = -0x7; _0xc44f65 < 0x7; _0xc44f65++) {
              for (let _0x5efa08 = -0x7; _0x5efa08 < 0x7; _0x5efa08++) {
                const _0x1eb801 = _0x5b8269 + _0x24b6f2['x'];
                const _0x4d8a0e = _0xc44f65 + _0x24b6f2['y'];
                const _0x2c5747 = _0x5efa08 + _0x24b6f2['z'];
                const _0x2e2062 = getBlock(_0x1eb801, _0x4d8a0e, _0x2c5747);
                if (_0x46895c['includes'](_0x2e2062['namespace']) || _0x2e2062['namespace']['includes'](_0x24567e)) {
                  const _0x4a5dbb = getBlock(_0x1eb801, _0x4d8a0e + 0x1, _0x2c5747);
                  _0x130f66['buttons'][_0x23e544] = {
                    'text': '命名空间: ' + _0x2e2062['namespace'] + '\n坐标:   ' + (_0x4a5dbb['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                  };
                  _0x1bb56d[_0x23e544] = {
                    'x': _0x1eb801,
                    'y': _0x4d8a0e,
                    'z': _0x2c5747
                  };
                  _0x23e544++;
                }
              }
            }
          }
          if (_0x23e544 === 0x0) {
            归客不发寻(0x0, 'Tip', '暂无容器', '§r');
            return;
          }
          addForm(JSON['stringify'](_0x130f66), function (_0x45e736) {
            const _0x5342d5 = _0x1bb56d[_0x45e736];
            buildBlock(self_id, _0x5342d5['x'], _0x5342d5['y'], _0x5342d5['z'], 0x1);
            归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
          });
        }
        if (_0x101669 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
        if (_0x101669 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
        if (_0x101669 === 'rpc_repeat') {
          for (let _0x56b003 = 0x0; _0x56b003 < rpc_repeat_times; _0x56b003++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        }
        if (_0x101669 === 'rpc_black') 开宴千呼万(_0x101669, rpc_black);
        if (_0x101669 === 'rpc_tipWhite') 开宴千呼万(_0x101669, rpc_tipWhite);
        if (_0x101669 === 'rpc_sendBlack') 开宴千呼万(_0x101669, rpc_sendBlack);
        if (_0x101669 === 'AttackSelf_one') 江头夜送客(self_id, Swing);
        if (_0x101669 === 'RemoveSelf') removeEntity(self_id);
        if (_0x101669 === 'QuitGame') leaveWorld();
        if (_0x101669 === 'cm_black') 开宴千呼万(_0x101669, cm_black);
        if (_0x101669 === 'rpc_recBlack') 开宴千呼万(_0x101669, rpc_recBlack);
        if (_0x101669 === 'rpc_white') 开宴千呼万(_0x101669, rpc_white);
        if (_0x101669 === 'sl_delete') setData('sauths', '');
        if (_0x101669 === 'dc_delete') dc_pos = [];
        if (_0x101669 === 'hs_item') 开宴千呼万('selectitems', selectitems);
        if (_0x101669 === 'hs_slot') 开宴千呼万('hs_slot', hs_slot);
        if (_0x101669 === 'rpc_sendWhite') 开宴千呼万(_0x101669, rpc_sendWhite);
        if (_0x101669 === 'rpc_recWhite') 开宴千呼万(_0x101669, rpc_recWhite);
        if (_0x101669 === 'at_typeWhite') 开宴千呼万(_0x101669, at_typeWhite);
        if (_0x101669 === 'ie_data') 开宴千呼万(_0x101669, ie_data);
        if (_0x101669 === 'mine_white') 开宴千呼万(_0x101669, mine_white);
        if (_0x101669 === 'cs_white') 开宴千呼万(_0x101669, cs_white);
        if (_0x101669 === 'mine_black') 开宴千呼万(_0x101669, mine_black);
        if (_0x101669 === 'cs_black') 开宴千呼万(_0x101669, cs_black);
        if (_0x101669 === 'SearchModule') {
          addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function (_0x3e4072, _0x41505d, _0x369dd2, _0x16c965) {
            var _0x497845 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
            var _0x11077e = 0x0;
            var _0x2ae9f8 = getResource();
            var _0x47dfed = JSON['parse'](File['read'](_0x2ae9f8 + '/ui/ui_definition.json'))['ui']['map'](_0x173e84 => ({
              'name': _0x173e84 + '.json',
              'path': _0x2ae9f8 + '/ui/' + _0x173e84 + '.json'
            }));
            for (var _0x5c8d3d of _0x47dfed) {
              if (!_0x5c8d3d['name']['includes']('NoveXare')) continue;
              var _0x126007 = JSON['parse'](File['read'](_0x5c8d3d['path']));
              if (typeof _0x126007['items'][0x0]['items'] === 'undefined') continue;
              for (var _0x86d55 of _0x126007['items'][0x0]['items']) {
                if (typeof _0x86d55['name'] === 'undefined' || typeof _0x86d55['key'] === 'undefined') continue;
                if (_0x369dd2 && _0x86d55['type'] != 'Switch') continue;
                if (_0x16c965 && _0x86d55['type'] == 'Switch') continue;
                if (!_0x41505d && (_0x86d55['name'] === _0x3e4072 || _0x86d55['key'] === _0x3e4072) || _0x41505d && (_0x86d55['name']['includes'](_0x3e4072) || _0x86d55['key']['includes'](_0x3e4072))) {
                  _0x497845['items'][0x0]['items'][_0x11077e] = _0x86d55;
                  _0x11077e++;
                }
              }
            }
            loadMenu('search_' + _0x3e4072, JSON['stringify'](_0x497845));
          });
        }
        if (_0x101669 === 'sp_clear') sp_posList = [];
        if (_0x101669 === 'sp_add') {
          const {
            x,
            y,
            z
          } = 面转轴拨弦(self_id);
          addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function (_0x744c4e) {
            const _0x282187 = _0x744c4e['split'](',');
            sp_posList['push']({
              'x': Number(_0x282187[0x0]),
              'y': Number(_0x282187[0x1]),
              'z': Number(_0x282187[0x2])
            });
            归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
          });
        }
        if (_0x101669 === 'sp_load') {
          const _0x37550a = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
          addForm(_0x37550a, function (_0x31b5d2) {
            const _0x278e98 = File['read'](_0x31b5d2);
            if (_0x278e98 != '' && SoundPlayer) {
              sp_data = JSON['parse'](_0x278e98);
              sp_file = sp_loop ? _0x278e98 : [];
              归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
          });
        }
        if (_0x101669 === 'sp_select') {
          const _0x577e54 = {
            'type': 'form',
            'title': '音乐文件',
            'content': '选择要加载的音乐',
            'buttons': [{
              'text': '没有文件'
            }]
          };
          const _0x29c44c = file_list(getResource() + '/sounds/NoveXare');
          _0x29c44c['sort']((_0x69dbf7, _0x5bd00d) => _0x69dbf7['name']['localeCompare'](_0x5bd00d['name']));
          for (let _0x333209 = 0x0; _0x333209 < _0x29c44c['length']; _0x333209++) {
            _0x577e54['buttons'][_0x333209] = {
              'text': _0x29c44c[_0x333209]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/sound_glyph_color_2x.png'
              }
            };
          }
          const _0x1583fb = JSON['stringify'](_0x577e54);
          addForm(_0x1583fb, function (_0xfbccd1) {
            if (_0x29c44c['length'] > 0x0 && _0xfbccd1 >= 0x0) {
              const _0x8cbe45 = File['read'](_0x29c44c[_0xfbccd1]['path']);
              if (_0x8cbe45 != '' && SoundPlayer) {
                sp_data = JSON['parse'](_0x8cbe45);
                sp_file = sp_loop ? _0x8cbe45 : [];
                归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
              } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
            }
          });
        }
        if (_0x101669 === 'save_config') {
          const _0x41d0a2 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
          addForm(_0x41d0a2, function (_0x9916f1, _0x26e72b) {
            File['write'](nx_cfgs + '/' + _0x9916f1 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            归客不发寻(0x0, 'Tip', '保存成功', '§r');
            if (_0x26e72b) nx_cfg = {
              'binds': {},
              'key_binds': [],
              'nx_raBinds': [],
              'name': getEntityName(self_id)
            };
          });
        }
        if (_0x101669 === 'load_config') {
          const _0x1c1ef8 = {
            'type': 'form',
            'title': '配置文件',
            'content': '选择要加载的配置',
            'buttons': [{
              'text': '§c没有配置'
            }]
          };
          const _0x4d07f3 = file_list(nx_cfgs);
          _0x4d07f3['sort']((_0x27fa7c, _0x39f348) => _0x27fa7c['name']['localeCompare'](_0x39f348['name']));
          for (let _0x8ce56b = 0x0; _0x8ce56b < _0x4d07f3['length']; _0x8ce56b++) {
            _0x1c1ef8['buttons'][_0x8ce56b] = {
              'text': '§e' + _0x4d07f3[_0x8ce56b]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/gear.png'
              }
            };
          }
          const _0x1652c3 = JSON['stringify'](_0x1c1ef8);
          addForm(_0x1652c3, function (_0x1e57b4) {
            if (_0x4d07f3['length'] > 0x0 && _0x1e57b4 >= 0x0) {
              let _0x48cfa4 = JSON['parse'](抱琵琶半遮(_0x4d07f3[_0x1e57b4]['path']));
              let _0x1c349c = 0x0;
              nx_binds = _0x48cfa4['binds'];
              nx_keys = _0x48cfa4['key_binds'];
              nx_raBinds = _0x48cfa4['nx_raBinds'];
              for (let _0x2a4508 in _0x48cfa4) {
                _0x1c349c++;
                if (_0x2a4508['includes']('_mode') && _0x4c120a['index'] && _0x4c120a['index'] > 0x0) modes[_0x2a4508] = _0x48cfa4[_0x2a4508];
                if (_0x2a4508 != 'nx_raBinds' && _0x2a4508 != 'key_binds' && _0x2a4508 != 'binds' && _0x2a4508 != 'name') 委身为贾人(_0x2a4508, _0x48cfa4[_0x2a4508]);
              }
              nx_cfg = _0x48cfa4;
              归客不发寻(0x0, 'Tip', '成功加载' + _0x48cfa4['name'] + '的配置，共' + _0x1c349c + '条配置', '§r');
            }
          });
        }
        if (_0x101669 === 'rpc_select') {
          const _0x536ab3 = {
            'type': 'form',
            'title': 'PyRpc列表',
            'content': '选择PyRpc',
            'buttons': [{
              'text': '没有PyRpc'
            }]
          };
          let _0x487486 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
          for (let _0x4c0996 = 0x0; _0x4c0996 < _0x487486['length']; _0x4c0996++) {
            _0x536ab3['buttons'][_0x4c0996] = {
              'text': (_0x487486[_0x4c0996]['type'] === 'Send' ? '§a' : '§c') + _0x487486[_0x4c0996]['packet_str']
            };
          }
          const _0x28f904 = JSON['stringify'](_0x536ab3);
          addForm(_0x28f904, function (_0x13c945) {
            prev_rpc = {
              'id': _0x487486[_0x13c945]['id'],
              'data': _0x487486[_0x13c945]['packet_bin']
            };
            归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
          });
        }
        if (_0x101669 === 'cw_range') {
          let _0x50a3b8 = getPlayerList();
          let _0x2c0171 = 0x0;
          for (let _0x28d75b of _0x50a3b8) {
            const _0x1e5c83 = getPos(_0x28d75b);
            const _0x1d0419 = getDistance(_0x1e5c83, getPos(self_id));
            if (!at_whileLists['includes'](_0x28d75b) && _0x1d0419 < cw_size && _0x28d75b != self_id) {
              at_whileLists['push'](_0x28d75b);
              _0x2c0171++;
            }
          }
          归客不发寻(0x0, 'Tip', '已添加' + _0x2c0171 + '个玩家到白名单', '§r');
        }
        if (_0x101669 === 'KickSelf') for (let _0x1a63ac = 0x0; _0x1a63ac < 0x3e8; _0x1a63ac++) 江头夜送客(self_id, Swing);
        if (_0x101669 === 'bc_delete') ac_pos = [];
        if (_0x101669 === 'cm_depart') departCamera();
        if (_0x101669 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
        if (_0x101669 === 'cm_reset') resetCamera();
        if (_0x101669 === 'cm_lock') lockCamera();
        if (_0x101669 === 'ou_recover') otherId = null;
        if (_0x101669 === 'delete_chest') ca_chest_pos = [];
        if (_0x101669 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
        if (_0x101669 === 'fm_place') fm_pos = self_pos;
        if (_0x101669 === 'at_regex') 开宴千呼万(_0x101669, at_regex);
        if (_0x101669 === 'cw_add' || _0x101669 === 'ct_add' || _0x101669 === 'ct_add') 茫茫江浸月(_0x101669 === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
        if (_0x101669 === 'fw_target' || _0x101669 === 'fc_target') 茫茫江浸月(_0x101669 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
        if (_0x101669 === 'cm_target') 茫茫江浸月('cm_target', 0x0);
        if (_0x101669 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
        if (_0x101669 === 'srp_add') srp_type = Number(srp_type) + 0x1;
        if (_0x101669 === 'cw_remove') at_whileLists = [];
        if (_0x101669 === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
          'targets': at_lists['map'](_0x301212 => ({
            'name': getEntityName(_0x301212),
            'id': _0x301212,
            'namespace': getEntityNamespace(_0x301212)
          })),
          'players': getWorldPlayerList(),
          'entities': getEntityList()['map'](_0x191e55 => ({
            'name': getEntityName(_0x191e55),
            'id': _0x191e55,
            'namespace': getEntityNamespace(_0x191e55)
          }))
        }));
        if (_0x101669 === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
        if (_0x101669 === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(nx_paths + '/WorldInfo.json')));
        if (_0x101669 === 'Rusher') {
          const _0x59f10e = getCameraRotation();
          let _0x5f4c44 = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
            'yaw': _0x59f10e['yaw'] > 0x0 ? 0xb4 - _0x59f10e['yaw'] : -0xb4 - _0x59f10e['yaw'],
            'pitch': -_0x59f10e['pitch']
          });
          setMotion(_0x5f4c44['x'] - self_pos['x'], _0x5f4c44['y'] - self_pos['y'], _0x5f4c44['z'] - self_pos['z']);
        }
        return;
      }
      for (let _0x3a28c6 in _0x4c120a) {
        if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x3a28c6)) continue;
        if (typeof _0x4c120a['index'] !== 'undefined' && _0x4c120a['index'] > 0x0) {
          modes[_0x3a28c6] = _0x4c120a['index'] - 0x1;
          nx_cfg[_0x3a28c6] = _0x4c120a['index'] - 0x1;
          归客不发寻(0x0, _0x3a28c6['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x4c120a[_0x3a28c6], '§r');
          if (_0x3a28c6 === 'tip_mode' && modes['tip_mode'] === 0x1) {
            callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
            showToast('注: 该功能会影响正常的ArrayList显示');
          }
          return true;
        }
        if (_0x3a28c6 === 'Criticals') {
          if (_0x4c120a[_0x3a28c6]) playerJump();else {
            cc_status = false;
            callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
          }
        }
        if (_0x3a28c6 === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x4c120a[_0x3a28c6]) + ',"count":' + ka_packet + '}');
        if (_0x3a28c6 === 'RandomArrayList' && !_0x4c120a[_0x3a28c6]) {
          for (let _0x5990ee = 0x0; _0x5990ee < ral_num; _0x5990ee++) addCustomArrayList('RandomArrayList' + _0x5990ee, '', '', false);
        }
        if (_0x3a28c6 === 'Rocker') callModule(0x39, '{"value":' + b2s(modes['rc_mode'] === 0x1 && _0x4c120a[_0x3a28c6]) + ',"fov":150}');
        if (_0x3a28c6 === 'FakeMove') {
          if (_0x4c120a[_0x3a28c6]) fmo_pos = getPos(self_id);else if (!_0x4c120a[_0x3a28c6]) 欲语迟移船(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
          let _0x7a2beb = {
            'enable': !_0x4c120a[_0x3a28c6],
            'index': 0x13,
            'packet': 'receive'
          };
          callModule(0x7, JSON['stringify']({
            'enable': false,
            'index': 0x13,
            'packet': 'send'
          }));
          欲语迟移船(self_pos['x'] + 0x3e8, self_pos['y'] + 0x3e8, self_pos['z'] + 0x3e8);
          callModule(0x7, JSON['stringify']({
            'enable': true,
            'index': 0x13,
            'packet': 'send'
          }));
          callModule(0x7, JSON['stringify'](_0x7a2beb));
          setTimeout(() => 欲语迟移船(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
        }
        if (_0x3a28c6 === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x4c120a[_0x3a28c6]) + ',"count":' + cs_packet + '}');
        if (_0x3a28c6 === 'ShowNowTime' && !_0x4c120a[_0x3a28c6]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
        if (_0x3a28c6 === 'RandomFunc') {
          const _0x15e243 = Object['keys'](globalThis);
          let _0x303512 = [];
          for (let _0x2bb1fc of _0x15e243) {
            if (typeof globalThis[_0x2bb1fc] === 'boolean') _0x303512['push'](_0x2bb1fc);
          }
          const _0x1bcca4 = _0x303512[马客在船举(0x0, _0x303512['length'] - 0x1)];
          委身为贾人(_0x1bcca4, _0x4c120a[_0x3a28c6]);
        }
        if (_0x3a28c6 === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x4c120a[_0x3a28c6]) + ',"count":' + ia_packet + '}');
        if (_0x3a28c6 === 'FlashBack') sb();
        if (_0x3a28c6 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x4c120a[_0x3a28c6]) + '}');
        if (_0x3a28c6 === 'PyRpcManager' && rpc_store && !_0x4c120a[_0x3a28c6]) {
          rpc_temp['forEach'](_0x402c8c => sendRpc(_0x402c8c['id'], _0x402c8c['data']));
          归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
          rpc_temp = [];
        }
        if (_0x3a28c6 === 'HideHud') setBooleanOption(0x14f, {
          'value': _0x4c120a[_0x3a28c6],
          'defaultValue': false
        });
        if (_0x3a28c6 === 'EntityXRay') setBooleanOption(0x149, {
          'value': _0x4c120a[_0x3a28c6],
          'defaultValue': false
        });
        if (_0x3a28c6 === 'ShowChunk') setBooleanOption(0x147, {
          'value': _0x4c120a[_0x3a28c6],
          'defaultValue': false
        });
        if (_0x3a28c6 === 'NoPractice') setBooleanOption(0x14c, {
          'value': _0x4c120a[_0x3a28c6],
          'defaultValue': false
        });
        if (_0x3a28c6 === 'NoWeather') setBooleanOption(0x14e, {
          'value': _0x4c120a[_0x3a28c6],
          'defaultValue': false
        });
        if (_0x3a28c6 === 'FreeCam') {
          let _0x2ca2a1 = {
            'value': _0x4c120a[_0x3a28c6],
            'noclip': _0x4c120a[_0x3a28c6],
            'flying': _0x4c120a[_0x3a28c6]
          };
          callModule(0x1, JSON['stringify'](_0x2ca2a1));
          if (_0x4c120a[_0x3a28c6]) fc_pos = getPos(self_id);else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
        }
        if (_0x3a28c6 === 'FakeMotion' && fm_auto && _0x4c120a[_0x3a28c6]) fm_pos = getPos(self_id);
        if (_0x3a28c6 === 'ShadowBoomer' && _0x4c120a[_0x3a28c6]) sb_pos = getPos(self_id);
        if (_0x3a28c6 === 'AvoidAttack' && _0x4c120a[_0x3a28c6]) aa_pos = getPos(self_id);else if (_0x3a28c6 === 'AvoidAttack' && !_0x4c120a[_0x3a28c6]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
        if (_0x3a28c6 === 'NoClip') {
          let _0x51732f = {
            'value': _0x4c120a[_0x3a28c6],
            'noclip': _0x4c120a[_0x3a28c6],
            'flying': _0x4c120a[_0x3a28c6]
          };
          if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x4c120a[_0x3a28c6]) + '}');
          if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x4c120a[_0x3a28c6]) + ',"no_fall_check":' + b2s(_0x4c120a[_0x3a28c6]) + ',"value":' + b2s(_0x4c120a[_0x3a28c6]) + '}');
          callModule(0x1, JSON['stringify'](_0x51732f));
          if (nc_blink) nc_pos = getPos(self_id);else nc_pos = {};
        }
        if (_0x3a28c6 === 'BalanceTimer') {
          callModule(0x25, '{"value":' + _0x4c120a[_0x3a28c6] + '}');
          BalanceTimer_st = !_0x4c120a[_0x3a28c6];
        }
        if (_0x3a28c6 === 'IQBoost') {
          const _0x547497 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
          let _0x1e1077 = 马客在船举(0x0, _0x547497['length'] - 0x1);
          sendChatMessage('!' + _0x547497[_0x1e1077]);
        }
        if (_0x3a28c6 === 'AutoTarget' && !_0x4c120a[_0x3a28c6]) at_lists = [];
        if (_0x3a28c6 === 'SoundPlayer' && !_0x4c120a[_0x3a28c6]) sp_data = [];
        if (_0x3a28c6 === 'FightBot' && !_0x4c120a[_0x3a28c6]) {
          if (fb_ka) KillAura = false;
          if (fb_aa) AssistAim = false;
          if (fb_kd) KeepDistance = false;
          if (fb_sca) Scaffold = false;
        }
        if (_0x3a28c6 === 'ShowSendPacket' && !_0x4c120a[_0x3a28c6] && JSON['stringify'](PacketTmp['send']) != '{}') {
          let _0x530da4 = '';
          for (let _0x1a15d3 in PacketTmp['send']) _0x530da4 += '名称:' + _0x1a15d3 + '，ID:' + PacketTmp['send'][_0x1a15d3]['id'] + '，发送数量:' + PacketTmp['send'][_0x1a15d3]['count'] + '\n';
          if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
          归客不发寻(0x0, 'sendPacket', '\n' + _0x530da4, '§r');
          PacketTmp['send'] = {};
        }
        if (_0x3a28c6 === 'ShowReceivePacket' && !_0x4c120a[_0x3a28c6] && JSON['stringify'](PacketTmp['receive']) != '{}') {
          let _0x4d067a = '';
          for (let _0x47ecbf in PacketTmp['receive']) _0x4d067a += '名称:' + _0x47ecbf + '，ID:' + PacketTmp['receive'][_0x47ecbf]['id'] + '，接受数量:' + PacketTmp['receive'][_0x47ecbf]['count'] + '\n';
          if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
          归客不发寻(0x0, 'receivePacket', '\n' + _0x4d067a, '§r');
          PacketTmp['receive'] = {};
        }
        if (_0x3a28c6 === 'Scaffold' && sca_keep && _0x4c120a[_0x3a28c6]) sca_current = 0x0;
        if (_0x3a28c6 === 'SmartInv' && _0x4c120a[_0x3a28c6]) {
          da_slot = 0x0;
          max_damage = 0x0;
          max_armor = [0x0, 0x0, 0x0, 0x0];
        }
        if (_0x3a28c6 === 'sp_loop' && !_0x4c120a[_0x3a28c6]) sp_file = null;
        if (_0x3a28c6 === 'NoLiquid' && _0x4c120a[_0x3a28c6]) {
          nl_water = getEntityAttribute(self_id, 0x2);
          nl_lava = getEntityAttribute(self_id, 0x6);
        } else if (_0x3a28c6 === 'NoLiquid' && !_0x4c120a[_0x3a28c6]) {
          setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
          setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
        }
        if (typeof _0x4c120a[_0x3a28c6] === 'boolean' || typeof _0x4c120a[_0x3a28c6] === 'number') {
          if (typeof _0x4c120a[_0x3a28c6] === 'boolean') {
            委身为贾人(_0x3a28c6, _0x4c120a[_0x3a28c6]);
            return;
          }
          nx_cfg[_0x3a28c6] = _0x4c120a[_0x3a28c6];
          globalThis[_0x3a28c6] = _0x4c120a[_0x3a28c6];
        }
      }
    } catch (_0x1a74a9) {
      clientMessage(_0x1a74a9['stack']);
    }
  }
  function onPlayerAttackEvent(_0x13d0f8, _0x4af2d1) {
    if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
    if (CameraManager && cm_transfer) cm_attack = _0x4af2d1;
    if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
    if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x4af2d1));
    if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x4af2d1));
    if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x4af2d1));
    if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x4af2d1));
    if (TargetEdit) {
      if (te_target === null) te_target = _0x4af2d1;else {
        if (te_all) getEntityList()['forEach'](_0x540eaa => {
          if (_0x540eaa != te_target) 嘈如急雨小(_0x540eaa, te_target, te_two);
        });else 嘈如急雨小(_0x4af2d1, te_target, te_two);
        te_target = null;
        归客不发寻(0x0, 'Tip', '设置完成', '§r');
      }
      return true;
    }
    if (RiderEdit) {
      if (re_cancel) stopRidingEntity(_0x4af2d1);else startRidingEntity(_0x4af2d1);
      归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
      return true;
    }
    if (EntityNBTCopy) {
      if (enc_target === null) enc_target = _0x4af2d1;else {
        setEntityNBT(_0x4af2d1, getEntityNBT(te_target));
        enc_target = null;
        归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
      }
      return true;
    }
    if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x4af2d1));
    if (!attack_list['includes'](_0x4af2d1)) attack_list['push'](_0x4af2d1);
    if (_0x4af2d1 === null || attack_list['every'](_0x4f10f9 => last_attack_target['includes'](_0x4f10f9))) {
      attack_frequency++;
      isAttacking = true;
    } else {
      last_attack_target = _0x4af2d1;
      attack_ticks = 0x0;
      real_attack = 0x0;
      attack_frequency = 0x0;
      click_num = 0x0;
      click_t = 0x0;
    }
    if (PVPDaLao) setTitle('还是PVP大佬');
    if (OtherUser) {
      otherId = _0x4af2d1;
      return true;
    }
    if (CameraManager && cm_editanchor) {
      cm_id = _0x4af2d1;
      归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x4af2d1), '§r');
      return true;
    }
    if (AttackMessage) sendChatMessage(am_text);
    if (AttackParticle) {
      const _0x499e54 = getPos(_0x4af2d1);
      const _0x5f34fe = getEntitySize(_0x4af2d1);
      for (let _0x5a3cb0 = 0x0; _0x5a3cb0 < 马客在船举(ap_count, ap_count + 0x14); _0x5a3cb0++) 妇遂命酒使(ap_type, _0x499e54['x'] + 马客在船举(-_0x5f34fe['x'] * 马客在船举(0x7, 0xa), _0x5f34fe['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x499e54['y'] + 马客在船举(-_0x5f34fe['y'] * 0x9, _0x5f34fe['y'] * 0x2) / 0xa, _0x499e54['z'] + 马客在船举(-_0x5f34fe['x'] * 马客在船举(0x7, 0xa), _0x5f34fe['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
    }
    if (AttackSound) {
      湖间予出官(Number(as_type), Number(as_level));
      if (as_gradually) as_level = Number(as_level) + 0x1;
      if (as_gradually) attack_tick = 0x0;
    }
    if (AttackRender) {
      const _0x256079 = 声暗问弹者(self_id, _0x4af2d1);
      callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"distance":' + _0x256079 * 1.01 + '}');
      setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
    }
    if (RecordInfo && ri_click) {
      let _0x4dca91 = 京都声问其(_0x4af2d1);
      归客不发寻(0x0, 'Info', '\n' + _0x4dca91 + '\n§r§b==============================', '§r');
      if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x4af2d1) + '_' + _0x4af2d1 + '.txt', _0x4dca91);
      return true;
    }
    if (SmartWeapon) {
      let _0x9428c7 = [];
      for (let _0x39ecb1 = 0x0; _0x39ecb1 < 0x9; _0x39ecb1++) _0x9428c7['push']({
        'slot': _0x39ecb1,
        'd': 十六言命曰(self_id, _0x39ecb1)
      });
      _0x9428c7['sort']((_0x4457f4, _0xe02108) => _0xe02108['d'] - _0x4457f4['d']);
      let _0x25d81b = _0x9428c7[0x0];
      if (_0x25d81b['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x25d81b['slot']);
    }
    if (ClickTarget) {
      if (!at_lists['includes'](_0x4af2d1)) at_lists['push'](_0x4af2d1);else at_lists['splice'](at_lists['indexOf'](_0x4af2d1), 0x1);
      归客不发寻(0x0, !at_lists['includes'](_0x4af2d1) ? 'delTarget' : 'addTarget', getEntityName(_0x4af2d1), '§r');
      return true;
    }
    if (CustomKB) {
      const _0x1a4cd3 = getPos(_0x4af2d1);
      const _0x2d7e3d = 弦弦掩抑声(self_pos, _0x1a4cd3, 'yaw_pos');
      const _0x22ab8f = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
        'yaw': _0x2d7e3d,
        'pitch': 0x0
      });
      setEntityMotion(_0x4af2d1, _0x22ab8f['x'] - self_pos['x'], ckb_y, _0x22ab8f['z'] - self_pos['z']);
    }
    if (ClickWhiteList) {
      if (!at_whileLists['includes'](_0x4af2d1)) at_whileLists['push'](_0x4af2d1);else at_whileLists['splice'](at_whileLists['indexOf'](_0x4af2d1), 0x1);
      归客不发寻(0x0, !at_whileLists['includes'](_0x4af2d1) ? 'delTarget' : 'addTarget', getEntityName(_0x4af2d1), '§r');
      return true;
    }
    if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
      ct_team = 唤始出来犹(getEntityName(_0x4af2d1));
      归客不发寻(0x0, 'setTeam', ct_team, '§r');
      return true;
    }
    if (TargetHud && modes['th_select_mode'] == 0x1) th_target = _0x4af2d1;
    if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
  }
  function onSendChatMessageEvent(_0x93fb22) {
    if (_0x93fb22 === '') return true;
    if (BypassMute) {
      if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x93fb22);
      if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x93fb22);
      if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x93fb22);
      return true;
    }
    if (ChatManager && cm_fake) {
      executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x93fb22);
      return true;
    }
    if (FakeChat) {
      chatMessage(fc_target, _0x93fb22);
      return true;
    }
    if (FakeWhisper) {
      whisperMessage(fw_target, _0x93fb22);
      return true;
    }
    if (ChatSuffix && !_0x93fb22['includes'](cs_text)) {
      sendChatMessage(_0x93fb22 + cs_text);
      return true;
    }
  }
  function onClientMessageEvent(_0x385603, _0x4b7172) {
    if (ChatManager && (_0x385603 != getEntityName(self_id) && cm_other || _0x385603 == getEntityName(self_id) && cm_self) && !isRepeating) {
      isRepeating = true;
      for (let _0x176dff = 0x0; _0x176dff < cm_repeat_times; _0x176dff++) sendChatMessage(_0x4b7172);
      setTimeout(() => isRepeating = false, 0x64);
    }
    ;
    if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x385603 + ', 消息:' + _0x4b7172, '§r');
    if (ChatManager) return cm_black['some'](_0x14c239 => _0x4b7172['includes'](_0x14c239));
    if (ChatManager && _0x4b7172['length'] > cm_length) return;
    if (BulletNotice) {
      let _0x28b2ea = Math['round'](马客在船举(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
      let _0x230d18 = createText(bn_format['replaceAll']('[名字]', _0x385603)['replaceAll']('[消息]', _0x4b7172), 'Center', nx_screen['screenWidth'], _0x28b2ea);
      if (_0x230d18 > -0x1) bn_list['push']({
        'id': _0x230d18,
        'speed': 马客在船举(bn_min, bn_max),
        'x': nx_screen['screenWidth'],
        'y': _0x28b2ea
      });
      return bn_intercept;
    }
    return ShowClientMessage;
  }
  function onPlayerJumpEvent(_0x5a844) {
    if (ActivitySender) sendChatMessage('我正在跳跃');
    if (PVPDaLao) setTitle('还是什么都不知道的小白');
    if (LongJump) {
      const _0x2add4d = getEntityMotion(_0x5a844);
      const _0x1d94cf = getCameraRotation();
      const _0x1dfa54 = 酒欲饮无管(_0x2add4d, self_pos, 0x14);
      const _0x5172b1 = 忽闻水上琵(lj_len / 0x4, self_pos, {
        'yaw': _0x1d94cf['yaw'] > 0x0 ? 0xb4 - _0x1d94cf['yaw'] : -0xb4 - _0x1d94cf['yaw'],
        'pitch': 0x0
      });
      setMotion(_0x5172b1['x'] - self_pos['x'], lj_y, _0x5172b1['z'] - self_pos['z']);
    }
  }
  function onPyRpcReceiveEvent(_0x2f4095, _0xde9f15) {
    if (PyRpcManager && rpc_rec) {
      const _0x49cd18 = new Uint8Array(_0xde9f15);
      const _0x228add = Array['from'](_0x49cd18, _0x4d054f => _0x4d054f['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x505814 = 左迁九江郡(_0xde9f15)['toLowerCase']();
      let _0x259ba5 = false;
      let _0x439e47 = rpc_tipWhite['some'](_0x45928a => _0x505814['includes'](_0x45928a));
      if (!_0x259ba5) _0x259ba5 = rpc_black['some'](_0x43b988 => _0x505814['includes'](_0x43b988));
      if (!_0x259ba5) _0x259ba5 = rpc_recBlack['some'](_0x2dab63 => _0x505814['includes'](_0x2dab63));
      if (rpc_white['some'](_0x404011 => _0x505814['includes'](_0x404011))) _0x259ba5 = false;
      if (rpc_recWhite['some'](_0x2958fb => _0x505814['includes'](_0x2958fb))) _0x259ba5 = false;
      if (rpc_record && (_0x439e47 && rpc_exclude || !_0x439e47)) {
        const _0x8761a = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x2cdd3a = JSON['parse'](抱琵琶半遮(_0x8761a));
        _0x2cdd3a[_0x2cdd3a['length']] = {
          'packet_hex': _0x228add,
          'packet_format': 六幺大弦嘈(_0x228add),
          'packet_str': 左迁九江郡(_0xde9f15),
          'packet_bin': _0x49cd18,
          'time': Date['now'](),
          'id': _0x2f4095,
          'type': 'Receive',
          'rpc_black': rpc_recBlack,
          'global_keyword': rpc_black,
          'intercept': _0x259ba5
        };
        File['write'](_0x8761a, JSON['stringify'](_0x2cdd3a, null, 0x4));
      }
      let _0x323310 = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x323310 = 左迁九江郡(_0xde9f15);
      if (modes['rpc_mode'] === 0x1) _0x323310 = _0x228add;
      if (modes['rpc_mode'] === 0x2) _0x323310 = 六幺大弦嘈(_0x228add);
      if (modes['rpc_mode'] === 0x3) _0x323310 = JSON['stringify'](_0xde9f15);
      const _0x23fcc0 = _0x259ba5 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
      if (rpc_tip && !_0x439e47 && (rpc_showDisintercept && !_0x259ba5 || rpc_showIntercept && _0x259ba5)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x2f4095 + '\n' : '') + _0x323310 + _0x23fcc0, '§r');
      return _0x259ba5;
    }
  }
  function onPyRpcSendEvent(_0x343600, _0x3557d4) {
    if (PyRpcManager && rpc_send) {
      const _0x27ec67 = new Uint8Array(_0x3557d4);
      const _0x3bb51b = Array['from'](_0x27ec67, _0x14cf36 => _0x14cf36['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x2aac99 = 左迁九江郡(_0x3557d4)['toLowerCase']();
      let _0x31871f = false;
      let _0x56ec1c = rpc_tipWhite['some'](_0x317048 => _0x2aac99['includes'](_0x317048));
      if (!_0x31871f) _0x31871f = rpc_black['some'](_0x248600 => _0x2aac99['includes'](_0x248600));
      if (!_0x31871f) _0x31871f = rpc_sendBlack['some'](_0x3574c1 => _0x2aac99['includes'](_0x3574c1));
      if (rpc_white['some'](_0x38389f => _0x2aac99['includes'](_0x38389f))) _0x31871f = true;
      if (rpc_sendWhite['some'](_0x553153 => _0x2aac99['includes'](_0x553153))) _0x31871f = false;
      if (!_0x56ec1c) prev_rpc = {
        'id': _0x343600,
        'data': _0x27ec67
      };
      if (rpc_store) rpc_temp['push']({
        'id': _0x343600,
        'data': _0x27ec67
      });
      if (rpc_intercept) _0x31871f = true;
      if (rpc_record && (_0x56ec1c && rpc_exclude || !_0x56ec1c)) {
        const _0x44e8f7 = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x33e8a8 = JSON['parse'](抱琵琶半遮(_0x44e8f7));
        _0x33e8a8[_0x33e8a8['length']] = {
          'packet_hex': _0x3bb51b,
          'packet_format': 六幺大弦嘈(_0x3bb51b),
          'packet_str': 左迁九江郡(_0x3557d4),
          'packet_bin': _0x27ec67,
          'time': Date['now'](),
          'id': _0x343600,
          'type': 'Send',
          'keword': rpc_sendBlack,
          'global_keyword': rpc_black,
          'intercept': _0x31871f
        };
        File['write'](_0x44e8f7, JSON['stringify'](_0x33e8a8, null, 0x4));
      }
      let _0x19fe97 = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x19fe97 = 左迁九江郡(_0x3557d4);
      if (modes['rpc_mode'] === 0x1) _0x19fe97 = _0x3bb51b;
      if (modes['rpc_mode'] === 0x2) _0x19fe97 = 六幺大弦嘈(_0x3bb51b);
      if (modes['rpc_mode'] === 0x3) _0x19fe97 = JSON['stringify'](_0x3557d4);
      for (let _0x1a12a4 of rpc_config) {
        if (typeof _0x1a12a4 === 'object') {
          if (_0x1a12a4['match_mode'] === 0x0 && _0x19fe97['includes'](_0x1a12a4['packet'])) _0x19fe97 = remarks;
          if (_0x1a12a4['match_mode'] === 0x1 && _0x19fe97['includes'] === _0x1a12a4['packet']) _0x19fe97 = remarks;
        } else continue;
      }
      let _0x5eda7d = _0x31871f ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
      if (rpc_tip && !_0x56ec1c && (rpc_showDisintercept && !_0x31871f || rpc_showIntercept && _0x31871f)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x343600 + '\n' : '') + _0x19fe97 + _0x5eda7d, '§r');
      return _0x31871f;
    }
  }
  function onEntityBehaviorEvent(_0x42bd09, _0x1a3c15, _0x333ba3) {
    if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x42bd09 + ' 实体昵称:' + getEntityName(_0x42bd09) + ' 行为ID:' + _0x1a3c15 + ' 行为数据:' + _0x333ba3, '§r');
    if (_0x1a3c15 === 0x27 && _0x42bd09 === av_id) av_id = null;
    if (_0x1a3c15 === 0x3 && attack_list['includes'](_0x42bd09)) {
      if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
      if (KillMessage) {
        if (km_hide) {
          for (let _0x53672c = 0x0; _0x53672c < 0x32; _0x53672c++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x42bd09) + ' 死了');
          executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
        } else sendChatMessage(km_text);
      }
      归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x42bd09), '§r');
      if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
      kills++;
      mini_tick = 0x0;
      if (FunnyKill && mini_kills < 0xa) mini_kills++;
      setTimeout(() => {
        if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
        if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
      }, mini_delay * 0x3e8);
    }
    if (_0x1a3c15 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x42bd09);
    if (_0x1a3c15 === 0x2 && attack_list['includes'](_0x42bd09)) real_attack++;
    if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x1a3c15 === 0x4 && _0x42bd09 != self_id)) {
      let _0x23e194 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x42bd09;
      if (声暗问弹者(_0x23e194, self_id) < fb_range) 江头夜送客(_0x42bd09, Swing);
      fb_ishurt = false;
    }
    if (_0x1a3c15 === 0x2 && _0x42bd09 === self_id) {
      let _0x18e5e7 = getEntityMotion(self_id);
      if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
      if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
      if (ActivitySender) sendChatMessage('我正在被攻击');
      if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x333ba3, '§r');
      if (HurtJump) setMotion(_0x18e5e7['x'], hj_height, _0x18e5e7['z']);
      if (AntiKB) {
        let _0x55f2f3 = akb_hor / 0x64;
        let _0x1215b0 = akb_y / 0x64;
        setMotion(_0x18e5e7['x'] - _0x55f2f3 * _0x18e5e7['x'], _0x18e5e7['y'] - _0x1215b0 * _0x18e5e7['y'], _0x18e5e7['z'] - _0x55f2f3 * _0x18e5e7['z']);
      }
      if (AirStuck) as_time_t = 0x0;
      if (FightBack && _0x333ba3 == 0x2) fb_ishurt = true;
    }
    if (_0x1a3c15 === 0x2) attack_list = [];
  }
  function onPlayerDestroyBlockEvent(_0x359e9d, _0x5a0539, _0x1012b3, _0x70cabf, _0x119276) {
    const _0x4a8b1a = getCarried(_0x359e9d);
    const _0x4b041c = getBlock(_0x5a0539, _0x1012b3, _0x70cabf);
    if (_0x4b041c['namespace'] == 'minecraft:air') return;
    if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
    if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x4b041c['namespace'] + ', §rID:' + _0x4b041c['id'] + ', 方块选择面:' + _0x119276 + ', §r特殊值:' + _0x4b041c['aux'] + '\n手持:' + _0x4a8b1a['name'] + '-[' + _0x4a8b1a['namespace'] + '], 特殊值:' + _0x4a8b1a['aux'] + '\n坐标:[' + _0x5a0539 + ', ' + _0x1012b3 + ', ' + _0x70cabf + ']', '§r');
    if (ActivitySender) sendChatMessage('我正在破坏' + _0x5a0539 + ' ' + _0x1012b3 + ' ' + _0x70cabf + '的' + _0x4b041c['namespace']);
    if (Miner && (_0x4b041c['namespace'] === mine_name || !mine_destroy)) {
      if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x50e25f => _0x4b041c['namespace']['includes'](_0x50e25f))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x1ab6bc => !_0x4b041c['namespace']['includes'](_0x1ab6bc)))) {
        mine_destroy = true;
        mine_name = _0x4b041c['namespace'];
      }
      if (mine_destroy && mine_name != _0x4b041c['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x4b041c['namespace'];
      if (getDistance(self_pos, {
        'x': _0x5a0539,
        'y': _0x1012b3,
        'z': _0x70cabf
      }) <= mine_distance && mine_destroy) {
        let _0x28a660 = [[_0x5a0539 + 0x1, _0x1012b3, _0x70cabf], [_0x5a0539 - 0x1, _0x1012b3, _0x70cabf], [_0x5a0539, _0x1012b3, _0x70cabf + 0x1], [_0x5a0539, _0x1012b3, _0x70cabf - 0x1], [_0x5a0539, _0x1012b3 + 0x1, _0x70cabf], [_0x5a0539, _0x1012b3 - 0x1, _0x70cabf]];
        for (p of _0x28a660) {
          const _0x129078 = getBlock(p[0x0], p[0x1], p[0x2]);
          if (_0x129078['namespace'] != 'minecraft:air' && _0x4b041c['namespace'] === mine_name) mine_list['push'](p);
        }
      }
    }
  }
  function onReadyEvent() {
    if (ShowGameInfo) {
      const _0x3401d7 = getWorldData();
      if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x3401d7['levelName'] + ' ，难度:' + _0x3401d7['difficulty'] + ' 游戏模式:' + _0x3401d7['gameType'] + ' 游戏时间:' + _0x3401d7['time'] + ' 随机刻速度:' + _0x3401d7['randomTickSpeed'], '§r');
    }
  }
  function onPlayerBuildBlockEvent(_0x2c7435, _0x694599, _0x2b9cdc, _0x322892, _0x1fa053) {
    if (PVPDaLao) setTitle('又或是建筑大佬');
    if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
    const _0x220b13 = getCarried(_0x2c7435);
    const _0xecb47d = getBlock(_0x694599, _0x2b9cdc, _0x322892);
    if (ActivitySender) sendChatMessage('我正在放置' + _0x220b13['name']);
    if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0xecb47d['namespace'] + ', §rID:' + _0xecb47d['id'] + ', 方块选择面:' + _0x1fa053 + ', §r特殊值:' + _0xecb47d['aux'] + '\n手持:' + _0x220b13['name'] + '-[' + _0x220b13['namespace'] + '], 特殊值:' + _0x220b13['aux'] + '\n坐标:[' + _0x694599 + ', ' + _0x2b9cdc + ', ' + _0x322892 + ']', '§r');
    if (ClickTP) 欲语迟移船(_0x694599, _0x2b9cdc + 0x2, _0x322892);
    const _0x718ba2 = ChestAura && ca_rot && _0xecb47d['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x2c7435) || ClickRot;
    if (_0x718ba2) {
      let _0x2b0030 = {
        'x': _0x694599,
        'y': _0x2b9cdc,
        'z': _0x322892
      };
      const _0x36291c = _0x36291c(getEntityMotion(_0x2c7435), getPos(_0x2c7435), 0x14);
      let _0x1d8974 = 弦弦掩抑声(_0x36291c, _0x2b0030, 'pitch_pos');
      let _0x1e8f93 = 弦弦掩抑声(_0x36291c, _0x2b0030, 'yaw_pos');
      于穆曹二善(_0x1d8974, _0x1e8f93);
    }
    if (GetCommand && _0xecb47d['namespace']['includes']('command_block')) {
      let _0x21cebd = getBlockEntityNBT(_0x694599, _0x2b9cdc, _0x322892);
      let _0xe1f8a5 = 琵琶行浔阳(_0x21cebd, 'Command:"', '",Cu');
      let _0x438c81 = 琵琶行浔阳(_0x21cebd, 'auto:', 'b,c') === '1' ? '是' : '否';
      let _0x15fc70 = 琵琶行浔阳(_0x21cebd, 'TickDelay:', ',Tr');
      归客不发寻(0x0, 'Cmd', '坐标:[' + _0x694599 + ' ' + _0x2b9cdc + ' ' + _0x322892 + '] 指令:' + _0xe1f8a5 + ' 是否自动:' + _0x438c81 + ' 执行延迟:' + _0x15fc70, '§r');
      return true;
    }
    if (BlockTagCopy) {
      if (btc_pos === null) btc_pos = [_0x694599, _0x2b9cdc, _0x322892];else {
        setBlockEntityData(_0x694599, _0x2b9cdc, _0x322892, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
        btc_pos = null;
        归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
      }
      return true;
    }
    if (FakeBuilder) {
      let _0x5e1cd0 = [[_0x694599, _0x2b9cdc - 0x1, _0x322892], [_0x694599, _0x2b9cdc + 0x1, _0x322892], [_0x694599, _0x2b9cdc, _0x322892 - 0x1], [_0x694599, _0x2b9cdc, _0x322892 + 0x1], [_0x694599 - 0x1, _0x2b9cdc, _0x322892], [_0x694599 + 0x1, _0x2b9cdc, _0x322892]];
      setBlock(_0x5e1cd0[_0x1fa053][0x0], _0x5e1cd0[_0x1fa053][0x1], _0x5e1cd0[_0x1fa053][0x2], _0x220b13['namespace'], _0x220b13['aux']);
      return true;
    }
    if (ClickBlock) return setBlock(_0x694599, _0x2b9cdc, _0x322892, _0x220b13['namespace'], _0x220b13['aux']);
    if ((InvCleaner || SmartInv) && _0xecb47d['namespace'] === 'minecraft:chest') isChest = true;
    if (ClickDestroy && !AutoDestroy) 慢捻抹复挑({
      'x': _0x694599,
      'y': _0x2b9cdc,
      'z': _0x322892
    });
    if (AutoBed && _0xecb47d['namespace'] === 'minecraft:bed' && !ab_running) {
      归客不发寻(0x0, 'Tip', '请手持方块', '§r');
      let _0x11f195 = [[_0x694599 + 0x1, _0x2b9cdc, _0x322892], [_0x694599 - 0x1, _0x2b9cdc, _0x322892], [_0x694599, _0x2b9cdc, _0x322892 + 0x1], [_0x694599, _0x2b9cdc, _0x322892 - 0x1], [_0x694599, _0x2b9cdc + 0x1, _0x322892]];
      ab_running = true;
      for (let _0x18800b of _0x11f195) {
        const _0x343479 = getBlock(_0x18800b[0x0], _0x18800b[0x1], _0x18800b[0x2]);
        if (_0x343479['namespace'] === 'minecraft:air') 事今漂沦憔(_0x18800b[0x0], _0x18800b[0x1], _0x18800b[0x2]);
      }
      ab_running = false;
    }
    if (Breaker && (_0x220b13['namespace']['includes']('sword') || _0x220b13['namespace']['includes']('pickaxe'))) {
      if (bk_origin) {
        callModule(0xf, '{"value":true}');
        setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
        return true;
      }
      const _0x478879 = Math['round'](bk_range);
      _0xb6c915: for (let _0x4466b9 = -_0x478879; _0x4466b9 <= _0x478879; _0x4466b9++) {
        for (let _0x12bcc6 = -_0x478879; _0x12bcc6 < _0x478879; _0x12bcc6++) {
          for (let _0x35d161 = -_0x478879; _0x35d161 <= _0x478879; _0x35d161++) {
            let _0x43e002 = _0x694599 + _0x4466b9;
            let _0x23881c = _0x2b9cdc + _0x12bcc6;
            let _0x3cfcb6 = _0x322892 + _0x35d161;
            let _0x59e90e = getBlock(_0x43e002, _0x23881c, _0x3cfcb6);
            if (bk_bed && _0x59e90e['namespace'] === 'minecraft:bed' || bk_chest && _0x59e90e['namespace'] === 'minecraft:chest') {
              let _0x66e47 = getBlock(_0x43e002, _0x23881c + 0x1, _0x3cfcb6);
              if (_0x66e47['namespace'] != 'minecraft:air' && bk_up) _0x23881c += 0x1;
              if (bk_tool && _0x66e47['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0x2c7435, 枫叶荻花秋(_0x2c7435, '_pickaxe'));
              if (bk_tool && _0x66e47['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0x2c7435, 枫叶荻花秋(_0x2c7435, '_axe'));
              bk_pos = {
                'ex': _0x43e002,
                'ey': _0x23881c,
                'ez': _0x3cfcb6
              };
              bk_timer = 0x0;
              break _0xb6c915;
            }
          }
        }
      }
    }
    if (bc_select && BlockClicker) {
      ac_pos['push']({
        'x': _0x694599,
        'y': _0x2b9cdc,
        'z': _0x322892
      });
      归客不发寻(0x0, 'Tip', '已添加[' + _0x694599 + ', ' + _0x2b9cdc + ', ' + _0x322892 + ']', '§r');
      return true;
    }
    if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
      const _0x426f53 = getCameraRotation();
      for (let _0x5c4d86 = 0x0; _0x5c4d86 < fb_len + 0x1; _0x5c4d86++) fb_list['push'](忽闻水上琵(_0x5c4d86, 面转轴拨弦(_0x2c7435), {
        'pitch': 0x0,
        'yaw': _0x426f53['yaw'] > 0x0 ? 0xb4 - _0x426f53['yaw'] : -0xb4 - _0x426f53['yaw']
      }));
      fb_success = false;
      return true;
    }
    if (ca_check && _0xecb47d['namespace'] === 'minecraft:chest') chestStates['click'] = true;
  }
  function onKeyboardDownEvent(_0x51ebe6) {
    if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x51ebe6, '§r');
    if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x51ebe6] !== 'undefined') 委身为贾人(nx_keys[_0x51ebe6], !globalThis[nx_keys[_0x51ebe6]]);
    if (nx_isBind != null && _0x51ebe6 != 0x42) {
      nx_keys[_0x51ebe6] = nx_isBind;
      nx_cfg['key_binds'] = nx_keys;
      归客不发寻(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x51ebe6, '§r');
      nx_isBind = null;
    }
  }
  function onKeyboardUpEvent(_0x2b72e7) {
    if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x2b72e7, '§r');
  }
  function onSendServerPacketEvent(_0xa9fc2f, _0x573c44) {
    if (NoClip && nc_blink && (_0xa9fc2f === 0x13 || _0xa9fc2f === 0x90) && Object['keys'](nc_pos)['length'] > 0x0) {
      if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;else return true;
    }
    if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
    if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0xa9fc2f === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x1 && _0xa9fc2f === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x2 && _0xa9fc2f === 0xa1) return true;
    if (FreeCam && modes['fc_mode'] === 0x3 && _0xa9fc2f === 0x90) return true;
    if (FreeCam && modes['fc_mode'] === 0x0) return true;
    if (ShowSendPacket) {
      const _0x4b7059 = PacketTranslate[PacketTranslate['map'](_0x178f1a => _0x178f1a['id'])['indexOf'](_0xa9fc2f)]['text'];
      if (sp_statistic) {
        if (typeof PacketTmp['send'][_0x573c44] === 'undefined') PacketTmp['send'][_0x573c44] = {
          'id': _0xa9fc2f,
          'Translate': _0x4b7059,
          'count': 0x1
        };
        PacketTmp['send'][_0x573c44]['count']++;
      }
      const _0x5dab5d = PacketCfg['send'];
      const {
        ignore,
        intercept
      } = PacketCfg['send'];
      let _0x359b91 = [];
      if (sp_id) _0x359b91['push'](_0xa9fc2f);
      if (sp_name) _0x359b91['push'](_0x573c44);
      if (sp_trans) _0x359b91['push'](_0x4b7059);
      let _0x1647bd = sp_intercept && (intercept['includes'](_0xa9fc2f) || intercept['includes'](_0x573c44));
      if (!sp_ignore || !(ignore['includes'](_0xa9fc2f) || ignore['includes'](_0x573c44))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x359b91['join'](' - ') + (_0x1647bd ? '\n§e已拦截数据包' : ''), '§r');
      return _0x1647bd;
    }
  }
  function onReceiveServerPacketEvent(_0x3f7094, _0x265c63) {
    if (ShadowBoomer && _0x3f7094 == 0x19 && sb_hide) return true;
    if (KillAura && ka_close && _0x3f7094 == 0x55) {
      KillAura = false;
      归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
    }
    if ((TimePause || AvoidAttack) && _0x3f7094 === 0x13) return true;
    if (NoAnyReceive) return true;
    if (AntiText && _0x3f7094 === 0x9) at_current++;
    if ((KickAura || AntiText && at_current > at_max_text) && _0x3f7094 === 0x9) return true;
    if (ModifyTime && _0x3f7094 === 0xa) return true;
    if (ca_check && _0x3f7094 === 0x2f) chestStates['packet'] = true;
    if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x3f7094 === 0x13) return true;
    if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
    if (FreeCam && modes['fc_mode'] === 0x4 && _0x3f7094 === 0x12) return true;
    if (NoCamShake && _0x3f7094 === 0x1b) return true;
    if (ShowReceivePacket) {
      const _0x4ae0a3 = PacketTranslate[PacketTranslate['map'](_0x1f55b7 => _0x1f55b7['id'])['indexOf'](_0x3f7094)]['text'];
      if (srp_statistic) {
        if (typeof PacketTmp['receive'][_0x265c63] === 'undefined') PacketTmp['receive'][_0x265c63] = {
          'id': _0x3f7094,
          'Translate': _0x4ae0a3,
          'count': 0x1
        };
        PacketTmp['receive'][_0x265c63]['count']++;
      }
      const _0x558099 = PacketCfg['receive'];
      const {
        ignore,
        intercept
      } = PacketCfg['receive'];
      let _0x13b514 = [];
      if (srp_id) _0x13b514['push'](_0x3f7094);
      if (srp_name) _0x13b514['push'](_0x265c63);
      if (srp_trans) _0x13b514['push'](_0x4ae0a3);
      let _0x4ad0df = srp_intercept && (intercept['includes'](_0x3f7094) || intercept['includes'](_0x265c63));
      if (!srp_ignore || !(ignore['includes'](_0x3f7094) || ignore['includes'](_0x265c63))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x13b514['join'](' - ') + (_0x4ad0df ? '\n§e已拦截数据包' : ''), '§r');
      return _0x4ad0df;
    }
    return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x3f7094 === 0x9;
  }
  function onTouchMotionDownEvent(_0x35ae26, _0x495708, _0x9abac4) {
    if (SafeAttack) {
      const _0x483ca0 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x31bf1f = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x53b5a0 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      const _0x36c2bb = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      if (at_lists['length'] > 0x0 && 声思似诉平(self_id, at_lists[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, at_lists[0x0]) < sa_range && _0x495708 > _0x483ca0 && _0x495708 < _0x31bf1f && _0x9abac4 > _0x53b5a0 && _0x9abac4 < _0x36c2bb) 江头夜送客(at_lists[0x0], Swing);
    }
    if (ClickSwing) swingArm();
    isClicking = true;
    click_num++;
  }
  function onContainerItemMoveEvent(_0x42550f, _0x358b72) {
    const _0x760615 = 音铮铮然有(_0x358b72);
    if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x760615['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x760615['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
    if (ChestStealer && (!cs_sort || _0x42550f > cs_sort) && cs_current < cs_maxCount) {
      let _0x4c0fcc = cs_black['length'] === 0x0 || cs_black['some'](_0x5648cc => _0x760615['namespace']['includes'](_0x5648cc));
      if (cs_white['length'] !== 0x0 && cs_white['some'](_0x3d8208 => _0x760615['namespace']['includes'](_0x3d8208))) _0x4c0fcc = false;
      if (_0x42550f < cs_min && _0x42550f > cs_max) _0x4c0fcc = false;
      if (_0x760615['attackDamage'] !== 0x0 && _0x760615['attackDamage'] < cs_min_damage) _0x4c0fcc = false;
      if (_0x760615['damage'] !== 0x0 && _0x760615['damage'] < cs_min_lasting) _0x4c0fcc = false;
      if (!cs_weapon && _0x760615['attackDamage'] > 0x0 && _0x760615['damage'] > 0x0) _0x4c0fcc = false;
      if (!cs_armor && _0x760615['attackDamage'] === 0x0 && _0x760615['damage'] > 0x0) _0x4c0fcc = false;
      if (!cs_other && _0x760615['attackDamage'] === 0x0 && _0x760615['damage'] === 0x0) _0x4c0fcc = false;
      if (cs_sort) cs_sort = _0x42550f;
      if (_0x4c0fcc) cs_timer = 0x0;
      if (_0x4c0fcc) cs_current++;
      return _0x4c0fcc;
    }
    if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x42550f + '\n§e物品NBT数据: §r' + _0x358b72, '§r');
  }
  function onPlayerAuthInputEvent(_0xf292e1) {
    if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0xf292e1.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0xf292e1.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0xf292e1['pos']['x']['toFixed'](0x2) + ', ' + _0xf292e1['pos']['y']['toFixed'](0x2) + ',' + _0xf292e1['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0xf292e1['delta']['x']['toFixed'](0x2) + ', ' + _0xf292e1['delta']['y']['toFixed'](0x2) + ', ' + _0xf292e1['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0xf292e1['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0xf292e1['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0xf292e1['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0xf292e1['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0xf292e1['flags']), '§r');
  }
  function onSAuthLoginRequestEvent(_0x23803e) {
    if (DumpRequestSauth) {
      File['write'](nx_paths + '/SauthRequest.json', _0x23803e);
      showToast('已导出请求体');
    }
    if (Sauths != null && Sauths != '' && !sl_hook) {
      let _0x3b9d8b = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
      const _0xb4651c = _0x23803e['replace'](琵琶行浔阳(_0x23803e, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x3b9d8b)['sauth_json']));
      showToast('已拦截替换Sauth');
      return _0xb4651c['replace'](/转义/g, '\\"');
    }
  }
  function onSAuthLoginResponseEvent(_0x2e9471) {
    if (DumpResponseSauth) {
      File['write'](nx_paths + '/SauthResponse.json', _0x2e9471);
      showToast('已导出响应体');
    }
    if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
  }
  function onSAuthJsonHookEvent(_0x2491f4) {
    if (DumpCookieSauth) {
      File['write'](nx_paths + '/SauthCookie.json', _0x2491f4);
      showToast('已导出本账号Cookie');
    }
    if (Sauths != null && Sauths != '' && sl_hook) {
      showToast('已拦截替换Sauth');
      let _0x2b376f = JSON['parse'](Sauths);
      if (typeof _0x2b376f['sauth_json'] !== 'undefined') _0x2b376f = _0x2b376f['sauth_json'];
      return _0x2b376f;
    }
  }
  if (nx_defaultCfg != '{}') {
    let list = JSON['parse'](nx_defaultCfg);
    let num = 0x0;
    nx_binds = list['binds'];
    nx_keys = list['key_binds'];
    nx_raBinds = list['nx_raBinds'];
    for (let key in list) {
      num++;
      if (key['includes']('_mode')) modes[key] = list[key];
      if (key != 'nx_raBinds' && key != 'key_binds' && key != 'binds' && key != 'name') 委身为贾人(key, list[key]);
    }
    nx_cfg = list;
    归客不发寻(0x0, 'Tip', '成功加载' + list['name'] + '的配置，共' + num + '条配置', '§r');
  }
  归客不发寻(0x0, 'Tip', '§aNoveXare Load Successful!', '§a');
  归客不发寻(0x0, 'Tip', 'You Are Use ' + nx_ui['name'] + ' To Play NX', '§b');
} catch (e) {
  clientMessage(e.toString());
}