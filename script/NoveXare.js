/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 06 - 20  04：53：10
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e06§b20§f045310§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

  const sendShadow = (_0x3f4cc2, _0x4f7d6d, _0x36ab61) => sendPlayerAction({
    'id': self_id,
    'pos': {
      'x': _0x3f4cc2,
      'y': _0x4f7d6d,
      'z': _0x36ab61
    },
    'type': 0x11
  });
  const getPos = _0x33f11d => {
    let _0x24f3f0 = getEntityPos(_0x33f11d);
    if (_0x24f3f0) _0x24f3f0['y'] += getPos_offset;
    return _0x24f3f0 || {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    };
  };
  const silentMove = (_0x10ef73, _0x404f55, _0x3b4d38) => sendPlayerAuthInput({
    'pos': {
      'x': _0x10ef73,
      'y': _0x404f55,
      'z': _0x3b4d38
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
  const movePlayer = (_0x4ceb1d, _0x557077, _0x80f8c1, _0x5e7395 = true) => sendMovePlayer({
    'id': self_id,
    'pos': {
      'x': _0x4ceb1d,
      'y': _0x557077,
      'z': _0x80f8c1
    },
    'yHeadRot': 0x0,
    'mode': 0x0,
    'rot': {
      'yaw': 0x0,
      'pitch': 0x0
    },
    'ground': _0x5e7395
  });
  function calHexPos(_0x2d8958) {
    function _0x277324(_0x2c915b) {
      if (_0x2c915b['length'] !== 0x10) throw new Error('Hex data must be 16 characters');
      const _0x34df00 = new Uint8Array(0x8);
      for (let _0x3cef17 = 0x0; _0x3cef17 < 0x8; _0x3cef17++) {
        _0x34df00[_0x3cef17] = parseInt(_0x2c915b['substring'](_0x3cef17 * 0x2, _0x3cef17 * 0x2 + 0x2), 0x10);
      }
      const _0x20e13d = new DataView(_0x34df00['buffer']);
      return _0x20e13d['getFloat64'](0x0, false);
    }
    const _0x53ddcd = '76616c7565';
    const _0x5557c9 = _0x2d8958['indexOf'](_0x53ddcd);
    if (_0x5557c9 === -0x1) {
      throw new Error('Value key not found in hex string');
    }
    let _0x5a6eeb = _0x5557c9 + _0x53ddcd['length'];
    const _0x5938dd = _0x2d8958['substring'](_0x5a6eeb, _0x5a6eeb + 0x2);
    if (_0x5938dd !== '93') {
      throw new Error('Expected array tag \'93\' after value key');
    }
    _0x5a6eeb += 0x2;
    const _0x297f91 = [];
    for (let _0xe03ff5 = 0x0; _0xe03ff5 < 0x3; _0xe03ff5++) {
      const _0x3074f4 = _0x2d8958['substring'](_0x5a6eeb, _0x5a6eeb + 0x2);
      if (_0x3074f4 !== 'cb') {
        throw new Error('Expected float64 tag \'cb\' at position ' + _0x5a6eeb + ', found ' + _0x3074f4);
      }
      _0x5a6eeb += 0x2;
      const _0x4b7c81 = _0x2d8958['substring'](_0x5a6eeb, _0x5a6eeb + 0x10);
      _0x5a6eeb += 0x10;
      const _0x30721 = _0x277324(_0x4b7c81);
      _0x297f91['push'](_0x30721);
    }
    return {
      'x': Number(_0x297f91[0x0]['toFixed'](0x2)),
      'y': Number(_0x297f91[0x1]['toFixed'](0x2)),
      'z': Number(_0x297f91[0x2]['toFixed'](0x2))
    };
  }
  const 臣密言臣以 = _0x428545 => {
    let _0x117824 = '';
    for (let _0x54d271 = 0x0; _0x54d271 < _0x428545['length']; _0x54d271++) _0x117824 += _0x428545['charCodeAt'](_0x54d271)['toString'](0x10)['padStart'](0x2, '0');
    return _0x117824;
  };
  const 险衅夙遭闵 = _0x4f42b7 => {
    愍臣孤弱躬(0x5db23ae, '93c401729200c4314d696e6563726166743a7065743a7065745f736b696c6c5f667269656e645f6332735f6765745f667269656e645f706f73c0');
    愍臣孤弱躬(0x5db23ae, '93c40163920082c407706c617965727391c4' + _0x4f42b7['length']['toString'](0x10)['toLowerCase']()['padStart'](0x2, '0') + 臣密言臣以(_0x4f42b7) + 'c40b726571506c617965724964c4' + self_id['length']['toString'](0x10)['toLowerCase']()['padStart'](0x2, '0') + 臣密言臣以(self_id) + 'c0');
  };
  const 凶生孩六月 = _0x4fd588 => {
    const _0x285f87 = new Uint8Array(_0x4fd588);
    let _0x4b217a = '';
    for (let _0x2166fd = 0x0; _0x2166fd < _0x285f87['length'];) {
      let _0x433639 = _0x285f87[_0x2166fd++];
      if (_0x433639 <= 0x7f) _0x4b217a += String['fromCharCode'](_0x433639);else if (_0x433639 >> 0x5 === 0x6) {
        let _0xb9e641 = _0x285f87[_0x2166fd++];
        _0x4b217a += String['fromCharCode']((_0x433639 & 0x1f) << 0x6 | _0xb9e641 & 0x3f);
      } else if (_0x433639 >> 0x4 === 0xe) {
        let _0xe16700 = _0x285f87[_0x2166fd++];
        let _0x351246 = _0x285f87[_0x2166fd++];
        _0x4b217a += String['fromCharCode']((_0x433639 & 0xf) << 0xc | (_0xe16700 & 0x3f) << 0x6 | _0x351246 & 0x3f);
      } else if (_0x433639 >> 0x3 === 0x1e) {
        let _0x57eaf8 = _0x285f87[_0x2166fd++];
        let _0x278343 = _0x285f87[_0x2166fd++];
        let _0x4e56bb = _0x285f87[_0x2166fd++];
        let _0x345704 = (_0x433639 & 0x7) << 0x12 | (_0x57eaf8 & 0x3f) << 0xc | (_0x278343 & 0x3f) << 0x6 | _0x4e56bb & 0x3f;
        _0x4b217a += String['fromCodePoint'](_0x345704);
      }
    }
    return _0x4b217a;
  };
  const 慈父见背行 = (_0x57848c, _0x28ad86, _0x15b95b, _0x8c5771) => {
    let _0xb79898 = _0x57848c['indexOf'](_0x28ad86) + _0x28ad86['length'];
    let _0x1f63e8 = _0x57848c['indexOf'](_0x15b95b, _0xb79898);
    if (typeof _0x8c5771 !== 'undefined' && _0x57848c['indexOf'](_0x8c5771, _0xb79898) < _0x1f63e8 && _0x57848c['indexOf'](_0x8c5771, _0xb79898) != -0x1) _0x1f63e8 = _0x57848c['indexOf'](_0x8c5771, _0xb79898);
    if (_0xb79898 === -0x1 || _0x1f63e8 === -0x1) return null;
    return _0x57848c['substring'](_0xb79898, _0x1f63e8);
  };
  const 年四岁舅夺 = _0x466158 => {
    let _0x126418 = _0x466158['split']('');
    let _0x3c5a4a = '';
    let _0x79a46b = '4c6e2a3b195d'['split']('');
    for (let _0x308c07 in _0x126418) _0x3c5a4a += '§' + _0x79a46b[_0x308c07 % _0x79a46b['length']] + _0x126418[_0x308c07];
    return _0x3c5a4a;
  };
  const 母志祖母刘 = _0x55e468 => {
    if (_0x55e468['startsWith']('0x')) _0x55e468 = _0x55e468['slice'](0x2);
    const _0x3d3104 = [];
    for (let _0x4543c5 = 0x0; _0x4543c5 < _0x55e468['length']; _0x4543c5 += 0x2) {
      const _0x9369b8 = parseInt(_0x55e468['slice'](_0x4543c5, _0x4543c5 + 0x2), 0x10);
      _0x3d3104['push'](_0x9369b8);
    }
    return new Uint8Array(_0x3d3104);
  };
  const 愍臣孤弱躬 = (_0x25d844, _0x1f05d3, _0x39de7e = 0x1) => {
    if (_0x39de7e == 0x1) sendRpc(_0x25d844, 母志祖母刘(_0x1f05d3));
    if (_0x39de7e == 0x2) sendRpc(_0x25d844, _0x1f05d3);
    if (_0x39de7e == 0x3) {
      const _0x47c795 = new Uint8Array(str['length']);
      for (let _0x46e901 = 0x0; _0x46e901 < str['length']; _0x46e901++) _0x47c795[_0x46e901] = str['charCodeAt'](_0x46e901);
      sendRpc(_0x25d844, _0x47c795);
    }
  };
  const 亲抚养臣少 = _0x1c9f20 => {
    if (nx_nbts[_0x1c9f20] !== undefined) return nx_nbts[_0x1c9f20];
    const _0x5c9075 = 慈父见背行(_0x1c9f20, ',Name:"', '",WasPickedUp');
    if (_0x5c9075 === '' || typeof _0x5c9075 !== 'string') return {
      'aux': 0x0,
      'count': 0x0,
      'namespace': 'minecraft:air',
      'enchants': []
    };
    const _0x100e3f = Number(慈父见背行(_0x1c9f20, ',aux:', ','));
    const _0x2761be = Number(慈父见背行(_0x1c9f20, 'Count:', 'b,D'));
    const _0x180dea = _0x1c9f20['includes'](',name:"') ? 慈父见背行(_0x1c9f20, ',name:"', '",') : _0x5c9075['replace']('minecraft:', '');
    const _0x169c10 = _0x1c9f20['includes'](',netId:') ? Number(慈父见背行(_0x1c9f20, ',netId:', '}')) : 0x0;
    const _0x4641a2 = _0x1c9f20['includes']('maxDamage') ? Number(慈父见背行(_0x1c9f20, ',maxDamage:', ',')) : 0x0;
    const _0x8f116a = _0x1c9f20['includes']('attackDamage') ? Number(慈父见背行(_0x1c9f20, 'attackDamage:', ',')) : 0x1;
    const _0x481cd6 = _0x1c9f20['includes']('customColor') ? 慈父见背行(_0x1c9f20, 'customColor:', '}', ',') : '';
    const _0x3f8db1 = _0x1c9f20['includes']('ench:[{') ? ('[{' + 慈父见背行(_0x1c9f20, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
    const _0x43d676 = _0x1c9f20['startsWith']('{Block:');
    const _0x45fa3b = {
      'name': _0x180dea,
      'namespace': _0x5c9075,
      'aux': _0x100e3f,
      'damage': _0x4641a2,
      'attackDamage': _0x8f116a,
      'count': _0x2761be,
      'color': _0x481cd6,
      'isBlock': _0x43d676,
      'id': _0x169c10,
      'enchants': JSON['parse'](_0x3f8db1)
    };
    nx_nbts[_0x1c9f20] = _0x45fa3b;
    return _0x45fa3b;
  };
  const 多疾病九岁 = _0x310e7c => {
    const _0x720679 = getEntitySize(_0x310e7c);
    const _0x1e1543 = getEntityMotion(_0x310e7c);
    const _0xe00db2 = getPos(_0x310e7c);
    const _0x3045aa = getEntityName(_0x310e7c);
    const _0x399a73 = getEntityNamespace(_0x310e7c);
    const _0x33aa0e = 就职诏书切(self_id, _0x310e7c);
    const _0x1d9ad1 = getCarried(_0x310e7c);
    const _0x3dee70 = 无主辞不赴(_0x310e7c);
    const _0x5e0e2b = getEntityAttribute(_0x310e7c, 'minecraft:health');
    const _0x5b4d91 = getEntityAttribute(_0x310e7c, 'minecraft:movement');
    const _0x56566e = getEntityTypeId(_0x310e7c);
    const _0x5c710b = getEntityTarget(_0x310e7c);
    const _0x3c43a9 = getPlayerInventorySize(_0x310e7c);
    const _0x16a123 = getPlayerHotBarSize(_0x310e7c);
    const {
      yaw,
      pitch
    } = getEntityRot(_0x310e7c);
    const _0x1741ba = _0xe56fb7 => _0xe56fb7['toFixed'](0x2);
    const _0x3c5ca = ['唯一ID:' + _0x310e7c + ' 昵称:' + _0x3045aa + '§r 实体命名空间:' + _0x399a73 + ' 水平碰撞箱:' + _0x1741ba(_0x720679['x']) + ' 垂直碰撞箱:' + _0x1741ba(_0x720679['y']) + ' Mot速度:' + _0x3dee70, 'ability速度:[max:' + _0x5b4d91['max'] + ', min:' + _0x5b4d91['min'] + ', current:' + _0x5b4d91['current'] + '] 血量:[max:' + _0x5e0e2b['max'] + ', min:' + _0x5e0e2b['min'] + ', current:' + _0x5e0e2b['current'] + ']', '手持:[id:' + _0x1d9ad1['id'] + ', namespace:' + _0x1d9ad1['namespace'] + ', name:' + _0x1d9ad1['name'] + '§r, aux:' + _0x1d9ad1['aux'] + '] 距离:' + _0x33aa0e + ' 实体类型:' + _0x56566e, '仰俯角:' + _0x1741ba(pitch) + '° 偏航角:' + _0x1741ba(yaw) + '° 仇恨目标:' + getEntityName(_0x5c710b) + '^' + _0x5c710b, '移动值:[' + _0x1741ba(_0x1e1543['x']) + ', ' + _0x1741ba(_0x1e1543['y']) + ', ' + _0x1741ba(_0x1e1543['z']) + '] 坐标值:[' + _0x1741ba(_0xe00db2['x']) + ', ' + _0x1741ba(_0xe00db2['y']) + ', ' + _0x1741ba(_0xe00db2['z']) + ']', '背包容量:' + _0x3c43a9 + ' 物品栏容量:' + _0x16a123];
    return _0x3c5ca['join']('\n');
  };
  const getCarried = _0x21cb5f => 亲抚养臣少(getEntityCarriedItem(_0x21cb5f));
  const getOffhand = _0x14dc9f => 亲抚养臣少(getEntityOffhandItem(_0x14dc9f));
  const getInventory = (_0x35ecc2, _0x3a1ff3) => 亲抚养臣少(getPlayerInventoryItem(_0x35ecc2, _0x3a1ff3));
  const 不行零丁孤 = (_0x4a0ceb, _0x14e3d2, _0xa7f148, _0x23cad7 = false, _0xa6c360 = false) => {
    let _0x39a590 = {
      'x': _0x4a0ceb,
      'y': _0x14e3d2,
      'z': _0xa7f148
    };
    const _0x5e2481 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
    const _0x307b25 = _0x16f72c => sendPlayerAuthInput({
      'pos': self_pos,
      'inputMode': 0x2,
      'playMode': 0x0,
      'flags': [0x23],
      'actions': _0x16f72c['map'](_0x2d195d => ({
        'type': _0x2d195d,
        'pos': _0x39a590,
        'value': 0x1
      }))
    });
    const _0x2a9059 = _0xdd8bf4 => sendPlayerAction({
      'id': self_id,
      'pos': _0x39a590,
      'type': _0xdd8bf4
    });
    if (_0x23cad7) _0x307b25(_0x5e2481);
    if (_0xa6c360) _0x5e2481['forEach'](_0x5d2540 => _0x2a9059(_0x5d2540));
  };
  const 苦至于成立 = (_0x3e3b86, _0x572a04, _0xff73a6 = true, _0x559d88 = false) => {
    if (_0x3e3b86 === _0x572a04 || getScreenName() !== 'inventory_screen') return false;
    let _0xa55388 = getInventory(self_id, _0x3e3b86);
    let _0x5702c1 = getInventory(self_id, _0x572a04);
    if (_0xff73a6 && _0x572a04 < 0x9 && _0x5702c1['namespace'] != 'minecraft:air') {
      for (let _0x5654aa = 0x23; _0x5654aa > 0x8; _0x5654aa--) {
        const _0xb7d368 = getInventory(self_id, _0x5654aa);
        if (_0xb7d368['namespace'] === 'minecraft:air') {
          moveInventoryItem(_0x572a04, _0x5654aa);
          break;
        }
      }
    }
    if (_0x559d88 && _0xa55388['namespace'] === 'minecraft:air' && _0x5702c1['namespace'] !== 'minecraft:air') moveInventoryItem(_0x572a04, _0x3e3b86);
    if (_0xa55388['namespace'] !== 'minecraft:air' && _0x5702c1['namespace'] === 'minecraft:air') moveInventoryItem(_0x3e3b86, _0x572a04);
  };
  const 既无伯叔终 = (_0x810c0d, _0x4f3a7c) => {
    let _0x202fdf = _0x4f3a7c - 0xb4;
    if (_0x810c0d > 0x5a) _0x810c0d -= 0x5a;
    if (_0x810c0d < -0x5a) _0x810c0d += 0x5a;
    if (_0x202fdf > 0xb4) _0x202fdf = _0x202fdf - 0x168;
    if (_0x202fdf < -0xb4) _0x202fdf = 0x168 + _0x202fdf;
    if (getPlayerViewPerspective() === 0x0 || _0x202fdf > 0xb4 || _0x202fdf < -0xb4 || _0x810c0d > 0x5a || _0x810c0d < -0x5a) return false;
    setEntityBodyRot(self_id, _0x202fdf);
    setEntityRot(self_id, _0x810c0d, _0x202fdf);
  };
  const 鲜兄弟门衰 = _0x4c71fb => {
    const _0x54c0d8 = getEntityAttribute(_0x4c71fb, 'minecraft:health');
    const _0x5f1a50 = getPos(_0x4c71fb);
    if (typeof _0x5f1a50 != 'object' || !_0x5f1a50 || !_0x5f1a50['x'] || !_0x5f1a50['y'] || !_0x5f1a50['z']) return false;
    if (!findEntity(_0x4c71fb) && (_0x54c0d8['max'] === undefined || _0x54c0d8['min'] === undefined || _0x54c0d8['current'] === undefined)) return false;
    if (_0x54c0d8['current'] > 0x0) return true;
  };
  const 祚薄晚有儿 = (_0x4247a0, _0x59d4d4) => {
    if (typeof globalThis[_0x4247a0] === 'undefined' || globalThis[_0x4247a0] === _0x59d4d4) return;
    globalThis[_0x4247a0] = _0x59d4d4;
    nx_cfg[_0x4247a0] = _0x59d4d4;
    if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch.mp3', 0x64, 0x64);
    if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch_' + (_0x59d4d4 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
    if (FuncSwitchTip && (!FuncMessage || !_0x4247a0['includes']('_'))) {
      if (modes['tip_mode'] === 0x0) {
        if (_0x59d4d4) 以表闻辞不(0x0, _0x4247a0, '§oEnable ◆', '§a');else 以表闻辞不(0x0, _0x4247a0, '§oDisable ◇', '§c');
      }
      if (modes['tip_mode'] === 0x1) {
        addCustomArrayList(_0x4247a0, _0x4247a0 + (_0x59d4d4 ? ' - Enable' : ' - Disable'), _0x4247a0 + (_0x59d4d4 ? ' - Enable' : ' - Disable'), true);
        setTimeout(() => addCustomArrayList(_0x4247a0, _0x4247a0 + (_0x59d4d4 ? ' - Enable' : ' - Disable'), _0x4247a0 + (_0x59d4d4 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
      }
    }
    if (typeof nx_arraylist[_0x4247a0] !== 'undefined') addCustomArrayList(_0x4247a0, nx_arraylist[_0x4247a0]['CN'], nx_arraylist[_0x4247a0]['EN'], _0x59d4d4);else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x4247a0['includes']('_')) addCustomArrayList(_0x4247a0, _0x4247a0, _0x4247a0, _0x59d4d4);
    if (typeof nx_binds[_0x4247a0] !== 'undefined') nx_binds[_0x4247a0]['forEach'](_0x25d10b => 祚薄晚有儿(_0x25d10b, _0x59d4d4));
    if (typeof nx_raBinds[_0x4247a0] !== 'undefined' && !nx_raBinds[_0x4247a0]['isNX']) callModule(nx_funcid[nx_raBinds[_0x4247a0]['module']], JSON['stringify']({
      'value': _0x59d4d4
    }));
  };
  const 息外无期功 = (_0x183059, _0x16a7b9, _0x4846b1, _0x4a4a73, _0x5eccb7, _0x349c75 = false, _0x5049f6 = {}) => {
    for (let _0x827943 = 0x0; _0x827943 < _0x5eccb7; _0x827943++) addParticle(Number(_0x183059), _0x16a7b9, _0x4846b1, _0x4a4a73, _0x349c75 ? _0x5049f6['x'] : _0x16a7b9, _0x349c75 ? _0x5049f6['y'] : _0x4846b1, _0x349c75 ? _0x5049f6['z'] : _0x4a4a73, 0x1, _0x349c75);
  };
  const 强近之亲内 = () => {
    const _0x4967fa = getEntityCarriedItem(self_id);
    const _0x544bab = getPos(self_id);
    if (!_0x4967fa['includes']('count:0')) buildBlock(self_id, _0x544bab['x'], _0x544bab['y'], _0x544bab['z'], 0x6);
  };
  const 无应门五尺 = _0x4e1819 => {
    const _0x51b41e = 一作独立(self_id, _0x4e1819);
    const _0x267107 = ['helmet', 'chestplate', 'leggings', 'boots'];
    if (_0x4e1819 > 0x8) 苦至于成立(_0x4e1819, 0x8, true, false);
    if (_0x267107['includes'](_0x51b41e) && selectPlayerInventorySlot(self_id, _0x4e1819) && getPlayerSelectItemSlot(self_id) === _0x4e1819) 强近之亲内();
  };
  const 之僮茕茕孑 = (_0x1a0a29, _0x36bfd0, _0x2325f5, _0x341ea4) => {
    let _0xa8d3d6 = _0x36bfd0 > 0x0;
    _0x36bfd0 = Math['abs'](_0x36bfd0);
    let _0x55ba90 = _0x2325f5 * Math['cos'](_0x36bfd0 * Math['PI'] / 0xb4);
    let _0x14107a = _0x2325f5 * Math['sin'](_0x36bfd0 * Math['PI'] / 0xb4);
    let _0x3cc220 = _0x14107a / _0x341ea4;
    let _0x484a20 = _0x341ea4 * (_0x3cc220 * _0x3cc220) * 0.5;
    let _0x21a343 = _0x55ba90 * _0x3cc220;
    let _0x2fff1a = -_0x484a20 / (_0x21a343 * _0x21a343);
    return {
      'data': _0x2fff1a * Math['pow'](_0x1a0a29 - (_0xa8d3d6 ? -_0x21a343 : _0x21a343), 0x2) + _0x484a20,
      'bool': _0xa8d3d6
    };
  };
  const getLocal = _0x9e88f0 => !_0x9e88f0 ? getLocalPlayerUniqueID() : _0x9e88f0;
  const 立形影相吊 = (_0x12d197, _0x56b159, _0x539bdc, _0x1e2f35 = false) => {
    const _0x2eca97 = getBlock(_0x12d197, _0x56b159, _0x539bdc);
    if (_0x2eca97['id'] !== 0x0) return;
    const _0x484a7b = [[_0x12d197, _0x56b159 + 0x1, _0x539bdc], [_0x12d197, _0x56b159 - 0x1, _0x539bdc], [_0x12d197, _0x56b159, _0x539bdc + 0x1], [_0x12d197, _0x56b159, _0x539bdc - 0x1], [_0x12d197 + 0x1, _0x56b159, _0x539bdc], [_0x12d197 - 0x1, _0x56b159, _0x539bdc]];
    _0x484a7b['some']((_0x261538, _0x4fbf61) => {
      const _0x4333a5 = getBlock(_0x261538[0x0], _0x261538[0x1], _0x261538[0x2]);
      if (_0x4333a5['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x261538[0x0], _0x261538[0x1], _0x261538[0x2], _0x4fbf61);
    });
  };
  const 病常在床蓐 = (_0x4fb7ec, _0x5093a1) => {
    const _0x4c9341 = getPos(self_id);
    sendSound(_0x4fb7ec, _0x4c9341['x'], _0x4c9341['y'], _0x4c9341['z'], _0x5093a1);
  };
  const 臣侍汤药未 = (_0x1c553a, _0x155577, _0x17df8e) => {
    const _0x337e21 = getPos(self_id);
    motion_list['push']([_0x1c553a - _0x337e21['x'], _0x155577 - _0x337e21['y'], _0x17df8e - _0x337e21['z']]);
    motion_list['push']([0x0, 0x0, 0x0]);
  };
  const 曾废离愍 = (_0x2684ac, _0x122130) => {
    let _0x4364b = _0x2684ac === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x2684ac);
    if (typeof _0x122130 !== 'undefined') _0x4364b['namespace'] = _0x122130;
    return Array['from']({
      'length': 0x24
    }, (_0x1512ff, _0x65ced9) => getInventory(self_id, _0x65ced9))['filter'](_0x725ec5 => _0x725ec5['namespace'] === _0x4364b['namespace'] && (typeof _0x122130 !== 'undefined' || _0x725ec5['aux'] === _0x4364b['aux']))['reduce']((_0x566208, _0x59f80d) => _0x566208 + _0x59f80d['count'], 0x0);
  };
  const 一作悯孑立 = (_0x4fbf99, _0x41a1c3, _0x440bcb = 'hotbar', _0x39280a = 0x0) => {
    const _0x30517b = _0x440bcb == 'hotbar' ? 0x9 : 0x24;
    let _0x557275 = Array['from']({
      'length': _0x30517b
    }, (_0x5466ec, _0x1099b5) => getInventory(_0x4fbf99, _0x1099b5));
    let _0xb3952c = _0x557275['some'](_0x160969 => _0x160969['namespace']['includes'](_0x41a1c3));
    let _0x5dcb6e = _0x557275['reduce']((_0x467a09, _0x5f27f4) => _0x467a09 + _0x5f27f4['count'], 0x0);
    return _0xb3952c && _0x5dcb6e > _0x39280a;
  };
  const 一作独立 = (_0x2707e2, _0x456865, _0x5acbc5) => {
    let _0x1ab6e1 = _0x456865 === -0x1 ? getCarried(_0x2707e2) : getInventory(_0x2707e2, _0x456865);
    if (!_0x1ab6e1['namespace']['includes']('_') && typeof _0x5acbc5 === 'undefined') return 'other';
    let _0x28184a = typeof _0x5acbc5 === 'undefined' ? _0x1ab6e1['namespace']['replace']('minecraft:', '') : _0x5acbc5['replace']('minecraft:', '');
    const _0x3794ea = _0x28184a['split']('_');
    return _0x3794ea[0x1];
  };
  const getEntityMaxDamage = _0x34e022 => Array['from']({
    'length': 0x24
  }, (_0x22b621, _0x14d537) => 守臣逵察臣(_0x34e022, _0x14d537))['reduce']((_0x291715, _0x29bd15) => Math['max'](_0x291715, _0x29bd15), 0x0);
  const 逮奉圣朝沐 = (_0x18795f, _0x50c5fd, _0x2391ad = false) => {
    let _0x5173c8 = _0x2391ad ? [0x0, 0x0, 0x0, 0x0] : 0x0;
    const _0x5b5ad7 = ['helmet', 'chestplate', 'leggings', 'boots'];
    for (let _0x4e08a5 = 0x0; _0x4e08a5 < 0x24; _0x4e08a5++) {
      const _0x387f83 = 一作独立(_0x18795f, _0x4e08a5);
      const _0x1a7ce1 = _0x5b5ad7['indexOf'](_0x387f83);
      if (_0x1a7ce1 === -0x1) continue;
      const _0x42fca1 = 浴清化前太(_0x18795f, _0x4e08a5);
      if (!_0x2391ad && _0x387f83 === _0x50c5fd && _0x5173c8 < _0x42fca1) _0x5173c8 = _0x42fca1;
      if (_0x2391ad && _0x5173c8[_0x1a7ce1] < _0x42fca1) _0x5173c8[_0x1a7ce1] = _0x42fca1;
    }
    return _0x5173c8;
  };
  const 浴清化前太 = (_0x5b9ffd, _0x45138e, _0x11b40f = true, _0x44f7e9 = true) => {
    let _0x11c016 = _0x45138e === -0x1 ? getCarried(_0x5b9ffd) : getInventory(_0x5b9ffd, _0x45138e);
    if (_0x45138e < -0x1) _0x11c016 = 亲抚养臣少(getPlayerArmorItem(_0x5b9ffd, Math['abs'](_0x45138e) - 0x2));
    if (_0x11c016['count'] === 0x0 || _0x11c016['damage'] === 0x0 || _0x11c016['attackDamage'] > 0x0) return 0x0;
    if (!_0x44f7e9) return _0x11c016['damage'];
    let _0x1a59f7 = 0x0;
    let _0x14b241 = _0x11c016['enchants']['findIndex'](_0x2d14e7 => _0x2d14e7['id'] === 0x0);
    if (_0x14b241 > -0x1) _0x1a59f7 = _0x11c016['enchants'][_0x14b241]['lvl'];
    if (!_0x11b40f) return 0x1 + _0x1a59f7 / 0x64;
    return _0x11c016['damage'] * (0x1 + _0x1a59f7 / 0x64);
  };
  const 守臣逵察臣 = (_0x5eb579, _0x1277f4, _0x4963ca = true, _0x5dd5e1 = true) => {
    let _0x3d9d49 = _0x1277f4 === -0x1 ? getCarried(_0x5eb579) : getInventory(_0x5eb579, _0x1277f4);
    if (_0x3d9d49['count'] === 0x0 || _0x3d9d49['attackDamage'] === 0x0 || _0x3d9d49['attackDamage'] === 0x0) return 0x1;
    if (!_0x5dd5e1) return _0x3d9d49['attackDamage'];
    let _0x20fdcd = 0x0;
    let _0x125df7 = _0x3d9d49['enchants']['findIndex'](_0x27fb93 => _0x27fb93['id'] === 0x9);
    if (_0x125df7 > -0x1) _0x20fdcd = _0x3d9d49['enchants'][_0x125df7]['lvl'] * 1.25;
    if (!_0x4963ca) return _0x20fdcd;
    return _0x3d9d49['attackDamage'] + _0x20fdcd;
  };
  const b2s = _0x40f051 => _0x40f051 ? 'true' : 'false';
  const 孝廉后刺史 = (_0x323b43, _0x41da98, _0x5e0299) => {
    let _0x56c4a = _0x323b43['split'](_0x41da98)['length'] - 0x1;
    let _0x1a13b5 = 0x0;
    let _0x100ce9 = [];
    for (let _0x41e2c = 0x0; _0x41e2c < _0x56c4a; _0x41e2c++) {
      let _0x44c076 = _0x323b43['indexOf'](_0x41da98, _0x1a13b5) + _0x41da98['length'];
      let _0x3aec92 = _0x323b43['indexOf'](_0x5e0299, _0x44c076);
      if (_0x3aec92 === -0x1 || _0x44c076 === -0x1) break;
      _0x1a13b5 = _0x3aec92;
      _0x100ce9['push'](_0x323b43['substring'](_0x44c076, _0x3aec92));
    }
    return _0x56c4a > 0x1 ? _0x100ce9 : _0x100ce9[0x0];
  };
  const 臣荣举臣秀 = (_0x137f40, _0x32b16f) => {
    if (ECAttack) 愍臣孤弱躬(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
    return attackEntity(_0x137f40, _0x32b16f);
  };
  const 才臣以供养 = (_0x327054, _0x56f2b7, _0x58787b, _0x447660) => {
    if (typeof _0x58787b === 'undefined') _0x58787b = -0x1;
    if (typeof _0x447660 === 'undefined') _0x447660 = -0x1;
    let _0x1a2c67 = null;
    for (index = 0x0; index < 0x9; index++) {
      const _0x4ccce2 = getInventory(_0x327054, index);
      if (!_0x4ccce2['namespace'] || !_0x4ccce2['name']) continue;
      if (_0x4ccce2['namespace']['includes'](_0x56f2b7) && (_0x4ccce2['aux'] === _0x58787b || _0x58787b === -0x1) && (_0x4ccce2['name']['includes'](_0x447660) || _0x447660 === -0x1)) {
        _0x1a2c67 = index;
        break;
      }
    }
    return _0x1a2c67;
  };
  const 无主辞不赴 = _0x2d307e => {
    const _0xb2f49e = getEntityMotion(_0x2d307e);
    const _0x29912b = Math['sqrt'](_0xb2f49e['x'] * _0xb2f49e['x'] + _0xb2f49e['y'] * _0xb2f49e['y'] + _0xb2f49e['z'] * _0xb2f49e['z']);
    return _0x29912b * 0x14;
  };
  const 命诏书特下 = (_0x922517, _0x4ddd67) => {
    const _0x4f2f96 = _0x4ddd67 - _0x922517 + 0x1;
    return Math['floor'](Math['random']() * _0x4f2f96) + _0x922517;
  };
  const 拜臣郎中寻 = (_0x9141f, _0x259917, _0x17fc99) => {
    return {
      'x': _0x259917['x'] + _0x9141f['x'] * _0x17fc99,
      'y': _0x259917['y'] + _0x9141f['x'] * _0x17fc99,
      'z': _0x259917['z'] + _0x9141f['z'] * _0x17fc99
    };
  };
  const 蒙国恩除臣 = _0x41896f => {
    if (_0x41896f < 0x3c) return _0x41896f + 's';
    if (_0x41896f >= 0x3c) return Math['floor'](_0x41896f / 0x3c) + 'min ' + _0x41896f % 0x3c + 's';
  };
  const 洗马猥以微 = (_0x1d610e, _0x103701, _0x46a26e, _0x12e236 = 0x0, _0x4ea10c = 0x0) => {
    if (!_0x46a26e) return true;
    _0x1d610e['y'] += _0x12e236;
    _0x103701['y'] += _0x4ea10c;
    const _0x505ef5 = 伏惟圣朝以(_0x1d610e, _0x103701, 'yaw_pos');
    const _0x3ee892 = -伏惟圣朝以(_0x1d610e, _0x103701, 'pitch_pos');
    const _0x357a05 = getDistance(_0x1d610e, _0x103701);
    let _0x352b60 = true;
    for (let _0x68f601 = 0x0; _0x68f601 < _0x357a05; _0x68f601 += 0.5) {
      const _0x171df3 = 非臣陨首所(_0x68f601, _0x103701, {
        'yaw': _0x505ef5,
        'pitch': _0x3ee892
      });
      const _0x15f655 = getBlock(_0x171df3['x'], _0x171df3['y'], _0x171df3['z']);
      if (_0x15f655['namespace'] != 'minecraft:air') {
        _0x352b60 = false;
        break;
      }
    }
    return _0x352b60;
  };
  const 贱当侍东宫 = (_0x4e28bf, _0x3c46e1) => {
    let _0x22180e = getWorldPlayerList()['sort']((_0x62cef6, _0x413ba0) => _0x62cef6['name']['localeCompare'](_0x413ba0['name']));
    let _0x252dee = _0x22180e['length'] > 0x0 ? _0x22180e['map'](_0x71ebc5 => ({
      'text': '§e' + _0x71ebc5['name'] + '\n§b距离: ' + 就职诏书切(self_id, _0x71ebc5['id'])['toFixed'](0x2)
    })) : [{
      'text': '没有玩家'
    }];
    let _0x36c2c6 = {
      'type': 'form',
      'title': '§5选择',
      'content': '§5选择一个目标',
      'buttons': _0x252dee
    };
    const _0x580625 = JSON['stringify'](_0x36c2c6);
    addForm(_0x580625, function (_0x2cf5f3) {
      if (_0x22180e['length'] > 0x0 && _0x2cf5f3 >= 0x0) {
        const _0x34f44c = _0x3c46e1 === 0x0 ? _0x22180e[_0x2cf5f3]['name'] : _0x22180e[_0x2cf5f3]['id'];
        if (typeof globalThis[_0x4e28bf] === 'object') globalThis[_0x4e28bf]['push'](_0x34f44c);
        if (typeof globalThis[_0x4e28bf] === 'string') globalThis[_0x4e28bf] = _0x34f44c;
        以表闻辞不(0x0, 'addTarget', _0x34f44c, '§r');
      }
    });
  };
  const 非臣陨首所 = (_0x2e77e9, _0x3077a2, _0x44b3a2) => {
    if (_0x2e77e9 === 0x0) return _0x3077a2;
    let _0x5bf199 = _0x2e77e9 < 0x0 ? true : false;
    let {
      yaw,
      pitch
    } = _0x44b3a2;
    if (yaw > 0xb4) yaw = yaw - 0x168;
    if (yaw < -0xb4) yaw = 0x168 + yaw;
    if (pitch < -0x5a) pitch = -0x5a;
    if (pitch > 0x5a) pitch = 0x5a;
    _0x2e77e9 = Math['abs'](_0x2e77e9);
    const _0x14725c = yaw * Math['PI'] / 0xb4;
    const _0x2653cd = pitch * Math['PI'] / 0xb4;
    let _0x245155 = pitch != 0x0 ? Math['sin'](_0x2653cd) * _0x2e77e9 : 0x0;
    let _0xa001b7 = pitch != 0x0 ? _0x245155 / Math['tan'](_0x2653cd) : _0x2e77e9;
    let _0x281576 = _0xa001b7 < 0x0;
    _0xa001b7 = Math['abs'](_0xa001b7);
    const _0x34a4c4 = Math['cos'](_0x14725c) * _0xa001b7;
    const _0x9af746 = Math['sin'](_0x14725c) * _0xa001b7;
    let _0x35bad9 = -Math['sin'](_0x14725c) * _0xa001b7;
    let _0x1db1fc = Math['cos'](_0x14725c) * _0xa001b7;
    if (_0x5bf199 || _0x281576) {
      _0x35bad9 = -_0x35bad9;
      if (!_0x281576) _0x245155 = -_0x245155;
      _0x1db1fc = -_0x1db1fc;
    }
    return {
      'x': _0x3077a2['x'] + _0x35bad9,
      'y': _0x3077a2['y'] - _0x245155,
      'z': _0x3077a2['z'] + _0x1db1fc
    };
  };
  const getPlayerItemCount = _0x503741 => Array['from']({
    'length': 0x24
  }, (_0x4f16e7, _0x4ba638) => getInventory(_0x503741, _0x4ba638))['filter'](_0x582193 => _0x582193['count'] !== 0x0)['reduce']((_0x40a938, _0x70c0ce) => _0x40a938 + _0x70c0ce['count'], 0x0);
  const isSimilar = (_0x5a17c5, _0x182cb9, _0x9f3dc5) => Math['abs'](_0x5a17c5 - _0x182cb9) < _0x9f3dc5;
  const 能上报臣具 = _0x1d6773 => {
    let _0x4dc80b = [];
    if (at_entity) _0x4dc80b['push'](...getEntityList());
    if (at_player) _0x4dc80b['push'](...getPlayerList());
    let _0x6dea44 = Math['min'](at_maxCount, _0x4dc80b['length']);
    let _0x26e196 = [];
    for (const _0x56415a of _0x4dc80b) {
      if (!鲜兄弟门衰(_0x56415a)) continue;
      const _0x5594b1 = getEntityNamespace(_0x56415a);
      if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x23a3b4 => _0x5594b1['includes'](_0x23a3b4)) != at_back) continue;
      const _0x6b4854 = getPos(_0x56415a);
      const _0xeee42b = getDistance(_0x6b4854, getPos(_0x1d6773));
      if ((_0xeee42b > at_maxDist || _0xeee42b < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
      const _0x3fd272 = getEntityAttribute(_0x56415a, 'minecraft:health');
      if (at_heal && (!_0x3fd272 || _0x3fd272['min'] > _0x3fd272['max'] || _0x3fd272['max'] > 0x186a0 || _0x3fd272['current'] <= 0x0 || _0x3fd272['max'] === 0x0) != at_back) continue;
      if (_0x5594b1 === 'minecraft:player') {
        const _0x2b5a10 = getEntityRot(_0x56415a);
        const _0x5ca697 = at_BWM ? getEntityAttribute(_0x56415a, 'minecraft:movement') : {
          'current': 0x0
        };
        const _0x2fdf27 = getEntityName(_0x56415a);
        if (at_BWM && _0x5ca697['current'] >= 0.5 && !_0x2fdf27['includes']('[') && !_0x2fdf27['includes']('【')) {
          if (DeleteDummy) removeEntity(_0x56415a);
          continue;
        }
        if (at_fov && (typeof _0x2b5a10['yaw'] === 'undefined' || typeof _0x2b5a10['pitch'] === 'undefined' || _0x2b5a10['yaw']['toFixed'](0x2) === 0x0 || _0x2b5a10['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
        const _0x1e3c0d = getEntityFlag(_0x56415a, 0x5);
        if (at_hide && _0x1e3c0d != at_back) continue;
        const _0x36528d = getEntityIsGround(_0x56415a);
        if (at_ground && _0x36528d === at_back) continue;
        if (at_wall && !洗马猥以微(getPos(self_id), _0x6b4854, at_wall, true, 1.53, 0.9) != at_back) continue;
        if (Teams && teams_name && (_0x2fdf27['startsWith'](ct_team) || ct_team['includes']('[') && _0x2fdf27['includes'](ct_team))) continue;
        if (at_whileLists['includes'](_0x56415a) != at_back || !at_name && (_0x2fdf27 === getEntityName(_0x1d6773) || _0x2fdf27 === '') != at_back || (_0x6b4854['y'] > at_maxY || _0x6b4854['y'] < at_minY) != at_back && !at_infY || _0x56415a === self_id) continue;
        if (at_regexEnable && at_regex['some'](_0x44646a => _0x2fdf27['includes'](_0x44646a))) continue;
        const _0x5bf24d = teams_armor ? teams_blur ? getPlayerArmorItem(_0x56415a, teams_slot) : 亲抚养臣少(getPlayerArmorItem(_0x56415a, teams_slot)) : {};
        if (Teams && teams_armor && (teams_blur && _0x5bf24d != '{}' && _0x5bf24d === teams_self || !teams_blur && _0x5bf24d['color'] && _0x5bf24d['color'] === teams_self['color'])) continue;
        const _0x191266 = at_size ? getEntitySize(_0x56415a) : {
          'x': 0x0,
          'y': 0x0
        };
        if (at_size && !HitBox && ((_0x191266['x'] > at_defaultSize['x'] + 0.1 || _0x191266['x'] < at_defaultSize['x'] - 0.1) && (_0x191266['y'] > 1.66 || _0x191266['y'] < 1.64) && (_0x191266['y'] < at_defaultSize['y'] || _0x191266['y'] > at_defaultSize['y'] + 0.1) && (_0x191266['y'] > 1.51 || _0x191266['y'] < 1.49)) != at_back) continue;
      }
      const _0x44edd2 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x56415a) : 0x0;
      const _0x4d3a47 = modes['at_mode'] === 0x3 ? 伏惟圣朝以(self_id, _0x56415a, 'yaw_rot') : 0x0;
      const _0x267853 = modes['at_mode'] === 0x3 ? 伏惟圣朝以(self_id, _0x56415a, 'pitch_rot') : 0x0;
      const _0xad796d = modes['at_mode'] === 0x2 ? 守臣逵察臣(_0x56415a, -0x1) : 0x0;
      _0x26e196['push']({
        'distance': _0xeee42b,
        'target': _0x56415a,
        'damage': _0xad796d,
        'heal': _0x3fd272['current'],
        'crosshair': Math['sqrt'](_0x4d3a47 * _0x4d3a47 + _0x267853 * _0x267853),
        'items': _0x44edd2,
        'random': 命诏书特下(0x0, _0x4dc80b['length'] - 0x1)
      });
    }
    const _0x460914 = [(_0x592355, _0x4d76f5) => _0x592355['distance'] - _0x4d76f5['distance'], (_0x4ca05d, _0x17c29b) => _0x4ca05d['heal'] - _0x17c29b['heal'], (_0x590d24, _0x25b624) => _0x590d24['damage'] - _0x25b624['damage'], (_0x4da8b8, _0x19e84b) => _0x4da8b8['crosshair'] - _0x19e84b['crosshair'], (_0x382892, _0x1578a7) => _0x1578a7['items'] - _0x382892['items'], (_0x92e1d3, _0x4cff2c) => _0x92e1d3['random'] - _0x4cff2c['random']];
    _0x26e196['sort'](_0x460914[modes['at_mode']]);
    if (at_reverse) _0x26e196['reverse']();
    if (at_infCount) return _0x26e196['map'](_0x474d07 => _0x474d07['target']);
    return _0x26e196['slice'](0x0, _0x6dea44)['map'](_0x42254b => _0x42254b['target']);
  };
  const 以表闻辞不 = (_0x2e89d3 = 0x0, _0x3a722d = 'Tip', _0x7140e0, _0x183618 = '§r') => {
    if (!FuncTip) return false;
    if (_0x2e89d3 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x3a722d + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x183618) + ' ' + _0x7140e0);
    if (_0x2e89d3 == 0x1) {
      if (modes['tipType_mode'] === 0x0) return '§r' + _0x3a722d + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x183618) + _0x7140e0;
      if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x183618) + _0x7140e0;
    }
  };
  const getDistance = (_0x73abb3, _0x113968) => Math['sqrt'](Math['pow'](_0x73abb3['x'] - _0x113968['x'], 0x2) + Math['pow'](_0x73abb3['y'] - _0x113968['y'], 0x2) + Math['pow'](_0x73abb3['z'] - _0x113968['z'], 0x2));
  const 就职诏书切 = (_0x25345a, _0x2c5fc8) => {
    if (!鲜兄弟门衰(_0x25345a) || !鲜兄弟门衰(_0x2c5fc8)) return Infinity;
    const _0x2380da = getPos(_0x25345a);
    const _0x519d8d = getPos(_0x2c5fc8);
    return Math['sqrt'](Math['pow'](_0x2380da['x'] - _0x519d8d['x'], 0x2) + Math['pow'](_0x2380da['y'] - _0x519d8d['y'], 0x2) + Math['pow'](_0x2380da['z'] - _0x519d8d['z'], 0x2));
  };
  const 峻责臣逋慢 = (_0x2c4b46, _0x1aae1d) => {
    if (!鲜兄弟门衰(_0x2c4b46) || !鲜兄弟门衰(_0x1aae1d)) return Infinity;
    const _0x447b2d = getPos(_0x2c4b46);
    const _0x2d1e13 = getPos(_0x1aae1d);
    return Math['sqrt'](Math['pow'](_0x447b2d['x'] - _0x2d1e13['x'], 0x2) + Math['pow'](_0x447b2d['z'] - _0x2d1e13['z'], 0x2));
  };
  const 郡县逼迫催 = (_0x2a9358, _0x2d6742, _0x5a6c03) => {
    let _0x49e6c2 = {
      'fn-set-player-pos': {
        'x': _0x2a9358,
        'y': _0x2d6742,
        'z': _0x5a6c03
      }
    };
    callModule(0x5, JSON['stringify'](_0x49e6c2));
  };
  const getHorizontalDistance = (_0x5d2ae1, _0x1b7b42) => Math['sqrt'](Math['pow'](_0x5d2ae1['x'] - _0x1b7b42['x'], 0x2) + Math['pow'](_0x5d2ae1['z'] - _0x1b7b42['z'], 0x2));
  const setRealPos = (_0x170512, _0x49cb14, _0x51b0f3, _0x3a8322) => setEntityPos(_0x170512, _0x49cb14, _0x51b0f3 + setPos_offset, _0x3a8322);
  const setPos = (_0x4193c4, _0x571b48, _0xf23e2d) => setRealPos(self_id, _0x4193c4, _0x571b48, _0xf23e2d);
  const setMotion = (_0x3df240, _0x5e7df0, _0x1ea32a) => setEntityMotion(self_id, _0x3df240, _0x5e7df0, _0x1ea32a);
  const 臣上道州司 = _0x409510 => {
    if (_0x409510 === '') return [];
    return _0x409510['split'](',');
  };
  const 临门急于星 = _0x138dde => {
    if (typeof _0x138dde != 'object' || _0x138dde['length'] === 0x0) return '';
    return _0x138dde['join'](',');
  };
  const 火臣欲奉诏 = (_0x498305, _0xcb2d71) => {
    let _0x9baa54 = typeof _0xcb2d71 === 'object' ? 临门急于星(_0xcb2d71) : _0xcb2d71;
    let _0x2045a4 = typeof _0xcb2d71 === 'object' ? 0x0 : 0x1;
    addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x498305 + '","placeholder":"","default":"' + _0x9baa54 + '"}]}', function (_0x5792ef) {
      if (_0x2045a4 === 0x1) globalThis[_0x498305] = _0x5792ef;
      if (_0x2045a4 === 0x0) globalThis[_0x498305] = 臣上道州司(_0x5792ef);
      以表闻辞不(0x0, 'setValue', _0x498305 + ' §7>>>§r ' + _0x5792ef, '§r');
      nx_cfg[_0x498305] = globalThis[_0x498305];
    });
  };
  const 奔驰则刘病 = _0x30735b => {
    if (typeof _0x30735b != 'string' || _0x30735b === '') return 'None';
    let _0x52f061 = _0x30735b['match'](/\[(.*?)\]/g);
    if (_0x52f061 === null) return 'None';
    return _0x52f061[0x0];
  };
  const 日笃欲苟顺 = _0x1ebf41 => {
    if (!File['exist'](_0x1ebf41)) return '{}';
    const _0x2c942b = File['read'](_0x1ebf41);
    return _0x2c942b ? _0x2c942b : '{}';
  };
  const 私情则告诉 = _0x430a5b => {
    const _0x18c6fd = getPos(_0x430a5b);
    let _0x3d1e83 = _0x430a5b === self_id ? Math['floor'](_0x18c6fd['y']) - 0x1 : Math['floor'](_0x18c6fd['y']);
    return {
      'x': Math['floor'](_0x18c6fd['x']),
      'y': _0x3d1e83,
      'z': Math['floor'](_0x18c6fd['z'])
    };
  };
  const 不许臣之进 = (_0x515393, _0x14ae19) => {
    if (_0x515393['length'] === _0x14ae19['length']) {
      return [];
    }
    const _0x1604b4 = _0x515393['length'] >= _0x14ae19['length'] ? _0x515393 : _0x14ae19;
    const _0x2cf86d = _0x515393['length'] < _0x14ae19['length'] ? _0x515393 : _0x14ae19;
    return _0x1604b4['filter'](_0x47d358 => !_0x2cf86d['includes'](_0x47d358));
  };
  const 退实为狼狈 = (_0x427b11, _0x352ad0) => {
    const _0x14b999 = aa_speed;
    const _0x499722 = aa_g;
    const _0x10afce = Math['atan'](Math['floor'](-_0x352ad0) / _0x427b11);
    const _0x41a2bf = Math['sqrt'](_0x427b11 * _0x427b11 + _0x352ad0 * _0x352ad0);
    const _0x16ab93 = Math['atan'](_0x41a2bf / _0x14b999 / 0x2 / _0x14b999 * _0x499722);
    return -((_0x16ab93 + _0x10afce) / Math['PI'] * 0xb4);
  };
  const getFlyTime = (_0x1d7e8b, _0xd894ec) => _0x1d7e8b / _0xd894ec;
  const roundAngle = (_0x507436, _0x2dd0dc) => Math['round'](_0x507436 / _0x2dd0dc) * _0x2dd0dc;
  const 伏惟圣朝以 = (_0x214e8f, _0x4405cd, _0x21b644, _0x5c7146 = false, _0x2a6bb2 = false, _0x5307f5 = 0x0, _0x4c294e = 0x0) => {
    let _0x5f381f = typeof _0x4405cd != 'string' ? _0x4405cd : getPos(_0x4405cd);
    let _0x7efaaf = typeof _0x214e8f != 'string' ? _0x214e8f : getPos(_0x214e8f);
    let _0x2173d4 = getEntityRot(_0x214e8f);
    if (!_0x5f381f || !_0x7efaaf) return Infinity;
    const _0x11378d = getHorizontalDistance(_0x7efaaf, _0x5f381f);
    if (_0x5c7146) _0x5f381f = 拜臣郎中寻(getEntityMotion(_0x4405cd), getPos(_0x4405cd), getFlyTime(_0x11378d, aa_speed) * 0x14);
    let _0x1f70da = _0x5f381f['x'] - _0x7efaaf['x'];
    let _0x4d07c7 = _0x7efaaf['y'] - _0x5f381f['y'] + (aa_y - 0x14) / 0xa + 命诏书特下(-_0x4c294e, _0x4c294e) / 0xa;
    let _0x368e1 = _0x5f381f['z'] - _0x7efaaf['z'];
    let _0x3bed46 = Math['atan2'](_0x368e1, _0x1f70da) * 0xb4 / Math['PI'];
    const _0x5aca37 = 退实为狼狈(_0x11378d, _0x4d07c7);
    let _0x1b1f43 = _0x2a6bb2 ? _0x5aca37 : Math['atan2'](_0x4d07c7, _0x11378d) * 0xb4 / Math['PI'];
    if (_0x21b644 === 'yaw_pos') return _0x3bed46 > -0xb4 && _0x3bed46 <= 0x5a ? _0x3bed46 + 0x5a : _0x3bed46 - 0x10e;
    if (_0x21b644 === 'yaw_rot') {
      _0x3bed46 = _0x3bed46 > -0xb4 && _0x3bed46 <= 0x5a ? _0x3bed46 + 0x5a : _0x3bed46 - 0x10e;
      let _0x4a2250 = _0x3bed46 - _0x2173d4['yaw'] + 命诏书特下(-_0x5307f5 / 0x2, _0x5307f5 / 0x2);
      return _0x4a2250 > 0x0 ? -_0x4a2250 + 0xb4 : -_0x4a2250 - 0xb4;
    }
    if (_0x21b644 === 'pitch_pos') return _0x1b1f43;
    if (_0x21b644 === 'pitch_rot') return _0x1b1f43 - _0x2173d4['pitch'];
  };
  const 孝治天下凡 = (_0x3f5ead, _0x30d0f8, _0x580116, _0x6815d8) => {
    let _0x3ab994 = Math['abs'](伏惟圣朝以(_0x3f5ead, _0x30d0f8, 'yaw_rot'));
    let _0x4d9bf1 = Math['abs'](伏惟圣朝以(_0x3f5ead, _0x30d0f8, 'pitch_rot'));
    if (_0x6815d8 === 0x0) return Math['sqrt'](_0x3ab994 * _0x3ab994 + _0x4d9bf1 * _0x4d9bf1) < _0x580116;
    if (_0x6815d8 === 0x1) return Math['abs'](_0x3ab994) < _0x580116;
    if (_0x6815d8 === 0x2) return Math['abs'](_0x4d9bf1) < _0x580116;
  };
  const 在故老犹蒙 = _0x3f5668 => {
    let _0x3ef49b = '';
    for (let _0x25756f = 0x0; _0x25756f < _0x3f5668['length']; _0x25756f += 0x2) {
      _0x3ef49b += String['fromCharCode'](parseInt(_0x3f5668['substr'](_0x25756f, 0x2), 0x10));
    }
    return _0x3ef49b;
  };
  const 矜育况臣孤 = (_0x2b2d18, _0xf53389, _0x4c6c09 = 0.5, _0x2f2591 = false) => {
    let _0x1a3c0a = [];
    let _0x5c3d2c = 伏惟圣朝以(_0x2b2d18, _0xf53389, 'yaw_pos');
    let _0x83dd9e = 伏惟圣朝以(_0x2b2d18, _0xf53389, 'pitch_pos');
    if (getDistance(_0x2b2d18, _0xf53389) < _0x4c6c09) return [_0x2b2d18];
    for (let _0x52a034 = 0x0; _0x52a034 <= getDistance(_0x2b2d18, _0xf53389); _0x52a034 += _0x4c6c09) {
      let _0x57056f = 非臣陨首所(-_0x52a034, _0x2b2d18, {
        'yaw': _0x5c3d2c,
        'pitch': _0x2f2591 ? -_0x83dd9e : 0x0
      });
      if (getBlock(_0x57056f['x'], _0x57056f['y'], _0x57056f['z'])['namespace'] === 'minecraft:air') _0x1a3c0a['push']({
        'x': _0x57056f['x'],
        'y': _0x57056f['y'],
        'z': _0x57056f['z']
      });
    }
    return _0x1a3c0a;
  };
  const 苦特为尤甚 = (_0x4bfe60, _0x5a8146) => {
    if (!鲜兄弟门衰(_0x4bfe60)) return '';
    let _0x2f7d34 = getEntityAttribute(_0x4bfe60, 'minecraft:health');
    let _0x208c8c = _0x2f7d34['current'];
    let _0x512292 = _0x2f7d34['max'];
    const _0x41919a = _0x208c8c / _0x512292;
    switch (_0x5a8146) {
      case 0x0:
        return _0x41919a['toFixed'](0x2) * 0x64 + '%%';
      case 0x1:
        let _0x38679b = '§c';
        for (let _0x26c3ee = 0x0; _0x26c3ee < Math['floor'](_0x41919a * 0x14); _0x26c3ee++) _0x38679b += '❤';
        return _0x38679b + '§r';
      case 0x2:
        return '§c❤§rx' + Math['floor'](_0x208c8c);
      case 0x3:
        return Math['floor'](_0x208c8c) + '/' + Math['floor'](_0x512292);
      case 0x4:
        return getProgress(_0x208c8c, _0x512292, '▌', 0x14);
      default:
        return _0x208c8c;
    }
  };
  const 且臣少仕伪 = _0x19ba8b => {
    let _0xbc14d8 = '';
    let _0x46eef5 = '.,?!@":;+-*/=~|_\\^`&#%$·'['split']('');
    for (let _0x5576df = 0x0; _0x5576df < _0x19ba8b; _0x5576df++) {
      let _0x18d7ef = 命诏书特下(0x0, _0x46eef5['length'] - 0x1);
      _0xbc14d8 += _0x46eef5[_0x18d7ef];
    }
    return _0xbc14d8;
  };
  function getProgress(_0x13b014, _0x4ed9da, _0x1599ec = '▌', _0x43be08 = 0x28) {
    let _0x33dbb6 = Math['min'](_0x13b014 / _0x4ed9da, 0x1);
    const _0x498802 = '4c6e2a3b195d591b3a2e6c4'['split']('');
    let _0x4f8e30 = _0x498802[Math['min'](Math['floor'](_0x33dbb6 * _0x498802['length']), _0x498802['length'] - 0x1)];
    let _0x52a2e0 = _0x1599ec['repeat'](_0x43be08)['split']('');
    let _0x2a4c84 = Math['min'](Math['floor'](_0x33dbb6 * _0x52a2e0['length']), _0x52a2e0['length']);
    _0x52a2e0[Math['min'](_0x2a4c84, _0x52a2e0['length'] - 0x1)] = _0x1599ec + '§r§o§l';
    return '§r[§o§l§' + _0x4f8e30 + _0x52a2e0['join']('') + '§r]';
  }
  const 朝历职郎署 = _0x2e5fd5 => {
    for (let _0x2f65fc = Math['ceil'](-cd_size / 0x2); _0x2f65fc < Math['floor'](cd_size / 0x2 + 0x1); _0x2f65fc++) {
      for (let _0x204f2a = Math['ceil'](-cd_size / 0x2); _0x204f2a < Math['floor'](cd_size / 0x2 + 0x1); _0x204f2a++) {
        for (let _0x503633 = Math['ceil'](-cd_size / 0x2); _0x503633 < Math['floor'](cd_size / 0x2 + 0x1); _0x503633++) {
          const {
            x,
            y,
            z
          } = _0x2e5fd5;
          const _0x57c20b = getBlock(x + _0x2f65fc, y + _0x204f2a, z + _0x503633);
          if (_0x57c20b['namespace'] === 'minecraft:air') continue;
          if (cd_exclude && _0x2e5fd5['y'] + _0x204f2a <= _0x2e5fd5['y'] - 0x1) continue;
          if (cd_fake) setBlock(x + _0x2f65fc, y + _0x204f2a, z + _0x503633, 'air', 0x0);
          if (!cd_fake) destroyBlock(self_id, _0x2e5fd5['x'] + _0x2f65fc, _0x2e5fd5['y'] + _0x204f2a, _0x2e5fd5['z'] + _0x503633, 0x0);
          if (cd_packet) 不行零丁孤(_0x2e5fd5['x'] + _0x2f65fc, _0x2e5fd5['y'] + _0x204f2a, _0x2e5fd5['z'] + _0x503633, true, true);
        }
      }
    }
  };
  const tpback = () => {
    if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
    if (ia_comeClick) {
      buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
      if (!ia_nopacket && modes['ia_mode'] === 0x0) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
    }
    if (ia_back) {
      for (let _0x49961b = 0x0; _0x49961b < ia_move; _0x49961b++) {
        if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
      }
      setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
    }
    InfiniteAura_backMot = null;
    InfiniteAura_backPos = null;
  };
  const hex2format = _0x4cc66a => {
    let _0x418a5d = '';
    let _0x428a12 = _0x4cc66a['split']('');
    for (let _0x12128f in _0x428a12) {
      let _0x1af461 = _0x428a12[_0x12128f]['toUpperCase']();
      if (_0x12128f != _0x428a12['length'] - 0x1) {
        if (_0x12128f % 0x2 === 0x1) _0x418a5d += _0x1af461 + ' ';else _0x418a5d += _0x1af461;
      } else _0x418a5d += _0x1af461;
    }
    if (rpc_remark) {
      let _0x6b6ec8 = _0x418a5d['split'](' ');
      let _0x163524 = '';
      for (let _0x48f14d in _0x6b6ec8) _0x163524 += _0x6b6ec8[_0x48f14d] + '(' + 在故老犹蒙(_0x6b6ec8[_0x48f14d]) + ') ';
      return _0x163524;
    } else return _0x418a5d;
  };
  const setTarget = (_0x388610, _0x1c54e4, _0x4d902b = false) => {
    setEntityTarget(_0x388610, _0x1c54e4);
    if (_0x4d902b) setEntityTarget(_0x1c54e4, _0x388610);
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
  var nx_paths = getResource() + '/GBRC/NoveXare';
  var nx_screen = getScreenSizeData();
  var nx_arraylist = JSON['parse'](日笃欲苟顺(nx_paths + '/FuncArrayList.json'));
  var nx_funcid = JSON['parse'](日笃欲苟顺(nx_paths + '/RunAwayFunc.json'));
  var nx_keys = [];
  var nx_cfgs = getResource() + '/GBRC/NoveXare/配置';
  var nx_ui = JSON['parse'](日笃欲苟顺(getResource() + '/ui/ui_definition.json'));
  var nx_blocks = 日笃欲苟顺(getResource() + '/GBRC/NoveXare/blocks.json');
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
  let nx_defaultCfg = nx_defaultName !== '' ? 日笃欲苟顺(nx_cfgs + '/' + nx_defaultName + '.json') : '{}';
  var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
  var PacketCfg = JSON['parse'](日笃欲苟顺(nx_paths + '/PacketManager.json'));
  var PacketTranslate = JSON['parse'](日笃欲苟顺(getResource() + '/ui/conf_packet.json'))['packets'];
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
  } = JSON['parse'](日笃欲苟顺(nx_paths + '/Cleaner.json'));
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
  } = JSON['parse'](日笃欲苟顺(nx_paths + '/SmartInv.json'));
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
  var mine_num = 0x1f4;
  var mine_info = true;
  var mine_distance = 0x5;
  var mine_speed = 0x5;
  var mine_white = [];
  var mine_black = [];
  var dl_list = [];
  var di_speed = 0x1;
  var sp_length = 0x0;
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
  var sp_info = true;
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
  var sca_space = 0xa;
  var sca_prevTower = 0x0;
  var sca_tower = false;
  var rpc_config = JSON['parse'](日笃欲苟顺(getResource() + '/GBRC/NoveXare/PyRpc_Config.json'));
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
  var rpc_tipWhite = [];
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
  var as_config = JSON['parse'](日笃欲苟顺(nx_paths + '/Staff.json'));
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
  var ac_delay = 0x1;
  var ac_count = 0x1;
  var ac_tp = false;
  var ca_distTo = 0x3;
  var ab_auto = false;
  var ab_delay = 0x1;
  var ab_click = false;
  var ab_offset = 0x0;
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
  var cs_count = 0x4b;
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
  var ap_offset = 0xc;
  var ap_type = 0x3;
  var ap_crit = false;
  var ap_density = 0xa;
  var ap_random_slope = false;
  var ap_sb_slope = 0xf;
  var ap_sb_space = 0x3;
  var ap_sb_dist = 0x2;
  var ap_sb_count = 0xa;
  var ap_slashblade = false;
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
  var mt_speed = 0x14;
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
  var th_effect = false;
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
  const EffectsEnum = ['无效果', '速度', '缓慢', '急迫', '挖掘疲劳', '力量', '瞬间治疗', '瞬间伤害', '跳跃提升', '反胃', '生命恢复', '抗性提升', '防火', '水下呼吸', '隐身', '失明', '夜视', '饥饿', '虚弱', '中毒', '凋零', '生命提升', '吸收', '饱和', '发光', '飘浮', '幸运', '霉运', '缓降', '潮涌能量', '海豚的恩惠', '不祥之兆', '村庄英雄'];
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
  var sw_enchant = true;
  var sw_texture = true;
  var sw_open = true;
  modes['sw_mode'] = 0x0;
  var sa_inner = 0.6;
  var sa_outer = 0.8;
  var sa_length = 0.6;
  var sa_density = 0x3;
  var sa_offset = 0x12;
  var isTP = false;
  var st_offset = 0x2;
  var st_tp = true;
  var AutoTrap = false;
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
  var AutoAnchor = false;
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
  var DeathInfo = false;
  var LocalRespawn = false;
  var AttackParticle = false;
  var AutoVoid = false;
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
  var ShowNXInfo = true;
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
  var ShirokoAura = false;
  function onTickEvent() {
    try {
      if (PauseNX) return;
      let _0x5baecd = [];
      self_id = getLocal(otherId);
      self_pos = getPos(self_id);
      prev_pos = getEntityPosPrev(self_id);
      teams_self = 亲抚养臣少(getPlayerArmorItem(self_id, teams_slot));
      let _0x277e7e = getEntityAttribute(self_id, 'minecraft:health');
      let _0x9fc138 = getEntityMotion(self_id);
      self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
      if (FastStop && !self_moving) setMotion(0x0, _0x9fc138['y'], 0x0);
      let _0x220bea = getCameraRotation();
      let _0x3cd4b8 = {
        'yaw': _0x220bea['yaw'] > 0x0 ? 0xb4 - _0x220bea['yaw'] : -0xb4 - _0x220bea['yaw'],
        'pitch': -_0x220bea['pitch']
      };
      let _0x5147ae = getDistance(self_pos, prev_pos) / 0.05;
      let _0x6644d2 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
      let _0x2a1c98 = 无主辞不赴(self_id);
      let _0x51b728 = 私情则告诉(self_id);
      let _0x560116 = getWorldPlayerList();
      let _0x5f2e5d = getEntityIsGround(self_id);
      let _0x2d4faa = getScreenName();
      if (ticks % getSelf == 0x0) {
        if (getDelay) {
          gd_ping1 = Date['now']();
          curl_get('https://www.baidu.com', {}, (_0x53fa54, _0x39585b) => globalThis['gd_ping2'] = Date['now']());
          gd_ping = Math['abs'](gd_ping2 - gd_ping1);
        }
      }
      self_item = getCarried(self_id);
      if (_0x277e7e['current'] - prev_heal > 0x8) {
        if (DeathInfo) 以表闻辞不(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
        if (LocalRespawn) setTimeout(() => {
          departCamera();
          setTimeout(() => setPos(death_pos['x'] + 命诏书特下(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 命诏书特下(-lr_random + 0x1, lr_random - 0x1)), 0x64);
          setTimeout(() => resetCamera(), 0xc8);
        }, 0x32 * lr_delay);
        if (DeadCross) dc_pos['push'](death_pos);
      } else if (_0x277e7e['current'] < prev_heal) death_pos = self_pos;
      if (ShowScreenHud) 以表闻辞不(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
      if (DeadCross) dc_pos['forEach'](_0x631d00 => {
        sendShadow(_0x631d00['x'], _0x631d00['y'], _0x631d00['z']);
        sendShadow(_0x631d00['x'], _0x631d00['y'] + 0x1, _0x631d00['z']);
        sendShadow(_0x631d00['x'], _0x631d00['y'] + 0x2, _0x631d00['z']);
        sendShadow(_0x631d00['x'] + 0x1, _0x631d00['y'] + 0x2, _0x631d00['z']);
        sendShadow(_0x631d00['x'] - 0x1, _0x631d00['y'] + 0x2, _0x631d00['z']);
        sendShadow(_0x631d00['x'], _0x631d00['y'] + 0x3, _0x631d00['z']);
      });
      if (AdminShow) {
        let _0x42cdec = _0x560116['filter'](_0x313bcb => _0x313bcb['permissionLevel'] === as_level || _0x313bcb['commandPermissionLevel'] === as_level);
        if (_0x42cdec['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Admin', '服务器管理员: ' + 临门急于星(_0x42cdec['map'](_0x5c0a91 => _0x5c0a91['name'])), '§r'));
        let _0x236b7c = _0x42cdec['filter'](_0x59bd9b => 就职诏书切(_0x59bd9b['id'], self_id) < as_range);
        if (_0x236b7c['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 临门急于星(_0x236b7c['map'](_0x38c58e => _0x38c58e['name'])), '§r'));
      }
      if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 能上报臣具(self_id);
      if (NoHider) {
        const _0x1a315d = getPlayerList();
        _0x1a315d['forEach'](_0x420656 => {
          if (_0x420656 != self_id) {
            removeEntityEffect(_0x420656, 0xe);
            setEntityFlag(_0x420656, 0x5, false);
            if (nh_exclude && at_lists['includes'](_0x420656)) at_lists['splice'](at_lists['indexOf'](_0x420656), 0x1);
          }
        });
      }
      if (BJDEscape && getBlock(_0x51b728['x'], _0x51b728['y'] - 0x1, _0x51b728['z'])['namespace'] === 'minecraft:glass' && _0x5f2e5d) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
      if (AutoSwing) swingArm();
      if (AutoCamera) {
        if (getPlayerViewPerspective() === 0x0) resetCamera();else departCamera();
      }
      if (Criticals && !cc_status && _0x9fc138['y'] < 0x0) {
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
        const _0x4f26cc = rt_target ? getPos(at_lists[0x0]) : self_pos;
        if (_0x4f26cc) setPos(_0x4f26cc['x'] + 命诏书特下(-rt_range, rt_range), _0x4f26cc['y'] + (rt_y ? 命诏书特下(-rt_range, rt_range) : 0x0), _0x4f26cc['z'] + 命诏书特下(-rt_range, rt_range));
      }
      if (NoWall) setEntityFlag(self_id, 0x30, false);
      if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
        let _0x506cbc = 命诏书特下(ac_min, ac_max);
        let _0x5cf600 = Math['round'](0x3e8 / _0x506cbc);
        const _0x59d18f = at_lists['length'] > 0x0 ? 孝治天下凡(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
        for (let _0x2c3618 = 0x0; _0x2c3618 < ac_times; _0x2c3618++) {
          if (!_0x59d18f) break;
          if (ac_click) simulateClick();
          if (ac_use) 强近之亲内();
        }
        ac_t_2 = ac_t_1 + _0x5cf600;
      }
      ac_t_1 = Date['now']();
      if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
        const _0x5ea363 = getEntityList()['forEach'](_0x419a7a => {
          if (getEntityNamespace(_0x419a7a) != 'minecraft:item' || !findEntity(_0x419a7a) || 就职诏书切(_0x419a7a, self_id) > fm_range && fm_range != -0x1) return;
          const _0xa6646b = getPos(_0x419a7a);
          silentMove(_0xa6646b['x'], _0xa6646b['y'], _0xa6646b['z']);
        });
      } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
        'pos': fm_pos,
        'rot': _0x3cd4b8,
        'inputMode': 0x2,
        'playMode': 0x0,
        'yHeadRot': _0x3cd4b8['yaw']
      });
      if (CustomItem) {
        const _0x8db928 = getEntityCarriedItem(self_id);
        if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x8db928);else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x8db928);else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x8db928);
      }
      if (ShadowBoomer && ticks % sb_tick == 0x0) {
        let _0x4326e4 = [];
        if (modes['sb_mode'] == 0x0) _0x4326e4 = getPlayerList();
        if (modes['sb_mode'] == 0x1) _0x4326e4 = at_lists;
        if (modes['sb_mode'] == 0x2) _0x4326e4 = ['lock_pos'];
        _0x4326e4['forEach'](_0x4db29f => {
          if (sb_exclude && _0x4db29f == self_id) return;
          let _0x57a8df = null;
          if (_0x4db29f == 'lock_pos') _0x57a8df = sb_pos;else _0x57a8df = 私情则告诉(_0x4db29f);
          if (!_0x57a8df) return;
          let _0x461fcf = getEntityRot(_0x4db29f);
          if (modes['sb_mode'] < 0x2) {
            _0x57a8df = 非臣陨首所(sb_offset, _0x57a8df, _0x461fcf);
            _0x57a8df['y'] += sb_ud;
          }
          if (sb_custom) {
            const _0x4e9b2b = JSON['parse'](日笃欲苟顺(nx_paths + '/Shadow.json'));
            _0x4e9b2b['forEach'](_0x287eb5 => {
              let _0x446cf8 = Math['sqrt'](_0x287eb5['x'] * _0x287eb5['x'] + _0x287eb5['y'] * _0x287eb5['y'] + _0x287eb5['z'] * _0x287eb5['z']);
              let _0x5b667d = 伏惟圣朝以({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x287eb5, 'yaw_pos');
              let _0x204579 = 伏惟圣朝以({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x287eb5, 'pitch_pos');
              let _0x51b45f = 非臣陨首所(_0x446cf8, {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, {
                'pitch': _0x204579,
                'yaw': _0x5b667d + sb_rc_yaw
              });
              sendShadow(_0x57a8df['x'] + _0x51b45f['x'], _0x57a8df['y'] + _0x51b45f['y'], _0x57a8df['z'] + _0x51b45f['z']);
            });
          } else {
            for (let _0xd00e72 = Math['ceil'](-sb_length / 0x2); _0xd00e72 < Math['floor'](sb_length / 0x2 + 0x1); _0xd00e72++) {
              for (let _0x550ec7 = Math['ceil'](-sb_length / 0x2); _0x550ec7 < Math['floor'](sb_length / 0x2 + 0x1); _0x550ec7++) {
                for (let _0x7e0370 = Math['ceil'](-sb_length / 0x2); _0x7e0370 < Math['floor'](sb_length / 0x2 + 0x1); _0x7e0370++) {
                  sendShadow(_0x57a8df['x'] + _0xd00e72, _0x57a8df['y'] + _0x550ec7 + 0x2, _0x57a8df['z'] + _0x7e0370);
                }
              }
            }
          }
        });
      }
      if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;else sb_rc_yaw = -0xb4;
      if (SmallMap) {
        let _0x94cc0e = [['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['一', '一', '一', '一', '一', '十', '一', '一', '一', '一', '一'], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  ']];
        let _0x53023d = [];
        if (sm_player) _0x53023d['push'](...getPlayerList());
        if (sm_entity) _0x53023d['push'](...getEntityList());
        if (sm_target) _0x53023d['push'](...at_lists);
        _0x53023d['forEach'](_0x4da1e9 => {
          let _0x443a91 = 伏惟圣朝以(self_id, _0x4da1e9, 'yaw_rot');
          let _0x1a5265 = 就职诏书切(self_id, _0x4da1e9);
          let _0x53773d = Math['floor'](_0x1a5265 / sm_size * sm_proportion * -Math['sin'](_0x443a91 * Math['PI'] / 0xb4) * 0xa);
          let _0x11345f = Math['floor'](_0x1a5265 / sm_size * sm_proportion * -Math['cos'](_0x443a91 * Math['PI'] / 0xb4) * 0xa);
          if (_0x53773d > 0x5) _0x53773d = 0x5;
          if (_0x11345f > 0x5) _0x11345f = 0x5;
          if (_0x53773d < -0x5) _0x53773d = -0x5;
          if (_0x11345f < -0x5) _0x11345f = -0x5;
          _0x94cc0e[_0x11345f + 0x5][_0x53773d + 0x5] = ' §e◆§r ';
        });
        let _0x1a4f96 = _0x94cc0e['map'](_0x553cf2 => _0x553cf2['join'](''))['join']('\n');
        _0x5baecd['push'](以表闻辞不(0x1, 'Map', '\n' + _0x1a4f96, '§r'));
      }
      if (ShirokoAura) {
        for (let _0x39fa0b = 0x0; _0x39fa0b < 0x168; _0x39fa0b += sa_density) {
          const _0x1ee085 = sa_inner * Math['cos'](_0x39fa0b * Math['PI'] / 0xb4);
          const _0x42b867 = sa_inner * Math['sin'](_0x39fa0b * Math['PI'] / 0xb4);
          息外无期功(0x1a, self_pos['x'] + _0x1ee085, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x42b867, 0x1);
          const _0xf44d31 = sa_outer * Math['cos'](_0x39fa0b * Math['PI'] / 0xb4);
          const _0x15d699 = sa_outer * Math['sin'](_0x39fa0b * Math['PI'] / 0xb4);
          息外无期功(0x1a, self_pos['x'] + _0xf44d31, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x15d699, 0x1);
        }
        for (let _0x1c3e16 = 0x0; _0x1c3e16 < sa_length; _0x1c3e16 += sa_density / 0xa) {
          let _0x15d72d = 非臣陨首所(_0x1c3e16 + sa_outer, self_pos, {
            'yaw': _0x3cd4b8['yaw'],
            'pitch': 0x0
          });
          let _0x4d3f6b = 非臣陨首所(_0x1c3e16 + sa_outer, self_pos, {
            'yaw': 0x5a + _0x3cd4b8['yaw'],
            'pitch': 0x0
          });
          let _0xb8f201 = 非臣陨首所(_0x1c3e16 + sa_outer, self_pos, {
            'yaw': -0x5a + _0x3cd4b8['yaw'],
            'pitch': 0x0
          });
          let _0x5498a5 = 非臣陨首所(_0x1c3e16 + sa_outer, self_pos, {
            'yaw': _0x3cd4b8['yaw'] + 0xb4,
            'pitch': 0x0
          });
          息外无期功(0x1a, _0x15d72d['x'], self_pos['y'] + sa_offset / 0xa, _0x15d72d['z'], 0x1);
          息外无期功(0x1a, _0x5498a5['x'], self_pos['y'] + sa_offset / 0xa, _0x5498a5['z'], 0x1);
          息外无期功(0x1a, _0x4d3f6b['x'], self_pos['y'] + sa_offset / 0xa, _0x4d3f6b['z'], 0x1);
          息外无期功(0x1a, _0xb8f201['x'], self_pos['y'] + sa_offset / 0xa, _0xb8f201['z'], 0x1);
        }
      }
      if (TestModule) {
        selectPlayerInventorySlot(self_id, 0x0);
        selectPlayerInventorySlot(self_id, 0x8);
      }
      if (CameraManager) {
        if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
        if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);else {
          const _0x47c45e = getPos(cm_id);
          const _0x2adb99 = getEntitySize(cm_id);
          setCameraAnchor(_0x47c45e['x'] - self_pos['x'], _0x47c45e['y'] - self_pos['y'] + 0.85 * _0x2adb99['y'], -_0x47c45e['z'] + self_pos['z']);
        }
        if (cm_attack != null) {
          const _0x3f69f9 = getPos(cm_attack);
          const _0x33a4bb = getEntitySize(cm_attack);
          if (_0x3f69f9 && _0x33a4bb) setCameraAnchor(_0x3f69f9['x'] - self_pos['x'], _0x3f69f9['y'] - self_pos['y'] + 0.85 * _0x33a4bb['y'], -_0x3f69f9['z'] + self_pos['z']);
        } else if (cm_actioncamera) setCameraAnchor(-_0x9fc138['x'] * cm_moverange, -_0x9fc138['y'] * cm_moverange, _0x9fc138['z'] * cm_moverange);else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
        setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
        setCameraPitchLimit(-cm_pitch, cm_pitch);
        if (!cm_unlock) cm_pos = self_pos;
        if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
      }
      if (_0x277e7e['current'] < prev_heal) prev_heal = _0x277e7e['current'];
      if (NoDebuff) debuff['forEach'](_0x7d6a70 => removeEntityEffect(self_id, _0x7d6a70));
      if (MoveJump && self_moving && _0x5f2e5d) playerJump();
      if (ChunkRender) {
        let _0x246cf2 = {
          'x': Math['floor'](self_pos['x'] / 0x10),
          'z': Math['floor'](self_pos['z'] / 0x10)
        };
        let _0x1da88c = {
          'x': _0x246cf2['x'] * 0x10,
          'z': _0x246cf2['z'] * 0x10
        };
        let _0x167874 = {
          'x': (_0x246cf2['x'] + 0x1) * 0x10,
          'z': (_0x246cf2['z'] + 0x1) * 0x10
        };
        for (let _0x1800eb = 0x0; _0x1800eb < 0x10; _0x1800eb++) {
          息外无期功(0x37, _0x1da88c['x'] + _0x1800eb, self_pos['y'], _0x1da88c['z'], 0x1);
          息外无期功(0x37, _0x1da88c['x'], self_pos['y'], _0x1da88c['z'] + _0x1800eb, 0x1);
          息外无期功(0x37, _0x167874['x'] - _0x1800eb, self_pos['y'], _0x167874['z'], 0x1);
          息外无期功(0x37, _0x167874['x'], self_pos['y'], _0x167874['z'] - _0x1800eb, 0x1);
        }
        _0x5baecd['push'](以表闻辞不(0x1, 'Chunk', '区块坐标: ' + _0x246cf2['x'] + '， ' + _0x246cf2['z'], '§r'));
      }
      if (AutoGG) {
        for (let _0x46775b of gg_list) {
          if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 才臣以供养(self_id, _0x46775b, -0x1, '一局'), false, true);
          if (modes['gg_mode'] === 0x1) {
            selectPlayerInventorySlot(self_id, 才臣以供养(self_id, _0x46775b, -0x1, '一局'));
            const _0x4c0a28 = getCarried(self_id);
            if (_0x4c0a28['name']['includes']('一局')) 强近之亲内();
          }
        }
      }
      if (nx_goal != null) {
        const _0x106ec7 = getHorizontalDistance(self_pos, nx_goal);
        const _0x4e10e7 = getDistance(self_pos, nx_goal);
        if (_0x4e10e7 >= 0x5) {
          let _0x5ee3af = 伏惟圣朝以(self_id, nx_goal, 'yaw_pos');
          let _0x2cf6a0 = 非臣陨首所(-nx_goalSpeed / 0xa, self_pos, {
            'yaw': _0x5ee3af,
            'pitch': 0x0
          });
          if (_0x106ec7 >= 0x3) setMotion(_0x2cf6a0['x'] - self_pos['x'], _0x9fc138['y'], _0x2cf6a0['z'] - self_pos['z']);else setMotion(_0x9fc138['x'], (_0x2cf6a0['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x9fc138['z']);
        } else {
          nx_goal = null;
          以表闻辞不(0x0, 'Tip', '已到达设置目的地', '§r');
        }
      }
      if (RandomArrayList) {
        for (let _0xff3134 = 0x0; _0xff3134 < ral_num; _0xff3134++) {
          const _0x947af9 = 且臣少仕伪(ral_length);
          addCustomArrayList('RandomArrayList' + _0xff3134, _0x947af9, _0x947af9, true);
        }
      }
      if (ChestAura) {
        let _0x5e6081 = 私情则告诉(self_id);
        let _0xb318a = ca_range;
        for (let _0x4854fb = -_0xb318a; _0x4854fb < _0xb318a; _0x4854fb++) {
          for (let _0x3ffeb8 = -_0xb318a; _0x3ffeb8 < _0xb318a; _0x3ffeb8++) {
            for (let _0x4b37c0 = -_0xb318a; _0x4b37c0 < _0xb318a; _0x4b37c0++) {
              if (ca_check && _0x2d4faa['includes']('chest_screen') && chestStates['packet'] && chestStates['click']) {
                chestStates['click'] = false;
                chestStates['packet'] = false;
              }
              const _0x37555e = getBlock(_0x5e6081['x'] + _0x4854fb, _0x5e6081['y'] + _0x3ffeb8, _0x5e6081['z'] + _0x4b37c0);
              if (_0x37555e['namespace'] != 'minecraft:chest') continue;
              const _0x289931 = getBlock(_0x5e6081['x'] + _0x4854fb, _0x5e6081['y'] + _0x3ffeb8 + 0x1, _0x5e6081['z'] + _0x4b37c0);
              const _0x3d317b = {
                'x': _0x5e6081['x'] + _0x4854fb,
                'y': _0x5e6081['y'] + _0x3ffeb8,
                'z': _0x5e6081['z'] + _0x4b37c0
              };
              if (ca_chest_pos['includes'](JSON['stringify'](_0x3d317b)) && ca_exclude || !洗马猥以微(_0x5e6081, _0x3d317b, ca_wall, 1.53, 0.5) || ca_block && _0x289931['namespace'] != 'minecraft:air' || !孝治天下凡(self_id, _0x3d317b, ca_fov, 0x0) || _0x2d4faa['includes']('chest_screen')) break;
              buildBlock(self_id, _0x5e6081['x'] + _0x4854fb, _0x5e6081['y'] + _0x3ffeb8, _0x5e6081['z'] + _0x4b37c0, 0x1);
              if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x3d317b));
            }
          }
        }
      }
      if (AntiStaff) {
        _0x560116['forEach'](_0x55fc4b => {
          const {
            name,
            id
          } = _0x55fc4b;
          if (id === self_id || name === '') return;
          let _0x30087f = null;
          if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x30087f = id;
          if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x30087f = id;
          if (modes['as_mode'] === 0x2) {
            as_config['forEach'](_0x3e0d6c => {
              if (_0x3e0d6c['match_mode'] === '精准' && _0x3e0d6c['has_mode'] === '存在' && _0x3e0d6c['texts']['some'](_0x1d055f => name === _0x1d055f) != _0x3e0d6c['reverse_selection']) _0x30087f = id;
              if (_0x3e0d6c['match_mode'] === '精准' && _0x3e0d6c['has_mode'] === '同时' && _0x3e0d6c['texts']['every'](_0x2d1002 => name === _0x2d1002) != _0x3e0d6c['reverse_selection']) _0x30087f = id;
              if (_0x3e0d6c['match_mode'] === '模糊' && _0x3e0d6c['has_mode'] === '存在' && _0x3e0d6c['texts']['some'](_0x49d374 => name['includes'](_0x49d374)) != _0x3e0d6c['reverse_selection']) _0x30087f = id;
              if (_0x3e0d6c['match_mode'] === '精准' && _0x3e0d6c['has_mode'] === '存在' && _0x3e0d6c['texts']['every'](_0x5945d4 => name['includes'](_0x5945d4)) != _0x3e0d6c['reverse_selection']) _0x30087f = id;
            });
          }
          if (modes['as_mode'] === 0x3) _0x30087f = id;
          if (as_hide && !getEntityFlag(id, 0x5)) _0x30087f = null;
          if (as_ground && getEntityIsGround(id)) _0x30087f = null;
          if (_0x30087f === null) return;
          if (modes['anti_mode'] === 0x0) 以表闻辞不(0x0, 'Tip', '可能存在协管: ' + name, '§r');else if (modes['anti_mode'] === 0x1) executeCommand('/hub');else if (modes['anti_mode'] === 0x2) executeCommand('/again');else if (modes['anti_mode'] === 0x3) _0x5baecd['push'](以表闻辞不(0x1, 'Staff', '可能存在协管: ' + name, '§r'));else if (modes['anti_mode'] === 0x4) leaveWorld();
        });
      }
      if (InteractAura) at_lists['forEach'](_0x4449bf => interactEntity(_0x4449bf));
      if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
        'current': 0x7fff
      });
      if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
        'current': 0x14
      });
      if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
      if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
      if (ShowVariable) {
        if (sv_player && last_world_player['length'] != _0x560116['length']) {
          以表闻辞不(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x560116['length'], '§r');
          last_world_player = _0x560116;
        }
        if (sv_id && self_id != prev_id) 以表闻辞不(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
      }
      if (CheckAxe && ticks % ca_delay === 0x1) {
        let _0xad187b = [];
        _0x560116['forEach'](_0x451a1d => {
          if (modes['ca_mode'] == 0x0 && 守臣逵察臣(_0x451a1d['id'], -0x1) > 0x14) _0xad187b['push'](getEntityName(_0x451a1d['id']));
          if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x451a1d['id']) > 0x14) _0xad187b['push'](getEntityName(_0x451a1d['id']));
        });
        if (_0xad187b['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 临门急于星(_0xad187b), '§r'));
      }
      if (WorldPlayerInfo && last_world_player['length'] != _0x560116['length']) {
        const _0x5e3f38 = _0x560116['map'](_0x425681 => _0x425681['name']);
        let _0x36f03c = 不许臣之进(last_world_player, _0x5e3f38);
        let _0x7d19f9 = last_world_player['length'] < _0x5e3f38['length'];
        if (_0x7d19f9) 以表闻辞不(0x0, 'Tip', 临门急于星(_0x36f03c) + '进入了世界', '§r');else 以表闻辞不(0x0, 'Tip', 临门急于星(_0x36f03c) + '离开了世界', '§r');
        last_world_player = _0x5e3f38;
      }
      if (DropRes && _0x9fc138['y'] < -dr_mot) {
        for (index = 0x0; index < 0x24; index++) {
          const _0x37b166 = getInventory(self_id, index);
          if (resList['includes'](_0x37b166['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
        }
      }
      if (AttackAim) {
        if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
          at_lists['forEach'](_0x35a01e => {
            if (孝治天下凡(self_id, _0x35a01e, aaa_fov, 0x0)) {
              if (aa_use) 强近之亲内();else 臣荣举臣秀(_0x35a01e, Swing);
            }
          });
          aim_t0 = aim_t1;
        }
        aim_t1 = Date['now']();
      }
      if (HotbarSelector) {
        let _0x581a40 = getInventory(self_id, select_slot);
        if (hs_slot['length'] > 0x0) {
          if (hs_slot['includes'](select_slot + '')) {
            selectPlayerInventorySlot(self_id, select_slot);
            const _0x240ea4 = getCarried(self_id);
            if (hs_use && !_0x240ea4['namespace']['includes']('air')) 强近之亲内();
          }
        } else if (selectitems['includes'](_0x581a40['name']) || selectitems['includes'](_0x581a40['namespace']) || selectitems['length'] === 0x0) {
          selectPlayerInventorySlot(self_id, select_slot);
          const _0x3f381a = getCarried(self_id);
          if (hs_use && !_0x3f381a['namespace']['includes']('air')) 强近之亲内();
        }
      }
      if (AutoPot && ap_autobag && !getScreenName()['includes']('hud_screen')) openInventory();
      if (AutoPot && getScreenName()['includes']('hud_screen')) {
        const _0x2d943b = 一作悯孑立(self_id, 'splash_potion', 'hotbal', 0x3);
        if (!_0x2d943b) {
          for (let _0x2c3ec6 = ap_slot === -0x1 ? 0x23 : 0x9; _0x2c3ec6 > -0x1; _0x2c3ec6--) {
            if (ap_slot > -0x1) {
              const _0x4b7936 = getInventory(self_id, _0x2c3ec6);
              if (_0x4b7936['namespace'] === 'minecraft:air') {
                苦至于成立(ap_slot, _0x2c3ec6, false, false);
                ap_slot = -0x1;
                break;
              }
            }
            const _0xe526f0 = getInventory(self_id, _0x2c3ec6);
            if (ap_slot === -0x1 && _0xe526f0['namespace'] === 'minecraft:splash_potion') ap_slot = _0x2c3ec6;
          }
        } else if (ap_autobag) deleteContainer();
      }
      if (AirJump && (aj_continue || _0x9fc138['y'] < -0.42)) {
        let _0x2e2d0e = 拜臣郎中寻(_0x9fc138, self_pos, 无主辞不赴(self_id));
        let _0x432a29 = 伏惟圣朝以(_0x2e2d0e, self_id, 'yaw_pos');
        let _0x3859ac = 非臣陨首所(aj_speed / 0xa, self_pos, {
          'yaw': _0x432a29,
          'pitch': 0x0
        });
        if (aj_modify) setMotion(_0x3859ac['x'] - self_pos['x'], aj_height / 0x64, _0x3859ac['z'] - self_pos['z']);else setMotion(_0x9fc138['x'], aj_height / 0x64, _0x9fc138['z']);
        return true;
      }
      if (SmartInv && (!da_inv || _0x2d4faa === 'inventory_screen') && (!da_chest || _0x2d4faa['includes']('chest_screen')) && (!da_bow || _0x3cd4b8['pitch'] > 0x50) && ticks % da_delay === 0x0) {
        for (let _0x4f9f9c = 0x0; _0x4f9f9c < da_max; _0x4f9f9c++) {
          const _0x294bfa = 一作独立(self_id, da_slot);
          if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x294bfa)) {
            const _0x3efbcf = 守臣逵察臣(self_id, da_slot, da_texture, da_enchant);
            if (_0x3efbcf > 0x0 && _0x3efbcf < 0x14) {
              if (_0x3efbcf >= max_damage) {
                max_damage = _0x3efbcf;
                if (da_move) 苦至于成立(da_slot, SmartInvCfg['sword'], true, false);
              } else {
                if (drop_slot > -0x1) {
                  苦至于成立(da_slot, drop_slot, true, false);
                  dropPlayerInventorySlot(self_id, drop_slot, false, true);
                } else dropPlayerInventorySlot(self_id, da_slot, false, true);
              }
            }
          }
          const _0x384ad6 = nx_armors['indexOf'](_0x294bfa);
          const _0x282e2b = 浴清化前太(self_id, da_slot, da_texture, da_enchant);
          if (da_armor && _0x384ad6 !== -0x1 && _0x282e2b > 0x0) {
            if (_0x282e2b > max_armor[_0x384ad6]) {
              max_armor[_0x384ad6] = _0x282e2b;
              if (da_move) {
                if (move_armor_slot > -0x1) 苦至于成立(da_slot, move_armor_slot, true, false);else if (nx_armors[_0x384ad6]) 苦至于成立(da_slot, SmartInvCfg[nx_armors[_0x384ad6]], true, false);
              }
            } else {
              if (drop_slot > -0x1) {
                苦至于成立(da_slot, drop_slot, true, false);
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
      if (AutoArmor && (!aa_inv || _0x2d4faa === 'inventory_screen') && (!aa_chest || _0x2d4faa['includes']('chest_screen'))) {
        let _0x448813 = 一作独立(self_id, armor_slot);
        let _0x1e6893 = 浴清化前太(self_id, armor_slot);
        if (_0x448813 != 'other' && _0x1e6893 !== 0x0) {
          let _0x1ade5a = [浴清化前太(self_id, -0x2), 浴清化前太(self_id, -0x3), 浴清化前太(self_id, -0x4), 浴清化前太(self_id, -0x5)];
          for (let _0x317433 = 0x0; _0x317433 < aa_times; _0x317433++) {
            if (_0x448813 === 'helmet' && _0x1e6893 > _0x1ade5a[0x0]) 无应门五尺(armor_slot);
            if (_0x448813 === 'chestplate' && _0x1e6893 > _0x1ade5a[0x1]) 无应门五尺(armor_slot);
            if (_0x448813 === 'leggings' && _0x1e6893 > _0x1ade5a[0x2]) 无应门五尺(armor_slot);
            if (_0x448813 === 'boots' && _0x1e6893 > _0x1ade5a[0x3]) 无应门五尺(armor_slot);
          }
        }
        if (ticks % aa_delay == 0x0) armor_slot++;
        if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
      }
      if (Remover) {
        const _0x2ee588 = getEntityList();
        _0x2ee588['forEach'](_0x452390 => {
          let _0x589d01 = false;
          if (rmer_entity) _0x589d01 = !isPlayer(_0x452390);
          if (rmer_item) _0x589d01 = getEntityNamespace(_0x452390) == 'minecraft:item';
          if (_0x589d01) removeEntity(_0x452390);
        });
      }
      if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
        for (let _0x13fbff = 0x8; _0x13fbff >= 0x0; _0x13fbff--) {
          let _0x5db349 = getInventory(self_id, _0x13fbff);
          if (_0x5db349['namespace'] === prev_item['namespace']) {
            selectPlayerInventorySlot(self_id, _0x13fbff);
            break;
          }
        }
      }
      if (FreeCam && fc_pos != {}) {
        if (fc_draw) {
          for (let _0x44433c = 0x0; _0x44433c <= 0x12; _0x44433c += 0x2) 息外无期功(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x44433c / 0xa, fc_pos['z'], 0x1);
          _0x5baecd['push'](以表闻辞不(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
        }
        if (fc_dist) _0x5baecd['push'](以表闻辞不(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
      }
      if (ThrowTracer) {
        const _0x3ca6bc = getEntityList();
        _0x3ca6bc['forEach'](_0x365302 => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x365302)) && at_lists['length'] > 0x0) {
            const _0x3efb7a = getPos(at_lists[0x0]);
            let _0xb1373f = 伏惟圣朝以(_0x3efb7a, getPos(_0x365302), 'yaw_pos');
            let _0x5cd84f = -伏惟圣朝以(_0x3efb7a, getPos(_0x365302), 'pitch_pos');
            const _0x32c88a = getPos(_0x365302);
            const _0x65b57f = 非臣陨首所(tt_speed, _0x32c88a, {
              'yaw': _0xb1373f,
              'pitch': _0x5cd84f
            });
            setEntityMotion(_0x365302, _0x65b57f['x'] - _0x32c88a['x'], _0x65b57f['y'] - _0x32c88a['y'], _0x65b57f['z'] - _0x32c88a['z']);
          }
        });
        if (at_lists['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
      }
      if (ThrowFly) {
        const _0x3f8274 = getEntityList();
        _0x3f8274['forEach'](_0x266ccc => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x266ccc))) {
            const _0xcfce60 = getPos(_0x266ccc);
            if (typeof arrow_rot[_0x266ccc] === 'undefined') arrow_rot[_0x266ccc] = _0x3cd4b8;
            const _0x5323d5 = arrow_rot[_0x266ccc]['yaw'];
            const _0x4294c8 = arrow_rot[_0x266ccc]['pitch'];
            const _0x1ea608 = 非臣陨首所(0x1, _0xcfce60, {
              'yaw': _0x5323d5,
              'pitch': _0x4294c8
            });
            setEntityMotion(_0x266ccc, _0x1ea608['x'] - _0xcfce60['x'], _0x1ea608['y'] - _0xcfce60['y'], _0x1ea608['z'] - _0xcfce60['z']);
          }
        });
      }
      if (ArrowView) {
        const _0x4a0551 = getEntityList();
        _0x4a0551['forEach'](_0x369e4b => {
          if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x369e4b)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x369e4b;
        });
        if (av_id != null) {
          if (!av_list['includes'](av_id)) av_list['push'](av_id);
          let _0x283e3d = getPos(av_id);
          setCameraAnchor(_0x283e3d['x'] - self_pos['x'] + (av_x - 0xa), _0x283e3d['y'] - self_pos['y'] + (av_y - 0xa), -_0x283e3d['z'] + self_pos['z'] + (av_z - 0xa));
        } else setCameraAnchor(0x0, 0x0, 0x0);
        if (!findEntity(av_id)) av_id = null;
      }
      if (FPSReducer) {
        for (let _0x4a4b45 = 0x0; _0x4a4b45 < fpsr_rate * 0xa; _0x4a4b45++) {
          for (let _0x36707e = 0x0; _0x36707e < fpsr_rate * 0xa; _0x36707e++) getEntityName(_0x4a4b45 + _0x36707e);
        }
      }
      if (ArrowParticle) {
        const _0x55841a = getEntityList();
        _0x55841a['forEach'](_0x34f158 => {
          if (getEntityNamespace(_0x34f158) === 'minecraft:arrow') {
            const _0x53246b = getPos(_0x34f158);
            息外无期功(arp_type, _0x53246b['x'], _0x53246b['y'], _0x53246b['z'], 0x1);
          }
        });
      }
      if (FightBot && at_lists['length'] > 0x0) {
        let _0x16d921 = getPos(at_lists[0x0]);
        let _0x48a4b5 = {};
        if (fb_chest) {
          const _0x38f003 = 私情则告诉(self_id);
          for (let _0x480e6f = -0x2; _0x480e6f < 0x3; _0x480e6f++) {
            for (let _0x4989c3 = -0x2; _0x4989c3 < 0x3; _0x4989c3++) {
              for (let _0x1bb446 = -0x2; _0x1bb446 < 0x3; _0x1bb446++) {
                const _0xfb2d07 = getBlock(_0x38f003['x'] + _0x480e6f, _0x38f003['y'] + _0x4989c3, _0x38f003['z'] + _0x1bb446);
                const _0x583df1 = 临门急于星([_0x38f003['x'] + _0x480e6f, _0x38f003['y'] + _0x4989c3, _0x38f003['z'] + _0x1bb446]);
                if (_0xfb2d07['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x583df1)) {
                  _0x48a4b5 = {
                    'x': _0x38f003['x'] + _0x480e6f,
                    'y': _0x38f003['y'] + _0x4989c3,
                    'z': _0x38f003['z'] + _0x1bb446
                  };
                  ca_chest_pos['push'](_0x583df1);
                  break;
                }
              }
            }
          }
        }
        let _0x324454 = (_0x5f2e5d ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
        let _0x1ebddb = 命诏书特下(0x0, 0x64) < fb_moveRate;
        if (fb_randMove && _0x1ebddb) {
          _0x16d921 = 非臣陨首所(_0x324454, _0x16d921, {
            'yaw': 命诏书特下(0x0, 0x1) ? 0x5a : -0x5a,
            'pitch': 0x0
          });
        }
        let _0x5eb5b4 = 伏惟圣朝以(self_id, _0x16d921, 'yaw_pos');
        let _0x7880bc = 非臣陨首所(_0x324454, getPos(self_id), {
          'yaw': _0x5eb5b4,
          'pitch': 0x0
        });
        if (_0x277e7e['current'] < fb_heal) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'splash_potion', 0x16));else {
            setLocalPlayerTurn(-0x5a, 0x0);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 强近之亲内(), 0x4b);
          }
        }
        const _0x35fc89 = 峻责臣逋慢(self_id, at_lists[0x0]);
        if (_0x35fc89 > fb_seek) {
          if (_0x5f2e5d) setEntityMotion(self_id, _0x7880bc['x'] - self_pos['x'], (fb_jump || 命诏书特下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x5f2e5d ? fb_y : _0x9fc138['y'], _0x7880bc['z'] - self_pos['z']);
          KillAura = false;
          KeepDistance = false;
          if (fb_sca) Scaffold = true;
          if (Scaffold && sca_keep) sca_current = 0x0;
          if (命诏书特下(0x0, 0x64) < fb_fishRate && 孝治天下凡(self_id, at_lists[0x0], 0x14, 0x0) && _0x35fc89 < fb_seek * 0x3) {
            selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'fishing_rod'));
            if (self_item['namespace']['includes']('fishing_rod')) 强近之亲内();
          }
        } else {
          if (命诏书特下(0x0, 0x64) < fb_snowRate && 孝治天下凡(self_id, at_lists[0x0], 0x14, 0x0)) {
            selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'snowball'));
            if (self_item['namespace']['includes']('snowball')) 强近之亲内();
          }
          if (_0x5f2e5d) setEntityMotion(self_id, fb_randMove && _0x1ebddb ? _0x7880bc['x'] - self_pos['x'] : _0x9fc138['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x9fc138['y'], fb_randMove && _0x1ebddb ? _0x7880bc['z'] - self_pos['z'] : _0x9fc138['z']);
          if (fb_weapon) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword'));
          if (fb_ka) KillAura = true;
          if (fb_kd) KeepDistance = true;
          if (fb_aa) AssistAim = true;
          Scaffold = false;
        }
        if (JSON['stringify'](_0x48a4b5) != '{}') {
          let _0x1688f1 = 伏惟圣朝以(self_id, _0x48a4b5, 'yaw_pos');
          let _0x2524d6 = 非臣陨首所(_0x324454, getPos(self_id), {
            'yaw': _0x1688f1,
            'pitch': 0x0
          });
          if (_0x5f2e5d) setEntityMotion(self_id, _0x2524d6['x'] - self_pos['x'], (fb_jump || 命诏书特下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x5f2e5d ? fb_y : _0x9fc138['y'], _0x2524d6['z'] - self_pos['z']);
        }
      }
      if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
        for (let _0x4798be = 0x0; _0x4798be < rpc_repeat_times; _0x4798be++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        rpc_t = 0x0;
      }
      if (AutoShifter && ticks % shift_tick == 0x0) {
        for (let _0x859787 = 0x0; _0x859787 < shift_num; _0x859787++) setEntityFlag(self_id, 0x1, true);
      }
      if (AutoCrystal && at_lists['length'] > 0x0) {
        if (ac_auto) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'end_crystal'));
        if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
          let _0x59ed30 = 0x0;
          at_lists['forEach'](_0x2e6bad => {
            let _0x345f81 = 私情则告诉(_0x2e6bad);
            if (ac_excludeY && Math['abs'](_0x345f81['y'] - self_pos['y']) < 0x1) return;
            if (ac_tp) setPos(_0x345f81['x'], _0x345f81['y'] + 0x1, _0x345f81['z']);
            for (let _0x48f608 = -0x1; _0x48f608 < 0x2; _0x48f608++) {
              for (let _0x206147 = -0x2; _0x206147 < 0x0; _0x206147++) {
                for (let _0x3bd933 = -0x1; _0x3bd933 < 0x2; _0x3bd933++) {
                  let _0x463e7a = getBlock(_0x345f81['x'] + _0x48f608, _0x345f81['y'] + _0x3bd933, _0x345f81['z'] + _0x206147);
                  if (_0x59ed30 > ac_count) break;
                  if ((_0x463e7a['namespace'] === 'minecraft:bedrock' || _0x463e7a['namespace'] === 'minecraft:obsidian') && _0x59ed30 < ac_count) {
                    buildBlock(self_id, _0x345f81['x'] + _0x48f608, _0x345f81['y'] + _0x3bd933, _0x345f81['z'] + _0x206147, 0x1);
                    _0x59ed30++;
                  }
                }
              }
            }
          });
        } else _0x5baecd['push'](以表闻辞不(0x1, 'Crystal', '请手持水晶', '§r'));
      }
      if (CrystalAura) {
        const _0xfabe0d = getEntityList();
        _0xfabe0d['forEach'](_0xcf0560 => {
          if (!鲜兄弟门衰(_0xcf0560)) return;
          const _0x4b3aee = getPos(_0xcf0560);
          if (getEntityTypeId(_0xcf0560) !== 0x47 || 就职诏书切(_0xcf0560, at_lists[0x0]) > ca_distTo) return;
          if (ca_block && !self_item['isBlock']) {
            for (let _0x9bc5ff = 0x0; _0x9bc5ff < 0x9; _0x9bc5ff++) {
              const _0x49e40d = getInventory(self_id, _0x9bc5ff);
              if (_0x49e40d['isBlock']) {
                selectPlayerInventorySlot(self_id, _0x9bc5ff);
                break;
              }
            }
            buildBlock(self_id, (_0x51b728['x'] + _0x4b3aee['x']) / 0x2, (_0x51b728['y'] + _0x4b3aee['y']) / 0x2, (_0x51b728['z'] + _0x4b3aee['z']) / 0x2, 0x0);
            臣荣举臣秀(_0xcf0560, Swing);
          }
        });
      }
      if (AutoAnchor && at_lists['length'] > 0x0) {
        if (ab_auto) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'respawn_anchor'));
        if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
          at_lists['forEach'](_0x375768 => {
            let _0x367642 = 私情则告诉(_0x375768);
            let _0x42025e = getBlock(_0x367642['x'], _0x367642['y'] + 0x2, _0x367642['z']);
            if (_0x42025e['namespace'] === 'minecraft:air') buildBlock(self_id, _0x367642['x'], _0x367642['y'] + 0x2 + ab_offset, _0x367642['z'], 0x0);
            _0x42025e = getBlock(_0x367642['x'], _0x367642['y'] + 0x2 + ab_offset, _0x367642['z']);
            if (ab_click && _0x42025e['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x367642['x'], _0x367642['y'] + 0x2 + ab_offset, _0x367642['z'], 0x0);
          });
        } else _0x5baecd['push'](以表闻辞不(0x1, 'Anchor', '请手持重生锚', '§r'));
      }
      if (AutoTrap && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x515b40 => {
          const _0x35c50c = 私情则告诉(_0x515b40);
          let _0x58c93a = [[_0x35c50c['x'], _0x35c50c['y'] + 0x1, _0x35c50c['z']], [_0x35c50c['x'] + 0x1, _0x35c50c['y'], _0x35c50c['z']], [_0x35c50c['x'] - 0x1, _0x35c50c['y'], _0x35c50c['z']], [_0x35c50c['x'], _0x35c50c['y'], _0x35c50c['z'] + 0x1], [_0x35c50c['x'], _0x35c50c['y'], _0x35c50c['z'] - 0x1], [_0x35c50c['x'] + 0x1, _0x35c50c['y'] - 0x1, _0x35c50c['z']], [_0x35c50c['x'] - 0x1, _0x35c50c['y'] - 0x1, _0x35c50c['z']], [_0x35c50c['x'], _0x35c50c['y'] - 0x1, _0x35c50c['z'] + 0x1], [_0x35c50c['x'], _0x35c50c['y'] - 0x1, _0x35c50c['z'] - 0x1]];
          for (pos of _0x58c93a) {
            let _0xb66f85 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
            if (_0xb66f85['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
            if (_0xb66f85['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
          }
        });
      }
      if (KillAura && at_lists['length'] > 0x0) {
        let _0x27c4f4 = [];
        let _0x3ec610 = false;
        random_num = 命诏书特下(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
        random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
        at_lists['forEach'](_0x497470 => {
          let _0x834c52 = getPos(_0x497470);
          if (!((就职诏书切(self_id, _0x497470) <= ka_range || ka_infDist) && 孝治天下凡(self_id, _0x497470, ka_fov, 0x0) && 洗马猥以微(self_pos, _0x834c52, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x9fc138['y'] < -0.42))) return;
          _0x27c4f4['push'](_0x497470);
          KillAura_d_1[_0x497470] = Date['now']();
          if (typeof KillAura_d_2[_0x497470] !== 'undefined' && KillAura_d_1[_0x497470] - KillAura_d_2[_0x497470] < 0x0) return;
          _0x3ec610 = true;
          for (k = 0x0; k < ka_times; k++) 臣荣举臣秀(_0x497470, Swing);
          KillAura_d_2[_0x497470] = KillAura_d_1[_0x497470] + random_delay;
          if (ka_third) setPlayerViewPerspective(_0x3ec610 ? 0x1 : 0x0);
        });
        if (_0x27c4f4['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'KillAura', ShortList ? _0x27c4f4['length'] + '个目标' : 临门急于星(_0x27c4f4['map'](_0x48755e => getEntityName(_0x48755e))), '§r'));
        const _0x22d11d = _0x27c4f4['length'] * random_num * ka_times;
        if (ka_show && _0x22d11d > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'APS', _0x22d11d + '/s', '§r'));
      }
      if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
      if (SlowDown && _0x9fc138['y'] < -0.074 && !_0x5f2e5d) setMotion(_0x9fc138['x'], -sd_speed / 0x14, _0x9fc138['z']);
      if (SurroundParticle && (self_moving || !srp_move)) {
        srp_current = srp_current + srp_speed * 0x3;
        if (srp_current > 0xb4) srp_current = -0xb4;
        let _0x13e5bb = 非臣陨首所(srp_len, self_pos, {
          'yaw': srp_current,
          'pitch': 0x0
        });
        息外无期功(srp_type, _0x13e5bb['x'], _0x13e5bb['y'] - 1.8 + srp_y, _0x13e5bb['z'], srp_size);
      }
      if (motion_list['length'] > 0x0) {
        const _0x118d44 = motion_list['shift']();
        setMotion(_0x118d44[0x0], _0x118d44[0x1], _0x118d44[0x2]);
      }
      if (Scaffold && self_item['isBlock']) {
        sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
        if (sca_count) _0x5baecd['push'](以表闻辞不(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
        const _0x4b4f55 = 拜臣郎中寻(_0x9fc138, self_pos, 0xa);
        var _0x25013c = sca_move || self_moving ? 伏惟圣朝以(_0x4b4f55, self_id, 'yaw_pos') : _0x3cd4b8['yaw'];
        var _0x5405fc = sca_move || self_moving ? 伏惟圣朝以(_0x4b4f55, self_id, 'pitch_pos') : _0x3cd4b8['pitch'];
        if (!sca_acc) _0x25013c = roundAngle(_0x25013c, sca_prec);
        if (!sca_acc) _0x5405fc = roundAngle(_0x5405fc, sca_prec);
        if (sca_auto) {
          let _0x1e0a09 = {};
          let _0x5f42f7 = Infinity;
          for (let _0x571044 = -0x3; _0x571044 <= 0x3; _0x571044++) {
            for (let _0x49f9f4 = -0x3; _0x49f9f4 <= -0x1; _0x49f9f4++) {
              for (let _0x3d9ae8 = -0x3; _0x3d9ae8 <= 0x3; _0x3d9ae8++) {
                let _0x2576f3 = {
                  'x': _0x571044 + _0x51b728['x'],
                  'y': Math['floor'](sca_current) - 0x1 + _0x49f9f4,
                  'z': _0x3d9ae8 + _0x51b728['z']
                };
                const _0x37a9d3 = getBlock(_0x2576f3['x'], _0x2576f3['y'], _0x2576f3['z']);
                if (_0x37a9d3['namespace'] == 'minecraft:air') continue;
                let _0x137c9f = Math['sqrt'](_0x571044 * _0x571044 - _0x49f9f4 * _0x49f9f4 + _0x3d9ae8 * _0x3d9ae8);
                if (_0x137c9f < _0x5f42f7) {
                  _0x5f42f7 = _0x137c9f;
                  _0x1e0a09 = _0x2576f3;
                }
              }
            }
          }
          if (JSON['stringify'](_0x1e0a09) != '{}') {
            let _0x4d7731 = 矜育况臣孤(_0x1e0a09, _0x51b728, 0x1, true);
            _0x4d7731['forEach'](_0x4d8791 => {
              if (sca_surface) 立形影相吊(Math['floor'](_0x4d8791['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x4d8791['z']));else buildBlock(self_id, Math['floor'](_0x4d8791['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x4d8791['z']), 0x1);
            });
          }
        }
        for (let _0x4e9e14 = 0x0; _0x4e9e14 < sca_len; _0x4e9e14++) {
          const _0x24449c = 非臣陨首所(_0x4e9e14, self_pos, {
            'yaw': _0x25013c,
            'pitch': sca_y ? _0x5405fc : 0x0
          });
          let _0x38a252 = {
            'x': Math['floor'](_0x24449c['x']),
            'y': Math['floor'](sca_current) - 0x1,
            'z': Math['floor'](_0x24449c['z'])
          };
          let _0x9996fd = getBlock(_0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z']);
          if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x9996fd['namespace'])) continue;
          if (sca_fake) setBlock(_0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z'], self_item['namespace'], self_item['aux']);else if (sca_surface) 立形影相吊(_0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z']);else buildBlock(self_id, _0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z'], 0x1);
          if (sca_up) {
            const _0x1e5f87 = getBlock(_0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z']);
            if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x1e5f87['namespace'])) buildBlock(self_id, _0x38a252['x'], Math['floor'](_0x38a252['y']), _0x38a252['z'], 0x0);
          }
          ;
        }
      }
      if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
        for (let _0x2445ef = 0x0; _0x2445ef < 0x9; _0x2445ef++) {
          const _0x399e5d = getInventory(self_id, _0x2445ef);
          if (_0x399e5d['isBlock']) {
            selectPlayerInventorySlot(self_id, _0x2445ef);
            break;
          }
        }
      }
      if (AttackSelf) 臣荣举臣秀(self_id, Swing);
      if (TargetHud) {
        if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
        if (th_target && 鲜兄弟门衰(th_target)) {
          let _0x466c7c = [];
          const _0x47ef58 = isPlayer(th_target) ? getCarried(th_target) : {
            'name': '无',
            'count': 0x0
          };
          const _0x42aa54 = 就职诏书切(th_target, self_id)['toFixed'](0x2);
          const _0xb472e0 = 私情则告诉(th_target);
          _0x466c7c['push'](th_head);
          if (th_name) _0x466c7c['push']('名称:' + getEntityName(th_target));
          if (th_carry) _0x466c7c['push']('手持: ' + _0x47ef58['name'] + ' x' + _0x47ef58['count']);
          if (th_dist) _0x466c7c['push']('距离: ' + _0x42aa54 + 'm');
          if (th_pos) _0x466c7c['push']('坐标: [' + _0xb472e0['x'] + ', ' + _0xb472e0['y'] + ', ' + _0xb472e0['z'] + ']');
          if (th_effect) _0x466c7c['push']('药水效果: ' + 临门急于星(getEntityEffectList(th_target)['map'](_0x5d9d78 => EffectsEnum[_0x5d9d78['id']])));
          if (th_health) _0x466c7c['push']('血量: ' + 苦特为尤甚(th_target, modes['th_health_mode']));
          if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
            updateTextContent(th_id, _0x466c7c['join']('\n'));
            updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
            updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
            updateTextScale(th_id, th_size);
          } else th_target = null;
        } else updateTextContent(th_id, '');
      }
      if (AntiVoid) {
        if (modes['av_mode'] === 0x0) {
          if (!av_running && !_0x5f2e5d && _0x9fc138['y'] > -av_minY) av_pos['push'](_0x51b728);
          if (!av_running && _0x5f2e5d) av_pos = [];
          if (!av_running && _0x9fc138['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0xc5fb8a = av_pos.pop();
              setPos(_0xc5fb8a['x'], _0xc5fb8a['y'], _0xc5fb8a['z']);
              if (av_derp) setLocalPlayerTurn(0x0, 0x78);
            } else av_running = false;
          }
        }
        if (_0x9fc138['y'] <= -av_minY && modes['av_mode'] === 0x1) {
          const _0xc959d3 = {
            'rot': _0x3cd4b8,
            'yHeadRot': 0x0
          };
          const _0x173b9d = {
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
            ..._0xc959d3
          };
          const _0xa27ae8 = {
            'id': self_id,
            'pos': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            'mode': 0x1,
            'ground': true,
            ..._0xc959d3
          };
          sendPlayerAuthInput(_0x173b9d);
          sendMovePlayer(_0xa27ae8);
        }
        if (modes['av_mode'] === 0x2) {
          if (!av_running && _0x5f2e5d && _0x9fc138['y'] > -av_minY) av_pos[0x0] = self_pos;
          if (!av_running && _0x9fc138['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x5d6e8c = av_pos[0x0];
              setPos(_0x5d6e8c['x'], _0x5d6e8c['y'], _0x5d6e8c['z']);
              av_pos = [];
            } else av_running = false;
          }
        }
      }
      if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x5f2e5d)) {
        if (gm_tick <= gm_cycle) {
          gm_pos = getPos(self_id);
          gm_mot = getEntityMotion(self_id);
          for (let _0x5cb212 = 0x0; _0x5cb212 < gm_count; _0x5cb212++) {
            if (modes['gm_mode'] === 0x0) 臣侍汤药未(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
            if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
          }
          if (!gm_back) gm_tick = 0x0;
        }
        if (gm_back && gm_tick >= gm_cycle + gm_delay) {
          for (let _0x58cb68 = 0x0; _0x58cb68 < gm_count; _0x58cb68++) {
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
                'rot': _0x3cd4b8,
                'yHeadRot': 0x0
              });
            }
          }
          gm_tick = 0x0;
        }
      }
      if (KeepDistance && at_lists['length'] > 0x0 && 峻责臣逋慢(self_id, at_lists[0x0]) < kd_distance && (_0x5f2e5d || !kd_only_ground)) {
        const _0x1bc333 = 伏惟圣朝以(getPos(at_lists[0x0]), self_id, 'yaw_pos');
        const _0x13c774 = 非臣陨首所(-kd_speed / 0xa, self_pos, {
          'yaw': _0x1bc333,
          'pitch': _0x3cd4b8['pitch']
        });
        if (kd_anti) silentMove(_0x13c774['x'] * 0x2, _0x13c774['y'] * 0x2, _0x13c774['z'] * 0x2);else setMotion(_0x13c774['x'] - self_pos['x'], _0x9fc138['y'], _0x13c774['z'] - self_pos['z']);
      }
      if (dl_list['length'] > 0x0) {
        for (let _0x23fda2 = 0x0; _0x23fda2 < di_speed; _0x23fda2++) {
          let _0x22c0d3 = dl_list.pop();
          dropPlayerInventorySlot(self_id, _0x22c0d3, false, true);
        }
      }
      if (RandomDrop) dropPlayerInventorySlot(self_id, 命诏书特下(0x0, 0x8));
      if (RandomSelect) selectPlayerInventorySlot(self_id, 命诏书特下(0x0, 0x8));
      if (Trace && at_lists['length'] > 0x0 && 就职诏书切(self_id, at_lists[0x0]) > tra_range) {
        let _0x252f6b = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
        let _0x1b3718 = 伏惟圣朝以(self_id, at_lists[0x0], 'pitch_pos');
        let _0x10a6ed = 非臣陨首所(-tra_speed / 0x5, getPos(self_id), {
          'yaw': _0x252f6b,
          'pitch': -_0x1b3718
        });
        setPos(_0x10a6ed['x'], _0x10a6ed['y'], _0x10a6ed['z']);
      }
      if (LineParticle && at_lists['length'] > 0x0) {
        let _0x5bcf97 = getPos(self_id);
        _0x5bcf97['y'] += lp_offset / 0xa;
        at_lists['forEach'](_0x330c7d => {
          let _0xb12587 = getPos(_0x330c7d);
          _0xb12587['y'] += 0.765;
          let _0x2e6ed8 = 伏惟圣朝以(_0x5bcf97, _0xb12587, 'yaw_pos');
          let _0x4e8d8b = 伏惟圣朝以(_0x5bcf97, _0xb12587, 'pitch_pos');
          for (let _0x20f599 = 0x0; _0x20f599 < 就职诏书切(_0x330c7d, self_id); _0x20f599 += (0xb - lp_size) / 0x5) {
            let _0x40891c = 非臣陨首所(-_0x20f599, getPos(self_id), {
              'yaw': _0x2e6ed8,
              'pitch': -_0x4e8d8b
            });
            息外无期功(lp_type, _0x40891c['x'], _0x40891c['y'] - 1.53 + lp_offset / 0xa, _0x40891c['z'], 0x1);
          }
        });
      }
      if (PyRpcManager && rpc_store) _0x5baecd['push'](以表闻辞不(0x1, 'PyRpcManager', '已储存的RPC: ' + rpc_temp['length'] + '个', '§r'));
      if (Spammer && ticks % spm_delay == 0x0) {
        let _0x461103 = spm_text;
        if (spm_file) {
          let _0x48388f = 日笃欲苟顺(nx_paths + '/Spammer.txt')['split']('\n');
          _0x461103 = _0x48388f[命诏书特下(0x0, _0x48388f['length'] - 0x1)];
        }
        const _0x4721e4 = 'abcdef';
        if (spm_gradual) _0x461103 = 年四岁舅夺(_0x461103);
        if (spm_rainbow) _0x461103 = '§' + _0x4721e4[命诏书特下(0x0, _0x4721e4['length'] - 0x1)] + _0x461103;
        if (spm_attack && at_lists['length'] > 0x0) _0x461103 = ' §e@' + at_lists['map'](_0xcdec9e => getEntityName(_0xcdec9e))['join'](',') + ' §r' + _0x461103;
        for (let _0x11e991 = 0x0; _0x11e991 < spm_count; _0x11e991++) {
          let _0x590355 = 且臣少仕伪(0x6);
          sendChatMessage(spm_random ? _0x461103 + '§r || ' + _0x590355 : _0x461103);
        }
      }
      if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x1139e1 => setEntitySize(_0x1139e1, hb_hor, hb_y));
      if (Sucker && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x2234af => {
          const _0x1cdafc = 非臣陨首所(suck_range, self_pos, _0x3cd4b8);
          setRealPos(_0x2234af, _0x1cdafc['x'], _0x1cdafc['y'], _0x1cdafc['z']);
        });
      }
      if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x1517f9 => 孝治天下凡(_0x1517f9, self_id, aaim_fov, false));
      if (aaim_states) {
        let _0x5a3fdf = 非臣陨首所(0.3 * aaim_speed / 0x5, self_pos, {
          'yaw': _0x3cd4b8['yaw'] + (Math['round'](命诏书特下(0x0, 0x1)) ? 0x5a : -0x5a),
          'pitch': 0x0
        });
        setMotion(_0x5a3fdf['x'] - self_pos['x'], _0x9fc138['y'], _0x5a3fdf['z'] - self_pos['z']);
        aaim_states = false;
      }
      if (Velocity && self_moving) {
        let _0x22fc10 = _0x3cd4b8['yaw'];
        if (modes['bhop_mode'] === 0x1) {
          bhop_mot = getEntityMotion(self_id);
          bhop_pos = getPos(self_id);
          const _0x15a2e3 = 拜臣郎中寻(bhop_mot, getPos(self_id), 0x5);
          _0x22fc10 = 伏惟圣朝以(self_id, _0x15a2e3, 'yaw_pos');
        }
        let _0x2cd359 = 非臣陨首所((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
          'yaw': _0x22fc10,
          'pitch': 0x0
        });
        setMotion(_0x2cd359['x'] - self_pos['x'], vec_bhop && (_0x5f2e5d || bhop_airjump) && (!bhop_airjump || _0x9fc138['y'] < -0.42) ? bhop_heigh : _0x9fc138['y'], _0x2cd359['z'] - self_pos['z']);
      }
      if (FlexibleMove) {
        const _0x2585aa = getCameraRotation();
        const _0x2b5551 = 非臣陨首所(fb_speed / 0xa, self_pos, {
          'yaw': _0x2585aa['yaw'] > 0x0 ? 0xb4 - _0x2585aa['yaw'] : -0xb4 - _0x2585aa['yaw'],
          'pitch': -_0x2585aa['pitch']
        });
        if (!_0x5f2e5d && self_moving) setMotion(_0x2b5551['x'] - self_pos['x'], 0x0, _0x2b5551['z'] - self_pos['z']);
      }
      if (TargetParticle) {
        at_lists['forEach'](_0x1b6306 => {
          const _0x421b22 = getPos(_0x1b6306);
          息外无期功(tp_type, _0x421b22['x'], _0x421b22['y'] + 0.3, _0x421b22['z'], tp_size);
        });
      }
      if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x2d4faa === 'inventory_screen') && (!ic_chest || _0x2d4faa['includes']('chest_screen')) && (!ic_bow || _0x3cd4b8['pitch'] > 0x50)) {
        for (let _0x245fd8 = 0x0; _0x245fd8 < ic_max; _0x245fd8++) {
          const _0x377952 = getInventory(self_id, cleaner_slot);
          if (_0x377952['count'] === 0x0) {
            if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
            continue;
          }
          ;
          let _0x4380d8 = false;
          let _0x1ec275 = clear_config[_0x377952['namespace']];
          let _0x4c8bfa = 曾废离愍(-0x2, _0x377952['namespace']);
          if (modes['ic_mode'] === 0x0 && _0x1ec275) _0x4380d8 = true;
          if (modes['ic_mode'] === 0x1 && (!_0x1ec275 || _0x1ec275 && (_0x1ec275['max_num'] === -0x1 || _0x4c8bfa > _0x1ec275['max_num']) && (_0x1ec275['aux'] === 'any' || _0x377952['aux'] === _0x1ec275['aux']))) _0x4380d8 = true;
          if (ic_move && !_0x4380d8 && typeof _0x1ec275 !== 'undefined' && _0x1ec275['slot'] !== 'undefined') 苦至于成立(cleaner_slot, _0x1ec275['slot'], true, false);
          if (_0x4380d8) {
            if (trash_slot > -0x1 && cleaner_slot > 0x8) {
              苦至于成立(cleaner_slot, trash_slot, true, false);
              dropPlayerInventorySlot(self_id, trash_slot, false, modes['ic_mode'] === 0x0 && _0x1ec275 || modes['ic_mode'] === 0x1 && !_0x1ec275);
            } else dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x1ec275 || modes['ic_mode'] === 0x1 && !_0x1ec275);
          }
          if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
        }
      }
      if (SafeWalk && self_moving) {
        const _0x176a90 = getEntityRot(self_id)['yaw'];
        const _0x1c3984 = 非臣陨首所(0.3, self_pos, {
          'yaw': _0x176a90,
          'pitch': 0x0
        });
        const _0x4a2927 = getBlock(_0x1c3984['x'], _0x1c3984['y'] - 1.7, _0x1c3984['z']);
        if (_0x4a2927['namespace'] === 'minecraft:air' && _0x5f2e5d) setMotion(-_0x9fc138['x'], _0x9fc138['y'], -_0x9fc138['z']);
      }
      if (Spider && self_moving) {
        const _0x370c02 = _0x3cd4b8['yaw'];
        const _0x17132b = 非臣陨首所(0.5, self_pos, {
          'yaw': _0x370c02,
          'pitch': 0x0
        });
        const _0x46f9b1 = getBlock(_0x17132b['x'], self_pos['y'] - 1.3, _0x17132b['z']);
        if (_0x46f9b1['namespace'] != 'minecraft:air') setMotion(_0x9fc138['x'], sp_speed / 0xf, _0x9fc138['z']);
      }
      if (DirectRender) {
        const _0x4e88f2 = 拜臣郎中寻(_0x9fc138, self_pos, 0xa);
        const _0x13a968 = 非臣陨首所(0x1, self_pos, {
          'yaw': _0x25013c,
          'pitch': 0x0
        });
        var _0x102fd3 = _0x3cd4b8['yaw'];
        var _0x28a722 = 伏惟圣朝以(_0x4e88f2, self_id, 'yaw_pos');
        for (let _0x451b82 = 0x0; _0x451b82 < dr_num; _0x451b82++) {
          const _0x18fef0 = 非臣陨首所(_0x451b82 * dr_space / 0x5, self_pos, {
            'yaw': _0x102fd3,
            'pitch': 0x0
          });
          const _0x222fa1 = 非臣陨首所(_0x451b82 * dr_space / 0x5, self_pos, {
            'yaw': _0x28a722,
            'pitch': 0x0
          });
          if (dr_rot) 息外无期功(0x37, _0x18fef0['x'], self_pos['y'] - 0.27, _0x18fef0['z'], 0x1);
          if (dr_move) 息外无期功(0x37, _0x222fa1['x'], self_pos['y'] - 1.3, _0x222fa1['z'], 0x1);
        }
      }
      if (Fly && (!_0x5f2e5d || !fly_air) && (!fly_move || self_moving) && _0x6644d2 > 0x0) {
        const _0x85dd1d = fly_ud ? fly_current : 0x0;
        let _0x3e7c42 = 拜臣郎中寻(_0x9fc138, self_pos, fly_speed * 2.5);
        if (modes['fly_mode'] === 0x0) {
          if (fly_y) setPos(_0x3e7c42['x'], self_pos['y'] + _0x85dd1d, _0x3e7c42['z']);else setPos(self_pos['x'], _0x3e7c42['y'], self_pos['z']);
          if (fly_zero) setMotion(0x0, 0x0, 0x0);
        }
        if (modes['fly_mode'] === 0x1) setMotion(_0x3e7c42['x'] - self_pos['x'], _0x3e7c42['y'] - self_pos['y'], _0x3e7c42['z'] - self_pos['z']);
        if (fly_playerAuth) silentMove(_0x3e7c42['x'], _0x3e7c42['y'], _0x3e7c42['z']);
        if (fly_moveplayer) sendMovePlayer({
          'id': self_id,
          'pos': {
            'x': _0x3e7c42['x'],
            'y': _0x3e7c42['y'],
            'z': _0x3e7c42['z']
          },
          'mode': 0x1,
          'ground': true,
          'rot': {
            'pitch': _0x3cd4b8['pitch'],
            'yaw': _0x3cd4b8['yaw']
          },
          'yHeadRot': getEntityBodyRot(self_id)
        });
        fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
      }
      if (ActivitySender && self_moving) {
        let _0x85c68d = 拜臣郎中寻(_0x9fc138, self_pos, 0x1);
        const _0x3a66a6 = 伏惟圣朝以(self_id, _0x85c68d, 'yaw_pos');
        sendChatMessage('我正在向' + Math['round'](_0x3a66a6) + '°方向移动');
      }
      if (Suspend) setMotion(_0x9fc138['x'], -0x186a0, _0x9fc138['z']);
      if (Hover) setMotion(_0x9fc138['x'], 0.05, _0x9fc138['z']);
      if (Rider && at_lists['length'] > 0x0) {
        let _0x215c90 = getPos(at_lists[0x0]);
        const _0x25da5e = rid_random ? 命诏书特下(-0x2, 0x2) : 0x0;
        郡县逼迫催(_0x215c90['x'] + _0x25da5e, _0x215c90['y'] + rid_y + 0x1, _0x215c90['z'] + _0x25da5e);
        _0x5baecd['push'](以表闻辞不(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
      }
      if (JetPack) {
        const _0x212c4b = getCameraRotation();
        if (self_moving || !spr_move) {
          let _0x4cd9d3 = 非臣陨首所(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
            'yaw': _0x212c4b['yaw'] > 0x0 ? 0xb4 - _0x212c4b['yaw'] : -0xb4 - _0x212c4b['yaw'],
            'pitch': -_0x212c4b['pitch']
          });
          if (spr_hor) _0x4cd9d3['y'] = self_pos['y'];
          const _0x4bb682 = getBlock(_0x4cd9d3['x'], _0x4cd9d3['y'], _0x4cd9d3['z']);
          if (_0x4bb682['namespace'] === 'minecraft:air' || spr_nowall) {
            if (modes['sprint_mode'] === 0x0) {
              setPos(_0x4cd9d3['x'], _0x4cd9d3['y'], _0x4cd9d3['z']);
              setEntityMotion(self_id, _0x9fc138['x'], -1e-7, _0x9fc138['z']);
            }
            if (modes['sprint_mode'] === 0x1) setMotion(_0x4cd9d3['x'] - self_pos['x'], _0x4cd9d3['y'] - self_pos['y'], _0x4cd9d3['z'] - self_pos['z']);
            if (spr_auth) silentMove(_0x4cd9d3['x'], _0x4cd9d3['y'], _0x4cd9d3['z']);
            if (spr_packet) sendMovePlayer({
              'id': self_id,
              'pos': {
                'x': _0x4cd9d3['x'],
                'y': _0x4cd9d3['y'],
                'z': _0x4cd9d3['z']
              },
              'mode': 0x1,
              'ground': true,
              'rot': {
                'pitch': _0x3cd4b8['pitch'],
                'yaw': _0x3cd4b8['yaw']
              },
              'yHeadRot': getEntityBodyRot(self_id)
            });
          } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        }
      }
      if (Crasher) {
        for (let _0x15b986 = 0x0; _0x15b986 < cs_count; _0x15b986++) {
          const _0x30d8f1 = Math['sqrt'](_0x15b986);
          if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x51b728['x'], _0x51b728['y'], _0x51b728['z'], _0x30d8f1);
          if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
          if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n'['repeat'](0x32));
          if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n'['repeat'](0x32));
          if (modes['cs_mode'] === 0x4) sendSound(_0x15b986, self_pos['x'], self_pos['y'], self_pos['z'], _0x15b986);
          if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0xabaa86 => {
            if (_0xabaa86 !== self_id) 臣荣举臣秀(_0xabaa86, false);
          });
          if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
            'pos': self_pos,
            'yHeadRot': 0x0,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [_0x15b986],
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
            'type': _0x15b986,
            'value': 0x1
          });
          if (modes['cs_mode'] === 0x8) executeCommand('/w 你好 再见');
        }
      }
      if (KickAura && at_lists['length'] > 0x0) {
        let _0x59f50a = [];
        if (ka_player) _0x59f50a['concat'](_0x560116['map'](_0x2fb04b => _0x2fb04b['id']));
        if (ka_target) _0x59f50a['concat'](at_lists);
        if (modes['ka_mode'] == 0x0) _0x59f50a['forEach'](_0x2a34b2 => {
          if (_0x2a34b2 == self_id) return;
          const _0x349b28 = getEntityName(_0x2a34b2);
          let _0x13f4c8 = _0x349b28['indexOf'](']') - 0x2;
          let _0x3c9ca6 = ['b', 'c', 'e', 'a'];
          for (let _0x764127 of _0x3c9ca6) {
            if (_0x349b28['indexOf']('·§' + _0x764127) != -0x1) {
              _0x13f4c8 = _0x349b28['indexOf']('·§' + _0x764127);
              break;
            }
          }
          let _0x26b73e = _0x13f4c8 === -0x1 ? _0x349b28 : _0x349b28['slice'](_0x13f4c8 + 0x3, _0x349b28['length']);
          if (_0x26b73e['includes']('【') && _0x26b73e['includes']('】')) _0x26b73e = 孝廉后刺史(_0x26b73e, '【', '】');
          for (let _0x31aad8 = 0x0; _0x31aad8 < ka_count; _0x31aad8++) executeCommand('/tell "' + _0x26b73e + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
        });
        if (modes['ka_mode'] == 0x1) {
          for (let _0x5cfaaa = 0x0; _0x5cfaaa < ka_count; _0x5cfaaa++) executeCommand('/tell @a[' + _0x59f50a['map'](_0x4666bf => 'name="' + getEntityName(_0x4666bf) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
        }
      }
      if (AutoSave && _0x9fc138['y'] < as_minY && !_0x5f2e5d) {
        if (as_block && !self_item['isBlock']) {
          for (let _0x552d74 = 0x0; _0x552d74 < 0x9; _0x552d74++) {
            const _0x36d439 = getInventory(self_id, _0x552d74);
            if (_0x36d439['isBlock'] || as_water && _0x36d439['namespace'] === 'minecraft:water_bucket') {
              selectPlayerInventorySlot(self_id, _0x552d74);
              break;
            }
          }
        }
        if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
          for (let _0x53a04c of 矜育况臣孤(_0x51b728, {
            'x': _0x51b728['x'],
            'y': _0x51b728['y'] + as_minY * 0x5,
            'z': _0x51b728['z']
          }, 0x1, true)) {
            const _0x4f5e5e = getBlock(_0x53a04c['x'], _0x53a04c['y'], _0x53a04c['z']);
            if (_0x4f5e5e['namespace'] != 'minecraft:air') continue;
            const _0x147213 = getBlock(_0x53a04c['x'], _0x53a04c['y'] - 0x1, _0x53a04c['z']);
            if (_0x147213['namespace'] === 'minecraft:air' || _0x147213['namespace'] === 'minecraft:water') continue;
            buildBlock(self_id, _0x53a04c['x'], _0x53a04c['y'], _0x53a04c['z'], 0x0);
          }
        }
        if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
          if (as_fake) setBlock(self_pos['x'], _0x51b728['y'] + _0x9fc138['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);else buildBlock(self_id, _0x51b728['x'], _0x51b728['y'] + _0x9fc138['y'] * 3.1, _0x51b728['z'], 0x0);
        }
        if (as_near) {
          let _0x7b3749 = {};
          let _0x586648 = Infinity;
          for (let _0x5da7ac = -0x5; _0x5da7ac <= 0x5; _0x5da7ac++) {
            for (let _0x34edfb = -0x1; _0x34edfb <= 0x0; _0x34edfb++) {
              for (let _0x4aa426 = -0x5; _0x4aa426 <= 0x5; _0x4aa426++) {
                let _0x43e8ec = Math['sqrt'](_0x5da7ac * _0x5da7ac + _0x4aa426 * _0x4aa426 + _0x34edfb * _0x34edfb);
                let _0x4e6d83 = {
                  'x': _0x5da7ac + _0x51b728['x'],
                  'y': _0x34edfb + _0x51b728['y'],
                  'z': _0x4aa426 + _0x51b728['z']
                };
                const _0x4e23a3 = getBlock(_0x4e6d83['x'], _0x4e6d83['y'], _0x4e6d83['z']);
                if (_0x4e23a3['namespace'] === 'minecraft:air') continue;
                if (_0x43e8ec < _0x586648) {
                  _0x586648 = _0x43e8ec;
                  _0x7b3749 = _0x4e6d83;
                }
              }
            }
          }
          if (_0x7b3749 != {}) {
            let _0x10575e = {
              'x': _0x51b728['x'],
              'y': _0x51b728['y'] - 0x1 + _0x9fc138['y'] * 0x3,
              'z': _0x51b728['z']
            };
            let _0xef4b8d = 矜育况臣孤(_0x7b3749, _0x10575e, 0.8, true);
            _0xef4b8d['forEach'](_0x1a966b => {
              const _0x19fb6e = getBlock(_0x1a966b['x'], _0x1a966b['y'], _0x1a966b['z']);
              if (_0x19fb6e['namespace'] === 'minecraft:air') 立形影相吊(Math['round'](_0x1a966b['x']), Math['floor'](_0x1a966b['y']), Math['round'](_0x1a966b['z']));
            });
          }
        }
      }
      if (AssAssInate && at_lists['length'] > 0x0) {
        let _0x289da2 = getEntityRot(at_lists[0x0]);
        let _0x912ed0 = getPos(at_lists[0x0]);
        if (aai_h > aai_max) aai_reverse = true;else if (aai_h < aai_min) aai_reverse = false;
        aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
        const _0x1400e8 = aai_random ? 命诏书特下(-0xa, 0xa) : sur_speed * 0x3;
        aai_current = Surround ? aai_current + _0x1400e8 : _0x289da2['yaw'];
        if (Surround && aai_current > 0xb4) aai_current = -0xb4;
        let _0x1b1588 = 非臣陨首所(-aai_len, _0x912ed0, {
          'yaw': aai_current,
          'pitch': 0x0
        });
        if (modes['sur_mode'] === 0x0) setPos(_0x1b1588['x'], _0x912ed0['y'] + 1.83 + aai_h, _0x1b1588['z']);
        if (modes['sur_mode'] === 0x1) 臣侍汤药未(_0x1b1588['x'], _0x912ed0['y'] + 1.83 + aai_h, _0x1b1588['z']);
        _0x5baecd['push'](以表闻辞不(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
      }
      if (SoundPlayer || sp_data['length'] > 0x0) {
        let _0x48c1b3 = [];
        if (sp_target) _0x48c1b3 = at_lists;
        if (sp_all) _0x48c1b3 = getPlayerList();
        if (sp_entity) _0x48c1b3 = getEntityList();
        if (sp_posList['length'] > 0x0) _0x48c1b3 = sp_posList;
        let _0x4ae545 = [{
          'sound': sp_type,
          'level': sp_level
        }];
        sp_yaw += 0x14;
        if (sp_yaw > 0xb4) sp_yaw = -0xb4;
        for (let _0x3a657c = 0x0; _0x3a657c < sp_vec; _0x3a657c++) {
          if (sp_data['length'] > 0x0) _0x4ae545 = sp_data['shift']()['sounds'];
          if (_0x4ae545['length'] > 0x0) {
            _0x180ade: for (let _0x4221ad of _0x4ae545) {
              let _0x4c2620 = _0x4221ad['sound'];
              let _0x5f3bee = _0x4221ad['level'];
              if (_0x5f3bee === -0x1 && _0x4c2620 === 0x0) continue;
              if (sp_large) {
                const _0x310cd3 = Math['round'](sp_range * sp_space / 0x2);
                for (let _0x104512 = -_0x310cd3; _0x104512 <= _0x310cd3; _0x104512 += sp_space) {
                  for (let _0x4b9508 = -_0x310cd3; _0x4b9508 <= _0x310cd3; _0x4b9508 += sp_space) {
                    sendSound(Number(_0x4c2620), self_pos['x'] + _0x104512, self_pos['y'] + sp_y, self_pos['z'] + _0x4b9508, Number(_0x5f3bee));
                  }
                }
                continue _0x180ade;
              }
              _0x48c1b3['forEach'](_0x5480bd => {
                if (typeof _0x5480bd != 'string') for (let _0x48f30e = 0x0; _0x48f30e < sp_count; _0x48f30e++) sendSound(Number(_0x4c2620), _0x5480bd['x'], _0x5480bd['y'] + sp_y, _0x5480bd['z'], Number(_0x5f3bee));else {
                  if (_0x5480bd === self_id && sp_exclude) return;
                  const _0x47b3f7 = getPos(_0x5480bd);
                  let _0x3b4bf9 = 非臣陨首所(sp_distance, _0x47b3f7, {
                    'yaw': sp_yaw,
                    'pitch': 0x0
                  });
                  for (let _0x254f10 = 0x0; _0x254f10 < sp_count; _0x254f10++) sendSound(Number(_0x4c2620), _0x3b4bf9['x'], _0x3b4bf9['y'] + sp_y, _0x3b4bf9['z'], Number(_0x5f3bee));
                }
              });
            }
          }
        }
        if (sp_info && sp_data['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'SoundPlayer', '进度: ' + (sp_length - sp_data['length']) + '/' + sp_length + ' - ' + ((sp_length - sp_data['length']) / sp_length * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(sp_length - sp_data['length'], sp_length, '▌', 0x20), '§r'));
      }
      if (sp_loop && SoundPlayer && sp_file && sp_data['length'] === 0x0) {
        sp_data = JSON['parse'](sp_file);
        以表闻辞不(0x0, '进度', '循环播放中 共' + sp_data['length'] + '条音频数据', '§r');
      }
      if (_0x277e7e['current'] < 0x6) _0x5baecd['push'](以表闻辞不(0x1, 'Warning', 'Low Health!', '§c'));
      if (AutoDo && Math['round'](_0x277e7e['current']) <= ad_min) {
        const _0x5a2909 = modes['ad_mode'];
        if (_0x5a2909 === 0x2) removeEntity(self_id);
        if (_0x5a2909 === 0x0 || _0x5a2909 === 0x1) executeCommand(_0x5a2909 === 0x0 ? '/hub' : '/again');
        if (_0x5a2909 === 0x3) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'splash_potion', 0x16));else {
            setEntityRot(self_id, 0x5a, _0x3cd4b8['yaw']);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 强近之亲内(), 0x0);
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x5a2909 === 0x4) {
          if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'mushroom_stew'));else {
            强近之亲内();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x5a2909 === 0x5) {
          if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'skull'));else {
            强近之亲内();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x5a2909 === 0x6) leaveWorld();
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
        const _0x1cb629 = getBlock(_0x51b728['x'], _0x51b728['y'] - 0x1, _0x51b728['z']);
        if (_0x1cb629['namespace'] === 'minecraft:flowing_water' || _0x1cb629['namespace'] === 'minecraft:water' || _0x1cb629['namespace'] === 'minecraft:flowing_lava' || _0x1cb629['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x9fc138['x'], 0x0, _0x9fc138['z']);
      }
      if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x7aa0c6 => {
          let _0x486006 = 多疾病九岁(_0x7aa0c6);
          以表闻辞不(0x0, 'TargetInfo', '\n' + _0x486006 + '\n§r§b==============================', '§r');
          if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x7aa0c6) + '_' + _0x7aa0c6 + '.txt', _0x486006);
        });
      }
      if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
      if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
        const _0x265254 = at_lists[0x0];
        const _0x157f66 = 就职诏书切(self_id, _0x265254);
        const _0x121287 = 孝治天下凡(self_id, _0x265254, aa_fov, 0x0);
        if (_0x157f66 <= aa_range && _0x121287 || aa_throw) {
          const _0xc695a5 = 命诏书特下(aa_min, aa_max);
          let _0x3cc39d = 伏惟圣朝以(self_id, _0x265254, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          let _0x281a92 = 伏惟圣朝以(self_id, _0x265254, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          if (_0x3cc39d <= 0xb4 && _0x3cc39d >= -0xb4 && _0x281a92 <= 0x5a && _0x281a92 >= -0x5a) {
            let _0x20f3f6 = _0x3cc39d >= 0x0 ? -_0xc695a5 : _0xc695a5;
            let _0x26b42a = _0x281a92 >= 0x0 ? _0xc695a5 : -_0xc695a5;
            if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x3cc39d) < _0xc695a5 || Math['abs'](_0x281a92) < _0xc695a5)) {
              _0x20f3f6 = -_0x3cc39d / ((0x28 - _0xc695a5) / 0x2);
              _0x26b42a = -_0x281a92 / ((0x28 - _0xc695a5) / 1.125);
            }
            const _0x3b1427 = 孝治天下凡(self_id, _0x265254, aa_prec * 0x2, 0x1);
            const _0x27db7b = 孝治天下凡(self_id, _0x265254, aa_prec * 0x4, 0x2);
            if (!_0x3b1427) setLocalPlayerTurn(0x0, _0x20f3f6);
            if (!_0x27db7b && !aa_throw || !isSimilar(_0x281a92, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x26b42a, 0x0);
          }
          _0x5baecd['push'](以表闻辞不(0x1, 'AssistAim', getEntityName(_0x265254), '§r'));
        }
      }
      if (InfiniteAura && ia_targets['length'] > 0x0) {
        ia_targets['forEach'](_0xd091e1 => {
          const _0x1cf32e = _0xd091e1;
          const _0x17cf11 = getPos(_0x1cf32e);
          if (!_0x1cf32e || !findEntity(_0x1cf32e)) return;
          if (就职诏书切(ia_targets[0x0], self_id) > ia_range) return;
          if (ia_tick === 0x0) {
            const _0x5b073d = ia_random ? 命诏书特下(-0x2, 0x2) : 0x0;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMot = _0x9fc138;
            for (let _0x173975 = 0x0; _0x173975 < ia_move; _0x173975++) {
              if (ia_toClick) {
                buildBlock(self_id, _0x17cf11['x'] + _0x5b073d, _0x17cf11['y'], _0x17cf11['z'] + _0x5b073d, 0x1);
                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                  'pos': {
                    'x': _0x17cf11['x'] + _0x5b073d,
                    'y': _0x17cf11['y'] + ia_offset / 0x5,
                    'z': _0x17cf11['z'] + _0x5b073d
                  }
                });
              }
              if (modes['ia_mode'] === 0x0) setPos(_0x17cf11['x'], _0x17cf11['y'], _0x17cf11['z']);
              if (modes['ia_mode'] === 0x1) silentMove(_0x17cf11['x'] + _0x5b073d, _0x17cf11['y'] + ia_offset / 0x5, _0x17cf11['z'] + _0x5b073d);
              if (modes['ia_mode'] === 0x2) movePlayer(_0x17cf11['x'] + _0x5b073d, _0x17cf11['y'] + ia_offset / 0x5, _0x17cf11['z'] + _0x5b073d);
            }
            if (ia_jump) playerJump();
            for (let _0x592a8b = 0x0; _0x592a8b < ia_attack; _0x592a8b++) 臣荣举臣秀(_0x1cf32e, Swing);
          }
          if (ia_tick <= -ia_return && ia_fix) tpback();
        });
        if (ia_tick <= -ia_return) {
          if (!ia_fix) tpback();
          ia_tick = ia_delay;
        }
        if (ia_tick > -ia_return) ia_tick--;
        _0x5baecd['push'](以表闻辞不(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 临门急于星(ia_targets['map'](_0x385cb3 => getEntityName(_0x385cb3))), '§r'));
      }
      if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 朝历职郎署(_0x51b728);
      if (AutoVoid) {
        const _0x4a0f4d = 私情则告诉(self_id);
        const _0x2682a3 = getBlock(_0x4a0f4d['x'], _0x51b728['y'] - 0x1, _0x4a0f4d['z']);
        for (let _0x153c0b = -0x2; _0x153c0b < 0x3; _0x153c0b++) {
          for (let _0x47ceda = -0x2; _0x47ceda < 0x3; _0x47ceda++) {
            const _0x53e28d = getBlock(_0x4a0f4d['x'] + _0x153c0b, _0x51b728['y'] - 0x1, _0x4a0f4d['z'] + _0x47ceda);
            if (_0x53e28d['namespace'] === 'minecraft:air' && _0x9fc138['y'] < -0.0783 && _0x9fc138['y'] > -0.0785 && _0x2682a3['namespace'] != 'minecraft:air') {
              const _0x302179 = -伏惟圣朝以(self_id, {
                'x': _0x4a0f4d['x'] + _0x153c0b,
                'y': self_pos['y'],
                'z': _0x4a0f4d['z'] - _0x47ceda
              }, 'yaw_pos');
              const _0x245ed2 = 非臣陨首所(0.5, self_pos, {
                'yaw': _0x302179,
                'pitch': 0x0
              });
              setMotion(_0x245ed2['x'] - self_pos['x'], _0x9fc138['y'], _0x245ed2['z'] - self_pos['z']);
              break;
            }
          }
        }
      }
      if (AvoidThrow) {
        const _0x5007cb = getEntityList();
        _0x5007cb['forEach'](_0x297623 => {
          if ((getEntityTypeId(_0x297623) === 0x400055 || getEntityTypeId(_0x297623) === 0x400056 || getEntityTypeId(_0x297623) === 0xc00050) && 就职诏书切(_0x297623, self_id) <= at_range) {
            if (at_remove) removeEntity(_0x297623);
            if (modes['avoid_mode'] === 0x0) {
              const _0x231f72 = 伏惟圣朝以(getPos(_0x297623), self_id, 'yaw_pos');
              const _0x56b413 = 非臣陨首所(0.5, self_pos, {
                'yaw': _0x231f72,
                'pitch': _0x3cd4b8['pitch']
              });
              setMotion(_0x56b413['x'] - self_pos['x'], _0x9fc138['y'], _0x56b413['z'] - self_pos['z']);
            }
            if (modes['avoid_mode'] === 0x1) 臣荣举臣秀(_0x297623, Swing);
            if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
          }
        });
      }
      if (TrajectoryRender) {
        const _0x5cf817 = getPlayerList();
        let _0x194f39 = [];
        let _0x592f5d = false;
        let _0x2ffd48 = {
          'x': 0x0,
          'y': 0x0,
          'z': 0x0
        };
        for (let _0x154dda = 0x1; _0x154dda <= tr_len; _0x154dda += tr_dens / 0xa) {
          let _0x41b71d = 之僮茕茕孑(_0x154dda, _0x3cd4b8['pitch'], tr_speed, tr_g)['data'];
          let _0x5e224d = 非臣陨首所(_0x154dda, self_pos, {
            'yaw': _0x3cd4b8['yaw'],
            'pitch': 0x0
          });
          let _0x32aa39 = getBlock(_0x5e224d['x'], _0x5e224d['y'] + _0x41b71d, _0x5e224d['z']);
          if (tr_show || !_0x592f5d) {
            _0x5cf817['forEach'](_0x41f3d0 => {
              if (!_0x592f5d) {
                let _0x5cb2af = getPos(_0x41f3d0);
                let _0x112d41 = {
                  'x': _0x5e224d['x'],
                  'y': _0x5e224d['y'] + _0x41b71d,
                  'z': _0x5e224d['z']
                };
                let _0x4f8601 = getEntitySize(_0x41f3d0);
                if (_0x112d41['x'] <= _0x5cb2af['x'] + _0x4f8601['x'] / 0x2 && _0x112d41['x'] >= _0x5cb2af['x'] - _0x4f8601['x'] / 0x2 && _0x112d41['y'] <= _0x5cb2af['y'] + _0x4f8601['y'] / 0x2 && _0x112d41['y'] >= _0x5cb2af['y'] - _0x4f8601['y'] / 0x2 && _0x112d41['z'] <= _0x5cb2af['z'] + _0x4f8601['x'] / 0x2 && _0x112d41['z'] >= _0x5cb2af['z'] - _0x4f8601['x'] / 0x2) {
                  _0x5baecd['push'](以表闻辞不(0x1, 'HasAimed', getEntityName(_0x41f3d0), '§r'));
                  _0x592f5d = true;
                }
              }
            });
          }
          if (_0x32aa39['namespace'] != 'minecraft:air' || _0x592f5d) {
            _0x2ffd48 = _0x5e224d;
            if (modes['tr_mode'] === 0x1 && _0x32aa39['namespace'] != 'minecraft:air') {
              for (let _0x4fe082 = 0x0; _0x4fe082 <= 0x14; _0x4fe082 += 0x2) 息外无期功(tr_type, _0x2ffd48['x'], _0x2ffd48['y'] + _0x41b71d + _0x4fe082 / 0xa, _0x2ffd48['z'], 0x1);
            }
            break;
          }
        }
        if (modes['tr_mode'] === 0x0) {
          let _0x81cb29 = getDistance(_0x2ffd48, self_pos);
          for (let _0x11ce6d = 0x1; _0x11ce6d <= _0x81cb29; _0x11ce6d += tr_dens / 0xa) {
            let _0x2d92b3 = 之僮茕茕孑(_0x11ce6d, _0x3cd4b8['pitch'], tr_speed, tr_g)['data'];
            let _0x22a02c = (tr_offset - 0xa) / 0xa;
            let _0x52290c = _0x3cd4b8['yaw'] + 0x5a;
            if (_0x52290c > 0xb4) _0x52290c = _0x52290c - 0x168;
            if (_0x52290c < -0xb4) _0x52290c = _0x52290c + 0x168;
            let _0xe10a70 = 非臣陨首所(_0x22a02c, self_pos, {
              'yaw': _0x52290c,
              'pitch': 0x0
            });
            let _0xd42ae = 非臣陨首所(_0x11ce6d, _0xe10a70, {
              'yaw': _0x3cd4b8['yaw'] - Math['atan'](_0x22a02c / _0x81cb29) * (0xb4 / Math['PI']),
              'pitch': 0x0
            });
            let _0x156448 = getBlock(_0xd42ae['x'], _0xd42ae['y'] + _0x2d92b3, _0xd42ae['z']);
            if (modes['tr_mode'] === 0x0 && _0x156448['namespace'] === 'minecraft:air') 息外无期功(tr_type, _0xd42ae['x'], _0xd42ae['y'] + _0x2d92b3 + 0.5, _0xd42ae['z'], 0x1);
          }
        }
      }
      if (FarmAura) {
        const _0x55ae6c = 私情则告诉(self_id);
        for (let _0x6b2554 = -fa_range; _0x6b2554 < fa_range; _0x6b2554++) {
          for (let _0x2b98bf = -fa_range; _0x2b98bf < fa_range; _0x2b98bf++) {
            const _0x187ffb = getBlock(_0x55ae6c['x'] + _0x6b2554, _0x51b728['y'] - 0x1, _0x55ae6c['z'] + _0x2b98bf);
            const _0x123625 = getBlock(_0x55ae6c['x'] + _0x6b2554, _0x51b728['y'], _0x55ae6c['z'] + _0x2b98bf);
            if ((_0x187ffb['namespace'] === 'minecraft:dirt' || _0x187ffb['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x55ae6c['x'] + _0x6b2554, _0x51b728['y'] - 0x1, _0x55ae6c['z'] + _0x2b98bf, 0x1);
            if (_0x187ffb['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x55ae6c['x'] + _0x6b2554, _0x51b728['y'] - 0x1, _0x55ae6c['z'] + _0x2b98bf, 0x1);
            if (_0x123625['aux'] === 0x7 && (_0x123625['namespace'] === 'minecraft:beetroot' || _0x123625['namespace'] === 'minecraft:wheat' || _0x123625['namespace'] === 'minecraft:carrots' || _0x123625['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x55ae6c['x'] + _0x6b2554, _0x51b728['y'], _0x55ae6c['z'] + _0x2b98bf, 0x1);
            if (self_item['namespace'] === 'minecraft:bone_meal' && _0x123625['aux'] <= 0x6 && (_0x123625['namespace'] === 'minecraft:beetroot' || _0x123625['namespace'] === 'minecraft:wheat' || _0x123625['namespace'] === 'minecraft:carrots' || _0x123625['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x55ae6c['x'] + _0x6b2554, _0x51b728['y'], _0x55ae6c['z'] + _0x2b98bf, 0x1);
          }
        }
      }
      if (ActionManager) {
        if (!am_file) {
          if (ticks % am_delay == 0x0) {
            for (let _0x566050 = 0x0; _0x566050 < am_count; _0x566050++) sendPlayerAction({
              'id': self_id,
              'pos': {
                'x': _0x51b728['x'],
                'y': _0x51b728['y'] - 0x1,
                'z': _0x51b728['z']
              },
              'type': Number(am_id),
              'value': Number(am_value)
            });
          }
        } else {
          const _0x2a3b3f = JSON['parse'](日笃欲苟顺(nx_paths + '/PlayerAction.json'));
          _0x2a3b3f['forEach'](_0x5b4868 => {
            if (_0x5b4868['delay'] % am_tick === 0x0) {
              for (let _0x5f2230 = 0x0; _0x5f2230 < _0x5b4868['count']; _0x5f2230++) sendPlayerAction({
                'id': self_id,
                'pos': self_pos,
                'value': _0x5b4868['value'],
                'type': Number(_0x5b4868['id'])
              });
            }
          });
        }
      }
      if (PlayerAuthManager && ticks % pam_delay === 0x0) {
        for (let _0x427559 = 0x0; _0x427559 < pam_count; _0x427559++) sendPlayerAuthInput({
          'pos': {
            'x': _0x51b728['x'],
            'y': _0x51b728['y'] - 0x1,
            'z': _0x51b728['z']
          },
          'inputs': pam_array['map'](_0x5b5d81 => Number(_0x5b5d81)),
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
      if (AutoJump && _0x5f2e5d) setMotion(_0x9fc138['x'], aj_y / 0x64, _0x9fc138['z']);
      if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0xcd7f7c => {
        if (bc_packet) silentMove(_0xcd7f7c['x'], _0xcd7f7c['y'], _0xcd7f7c['z']);
        buildBlock(self_id, _0xcd7f7c['x'], _0xcd7f7c['y'], _0xcd7f7c['z'], 0x0);
      });
      if (NoFall && _0x9fc138['y'] < -nf_max && !_0x5f2e5d) {
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
      if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x5f2e5d && _0x5f2e5d)) {
        if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
        for (let _0x1c1160 = 0x0; _0x1c1160 < 0x168; _0x1c1160 += do_density / 0xa) {
          const _0x4bd0e6 = do_l_axis * Math['cos'](_0x1c1160 * Math['PI'] / 0xb4);
          const _0x3e6b51 = do_s_axis * Math['sin'](_0x1c1160 * Math['PI'] / 0xb4);
          息外无期功(0x37, do_pos[0x0] + _0x4bd0e6, do_pos[0x1], do_pos[0x2] + _0x3e6b51, 0x1);
        }
      }
      if (FakeLag) {
        if (fl_t >= fl_normal + fl_abnormal) {
          fakelag_status = !fl_reverse;
          fl_t = 0x0;
        }
        if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
        if (fl_show) _0x5baecd['push'](以表闻辞不(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
      }
      if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
        const _0x27932f = fb_list['shift']();
        buildBlock(self_id, Math['round'](_0x27932f['x']), Math['round'](_0x27932f['y'] - 0x1), Math['round'](_0x27932f['z']), 0x0);
        fb_t = 0x0;
        if (fb_list['length'] === 0x0) fb_success = true;
      }
      if (TargetHealth && at_lists['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Health', 'Health: ' + 苦特为尤甚(at_lists[0x0], modes['health_mode']), '§r'));
      if (ShowTargetList && at_lists['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Targets', 临门急于星(at_lists['map'](_0x132b59 => getEntityName(_0x132b59))), '§r'));
      if (ShowInfo) {
        const _0xbc0f28 = getEntityAttribute(self_id, 'minecraft:movement');
        const _0x2ac4e0 = Math['sqrt'](_0x9fc138['x'] * _0x9fc138['x'] + _0x9fc138['z'] * _0x9fc138['z']);
        if (show_speed) _0x5baecd['push'](以表闻辞不(0x1, 'Speed', '水平移动速度: ' + _0x2ac4e0['toFixed'](0x2) + 'm/s 移动速度: ' + _0x2a1c98['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x6644d2['toFixed'](0x2) + 'm/s 坐标速度:' + _0x5147ae['toFixed'](0x2) + 'm/s 能力速度:' + _0xbc0f28['current']['toFixed'](0x2) + ('\n移动值: [' + _0x9fc138['x']['toFixed'](0x2) + ', ' + _0x9fc138['y']['toFixed'](0x2) + ', ' + _0x9fc138['z']['toFixed'](0x2) + ']'), '§r'));
        if (show_pos) _0x5baecd['push'](以表闻辞不(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x51b728['x'] + ', Y:' + _0x51b728['y'] + ', Z:' + _0x51b728['z'] + ']', '§r'));
        if (show_item && self_item['count'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Item', self_item['name'] + ' §r§ox' + 曾废离愍(-0x1), '§r'));
        if (show_resources) {
          const _0x4df789 = {
            'gold': 曾废离愍(-0x2, 'minecraft:gold_ingot'),
            'iron': 曾废离愍(-0x2, 'minecraft:iron_ingot'),
            'diamond': 曾废离愍(-0x2, 'minecraft:diamond'),
            'emerald': 曾废离愍(-0x2, 'minecraft:emerald'),
            'star': 曾废离愍(-0x2, 'minecraft:nether_star')
          };
          const _0x43b995 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
          _0x5baecd['push'](以表闻辞不(0x1, 'Resource', '绿宝石:' + _0x4df789['emerald'] + ', 钻石:' + _0x4df789['diamond'] + ', 金锭:' + _0x4df789['gold'] + ', 铁锭:' + _0x4df789['iron'] + '\n下界之心:' + _0x4df789['star'] + ', 经验:' + _0x43b995, '§r'));
        }
        if (show_target_dis && at_lists['length'] > 0x0) _0x5baecd['push'](以表闻辞不(0x1, 'Distance', '三维距离: ' + 就职诏书切(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 峻责臣逋慢(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
        if (show_player_list) _0x5baecd['push'](以表闻辞不(0x1, 'PlayerList', '世界玩家: ' + _0x560116['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
        if (show_kill_num) _0x5baecd['push'](以表闻辞不(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
        if (show_time) _0x5baecd['push'](以表闻辞不(0x1, 'Time', 'Time: ' + 蒙国恩除臣(seconds) + ', Ticks: ' + ticks, '§r'));
        if (show_attack_rate) _0x5baecd['push'](以表闻辞不(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
        if (show_real_aps) _0x5baecd['push'](以表闻辞不(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
        if (show_ping) _0x5baecd['push'](以表闻辞不(0x1, 'PING', gd_ping + 'ms', '§r'));
        if (show_self_health) _0x5baecd['push'](以表闻辞不(0x1, 'Health', '当前血量: ' + _0x277e7e['current'] + ', 最大值:' + _0x277e7e['max'] + ', 最小值:' + _0x277e7e['min'], '§r'));
        if (show_detail_item) _0x5baecd['push'](以表闻辞不(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
        if (show_real_time) {
          const _0xdfbeaf = new Date();
          const _0x266437 = _0xdfbeaf['getFullYear']();
          const _0x574eea = ('0' + (_0xdfbeaf['getMonth']() + 0x1))['slice'](-0x2);
          const _0x203c19 = ('0' + _0xdfbeaf['getDate']())['slice'](-0x2);
          const _0x37cfcb = ('0' + _0xdfbeaf['getHours']())['slice'](-0x2);
          const _0x1973e2 = ('0' + _0xdfbeaf['getMinutes']())['slice'](-0x2);
          const _0x137d34 = ('0' + _0xdfbeaf['getSeconds']())['slice'](-0x2);
          const _0x312856 = _0x266437 + '-' + _0x574eea + '-' + _0x203c19 + ' ' + _0x37cfcb + ':' + _0x1973e2 + ':' + _0x137d34;
          _0x5baecd['push'](以表闻辞不(0x1, 'RealTime', _0x312856, '§r'));
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
        let _0x206a5d = _0x3cd4b8['yaw'];
        _0x206a5d += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
        if (_0x206a5d >= 0xb4) _0x206a5d -= 0x168;
        if (_0x206a5d <= -0xb4) _0x206a5d += 0x168;
        let _0x34d7a1 = (_0x5f2e5d ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x42854d = (_0x5f2e5d ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x45a759 = {};
        if (rc_surround && at_lists['length'] > 0x0 && 就职诏书切(self_id, at_lists[0x0]) <= rc_lock) {
          let _0x53ee71 = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
          let _0x37536a = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_rot');
          let _0x4a3e57 = _0x37536a > -0x5a || _0x37536a < 0x5a ? rc_speed : -rc_speed;
          let _0x575ba1 = _0x206a5d > -0x5a || _0x206a5d < 0x5a ? rc_speed : -rc_speed;
          let _0x5d7ac8 = rc_relative ? _0x4a3e57 : _0x575ba1;
          Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x53ee71 -= _0x5d7ac8 * 0x5 : _0x53ee71 += _0x5d7ac8 * 0x5;
          if (_0x53ee71 > 0xb4) _0x53ee71 -= 0x168;
          if (_0x53ee71 < -0xb4) _0x53ee71 += 0x168;
          let _0xab1a5c = 非臣陨首所(rc_dist, getPos(at_lists[0x0]), {
            'yaw': _0x53ee71,
            'pitch': 0x0
          });
          let _0x5b5d5a = 伏惟圣朝以(_0xab1a5c, self_id, 'yaw_pos');
          _0x45a759 = 非臣陨首所(rc_legal ? modes['rc_mode'] === 0x0 ? _0x34d7a1 : _0x42854d : rc_speed / 0x8, self_pos, {
            'yaw': _0x5b5d5a,
            'pitch': 0x0
          });
        } else _0x45a759 = 非臣陨首所(rc_legal ? modes['rc_mode'] === 0x0 ? _0x34d7a1 : _0x42854d : rc_speed / 0x8, self_pos, {
          'yaw': _0x206a5d,
          'pitch': 0x0
        });
        Camera_anchor_pos = {
          'x': Camera_anchor_pos['x'] + (_0x45a759['x'] - self_pos['x']),
          'y': Camera_anchor_pos['y'],
          'z': Camera_anchor_pos['z'] + (-_0x45a759['z'] + self_pos['z'])
        };
        if (rc_follow && modes['rocker_mode'] < 0x3) {
          if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 既无伯叔终(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x206a5d + sca_yaw);else 既无伯叔终(_0x3cd4b8['pitch'], _0x206a5d - 0xb4);
        }
        if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
        if (modes['rocker_mode'] === 0x3) {
          if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
            _0x45a759 = 非臣陨首所(rc_speed / 0x8, self_pos, _0x3cd4b8);
            setMotion(_0x45a759['x'] - self_pos['x'], _0x45a759['y'] - self_pos['y'], _0x45a759['z'] - self_pos['z']);
          } else {
            const _0x365830 = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
            const _0x111056 = getCameraRotation();
            rc_roll += (_0x365830 ? 0x1 : -0x1) * 无主辞不赴(self_id) / 0x5;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (modes['rocker_mode'] === 0x0) setMotion(_0x45a759['x'] - self_pos['x'], rc_bhop && _0x5f2e5d || rc_ahop && _0x9fc138['y'] < -0.4 ? rc_y : _0x9fc138['y'], _0x45a759['z'] - self_pos['z']);
        if (modes['rocker_mode'] === 0x1) setPos(_0x45a759['x'], self_pos['y'], _0x45a759['z']);
        if (rc_directions['direction'] === 0x0) rc_angles = {};
      }
      if (typeof rc_uds['operation'] !== 'undefined') {
        const _0xc24089 = getEntityMotion(self_id);
        const _0x10cbfe = getCameraRotation();
        if (rc_uds['operation'] === 'up') {
          Camera_anchor_pos['y'] += rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0xc24089['x'], rc_y, _0xc24089['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw -= Math['sin'](_0x10cbfe['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch += Math['cos'](_0x10cbfe['roll'] * Math['PI'] / 0xb4) * 0x2;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (rc_uds['operation'] === 'down') {
          Camera_anchor_pos['y'] -= rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0xc24089['x'], -rc_y, _0xc24089['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw += Math['sin'](_0x10cbfe['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch -= Math['cos'](_0x10cbfe['roll'] * Math['PI'] / 0xb4) * 0x2;
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
        _0x5baecd['push'](以表闻辞不(0x1, 'BalanceTimer', '储存的Tick: ' + BalanceTimer_t + 'ticks', '§r'));
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
          let _0x411b95 = ticks * mt_speed / 0x14 % 0x5dc0;
          setWorldData({
            'time': _0x411b95
          });
        } else if (mt_custom === 0x19) {
          let _0x5e9e1d = 0x0;
          if (modes['mt_time'] === 0x0) _0x5e9e1d = 0x3e8;
          if (modes['mt_time'] === 0x1) _0x5e9e1d = 0x32c8;
          if (modes['mt_time'] === 0x2) _0x5e9e1d = 0x1770;
          if (modes['mt_time'] === 0x3) _0x5e9e1d = 0x30d4;
          setWorldData({
            'time': _0x5e9e1d
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
        不行零丁孤(ex, ey, ez, bk_auth, bk_action);
        if (bk_timer > bk_last) bk_pos = null;
        bk_timer++;
      }
      if (FakeTip) {
        switch (modes['fakeTip_mode']) {
          case 0x0:
            showTipMessage('§bProtoHax §r| ' + _0x5147ae['toFixed'](0x2) + ' §eBlocks/sec');
            break;
          case 0x1:
            if (tip_t1 > 0xc8) {
              curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x503884, _0x3823aa) => globalThis['current_poem'] = JSON['parse'](_0x3823aa)['content']);
              tip_t1 = 0x0;
            }
            showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
            break;
          case 0x5:
            showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x5147ae['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
        for (let _0xf6f94d = 0x0; _0xf6f94d < mine_speed; _0xf6f94d++) {
          let _0xf337cc = mine_list['shift']();
          if (typeof _0xf337cc != 'object' || _0xf337cc['length'] === 0x0) continue;
          const _0x246adb = getBlock(_0xf337cc[0x0], _0xf337cc[0x1], _0xf337cc[0x2]);
          if (_0x246adb['namespace'] != 'minecraft:air' && _0x246adb['namespace'] === mine_name) {
            destroyBlock(self_id, _0xf337cc[0x0], _0xf337cc[0x1], _0xf337cc[0x2], 0x0);
            mine_current++;
          }
        }
        if (mine_info) _0x5baecd['push'](以表闻辞不(0x1, 'Miner', '进度: ' + mine_current + '/' + mine_num + ' - ' + (mine_current / mine_num * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(mine_current, mine_num, '▌', 0x20), '§r'));
      }
      if (AirStuck && as_time_t < as_time && !_0x5f2e5d) setMotion(0x0, 0x0, 0x0);
      if (_0x5baecd['length'] > 0x0 && !FakeTip) {
        if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x5baecd['join']('\n'));
        if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x5baecd['join']('\n'));
        if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x5baecd['join'](' | '));
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
      prev_heal = _0x277e7e['current'];
      prev_ground = _0x5f2e5d;
      prev_itemCount = self_itemCount;
    } catch (_0x117502) {
      clientMessage(_0x117502['stack']);
    }
    if (ShowNXInfo) addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
  }
  setInterval(() => {
    if (bn_list['length'] > 0x0) {
      for (let _0x4fa647 = bn_list['length'] - 0x1; _0x4fa647 >= 0x0; _0x4fa647--) {
        let _0x442ce0 = bn_list[_0x4fa647];
        _0x442ce0['x'] -= _0x442ce0['speed'];
        if (_0x442ce0['x'] < 0x0) {
          bn_list['splice'](_0x4fa647, 0x1);
          removeText(_0x442ce0['id']);
        } else updateTextPosition(_0x442ce0['id'], _0x442ce0['x'], _0x442ce0['y']);
      }
    }
    if (Derp) {
      var _0x495965 = getEntityRot(self_id);
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
      dp_pitch -= dp_random ? 命诏书特下(-0xa, 0xa) : dp_headSpeed * 0x2;
      dp_yaw += dp_random ? 命诏书特下(-0xa, 0xa) : dp_bodySpeed * 0x2;
      if (dp_pitch < -0x5a) dp_pitch = 0x5a;
      if (dp_yaw > 0xb4) dp_yaw = dp_yaw - 0x168;
      if (!dp_head) dp_pitch = _0x495965['pitch'];
      if (!dp_body) dp_yaw = _0x495965['yaw'];
      if (dp_lock) dp_pitch = 0x5a;
    }
    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
      const _0x56ccc9 = getCameraRotation();
      const _0x190bd5 = 拜臣郎中寻(getEntityMotion(self_id), getPos(self_id), 0x5);
      const _0x338de0 = sca_move ? 伏惟圣朝以(_0x190bd5, self_id, 'yaw_pos') : _0x56ccc9['yaw'] > 0x0 ? 0xb4 - _0x56ccc9['yaw'] : -0xb4 - _0x56ccc9['yaw'];
      既无伯叔终(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x338de0 + sca_yaw);
    }
    if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
      let _0x2cf837 = 伏惟圣朝以(self_id, at_lists[0x0], 'pitch_pos');
      let _0x3b88d8 = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
      既无伯叔终(_0x2cf837, _0x3b88d8);
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
  function onExecuteCommandEvent(_0xb5777d) {
    if (ActivitySender) sendChatMessage('我正在执行命令');
    if (ShowCommand) 以表闻辞不(0x0, 'ExecuteCMD', _0xb5777d, '§r');
    const _0x5089fe = _0xb5777d['split'](' ');
    if (_0x5089fe[0x0] === '/set' && _0x5089fe[0x1] === 'pos') {
      nx_goal = {
        'x': Number(_0x5089fe[0x2]),
        'y': Number(_0x5089fe[0x3]),
        'z': Number(_0x5089fe[0x4])
      };
      if (_0x5089fe[0x5]) nx_goalSpeed = Number(_0x5089fe[0x5]);
      以表闻辞不(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
      return true;
    }
    if (_0x5089fe[0x0] === '/set' && _0x5089fe[0x1] === 'default' && _0x5089fe[0x2] === 'config') {
      if (_0x5089fe[0x3] === 'clear') {
        以表闻辞不(0x0, 'Tip', '已清除默认配置', '§r');
        setData('nx_defaultCfg', 'null');
        return true;
      }
      if (日笃欲苟顺(nx_cfgs + '/' + _0x5089fe[0x3] + '.json') != '{}') {
        setData('nx_defaultCfg', _0x5089fe[0x3]);
        以表闻辞不(0x0, 'Tip', '已设置默认配置 - ' + _0x5089fe[0x3], '§r');
      } else 以表闻辞不(0x0, 'Tip', '文件为空或不存在 - ' + _0x5089fe[0x3], '§r');
      return true;
    }
    if (_0x5089fe[0x0] === '/target') {
      if (_0x5089fe[0x1] === 'self') at_lists[0x0] = self_id;
      if (_0x5089fe[0x1] === 'player') at_lists = getPlayerList();
      if (_0x5089fe[0x1] === 'all') at_lists = getEntityList();
      以表闻辞不(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
      return true;
    }
    if (_0x5089fe[0x0] === '/cleaner') {
      if (_0x5089fe[0x1] === 'reload') clear_config = JSON['parse'](日笃欲苟顺(cleaner_path));
      if (_0x5089fe[0x1] === 'load') clear_config = JSON['parse'](日笃欲苟顺(_0x5089fe[0x2]));
    }
    if (_0x5089fe[0x0] === '/bind') {
      if (_0x5089fe[0x1] === 'RunAway') {
        if (typeof globalThis[_0x5089fe[0x2]] == 'undefined' && typeof nx_funcid[_0x5089fe[0x2]] == 'undefined' || typeof globalThis[_0x5089fe[0x3]] == 'undefined' && typeof nx_funcid[_0x5089fe[0x3]] == 'undefined') {
          以表闻辞不(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
          return true;
        }
        let _0x5c7983 = typeof globalThis[_0x5089fe[0x3]] !== 'undefined';
        nx_raBinds[_0x5089fe[0x2]] = {
          'module': _0x5089fe[0x3],
          'isNX': _0x5c7983
        };
        以表闻辞不(0x0, 'Tip', '绑定 ' + _0x5089fe[0x2] + ' 与 ' + _0x5089fe[0x3] + ' 成功', '§r');
        nx_cfg['nx_raBinds'] = nx_raBinds;
        return true;
      }
      if (_0x5089fe[0x1] === 'key' && typeof globalThis[_0x5089fe[0x2]] !== 'undefined') {
        nx_isBind = _0x5089fe[0x2];
        以表闻辞不(0x0, 'Tip', '按下任意按键与' + _0x5089fe[0x2] + '绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x5089fe[0x1]] === 'undefined') nx_binds[_0x5089fe[0x1]] = [];
      if (typeof globalThis[_0x5089fe[0x2]] !== 'undefined' && typeof globalThis[_0x5089fe[0x1]] !== 'undefined') {
        nx_binds[_0x5089fe[0x1]]['push'](_0x5089fe[0x2]);
        以表闻辞不(0x0, 'Tip', '绑定 ' + _0x5089fe[0x1] + ' 与 ' + _0x5089fe[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 以表闻辞不(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x5089fe[0x0] === '/unbind') {
      if (_0x5089fe[0x1] === 'key' && typeof globalThis[_0x5089fe[0x2]] !== 'undefined') {
        for (let _0x4c1ad7 in nx_keys) {
          if (nx_keys[_0x4c1ad7] === _0x5089fe[0x2]) {
            delete nx_keys[_0x4c1ad7];
            break;
          }
        }
        nx_isBind = _0x5089fe[0x2];
        以表闻辞不(0x0, 'Tip', '解除' + _0x5089fe[0x2] + '的按键绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x5089fe[0x1]] === 'undefined') {
        以表闻辞不(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
        return true;
      }
      if (typeof globalThis[_0x5089fe[0x1]] !== 'undefined' && _0x5089fe[0x2] === 'all') {
        delete nx_binds[_0x5089fe[0x1]];
        以表闻辞不(0x0, 'Tip', '解除 ' + _0x5089fe[0x1] + ' 的所有绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (_0x5089fe[0x1] === 'all') {
        nx_binds = {};
        以表闻辞不(0x0, 'Tip', '解除所有功能绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (typeof globalThis[_0x5089fe[0x2]] !== 'undefined' && typeof globalThis[_0x5089fe[0x1]] !== 'undefined') {
        nx_binds[_0x5089fe[0x1]]['splice'](nx_binds[_0x5089fe[0x1]]['indexOf'](_0x5089fe[0x2]), 0x1);
        if (nx_binds[_0x5089fe[0x1]]['length'] === 0x0) delete nx_binds[_0x5089fe[0x1]];
        以表闻辞不(0x0, 'Tip', '解除绑定 ' + _0x5089fe[0x1] + ' 和 ' + _0x5089fe[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 以表闻辞不(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x5089fe[0x0] === '/nx') {
      if (typeof globalThis[_0x5089fe[0x2]] === 'undefined') {
        以表闻辞不(0x0, 'Tip', '变量不存在', '§r');
        return true;
      }
      if (_0x5089fe[0x1] === 'num') globalThis[_0x5089fe[0x2]] = Number(_0x5089fe[0x3]);
      if (_0x5089fe[0x1] === 'bool') globalThis[_0x5089fe[0x2]] = Boolean(_0x5089fe[0x3]);
      if (_0x5089fe[0x1] === 'str') globalThis[_0x5089fe[0x2]] = _0x5089fe[0x3];
      if (_0x5089fe[0x1] === 'arr') globalThis[_0x5089fe[0x2]] = 臣上道州司(_0x5089fe[0x3]);
      if (_0x5089fe[0x1] === 'obj') globalThis[_0x5089fe[0x2]] = JSON['parse'](_0x5089fe[0x3]);
      以表闻辞不(0x0, 'setValue', globalThis[_0x5089fe[0x2]] + ' => ' + _0x5089fe[0x2], '§r');
      return true;
    }
  }
  function onCommandOutputEvent(_0x209bc7, _0x29eb7a, _0x5f1719) {
    if (ShowCommandOutput) 以表闻辞不(0x0, 'Tip', '§e类型:§r' + _0x209bc7 + ' §e结果:§r' + _0x5f1719 + ' §e数据:§r' + JSON['stringify'](_0x29eb7a, null, 0x2), '§r');
    if (Crasher && modes['cs_mode'] === 0x8 && !_0x5f1719) return true;
  }
  function onCallModuleEvent(_0x233c10) {
    if (ShowUI) 以表闻辞不(0x0, 'UI-Data', JSON['stringify'](_0x233c10, null, 0x4), '§r');
    try {
      if (typeof _0x233c10 !== 'undefined' && typeof _0x233c10['fun'] !== 'undefined' && typeof nx_raBinds[_0x233c10['fun']] !== 'undefined') {
        const _0x4feaaa = nx_raBinds[_0x233c10['fun']]['module'];
        if (!nx_raBinds[_0x233c10['fun']]['isNX']) callModule(nx_funcid[_0x4feaaa], JSON['stringify']({
          'value': _0x233c10['value']
        }));else 祚薄晚有儿(_0x4feaaa, _0x233c10['value']);
      }
      if (ActivitySender) sendChatMessage('我正在调用UI');
      if (PVPDaLao) setTitle('又或是红石大佬');
      if (typeof _0x233c10['name'] === 'undefined') {
        if (Rocker && typeof _0x233c10['angle'] !== 'undefined') rc_angles = _0x233c10;
        if (Rocker && typeof _0x233c10['direction'] !== 'undefined') rc_directions = _0x233c10;
        if (Rocker && typeof _0x233c10['operation'] !== 'undefined') rc_uds = _0x233c10;
        return;
      }
      if (!_0x233c10['name']['includes']('NoveXare') && _0x233c10['fun'] != 'fun_ride_flying') return;
      if (typeof _0x233c10['SauthLogin'] !== 'undefined') {
        Sauths = _0x233c10['SauthLogin'];
        setData('sauths', Sauths);
        showToast('请退出我的世界登录 并重新登录');
      }
      if (typeof _0x233c10['CustomBanTip'] !== 'undefined') bantip = _0x233c10['CustomBanTip'];
      if (typeof _0x233c10['key'] !== 'undefined') {
        const _0x33fe82 = _0x233c10['key'];
        if (_0x33fe82 === 'ItemEditor') {
          const _0x4fdfb2 = getEntityCarriedItem(self_id);
          const _0x126939 = 慈父见背行(_0x4fdfb2, 'Damage:', 's');
          const _0x117d64 = 慈父见背行(_0x4fdfb2, '{Damage:', '}', ',');
          if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x4fdfb2['replace']('Damage:' + _0x126939 + 's', 'Damage:' + ie_data + 's'));
          if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x4fdfb2['replace']('{Damage:' + _0x117d64, '{Damage:' + ie_data));
          if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x4fdfb2['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
          if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id), false, true), ie_delay * 0x32);else showToast('请长按物品栏丢弃手中物品');
        }
        if (_0x33fe82 === 'EditBackGround') {
          const _0x1e23b5 = 'loginVideoNew.mp4';
          const _0x508762 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
          if (!file_exist(getResource() + '/' + _0x1e23b5)) {
            showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
            return;
          }
          file_delete(_0x508762 + _0x1e23b5);
          file_copy(getResource() + '/' + _0x1e23b5, _0x508762 + _0x1e23b5);
          showToast('已复制文件');
        }
        if (_0x33fe82 === 'ServerTeleport') {
          let _0x3839df = getWorldPlayerList();
          let _0x3ce289 = _0x3839df['length'] > 0x0 ? _0x3839df['map'](_0x4a64c5 => ({
            'text': _0x4a64c5['name']
          })) : [{
            'text': '没有数据'
          }];
          let _0x39018c = {
            'type': 'form',
            'title': '选择',
            'content': '选择一个目标',
            'buttons': _0x3ce289
          };
          const _0x5b37d4 = JSON['stringify'](_0x39018c);
          addForm(_0x5b37d4, function (_0x3f8ce2) {
            if (_0x3839df['length'] > 0x0 && _0x3f8ce2 >= 0x0) {
              险衅夙遭闵(_0x3839df[_0x3f8ce2]['id']);
              isTP = true;
            }
          });
        }
        if (_0x33fe82 === 'exit') {
          以表闻辞不(0x0, 'Tip', 'Exit Script!', '§c');
          if (AutoSaveCfg) {
            以表闻辞不(0x0, 'Tip', '自动保存当前配置', '§r');
            const _0x2dba9c = Date['now']();
            File['write'](nx_cfgs + '/自动保存配置 - ' + _0x2dba9c + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x2dba9c);
          }
          exit();
          gc();
        }
        if (_0x33fe82 === 'DropInv') {
          for (let _0x324ddd = 0x0; _0x324ddd < 0x24; _0x324ddd++) {
            const _0x3c21a1 = getInventory(self_id, _0x324ddd);
            if (_0x3c21a1['namespace'] === 'minecraft:air') continue;
            if (_0x3c21a1['count'] < 0x1) continue;
            dl_list['push'](_0x324ddd);
          }
        }
        if (_0x33fe82 === 'LookTP') {
          let _0x49ef33 = {};
          for (let _0x26b7f1 = 0x0; _0x26b7f1 < 0x1f4; _0x26b7f1++) {
            _0x49ef33 = 非臣陨首所(_0x26b7f1, getPos(self_id), getEntityRot(self_id));
            const _0x5a2a34 = getBlock(_0x49ef33['x'], _0x49ef33['y'], _0x49ef33['z']);
            if (_0x5a2a34['namespace'] != 'minecraft:air') break;
          }
          if (_0x49ef33 != {}) {
            const _0x19d791 = getPos(self_id);
            if (modes['LookTP_mode'] === 0x0) 臣侍汤药未(_0x49ef33['x'], _0x49ef33['y'] + 1.53, _0x49ef33['z']);
            if (modes['LookTP_mode'] === 0x1) setPos(_0x49ef33['x'], _0x49ef33['y'] + 1.53, _0x49ef33['z']);
          }
        }
        if (_0x33fe82 === 'OpenChest') {
          let _0x1bd79c = {
            'type': 'form',
            'title': '容器列表',
            'content': '请选择需要打开的容器',
            'buttons': [{
              'text': '暂无容器'
            }]
          };
          let _0x7a7a15 = [];
          let _0xa69c74 = 0x0;
          let _0x38cccd = 私情则告诉(self_id);
          const _0x1aa061 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
          const _0x1154f7 = 'shulker_box';
          for (let _0x659610 = -0x7; _0x659610 < 0x7; _0x659610++) {
            for (let _0x32525d = -0x7; _0x32525d < 0x7; _0x32525d++) {
              for (let _0x223342 = -0x7; _0x223342 < 0x7; _0x223342++) {
                const _0x4081e6 = _0x659610 + _0x38cccd['x'];
                const _0x1e721c = _0x32525d + _0x38cccd['y'];
                const _0x8baadb = _0x223342 + _0x38cccd['z'];
                const _0x1eb476 = getBlock(_0x4081e6, _0x1e721c, _0x8baadb);
                if (_0x1aa061['includes'](_0x1eb476['namespace']) || _0x1eb476['namespace']['includes'](_0x1154f7)) {
                  const _0x5b64a9 = getBlock(_0x4081e6, _0x1e721c + 0x1, _0x8baadb);
                  _0x1bd79c['buttons'][_0xa69c74] = {
                    'text': '命名空间: ' + _0x1eb476['namespace'] + '\n坐标:   ' + (_0x5b64a9['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                  };
                  _0x7a7a15[_0xa69c74] = {
                    'x': _0x4081e6,
                    'y': _0x1e721c,
                    'z': _0x8baadb
                  };
                  _0xa69c74++;
                }
              }
            }
          }
          if (_0xa69c74 === 0x0) {
            以表闻辞不(0x0, 'Tip', '暂无容器', '§r');
            return;
          }
          addForm(JSON['stringify'](_0x1bd79c), function (_0x5e7612) {
            var _0x3d0cb6 = _0x7a7a15[_0x5e7612];
            buildBlock(self_id, _0x3d0cb6['x'], _0x3d0cb6['y'], _0x3d0cb6['z'], 0x1);
            以表闻辞不(0x0, 'Tip', '已打开该容器', '§r');
          });
        }
        if (_0x33fe82 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
        if (_0x33fe82 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
        if (_0x33fe82 === 'rpc_repeat') {
          for (let _0x58428a = 0x0; _0x58428a < rpc_repeat_times; _0x58428a++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        }
        if (_0x33fe82 === 'AttackSelf_one') 臣荣举臣秀(self_id, Swing);
        if (_0x33fe82 === 'RemoveSelf') removeEntity(self_id);
        if (_0x33fe82 === 'QuitGame') leaveWorld();
        if (_0x33fe82 === 'sl_delete') setData('sauths', '');
        if (_0x33fe82 === 'dc_delete') dc_pos = [];
        if (_0x33fe82 === 'SearchModule') {
          addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function (_0x3b5a8f, _0x2966b7, _0x26f626, _0x3a50d8) {
            var _0x3fad62 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
            var _0x51068e = 0x0;
            var _0x84231c = getResource();
            var _0x576d6c = JSON['parse'](File['read'](_0x84231c + '/ui/ui_definition.json'))['ui']['map'](_0x1f2bc4 => ({
              'name': _0x1f2bc4 + '.json',
              'path': _0x84231c + '/ui/' + _0x1f2bc4 + '.json'
            }));
            for (var _0x159c4d of _0x576d6c) {
              if (!_0x159c4d['name']['includes']('NoveXare')) continue;
              var _0x1d9899 = JSON['parse'](File['read'](_0x159c4d['path']));
              if (typeof _0x1d9899['items'][0x0]['items'] === 'undefined') continue;
              for (var _0x51af0d of _0x1d9899['items'][0x0]['items']) {
                if (typeof _0x51af0d['name'] === 'undefined' || typeof _0x51af0d['key'] === 'undefined') continue;
                if (_0x26f626 && _0x51af0d['type'] != 'Switch') continue;
                if (_0x3a50d8 && _0x51af0d['type'] == 'Switch') continue;
                if (!_0x2966b7 && (_0x51af0d['name'] === _0x3b5a8f || _0x51af0d['key'] === _0x3b5a8f) || _0x2966b7 && (_0x51af0d['name']['includes'](_0x3b5a8f) || _0x51af0d['key']['includes'](_0x3b5a8f))) {
                  _0x3fad62['items'][0x0]['items'][_0x51068e] = _0x51af0d;
                  _0x51068e++;
                }
              }
            }
            loadMenu('search_' + _0x3b5a8f, JSON['stringify'](_0x3fad62));
            showMenu('search_' + _0x3b5a8f);
          });
        }
        if (_0x33fe82 === 'sp_clear') sp_posList = [];
        if (_0x33fe82 === 'sp_add') {
          const {
            x,
            y,
            z
          } = 私情则告诉(self_id);
          addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 临门急于星([x, y, z]) + '"}]}', function (_0x533c55) {
            var _0x22c277 = _0x533c55['split'](',');
            sp_posList['push']({
              'x': Number(_0x22c277[0x0]),
              'y': Number(_0x22c277[0x1]),
              'z': Number(_0x22c277[0x2])
            });
            以表闻辞不(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
          });
        }
        if (_0x33fe82 === 'sp_load') {
          const _0x3203e9 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
          addForm(_0x3203e9, function (_0x481b39) {
            var _0x48b81d = File['read'](_0x481b39);
            if (_0x48b81d != '' && SoundPlayer) {
              sp_data = JSON['parse'](_0x48b81d);
              sp_file = _0x48b81d;
              sp_length = sp_data['length'];
              以表闻辞不(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
            } else 以表闻辞不(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
          });
        }
        if (_0x33fe82 === 'sp_select') {
          const _0x211f22 = {
            'type': 'form',
            'title': '音乐文件',
            'content': '选择要加载的音乐',
            'buttons': [{
              'text': '没有文件'
            }]
          };
          const _0x4e4d0e = file_list(getResource() + '/sound_manager');
          _0x4e4d0e['sort']((_0x2171b0, _0xd250ea) => _0x2171b0['name']['localeCompare'](_0xd250ea['name']));
          for (let _0x541092 = 0x0; _0x541092 < _0x4e4d0e['length']; _0x541092++) {
            _0x211f22['buttons'][_0x541092] = {
              'text': _0x4e4d0e[_0x541092]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/sound_glyph_color_2x.png'
              }
            };
          }
          const _0x597e3c = JSON['stringify'](_0x211f22);
          addForm(_0x597e3c, function (_0x56fed7) {
            if (_0x4e4d0e['length'] > 0x0 && _0x56fed7 >= 0x0) {
              var _0x3466d8 = File['read'](_0x4e4d0e[_0x56fed7]['path']);
              if (_0x3466d8 != '' && SoundPlayer) {
                sp_data = JSON['parse'](_0x3466d8);
                sp_file = _0x3466d8;
                sp_length = sp_data['length'];
                以表闻辞不(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
              } else 以表闻辞不(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
            }
          });
        }
        if (_0x33fe82 === 'save_config') {
          const _0x5281e0 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
          addForm(_0x5281e0, function (_0x37ffab, _0x3420e3) {
            File['write'](nx_cfgs + '/' + _0x37ffab + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            以表闻辞不(0x0, 'Tip', '保存成功', '§r');
            if (_0x3420e3) nx_cfg = {
              'binds': {},
              'key_binds': [],
              'nx_raBinds': [],
              'name': getEntityName(self_id)
            };
          });
        }
        if (_0x33fe82 === 'load_config') {
          const _0x99312f = {
            'type': 'form',
            'title': '配置文件',
            'content': '选择要加载的配置',
            'buttons': [{
              'text': '§c没有配置'
            }]
          };
          const _0x1f709c = file_list(nx_cfgs);
          _0x1f709c['sort']((_0x5d3b6d, _0x53bf2b) => _0x5d3b6d['name']['localeCompare'](_0x53bf2b['name']));
          for (let _0x1aff5d = 0x0; _0x1aff5d < _0x1f709c['length']; _0x1aff5d++) {
            _0x99312f['buttons'][_0x1aff5d] = {
              'text': '§e' + _0x1f709c[_0x1aff5d]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/gear.png'
              }
            };
          }
          const _0x304496 = JSON['stringify'](_0x99312f);
          addForm(_0x304496, function (_0x4ab214) {
            if (_0x1f709c['length'] > 0x0 && _0x4ab214 >= 0x0) {
              var _0x9b8d8 = JSON['parse'](日笃欲苟顺(_0x1f709c[_0x4ab214]['path']));
              var _0x3a5a3c = 0x0;
              nx_binds = _0x9b8d8['binds'];
              nx_keys = _0x9b8d8['key_binds'];
              nx_raBinds = _0x9b8d8['nx_raBinds'];
              for (var _0x33c78c in _0x9b8d8) {
                _0x3a5a3c++;
                if (_0x33c78c['includes']('_mode') && _0x233c10['index']) modes[_0x33c78c] = _0x9b8d8[_0x33c78c];
                if (_0x33c78c != 'nx_raBinds' && _0x33c78c != 'key_binds' && _0x33c78c != 'binds' && _0x33c78c != 'name') 祚薄晚有儿(_0x33c78c, _0x9b8d8[_0x33c78c]);
              }
              nx_cfg = _0x9b8d8;
              以表闻辞不(0x0, 'Tip', '成功加载' + _0x9b8d8['name'] + '的配置，共' + _0x3a5a3c + '条配置', '§r');
            }
          });
        }
        if (_0x33fe82 === 'rpc_select') {
          const _0x4915d3 = {
            'type': 'form',
            'title': 'PyRpc列表',
            'content': '选择PyRpc',
            'buttons': [{
              'text': '没有PyRpc'
            }]
          };
          let _0x17c389 = JSON['parse'](File['read'](getResource() + '/GBRC/NoveXare/PyRpc_Record.json'));
          for (let _0x110f0e = 0x0; _0x110f0e < _0x17c389['length']; _0x110f0e++) {
            _0x4915d3['buttons'][_0x110f0e] = {
              'text': (_0x17c389[_0x110f0e]['type'] === 'Send' ? '§a' : '§c') + _0x17c389[_0x110f0e]['packet_str']
            };
          }
          const _0x1f7ab1 = JSON['stringify'](_0x4915d3);
          addForm(_0x1f7ab1, function (_0x471f98) {
            var _0x34affd = Object['values'](_0x17c389[_0x471f98]['packet_bin']);
            var _0x43e43b = new ArrayBuffer(_0x34affd['length']);
            var _0x440358 = new Uint8Array(_0x43e43b);
            _0x34affd['forEach']((_0x21e02d, _0x2e5209) => {
              _0x440358[_0x2e5209] = _0x21e02d;
            });
            prev_rpc = {
              'id': _0x17c389[_0x471f98]['id'],
              'data': _0x43e43b
            };
            以表闻辞不(0x0, 'Tip', '已设置上一条PyRpc', '§r');
          });
        }
        if (_0x33fe82 === 'cw_range') {
          let _0x5b7ab7 = getPlayerList();
          let _0x53cb4f = 0x0;
          for (let _0x12858c of _0x5b7ab7) {
            const _0x376055 = getPos(_0x12858c);
            const _0x10d6ce = getDistance(_0x376055, getPos(self_id));
            if (!at_whileLists['includes'](_0x12858c) && _0x10d6ce < cw_size && _0x12858c != self_id) {
              at_whileLists['push'](_0x12858c);
              _0x53cb4f++;
            }
          }
          以表闻辞不(0x0, 'Tip', '已添加' + _0x53cb4f + '个玩家到白名单', '§r');
        }
        if (_0x33fe82 === 'KickSelf') for (let _0x3f8175 = 0x0; _0x3f8175 < 0x3e8; _0x3f8175++) 臣荣举臣秀(self_id, Swing);
        if (_0x33fe82 === 'bc_delete') ac_pos = [];
        if (_0x33fe82 === 'cm_depart') departCamera();
        if (_0x33fe82 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
        if (_0x33fe82 === 'cm_reset') resetCamera();
        if (_0x33fe82 === 'cm_lock') lockCamera();
        if (_0x33fe82 === 'ou_recover') otherId = null;
        if (_0x33fe82 === 'delete_chest') ca_chest_pos = [];
        if (_0x33fe82 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
        if (_0x33fe82 === 'fm_place') fm_pos = self_pos;
        if (_0x33fe82 && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x33fe82)) 火臣欲奉诏(_0x33fe82, globalThis[_0x33fe82]);
        if (_0x33fe82 === 'cw_add' || _0x33fe82 === 'ct_add' || _0x33fe82 === 'ct_add') 贱当侍东宫(_0x33fe82 === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
        if (_0x33fe82 === 'fw_target' || _0x33fe82 === 'fc_target') 贱当侍东宫(_0x33fe82 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
        if (_0x33fe82 === 'cm_target') 贱当侍东宫('cm_target', 0x0);
        if (_0x33fe82 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
        if (_0x33fe82 === 'srp_add') srp_type = Number(srp_type) + 0x1;
        if (_0x33fe82 === 'cw_remove') at_whileLists = [];
        if (_0x33fe82 === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
          'targets': at_lists['map'](_0xf2322f => ({
            'name': getEntityName(_0xf2322f),
            'id': _0xf2322f,
            'namespace': getEntityNamespace(_0xf2322f)
          })),
          'players': getWorldPlayerList(),
          'entities': getEntityList()['map'](_0x375b83 => ({
            'name': getEntityName(_0x375b83),
            'id': _0x375b83,
            'namespace': getEntityNamespace(_0x375b83)
          }))
        }));
        if (_0x33fe82 === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
        if (_0x33fe82 === 'ImportWorldInfo') setWorldData(JSON['parse'](日笃欲苟顺(nx_paths + '/WorldInfo.json')));
        if (_0x33fe82 === 'Rusher') {
          const _0x46d853 = getCameraRotation();
          let _0x105bcb = 非臣陨首所(rush_length / 0x6, getPos(self_id), {
            'yaw': _0x46d853['yaw'] > 0x0 ? 0xb4 - _0x46d853['yaw'] : -0xb4 - _0x46d853['yaw'],
            'pitch': -_0x46d853['pitch']
          });
          setMotion(_0x105bcb['x'] - self_pos['x'], _0x105bcb['y'] - self_pos['y'], _0x105bcb['z'] - self_pos['z']);
        }
        return;
      }
      for (let _0x1a64f6 in _0x233c10) {
        if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x1a64f6)) continue;
        if (typeof _0x233c10['index'] !== 'undefined' && modes[_0x1a64f6] !== _0x233c10['index'] - 0x1 && _0x233c10['index'] > 0x0) {
          modes[_0x1a64f6] = _0x233c10['index'] - 0x1;
          nx_cfg[_0x1a64f6] = _0x233c10['index'] - 0x1;
          以表闻辞不(0x0, _0x1a64f6['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x233c10[_0x1a64f6], '§r');
          if (_0x1a64f6 === 'tip_mode' && modes['tip_mode'] === 0x1) {
            callModule(0x29, JSON['stringify']({
              'array_list': true,
              'array_offset_x': fst_x / 0x5,
              'array_offset_y': fst_y / 0x5
            }));
            showToast('注: 该功能会影响正常的ArrayList显示');
          }
          return true;
        }
        if (_0x1a64f6 === 'Criticals') {
          if (_0x233c10[_0x1a64f6]) playerJump();else {
            cc_status = false;
            callModule(0x2c, JSON['stringify']({
              'value': false,
              'no_move_check': true,
              'no_fall_check': true
            }));
          }
        }
        if (_0x1a64f6 === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
          'value': _0x233c10[_0x1a64f6],
          'count': ka_packet
        }));
        if (_0x1a64f6 === 'RandomArrayList' && !_0x233c10[_0x1a64f6]) {
          for (let _0x45b1b9 = 0x0; _0x45b1b9 < ral_num; _0x45b1b9++) addCustomArrayList('RandomArrayList' + _0x45b1b9, '', '', false);
        }
        if (_0x1a64f6 === 'Rocker') callModule(0x39, JSON['stringify']({
          'value': modes['rc_mode'] === 0x1 && _0x233c10[_0x1a64f6],
          'fov': 0x96
        }));
        if (_0x1a64f6 === 'FakeMove') {
          if (_0x233c10[_0x1a64f6]) fmo_pos = getPos(self_id);else if (!_0x233c10[_0x1a64f6]) 郡县逼迫催(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
          let _0xff5322 = {
            'enable': !_0x233c10[_0x1a64f6],
            'index': 0x13,
            'packet': 'receive'
          };
          callModule(0x7, JSON['stringify']({
            'enable': false,
            'index': 0x13,
            'packet': 'send'
          }));
          郡县逼迫催(self_pos['x'] + 0x3e8, self_pos['y'] + 0x3e8, self_pos['z'] + 0x3e8);
          callModule(0x7, JSON['stringify']({
            'enable': true,
            'index': 0x13,
            'packet': 'send'
          }));
          callModule(0x7, JSON['stringify'](_0xff5322));
          setTimeout(() => 郡县逼迫催(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
        }
        if (_0x1a64f6 === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
          'value': _0x233c10[_0x1a64f6],
          'count': cs_packet
        }));
        if (_0x1a64f6 === 'ShowNXInfo' && !_0x233c10[_0x1a64f6]) addCustomArrayList('NoveXare', '', '', false);
        if (_0x1a64f6 === 'RandomFunc') {
          const _0x17f2ae = Object['keys'](globalThis);
          let _0x3eab8a = [];
          for (let _0x1a69ed of _0x17f2ae) {
            if (typeof globalThis[_0x1a69ed] === 'boolean') _0x3eab8a['push'](_0x1a69ed);
          }
          const _0x4ae295 = _0x3eab8a[命诏书特下(0x0, _0x3eab8a['length'] - 0x1)];
          祚薄晚有儿(_0x4ae295, _0x233c10[_0x1a64f6]);
        }
        if (_0x1a64f6 === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
          'value': _0x233c10[_0x1a64f6],
          'count': ia_packet
        }));
        if (_0x1a64f6 === 'FlashBack') sb();
        if (_0x1a64f6 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x233c10[_0x1a64f6]) + '}');
        if (_0x1a64f6 === 'PyRpcManager' && rpc_store && !_0x233c10[_0x1a64f6]) {
          rpc_temp['forEach'](_0x36a983 => sendRpc(_0x36a983['id'], _0x36a983['data']));
          以表闻辞不(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
          rpc_temp = [];
        }
        if (_0x1a64f6 === 'HideHud') setBooleanOption(0x14f, {
          'value': _0x233c10[_0x1a64f6],
          'defaultValue': false
        });
        if (_0x1a64f6 === 'EntityXRay') setBooleanOption(0x149, {
          'value': _0x233c10[_0x1a64f6],
          'defaultValue': false
        });
        if (_0x1a64f6 === 'ShowChunk') setBooleanOption(0x147, {
          'value': _0x233c10[_0x1a64f6],
          'defaultValue': false
        });
        if (_0x1a64f6 === 'NoPractice') setBooleanOption(0x14c, {
          'value': _0x233c10[_0x1a64f6],
          'defaultValue': false
        });
        if (_0x1a64f6 === 'NoWeather') setBooleanOption(0x14e, {
          'value': _0x233c10[_0x1a64f6],
          'defaultValue': false
        });
        if (_0x1a64f6 === 'FreeCam') {
          let _0x3be8e2 = {
            'value': _0x233c10[_0x1a64f6],
            'noclip': _0x233c10[_0x1a64f6],
            'flying': _0x233c10[_0x1a64f6]
          };
          callModule(0x1, JSON['stringify'](_0x3be8e2));
          if (_0x233c10[_0x1a64f6]) fc_pos = getPos(self_id);else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
        }
        if (_0x1a64f6 === 'FakeMotion' && fm_auto && _0x233c10[_0x1a64f6]) fm_pos = getPos(self_id);
        if (_0x1a64f6 === 'ShadowBoomer' && _0x233c10[_0x1a64f6]) sb_pos = getPos(self_id);
        if (_0x1a64f6 === 'AvoidAttack' && _0x233c10[_0x1a64f6]) aa_pos = getPos(self_id);else if (_0x1a64f6 === 'AvoidAttack' && !_0x233c10[_0x1a64f6]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
        if (_0x1a64f6 === 'NoClip') {
          let _0x1fe222 = {
            'value': _0x233c10[_0x1a64f6],
            'noclip': _0x233c10[_0x1a64f6],
            'flying': _0x233c10[_0x1a64f6]
          };
          if (nc_depart && _0x233c10[_0x1a64f6]) departCamera();
          if (nc_depart && !_0x233c10[_0x1a64f6]) resetCamera();
          if (nc_bypass) callModule(0x2c, JSON['stringify']({
            'no_move_check': _0x233c10[_0x1a64f6],
            'no_fall_check': _0x233c10[_0x1a64f6],
            'value': _0x233c10[_0x1a64f6]
          }));
          callModule(0x1, JSON['stringify'](_0x1fe222));
          if (nc_blink) nc_pos = getPos(self_id);else nc_pos = {};
        }
        if (_0x1a64f6 === 'BalanceTimer') {
          callModule(0x25, JSON['stringify']({
            'value': _0x233c10[_0x1a64f6]
          }));
          BalanceTimer_st = !_0x233c10[_0x1a64f6];
        }
        if (_0x1a64f6 === 'IQBoost') {
          const _0x55f1a1 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
          let _0x16c29b = 命诏书特下(0x0, _0x55f1a1['length'] - 0x1);
          sendChatMessage('!' + _0x55f1a1[_0x16c29b]);
        }
        if (_0x1a64f6 === 'AutoTarget' && !_0x233c10[_0x1a64f6]) at_lists = [];
        if (_0x1a64f6 === 'SoundPlayer' && !_0x233c10[_0x1a64f6]) sp_data = [];
        if (_0x1a64f6 === 'FightBot' && !_0x233c10[_0x1a64f6]) {
          if (fb_ka) KillAura = false;
          if (fb_aa) AssistAim = false;
          if (fb_kd) KeepDistance = false;
          if (fb_sca) Scaffold = false;
        }
        if (_0x1a64f6 === 'ShowSendPacket' && !_0x233c10[_0x1a64f6] && JSON['stringify'](PacketTmp['send']) != '{}') {
          let _0x2b37fc = '';
          for (let _0x320b4c in PacketTmp['send']) _0x2b37fc += '名称:' + _0x320b4c + '，ID:' + PacketTmp['send'][_0x320b4c]['id'] + '，发送数量:' + PacketTmp['send'][_0x320b4c]['count'] + '\n';
          if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
          以表闻辞不(0x0, 'sendPacket', '\n' + _0x2b37fc, '§r');
          PacketTmp['send'] = {};
        }
        if (_0x1a64f6 === 'ShowReceivePacket' && !_0x233c10[_0x1a64f6] && JSON['stringify'](PacketTmp['receive']) != '{}') {
          let _0x56180d = '';
          for (let _0x1f82cf in PacketTmp['receive']) _0x56180d += '名称:' + _0x1f82cf + '，ID:' + PacketTmp['receive'][_0x1f82cf]['id'] + '，接受数量:' + PacketTmp['receive'][_0x1f82cf]['count'] + '\n';
          if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
          以表闻辞不(0x0, 'receivePacket', '\n' + _0x56180d, '§r');
          PacketTmp['receive'] = {};
        }
        if (_0x1a64f6 === 'Scaffold' && sca_keep && _0x233c10[_0x1a64f6]) sca_current = 0x0;
        if (_0x1a64f6 === 'SmartInv' && _0x233c10[_0x1a64f6]) {
          da_slot = 0x23;
          max_damage = 0x0;
          max_armor = [0x0, 0x0, 0x0, 0x0];
        }
        if (_0x1a64f6 === 'sp_loop' && !_0x233c10[_0x1a64f6]) sp_file = null;
        if (_0x1a64f6 === 'NoLiquid' && _0x233c10[_0x1a64f6]) {
          nl_water = getEntityAttribute(self_id, 0x2);
          nl_lava = getEntityAttribute(self_id, 0x6);
        } else if (_0x1a64f6 === 'NoLiquid' && !_0x233c10[_0x1a64f6]) {
          setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
          setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
        }
        if (typeof _0x233c10[_0x1a64f6] === 'boolean' || typeof _0x233c10[_0x1a64f6] === 'number') {
          if (typeof _0x233c10[_0x1a64f6] === 'boolean') {
            祚薄晚有儿(_0x1a64f6, _0x233c10[_0x1a64f6]);
            return;
          }
          nx_cfg[_0x1a64f6] = _0x233c10[_0x1a64f6];
          globalThis[_0x1a64f6] = _0x233c10[_0x1a64f6];
        }
      }
    } catch (_0x4c12ef) {
      clientMessage(_0x4c12ef['stack']);
    }
  }
  function onPlayerAttackEvent(_0x354617, _0x4cf7c9) {
    if (SoundManager && sm_attack) playSound(nx_paths + '/音效/attack.mp3');
    if (CameraManager && cm_transfer) cm_attack = _0x4cf7c9;
    if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
    if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x4cf7c9));
    if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x4cf7c9));
    if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x4cf7c9));
    if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x4cf7c9));
    if (TargetEdit) {
      if (te_target === null) te_target = _0x4cf7c9;else {
        if (te_all) getEntityList()['forEach'](_0x17f89a => {
          if (_0x17f89a != te_target) setTarget(_0x17f89a, te_target, te_two);
        });else setTarget(_0x4cf7c9, te_target, te_two);
        te_target = null;
        以表闻辞不(0x0, 'Tip', '设置完成', '§r');
      }
      return true;
    }
    if (RiderEdit) {
      if (re_cancel) stopRidingEntity(_0x4cf7c9);else startRidingEntity(_0x4cf7c9);
      以表闻辞不(0x0, 'Tip', '已骑乘目标', '§r');
      return true;
    }
    if (EntityNBTCopy) {
      if (enc_target === null) enc_target = _0x4cf7c9;else {
        setEntityNBT(_0x4cf7c9, getEntityNBT(te_target));
        enc_target = null;
        以表闻辞不(0x0, 'Tip', '已复制NBT', '§r');
      }
      return true;
    }
    if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x4cf7c9));
    if (!attack_list['includes'](_0x4cf7c9)) attack_list['push'](_0x4cf7c9);
    if (_0x4cf7c9 === null || attack_list['every'](_0x3ad9d6 => last_attack_target['includes'](_0x3ad9d6))) {
      attack_frequency++;
      isAttacking = true;
    } else {
      last_attack_target = _0x4cf7c9;
      attack_ticks = 0x0;
      real_attack = 0x0;
      attack_frequency = 0x0;
      click_num = 0x0;
      click_t = 0x0;
    }
    if (PVPDaLao) setTitle('还是PVP大佬');
    if (OtherUser) {
      otherId = _0x4cf7c9;
      return true;
    }
    if (CameraManager && cm_editanchor) {
      cm_id = _0x4cf7c9;
      以表闻辞不(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x4cf7c9), '§r');
      return true;
    }
    if (AttackMessage) sendChatMessage(am_text);
    if (AttackParticle) {
      if (ap_crit) {
        const _0x4a06aa = getPos(_0x4cf7c9);
        const _0xec7c7c = getEntitySize(_0x4cf7c9);
        for (let _0x4dc1bd = 0x0; _0x4dc1bd < 命诏书特下(ap_count, ap_count + 0x14); _0x4dc1bd++) 息外无期功(ap_type, _0x4a06aa['x'] + 命诏书特下(-_0xec7c7c['x'] * 命诏书特下(0x5, ap_density), _0xec7c7c['x'] * 命诏书特下(0x5, ap_density)) / 0xa, _0x4a06aa['y'] + 命诏书特下(-_0xec7c7c['y'] * 0x9, _0xec7c7c['y'] * 0x2) / 0xa + ap_offset / 0xa, _0x4a06aa['z'] + 命诏书特下(-_0xec7c7c['x'] * 命诏书特下(0x5, ap_density), _0xec7c7c['x'] * 命诏书特下(0x5, ap_density)) / 0xa, 0x1);
      }
      if (ap_slashblade) {
        let _0x3f2848 = getCameraRotation();
        let _0x2aa196 = {
          'yaw': _0x3f2848['yaw'] > 0x0 ? 0xb4 - _0x3f2848['yaw'] : -0xb4 - _0x3f2848['yaw'],
          'pitch': -_0x3f2848['pitch']
        };
        let _0x458cc9 = 命诏书特下(0x0, 0x1);
        let _0x305793 = (ap_random_slope ? 命诏书特下(0x0, 0x2d) : ap_sb_slope) / 0xa;
        for (let _0x19a98f = -ap_sb_count * 0x2; _0x19a98f <= ap_sb_count * 0x2; _0x19a98f += ap_sb_space) {
          let _0x57f811 = _0x458cc9 ? _0x19a98f : -_0x19a98f;
          const _0x2e23b5 = 非臣陨首所(ap_sb_dist, self_pos, {
            'yaw': _0x2aa196['yaw'] + _0x57f811,
            'pitch': _0x2aa196['pitch'] + _0x19a98f * _0x305793
          });
          息外无期功(ap_type, _0x2e23b5['x'], _0x2e23b5['y'] + ap_offset / 0xa, _0x2e23b5['z'], 0x1);
        }
      }
    }
    if (AttackSound) {
      病常在床蓐(Number(as_type), Number(as_level));
      if (as_gradually) as_level = Number(as_level) + 0x1;
      if (as_gradually) attack_tick = 0x0;
    }
    if (AttackRender) {
      const _0x4fa44f = 就职诏书切(self_id, _0x4cf7c9);
      callModule(0x4b, JSON['stringify']({
        'value': true,
        'line_width': 0.25,
        'mode': 0x2,
        'distance': _0x4fa44f * 1.01
      }));
      setTimeout(() => callModule(0x4b, JSON['stringify']({
        'value': false
      })), 0xc8);
    }
    if (RecordInfo && ri_click) {
      let _0x875a3f = 多疾病九岁(_0x4cf7c9);
      以表闻辞不(0x0, 'Info', '\n' + _0x875a3f + '\n§r§b==============================', '§r');
      if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x4cf7c9) + '_' + _0x4cf7c9 + '.txt', _0x875a3f);
      return true;
    }
    if (SmartWeapon) {
      let _0x2c48d8 = [];
      let _0x23ae81 = modes['sw_mode'] ? 0x24 : 0x9;
      for (let _0x5d9eb4 = 0x0; _0x5d9eb4 < _0x23ae81; _0x5d9eb4++) _0x2c48d8['push']({
        'slot': _0x5d9eb4,
        'd': 守臣逵察臣(self_id, _0x5d9eb4, sw_texture, sw_enchant)
      });
      _0x2c48d8['sort']((_0x50d8bf, _0x421e01) => _0x421e01['d'] - _0x50d8bf['d']);
      let _0x2d077c = _0x2c48d8[0x0];
      let _0x42b118 = getPlayerSelectItemSlot(self_id);
      if (_0x2d077c['d'] > 0x1 && _0x2d077c['slot'] !== _0x42b118) {
        if (_0x2d077c['slot'] > 0x8) {
          if (sw_open) openInventory();
          setTimeout(() => 苦至于成立(_0x2d077c['slot'], _0x42b118, true, false), 0xc8);
        } else selectPlayerInventorySlot(self_id, _0x2d077c['slot']);
      }
    }
    if (ClickTarget) {
      if (!at_lists['includes'](_0x4cf7c9)) at_lists['push'](_0x4cf7c9);else at_lists['splice'](at_lists['indexOf'](_0x4cf7c9), 0x1);
      以表闻辞不(0x0, !at_lists['includes'](_0x4cf7c9) ? 'delTarget' : 'addTarget', getEntityName(_0x4cf7c9), '§r');
      return true;
    }
    if (CustomKB) {
      const _0xfc8829 = getPos(_0x4cf7c9);
      const _0xbfbc7f = 伏惟圣朝以(self_pos, _0xfc8829, 'yaw_pos');
      const _0x2fb722 = 非臣陨首所(-ckb_len / 0x2, self_pos, {
        'yaw': _0xbfbc7f,
        'pitch': 0x0
      });
      setEntityMotion(_0x4cf7c9, _0x2fb722['x'] - self_pos['x'], ckb_y, _0x2fb722['z'] - self_pos['z']);
    }
    if (ClickWhiteList) {
      if (!at_whileLists['includes'](_0x4cf7c9)) at_whileLists['push'](_0x4cf7c9);else at_whileLists['splice'](at_whileLists['indexOf'](_0x4cf7c9), 0x1);
      以表闻辞不(0x0, !at_whileLists['includes'](_0x4cf7c9) ? 'delTarget' : 'addTarget', getEntityName(_0x4cf7c9), '§r');
      return true;
    }
    if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
      ct_team = 奔驰则刘病(getEntityName(_0x4cf7c9));
      以表闻辞不(0x0, 'setTeam', ct_team, '§r');
      return true;
    }
    if (TargetHud && modes['th_select_mode'] == 0x1) {
      th_target = _0x4cf7c9;
      th_tick = 0x0;
    }
    if (KillAura) return 命诏书特下(0x0, 0x64) < ka_empty;
  }
  function onSendChatMessageEvent(_0xa04362) {
    if (_0xa04362 === '') return true;
    if (ReplaceMsg) {
      if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0xa04362);
      if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0xa04362);
      if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0xa04362);
      return true;
    }
    if (ChatManager && cm_fake) {
      executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0xa04362);
      return true;
    }
    if (FakeChat) {
      chatMessage(fc_target, _0xa04362);
      return true;
    }
    if (FakeWhisper) {
      whisperMessage(fw_target, _0xa04362);
      return true;
    }
    if (ChatSuffix && !_0xa04362['includes'](cs_text)) {
      sendChatMessage(_0xa04362 + cs_text);
      return true;
    }
  }
  function onClientMessageEvent(_0x4e8761, _0x29eb72) {
    if (ChatManager && (_0x4e8761 != getEntityName(self_id) && cm_other || _0x4e8761 == getEntityName(self_id) && cm_self) && !isRepeating) {
      isRepeating = true;
      for (let _0x2777ca = 0x0; _0x2777ca < cm_repeat_times; _0x2777ca++) sendChatMessage(_0x29eb72);
      setTimeout(() => isRepeating = false, 0x64);
    }
    ;
    if (ShowClientMessage) 以表闻辞不(0x0, 'clientMsg', '来源: ' + _0x4e8761 + ', 消息:' + _0x29eb72, '§r');
    if (ChatManager) return cm_black['some'](_0x10b439 => _0x29eb72['includes'](_0x10b439));
    if (ChatManager && _0x29eb72['length'] > cm_length) return;
    if (BulletNotice) {
      let _0x14386f = Math['round'](命诏书特下(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
      let _0x288746 = bn_format['replaceAll']('[名字]', _0x4e8761)['replaceAll']('[消息]', _0x29eb72);
      const _0x19d6a3 = 'abcdef';
      if (bn_format) _0x288746 = 年四岁舅夺(_0x288746);
      if (bn_rainbow) _0x288746 = '§' + _0x19d6a3[命诏书特下(0x0, _0x19d6a3['length'] - 0x1)] + _0x288746;
      let _0x506a84 = createText(_0x288746, 'Center', nx_screen['screenWidth'], _0x14386f);
      if (_0x506a84 !== -0x1) bn_list['push']({
        'id': _0x506a84,
        'speed': 命诏书特下(bn_min, bn_max),
        'x': nx_screen['screenWidth'],
        'y': _0x14386f
      });
      return bn_intercept;
    }
    return ShowClientMessage;
  }
  function onPlayerJumpEvent(_0x274c19) {
    if (ActivitySender) sendChatMessage('我正在跳跃');
    if (PVPDaLao) setTitle('还是什么都不知道的小白');
    if (Scaffold && sca_tower) {
      let _0x33bedf = Date['now']();
      if (_0x33bedf - sca_prevTower < sca_space * 0x32 && setPos(self_pos['x'], self_pos['y'] + 1.3, self_pos['z']) && buildBlock(self_id, self_pos['x'], self_pos['y'] - 2.3, self_pos['z'], 0x1) && sca_keep) sca_current = Math['floor'](self_pos['y']) + 0x1;
      sca_prevTower = _0x33bedf;
    }
    if (LongJump) {
      const _0xaa0a6d = getEntityMotion(_0x274c19);
      const _0x2d9313 = getCameraRotation();
      const _0x3adb31 = 拜臣郎中寻(_0xaa0a6d, self_pos, 0x14);
      const _0x2bfed4 = 非臣陨首所(lj_len / 0x4, self_pos, {
        'yaw': _0x2d9313['yaw'] > 0x0 ? 0xb4 - _0x2d9313['yaw'] : -0xb4 - _0x2d9313['yaw'],
        'pitch': 0x0
      });
      setMotion(_0x2bfed4['x'] - self_pos['x'], lj_y, _0x2bfed4['z'] - self_pos['z']);
      return true;
    }
  }
  function onPyRpcReceiveEvent(_0x3f0573, _0x325612) {
    if (isTP) {
      const _0x198d5d = 凶生孩六月(_0x325612)['toLowerCase']();
      if (_0x198d5d['includes']('posmap')) {
        const _0x254dbe = new Uint8Array(_0x325612);
        const _0x435322 = Array['from'](_0x254dbe, _0x398584 => _0x398584['toString'](0x10)['padStart'](0x2, '0'))['join']('');
        let _0x416af9 = calHexPos(_0x435322);
        以表闻辞不(0x0, 'Pos', '坐标: [' + _0x416af9['x'] + ', ' + _0x416af9['y'] + ', ' + _0x416af9['z'] + ']', '§r');
        if (st_tp) setPos(_0x416af9['x'], _0x416af9['y'] + st_offset, _0x416af9['z']);
        isTP = false;
      }
    }
    if (PyRpcManager && rpc_rec) {
      const _0x1baddd = new Uint8Array(_0x325612);
      const _0x4d490d = Array['from'](_0x1baddd, _0x1bd1c4 => _0x1bd1c4['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x38a626 = 凶生孩六月(_0x325612)['toLowerCase']();
      let _0xd6281a = false;
      let _0x17d368 = rpc_tipWhite['some'](_0x151926 => _0x38a626['includes'](_0x151926));
      if (!_0xd6281a) _0xd6281a = rpc_black['some'](_0xe419bb => _0x38a626['includes'](_0xe419bb));
      if (!_0xd6281a) _0xd6281a = rpc_recBlack['some'](_0x3e19b => _0x38a626['includes'](_0x3e19b));
      if (rpc_white['some'](_0x32e3b2 => _0x38a626['includes'](_0x32e3b2))) _0xd6281a = false;
      if (rpc_recWhite['some'](_0x752248 => _0x38a626['includes'](_0x752248))) _0xd6281a = false;
      if (rpc_record && (!_0x17d368 || !rpc_exclude)) {
        const _0x944560 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
        const _0x2ca244 = JSON['parse'](日笃欲苟顺(_0x944560));
        _0x2ca244[_0x2ca244['length']] = {
          'packet_hex': _0x4d490d,
          'packet_format': hex2format(_0x4d490d),
          'packet_str': 凶生孩六月(_0x325612),
          'packet_bin': _0x1baddd,
          'time': Date['now'](),
          'id': _0x3f0573,
          'type': 'Receive',
          'keword': rpc_recBlack,
          'global_keyword': rpc_black,
          'intercept': _0xd6281a
        };
        File['write'](_0x944560, JSON['stringify'](_0x2ca244, null, 0x4));
      }
      let _0x5e04cc = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x5e04cc = 凶生孩六月(_0x325612);
      if (modes['rpc_mode'] === 0x1) _0x5e04cc = _0x4d490d;
      if (modes['rpc_mode'] === 0x2) _0x5e04cc = hex2format(_0x4d490d);
      if (modes['rpc_mode'] === 0x3) _0x5e04cc = JSON['stringify'](_0x325612);
      const _0x4c8d57 = _0xd6281a ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
      if (rpc_tip && !_0x17d368 && (rpc_showDisintercept && !_0xd6281a || rpc_showIntercept && _0xd6281a)) 以表闻辞不(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x3f0573 + '\n' : '') + _0x5e04cc + _0x4c8d57, '§r');
      return _0xd6281a;
    }
  }
  function onPyRpcSendEvent(_0x300c72, _0x527e68) {
    if (PyRpcManager && rpc_send) {
      const _0x3cc0a4 = new Uint8Array(_0x527e68);
      const _0x5ccb76 = Array['from'](_0x3cc0a4, _0x5369f2 => _0x5369f2['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x21c8ae = 凶生孩六月(_0x527e68)['toLowerCase']();
      let _0x1efca4 = false;
      let _0xcce80d = rpc_tipWhite['some'](_0xc71562 => _0x21c8ae['includes'](_0xc71562));
      if (!_0x1efca4) _0x1efca4 = rpc_black['some'](_0x220e27 => _0x21c8ae['includes'](_0x220e27));
      if (!_0x1efca4) _0x1efca4 = rpc_sendBlack['some'](_0x3ac594 => _0x21c8ae['includes'](_0x3ac594));
      if (rpc_white['some'](_0xbcc883 => _0x21c8ae['includes'](_0xbcc883))) _0x1efca4 = true;
      if (rpc_sendWhite['some'](_0x401390 => _0x21c8ae['includes'](_0x401390))) _0x1efca4 = false;
      if (!_0xcce80d) prev_rpc = {
        'id': _0x300c72,
        'data': _0x3cc0a4
      };
      if (rpc_store) rpc_temp['push']({
        'id': _0x300c72,
        'data': _0x3cc0a4
      });
      if (rpc_intercept) _0x1efca4 = true;
      if (rpc_record && (!_0xcce80d || !rpc_exclude)) {
        const _0x291643 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
        const _0x2404d3 = JSON['parse'](日笃欲苟顺(_0x291643));
        _0x2404d3[_0x2404d3['length']] = {
          'packet_hex': _0x5ccb76,
          'packet_format': hex2format(_0x5ccb76),
          'packet_str': 凶生孩六月(_0x527e68),
          'packet_bin': _0x3cc0a4,
          'time': Date['now'](),
          'id': _0x300c72,
          'type': 'Send',
          'keword': rpc_sendBlack,
          'global_keyword': rpc_black,
          'intercept': _0x1efca4
        };
        File['write'](_0x291643, JSON['stringify'](_0x2404d3, null, 0x4));
      }
      let _0xc51214 = 'Null';
      if (modes['rpc_mode'] === 0x0) _0xc51214 = 凶生孩六月(_0x527e68);
      if (modes['rpc_mode'] === 0x1) _0xc51214 = _0x5ccb76;
      if (modes['rpc_mode'] === 0x2) _0xc51214 = hex2format(_0x5ccb76);
      if (modes['rpc_mode'] === 0x3) _0xc51214 = JSON['stringify'](_0x527e68);
      for (let _0x26a21b of rpc_config) {
        if (typeof _0x26a21b === 'object') {
          if (_0x26a21b['match_mode'] === 0x0 && _0xc51214['includes'](_0x26a21b['packet'])) _0xc51214 = remarks;
          if (_0x26a21b['match_mode'] === 0x1 && _0xc51214['includes'] === _0x26a21b['packet']) _0xc51214 = remarks;
        } else continue;
      }
      let _0xe05709 = _0x1efca4 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
      if (rpc_tip && !_0xcce80d && (rpc_showDisintercept && !_0x1efca4 || rpc_showIntercept && _0x1efca4)) 以表闻辞不(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x300c72 + '\n' : '') + _0xc51214 + _0xe05709, '§r');
      return _0x1efca4;
    }
  }
  function onEntityBehaviorEvent(_0x363a34, _0x1fa073, _0x46057f) {
    if (ShowEntityAnime) 以表闻辞不(0x0, 'EntityBehavior', '实体ID:' + _0x363a34 + ' 实体昵称:' + getEntityName(_0x363a34) + ' 行为ID:' + _0x1fa073 + ' 行为数据:' + _0x46057f, '§r');
    if (_0x1fa073 === 0x27 && _0x363a34 === av_id) av_id = null;
    if (_0x1fa073 === 0x3 && attack_list['includes'](_0x363a34)) {
      if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
      if (KillMessage) {
        if (km_hide) {
          for (let _0x2b0626 = 0x0; _0x2b0626 < 0x32; _0x2b0626++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x363a34) + ' 死了');
          executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
        } else sendChatMessage(km_text);
      }
      以表闻辞不(0x0, 'Kill', 'You Kill ' + getEntityName(_0x363a34), '§r');
      if (SoundManager && sm_kill) playSound(nx_paths + '/音效/kill.mp3');
      kills++;
      mini_tick = 0x0;
      if (FunnyKill && mini_kills < 0xa) mini_kills++;
      setTimeout(() => {
        if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/音效/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
        if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
      }, mini_delay * 0x3e8);
    }
    if (_0x1fa073 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x363a34);
    if (_0x1fa073 === 0x2 && attack_list['includes'](_0x363a34)) real_attack++;
    if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x1fa073 === 0x4 && _0x363a34 != self_id)) {
      let _0x2ad435 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x363a34;
      if (就职诏书切(_0x2ad435, self_id) < fb_range) 臣荣举臣秀(_0x363a34, Swing);
      fb_ishurt = false;
    }
    if (_0x1fa073 === 0x2 && _0x363a34 === self_id) {
      let _0x5d00a2 = getEntityMotion(self_id);
      if (SoundManager && sm_hurt) playSound(nx_paths + '/音效/hurt.mp3');
      if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
      if (ActivitySender) sendChatMessage('我正在被攻击');
      if (ShowHurt) 以表闻辞不(0x0, 'Hurt', '受伤类型: ' + _0x46057f, '§r');
      if (HurtJump) setMotion(_0x5d00a2['x'], hj_height, _0x5d00a2['z']);
      if (AntiKB) {
        let _0x3bd73f = akb_hor / 0x64;
        let _0x2a20e8 = akb_y / 0x64;
        setMotion(_0x5d00a2['x'] - _0x3bd73f * _0x5d00a2['x'], _0x5d00a2['y'] - _0x2a20e8 * _0x5d00a2['y'], _0x5d00a2['z'] - _0x3bd73f * _0x5d00a2['z']);
      }
      if (AirStuck) as_time_t = 0x0;
      if (FightBack && _0x46057f == 0x2) fb_ishurt = true;
      if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
    }
    if (_0x1fa073 === 0x2) attack_list = [];
  }
  function onPlayerDestroyBlockEvent(_0x1d3299, _0x223ae0, _0x4a066e, _0x18bb67, _0x4bf7ea) {
    const _0x5b8563 = getCarried(_0x1d3299);
    const _0x33c810 = getBlock(_0x223ae0, _0x4a066e, _0x18bb67);
    if (_0x33c810['namespace'] == 'minecraft:air') return;
    if (SoundManager && sm_destroy) playSound(nx_paths + '/音效/destroy.mp3');
    if (ShowDestroyBlock) 以表闻辞不(0x0, 'destroy', '命名空间:' + _0x33c810['namespace'] + ', §rID:' + _0x33c810['id'] + ', 方块选择面:' + _0x4bf7ea + ', §r特殊值:' + _0x33c810['aux'] + '\n手持:' + _0x5b8563['name'] + '-[' + _0x5b8563['namespace'] + '], 特殊值:' + _0x5b8563['aux'] + '\n坐标:[' + _0x223ae0 + ', ' + _0x4a066e + ', ' + _0x18bb67 + ']', '§r');
    if (ActivitySender) sendChatMessage('我正在破坏' + _0x223ae0 + ' ' + _0x4a066e + ' ' + _0x18bb67 + '的' + _0x33c810['namespace']);
    if (Miner && (_0x33c810['namespace'] === mine_name || !mine_destroy)) {
      if (!mine_destroy && mine_current <= mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x1ff879 => _0x33c810['namespace']['includes'](_0x1ff879))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x4e90fd => !_0x33c810['namespace']['includes'](_0x4e90fd)))) {
        mine_destroy = true;
        mine_name = _0x33c810['namespace'];
      }
      if (mine_destroy && mine_name != _0x33c810['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x33c810['namespace'];
      if (getDistance(self_pos, {
        'x': _0x223ae0,
        'y': _0x4a066e,
        'z': _0x18bb67
      }) <= mine_distance && mine_destroy) {
        let _0x3d25fe = [[_0x223ae0 + 0x1, _0x4a066e, _0x18bb67], [_0x223ae0 - 0x1, _0x4a066e, _0x18bb67], [_0x223ae0, _0x4a066e, _0x18bb67 + 0x1], [_0x223ae0, _0x4a066e, _0x18bb67 - 0x1], [_0x223ae0, _0x4a066e + 0x1, _0x18bb67], [_0x223ae0, _0x4a066e - 0x1, _0x18bb67]];
        for (p of _0x3d25fe) {
          const _0xfff395 = getBlock(p[0x0], p[0x1], p[0x2]);
          if (_0xfff395['namespace'] != 'minecraft:air' && _0x33c810['namespace'] === mine_name) mine_list['push'](p);
        }
      }
    }
  }
  function onReadyEvent() {
    if (ShowGameInfo) {
      const _0x220b94 = getWorldData();
      if (ShowGameInfo) 以表闻辞不(0x0, 'Tip', '进入世界 ' + _0x220b94['levelName'] + ' ，难度:' + _0x220b94['difficulty'] + ' 游戏模式:' + _0x220b94['gameType'] + ' 游戏时间:' + _0x220b94['time'] + ' 随机刻速度:' + _0x220b94['randomTickSpeed'], '§r');
    }
  }
  function onPlayerBuildBlockEvent(_0x5c7e39, _0x54474a, _0x548d73, _0x5f5a21, _0x57576c) {
    if (PVPDaLao) setTitle('又或是建筑大佬');
    if (SoundManager && sm_build) playSound(nx_paths + '/音效/build.mp3');
    const _0x3a6caf = getCarried(_0x5c7e39);
    const _0x9ea9c9 = getBlock(_0x54474a, _0x548d73, _0x5f5a21);
    if (ActivitySender) sendChatMessage('我正在放置' + _0x3a6caf['name']);
    if (ShowClickBlock) 以表闻辞不(0x0, 'build', '命名空间:' + _0x9ea9c9['namespace'] + ', §rID:' + _0x9ea9c9['id'] + ', 方块选择面:' + _0x57576c + ', §r特殊值:' + _0x9ea9c9['aux'] + '\n手持:' + _0x3a6caf['name'] + '-[' + _0x3a6caf['namespace'] + '], 特殊值:' + _0x3a6caf['aux'] + '\n坐标:[' + _0x54474a + ', ' + _0x548d73 + ', ' + _0x5f5a21 + ']', '§r');
    if (ClickTP) 郡县逼迫催(_0x54474a, _0x548d73 + 0x2, _0x5f5a21);
    const _0x31d8b0 = ChestAura && ca_rot && _0x9ea9c9['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x5c7e39) || ClickRot;
    if (_0x31d8b0) {
      let _0x3d2f2e = {
        'x': _0x54474a,
        'y': _0x548d73,
        'z': _0x5f5a21
      };
      const _0x2c50d0 = 拜臣郎中寻(getEntityMotion(_0x5c7e39), getPos(_0x5c7e39), 0x14);
      let _0x41f898 = 伏惟圣朝以(_0x2c50d0, _0x3d2f2e, 'pitch_pos');
      let _0x20eff3 = 伏惟圣朝以(_0x2c50d0, _0x3d2f2e, 'yaw_pos');
      既无伯叔终(_0x41f898, _0x20eff3);
    }
    if (GetCommand && _0x9ea9c9['namespace']['includes']('command_block')) {
      let _0x636fd8 = getBlockEntityNBT(_0x54474a, _0x548d73, _0x5f5a21);
      let _0x228420 = 孝廉后刺史(_0x636fd8, 'Command:"', '",Cu');
      let _0x4eabd5 = 孝廉后刺史(_0x636fd8, 'auto:', 'b,c') === '1' ? '是' : '否';
      let _0x194c37 = 孝廉后刺史(_0x636fd8, 'TickDelay:', ',Tr');
      以表闻辞不(0x0, 'Cmd', '坐标:[' + _0x54474a + ' ' + _0x548d73 + ' ' + _0x5f5a21 + ']\n指令:' + _0x228420 + '\n是否自动:' + _0x4eabd5 + '\n执行延迟:' + _0x194c37 + 'Tick', '§r');
      return true;
    }
    if (BlockTagCopy) {
      if (btc_pos === null) btc_pos = [_0x54474a, _0x548d73, _0x5f5a21];else {
        setBlockEntityData(_0x54474a, _0x548d73, _0x5f5a21, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
        btc_pos = null;
        以表闻辞不(0x0, 'Tip', '复制标签成功', '§r');
      }
      return true;
    }
    if (FakeBuilder) {
      let _0x549132 = [[_0x54474a, _0x548d73 - 0x1, _0x5f5a21], [_0x54474a, _0x548d73 + 0x1, _0x5f5a21], [_0x54474a, _0x548d73, _0x5f5a21 - 0x1], [_0x54474a, _0x548d73, _0x5f5a21 + 0x1], [_0x54474a - 0x1, _0x548d73, _0x5f5a21], [_0x54474a + 0x1, _0x548d73, _0x5f5a21]];
      setBlock(_0x549132[_0x57576c][0x0], _0x549132[_0x57576c][0x1], _0x549132[_0x57576c][0x2], _0x3a6caf['namespace'], _0x3a6caf['aux']);
      return true;
    }
    if (ClickBlock) return setBlock(_0x54474a, _0x548d73, _0x5f5a21, _0x3a6caf['namespace'], _0x3a6caf['aux']);
    if (ClickDestroy && !AutoDestroy) 朝历职郎署({
      'x': _0x54474a,
      'y': _0x548d73,
      'z': _0x5f5a21
    });
    if (AutoBed && _0x9ea9c9['namespace'] === 'minecraft:bed' && !ab_running) {
      以表闻辞不(0x0, 'Tip', '请手持方块', '§r');
      let _0x445f99 = [[_0x54474a + 0x1, _0x548d73, _0x5f5a21], [_0x54474a - 0x1, _0x548d73, _0x5f5a21], [_0x54474a, _0x548d73, _0x5f5a21 + 0x1], [_0x54474a, _0x548d73, _0x5f5a21 - 0x1], [_0x54474a, _0x548d73 + 0x1, _0x5f5a21]];
      ab_running = true;
      for (let _0x1ed9dd of _0x445f99) {
        const _0x339852 = getBlock(_0x1ed9dd[0x0], _0x1ed9dd[0x1], _0x1ed9dd[0x2]);
        if (_0x339852['namespace'] === 'minecraft:air') 立形影相吊(_0x1ed9dd[0x0], _0x1ed9dd[0x1], _0x1ed9dd[0x2]);
      }
      ab_running = false;
    }
    if (Breaker && (_0x3a6caf['namespace']['includes']('_sword') || _0x3a6caf['namespace']['includes']('_pickaxe') || _0x3a6caf['namespace']['includes']('_axe') || _0x3a6caf['namespace']['includes']('shears'))) {
      if (bk_origin) {
        callModule(0xf, JSON['stringify']({
          'value': true
        }));
        setTimeout(() => callModule(0xf, JSON['stringify']({
          'value': false
        })), bk_last * 0x32);
        return true;
      }
      const _0x4f844e = Math['round'](bk_range);
      _0x4f9a5d: for (let _0x25181d = -_0x4f844e; _0x25181d <= _0x4f844e; _0x25181d++) {
        for (let _0x2f947e = -_0x4f844e; _0x2f947e < _0x4f844e; _0x2f947e++) {
          for (let _0x19d81e = -_0x4f844e; _0x19d81e <= _0x4f844e; _0x19d81e++) {
            let _0x1c965c = _0x54474a + _0x25181d;
            let _0x405168 = _0x548d73 + _0x2f947e;
            let _0x542021 = _0x5f5a21 + _0x19d81e;
            let _0x1eaedc = getBlock(_0x1c965c, _0x405168, _0x542021);
            if (bk_bed && _0x1eaedc['namespace'] === 'minecraft:bed' || bk_chest && _0x1eaedc['namespace'] === 'minecraft:chest') {
              let _0x1118f6 = getBlock(_0x1c965c, _0x405168 + 0x1, _0x542021);
              if (_0x1118f6['namespace'] != 'minecraft:air' && bk_up) _0x405168 += 0x1;
              if (bk_tool && _0x1118f6['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x5c7e39, 才臣以供养(_0x5c7e39, '_pickaxe'));
              if (bk_tool && _0x1118f6['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x5c7e39, 才臣以供养(_0x5c7e39, '_axe'));
              if (bk_tool && _0x1118f6['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x5c7e39, 才臣以供养(_0x5c7e39, 'shears'));
              bk_pos = {
                'ex': _0x1c965c,
                'ey': _0x405168,
                'ez': _0x542021
              };
              bk_timer = 0x0;
              break _0x4f9a5d;
            }
          }
        }
      }
    }
    if (bc_select && BlockClicker) {
      ac_pos['push']({
        'x': _0x54474a,
        'y': _0x548d73,
        'z': _0x5f5a21
      });
      以表闻辞不(0x0, 'Tip', '已添加[' + _0x54474a + ', ' + _0x548d73 + ', ' + _0x5f5a21 + ']', '§r');
      return true;
    }
    if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
      const _0x5bfa31 = getCameraRotation();
      for (let _0x5c8a1c = 0x0; _0x5c8a1c < fb_len + 0x1; _0x5c8a1c++) fb_list['push'](非臣陨首所(_0x5c8a1c, 私情则告诉(_0x5c7e39), {
        'pitch': 0x0,
        'yaw': _0x5bfa31['yaw'] > 0x0 ? 0xb4 - _0x5bfa31['yaw'] : -0xb4 - _0x5bfa31['yaw']
      }));
      fb_success = false;
      return true;
    }
    if (ca_check && _0x9ea9c9['namespace'] === 'minecraft:chest') chestStates['click'] = true;
  }
  function onKeyboardDownEvent(_0x476b7c) {
    if (ShowPressKey) 以表闻辞不(0x0, 'KeyBoard', '按下键值 ' + _0x476b7c, '§r');
    if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x476b7c] !== 'undefined') 祚薄晚有儿(nx_keys[_0x476b7c], !globalThis[nx_keys[_0x476b7c]]);
    if (nx_isBind != null && _0x476b7c != 0x42) {
      nx_keys[_0x476b7c] = nx_isBind;
      nx_cfg['key_binds'] = nx_keys;
      以表闻辞不(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x476b7c, '§r');
      nx_isBind = null;
    }
  }
  function onKeyboardUpEvent(_0x41a6b2) {
    if (ShowUpliftKey) 以表闻辞不(0x0, 'Tip', '释放键值 ' + _0x41a6b2, '§r');
  }
  function onSendServerPacketEvent(_0x1f2f91, _0x21243f) {
    if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
      if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;else return true;
    }
    if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
    if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x1f2f91 === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x1 && _0x1f2f91 === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x2 && _0x1f2f91 === 0xa1) return true;
    if (FreeCam && modes['fc_mode'] === 0x3 && _0x1f2f91 === 0x90) return true;
    if (FreeCam && modes['fc_mode'] === 0x0) return true;
    if (ShowSendPacket) {
      const _0x452318 = PacketTranslate[PacketTranslate['map'](_0x48b7ea => _0x48b7ea['id'])['indexOf'](_0x1f2f91)]['text'];
      if (sp_statistic) {
        if (typeof PacketTmp['send'][_0x21243f] === 'undefined') PacketTmp['send'][_0x21243f] = {
          'id': _0x1f2f91,
          'Translate': _0x452318,
          'count': 0x1
        };
        PacketTmp['send'][_0x21243f]['count']++;
      }
      const _0x24ef9d = PacketCfg['send'];
      const {
        ignore,
        intercept
      } = PacketCfg['send'];
      let _0x16aadd = [];
      if (sp_id) _0x16aadd['push'](_0x1f2f91);
      if (sp_name) _0x16aadd['push'](_0x21243f);
      if (sp_trans) _0x16aadd['push'](_0x452318);
      let _0x4f2e5e = sp_intercept && (intercept['includes'](_0x1f2f91) || intercept['includes'](_0x21243f));
      if (!sp_ignore || !(ignore['includes'](_0x1f2f91) || ignore['includes'](_0x21243f))) 以表闻辞不(0x0, 'SendPacket', '发送数据包: ' + _0x16aadd['join'](' - ') + (_0x4f2e5e ? '\n§e已拦截数据包' : ''), '§r');
      return _0x4f2e5e;
    }
  }
  function onReceiveServerPacketEvent(_0x5ed9bd, _0x3d448d) {
    if (ShadowBoomer && _0x5ed9bd == 0x19 && sb_hide) return true;
    if (KillAura && ka_close && _0x5ed9bd == 0x55) {
      KillAura = false;
      以表闻辞不(0x0, 'Tip', 'Auto Disable KillAura', '§r');
    }
    if ((TimePause || AvoidAttack) && _0x5ed9bd === 0x13) return true;
    if (NoAnyReceive) return true;
    if (AntiText && _0x5ed9bd === 0x9) at_current++;
    if ((KickAura || AntiText && at_current > at_max_text) && _0x5ed9bd === 0x9) return true;
    if (ModifyTime && _0x5ed9bd === 0xa) return true;
    if (ca_check && _0x5ed9bd === 0x2f) chestStates['packet'] = true;
    if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x5ed9bd === 0x13) return true;
    if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
    if (FreeCam && modes['fc_mode'] === 0x4 && _0x5ed9bd === 0x12) return true;
    if (NoCamShake && _0x5ed9bd === 0x1b) return true;
    if (ShowReceivePacket) {
      const _0x47499f = PacketTranslate[PacketTranslate['map'](_0x50ee33 => _0x50ee33['id'])['indexOf'](_0x5ed9bd)]['text'];
      if (srp_statistic) {
        if (typeof PacketTmp['receive'][_0x3d448d] === 'undefined') PacketTmp['receive'][_0x3d448d] = {
          'id': _0x5ed9bd,
          'Translate': _0x47499f,
          'count': 0x1
        };
        PacketTmp['receive'][_0x3d448d]['count']++;
      }
      const _0x3fbede = PacketCfg['receive'];
      const {
        ignore,
        intercept
      } = PacketCfg['receive'];
      let _0x24e6b5 = [];
      if (srp_id) _0x24e6b5['push'](_0x5ed9bd);
      if (srp_name) _0x24e6b5['push'](_0x3d448d);
      if (srp_trans) _0x24e6b5['push'](_0x47499f);
      let _0x1df168 = srp_intercept && (intercept['includes'](_0x5ed9bd) || intercept['includes'](_0x3d448d));
      if (!srp_ignore || !(ignore['includes'](_0x5ed9bd) || ignore['includes'](_0x3d448d))) 以表闻辞不(0x0, 'ReceivePacket', '接收数据包: ' + _0x24e6b5['join'](' - ') + (_0x1df168 ? '\n§e已拦截数据包' : ''), '§r');
      return _0x1df168;
    }
    return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x5ed9bd === 0x9;
  }
  function onTouchMotionDownEvent(_0x298461, _0x164195, _0x39f95f) {
    if (SafeAttack) {
      const _0x22bca3 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x2fdd1d = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x569316 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      const _0x5e03f1 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      if (at_lists['length'] > 0x0 && 孝治天下凡(self_id, at_lists[0x0], sa_fov, 0x0) && 就职诏书切(self_id, at_lists[0x0]) < sa_range && _0x164195 > _0x22bca3 && _0x164195 < _0x2fdd1d && _0x39f95f > _0x569316 && _0x39f95f < _0x5e03f1) 臣荣举臣秀(at_lists[0x0], Swing);
    }
    if (ClickSwing) swingArm();
    isClicking = true;
    click_num++;
  }
  function onContainerItemMoveEvent(_0x56d264, _0x30d8d2) {
    const _0x3bc366 = 亲抚养臣少(_0x30d8d2);
    if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x3bc366['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x3bc366['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
    if (ChestStealer && (!cs_sort || _0x56d264 > cs_sort) && cs_current < cs_maxCount) {
      let _0x269bc5 = cs_black['length'] === 0x0 || cs_black['some'](_0x1f5041 => _0x3bc366['namespace']['includes'](_0x1f5041));
      if (cs_white['length'] !== 0x0 && cs_white['some'](_0x88522c => _0x3bc366['namespace']['includes'](_0x88522c))) _0x269bc5 = false;
      if (_0x56d264 < cs_min && _0x56d264 > cs_max) _0x269bc5 = false;
      if (_0x3bc366['attackDamage'] !== 0x0 && _0x3bc366['attackDamage'] < cs_min_damage) _0x269bc5 = false;
      if (_0x3bc366['damage'] !== 0x0 && _0x3bc366['damage'] < cs_min_lasting) _0x269bc5 = false;
      if (!cs_weapon && _0x3bc366['attackDamage'] > 0x0 && _0x3bc366['damage'] > 0x0) _0x269bc5 = false;
      if (!cs_armor && _0x3bc366['attackDamage'] === 0x0 && _0x3bc366['damage'] > 0x0) _0x269bc5 = false;
      if (!cs_other && _0x3bc366['attackDamage'] === 0x0 && _0x3bc366['damage'] === 0x0) _0x269bc5 = false;
      if (cs_sort) cs_sort = _0x56d264;
      if (_0x269bc5) cs_timer = 0x0;
      if (_0x269bc5) cs_current++;
      return _0x269bc5;
    }
    if (ShowMoveContainer) 以表闻辞不(0x0, 'Container', '§e容器所在格子: §r' + _0x56d264 + '\n§e物品NBT数据: §r' + _0x30d8d2, '§r');
  }
  function onPlayerAuthInputEvent(_0x26d42f) {
    if (PlayerAuthInputPacket) 以表闻辞不(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x26d42f.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x26d42f.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x26d42f['pos']['x']['toFixed'](0x2) + ', ' + _0x26d42f['pos']['y']['toFixed'](0x2) + ',' + _0x26d42f['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x26d42f['delta']['x']['toFixed'](0x2) + ', ' + _0x26d42f['delta']['y']['toFixed'](0x2) + ', ' + _0x26d42f['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x26d42f['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x26d42f['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x26d42f['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x26d42f['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x26d42f['flags']), '§r');
  }
  function onSAuthLoginRequestEvent(_0xf638c1) {
    if (DumpRequestSauth) {
      File['write'](nx_paths + '/SauthRequest.json', _0xf638c1);
      showToast('已导出请求体');
    }
    if (Sauths != null && Sauths != '' && !sl_hook) {
      let _0x2534a1 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
      const _0x172374 = _0xf638c1['replace'](孝廉后刺史(_0xf638c1, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x2534a1)['sauth_json']));
      showToast('已拦截替换Sauth');
      return _0x172374['replace'](/转义/g, '\\"');
    }
  }
  function onSAuthLoginResponseEvent(_0x11028e) {
    if (DumpResponseSauth) {
      File['write'](nx_paths + '/SauthResponse.json', _0x11028e);
      showToast('已导出响应体');
    }
    if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
  }
  function onSAuthJsonHookEvent(_0x1bffab) {
    if (DumpCookieSauth) {
      File['write'](nx_paths + '/SauthCookie.json', _0x1bffab);
      showToast('已导出本账号Cookie');
    }
    if (Sauths != null && Sauths != '' && sl_hook) {
      showToast('已拦截替换Sauth');
      let _0x3bd489 = JSON['parse'](Sauths);
      if (typeof _0x3bd489['sauth_json'] !== 'undefined') _0x3bd489 = _0x3bd489['sauth_json'];
      return _0x3bd489;
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
      if (key != 'nx_raBinds' && key != 'key_binds' && key != 'binds' && key != 'name') 祚薄晚有儿(key, list[key]);
    }
    nx_cfg = list;
    以表闻辞不(0x0, 'Tip', '成功加载' + list['name'] + '的配置，共' + num + '条配置', '§r');
  }
  以表闻辞不(0x0, 'Tip', '§aNoveXare Load Successful!', '§a');
  以表闻辞不(0x0, 'Tip', 'You Are Use ' + nx_ui['name'] + ' To Play NX', '§b');
} catch (e) {
  clientMessage(e.toString());
}