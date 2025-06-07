/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 06 - 02  18：25：58
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e06§b02§f182558§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

  const sendShadow = (_0x3c1df4, _0x5bd76c, _0x4487fd) => sendPlayerAction({
    'id': self_id,
    'pos': {
      'x': _0x3c1df4,
      'y': _0x5bd76c,
      'z': _0x4487fd
    },
    'type': 0x11
  });
  const getPos = _0x4998ed => {
    let _0x5178ca = getEntityPos(_0x4998ed);
    if (_0x5178ca) _0x5178ca['y'] += getPos_offset;
    return _0x5178ca || {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    };
  };
  const silentMove = (_0x47feda, _0x485c2e, _0x178ec8) => sendPlayerAuthInput({
    'pos': {
      'x': _0x47feda,
      'y': _0x485c2e,
      'z': _0x178ec8
    },
    'yHeadRot': 0x0,
    'inputMode': 0x2,
    'playMode': 0x0,
    'flags': [0x6],
    'motion': {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    },
    'rot': {
      'yaw': 0x0,
      'pitch': 0x0
    }
  });
  const movePlayer = (_0x278f41, _0x32f61a, _0x10893d, _0x457c08 = true) => sendMovePlayer({
    'id': self_id,
    'pos': {
      'x': _0x278f41,
      'y': _0x32f61a,
      'z': _0x10893d
    },
    'yHeadRot': 0x0,
    'mode': 0x0,
    'rot': {
      'yaw': 0x0,
      'pitch': 0x0
    },
    'ground': _0x457c08
  });
  const 元和十年予 = _0x3c55a2 => {
    const _0x359b57 = new Uint8Array(_0x3c55a2);
    let _0xa8f0a = '';
    for (let _0x3e1aa7 = 0x0; _0x3e1aa7 < _0x359b57['length'];) {
      let _0x17d85e = _0x359b57[_0x3e1aa7++];
      if (_0x17d85e <= 0x7f) _0xa8f0a += String['fromCharCode'](_0x17d85e);else if (_0x17d85e >> 0x5 === 0x6) {
        let _0x36576d = _0x359b57[_0x3e1aa7++];
        _0xa8f0a += String['fromCharCode']((_0x17d85e & 0x1f) << 0x6 | _0x36576d & 0x3f);
      } else if (_0x17d85e >> 0x4 === 0xe) {
        let _0x15c28e = _0x359b57[_0x3e1aa7++];
        let _0x4df1bb = _0x359b57[_0x3e1aa7++];
        _0xa8f0a += String['fromCharCode']((_0x17d85e & 0xf) << 0xc | (_0x15c28e & 0x3f) << 0x6 | _0x4df1bb & 0x3f);
      } else if (_0x17d85e >> 0x3 === 0x1e) {
        let _0x4501ed = _0x359b57[_0x3e1aa7++];
        let _0x531af8 = _0x359b57[_0x3e1aa7++];
        let _0x47fb51 = _0x359b57[_0x3e1aa7++];
        let _0x20a84b = (_0x17d85e & 0x7) << 0x12 | (_0x4501ed & 0x3f) << 0xc | (_0x531af8 & 0x3f) << 0x6 | _0x47fb51 & 0x3f;
        _0xa8f0a += String['fromCodePoint'](_0x20a84b);
      }
    }
    return _0xa8f0a;
  };
  const 左迁九江郡 = (_0x49e849, _0x3d21bc, _0x54ab58, _0x4730bb) => {
    let _0x7999de = _0x49e849['indexOf'](_0x3d21bc) + _0x3d21bc['length'];
    let _0x2c9b3c = _0x49e849['indexOf'](_0x54ab58, _0x7999de);
    if (typeof _0x4730bb !== 'undefined' && _0x49e849['indexOf'](_0x4730bb, _0x7999de) < _0x2c9b3c && _0x49e849['indexOf'](_0x4730bb, _0x7999de) != -0x1) _0x2c9b3c = _0x49e849['indexOf'](_0x4730bb, _0x7999de);
    if (_0x7999de === -0x1 || _0x2c9b3c === -0x1) return null;
    return _0x49e849['substring'](_0x7999de, _0x2c9b3c);
  };
  const 司马明年秋 = _0x3a66d3 => {
    let _0x546724 = _0x3a66d3['split']('');
    let _0x1bf515 = '';
    let _0x2f7052 = '4c6e2a3b195d'['split']('');
    for (let _0x124403 in _0x546724) _0x1bf515 += '§' + _0x2f7052[_0x124403 % _0x2f7052['length']] + _0x546724[_0x124403];
    return _0x1bf515;
  };
  const 送客湓浦口 = _0x70b225 => {
    if (_0x70b225['startsWith']('0x')) _0x70b225 = _0x70b225['slice'](0x2);
    const _0x403a62 = [];
    for (let _0x3ae056 = 0x0; _0x3ae056 < _0x70b225['length']; _0x3ae056 += 0x2) {
      const _0x51df96 = parseInt(_0x70b225['slice'](_0x3ae056, _0x3ae056 + 0x2), 0x10);
      _0x403a62['push'](_0x51df96);
    }
    return new Uint8Array(_0x403a62);
  };
  const 闻舟中夜弹 = (_0x5da8e5, _0x583a11, _0x461b46 = 0x1) => {
    if (_0x461b46 == 0x1) sendRpc(_0x5da8e5, 送客湓浦口(_0x583a11));
    if (_0x461b46 == 0x2) sendRpc(_0x5da8e5, _0x583a11);
    if (_0x461b46 == 0x3) {
      const _0x3b97bd = new Uint8Array(str['length']);
      for (let _0x588e10 = 0x0; _0x588e10 < str['length']; _0x588e10++) _0x3b97bd[_0x588e10] = str['charCodeAt'](_0x588e10);
      sendRpc(_0x5da8e5, _0x3b97bd);
    }
  };
  const 琵琶者听其 = _0x1aa271 => {
    if (nx_nbts[_0x1aa271] !== undefined) return nx_nbts[_0x1aa271];
    const _0x1ca290 = 左迁九江郡(_0x1aa271, ',Name:"', '",WasPickedUp');
    if (_0x1ca290 === '' || typeof _0x1ca290 !== 'string') return {
      'aux': 0x0,
      'count': 0x0,
      'namespace': 'minecraft:air',
      'enchants': []
    };
    const _0x3408b9 = Number(左迁九江郡(_0x1aa271, ',aux:', ','));
    const _0x562585 = Number(左迁九江郡(_0x1aa271, 'Count:', 'b,D'));
    const _0x22af1b = _0x1aa271['includes'](',name:"') ? 左迁九江郡(_0x1aa271, ',name:"', '",') : _0x1ca290['replace']('minecraft:', '');
    const _0x2461c4 = _0x1aa271['includes'](',netId:') ? Number(左迁九江郡(_0x1aa271, ',netId:', '}')) : 0x0;
    const _0x257841 = _0x1aa271['includes']('maxDamage') ? Number(左迁九江郡(_0x1aa271, ',maxDamage:', ',')) : 0x0;
    const _0x4a9f10 = _0x1aa271['includes']('attackDamage') ? Number(左迁九江郡(_0x1aa271, 'attackDamage:', ',')) : 0x1;
    const _0x17221f = _0x1aa271['includes']('customColor') ? 左迁九江郡(_0x1aa271, 'customColor:', '}', ',') : '';
    const _0x5e7f01 = _0x1aa271['includes']('ench:[{') ? ('[{' + 左迁九江郡(_0x1aa271, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
    const _0x248ef7 = _0x1aa271['startsWith']('{Block:');
    const _0x6a1351 = {
      'name': _0x22af1b,
      'namespace': _0x1ca290,
      'aux': _0x3408b9,
      'damage': _0x257841,
      'attackDamage': _0x4a9f10,
      'count': _0x562585,
      'color': _0x17221f,
      'isBlock': _0x248ef7,
      'id': _0x2461c4,
      'enchants': JSON['parse'](_0x5e7f01)
    };
    nx_nbts[_0x1aa271] = _0x6a1351;
    return _0x6a1351;
  };
  const 音铮铮然有 = _0x55b395 => {
    const _0x2c0600 = getEntitySize(_0x55b395);
    const _0x184e6d = getEntityMotion(_0x55b395);
    const _0x188770 = getPos(_0x55b395);
    const _0x47610a = getEntityName(_0x55b395);
    const _0x4e2872 = getEntityNamespace(_0x55b395);
    const _0x249c24 = 归客不发寻(self_id, _0x55b395);
    const _0x3d40d5 = getCarried(_0x55b395);
    const _0x7c3e55 = 枫叶荻花秋(_0x55b395);
    const _0x4fa5d1 = getEntityAttribute(_0x55b395, 'minecraft:health');
    const _0x486bc0 = getEntityAttribute(_0x55b395, 'minecraft:movement');
    const _0x161c41 = getEntityTypeId(_0x55b395);
    const _0x277cd5 = getEntityTarget(_0x55b395);
    const _0x4504ee = getPlayerInventorySize(_0x55b395);
    const _0x3f03ab = getPlayerHotBarSize(_0x55b395);
    const {
      yaw,
      pitch
    } = getEntityRot(_0x55b395);
    const _0x1304b2 = _0x403b72 => _0x403b72['toFixed'](0x2);
    const _0x319cd0 = ['唯一ID:' + _0x55b395 + ' 昵称:' + _0x47610a + '§r 实体命名空间:' + _0x4e2872 + ' 水平碰撞箱:' + _0x1304b2(_0x2c0600['x']) + ' 垂直碰撞箱:' + _0x1304b2(_0x2c0600['y']) + ' Mot速度:' + _0x7c3e55, 'ability速度:[max:' + _0x486bc0['max'] + ', min:' + _0x486bc0['min'] + ', current:' + _0x486bc0['current'] + '] 血量:[max:' + _0x4fa5d1['max'] + ', min:' + _0x4fa5d1['min'] + ', current:' + _0x4fa5d1['current'] + ']', '手持:[id:' + _0x3d40d5['id'] + ', namespace:' + _0x3d40d5['namespace'] + ', name:' + _0x3d40d5['name'] + '§r, aux:' + _0x3d40d5['aux'] + '] 距离:' + _0x249c24 + ' 实体类型:' + _0x161c41, '仰俯角:' + _0x1304b2(pitch) + '° 偏航角:' + _0x1304b2(yaw) + '° 仇恨目标:' + getEntityName(_0x277cd5) + '^' + _0x277cd5, '移动值:[' + _0x1304b2(_0x184e6d['x']) + ', ' + _0x1304b2(_0x184e6d['y']) + ', ' + _0x1304b2(_0x184e6d['z']) + '] 坐标值:[' + _0x1304b2(_0x188770['x']) + ', ' + _0x1304b2(_0x188770['y']) + ', ' + _0x1304b2(_0x188770['z']) + ']', '背包容量:' + _0x4504ee + ' 物品栏容量:' + _0x3f03ab];
    return _0x319cd0['join']('\n');
  };
  const getCarried = _0x2a8dab => 琵琶者听其(getEntityCarriedItem(_0x2a8dab));
  const getOffhand = _0x5f198c => 琵琶者听其(getEntityOffhandItem(_0x5f198c));
  const getInventory = (_0x3c16aa, _0x3cc82b) => 琵琶者听其(getPlayerInventoryItem(_0x3c16aa, _0x3cc82b));
  const 京都声问其 = (_0x5928d5, _0x54e9f6, _0x4dc43d, _0x265cc4 = false, _0x14eade = false) => {
    let _0x487a81 = {
      'x': _0x5928d5,
      'y': _0x54e9f6,
      'z': _0x4dc43d
    };
    const _0x25a999 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
    const _0x49b666 = _0x5911f4 => sendPlayerAuthInput({
      'pos': self_pos,
      'inputMode': 0x2,
      'playMode': 0x0,
      'flags': [0x23],
      'actions': _0x5911f4['map'](_0x622bb2 => ({
        'type': _0x622bb2,
        'pos': _0x487a81,
        'value': 0x1
      }))
    });
    const _0x4178b3 = _0x2ca2f0 => sendPlayerAction({
      'id': self_id,
      'pos': _0x487a81,
      'type': _0x2ca2f0
    });
    if (_0x265cc4) _0x49b666(_0x25a999);
    if (_0x14eade) _0x25a999['forEach'](_0x37ee6b => _0x4178b3(_0x37ee6b));
  };
  const 人本长安倡 = (_0x1abcbe, _0xc6dafc, _0x5d988b = true, _0x1c9f4a = false) => {
    if (_0x1abcbe === _0xc6dafc || getScreenName() !== 'inventory_screen') return false;
    let _0x2ceffe = getInventory(self_id, _0x1abcbe);
    let _0x1682c8 = getInventory(self_id, _0xc6dafc);
    if (_0x5d988b && _0xc6dafc < 0x9 && _0x1682c8['namespace'] != 'minecraft:air') {
      for (let _0x30ab0f = 0x23; _0x30ab0f > 0x8; _0x30ab0f--) {
        const _0x282138 = getInventory(self_id, _0x30ab0f);
        if (_0x282138['namespace'] === 'minecraft:air') {
          moveInventoryItem(_0xc6dafc, _0x30ab0f);
          break;
        }
      }
    }
    if (_0x1c9f4a && _0x2ceffe['namespace'] === 'minecraft:air' && _0x1682c8['namespace'] !== 'minecraft:air') moveInventoryItem(_0xc6dafc, _0x1abcbe);
    if (_0x2ceffe['namespace'] !== 'minecraft:air' && _0x1682c8['namespace'] === 'minecraft:air') moveInventoryItem(_0x1abcbe, _0xc6dafc);
  };
  const 女尝学琵琶 = (_0x48f418, _0x233a0c) => {
    let _0x59db05 = _0x233a0c - 0xb4;
    if (_0x48f418 > 0x5a) _0x48f418 -= 0x5a;
    if (_0x48f418 < -0x5a) _0x48f418 += 0x5a;
    if (_0x59db05 > 0xb4) _0x59db05 = _0x59db05 - 0x168;
    if (_0x59db05 < -0xb4) _0x59db05 = 0x168 + _0x59db05;
    if (getPlayerViewPerspective() === 0x0 || _0x59db05 > 0xb4 || _0x59db05 < -0xb4 || _0x48f418 > 0x5a || _0x48f418 < -0x5a) return false;
    setEntityBodyRot(self_id, _0x59db05);
    setEntityRot(self_id, _0x48f418, _0x59db05);
  };
  const 于穆曹二善 = _0x470925 => {
    const _0x297236 = getEntityAttribute(_0x470925, 'minecraft:health');
    const _0x180909 = getPos(_0x470925);
    if (typeof _0x180909 != 'object' || !_0x180909 || !_0x180909['x'] || !_0x180909['y'] || !_0x180909['z']) return false;
    if (!findEntity(_0x470925) && (_0x297236['max'] === undefined || _0x297236['min'] === undefined || _0x297236['current'] === undefined)) return false;
    if (_0x297236['current'] > 0x0) return true;
  };
  const 才年长色衰 = (_0x57e3f5, _0x4522a3) => {
    if (typeof globalThis[_0x57e3f5] === 'undefined' || globalThis[_0x57e3f5] === _0x4522a3) return;
    globalThis[_0x57e3f5] = _0x4522a3;
    nx_cfg[_0x57e3f5] = _0x4522a3;
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x4522a3 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
    if (FuncSwitchTip && (!FuncMessage || !_0x57e3f5['includes']('_'))) {
      if (modes['tip_mode'] === 0x0) {
        if (_0x4522a3) 琶声主人忘(0x0, _0x57e3f5, '§oEnable ◆', '§a');else 琶声主人忘(0x0, _0x57e3f5, '§oDisable ◇', '§c');
      }
      if (modes['tip_mode'] === 0x1) {
        addCustomArrayList(_0x57e3f5, _0x57e3f5 + (_0x4522a3 ? ' - Enable' : ' - Disable'), _0x57e3f5 + (_0x4522a3 ? ' - Enable' : ' - Disable'), true);
        setTimeout(() => addCustomArrayList(_0x57e3f5, _0x57e3f5 + (_0x4522a3 ? ' - Enable' : ' - Disable'), _0x57e3f5 + (_0x4522a3 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
      }
    }
    if (typeof nx_arraylist[_0x57e3f5] !== 'undefined') addCustomArrayList(_0x57e3f5, nx_arraylist[_0x57e3f5]['CN'], nx_arraylist[_0x57e3f5]['EN'], _0x4522a3);else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x57e3f5['includes']('_')) addCustomArrayList(_0x57e3f5, _0x57e3f5, _0x57e3f5, _0x4522a3);
    if (typeof nx_binds[_0x57e3f5] !== 'undefined') nx_binds[_0x57e3f5]['forEach'](_0x33c688 => 才年长色衰(_0x33c688, _0x4522a3));
    if (typeof nx_raBinds[_0x57e3f5] !== 'undefined' && !nx_raBinds[_0x57e3f5]['isNX']) callModule(nx_funcid[nx_raBinds[_0x57e3f5]['module']], JSON['stringify']({
      'value': _0x4522a3
    }));
  };
  const 委身为贾人 = (_0xb43fbe, _0x559b3e, _0x48795f, _0x38c586, _0x4897ac, _0xa3f866 = false, _0x1b1f9c = {}) => {
    for (let _0x1e9ab0 = 0x0; _0x1e9ab0 < _0x4897ac; _0x1e9ab0++) addParticle(Number(_0xb43fbe), _0x559b3e, _0x48795f, _0x38c586, _0xa3f866 ? _0x1b1f9c['x'] : _0x559b3e, _0xa3f866 ? _0x1b1f9c['y'] : _0x48795f, _0xa3f866 ? _0x1b1f9c['z'] : _0x38c586, 0x1, _0xa3f866);
  };
  const 妇遂命酒使 = () => {
    const _0x535dad = getEntityCarriedItem(self_id);
    const _0x101a82 = getPos(self_id);
    if (!_0x535dad['includes']('count:0')) buildBlock(self_id, _0x101a82['x'], _0x101a82['y'], _0x101a82['z'], 0x6);
  };
  const 快弹数曲曲 = _0x4d6092 => {
    const _0x52e0df = 是夕始觉有(self_id, _0x4d6092);
    const _0x400ba6 = ['helmet', 'chestplate', 'leggings', 'boots'];
    if (_0x4d6092 > 0x8) 人本长安倡(_0x4d6092, 0x8, true, false);
    if (_0x400ba6['includes'](_0x52e0df) && selectPlayerInventorySlot(self_id, _0x4d6092) && getPlayerSelectItemSlot(self_id) === _0x4d6092) 妇遂命酒使();
  };
  const 罢悯然自叙 = (_0x4e5315, _0x1c7c92, _0x138838, _0x1696dd) => {
    let _0x350759 = _0x1c7c92 > 0x0;
    _0x1c7c92 = Math['abs'](_0x1c7c92);
    let _0x27df57 = _0x138838 * Math['cos'](_0x1c7c92 * Math['PI'] / 0xb4);
    let _0x45ba59 = _0x138838 * Math['sin'](_0x1c7c92 * Math['PI'] / 0xb4);
    let _0x360d73 = _0x45ba59 / _0x1696dd;
    let _0x498128 = _0x1696dd * (_0x360d73 * _0x360d73) * 0.5;
    let _0x1f75f0 = _0x27df57 * _0x360d73;
    let _0x3a8b86 = -_0x498128 / (_0x1f75f0 * _0x1f75f0);
    return {
      'data': _0x3a8b86 * Math['pow'](_0x4e5315 - (_0x350759 ? -_0x1f75f0 : _0x1f75f0), 0x2) + _0x498128,
      'bool': _0x350759
    };
  };
  const getLocal = _0x57107f => typeof _0x57107f === 'undefined' || _0x57107f === null ? getLocalPlayerUniqueID() : _0x57107f;
  const 少小时欢乐 = (_0x1c6195, _0x3ac502, _0x589b0b, _0x1e1d1d = false) => {
    const _0x5b15c8 = getBlock(_0x1c6195, _0x3ac502, _0x589b0b);
    if (_0x5b15c8['id'] !== 0x0) return;
    const _0x291761 = [[_0x1c6195, _0x3ac502 + 0x1, _0x589b0b], [_0x1c6195, _0x3ac502 - 0x1, _0x589b0b], [_0x1c6195, _0x3ac502, _0x589b0b + 0x1], [_0x1c6195, _0x3ac502, _0x589b0b - 0x1], [_0x1c6195 + 0x1, _0x3ac502, _0x589b0b], [_0x1c6195 - 0x1, _0x3ac502, _0x589b0b]];
    _0x291761['some']((_0x4f5ba7, _0x21ff04) => {
      const _0x39c93c = getBlock(_0x4f5ba7[0x0], _0x4f5ba7[0x1], _0x4f5ba7[0x2]);
      if (_0x39c93c['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x4f5ba7[0x0], _0x4f5ba7[0x1], _0x4f5ba7[0x2], _0x21ff04);
    });
  };
  const 悴转徙于江 = (_0x4728c0, _0x177364) => {
    const _0x17765f = getPos(self_id);
    sendSound(_0x4728c0, _0x17765f['x'], _0x17765f['y'], _0x17765f['z'], _0x177364);
  };
  const 湖间予出官 = (_0x14c7bc, _0x148bf0, _0x4453b1) => {
    const _0x405594 = getPos(self_id);
    motion_list['push']([_0x14c7bc - _0x405594['x'], _0x148bf0 - _0x405594['y'], _0x4453b1 - _0x405594['z']]);
    motion_list['push']([0x0, 0x0, 0x0]);
  };
  const 二年恬然自 = (_0x488a5a, _0x265375) => {
    let _0x4ef809 = _0x488a5a === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x488a5a);
    if (typeof _0x265375 !== 'undefined') _0x4ef809['namespace'] = _0x265375;
    return Array['from']({
      'length': 0x24
    }, (_0x567435, _0x3b0320) => getInventory(self_id, _0x3b0320))['filter'](_0x1a5500 => _0x1a5500['namespace'] === _0x4ef809['namespace'] && (typeof _0x265375 !== 'undefined' || _0x1a5500['aux'] === _0x4ef809['aux']))['reduce']((_0x933ec5, _0x9e923) => _0x933ec5 + _0x9e923['count'], 0x0);
  };
  const 安感斯人言 = (_0x18dd01, _0xd2ccd9, _0x4f812e = 'hotbar', _0x596471 = 0x0) => {
    const _0x38f0a2 = _0x4f812e == 'hotbar' ? 0x9 : 0x24;
    let _0x3e927e = Array['from']({
      'length': _0x38f0a2
    }, (_0x182fc3, _0x5f07a7) => getInventory(_0x18dd01, _0x5f07a7));
    let _0x4dec85 = _0x3e927e['some'](_0x1398cc => _0x1398cc['namespace']['includes'](_0xd2ccd9));
    let _0x37778b = _0x3e927e['reduce']((_0x17674c, _0x5c5e56) => _0x17674c + _0x5c5e56['count'], 0x0);
    return _0x4dec85 && _0x37778b > _0x596471;
  };
  const 是夕始觉有 = (_0x343108, _0x4a3a9f, _0x136949) => {
    let _0x2c7557 = _0x4a3a9f === -0x1 ? getCarried(_0x343108) : getInventory(_0x343108, _0x4a3a9f);
    if (!_0x2c7557['namespace']['includes']('_') && typeof _0x136949 === 'undefined') return 'other';
    let _0x167193 = typeof _0x136949 === 'undefined' ? _0x2c7557['namespace']['replace']('minecraft:', '') : _0x136949['replace']('minecraft:', '');
    const _0x5f248c = _0x167193['split']('_');
    return _0x5f248c[0x1];
  };
  const getEntityMaxDamage = _0x3eaa75 => Array['from']({
    'length': 0x24
  }, (_0x454923, _0x4095ec) => 之凡六百一(_0x3eaa75, _0x4095ec))['reduce']((_0x1d4c30, _0x4970f5) => Math['max'](_0x1d4c30, _0x4970f5), 0x0);
  const 迁谪意因为 = (_0x58c8e8, _0x56690a, _0x27fc5c = false) => {
    let _0x3715a1 = _0x27fc5c ? [0x0, 0x0, 0x0, 0x0] : 0x0;
    const _0x185266 = ['helmet', 'chestplate', 'leggings', 'boots'];
    for (let _0x102041 = 0x0; _0x102041 < 0x24; _0x102041++) {
      const _0x538108 = 是夕始觉有(_0x58c8e8, _0x102041);
      const _0x2a2bab = _0x185266['indexOf'](_0x538108);
      if (_0x2a2bab === -0x1) continue;
      const _0x2b3e51 = 长句歌以赠(_0x58c8e8, _0x102041);
      if (!_0x27fc5c && _0x538108 === _0x56690a && _0x3715a1 < _0x2b3e51) _0x3715a1 = _0x2b3e51;
      if (_0x27fc5c && _0x3715a1[_0x2a2bab] < _0x2b3e51) _0x3715a1[_0x2a2bab] = _0x2b3e51;
    }
    return _0x3715a1;
  };
  const 长句歌以赠 = (_0x2b0035, _0x1e61e2, _0x747407 = true, _0x3a43f2 = true) => {
    let _0x23ffb0 = _0x1e61e2 === -0x1 ? getCarried(_0x2b0035) : getInventory(_0x2b0035, _0x1e61e2);
    if (_0x1e61e2 < -0x1) _0x23ffb0 = 琵琶者听其(getPlayerArmorItem(_0x2b0035, Math['abs'](_0x1e61e2) - 0x2));
    if (_0x23ffb0['count'] === 0x0 || _0x23ffb0['damage'] === 0x0 || _0x23ffb0['attackDamage'] > 0x0) return 0x0;
    if (!_0x3a43f2) return _0x23ffb0['damage'];
    let _0x494183 = 0x0;
    let _0x4654a3 = _0x23ffb0['enchants']['findIndex'](_0x1bb9bb => _0x1bb9bb['id'] === 0x0);
    if (_0x4654a3 > -0x1) _0x494183 = _0x23ffb0['enchants'][_0x4654a3]['lvl'];
    if (!_0x747407) return 0x1 + _0x494183 / 0x64;
    return _0x23ffb0['damage'] * (0x1 + _0x494183 / 0x64);
  };
  const 之凡六百一 = (_0x18931d, _0x5d79d7, _0x4a7e07 = true, _0x3e5537 = true) => {
    let _0x22ebf7 = _0x5d79d7 === -0x1 ? getCarried(_0x18931d) : getInventory(_0x18931d, _0x5d79d7);
    if (_0x22ebf7['count'] === 0x0 || _0x22ebf7['attackDamage'] === 0x0 || _0x22ebf7['attackDamage'] === 0x0) return 0x1;
    if (!_0x3e5537) return _0x22ebf7['attackDamage'];
    let _0x223740 = 0x0;
    let _0x57f5e6 = _0x22ebf7['enchants']['findIndex'](_0x59965b => _0x59965b['id'] === 0x9);
    if (_0x57f5e6 > -0x1) _0x223740 = _0x22ebf7['enchants'][_0x57f5e6]['lvl'] * 1.25;
    if (!_0x4a7e07) return _0x223740;
    return _0x22ebf7['attackDamage'] + _0x223740;
  };
  const b2s = _0x1c5831 => _0x1c5831 ? 'true' : 'false';
  const 十六言命曰 = (_0x1b72fe, _0x2c323a, _0x537a85) => {
    let _0x4563e9 = _0x1b72fe['split'](_0x2c323a)['length'] - 0x1;
    let _0x2632b6 = 0x0;
    let _0x295cd9 = [];
    for (let _0xeac21d = 0x0; _0xeac21d < _0x4563e9; _0xeac21d++) {
      let _0x568a75 = _0x1b72fe['indexOf'](_0x2c323a, _0x2632b6) + _0x2c323a['length'];
      let _0x1dbf8d = _0x1b72fe['indexOf'](_0x537a85, _0x568a75);
      if (_0x1dbf8d === -0x1 || _0x568a75 === -0x1) break;
      _0x2632b6 = _0x1dbf8d;
      _0x295cd9['push'](_0x1b72fe['substring'](_0x568a75, _0x1dbf8d));
    }
    return _0x4563e9 > 0x1 ? _0x295cd9 : _0x295cd9[0x0];
  };
  const 琵琶行浔阳 = (_0x3b7033, _0x5803cf) => {
    if (ECAttack) 闻舟中夜弹(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
    return attackEntity(_0x3b7033, _0x5803cf);
  };
  const 江头夜送客 = (_0x1fba59, _0x22f63e, _0x282012, _0x155524) => {
    if (typeof _0x282012 === 'undefined') _0x282012 = -0x1;
    if (typeof _0x155524 === 'undefined') _0x155524 = -0x1;
    let _0x57a169 = null;
    for (index = 0x0; index < 0x9; index++) {
      const _0x20a35c = getInventory(_0x1fba59, index);
      if (!_0x20a35c['namespace'] || !_0x20a35c['name']) continue;
      if (_0x20a35c['namespace']['includes'](_0x22f63e) && (_0x20a35c['aux'] === _0x282012 || _0x282012 === -0x1) && (_0x20a35c['name']['includes'](_0x155524) || _0x155524 === -0x1)) {
        _0x57a169 = index;
        break;
      }
    }
    return _0x57a169;
  };
  const 枫叶荻花秋 = _0x22e036 => {
    const _0x45bd9b = getEntityMotion(_0x22e036);
    const _0x1b60c7 = Math['sqrt'](_0x45bd9b['x'] * _0x45bd9b['x'] + _0x45bd9b['y'] * _0x45bd9b['y'] + _0x45bd9b['z'] * _0x45bd9b['z']);
    return _0x1b60c7 * 0x14;
  };
  const 瑟瑟主人下 = (_0x26c7ba, _0x56a95b) => {
    const _0x5d0487 = _0x56a95b - _0x26c7ba + 0x1;
    return Math['floor'](Math['random']() * _0x5d0487) + _0x26c7ba;
  };
  const 马客在船举 = (_0x1f16ab, _0x4faa7c, _0x44959f) => {
    return {
      'x': _0x4faa7c['x'] + _0x1f16ab['x'] * _0x44959f,
      'y': _0x4faa7c['y'] + _0x1f16ab['x'] * _0x44959f,
      'z': _0x4faa7c['z'] + _0x1f16ab['z'] * _0x44959f
    };
  };
  const 酒欲饮无管 = _0x305566 => {
    if (_0x305566 < 0x3c) return _0x305566 + 's';
    if (_0x305566 >= 0x3c) return Math['floor'](_0x305566 / 0x3c) + 'min ' + _0x305566 % 0x3c + 's';
  };
  const 弦醉不成欢 = (_0x37ae9d, _0x53d5d5, _0x21ae86, _0x347754 = 0x0, _0x4d5876 = 0x0) => {
    if (!_0x21ae86) return true;
    _0x37ae9d['y'] += _0x347754;
    _0x53d5d5['y'] += _0x4d5876;
    const _0x391d8e = 曲调先有情(_0x37ae9d, _0x53d5d5, 'yaw_pos');
    const _0x2a8279 = -曲调先有情(_0x37ae9d, _0x53d5d5, 'pitch_pos');
    const _0x2e1642 = getDistance(_0x37ae9d, _0x53d5d5);
    let _0x58a1a7 = true;
    for (let _0x5d3629 = 0x0; _0x5d3629 < _0x2e1642; _0x5d3629 += 0.5) {
      const _0x31fda3 = 茫茫江浸月(_0x5d3629, _0x53d5d5, {
        'yaw': _0x391d8e,
        'pitch': _0x2a8279
      });
      const _0x2e0224 = getBlock(_0x31fda3['x'], _0x31fda3['y'], _0x31fda3['z']);
      if (_0x2e0224['namespace'] != 'minecraft:air') {
        _0x58a1a7 = false;
        break;
      }
    }
    return _0x58a1a7;
  };
  const 惨将别别时 = (_0x1f25b2, _0x1f1679) => {
    let _0x5327d1 = getWorldPlayerList()['sort']((_0x1a1a3d, _0x5e3177) => _0x1a1a3d['name']['localeCompare'](_0x5e3177['name']));
    let _0x1cab31 = _0x5327d1['length'] > 0x0 ? _0x5327d1['map'](_0x4bcf87 => ({
      'text': '§e' + _0x4bcf87['name'] + '\n§b距离: ' + 归客不发寻(self_id, _0x4bcf87['id'])['toFixed'](0x2)
    })) : [{
      'text': '没有玩家'
    }];
    let _0x24a4b2 = {
      'type': 'form',
      'title': '§5选择',
      'content': '§5选择一个目标',
      'buttons': _0x1cab31
    };
    const _0x132e4a = JSON['stringify'](_0x24a4b2);
    addForm(_0x132e4a, function (_0x25eaa7) {
      if (_0x5327d1['length'] > 0x0 && _0x25eaa7 >= 0x0) {
        const _0x4fa684 = _0x1f1679 === 0x0 ? _0x5327d1[_0x25eaa7]['name'] : _0x5327d1[_0x25eaa7]['id'];
        if (typeof globalThis[_0x1f25b2] === 'object') globalThis[_0x1f25b2]['push'](_0x4fa684);
        if (typeof globalThis[_0x1f25b2] === 'string') globalThis[_0x1f25b2] = _0x4fa684;
        琶声主人忘(0x0, 'addTarget', _0x4fa684, '§r');
      }
    });
  };
  const 茫茫江浸月 = (_0x54875d, _0x46dee4, _0x2a3104) => {
    if (_0x54875d === 0x0) return _0x46dee4;
    let _0x316111 = _0x54875d < 0x0 ? true : false;
    let {
      yaw,
      pitch
    } = _0x2a3104;
    if (yaw > 0xb4) yaw = yaw - 0x168;
    if (yaw < -0xb4) yaw = 0x168 + yaw;
    _0x54875d = Math['abs'](_0x54875d);
    const _0xa4d01b = yaw * Math['PI'] / 0xb4;
    const _0x3a086d = pitch * Math['PI'] / 0xb4;
    let _0x3be0bf = pitch != 0x0 ? Math['sin'](_0x3a086d) * _0x54875d : 0x0;
    let _0x2df7b3 = pitch != 0x0 ? _0x3be0bf / Math['tan'](_0x3a086d) : _0x54875d;
    let _0x58c45b = _0x2df7b3 < 0x0;
    _0x2df7b3 = Math['abs'](_0x2df7b3);
    const _0xdb7e39 = Math['cos'](_0xa4d01b) * _0x2df7b3;
    const _0x40e140 = Math['sin'](_0xa4d01b) * _0x2df7b3;
    let _0x204ecf = -Math['sin'](_0xa4d01b) * _0x2df7b3;
    let _0x3a7d26 = Math['cos'](_0xa4d01b) * _0x2df7b3;
    if (_0x316111 || _0x58c45b) {
      _0x204ecf = -_0x204ecf;
      if (!_0x58c45b) _0x3be0bf = -_0x3be0bf;
      _0x3a7d26 = -_0x3a7d26;
    }
    return {
      'x': _0x46dee4['x'] + _0x204ecf,
      'y': _0x46dee4['y'] - _0x3be0bf,
      'z': _0x46dee4['z'] + _0x3a7d26
    };
  };
  const getPlayerItemCount = _0x1f2e54 => Array['from']({
    'length': 0x24
  }, (_0x2fe1a3, _0x12f3ab) => getInventory(_0x1f2e54, _0x12f3ab))['filter'](_0x1f37b6 => _0x1f37b6['count'] !== 0x0)['reduce']((_0x107e8b, _0xbcea3b) => _0x107e8b + _0xbcea3b['count'], 0x0);
  const isSimilar = (_0x1ab062, _0x18e16a, _0x2a67fb) => Math['abs'](_0x1ab062 - _0x18e16a) < _0x2a67fb;
  const 忽闻水上琵 = _0x16884a => {
    let _0x3ab8f5 = [];
    if (at_entity) _0x3ab8f5['push'](...getEntityList());
    if (at_player) _0x3ab8f5['push'](...getPlayerList());
    let _0x3f68a2 = Math['min'](at_maxCount, _0x3ab8f5['length']);
    let _0x5a10e9 = [];
    for (const _0x10f919 of _0x3ab8f5) {
      if (!于穆曹二善(_0x10f919)) continue;
      const _0xe1c2b7 = getEntityNamespace(_0x10f919);
      if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x20ddab => _0xe1c2b7['includes'](_0x20ddab)) != at_back) continue;
      const _0x331953 = getPos(_0x10f919);
      const _0x238a57 = getDistance(_0x331953, getPos(_0x16884a));
      if ((_0x238a57 > at_maxDist || _0x238a57 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
      const _0x5be117 = getEntityAttribute(_0x10f919, 'minecraft:health');
      if (at_heal && (!_0x5be117 || _0x5be117['min'] > _0x5be117['max'] || _0x5be117['max'] > 0x186a0 || _0x5be117['current'] <= 0x0 || _0x5be117['max'] === 0x0) != at_back) continue;
      if (_0xe1c2b7 === 'minecraft:player') {
        const _0x433554 = getEntityRot(_0x10f919);
        const _0x4883f7 = at_BWM ? getEntityAttribute(_0x10f919, 'minecraft:movement') : {
          'current': 0x0
        };
        const _0x256ab3 = getEntityName(_0x10f919);
        if (at_BWM && _0x4883f7['current'] >= 0.5 && !_0x256ab3['includes']('[') && !_0x256ab3['includes']('【')) {
          if (DeleteDummy) removeEntity(_0x10f919);
          continue;
        }
        if (at_fov && (typeof _0x433554['yaw'] === 'undefined' || typeof _0x433554['pitch'] === 'undefined' || _0x433554['yaw']['toFixed'](0x2) === 0x0 || _0x433554['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
        const _0x737dbb = getEntityFlag(_0x10f919, 0x5);
        if (at_hide && _0x737dbb != at_back) continue;
        const _0x7c1ee5 = getEntityIsGround(_0x10f919);
        if (at_ground && _0x7c1ee5 === at_back) continue;
        if (at_wall && !弦醉不成欢(getPos(self_id), _0x331953, at_wall, true, 1.53, 0.9) != at_back) continue;
        if (Teams && teams_name && (_0x256ab3['startsWith'](ct_team) || ct_team['includes']('[') && _0x256ab3['includes'](ct_team))) continue;
        if (at_whileLists['includes'](_0x10f919) != at_back || !at_name && (_0x256ab3 === getEntityName(_0x16884a) || _0x256ab3 === '') != at_back || (_0x331953['y'] > at_maxY || _0x331953['y'] < at_minY) != at_back && !at_infY || _0x10f919 === self_id) continue;
        if (at_regexEnable && at_regex['some'](_0x31b560 => _0x256ab3['includes'](_0x31b560))) continue;
        const _0x494da1 = teams_armor ? teams_blur ? getPlayerArmorItem(_0x10f919, teams_slot) : 琵琶者听其(getPlayerArmorItem(_0x10f919, teams_slot)) : {};
        if (Teams && teams_armor && (teams_blur && _0x494da1 != '{}' && _0x494da1 === teams_self || !teams_blur && _0x494da1['color'] && _0x494da1['color'] === teams_self['color'])) continue;
        const _0x12023b = at_size ? getEntitySize(_0x10f919) : {
          'x': 0x0,
          'y': 0x0
        };
        if (at_size && !HitBox && ((_0x12023b['x'] > at_defaultSize['x'] + 0.1 || _0x12023b['x'] < at_defaultSize['x'] - 0.1) && (_0x12023b['y'] > 1.66 || _0x12023b['y'] < 1.64) && (_0x12023b['y'] < at_defaultSize['y'] || _0x12023b['y'] > at_defaultSize['y'] + 0.1) && (_0x12023b['y'] > 1.51 || _0x12023b['y'] < 1.49)) != at_back) continue;
      }
      const _0x4f1ae9 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x10f919) : 0x0;
      const _0x1ff753 = modes['at_mode'] === 0x3 ? 曲调先有情(self_id, _0x10f919, 'yaw_rot') : 0x0;
      const _0x3c36fc = modes['at_mode'] === 0x3 ? 曲调先有情(self_id, _0x10f919, 'pitch_rot') : 0x0;
      const _0x258f49 = modes['at_mode'] === 0x2 ? 之凡六百一(_0x10f919, -0x1) : 0x0;
      _0x5a10e9['push']({
        'distance': _0x238a57,
        'target': _0x10f919,
        'damage': _0x258f49,
        'heal': _0x5be117['current'],
        'crosshair': Math['sqrt'](_0x1ff753 * _0x1ff753 + _0x3c36fc * _0x3c36fc),
        'items': _0x4f1ae9,
        'random': 瑟瑟主人下(0x0, _0x3ab8f5['length'] - 0x1)
      });
    }
    const _0x14ed71 = [(_0x3fc212, _0x35e592) => _0x3fc212['distance'] - _0x35e592['distance'], (_0x3818c8, _0x47f8e8) => _0x3818c8['heal'] - _0x47f8e8['heal'], (_0x4e6380, _0x59ccfa) => _0x4e6380['damage'] - _0x59ccfa['damage'], (_0x2f3b72, _0x6d8ba7) => _0x2f3b72['crosshair'] - _0x6d8ba7['crosshair'], (_0x4adad3, _0x2d0e1d) => _0x2d0e1d['items'] - _0x4adad3['items'], (_0x5b2447, _0x33aa3c) => _0x5b2447['random'] - _0x33aa3c['random']];
    _0x5a10e9['sort'](_0x14ed71[modes['at_mode']]);
    if (at_reverse) _0x5a10e9['reverse']();
    if (at_infCount) return _0x5a10e9['map'](_0x353ea6 => _0x353ea6['target']);
    return _0x5a10e9['slice'](0x0, _0x3f68a2)['map'](_0x272a88 => _0x272a88['target']);
  };
  const 琶声主人忘 = (_0xc3b961 = 0x0, _0x1381a2 = 'Tip', _0xa3d96b, _0x4a958b = '§r') => {
    if (!FuncTip) return false;
    if (_0xc3b961 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x1381a2 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4a958b) + ' ' + _0xa3d96b);
    if (_0xc3b961 == 0x1) {
      if (modes['tipType_mode'] === 0x0) return '§r' + _0x1381a2 + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4a958b) + _0xa3d96b;
      if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4a958b) + _0xa3d96b;
    }
  };
  const getDistance = (_0x3b6dd3, _0x3fce9a) => Math['sqrt'](Math['pow'](_0x3b6dd3['x'] - _0x3fce9a['x'], 0x2) + Math['pow'](_0x3b6dd3['y'] - _0x3fce9a['y'], 0x2) + Math['pow'](_0x3b6dd3['z'] - _0x3fce9a['z'], 0x2));
  const 归客不发寻 = (_0x125768, _0x570100) => {
    if (!于穆曹二善(_0x125768) || !于穆曹二善(_0x570100)) return Infinity;
    const _0x49239a = getPos(_0x125768);
    const _0x2dc42a = getPos(_0x570100);
    return Math['sqrt'](Math['pow'](_0x49239a['x'] - _0x2dc42a['x'], 0x2) + Math['pow'](_0x49239a['y'] - _0x2dc42a['y'], 0x2) + Math['pow'](_0x49239a['z'] - _0x2dc42a['z'], 0x2));
  };
  const 声暗问弹者 = (_0x2970b4, _0x278ea0) => {
    if (!于穆曹二善(_0x2970b4) || !于穆曹二善(_0x278ea0)) return Infinity;
    const _0x3c8af3 = getPos(_0x2970b4);
    const _0x1406de = getPos(_0x278ea0);
    return Math['sqrt'](Math['pow'](_0x3c8af3['x'] - _0x1406de['x'], 0x2) + Math['pow'](_0x3c8af3['z'] - _0x1406de['z'], 0x2));
  };
  const 谁琵琶声停 = (_0x11da0d, _0x321385, _0x307e12) => {
    let _0x58c4ec = {
      'fn-set-player-pos': {
        'x': _0x11da0d,
        'y': _0x321385,
        'z': _0x307e12
      }
    };
    callModule(0x5, JSON['stringify'](_0x58c4ec));
  };
  const getHorizontalDistance = (_0x3e96e6, _0x46b742) => Math['sqrt'](Math['pow'](_0x3e96e6['x'] - _0x46b742['x'], 0x2) + Math['pow'](_0x3e96e6['z'] - _0x46b742['z'], 0x2));
  const setRealPos = (_0x4360bf, _0x23edfe, _0x5dd15d, _0x17022e) => setEntityPos(_0x4360bf, _0x23edfe, _0x5dd15d + setPos_offset, _0x17022e);
  const setPos = (_0x36dd3b, _0xc39cb5, _0x31efe8) => setRealPos(self_id, _0x36dd3b, _0xc39cb5, _0x31efe8);
  const setMotion = (_0x1f6cbf, _0x251bfb, _0x2ccb6f) => setEntityMotion(self_id, _0x1f6cbf, _0x251bfb, _0x2ccb6f);
  const 欲语迟移船 = _0x7789e5 => {
    if (_0x7789e5 === '') return [];
    return _0x7789e5['split'](',');
  };
  const 相近邀相见 = _0xfee436 => {
    if (typeof _0xfee436 != 'object' || _0xfee436['length'] === 0x0) return '';
    return _0xfee436['join'](',');
  };
  const 添酒回灯重 = (_0x474a19, _0x4ea736) => {
    let _0x4b9a9c = typeof _0x4ea736 === 'object' ? 相近邀相见(_0x4ea736) : _0x4ea736;
    let _0x2b981c = typeof _0x4ea736 === 'object' ? 0x0 : 0x1;
    addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x474a19 + '","placeholder":"","default":"' + _0x4b9a9c + '"}]}', function (_0x35296e) {
      if (_0x2b981c === 0x1) globalThis[_0x474a19] = _0x35296e;
      if (_0x2b981c === 0x0) globalThis[_0x474a19] = 欲语迟移船(_0x35296e);
      琶声主人忘(0x0, 'setValue', _0x474a19 + ' §7>>>§r ' + _0x35296e, '§r');
      nx_cfg[_0x474a19] = globalThis[_0x474a19];
    });
  };
  const 开宴千呼万 = _0x4b5b74 => {
    if (typeof _0x4b5b74 != 'string' || _0x4b5b74 === '') return 'None';
    let _0x1cbafa = _0x4b5b74['match'](/\[(.*?)\]/g);
    if (_0x1cbafa === null) return 'None';
    return _0x1cbafa[0x0];
  };
  const 唤始出来犹 = _0x34f0a8 => {
    if (!File['exist'](_0x34f0a8)) return '{}';
    const _0x3edf4b = File['read'](_0x34f0a8);
    return _0x3edf4b ? _0x3edf4b : '{}';
  };
  const 抱琵琶半遮 = _0x8b433a => {
    const _0x818673 = getPos(_0x8b433a);
    let _0x1cee0b = _0x8b433a === self_id ? Math['floor'](_0x818673['y']) - 0x1 : Math['floor'](_0x818673['y']);
    return {
      'x': Math['floor'](_0x818673['x']),
      'y': _0x1cee0b,
      'z': Math['floor'](_0x818673['z'])
    };
  };
  const 面转轴拨弦 = (_0x20ef68, _0x5c5d94) => {
    if (_0x20ef68['length'] === _0x5c5d94['length']) {
      return [];
    }
    const _0x445421 = _0x20ef68['length'] >= _0x5c5d94['length'] ? _0x20ef68 : _0x5c5d94;
    const _0x11368d = _0x20ef68['length'] < _0x5c5d94['length'] ? _0x20ef68 : _0x5c5d94;
    return _0x445421['filter'](_0x388ea2 => !_0x11368d['includes'](_0x388ea2));
  };
  const 三两声未成 = (_0x1f28b1, _0x887adf) => {
    const _0x576296 = aa_speed;
    const _0x28863d = aa_g;
    const _0x2eabf6 = Math['atan'](Math['floor'](-_0x887adf) / _0x1f28b1);
    const _0x407737 = Math['sqrt'](_0x1f28b1 * _0x1f28b1 + _0x887adf * _0x887adf);
    const _0x4aa5de = Math['atan'](_0x407737 / _0x576296 / 0x2 / _0x576296 * _0x28863d);
    return -((_0x4aa5de + _0x2eabf6) / Math['PI'] * 0xb4);
  };
  const getFlyTime = (_0x288e10, _0x4b17e4) => _0x288e10 / _0x4b17e4;
  const roundAngle = (_0xaef1b5, _0x41d618) => Math['round'](_0xaef1b5 / _0x41d618) * _0x41d618;
  const 曲调先有情 = (_0x39e5a8, _0x6694fe, _0x278425, _0x13b491 = false, _0x8e2137 = false, _0x34171f = 0x0, _0x76f590 = 0x0) => {
    let _0x2bc408 = typeof _0x6694fe != 'string' ? _0x6694fe : getPos(_0x6694fe);
    let _0x118bdd = typeof _0x39e5a8 != 'string' ? _0x39e5a8 : getPos(_0x39e5a8);
    let _0xd4e9a7 = getEntityRot(_0x39e5a8);
    if (!_0x2bc408 || !_0x118bdd) return Infinity;
    const _0xeb07d7 = getHorizontalDistance(_0x118bdd, _0x2bc408);
    if (_0x13b491) _0x2bc408 = 马客在船举(getEntityMotion(_0x6694fe), getPos(_0x6694fe), getFlyTime(_0xeb07d7, aa_speed) * 0x14);
    let _0x1b4f5c = _0x2bc408['x'] - _0x118bdd['x'];
    let _0x3e6354 = _0x118bdd['y'] - _0x2bc408['y'] + (aa_y - 0x14) / 0xa + 瑟瑟主人下(-_0x76f590, _0x76f590) / 0xa;
    let _0x37f0a5 = _0x2bc408['z'] - _0x118bdd['z'];
    let _0x165bc7 = Math['atan2'](_0x37f0a5, _0x1b4f5c) * 0xb4 / Math['PI'];
    const _0x5a3ac6 = 三两声未成(_0xeb07d7, _0x3e6354);
    let _0x507800 = _0x8e2137 ? _0x5a3ac6 : Math['atan2'](_0x3e6354, _0xeb07d7) * 0xb4 / Math['PI'];
    if (_0x278425 === 'yaw_pos') return _0x165bc7 > -0xb4 && _0x165bc7 <= 0x5a ? _0x165bc7 + 0x5a : _0x165bc7 - 0x10e;
    if (_0x278425 === 'yaw_rot') {
      _0x165bc7 = _0x165bc7 > -0xb4 && _0x165bc7 <= 0x5a ? _0x165bc7 + 0x5a : _0x165bc7 - 0x10e;
      let _0x3e7d1b = _0x165bc7 - _0xd4e9a7['yaw'] + 瑟瑟主人下(-_0x34171f / 0x2, _0x34171f / 0x2);
      return _0x3e7d1b > 0x0 ? -_0x3e7d1b + 0xb4 : -_0x3e7d1b - 0xb4;
    }
    if (_0x278425 === 'pitch_pos') return _0x507800;
    if (_0x278425 === 'pitch_rot') return _0x507800 - _0xd4e9a7['pitch'];
  };
  const 弦弦掩抑声 = (_0x2bace6, _0x1eee10, _0x33a3cd, _0x605b3b) => {
    let _0x29ae4f = Math['abs'](曲调先有情(_0x2bace6, _0x1eee10, 'yaw_rot'));
    let _0x1a1874 = Math['abs'](曲调先有情(_0x2bace6, _0x1eee10, 'pitch_rot'));
    if (_0x605b3b === 0x0) return Math['sqrt'](_0x29ae4f * _0x29ae4f + _0x1a1874 * _0x1a1874) < _0x33a3cd;
    if (_0x605b3b === 0x1) return Math['abs'](_0x29ae4f) < _0x33a3cd;
    if (_0x605b3b === 0x2) return Math['abs'](_0x1a1874) < _0x33a3cd;
  };
  const 声思似诉平 = _0x2cb4d4 => {
    let _0x2abf20 = '';
    for (let _0x589761 = 0x0; _0x589761 < _0x2cb4d4['length']; _0x589761 += 0x2) {
      _0x2abf20 += String['fromCharCode'](parseInt(_0x2cb4d4['substr'](_0x589761, 0x2), 0x10));
    }
    return _0x2abf20;
  };
  const 生不得志低 = (_0x39c7a3, _0x566e51, _0x349529 = 0.5, _0x141fd0 = false) => {
    let _0x36edd2 = [];
    let _0x4e654e = 曲调先有情(_0x39c7a3, _0x566e51, 'yaw_pos');
    let _0x262c56 = 曲调先有情(_0x39c7a3, _0x566e51, 'pitch_pos');
    if (getDistance(_0x39c7a3, _0x566e51) < _0x349529) return [_0x39c7a3];
    for (let _0x32b7b4 = 0x0; _0x32b7b4 <= getDistance(_0x39c7a3, _0x566e51); _0x32b7b4 += _0x349529) {
      let _0x24763e = 茫茫江浸月(-_0x32b7b4, _0x39c7a3, {
        'yaw': _0x4e654e,
        'pitch': _0x141fd0 ? -_0x262c56 : 0x0
      });
      if (getBlock(_0x24763e['x'], _0x24763e['y'], _0x24763e['z'])['namespace'] === 'minecraft:air') _0x36edd2['push']({
        'x': _0x24763e['x'],
        'y': _0x24763e['y'],
        'z': _0x24763e['z']
      });
    }
    return _0x36edd2;
  };
  const 眉信手续续 = (_0x30dd99, _0x41d109) => {
    if (!于穆曹二善(_0x30dd99)) return '';
    let _0x570957 = getEntityAttribute(_0x30dd99, 'minecraft:health');
    let _0x45d57e = _0x570957['current'];
    let _0x14b47e = _0x570957['max'];
    const _0x221698 = _0x45d57e / _0x14b47e;
    switch (_0x41d109) {
      case 0x0:
        return _0x221698['toFixed'](0x2) * 0x64 + '%%';
      case 0x1:
        let _0x2819b6 = '§c';
        for (let _0x221c9f = 0x0; _0x221c9f < Math['floor'](_0x221698 * 0x14); _0x221c9f++) _0x2819b6 += '❤';
        return _0x2819b6 + '§r';
      case 0x2:
        return '§c❤§rx' + Math['floor'](_0x45d57e);
      case 0x3:
        return Math['floor'](_0x45d57e) + '/' + Math['floor'](_0x14b47e);
      case 0x4:
        return getProgress(_0x45d57e, _0x14b47e, '▌', 0x14);
      default:
        return _0x45d57e;
    }
  };
  const 弹说尽心中 = _0x32ca18 => {
    let _0x161061 = '';
    let _0x13ad0f = '.,?!@":;+-*/=~|_\\^`&#%$·'['split']('');
    for (let _0x29ecbb = 0x0; _0x29ecbb < _0x32ca18; _0x29ecbb++) {
      let _0x3b4a7d = 瑟瑟主人下(0x0, _0x13ad0f['length'] - 0x1);
      _0x161061 += _0x13ad0f[_0x3b4a7d];
    }
    return _0x161061;
  };
  function getProgress(_0x536fa6, _0x315bdd, _0x2d2422 = '▌', _0x3303dd = 0x28) {
    let _0x433444 = Math['min'](_0x536fa6 / _0x315bdd, 0x1);
    const _0x3b141f = '4c6e2a3b195d591b3a2e6c4'['split']('');
    let _0x347662 = _0x3b141f[Math['min'](Math['floor'](_0x433444 * _0x3b141f['length']), _0x3b141f['length'] - 0x1)];
    let _0x319ad2 = _0x2d2422['repeat'](_0x3303dd)['split']('');
    let _0x3ffea3 = Math['min'](Math['floor'](_0x433444 * _0x319ad2['length']), _0x319ad2['length']);
    _0x319ad2[Math['min'](_0x3ffea3, _0x319ad2['length'] - 0x1)] = _0x2d2422 + '§r§o§l';
    return '§r[§o§l§' + _0x347662 + _0x319ad2['join']('') + '§r]';
  }
  const 无限事轻拢 = _0x49943d => {
    for (let _0x4e0199 = Math['ceil'](-cd_size / 0x2); _0x4e0199 < Math['floor'](cd_size / 0x2 + 0x1); _0x4e0199++) {
      for (let _0xe8b72f = Math['ceil'](-cd_size / 0x2); _0xe8b72f < Math['floor'](cd_size / 0x2 + 0x1); _0xe8b72f++) {
        for (let _0x20ae7e = Math['ceil'](-cd_size / 0x2); _0x20ae7e < Math['floor'](cd_size / 0x2 + 0x1); _0x20ae7e++) {
          const {
            x,
            y,
            z
          } = _0x49943d;
          const _0x373324 = getBlock(x + _0x4e0199, y + _0xe8b72f, z + _0x20ae7e);
          if (_0x373324['namespace'] === 'minecraft:air') continue;
          if (cd_exclude && _0x49943d['y'] + _0xe8b72f <= _0x49943d['y'] - 0x1) continue;
          if (cd_fake) setBlock(x + _0x4e0199, y + _0xe8b72f, z + _0x20ae7e, 'air', 0x0);
          if (!cd_fake) destroyBlock(self_id, _0x49943d['x'] + _0x4e0199, _0x49943d['y'] + _0xe8b72f, _0x49943d['z'] + _0x20ae7e, 0x0);
          if (cd_packet) 京都声问其(_0x49943d['x'] + _0x4e0199, _0x49943d['y'] + _0xe8b72f, _0x49943d['z'] + _0x20ae7e, true, true);
        }
      }
    }
  };
  const 慢捻抹复挑 = () => {
    if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
    if (ia_comeClick) {
      buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
      if (!ia_nopacket && modes['ia_mode'] === 0x0) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
    }
    if (ia_back) {
      for (let _0x55ec18 = 0x0; _0x55ec18 < ia_move; _0x55ec18++) {
        if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
      }
      setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
    }
    InfiniteAura_backMot = null;
    InfiniteAura_backPos = null;
  };
  const 初为霓裳后 = _0x224760 => {
    let _0x5056bb = '';
    let _0xd82da3 = _0x224760['split']('');
    for (let _0x4d5155 in _0xd82da3) {
      let _0x346639 = _0xd82da3[_0x4d5155]['toUpperCase']();
      if (_0x4d5155 != _0xd82da3['length'] - 0x1) {
        if (_0x4d5155 % 0x2 === 0x1) _0x5056bb += _0x346639 + ' ';else _0x5056bb += _0x346639;
      } else _0x5056bb += _0x346639;
    }
    if (rpc_remark) {
      let _0x30615a = _0x5056bb['split'](' ');
      let _0x2ea8b4 = '';
      for (let _0x59290f in _0x30615a) _0x2ea8b4 += _0x30615a[_0x59290f] + '(' + 声思似诉平(_0x30615a[_0x59290f]) + ') ';
      return _0x2ea8b4;
    } else return _0x5056bb;
  };
  const 六幺大弦嘈 = (_0x286ab8, _0x1150ea, _0x1a9d07 = false) => {
    setEntityTarget(_0x286ab8, _0x1150ea);
    if (_0x1a9d07) setEntityTarget(_0x1150ea, _0x286ab8);
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
  var nx_arraylist = JSON['parse'](唤始出来犹(nx_paths + '/FuncArrayList.json'));
  var nx_funcid = JSON['parse'](唤始出来犹(nx_paths + '/RunAwayFunc.json'));
  var nx_keys = [];
  var nx_cfgs = getResource() + '/NX_Config';
  var nx_ui = JSON['parse'](唤始出来犹(getResource() + '/ui/ui_definition.json'));
  var nx_blocks = 唤始出来犹(getResource() + '/NoveXare/blocks.json');
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
  let nx_defaultCfg = nx_defaultName !== '' ? 唤始出来犹(nx_cfgs + '/' + nx_defaultName + '.json') : '{}';
  var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
  var PacketCfg = JSON['parse'](唤始出来犹(nx_paths + '/PacketManager.json'));
  var PacketTranslate = JSON['parse'](唤始出来犹(getResource() + '/ui/conf_packet.json'))['packets'];
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
  } = JSON['parse'](唤始出来犹(cleaner_path));
  var ic_max = 0x1;
  var ic_delay = 0x1;
  modes['ic_mode'] = 0x0;
  var cleaner_slot = 0x23;
  var ic_bow = false;
  var ic_chest = false;
  var ic_move = true;
  var ic_inv = false;
  var {
    SmartInvCfg,
    move_armor_slot,
    drop_slot
  } = JSON['parse'](唤始出来犹(nx_paths + '/SmartInv.json'));
  var armor_slot = 0x0;
  var da_bow = false;
  var da_enchant = true;
  var da_texture = true;
  var da_weapon = true;
  var da_armor = true;
  var da_chest = false;
  var da_move = true;
  var da_delay = 0x1;
  var da_slot = 0x23;
  var da_inv = false;
  var da_max = 0x1;
  var motion_list = [];
  var ca_chest_pos = [];
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
  var rpc_config = JSON['parse'](唤始出来犹(getResource() + '/NoveXare/PyRpc_Config.json'));
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
  var as_config = JSON['parse'](唤始出来犹(nx_paths + '/Staff.json'));
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
  var aj_continue = false;
  var aj_modify = false;
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
  var aai_random = false;
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
  var fly_speed = 0x14;
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
  var as_minY = -0.42;
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
  var aa_times = 0x1;
  var aa_inv = false;
  var aa_chest = false;
  var sm_proportion = 0x5;
  var sm_size = 0x64;
  var sm_entity = false;
  var sm_target = true;
  var sm_player = false;
  var at_max_text = 0x5;
  var at_max_time = 0x14;
  var at_current = 0x0;
  var at_tick = 0x0;
  var rt_target = false;
  var rt_y = false;
  var rt_delay = 0xa;
  var rt_range = 0x5;
  var sp_speed = 0x5;
  var as_time = 0x14;
  var as_time_t = 0x15;
  var am_text = '是不是';
  var th_head = 'PLC·公安部全国人口信息库';
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
  var th_size = 0x1;
  var th_r = 0x64;
  var th_g = 0x64;
  var th_b = 0x64;
  var th_target = null;
  var th_tick = 0x0;
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
  var tip_size = 0x1;
  var tip_a = 0x0;
  var tip_r = 0x64;
  var tip_g = 0x64;
  var tip_b = 0x64;
  var tip_id = createText('', 'Center', tip_x_offset, tip_y_offset);
  var bn_max = 0x5;
  var bn_min = 0x5;
  var bn_rainbow = false;
  var bn_gradual = false;
  var bn_range = 0x32;
  var bn_exclude = false;
  var bn_intercept = false;
  var bn_format = '[名字]: [消息]';
  var bn_list = [];
  var aaim_rot = false;
  var aaim_dist = 0x4;
  var aaim_fov = 0x1e;
  var aaim_hurt = false;
  var aaim_speed = 0x5;
  var aaim_states = false;
  var fa_range = 0x3;
  var dr_space = 0x3;
  var dr_num = 0x3;
  var dr_move = true;
  var dr_rot = true;
  var CPvP = false;
  var ECAttack = false;
  var Swing = true;
  var BlockClicker = false;
  var ReplaceMsg = false;
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
  var ShowScreenHud = false;
  var AntiAim = false;
  var DirectRender = false;
  function onTickEvent() {
    try {
      if (PauseNX) return;
      let _0x58ec2b = [];
      self_id = getLocal(otherId);
      self_pos = getPos(self_id);
      prev_pos = getEntityPosPrev(self_id);
      teams_self = 琵琶者听其(getPlayerArmorItem(self_id, teams_slot));
      let _0x1572d6 = getEntityAttribute(self_id, 'minecraft:health');
      let _0x432855 = getEntityMotion(self_id);
      self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
      if (FastStop && !self_moving) setMotion(0x0, _0x432855['y'], 0x0);
      let _0x217ffe = getCameraRotation();
      let _0xdede92 = {
        'yaw': _0x217ffe['yaw'] > 0x0 ? 0xb4 - _0x217ffe['yaw'] : -0xb4 - _0x217ffe['yaw'],
        'pitch': -_0x217ffe['pitch']
      };
      let _0x757932 = getDistance(self_pos, prev_pos) / 0.05;
      let _0x1d06ea = getHorizontalDistance(self_pos, prev_pos) / 0.05;
      let _0xb1767e = 枫叶荻花秋(self_id);
      let _0xddc940 = 抱琵琶半遮(self_id);
      let _0x47c7cb = getWorldPlayerList();
      let _0xa2db06 = getEntityIsGround(self_id);
      let _0x6ec387 = getScreenName();
      if (ticks % getSelf == 0x0) {
        if (getDelay) {
          gd_ping1 = Date['now']();
          curl_get('https://www.baidu.com', {}, (_0x1131d2, _0xb66e09) => globalThis['gd_ping2'] = Date['now']());
          gd_ping = Math['abs'](gd_ping2 - gd_ping1);
        }
      }
      self_item = getCarried(self_id);
      if (_0x1572d6['current'] - prev_heal > 0x8) {
        if (DeathInfo) 琶声主人忘(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
        if (LocalRespawn) setTimeout(() => {
          departCamera();
          setTimeout(() => setPos(death_pos['x'] + 瑟瑟主人下(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 瑟瑟主人下(-lr_random + 0x1, lr_random - 0x1)), 0x64);
          setTimeout(() => resetCamera(), 0xc8);
        }, 0x32 * lr_delay);
        if (DeadCross) dc_pos['push'](death_pos);
      } else if (_0x1572d6['current'] < prev_heal) death_pos = self_pos;
      if (ShowScreenHud) 琶声主人忘(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
      if (DeadCross) dc_pos['forEach'](_0xaf2a8f => {
        sendShadow(_0xaf2a8f['x'], _0xaf2a8f['y'], _0xaf2a8f['z']);
        sendShadow(_0xaf2a8f['x'], _0xaf2a8f['y'] + 0x1, _0xaf2a8f['z']);
        sendShadow(_0xaf2a8f['x'], _0xaf2a8f['y'] + 0x2, _0xaf2a8f['z']);
        sendShadow(_0xaf2a8f['x'] + 0x1, _0xaf2a8f['y'] + 0x2, _0xaf2a8f['z']);
        sendShadow(_0xaf2a8f['x'] - 0x1, _0xaf2a8f['y'] + 0x2, _0xaf2a8f['z']);
        sendShadow(_0xaf2a8f['x'], _0xaf2a8f['y'] + 0x3, _0xaf2a8f['z']);
      });
      if (AdminShow) {
        let _0x586d18 = _0x47c7cb['filter'](_0x8e1144 => _0x8e1144['permissionLevel'] != -0x1 || _0x8e1144['commandPermissionLevel'] != -0x1);
        if (_0x586d18['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Admin', '服务器管理员: ' + 相近邀相见(_0x586d18['map'](_0x4856ff => _0x4856ff['name'])), '§r'));
        let _0x393f10 = _0x586d18['filter'](_0x1874d9 => 归客不发寻(_0x1874d9['id'], self_id) < as_range);
        if (_0x393f10['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 相近邀相见(_0x393f10['map'](_0xedafd => _0xedafd['name'])), '§r'));
      }
      if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 忽闻水上琵(self_id);
      if (NoHider) {
        const _0x1307df = getPlayerList();
        _0x1307df['forEach'](_0x4d32f8 => {
          if (_0x4d32f8 != self_id) {
            removeEntityEffect(_0x4d32f8, 0xe);
            setEntityFlag(_0x4d32f8, 0x5, false);
            if (nh_exclude && at_lists['includes'](_0x4d32f8)) at_lists['splice'](at_lists['indexOf'](_0x4d32f8), 0x1);
          }
        });
      }
      if (BJDEscape && getBlock(_0xddc940['x'], _0xddc940['y'] - 0x1, _0xddc940['z'])['namespace'] === 'minecraft:glass' && _0xa2db06) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
      if (AutoSwing) swingArm();
      if (AutoCamera) {
        if (getPlayerViewPerspective() === 0x0) resetCamera();else departCamera();
      }
      if (Criticals && !cc_status && _0x432855['y'] < 0x0) {
        cc_status = true;
        callModule(0x2c, JSON['stringify']({
          'value': true,
          'no_move_check': true,
          'no_fall_check': true
        }));
        playerJump();
      }
      if (SpinAttack) setEntityFlag(self_id, 0x38, true);
      if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
        const _0x2adf81 = rt_target ? getPos(at_lists[0x0]) : self_pos;
        if (_0x2adf81) setPos(_0x2adf81['x'] + 瑟瑟主人下(-rt_range, rt_range), _0x2adf81['y'] + (rt_y ? 瑟瑟主人下(-rt_range, rt_range) : 0x0), _0x2adf81['z'] + 瑟瑟主人下(-rt_range, rt_range));
      }
      if (NoWall) setEntityFlag(self_id, 0x30, false);
      if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
        let _0x3d4cc0 = 瑟瑟主人下(ac_min, ac_max);
        let _0x4bb55e = Math['round'](0x3e8 / _0x3d4cc0);
        const _0x2729bf = at_lists['length'] > 0x0 ? 弦弦掩抑声(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
        for (let _0x375003 = 0x0; _0x375003 < ac_times; _0x375003++) {
          if (!_0x2729bf) break;
          if (ac_click) simulateClick();
          if (ac_use) 妇遂命酒使();
        }
        ac_t_2 = ac_t_1 + _0x4bb55e;
      }
      ac_t_1 = Date['now']();
      if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
        const _0x1c2270 = getEntityList()['forEach'](_0x1f7dba => {
          if (getEntityNamespace(_0x1f7dba) != 'minecraft:item' || !findEntity(_0x1f7dba) || 归客不发寻(_0x1f7dba, self_id) > fm_range && fm_range != -0x1) return;
          const _0x52313f = getPos(_0x1f7dba);
          silentMove(_0x52313f['x'], _0x52313f['y'], _0x52313f['z']);
        });
      } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
        'pos': fm_pos,
        'rot': _0xdede92,
        'inputMode': 0x2,
        'playMode': 0x0,
        'yHeadRot': _0xdede92['yaw']
      });
      if (CustomItem) {
        const _0xdfa2c5 = getEntityCarriedItem(self_id);
        if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0xdfa2c5);else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0xdfa2c5);else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0xdfa2c5);
      }
      if (ShadowBoomer && ticks % sb_tick == 0x0) {
        let _0x475449 = [];
        if (modes['sb_mode'] == 0x0) _0x475449 = getPlayerList();
        if (modes['sb_mode'] == 0x1) _0x475449 = at_lists;
        if (modes['sb_mode'] == 0x2) _0x475449 = ['lock_pos'];
        _0x475449['forEach'](_0x3e42a8 => {
          if (sb_exclude && _0x3e42a8 == self_id) return;
          let _0x5d7ca9 = null;
          if (_0x3e42a8 == 'lock_pos') _0x5d7ca9 = sb_pos;else _0x5d7ca9 = 抱琵琶半遮(_0x3e42a8);
          if (!_0x5d7ca9) return;
          let _0x3def11 = getEntityRot(_0x3e42a8);
          if (modes['sb_mode'] < 0x2) {
            _0x5d7ca9 = 茫茫江浸月(sb_offset, _0x5d7ca9, _0x3def11);
            _0x5d7ca9['y'] += sb_ud;
          }
          if (sb_custom) {
            const _0x5a8b15 = JSON['parse'](唤始出来犹(nx_paths + '/Shadow.json'));
            _0x5a8b15['forEach'](_0xa624bf => {
              let _0x4799a4 = Math['sqrt'](_0xa624bf['x'] * _0xa624bf['x'] + _0xa624bf['y'] * _0xa624bf['y'] + _0xa624bf['z'] * _0xa624bf['z']);
              let _0x4abf4c = 曲调先有情({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0xa624bf, 'yaw_pos');
              let _0x297833 = 曲调先有情({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0xa624bf, 'pitch_pos');
              let _0x402170 = 茫茫江浸月(_0x4799a4, {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, {
                'pitch': _0x297833,
                'yaw': _0x4abf4c + sb_rc_yaw
              });
              sendShadow(_0x5d7ca9['x'] + _0x402170['x'], _0x5d7ca9['y'] + _0x402170['y'], _0x5d7ca9['z'] + _0x402170['z']);
            });
          } else {
            for (let _0xc32cd0 = Math['ceil'](-sb_length / 0x2); _0xc32cd0 < Math['floor'](sb_length / 0x2 + 0x1); _0xc32cd0++) {
              for (let _0x48adb3 = Math['ceil'](-sb_length / 0x2); _0x48adb3 < Math['floor'](sb_length / 0x2 + 0x1); _0x48adb3++) {
                for (let _0x1b5d97 = Math['ceil'](-sb_length / 0x2); _0x1b5d97 < Math['floor'](sb_length / 0x2 + 0x1); _0x1b5d97++) {
                  sendShadow(_0x5d7ca9['x'] + _0xc32cd0, _0x5d7ca9['y'] + _0x48adb3 + 0x2, _0x5d7ca9['z'] + _0x1b5d97);
                }
              }
            }
          }
        });
      }
      if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;else sb_rc_yaw = -0xb4;
      if (SmallMap) {
        let _0x4c4eca = [['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['一', '一', '一', '一', '一', '十', '一', '一', '一', '一', '一'], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  ']];
        let _0x365fa7 = [];
        if (sm_player) _0x365fa7['push'](...getPlayerList());
        if (sm_entity) _0x365fa7['push'](...getEntityList());
        if (sm_target) _0x365fa7['push'](...at_lists);
        _0x365fa7['forEach'](_0x21a139 => {
          let _0x6ad960 = 曲调先有情(self_id, _0x21a139, 'yaw_rot');
          let _0x587999 = 归客不发寻(self_id, _0x21a139);
          let _0x3c0ac8 = Math['floor'](_0x587999 / sm_size * sm_proportion * -Math['sin'](_0x6ad960 * Math['PI'] / 0xb4) * 0xa);
          let _0x3914e3 = Math['floor'](_0x587999 / sm_size * sm_proportion * -Math['cos'](_0x6ad960 * Math['PI'] / 0xb4) * 0xa);
          if (_0x3c0ac8 > 0x5) _0x3c0ac8 = 0x5;
          if (_0x3914e3 > 0x5) _0x3914e3 = 0x5;
          if (_0x3c0ac8 < -0x5) _0x3c0ac8 = -0x5;
          if (_0x3914e3 < -0x5) _0x3914e3 = -0x5;
          _0x4c4eca[_0x3914e3 + 0x5][_0x3c0ac8 + 0x5] = ' §e◆§r ';
        });
        let _0x5ee007 = _0x4c4eca['map'](_0x3919d2 => _0x3919d2['join'](''))['join']('\n');
        _0x58ec2b['push'](琶声主人忘(0x1, 'Map', '\n' + _0x5ee007, '§r'));
      }
      if (CameraManager) {
        if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
        if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);else {
          const _0x54e270 = getPos(cm_id);
          const _0x474b1c = getEntitySize(cm_id);
          setCameraAnchor(_0x54e270['x'] - self_pos['x'], _0x54e270['y'] - self_pos['y'] + 0.85 * _0x474b1c['y'], -_0x54e270['z'] + self_pos['z']);
        }
        if (cm_attack != null) {
          const _0x49da20 = getPos(cm_attack);
          const _0x1d25b0 = getEntitySize(cm_attack);
          if (_0x49da20 && _0x1d25b0) setCameraAnchor(_0x49da20['x'] - self_pos['x'], _0x49da20['y'] - self_pos['y'] + 0.85 * _0x1d25b0['y'], -_0x49da20['z'] + self_pos['z']);
        } else if (cm_actioncamera) setCameraAnchor(-_0x432855['x'] * cm_moverange, -_0x432855['y'] * cm_moverange, _0x432855['z'] * cm_moverange);else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
        setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
        setCameraPitchLimit(-cm_pitch, cm_pitch);
        if (!cm_unlock) cm_pos = self_pos;
        if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
      }
      if (_0x1572d6['current'] < prev_heal) prev_heal = _0x1572d6['current'];
      if (NoDebuff) debuff['forEach'](_0x1b92cf => removeEntityEffect(self_id, _0x1b92cf));
      if (MoveJump && self_moving && _0xa2db06) playerJump();
      if (ChunkRender) {
        let _0x4a809b = {
          'x': Math['floor'](self_pos['x'] / 0x10),
          'z': Math['floor'](self_pos['z'] / 0x10)
        };
        let _0x411c45 = {
          'x': _0x4a809b['x'] * 0x10,
          'z': _0x4a809b['z'] * 0x10
        };
        let _0xc8773f = {
          'x': (_0x4a809b['x'] + 0x1) * 0x10,
          'z': (_0x4a809b['z'] + 0x1) * 0x10
        };
        for (let _0x51232f = 0x0; _0x51232f < 0x10; _0x51232f++) {
          委身为贾人(0x37, _0x411c45['x'] + _0x51232f, self_pos['y'], _0x411c45['z'], 0x1);
          委身为贾人(0x37, _0x411c45['x'], self_pos['y'], _0x411c45['z'] + _0x51232f, 0x1);
          委身为贾人(0x37, _0xc8773f['x'] - _0x51232f, self_pos['y'], _0xc8773f['z'], 0x1);
          委身为贾人(0x37, _0xc8773f['x'], self_pos['y'], _0xc8773f['z'] - _0x51232f, 0x1);
        }
        _0x58ec2b['push'](琶声主人忘(0x1, 'Chunk', '区块坐标: ' + _0x4a809b['x'] + '， ' + _0x4a809b['z'], '§r'));
      }
      if (AutoGG) {
        for (let _0x1d7aa5 of gg_list) {
          if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 江头夜送客(self_id, _0x1d7aa5, -0x1, '一局'), false, true);
          if (modes['gg_mode'] === 0x1) {
            selectPlayerInventorySlot(self_id, 江头夜送客(self_id, _0x1d7aa5, -0x1, '一局'));
            const _0x1e343b = getCarried(self_id);
            if (_0x1e343b['name']['includes']('一局')) 妇遂命酒使();
          }
        }
      }
      if (nx_goal != null) {
        const _0x9f7e4b = getHorizontalDistance(self_pos, nx_goal);
        const _0x375bc3 = getDistance(self_pos, nx_goal);
        if (_0x375bc3 >= 0x5) {
          let _0x28a5f9 = 曲调先有情(self_id, nx_goal, 'yaw_pos');
          let _0x5d751b = 茫茫江浸月(-nx_goalSpeed / 0xa, self_pos, {
            'yaw': _0x28a5f9,
            'pitch': 0x0
          });
          if (_0x9f7e4b >= 0x3) setMotion(_0x5d751b['x'] - self_pos['x'], _0x432855['y'], _0x5d751b['z'] - self_pos['z']);else setMotion(_0x432855['x'], (_0x5d751b['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x432855['z']);
        } else {
          nx_goal = null;
          琶声主人忘(0x0, 'Tip', '已到达设置目的地', '§r');
        }
      }
      if (RandomArrayList) {
        for (let _0x3640c1 = 0x0; _0x3640c1 < ral_num; _0x3640c1++) {
          const _0x19fb90 = 弹说尽心中(ral_length);
          addCustomArrayList('RandomArrayList' + _0x3640c1, _0x19fb90, _0x19fb90, true);
        }
      }
      if (ShowNowTime) {
        const _0x39d183 = new Date();
        const _0x5c3b00 = _0x39d183['getFullYear']();
        const _0x42f39c = ('0' + (_0x39d183['getMonth']() + 0x1))['slice'](-0x2);
        const _0x5ae2a1 = ('0' + _0x39d183['getDate']())['slice'](-0x2);
        const _0x45fe07 = ('0' + _0x39d183['getHours']())['slice'](-0x2);
        const _0x52dacc = ('0' + _0x39d183['getMinutes']())['slice'](-0x2);
        const _0x44c609 = ('0' + _0x39d183['getSeconds']())['slice'](-0x2);
        const _0x181227 = _0x5c3b00 + '-' + _0x42f39c + '-' + _0x5ae2a1 + ' ' + _0x45fe07 + ':' + _0x52dacc + ':' + _0x44c609;
        addCustomArrayList('ShowNowTime', '当前时间: ' + _0x181227, '当前时间: ' + _0x181227, true);
      }
      if (ChestAura) {
        let _0x5f51db = 抱琵琶半遮(self_id);
        let _0x100131 = ca_range;
        for (let _0x2337e0 = -_0x100131; _0x2337e0 < _0x100131; _0x2337e0++) {
          for (let _0x215686 = -_0x100131; _0x215686 < _0x100131; _0x215686++) {
            for (let _0x464534 = -_0x100131; _0x464534 < _0x100131; _0x464534++) {
              if (ca_check && _0x6ec387['includes']('chest_screen') && chestStates['packet'] && chestStates['click']) {
                chestStates['click'] = false;
                chestStates['packet'] = false;
              }
              const _0x96d8b9 = getBlock(_0x5f51db['x'] + _0x2337e0, _0x5f51db['y'] + _0x215686, _0x5f51db['z'] + _0x464534);
              if (_0x96d8b9['namespace'] != 'minecraft:chest') continue;
              const _0x218d71 = getBlock(_0x5f51db['x'] + _0x2337e0, _0x5f51db['y'] + _0x215686 + 0x1, _0x5f51db['z'] + _0x464534);
              const _0x174df7 = {
                'x': _0x5f51db['x'] + _0x2337e0,
                'y': _0x5f51db['y'] + _0x215686,
                'z': _0x5f51db['z'] + _0x464534
              };
              if (ca_chest_pos['includes'](JSON['stringify'](_0x174df7)) && ca_exclude || !弦醉不成欢(_0x5f51db, _0x174df7, ca_wall, 1.53, 0.5) || ca_block && _0x218d71['namespace'] != 'minecraft:air' || !弦弦掩抑声(self_id, _0x174df7, ca_fov, 0x0) || _0x6ec387['includes']('chest_screen')) break;
              buildBlock(self_id, _0x5f51db['x'] + _0x2337e0, _0x5f51db['y'] + _0x215686, _0x5f51db['z'] + _0x464534, 0x1);
              if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x174df7));
            }
          }
        }
      }
      if (AntiStaff) {
        _0x47c7cb['forEach'](_0x4a3a97 => {
          const {
            name,
            id
          } = _0x4a3a97;
          if (id === self_id || name === '') return;
          let _0x5d049b = null;
          if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x5d049b = id;
          if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x5d049b = id;
          if (modes['as_mode'] === 0x2) {
            as_config['forEach'](_0x310504 => {
              if (_0x310504['match_mode'] === '精准' && _0x310504['has_mode'] === '存在' && _0x310504['texts']['some'](_0x217a9e => name === _0x217a9e) != _0x310504['reverse_selection']) _0x5d049b = id;
              if (_0x310504['match_mode'] === '精准' && _0x310504['has_mode'] === '同时' && _0x310504['texts']['every'](_0x290a0e => name === _0x290a0e) != _0x310504['reverse_selection']) _0x5d049b = id;
              if (_0x310504['match_mode'] === '模糊' && _0x310504['has_mode'] === '存在' && _0x310504['texts']['some'](_0x1d8f6a => name['includes'](_0x1d8f6a)) != _0x310504['reverse_selection']) _0x5d049b = id;
              if (_0x310504['match_mode'] === '精准' && _0x310504['has_mode'] === '存在' && _0x310504['texts']['every'](_0x9c1aba => name['includes'](_0x9c1aba)) != _0x310504['reverse_selection']) _0x5d049b = id;
            });
          }
          if (modes['as_mode'] === 0x3) _0x5d049b = id;
          if (as_hide && !getEntityFlag(id, 0x5)) _0x5d049b = null;
          if (as_ground && getEntityIsGround(id)) _0x5d049b = null;
          if (_0x5d049b === null) return;
          if (modes['anti_mode'] === 0x0) 琶声主人忘(0x0, 'Tip', '可能存在协管: ' + name, '§r');else if (modes['anti_mode'] === 0x1) executeCommand('/hub');else if (modes['anti_mode'] === 0x2) executeCommand('/again');else if (modes['anti_mode'] === 0x3) _0x58ec2b['push'](琶声主人忘(0x1, 'Staff', '可能存在协管: ' + name, '§r'));else if (modes['anti_mode'] === 0x4) leaveWorld();
        });
      }
      if (InteractAura) at_lists['forEach'](_0x4c6672 => interactEntity(_0x4c6672));
      if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
        'current': 0x7fff
      });
      if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
        'current': 0x14
      });
      if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
      if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
      if (Tower && (_0xdede92['pitch'] < -0x50 || _0xdede92['pitch'] > 0x50) && self_item['isBlock']) {
        if (_0xa2db06 || tower_continuously) {
          playerJump();
          setTimeout(() => 少小时欢乐(_0xddc940['x'], self_pos['y'] - 0x2, _0xddc940['z']), tower_delay * 0xa);
        }
      }
      if (ShowVariable) {
        if (sv_player && last_world_player['length'] != _0x47c7cb['length']) {
          琶声主人忘(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x47c7cb['length'], '§r');
          last_world_player = _0x47c7cb;
        }
        if (sv_id && self_id != prev_id) 琶声主人忘(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
      }
      if (CheckAxe && ticks % ca_delay === 0x1) {
        let _0xcd603a = [];
        _0x47c7cb['forEach'](_0x1059b6 => {
          if (modes['ca_mode'] == 0x0 && 之凡六百一(_0x1059b6['id'], -0x1) > 0x14) _0xcd603a['push'](getEntityName(_0x1059b6['id']));
          if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x1059b6['id']) > 0x14) _0xcd603a['push'](getEntityName(_0x1059b6['id']));
        });
        if (_0xcd603a['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 相近邀相见(_0xcd603a), '§r'));
      }
      if (WorldPlayerInfo && last_world_player['length'] != _0x47c7cb['length']) {
        const _0x30a3f7 = _0x47c7cb['map'](_0x4d12b5 => _0x4d12b5['name']);
        let _0x23b333 = 面转轴拨弦(last_world_player, _0x30a3f7);
        let _0x10ed80 = last_world_player['length'] < _0x30a3f7['length'];
        if (_0x10ed80) 琶声主人忘(0x0, 'Tip', 相近邀相见(_0x23b333) + '进入了世界', '§r');else 琶声主人忘(0x0, 'Tip', 相近邀相见(_0x23b333) + '离开了世界', '§r');
        last_world_player = _0x30a3f7;
      }
      if (DropRes && _0x432855['y'] < -dr_mot) {
        for (index = 0x0; index < 0x24; index++) {
          const _0x1bdeff = getInventory(self_id, index);
          if (resList['includes'](_0x1bdeff['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
        }
      }
      if (AttackAim) {
        if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
          at_lists['forEach'](_0x7a008c => {
            if (弦弦掩抑声(self_id, _0x7a008c, aaa_fov, 0x0)) {
              if (aa_use) 妇遂命酒使();else 琵琶行浔阳(_0x7a008c, Swing);
            }
          });
          aim_t0 = aim_t1;
        }
        aim_t1 = Date['now']();
      }
      if (HotbarSelector) {
        let _0x571538 = getInventory(self_id, select_slot);
        if (hs_slot['length'] > 0x0) {
          if (hs_slot['includes'](select_slot + '')) {
            selectPlayerInventorySlot(self_id, select_slot);
            const _0x500827 = getCarried(self_id);
            if (hs_use && !_0x500827['namespace']['includes']('air')) 妇遂命酒使();
          }
        } else if (selectitems['includes'](_0x571538['name']) || selectitems['includes'](_0x571538['namespace']) || selectitems['length'] === 0x0) {
          selectPlayerInventorySlot(self_id, select_slot);
          const _0x31492d = getCarried(self_id);
          if (hs_use && !_0x31492d['namespace']['includes']('air')) 妇遂命酒使();
        }
      }
      if (AutoPot && ap_autobag && !getScreenName()['includes']('chest_screen')) openInventory();
      if (AutoPot && getScreenName()['includes']('chest_screen')) {
        const _0x41debd = 安感斯人言(self_id, 'splash_potion', 'hotbal', 0x3);
        if (!_0x41debd) {
          for (let _0xaa4cd8 = ap_slot === -0x1 ? 0x23 : 0x9; _0xaa4cd8 > -0x1; _0xaa4cd8--) {
            if (ap_slot > -0x1) {
              const _0x1dccc3 = getInventory(self_id, _0xaa4cd8);
              if (_0x1dccc3['namespace'] === 'minecraft:air') {
                人本长安倡(ap_slot, _0xaa4cd8, false, false);
                ap_slot = -0x1;
                break;
              }
            }
            const _0x218546 = getInventory(self_id, _0xaa4cd8);
            if (ap_slot === -0x1 && _0x218546['namespace'] === 'minecraft:splash_potion') ap_slot = _0xaa4cd8;
          }
        } else if (ap_autobag) deleteContainer();
      }
      if (AirJump && (!aj_continue || _0x432855['y'] < -0.42)) {
        let _0x236049 = getEntityMotion(id);
        let _0x3e709c = 马客在船举(_0x236049, self_pos, 枫叶荻花秋(self_id));
        let _0x3dbb03 = 曲调先有情(_0x3e709c, self_id, 'yaw_pos');
        let _0x5852d1 = 茫茫江浸月(aj_speed / 0xa, self_pos, {
          'yaw': _0x3dbb03,
          'pitch': 0x0
        });
        if (aj_modify) setMotion(_0x5852d1['x'] - self_pos['x'], aj_height / 0x64, _0x5852d1['z'] - self_pos['z']);else setMotion(_0x236049['x'], aj_height / 0x64, _0x236049['z']);
        return true;
      }
      if (SmartInv && (!da_inv || _0x6ec387 === 'inventory_screen') && (!da_chest || _0x6ec387['includes']('chest_screen')) && (!da_bow || _0xdede92['pitch'] > 0x50) && ticks % da_delay === 0x0) {
        for (let _0x972e68 = 0x0; _0x972e68 < da_max; _0x972e68++) {
          const _0x446018 = 是夕始觉有(self_id, da_slot);
          if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x446018)) {
            const _0x45967a = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
            if (_0x45967a > 0x0 && _0x45967a < 0x14) {
              if (_0x45967a >= max_damage) {
                max_damage = _0x45967a;
                if (da_move) 人本长安倡(da_slot, SmartInvCfg['sword'], true, false);
              } else {
                if (drop_slot > -0x1) {
                  人本长安倡(da_slot, drop_slot, true, false);
                  dropPlayerInventorySlot(self_id, drop_slot, false, true);
                } else dropPlayerInventorySlot(self_id, da_slot, false, true);
              }
            }
          }
          const _0x46c4fb = nx_armors['indexOf'](_0x446018);
          const _0x1b428e = 长句歌以赠(self_id, da_slot, da_texture, da_enchant);
          if (da_armor && _0x46c4fb !== -0x1 && _0x1b428e > 0x0) {
            if (_0x1b428e > max_armor[_0x46c4fb]) {
              max_armor[_0x46c4fb] = _0x1b428e;
              if (da_move) {
                if (move_armor_slot > -0x1) 人本长安倡(da_slot, move_armor_slot, true, false);else if (nx_armors[_0x46c4fb]) 人本长安倡(da_slot, SmartInvCfg[nx_armors[_0x46c4fb]], true, false);
              }
            } else {
              if (drop_slot > -0x1) {
                人本长安倡(da_slot, drop_slot, true, false);
                dropPlayerInventorySlot(self_id, drop_slot, false, true);
              } else dropPlayerInventorySlot(self_id, da_slot, false, true);
            }
          }
          if (da_slot < 0x23) da_slot++;else {
            da_slot = 0x0;
            max_damage = 0x0;
            max_armor = [0x0, 0x0, 0x0, 0x0];
          }
        }
      }
      if (AutoArmor && (!aa_inv || _0x6ec387 === 'inventory_screen') && (!aa_chest || _0x6ec387['includes']('chest_screen'))) {
        let _0x800a51 = 是夕始觉有(self_id, armor_slot);
        let _0x27e827 = 长句歌以赠(self_id, armor_slot);
        if (_0x800a51 != 'other' && _0x27e827 !== 0x0) {
          let _0x4c89df = [长句歌以赠(self_id, -0x2), 长句歌以赠(self_id, -0x3), 长句歌以赠(self_id, -0x4), 长句歌以赠(self_id, -0x5)];
          for (let _0x5137a8 = 0x0; _0x5137a8 < aa_times; _0x5137a8++) {
            if (_0x800a51 === 'helmet' && _0x27e827 > _0x4c89df[0x0]) 快弹数曲曲(armor_slot);
            if (_0x800a51 === 'chestplate' && _0x27e827 > _0x4c89df[0x1]) 快弹数曲曲(armor_slot);
            if (_0x800a51 === 'leggings' && _0x27e827 > _0x4c89df[0x2]) 快弹数曲曲(armor_slot);
            if (_0x800a51 === 'boots' && _0x27e827 > _0x4c89df[0x3]) 快弹数曲曲(armor_slot);
          }
        }
        if (ticks % aa_delay == 0x0) armor_slot++;
        if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
      }
      if (Remover) {
        const _0x5b6a42 = getEntityList();
        _0x5b6a42['forEach'](_0x12e78b => {
          let _0x1a9e13 = false;
          if (rmer_entity) _0x1a9e13 = !isPlayer(_0x12e78b);
          if (rmer_item) _0x1a9e13 = getEntityNamespace(_0x12e78b) == 'minecraft:item';
          if (_0x1a9e13) removeEntity(_0x12e78b);
        });
      }
      if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
        for (let _0x18f174 = 0x8; _0x18f174 >= 0x0; _0x18f174--) {
          let _0x1cbd1f = getInventory(self_id, _0x18f174);
          if (_0x1cbd1f['namespace'] === prev_item['namespace']) {
            selectPlayerInventorySlot(self_id, _0x18f174);
            break;
          }
        }
      }
      if (FreeCam && fc_pos != {}) {
        if (fc_draw) {
          for (let _0x717188 = 0x0; _0x717188 <= 0x12; _0x717188 += 0x2) 委身为贾人(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x717188 / 0xa, fc_pos['z'], 0x1);
          _0x58ec2b['push'](琶声主人忘(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
        }
        if (fc_dist) _0x58ec2b['push'](琶声主人忘(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
      }
      if (ThrowTracer) {
        const _0x5aaad1 = getEntityList();
        _0x5aaad1['forEach'](_0x108811 => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x108811)) && at_lists['length'] > 0x0) {
            const _0x3185b2 = getPos(at_lists[0x0]);
            let _0x333ebf = 曲调先有情(_0x3185b2, getPos(_0x108811), 'yaw_pos');
            let _0x110abb = -曲调先有情(_0x3185b2, getPos(_0x108811), 'pitch_pos');
            const _0x4217f9 = getPos(_0x108811);
            const _0xa7f0fd = 茫茫江浸月(tt_speed, _0x4217f9, {
              'yaw': _0x333ebf,
              'pitch': _0x110abb
            });
            setEntityMotion(_0x108811, _0xa7f0fd['x'] - _0x4217f9['x'], _0xa7f0fd['y'] - _0x4217f9['y'], _0xa7f0fd['z'] - _0x4217f9['z']);
          }
        });
        if (at_lists['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
      }
      if (ThrowFly) {
        const _0x5da006 = getEntityList();
        _0x5da006['forEach'](_0x1174fb => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x1174fb))) {
            const _0x2215ec = getPos(_0x1174fb);
            if (typeof arrow_rot[_0x1174fb] === 'undefined') arrow_rot[_0x1174fb] = _0xdede92;
            const _0x54183a = arrow_rot[_0x1174fb]['yaw'];
            const _0x3b87cc = arrow_rot[_0x1174fb]['pitch'];
            const _0xc88eb5 = 茫茫江浸月(0x1, _0x2215ec, {
              'yaw': _0x54183a,
              'pitch': _0x3b87cc
            });
            setEntityMotion(_0x1174fb, _0xc88eb5['x'] - _0x2215ec['x'], _0xc88eb5['y'] - _0x2215ec['y'], _0xc88eb5['z'] - _0x2215ec['z']);
          }
        });
      }
      if (ArrowView) {
        const _0x13bbcc = getEntityList();
        _0x13bbcc['forEach'](_0x19fae8 => {
          if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x19fae8)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x19fae8;
        });
        if (av_id != null) {
          if (!av_list['includes'](av_id)) av_list['push'](av_id);
          let _0xd98887 = getPos(av_id);
          setCameraAnchor(_0xd98887['x'] - self_pos['x'] + (av_x - 0xa), _0xd98887['y'] - self_pos['y'] + (av_y - 0xa), -_0xd98887['z'] + self_pos['z'] + (av_z - 0xa));
        } else setCameraAnchor(0x0, 0x0, 0x0);
        if (!findEntity(av_id)) av_id = null;
      }
      if (FPSReducer) {
        for (let _0x2d1e94 = 0x0; _0x2d1e94 < fpsr_rate * 0xa; _0x2d1e94++) {
          for (let _0xe73637 = 0x0; _0xe73637 < fpsr_rate * 0xa; _0xe73637++) getEntityName(_0x2d1e94 + _0xe73637);
        }
      }
      if (ArrowParticle) {
        const _0x36f99f = getEntityList();
        _0x36f99f['forEach'](_0x1c24e1 => {
          if (getEntityNamespace(_0x1c24e1) === 'minecraft:arrow') {
            const _0x3425f8 = getPos(_0x1c24e1);
            委身为贾人(arp_type, _0x3425f8['x'], _0x3425f8['y'], _0x3425f8['z'], 0x1);
          }
        });
      }
      if (FightBot && at_lists['length'] > 0x0) {
        let _0xd19e71 = getPos(at_lists[0x0]);
        let _0x596f82 = {};
        if (fb_chest) {
          const _0x36b226 = 抱琵琶半遮(self_id);
          for (let _0x426609 = -0x2; _0x426609 < 0x3; _0x426609++) {
            for (let _0x1cddbe = -0x2; _0x1cddbe < 0x3; _0x1cddbe++) {
              for (let _0x190d93 = -0x2; _0x190d93 < 0x3; _0x190d93++) {
                const _0x22cf70 = getBlock(_0x36b226['x'] + _0x426609, _0x36b226['y'] + _0x1cddbe, _0x36b226['z'] + _0x190d93);
                const _0x9be9b1 = 相近邀相见([_0x36b226['x'] + _0x426609, _0x36b226['y'] + _0x1cddbe, _0x36b226['z'] + _0x190d93]);
                if (_0x22cf70['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x9be9b1)) {
                  _0x596f82 = {
                    'x': _0x36b226['x'] + _0x426609,
                    'y': _0x36b226['y'] + _0x1cddbe,
                    'z': _0x36b226['z'] + _0x190d93
                  };
                  ca_chest_pos['push'](_0x9be9b1);
                  break;
                }
              }
            }
          }
        }
        let _0x1692e4 = (_0xa2db06 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
        let _0x33751e = 瑟瑟主人下(0x0, 0x64) < fb_moveRate;
        if (fb_randMove && _0x33751e) {
          _0xd19e71 = 茫茫江浸月(_0x1692e4, _0xd19e71, {
            'yaw': 瑟瑟主人下(0x0, 0x1) ? 0x5a : -0x5a,
            'pitch': 0x0
          });
        }
        let _0x3015b4 = 曲调先有情(self_id, _0xd19e71, 'yaw_pos');
        let _0x4e0245 = 茫茫江浸月(_0x1692e4, getPos(self_id), {
          'yaw': _0x3015b4,
          'pitch': 0x0
        });
        if (_0x1572d6['current'] < fb_heal) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'splash_potion', 0x16));else {
            setLocalPlayerTurn(-0x5a, 0x0);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 妇遂命酒使(), 0x4b);
          }
        }
        const _0x3d0d83 = 声暗问弹者(self_id, at_lists[0x0]);
        if (_0x3d0d83 > fb_seek) {
          if (_0xa2db06) setEntityMotion(self_id, _0x4e0245['x'] - self_pos['x'], (fb_jump || 瑟瑟主人下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0xa2db06 ? fb_y : _0x432855['y'], _0x4e0245['z'] - self_pos['z']);
          KillAura = false;
          KeepDistance = false;
          if (fb_sca) Scaffold = true;
          if (Scaffold && sca_keep) sca_current = 0x0;
          if (瑟瑟主人下(0x0, 0x64) < fb_fishRate && 弦弦掩抑声(self_id, at_lists[0x0], 0x14, 0x0) && _0x3d0d83 < fb_seek * 0x3) {
            selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'fishing_rod'));
            if (self_item['namespace']['includes']('fishing_rod')) 妇遂命酒使();
          }
        } else {
          if (瑟瑟主人下(0x0, 0x64) < fb_snowRate && 弦弦掩抑声(self_id, at_lists[0x0], 0x14, 0x0)) {
            selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'snowball'));
            if (self_item['namespace']['includes']('snowball')) 妇遂命酒使();
          }
          if (_0xa2db06) setEntityMotion(self_id, fb_randMove && _0x33751e ? _0x4e0245['x'] - self_pos['x'] : _0x432855['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x432855['y'], fb_randMove && _0x33751e ? _0x4e0245['z'] - self_pos['z'] : _0x432855['z']);
          if (fb_weapon) selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'sword'));
          if (fb_ka) KillAura = true;
          if (fb_kd) KeepDistance = true;
          if (fb_aa) AssistAim = true;
          Scaffold = false;
        }
        if (JSON['stringify'](_0x596f82) != '{}') {
          let _0x278c34 = 曲调先有情(self_id, _0x596f82, 'yaw_pos');
          let _0x481e0c = 茫茫江浸月(_0x1692e4, getPos(self_id), {
            'yaw': _0x278c34,
            'pitch': 0x0
          });
          if (_0xa2db06) setEntityMotion(self_id, _0x481e0c['x'] - self_pos['x'], (fb_jump || 瑟瑟主人下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0xa2db06 ? fb_y : _0x432855['y'], _0x481e0c['z'] - self_pos['z']);
        }
      }
      if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
        for (let _0x2f99d9 = 0x0; _0x2f99d9 < rpc_repeat_times; _0x2f99d9++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        rpc_t = 0x0;
      }
      if (AutoShifter && ticks % shift_tick == 0x0) {
        for (let _0x2e6f93 = 0x0; _0x2e6f93 < shift_num; _0x2e6f93++) setEntityFlag(self_id, 0x1, true);
      }
      if (AutoCrystal && at_lists['length'] > 0x0) {
        if (ac_auto) selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'end_crystal'));
        if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
          let _0x44b486 = 0x0;
          at_lists['forEach'](_0x45eeaa => {
            let _0x17facc = 抱琵琶半遮(_0x45eeaa);
            if (ac_excludeY && Math['abs'](_0x17facc['y'] - self_pos['y']) < 0x1) return;
            if (ac_tp) setPos(_0x17facc['x'], _0x17facc['y'] + 0x1, _0x17facc['z']);
            for (let _0x5108ec = -0x1; _0x5108ec < 0x2; _0x5108ec++) {
              for (let _0xd99941 = -0x2; _0xd99941 < 0x0; _0xd99941++) {
                for (let _0xdd3596 = -0x1; _0xdd3596 < 0x2; _0xdd3596++) {
                  let _0x31204d = getBlock(_0x17facc['x'] + _0x5108ec, _0x17facc['y'] + _0xdd3596, _0x17facc['z'] + _0xd99941);
                  if (_0x44b486 > ac_count) break;
                  if ((_0x31204d['namespace'] === 'minecraft:bedrock' || _0x31204d['namespace'] === 'minecraft:obsidian') && _0x44b486 < ac_count) {
                    buildBlock(self_id, _0x17facc['x'] + _0x5108ec, _0x17facc['y'] + _0xdd3596, _0x17facc['z'] + _0xd99941, 0x1);
                    _0x44b486++;
                  }
                }
              }
            }
          });
        } else _0x58ec2b['push'](琶声主人忘(0x1, 'Crystal', '请手持水晶', '§r'));
      }
      if (CrystalAura) {
        const _0x2f979b = getEntityList();
        _0x2f979b['forEach'](_0xaee1bd => {
          if (!于穆曹二善(_0xaee1bd)) return;
          const _0x2909ec = getPos(_0xaee1bd);
          if (getEntityTypeId(_0xaee1bd) !== 0x47 || 归客不发寻(_0xaee1bd, at_lists[0x0]) > ca_distTo) return;
          if (ca_block && !self_item['isBlock']) {
            for (let _0x530806 = 0x0; _0x530806 < 0x9; _0x530806++) {
              const _0x19be46 = getInventory(self_id, _0x530806);
              if (_0x19be46['isBlock']) {
                selectPlayerInventorySlot(self_id, _0x530806);
                break;
              }
            }
            buildBlock(self_id, (_0xddc940['x'] + _0x2909ec['x']) / 0x2, (_0xddc940['y'] + _0x2909ec['y']) / 0x2, (_0xddc940['z'] + _0x2909ec['z']) / 0x2, 0x0);
            琵琶行浔阳(_0xaee1bd, Swing);
          }
        });
      }
      if (AutoBomb && at_lists['length'] > 0x0) {
        if (ab_auto) selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'respawn_anchor'));
        if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
          at_lists['forEach'](_0x54836f => {
            let _0x307776 = 抱琵琶半遮(_0x54836f);
            let _0x399783 = getBlock(_0x307776['x'], _0x307776['y'] + 0x2, _0x307776['z']);
            if (_0x399783['namespace'] === 'minecraft:air') buildBlock(self_id, _0x307776['x'], _0x307776['y'] + 0x2, _0x307776['z'], 0x0);
            _0x399783 = getBlock(_0x307776['x'], _0x307776['y'] + 0x2, _0x307776['z']);
            if (_0x399783['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x307776['x'], _0x307776['y'] + 0x2, _0x307776['z'], 0x0);
          });
        } else _0x58ec2b['push'](琶声主人忘(0x1, 'Anchor', '请手持重生锚', '§r'));
      }
      if (CPvP && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0xb3022f => {
          const _0x54052d = 抱琵琶半遮(_0xb3022f);
          let _0x480dc9 = [[_0x54052d['x'], _0x54052d['y'] + 0x2, _0x54052d['z']], [_0x54052d['x'] + 0x1, _0x54052d['y'], _0x54052d['z']], [_0x54052d['x'] - 0x1, _0x54052d['y'], _0x54052d['z']], [_0x54052d['x'], _0x54052d['y'], _0x54052d['z'] + 0x1], [_0x54052d['x'], _0x54052d['y'], _0x54052d['z'] - 0x1], [_0x54052d['x'] + 0x1, _0x54052d['y'] + 0x1, _0x54052d['z']], [_0x54052d['x'] - 0x1, _0x54052d['y'] + 0x1, _0x54052d['z']], [_0x54052d['x'], _0x54052d['y'] + 0x1, _0x54052d['z'] + 0x1], [_0x54052d['x'], _0x54052d['y'] + 0x1, _0x54052d['z'] - 0x1]];
          for (pos of _0x480dc9) {
            let _0x235a05 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
            if (_0x235a05['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
            if (_0x235a05['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
          }
        });
      }
      if (KillAura && at_lists['length'] > 0x0) {
        let _0x4ae73e = [];
        let _0x463d77 = false;
        random_num = 瑟瑟主人下(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
        random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
        at_lists['forEach'](_0x1b7678 => {
          let _0x2f29d0 = getPos(_0x1b7678);
          if (!((归客不发寻(self_id, _0x1b7678) <= ka_range || ka_infDist) && 弦弦掩抑声(self_id, _0x1b7678, ka_fov, 0x0) && 弦醉不成欢(self_pos, _0x2f29d0, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x432855['y'] < -0.42))) return;
          _0x4ae73e['push'](_0x1b7678);
          KillAura_d_1[_0x1b7678] = Date['now']();
          if (typeof KillAura_d_2[_0x1b7678] !== 'undefined' && KillAura_d_1[_0x1b7678] - KillAura_d_2[_0x1b7678] < 0x0) return;
          _0x463d77 = true;
          for (k = 0x0; k < ka_times; k++) 琵琶行浔阳(_0x1b7678, Swing);
          KillAura_d_2[_0x1b7678] = KillAura_d_1[_0x1b7678] + random_delay;
          if (ka_third) setPlayerViewPerspective(_0x463d77 ? 0x1 : 0x0);
        });
        if (_0x4ae73e['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'KillAura', ShortList ? _0x4ae73e['length'] + '个目标' : 相近邀相见(_0x4ae73e['map'](_0x118cc8 => getEntityName(_0x118cc8))), '§r'));
        const _0x2267ed = _0x4ae73e['length'] * random_num * ka_times;
        if (ka_show) _0x58ec2b['push'](琶声主人忘(0x1, 'APS', _0x2267ed + '/s', '§r'));
      }
      if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
      if (SlowDown && _0x432855['y'] < -0.074 && !_0xa2db06) setMotion(_0x432855['x'], -sd_speed / 0xf, _0x432855['z']);
      if (SurroundParticle && (self_moving || !srp_move)) {
        srp_current = srp_current + srp_speed * 0x3;
        if (srp_current > 0xb4) srp_current = -0xb4;
        let _0x2ed140 = 茫茫江浸月(srp_len, self_pos, {
          'yaw': srp_current,
          'pitch': 0x0
        });
        委身为贾人(srp_type, _0x2ed140['x'], _0x2ed140['y'] - 1.8 + srp_y, _0x2ed140['z'], srp_size);
      }
      if (motion_list['length'] > 0x0) {
        const _0x4d9f10 = motion_list['shift']();
        setMotion(_0x4d9f10[0x0], _0x4d9f10[0x1], _0x4d9f10[0x2]);
      }
      if (Scaffold && self_item['isBlock']) {
        sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
        if (sca_count) _0x58ec2b['push'](琶声主人忘(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
        const _0x42de3e = 马客在船举(_0x432855, self_pos, 0xa);
        var _0x130bf6 = sca_move || self_moving ? 曲调先有情(_0x42de3e, self_id, 'yaw_pos') : _0xdede92['yaw'];
        var _0x20e5ad = sca_move || self_moving ? 曲调先有情(_0x42de3e, self_id, 'pitch_pos') : _0xdede92['pitch'];
        if (!sca_acc) _0x130bf6 = roundAngle(_0x130bf6, sca_prec);
        if (!sca_acc) _0x20e5ad = roundAngle(_0x20e5ad, sca_prec);
        if (sca_auto) {
          let _0x3fac37 = {};
          let _0x29f9aa = Infinity;
          for (let _0x49f5c7 = -0x3; _0x49f5c7 <= 0x3; _0x49f5c7++) {
            for (let _0x2b20c9 = -0x3; _0x2b20c9 <= -0x1; _0x2b20c9++) {
              for (let _0x374e9a = -0x3; _0x374e9a <= 0x3; _0x374e9a++) {
                let _0x51f23c = {
                  'x': _0x49f5c7 + _0xddc940['x'],
                  'y': Math['floor'](sca_current) - 0x1 + _0x2b20c9,
                  'z': _0x374e9a + _0xddc940['z']
                };
                const _0x5f4a3d = getBlock(_0x51f23c['x'], _0x51f23c['y'], _0x51f23c['z']);
                if (_0x5f4a3d['namespace'] == 'minecraft:air') continue;
                let _0x3d56c5 = Math['sqrt'](_0x49f5c7 * _0x49f5c7 - _0x2b20c9 * _0x2b20c9 + _0x374e9a * _0x374e9a);
                if (_0x3d56c5 < _0x29f9aa) {
                  _0x29f9aa = _0x3d56c5;
                  _0x3fac37 = _0x51f23c;
                }
              }
            }
          }
          if (JSON['stringify'](_0x3fac37) != '{}') {
            let _0x28beed = 生不得志低(_0x3fac37, _0xddc940, 0x1, true);
            _0x28beed['forEach'](_0x586bd3 => {
              if (sca_surface) 少小时欢乐(Math['floor'](_0x586bd3['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x586bd3['z']));else buildBlock(self_id, Math['floor'](_0x586bd3['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x586bd3['z']), 0x1);
            });
          }
        }
        for (let _0x2f7e83 = 0x0; _0x2f7e83 < sca_len; _0x2f7e83++) {
          const _0x9afa55 = 茫茫江浸月(_0x2f7e83, self_pos, {
            'yaw': _0x130bf6,
            'pitch': sca_y ? _0x20e5ad : 0x0
          });
          let _0x32a673 = {
            'x': Math['floor'](_0x9afa55['x']),
            'y': Math['floor'](sca_current) - 0x1,
            'z': Math['floor'](_0x9afa55['z'])
          };
          let _0x28c429 = getBlock(_0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z']);
          if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x28c429['namespace'])) continue;
          if (sca_fake) setBlock(_0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z'], self_item['namespace'], self_item['aux']);else if (sca_surface) 少小时欢乐(_0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z']);else buildBlock(self_id, _0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z'], 0x1);
          if (sca_up) {
            const _0x8bcd68 = getBlock(_0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z']);
            if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x8bcd68['namespace'])) buildBlock(self_id, _0x32a673['x'], Math['floor'](_0x32a673['y']), _0x32a673['z'], 0x0);
          }
          ;
        }
      }
      if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
        for (let _0x1b03b2 = 0x0; _0x1b03b2 < 0x9; _0x1b03b2++) {
          const _0xbecf8d = getInventory(self_id, _0x1b03b2);
          if (_0xbecf8d['isBlock']) {
            selectPlayerInventorySlot(self_id, _0x1b03b2);
            break;
          }
        }
      }
      if (AttackSelf) 琵琶行浔阳(self_id, Swing);
      if (TargetHud) {
        if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
        if (th_target && 于穆曹二善(th_target)) {
          let _0x1a8397 = [];
          const _0x5aa6a2 = isPlayer(th_target) ? getCarried(th_target) : {
            'name': '无',
            'count': 0x0
          };
          const _0x3374f6 = 归客不发寻(th_target, self_id)['toFixed'](0x2);
          const _0x483c82 = 抱琵琶半遮(th_target);
          _0x1a8397['push'](th_head);
          if (th_name) _0x1a8397['push']('名称:' + getEntityName(th_target));
          if (th_carry) _0x1a8397['push']('手持: ' + _0x5aa6a2['name'] + ' x' + _0x5aa6a2['count']);
          if (th_dist) _0x1a8397['push']('距离: ' + _0x3374f6 + 'm');
          if (th_pos) _0x1a8397['push']('坐标: [' + _0x483c82['x'] + ', ' + _0x483c82['y'] + ', ' + _0x483c82['z'] + ']');
          if (th_health) _0x1a8397['push']('血量: ' + 眉信手续续(th_target, modes['th_health_mode']));
          if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
            updateTextContent(th_id, _0x1a8397['join']('\n'));
            updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
            updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
            updateTextScale(th_id, th_size);
          } else th_target = null;
        } else updateTextContent(th_id, '');
      }
      if (AntiVoid) {
        if (modes['av_mode'] === 0x0) {
          if (!av_running && !_0xa2db06 && _0x432855['y'] > -av_minY) av_pos['push'](_0xddc940);
          if (!av_running && _0xa2db06) av_pos = [];
          if (!av_running && _0x432855['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x5ed517 = av_pos.pop();
              setPos(_0x5ed517['x'], _0x5ed517['y'], _0x5ed517['z']);
              if (av_derp) setLocalPlayerTurn(0x0, 0x78);
            } else av_running = false;
          }
        }
        if (_0x432855['y'] <= -av_minY && modes['av_mode'] === 0x1) {
          const _0x112795 = {
            'rot': _0xdede92,
            'yHeadRot': 0x0
          };
          const _0x14cf56 = {
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
            ..._0x112795
          };
          const _0x354049 = {
            'id': self_id,
            'pos': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            'mode': 0x1,
            'ground': true,
            ..._0x112795
          };
          sendPlayerAuthInput(_0x14cf56);
          sendMovePlayer(_0x354049);
        }
        if (modes['av_mode'] === 0x2) {
          if (!av_running && _0xa2db06 && _0x432855['y'] > -av_minY) av_pos[0x0] = self_pos;
          if (!av_running && _0x432855['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x5d1f86 = av_pos[0x0];
              setPos(_0x5d1f86['x'], _0x5d1f86['y'], _0x5d1f86['z']);
              av_pos = [];
            } else av_running = false;
          }
        }
      }
      if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0xa2db06)) {
        if (gm_tick <= gm_cycle) {
          gm_pos = getPos(self_id);
          gm_mot = getEntityMotion(self_id);
          for (let _0x489580 = 0x0; _0x489580 < gm_count; _0x489580++) {
            if (modes['gm_mode'] === 0x0) 湖间予出官(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
          }
          if (!gm_back) gm_tick = 0x0;
        }
        if (gm_back && gm_tick >= gm_cycle + gm_delay) {
          for (let _0x46141c = 0x0; _0x46141c < gm_count; _0x46141c++) {
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
                'rot': _0xdede92,
                'yHeadRot': 0x0
              });
            }
          }
          gm_tick = 0x0;
        }
      }
      if (KeepDistance && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) < kd_distance && (_0xa2db06 || !kd_only_ground)) {
        const _0x2b35eb = 曲调先有情(getPos(at_lists[0x0]), self_id, 'yaw_pos');
        const _0x3f5bee = 茫茫江浸月(-kd_speed / 0xa, self_pos, {
          'yaw': _0x2b35eb,
          'pitch': _0xdede92['pitch']
        });
        if (kd_anti) silentMove(_0x3f5bee['x'] * 0x2, _0x3f5bee['y'] * 0x2, _0x3f5bee['z'] * 0x2);else setMotion(_0x3f5bee['x'] - self_pos['x'], _0x432855['y'], _0x3f5bee['z'] - self_pos['z']);
      }
      if (dl_list['length'] > 0x0) {
        for (let _0x7f23d3 = 0x0; _0x7f23d3 < di_speed; _0x7f23d3++) {
          let _0x21e1ab = dl_list.pop();
          dropPlayerInventorySlot(self_id, _0x21e1ab, false, true);
        }
      }
      if (RandomDrop) dropPlayerInventorySlot(self_id, 瑟瑟主人下(0x0, 0x8));
      if (RandomSelect) selectPlayerInventorySlot(self_id, 瑟瑟主人下(0x0, 0x8));
      if (Trace && at_lists['length'] > 0x0 && 归客不发寻(self_id, at_lists[0x0]) > tra_range) {
        let _0x354ccc = 曲调先有情(self_id, at_lists[0x0], 'yaw_pos');
        let _0x56c5ba = 曲调先有情(self_id, at_lists[0x0], 'pitch_pos');
        let _0x50cbe8 = 茫茫江浸月(-tra_speed / 0x5, getPos(self_id), {
          'yaw': _0x354ccc,
          'pitch': -_0x56c5ba
        });
        setPos(_0x50cbe8['x'], _0x50cbe8['y'], _0x50cbe8['z']);
      }
      if (LineParticle && at_lists['length'] > 0x0) {
        let _0x28de26 = getPos(self_id);
        _0x28de26['y'] += lp_offset / 0xa;
        at_lists['forEach'](_0x39f54d => {
          let _0x11207c = getPos(_0x39f54d);
          _0x11207c['y'] += 0.765;
          let _0x5a6d65 = 曲调先有情(_0x28de26, _0x11207c, 'yaw_pos');
          let _0x4ab7ac = 曲调先有情(_0x28de26, _0x11207c, 'pitch_pos');
          for (let _0x13f362 = 0x0; _0x13f362 < 归客不发寻(_0x39f54d, self_id); _0x13f362 += (0xb - lp_size) / 0x5) {
            let _0x1bda7e = 茫茫江浸月(-_0x13f362, getPos(self_id), {
              'yaw': _0x5a6d65,
              'pitch': -_0x4ab7ac
            });
            委身为贾人(lp_type, _0x1bda7e['x'], _0x1bda7e['y'] - 1.53 + lp_offset / 0xa, _0x1bda7e['z'], 0x1);
          }
        });
      }
      if (Spammer && ticks % spm_delay == 0x0) {
        let _0x29155e = spm_text;
        if (spm_file) {
          let _0x110cf3 = 唤始出来犹(nx_paths + '/Spammer.txt')['split']('\n');
          _0x29155e = _0x110cf3[瑟瑟主人下(0x0, _0x110cf3['length'] - 0x1)];
        }
        const _0x2b3a1b = 'abcdef';
        if (spm_gradual) _0x29155e = 司马明年秋(_0x29155e);
        if (spm_rainbow) _0x29155e = '§' + _0x2b3a1b[瑟瑟主人下(0x0, _0x2b3a1b['length'] - 0x1)] + _0x29155e;
        if (spm_attack && at_lists['length'] > 0x0) _0x29155e = ' §e@' + at_lists['map'](_0x3ce6b5 => getEntityName(_0x3ce6b5))['join'](',') + ' §r' + _0x29155e;
        for (let _0x1b6fa4 = 0x0; _0x1b6fa4 < spm_count; _0x1b6fa4++) {
          let _0x2ad2d5 = 弹说尽心中(0x6);
          sendChatMessage(spm_random ? _0x29155e + '§r || ' + _0x2ad2d5 : _0x29155e);
        }
      }
      if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x68bc5 => setEntitySize(_0x68bc5, hb_hor, hb_y));
      if (Sucker && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x26015d => {
          const _0x1cbb86 = 茫茫江浸月(suck_range, self_pos, _0xdede92);
          setRealPos(_0x26015d, _0x1cbb86['x'], _0x1cbb86['y'], _0x1cbb86['z']);
        });
      }
      if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x56377c => 弦弦掩抑声(_0x56377c, self_id, aaim_fov, false));
      if (aaim_states) {
        let _0x25fc16 = 茫茫江浸月(0.3 * aaim_speed / 0x5, self_pos, {
          'yaw': _0xdede92['yaw'] + (Math['round'](瑟瑟主人下(0x0, 0x1)) ? 0x5a : -0x5a),
          'pitch': 0x0
        });
        setMotion(_0x25fc16['x'] - self_pos['x'], _0x432855['y'], _0x25fc16['z'] - self_pos['z']);
        aaim_states = false;
      }
      if (Velocity && self_moving) {
        let _0x45d326 = _0xdede92['yaw'];
        if (modes['bhop_mode'] === 0x1) {
          bhop_mot = getEntityMotion(self_id);
          bhop_pos = getPos(self_id);
          const _0x24b0d7 = 马客在船举(bhop_mot, getPos(self_id), 0x5);
          _0x45d326 = 曲调先有情(self_id, _0x24b0d7, 'yaw_pos');
        }
        let _0x3892cd = 茫茫江浸月((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
          'yaw': _0x45d326,
          'pitch': 0x0
        });
        setMotion(_0x3892cd['x'] - self_pos['x'], vec_bhop && (_0xa2db06 || bhop_airjump) && (!bhop_airjump || _0x432855['y'] < -0.42) ? bhop_heigh : _0x432855['y'], _0x3892cd['z'] - self_pos['z']);
      }
      if (FlexibleMove) {
        const _0x288e93 = getCameraRotation();
        const _0x122937 = 茫茫江浸月(fb_speed / 0xa, self_pos, {
          'yaw': _0x288e93['yaw'] > 0x0 ? 0xb4 - _0x288e93['yaw'] : -0xb4 - _0x288e93['yaw'],
          'pitch': -_0x288e93['pitch']
        });
        if (!_0xa2db06 && self_moving) setMotion(_0x122937['x'] - self_pos['x'], 0x0, _0x122937['z'] - self_pos['z']);
      }
      if (TargetParticle) {
        at_lists['forEach'](_0x15df23 => {
          const _0x372f3e = getPos(_0x15df23);
          委身为贾人(tp_type, _0x372f3e['x'], _0x372f3e['y'] + 0.3, _0x372f3e['z'], tp_size);
        });
      }
      if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x6ec387 === 'inventory_screen') && (!ic_chest || _0x6ec387['includes']('chest_screen')) && (!ic_bow || _0xdede92['pitch'] > 0x50)) {
        for (let _0x42a8ff = 0x0; _0x42a8ff < ic_max; _0x42a8ff++) {
          const _0x19873b = getInventory(self_id, cleaner_slot);
          if (_0x19873b['count'] === 0x0) {
            if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
            continue;
          }
          ;
          let _0x1e23e2 = false;
          let _0x172aea = clear_config[_0x19873b['namespace']];
          let _0x5d8353 = 二年恬然自(-0x2, _0x19873b['namespace']);
          if (modes['ic_mode'] === 0x0 && _0x172aea) _0x1e23e2 = true;
          if (modes['ic_mode'] === 0x1 && (!_0x172aea || _0x172aea && (_0x172aea['max_num'] === -0x1 || _0x5d8353 > _0x172aea['max_num']) && (_0x172aea['aux'] === 'any' || _0x19873b['aux'] === _0x172aea['aux']))) _0x1e23e2 = true;
          if (ic_move && !_0x1e23e2 && typeof _0x172aea !== 'undefined' && _0x172aea['slot'] !== 'undefined') 人本长安倡(cleaner_slot, _0x172aea['slot'], true, false);
          if (_0x1e23e2) {
            if (trash_slot > -0x1 && cleaner_slot > 0x8) {
              人本长安倡(cleaner_slot, trash_slot, true, false);
              dropPlayerInventorySlot(self_id, trash_slot, false, modes['ic_mode'] === 0x0 && _0x172aea || modes['ic_mode'] === 0x1 && !_0x172aea);
            } else dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x172aea || modes['ic_mode'] === 0x1 && !_0x172aea);
          }
          if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
        }
      }
      if (SafeWalk && self_moving) {
        const _0x4e1166 = getEntityRot(self_id)['yaw'];
        const _0x492067 = 茫茫江浸月(0.3, self_pos, {
          'yaw': _0x4e1166,
          'pitch': 0x0
        });
        const _0x80e27f = getBlock(_0x492067['x'], _0x492067['y'] - 1.7, _0x492067['z']);
        if (_0x80e27f['namespace'] === 'minecraft:air' && _0xa2db06) setMotion(-_0x432855['x'], _0x432855['y'], -_0x432855['z']);
      }
      if (Spider && self_moving) {
        const _0x255cd4 = _0xdede92['yaw'];
        const _0x35d36a = 茫茫江浸月(0.5, self_pos, {
          'yaw': _0x255cd4,
          'pitch': 0x0
        });
        const _0x337413 = getBlock(_0x35d36a['x'], self_pos['y'] - 1.3, _0x35d36a['z']);
        if (_0x337413['namespace'] != 'minecraft:air') setMotion(_0x432855['x'], sp_speed / 0xf, _0x432855['z']);
      }
      if (DirectRender) {
        const _0x2fe478 = 马客在船举(_0x432855, self_pos, 0xa);
        const _0xef7ce9 = 茫茫江浸月(0x1, self_pos, {
          'yaw': _0x130bf6,
          'pitch': 0x0
        });
        var _0x5756bf = _0xdede92['yaw'];
        var _0x2bf2db = 曲调先有情(_0x2fe478, self_id, 'yaw_pos');
        for (let _0x2b1547 = 0x0; _0x2b1547 < dr_num; _0x2b1547++) {
          const _0x3b44a4 = 茫茫江浸月(_0x2b1547 * dr_space / 0x5, self_pos, {
            'yaw': _0x5756bf,
            'pitch': 0x0
          });
          const _0x24e6e2 = 茫茫江浸月(_0x2b1547 * dr_space / 0x5, self_pos, {
            'yaw': _0x2bf2db,
            'pitch': 0x0
          });
          if (dr_rot) 委身为贾人(0x37, _0x3b44a4['x'], self_pos['y'] - 0.27, _0x3b44a4['z'], 0x1);
          if (dr_move) 委身为贾人(0x37, _0x24e6e2['x'], self_pos['y'] - 1.3, _0x24e6e2['z'], 0x1);
        }
      }
      if (Fly && (!_0xa2db06 || !fly_air) && (!fly_move || self_moving) && _0x1d06ea > 0x0) {
        const _0x11d70b = fly_ud ? fly_current : 0x0;
        let _0x58e078 = 马客在船举(_0x432855, self_pos, fly_speed * 2.5);
        if (modes['fly_mode'] === 0x0) {
          if (fly_y) setPos(_0x58e078['x'], self_pos['y'] + _0x11d70b, _0x58e078['z']);else setPos(self_pos['x'], _0x58e078['y'], self_pos['z']);
          if (fly_zero) setMotion(0x0, 0x0, 0x0);
        }
        if (modes['fly_mode'] === 0x1) setMotion(_0x58e078['x'] - self_pos['x'], _0x58e078['y'] - self_pos['y'], _0x58e078['z'] - self_pos['z']);
        if (fly_playerAuth) silentMove(_0x58e078['x'], _0x58e078['y'], _0x58e078['z']);
        if (fly_moveplayer) sendMovePlayer({
          'id': self_id,
          'pos': {
            'x': _0x58e078['x'],
            'y': _0x58e078['y'],
            'z': _0x58e078['z']
          },
          'mode': 0x1,
          'ground': true,
          'rot': {
            'pitch': _0xdede92['pitch'],
            'yaw': _0xdede92['yaw']
          },
          'yHeadRot': getEntityBodyRot(self_id)
        });
        fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
      }
      if (ActivitySender && self_moving) {
        let _0x37a9e7 = 马客在船举(_0x432855, self_pos, 0x1);
        const _0x31421b = 曲调先有情(self_id, _0x37a9e7, 'yaw_pos');
        sendChatMessage('我正在向' + Math['round'](_0x31421b) + '°方向移动');
      }
      if (FakeWater) setBlock(_0xddc940['x'], _0xddc940['y'], _0xddc940['z'], 'minecraft:water', 0x0);
      if (Suspend) setMotion(_0x432855['x'], -0x186a0, _0x432855['z']);
      if (Hover) setMotion(_0x432855['x'], 0.05, _0x432855['z']);
      if (Rider && at_lists['length'] > 0x0) {
        let _0xa036a2 = getPos(at_lists[0x0]);
        const _0x466d22 = rid_random ? 瑟瑟主人下(-0x2, 0x2) : 0x0;
        谁琵琶声停(_0xa036a2['x'] + _0x466d22, _0xa036a2['y'] + rid_y + 0x1, _0xa036a2['z'] + _0x466d22);
        _0x58ec2b['push'](琶声主人忘(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
      }
      if (JetPack) {
        const _0xfaad69 = getCameraRotation();
        if (self_moving || !spr_move) {
          let _0x33feca = 茫茫江浸月(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
            'yaw': _0xfaad69['yaw'] > 0x0 ? 0xb4 - _0xfaad69['yaw'] : -0xb4 - _0xfaad69['yaw'],
            'pitch': -_0xfaad69['pitch']
          });
          if (spr_hor) _0x33feca['y'] = self_pos['y'];
          const _0x415bb5 = getBlock(_0x33feca['x'], _0x33feca['y'], _0x33feca['z']);
          if (_0x415bb5['namespace'] === 'minecraft:air' || spr_nowall) {
            if (modes['sprint_mode'] === 0x0) {
              setPos(_0x33feca['x'], _0x33feca['y'], _0x33feca['z']);
              setEntityMotion(self_id, _0x432855['x'], -1e-7, _0x432855['z']);
            }
            if (modes['sprint_mode'] === 0x1) setMotion(_0x33feca['x'] - self_pos['x'], _0x33feca['y'] - self_pos['y'], _0x33feca['z'] - self_pos['z']);
            if (spr_auth) silentMove(_0x33feca['x'], _0x33feca['y'], _0x33feca['z']);
            if (spr_packet) sendMovePlayer({
              'id': self_id,
              'pos': {
                'x': _0x33feca['x'],
                'y': _0x33feca['y'],
                'z': _0x33feca['z']
              },
              'mode': 0x1,
              'ground': true,
              'rot': {
                'pitch': _0xdede92['pitch'],
                'yaw': _0xdede92['yaw']
              },
              'yHeadRot': getEntityBodyRot(self_id)
            });
          } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        }
      }
      if (Crasher) {
        for (let _0x1e6ff5 = 0x0; _0x1e6ff5 < cs_count; _0x1e6ff5++) {
          const _0x6e458c = Math['sqrt'](_0x1e6ff5);
          if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0xddc940['x'], _0xddc940['y'], _0xddc940['z'], _0x6e458c);
          if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
          if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n'['repeat'](0x32));
          if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n'['repeat'](0x32));
          if (modes['cs_mode'] === 0x4) sendSound(_0x1e6ff5, self_pos['x'], self_pos['y'], self_pos['z'], _0x1e6ff5);
          if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0x55c6b8 => {
            if (_0x55c6b8 !== self_id) 琵琶行浔阳(_0x55c6b8, false);
          });
          if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
            'pos': self_pos,
            'yHeadRot': 0x0,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [_0x1e6ff5],
            'motion': {
              'x': 0x0,
              'y': 0x0,
              'z': 0x0
            },
            'rot': {
              'yaw': 0x0,
              'pitch': 0x0
            }
          });
          if (modes['cs_mode'] === 0x7) sendPlayerAction({
            'id': self_id,
            'pos': self_pos,
            'type': _0x1e6ff5,
            'value': 0x1
          });
        }
      }
      if (TestModule) {}
      if (KickAura && at_lists['length'] > 0x0) {
        let _0x59f398 = [];
        if (ka_player) _0x59f398['concat'](_0x47c7cb['map'](_0x2cb09a => _0x2cb09a['id']));
        if (ka_target) _0x59f398['concat'](at_lists);
        if (modes['ka_mode'] == 0x0) _0x59f398['forEach'](_0xa578c6 => {
          if (_0xa578c6 == self_id) return;
          const _0x2eafd2 = getEntityName(_0xa578c6);
          let _0x22131b = _0x2eafd2['indexOf'](']') - 0x2;
          let _0x3b49aa = ['b', 'c', 'e', 'a'];
          for (let _0x3a8880 of _0x3b49aa) {
            if (_0x2eafd2['indexOf']('·§' + _0x3a8880) != -0x1) {
              _0x22131b = _0x2eafd2['indexOf']('·§' + _0x3a8880);
              break;
            }
          }
          let _0xa1034e = _0x22131b === -0x1 ? _0x2eafd2 : _0x2eafd2['slice'](_0x22131b + 0x3, _0x2eafd2['length']);
          if (_0xa1034e['includes']('【') && _0xa1034e['includes']('】')) _0xa1034e = 十六言命曰(_0xa1034e, '【', '】');
          for (let _0x53b558 = 0x0; _0x53b558 < ka_count; _0x53b558++) executeCommand('/tell "' + _0xa1034e + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
        });
        if (modes['ka_mode'] == 0x1) {
          for (let _0x5db2bc = 0x0; _0x5db2bc < ka_count; _0x5db2bc++) executeCommand('/tell @a[' + _0x59f398['map'](_0x627b7a => 'name="' + getEntityName(_0x627b7a) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
        }
      }
      if (AutoSave && _0x432855['y'] < as_minY && !_0xa2db06) {
        if (as_block && !self_item['isBlock']) {
          for (let _0x48937c = 0x0; _0x48937c < 0x9; _0x48937c++) {
            const _0x13f653 = getInventory(self_id, _0x48937c);
            if (_0x13f653['isBlock'] || as_water && _0x13f653['namespace'] === 'minecraft:water_bucket') {
              selectPlayerInventorySlot(self_id, _0x48937c);
              break;
            }
          }
        }
        if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
          for (let _0x4dc6c2 of 生不得志低(_0xddc940, {
            'x': _0xddc940['x'],
            'y': _0xddc940['y'] + as_minY * 0x5,
            'z': _0xddc940['z']
          }, 0x1, true)) {
            const _0x50ec44 = getBlock(_0x4dc6c2['x'], _0x4dc6c2['y'], _0x4dc6c2['z']);
            if (_0x50ec44['namespace'] != 'minecraft:air') continue;
            const _0x4fbb13 = getBlock(_0x4dc6c2['x'], _0x4dc6c2['y'] - 0x1, _0x4dc6c2['z']);
            if (_0x4fbb13['namespace'] === 'minecraft:air' || _0x4fbb13['namespace'] === 'minecraft:water') continue;
            buildBlock(self_id, _0x4dc6c2['x'], _0x4dc6c2['y'], _0x4dc6c2['z'], 0x0);
          }
        }
        if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
          if (as_fake) setBlock(self_pos['x'], _0xddc940['y'] + _0x432855['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);else buildBlock(self_id, _0xddc940['x'], _0xddc940['y'] + _0x432855['y'] * 3.1, _0xddc940['z'], 0x0);
        }
        if (as_near) {
          let _0x27d60a = {};
          let _0x1af909 = Infinity;
          for (let _0xfd50d0 = -0x5; _0xfd50d0 <= 0x5; _0xfd50d0++) {
            for (let _0x2fb201 = -0x1; _0x2fb201 <= 0x0; _0x2fb201++) {
              for (let _0x1a7e8a = -0x5; _0x1a7e8a <= 0x5; _0x1a7e8a++) {
                let _0x344fc2 = Math['sqrt'](_0xfd50d0 * _0xfd50d0 + _0x1a7e8a * _0x1a7e8a + _0x2fb201 * _0x2fb201);
                let _0x269fbc = {
                  'x': _0xfd50d0 + _0xddc940['x'],
                  'y': _0x2fb201 + _0xddc940['y'],
                  'z': _0x1a7e8a + _0xddc940['z']
                };
                const _0x26f827 = getBlock(_0x269fbc['x'], _0x269fbc['y'], _0x269fbc['z']);
                if (_0x26f827['namespace'] === 'minecraft:air') continue;
                if (_0x344fc2 < _0x1af909) {
                  _0x1af909 = _0x344fc2;
                  _0x27d60a = _0x269fbc;
                }
              }
            }
          }
          if (_0x27d60a != {}) {
            let _0x1164df = {
              'x': _0xddc940['x'],
              'y': _0xddc940['y'] - 0x1 + _0x432855['y'] * 0x3,
              'z': _0xddc940['z']
            };
            let _0x3925d0 = 生不得志低(_0x27d60a, _0x1164df, 0.8, true);
            _0x3925d0['forEach'](_0x1869ac => {
              const _0x2d55c0 = getBlock(_0x1869ac['x'], _0x1869ac['y'], _0x1869ac['z']);
              if (_0x2d55c0['namespace'] === 'minecraft:air') 少小时欢乐(Math['round'](_0x1869ac['x']), Math['floor'](_0x1869ac['y']), Math['round'](_0x1869ac['z']));
            });
          }
        }
      }
      if (AssAssInate && at_lists['length'] > 0x0) {
        let _0x2bbac9 = getEntityRot(at_lists[0x0]);
        let _0x465e0b = getPos(at_lists[0x0]);
        if (aai_h > aai_max) aai_reverse = true;else if (aai_h < aai_min) aai_reverse = false;
        aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
        const _0x50f30f = aai_random ? 瑟瑟主人下(-0xa, 0xa) : sur_speed * 0x3;
        aai_current = Surround ? aai_current + _0x50f30f : _0x2bbac9['yaw'];
        if (Surround && aai_current > 0xb4) aai_current = -0xb4;
        let _0x10980a = 茫茫江浸月(-aai_len, _0x465e0b, {
          'yaw': aai_current,
          'pitch': 0x0
        });
        if (modes['sur_mode'] === 0x0) setPos(_0x10980a['x'], _0x465e0b['y'] + 1.83 + aai_h, _0x10980a['z']);
        if (modes['sur_mode'] === 0x1) 湖间予出官(_0x10980a['x'], _0x465e0b['y'] + 1.83 + aai_h, _0x10980a['z']);
        _0x58ec2b['push'](琶声主人忘(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
      }
      if (SoundPlayer || sp_data['length'] > 0x0) {
        let _0x2c738f = [];
        if (sp_target) _0x2c738f = at_lists;
        if (sp_all) _0x2c738f = getPlayerList();
        if (sp_entity) _0x2c738f = getEntityList();
        if (sp_posList['length'] > 0x0) _0x2c738f = sp_posList;
        let _0x210db8 = [{
          'sound': sp_type,
          'level': sp_level
        }];
        sp_yaw += 0x14;
        if (sp_yaw > 0xb4) sp_yaw = -0xb4;
        for (let _0x39cba2 = 0x0; _0x39cba2 < sp_vec; _0x39cba2++) {
          if (sp_data['length'] > 0x0) _0x210db8 = sp_data['shift']()['sounds'];
          if (_0x210db8['length'] > 0x0) {
            _0x25435b: for (let _0x48b39a of _0x210db8) {
              let _0x2b4b67 = _0x48b39a['sound'];
              let _0x3eda6f = _0x48b39a['level'];
              if (sp_large) {
                const _0x306a93 = Math['round'](sp_range * sp_space / 0x2);
                for (let _0xbfa413 = -_0x306a93; _0xbfa413 <= _0x306a93; _0xbfa413 += sp_space) {
                  for (let _0x1def53 = -_0x306a93; _0x1def53 <= _0x306a93; _0x1def53 += sp_space) {
                    sendSound(Number(_0x2b4b67), self_pos['x'] + _0xbfa413, self_pos['y'] + sp_y, self_pos['z'] + _0x1def53, Number(_0x3eda6f));
                  }
                }
                continue _0x25435b;
              }
              _0x2c738f['forEach'](_0x364afe => {
                if (typeof _0x364afe != 'string') for (let _0x5db243 = 0x0; _0x5db243 < sp_count; _0x5db243++) sendSound(Number(_0x2b4b67), _0x364afe['x'], _0x364afe['y'] + sp_y, _0x364afe['z'], Number(_0x3eda6f));else {
                  if (_0x364afe === self_id && sp_exclude) return;
                  const _0x544a53 = getPos(_0x364afe);
                  let _0x554be7 = 茫茫江浸月(sp_distance, _0x544a53, {
                    'yaw': sp_yaw,
                    'pitch': 0x0
                  });
                  for (let _0x4498d8 = 0x0; _0x4498d8 < sp_count; _0x4498d8++) sendSound(Number(_0x2b4b67), _0x554be7['x'], _0x554be7['y'] + sp_y, _0x554be7['z'], Number(_0x3eda6f));
                }
              });
            }
          }
        }
        if (sp_data['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
      }
      if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
        sp_data = JSON['parse'](sp_file);
        琶声主人忘(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
      }
      if (_0x1572d6['current'] < 0x6) _0x58ec2b['push'](琶声主人忘(0x1, 'Warning', 'Low Health!', '§c'));
      if (AutoDo && Math['round'](_0x1572d6['current']) <= ad_min) {
        const _0x38d023 = modes['ad_mode'];
        if (_0x38d023 === 0x2) removeEntity(self_id);
        if (_0x38d023 === 0x0 || _0x38d023 === 0x1) executeCommand(_0x38d023 === 0x0 ? '/hub' : '/again');
        if (_0x38d023 === 0x3) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'splash_potion', 0x16));else {
            setEntityRot(self_id, 0x5a, _0xdede92['yaw']);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 妇遂命酒使(), 0x0);
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x38d023 === 0x4) {
          if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'mushroom_stew'));else {
            妇遂命酒使();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x38d023 === 0x5) {
          if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'skull'));else {
            妇遂命酒使();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 江头夜送客(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x38d023 === 0x6) leaveWorld();
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
        const _0x3b19b8 = getBlock(_0xddc940['x'], _0xddc940['y'] - 0x1, _0xddc940['z']);
        if (_0x3b19b8['namespace'] === 'minecraft:flowing_water' || _0x3b19b8['namespace'] === 'minecraft:water' || _0x3b19b8['namespace'] === 'minecraft:flowing_lava' || _0x3b19b8['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x432855['x'], 0x0, _0x432855['z']);
      }
      if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x1a5f9c => {
          let _0x365216 = 音铮铮然有(_0x1a5f9c);
          琶声主人忘(0x0, 'TargetInfo', '\n' + _0x365216 + '\n§r§b==============================', '§r');
          if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x1a5f9c) + '_' + _0x1a5f9c + '.txt', _0x365216);
        });
      }
      if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
      if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
        const _0x271885 = at_lists[0x0];
        const _0x5ebeac = 归客不发寻(self_id, _0x271885);
        const _0x1d81e6 = 弦弦掩抑声(self_id, _0x271885, aa_fov, 0x0);
        if (_0x5ebeac <= aa_range && _0x1d81e6 || aa_throw) {
          const _0x1a1a3c = 瑟瑟主人下(aa_min, aa_max);
          let _0x59d339 = 曲调先有情(self_id, _0x271885, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          let _0x3df636 = 曲调先有情(self_id, _0x271885, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          if (_0x59d339 <= 0xb4 && _0x59d339 >= -0xb4 && _0x3df636 <= 0x5a && _0x3df636 >= -0x5a) {
            let _0x180231 = _0x59d339 >= 0x0 ? -_0x1a1a3c : _0x1a1a3c;
            let _0x61f03c = _0x3df636 >= 0x0 ? _0x1a1a3c : -_0x1a1a3c;
            if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x59d339) < _0x1a1a3c || Math['abs'](_0x3df636) < _0x1a1a3c)) {
              _0x180231 = -_0x59d339 / ((0x28 - _0x1a1a3c) / 0x2);
              _0x61f03c = -_0x3df636 / ((0x28 - _0x1a1a3c) / 1.125);
            }
            const _0x39d82a = 弦弦掩抑声(self_id, _0x271885, aa_prec * 0x2, 0x1);
            const _0x5786de = 弦弦掩抑声(self_id, _0x271885, aa_prec * 0x4, 0x2);
            if (!_0x39d82a) setLocalPlayerTurn(0x0, _0x180231);
            if (!_0x5786de && !aa_throw || !isSimilar(_0x3df636, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x61f03c, 0x0);
          }
          _0x58ec2b['push'](琶声主人忘(0x1, 'AssistAim', getEntityName(_0x271885), '§r'));
        }
      }
      if (InfiniteAura && ia_targets['length'] > 0x0) {
        ia_targets['forEach'](_0x334600 => {
          const _0x55749a = _0x334600;
          const _0x46aaec = getPos(_0x55749a);
          if (!_0x55749a || !findEntity(_0x55749a)) return;
          if (归客不发寻(ia_targets[0x0], self_id) > ia_range) return;
          if (ia_tick === 0x0) {
            const _0xa49627 = ia_random ? 瑟瑟主人下(-0x2, 0x2) : 0x0;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMot = _0x432855;
            for (let _0x24fb4d = 0x0; _0x24fb4d < ia_move; _0x24fb4d++) {
              if (ia_toClick) {
                buildBlock(self_id, _0x46aaec['x'] + _0xa49627, _0x46aaec['y'], _0x46aaec['z'] + _0xa49627, 0x1);
                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                  'pos': {
                    'x': _0x46aaec['x'] + _0xa49627,
                    'y': _0x46aaec['y'] + ia_offset / 0x5,
                    'z': _0x46aaec['z'] + _0xa49627
                  }
                });
              }
              if (modes['ia_mode'] === 0x0) setPos(_0x46aaec['x'], _0x46aaec['y'], _0x46aaec['z']);
              if (modes['ia_mode'] === 0x1) silentMove(_0x46aaec['x'] + _0xa49627, _0x46aaec['y'] + ia_offset / 0x5, _0x46aaec['z'] + _0xa49627);
              if (modes['ia_mode'] === 0x2) movePlayer(_0x46aaec['x'] + _0xa49627, _0x46aaec['y'] + ia_offset / 0x5, _0x46aaec['z'] + _0xa49627);
            }
            if (ia_jump) playerJump();
            for (let _0x3242ca = 0x0; _0x3242ca < ia_attack; _0x3242ca++) 琵琶行浔阳(_0x55749a, Swing);
          }
          if (ia_tick <= -ia_return && ia_fix) 慢捻抹复挑();
        });
        if (ia_tick <= -ia_return) {
          if (!ia_fix) 慢捻抹复挑();
          ia_tick = ia_delay;
        }
        if (ia_tick > -ia_return) ia_tick--;
        _0x58ec2b['push'](琶声主人忘(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 相近邀相见(ia_targets['map'](_0x15c553 => getEntityName(_0x15c553))), '§r'));
      }
      if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 无限事轻拢(_0xddc940);
      if (AutoVoid) {
        const _0x5a85f8 = 抱琵琶半遮(self_id);
        const _0x187f61 = getBlock(_0x5a85f8['x'], _0xddc940['y'] - 0x1, _0x5a85f8['z']);
        for (let _0x5c53c6 = -0x2; _0x5c53c6 < 0x3; _0x5c53c6++) {
          for (let _0x29edee = -0x2; _0x29edee < 0x3; _0x29edee++) {
            const _0x44ac8d = getBlock(_0x5a85f8['x'] + _0x5c53c6, _0xddc940['y'] - 0x1, _0x5a85f8['z'] + _0x29edee);
            if (_0x44ac8d['namespace'] === 'minecraft:air' && _0x432855['y'] < -0.0783 && _0x432855['y'] > -0.0785 && _0x187f61['namespace'] != 'minecraft:air') {
              const _0x1df734 = -曲调先有情(self_id, {
                'x': _0x5a85f8['x'] + _0x5c53c6,
                'y': self_pos['y'],
                'z': _0x5a85f8['z'] - _0x29edee
              }, 'yaw_pos');
              const _0x10cb62 = 茫茫江浸月(0.5, self_pos, {
                'yaw': _0x1df734,
                'pitch': 0x0
              });
              setMotion(_0x10cb62['x'] - self_pos['x'], _0x432855['y'], _0x10cb62['z'] - self_pos['z']);
              break;
            }
          }
        }
      }
      if (AvoidThrow) {
        const _0x443c43 = getEntityList();
        _0x443c43['forEach'](_0x242dbc => {
          if ((getEntityTypeId(_0x242dbc) === 0x400055 || getEntityTypeId(_0x242dbc) === 0x400056 || getEntityTypeId(_0x242dbc) === 0xc00050) && 归客不发寻(_0x242dbc, self_id) <= at_range) {
            if (at_remove) removeEntity(_0x242dbc);
            if (modes['avoid_mode'] === 0x0) {
              const _0x1ab2e5 = 曲调先有情(getPos(_0x242dbc), self_id, 'yaw_pos');
              const _0x289dad = 茫茫江浸月(0.5, self_pos, {
                'yaw': _0x1ab2e5,
                'pitch': _0xdede92['pitch']
              });
              setMotion(_0x289dad['x'] - self_pos['x'], _0x432855['y'], _0x289dad['z'] - self_pos['z']);
            }
            if (modes['avoid_mode'] === 0x1) 琵琶行浔阳(_0x242dbc, Swing);
            if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
          }
        });
      }
      if (TrajectoryRender) {
        const _0x4e021c = getPlayerList();
        let _0x3b69bf = [];
        let _0x4e767f = false;
        let _0x4e0098 = {
          'x': 0x0,
          'y': 0x0,
          'z': 0x0
        };
        for (let _0x4b4714 = 0x1; _0x4b4714 <= tr_len; _0x4b4714 += tr_dens / 0xa) {
          let _0xab6ee8 = 罢悯然自叙(_0x4b4714, _0xdede92['pitch'], tr_speed, tr_g)['data'];
          let _0x545cb1 = 茫茫江浸月(_0x4b4714, self_pos, {
            'yaw': _0xdede92['yaw'],
            'pitch': 0x0
          });
          let _0x581b3e = getBlock(_0x545cb1['x'], _0x545cb1['y'] + _0xab6ee8, _0x545cb1['z']);
          if (tr_show || !_0x4e767f) {
            _0x4e021c['forEach'](_0x51aecc => {
              if (!_0x4e767f) {
                let _0x7d59a4 = getPos(_0x51aecc);
                let _0x494cb1 = {
                  'x': _0x545cb1['x'],
                  'y': _0x545cb1['y'] + _0xab6ee8,
                  'z': _0x545cb1['z']
                };
                let _0x598152 = getEntitySize(_0x51aecc);
                if (_0x494cb1['x'] <= _0x7d59a4['x'] + _0x598152['x'] / 0x2 && _0x494cb1['x'] >= _0x7d59a4['x'] - _0x598152['x'] / 0x2 && _0x494cb1['y'] <= _0x7d59a4['y'] + _0x598152['y'] / 0x2 && _0x494cb1['y'] >= _0x7d59a4['y'] - _0x598152['y'] / 0x2 && _0x494cb1['z'] <= _0x7d59a4['z'] + _0x598152['x'] / 0x2 && _0x494cb1['z'] >= _0x7d59a4['z'] - _0x598152['x'] / 0x2) {
                  _0x58ec2b['push'](琶声主人忘(0x1, 'HasAimed', getEntityName(_0x51aecc), '§r'));
                  _0x4e767f = true;
                }
              }
            });
          }
          if (_0x581b3e['namespace'] != 'minecraft:air' || _0x4e767f) {
            _0x4e0098 = _0x545cb1;
            if (modes['tr_mode'] === 0x1 && _0x581b3e['namespace'] != 'minecraft:air') {
              for (let _0x495ab8 = 0x0; _0x495ab8 <= 0x14; _0x495ab8 += 0x2) 委身为贾人(tr_type, _0x4e0098['x'], _0x4e0098['y'] + _0xab6ee8 + _0x495ab8 / 0xa, _0x4e0098['z'], 0x1);
            }
            break;
          }
        }
        if (modes['tr_mode'] === 0x0) {
          let _0xe9edeb = getDistance(_0x4e0098, self_pos);
          for (let _0x15cc14 = 0x1; _0x15cc14 <= _0xe9edeb; _0x15cc14 += tr_dens / 0xa) {
            let _0x428737 = 罢悯然自叙(_0x15cc14, _0xdede92['pitch'], tr_speed, tr_g)['data'];
            let _0x4a4d8f = (tr_offset - 0xa) / 0xa;
            let _0xb9344 = _0xdede92['yaw'] + 0x5a;
            if (_0xb9344 > 0xb4) _0xb9344 = _0xb9344 - 0x168;
            if (_0xb9344 < -0xb4) _0xb9344 = _0xb9344 + 0x168;
            let _0x5cb2b8 = 茫茫江浸月(_0x4a4d8f, self_pos, {
              'yaw': _0xb9344,
              'pitch': 0x0
            });
            let _0x18c551 = 茫茫江浸月(_0x15cc14, _0x5cb2b8, {
              'yaw': _0xdede92['yaw'] - Math['atan'](_0x4a4d8f / _0xe9edeb) * (0xb4 / Math['PI']),
              'pitch': 0x0
            });
            let _0x33336a = getBlock(_0x18c551['x'], _0x18c551['y'] + _0x428737, _0x18c551['z']);
            if (modes['tr_mode'] === 0x0 && _0x33336a['namespace'] === 'minecraft:air') 委身为贾人(tr_type, _0x18c551['x'], _0x18c551['y'] + _0x428737 + 0.5, _0x18c551['z'], 0x1);
          }
        }
      }
      if (FarmAura) {
        const _0x2a9242 = 抱琵琶半遮(self_id);
        for (let _0x4b19c2 = -fa_range; _0x4b19c2 < fa_range; _0x4b19c2++) {
          for (let _0x4da786 = -fa_range; _0x4da786 < fa_range; _0x4da786++) {
            const _0xb40cc8 = getBlock(_0x2a9242['x'] + _0x4b19c2, _0xddc940['y'] - 0x1, _0x2a9242['z'] + _0x4da786);
            const _0x31e7f8 = getBlock(_0x2a9242['x'] + _0x4b19c2, _0xddc940['y'], _0x2a9242['z'] + _0x4da786);
            if ((_0xb40cc8['namespace'] === 'minecraft:dirt' || _0xb40cc8['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x2a9242['x'] + _0x4b19c2, _0xddc940['y'] - 0x1, _0x2a9242['z'] + _0x4da786, 0x1);
            if (_0xb40cc8['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x2a9242['x'] + _0x4b19c2, _0xddc940['y'] - 0x1, _0x2a9242['z'] + _0x4da786, 0x1);
            if (_0x31e7f8['aux'] === 0x7 && (_0x31e7f8['namespace'] === 'minecraft:beetroot' || _0x31e7f8['namespace'] === 'minecraft:wheat' || _0x31e7f8['namespace'] === 'minecraft:carrots' || _0x31e7f8['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x2a9242['x'] + _0x4b19c2, _0xddc940['y'], _0x2a9242['z'] + _0x4da786, 0x1);
            if (self_item['namespace'] === 'minecraft:bone_meal' && _0x31e7f8['aux'] <= 0x6 && (_0x31e7f8['namespace'] === 'minecraft:beetroot' || _0x31e7f8['namespace'] === 'minecraft:wheat' || _0x31e7f8['namespace'] === 'minecraft:carrots' || _0x31e7f8['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x2a9242['x'] + _0x4b19c2, _0xddc940['y'], _0x2a9242['z'] + _0x4da786, 0x1);
          }
        }
      }
      if (ActionManager) {
        if (!am_file) {
          if (ticks % am_delay == 0x0) {
            for (let _0x5944f8 = 0x0; _0x5944f8 < am_count; _0x5944f8++) sendPlayerAction({
              'id': self_id,
              'pos': {
                'x': _0xddc940['x'],
                'y': _0xddc940['y'] - 0x1,
                'z': _0xddc940['z']
              },
              'type': Number(am_id),
              'value': Number(am_value)
            });
          }
        } else {
          const _0xc58686 = JSON['parse'](唤始出来犹(nx_paths + '/PlayerAction.json'));
          _0xc58686['forEach'](_0x5bc0e2 => {
            if (_0x5bc0e2['delay'] % am_tick === 0x0) {
              for (let _0x16247c = 0x0; _0x16247c < _0x5bc0e2['count']; _0x16247c++) sendPlayerAction({
                'id': self_id,
                'pos': self_pos,
                'value': _0x5bc0e2['value'],
                'type': Number(_0x5bc0e2['id'])
              });
            }
          });
        }
      }
      if (PlayerAuthManager && ticks % pam_delay === 0x0) {
        for (let _0x25b9f8 = 0x0; _0x25b9f8 < pam_count; _0x25b9f8++) sendPlayerAuthInput({
          'pos': {
            'x': _0xddc940['x'],
            'y': _0xddc940['y'] - 0x1,
            'z': _0xddc940['z']
          },
          'inputs': pam_array['map'](_0x3eedde => Number(_0x3eedde)),
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
      if (AutoJump && _0xa2db06) setMotion(_0x432855['x'], aj_y / 0x64, _0x432855['z']);
      if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x4fc2e8 => {
        if (bc_packet) silentMove(_0x4fc2e8['x'], _0x4fc2e8['y'], _0x4fc2e8['z']);
        buildBlock(self_id, _0x4fc2e8['x'], _0x4fc2e8['y'], _0x4fc2e8['z'], 0x0);
      });
      if (NoFall && _0x432855['y'] < -nf_max && !_0xa2db06) {
        if (modes['nf_mode'] === 0x0) setMotion(0x0, 0x0, 0x0);
        if (modes['nf_mode'] === 0x1) {
          callModule(0x25, JSON['stringify']({
            'value': true
          }));
          setTimeout(() => callModule(0x25, JSON['stringify']({
            'value': false
          })), 0x64);
        }
        if (modes['nf_mode'] === 0x2) {
          callModule(0x1e, JSON['stringify']({
            'value': true,
            'speed': 0x0
          }));
          setTimeout(() => JSON['stringify']({
            'value': false
          }), 0x4b);
        }
        if (modes['nf_mode'] === 0x3) sendPlayerAction({
          'id': self_id,
          'pos': self_pos,
          'value': 0x1,
          'type': 0x7
        });
      }
      if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0xa2db06 && _0xa2db06)) {
        if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
        for (let _0x92e99e = 0x0; _0x92e99e < 0x168; _0x92e99e += do_density / 0xa) {
          const _0x1e9caf = do_l_axis * Math['cos'](_0x92e99e * Math['PI'] / 0xb4);
          const _0x39aeca = do_s_axis * Math['sin'](_0x92e99e * Math['PI'] / 0xb4);
          委身为贾人(0x37, do_pos[0x0] + _0x1e9caf, do_pos[0x1], do_pos[0x2] + _0x39aeca, 0x1);
        }
      }
      if (FakeLag) {
        if (fl_t >= fl_normal + fl_abnormal) {
          fakelag_status = !fl_reverse;
          fl_t = 0x0;
        }
        if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
        if (fl_show) _0x58ec2b['push'](琶声主人忘(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
      }
      if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
        const _0x42fa20 = fb_list['shift']();
        buildBlock(self_id, Math['round'](_0x42fa20['x']), Math['round'](_0x42fa20['y'] - 0x1), Math['round'](_0x42fa20['z']), 0x0);
        fb_t = 0x0;
        if (fb_list['length'] === 0x0) fb_success = true;
      }
      if (TargetHealth && at_lists['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Health', 'Health: ' + 眉信手续续(at_lists[0x0], modes['health_mode']), '§r'));
      if (ShowTargetList && at_lists['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Targets', 相近邀相见(at_lists['map'](_0x1e821f => getEntityName(_0x1e821f))), '§r'));
      if (ShowInfo) {
        const _0x4d6e73 = getEntityAttribute(self_id, 'minecraft:movement');
        const _0x40d3e4 = Math['sqrt'](_0x432855['x'] * _0x432855['x'] + _0x432855['z'] * _0x432855['z']);
        if (show_speed) _0x58ec2b['push'](琶声主人忘(0x1, 'Speed', '水平移动速度: ' + _0x40d3e4['toFixed'](0x2) + 'm/s 移动速度: ' + _0xb1767e['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x1d06ea['toFixed'](0x2) + 'm/s 坐标速度:' + _0x757932['toFixed'](0x2) + 'm/s 能力速度:' + _0x4d6e73['current']['toFixed'](0x2) + ('\n移动值: [' + _0x432855['x']['toFixed'](0x2) + ', ' + _0x432855['y']['toFixed'](0x2) + ', ' + _0x432855['z']['toFixed'](0x2) + ']'), '§r'));
        if (show_pos) _0x58ec2b['push'](琶声主人忘(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0xddc940['x'] + ', Y:' + _0xddc940['y'] + ', Z:' + _0xddc940['z'] + ']', '§r'));
        if (show_item && self_item['count'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Item', self_item['name'] + ' §r§ox' + 二年恬然自(-0x1), '§r'));
        if (show_resources) {
          const _0x54a811 = {
            'gold': 二年恬然自(-0x2, 'minecraft:gold_ingot'),
            'iron': 二年恬然自(-0x2, 'minecraft:iron_ingot'),
            'diamond': 二年恬然自(-0x2, 'minecraft:diamond'),
            'emerald': 二年恬然自(-0x2, 'minecraft:emerald'),
            'star': 二年恬然自(-0x2, 'minecraft:nether_star')
          };
          const _0x3f83bf = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
          _0x58ec2b['push'](琶声主人忘(0x1, 'Resource', '绿宝石:' + _0x54a811['emerald'] + ', 钻石:' + _0x54a811['diamond'] + ', 金锭:' + _0x54a811['gold'] + ', 铁锭:' + _0x54a811['iron'] + '\n下界之心:' + _0x54a811['star'] + ', 经验:' + _0x3f83bf, '§r'));
        }
        if (show_target_dis && at_lists['length'] > 0x0) _0x58ec2b['push'](琶声主人忘(0x1, 'Distance', '三维距离: ' + 归客不发寻(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
        if (show_player_list) _0x58ec2b['push'](琶声主人忘(0x1, 'PlayerList', '世界玩家: ' + _0x47c7cb['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
        if (show_kill_num) _0x58ec2b['push'](琶声主人忘(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
        if (show_time) _0x58ec2b['push'](琶声主人忘(0x1, 'Time', 'Time: ' + 酒欲饮无管(seconds) + ', Ticks: ' + ticks, '§r'));
        if (show_attack_rate) _0x58ec2b['push'](琶声主人忘(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
        if (show_real_aps) _0x58ec2b['push'](琶声主人忘(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
        if (show_ping) _0x58ec2b['push'](琶声主人忘(0x1, 'PING', gd_ping + 'ms', '§r'));
        if (show_self_health) _0x58ec2b['push'](琶声主人忘(0x1, 'Health', '当前血量: ' + _0x1572d6['current'] + ', 最大值:' + _0x1572d6['max'] + ', 最小值:' + _0x1572d6['min'], '§r'));
        if (show_detail_item) _0x58ec2b['push'](琶声主人忘(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
        if (show_real_time) {
          const _0x20efff = new Date();
          const _0xea083e = _0x20efff['getFullYear']();
          const _0x537cc4 = ('0' + (_0x20efff['getMonth']() + 0x1))['slice'](-0x2);
          const _0x9a4550 = ('0' + _0x20efff['getDate']())['slice'](-0x2);
          const _0xc0b0fd = ('0' + _0x20efff['getHours']())['slice'](-0x2);
          const _0x4526f2 = ('0' + _0x20efff['getMinutes']())['slice'](-0x2);
          const _0x5911c7 = ('0' + _0x20efff['getSeconds']())['slice'](-0x2);
          const _0x4ffa2c = _0xea083e + '-' + _0x537cc4 + '-' + _0x9a4550 + ' ' + _0xc0b0fd + ':' + _0x4526f2 + ':' + _0x5911c7;
          _0x58ec2b['push'](琶声主人忘(0x1, 'RealTime', _0x4ffa2c, '§r'));
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
        let _0xd501d9 = _0xdede92['yaw'];
        _0xd501d9 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
        if (_0xd501d9 >= 0xb4) _0xd501d9 -= 0x168;
        if (_0xd501d9 <= -0xb4) _0xd501d9 += 0x168;
        let _0x341b82 = (_0xa2db06 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x48ba95 = (_0xa2db06 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x361a03 = {};
        if (rc_surround && at_lists['length'] > 0x0 && 归客不发寻(self_id, at_lists[0x0]) <= rc_lock) {
          let _0x1271ad = 曲调先有情(self_id, at_lists[0x0], 'yaw_pos');
          let _0x46947f = 曲调先有情(self_id, at_lists[0x0], 'yaw_rot');
          let _0x4b6837 = _0x46947f > -0x5a || _0x46947f < 0x5a ? rc_speed : -rc_speed;
          let _0xb8505f = _0xd501d9 > -0x5a || _0xd501d9 < 0x5a ? rc_speed : -rc_speed;
          let _0x3396fe = rc_relative ? _0x4b6837 : _0xb8505f;
          Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x1271ad -= _0x3396fe * 0x5 : _0x1271ad += _0x3396fe * 0x5;
          if (_0x1271ad > 0xb4) _0x1271ad -= 0x168;
          if (_0x1271ad < -0xb4) _0x1271ad += 0x168;
          let _0x55eddb = 茫茫江浸月(rc_dist, getPos(at_lists[0x0]), {
            'yaw': _0x1271ad,
            'pitch': 0x0
          });
          let _0x343800 = 曲调先有情(_0x55eddb, self_id, 'yaw_pos');
          _0x361a03 = 茫茫江浸月(rc_legal ? modes['rc_mode'] === 0x0 ? _0x341b82 : _0x48ba95 : rc_speed / 0x8, self_pos, {
            'yaw': _0x343800,
            'pitch': 0x0
          });
        } else _0x361a03 = 茫茫江浸月(rc_legal ? modes['rc_mode'] === 0x0 ? _0x341b82 : _0x48ba95 : rc_speed / 0x8, self_pos, {
          'yaw': _0xd501d9,
          'pitch': 0x0
        });
        Camera_anchor_pos = {
          'x': Camera_anchor_pos['x'] + (_0x361a03['x'] - self_pos['x']),
          'y': Camera_anchor_pos['y'],
          'z': Camera_anchor_pos['z'] + (-_0x361a03['z'] + self_pos['z'])
        };
        if (rc_follow && modes['rocker_mode'] < 0x3) {
          if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 女尝学琵琶(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0xd501d9 + sca_yaw);else 女尝学琵琶(_0xdede92['pitch'], _0xd501d9 - 0xb4);
        }
        if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
        if (modes['rocker_mode'] === 0x3) {
          if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
            _0x361a03 = 茫茫江浸月(rc_speed / 0x8, self_pos, _0xdede92);
            setMotion(_0x361a03['x'] - self_pos['x'], _0x361a03['y'] - self_pos['y'], _0x361a03['z'] - self_pos['z']);
          } else {
            const _0x3142aa = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
            const _0x4b978e = getCameraRotation();
            rc_roll += (_0x3142aa ? 0x1 : -0x1) * 枫叶荻花秋(self_id) / 0x5;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (modes['rocker_mode'] === 0x0) setMotion(_0x361a03['x'] - self_pos['x'], rc_bhop && _0xa2db06 || rc_ahop && _0x432855['y'] < -0.4 ? rc_y : _0x432855['y'], _0x361a03['z'] - self_pos['z']);
        if (modes['rocker_mode'] === 0x1) setPos(_0x361a03['x'], self_pos['y'], _0x361a03['z']);
        if (rc_directions['direction'] === 0x0) rc_angles = {};
      }
      if (typeof rc_uds['operation'] !== 'undefined') {
        const _0x312cc8 = getEntityMotion(self_id);
        const _0x28c3e1 = getCameraRotation();
        if (rc_uds['operation'] === 'up') {
          Camera_anchor_pos['y'] += rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x312cc8['x'], rc_y, _0x312cc8['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw -= Math['sin'](_0x28c3e1['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch += Math['cos'](_0x28c3e1['roll'] * Math['PI'] / 0xb4) * 0x2;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (rc_uds['operation'] === 'down') {
          Camera_anchor_pos['y'] -= rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x312cc8['x'], -rc_y, _0x312cc8['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw += Math['sin'](_0x28c3e1['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch -= Math['cos'](_0x28c3e1['roll'] * Math['PI'] / 0xb4) * 0x2;
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
        _0x58ec2b['push'](琶声主人忘(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
        if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
          callModule(0x1e, JSON['stringify']({
            'value': false
          }));
          BalanceTimer_st = false;
        }
        if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
      }
      if (ModifyTime) {
        if (mt_speed != 0x14) {
          let _0x5da455 = ticks * mt_speed / 0x14 % 0x5dc0;
          setWorldData({
            'time': _0x5da455
          });
        } else if (mt_custom === 0x19) {
          let _0x7da224 = 0x0;
          if (modes['mt_time'] === 0x0) _0x7da224 = 0x3e8;
          if (modes['mt_time'] === 0x1) _0x7da224 = 0x32c8;
          if (modes['mt_time'] === 0x2) _0x7da224 = 0x1770;
          if (modes['mt_time'] === 0x3) _0x7da224 = 0x30d4;
          setWorldData({
            'time': _0x7da224
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
        京都声问其(ex, ey, ez, bk_auth, bk_action);
        if (bk_timer > bk_last) bk_pos = null;
        bk_timer++;
      }
      if (FakeTip) {
        switch (modes['fakeTip_mode']) {
          case 0x0:
            showTipMessage('§bProtoHax §r| ' + _0x757932['toFixed'](0x2) + ' §eBlocks/sec');
            break;
          case 0x1:
            if (tip_t1 > 0xc8) {
              curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x283988, _0x33e204) => globalThis['current_poem'] = JSON['parse'](_0x33e204)['content']);
              tip_t1 = 0x0;
            }
            showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
            break;
          case 0x5:
            showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x757932['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
        callModule(0x1e, JSON['stringify']({
          'value': true,
          'speed': sm_speed / 0xa
        }));
        setTimeout(() => {
          callModule(0x1e, JSON['stringify']({
            'value': true,
            'speed': 0x14
          }));
          sm_status = false;
        }, sm_circulate_last_tick * 0x32);
      }
      if (mine_list['length'] > 0x0 && mine_destroy) {
        for (let _0x1cb8e0 = 0x0; _0x1cb8e0 < mine_speed; _0x1cb8e0++) {
          let _0x5d43f7 = mine_list['shift']();
          if (typeof _0x5d43f7 != 'object' || _0x5d43f7['length'] === 0x0) continue;
          const _0x4e0f0a = getBlock(_0x5d43f7[0x0], _0x5d43f7[0x1], _0x5d43f7[0x2]);
          if (_0x4e0f0a['namespace'] != 'minecraft:air' && _0x4e0f0a['namespace'] === mine_name) {
            destroyBlock(self_id, _0x5d43f7[0x0], _0x5d43f7[0x1], _0x5d43f7[0x2], 0x0);
            mine_current++;
          }
        }
        _0x58ec2b['push'](琶声主人忘(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
      }
      if (AirStuck && as_time_t < as_time && !_0xa2db06) setMotion(0x0, 0x0, 0x0);
      if (_0x58ec2b['length'] > 0x0 && !FakeTip) {
        if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x58ec2b['join']('\n'));
        if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x58ec2b['join']('\n'));
        if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x58ec2b['join'](' | '));
      }
      if (TargetHud && modes['th_select_mode'] == 0x1) th_tick++;
      if (modes['tipType_mode'] >= 0x1) {
        updateTextPosition(tip_id, nx_screen['screenWidth'] * tip_x_offset / 0x64, nx_screen['screenHeight'] * tip_y_offset / 0x64);
        updateTextColor(tip_id, tip_r / 0x64, tip_g / 0x64, tip_b / 0x64, tip_a / 0x64);
        updateTextScale(tip_id, tip_size);
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
      if (ChestStealer && ticks % cs_tick === 0x0) cs_current = 0x0;
      if (ChestStealer && cs_close && cs_current === 0x0 && cs_timer === cs_delay + 0x1) deleteContainer();
      if (ChestStealer && cs_timer > cs_tick) cs_sort = 0x0;
      if (ChestStealer) cs_timer++;
      if (HotbarSelector) select_t++;
      if (rpc_cycle) rpc_t++;
      if (InfiniteAura) ia_delay_r++;
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
      if (at_tick > at_max_time) {
        at_tick = 0x0;
        at_current = 0x0;
      }
      if (AntiText) at_tick++;
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
      prev_heal = _0x1572d6['current'];
      prev_ground = _0xa2db06;
      prev_itemCount = self_itemCount;
    } catch (_0x12a427) {
      clientMessage(_0x12a427['stack']);
    }
    addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
  }
  setInterval(() => {
    if (bn_list['length'] > 0x0) {
      for (let _0xc4d4ec = bn_list['length'] - 0x1; _0xc4d4ec >= 0x0; _0xc4d4ec--) {
        let _0x4791b5 = bn_list[_0xc4d4ec];
        _0x4791b5['x'] -= _0x4791b5['speed'];
        if (_0x4791b5['x'] < 0x0) {
          bn_list['splice'](_0xc4d4ec, 0x1);
          removeText(_0x4791b5['id']);
        } else updateTextPosition(_0x4791b5['id'], _0x4791b5['x'], _0x4791b5['y']);
      }
    }
    if (Derp) {
      var _0x43757a = getEntityRot(self_id);
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
      dp_pitch -= dp_random ? 瑟瑟主人下(-0xa, 0xa) : dp_headSpeed * 0x2;
      dp_yaw += dp_random ? 瑟瑟主人下(-0xa, 0xa) : dp_bodySpeed * 0x2;
      if (dp_pitch < -0x5a) dp_pitch = 0x5a;
      if (dp_yaw > 0xb4) dp_yaw = dp_yaw - 0x168;
      if (!dp_head) dp_pitch = _0x43757a['pitch'];
      if (!dp_body) dp_yaw = _0x43757a['yaw'];
      if (dp_lock) dp_pitch = 0x5a;
    }
    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
      const _0x495f74 = getCameraRotation();
      const _0x3cd718 = 马客在船举(getEntityMotion(self_id), getPos(self_id), 0x5);
      const _0x1d8fa0 = sca_move ? 曲调先有情(_0x3cd718, self_id, 'yaw_pos') : _0x495f74['yaw'] > 0x0 ? 0xb4 - _0x495f74['yaw'] : -0xb4 - _0x495f74['yaw'];
      女尝学琵琶(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x1d8fa0 + sca_yaw);
    }
    if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
      let _0x5834c9 = 曲调先有情(self_id, at_lists[0x0], 'pitch_pos');
      let _0x39fc58 = 曲调先有情(self_id, at_lists[0x0], 'yaw_pos');
      女尝学琵琶(_0x5834c9, _0x39fc58);
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
  function onExecuteCommandEvent(_0x13d9ff) {
    if (ActivitySender) sendChatMessage('我正在执行命令');
    if (ShowCommand) 琶声主人忘(0x0, 'ExecuteCMD', _0x13d9ff, '§r');
    const _0x3311ff = _0x13d9ff['split'](' ');
    if (_0x3311ff[0x0] === '/set' && _0x3311ff[0x1] === 'pos') {
      nx_goal = {
        'x': Number(_0x3311ff[0x2]),
        'y': Number(_0x3311ff[0x3]),
        'z': Number(_0x3311ff[0x4])
      };
      if (_0x3311ff[0x5]) nx_goalSpeed = Number(_0x3311ff[0x5]);
      琶声主人忘(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
      return true;
    }
    if (_0x3311ff[0x0] === '/set' && _0x3311ff[0x1] === 'default' && _0x3311ff[0x2] === 'config') {
      if (_0x3311ff[0x3] === 'clear') {
        琶声主人忘(0x0, 'Tip', '已清除默认配置', '§r');
        setData('nx_defaultCfg', 'null');
        return true;
      }
      if (唤始出来犹(nx_cfgs + '/' + _0x3311ff[0x3] + '.json') != '{}') {
        setData('nx_defaultCfg', _0x3311ff[0x3]);
        琶声主人忘(0x0, 'Tip', '已设置默认配置 - ' + _0x3311ff[0x3], '§r');
      } else 琶声主人忘(0x0, 'Tip', '文件为空或不存在 - ' + _0x3311ff[0x3], '§r');
      return true;
    }
    if (_0x3311ff[0x0] === '/target') {
      if (_0x3311ff[0x1] === 'self') at_lists[0x0] = self_id;
      if (_0x3311ff[0x1] === 'player') at_lists = getPlayerList();
      if (_0x3311ff[0x1] === 'all') at_lists = getEntityList();
      琶声主人忘(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
      return true;
    }
    if (_0x3311ff[0x0] === '/cleaner') {
      if (_0x3311ff[0x1] === 'reload') clear_config = JSON['parse'](唤始出来犹(cleaner_path));
      if (_0x3311ff[0x1] === 'load') clear_config = JSON['parse'](唤始出来犹(_0x3311ff[0x2]));
    }
    if (_0x3311ff[0x0] === '/bind') {
      if (_0x3311ff[0x1] === 'RunAway') {
        if (typeof globalThis[_0x3311ff[0x2]] == 'undefined' && typeof nx_funcid[_0x3311ff[0x2]] == 'undefined' || typeof globalThis[_0x3311ff[0x3]] == 'undefined' && typeof nx_funcid[_0x3311ff[0x3]] == 'undefined') {
          琶声主人忘(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
          return true;
        }
        let _0x1fa433 = typeof globalThis[_0x3311ff[0x3]] !== 'undefined';
        nx_raBinds[_0x3311ff[0x2]] = {
          'module': _0x3311ff[0x3],
          'isNX': _0x1fa433
        };
        琶声主人忘(0x0, 'Tip', '绑定 ' + _0x3311ff[0x2] + ' 与 ' + _0x3311ff[0x3] + ' 成功', '§r');
        nx_cfg['nx_raBinds'] = nx_raBinds;
        return true;
      }
      if (_0x3311ff[0x1] === 'key' && typeof globalThis[_0x3311ff[0x2]] !== 'undefined') {
        nx_isBind = _0x3311ff[0x2];
        琶声主人忘(0x0, 'Tip', '按下任意按键与' + _0x3311ff[0x2] + '绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x3311ff[0x1]] === 'undefined') nx_binds[_0x3311ff[0x1]] = [];
      if (typeof globalThis[_0x3311ff[0x2]] !== 'undefined' && typeof globalThis[_0x3311ff[0x1]] !== 'undefined') {
        nx_binds[_0x3311ff[0x1]]['push'](_0x3311ff[0x2]);
        琶声主人忘(0x0, 'Tip', '绑定 ' + _0x3311ff[0x1] + ' 与 ' + _0x3311ff[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 琶声主人忘(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x3311ff[0x0] === '/unbind') {
      if (_0x3311ff[0x1] === 'key' && typeof globalThis[_0x3311ff[0x2]] !== 'undefined') {
        for (let _0x53e3da in nx_keys) {
          if (nx_keys[_0x53e3da] === _0x3311ff[0x2]) {
            delete nx_keys[_0x53e3da];
            break;
          }
        }
        nx_isBind = _0x3311ff[0x2];
        琶声主人忘(0x0, 'Tip', '解除' + _0x3311ff[0x2] + '的按键绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x3311ff[0x1]] === 'undefined') {
        琶声主人忘(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
        return true;
      }
      if (typeof globalThis[_0x3311ff[0x1]] !== 'undefined' && _0x3311ff[0x2] === 'all') {
        delete nx_binds[_0x3311ff[0x1]];
        琶声主人忘(0x0, 'Tip', '解除 ' + _0x3311ff[0x1] + ' 的所有绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (_0x3311ff[0x1] === 'all') {
        nx_binds = {};
        琶声主人忘(0x0, 'Tip', '解除所有功能绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (typeof globalThis[_0x3311ff[0x2]] !== 'undefined' && typeof globalThis[_0x3311ff[0x1]] !== 'undefined') {
        nx_binds[_0x3311ff[0x1]]['splice'](nx_binds[_0x3311ff[0x1]]['indexOf'](_0x3311ff[0x2]), 0x1);
        if (nx_binds[_0x3311ff[0x1]]['length'] === 0x0) delete nx_binds[_0x3311ff[0x1]];
        琶声主人忘(0x0, 'Tip', '解除绑定 ' + _0x3311ff[0x1] + ' 和 ' + _0x3311ff[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 琶声主人忘(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x3311ff[0x0] === '/nx') {
      if (typeof globalThis[_0x3311ff[0x2]] === 'undefined') {
        琶声主人忘(0x0, 'Tip', '变量不存在', '§r');
        return true;
      }
      if (_0x3311ff[0x1] === 'num') globalThis[_0x3311ff[0x2]] = Number(_0x3311ff[0x3]);
      if (_0x3311ff[0x1] === 'bool') globalThis[_0x3311ff[0x2]] = Boolean(_0x3311ff[0x3]);
      if (_0x3311ff[0x1] === 'str') globalThis[_0x3311ff[0x2]] = _0x3311ff[0x3];
      if (_0x3311ff[0x1] === 'arr') globalThis[_0x3311ff[0x2]] = 欲语迟移船(_0x3311ff[0x3]);
      if (_0x3311ff[0x1] === 'obj') globalThis[_0x3311ff[0x2]] = JSON['parse'](_0x3311ff[0x3]);
      琶声主人忘(0x0, 'setValue', globalThis[_0x3311ff[0x2]] + ' => ' + _0x3311ff[0x2], '§r');
      return true;
    }
  }
  function onCommandOutputEvent(_0x5d4049, _0x467ae9, _0x20bef4) {
    if (ShowCommandOutput) 琶声主人忘(0x0, 'Tip', '§e类型:§r' + _0x5d4049 + ' §e结果:§r' + _0x20bef4 + ' §e数据:§r' + JSON['stringify'](_0x467ae9, null, 0x2), '§r');
    if (!_0x20bef4) return true;
  }
  function onCallModuleEvent(_0x37921b) {
    if (ShowUI) 琶声主人忘(0x0, 'UI-Data', JSON['stringify'](_0x37921b, null, 0x4), '§r');
    try {
      if (typeof _0x37921b !== 'undefined' && typeof _0x37921b['fun'] !== 'undefined' && typeof nx_raBinds[_0x37921b['fun']] !== 'undefined') {
        const _0x176b21 = nx_raBinds[_0x37921b['fun']]['module'];
        if (!nx_raBinds[_0x37921b['fun']]['isNX']) callModule(nx_funcid[_0x176b21], JSON['stringify']({
          'value': _0x37921b['value']
        }));else 才年长色衰(_0x176b21, _0x37921b['value']);
      }
      if (ActivitySender) sendChatMessage('我正在调用UI');
      if (PVPDaLao) setTitle('又或是红石大佬');
      if (typeof _0x37921b['name'] === 'undefined') {
        if (Rocker && typeof _0x37921b['angle'] !== 'undefined') rc_angles = _0x37921b;
        if (Rocker && typeof _0x37921b['direction'] !== 'undefined') rc_directions = _0x37921b;
        if (Rocker && typeof _0x37921b['operation'] !== 'undefined') rc_uds = _0x37921b;
        return;
      }
      if (!_0x37921b['name']['includes']('NoveXare') && _0x37921b['fun'] != 'fun_ride_flying') return;
      if (typeof _0x37921b['SauthLogin'] !== 'undefined') {
        Sauths = _0x37921b['SauthLogin'];
        setData('sauths', Sauths);
        showToast('请退出我的世界登录 并重新登录');
      }
      if (typeof _0x37921b['CustomBanTip'] !== 'undefined') bantip = _0x37921b['CustomBanTip'];
      if (typeof _0x37921b['key'] !== 'undefined') {
        const _0x12acee = _0x37921b['key'];
        if (_0x12acee === 'ItemEditor') {
          const _0x4c2d5c = getEntityCarriedItem(self_id);
          const _0x19806a = 左迁九江郡(_0x4c2d5c, 'Damage:', 's');
          const _0x13433b = 左迁九江郡(_0x4c2d5c, '{Damage:', '}', ',');
          if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x4c2d5c['replace']('Damage:' + _0x19806a + 's', 'Damage:' + ie_data + 's'));
          if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x4c2d5c['replace']('{Damage:' + _0x13433b, '{Damage:' + ie_data));
          if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x4c2d5c['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
          if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);else showToast('请长按物品栏丢弃手中物品');
        }
        if (_0x12acee === 'EditBackGround') {
          const _0x1998dc = 'loginVideoNew.mp4';
          const _0x3b5eee = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
          if (!file_exist(getResource() + '/' + _0x1998dc)) {
            showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
            return;
          }
          file_delete(_0x3b5eee + _0x1998dc);
          file_copy(getResource() + '/' + _0x1998dc, _0x3b5eee + _0x1998dc);
          showToast('已复制文件');
        }
        if (_0x12acee === 'BJDTp') {
          let _0x34665a = getPlayerList();
          let _0x20a56a = _0x34665a['length'] > 0x0 ? _0x34665a['map'](_0xc675e4 => ({
            'text': getEntityName(_0xc675e4) + '\n距离: ' + 归客不发寻(self_id, _0xc675e4)['toFixed'](0x2)
          })) : [{
            'text': '没有数据'
          }];
          let _0x3428da = {
            'type': 'form',
            'title': '选择',
            'content': '选择一个目标',
            'buttons': _0x20a56a
          };
          const _0x162995 = JSON['stringify'](_0x3428da);
          addForm(_0x162995, function (_0x4e5c7d) {
            if (_0x34665a['length'] > 0x0 && _0x4e5c7d >= 0x0) {
              var _0x56b415 = _0x34665a[_0x4e5c7d];
              var _0x4bfbe4 = getPos(_0x56b415);
              setPos(_0x4bfbe4['x'], _0x4bfbe4['y'] + 1.8, _0x4bfbe4['z']);
              buildBlock(self_id, _0x4bfbe4['x'], _0x4bfbe4['y'], _0x4bfbe4['z'], 0x1);
            }
          });
        }
        if (_0x12acee === 'exit') {
          琶声主人忘(0x0, 'Tip', 'Exit Script!', '§c');
          if (AutoSaveCfg) {
            琶声主人忘(0x0, 'Tip', '自动保存当前配置', '§r');
            const _0x50c67b = Date['now']();
            File['write'](nx_cfgs + '/自动保存配置 - ' + _0x50c67b + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x50c67b);
          }
          exit();
          gc();
        }
        if (_0x12acee === 'DropInv') {
          for (let _0x5728a9 = 0x0; _0x5728a9 < 0x24; _0x5728a9++) {
            const _0x100a83 = getInventory(self_id, _0x5728a9);
            if (_0x100a83['namespace'] === 'minecraft:air') continue;
            if (_0x100a83['count'] < 0x1) continue;
            dl_list['push'](_0x5728a9);
          }
        }
        if (_0x12acee === 'LookTP') {
          let _0x5e0309 = {};
          for (let _0x1b3a2c = 0x0; _0x1b3a2c < 0x1f4; _0x1b3a2c++) {
            _0x5e0309 = 茫茫江浸月(_0x1b3a2c, getPos(self_id), getEntityRot(self_id));
            const _0x48a7d6 = getBlock(_0x5e0309['x'], _0x5e0309['y'], _0x5e0309['z']);
            if (_0x48a7d6['namespace'] != 'minecraft:air') break;
          }
          if (_0x5e0309 != {}) {
            const _0x22c63d = getPos(self_id);
            if (modes['LookTP_mode'] === 0x0) 湖间予出官(_0x5e0309['x'], _0x5e0309['y'] + 1.53, _0x5e0309['z']);
            if (modes['LookTP_mode'] === 0x1) setPos(_0x5e0309['x'], _0x5e0309['y'] + 1.53, _0x5e0309['z']);
          }
        }
        if (_0x12acee === 'OpenChest') {
          let _0x2d2d08 = {
            'type': 'form',
            'title': '容器列表',
            'content': '请选择需要打开的容器',
            'buttons': [{
              'text': '暂无容器'
            }]
          };
          let _0x2bb981 = [];
          let _0x1dca86 = 0x0;
          let _0x424366 = 抱琵琶半遮(self_id);
          const _0x93f39a = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
          const _0x136170 = 'shulker_box';
          for (let _0xae778 = -0x7; _0xae778 < 0x7; _0xae778++) {
            for (let _0x2ef7e7 = -0x7; _0x2ef7e7 < 0x7; _0x2ef7e7++) {
              for (let _0x5563ef = -0x7; _0x5563ef < 0x7; _0x5563ef++) {
                const _0x1a41ea = _0xae778 + _0x424366['x'];
                const _0xc44f48 = _0x2ef7e7 + _0x424366['y'];
                const _0xb757af = _0x5563ef + _0x424366['z'];
                const _0xfe0906 = getBlock(_0x1a41ea, _0xc44f48, _0xb757af);
                if (_0x93f39a['includes'](_0xfe0906['namespace']) || _0xfe0906['namespace']['includes'](_0x136170)) {
                  const _0xdb9da2 = getBlock(_0x1a41ea, _0xc44f48 + 0x1, _0xb757af);
                  _0x2d2d08['buttons'][_0x1dca86] = {
                    'text': '命名空间: ' + _0xfe0906['namespace'] + '\n坐标:   ' + (_0xdb9da2['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                  };
                  _0x2bb981[_0x1dca86] = {
                    'x': _0x1a41ea,
                    'y': _0xc44f48,
                    'z': _0xb757af
                  };
                  _0x1dca86++;
                }
              }
            }
          }
          if (_0x1dca86 === 0x0) {
            琶声主人忘(0x0, 'Tip', '暂无容器', '§r');
            return;
          }
          addForm(JSON['stringify'](_0x2d2d08), function (_0x3ed59c) {
            var _0x509cd9 = _0x2bb981[_0x3ed59c];
            buildBlock(self_id, _0x509cd9['x'], _0x509cd9['y'], _0x509cd9['z'], 0x1);
            琶声主人忘(0x0, 'Tip', '已打开该容器', '§r');
          });
        }
        if (_0x12acee === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
        if (_0x12acee === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
        if (_0x12acee === 'rpc_repeat') {
          for (let _0x1c45fa = 0x0; _0x1c45fa < rpc_repeat_times; _0x1c45fa++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        }
        if (_0x12acee === 'AttackSelf_one') 琵琶行浔阳(self_id, Swing);
        if (_0x12acee === 'RemoveSelf') removeEntity(self_id);
        if (_0x12acee === 'QuitGame') leaveWorld();
        if (_0x12acee === 'sl_delete') setData('sauths', '');
        if (_0x12acee === 'dc_delete') dc_pos = [];
        if (_0x12acee === 'SearchModule') {
          addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function (_0x3b6938, _0x2947e7, _0x57d0e9, _0x5ee311) {
            var _0x582872 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
            var _0x5eddcd = 0x0;
            var _0x50dc51 = getResource();
            var _0x50b37d = JSON['parse'](File['read'](_0x50dc51 + '/ui/ui_definition.json'))['ui']['map'](_0x2b1e28 => ({
              'name': _0x2b1e28 + '.json',
              'path': _0x50dc51 + '/ui/' + _0x2b1e28 + '.json'
            }));
            for (var _0x1c3fd6 of _0x50b37d) {
              if (!_0x1c3fd6['name']['includes']('NoveXare')) continue;
              var _0xe31dc7 = JSON['parse'](File['read'](_0x1c3fd6['path']));
              if (typeof _0xe31dc7['items'][0x0]['items'] === 'undefined') continue;
              for (var _0x2bb00a of _0xe31dc7['items'][0x0]['items']) {
                if (typeof _0x2bb00a['name'] === 'undefined' || typeof _0x2bb00a['key'] === 'undefined') continue;
                if (_0x57d0e9 && _0x2bb00a['type'] != 'Switch') continue;
                if (_0x5ee311 && _0x2bb00a['type'] == 'Switch') continue;
                if (!_0x2947e7 && (_0x2bb00a['name'] === _0x3b6938 || _0x2bb00a['key'] === _0x3b6938) || _0x2947e7 && (_0x2bb00a['name']['includes'](_0x3b6938) || _0x2bb00a['key']['includes'](_0x3b6938))) {
                  _0x582872['items'][0x0]['items'][_0x5eddcd] = _0x2bb00a;
                  _0x5eddcd++;
                }
              }
            }
            loadMenu('search_' + _0x3b6938, JSON['stringify'](_0x582872));
            showMenu('search_' + _0x3b6938);
          });
        }
        if (_0x12acee === 'sp_clear') sp_posList = [];
        if (_0x12acee === 'sp_add') {
          const {
            x,
            y,
            z
          } = 抱琵琶半遮(self_id);
          addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 相近邀相见([x, y, z]) + '"}]}', function (_0x3cfc29) {
            var _0x101980 = _0x3cfc29['split'](',');
            sp_posList['push']({
              'x': Number(_0x101980[0x0]),
              'y': Number(_0x101980[0x1]),
              'z': Number(_0x101980[0x2])
            });
            琶声主人忘(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
          });
        }
        if (_0x12acee === 'sp_load') {
          const _0x41b795 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
          addForm(_0x41b795, function (_0x2a8b04) {
            var _0x5ee863 = File['read'](_0x2a8b04);
            if (_0x5ee863 != '' && SoundPlayer) {
              sp_data = JSON['parse'](_0x5ee863);
              sp_file = sp_loop ? _0x5ee863 : [];
              琶声主人忘(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
            } else 琶声主人忘(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
          });
        }
        if (_0x12acee === 'sp_select') {
          const _0x5eb4e5 = {
            'type': 'form',
            'title': '音乐文件',
            'content': '选择要加载的音乐',
            'buttons': [{
              'text': '没有文件'
            }]
          };
          const _0x8787b4 = file_list(getResource() + '/sounds/NoveXare');
          _0x8787b4['sort']((_0x36d43d, _0x1bee32) => _0x36d43d['name']['localeCompare'](_0x1bee32['name']));
          for (let _0x377235 = 0x0; _0x377235 < _0x8787b4['length']; _0x377235++) {
            _0x5eb4e5['buttons'][_0x377235] = {
              'text': _0x8787b4[_0x377235]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/sound_glyph_color_2x.png'
              }
            };
          }
          const _0xafb35b = JSON['stringify'](_0x5eb4e5);
          addForm(_0xafb35b, function (_0x8ca1e5) {
            if (_0x8787b4['length'] > 0x0 && _0x8ca1e5 >= 0x0) {
              var _0x3242ae = File['read'](_0x8787b4[_0x8ca1e5]['path']);
              if (_0x3242ae != '' && SoundPlayer) {
                sp_data = JSON['parse'](_0x3242ae);
                sp_file = sp_loop ? _0x3242ae : [];
                琶声主人忘(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
              } else 琶声主人忘(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
            }
          });
        }
        if (_0x12acee === 'save_config') {
          const _0x2da009 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
          addForm(_0x2da009, function (_0x14eb11, _0x390f02) {
            File['write'](nx_cfgs + '/' + _0x14eb11 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            琶声主人忘(0x0, 'Tip', '保存成功', '§r');
            if (_0x390f02) nx_cfg = {
              'binds': {},
              'key_binds': [],
              'nx_raBinds': [],
              'name': getEntityName(self_id)
            };
          });
        }
        if (_0x12acee === 'load_config') {
          const _0x2ba0e9 = {
            'type': 'form',
            'title': '配置文件',
            'content': '选择要加载的配置',
            'buttons': [{
              'text': '§c没有配置'
            }]
          };
          const _0x8e4299 = file_list(nx_cfgs);
          _0x8e4299['sort']((_0x38e19e, _0x4ce70e) => _0x38e19e['name']['localeCompare'](_0x4ce70e['name']));
          for (let _0x14c97e = 0x0; _0x14c97e < _0x8e4299['length']; _0x14c97e++) {
            _0x2ba0e9['buttons'][_0x14c97e] = {
              'text': '§e' + _0x8e4299[_0x14c97e]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/gear.png'
              }
            };
          }
          const _0x53b727 = JSON['stringify'](_0x2ba0e9);
          addForm(_0x53b727, function (_0x35c69e) {
            if (_0x8e4299['length'] > 0x0 && _0x35c69e >= 0x0) {
              var _0x280e9c = JSON['parse'](唤始出来犹(_0x8e4299[_0x35c69e]['path']));
              var _0x59d577 = 0x0;
              nx_binds = _0x280e9c['binds'];
              nx_keys = _0x280e9c['key_binds'];
              nx_raBinds = _0x280e9c['nx_raBinds'];
              for (var _0x638bf9 in _0x280e9c) {
                _0x59d577++;
                if (_0x638bf9['includes']('_mode') && _0x37921b['index'] && _0x37921b['index'] > 0x0) modes[_0x638bf9] = _0x280e9c[_0x638bf9];
                if (_0x638bf9 != 'nx_raBinds' && _0x638bf9 != 'key_binds' && _0x638bf9 != 'binds' && _0x638bf9 != 'name') 才年长色衰(_0x638bf9, _0x280e9c[_0x638bf9]);
              }
              nx_cfg = _0x280e9c;
              琶声主人忘(0x0, 'Tip', '成功加载' + _0x280e9c['name'] + '的配置，共' + _0x59d577 + '条配置', '§r');
            }
          });
        }
        if (_0x12acee === 'rpc_select') {
          const _0x78b1fd = {
            'type': 'form',
            'title': 'PyRpc列表',
            'content': '选择PyRpc',
            'buttons': [{
              'text': '没有PyRpc'
            }]
          };
          let _0x470416 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
          for (let _0x5803cd = 0x0; _0x5803cd < _0x470416['length']; _0x5803cd++) {
            _0x78b1fd['buttons'][_0x5803cd] = {
              'text': (_0x470416[_0x5803cd]['type'] === 'Send' ? '§a' : '§c') + _0x470416[_0x5803cd]['packet_str']
            };
          }
          const _0x37f680 = JSON['stringify'](_0x78b1fd);
          addForm(_0x37f680, function (_0x3c77ae) {
            prev_rpc = {
              'id': _0x470416[_0x3c77ae]['id'],
              'data': _0x470416[_0x3c77ae]['packet_bin']
            };
            琶声主人忘(0x0, 'Tip', '已设置上一条PyRpc', '§r');
          });
        }
        if (_0x12acee === 'cw_range') {
          let _0x16e45b = getPlayerList();
          let _0x23ad71 = 0x0;
          for (let _0x42cfb9 of _0x16e45b) {
            const _0xd62f1f = getPos(_0x42cfb9);
            const _0x4dd03f = getDistance(_0xd62f1f, getPos(self_id));
            if (!at_whileLists['includes'](_0x42cfb9) && _0x4dd03f < cw_size && _0x42cfb9 != self_id) {
              at_whileLists['push'](_0x42cfb9);
              _0x23ad71++;
            }
          }
          琶声主人忘(0x0, 'Tip', '已添加' + _0x23ad71 + '个玩家到白名单', '§r');
        }
        if (_0x12acee === 'KickSelf') for (let _0x38d375 = 0x0; _0x38d375 < 0x3e8; _0x38d375++) 琵琶行浔阳(self_id, Swing);
        if (_0x12acee === 'bc_delete') ac_pos = [];
        if (_0x12acee === 'cm_depart') departCamera();
        if (_0x12acee === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
        if (_0x12acee === 'cm_reset') resetCamera();
        if (_0x12acee === 'cm_lock') lockCamera();
        if (_0x12acee === 'ou_recover') otherId = null;
        if (_0x12acee === 'delete_chest') ca_chest_pos = [];
        if (_0x12acee === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
        if (_0x12acee === 'fm_place') fm_pos = self_pos;
        if (_0x12acee && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x12acee)) 添酒回灯重(_0x12acee, globalThis[_0x12acee]);
        if (_0x12acee === 'cw_add' || _0x12acee === 'ct_add' || _0x12acee === 'ct_add') 惨将别别时(_0x12acee === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
        if (_0x12acee === 'fw_target' || _0x12acee === 'fc_target') 惨将别别时(_0x12acee === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
        if (_0x12acee === 'cm_target') 惨将别别时('cm_target', 0x0);
        if (_0x12acee === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
        if (_0x12acee === 'srp_add') srp_type = Number(srp_type) + 0x1;
        if (_0x12acee === 'cw_remove') at_whileLists = [];
        if (_0x12acee === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
          'targets': at_lists['map'](_0x3118b1 => ({
            'name': getEntityName(_0x3118b1),
            'id': _0x3118b1,
            'namespace': getEntityNamespace(_0x3118b1)
          })),
          'players': getWorldPlayerList(),
          'entities': getEntityList()['map'](_0x10867e => ({
            'name': getEntityName(_0x10867e),
            'id': _0x10867e,
            'namespace': getEntityNamespace(_0x10867e)
          }))
        }));
        if (_0x12acee === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
        if (_0x12acee === 'ImportWorldInfo') setWorldData(JSON['parse'](唤始出来犹(nx_paths + '/WorldInfo.json')));
        if (_0x12acee === 'Rusher') {
          const _0x334212 = getCameraRotation();
          let _0x3d153c = 茫茫江浸月(rush_length / 0x6, getPos(self_id), {
            'yaw': _0x334212['yaw'] > 0x0 ? 0xb4 - _0x334212['yaw'] : -0xb4 - _0x334212['yaw'],
            'pitch': -_0x334212['pitch']
          });
          setMotion(_0x3d153c['x'] - self_pos['x'], _0x3d153c['y'] - self_pos['y'], _0x3d153c['z'] - self_pos['z']);
        }
        return;
      }
      for (let _0x4c2568 in _0x37921b) {
        if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x4c2568)) continue;
        if (typeof _0x37921b['index'] !== 'undefined' && modes[_0x4c2568] !== _0x37921b['index']) {
          modes[_0x4c2568] = _0x37921b['index'] - 0x1;
          nx_cfg[_0x4c2568] = _0x37921b['index'] - 0x1;
          琶声主人忘(0x0, _0x4c2568['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x37921b[_0x4c2568], '§r');
          if (_0x4c2568 === 'tip_mode' && modes['tip_mode'] === 0x1) {
            callModule(0x29, JSON['stringify']({
              'array_list': true,
              'array_offset_x': fst_x / 0x5,
              'array_offset_y': fst_y / 0x5
            }));
            showToast('注: 该功能会影响正常的ArrayList显示');
          }
          return true;
        }
        if (_0x4c2568 === 'Criticals') {
          if (_0x37921b[_0x4c2568]) playerJump();else {
            cc_status = false;
            callModule(0x2c, JSON['stringify']({
              'value': false,
              'no_move_check': true,
              'no_fall_check': true
            }));
          }
        }
        if (_0x4c2568 === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
          'value': _0x37921b[_0x4c2568],
          'count': ka_packet
        }));
        if (_0x4c2568 === 'RandomArrayList' && !_0x37921b[_0x4c2568]) {
          for (let _0xd7d84b = 0x0; _0xd7d84b < ral_num; _0xd7d84b++) addCustomArrayList('RandomArrayList' + _0xd7d84b, '', '', false);
        }
        if (_0x4c2568 === 'Rocker') callModule(0x39, JSON['stringify']({
          'value': modes['rc_mode'] === 0x1 && _0x37921b[_0x4c2568],
          'fov': 0x96
        }));
        if (_0x4c2568 === 'FakeMove') {
          if (_0x37921b[_0x4c2568]) fmo_pos = getPos(self_id);else if (!_0x37921b[_0x4c2568]) 谁琵琶声停(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
          let _0x5d22fb = {
            'enable': !_0x37921b[_0x4c2568],
            'index': 0x13,
            'packet': 'receive'
          };
          callModule(0x7, JSON['stringify']({
            'enable': false,
            'index': 0x13,
            'packet': 'send'
          }));
          谁琵琶声停(self_pos['x'] + 0x3e8, self_pos['y'] + 0x3e8, self_pos['z'] + 0x3e8);
          callModule(0x7, JSON['stringify']({
            'enable': true,
            'index': 0x13,
            'packet': 'send'
          }));
          callModule(0x7, JSON['stringify'](_0x5d22fb));
          setTimeout(() => 谁琵琶声停(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
        }
        if (_0x4c2568 === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
          'value': _0x37921b[_0x4c2568],
          'count': cs_packet
        }));
        if (_0x4c2568 === 'ShowNowTime' && !_0x37921b[_0x4c2568]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
        if (_0x4c2568 === 'RandomFunc') {
          const _0x481b79 = Object['keys'](globalThis);
          let _0x51ecac = [];
          for (let _0x467f25 of _0x481b79) {
            if (typeof globalThis[_0x467f25] === 'boolean') _0x51ecac['push'](_0x467f25);
          }
          const _0x2f8701 = _0x51ecac[瑟瑟主人下(0x0, _0x51ecac['length'] - 0x1)];
          才年长色衰(_0x2f8701, _0x37921b[_0x4c2568]);
        }
        if (_0x4c2568 === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
          'value': _0x37921b[_0x4c2568],
          'count': ia_packet
        }));
        if (_0x4c2568 === 'FlashBack') sb();
        if (_0x4c2568 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x37921b[_0x4c2568]) + '}');
        if (_0x4c2568 === 'PyRpcManager' && rpc_store && !_0x37921b[_0x4c2568]) {
          rpc_temp['forEach'](_0x110f2a => sendRpc(_0x110f2a['id'], _0x110f2a['data']));
          琶声主人忘(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
          rpc_temp = [];
        }
        if (_0x4c2568 === 'HideHud') setBooleanOption(0x14f, {
          'value': _0x37921b[_0x4c2568],
          'defaultValue': false
        });
        if (_0x4c2568 === 'EntityXRay') setBooleanOption(0x149, {
          'value': _0x37921b[_0x4c2568],
          'defaultValue': false
        });
        if (_0x4c2568 === 'ShowChunk') setBooleanOption(0x147, {
          'value': _0x37921b[_0x4c2568],
          'defaultValue': false
        });
        if (_0x4c2568 === 'NoPractice') setBooleanOption(0x14c, {
          'value': _0x37921b[_0x4c2568],
          'defaultValue': false
        });
        if (_0x4c2568 === 'NoWeather') setBooleanOption(0x14e, {
          'value': _0x37921b[_0x4c2568],
          'defaultValue': false
        });
        if (_0x4c2568 === 'FreeCam') {
          let _0x3af627 = {
            'value': _0x37921b[_0x4c2568],
            'noclip': _0x37921b[_0x4c2568],
            'flying': _0x37921b[_0x4c2568]
          };
          callModule(0x1, JSON['stringify'](_0x3af627));
          if (_0x37921b[_0x4c2568]) fc_pos = getPos(self_id);else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
        }
        if (_0x4c2568 === 'FakeMotion' && fm_auto && _0x37921b[_0x4c2568]) fm_pos = getPos(self_id);
        if (_0x4c2568 === 'ShadowBoomer' && _0x37921b[_0x4c2568]) sb_pos = getPos(self_id);
        if (_0x4c2568 === 'AvoidAttack' && _0x37921b[_0x4c2568]) aa_pos = getPos(self_id);else if (_0x4c2568 === 'AvoidAttack' && !_0x37921b[_0x4c2568]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
        if (_0x4c2568 === 'NoClip') {
          let _0x4af14a = {
            'value': _0x37921b[_0x4c2568],
            'noclip': _0x37921b[_0x4c2568],
            'flying': _0x37921b[_0x4c2568]
          };
          if (nc_depart && _0x37921b[_0x4c2568]) departCamera();
          if (nc_depart && !_0x37921b[_0x4c2568]) resetCamera();
          if (nc_bypass) callModule(0x2c, JSON['stringify']({
            'no_move_check': _0x37921b[_0x4c2568],
            'no_fall_check': _0x37921b[_0x4c2568],
            'value': _0x37921b[_0x4c2568]
          }));
          callModule(0x1, JSON['stringify'](_0x4af14a));
          if (nc_blink) nc_pos = getPos(self_id);else nc_pos = {};
        }
        if (_0x4c2568 === 'BalanceTimer') {
          callModule(0x25, JSON['stringify']({
            'value': _0x37921b[_0x4c2568]
          }));
          BalanceTimer_st = !_0x37921b[_0x4c2568];
        }
        if (_0x4c2568 === 'IQBoost') {
          const _0x1073a4 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
          let _0x269a68 = 瑟瑟主人下(0x0, _0x1073a4['length'] - 0x1);
          sendChatMessage('!' + _0x1073a4[_0x269a68]);
        }
        if (_0x4c2568 === 'AutoTarget' && !_0x37921b[_0x4c2568]) at_lists = [];
        if (_0x4c2568 === 'SoundPlayer' && !_0x37921b[_0x4c2568]) sp_data = [];
        if (_0x4c2568 === 'FightBot' && !_0x37921b[_0x4c2568]) {
          if (fb_ka) KillAura = false;
          if (fb_aa) AssistAim = false;
          if (fb_kd) KeepDistance = false;
          if (fb_sca) Scaffold = false;
        }
        if (_0x4c2568 === 'ShowSendPacket' && !_0x37921b[_0x4c2568] && JSON['stringify'](PacketTmp['send']) != '{}') {
          let _0x5c1cda = '';
          for (let _0x17d7fa in PacketTmp['send']) _0x5c1cda += '名称:' + _0x17d7fa + '，ID:' + PacketTmp['send'][_0x17d7fa]['id'] + '，发送数量:' + PacketTmp['send'][_0x17d7fa]['count'] + '\n';
          if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
          琶声主人忘(0x0, 'sendPacket', '\n' + _0x5c1cda, '§r');
          PacketTmp['send'] = {};
        }
        if (_0x4c2568 === 'ShowReceivePacket' && !_0x37921b[_0x4c2568] && JSON['stringify'](PacketTmp['receive']) != '{}') {
          let _0x8032bb = '';
          for (let _0x316f9d in PacketTmp['receive']) _0x8032bb += '名称:' + _0x316f9d + '，ID:' + PacketTmp['receive'][_0x316f9d]['id'] + '，接受数量:' + PacketTmp['receive'][_0x316f9d]['count'] + '\n';
          if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
          琶声主人忘(0x0, 'receivePacket', '\n' + _0x8032bb, '§r');
          PacketTmp['receive'] = {};
        }
        if (_0x4c2568 === 'Scaffold' && sca_keep && _0x37921b[_0x4c2568]) sca_current = 0x0;
        if (_0x4c2568 === 'SmartInv' && _0x37921b[_0x4c2568]) {
          da_slot = 0x23;
          max_damage = 0x0;
          max_armor = [0x0, 0x0, 0x0, 0x0];
        }
        if (_0x4c2568 === 'sp_loop' && !_0x37921b[_0x4c2568]) sp_file = null;
        if (_0x4c2568 === 'NoLiquid' && _0x37921b[_0x4c2568]) {
          nl_water = getEntityAttribute(self_id, 0x2);
          nl_lava = getEntityAttribute(self_id, 0x6);
        } else if (_0x4c2568 === 'NoLiquid' && !_0x37921b[_0x4c2568]) {
          setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
          setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
        }
        if (typeof _0x37921b[_0x4c2568] === 'boolean' || typeof _0x37921b[_0x4c2568] === 'number') {
          if (typeof _0x37921b[_0x4c2568] === 'boolean') {
            才年长色衰(_0x4c2568, _0x37921b[_0x4c2568]);
            return;
          }
          nx_cfg[_0x4c2568] = _0x37921b[_0x4c2568];
          globalThis[_0x4c2568] = _0x37921b[_0x4c2568];
        }
      }
    } catch (_0x208a0c) {
      clientMessage(_0x208a0c['stack']);
    }
  }
  function onPlayerAttackEvent(_0x26cdf7, _0x3a49a4) {
    if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
    if (CameraManager && cm_transfer) cm_attack = _0x3a49a4;
    if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
    if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x3a49a4));
    if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x3a49a4));
    if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x3a49a4));
    if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x3a49a4));
    if (TargetEdit) {
      if (te_target === null) te_target = _0x3a49a4;else {
        if (te_all) getEntityList()['forEach'](_0x1e9546 => {
          if (_0x1e9546 != te_target) 六幺大弦嘈(_0x1e9546, te_target, te_two);
        });else 六幺大弦嘈(_0x3a49a4, te_target, te_two);
        te_target = null;
        琶声主人忘(0x0, 'Tip', '设置完成', '§r');
      }
      return true;
    }
    if (RiderEdit) {
      if (re_cancel) stopRidingEntity(_0x3a49a4);else startRidingEntity(_0x3a49a4);
      琶声主人忘(0x0, 'Tip', '已骑乘目标', '§r');
      return true;
    }
    if (EntityNBTCopy) {
      if (enc_target === null) enc_target = _0x3a49a4;else {
        setEntityNBT(_0x3a49a4, getEntityNBT(te_target));
        enc_target = null;
        琶声主人忘(0x0, 'Tip', '已复制NBT', '§r');
      }
      return true;
    }
    if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x3a49a4));
    if (!attack_list['includes'](_0x3a49a4)) attack_list['push'](_0x3a49a4);
    if (_0x3a49a4 === null || attack_list['every'](_0x3eeee9 => last_attack_target['includes'](_0x3eeee9))) {
      attack_frequency++;
      isAttacking = true;
    } else {
      last_attack_target = _0x3a49a4;
      attack_ticks = 0x0;
      real_attack = 0x0;
      attack_frequency = 0x0;
      click_num = 0x0;
      click_t = 0x0;
    }
    if (PVPDaLao) setTitle('还是PVP大佬');
    if (OtherUser) {
      otherId = _0x3a49a4;
      return true;
    }
    if (CameraManager && cm_editanchor) {
      cm_id = _0x3a49a4;
      琶声主人忘(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x3a49a4), '§r');
      return true;
    }
    if (AttackMessage) sendChatMessage(am_text);
    if (AttackParticle) {
      const _0x4e8193 = getPos(_0x3a49a4);
      const _0x42c2a4 = getEntitySize(_0x3a49a4);
      for (let _0x3ca703 = 0x0; _0x3ca703 < 瑟瑟主人下(ap_count, ap_count + 0x14); _0x3ca703++) 委身为贾人(ap_type, _0x4e8193['x'] + 瑟瑟主人下(-_0x42c2a4['x'] * 瑟瑟主人下(0x7, 0xa), _0x42c2a4['x'] * 瑟瑟主人下(0x7, 0xa)) / 0xa, _0x4e8193['y'] + 瑟瑟主人下(-_0x42c2a4['y'] * 0x9, _0x42c2a4['y'] * 0x2) / 0xa, _0x4e8193['z'] + 瑟瑟主人下(-_0x42c2a4['x'] * 瑟瑟主人下(0x7, 0xa), _0x42c2a4['x'] * 瑟瑟主人下(0x7, 0xa)) / 0xa, 0x1);
    }
    if (AttackSound) {
      悴转徙于江(Number(as_type), Number(as_level));
      if (as_gradually) as_level = Number(as_level) + 0x1;
      if (as_gradually) attack_tick = 0x0;
    }
    if (AttackRender) {
      const _0x11c8a2 = 归客不发寻(self_id, _0x3a49a4);
      callModule(0x4b, JSON['stringify']({
        'value': true,
        'line_width': 0.25,
        'mode': 0x2,
        'distance': _0x11c8a2 * 1.01
      }));
      setTimeout(() => callModule(0x4b, JSON['stringify']({
        'value': false
      })), 0xc8);
    }
    if (RecordInfo && ri_click) {
      let _0x3f9405 = 音铮铮然有(_0x3a49a4);
      琶声主人忘(0x0, 'Info', '\n' + _0x3f9405 + '\n§r§b==============================', '§r');
      if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x3a49a4) + '_' + _0x3a49a4 + '.txt', _0x3f9405);
      return true;
    }
    if (SmartWeapon) {
      let _0x125cbf = [];
      for (let _0x3b4dc8 = 0x0; _0x3b4dc8 < 0x9; _0x3b4dc8++) _0x125cbf['push']({
        'slot': _0x3b4dc8,
        'd': 之凡六百一(self_id, _0x3b4dc8)
      });
      _0x125cbf['sort']((_0x4d45ca, _0x21fea7) => _0x21fea7['d'] - _0x4d45ca['d']);
      let _0x29dc1d = _0x125cbf[0x0];
      if (_0x29dc1d['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x29dc1d['slot']);
    }
    if (ClickTarget) {
      if (!at_lists['includes'](_0x3a49a4)) at_lists['push'](_0x3a49a4);else at_lists['splice'](at_lists['indexOf'](_0x3a49a4), 0x1);
      琶声主人忘(0x0, !at_lists['includes'](_0x3a49a4) ? 'delTarget' : 'addTarget', getEntityName(_0x3a49a4), '§r');
      return true;
    }
    if (CustomKB) {
      const _0xc81551 = getPos(_0x3a49a4);
      const _0x173d2d = 曲调先有情(self_pos, _0xc81551, 'yaw_pos');
      const _0x47e586 = 茫茫江浸月(-ckb_len / 0x2, self_pos, {
        'yaw': _0x173d2d,
        'pitch': 0x0
      });
      setEntityMotion(_0x3a49a4, _0x47e586['x'] - self_pos['x'], ckb_y, _0x47e586['z'] - self_pos['z']);
    }
    if (ClickWhiteList) {
      if (!at_whileLists['includes'](_0x3a49a4)) at_whileLists['push'](_0x3a49a4);else at_whileLists['splice'](at_whileLists['indexOf'](_0x3a49a4), 0x1);
      琶声主人忘(0x0, !at_whileLists['includes'](_0x3a49a4) ? 'delTarget' : 'addTarget', getEntityName(_0x3a49a4), '§r');
      return true;
    }
    if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
      ct_team = 开宴千呼万(getEntityName(_0x3a49a4));
      琶声主人忘(0x0, 'setTeam', ct_team, '§r');
      return true;
    }
    if (TargetHud && modes['th_select_mode'] == 0x1) {
      th_target = _0x3a49a4;
      th_tick = 0x0;
    }
    if (KillAura) return 瑟瑟主人下(0x0, 0x64) < ka_empty;
  }
  function onSendChatMessageEvent(_0x2a6906) {
    if (_0x2a6906 === '') return true;
    if (ReplaceMsg) {
      if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x2a6906);
      if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x2a6906);
      if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x2a6906);
      return true;
    }
    if (ChatManager && cm_fake) {
      executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x2a6906);
      return true;
    }
    if (FakeChat) {
      chatMessage(fc_target, _0x2a6906);
      return true;
    }
    if (FakeWhisper) {
      whisperMessage(fw_target, _0x2a6906);
      return true;
    }
    if (ChatSuffix && !_0x2a6906['includes'](cs_text)) {
      sendChatMessage(_0x2a6906 + cs_text);
      return true;
    }
  }
  function onClientMessageEvent(_0x562c01, _0x5d5eb9) {
    if (ChatManager && (_0x562c01 != getEntityName(self_id) && cm_other || _0x562c01 == getEntityName(self_id) && cm_self) && !isRepeating) {
      isRepeating = true;
      for (let _0x469581 = 0x0; _0x469581 < cm_repeat_times; _0x469581++) sendChatMessage(_0x5d5eb9);
      setTimeout(() => isRepeating = false, 0x64);
    }
    ;
    if (ShowClientMessage) 琶声主人忘(0x0, 'clientMsg', '来源: ' + _0x562c01 + ', 消息:' + _0x5d5eb9, '§r');
    if (ChatManager) return cm_black['some'](_0x3a732c => _0x5d5eb9['includes'](_0x3a732c));
    if (ChatManager && _0x5d5eb9['length'] > cm_length) return;
    if (BulletNotice) {
      let _0x4a087c = Math['round'](瑟瑟主人下(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
      let _0x5db171 = bn_format['replaceAll']('[名字]', _0x562c01)['replaceAll']('[消息]', _0x5d5eb9);
      const _0x456993 = 'abcdef';
      if (bn_format) _0x5db171 = 司马明年秋(_0x5db171);
      if (bn_rainbow) _0x5db171 = '§' + _0x456993[瑟瑟主人下(0x0, _0x456993['length'] - 0x1)] + _0x5db171;
      let _0x39940d = createText(_0x5db171, 'Center', nx_screen['screenWidth'], _0x4a087c);
      if (_0x39940d !== -0x1) bn_list['push']({
        'id': _0x39940d,
        'speed': 瑟瑟主人下(bn_min, bn_max),
        'x': nx_screen['screenWidth'],
        'y': _0x4a087c
      });
      return bn_intercept;
    }
    return ShowClientMessage;
  }
  function onPlayerJumpEvent(_0x4118b5) {
    if (ActivitySender) sendChatMessage('我正在跳跃');
    if (PVPDaLao) setTitle('还是什么都不知道的小白');
    if (LongJump) {
      const _0x1a162d = getEntityMotion(_0x4118b5);
      const _0xa02eba = getCameraRotation();
      const _0x44ec6b = 马客在船举(_0x1a162d, self_pos, 0x14);
      const _0x40885e = 茫茫江浸月(lj_len / 0x4, self_pos, {
        'yaw': _0xa02eba['yaw'] > 0x0 ? 0xb4 - _0xa02eba['yaw'] : -0xb4 - _0xa02eba['yaw'],
        'pitch': 0x0
      });
      setMotion(_0x40885e['x'] - self_pos['x'], lj_y, _0x40885e['z'] - self_pos['z']);
      return true;
    }
  }
  function onPyRpcReceiveEvent(_0x588abc, _0x47e05f) {
    if (PyRpcManager && rpc_rec) {
      const _0xde1582 = new Uint8Array(_0x47e05f);
      const _0x23ef1d = Array['from'](_0xde1582, _0x59e526 => _0x59e526['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x47697c = 元和十年予(_0x47e05f)['toLowerCase']();
      let _0x391bce = false;
      let _0x175cce = rpc_tipWhite['some'](_0x4aca95 => _0x47697c['includes'](_0x4aca95));
      if (!_0x391bce) _0x391bce = rpc_black['some'](_0x52fc97 => _0x47697c['includes'](_0x52fc97));
      if (!_0x391bce) _0x391bce = rpc_recBlack['some'](_0x38ca42 => _0x47697c['includes'](_0x38ca42));
      if (rpc_white['some'](_0x10df9a => _0x47697c['includes'](_0x10df9a))) _0x391bce = false;
      if (rpc_recWhite['some'](_0x42db25 => _0x47697c['includes'](_0x42db25))) _0x391bce = false;
      if (rpc_record && (_0x175cce && rpc_exclude || !_0x175cce)) {
        const _0x117c9b = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x385c60 = JSON['parse'](唤始出来犹(_0x117c9b));
        _0x385c60[_0x385c60['length']] = {
          'packet_hex': _0x23ef1d,
          'packet_format': 初为霓裳后(_0x23ef1d),
          'packet_str': 元和十年予(_0x47e05f),
          'packet_bin': _0xde1582,
          'time': Date['now'](),
          'id': _0x588abc,
          'type': 'Receive',
          'rpc_black': rpc_recBlack,
          'global_keyword': rpc_black,
          'intercept': _0x391bce
        };
        File['write'](_0x117c9b, JSON['stringify'](_0x385c60, null, 0x4));
      }
      let _0xe2f44 = 'Null';
      if (modes['rpc_mode'] === 0x0) _0xe2f44 = 元和十年予(_0x47e05f);
      if (modes['rpc_mode'] === 0x1) _0xe2f44 = _0x23ef1d;
      if (modes['rpc_mode'] === 0x2) _0xe2f44 = 初为霓裳后(_0x23ef1d);
      if (modes['rpc_mode'] === 0x3) _0xe2f44 = JSON['stringify'](_0x47e05f);
      const _0x209c90 = _0x391bce ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
      if (rpc_tip && !_0x175cce && (rpc_showDisintercept && !_0x391bce || rpc_showIntercept && _0x391bce)) 琶声主人忘(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x588abc + '\n' : '') + _0xe2f44 + _0x209c90, '§r');
      return _0x391bce;
    }
  }
  function onPyRpcSendEvent(_0x304c93, _0x3c2b43) {
    if (PyRpcManager && rpc_send) {
      const _0x5c1a55 = new Uint8Array(_0x3c2b43);
      const _0x377388 = Array['from'](_0x5c1a55, _0x5010be => _0x5010be['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x4855b7 = 元和十年予(_0x3c2b43)['toLowerCase']();
      let _0x353fda = false;
      let _0x302fbb = rpc_tipWhite['some'](_0x2011c7 => _0x4855b7['includes'](_0x2011c7));
      if (!_0x353fda) _0x353fda = rpc_black['some'](_0x4f72c5 => _0x4855b7['includes'](_0x4f72c5));
      if (!_0x353fda) _0x353fda = rpc_sendBlack['some'](_0x433f44 => _0x4855b7['includes'](_0x433f44));
      if (rpc_white['some'](_0xa4b8cc => _0x4855b7['includes'](_0xa4b8cc))) _0x353fda = true;
      if (rpc_sendWhite['some'](_0x12b2a2 => _0x4855b7['includes'](_0x12b2a2))) _0x353fda = false;
      if (!_0x302fbb) prev_rpc = {
        'id': _0x304c93,
        'data': _0x5c1a55
      };
      if (rpc_store) rpc_temp['push']({
        'id': _0x304c93,
        'data': _0x5c1a55
      });
      if (rpc_intercept) _0x353fda = true;
      if (rpc_record && (_0x302fbb && rpc_exclude || !_0x302fbb)) {
        const _0x343299 = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x1f1244 = JSON['parse'](唤始出来犹(_0x343299));
        _0x1f1244[_0x1f1244['length']] = {
          'packet_hex': _0x377388,
          'packet_format': 初为霓裳后(_0x377388),
          'packet_str': 元和十年予(_0x3c2b43),
          'packet_bin': _0x5c1a55,
          'time': Date['now'](),
          'id': _0x304c93,
          'type': 'Send',
          'keword': rpc_sendBlack,
          'global_keyword': rpc_black,
          'intercept': _0x353fda
        };
        File['write'](_0x343299, JSON['stringify'](_0x1f1244, null, 0x4));
      }
      let _0x1ad11c = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x1ad11c = 元和十年予(_0x3c2b43);
      if (modes['rpc_mode'] === 0x1) _0x1ad11c = _0x377388;
      if (modes['rpc_mode'] === 0x2) _0x1ad11c = 初为霓裳后(_0x377388);
      if (modes['rpc_mode'] === 0x3) _0x1ad11c = JSON['stringify'](_0x3c2b43);
      for (let _0x3a674b of rpc_config) {
        if (typeof _0x3a674b === 'object') {
          if (_0x3a674b['match_mode'] === 0x0 && _0x1ad11c['includes'](_0x3a674b['packet'])) _0x1ad11c = remarks;
          if (_0x3a674b['match_mode'] === 0x1 && _0x1ad11c['includes'] === _0x3a674b['packet']) _0x1ad11c = remarks;
        } else continue;
      }
      let _0x34ecbf = _0x353fda ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
      if (rpc_tip && !_0x302fbb && (rpc_showDisintercept && !_0x353fda || rpc_showIntercept && _0x353fda)) 琶声主人忘(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x304c93 + '\n' : '') + _0x1ad11c + _0x34ecbf, '§r');
      return _0x353fda;
    }
  }
  function onEntityBehaviorEvent(_0x4f41db, _0xb0cbb2, _0x2686f0) {
    if (ShowEntityAnime) 琶声主人忘(0x0, 'EntityBehavior', '实体ID:' + _0x4f41db + ' 实体昵称:' + getEntityName(_0x4f41db) + ' 行为ID:' + _0xb0cbb2 + ' 行为数据:' + _0x2686f0, '§r');
    if (_0xb0cbb2 === 0x27 && _0x4f41db === av_id) av_id = null;
    if (_0xb0cbb2 === 0x3 && attack_list['includes'](_0x4f41db)) {
      if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
      if (KillMessage) {
        if (km_hide) {
          for (let _0x4c0dcb = 0x0; _0x4c0dcb < 0x32; _0x4c0dcb++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x4f41db) + ' 死了');
          executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
        } else sendChatMessage(km_text);
      }
      琶声主人忘(0x0, 'Kill', 'You Kill ' + getEntityName(_0x4f41db), '§r');
      if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
      kills++;
      mini_tick = 0x0;
      if (FunnyKill && mini_kills < 0xa) mini_kills++;
      setTimeout(() => {
        if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
        if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
      }, mini_delay * 0x3e8);
    }
    if (_0xb0cbb2 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x4f41db);
    if (_0xb0cbb2 === 0x2 && attack_list['includes'](_0x4f41db)) real_attack++;
    if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0xb0cbb2 === 0x4 && _0x4f41db != self_id)) {
      let _0x1967a6 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x4f41db;
      if (归客不发寻(_0x1967a6, self_id) < fb_range) 琵琶行浔阳(_0x4f41db, Swing);
      fb_ishurt = false;
    }
    if (_0xb0cbb2 === 0x2 && _0x4f41db === self_id) {
      let _0x728722 = getEntityMotion(self_id);
      if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
      if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
      if (ActivitySender) sendChatMessage('我正在被攻击');
      if (ShowHurt) 琶声主人忘(0x0, 'Hurt', '受伤类型: ' + _0x2686f0, '§r');
      if (HurtJump) setMotion(_0x728722['x'], hj_height, _0x728722['z']);
      if (AntiKB) {
        let _0xe84c1b = akb_hor / 0x64;
        let _0x55b6ea = akb_y / 0x64;
        setMotion(_0x728722['x'] - _0xe84c1b * _0x728722['x'], _0x728722['y'] - _0x55b6ea * _0x728722['y'], _0x728722['z'] - _0xe84c1b * _0x728722['z']);
      }
      if (AirStuck) as_time_t = 0x0;
      if (FightBack && _0x2686f0 == 0x2) fb_ishurt = true;
      if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
    }
    if (_0xb0cbb2 === 0x2) attack_list = [];
  }
  function onPlayerDestroyBlockEvent(_0x2290a1, _0x50bd1b, _0x56212c, _0x2d42c2, _0xc0432d) {
    const _0x30c4d8 = getCarried(_0x2290a1);
    const _0x903aae = getBlock(_0x50bd1b, _0x56212c, _0x2d42c2);
    if (_0x903aae['namespace'] == 'minecraft:air') return;
    if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
    if (ShowDestroyBlock) 琶声主人忘(0x0, 'destroy', '命名空间:' + _0x903aae['namespace'] + ', §rID:' + _0x903aae['id'] + ', 方块选择面:' + _0xc0432d + ', §r特殊值:' + _0x903aae['aux'] + '\n手持:' + _0x30c4d8['name'] + '-[' + _0x30c4d8['namespace'] + '], 特殊值:' + _0x30c4d8['aux'] + '\n坐标:[' + _0x50bd1b + ', ' + _0x56212c + ', ' + _0x2d42c2 + ']', '§r');
    if (ActivitySender) sendChatMessage('我正在破坏' + _0x50bd1b + ' ' + _0x56212c + ' ' + _0x2d42c2 + '的' + _0x903aae['namespace']);
    if (Miner && (_0x903aae['namespace'] === mine_name || !mine_destroy)) {
      if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x39f351 => _0x903aae['namespace']['includes'](_0x39f351))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x3b2922 => !_0x903aae['namespace']['includes'](_0x3b2922)))) {
        mine_destroy = true;
        mine_name = _0x903aae['namespace'];
      }
      if (mine_destroy && mine_name != _0x903aae['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x903aae['namespace'];
      if (getDistance(self_pos, {
        'x': _0x50bd1b,
        'y': _0x56212c,
        'z': _0x2d42c2
      }) <= mine_distance && mine_destroy) {
        let _0x37610d = [[_0x50bd1b + 0x1, _0x56212c, _0x2d42c2], [_0x50bd1b - 0x1, _0x56212c, _0x2d42c2], [_0x50bd1b, _0x56212c, _0x2d42c2 + 0x1], [_0x50bd1b, _0x56212c, _0x2d42c2 - 0x1], [_0x50bd1b, _0x56212c + 0x1, _0x2d42c2], [_0x50bd1b, _0x56212c - 0x1, _0x2d42c2]];
        for (p of _0x37610d) {
          const _0x10cb79 = getBlock(p[0x0], p[0x1], p[0x2]);
          if (_0x10cb79['namespace'] != 'minecraft:air' && _0x903aae['namespace'] === mine_name) mine_list['push'](p);
        }
      }
    }
  }
  function onReadyEvent() {
    if (ShowGameInfo) {
      const _0x468838 = getWorldData();
      if (ShowGameInfo) 琶声主人忘(0x0, 'Tip', '进入世界 ' + _0x468838['levelName'] + ' ，难度:' + _0x468838['difficulty'] + ' 游戏模式:' + _0x468838['gameType'] + ' 游戏时间:' + _0x468838['time'] + ' 随机刻速度:' + _0x468838['randomTickSpeed'], '§r');
    }
  }
  function onPlayerBuildBlockEvent(_0x4e9ff9, _0x140981, _0x550c4c, _0x9dbca8, _0x194b1d) {
    if (PVPDaLao) setTitle('又或是建筑大佬');
    if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
    const _0x4e5a56 = getCarried(_0x4e9ff9);
    const _0x15dc20 = getBlock(_0x140981, _0x550c4c, _0x9dbca8);
    if (ActivitySender) sendChatMessage('我正在放置' + _0x4e5a56['name']);
    if (ShowClickBlock) 琶声主人忘(0x0, 'build', '命名空间:' + _0x15dc20['namespace'] + ', §rID:' + _0x15dc20['id'] + ', 方块选择面:' + _0x194b1d + ', §r特殊值:' + _0x15dc20['aux'] + '\n手持:' + _0x4e5a56['name'] + '-[' + _0x4e5a56['namespace'] + '], 特殊值:' + _0x4e5a56['aux'] + '\n坐标:[' + _0x140981 + ', ' + _0x550c4c + ', ' + _0x9dbca8 + ']', '§r');
    if (ClickTP) 谁琵琶声停(_0x140981, _0x550c4c + 0x2, _0x9dbca8);
    const _0x25c41b = ChestAura && ca_rot && _0x15dc20['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x4e9ff9) || ClickRot;
    if (_0x25c41b) {
      let _0x6f7e00 = {
        'x': _0x140981,
        'y': _0x550c4c,
        'z': _0x9dbca8
      };
      const _0x39c20a = 马客在船举(getEntityMotion(_0x4e9ff9), getPos(_0x4e9ff9), 0x14);
      let _0x2af49a = 曲调先有情(_0x39c20a, _0x6f7e00, 'pitch_pos');
      let _0x52b0a8 = 曲调先有情(_0x39c20a, _0x6f7e00, 'yaw_pos');
      女尝学琵琶(_0x2af49a, _0x52b0a8);
    }
    if (GetCommand && _0x15dc20['namespace']['includes']('command_block')) {
      let _0x573e24 = getBlockEntityNBT(_0x140981, _0x550c4c, _0x9dbca8);
      let _0xdcae0 = 十六言命曰(_0x573e24, 'Command:"', '",Cu');
      let _0x202070 = 十六言命曰(_0x573e24, 'auto:', 'b,c') === '1' ? '是' : '否';
      let _0x3334d9 = 十六言命曰(_0x573e24, 'TickDelay:', ',Tr');
      琶声主人忘(0x0, 'Cmd', '坐标:[' + _0x140981 + ' ' + _0x550c4c + ' ' + _0x9dbca8 + ']\n指令:' + _0xdcae0 + '\n是否自动:' + _0x202070 + '\n执行延迟:' + _0x3334d9 + 'Tick', '§r');
      return true;
    }
    if (BlockTagCopy) {
      if (btc_pos === null) btc_pos = [_0x140981, _0x550c4c, _0x9dbca8];else {
        setBlockEntityData(_0x140981, _0x550c4c, _0x9dbca8, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
        btc_pos = null;
        琶声主人忘(0x0, 'Tip', '复制标签成功', '§r');
      }
      return true;
    }
    if (FakeBuilder) {
      let _0xb82f8f = [[_0x140981, _0x550c4c - 0x1, _0x9dbca8], [_0x140981, _0x550c4c + 0x1, _0x9dbca8], [_0x140981, _0x550c4c, _0x9dbca8 - 0x1], [_0x140981, _0x550c4c, _0x9dbca8 + 0x1], [_0x140981 - 0x1, _0x550c4c, _0x9dbca8], [_0x140981 + 0x1, _0x550c4c, _0x9dbca8]];
      setBlock(_0xb82f8f[_0x194b1d][0x0], _0xb82f8f[_0x194b1d][0x1], _0xb82f8f[_0x194b1d][0x2], _0x4e5a56['namespace'], _0x4e5a56['aux']);
      return true;
    }
    if (ClickBlock) return setBlock(_0x140981, _0x550c4c, _0x9dbca8, _0x4e5a56['namespace'], _0x4e5a56['aux']);
    if (ClickDestroy && !AutoDestroy) 无限事轻拢({
      'x': _0x140981,
      'y': _0x550c4c,
      'z': _0x9dbca8
    });
    if (AutoBed && _0x15dc20['namespace'] === 'minecraft:bed' && !ab_running) {
      琶声主人忘(0x0, 'Tip', '请手持方块', '§r');
      let _0x485a77 = [[_0x140981 + 0x1, _0x550c4c, _0x9dbca8], [_0x140981 - 0x1, _0x550c4c, _0x9dbca8], [_0x140981, _0x550c4c, _0x9dbca8 + 0x1], [_0x140981, _0x550c4c, _0x9dbca8 - 0x1], [_0x140981, _0x550c4c + 0x1, _0x9dbca8]];
      ab_running = true;
      for (let _0x3aadc8 of _0x485a77) {
        const _0x258378 = getBlock(_0x3aadc8[0x0], _0x3aadc8[0x1], _0x3aadc8[0x2]);
        if (_0x258378['namespace'] === 'minecraft:air') 少小时欢乐(_0x3aadc8[0x0], _0x3aadc8[0x1], _0x3aadc8[0x2]);
      }
      ab_running = false;
    }
    if (Breaker && (_0x4e5a56['namespace']['includes']('_sword') || _0x4e5a56['namespace']['includes']('_pickaxe') || _0x4e5a56['namespace']['includes']('_axe') || _0x4e5a56['namespace']['includes']('shears'))) {
      if (bk_origin) {
        callModule(0xf, JSON['stringify']({
          'value': true
        }));
        setTimeout(() => callModule(0xf, JSON['stringify']({
          'value': false
        })), bk_last * 0x32);
        return true;
      }
      const _0x28bc52 = Math['round'](bk_range);
      _0x86a884: for (let _0x56a460 = -_0x28bc52; _0x56a460 <= _0x28bc52; _0x56a460++) {
        for (let _0x369c3a = -_0x28bc52; _0x369c3a < _0x28bc52; _0x369c3a++) {
          for (let _0x32b839 = -_0x28bc52; _0x32b839 <= _0x28bc52; _0x32b839++) {
            let _0x537bb5 = _0x140981 + _0x56a460;
            let _0x4b496a = _0x550c4c + _0x369c3a;
            let _0xaa0d8b = _0x9dbca8 + _0x32b839;
            let _0x3697e1 = getBlock(_0x537bb5, _0x4b496a, _0xaa0d8b);
            if (bk_bed && _0x3697e1['namespace'] === 'minecraft:bed' || bk_chest && _0x3697e1['namespace'] === 'minecraft:chest') {
              let _0x132f14 = getBlock(_0x537bb5, _0x4b496a + 0x1, _0xaa0d8b);
              if (_0x132f14['namespace'] != 'minecraft:air' && bk_up) _0x4b496a += 0x1;
              if (bk_tool && _0x132f14['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x4e9ff9, 江头夜送客(_0x4e9ff9, '_pickaxe'));
              if (bk_tool && _0x132f14['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x4e9ff9, 江头夜送客(_0x4e9ff9, '_axe'));
              if (bk_tool && _0x132f14['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x4e9ff9, 江头夜送客(_0x4e9ff9, 'shears'));
              bk_pos = {
                'ex': _0x537bb5,
                'ey': _0x4b496a,
                'ez': _0xaa0d8b
              };
              bk_timer = 0x0;
              break _0x86a884;
            }
          }
        }
      }
    }
    if (bc_select && BlockClicker) {
      ac_pos['push']({
        'x': _0x140981,
        'y': _0x550c4c,
        'z': _0x9dbca8
      });
      琶声主人忘(0x0, 'Tip', '已添加[' + _0x140981 + ', ' + _0x550c4c + ', ' + _0x9dbca8 + ']', '§r');
      return true;
    }
    if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
      const _0x4d3e28 = getCameraRotation();
      for (let _0x1317db = 0x0; _0x1317db < fb_len + 0x1; _0x1317db++) fb_list['push'](茫茫江浸月(_0x1317db, 抱琵琶半遮(_0x4e9ff9), {
        'pitch': 0x0,
        'yaw': _0x4d3e28['yaw'] > 0x0 ? 0xb4 - _0x4d3e28['yaw'] : -0xb4 - _0x4d3e28['yaw']
      }));
      fb_success = false;
      return true;
    }
    if (ca_check && _0x15dc20['namespace'] === 'minecraft:chest') chestStates['click'] = true;
  }
  function onKeyboardDownEvent(_0x495ddb) {
    if (ShowPressKey) 琶声主人忘(0x0, 'KeyBoard', '按下键值 ' + _0x495ddb, '§r');
    if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x495ddb] !== 'undefined') 才年长色衰(nx_keys[_0x495ddb], !globalThis[nx_keys[_0x495ddb]]);
    if (nx_isBind != null && _0x495ddb != 0x42) {
      nx_keys[_0x495ddb] = nx_isBind;
      nx_cfg['key_binds'] = nx_keys;
      琶声主人忘(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x495ddb, '§r');
      nx_isBind = null;
    }
  }
  function onKeyboardUpEvent(_0x45ac5e) {
    if (ShowUpliftKey) 琶声主人忘(0x0, 'Tip', '释放键值 ' + _0x45ac5e, '§r');
  }
  function onSendServerPacketEvent(_0x4fc84f, _0x17d225) {
    if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
      if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;else return true;
    }
    if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
    if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x4fc84f === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x1 && _0x4fc84f === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x2 && _0x4fc84f === 0xa1) return true;
    if (FreeCam && modes['fc_mode'] === 0x3 && _0x4fc84f === 0x90) return true;
    if (FreeCam && modes['fc_mode'] === 0x0) return true;
    if (ShowSendPacket) {
      const _0x534cbd = PacketTranslate[PacketTranslate['map'](_0x584e0e => _0x584e0e['id'])['indexOf'](_0x4fc84f)]['text'];
      if (sp_statistic) {
        if (typeof PacketTmp['send'][_0x17d225] === 'undefined') PacketTmp['send'][_0x17d225] = {
          'id': _0x4fc84f,
          'Translate': _0x534cbd,
          'count': 0x1
        };
        PacketTmp['send'][_0x17d225]['count']++;
      }
      const _0x2900af = PacketCfg['send'];
      const {
        ignore,
        intercept
      } = PacketCfg['send'];
      let _0x2f9a3c = [];
      if (sp_id) _0x2f9a3c['push'](_0x4fc84f);
      if (sp_name) _0x2f9a3c['push'](_0x17d225);
      if (sp_trans) _0x2f9a3c['push'](_0x534cbd);
      let _0x1a4cf2 = sp_intercept && (intercept['includes'](_0x4fc84f) || intercept['includes'](_0x17d225));
      if (!sp_ignore || !(ignore['includes'](_0x4fc84f) || ignore['includes'](_0x17d225))) 琶声主人忘(0x0, 'SendPacket', '发送数据包: ' + _0x2f9a3c['join'](' - ') + (_0x1a4cf2 ? '\n§e已拦截数据包' : ''), '§r');
      return _0x1a4cf2;
    }
  }
  function onReceiveServerPacketEvent(_0x9aac47, _0x1f7e44) {
    if (ShadowBoomer && _0x9aac47 == 0x19 && sb_hide) return true;
    if (KillAura && ka_close && _0x9aac47 == 0x55) {
      KillAura = false;
      琶声主人忘(0x0, 'Tip', 'Auto Disable KillAura', '§r');
    }
    if ((TimePause || AvoidAttack) && _0x9aac47 === 0x13) return true;
    if (NoAnyReceive) return true;
    if (AntiText && _0x9aac47 === 0x9) at_current++;
    if ((KickAura || AntiText && at_current > at_max_text) && _0x9aac47 === 0x9) return true;
    if (ModifyTime && _0x9aac47 === 0xa) return true;
    if (ca_check && _0x9aac47 === 0x2f) chestStates['packet'] = true;
    if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x9aac47 === 0x13) return true;
    if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
    if (FreeCam && modes['fc_mode'] === 0x4 && _0x9aac47 === 0x12) return true;
    if (NoCamShake && _0x9aac47 === 0x1b) return true;
    if (ShowReceivePacket) {
      const _0x315ddf = PacketTranslate[PacketTranslate['map'](_0x5d7ceb => _0x5d7ceb['id'])['indexOf'](_0x9aac47)]['text'];
      if (srp_statistic) {
        if (typeof PacketTmp['receive'][_0x1f7e44] === 'undefined') PacketTmp['receive'][_0x1f7e44] = {
          'id': _0x9aac47,
          'Translate': _0x315ddf,
          'count': 0x1
        };
        PacketTmp['receive'][_0x1f7e44]['count']++;
      }
      const _0x233990 = PacketCfg['receive'];
      const {
        ignore,
        intercept
      } = PacketCfg['receive'];
      let _0x2e17bd = [];
      if (srp_id) _0x2e17bd['push'](_0x9aac47);
      if (srp_name) _0x2e17bd['push'](_0x1f7e44);
      if (srp_trans) _0x2e17bd['push'](_0x315ddf);
      let _0xbecc09 = srp_intercept && (intercept['includes'](_0x9aac47) || intercept['includes'](_0x1f7e44));
      if (!srp_ignore || !(ignore['includes'](_0x9aac47) || ignore['includes'](_0x1f7e44))) 琶声主人忘(0x0, 'ReceivePacket', '接收数据包: ' + _0x2e17bd['join'](' - ') + (_0xbecc09 ? '\n§e已拦截数据包' : ''), '§r');
      return _0xbecc09;
    }
    return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x9aac47 === 0x9;
  }
  function onTouchMotionDownEvent(_0x1a490b, _0x3f649a, _0x1e4c96) {
    if (SafeAttack) {
      const _0x49af0b = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x23c46b = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0xba5f31 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      const _0x34764b = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      if (at_lists['length'] > 0x0 && 弦弦掩抑声(self_id, at_lists[0x0], sa_fov, 0x0) && 归客不发寻(self_id, at_lists[0x0]) < sa_range && _0x3f649a > _0x49af0b && _0x3f649a < _0x23c46b && _0x1e4c96 > _0xba5f31 && _0x1e4c96 < _0x34764b) 琵琶行浔阳(at_lists[0x0], Swing);
    }
    if (ClickSwing) swingArm();
    isClicking = true;
    click_num++;
  }
  function onContainerItemMoveEvent(_0x5eb312, _0x5d502d) {
    const _0x51f817 = 琵琶者听其(_0x5d502d);
    if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x51f817['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x51f817['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
    if (ChestStealer && (!cs_sort || _0x5eb312 > cs_sort) && cs_current < cs_maxCount) {
      let _0x5199d9 = cs_black['length'] === 0x0 || cs_black['some'](_0x49fadd => _0x51f817['namespace']['includes'](_0x49fadd));
      if (cs_white['length'] !== 0x0 && cs_white['some'](_0x2d9dc2 => _0x51f817['namespace']['includes'](_0x2d9dc2))) _0x5199d9 = false;
      if (_0x5eb312 < cs_min && _0x5eb312 > cs_max) _0x5199d9 = false;
      if (_0x51f817['attackDamage'] !== 0x0 && _0x51f817['attackDamage'] < cs_min_damage) _0x5199d9 = false;
      if (_0x51f817['damage'] !== 0x0 && _0x51f817['damage'] < cs_min_lasting) _0x5199d9 = false;
      if (!cs_weapon && _0x51f817['attackDamage'] > 0x0 && _0x51f817['damage'] > 0x0) _0x5199d9 = false;
      if (!cs_armor && _0x51f817['attackDamage'] === 0x0 && _0x51f817['damage'] > 0x0) _0x5199d9 = false;
      if (!cs_other && _0x51f817['attackDamage'] === 0x0 && _0x51f817['damage'] === 0x0) _0x5199d9 = false;
      if (cs_sort) cs_sort = _0x5eb312;
      if (_0x5199d9) cs_timer = 0x0;
      if (_0x5199d9) cs_current++;
      return _0x5199d9;
    }
    if (ShowMoveContainer) 琶声主人忘(0x0, 'Container', '§e容器所在格子: §r' + _0x5eb312 + '\n§e物品NBT数据: §r' + _0x5d502d, '§r');
  }
  function onPlayerAuthInputEvent(_0x18b76e) {
    if (PlayerAuthInputPacket) 琶声主人忘(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x18b76e.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x18b76e.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x18b76e['pos']['x']['toFixed'](0x2) + ', ' + _0x18b76e['pos']['y']['toFixed'](0x2) + ',' + _0x18b76e['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x18b76e['delta']['x']['toFixed'](0x2) + ', ' + _0x18b76e['delta']['y']['toFixed'](0x2) + ', ' + _0x18b76e['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x18b76e['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x18b76e['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x18b76e['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x18b76e['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x18b76e['flags']), '§r');
  }
  function onSAuthLoginRequestEvent(_0x4d9f01) {
    if (DumpRequestSauth) {
      File['write'](nx_paths + '/SauthRequest.json', _0x4d9f01);
      showToast('已导出请求体');
    }
    if (Sauths != null && Sauths != '' && !sl_hook) {
      let _0x14f4a6 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
      const _0x54fd92 = _0x4d9f01['replace'](十六言命曰(_0x4d9f01, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x14f4a6)['sauth_json']));
      showToast('已拦截替换Sauth');
      return _0x54fd92['replace'](/转义/g, '\\"');
    }
  }
  function onSAuthLoginResponseEvent(_0x4408e5) {
    if (DumpResponseSauth) {
      File['write'](nx_paths + '/SauthResponse.json', _0x4408e5);
      showToast('已导出响应体');
    }
    if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
  }
  function onSAuthJsonHookEvent(_0x42b532) {
    if (DumpCookieSauth) {
      File['write'](nx_paths + '/SauthCookie.json', _0x42b532);
      showToast('已导出本账号Cookie');
    }
    if (Sauths != null && Sauths != '' && sl_hook) {
      showToast('已拦截替换Sauth');
      let _0x4b838b = JSON['parse'](Sauths);
      if (typeof _0x4b838b['sauth_json'] !== 'undefined') _0x4b838b = _0x4b838b['sauth_json'];
      return _0x4b838b;
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
      if (key != 'nx_raBinds' && key != 'key_binds' && key != 'binds' && key != 'name') 才年长色衰(key, list[key]);
    }
    nx_cfg = list;
    琶声主人忘(0x0, 'Tip', '成功加载' + list['name'] + '的配置，共' + num + '条配置', '§r');
  }
  琶声主人忘(0x0, 'Tip', '§aNoveXare Load Successful!', '§a');
  琶声主人忘(0x0, 'Tip', 'You Are Use ' + nx_ui['name'] + ' To Play NX', '§b');
} catch (e) {
  clientMessage(e.toString());
}