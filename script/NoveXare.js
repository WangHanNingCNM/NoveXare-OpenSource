/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 20  21：50：15
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b20§f215015§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

  const sendShadow = (_0x1a681e, _0x2e21ec, _0x1c7572) => sendPlayerAction({
    'id': self_id,
    'pos': {
      'x': _0x1a681e,
      'y': _0x2e21ec,
      'z': _0x1c7572
    },
    'type': 0x11
  });
  const getPos = _0x2a82ff => {
    let _0x27ca0f = getEntityPos(_0x2a82ff);
    if (_0x27ca0f) _0x27ca0f['y'] += getPos_offset;
    return _0x27ca0f || {
      'x': 0x0,
      'y': 0x0,
      'z': 0x0
    };
  };
  const silentMove = (_0x3013d0, _0x5bb03a, _0x31247f) => sendPlayerAuthInput({
    'pos': {
      'x': _0x3013d0,
      'y': _0x5bb03a,
      'z': _0x31247f
    }
  });
  const 左迁九江郡 = _0x8fa3b4 => {
    const _0x265af7 = new Uint8Array(_0x8fa3b4);
    let _0x221a80 = '';
    for (let _0x5bf0b0 = 0x0; _0x5bf0b0 < _0x265af7['length'];) {
      let _0x59e692 = _0x265af7[_0x5bf0b0++];
      if (_0x59e692 <= 0x7f) _0x221a80 += String['fromCharCode'](_0x59e692);else if (_0x59e692 >> 0x5 === 0x6) {
        let _0x242604 = _0x265af7[_0x5bf0b0++];
        _0x221a80 += String['fromCharCode']((_0x59e692 & 0x1f) << 0x6 | _0x242604 & 0x3f);
      } else if (_0x59e692 >> 0x4 === 0xe) {
        let _0x1b2f5e = _0x265af7[_0x5bf0b0++];
        let _0x4bb0e9 = _0x265af7[_0x5bf0b0++];
        _0x221a80 += String['fromCharCode']((_0x59e692 & 0xf) << 0xc | (_0x1b2f5e & 0x3f) << 0x6 | _0x4bb0e9 & 0x3f);
      } else if (_0x59e692 >> 0x3 === 0x1e) {
        let _0x163199 = _0x265af7[_0x5bf0b0++];
        let _0x20a100 = _0x265af7[_0x5bf0b0++];
        let _0x172a30 = _0x265af7[_0x5bf0b0++];
        let _0x4b6f4b = (_0x59e692 & 0x7) << 0x12 | (_0x163199 & 0x3f) << 0xc | (_0x20a100 & 0x3f) << 0x6 | _0x172a30 & 0x3f;
        _0x221a80 += String['fromCodePoint'](_0x4b6f4b);
      }
    }
    return _0x221a80;
  };
  const 司马明年秋 = (_0x43f0d0, _0x220858, _0x5048f6, _0x23b196) => {
    let _0x3cb534 = _0x43f0d0['indexOf'](_0x220858) + _0x220858['length'];
    let _0x1e0f1d = _0x43f0d0['indexOf'](_0x5048f6, _0x3cb534);
    if (typeof _0x23b196 !== 'undefined' && _0x43f0d0['indexOf'](_0x23b196, _0x3cb534) < _0x1e0f1d && _0x43f0d0['indexOf'](_0x23b196, _0x3cb534) != -0x1) _0x1e0f1d = _0x43f0d0['indexOf'](_0x23b196, _0x3cb534);
    if (_0x3cb534 === -0x1 || _0x1e0f1d === -0x1) return null;
    return _0x43f0d0['substring'](_0x3cb534, _0x1e0f1d);
  };
  const 送客湓浦口 = _0x597d63 => {
    let _0x3e2764 = _0x597d63['split']('');
    let _0x29cfac = '';
    let _0x481729 = '4c6e2a3b195d'['split']('');
    for (let _0x41f8ee in _0x3e2764) _0x29cfac += '§' + _0x481729[_0x41f8ee % _0x481729['length']] + _0x3e2764[_0x41f8ee];
    return _0x29cfac;
  };
  const 闻舟中夜弹 = _0x14b048 => {
    if (_0x14b048['startsWith']('0x')) _0x14b048 = _0x14b048['slice'](0x2);
    const _0x2756bb = [];
    for (let _0x5de12a = 0x0; _0x5de12a < _0x14b048['length']; _0x5de12a += 0x2) {
      const _0xc83306 = parseInt(_0x14b048['slice'](_0x5de12a, _0x5de12a + 0x2), 0x10);
      _0x2756bb['push'](_0xc83306);
    }
    return new Uint8Array(_0x2756bb);
  };
  const 琵琶者听其 = (_0x4ea12a, _0x293168, _0x31a76c = 0x0) => {
    if (_0x31a76c == 0x1) sendRpc(_0x4ea12a, 闻舟中夜弹(_0x293168));
    if (_0x31a76c == 0x2) sendRpc(_0x4ea12a, _0x293168);
    if (_0x31a76c == 0x3) {
      const _0x23b865 = new Uint8Array(str['length']);
      for (let _0x10ae20 = 0x0; _0x10ae20 < str['length']; _0x10ae20++) _0x23b865[_0x10ae20] = str['charCodeAt'](_0x10ae20);
      sendRpc(_0x4ea12a, _0x23b865);
    }
  };
  const 音铮铮然有 = _0x2a1005 => {
    if (nx_nbts[_0x2a1005] !== undefined) return nx_nbts[_0x2a1005];
    const _0x38efbd = 司马明年秋(_0x2a1005, ',Name:"', '",WasPickedUp');
    if (_0x38efbd === '' || typeof _0x38efbd !== 'string') return {
      'aux': 0x0,
      'count': 0x0,
      'namespace': 'minecraft:air',
      'enchants': []
    };
    const _0x259109 = Number(司马明年秋(_0x2a1005, ',aux:', ','));
    const _0x5d8eb3 = Number(司马明年秋(_0x2a1005, 'Count:', 'b,D'));
    const _0x22ea09 = _0x2a1005['includes'](',name:"') ? 司马明年秋(_0x2a1005, ',name:"', '",') : _0x38efbd['replace']('minecraft:', '');
    const _0x112fec = _0x2a1005['includes'](',netId:') ? Number(司马明年秋(_0x2a1005, ',netId:', '}')) : 0x0;
    const _0x2d7a74 = _0x2a1005['includes']('maxDamage') ? Number(司马明年秋(_0x2a1005, ',maxDamage:', ',')) : 0x0;
    const _0x5ebf1d = _0x2a1005['includes']('attackDamage') ? Number(司马明年秋(_0x2a1005, 'attackDamage:', ',')) : 0x1;
    const _0x47301a = _0x2a1005['includes']('customColor') ? 司马明年秋(_0x2a1005, 'customColor:', '}', ',') : '';
    const _0x1784af = _0x2a1005['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x2a1005, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
    const _0x2c17de = _0x2a1005['startsWith']('{Block:');
    const _0xd38a69 = {
      'name': _0x22ea09,
      'namespace': _0x38efbd,
      'aux': _0x259109,
      'damage': _0x2d7a74,
      'attackDamage': _0x5ebf1d,
      'count': _0x5d8eb3,
      'color': _0x47301a,
      'isBlock': _0x2c17de,
      'id': _0x112fec,
      'enchants': JSON['parse'](_0x1784af)
    };
    nx_nbts[_0x2a1005] = _0xd38a69;
    return _0xd38a69;
  };
  const 京都声问其 = _0x1e31b4 => {
    const _0x248aae = getEntitySize(_0x1e31b4);
    const _0xbbbfcc = getEntityMotion(_0x1e31b4);
    const _0x4be214 = getPos(_0x1e31b4);
    const _0x56f4bc = getEntityName(_0x1e31b4);
    const _0x3a78d1 = getEntityNamespace(_0x1e31b4);
    const _0x417830 = 声暗问弹者(self_id, _0x1e31b4);
    const _0x2f62f8 = getCarried(_0x1e31b4);
    const _0x1c401e = 瑟瑟主人下(_0x1e31b4);
    const _0x43167c = getEntityAttribute(_0x1e31b4, 'minecraft:health');
    const _0xe5bc2 = getEntityAttribute(_0x1e31b4, 'minecraft:movement');
    const _0x48ad3e = getEntityTypeId(_0x1e31b4);
    const _0x189d38 = getEntityTarget(_0x1e31b4);
    const _0x5927f2 = getPlayerInventorySize(_0x1e31b4);
    const _0xbaadc0 = getPlayerHotBarSize(_0x1e31b4);
    const {
      yaw,
      pitch
    } = getEntityRot(_0x1e31b4);
    const _0x354e85 = _0x13f08e => _0x13f08e['toFixed'](0x2);
    const _0xa7fed4 = ['唯一ID:' + _0x1e31b4 + ' 昵称:' + _0x56f4bc + '§r 实体命名空间:' + _0x3a78d1 + ' 水平碰撞箱:' + _0x354e85(_0x248aae['x']) + ' 垂直碰撞箱:' + _0x354e85(_0x248aae['y']) + ' Mot速度:' + _0x1c401e, 'ability速度:[max:' + _0xe5bc2['max'] + ', min:' + _0xe5bc2['min'] + ', current:' + _0xe5bc2['current'] + '] 血量:[max:' + _0x43167c['max'] + ', min:' + _0x43167c['min'] + ', current:' + _0x43167c['current'] + ']', '手持:[id:' + _0x2f62f8['id'] + ', namespace:' + _0x2f62f8['namespace'] + ', name:' + _0x2f62f8['name'] + '§r, aux:' + _0x2f62f8['aux'] + '] 距离:' + _0x417830 + ' 实体类型:' + _0x48ad3e, '仰俯角:' + _0x354e85(pitch) + '° 偏航角:' + _0x354e85(yaw) + '° 仇恨目标:' + getEntityName(_0x189d38) + '^' + _0x189d38, '移动值:[' + _0x354e85(_0xbbbfcc['x']) + ', ' + _0x354e85(_0xbbbfcc['y']) + ', ' + _0x354e85(_0xbbbfcc['z']) + '] 坐标值:[' + _0x354e85(_0x4be214['x']) + ', ' + _0x354e85(_0x4be214['y']) + ', ' + _0x354e85(_0x4be214['z']) + ']', '背包容量:' + _0x5927f2 + ' 物品栏容量:' + _0xbaadc0];
    return _0xa7fed4['join']('\n');
  };
  const getCarried = _0x23e95b => 音铮铮然有(getEntityCarriedItem(_0x23e95b));
  const getOffhand = _0x5c1d9a => 音铮铮然有(getEntityOffhandItem(_0x5c1d9a));
  const getInventory = (_0x256536, _0x43a339) => 音铮铮然有(getPlayerInventoryItem(_0x256536, _0x43a339));
  const 人本长安倡 = (_0x146e41, _0x56faef, _0xec23e4, _0x1e2f13 = false, _0x43591e = false) => {
    let _0x17b810 = {
      'x': _0x146e41,
      'y': _0x56faef,
      'z': _0xec23e4
    };
    const _0x3f9147 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
    const _0x4def5b = _0x12c71c => sendPlayerAuthInput({
      'pos': self_pos,
      'inputMode': 0x2,
      'playMode': 0x0,
      'flags': [0x23],
      'actions': _0x12c71c['map'](_0xfbda02 => ({
        'type': _0xfbda02,
        'pos': _0x17b810,
        'value': 0x1
      }))
    });
    const _0x54c1ef = _0x7df518 => sendPlayerAction({
      'id': self_id,
      'pos': _0x17b810,
      'type': _0x7df518
    });
    if (_0x1e2f13) _0x4def5b(_0x3f9147);
    if (_0x43591e) _0x3f9147['forEach'](_0x3d2a5f => _0x54c1ef(_0x3d2a5f));
  };
  const 女尝学琵琶 = (_0x48a6c7, _0x13ce6b, _0x260d02 = true, _0x3d412a = false) => {
    if (_0x48a6c7 === _0x13ce6b || getScreenName() !== 'inventory_screen') return false;
    let _0x11c09d = getInventory(self_id, _0x48a6c7);
    let _0x135b62 = getInventory(self_id, _0x13ce6b);
    if (_0x260d02 && _0x13ce6b < 0x9 && _0x135b62['namespace'] != 'minecraft:air') {
      for (let _0x467749 = 0x23; _0x467749 > 0x8; _0x467749--) {
        const _0x2ab27c = getInventory(self_id, _0x467749);
        if (_0x2ab27c['namespace'] === 'minecraft:air') {
          moveInventoryItem(_0x13ce6b, _0x467749);
          break;
        }
      }
    }
    if (_0x3d412a && _0x11c09d['namespace'] === 'minecraft:air' && _0x135b62['namespace'] !== 'minecraft:air') moveInventoryItem(_0x13ce6b, _0x48a6c7);
    if (_0x11c09d['namespace'] !== 'minecraft:air' && _0x135b62['namespace'] === 'minecraft:air') moveInventoryItem(_0x48a6c7, _0x13ce6b);
  };
  const 于穆曹二善 = (_0x32f81d, _0x18118d) => {
    let _0x4ed6b5 = _0x18118d - 0xb4;
    if (_0x32f81d > 0x5a) _0x32f81d -= 0x5a;
    if (_0x32f81d < -0x5a) _0x32f81d += 0x5a;
    if (_0x4ed6b5 > 0xb4) _0x4ed6b5 = _0x4ed6b5 - 0x168;
    if (_0x4ed6b5 < -0xb4) _0x4ed6b5 = 0x168 + _0x4ed6b5;
    if (getPlayerViewPerspective() === 0x0 || _0x4ed6b5 > 0xb4 || _0x4ed6b5 < -0xb4 || _0x32f81d > 0x5a || _0x32f81d < -0x5a) return false;
    setEntityBodyRot(self_id, _0x4ed6b5);
    setEntityRot(self_id, _0x32f81d, _0x4ed6b5);
  };
  const 才年长色衰 = _0x496696 => {
    const _0x215d5c = getEntityAttribute(_0x496696, 'minecraft:health');
    const _0x57dcef = getPos(_0x496696);
    if (typeof _0x57dcef != 'object' || !_0x57dcef || !_0x57dcef['x'] || !_0x57dcef['y'] || !_0x57dcef['z']) return false;
    if (!findEntity(_0x496696) && (_0x215d5c['max'] === undefined || _0x215d5c['min'] === undefined || _0x215d5c['current'] === undefined)) return false;
    if (_0x215d5c['current'] > 0x0) return true;
  };
  const 委身为贾人 = (_0x2d71a3, _0x4679c8) => {
    if (typeof globalThis[_0x2d71a3] === 'undefined' || globalThis[_0x2d71a3] === _0x4679c8) return;
    globalThis[_0x2d71a3] = _0x4679c8;
    nx_cfg[_0x2d71a3] = _0x4679c8;
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
    if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x4679c8 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
    if (FuncSwitchTip && (!FuncMessage || !_0x2d71a3['includes']('_'))) {
      if (modes['tip_mode'] === 0x0) {
        if (_0x4679c8) 归客不发寻(0x0, _0x2d71a3, '§oEnable ◆', '§a');else 归客不发寻(0x0, _0x2d71a3, '§oDisable ◇', '§c');
      }
      if (modes['tip_mode'] === 0x1) {
        addCustomArrayList(_0x2d71a3, _0x2d71a3 + (_0x4679c8 ? ' - Enable' : ' - Disable'), _0x2d71a3 + (_0x4679c8 ? ' - Enable' : ' - Disable'), true);
        setTimeout(() => addCustomArrayList(_0x2d71a3, _0x2d71a3 + (_0x4679c8 ? ' - Enable' : ' - Disable'), _0x2d71a3 + (_0x4679c8 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
      }
    }
    if (typeof nx_arraylist[_0x2d71a3] !== 'undefined') addCustomArrayList(_0x2d71a3, nx_arraylist[_0x2d71a3]['CN'], nx_arraylist[_0x2d71a3]['EN'], _0x4679c8);else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x2d71a3['includes']('_')) addCustomArrayList(_0x2d71a3, _0x2d71a3, _0x2d71a3, _0x4679c8);
    if (typeof nx_binds[_0x2d71a3] !== 'undefined') nx_binds[_0x2d71a3]['forEach'](_0x2578da => 委身为贾人(_0x2578da, _0x4679c8));
    if (typeof nx_raBinds[_0x2d71a3] !== 'undefined' && !nx_raBinds[_0x2d71a3]['isNX']) callModule(nx_funcid[nx_raBinds[_0x2d71a3]['module']], JSON['stringify']({
      'value': _0x4679c8
    }));
  };
  const 妇遂命酒使 = (_0xdc097e, _0x46b8b9, _0x52a5ab, _0x61b313, _0xb57ec9, _0x145872 = false, _0x5ea315 = {}) => {
    for (let _0x3d3724 = 0x0; _0x3d3724 < _0xb57ec9; _0x3d3724++) addParticle(Number(_0xdc097e), _0x46b8b9, _0x52a5ab, _0x61b313, _0x145872 ? _0x5ea315['x'] : _0x46b8b9, _0x145872 ? _0x5ea315['y'] : _0x52a5ab, _0x145872 ? _0x5ea315['z'] : _0x61b313, 0x1, _0x145872);
  };
  const 快弹数曲曲 = () => {
    const _0x6e8474 = getEntityCarriedItem(self_id);
    const _0x521084 = getPos(self_id);
    if (!_0x6e8474['includes']('count:0')) buildBlock(self_id, _0x521084['x'], _0x521084['y'], _0x521084['z'], 0x6);
  };
  const 罢悯然自叙 = _0x210d2c => {
    const _0x4ad2c1 = 迁谪意因为(self_id, _0x210d2c);
    const _0x49f383 = ['helmet', 'chestplate', 'leggings', 'boots'];
    if (_0x49f383['includes'](_0x4ad2c1) && selectPlayerInventorySlot(self_id, _0x210d2c) && getPlayerSelectItemSlot(self_id) === _0x210d2c) {
      快弹数曲曲();
    }
  };
  const 少小时欢乐 = (_0x5c1586, _0x1a0244, _0x12cdcb, _0x3993d7) => {
    let _0x15a487 = _0x1a0244 > 0x0;
    _0x1a0244 = Math['abs'](_0x1a0244);
    let _0x360521 = _0x12cdcb * Math['cos'](_0x1a0244 * Math['PI'] / 0xb4);
    let _0x3483cf = _0x12cdcb * Math['sin'](_0x1a0244 * Math['PI'] / 0xb4);
    let _0x3de07b = _0x3483cf / _0x3993d7;
    let _0x3d2472 = _0x3993d7 * (_0x3de07b * _0x3de07b) * 0.5;
    let _0x5cfc09 = _0x360521 * _0x3de07b;
    let _0x41c3d8 = -_0x3d2472 / (_0x5cfc09 * _0x5cfc09);
    return {
      'data': _0x41c3d8 * Math['pow'](_0x5c1586 - (_0x15a487 ? -_0x5cfc09 : _0x5cfc09), 0x2) + _0x3d2472,
      'bool': _0x15a487
    };
  };
  const getLocal = _0xe2b30d => typeof _0xe2b30d === 'undefined' || _0xe2b30d === null ? getLocalPlayerUniqueID() : _0xe2b30d;
  const 事今漂沦憔 = (_0xdbbcac, _0x4939ec, _0x2b580a) => {
    const _0x467660 = [[_0xdbbcac, _0x4939ec + 0x1, _0x2b580a], [_0xdbbcac, _0x4939ec - 0x1, _0x2b580a], [_0xdbbcac, _0x4939ec, _0x2b580a + 0x1], [_0xdbbcac, _0x4939ec, _0x2b580a - 0x1], [_0xdbbcac + 0x1, _0x4939ec, _0x2b580a], [_0xdbbcac - 0x1, _0x4939ec, _0x2b580a]];
    _0x467660['some']((_0x200c69, _0x2a60c1) => {
      const _0x4d1cd1 = getBlock(_0x200c69[0x0], _0x200c69[0x1], _0x200c69[0x2]);
      if (_0x4d1cd1['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x200c69[0x0], _0x200c69[0x1], _0x200c69[0x2], _0x2a60c1);
    });
  };
  const 湖间予出官 = (_0x762ef6, _0xc59a6a) => {
    const _0x1a1994 = getPos(self_id);
    sendSound(_0x762ef6, _0x1a1994['x'], _0x1a1994['y'], _0x1a1994['z'], _0xc59a6a);
  };
  const 二年恬然自 = (_0x40ca22, _0x2ea2f8, _0x46ed8e) => {
    const _0x2283e5 = getPos(self_id);
    motion_list['push']([_0x40ca22 - _0x2283e5['x'], _0x2ea2f8 - _0x2283e5['y'], _0x46ed8e - _0x2283e5['z']]);
    motion_list['push']([0x0, 0x0, 0x0]);
  };
  const 安感斯人言 = (_0x2bfba9, _0x11fb43) => {
    let _0x2d0a06 = _0x2bfba9 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x2bfba9);
    if (typeof _0x11fb43 !== 'undefined') _0x2d0a06['namespace'] = _0x11fb43;
    return Array['from']({
      'length': 0x24
    }, (_0x2827e4, _0xa6b9aa) => getInventory(self_id, _0xa6b9aa))['filter'](_0x47a393 => _0x47a393['namespace'] === _0x2d0a06['namespace'] && (typeof _0x11fb43 !== 'undefined' || _0x47a393['aux'] === _0x2d0a06['aux']))['reduce']((_0xdc7fdd, _0x27c909) => _0xdc7fdd + _0x27c909['count'], 0x0);
  };
  const 是夕始觉有 = (_0x593b49, _0x1de445, _0x449c8e = 'hotbar', _0x388204 = 0x0) => {
    const _0x16db81 = _0x449c8e == 'hotbar' ? 0x9 : 0x24;
    let _0x10c6af = Array['from']({
      'length': _0x16db81
    }, (_0x33edd4, _0xf7cf5d) => getInventory(_0x593b49, _0xf7cf5d));
    let _0x4efcf6 = _0x10c6af['some'](_0x11f31e => _0x11f31e['namespace']['includes'](_0x1de445));
    let _0x43ada5 = _0x10c6af['reduce']((_0x470add, _0x24a34a) => _0x470add + _0x24a34a['count'], 0x0);
    return _0x4efcf6 && _0x43ada5 > _0x388204;
  };
  const 迁谪意因为 = (_0x1047b4, _0x3f676c, _0x8a7037) => {
    let _0x1fd69a = _0x3f676c === -0x1 ? getCarried(_0x1047b4) : getInventory(_0x1047b4, _0x3f676c);
    if (!_0x1fd69a['namespace']['includes']('_') && typeof _0x8a7037 === 'undefined') return 'other';
    let _0x163807 = typeof _0x8a7037 === 'undefined' ? _0x1fd69a['namespace']['replace']('minecraft:', '') : _0x8a7037['replace']('minecraft:', '');
    const _0x3ff241 = _0x163807['split']('_');
    return _0x3ff241[0x1];
  };
  const getEntityMaxDamage = _0x3a9433 => Array['from']({
    'length': 0x24
  }, (_0x22d337, _0x160784) => 十六言命曰(_0x3a9433, _0x160784))['reduce']((_0x52dabe, _0x649ed0) => Math['max'](_0x52dabe, _0x649ed0), 0x0);
  const 长句歌以赠 = (_0x49503e, _0xdf0c17, _0x3160bb = false) => {
    let _0x3b1d8d = _0x3160bb ? [0x0, 0x0, 0x0, 0x0] : 0x0;
    const _0x507afc = ['helmet', 'chestplate', 'leggings', 'boots'];
    for (let _0x2c91ad = 0x0; _0x2c91ad < 0x24; _0x2c91ad++) {
      const _0x187358 = 迁谪意因为(_0x49503e, _0x2c91ad);
      const _0x3bc463 = _0x507afc['indexOf'](_0x187358);
      if (_0x3bc463 === -0x1) continue;
      const _0xc21526 = 之凡六百一(_0x49503e, _0x2c91ad);
      if (!_0x3160bb && _0x187358 === _0xdf0c17 && _0x3b1d8d < _0xc21526) _0x3b1d8d = _0xc21526;
      if (_0x3160bb && _0x3b1d8d[_0x3bc463] < _0xc21526) _0x3b1d8d[_0x3bc463] = _0xc21526;
    }
    return _0x3b1d8d;
  };
  const 之凡六百一 = (_0x433d49, _0x387f49, _0x36998d = true, _0x500df7 = true) => {
    let _0x12f869 = _0x387f49 === -0x1 ? getCarried(_0x433d49) : getInventory(_0x433d49, _0x387f49);
    if (_0x387f49 < -0x1) _0x12f869 = 音铮铮然有(getPlayerArmorItem(_0x433d49, Math['abs'](_0x387f49) - 0x2));
    if (_0x12f869['count'] === 0x0 || _0x12f869['damage'] === 0x0 || _0x12f869['attackDamage'] > 0x0) return 0x0;
    if (!_0x500df7) return _0x12f869['damage'];
    let _0x27d622 = 0x0;
    let _0x17032d = _0x12f869['enchants']['findIndex'](_0x381353 => _0x381353['id'] === 0x0);
    if (_0x17032d > -0x1) _0x27d622 = _0x12f869['enchants'][_0x17032d]['lvl'];
    if (!_0x36998d) return 0x1 + _0x27d622 / 0x64;
    return _0x12f869['damage'] * (0x1 + _0x27d622 / 0x64);
  };
  const 十六言命曰 = (_0x1d0b52, _0x3cc07e, _0x4a2e74 = true, _0x245436 = true) => {
    let _0xeb2394 = _0x3cc07e === -0x1 ? getCarried(_0x1d0b52) : getInventory(_0x1d0b52, _0x3cc07e);
    if (_0xeb2394['count'] === 0x0 || _0xeb2394['attackDamage'] === 0x0 || _0xeb2394['attackDamage'] === 0x0) return 0x1;
    if (!_0x245436) return _0xeb2394['attackDamage'];
    let _0x246403 = 0x0;
    let _0x4f9c40 = _0xeb2394['enchants']['findIndex'](_0x4734bd => _0x4734bd['id'] === 0x9);
    if (_0x4f9c40 > -0x1) _0x246403 = _0xeb2394['enchants'][_0x4f9c40]['lvl'] * 1.25;
    if (!_0x4a2e74) return _0x246403;
    return _0xeb2394['attackDamage'] + _0x246403;
  };
  const b2s = _0x216383 => _0x216383 ? 'true' : 'false';
  const 琵琶行浔阳 = (_0x293a9d, _0xbf8b53, _0x18b60f) => {
    let _0x50e5c2 = _0x293a9d['split'](_0xbf8b53)['length'] - 0x1;
    let _0x4c9632 = 0x0;
    let _0x223c0a = [];
    for (let _0x426265 = 0x0; _0x426265 < _0x50e5c2; _0x426265++) {
      let _0x5961de = _0x293a9d['indexOf'](_0xbf8b53, _0x4c9632) + _0xbf8b53['length'];
      let _0x3d586c = _0x293a9d['indexOf'](_0x18b60f, _0x5961de);
      if (_0x3d586c === -0x1 || _0x5961de === -0x1) break;
      _0x4c9632 = _0x3d586c;
      _0x223c0a['push'](_0x293a9d['substring'](_0x5961de, _0x3d586c));
    }
    return _0x50e5c2 > 0x1 ? _0x223c0a : _0x223c0a[0x0];
  };
  const 江头夜送客 = (_0x36073b, _0x1c0277) => {
    if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
    return attackEntity(_0x36073b, _0x1c0277);
  };
  const 枫叶荻花秋 = (_0x309726, _0x460916, _0x3f773c, _0x11b3e9) => {
    if (typeof _0x3f773c === 'undefined') _0x3f773c = -0x1;
    if (typeof _0x11b3e9 === 'undefined') _0x11b3e9 = -0x1;
    let _0x538b84 = null;
    for (index = 0x0; index < 0x9; index++) {
      const _0x2abc37 = getInventory(_0x309726, index);
      if (!_0x2abc37['namespace'] || !_0x2abc37['name']) continue;
      if (_0x2abc37['namespace']['includes'](_0x460916) && (_0x2abc37['aux'] === _0x3f773c || _0x3f773c === -0x1) && (_0x2abc37['name']['includes'](_0x11b3e9) || _0x11b3e9 === -0x1)) {
        _0x538b84 = index;
        break;
      }
    }
    return _0x538b84;
  };
  const 瑟瑟主人下 = _0x22ad8e => {
    const _0x588445 = getEntityMotion(_0x22ad8e);
    const _0x5689aa = Math['sqrt'](_0x588445['x'] * _0x588445['x'] + _0x588445['y'] * _0x588445['y'] + _0x588445['z'] * _0x588445['z']);
    return _0x5689aa * 0x14;
  };
  const 马客在船举 = (_0x2c7b69, _0x4d3e75) => {
    const _0x538120 = _0x4d3e75 - _0x2c7b69 + 0x1;
    return Math['floor'](Math['random']() * _0x538120) + _0x2c7b69;
  };
  const 酒欲饮无管 = (_0x22306a, _0x2e3907, _0x4ec847) => {
    return {
      'x': _0x2e3907['x'] + _0x22306a['x'] * _0x4ec847,
      'y': _0x2e3907['y'] + _0x22306a['x'] * _0x4ec847,
      'z': _0x2e3907['z'] + _0x22306a['z'] * _0x4ec847
    };
  };
  const 弦醉不成欢 = _0x26dbdf => {
    if (_0x26dbdf < 0x3c) return _0x26dbdf + 's';
    if (_0x26dbdf >= 0x3c) return Math['floor'](_0x26dbdf / 0x3c) + 'min ' + _0x26dbdf % 0x3c + 's';
  };
  const 惨将别别时 = (_0x3784cc, _0x4ee844, _0x3286d5, _0x3abd99 = 0x0, _0x4f3530 = 0x0) => {
    if (!_0x3286d5) return true;
    _0x3784cc['y'] += _0x3abd99;
    _0x4ee844['y'] += _0x4f3530;
    const _0x33f029 = 弦弦掩抑声(_0x3784cc, _0x4ee844, 'yaw_pos');
    const _0x45dd7c = -弦弦掩抑声(_0x3784cc, _0x4ee844, 'pitch_pos');
    const _0x428d6c = getDistance(_0x3784cc, _0x4ee844);
    let _0x13699d = true;
    for (let _0x592339 = 0x0; _0x592339 < _0x428d6c; _0x592339 += 0.5) {
      const _0x8f5085 = 忽闻水上琵(_0x592339, _0x4ee844, {
        'yaw': _0x33f029,
        'pitch': _0x45dd7c
      });
      const _0x1ffea1 = getBlock(_0x8f5085['x'], _0x8f5085['y'], _0x8f5085['z']);
      if (_0x1ffea1['namespace'] != 'minecraft:air') {
        _0x13699d = false;
        break;
      }
    }
    return _0x13699d;
  };
  const 茫茫江浸月 = (_0x1d717f, _0x4c64ed) => {
    let _0x1a6d03 = getWorldPlayerList()['sort']((_0x315756, _0x3d8b5b) => _0x315756['name']['localeCompare'](_0x3d8b5b['name']));
    let _0x17735c = _0x1a6d03['length'] > 0x0 ? _0x1a6d03['map'](_0x16d720 => ({
      'text': '§e' + _0x16d720['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x16d720['id'])['toFixed'](0x2)
    })) : [{
      'text': '没有玩家'
    }];
    let _0x458e0e = {
      'type': 'form',
      'title': '§5选择',
      'content': '§5选择一个目标',
      'buttons': _0x17735c
    };
    const _0x56227b = JSON['stringify'](_0x458e0e);
    addForm(_0x56227b, function (_0x2c50ab) {
      if (_0x1a6d03['length'] > 0x0 && _0x2c50ab >= 0x0) {
        var _0x1d1e04 = _0x4c64ed === 0x0 ? _0x1a6d03[_0x2c50ab]['name'] : _0x1a6d03[_0x2c50ab]['id'];
        if (typeof globalThis[_0x1d717f] === 'object') globalThis[_0x1d717f]['push'](_0x1d1e04);
        if (typeof globalThis[_0x1d717f] === 'string') globalThis[_0x1d717f] = _0x1d1e04;
        归客不发寻(0x0, 'addTarget', _0x1d1e04, '§r');
      }
    });
  };
  const 忽闻水上琵 = (_0x1e83fb, _0x3902e8, _0x474440) => {
    let _0x1b39a9 = _0x1e83fb < 0x0 ? true : false;
    let {
      yaw,
      pitch
    } = _0x474440;
    if (yaw > 0xb4) yaw = yaw - 0x168;
    if (yaw < -0xb4) yaw = 0x168 + yaw;
    _0x1e83fb = Math['abs'](_0x1e83fb);
    const _0x40df8b = yaw * Math['PI'] / 0xb4;
    const _0x3b36eb = pitch * Math['PI'] / 0xb4;
    let _0x443cc8 = pitch != 0x0 ? Math['sin'](_0x3b36eb) * _0x1e83fb : 0x0;
    let _0x39ea12 = pitch != 0x0 ? _0x443cc8 / Math['tan'](_0x3b36eb) : _0x1e83fb;
    let _0x5ca7f3 = _0x39ea12 < 0x0;
    _0x39ea12 = Math['abs'](_0x39ea12);
    const _0x39a05d = Math['cos'](_0x40df8b) * _0x39ea12;
    const _0x23882c = Math['sin'](_0x40df8b) * _0x39ea12;
    let _0x280ebb = -Math['sin'](_0x40df8b) * _0x39ea12;
    let _0x4c6e32 = Math['cos'](_0x40df8b) * _0x39ea12;
    if (_0x1b39a9 || _0x5ca7f3) {
      _0x280ebb = -_0x280ebb;
      if (!_0x5ca7f3) _0x443cc8 = -_0x443cc8;
      _0x4c6e32 = -_0x4c6e32;
    }
    return {
      'x': _0x3902e8['x'] + _0x280ebb,
      'y': _0x3902e8['y'] - _0x443cc8,
      'z': _0x3902e8['z'] + _0x4c6e32
    };
  };
  const getPlayerItemCount = _0x401c65 => Array['from']({
    'length': 0x24
  }, (_0x19ca22, _0x2f4c4a) => getInventory(_0x401c65, _0x2f4c4a))['filter'](_0x489bd1 => _0x489bd1['count'] !== 0x0)['reduce']((_0x32eb9d, _0x5142fb) => _0x32eb9d + _0x5142fb['count'], 0x0);
  const isSimilar = (_0x6d66c6, _0x1f9072, _0x3ba1bf) => Math['abs'](_0x6d66c6 - _0x1f9072) < _0x3ba1bf;
  const 琶声主人忘 = _0x2a7b65 => {
    let _0x34b7be = [];
    if (at_entity) _0x34b7be['push'](...getEntityList());
    if (at_player) _0x34b7be['push'](...getPlayerList());
    let _0x11f83b = Math['min'](at_maxCount, _0x34b7be['length']);
    let _0xe08bcf = [];
    for (const _0x183171 of _0x34b7be) {
      if (!才年长色衰(_0x183171)) continue;
      const _0x10da01 = getEntityNamespace(_0x183171);
      if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x577eb1 => _0x10da01['includes'](_0x577eb1)) != at_back) continue;
      const _0x36f5ac = getPos(_0x183171);
      const _0x3a0626 = getDistance(_0x36f5ac, getPos(_0x2a7b65));
      if ((_0x3a0626 > at_maxDist || _0x3a0626 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
      const _0x3169c4 = getEntityAttribute(_0x183171, 'minecraft:health');
      if (at_heal && (!_0x3169c4 || _0x3169c4['min'] > _0x3169c4['max'] || _0x3169c4['max'] > 0x186a0 || _0x3169c4['current'] <= 0x0 || _0x3169c4['max'] === 0x0) != at_back) continue;
      if (_0x10da01 === 'minecraft:player') {
        const _0x1d198f = getEntityRot(_0x183171);
        const _0x5aea1b = at_BWM ? getEntityAttribute(_0x183171, 'minecraft:movement') : {
          'current': 0x0
        };
        const _0x30b602 = getEntityName(_0x183171);
        if (at_BWM && _0x5aea1b['current'] >= 0.5 && !_0x30b602['includes']('[') && !_0x30b602['includes']('【')) {
          if (DeleteDummy) removeEntity(_0x183171);
          continue;
        }
        if (at_fov && (typeof _0x1d198f['yaw'] === 'undefined' || typeof _0x1d198f['pitch'] === 'undefined' || _0x1d198f['yaw']['toFixed'](0x2) === 0x0 || _0x1d198f['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
        const _0x9c33a9 = getEntityFlag(_0x183171, 0x5);
        if (at_hide && _0x9c33a9 != at_back) continue;
        const _0x192fa6 = getEntityIsGround(_0x183171);
        if (at_ground && _0x192fa6 === at_back) continue;
        if (at_wall && !惨将别别时(getPos(self_id), _0x36f5ac, at_wall, true, 1.53, 0.9) != at_back) continue;
        if (Teams && teams_name && (_0x30b602['startsWith'](ct_team) || ct_team['includes']('[') && _0x30b602['includes'](ct_team))) continue;
        if (at_whileLists['includes'](_0x183171) != at_back || !at_name && (_0x30b602 === getEntityName(_0x2a7b65) || _0x30b602 === '') != at_back || (_0x36f5ac['y'] > at_maxY || _0x36f5ac['y'] < at_minY) != at_back && !at_infY || _0x183171 === self_id) continue;
        if (at_regexEnable && at_regex['some'](_0x40f1a3 => _0x30b602['includes'](_0x40f1a3))) continue;
        const _0x7f0114 = teams_armor ? teams_blur ? getPlayerArmorItem(_0x183171, teams_slot) : 音铮铮然有(getPlayerArmorItem(_0x183171, teams_slot)) : {};
        if (Teams && teams_armor && (teams_blur && _0x7f0114 != '{}' && _0x7f0114 === teams_self || !teams_blur && _0x7f0114['color'] && _0x7f0114['color'] === teams_self['color'])) continue;
        const _0x415113 = at_size ? getEntitySize(_0x183171) : {
          'x': 0x0,
          'y': 0x0
        };
        if (at_size && !HitBox && ((_0x415113['x'] > at_defaultSize['x'] + 0.1 || _0x415113['x'] < at_defaultSize['x'] - 0.1) && (_0x415113['y'] > 1.66 || _0x415113['y'] < 1.64) && (_0x415113['y'] < at_defaultSize['y'] || _0x415113['y'] > at_defaultSize['y'] + 0.1) && (_0x415113['y'] > 1.51 || _0x415113['y'] < 1.49)) != at_back) continue;
      }
      const _0x124db7 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x183171) : 0x0;
      const _0xf50eb8 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x183171, 'yaw_rot') : 0x0;
      const _0x2a72b8 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x183171, 'pitch_rot') : 0x0;
      const _0x40f9ce = modes['at_mode'] === 0x2 ? 十六言命曰(_0x183171, -0x1) : 0x0;
      _0xe08bcf['push']({
        'distance': _0x3a0626,
        'target': _0x183171,
        'damage': _0x40f9ce,
        'heal': _0x3169c4['current'],
        'crosshair': Math['sqrt'](_0xf50eb8 * _0xf50eb8 + _0x2a72b8 * _0x2a72b8),
        'items': _0x124db7,
        'random': 马客在船举(0x0, _0x34b7be['length'] - 0x1)
      });
    }
    const _0x42aa9a = [(_0x6639f4, _0x428cff) => _0x6639f4['distance'] - _0x428cff['distance'], (_0x4f86cf, _0x395fea) => _0x4f86cf['heal'] - _0x395fea['heal'], (_0x56cc20, _0x55b274) => _0x56cc20['damage'] - _0x55b274['damage'], (_0xf3e9c1, _0x26c613) => _0xf3e9c1['crosshair'] - _0x26c613['crosshair'], (_0x301c89, _0x4995a8) => _0x4995a8['items'] - _0x301c89['items'], (_0xf79737, _0x5b9067) => _0xf79737['random'] - _0x5b9067['random']];
    _0xe08bcf['sort'](_0x42aa9a[modes['at_mode']]);
    if (at_reverse) _0xe08bcf['reverse']();
    if (at_infCount) return _0xe08bcf['map'](_0x5edeb9 => _0x5edeb9['target']);
    return _0xe08bcf['slice'](0x0, _0x11f83b)['map'](_0x3591ff => _0x3591ff['target']);
  };
  const 归客不发寻 = (_0x1ffde3 = 0x0, _0x3c15a7 = 'Tip', _0x3fe400, _0xa0d64d = '§r') => {
    if (!FuncTip) return false;
    if (_0x1ffde3 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x3c15a7 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa0d64d) + ' ' + _0x3fe400);
    if (_0x1ffde3 == 0x1) {
      if (modes['tipType_mode'] === 0x0) return '§r' + _0x3c15a7 + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa0d64d) + _0x3fe400;
      if (modes['tipType_mode'] === 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa0d64d) + _0x3fe400;
    }
  };
  const getDistance = (_0x2ee6e7, _0x1ab159) => Math['sqrt'](Math['pow'](_0x2ee6e7['x'] - _0x1ab159['x'], 0x2) + Math['pow'](_0x2ee6e7['y'] - _0x1ab159['y'], 0x2) + Math['pow'](_0x2ee6e7['z'] - _0x1ab159['z'], 0x2));
  const 声暗问弹者 = (_0x4d0520, _0x440502) => {
    if (!才年长色衰(_0x4d0520) || !才年长色衰(_0x440502)) return Infinity;
    const _0x338911 = getPos(_0x4d0520);
    const _0x1fc00e = getPos(_0x440502);
    return Math['sqrt'](Math['pow'](_0x338911['x'] - _0x1fc00e['x'], 0x2) + Math['pow'](_0x338911['y'] - _0x1fc00e['y'], 0x2) + Math['pow'](_0x338911['z'] - _0x1fc00e['z'], 0x2));
  };
  const 谁琵琶声停 = (_0x2152a1, _0x5c6da5) => {
    if (!才年长色衰(_0x2152a1) || !才年长色衰(_0x5c6da5)) return Infinity;
    const _0x5681ff = getPos(_0x2152a1);
    const _0x5725a2 = getPos(_0x5c6da5);
    return Math['sqrt'](Math['pow'](_0x5681ff['x'] - _0x5725a2['x'], 0x2) + Math['pow'](_0x5681ff['z'] - _0x5725a2['z'], 0x2));
  };
  const 欲语迟移船 = (_0x4d5be7, _0x8c9804, _0x5368b6) => {
    let _0x24c63b = {
      'fn-set-player-pos': {
        'x': _0x4d5be7,
        'y': _0x8c9804,
        'z': _0x5368b6
      }
    };
    callModule(0x5, JSON['stringify'](_0x24c63b));
  };
  const getHorizontalDistance = (_0x530f77, _0x5a1e1b) => Math['sqrt'](Math['pow'](_0x530f77['x'] - _0x5a1e1b['x'], 0x2) + Math['pow'](_0x530f77['z'] - _0x5a1e1b['z'], 0x2));
  const setRealPos = (_0x181d72, _0x2b2f19, _0x5c13e3, _0x71efc4) => setEntityPos(_0x181d72, _0x2b2f19, _0x5c13e3 + setPos_offset, _0x71efc4);
  const setPos = (_0x51c876, _0x269aa4, _0x473ce0) => setRealPos(self_id, _0x51c876, _0x269aa4, _0x473ce0);
  const setMotion = (_0x39cbd6, _0x235314, _0x18ce53) => setEntityMotion(self_id, _0x39cbd6, _0x235314, _0x18ce53);
  const 相近邀相见 = _0x35f53e => {
    if (_0x35f53e === '') return [];
    return _0x35f53e['split'](',');
  };
  const 添酒回灯重 = _0x39058e => {
    if (typeof _0x39058e != 'object' || _0x39058e['length'] === 0x0) return '';
    return _0x39058e['join'](',');
  };
  const 开宴千呼万 = (_0x16a7f8, _0x100889) => {
    let _0xf3d88d = typeof _0x100889 === 'object' ? 添酒回灯重(_0x100889) : _0x100889;
    let _0x143802 = typeof _0x100889 === 'object' ? 0x0 : 0x1;
    addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x16a7f8 + '","placeholder":"","default":"' + _0xf3d88d + '"}]}', function (_0x210dea) {
      if (_0x143802 === 0x1) globalThis[_0x16a7f8] = _0x210dea;
      if (_0x143802 === 0x0) globalThis[_0x16a7f8] = 相近邀相见(_0x210dea);
      归客不发寻(0x0, 'setValue', _0x16a7f8 + ' §7>>>§r ' + _0x210dea, '§r');
      nx_cfg[_0x16a7f8] = globalThis[_0x16a7f8];
    });
  };
  const 唤始出来犹 = _0x17ad77 => {
    if (typeof _0x17ad77 != 'string' || _0x17ad77 === '') return 'None';
    let _0x3442e5 = _0x17ad77['match'](/\[(.*?)\]/g);
    if (_0x3442e5 === null) return 'None';
    return _0x3442e5[0x0];
  };
  const 抱琵琶半遮 = _0x5e3457 => {
    if (!File['exist'](_0x5e3457)) return '{}';
    const _0x374005 = File['read'](_0x5e3457);
    return _0x374005 ? _0x374005 : '{}';
  };
  const 面转轴拨弦 = _0x186eba => {
    const _0x33a455 = getPos(_0x186eba);
    let _0x394862 = _0x186eba === self_id ? Math['floor'](_0x33a455['y']) - 0x1 : Math['floor'](_0x33a455['y']);
    return {
      'x': Math['floor'](_0x33a455['x']),
      'y': _0x394862,
      'z': Math['floor'](_0x33a455['z'])
    };
  };
  const 三两声未成 = (_0xe63c37, _0x5b6366) => {
    if (_0xe63c37['length'] === _0x5b6366['length']) {
      return [];
    }
    const _0xafbe3f = _0xe63c37['length'] >= _0x5b6366['length'] ? _0xe63c37 : _0x5b6366;
    const _0x558878 = _0xe63c37['length'] < _0x5b6366['length'] ? _0xe63c37 : _0x5b6366;
    return _0xafbe3f['filter'](_0x7502cd => !_0x558878['includes'](_0x7502cd));
  };
  const 曲调先有情 = (_0x2fe325, _0x4cdcf4) => {
    const _0x3a5f7d = aa_speed;
    const _0x47bc1b = aa_g;
    const _0x2ce9b5 = Math['atan'](Math['floor'](-_0x4cdcf4) / _0x2fe325);
    const _0x20e82d = Math['sqrt'](_0x2fe325 * _0x2fe325 + _0x4cdcf4 * _0x4cdcf4);
    const _0x151e7e = Math['atan'](_0x20e82d / _0x3a5f7d / 0x2 / _0x3a5f7d * _0x47bc1b);
    return -((_0x151e7e + _0x2ce9b5) / Math['PI'] * 0xb4);
  };
  const getFlyTime = (_0x557394, _0x966613) => _0x557394 / _0x966613;
  const roundAngle = (_0x3d3a93, _0x499bdb) => Math['round'](_0x3d3a93 / _0x499bdb) * _0x499bdb;
  const 弦弦掩抑声 = (_0x40dfd, _0x36a42f, _0x83c6a5, _0x526b40 = false, _0x2b71bc = false, _0x43cf4f = 0x0, _0x2ab66d = 0x0) => {
    let _0x40d13d = typeof _0x36a42f != 'string' ? _0x36a42f : getPos(_0x36a42f);
    let _0x5936f3 = typeof _0x40dfd != 'string' ? _0x40dfd : getPos(_0x40dfd);
    let _0x2825a8 = getEntityRot(_0x40dfd);
    if (!_0x40d13d || !_0x5936f3) return Infinity;
    const _0x218894 = getHorizontalDistance(_0x5936f3, _0x40d13d);
    if (_0x526b40) _0x40d13d = 酒欲饮无管(getEntityMotion(_0x36a42f), getPos(_0x36a42f), getFlyTime(_0x218894, aa_speed) * 0x14);
    let _0x5e28bf = _0x40d13d['x'] - _0x5936f3['x'];
    let _0x1f6619 = _0x5936f3['y'] - _0x40d13d['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x2ab66d, _0x2ab66d) / 0xa;
    let _0x115d99 = _0x40d13d['z'] - _0x5936f3['z'];
    let _0x22e44b = Math['atan2'](_0x115d99, _0x5e28bf) * 0xb4 / Math['PI'];
    const _0x49762b = 曲调先有情(_0x218894, _0x1f6619);
    let _0x14a8e6 = _0x2b71bc ? _0x49762b : Math['atan2'](_0x1f6619, _0x218894) * 0xb4 / Math['PI'];
    if (_0x83c6a5 === 'yaw_pos') return _0x22e44b > -0xb4 && _0x22e44b <= 0x5a ? _0x22e44b + 0x5a : _0x22e44b - 0x10e;
    if (_0x83c6a5 === 'yaw_rot') {
      _0x22e44b = _0x22e44b > -0xb4 && _0x22e44b <= 0x5a ? _0x22e44b + 0x5a : _0x22e44b - 0x10e;
      let _0x9083e5 = _0x22e44b - _0x2825a8['yaw'] + 马客在船举(-_0x43cf4f / 0x2, _0x43cf4f / 0x2);
      return _0x9083e5 > 0x0 ? -_0x9083e5 + 0xb4 : -_0x9083e5 - 0xb4;
    }
    if (_0x83c6a5 === 'pitch_pos') return _0x14a8e6;
    if (_0x83c6a5 === 'pitch_rot') return _0x14a8e6 - _0x2825a8['pitch'];
  };
  const 声思似诉平 = (_0x2e600c, _0x110b12, _0x5a4543, _0x1eed7b) => {
    let _0x27ce28 = Math['abs'](弦弦掩抑声(_0x2e600c, _0x110b12, 'yaw_rot'));
    let _0x2763a1 = Math['abs'](弦弦掩抑声(_0x2e600c, _0x110b12, 'pitch_rot'));
    if (_0x1eed7b === 0x0) return Math['sqrt'](_0x27ce28 * _0x27ce28 + _0x2763a1 * _0x2763a1) < _0x5a4543;
    if (_0x1eed7b === 0x1) return Math['abs'](_0x27ce28) < _0x5a4543;
    if (_0x1eed7b === 0x2) return Math['abs'](_0x2763a1) < _0x5a4543;
  };
  const 生不得志低 = _0x420c45 => {
    let _0x5c10fe = '';
    for (let _0x566889 = 0x0; _0x566889 < _0x420c45['length']; _0x566889 += 0x2) {
      _0x5c10fe += String['fromCharCode'](parseInt(_0x420c45['substr'](_0x566889, 0x2), 0x10));
    }
    return _0x5c10fe;
  };
  const 眉信手续续 = (_0x2eb7fb, _0x48c420, _0x2a718c = 0.5, _0x2be52a = false) => {
    let _0x217205 = [];
    let _0x252d96 = 弦弦掩抑声(_0x2eb7fb, _0x48c420, 'yaw_pos');
    let _0x55cb35 = 弦弦掩抑声(_0x2eb7fb, _0x48c420, 'pitch_pos');
    if (getDistance(_0x2eb7fb, _0x48c420) < _0x2a718c) return [_0x2eb7fb];
    for (let _0x57842f = 0x0; _0x57842f <= getDistance(_0x2eb7fb, _0x48c420); _0x57842f += _0x2a718c) {
      let _0x2bc990 = 忽闻水上琵(-_0x57842f, _0x2eb7fb, {
        'yaw': _0x252d96,
        'pitch': _0x2be52a ? -_0x55cb35 : 0x0
      });
      if (getBlock(_0x2bc990['x'], _0x2bc990['y'], _0x2bc990['z'])['namespace'] === 'minecraft:air') _0x217205['push']({
        'x': _0x2bc990['x'],
        'y': _0x2bc990['y'],
        'z': _0x2bc990['z']
      });
    }
    return _0x217205;
  };
  const 弹说尽心中 = (_0x14300c, _0x2d1147) => {
    let _0x4345a1 = getEntityAttribute(_0x14300c, 'minecraft:health');
    let _0x79cd36 = _0x4345a1['current'];
    let _0x487c4d = _0x4345a1['max'];
    const _0x595ad3 = _0x79cd36 / _0x487c4d;
    switch (_0x2d1147) {
      case 0x0:
        return _0x595ad3['toFixed'](0x2) * 0x64 + '%%';
      case 0x1:
        let _0x2dab8e = '§c';
        for (let _0x347c6e = 0x0; _0x347c6e < Math['floor'](_0x595ad3 * 0x14); _0x347c6e++) _0x2dab8e += '❤';
        return _0x2dab8e + '§r';
      case 0x2:
        return '§c❤§rx' + Math['floor'](_0x79cd36);
      case 0x3:
        return Math['floor'](_0x79cd36) + '/' + Math['floor'](_0x487c4d);
      default:
        return _0x79cd36;
    }
  };
  const 无限事轻拢 = _0x348fcf => {
    let _0x492afa = '';
    let _0x1efc96 = '.,?!@":;+-*/=~|_\\^`&#%$·'['split']('');
    for (let _0x3f5088 = 0x0; _0x3f5088 < _0x348fcf; _0x3f5088++) {
      let _0x3e0e89 = 马客在船举(0x0, _0x1efc96['length'] - 0x1);
      _0x492afa += _0x1efc96[_0x3e0e89];
    }
    return _0x492afa;
  };
  const 慢捻抹复挑 = _0x82d745 => {
    for (let _0x3085e9 = Math['ceil'](-cd_size / 0x2); _0x3085e9 < Math['floor'](cd_size / 0x2 + 0x1); _0x3085e9++) {
      for (let _0x4733e8 = Math['ceil'](-cd_size / 0x2); _0x4733e8 < Math['floor'](cd_size / 0x2 + 0x1); _0x4733e8++) {
        for (let _0x389c2d = Math['ceil'](-cd_size / 0x2); _0x389c2d < Math['floor'](cd_size / 0x2 + 0x1); _0x389c2d++) {
          const {
            x,
            y,
            z
          } = _0x82d745;
          const _0x1aac42 = getBlock(x + _0x3085e9, y + _0x4733e8, z + _0x389c2d);
          if (_0x1aac42['namespace'] === 'minecraft:air') continue;
          if (cd_exclude && _0x82d745['y'] + _0x4733e8 <= _0x82d745['y'] - 0x1) continue;
          if (cd_fake) setBlock(x + _0x3085e9, y + _0x4733e8, z + _0x389c2d, 'air', 0x0);
          if (!cd_fake) destroyBlock(self_id, _0x82d745['x'] + _0x3085e9, _0x82d745['y'] + _0x4733e8, _0x82d745['z'] + _0x389c2d, 0x0);
          if (cd_packet) 人本长安倡(_0x82d745['x'] + _0x3085e9, _0x82d745['y'] + _0x4733e8, _0x82d745['z'] + _0x389c2d, true, true);
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
      for (let _0x500493 = 0x0; _0x500493 < ia_move; _0x500493++) {
        if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
      }
      setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
    }
    InfiniteAura_backMot = null;
    InfiniteAura_backPos = null;
  };
  const 六幺大弦嘈 = _0x56244e => {
    let _0x24002f = '';
    let _0x252398 = _0x56244e['split']('');
    for (let _0x37cda3 in _0x252398) {
      let _0x3d84ef = _0x252398[_0x37cda3]['toUpperCase']();
      if (_0x37cda3 != _0x252398['length'] - 0x1) {
        if (_0x37cda3 % 0x2 === 0x1) _0x24002f += _0x3d84ef + ' ';else _0x24002f += _0x3d84ef;
      } else _0x24002f += _0x3d84ef;
    }
    if (rpc_remark) {
      let _0x34a084 = _0x24002f['split'](' ');
      let _0x1017e8 = '';
      for (let _0x1a2a27 in _0x34a084) _0x1017e8 += _0x34a084[_0x1a2a27] + '(' + 生不得志低(_0x34a084[_0x1a2a27]) + ') ';
      return _0x1017e8;
    } else return _0x24002f;
  };
  const 嘈如急雨小 = (_0x175b47, _0x165bf7, _0x1b8f23 = false) => {
    setEntityTarget(_0x175b47, _0x165bf7);
    if (_0x1b8f23) setEntityTarget(_0x165bf7, _0x175b47);
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
  function onTickEvent() {
    try {
      if (PauseNX) return;
      let _0x7b1125 = [];
      self_id = getLocal(otherId);
      self_pos = getPos(self_id);
      prev_pos = getEntityPosPrev(self_id);
      teams_self = 音铮铮然有(getPlayerArmorItem(self_id, teams_slot));
      let _0x2e8053 = getEntityAttribute(self_id, 'minecraft:health');
      let _0x4a3e2c = getEntityMotion(self_id);
      self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
      if (FastStop && !self_moving) setMotion(0x0, _0x4a3e2c['y'], 0x0);
      let _0x427406 = getCameraRotation();
      let _0x223690 = {
        'yaw': _0x427406['yaw'] > 0x0 ? 0xb4 - _0x427406['yaw'] : -0xb4 - _0x427406['yaw'],
        'pitch': -_0x427406['pitch']
      };
      let _0x1b8ea2 = getDistance(self_pos, prev_pos) / 0.05;
      let _0x272eb3 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
      let _0x4ee691 = 瑟瑟主人下(self_id);
      let _0x4331bd = 面转轴拨弦(self_id);
      let _0x1eb413 = getWorldPlayerList();
      let _0x55629c = getEntityIsGround(self_id);
      let _0x5a87f5 = getScreenName();
      if (ticks % getSelf == 0x0) {
        if (getDelay) {
          gd_ping1 = Date['now']();
          curl_get('https://www.baidu.com', {}, (_0x2dc80e, _0x5400e5) => globalThis['gd_ping2'] = Date['now']());
          gd_ping = Math['abs'](gd_ping2 - gd_ping1);
        }
      }
      self_item = getCarried(self_id);
      if (_0x2e8053['current'] - prev_heal > 0x8) {
        if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
        if (LocalRespawn) setTimeout(() => {
          departCamera();
          setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
          setTimeout(() => resetCamera(), 0xc8);
        }, 0x32 * lr_delay);
        if (DeadCross) dc_pos['push'](death_pos);
      } else if (_0x2e8053['current'] < prev_heal) death_pos = self_pos;
      if (ShowScreenHud) 归客不发寻(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
      if (DeadCross) dc_pos['forEach'](_0x3d3a3a => {
        sendShadow(_0x3d3a3a['x'], _0x3d3a3a['y'], _0x3d3a3a['z']);
        sendShadow(_0x3d3a3a['x'], _0x3d3a3a['y'] + 0x1, _0x3d3a3a['z']);
        sendShadow(_0x3d3a3a['x'], _0x3d3a3a['y'] + 0x2, _0x3d3a3a['z']);
        sendShadow(_0x3d3a3a['x'] + 0x1, _0x3d3a3a['y'] + 0x2, _0x3d3a3a['z']);
        sendShadow(_0x3d3a3a['x'] - 0x1, _0x3d3a3a['y'] + 0x2, _0x3d3a3a['z']);
        sendShadow(_0x3d3a3a['x'], _0x3d3a3a['y'] + 0x3, _0x3d3a3a['z']);
      });
      if (AdminShow) {
        let _0x325dbd = _0x1eb413['filter'](_0x1d676c => _0x1d676c['permissionLevel'] != -0x1 || _0x1d676c['commandPermissionLevel'] != -0x1);
        if (_0x325dbd['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x325dbd['map'](_0x50e673 => _0x50e673['name'])), '§r'));
        let _0x38f76a = _0x325dbd['filter'](_0xde8ead => 声暗问弹者(_0xde8ead['id'], self_id) < as_range);
        if (_0x38f76a['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x38f76a['map'](_0x7e4425 => _0x7e4425['name'])), '§r'));
      }
      if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 琶声主人忘(self_id);
      if (NoHider) {
        const _0xaceb8e = getPlayerList();
        _0xaceb8e['forEach'](_0x402425 => {
          if (_0x402425 != self_id) {
            removeEntityEffect(_0x402425, 0xe);
            setEntityFlag(_0x402425, 0x5, false);
            if (nh_exclude && at_lists['includes'](_0x402425)) at_lists['splice'](at_lists['indexOf'](_0x402425), 0x1);
          }
        });
      }
      if (BJDEscape && getBlock(_0x4331bd['x'], _0x4331bd['y'] - 0x1, _0x4331bd['z'])['namespace'] === 'minecraft:glass' && _0x55629c) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
      if (AutoSwing) swingArm();
      if (AutoCamera) {
        if (getPlayerViewPerspective() === 0x0) resetCamera();else departCamera();
      }
      if (Criticals && !cc_status && _0x4a3e2c['y'] < 0x0) {
        cc_status = true;
        callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
        playerJump();
      }
      if (SpinAttack) setEntityFlag(self_id, 0x38, true);
      if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
        const _0x41fbad = rt_target ? getPos(at_lists[0x0]) : self_pos;
        if (_0x41fbad) setPos(_0x41fbad['x'] + 马客在船举(-rt_range, rt_range), _0x41fbad['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x41fbad['z'] + 马客在船举(-rt_range, rt_range));
      }
      if (NoWall) setEntityFlag(self_id, 0x30, false);
      if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
        let _0x22119d = 马客在船举(ac_min, ac_max);
        let _0x358a63 = Math['round'](0x3e8 / _0x22119d);
        const _0x4a3af6 = at_lists['length'] > 0x0 ? 声思似诉平(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
        for (let _0x37062a = 0x0; _0x37062a < ac_times; _0x37062a++) {
          if (!_0x4a3af6) break;
          if (ac_click) simulateClick();
          if (ac_use) 快弹数曲曲();
        }
        ac_t_2 = ac_t_1 + _0x358a63;
      }
      ac_t_1 = Date['now']();
      if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
        const _0x39e795 = getEntityList()['forEach'](_0x1093a6 => {
          if (getEntityNamespace(_0x1093a6) != 'minecraft:item' || !findEntity(_0x1093a6) || 声暗问弹者(_0x1093a6, self_id) > fm_range && fm_range != -0x1) return;
          const _0x53dc61 = getPos(_0x1093a6);
          silentMove(_0x53dc61['x'], _0x53dc61['y'], _0x53dc61['z']);
        });
      } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
        'pos': fm_pos,
        'rot': _0x223690,
        'inputMode': 0x2,
        'playMode': 0x0,
        'yHeadRot': _0x223690['yaw']
      });
      if (CustomItem) {
        const _0x1db24f = getEntityCarriedItem(self_id);
        if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x1db24f);else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x1db24f);else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x1db24f);
      }
      if (ShadowBoomer && ticks % sb_tick == 0x0) {
        let _0x30e861 = [];
        if (modes['sb_mode'] == 0x0) _0x30e861 = getPlayerList();
        if (modes['sb_mode'] == 0x1) _0x30e861 = at_lists;
        if (modes['sb_mode'] == 0x2) _0x30e861 = ['lock_pos'];
        _0x30e861['forEach'](_0x9c5248 => {
          if (sb_exclude && _0x9c5248 == self_id) return;
          let _0x391329 = null;
          if (_0x9c5248 == 'lock_pos') _0x391329 = sb_pos;else _0x391329 = 面转轴拨弦(_0x9c5248);
          if (!_0x391329) return;
          let _0x132dd4 = getEntityRot(_0x9c5248);
          if (modes['sb_mode'] < 0x2) {
            _0x391329 = 忽闻水上琵(sb_offset, _0x391329, _0x132dd4);
            _0x391329['y'] += sb_ud;
          }
          if (sb_custom) {
            const _0x5521c0 = JSON['parse'](抱琵琶半遮(nx_paths + '/Shadow.json'));
            _0x5521c0['forEach'](_0x362601 => {
              let _0x278544 = Math['sqrt'](_0x362601['x'] * _0x362601['x'] + _0x362601['y'] * _0x362601['y'] + _0x362601['z'] * _0x362601['z']);
              let _0x4d423d = 弦弦掩抑声({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x362601, 'yaw_pos');
              let _0x13b56b = 弦弦掩抑声({
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, _0x362601, 'pitch_pos');
              let _0x1f9e40 = 忽闻水上琵(_0x278544, {
                'x': 0x0,
                'y': 0x0,
                'z': 0x0
              }, {
                'pitch': _0x13b56b,
                'yaw': _0x4d423d + sb_rc_yaw
              });
              sendShadow(_0x391329['x'] + _0x1f9e40['x'], _0x391329['y'] + _0x1f9e40['y'], _0x391329['z'] + _0x1f9e40['z']);
            });
          } else {
            for (let _0xa270cf = Math['ceil'](-sb_length / 0x2); _0xa270cf < Math['floor'](sb_length / 0x2 + 0x1); _0xa270cf++) {
              for (let _0x554d29 = Math['ceil'](-sb_length / 0x2); _0x554d29 < Math['floor'](sb_length / 0x2 + 0x1); _0x554d29++) {
                for (let _0x419d9d = Math['ceil'](-sb_length / 0x2); _0x419d9d < Math['floor'](sb_length / 0x2 + 0x1); _0x419d9d++) {
                  sendShadow(_0x391329['x'] + _0xa270cf, _0x391329['y'] + _0x554d29 + 0x2, _0x391329['z'] + _0x419d9d);
                }
              }
            }
          }
        });
      }
      if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;else sb_rc_yaw = -0xb4;
      if (SmallMap) {
        let _0xcb5b91 = [['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['一', '一', '一', '一', '一', '十', '一', '一', '一', '一', '一'], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '], ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  ']];
        let _0x466dc0 = [];
        if (sm_player) _0x466dc0['push'](...getPlayerList());
        if (sm_entity) _0x466dc0['push'](...getEntityList());
        if (sm_target) _0x466dc0['push'](...at_lists);
        _0x466dc0['forEach'](_0x5dcb87 => {
          let _0x31548c = 弦弦掩抑声(self_id, _0x5dcb87, 'yaw_rot');
          let _0xc42128 = 声暗问弹者(self_id, _0x5dcb87);
          let _0x3aedca = Math['floor'](_0xc42128 / sm_size * sm_proportion * -Math['sin'](_0x31548c * Math['PI'] / 0xb4) * 0xa);
          let _0x2f1c95 = Math['floor'](_0xc42128 / sm_size * sm_proportion * -Math['cos'](_0x31548c * Math['PI'] / 0xb4) * 0xa);
          if (_0x3aedca > 0x5) _0x3aedca = 0x5;
          if (_0x2f1c95 > 0x5) _0x2f1c95 = 0x5;
          if (_0x3aedca < -0x5) _0x3aedca = -0x5;
          if (_0x2f1c95 < -0x5) _0x2f1c95 = -0x5;
          _0xcb5b91[_0x2f1c95 + 0x5][_0x3aedca + 0x5] = ' §e◆§r ';
        });
        let _0x43d9bb = _0xcb5b91['map'](_0x3d2b70 => _0x3d2b70['join'](''))['join']('\n');
        _0x7b1125['push'](归客不发寻(0x1, 'Map', '\n' + _0x43d9bb, '§r'));
      }
      if (CameraManager) {
        if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
        if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);else {
          const _0x117301 = getPos(cm_id);
          const _0x4dc09f = getEntitySize(cm_id);
          setCameraAnchor(_0x117301['x'] - self_pos['x'], _0x117301['y'] - self_pos['y'] + 0.85 * _0x4dc09f['y'], -_0x117301['z'] + self_pos['z']);
        }
        if (cm_attack != null) {
          const _0x406f28 = getPos(cm_attack);
          const _0x519281 = getEntitySize(cm_attack);
          setCameraAnchor(_0x406f28['x'] - self_pos['x'], _0x406f28['y'] - self_pos['y'] + 0.85 * _0x519281['y'], -_0x406f28['z'] + self_pos['z']);
        } else if (cm_actioncamera) setCameraAnchor(-_0x4a3e2c['x'] * cm_moverange, -_0x4a3e2c['y'] * cm_moverange, _0x4a3e2c['z'] * cm_moverange);else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
        setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
        setCameraPitchLimit(-cm_pitch, cm_pitch);
        if (!cm_unlock) cm_pos = self_pos;
        if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
      }
      if (_0x2e8053['current'] < prev_heal) prev_heal = _0x2e8053['current'];
      if (NoDebuff) debuff['forEach'](_0x33200c => removeEntityEffect(self_id, _0x33200c));
      if (MoveJump && self_moving && _0x55629c) playerJump();
      if (ChunkRender) {
        let _0x5a8f4c = {
          'x': Math['floor'](self_pos['x'] / 0x10),
          'z': Math['floor'](self_pos['z'] / 0x10)
        };
        let _0x502c63 = {
          'x': _0x5a8f4c['x'] * 0x10,
          'z': _0x5a8f4c['z'] * 0x10
        };
        let _0x3002ad = {
          'x': (_0x5a8f4c['x'] + 0x1) * 0x10,
          'z': (_0x5a8f4c['z'] + 0x1) * 0x10
        };
        for (let _0xfe4afc = 0x0; _0xfe4afc < 0x10; _0xfe4afc++) {
          妇遂命酒使(0x37, _0x502c63['x'] + _0xfe4afc, self_pos['y'], _0x502c63['z'], 0x1);
          妇遂命酒使(0x37, _0x502c63['x'], self_pos['y'], _0x502c63['z'] + _0xfe4afc, 0x1);
          妇遂命酒使(0x37, _0x3002ad['x'] - _0xfe4afc, self_pos['y'], _0x3002ad['z'], 0x1);
          妇遂命酒使(0x37, _0x3002ad['x'], self_pos['y'], _0x3002ad['z'] - _0xfe4afc, 0x1);
        }
        _0x7b1125['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x5a8f4c['x'] + '， ' + _0x5a8f4c['z'], '§r'));
      }
      if (AutoGG) {
        for (let _0x1cce18 of gg_list) {
          if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x1cce18, -0x1, '一局'), false, true);
          if (modes['gg_mode'] === 0x1) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x1cce18, -0x1, '一局'));
            const _0x526095 = getCarried(self_id);
            if (_0x526095['name']['includes']('一局')) 快弹数曲曲();
          }
        }
      }
      if (nx_goal != null) {
        const _0x2e71b3 = getHorizontalDistance(self_pos, nx_goal);
        const _0xac3368 = getDistance(self_pos, nx_goal);
        if (_0xac3368 >= 0x5) {
          let _0x3edb5e = 弦弦掩抑声(self_id, nx_goal, 'yaw_pos');
          let _0x4dc165 = 忽闻水上琵(-nx_goalSpeed / 0xa, self_pos, {
            'yaw': _0x3edb5e,
            'pitch': 0x0
          });
          if (_0x2e71b3 >= 0x3) setMotion(_0x4dc165['x'] - self_pos['x'], _0x4a3e2c['y'], _0x4dc165['z'] - self_pos['z']);else setMotion(_0x4a3e2c['x'], (_0x4dc165['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x4a3e2c['z']);
        } else {
          nx_goal = null;
          归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
        }
      }
      if (RandomArrayList) {
        for (let _0x155cff = 0x0; _0x155cff < ral_num; _0x155cff++) {
          const _0x37f9d8 = 无限事轻拢(ral_length);
          addCustomArrayList('RandomArrayList' + _0x155cff, _0x37f9d8, _0x37f9d8, true);
        }
      }
      if (ShowNowTime) {
        const _0x3054bc = new Date();
        const _0x405243 = _0x3054bc['getFullYear']();
        const _0x363c2f = ('0' + (_0x3054bc['getMonth']() + 0x1))['slice'](-0x2);
        const _0x3d3261 = ('0' + _0x3054bc['getDate']())['slice'](-0x2);
        const _0x2ad0ab = ('0' + _0x3054bc['getHours']())['slice'](-0x2);
        const _0x49166a = ('0' + _0x3054bc['getMinutes']())['slice'](-0x2);
        const _0x83ce04 = ('0' + _0x3054bc['getSeconds']())['slice'](-0x2);
        const _0x52cd0f = _0x405243 + '-' + _0x363c2f + '-' + _0x3d3261 + ' ' + _0x2ad0ab + ':' + _0x49166a + ':' + _0x83ce04;
        addCustomArrayList('ShowNowTime', '当前时间: ' + _0x52cd0f, '当前时间: ' + _0x52cd0f, true);
      }
      if (ChestAura) {
        let _0x141219 = 面转轴拨弦(self_id);
        let _0x47bd2d = ca_range;
        for (let _0x565548 = -_0x47bd2d; _0x565548 < _0x47bd2d; _0x565548++) {
          for (let _0x3d96a3 = -_0x47bd2d; _0x3d96a3 < _0x47bd2d; _0x3d96a3++) {
            for (let _0x563328 = -_0x47bd2d; _0x563328 < _0x47bd2d; _0x563328++) {
              const _0x3b1ffb = getBlock(_0x141219['x'] + _0x565548, _0x141219['y'] + _0x3d96a3, _0x141219['z'] + _0x563328);
              if (_0x3b1ffb['namespace'] != 'minecraft:chest') continue;
              const _0x5a561e = getBlock(_0x141219['x'] + _0x565548, _0x141219['y'] + _0x3d96a3 + 0x1, _0x141219['z'] + _0x563328);
              const _0x27fcd9 = {
                'x': _0x141219['x'] + _0x565548,
                'y': _0x141219['y'] + _0x3d96a3,
                'z': _0x141219['z'] + _0x563328
              };
              if (ca_chest_pos['includes'](JSON['stringify'](_0x27fcd9)) && ca_exclude || !惨将别别时(_0x141219, _0x27fcd9, ca_wall, 1.53, 0.5) || ca_block && _0x5a561e['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x27fcd9, ca_fov, 0x0)) continue;
              buildBlock(self_id, _0x141219['x'] + _0x565548, _0x141219['y'] + _0x3d96a3, _0x141219['z'] + _0x563328, 0x1);
              if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x27fcd9));
              if (ca_check && chestStates['packet'] && chestStates['click'] && _0x5a87f5['includes']('chest_screen')) {
                chestStates['click'] = false;
                chestStates['packet'] = false;
              }
            }
          }
        }
      }
      if (AntiStaff) {
        _0x1eb413['forEach'](_0x110790 => {
          const {
            name,
            id
          } = _0x110790;
          if (id === self_id || name === '') return;
          let _0x33d249 = null;
          if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x33d249 = id;
          if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x33d249 = id;
          if (modes['as_mode'] === 0x2) {
            as_config['forEach'](_0x13a89d => {
              if (_0x13a89d['match_mode'] === '精准' && _0x13a89d['has_mode'] === '存在' && _0x13a89d['texts']['some'](_0x3249b5 => name === _0x3249b5) != _0x13a89d['reverse_selection']) _0x33d249 = id;
              if (_0x13a89d['match_mode'] === '精准' && _0x13a89d['has_mode'] === '同时' && _0x13a89d['texts']['every'](_0x56d24d => name === _0x56d24d) != _0x13a89d['reverse_selection']) _0x33d249 = id;
              if (_0x13a89d['match_mode'] === '模糊' && _0x13a89d['has_mode'] === '存在' && _0x13a89d['texts']['some'](_0x44b5f7 => name['includes'](_0x44b5f7)) != _0x13a89d['reverse_selection']) _0x33d249 = id;
              if (_0x13a89d['match_mode'] === '精准' && _0x13a89d['has_mode'] === '存在' && _0x13a89d['texts']['every'](_0x1d37d1 => name['includes'](_0x1d37d1)) != _0x13a89d['reverse_selection']) _0x33d249 = id;
            });
          }
          if (modes['as_mode'] === 0x3) _0x33d249 = id;
          if (as_hide && !getEntityFlag(id, 0x5)) _0x33d249 = null;
          if (as_ground && getEntityIsGround(id)) _0x33d249 = null;
          if (_0x33d249 === null) return;
          if (modes['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');else if (modes['anti_mode'] === 0x1) executeCommand('/hub');else if (modes['anti_mode'] === 0x2) executeCommand('/again');else if (modes['anti_mode'] === 0x3) _0x7b1125['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));else if (modes['anti_mode'] === 0x4) leaveWorld();
        });
      }
      if (InteractAura) at_lists['forEach'](_0x9af3fd => interactEntity(_0x9af3fd));
      if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
        'current': 0x7fff
      });
      if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
        'current': 0x14
      });
      if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
      if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
      if (Tower && (_0x223690['pitch'] < -0x50 || _0x223690['pitch'] > 0x50) && self_item['isBlock']) {
        if (_0x55629c || tower_continuously) {
          playerJump();
          setTimeout(() => 事今漂沦憔(_0x4331bd['x'], self_pos['y'] - 0x2, _0x4331bd['z']), tower_delay * 0xa);
        }
      }
      if (ShowVariable) {
        if (sv_player && last_world_player['length'] != _0x1eb413['length']) {
          归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x1eb413['length'], '§r');
          last_world_player = _0x1eb413;
        }
        if (sv_id && self_id != prev_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
      }
      if (CheckAxe && ticks % ca_delay === 0x1) {
        let _0x5cdec5 = [];
        _0x1eb413['forEach'](_0x3b83b7 => {
          if (modes['ca_mode'] == 0x0 && 十六言命曰(_0x3b83b7['id'], -0x1) > 0x14) _0x5cdec5['push'](getEntityName(_0x3b83b7['id']));
          if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x3b83b7['id']) > 0x14) _0x5cdec5['push'](getEntityName(_0x3b83b7['id']));
        });
        if (_0x5cdec5['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x5cdec5), '§r'));
      }
      if (WorldPlayerInfo && last_world_player['length'] != _0x1eb413['length']) {
        const _0x2ae03e = _0x1eb413['map'](_0x3c6fb8 => _0x3c6fb8['name']);
        let _0x220c27 = 三两声未成(last_world_player, _0x2ae03e);
        let _0x5e49ac = last_world_player['length'] < _0x2ae03e['length'];
        if (_0x5e49ac) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x220c27) + '进入了世界', '§r');else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x220c27) + '离开了世界', '§r');
        last_world_player = _0x2ae03e;
      }
      if (DropRes && _0x4a3e2c['y'] < -dr_mot) {
        for (index = 0x0; index < 0x24; index++) {
          const _0xaaaf2e = getInventory(self_id, index);
          if (resList['includes'](_0xaaaf2e['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
        }
      }
      if (AttackAim) {
        if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
          at_lists['forEach'](_0x3770f8 => {
            if (声思似诉平(self_id, _0x3770f8, aaa_fov, 0x0)) {
              if (aa_use) 快弹数曲曲();else 江头夜送客(_0x3770f8, Swing);
            }
          });
          aim_t0 = aim_t1;
        }
        aim_t1 = Date['now']();
      }
      if (HotbarSelector) {
        let _0x3d8742 = getInventory(self_id, select_slot);
        if (hs_slot['length'] > 0x0) {
          if (hs_slot['includes'](select_slot + '')) {
            selectPlayerInventorySlot(self_id, select_slot);
            const _0x41caa1 = getCarried(self_id);
            if (hs_use && !_0x41caa1['namespace']['includes']('air')) 快弹数曲曲();
          }
        } else if (selectitems['includes'](_0x3d8742['name']) || selectitems['includes'](_0x3d8742['namespace']) || selectitems['length'] === 0x0) {
          selectPlayerInventorySlot(self_id, select_slot);
          const _0x378a3d = getCarried(self_id);
          if (hs_use && !_0x378a3d['namespace']['includes']('air')) 快弹数曲曲();
        }
      }
      if (AutoPot && ap_autobag && !getScreenName()['includes']('chest_screen')) openInventory();
      if (AutoPot && getScreenName()['includes']('chest_screen')) {
        const _0x3d8715 = 是夕始觉有(self_id, 'splash_potion', 'hotbal', 0x3);
        if (!_0x3d8715) {
          for (let _0x222e16 = ap_slot === -0x1 ? 0x23 : 0x9; _0x222e16 > -0x1; _0x222e16--) {
            if (ap_slot > -0x1) {
              const _0x3747a1 = getInventory(self_id, _0x222e16);
              if (_0x3747a1['namespace'] === 'minecraft:air') {
                女尝学琵琶(ap_slot, _0x222e16, false, false);
                ap_slot = -0x1;
                break;
              }
            }
            const _0x54d0b1 = getInventory(self_id, _0x222e16);
            if (ap_slot === -0x1 && _0x54d0b1['namespace'] === 'minecraft:splash_potion') ap_slot = _0x222e16;
          }
        } else if (ap_autobag) deleteContainer();
      }
      if (SmartInv && (!da_inv || _0x5a87f5 === 'inventory_screen') && (!da_chest || _0x5a87f5['includes']('chest_screen')) && (!da_bow || _0x223690['pitch'] > 0x50) && ticks % da_delay === 0x0) {
        for (let _0x61c2cb = 0x0; _0x61c2cb < da_max; _0x61c2cb++) {
          const _0x1e0a1a = 迁谪意因为(self_id, da_slot);
          if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x1e0a1a)) {
            const _0x32f485 = 十六言命曰(self_id, da_slot, da_texture, da_enchant);
            if (_0x32f485 >= 0x0 && _0x32f485 < 0x14) {
              if (_0x32f485 >= max_damage) {
                max_damage = _0x32f485;
                if (da_move) 女尝学琵琶(da_slot, SmartInvCfg['sword']);
              } else dropPlayerInventorySlot(self_id, da_slot, false, false);
            }
          }
          const _0x22d78b = nx_armors['indexOf'](_0x1e0a1a);
          const _0x17e737 = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
          if (da_armor && _0x22d78b !== -0x1 && _0x17e737 > 0x0) {
            if (_0x17e737 >= max_armor[_0x22d78b]) {
              max_armor[_0x22d78b] = _0x17e737;
              if (da_move) {
                if (move_armor_slot > -0x1) 女尝学琵琶(da_slot, move_armor_slot);else if (nx_armors[_0x22d78b]) 女尝学琵琶(da_slot, SmartInvCfg[nx_armors[_0x22d78b]]);
              }
            } else dropPlayerInventorySlot(self_id, da_slot, false, false);
          }
          if (da_slot < 0x23) da_slot++;else da_slot = 0x0;
        }
      }
      if (AutoArmor && (!aa_inv || _0x5a87f5 === 'inventory_screen') && (!aa_chest || _0x5a87f5['includes']('chest_screen'))) {
        let _0x51f56d = 迁谪意因为(self_id, armor_slot);
        let _0x56b913 = 之凡六百一(self_id, armor_slot);
        if (_0x51f56d != 'other' && _0x56b913 !== 0x0) {
          let _0x1d0a37 = [之凡六百一(self_id, -0x2), 之凡六百一(self_id, -0x3), 之凡六百一(self_id, -0x4), 之凡六百一(self_id, -0x5)];
          for (let _0x4d42e8 = 0x0; _0x4d42e8 < aa_times; _0x4d42e8++) {
            if (_0x51f56d === 'helmet' && _0x56b913 > _0x1d0a37[0x0]) 罢悯然自叙(armor_slot);
            if (_0x51f56d === 'chestplate' && _0x56b913 > _0x1d0a37[0x1]) 罢悯然自叙(armor_slot);
            if (_0x51f56d === 'leggings' && _0x56b913 > _0x1d0a37[0x2]) 罢悯然自叙(armor_slot);
            if (_0x51f56d === 'boots' && _0x56b913 > _0x1d0a37[0x3]) 罢悯然自叙(armor_slot);
          }
        }
        if (ticks % aa_delay == 0x0) armor_slot++;
        if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
      }
      if (Remover) {
        const _0x3fd9a3 = getEntityList();
        _0x3fd9a3['forEach'](_0x403f90 => {
          let _0x373e5b = false;
          if (rmer_entity) _0x373e5b = !isPlayer(_0x403f90);
          if (rmer_item) _0x373e5b = getEntityNamespace(_0x403f90) == 'minecraft:item';
          if (_0x373e5b) removeEntity(_0x403f90);
        });
      }
      if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
        for (let _0x1a2258 = 0x8; _0x1a2258 >= 0x0; _0x1a2258--) {
          let _0x2f98b5 = getInventory(self_id, _0x1a2258);
          if (_0x2f98b5['namespace'] === prev_item['namespace']) {
            selectPlayerInventorySlot(self_id, _0x1a2258);
            break;
          }
        }
      }
      if (FreeCam && fc_pos != {}) {
        if (fc_draw) {
          for (let _0x17a7d5 = 0x0; _0x17a7d5 <= 0x12; _0x17a7d5 += 0x2) 妇遂命酒使(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x17a7d5 / 0xa, fc_pos['z'], 0x1);
          _0x7b1125['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
        }
        if (fc_dist) _0x7b1125['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
      }
      if (ThrowTracer) {
        const _0x3bc185 = getEntityList();
        _0x3bc185['forEach'](_0x5995f4 => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x5995f4)) && at_lists['length'] > 0x0) {
            const _0x384c12 = getPos(at_lists[0x0]);
            let _0x3be811 = 弦弦掩抑声(_0x384c12, getPos(_0x5995f4), 'yaw_pos');
            let _0x26e0f3 = -弦弦掩抑声(_0x384c12, getPos(_0x5995f4), 'pitch_pos');
            const _0x518b54 = getPos(_0x5995f4);
            const _0x1e4d36 = 忽闻水上琵(tt_speed, _0x518b54, {
              'yaw': _0x3be811,
              'pitch': _0x26e0f3
            });
            setEntityMotion(_0x5995f4, _0x1e4d36['x'] - _0x518b54['x'], _0x1e4d36['y'] - _0x518b54['y'], _0x1e4d36['z'] - _0x518b54['z']);
          }
        });
        if (at_lists['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
      }
      if (ThrowFly) {
        const _0x223d67 = getEntityList();
        _0x223d67['forEach'](_0x474c6d => {
          if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x474c6d))) {
            const _0x39ea41 = getPos(_0x474c6d);
            if (typeof arrow_rot[_0x474c6d] === 'undefined') arrow_rot[_0x474c6d] = _0x223690;
            const _0x34963b = arrow_rot[_0x474c6d]['yaw'];
            const _0xa145c = arrow_rot[_0x474c6d]['pitch'];
            const _0x52530c = 忽闻水上琵(0x1, _0x39ea41, {
              'yaw': _0x34963b,
              'pitch': _0xa145c
            });
            setEntityMotion(_0x474c6d, _0x52530c['x'] - _0x39ea41['x'], _0x52530c['y'] - _0x39ea41['y'], _0x52530c['z'] - _0x39ea41['z']);
          }
        });
      }
      if (ArrowView) {
        const _0x56e93d = getEntityList();
        _0x56e93d['forEach'](_0x58297b => {
          if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x58297b)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x58297b;
        });
        if (av_id != null) {
          if (!av_list['includes'](av_id)) av_list['push'](av_id);
          let _0x56a3f6 = getPos(av_id);
          setCameraAnchor(_0x56a3f6['x'] - self_pos['x'] + (av_x - 0xa), _0x56a3f6['y'] - self_pos['y'] + (av_y - 0xa), -_0x56a3f6['z'] + self_pos['z'] + (av_z - 0xa));
        } else setCameraAnchor(0x0, 0x0, 0x0);
        if (!findEntity(av_id)) av_id = null;
      }
      if (FPSReducer) {
        for (let _0x220068 = 0x0; _0x220068 < fpsr_rate * 0xa; _0x220068++) {
          for (let _0x2d0a7e = 0x0; _0x2d0a7e < fpsr_rate * 0xa; _0x2d0a7e++) getEntityName(_0x220068 + _0x2d0a7e);
        }
      }
      if (ArrowParticle) {
        const _0x2c87e5 = getEntityList();
        _0x2c87e5['forEach'](_0xf68bfa => {
          if (getEntityNamespace(_0xf68bfa) === 'minecraft:arrow') {
            const _0x144296 = getPos(_0xf68bfa);
            妇遂命酒使(arp_type, _0x144296['x'], _0x144296['y'], _0x144296['z'], 0x1);
          }
        });
      }
      if (FightBot && at_lists['length'] > 0x0) {
        let _0x55268a = getPos(at_lists[0x0]);
        let _0x467c73 = {};
        if (fb_chest) {
          const _0x573bf0 = 面转轴拨弦(self_id);
          for (let _0x3a9685 = -0x2; _0x3a9685 < 0x3; _0x3a9685++) {
            for (let _0x5f09f7 = -0x2; _0x5f09f7 < 0x3; _0x5f09f7++) {
              for (let _0x586ed6 = -0x2; _0x586ed6 < 0x3; _0x586ed6++) {
                const _0x2e8743 = getBlock(_0x573bf0['x'] + _0x3a9685, _0x573bf0['y'] + _0x5f09f7, _0x573bf0['z'] + _0x586ed6);
                const _0xbe3d20 = 添酒回灯重([_0x573bf0['x'] + _0x3a9685, _0x573bf0['y'] + _0x5f09f7, _0x573bf0['z'] + _0x586ed6]);
                if (_0x2e8743['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0xbe3d20)) {
                  _0x467c73 = {
                    'x': _0x573bf0['x'] + _0x3a9685,
                    'y': _0x573bf0['y'] + _0x5f09f7,
                    'z': _0x573bf0['z'] + _0x586ed6
                  };
                  ca_chest_pos['push'](_0xbe3d20);
                  break;
                }
              }
            }
          }
        }
        let _0x351c08 = (_0x55629c ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
        let _0x3ccf74 = 马客在船举(0x0, 0x64) < fb_moveRate;
        if (fb_randMove && _0x3ccf74) {
          _0x55268a = 忽闻水上琵(_0x351c08, _0x55268a, {
            'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
            'pitch': 0x0
          });
        }
        let _0x1503b1 = 弦弦掩抑声(self_id, _0x55268a, 'yaw_pos');
        let _0x249aa9 = 忽闻水上琵(_0x351c08, getPos(self_id), {
          'yaw': _0x1503b1,
          'pitch': 0x0
        });
        if (_0x2e8053['current'] < fb_heal) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));else {
            setLocalPlayerTurn(-0x5a, 0x0);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
          }
        }
        const _0xa77ae7 = 谁琵琶声停(self_id, at_lists[0x0]);
        if (_0xa77ae7 > fb_seek) {
          if (_0x55629c) setEntityMotion(self_id, _0x249aa9['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x55629c ? fb_y : _0x4a3e2c['y'], _0x249aa9['z'] - self_pos['z']);
          KillAura = false;
          KeepDistance = false;
          if (fb_sca) Scaffold = true;
          if (Scaffold && sca_keep) sca_current = 0x0;
          if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0) && _0xa77ae7 < fb_seek * 0x3) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
            if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
          }
        } else {
          if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0)) {
            selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
            if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
          }
          if (_0x55629c) setEntityMotion(self_id, fb_randMove && _0x3ccf74 ? _0x249aa9['x'] - self_pos['x'] : _0x4a3e2c['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x4a3e2c['y'], fb_randMove && _0x3ccf74 ? _0x249aa9['z'] - self_pos['z'] : _0x4a3e2c['z']);
          if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
          if (fb_ka) KillAura = true;
          if (fb_kd) KeepDistance = true;
          if (fb_aa) AssistAim = true;
          Scaffold = false;
        }
        if (JSON['stringify'](_0x467c73) != '{}') {
          let _0x44161c = 弦弦掩抑声(self_id, _0x467c73, 'yaw_pos');
          let _0x34481d = 忽闻水上琵(_0x351c08, getPos(self_id), {
            'yaw': _0x44161c,
            'pitch': 0x0
          });
          if (_0x55629c) setEntityMotion(self_id, _0x34481d['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x55629c ? fb_y : _0x4a3e2c['y'], _0x34481d['z'] - self_pos['z']);
        }
      }
      if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
        for (let _0x5081f3 = 0x0; _0x5081f3 < rpc_repeat_times; _0x5081f3++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        rpc_t = 0x0;
      }
      if (AutoShifter && ticks % shift_tick == 0x0) {
        for (let _0x5c5954 = 0x0; _0x5c5954 < shift_num; _0x5c5954++) setEntityFlag(self_id, 0x1, true);
      }
      if (AutoCrystal && at_lists['length'] > 0x0) {
        if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
        if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
          let _0x49d756 = 0x0;
          at_lists['forEach'](_0x1e7fae => {
            let _0x283041 = 面转轴拨弦(_0x1e7fae);
            if (ac_excludeY && Math['abs'](_0x283041['y'] - self_pos['y']) < 0x1) return;
            if (ac_tp) setPos(_0x283041['x'], _0x283041['y'] + 0x1, _0x283041['z']);
            _0x287853: for (let _0x27ac96 = -0x1; _0x27ac96 < 0x2; _0x27ac96++) {
              for (let _0x5ebdeb = -0x2; _0x5ebdeb < 0x0; _0x5ebdeb++) {
                for (let _0x497382 = -0x1; _0x497382 < 0x2; _0x497382++) {
                  let _0x2354cd = getBlock(_0x283041['x'] + _0x27ac96, _0x283041['y'] + _0x497382, _0x283041['z'] + _0x5ebdeb);
                  if (_0x49d756 > ac_count) break _0x287853;
                  if ((_0x2354cd['namespace'] === 'minecraft:bedrock' || _0x2354cd['namespace'] === 'minecraft:obsidian') && _0x49d756 < ac_count) {
                    buildBlock(self_id, _0x283041['x'] + _0x27ac96, _0x283041['y'] + _0x497382, _0x283041['z'] + _0x5ebdeb, 0x1);
                    _0x49d756 += 0x1;
                  }
                }
              }
            }
          });
        } else _0x7b1125['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
      }
      if (CrystalAura) {
        const _0x123587 = getEntityList();
        _0x123587['forEach'](_0x4134f4 => {
          if (!才年长色衰(_0x4134f4)) return;
          const _0x5a0aea = getPos(_0x4134f4);
          if (getEntityTypeId(_0x4134f4) !== 0x47 || 声暗问弹者(_0x4134f4, at_lists[0x0]) > ca_distTo) return;
          if (ca_block && !self_item['isBlock']) {
            for (let _0x3b87a6 = 0x0; _0x3b87a6 < 0x9; _0x3b87a6++) {
              const _0x52c4e3 = getInventory(self_id, _0x3b87a6);
              if (_0x52c4e3['isBlock']) {
                selectPlayerInventorySlot(self_id, _0x3b87a6);
                break;
              }
            }
            buildBlock(self_id, (_0x4331bd['x'] + _0x5a0aea['x']) / 0x2, (_0x4331bd['y'] + _0x5a0aea['y']) / 0x2, (_0x4331bd['z'] + _0x5a0aea['z']) / 0x2, 0x0);
            江头夜送客(_0x4134f4, Swing);
          }
        });
      }
      if (AutoBomb && at_lists['length'] > 0x0) {
        if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
        if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
          at_lists['forEach'](_0x2ab61e => {
            let _0x2f9599 = 面转轴拨弦(_0x2ab61e);
            let _0x449993 = getBlock(_0x2f9599['x'], _0x2f9599['y'] + 0x2, _0x2f9599['z']);
            if (_0x449993['namespace'] === 'minecraft:air') buildBlock(self_id, _0x2f9599['x'], _0x2f9599['y'] + 0x2, _0x2f9599['z'], 0x0);
            _0x449993 = getBlock(_0x2f9599['x'], _0x2f9599['y'] + 0x2, _0x2f9599['z']);
            if (_0x449993['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x2f9599['x'], _0x2f9599['y'] + 0x2, _0x2f9599['z'], 0x0);
          });
        } else _0x7b1125['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
      }
      if (CPvP && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x4f80fd => {
          const _0x44b562 = 面转轴拨弦(_0x4f80fd);
          let _0x557f91 = [[_0x44b562['x'], _0x44b562['y'] + 0x2, _0x44b562['z']], [_0x44b562['x'] + 0x1, _0x44b562['y'], _0x44b562['z']], [_0x44b562['x'] - 0x1, _0x44b562['y'], _0x44b562['z']], [_0x44b562['x'], _0x44b562['y'], _0x44b562['z'] + 0x1], [_0x44b562['x'], _0x44b562['y'], _0x44b562['z'] - 0x1], [_0x44b562['x'] + 0x1, _0x44b562['y'] + 0x1, _0x44b562['z']], [_0x44b562['x'] - 0x1, _0x44b562['y'] + 0x1, _0x44b562['z']], [_0x44b562['x'], _0x44b562['y'] + 0x1, _0x44b562['z'] + 0x1], [_0x44b562['x'], _0x44b562['y'] + 0x1, _0x44b562['z'] - 0x1]];
          for (pos of _0x557f91) {
            let _0x3076eb = getBlock(pos[0x0], pos[0x1], pos[0x2]);
            if (_0x3076eb['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
            if (_0x3076eb['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
          }
        });
      }
      if (KillAura && at_lists['length'] > 0x0) {
        let _0x4712b3 = [];
        let _0x2218ff = false;
        random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
        random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
        at_lists['forEach'](_0x9724d5 => {
          let _0x2c19e4 = getPos(_0x9724d5);
          if (!((声暗问弹者(self_id, _0x9724d5) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x9724d5, ka_fov, 0x0) && 惨将别别时(self_pos, _0x2c19e4, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x4a3e2c['y'] < -0.42))) return;
          _0x4712b3['push'](_0x9724d5);
          KillAura_d_1[_0x9724d5] = Date['now']();
          if (typeof KillAura_d_2[_0x9724d5] !== 'undefined' && KillAura_d_1[_0x9724d5] - KillAura_d_2[_0x9724d5] < 0x0) return;
          _0x2218ff = true;
          for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x9724d5, Swing);
          KillAura_d_2[_0x9724d5] = KillAura_d_1[_0x9724d5] + random_delay;
          if (ka_third) setPlayerViewPerspective(_0x2218ff ? 0x1 : 0x0);
        });
        if (_0x4712b3['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x4712b3['length'] + '个目标' : 添酒回灯重(_0x4712b3['map'](_0x20619c => getEntityName(_0x20619c))), '§r'));
        const _0x4b2c97 = _0x4712b3['length'] * random_num * ka_times;
        if (ka_show) _0x7b1125['push'](归客不发寻(0x1, 'APS', _0x4b2c97 + '/s', '§r'));
      }
      if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
      if (SlowDown && _0x4a3e2c['y'] < -0.074 && !_0x55629c) setMotion(_0x4a3e2c['x'], -sd_speed / 0xf, _0x4a3e2c['z']);
      if (SurroundParticle && (self_moving || !srp_move)) {
        srp_current = srp_current + srp_speed * 0x3;
        if (srp_current > 0xb4) srp_current = -0xb4;
        let _0x1a4bd5 = 忽闻水上琵(srp_len, self_pos, {
          'yaw': srp_current,
          'pitch': 0x0
        });
        妇遂命酒使(srp_type, _0x1a4bd5['x'], _0x1a4bd5['y'] - 1.8 + srp_y, _0x1a4bd5['z'], srp_size);
      }
      if (motion_list['length'] > 0x0) {
        const _0x5adb01 = motion_list['shift']();
        setMotion(_0x5adb01[0x0], _0x5adb01[0x1], _0x5adb01[0x2]);
      }
      if (Scaffold && self_item['isBlock']) {
        sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
        if (sca_count) _0x7b1125['push'](归客不发寻(0x1, self_item['name'] + ' x' + self_item['count'], '§r'));
        const _0x45eef1 = 酒欲饮无管(_0x4a3e2c, self_pos, 0xa);
        var _0x47f3c1 = sca_move || self_moving ? 弦弦掩抑声(_0x45eef1, self_id, 'yaw_pos') : _0x223690['yaw'];
        var _0xf250ef = sca_move || self_moving ? 弦弦掩抑声(_0x45eef1, self_id, 'pitch_pos') : _0x223690['pitch'];
        if (!sca_acc) _0x47f3c1 = roundAngle(_0x47f3c1, sca_prec);
        if (!sca_acc) _0xf250ef = roundAngle(_0xf250ef, sca_prec);
        if (sca_auto) {
          let _0x58f4d8 = {};
          let _0x708687 = Infinity;
          for (let _0x446568 = -0x3; _0x446568 <= 0x3; _0x446568++) {
            for (let _0x2ec3f2 = -0x3; _0x2ec3f2 <= -0x1; _0x2ec3f2++) {
              for (let _0x50d9b5 = -0x3; _0x50d9b5 <= 0x3; _0x50d9b5++) {
                let _0x54f00e = {
                  'x': _0x446568 + _0x4331bd['x'],
                  'y': Math['floor'](sca_current) - 0x1 + _0x2ec3f2,
                  'z': _0x50d9b5 + _0x4331bd['z']
                };
                const _0x36ea1f = getBlock(_0x54f00e['x'], _0x54f00e['y'], _0x54f00e['z']);
                if (_0x36ea1f['namespace'] == 'minecraft:air') continue;
                let _0x48db42 = Math['sqrt'](_0x446568 * _0x446568 - _0x2ec3f2 * _0x2ec3f2 + _0x50d9b5 * _0x50d9b5);
                if (_0x48db42 < _0x708687) {
                  _0x708687 = _0x48db42;
                  _0x58f4d8 = _0x54f00e;
                }
              }
            }
          }
          if (JSON['stringify'](_0x58f4d8) != '{}') {
            let _0xeecd3c = 眉信手续续(_0x58f4d8, _0x4331bd, 0x1, true);
            _0xeecd3c['forEach'](_0x35c179 => {
              if (sca_surface) 事今漂沦憔(Math['round'](_0x35c179['x']), Math['round'](sca_current - 0x1), Math['round'](_0x35c179['z']));else buildBlock(self_id, Math['round'](_0x35c179['x']), Math['round'](sca_current - 0x1), Math['round'](_0x35c179['z']), 0x1);
            });
          }
        }
        for (let _0x31ae98 = 0x0; _0x31ae98 < sca_len; _0x31ae98++) {
          const _0xb75a34 = 忽闻水上琵(_0x31ae98, self_pos, {
            'yaw': _0x47f3c1,
            'pitch': sca_y ? _0xf250ef : 0x0
          });
          let _0x14d828 = {
            'x': Math['floor'](_0xb75a34['x']),
            'y': Math['floor'](sca_current) - 0x1,
            'z': Math['floor'](_0xb75a34['z'])
          };
          let _0x449cf9 = getBlock(_0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z']);
          if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x449cf9['namespace'])) continue;
          if (sca_fake) setBlock(_0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z'], self_item['namespace'], self_item['aux']);else if (sca_surface) 事今漂沦憔(_0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z']);else buildBlock(self_id, _0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z'], 0x1);
          if (sca_up) {
            const _0x453355 = getBlock(_0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z']);
            if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x453355['namespace'])) buildBlock(self_id, _0x14d828['x'], Math['floor'](_0x14d828['y']), _0x14d828['z'], 0x0);
          }
          ;
        }
      }
      if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
        for (let _0x3bf677 = 0x0; _0x3bf677 < 0x9; _0x3bf677++) {
          const _0x365f9d = getInventory(self_id, _0x3bf677);
          if (_0x365f9d['isBlock']) {
            selectPlayerInventorySlot(self_id, _0x3bf677);
            break;
          }
        }
      }
      if (AttackSelf) 江头夜送客(self_id, Swing);
      if (TargetHud) {
        if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
        if (th_target) {
          let _0x47965e = [];
          const _0x1725f9 = isPlayer(th_target) ? getCarried(th_target) : {
            'name': '无',
            'count': 0x0
          };
          const _0x56dc71 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
          const _0x912f6f = 面转轴拨弦(th_target);
          if (th_name) _0x47965e['push'](getEntityName(th_target));
          if (th_carry) _0x47965e['push'](_0x1725f9['name'] + ' x' + _0x1725f9['count']);
          if (th_dist) _0x47965e['push']('距离: ' + _0x56dc71 + 'm');
          if (th_health) _0x47965e['push']('血量: ' + 弹说尽心中(th_target, modes['th_health_mode']));
          if (th_pos) _0x47965e['push']('[' + _0x912f6f['x'] + ', ' + _0x912f6f['y'] + ', ' + _0x912f6f['z'] + ']');
          updateTextContent(th_id, _0x47965e['join']('\n'));
          updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
          updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
        }
      }
      if (AntiVoid) {
        if (modes['av_mode'] === 0x0) {
          if (!av_running && !_0x55629c && _0x4a3e2c['y'] > -av_minY) av_pos['push'](_0x4331bd);
          if (!av_running && _0x55629c) av_pos = [];
          if (!av_running && _0x4a3e2c['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x46762d = av_pos.pop();
              setPos(_0x46762d['x'], _0x46762d['y'], _0x46762d['z']);
              if (av_derp) setLocalPlayerTurn(0x0, 0x78);
            } else av_running = false;
          }
        }
        if (_0x4a3e2c['y'] <= -av_minY && modes['av_mode'] === 0x1) {
          const _0x37e584 = {
            'rot': _0x223690,
            'yHeadRot': 0x0
          };
          const _0x5abb25 = {
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
            ..._0x37e584
          };
          const _0x4c12d6 = {
            'id': self_id,
            'pos': {
              'x': 0x2710,
              'y': 0x2710,
              'z': 0x2710
            },
            'mode': 0x1,
            'ground': true,
            ..._0x37e584
          };
          sendPlayerAuthInput(_0x5abb25);
          sendMovePlayer(_0x4c12d6);
        }
        if (modes['av_mode'] === 0x2) {
          if (!av_running && _0x55629c && _0x4a3e2c['y'] > -av_minY) av_pos[0x0] = self_pos;
          if (!av_running && _0x4a3e2c['y'] <= -av_minY) av_running = true;
          if (av_running) {
            if (av_pos['length'] > 0x0) {
              let _0x5ca7b3 = av_pos[0x0];
              setPos(_0x5ca7b3['x'], _0x5ca7b3['y'], _0x5ca7b3['z']);
              av_pos = [];
            } else av_running = false;
          }
        }
      }
      if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x55629c)) {
        if (gm_tick <= gm_cycle) {
          gm_pos = getPos(self_id);
          gm_mot = getEntityMotion(self_id);
          for (let _0x5c298e = 0x0; _0x5c298e < gm_count; _0x5c298e++) {
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
              'rot': _0x223690,
              'yHeadRot': 0x0
            });
          }
          if (!gm_back) gm_tick = 0x0;
        }
        if (gm_back && gm_tick >= gm_cycle + gm_delay) {
          for (let _0x307556 = 0x0; _0x307556 < gm_count; _0x307556++) {
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
                'rot': _0x223690,
                'yHeadRot': 0x0
              });
            }
          }
          gm_tick = 0x0;
        }
      }
      if (KeepDistance && at_lists['length'] > 0x0 && 谁琵琶声停(self_id, at_lists[0x0]) < kd_distance && (_0x55629c || !kd_only_ground)) {
        const _0x577868 = 弦弦掩抑声(getPos(at_lists[0x0]), self_id, 'yaw_pos');
        const _0xd90111 = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
          'yaw': _0x577868,
          'pitch': _0x223690['pitch']
        });
        if (kd_anti) silentMove(_0xd90111['x'] * 0x2, _0xd90111['y'] * 0x2, _0xd90111['z'] * 0x2);else setMotion(_0xd90111['x'] - self_pos['x'], _0x4a3e2c['y'], _0xd90111['z'] - self_pos['z']);
      }
      if (AirJump && _0x4a3e2c['y'] < -0.42) {
        let _0x236d7c = 酒欲饮无管(_0x4a3e2c, self_pos, 瑟瑟主人下(self_id));
        let _0x3ee88c = 弦弦掩抑声(_0x236d7c, self_id, 'yaw_pos');
        let _0x14d46b = 忽闻水上琵(aj_speed / 0xa, self_pos, {
          'yaw': _0x3ee88c,
          'pitch': 0x0
        });
        setMotion(_0x14d46b['x'] - self_pos['x'], aj_height / 0x64, _0x14d46b['z'] - self_pos['z']);
      }
      if (dl_list['length'] > 0x0) {
        for (let _0x3c322f = 0x0; _0x3c322f < di_speed; _0x3c322f++) {
          let _0x596c52 = dl_list.pop();
          dropPlayerInventorySlot(self_id, _0x596c52, false, true);
        }
      }
      if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
      if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
      if (Trace && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) > tra_range) {
        let _0x36a883 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
        let _0x429d60 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
        let _0x12ba7e = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
          'yaw': _0x36a883,
          'pitch': -_0x429d60
        });
        setPos(_0x12ba7e['x'], _0x12ba7e['y'], _0x12ba7e['z']);
      }
      if (LineParticle && at_lists['length'] > 0x0) {
        let _0x5cd8d6 = getPos(self_id);
        _0x5cd8d6['y'] += lp_offset / 0xa;
        at_lists['forEach'](_0x348fe3 => {
          let _0x4d1d81 = getPos(_0x348fe3);
          _0x4d1d81['y'] += 0.765;
          let _0x5b1799 = 弦弦掩抑声(_0x5cd8d6, _0x4d1d81, 'yaw_pos');
          let _0x842ea4 = 弦弦掩抑声(_0x5cd8d6, _0x4d1d81, 'pitch_pos');
          for (let _0x2ad30f = 0x0; _0x2ad30f < 声暗问弹者(_0x348fe3, self_id); _0x2ad30f += (0xb - lp_size) / 0x5) {
            let _0x1c24e7 = 忽闻水上琵(-_0x2ad30f, getPos(self_id), {
              'yaw': _0x5b1799,
              'pitch': -_0x842ea4
            });
            妇遂命酒使(lp_type, _0x1c24e7['x'], _0x1c24e7['y'] - 1.53 + lp_offset / 0xa, _0x1c24e7['z'], 0x1);
          }
        });
      }
      if (Spammer && ticks % spm_delay == 0x0) {
        let _0x5b3c27 = spm_text;
        const _0x3e13b0 = 'abcdef';
        if (spm_gradual) _0x5b3c27 = 送客湓浦口(_0x5b3c27);
        if (spm_rainbow) _0x5b3c27 = '§' + _0x3e13b0[马客在船举(0x0, _0x3e13b0['length'] - 0x1)] + _0x5b3c27;
        if (spm_file) {
          let _0xe13f90 = 抱琵琶半遮(nx_paths + '/Spammer.txt')['split']('\n');
          _0x5b3c27 = _0xe13f90[马客在船举(0x0, _0xe13f90['length'] - 0x1)];
        }
        if (spm_attack && at_lists['length'] > 0x0) _0x5b3c27 = ' §e@' + at_lists['map'](_0x31207f => getEntityName(_0x31207f))['join'](',') + ' §r' + _0x5b3c27;
        for (let _0x3fc13f = 0x0; _0x3fc13f < spm_count; _0x3fc13f++) {
          let _0x39942a = 无限事轻拢(0x6);
          sendChatMessage(spm_random ? _0x5b3c27 + '§r || ' + _0x39942a : _0x5b3c27);
        }
      }
      if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x2a2078 => setEntitySize(_0x2a2078, hb_hor, hb_y));
      if (Sucker && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x46c32a => {
          const _0x1470da = 忽闻水上琵(suck_range, self_pos, _0x223690);
          setRealPos(_0x46c32a, _0x1470da['x'], _0x1470da['y'], _0x1470da['z']);
        });
      }
      if (Velocity && self_moving) {
        let _0x219a71 = _0x223690['yaw'];
        if (modes['bhop_mode'] === 0x1) {
          bhop_mot = getEntityMotion(self_id);
          bhop_pos = getPos(self_id);
          const _0xc51fc7 = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
          _0x219a71 = 弦弦掩抑声(self_id, _0xc51fc7, 'yaw_pos');
        }
        let _0x4bcdfc = 忽闻水上琵((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
          'yaw': _0x219a71,
          'pitch': 0x0
        });
        setMotion(_0x4bcdfc['x'] - self_pos['x'], vec_bhop && (_0x55629c || bhop_airjump) && (!bhop_airjump || _0x4a3e2c['y'] < -0.42) ? bhop_heigh : _0x4a3e2c['y'], _0x4bcdfc['z'] - self_pos['z']);
      }
      if (FlexibleMove) {
        const _0x237d58 = getCameraRotation();
        const _0x49cbb5 = 忽闻水上琵(fb_speed / 0xa, self_pos, {
          'yaw': _0x237d58['yaw'] > 0x0 ? 0xb4 - _0x237d58['yaw'] : -0xb4 - _0x237d58['yaw'],
          'pitch': -_0x237d58['pitch']
        });
        if (!_0x55629c && self_moving) setMotion(_0x49cbb5['x'] - self_pos['x'], 0x0, _0x49cbb5['z'] - self_pos['z']);
      }
      if (TargetParticle) {
        at_lists['forEach'](_0x53b14d => {
          const _0x2c5a2f = getPos(_0x53b14d);
          妇遂命酒使(tp_type, _0x2c5a2f['x'], _0x2c5a2f['y'] + 0.3, _0x2c5a2f['z'], tp_size);
        });
      }
      if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x5a87f5 === 'inventory_screen') && (!ic_chest || _0x5a87f5['includes']('chest_screen')) && (!ic_bow || _0x223690['pitch'] > 0x50)) {
        for (let _0x4573e8 = 0x0; _0x4573e8 < ic_max; _0x4573e8++) {
          const _0x5548b0 = getInventory(self_id, cleaner_slot);
          if (_0x5548b0['count'] === 0x0) {
            if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
            continue;
          }
          ;
          let _0x59d8da = false;
          let _0x588cc3 = clear_config[_0x5548b0['namespace']];
          let _0x3c2dd3 = 安感斯人言(-0x2, _0x5548b0['namespace']);
          if (modes['ic_mode'] === 0x0 && _0x588cc3) _0x59d8da = true;
          if (modes['ic_mode'] === 0x1 && (!_0x588cc3 || _0x588cc3 && (_0x588cc3['max_num'] === -0x1 || _0x3c2dd3 > _0x588cc3['max_num']) && (_0x588cc3['aux'] === 'any' || _0x5548b0['aux'] === _0x588cc3['aux']))) _0x59d8da = true;
          if (ic_move && !_0x59d8da && typeof _0x588cc3 !== 'undefined' && _0x588cc3['slot'] !== 'undefined') 女尝学琵琶(cleaner_slot, _0x588cc3['slot'], true, false);
          if (_0x59d8da) {
            if (trash_slot > -0x1 && cleaner_slot > 0x8) 女尝学琵琶(cleaner_slot, trash_slot, true, false);
            dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x588cc3 || modes['ic_mode'] === 0x1 && !_0x588cc3);
          }
          if (cleaner_slot > 0x0) cleaner_slot--;else cleaner_slot = 0x23;
        }
      }
      if (SafeWalk && self_moving) {
        const _0x45dbbb = getEntityRot(self_id)['yaw'];
        const _0x38adf5 = 忽闻水上琵(0.5, _0x4331bd, {
          'yaw': _0x45dbbb,
          'pitch': 0x0
        });
        const _0x3f6011 = getBlock(_0x38adf5['x'], _0x38adf5['y'] - 0x1, _0x38adf5['z']);
        if (_0x3f6011['namespace'] === 'minecraft:air' && _0x55629c) setMotion((-_0x38adf5['x'] + self_pos['x']) / 0x8, _0x4a3e2c['y'], (-_0x38adf5['z'] + self_pos['z']) / 0x8);
      }
      if (Spider && self_moving) {
        const _0x215742 = getEntityRot(self_id)['yaw'];
        const _0x425888 = 忽闻水上琵(0x1, _0x4331bd, {
          'yaw': _0x215742,
          'pitch': 0x0
        });
        const _0x44001c = getBlock(_0x425888['x'], _0x425888['y'], _0x425888['z']);
        if (_0x44001c['namespace'] != 'minecraft:air') setMotion(_0x4a3e2c['x'], sp_speed / 0xf, _0x4a3e2c['z']);
      }
      if (Fly && (!_0x55629c || !fly_air) && (!fly_move || self_moving) && _0x4ee691 > 0x0) {
        const _0x33a23d = fly_ud ? fly_current : 0x0;
        let _0x315caf = 酒欲饮无管(_0x4a3e2c, self_pos, fly_speed * 2.5);
        if (modes['fly_mode'] === 0x0) {
          if (!fly_y) setPos(_0x315caf['x'], self_pos['y'] + _0x33a23d, _0x315caf['z']);else setPos(self_pos['x'], _0x315caf['y'], self_pos['z']);
          if (fly_zero) setMotion(0x0, -0.01, 0x0);
        }
        if (modes['fly_mode'] === 0x1) setMotion(_0x315caf['x'] - self_pos['x'], _0x315caf['y'] - self_pos['y'], _0x315caf['z'] - self_pos['z']);
        if (fly_playerAuth) silentMove(_0x315caf['x'], _0x315caf['y'], _0x315caf['z']);
        if (fly_moveplayer) sendMovePlayer({
          'id': self_id,
          'pos': {
            'x': _0x315caf['x'],
            'y': _0x315caf['y'],
            'z': _0x315caf['z']
          },
          'mode': 0x1,
          'ground': true,
          'rot': {
            'pitch': _0x223690['pitch'],
            'yaw': _0x223690['yaw']
          },
          'yHeadRot': getEntityBodyRot(self_id)
        });
        fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
      }
      if (ActivitySender && self_moving) {
        let _0x53e7d8 = 酒欲饮无管(_0x4a3e2c, self_pos, 0x1);
        const _0x495a8d = 弦弦掩抑声(self_id, _0x53e7d8, 'yaw_pos');
        sendChatMessage('我正在向' + Math['round'](_0x495a8d) + '°方向移动');
      }
      if (FakeWater) setBlock(_0x4331bd['x'], _0x4331bd['y'], _0x4331bd['z'], 'minecraft:water', 0x0);
      if (Suspend) setMotion(_0x4a3e2c['x'], -0x186a0, _0x4a3e2c['z']);
      if (Hover) setMotion(_0x4a3e2c['x'], 0.05, _0x4a3e2c['z']);
      if (Rider && at_lists['length'] > 0x0) {
        let _0x556cde = getPos(at_lists[0x0]);
        const _0x565866 = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
        欲语迟移船(_0x556cde['x'] + _0x565866, _0x556cde['y'] + rid_y + 0x1, _0x556cde['z'] + _0x565866);
        _0x7b1125['push'](归客不发寻(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
      }
      if (JetPack) {
        const _0x287448 = getCameraRotation();
        if (self_moving || !spr_move) {
          let _0x216096 = 忽闻水上琵(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
            'yaw': _0x287448['yaw'] > 0x0 ? 0xb4 - _0x287448['yaw'] : -0xb4 - _0x287448['yaw'],
            'pitch': -_0x287448['pitch']
          });
          if (spr_hor) _0x216096['y'] = self_pos['y'];
          const _0x4c4e2 = getBlock(_0x216096['x'], _0x216096['y'], _0x216096['z']);
          if (_0x4c4e2['namespace'] === 'minecraft:air' || spr_nowall) {
            if (modes['sprint_mode'] === 0x0) {
              setPos(_0x216096['x'], _0x216096['y'], _0x216096['z']);
              setEntityMotion(self_id, _0x4a3e2c['x'], -1e-7, _0x4a3e2c['z']);
            }
            if (modes['sprint_mode'] === 0x1) setMotion(_0x216096['x'] - self_pos['x'], _0x216096['y'] - self_pos['y'], _0x216096['z'] - self_pos['z']);
            if (spr_auth) silentMove(_0x216096['x'], _0x216096['y'], _0x216096['z']);
            if (spr_packet) sendMovePlayer({
              'id': self_id,
              'pos': {
                'x': _0x216096['x'],
                'y': _0x216096['y'],
                'z': _0x216096['z']
              },
              'mode': 0x1,
              'ground': true,
              'rot': {
                'pitch': _0x223690['pitch'],
                'yaw': _0x223690['yaw']
              },
              'yHeadRot': getEntityBodyRot(self_id)
            });
          } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        }
      }
      if (Crasher) {
        for (let _0x37e505 = Math['round'](-cs_count / 0x2); _0x37e505 <= Math['round'](cs_count / 0x2); _0x37e505++) {
          const _0x3baf49 = 0xa ** _0x37e505;
          if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x4331bd['x'], _0x4331bd['y'], _0x4331bd['z'], _0x3baf49 ** 0x2);
          if (modes['cs_mode'] === 0x1) sendRpc(prev_rpc['id'], prev_rpc['data']);
          if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n'['repeat'](0x64));
          if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n'['repeat'](0x64));
          if (modes['cs_mode'] === 0x4) sendSound(_0x3baf49, _0x3baf49, _0x3baf49, _0x3baf49, _0x37e505);
          if (modes['cs_mode'] === 0x5) getEntityList()['forEach'](_0x397274 => 江头夜送客(_0x397274, false));
        }
      }
      if (KickAura && at_lists['length'] > 0x0) {
        let _0x1f78ce = [];
        if (ka_player) _0x1f78ce['concat'](_0x1eb413['map'](_0x15ad9c => _0x15ad9c['id']));
        if (ka_target) _0x1f78ce['concat'](at_lists);
        if (modes['ka_mode'] == 0x0) _0x1f78ce['forEach'](_0x47d038 => {
          if (_0x47d038 == self_id) return;
          const _0x3a5835 = getEntityName(_0x47d038);
          let _0x383d17 = _0x3a5835['indexOf'](']') - 0x2;
          let _0x4f827e = ['b', 'c', 'e', 'a'];
          for (let _0x8c13a9 of _0x4f827e) {
            if (_0x3a5835['indexOf']('·§' + _0x8c13a9) != -0x1) {
              _0x383d17 = _0x3a5835['indexOf']('·§' + _0x8c13a9);
              break;
            }
          }
          let _0x597503 = _0x383d17 === -0x1 ? _0x3a5835 : _0x3a5835['slice'](_0x383d17 + 0x3, _0x3a5835['length']);
          if (_0x597503['includes']('【') && _0x597503['includes']('】')) _0x597503 = 琵琶行浔阳(_0x597503, '【', '】');
          for (let _0x31243d = 0x0; _0x31243d < ka_count; _0x31243d++) executeCommand('/tell "' + _0x597503 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
        });
        if (modes['ka_mode'] == 0x1) {
          for (let _0x1c7a13 = 0x0; _0x1c7a13 < ka_count; _0x1c7a13++) executeCommand('/tell @a[' + _0x1f78ce['map'](_0x37ae4d => 'name="' + getEntityName(_0x37ae4d) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
        }
      }
      if (AutoSave && _0x4a3e2c['y'] < -as_minY && !_0x55629c) {
        if (as_block && !self_item['isBlock']) {
          for (let _0x12e6f8 = 0x0; _0x12e6f8 < 0x9; _0x12e6f8++) {
            const _0x11ddbd = getInventory(self_id, _0x12e6f8);
            if (_0x11ddbd['isBlock'] || as_water && _0x11ddbd['namespace'] === 'minecraft:water_bucket') {
              selectPlayerInventorySlot(self_id, _0x12e6f8);
              break;
            }
          }
        }
        if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
          for (let _0x2419e6 of 眉信手续续(_0x4331bd, {
            'x': _0x4331bd['x'],
            'y': _0x4331bd['y'] - as_minY * 0x5,
            'z': _0x4331bd['z']
          }, 0x1, true)) {
            const _0x25e6a8 = getBlock(_0x2419e6['x'], _0x2419e6['y'], _0x2419e6['z']);
            if (_0x25e6a8['namespace'] != 'minecraft:air') continue;
            const _0x227902 = getBlock(_0x2419e6['x'], _0x2419e6['y'] - 0x1, _0x2419e6['z']);
            if (_0x227902['namespace'] === 'minecraft:air' || _0x227902['namespace'] === 'minecraft:water') continue;
            buildBlock(self_id, _0x2419e6['x'], _0x2419e6['y'], _0x2419e6['z'], 0x0);
          }
        }
        if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
        if (!as_near && self_item['namespace'] != 'minecraft:water_bucket') {
          if (as_fake) callModule(0x25, '{"value":true}');
          buildBlock(self_id, _0x4331bd['x'], _0x4331bd['y'] - as_minY * 3.1, _0x4331bd['z'], 0x0);
          if (as_fake) callModule(0x25, '{"value":false}');
        }
        if (as_near) {
          let _0x4466ee = {};
          let _0x144f23 = Infinity;
          for (let _0x45a3bc = -0x5; _0x45a3bc <= 0x5; _0x45a3bc++) {
            for (let _0x162a8d = -0x1; _0x162a8d <= 0x0; _0x162a8d++) {
              for (let _0x39d9b1 = -0x5; _0x39d9b1 <= 0x5; _0x39d9b1++) {
                let _0x53f237 = Math['sqrt'](_0x45a3bc * _0x45a3bc + _0x39d9b1 * _0x39d9b1 + _0x162a8d * _0x162a8d);
                let _0x1d1143 = {
                  'x': _0x45a3bc + _0x4331bd['x'],
                  'y': _0x162a8d + _0x4331bd['y'],
                  'z': _0x39d9b1 + _0x4331bd['z']
                };
                const _0x49b14d = getBlock(_0x1d1143['x'], _0x1d1143['y'], _0x1d1143['z']);
                if (_0x49b14d['namespace'] === 'minecraft:air') continue;
                if (_0x53f237 < _0x144f23) {
                  _0x144f23 = _0x53f237;
                  _0x4466ee = _0x1d1143;
                }
              }
            }
          }
          if (_0x4466ee != {}) {
            let _0x3c2748 = {
              'x': _0x4331bd['x'],
              'y': _0x4331bd['y'] - 0x1 + _0x4a3e2c['y'] * 0x3,
              'z': _0x4331bd['z']
            };
            let _0x242e5c = 眉信手续续(_0x4466ee, _0x3c2748, 0.8, true);
            _0x242e5c['forEach'](_0x3d8ff3 => {
              const _0x20683 = getBlock(_0x3d8ff3['x'], _0x3d8ff3['y'], _0x3d8ff3['z']);
              if (_0x20683['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x3d8ff3['x']), Math['floor'](_0x3d8ff3['y']), Math['floor'](_0x3d8ff3['z']));
            });
          }
        }
      }
      if (AssAssInate && at_lists['length'] > 0x0) {
        let _0x158816 = getEntityRot(at_lists[0x0]);
        let _0x17c74f = getPos(at_lists[0x0]);
        if (aai_h > aai_max) aai_reverse = true;else if (aai_h < aai_min) aai_reverse = false;
        aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
        const _0x4570d7 = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
        aai_current = Surround ? aai_current + _0x4570d7 : _0x158816['yaw'];
        if (Surround && aai_current > 0xb4) aai_current = -0xb4;
        let _0x3be757 = 忽闻水上琵(-aai_len, _0x17c74f, {
          'yaw': aai_current,
          'pitch': 0x0
        });
        if (modes['sur_mode'] === 0x0) setPos(_0x3be757['x'], _0x17c74f['y'] + 1.83 + aai_h, _0x3be757['z']);
        if (modes['sur_mode'] === 0x1) 二年恬然自(_0x3be757['x'], _0x17c74f['y'] + 1.83 + aai_h, _0x3be757['z']);
        _0x7b1125['push'](归客不发寻(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
      }
      if (SoundPlayer || sp_data['length'] > 0x0) {
        let _0x595bc1 = [];
        if (sp_target) _0x595bc1 = at_lists;
        if (sp_all) _0x595bc1 = getPlayerList();
        if (sp_entity) _0x595bc1 = getEntityList();
        if (sp_posList['length'] > 0x0) _0x595bc1 = sp_posList;
        let _0x24e540 = [{
          'sound': sp_type,
          'level': sp_level
        }];
        sp_yaw += 0x14;
        if (sp_yaw > 0xb4) sp_yaw = -0xb4;
        for (let _0x597378 = 0x0; _0x597378 < sp_vec; _0x597378++) {
          if (sp_data['length'] > 0x0) _0x24e540 = sp_data['shift']()['sounds'];
          if (_0x24e540['length'] > 0x0) {
            _0x31e4d3: for (let _0x4e1213 of _0x24e540) {
              let _0x184ddd = _0x4e1213['sound'];
              let _0x505cc1 = _0x4e1213['level'];
              if (sp_large) {
                const _0x33e7ec = Math['round'](sp_range * sp_space / 0x2);
                for (let _0x5cd1c9 = -_0x33e7ec; _0x5cd1c9 <= _0x33e7ec; _0x5cd1c9 += sp_space) {
                  for (let _0x269378 = -_0x33e7ec; _0x269378 <= _0x33e7ec; _0x269378 += sp_space) {
                    sendSound(Number(_0x184ddd), self_pos['x'] + _0x5cd1c9, self_pos['y'] + sp_y, self_pos['z'] + _0x269378, Number(_0x505cc1));
                  }
                }
                continue _0x31e4d3;
              }
              _0x595bc1['forEach'](_0x2f0cec => {
                if (typeof _0x2f0cec != 'string') for (let _0x2c5fe5 = 0x0; _0x2c5fe5 < sp_count; _0x2c5fe5++) sendSound(Number(_0x184ddd), _0x2f0cec['x'], _0x2f0cec['y'] + sp_y, _0x2f0cec['z'], Number(_0x505cc1));else {
                  if (_0x2f0cec === self_id && sp_exclude) return;
                  const _0x526cae = getPos(_0x2f0cec);
                  let _0x52ec51 = 忽闻水上琵(sp_distance, _0x526cae, {
                    'yaw': sp_yaw,
                    'pitch': 0x0
                  });
                  for (let _0x50cc26 = 0x0; _0x50cc26 < sp_count; _0x50cc26++) sendSound(Number(_0x184ddd), _0x52ec51['x'], _0x52ec51['y'] + sp_y, _0x52ec51['z'], Number(_0x505cc1));
                }
              });
            }
          }
        }
        if (sp_data['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
      }
      if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
        sp_data = JSON['parse'](sp_file);
        归客不发寻(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
      }
      if (_0x2e8053['current'] < 0x6) _0x7b1125['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
      if (AutoDo && Math['round'](_0x2e8053['current']) <= ad_min) {
        const _0x198ec4 = modes['ad_mode'];
        if (_0x198ec4 === 0x2) removeEntity(self_id);
        if (_0x198ec4 === 0x0 || _0x198ec4 === 0x1) executeCommand(_0x198ec4 === 0x0 ? '/hub' : '/again');
        if (_0x198ec4 === 0x3) {
          if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));else {
            setEntityRot(self_id, 0x5a, _0x223690['yaw']);
            if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x198ec4 === 0x4) {
          if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));else {
            快弹数曲曲();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x198ec4 === 0x5) {
          if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));else {
            快弹数曲曲();
            if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
          }
        }
        if (_0x198ec4 === 0x6) leaveWorld();
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
        const _0x1f7293 = getBlock(_0x4331bd['x'], _0x4331bd['y'] - 0x1, _0x4331bd['z']);
        if (_0x1f7293['namespace'] === 'minecraft:flowing_water' || _0x1f7293['namespace'] === 'minecraft:water' || _0x1f7293['namespace'] === 'minecraft:flowing_lava' || _0x1f7293['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x4a3e2c['x'], 0x0, _0x4a3e2c['z']);
      }
      if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
        at_lists['forEach'](_0x180024 => {
          let _0x2985e9 = 京都声问其(_0x180024);
          归客不发寻(0x0, 'TargetInfo', '\n' + _0x2985e9 + '\n§r§b==============================', '§r');
          if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x180024) + '_' + _0x180024 + '.txt', _0x2985e9);
        });
      }
      if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
      if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
        const _0x288901 = at_lists[0x0];
        const _0x18d1a9 = 声暗问弹者(self_id, _0x288901);
        const _0x22e10c = 声思似诉平(self_id, _0x288901, aa_fov, 0x0);
        if (_0x18d1a9 <= aa_range && _0x22e10c || aa_throw) {
          const _0x348ee3 = 马客在船举(aa_min, aa_max);
          let _0x3afa13 = 弦弦掩抑声(self_id, _0x288901, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          let _0x8df686 = 弦弦掩抑声(self_id, _0x288901, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
          if (_0x3afa13 <= 0xb4 && _0x3afa13 >= -0xb4 && _0x8df686 <= 0x5a && _0x8df686 >= -0x5a) {
            let _0x33e0c4 = _0x3afa13 >= 0x0 ? -_0x348ee3 : _0x348ee3;
            let _0x54a95e = _0x8df686 >= 0x0 ? _0x348ee3 : -_0x348ee3;
            if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x3afa13) < _0x348ee3 || Math['abs'](_0x8df686) < _0x348ee3)) {
              _0x33e0c4 = -_0x3afa13 / ((0x28 - _0x348ee3) / 0x2);
              _0x54a95e = -_0x8df686 / ((0x28 - _0x348ee3) / 1.125);
            }
            const _0x415e7e = 声思似诉平(self_id, _0x288901, aa_prec * 0x2, 0x1);
            const _0x589fda = 声思似诉平(self_id, _0x288901, aa_prec * 0x4, 0x2);
            if (!_0x415e7e) setLocalPlayerTurn(0x0, _0x33e0c4);
            if (!_0x589fda && !aa_throw || !isSimilar(_0x8df686, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x54a95e, 0x0);
          }
          _0x7b1125['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x288901), '§r'));
        }
      }
      if (InfiniteAura && ia_targets['length'] > 0x0) {
        ia_targets['forEach'](_0x469c86 => {
          const _0x48d919 = _0x469c86;
          const _0x2e8800 = getPos(_0x48d919);
          if (!_0x48d919 || !findEntity(_0x48d919)) return;
          if (声暗问弹者(ia_targets[0x0], self_id) > ia_range) return;
          if (ia_tick === 0x0) {
            const _0x46d048 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
            InfiniteAura_backPos = self_pos;
            InfiniteAura_backMot = _0x4a3e2c;
            for (let _0xb2a847 = 0x0; _0xb2a847 < ia_move; _0xb2a847++) {
              if (ia_toClick) {
                buildBlock(self_id, _0x2e8800['x'] + _0x46d048, _0x2e8800['y'], _0x2e8800['z'] + _0x46d048, 0x1);
                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                  'pos': {
                    'x': _0x2e8800['x'] + _0x46d048,
                    'y': _0x2e8800['y'] + ia_offset / 0x5,
                    'z': _0x2e8800['z'] + _0x46d048
                  }
                });
              }
              if (modes['ia_mode'] === 0x0) setPos(_0x2e8800['x'], _0x2e8800['y'], _0x2e8800['z']);
              if (modes['ia_mode'] === 0x1) silentMove(_0x2e8800['x'] + _0x46d048, _0x2e8800['y'] + ia_offset / 0x5, _0x2e8800['z'] + _0x46d048);
            }
            if (ia_jump) playerJump();
            for (let _0x1784b1 = 0x0; _0x1784b1 < ia_attack; _0x1784b1++) 江头夜送客(_0x48d919, Swing);
          }
          if (ia_tick <= -ia_return && ia_fix) 初为霓裳后();
        });
        if (ia_tick <= -ia_return) {
          if (!ia_fix) 初为霓裳后();
          ia_tick = ia_delay;
        }
        if (ia_tick > -ia_return) ia_tick--;
        _0x7b1125['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 添酒回灯重(ia_targets['map'](_0x2d5ca8 => getEntityName(_0x2d5ca8))), '§r'));
      }
      if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 慢捻抹复挑(_0x4331bd);
      if (AutoVoid) {
        const _0x2d818a = 面转轴拨弦(self_id);
        const _0x40b686 = getBlock(_0x2d818a['x'], _0x4331bd['y'] - 0x1, _0x2d818a['z']);
        for (let _0x4cfea2 = -0x2; _0x4cfea2 < 0x3; _0x4cfea2++) {
          for (let _0x148b43 = -0x2; _0x148b43 < 0x3; _0x148b43++) {
            const _0x570a20 = getBlock(_0x2d818a['x'] + _0x4cfea2, _0x4331bd['y'] - 0x1, _0x2d818a['z'] + _0x148b43);
            if (_0x570a20['namespace'] === 'minecraft:air' && _0x4a3e2c['y'] < -0.0783 && _0x4a3e2c['y'] > -0.0785 && _0x40b686['namespace'] != 'minecraft:air') {
              const _0x417c25 = -弦弦掩抑声(self_id, {
                'x': _0x2d818a['x'] + _0x4cfea2,
                'y': self_pos['y'],
                'z': _0x2d818a['z'] - _0x148b43
              }, 'yaw_pos');
              const _0x1b8234 = 忽闻水上琵(0.5, self_pos, {
                'yaw': _0x417c25,
                'pitch': 0x0
              });
              setMotion(_0x1b8234['x'] - self_pos['x'], _0x4a3e2c['y'], _0x1b8234['z'] - self_pos['z']);
              break;
            }
          }
        }
      }
      if (AvoidThrow) {
        const _0xcb2b2d = getEntityList();
        _0xcb2b2d['forEach'](_0x40566a => {
          if ((getEntityTypeId(_0x40566a) === 0x400055 || getEntityTypeId(_0x40566a) === 0x400056 || getEntityTypeId(_0x40566a) === 0xc00050) && 声暗问弹者(_0x40566a, self_id) <= at_range) {
            if (at_remove) removeEntity(_0x40566a);
            if (modes['avoid_mode'] === 0x0) {
              const _0x5e200b = 弦弦掩抑声(getPos(_0x40566a), self_id, 'yaw_pos');
              const _0x35652f = 忽闻水上琵(0.5, self_pos, {
                'yaw': _0x5e200b,
                'pitch': _0x223690['pitch']
              });
              setMotion(_0x35652f['x'] - self_pos['x'], _0x4a3e2c['y'], _0x35652f['z'] - self_pos['z']);
            }
            if (modes['avoid_mode'] === 0x1) 江头夜送客(_0x40566a, Swing);
            if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
          }
        });
      }
      if (TrajectoryRender) {
        const _0x4b22b2 = getPlayerList();
        let _0x2048c6 = [];
        let _0xa3fa69 = false;
        let _0x487a5f = {
          'x': 0x0,
          'y': 0x0,
          'z': 0x0
        };
        for (let _0x2e17d5 = 0x1; _0x2e17d5 <= tr_len; _0x2e17d5 += tr_dens / 0xa) {
          let _0x46e1a1 = 少小时欢乐(_0x2e17d5, _0x223690['pitch'], tr_speed, tr_g)['data'];
          let _0x48402a = 忽闻水上琵(_0x2e17d5, self_pos, {
            'yaw': _0x223690['yaw'],
            'pitch': 0x0
          });
          let _0x858dd8 = getBlock(_0x48402a['x'], _0x48402a['y'] + _0x46e1a1, _0x48402a['z']);
          if (tr_show || !_0xa3fa69) {
            _0x4b22b2['forEach'](_0x44a9ec => {
              if (!_0xa3fa69) {
                let _0x475efd = getPos(_0x44a9ec);
                let _0x5e5fda = {
                  'x': _0x48402a['x'],
                  'y': _0x48402a['y'] + _0x46e1a1,
                  'z': _0x48402a['z']
                };
                let _0x206b24 = getEntitySize(_0x44a9ec);
                if (_0x5e5fda['x'] <= _0x475efd['x'] + _0x206b24['x'] / 0x2 && _0x5e5fda['x'] >= _0x475efd['x'] - _0x206b24['x'] / 0x2 && _0x5e5fda['y'] <= _0x475efd['y'] + _0x206b24['y'] / 0x2 && _0x5e5fda['y'] >= _0x475efd['y'] - _0x206b24['y'] / 0x2 && _0x5e5fda['z'] <= _0x475efd['z'] + _0x206b24['x'] / 0x2 && _0x5e5fda['z'] >= _0x475efd['z'] - _0x206b24['x'] / 0x2) {
                  _0x7b1125['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x44a9ec), '§r'));
                  _0xa3fa69 = true;
                }
              }
            });
          }
          if (_0x858dd8['namespace'] != 'minecraft:air' || _0xa3fa69) {
            _0x487a5f = _0x48402a;
            if (modes['tr_mode'] === 0x1 && _0x858dd8['namespace'] != 'minecraft:air') {
              for (let _0x27873c = 0x0; _0x27873c <= 0x14; _0x27873c += 0x2) 妇遂命酒使(tr_type, _0x487a5f['x'], _0x487a5f['y'] + _0x46e1a1 + _0x27873c / 0xa, _0x487a5f['z'], 0x1);
            }
            break;
          }
        }
        if (modes['tr_mode'] === 0x0) {
          let _0x42f62d = getDistance(_0x487a5f, self_pos);
          for (let _0x2c3ba2 = 0x1; _0x2c3ba2 <= _0x42f62d; _0x2c3ba2 += tr_dens / 0xa) {
            let _0x2138cb = 少小时欢乐(_0x2c3ba2, _0x223690['pitch'], tr_speed, tr_g)['data'];
            let _0x3a1951 = (tr_offset - 0xa) / 0xa;
            let _0x30a512 = _0x223690['yaw'] + 0x5a;
            if (_0x30a512 > 0xb4) _0x30a512 = _0x30a512 - 0x168;
            if (_0x30a512 < -0xb4) _0x30a512 = _0x30a512 + 0x168;
            let _0x4bd291 = 忽闻水上琵(_0x3a1951, self_pos, {
              'yaw': _0x30a512,
              'pitch': 0x0
            });
            let _0x3d7418 = 忽闻水上琵(_0x2c3ba2, _0x4bd291, {
              'yaw': _0x223690['yaw'] - Math['atan'](_0x3a1951 / _0x42f62d) * (0xb4 / Math['PI']),
              'pitch': 0x0
            });
            let _0x3c02a2 = getBlock(_0x3d7418['x'], _0x3d7418['y'] + _0x2138cb, _0x3d7418['z']);
            if (modes['tr_mode'] === 0x0 && _0x3c02a2['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x3d7418['x'], _0x3d7418['y'] + _0x2138cb + 0.5, _0x3d7418['z'], 0x1);
          }
        }
      }
      if (FarmAura) {
        const _0x4827c0 = 面转轴拨弦(self_id);
        for (let _0x52ebc9 = -0x4; _0x52ebc9 < 0x5; _0x52ebc9++) {
          for (let _0x1b9ff8 = -0x4; _0x1b9ff8 < 0x5; _0x1b9ff8++) {
            const _0x4e84e1 = getBlock(_0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'] - 0x1, _0x4827c0['z'] + _0x1b9ff8);
            const _0x3e11f4 = getBlock(_0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'], _0x4827c0['z'] + _0x1b9ff8);
            if ((_0x4e84e1['namespace'] === 'minecraft:dirt' || _0x4e84e1['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'] - 0x1, _0x4827c0['z'] + _0x1b9ff8, 0x1);
            if (_0x4e84e1['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'] - 0x1, _0x4827c0['z'] + _0x1b9ff8, 0x1);
            if (_0x3e11f4['aux'] === 0x7 && (_0x3e11f4['namespace'] === 'minecraft:beetroot' || _0x3e11f4['namespace'] === 'minecraft:wheat' || _0x3e11f4['namespace'] === 'minecraft:carrots' || _0x3e11f4['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'], _0x4827c0['z'] + _0x1b9ff8, 0x1);
            if (self_item['namespace'] === 'minecraft:bone_meal' && _0x3e11f4['aux'] <= 0x6 && (_0x3e11f4['namespace'] === 'minecraft:beetroot' || _0x3e11f4['namespace'] === 'minecraft:wheat' || _0x3e11f4['namespace'] === 'minecraft:carrots' || _0x3e11f4['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x4827c0['x'] + _0x52ebc9, _0x4331bd['y'], _0x4827c0['z'] + _0x1b9ff8, 0x1);
          }
        }
      }
      if (ActionManager) {
        if (!am_file) {
          if (ticks % am_delay == 0x0) {
            for (let _0x7d1971 = 0x0; _0x7d1971 < am_count; _0x7d1971++) sendPlayerAction({
              'id': self_id,
              'pos': {
                'x': _0x4331bd['x'],
                'y': _0x4331bd['y'] - 0x1,
                'z': _0x4331bd['z']
              },
              'type': Number(am_id),
              'value': Number(am_value)
            });
          }
        } else {
          const _0x4b45a3 = JSON['parse'](抱琵琶半遮(nx_paths + '/PlayerAction.json'));
          _0x4b45a3['forEach'](_0x55709c => {
            if (_0x55709c['delay'] % am_tick === 0x0) {
              for (let _0x4397f8 = 0x0; _0x4397f8 < _0x55709c['count']; _0x4397f8++) sendPlayerAction({
                'id': self_id,
                'pos': self_pos,
                'value': _0x55709c['value'],
                'type': Number(_0x55709c['id'])
              });
            }
          });
        }
      }
      if (PlayerAuthManager && ticks % pam_delay === 0x0) {
        for (let _0x2dd8ca = 0x0; _0x2dd8ca < pam_count; _0x2dd8ca++) sendPlayerAuthInput({
          'pos': {
            'x': _0x4331bd['x'],
            'y': _0x4331bd['y'] - 0x1,
            'z': _0x4331bd['z']
          },
          'inputs': pam_array['map'](_0x1788d8 => Number(_0x1788d8)),
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
      if (AutoJump && _0x55629c) setMotion(_0x4a3e2c['x'], aj_y / 0x64, _0x4a3e2c['z']);
      if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x123830 => {
        if (bc_packet) silentMove(_0x123830['x'], _0x123830['y'], _0x123830['z']);
        buildBlock(self_id, _0x123830['x'], _0x123830['y'], _0x123830['z'], 0x0);
      });
      if (NoFall && _0x4a3e2c['y'] < -nf_max && !_0x55629c) {
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
      if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x55629c && _0x55629c)) {
        if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
        for (let _0x24d0c9 = 0x0; _0x24d0c9 < 0x168; _0x24d0c9 += do_density / 0xa) {
          const _0x54d405 = do_l_axis * Math['cos'](_0x24d0c9 * Math['PI'] / 0xb4);
          const _0x366394 = do_s_axis * Math['sin'](_0x24d0c9 * Math['PI'] / 0xb4);
          妇遂命酒使(0x37, do_pos[0x0] + _0x54d405, do_pos[0x1], do_pos[0x2] + _0x366394, 0x1);
        }
      }
      if (FakeLag) {
        if (fl_t >= fl_normal + fl_abnormal) {
          fakelag_status = !fl_reverse;
          fl_t = 0x0;
        }
        if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
        if (fl_show) _0x7b1125['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
      }
      if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
        const _0x3e1ba3 = fb_list['shift']();
        buildBlock(self_id, Math['round'](_0x3e1ba3['x']), Math['round'](_0x3e1ba3['y'] - 0x1), Math['round'](_0x3e1ba3['z']), 0x0);
        fb_t = 0x0;
        if (fb_list['length'] === 0x0) fb_success = true;
      }
      if (TargetHealth && at_lists['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Health', 'Health: ' + 弹说尽心中(at_lists[0x0], modes['health_mode']), '§r'));
      if (ShowTargetList && at_lists['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(at_lists['map'](_0x46b9b2 => getEntityName(_0x46b9b2))), '§r'));
      if (ShowInfo) {
        const _0x547616 = getEntityAttribute(self_id, 'minecraft:movement');
        const _0x3af69c = Math['sqrt'](_0x4a3e2c['x'] * _0x4a3e2c['x'] + _0x4a3e2c['z'] * _0x4a3e2c['z']);
        if (show_speed) _0x7b1125['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x3af69c['toFixed'](0x2) + 'm/s 移动速度: ' + _0x4ee691['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x272eb3['toFixed'](0x2) + 'm/s 坐标速度:' + _0x1b8ea2['toFixed'](0x2) + 'm/s 能力速度:' + _0x547616['current']['toFixed'](0x2) + ('\n移动值: [' + _0x4a3e2c['x']['toFixed'](0x2) + ', ' + _0x4a3e2c['y']['toFixed'](0x2) + ', ' + _0x4a3e2c['z']['toFixed'](0x2) + ']'), '§r'));
        if (show_pos) _0x7b1125['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x4331bd['x'] + ', Y:' + _0x4331bd['y'] + ', Z:' + _0x4331bd['z'] + ']', '§r'));
        if (show_item && self_item['count'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
        if (show_resources) {
          const _0xd01136 = {
            'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
            'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
            'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
            'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
            'star': 安感斯人言(-0x2, 'minecraft:nether_star')
          };
          const _0xca85d5 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
          _0x7b1125['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0xd01136['emerald'] + ', 钻石:' + _0xd01136['diamond'] + ', 金锭:' + _0xd01136['gold'] + ', 铁锭:' + _0xd01136['iron'] + '\n下界之心:' + _0xd01136['star'] + ', 经验:' + _0xca85d5, '§r'));
        }
        if (show_target_dis && at_lists['length'] > 0x0) _0x7b1125['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
        if (show_player_list) _0x7b1125['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x1eb413['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
        if (show_kill_num) _0x7b1125['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
        if (show_time) _0x7b1125['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
        if (show_attack_rate) _0x7b1125['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
        if (show_real_aps) _0x7b1125['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
        if (show_ping) _0x7b1125['push'](归客不发寻(0x1, 'PING', gd_ping + 'ms', '§r'));
        if (show_self_health) _0x7b1125['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x2e8053['current'] + ', 最大值:' + _0x2e8053['max'] + ', 最小值:' + _0x2e8053['min'], '§r'));
        if (show_detail_item) _0x7b1125['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
        if (show_real_time) {
          const _0x6c4372 = new Date();
          const _0x1fcd4b = _0x6c4372['getFullYear']();
          const _0x5ae271 = ('0' + (_0x6c4372['getMonth']() + 0x1))['slice'](-0x2);
          const _0x529ac6 = ('0' + _0x6c4372['getDate']())['slice'](-0x2);
          const _0x3ee094 = ('0' + _0x6c4372['getHours']())['slice'](-0x2);
          const _0x1294d7 = ('0' + _0x6c4372['getMinutes']())['slice'](-0x2);
          const _0x595e25 = ('0' + _0x6c4372['getSeconds']())['slice'](-0x2);
          const _0x591e34 = _0x1fcd4b + '-' + _0x5ae271 + '-' + _0x529ac6 + ' ' + _0x3ee094 + ':' + _0x1294d7 + ':' + _0x595e25;
          _0x7b1125['push'](归客不发寻(0x1, 'RealTime', _0x591e34, '§r'));
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
        let _0x1f790c = _0x223690['yaw'];
        _0x1f790c += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
        if (_0x1f790c >= 0xb4) _0x1f790c -= 0x168;
        if (_0x1f790c <= -0xb4) _0x1f790c += 0x168;
        let _0x9ad8c7 = (_0x55629c ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0x4f2733 = (_0x55629c ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
        let _0xaea993 = {};
        if (rc_surround && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) <= rc_lock) {
          let _0x1f39d7 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
          let _0x363460 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_rot');
          let _0x3c1f12 = _0x363460 > -0x5a || _0x363460 < 0x5a ? rc_speed : -rc_speed;
          let _0x4f811d = _0x1f790c > -0x5a || _0x1f790c < 0x5a ? rc_speed : -rc_speed;
          let _0x4c18ae = rc_relative ? _0x3c1f12 : _0x4f811d;
          Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x1f39d7 -= _0x4c18ae * 0x5 : _0x1f39d7 += _0x4c18ae * 0x5;
          if (_0x1f39d7 > 0xb4) _0x1f39d7 -= 0x168;
          if (_0x1f39d7 < -0xb4) _0x1f39d7 += 0x168;
          let _0x2fe4d9 = 忽闻水上琵(rc_dist, getPos(at_lists[0x0]), {
            'yaw': _0x1f39d7,
            'pitch': 0x0
          });
          let _0x46dea8 = 弦弦掩抑声(_0x2fe4d9, self_id, 'yaw_pos');
          _0xaea993 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x9ad8c7 : _0x4f2733 : rc_speed / 0x8, self_pos, {
            'yaw': _0x46dea8,
            'pitch': 0x0
          });
        } else _0xaea993 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x9ad8c7 : _0x4f2733 : rc_speed / 0x8, self_pos, {
          'yaw': _0x1f790c,
          'pitch': 0x0
        });
        Camera_anchor_pos = {
          'x': Camera_anchor_pos['x'] + (_0xaea993['x'] - self_pos['x']),
          'y': Camera_anchor_pos['y'],
          'z': Camera_anchor_pos['z'] + (-_0xaea993['z'] + self_pos['z'])
        };
        if (rc_follow && modes['rocker_mode'] < 0x3) {
          if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x1f790c + sca_yaw);else 于穆曹二善(_0x223690['pitch'], _0x1f790c - 0xb4);
        }
        if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
        if (modes['rocker_mode'] === 0x3) {
          if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
            _0xaea993 = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x223690);
            setMotion(_0xaea993['x'] - self_pos['x'], _0xaea993['y'] - self_pos['y'], _0xaea993['z'] - self_pos['z']);
          } else {
            const _0x5585d9 = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
            const _0x2b32de = getCameraRotation();
            rc_roll += (_0x5585d9 ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (modes['rocker_mode'] === 0x0) setMotion(_0xaea993['x'] - self_pos['x'], rc_bhop && _0x55629c || rc_ahop && _0x4a3e2c['y'] < -0.4 ? rc_y : _0x4a3e2c['y'], _0xaea993['z'] - self_pos['z']);
        if (modes['rocker_mode'] === 0x1) setPos(_0xaea993['x'], self_pos['y'], _0xaea993['z']);
        if (rc_directions['direction'] === 0x0) rc_angles = {};
      }
      if (typeof rc_uds['operation'] !== 'undefined') {
        const _0x1ca042 = getEntityMotion(self_id);
        const _0x23e826 = getCameraRotation();
        if (rc_uds['operation'] === 'up') {
          Camera_anchor_pos['y'] += rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x1ca042['x'], rc_y, _0x1ca042['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw -= Math['sin'](_0x23e826['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch += Math['cos'](_0x23e826['roll'] * Math['PI'] / 0xb4) * 0x2;
            setCameraRotation(rc_pitch, rc_yaw, rc_roll);
          }
        }
        if (rc_uds['operation'] === 'down') {
          Camera_anchor_pos['y'] -= rc_y;
          if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
          if (modes['rocker_mode'] === 0x0) setMotion(_0x1ca042['x'], -rc_y, _0x1ca042['z']);
          if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
          if (modes['rocker_mode'] === 0x3) {
            rc_yaw += Math['sin'](_0x23e826['roll'] * Math['PI'] / 0xb4) * 0x2;
            rc_pitch -= Math['cos'](_0x23e826['roll'] * Math['PI'] / 0xb4) * 0x2;
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
        _0x7b1125['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
        if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
          callModule(0x1e, '{"value":false}');
          BalanceTimer_st = false;
        }
        if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
      }
      if (ModifyTime) {
        if (mt_custom === 0x19) {
          let _0xa44e17 = 0x0;
          if (modes['mt_time'] === 0x0) _0xa44e17 = 0x3e8;
          if (modes['mt_time'] === 0x1) _0xa44e17 = 0x32c8;
          if (modes['mt_time'] === 0x2) _0xa44e17 = 0x1770;
          if (modes['mt_time'] === 0x3) _0xa44e17 = 0x30d4;
          setWorldData({
            'time': _0xa44e17
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
            showTipMessage('§bProtoHax §r| ' + _0x1b8ea2['toFixed'](0x2) + ' §eBlocks/sec');
            break;
          case 0x1:
            if (tip_t1 > 0xc8) {
              curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x111750, _0x1fb37e) => globalThis['current_poem'] = JSON['parse'](_0x1fb37e)['content']);
              tip_t1 = 0x0;
            }
            showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
            break;
          case 0x5:
            showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x1b8ea2['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
        for (let _0x4cb8d5 = 0x0; _0x4cb8d5 < mine_speed; _0x4cb8d5++) {
          let _0x40e553 = mine_list['shift']();
          if (typeof _0x40e553 != 'object' || _0x40e553['length'] === 0x0) continue;
          const _0x5eae3b = getBlock(_0x40e553[0x0], _0x40e553[0x1], _0x40e553[0x2]);
          if (_0x5eae3b['namespace'] != 'minecraft:air' && _0x5eae3b['namespace'] === mine_name) {
            destroyBlock(self_id, _0x40e553[0x0], _0x40e553[0x1], _0x40e553[0x2], 0x0);
            mine_current++;
          }
        }
        _0x7b1125['push'](归客不发寻(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
      }
      if (AirStuck && as_time_t < as_time && !_0x55629c) setMotion(0x0, 0x0, 0x0);
      if (_0x7b1125['length'] > 0x0 && !FakeTip) {
        if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x7b1125['join']('\n'));
        if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x7b1125['join']('\n'));
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
      if (ChestStealer && ticks % cs_tick === 0x0) cs_current = 0x0;
      if (ChestStealer && cs_close && cs_timer === cs_delay + 0x1) deleteContainer();
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
      prev_heal = _0x2e8053['current'];
      prev_ground = _0x55629c;
      prev_itemCount = self_itemCount;
    } catch (_0x27b77a) {
      clientMessage(_0x27b77a['stack']);
    }
    addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
  }
  setInterval(() => {
    if (TestModule) deleteContainer();
    if (bn_list['length'] > 0x0) {
      for (let _0x195f5d = bn_list['length'] - 0x1; _0x195f5d >= 0x0; _0x195f5d--) {
        let _0x511334 = bn_list[_0x195f5d];
        _0x511334['x'] -= _0x511334['speed'];
        if (_0x511334['x'] < 0x0) {
          bn_list['splice'](_0x195f5d, 0x1);
          removeText(_0x511334['id']);
        } else updateTextPosition(_0x511334['id'], _0x511334['x'], _0x511334['y']);
      }
    }
    if (Derp) {
      var _0x4c2a76 = getEntityRot(self_id);
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
      if (!dp_head) dp_pitch = _0x4c2a76['pitch'];
      if (!dp_body) dp_yaw = _0x4c2a76['yaw'];
      if (dp_lock) dp_pitch = 0x5a;
    }
    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
      const _0x1fc956 = getCameraRotation();
      const _0x1d9eee = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
      const _0x4bd9d1 = sca_move ? 弦弦掩抑声(_0x1d9eee, self_id, 'yaw_pos') : _0x1fc956['yaw'] > 0x0 ? 0xb4 - _0x1fc956['yaw'] : -0xb4 - _0x1fc956['yaw'];
      于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x4bd9d1 + sca_yaw);
    }
    if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
      let _0x76ad05 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
      let _0x16a674 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
      于穆曹二善(_0x76ad05, _0x16a674);
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
  function onExecuteCommandEvent(_0x4097ff) {
    if (ActivitySender) sendChatMessage('我正在执行命令');
    if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x4097ff, '§r');
    const _0x5de9a5 = _0x4097ff['split'](' ');
    if (_0x5de9a5[0x0] === '/set' && _0x5de9a5[0x1] === 'pos') {
      nx_goal = {
        'x': Number(_0x5de9a5[0x2]),
        'y': Number(_0x5de9a5[0x3]),
        'z': Number(_0x5de9a5[0x4])
      };
      if (_0x5de9a5[0x5]) nx_goalSpeed = Number(_0x5de9a5[0x5]);
      归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
      return true;
    }
    if (_0x5de9a5[0x0] === '/set' && _0x5de9a5[0x1] === 'default' && _0x5de9a5[0x2] === 'config') {
      if (_0x5de9a5[0x3] === 'clear') {
        归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
        setData('nx_defaultCfg', 'null');
        return true;
      }
      if (抱琵琶半遮(nx_cfgs + '/' + _0x5de9a5[0x3] + '.json') != '{}') {
        setData('nx_defaultCfg', _0x5de9a5[0x3]);
        归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x5de9a5[0x3], '§r');
      } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x5de9a5[0x3], '§r');
      return true;
    }
    if (_0x5de9a5[0x0] === '/target') {
      if (_0x5de9a5[0x1] === 'self') at_lists[0x0] = self_id;
      if (_0x5de9a5[0x1] === 'player') at_lists = getPlayerList();
      if (_0x5de9a5[0x1] === 'all') at_lists = getEntityList();
      归客不发寻(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
      return true;
    }
    if (_0x5de9a5[0x0] === '/cleaner') {
      if (_0x5de9a5[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
      if (_0x5de9a5[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x5de9a5[0x2]));
    }
    if (_0x5de9a5[0x0] === '/bind') {
      if (_0x5de9a5[0x1] === 'RunAway') {
        if (typeof globalThis[_0x5de9a5[0x2]] == 'undefined' && typeof nx_funcid[_0x5de9a5[0x2]] == 'undefined' || typeof globalThis[_0x5de9a5[0x3]] == 'undefined' && typeof nx_funcid[_0x5de9a5[0x3]] == 'undefined') {
          归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
          return true;
        }
        let _0x25041 = typeof globalThis[_0x5de9a5[0x3]] !== 'undefined';
        nx_raBinds[_0x5de9a5[0x2]] = {
          'module': _0x5de9a5[0x3],
          'isNX': _0x25041
        };
        归客不发寻(0x0, 'Tip', '绑定 ' + _0x5de9a5[0x2] + ' 与 ' + _0x5de9a5[0x3] + ' 成功', '§r');
        nx_cfg['nx_raBinds'] = nx_raBinds;
        return true;
      }
      if (_0x5de9a5[0x1] === 'key' && typeof globalThis[_0x5de9a5[0x2]] !== 'undefined') {
        nx_isBind = _0x5de9a5[0x2];
        归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x5de9a5[0x2] + '绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x5de9a5[0x1]] === 'undefined') nx_binds[_0x5de9a5[0x1]] = [];
      if (typeof globalThis[_0x5de9a5[0x2]] !== 'undefined' && typeof globalThis[_0x5de9a5[0x1]] !== 'undefined') {
        nx_binds[_0x5de9a5[0x1]]['push'](_0x5de9a5[0x2]);
        归客不发寻(0x0, 'Tip', '绑定 ' + _0x5de9a5[0x1] + ' 与 ' + _0x5de9a5[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x5de9a5[0x0] === '/unbind') {
      if (_0x5de9a5[0x1] === 'key' && typeof globalThis[_0x5de9a5[0x2]] !== 'undefined') {
        for (let _0xe36a3e in nx_keys) {
          if (nx_keys[_0xe36a3e] === _0x5de9a5[0x2]) {
            delete nx_keys[_0xe36a3e];
            break;
          }
        }
        nx_isBind = _0x5de9a5[0x2];
        归客不发寻(0x0, 'Tip', '解除' + _0x5de9a5[0x2] + '的按键绑定', '§r');
        return true;
      }
      if (typeof nx_binds[_0x5de9a5[0x1]] === 'undefined') {
        归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
        return true;
      }
      if (typeof globalThis[_0x5de9a5[0x1]] !== 'undefined' && _0x5de9a5[0x2] === 'all') {
        delete nx_binds[_0x5de9a5[0x1]];
        归客不发寻(0x0, 'Tip', '解除 ' + _0x5de9a5[0x1] + ' 的所有绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (_0x5de9a5[0x1] === 'all') {
        nx_binds = {};
        归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
        nx_cfg['binds'] = nx_binds;
        return true;
      }
      if (typeof globalThis[_0x5de9a5[0x2]] !== 'undefined' && typeof globalThis[_0x5de9a5[0x1]] !== 'undefined') {
        nx_binds[_0x5de9a5[0x1]]['splice'](nx_binds[_0x5de9a5[0x1]]['indexOf'](_0x5de9a5[0x2]), 0x1);
        if (nx_binds[_0x5de9a5[0x1]]['length'] === 0x0) delete nx_binds[_0x5de9a5[0x1]];
        归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x5de9a5[0x1] + ' 和 ' + _0x5de9a5[0x2] + ' 成功', '§r');
        nx_cfg['binds'] = nx_binds;
      } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
      return true;
    }
    if (_0x5de9a5[0x0] === '/nx') {
      if (typeof globalThis[_0x5de9a5[0x2]] === 'undefined') {
        归客不发寻(0x0, 'Tip', '变量不存在', '§r');
        return true;
      }
      if (_0x5de9a5[0x1] === 'num') globalThis[_0x5de9a5[0x2]] = Number(_0x5de9a5[0x3]);
      if (_0x5de9a5[0x1] === 'bool') globalThis[_0x5de9a5[0x2]] = Boolean(_0x5de9a5[0x3]);
      if (_0x5de9a5[0x1] === 'str') globalThis[_0x5de9a5[0x2]] = _0x5de9a5[0x3];
      if (_0x5de9a5[0x1] === 'arr') globalThis[_0x5de9a5[0x2]] = 相近邀相见(_0x5de9a5[0x3]);
      if (_0x5de9a5[0x1] === 'obj') globalThis[_0x5de9a5[0x2]] = JSON['parse'](_0x5de9a5[0x3]);
      归客不发寻(0x0, 'setValue', globalThis[_0x5de9a5[0x2]] + ' => ' + _0x5de9a5[0x2], '§r');
      return true;
    }
  }
  function onCommandOutputEvent(_0x52c183, _0x5de1c1, _0x2acb83) {
    if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x52c183 + ' §e结果:§r' + _0x2acb83 + ' §e数据:§r' + JSON['stringify'](_0x5de1c1, null, 0x2), '§r');
    if (!_0x2acb83) return true;
  }
  function onCallModuleEvent(_0x56e2d1) {
    try {
      if (typeof _0x56e2d1 !== 'undefined' && typeof _0x56e2d1['fun'] !== 'undefined' && typeof nx_raBinds[_0x56e2d1['fun']] !== 'undefined') {
        const _0x84b391 = nx_raBinds[_0x56e2d1['fun']]['module'];
        if (!nx_raBinds[_0x56e2d1['fun']]['isNX']) callModule(nx_funcid[_0x84b391], JSON['stringify']({
          'value': _0x56e2d1['value']
        }));else 委身为贾人(_0x84b391, _0x56e2d1['value']);
      }
      if (ActivitySender) sendChatMessage('我正在调用UI');
      if (PVPDaLao) setTitle('又或是红石大佬');
      if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x56e2d1, null, 0x4), '§r');
      if (typeof _0x56e2d1['name'] === 'undefined') {
        if (Rocker && typeof _0x56e2d1['angle'] !== 'undefined') rc_angles = _0x56e2d1;
        if (Rocker && typeof _0x56e2d1['direction'] !== 'undefined') rc_directions = _0x56e2d1;
        if (Rocker && typeof _0x56e2d1['operation'] !== 'undefined') rc_uds = _0x56e2d1;
        return;
      }
      if (!_0x56e2d1['name']['includes']('NoveXare') && _0x56e2d1['fun'] != 'fun_ride_flying') return;
      if (typeof _0x56e2d1['SauthLogin'] !== 'undefined') {
        Sauths = _0x56e2d1['SauthLogin'];
        setData('sauths', Sauths);
        showToast('请退出我的世界登录 并重新登录');
      }
      if (typeof _0x56e2d1['CustomBanTip'] !== 'undefined') bantip = _0x56e2d1['CustomBanTip'];
      if (typeof _0x56e2d1['key'] !== 'undefined') {
        const _0x2bd234 = _0x56e2d1['key'];
        if (_0x2bd234 === 'ct_team' || _0x2bd234 === 'km_text') 开宴千呼万(_0x2bd234, _0x2bd234 === 'ct_team' ? ct_team : km_text);
        if (_0x2bd234 === 'ItemEditor') {
          const _0x50eed3 = getEntityCarriedItem(self_id);
          const _0x4b7d1b = 司马明年秋(_0x50eed3, 'Damage:', 's');
          const _0x48a822 = 司马明年秋(_0x50eed3, '{Damage:', '}', ',');
          if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x50eed3['replace']('Damage:' + _0x4b7d1b + 's', 'Damage:' + ie_data + 's'));
          if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x50eed3['replace']('{Damage:' + _0x48a822, '{Damage:' + ie_data));
          if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x50eed3['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
          if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);else showToast('请长按物品栏丢弃手中物品');
        }
        if (_0x2bd234 === 'EditBackGround') {
          const _0x4d02ba = 'loginVideoNew.mp4';
          const _0x330f40 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
          if (!file_exist(getResource() + '/' + _0x4d02ba)) {
            showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
            return;
          }
          file_delete(_0x330f40 + _0x4d02ba);
          file_copy(getResource() + '/' + _0x4d02ba, _0x330f40 + _0x4d02ba);
          showToast('已复制文件');
        }
        if (_0x2bd234 === 'spm_text') 开宴千呼万(_0x2bd234, spm_text);
        if (_0x2bd234 === 'am_text') 开宴千呼万(_0x2bd234, am_text);
        if (_0x2bd234 === 'BJDTp') {
          let _0x130c31 = getPlayerList();
          let _0x346a03 = _0x130c31['length'] > 0x0 ? _0x130c31['map'](_0x39c5d8 => ({
            'text': getEntityName(_0x39c5d8) + '\n距离: ' + 声暗问弹者(self_id, _0x39c5d8)['toFixed'](0x2)
          })) : [{
            'text': '没有数据'
          }];
          let _0x1a1e14 = {
            'type': 'form',
            'title': '选择',
            'content': '选择一个目标',
            'buttons': _0x346a03
          };
          const _0x56e39f = JSON['stringify'](_0x1a1e14);
          addForm(_0x56e39f, function (_0x2dfa60) {
            if (_0x130c31['length'] > 0x0 && _0x2dfa60 >= 0x0) {
              var _0xd591ec = _0x130c31[_0x2dfa60];
              var _0x47b0e5 = getPos(_0xd591ec);
              setPos(_0x47b0e5['x'], _0x47b0e5['y'] + 1.8, _0x47b0e5['z']);
              buildBlock(self_id, _0x47b0e5['x'], _0x47b0e5['y'], _0x47b0e5['z'], 0x1);
            }
          });
        }
        if (_0x2bd234 === 'ka_text') 开宴千呼万(_0x2bd234, ka_text);
        if (_0x2bd234 === 'tp_type') 开宴千呼万(_0x2bd234, tp_type);
        if (_0x2bd234 === 'lp_type') 开宴千呼万(_0x2bd234, lp_type);
        if (_0x2bd234 === 'ap_type') 开宴千呼万(_0x2bd234, ap_type);
        if (_0x2bd234 === 'arp_type') 开宴千呼万(_0x2bd234, arp_type);
        if (_0x2bd234 === 'srp_type') 开宴千呼万(_0x2bd234, srp_type);
        if (_0x2bd234 === 'tr_type') 开宴千呼万(_0x2bd234, tr_type);
        if (_0x2bd234 === 'as_type') 开宴千呼万(_0x2bd234, as_type);
        if (_0x2bd234 === 'exit') {
          归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
          if (AutoSaveCfg) {
            归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
            const _0x35fcda = Date['now']();
            File['write'](nx_cfgs + '/自动保存配置 - ' + _0x35fcda + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x35fcda);
          }
          exit();
          gc();
        }
        if (_0x2bd234 === 'sp_type') 开宴千呼万(_0x2bd234, sp_type);
        if (_0x2bd234 === 'as_level') 开宴千呼万(_0x2bd234, as_level);
        if (_0x2bd234 === 'am_id') 开宴千呼万(_0x2bd234, am_id);
        if (_0x2bd234 === 'am_value') 开宴千呼万(_0x2bd234, am_value);
        if (_0x2bd234 === 'pam_id') 开宴千呼万(_0x2bd234, pam_id);
        if (_0x2bd234 === 'pam_value') 开宴千呼万(_0x2bd234, pam_value);
        if (_0x2bd234 === 'pam_array') 开宴千呼万(_0x2bd234, pam_array);
        if (_0x2bd234 === 'sp_level') 开宴千呼万(_0x2bd234, sp_level);
        if (_0x2bd234 === 'cs_text') 开宴千呼万(_0x2bd234, cs_text);
        if (_0x2bd234 === 'DropInv') {
          for (let _0x2a51d8 = 0x0; _0x2a51d8 < 0x24; _0x2a51d8++) {
            const _0x5c7046 = getInventory(self_id, _0x2a51d8);
            if (_0x5c7046['namespace'] === 'minecraft:air') continue;
            if (_0x5c7046['count'] < 0x1) continue;
            dl_list['push'](_0x2a51d8);
          }
        }
        if (_0x2bd234 === 'LookTP') {
          let _0x5c2aa6 = {};
          for (let _0x1e0d60 = 0x0; _0x1e0d60 < 0x1f4; _0x1e0d60++) {
            _0x5c2aa6 = 忽闻水上琵(_0x1e0d60, getPos(self_id), getEntityRot(self_id));
            const _0x531025 = getBlock(_0x5c2aa6['x'], _0x5c2aa6['y'], _0x5c2aa6['z']);
            if (_0x531025['namespace'] != 'minecraft:air') break;
          }
          if (_0x5c2aa6 != {}) {
            const _0x44f784 = getPos(self_id);
            if (modes['LookTP_mode'] === 0x0) 二年恬然自(_0x5c2aa6['x'], _0x5c2aa6['y'] + 1.53, _0x5c2aa6['z']);
            if (modes['LookTP_mode'] === 0x1) setPos(_0x5c2aa6['x'], _0x5c2aa6['y'] + 1.53, _0x5c2aa6['z']);
          }
        }
        if (_0x2bd234 === 'OpenChest') {
          let _0x1aafb6 = {
            'type': 'form',
            'title': '容器列表',
            'content': '请选择需要打开的容器',
            'buttons': [{
              'text': '暂无容器'
            }]
          };
          let _0x4a4e50 = [];
          let _0x1e02ba = 0x0;
          let _0x485701 = 面转轴拨弦(self_id);
          const _0x1aa0e8 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
          const _0x5eac44 = 'shulker_box';
          for (let _0x176d4d = -0x7; _0x176d4d < 0x7; _0x176d4d++) {
            for (let _0x492dbb = -0x7; _0x492dbb < 0x7; _0x492dbb++) {
              for (let _0x201db5 = -0x7; _0x201db5 < 0x7; _0x201db5++) {
                const _0x469b55 = _0x176d4d + _0x485701['x'];
                const _0x39b5ac = _0x492dbb + _0x485701['y'];
                const _0x594560 = _0x201db5 + _0x485701['z'];
                const _0x14c0cf = getBlock(_0x469b55, _0x39b5ac, _0x594560);
                if (_0x1aa0e8['includes'](_0x14c0cf['namespace']) || _0x14c0cf['namespace']['includes'](_0x5eac44)) {
                  const _0x4059f5 = getBlock(_0x469b55, _0x39b5ac + 0x1, _0x594560);
                  _0x1aafb6['buttons'][_0x1e02ba] = {
                    'text': '命名空间: ' + _0x14c0cf['namespace'] + '\n坐标:   ' + (_0x4059f5['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                  };
                  _0x4a4e50[_0x1e02ba] = {
                    'x': _0x469b55,
                    'y': _0x39b5ac,
                    'z': _0x594560
                  };
                  _0x1e02ba++;
                }
              }
            }
          }
          if (_0x1e02ba === 0x0) {
            归客不发寻(0x0, 'Tip', '暂无容器', '§r');
            return;
          }
          addForm(JSON['stringify'](_0x1aafb6), function (_0x161327) {
            var _0xd3577b = _0x4a4e50[_0x161327];
            buildBlock(self_id, _0xd3577b['x'], _0xd3577b['y'], _0xd3577b['z'], 0x1);
            归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
          });
        }
        if (_0x2bd234 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
        if (_0x2bd234 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
        if (_0x2bd234 === 'rpc_repeat') {
          for (let _0x54cb3d = 0x0; _0x54cb3d < rpc_repeat_times; _0x54cb3d++) sendRpc(prev_rpc['id'], prev_rpc['data']);
        }
        if (_0x2bd234 === 'rpc_black') 开宴千呼万(_0x2bd234, rpc_black);
        if (_0x2bd234 === 'rpc_tipWhite') 开宴千呼万(_0x2bd234, rpc_tipWhite);
        if (_0x2bd234 === 'rpc_sendBlack') 开宴千呼万(_0x2bd234, rpc_sendBlack);
        if (_0x2bd234 === 'AttackSelf_one') 江头夜送客(self_id, Swing);
        if (_0x2bd234 === 'RemoveSelf') removeEntity(self_id);
        if (_0x2bd234 === 'QuitGame') leaveWorld();
        if (_0x2bd234 === 'cm_black') 开宴千呼万(_0x2bd234, cm_black);
        if (_0x2bd234 === 'rpc_recBlack') 开宴千呼万(_0x2bd234, rpc_recBlack);
        if (_0x2bd234 === 'rpc_white') 开宴千呼万(_0x2bd234, rpc_white);
        if (_0x2bd234 === 'sl_delete') setData('sauths', '');
        if (_0x2bd234 === 'dc_delete') dc_pos = [];
        if (_0x2bd234 === 'hs_item') 开宴千呼万('selectitems', selectitems);
        if (_0x2bd234 === 'hs_slot') 开宴千呼万('hs_slot', hs_slot);
        if (_0x2bd234 === 'rpc_sendWhite') 开宴千呼万(_0x2bd234, rpc_sendWhite);
        if (_0x2bd234 === 'rpc_recWhite') 开宴千呼万(_0x2bd234, rpc_recWhite);
        if (_0x2bd234 === 'at_typeWhite') 开宴千呼万(_0x2bd234, at_typeWhite);
        if (_0x2bd234 === 'ie_data') 开宴千呼万(_0x2bd234, ie_data);
        if (_0x2bd234 === 'mine_white') 开宴千呼万(_0x2bd234, mine_white);
        if (_0x2bd234 === 'cs_white') 开宴千呼万(_0x2bd234, cs_white);
        if (_0x2bd234 === 'mine_black') 开宴千呼万(_0x2bd234, mine_black);
        if (_0x2bd234 === 'cs_black') 开宴千呼万(_0x2bd234, cs_black);
        if (_0x2bd234 === 'SearchModule') {
          addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function (_0x46a36a, _0x320476, _0x3593fa, _0x3c74f9) {
            let _0x5a6298 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
            let _0x22bf5a = 0x0;
            const _0x1dca8e = getResource();
            const _0x3f1f5b = JSON['parse'](File['read'](_0x1dca8e + '/ui/ui_definition.json'))['ui']['map'](_0x533db3 => ({
              'name': _0x533db3 + '.json',
              'path': _0x1dca8e + '/ui/' + _0x533db3 + '.json'
            }));
            for (let _0x3ed3e7 of _0x3f1f5b) {
              if (!_0x3ed3e7['name']['includes']('NoveXare')) continue;
              let _0x21d0ce = JSON['parse'](File['read'](_0x3ed3e7['path']));
              if (typeof _0x21d0ce['items'][0x0]['items'] === 'undefined') continue;
              for (let _0x4805a0 of _0x21d0ce['items'][0x0]['items']) {
                if (typeof _0x4805a0['name'] === 'undefined' || typeof _0x4805a0['key'] === 'undefined') continue;
                if (_0x3593fa && _0x4805a0['type'] != 'Switch') continue;
                if (_0x3c74f9 && _0x4805a0['type'] == 'Switch') continue;
                if (!_0x320476 && (_0x4805a0['name'] === _0x46a36a || _0x4805a0['key'] === _0x46a36a) || _0x320476 && (_0x4805a0['name']['includes'](_0x46a36a) || _0x4805a0['key']['includes'](_0x46a36a))) {
                  _0x5a6298['items'][0x0]['items'][_0x22bf5a] = _0x4805a0;
                  _0x22bf5a++;
                }
              }
            }
            loadMenu('search_' + _0x46a36a, JSON['stringify'](_0x5a6298));
          });
        }
        if (_0x2bd234 === 'sp_clear') sp_posList = [];
        if (_0x2bd234 === 'sp_add') {
          const {
            x,
            y,
            z
          } = 面转轴拨弦(self_id);
          addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function (_0x3fbe74) {
            const _0xc55582 = _0x3fbe74['split'](',');
            sp_posList['push']({
              'x': Number(_0xc55582[0x0]),
              'y': Number(_0xc55582[0x1]),
              'z': Number(_0xc55582[0x2])
            });
            归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
          });
        }
        if (_0x2bd234 === 'sp_load') {
          const _0x1f8aa8 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
          addForm(_0x1f8aa8, function (_0x3cca63) {
            var _0x3ffdec = File['read'](_0x3cca63);
            if (_0x3ffdec != '' && SoundPlayer) {
              sp_data = JSON['parse'](_0x3ffdec);
              sp_file = sp_loop ? _0x3ffdec : [];
              归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
          });
        }
        if (_0x2bd234 === 'sp_select') {
          const _0x77e40e = {
            'type': 'form',
            'title': '音乐文件',
            'content': '选择要加载的音乐',
            'buttons': [{
              'text': '没有文件'
            }]
          };
          const _0x29e633 = file_list(getResource() + '/sounds/NoveXare');
          _0x29e633['sort']((_0x41d036, _0xd2cb29) => _0x41d036['name']['localeCompare'](_0xd2cb29['name']));
          for (let _0x18fedd = 0x0; _0x18fedd < _0x29e633['length']; _0x18fedd++) {
            _0x77e40e['buttons'][_0x18fedd] = {
              'text': _0x29e633[_0x18fedd]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/sound_glyph_color_2x.png'
              }
            };
          }
          const _0x5b710e = JSON['stringify'](_0x77e40e);
          addForm(_0x5b710e, function (_0x5b07ed) {
            if (_0x29e633['length'] > 0x0 && _0x5b07ed >= 0x0) {
              var _0x23b635 = File['read'](_0x29e633[_0x5b07ed]['path']);
              if (_0x23b635 != '' && SoundPlayer) {
                sp_data = JSON['parse'](_0x23b635);
                sp_file = sp_loop ? _0x23b635 : [];
                归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
              } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
            }
          });
        }
        if (_0x2bd234 === 'save_config') {
          const _0x2214ad = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
          addForm(_0x2214ad, function (_0xe4c0bd, _0xbd0e13) {
            File['write'](nx_cfgs + '/' + _0xe4c0bd + '.json', JSON['stringify'](nx_cfg, null, 0x4));
            归客不发寻(0x0, 'Tip', '保存成功', '§r');
            if (_0xbd0e13) nx_cfg = {
              'binds': {},
              'key_binds': [],
              'nx_raBinds': [],
              'name': getEntityName(self_id)
            };
          });
        }
        if (_0x2bd234 === 'load_config') {
          const _0x1c27e0 = {
            'type': 'form',
            'title': '配置文件',
            'content': '选择要加载的配置',
            'buttons': [{
              'text': '§c没有配置'
            }]
          };
          const _0x166f51 = file_list(nx_cfgs);
          _0x166f51['sort']((_0x1ceee0, _0x54a6f2) => _0x1ceee0['name']['localeCompare'](_0x54a6f2['name']));
          for (let _0x2108fb = 0x0; _0x2108fb < _0x166f51['length']; _0x2108fb++) {
            _0x1c27e0['buttons'][_0x2108fb] = {
              'text': '§e' + _0x166f51[_0x2108fb]['name'],
              'image': {
                'type': 'path',
                'data': 'textures/ui/gear.png'
              }
            };
          }
          const _0xdd085f = JSON['stringify'](_0x1c27e0);
          addForm(_0xdd085f, function (_0x312d26) {
            if (_0x166f51['length'] > 0x0 && _0x312d26 >= 0x0) {
              var _0x466ca7 = JSON['parse'](抱琵琶半遮(_0x166f51[_0x312d26]['path']));
              var _0x2fdcc9 = 0x0;
              nx_binds = _0x466ca7['binds'];
              nx_keys = _0x466ca7['key_binds'];
              nx_raBinds = _0x466ca7['nx_raBinds'];
              for (var _0x428a1a in _0x466ca7) {
                _0x2fdcc9++;
                if (_0x428a1a['includes']('_mode') && _0x56e2d1['index'] && _0x56e2d1['index'] > 0x0) modes[_0x428a1a] = _0x466ca7[_0x428a1a];
                if (_0x428a1a != 'nx_raBinds' && _0x428a1a != 'key_binds' && _0x428a1a != 'binds' && _0x428a1a != 'name') 委身为贾人(_0x428a1a, _0x466ca7[_0x428a1a]);
              }
              nx_cfg = _0x466ca7;
              归客不发寻(0x0, 'Tip', '成功加载' + _0x466ca7['name'] + '的配置，共' + _0x2fdcc9 + '条配置', '§r');
            }
          });
        }
        if (_0x2bd234 === 'rpc_select') {
          const _0x46a2ee = {
            'type': 'form',
            'title': 'PyRpc列表',
            'content': '选择PyRpc',
            'buttons': [{
              'text': '没有PyRpc'
            }]
          };
          let _0x53a9b2 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
          for (let _0x315844 = 0x0; _0x315844 < _0x53a9b2['length']; _0x315844++) {
            _0x46a2ee['buttons'][_0x315844] = {
              'text': (_0x53a9b2[_0x315844]['type'] === 'Send' ? '§a' : '§c') + _0x53a9b2[_0x315844]['packet_str']
            };
          }
          const _0x577b7a = JSON['stringify'](_0x46a2ee);
          addForm(_0x577b7a, function (_0x4ef419) {
            prev_rpc = {
              'id': _0x53a9b2[_0x4ef419]['id'],
              'data': _0x53a9b2[_0x4ef419]['packet_bin']
            };
            归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
          });
        }
        if (_0x2bd234 === 'cw_range') {
          let _0x3b1deb = getPlayerList();
          let _0x58047d = 0x0;
          for (let _0x2389a7 of _0x3b1deb) {
            const _0x1376cb = getPos(_0x2389a7);
            const _0x8e6b22 = getDistance(_0x1376cb, getPos(self_id));
            if (!at_whileLists['includes'](_0x2389a7) && _0x8e6b22 < cw_size && _0x2389a7 != self_id) {
              at_whileLists['push'](_0x2389a7);
              _0x58047d++;
            }
          }
          归客不发寻(0x0, 'Tip', '已添加' + _0x58047d + '个玩家到白名单', '§r');
        }
        if (_0x2bd234 === 'KickSelf') for (let _0x3c9309 = 0x0; _0x3c9309 < 0x3e8; _0x3c9309++) 江头夜送客(self_id, Swing);
        if (_0x2bd234 === 'bc_delete') ac_pos = [];
        if (_0x2bd234 === 'cm_depart') departCamera();
        if (_0x2bd234 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
        if (_0x2bd234 === 'cm_reset') resetCamera();
        if (_0x2bd234 === 'cm_lock') lockCamera();
        if (_0x2bd234 === 'ou_recover') otherId = null;
        if (_0x2bd234 === 'delete_chest') ca_chest_pos = [];
        if (_0x2bd234 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
        if (_0x2bd234 === 'fm_place') fm_pos = self_pos;
        if (_0x2bd234 === 'at_regex') 开宴千呼万(_0x2bd234, at_regex);
        if (_0x2bd234 === 'cw_add' || _0x2bd234 === 'ct_add' || _0x2bd234 === 'ct_add') 茫茫江浸月(_0x2bd234 === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
        if (_0x2bd234 === 'fw_target' || _0x2bd234 === 'fc_target') 茫茫江浸月(_0x2bd234 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
        if (_0x2bd234 === 'cm_target') 茫茫江浸月('cm_target', 0x0);
        if (_0x2bd234 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
        if (_0x2bd234 === 'srp_add') srp_type = Number(srp_type) + 0x1;
        if (_0x2bd234 === 'cw_remove') at_whileLists = [];
        if (_0x2bd234 === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
          'targets': at_lists['map'](_0x478e15 => ({
            'name': getEntityName(_0x478e15),
            'id': _0x478e15,
            'namespace': getEntityNamespace(_0x478e15)
          })),
          'players': getWorldPlayerList(),
          'entities': getEntityList()['map'](_0x37a14a => ({
            'name': getEntityName(_0x37a14a),
            'id': _0x37a14a,
            'namespace': getEntityNamespace(_0x37a14a)
          }))
        }));
        if (_0x2bd234 === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
        if (_0x2bd234 === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(nx_paths + '/WorldInfo.json')));
        if (_0x2bd234 === 'Rusher') {
          const _0x20c884 = getCameraRotation();
          let _0x722cbc = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
            'yaw': _0x20c884['yaw'] > 0x0 ? 0xb4 - _0x20c884['yaw'] : -0xb4 - _0x20c884['yaw'],
            'pitch': -_0x20c884['pitch']
          });
          setMotion(_0x722cbc['x'] - self_pos['x'], _0x722cbc['y'] - self_pos['y'], _0x722cbc['z'] - self_pos['z']);
        }
        return;
      }
      for (let _0x582118 in _0x56e2d1) {
        if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x582118)) continue;
        if (typeof _0x56e2d1['index'] !== 'undefined' && _0x56e2d1['index'] > 0x0) {
          modes[_0x582118] = _0x56e2d1['index'] - 0x1;
          nx_cfg[_0x582118] = _0x56e2d1['index'] - 0x1;
          归客不发寻(0x0, _0x582118['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x56e2d1[_0x582118], '§r');
          if (_0x582118 === 'tip_mode' && modes['tip_mode'] === 0x1) {
            callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
            showToast('注: 该功能会影响正常的ArrayList显示');
          }
          return true;
        }
        if (_0x582118 === 'Criticals') {
          if (_0x56e2d1[_0x582118]) playerJump();else {
            cc_status = false;
            callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
          }
        }
        if (_0x582118 === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x56e2d1[_0x582118]) + ',"count":' + ka_packet + '}');
        if (_0x582118 === 'RandomArrayList' && !_0x56e2d1[_0x582118]) {
          for (let _0x35e889 = 0x0; _0x35e889 < ral_num; _0x35e889++) addCustomArrayList('RandomArrayList' + _0x35e889, '', '', false);
        }
        if (_0x582118 === 'Rocker') callModule(0x39, '{"value":' + b2s(modes['rc_mode'] === 0x1 && _0x56e2d1[_0x582118]) + ',"fov":150}');
        if (_0x582118 === 'FakeMove') {
          if (_0x56e2d1[_0x582118]) fmo_pos = getPos(self_id);else if (!_0x56e2d1[_0x582118]) 欲语迟移船(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
          let _0x28cd84 = {
            'enable': !_0x56e2d1[_0x582118],
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
          callModule(0x7, JSON['stringify'](_0x28cd84));
          setTimeout(() => 欲语迟移船(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
        }
        if (_0x582118 === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x56e2d1[_0x582118]) + ',"count":' + cs_packet + '}');
        if (_0x582118 === 'ShowNowTime' && !_0x56e2d1[_0x582118]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
        if (_0x582118 === 'RandomFunc') {
          const _0x399c9d = Object['keys'](globalThis);
          let _0x15b0d6 = [];
          for (let _0x1491b5 of _0x399c9d) {
            if (typeof globalThis[_0x1491b5] === 'boolean') _0x15b0d6['push'](_0x1491b5);
          }
          const _0x3dde69 = _0x15b0d6[马客在船举(0x0, _0x15b0d6['length'] - 0x1)];
          委身为贾人(_0x3dde69, _0x56e2d1[_0x582118]);
        }
        if (_0x582118 === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x56e2d1[_0x582118]) + ',"count":' + ia_packet + '}');
        if (_0x582118 === 'FlashBack') sb();
        if (_0x582118 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x56e2d1[_0x582118]) + '}');
        if (_0x582118 === 'PyRpcManager' && rpc_store && !_0x56e2d1[_0x582118]) {
          rpc_temp['forEach'](_0x5cc56b => sendRpc(_0x5cc56b['id'], _0x5cc56b['data']));
          归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
          rpc_temp = [];
        }
        if (_0x582118 === 'HideHud') setBooleanOption(0x14f, {
          'value': _0x56e2d1[_0x582118],
          'defaultValue': false
        });
        if (_0x582118 === 'EntityXRay') setBooleanOption(0x149, {
          'value': _0x56e2d1[_0x582118],
          'defaultValue': false
        });
        if (_0x582118 === 'ShowChunk') setBooleanOption(0x147, {
          'value': _0x56e2d1[_0x582118],
          'defaultValue': false
        });
        if (_0x582118 === 'NoPractice') setBooleanOption(0x14c, {
          'value': _0x56e2d1[_0x582118],
          'defaultValue': false
        });
        if (_0x582118 === 'NoWeather') setBooleanOption(0x14e, {
          'value': _0x56e2d1[_0x582118],
          'defaultValue': false
        });
        if (_0x582118 === 'FreeCam') {
          let _0x4b2a18 = {
            'value': _0x56e2d1[_0x582118],
            'noclip': _0x56e2d1[_0x582118],
            'flying': _0x56e2d1[_0x582118]
          };
          callModule(0x1, JSON['stringify'](_0x4b2a18));
          if (_0x56e2d1[_0x582118]) fc_pos = getPos(self_id);else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
        }
        if (_0x582118 === 'FakeMotion' && fm_auto && _0x56e2d1[_0x582118]) fm_pos = getPos(self_id);
        if (_0x582118 === 'ShadowBoomer' && _0x56e2d1[_0x582118]) sb_pos = getPos(self_id);
        if (_0x582118 === 'AvoidAttack' && _0x56e2d1[_0x582118]) aa_pos = getPos(self_id);else if (_0x582118 === 'AvoidAttack' && !_0x56e2d1[_0x582118]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
        if (_0x582118 === 'NoClip') {
          let _0x3399cd = {
            'value': _0x56e2d1[_0x582118],
            'noclip': _0x56e2d1[_0x582118],
            'flying': _0x56e2d1[_0x582118]
          };
          if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x56e2d1[_0x582118]) + '}');
          if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x56e2d1[_0x582118]) + ',"no_fall_check":' + b2s(_0x56e2d1[_0x582118]) + ',"value":' + b2s(_0x56e2d1[_0x582118]) + '}');
          callModule(0x1, JSON['stringify'](_0x3399cd));
          if (nc_blink) nc_pos = getPos(self_id);else nc_pos = {};
        }
        if (_0x582118 === 'BalanceTimer') {
          callModule(0x25, '{"value":' + _0x56e2d1[_0x582118] + '}');
          BalanceTimer_st = !_0x56e2d1[_0x582118];
        }
        if (_0x582118 === 'IQBoost') {
          const _0x2cc3dd = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
          let _0x353206 = 马客在船举(0x0, _0x2cc3dd['length'] - 0x1);
          sendChatMessage('!' + _0x2cc3dd[_0x353206]);
        }
        if (_0x582118 === 'AutoTarget' && !_0x56e2d1[_0x582118]) at_lists = [];
        if (_0x582118 === 'SoundPlayer' && !_0x56e2d1[_0x582118]) sp_data = [];
        if (_0x582118 === 'FightBot' && !_0x56e2d1[_0x582118]) {
          if (fb_ka) KillAura = false;
          if (fb_aa) AssistAim = false;
          if (fb_kd) KeepDistance = false;
          if (fb_sca) Scaffold = false;
        }
        if (_0x582118 === 'ShowSendPacket' && !_0x56e2d1[_0x582118] && JSON['stringify'](PacketTmp['send']) != '{}') {
          let _0x3d4d9e = '';
          for (let _0x1ff353 in PacketTmp['send']) _0x3d4d9e += '名称:' + _0x1ff353 + '，ID:' + PacketTmp['send'][_0x1ff353]['id'] + '，发送数量:' + PacketTmp['send'][_0x1ff353]['count'] + '\n';
          if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
          归客不发寻(0x0, 'sendPacket', '\n' + _0x3d4d9e, '§r');
          PacketTmp['send'] = {};
        }
        if (_0x582118 === 'ShowReceivePacket' && !_0x56e2d1[_0x582118] && JSON['stringify'](PacketTmp['receive']) != '{}') {
          let _0x220983 = '';
          for (let _0x31112c in PacketTmp['receive']) _0x220983 += '名称:' + _0x31112c + '，ID:' + PacketTmp['receive'][_0x31112c]['id'] + '，接受数量:' + PacketTmp['receive'][_0x31112c]['count'] + '\n';
          if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
          归客不发寻(0x0, 'receivePacket', '\n' + _0x220983, '§r');
          PacketTmp['receive'] = {};
        }
        if (_0x582118 === 'Scaffold' && sca_keep && _0x56e2d1[_0x582118]) sca_current = 0x0;
        if (_0x582118 === 'SmartInv' && _0x56e2d1[_0x582118]) {
          da_slot = 0x23;
          max_damage = 0x0;
          max_armor = [0x0, 0x0, 0x0, 0x0];
        }
        if (_0x582118 === 'sp_loop' && !_0x56e2d1[_0x582118]) sp_file = null;
        if (_0x582118 === 'NoLiquid' && _0x56e2d1[_0x582118]) {
          nl_water = getEntityAttribute(self_id, 0x2);
          nl_lava = getEntityAttribute(self_id, 0x6);
        } else if (_0x582118 === 'NoLiquid' && !_0x56e2d1[_0x582118]) {
          setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
          setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
        }
        if (typeof _0x56e2d1[_0x582118] === 'boolean' || typeof _0x56e2d1[_0x582118] === 'number') {
          if (typeof _0x56e2d1[_0x582118] === 'boolean') {
            委身为贾人(_0x582118, _0x56e2d1[_0x582118]);
            return;
          }
          nx_cfg[_0x582118] = _0x56e2d1[_0x582118];
          globalThis[_0x582118] = _0x56e2d1[_0x582118];
        }
      }
    } catch (_0x48c762) {
      clientMessage(_0x48c762['stack']);
    }
  }
  function onPlayerAttackEvent(_0x4f8630, _0x46b9fb) {
    if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
    if (CameraManager && cm_transfer) cm_attack = _0x46b9fb;
    if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
    if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x46b9fb));
    if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x46b9fb));
    if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x46b9fb));
    if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x46b9fb));
    if (TargetEdit) {
      if (te_target === null) te_target = _0x46b9fb;else {
        if (te_all) getEntityList()['forEach'](_0x15b3fe => {
          if (_0x15b3fe != te_target) 嘈如急雨小(_0x15b3fe, te_target, te_two);
        });else 嘈如急雨小(_0x46b9fb, te_target, te_two);
        te_target = null;
        归客不发寻(0x0, 'Tip', '设置完成', '§r');
      }
      return true;
    }
    if (RiderEdit) {
      if (re_cancel) stopRidingEntity(_0x46b9fb);else startRidingEntity(_0x46b9fb);
      归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
      return true;
    }
    if (EntityNBTCopy) {
      if (enc_target === null) enc_target = _0x46b9fb;else {
        setEntityNBT(_0x46b9fb, getEntityNBT(te_target));
        enc_target = null;
        归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
      }
      return true;
    }
    if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x46b9fb));
    if (!attack_list['includes'](_0x46b9fb)) attack_list['push'](_0x46b9fb);
    if (_0x46b9fb === null || attack_list['every'](_0x25250e => last_attack_target['includes'](_0x25250e))) {
      attack_frequency++;
      isAttacking = true;
    } else {
      last_attack_target = _0x46b9fb;
      attack_ticks = 0x0;
      real_attack = 0x0;
      attack_frequency = 0x0;
      click_num = 0x0;
      click_t = 0x0;
    }
    if (PVPDaLao) setTitle('还是PVP大佬');
    if (OtherUser) {
      otherId = _0x46b9fb;
      return true;
    }
    if (CameraManager && cm_editanchor) {
      cm_id = _0x46b9fb;
      归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x46b9fb), '§r');
      return true;
    }
    if (AttackMessage) sendChatMessage(am_text);
    if (AttackParticle) {
      const _0x3f817c = getPos(_0x46b9fb);
      const _0x34be78 = getEntitySize(_0x46b9fb);
      for (let _0x2f14ec = 0x0; _0x2f14ec < 马客在船举(ap_count, ap_count + 0x14); _0x2f14ec++) 妇遂命酒使(ap_type, _0x3f817c['x'] + 马客在船举(-_0x34be78['x'] * 马客在船举(0x7, 0xa), _0x34be78['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x3f817c['y'] + 马客在船举(-_0x34be78['y'] * 0x9, _0x34be78['y'] * 0x2) / 0xa, _0x3f817c['z'] + 马客在船举(-_0x34be78['x'] * 马客在船举(0x7, 0xa), _0x34be78['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
    }
    if (AttackSound) {
      湖间予出官(Number(as_type), Number(as_level));
      if (as_gradually) as_level = Number(as_level) + 0x1;
      if (as_gradually) attack_tick = 0x0;
    }
    if (AttackRender) {
      const _0x4401b5 = 声暗问弹者(self_id, _0x46b9fb);
      callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"distance":' + _0x4401b5 * 1.01 + '}');
      setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
    }
    if (RecordInfo && ri_click) {
      let _0x4bca30 = 京都声问其(_0x46b9fb);
      归客不发寻(0x0, 'Info', '\n' + _0x4bca30 + '\n§r§b==============================', '§r');
      if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x46b9fb) + '_' + _0x46b9fb + '.txt', _0x4bca30);
      return true;
    }
    if (SmartWeapon) {
      let _0x46b1c3 = [];
      for (let _0x3b7ae3 = 0x0; _0x3b7ae3 < 0x9; _0x3b7ae3++) _0x46b1c3['push']({
        'slot': _0x3b7ae3,
        'd': 十六言命曰(self_id, _0x3b7ae3)
      });
      _0x46b1c3['sort']((_0x4aa4b5, _0x4e13fc) => _0x4e13fc['d'] - _0x4aa4b5['d']);
      let _0x17dc7b = _0x46b1c3[0x0];
      if (_0x17dc7b['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x17dc7b['slot']);
    }
    if (ClickTarget) {
      if (!at_lists['includes'](_0x46b9fb)) at_lists['push'](_0x46b9fb);else at_lists['splice'](at_lists['indexOf'](_0x46b9fb), 0x1);
      归客不发寻(0x0, !at_lists['includes'](_0x46b9fb) ? 'delTarget' : 'addTarget', getEntityName(_0x46b9fb), '§r');
      return true;
    }
    if (CustomKB) {
      const _0x4f7297 = getPos(_0x46b9fb);
      const _0x544eb3 = 弦弦掩抑声(self_pos, _0x4f7297, 'yaw_pos');
      const _0xc5bab1 = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
        'yaw': _0x544eb3,
        'pitch': 0x0
      });
      setEntityMotion(_0x46b9fb, _0xc5bab1['x'] - self_pos['x'], ckb_y, _0xc5bab1['z'] - self_pos['z']);
    }
    if (ClickWhiteList) {
      if (!at_whileLists['includes'](_0x46b9fb)) at_whileLists['push'](_0x46b9fb);else at_whileLists['splice'](at_whileLists['indexOf'](_0x46b9fb), 0x1);
      归客不发寻(0x0, !at_whileLists['includes'](_0x46b9fb) ? 'delTarget' : 'addTarget', getEntityName(_0x46b9fb), '§r');
      return true;
    }
    if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
      ct_team = 唤始出来犹(getEntityName(_0x46b9fb));
      归客不发寻(0x0, 'setTeam', ct_team, '§r');
      return true;
    }
    if (TargetHud && modes['th_select_mode'] == 0x1) th_target = _0x46b9fb;
    if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
  }
  function onSendChatMessageEvent(_0x22df39) {
    if (_0x22df39 === '') return true;
    if (BypassMute) {
      if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x22df39);
      if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x22df39);
      if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x22df39);
      return true;
    }
    if (ChatManager && cm_fake) {
      executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x22df39);
      return true;
    }
    if (FakeChat) {
      chatMessage(fc_target, _0x22df39);
      return true;
    }
    if (FakeWhisper) {
      whisperMessage(fw_target, _0x22df39);
      return true;
    }
    if (ChatSuffix && !_0x22df39['includes'](cs_text)) {
      sendChatMessage(_0x22df39 + cs_text);
      return true;
    }
  }
  function onClientMessageEvent(_0x203f0c, _0x5b3d46) {
    if (ChatManager && (_0x203f0c != getEntityName(self_id) && cm_other || _0x203f0c == getEntityName(self_id) && cm_self) && !isRepeating) {
      isRepeating = true;
      for (let _0x4375e6 = 0x0; _0x4375e6 < cm_repeat_times; _0x4375e6++) sendChatMessage(_0x5b3d46);
      setTimeout(() => isRepeating = false, 0x64);
    }
    ;
    if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x203f0c + ', 消息:' + _0x5b3d46, '§r');
    if (ChatManager) return cm_black['some'](_0x2bc304 => _0x5b3d46['includes'](_0x2bc304));
    if (ChatManager && _0x5b3d46['length'] > cm_length) return;
    if (BulletNotice) {
      let _0xc6cd3b = Math['round'](马客在船举(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
      let _0x588ab3 = createText(bn_format['replaceAll']('[名字]', _0x203f0c)['replaceAll']('[消息]', _0x5b3d46), 'Center', nx_screen['screenWidth'], _0xc6cd3b);
      if (_0x588ab3 > -0x1) bn_list['push']({
        'id': _0x588ab3,
        'speed': 马客在船举(bn_min, bn_max),
        'x': nx_screen['screenWidth'],
        'y': _0xc6cd3b
      });
      return bn_intercept;
    }
    return ShowClientMessage;
  }
  function onPlayerJumpEvent(_0x142469) {
    if (ActivitySender) sendChatMessage('我正在跳跃');
    if (PVPDaLao) setTitle('还是什么都不知道的小白');
    if (LongJump) {
      const _0x2fddf3 = getEntityMotion(_0x142469);
      const _0x354860 = getCameraRotation();
      const _0x3cc214 = 酒欲饮无管(_0x2fddf3, self_pos, 0x14);
      const _0x39bf34 = 忽闻水上琵(lj_len / 0x4, self_pos, {
        'yaw': _0x354860['yaw'] > 0x0 ? 0xb4 - _0x354860['yaw'] : -0xb4 - _0x354860['yaw'],
        'pitch': 0x0
      });
      setMotion(_0x39bf34['x'] - self_pos['x'], lj_y, _0x39bf34['z'] - self_pos['z']);
    }
  }
  function onPyRpcReceiveEvent(_0x882254, _0x32046b) {
    if (PyRpcManager && rpc_rec) {
      const _0x59893c = new Uint8Array(_0x32046b);
      const _0x4759b9 = Array['from'](_0x59893c, _0x55635e => _0x55635e['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0xa1cb70 = 左迁九江郡(_0x32046b)['toLowerCase']();
      let _0x23876b = false;
      let _0x481e43 = rpc_tipWhite['some'](_0x5ecffa => _0xa1cb70['includes'](_0x5ecffa));
      if (!_0x23876b) _0x23876b = rpc_black['some'](_0x164111 => _0xa1cb70['includes'](_0x164111));
      if (!_0x23876b) _0x23876b = rpc_recBlack['some'](_0x5df45d => _0xa1cb70['includes'](_0x5df45d));
      if (rpc_white['some'](_0x5578c7 => _0xa1cb70['includes'](_0x5578c7))) _0x23876b = false;
      if (rpc_recWhite['some'](_0x3a3264 => _0xa1cb70['includes'](_0x3a3264))) _0x23876b = false;
      if (rpc_record && (_0x481e43 && rpc_exclude || !_0x481e43)) {
        const _0x4842da = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x3b0831 = JSON['parse'](抱琵琶半遮(_0x4842da));
        _0x3b0831[_0x3b0831['length']] = {
          'packet_hex': _0x4759b9,
          'packet_format': 六幺大弦嘈(_0x4759b9),
          'packet_str': 左迁九江郡(_0x32046b),
          'packet_bin': _0x59893c,
          'time': Date['now'](),
          'id': _0x882254,
          'type': 'Receive',
          'rpc_black': rpc_recBlack,
          'global_keyword': rpc_black,
          'intercept': _0x23876b
        };
        File['write'](_0x4842da, JSON['stringify'](_0x3b0831, null, 0x4));
      }
      let _0x1e806e = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x1e806e = 左迁九江郡(_0x32046b);
      if (modes['rpc_mode'] === 0x1) _0x1e806e = _0x4759b9;
      if (modes['rpc_mode'] === 0x2) _0x1e806e = 六幺大弦嘈(_0x4759b9);
      if (modes['rpc_mode'] === 0x3) _0x1e806e = JSON['stringify'](_0x32046b);
      const _0x383152 = _0x23876b ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
      if (rpc_tip && !_0x481e43 && (rpc_showDisintercept && !_0x23876b || rpc_showIntercept && _0x23876b)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x882254 + '\n' : '') + _0x1e806e + _0x383152, '§r');
      return _0x23876b;
    }
  }
  function onPyRpcSendEvent(_0x86be42, _0x702274) {
    if (PyRpcManager && rpc_send) {
      const _0x343e7c = new Uint8Array(_0x702274);
      const _0x55efd0 = Array['from'](_0x343e7c, _0x401385 => _0x401385['toString'](0x10)['padStart'](0x2, '0'))['join']('');
      const _0x4e6f22 = 左迁九江郡(_0x702274)['toLowerCase']();
      let _0x540ccf = false;
      let _0x550b80 = rpc_tipWhite['some'](_0x5b327d => _0x4e6f22['includes'](_0x5b327d));
      if (!_0x540ccf) _0x540ccf = rpc_black['some'](_0x5d3353 => _0x4e6f22['includes'](_0x5d3353));
      if (!_0x540ccf) _0x540ccf = rpc_sendBlack['some'](_0x28939d => _0x4e6f22['includes'](_0x28939d));
      if (rpc_white['some'](_0x2c791f => _0x4e6f22['includes'](_0x2c791f))) _0x540ccf = true;
      if (rpc_sendWhite['some'](_0x114926 => _0x4e6f22['includes'](_0x114926))) _0x540ccf = false;
      if (!_0x550b80) prev_rpc = {
        'id': _0x86be42,
        'data': _0x343e7c
      };
      if (rpc_store) rpc_temp['push']({
        'id': _0x86be42,
        'data': _0x343e7c
      });
      if (rpc_intercept) _0x540ccf = true;
      if (rpc_record && (_0x550b80 && rpc_exclude || !_0x550b80)) {
        const _0x14e603 = getResource() + '/NoveXare/PyRpc_Record.json';
        const _0x3341d4 = JSON['parse'](抱琵琶半遮(_0x14e603));
        _0x3341d4[_0x3341d4['length']] = {
          'packet_hex': _0x55efd0,
          'packet_format': 六幺大弦嘈(_0x55efd0),
          'packet_str': 左迁九江郡(_0x702274),
          'packet_bin': _0x343e7c,
          'time': Date['now'](),
          'id': _0x86be42,
          'type': 'Send',
          'keword': rpc_sendBlack,
          'global_keyword': rpc_black,
          'intercept': _0x540ccf
        };
        File['write'](_0x14e603, JSON['stringify'](_0x3341d4, null, 0x4));
      }
      let _0x351194 = 'Null';
      if (modes['rpc_mode'] === 0x0) _0x351194 = 左迁九江郡(_0x702274);
      if (modes['rpc_mode'] === 0x1) _0x351194 = _0x55efd0;
      if (modes['rpc_mode'] === 0x2) _0x351194 = 六幺大弦嘈(_0x55efd0);
      if (modes['rpc_mode'] === 0x3) _0x351194 = JSON['stringify'](_0x702274);
      for (let _0x5a8358 of rpc_config) {
        if (typeof _0x5a8358 === 'object') {
          if (_0x5a8358['match_mode'] === 0x0 && _0x351194['includes'](_0x5a8358['packet'])) _0x351194 = remarks;
          if (_0x5a8358['match_mode'] === 0x1 && _0x351194['includes'] === _0x5a8358['packet']) _0x351194 = remarks;
        } else continue;
      }
      let _0x1787e4 = _0x540ccf ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
      if (rpc_tip && !_0x550b80 && (rpc_showDisintercept && !_0x540ccf || rpc_showIntercept && _0x540ccf)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x86be42 + '\n' : '') + _0x351194 + _0x1787e4, '§r');
      return _0x540ccf;
    }
  }
  function onEntityBehaviorEvent(_0x3e7622, _0x1ad9d6, _0x469330) {
    if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x3e7622 + ' 实体昵称:' + getEntityName(_0x3e7622) + ' 行为ID:' + _0x1ad9d6 + ' 行为数据:' + _0x469330, '§r');
    if (_0x1ad9d6 === 0x27 && _0x3e7622 === av_id) av_id = null;
    if (_0x1ad9d6 === 0x3 && attack_list['includes'](_0x3e7622)) {
      if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
      if (KillMessage) {
        if (km_hide) {
          for (let _0x2e4afc = 0x0; _0x2e4afc < 0x32; _0x2e4afc++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x3e7622) + ' 死了');
          executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
        } else sendChatMessage(km_text);
      }
      归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x3e7622), '§r');
      if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
      kills++;
      mini_tick = 0x0;
      if (FunnyKill && mini_kills < 0xa) mini_kills++;
      setTimeout(() => {
        if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
        if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
      }, mini_delay * 0x3e8);
    }
    if (_0x1ad9d6 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x3e7622);
    if (_0x1ad9d6 === 0x2 && attack_list['includes'](_0x3e7622)) real_attack++;
    if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x1ad9d6 === 0x4 && _0x3e7622 != self_id)) {
      let _0x1e3193 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x3e7622;
      if (声暗问弹者(_0x1e3193, self_id) < fb_range) 江头夜送客(_0x3e7622, Swing);
      fb_ishurt = false;
    }
    if (_0x1ad9d6 === 0x2 && _0x3e7622 === self_id) {
      let _0x56e1d8 = getEntityMotion(self_id);
      if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
      if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
      if (ActivitySender) sendChatMessage('我正在被攻击');
      if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x469330, '§r');
      if (HurtJump) setMotion(_0x56e1d8['x'], hj_height, _0x56e1d8['z']);
      if (AntiKB) {
        let _0x470a10 = akb_hor / 0x64;
        let _0x8afd37 = akb_y / 0x64;
        setMotion(_0x56e1d8['x'] - _0x470a10 * _0x56e1d8['x'], _0x56e1d8['y'] - _0x8afd37 * _0x56e1d8['y'], _0x56e1d8['z'] - _0x470a10 * _0x56e1d8['z']);
      }
      if (AirStuck) as_time_t = 0x0;
      if (FightBack && _0x469330 == 0x2) fb_ishurt = true;
    }
    if (_0x1ad9d6 === 0x2) attack_list = [];
  }
  function onPlayerDestroyBlockEvent(_0x3f2c00, _0x400bc2, _0x32955e, _0x1cad6f, _0x5a93c4) {
    const _0x2f03b3 = getCarried(_0x3f2c00);
    const _0x3f0103 = getBlock(_0x400bc2, _0x32955e, _0x1cad6f);
    if (_0x3f0103['namespace'] == 'minecraft:air') return;
    if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
    if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x3f0103['namespace'] + ', §rID:' + _0x3f0103['id'] + ', 方块选择面:' + _0x5a93c4 + ', §r特殊值:' + _0x3f0103['aux'] + '\n手持:' + _0x2f03b3['name'] + '-[' + _0x2f03b3['namespace'] + '], 特殊值:' + _0x2f03b3['aux'] + '\n坐标:[' + _0x400bc2 + ', ' + _0x32955e + ', ' + _0x1cad6f + ']', '§r');
    if (ActivitySender) sendChatMessage('我正在破坏' + _0x400bc2 + ' ' + _0x32955e + ' ' + _0x1cad6f + '的' + _0x3f0103['namespace']);
    if (Miner && (_0x3f0103['namespace'] === mine_name || !mine_destroy)) {
      if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x1f3b96 => _0x3f0103['namespace']['includes'](_0x1f3b96))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x1ce941 => !_0x3f0103['namespace']['includes'](_0x1ce941)))) {
        mine_destroy = true;
        mine_name = _0x3f0103['namespace'];
      }
      if (mine_destroy && mine_name != _0x3f0103['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x3f0103['namespace'];
      if (getDistance(self_pos, {
        'x': _0x400bc2,
        'y': _0x32955e,
        'z': _0x1cad6f
      }) <= mine_distance && mine_destroy) {
        let _0x4c1f64 = [[_0x400bc2 + 0x1, _0x32955e, _0x1cad6f], [_0x400bc2 - 0x1, _0x32955e, _0x1cad6f], [_0x400bc2, _0x32955e, _0x1cad6f + 0x1], [_0x400bc2, _0x32955e, _0x1cad6f - 0x1], [_0x400bc2, _0x32955e + 0x1, _0x1cad6f], [_0x400bc2, _0x32955e - 0x1, _0x1cad6f]];
        for (p of _0x4c1f64) {
          const _0xa248b2 = getBlock(p[0x0], p[0x1], p[0x2]);
          if (_0xa248b2['namespace'] != 'minecraft:air' && _0x3f0103['namespace'] === mine_name) mine_list['push'](p);
        }
      }
    }
  }
  function onReadyEvent() {
    if (ShowGameInfo) {
      const _0x1b1ed4 = getWorldData();
      if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x1b1ed4['levelName'] + ' ，难度:' + _0x1b1ed4['difficulty'] + ' 游戏模式:' + _0x1b1ed4['gameType'] + ' 游戏时间:' + _0x1b1ed4['time'] + ' 随机刻速度:' + _0x1b1ed4['randomTickSpeed'], '§r');
    }
  }
  function onPlayerBuildBlockEvent(_0x508634, _0x1773b5, _0x238dcb, _0x436394, _0x170dfa) {
    if (PVPDaLao) setTitle('又或是建筑大佬');
    if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
    const _0x22b60a = getCarried(_0x508634);
    const _0x217869 = getBlock(_0x1773b5, _0x238dcb, _0x436394);
    if (ActivitySender) sendChatMessage('我正在放置' + _0x22b60a['name']);
    if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x217869['namespace'] + ', §rID:' + _0x217869['id'] + ', 方块选择面:' + _0x170dfa + ', §r特殊值:' + _0x217869['aux'] + '\n手持:' + _0x22b60a['name'] + '-[' + _0x22b60a['namespace'] + '], 特殊值:' + _0x22b60a['aux'] + '\n坐标:[' + _0x1773b5 + ', ' + _0x238dcb + ', ' + _0x436394 + ']', '§r');
    if (ClickTP) 欲语迟移船(_0x1773b5, _0x238dcb + 0x2, _0x436394);
    const _0x1a48e8 = ChestAura && ca_rot && _0x217869['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x508634) || ClickRot;
    if (_0x1a48e8) {
      let _0x1aa05c = {
        'x': _0x1773b5,
        'y': _0x238dcb,
        'z': _0x436394
      };
      const _0x567698 = 酒欲饮无管(getEntityMotion(_0x508634), getPos(_0x508634), 0x14);
      let _0x29687a = 弦弦掩抑声(_0x567698, _0x1aa05c, 'pitch_pos');
      let _0x44c289 = 弦弦掩抑声(_0x567698, _0x1aa05c, 'yaw_pos');
      于穆曹二善(_0x29687a, _0x44c289);
    }
    if (GetCommand && _0x217869['namespace']['includes']('command_block')) {
      let _0x5a9b00 = getBlockEntityNBT(_0x1773b5, _0x238dcb, _0x436394);
      let _0x362ecb = 琵琶行浔阳(_0x5a9b00, 'Command:"', '",Cu');
      let _0x386f2c = 琵琶行浔阳(_0x5a9b00, 'auto:', 'b,c') === '1' ? '是' : '否';
      let _0x11b936 = 琵琶行浔阳(_0x5a9b00, 'TickDelay:', ',Tr');
      归客不发寻(0x0, 'Cmd', '坐标:[' + _0x1773b5 + ' ' + _0x238dcb + ' ' + _0x436394 + '] 指令:' + _0x362ecb + ' 是否自动:' + _0x386f2c + ' 执行延迟:' + _0x11b936, '§r');
      return true;
    }
    if (BlockTagCopy) {
      if (btc_pos === null) btc_pos = [_0x1773b5, _0x238dcb, _0x436394];else {
        setBlockEntityData(_0x1773b5, _0x238dcb, _0x436394, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
        btc_pos = null;
        归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
      }
      return true;
    }
    if (FakeBuilder) {
      let _0x389eb9 = [[_0x1773b5, _0x238dcb - 0x1, _0x436394], [_0x1773b5, _0x238dcb + 0x1, _0x436394], [_0x1773b5, _0x238dcb, _0x436394 - 0x1], [_0x1773b5, _0x238dcb, _0x436394 + 0x1], [_0x1773b5 - 0x1, _0x238dcb, _0x436394], [_0x1773b5 + 0x1, _0x238dcb, _0x436394]];
      setBlock(_0x389eb9[_0x170dfa][0x0], _0x389eb9[_0x170dfa][0x1], _0x389eb9[_0x170dfa][0x2], _0x22b60a['namespace'], _0x22b60a['aux']);
      return true;
    }
    if (ClickBlock) return setBlock(_0x1773b5, _0x238dcb, _0x436394, _0x22b60a['namespace'], _0x22b60a['aux']);
    if (ClickDestroy && !AutoDestroy) 慢捻抹复挑({
      'x': _0x1773b5,
      'y': _0x238dcb,
      'z': _0x436394
    });
    if (AutoBed && _0x217869['namespace'] === 'minecraft:bed' && !ab_running) {
      归客不发寻(0x0, 'Tip', '请手持方块', '§r');
      let _0xbda073 = [[_0x1773b5 + 0x1, _0x238dcb, _0x436394], [_0x1773b5 - 0x1, _0x238dcb, _0x436394], [_0x1773b5, _0x238dcb, _0x436394 + 0x1], [_0x1773b5, _0x238dcb, _0x436394 - 0x1], [_0x1773b5, _0x238dcb + 0x1, _0x436394]];
      ab_running = true;
      for (let _0xbd5362 of _0xbda073) {
        const _0x33f02c = getBlock(_0xbd5362[0x0], _0xbd5362[0x1], _0xbd5362[0x2]);
        if (_0x33f02c['namespace'] === 'minecraft:air') 事今漂沦憔(_0xbd5362[0x0], _0xbd5362[0x1], _0xbd5362[0x2]);
      }
      ab_running = false;
    }
    if (Breaker && (_0x22b60a['namespace']['includes']('sword') || _0x22b60a['namespace']['includes']('pickaxe'))) {
      if (bk_origin) {
        callModule(0xf, '{"value":true}');
        setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
        return true;
      }
      const _0x30b176 = Math['round'](bk_range);
      _0x56cca4: for (let _0x4e68c8 = -_0x30b176; _0x4e68c8 <= _0x30b176; _0x4e68c8++) {
        for (let _0x321280 = -_0x30b176; _0x321280 < _0x30b176; _0x321280++) {
          for (let _0x411539 = -_0x30b176; _0x411539 <= _0x30b176; _0x411539++) {
            let _0x77c071 = _0x1773b5 + _0x4e68c8;
            let _0x3efb7c = _0x238dcb + _0x321280;
            let _0x4ef167 = _0x436394 + _0x411539;
            let _0x3f24a0 = getBlock(_0x77c071, _0x3efb7c, _0x4ef167);
            if (bk_bed && _0x3f24a0['namespace'] === 'minecraft:bed' || bk_chest && _0x3f24a0['namespace'] === 'minecraft:chest') {
              let _0x2ec357 = getBlock(_0x77c071, _0x3efb7c + 0x1, _0x4ef167);
              if (_0x2ec357['namespace'] != 'minecraft:air' && bk_up) _0x3efb7c += 0x1;
              if (bk_tool && _0x2ec357['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0x508634, 枫叶荻花秋(_0x508634, '_pickaxe'));
              if (bk_tool && _0x2ec357['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0x508634, 枫叶荻花秋(_0x508634, '_axe'));
              bk_pos = {
                'ex': _0x77c071,
                'ey': _0x3efb7c,
                'ez': _0x4ef167
              };
              bk_timer = 0x0;
              break _0x56cca4;
            }
          }
        }
      }
    }
    if (bc_select && BlockClicker) {
      ac_pos['push']({
        'x': _0x1773b5,
        'y': _0x238dcb,
        'z': _0x436394
      });
      归客不发寻(0x0, 'Tip', '已添加[' + _0x1773b5 + ', ' + _0x238dcb + ', ' + _0x436394 + ']', '§r');
      return true;
    }
    if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
      const _0x40cf98 = getCameraRotation();
      for (let _0x5ec066 = 0x0; _0x5ec066 < fb_len + 0x1; _0x5ec066++) fb_list['push'](忽闻水上琵(_0x5ec066, 面转轴拨弦(_0x508634), {
        'pitch': 0x0,
        'yaw': _0x40cf98['yaw'] > 0x0 ? 0xb4 - _0x40cf98['yaw'] : -0xb4 - _0x40cf98['yaw']
      }));
      fb_success = false;
      return true;
    }
    if (ca_check && _0x217869['namespace'] === 'minecraft:chest') chestStates['click'] = true;
  }
  function onKeyboardDownEvent(_0x1a6961) {
    if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x1a6961, '§r');
    if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x1a6961] !== 'undefined') 委身为贾人(nx_keys[_0x1a6961], !globalThis[nx_keys[_0x1a6961]]);
    if (nx_isBind != null && _0x1a6961 != 0x42) {
      nx_keys[_0x1a6961] = nx_isBind;
      nx_cfg['key_binds'] = nx_keys;
      归客不发寻(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x1a6961, '§r');
      nx_isBind = null;
    }
  }
  function onKeyboardUpEvent(_0x4a6977) {
    if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x4a6977, '§r');
  }
  function onSendServerPacketEvent(_0x1f51d0, _0x4bc828) {
    if (NoClip && nc_blink && (_0x1f51d0 === 0x13 || _0x1f51d0 === 0x90) && Object['keys'](nc_pos)['length'] > 0x0) {
      if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;else return true;
    }
    if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
    if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x1f51d0 === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x1 && _0x1f51d0 === 0x13) return true;
    if (FreeCam && modes['fc_mode'] === 0x2 && _0x1f51d0 === 0xa1) return true;
    if (FreeCam && modes['fc_mode'] === 0x3 && _0x1f51d0 === 0x90) return true;
    if (FreeCam && modes['fc_mode'] === 0x0) return true;
    if (ShowSendPacket) {
      const _0xfc429e = PacketTranslate[PacketTranslate['map'](_0x52dcf2 => _0x52dcf2['id'])['indexOf'](_0x1f51d0)]['text'];
      if (sp_statistic) {
        if (typeof PacketTmp['send'][_0x4bc828] === 'undefined') PacketTmp['send'][_0x4bc828] = {
          'id': _0x1f51d0,
          'Translate': _0xfc429e,
          'count': 0x1
        };
        PacketTmp['send'][_0x4bc828]['count']++;
      }
      const _0x54d526 = PacketCfg['send'];
      const {
        ignore,
        intercept
      } = PacketCfg['send'];
      let _0x376219 = [];
      if (sp_id) _0x376219['push'](_0x1f51d0);
      if (sp_name) _0x376219['push'](_0x4bc828);
      if (sp_trans) _0x376219['push'](_0xfc429e);
      let _0xff85e5 = sp_intercept && (intercept['includes'](_0x1f51d0) || intercept['includes'](_0x4bc828));
      if (!sp_ignore || !(ignore['includes'](_0x1f51d0) || ignore['includes'](_0x4bc828))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x376219['join'](' - ') + (_0xff85e5 ? '\n§e已拦截数据包' : ''), '§r');
      return _0xff85e5;
    }
  }
  function onReceiveServerPacketEvent(_0x51bb7d, _0xb3e102) {
    if (ShadowBoomer && _0x51bb7d == 0x19 && sb_hide) return true;
    if (KillAura && ka_close && _0x51bb7d == 0x55) {
      KillAura = false;
      归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
    }
    if ((TimePause || AvoidAttack) && _0x51bb7d === 0x13) return true;
    if (NoAnyReceive) return true;
    if (AntiText && _0x51bb7d === 0x9) at_current++;
    if ((KickAura || AntiText && at_current > at_max_text) && _0x51bb7d === 0x9) return true;
    if (ModifyTime && _0x51bb7d === 0xa) return true;
    if (ca_check && _0x51bb7d === 0x2f) chestStates['packet'] = true;
    if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x51bb7d === 0x13) return true;
    if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
    if (FreeCam && modes['fc_mode'] === 0x4 && _0x51bb7d === 0x12) return true;
    if (NoCamShake && _0x51bb7d === 0x1b) return true;
    if (ShowReceivePacket) {
      const _0x20aee2 = PacketTranslate[PacketTranslate['map'](_0x42ac9d => _0x42ac9d['id'])['indexOf'](_0x51bb7d)]['text'];
      if (srp_statistic) {
        if (typeof PacketTmp['receive'][_0xb3e102] === 'undefined') PacketTmp['receive'][_0xb3e102] = {
          'id': _0x51bb7d,
          'Translate': _0x20aee2,
          'count': 0x1
        };
        PacketTmp['receive'][_0xb3e102]['count']++;
      }
      const _0x3974df = PacketCfg['receive'];
      const {
        ignore,
        intercept
      } = PacketCfg['receive'];
      let _0x19c857 = [];
      if (srp_id) _0x19c857['push'](_0x51bb7d);
      if (srp_name) _0x19c857['push'](_0xb3e102);
      if (srp_trans) _0x19c857['push'](_0x20aee2);
      let _0x4caee5 = srp_intercept && (intercept['includes'](_0x51bb7d) || intercept['includes'](_0xb3e102));
      if (!srp_ignore || !(ignore['includes'](_0x51bb7d) || ignore['includes'](_0xb3e102))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x19c857['join'](' - ') + (_0x4caee5 ? '\n§e已拦截数据包' : ''), '§r');
      return _0x4caee5;
    }
    return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x51bb7d === 0x9;
  }
  function onTouchMotionDownEvent(_0x5dc7dd, _0x9d515a, _0x17afb3) {
    if (SafeAttack) {
      const _0x599090 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x945925 = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
      const _0x5928cf = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      const _0x553ba3 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
      if (at_lists['length'] > 0x0 && 声思似诉平(self_id, at_lists[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, at_lists[0x0]) < sa_range && _0x9d515a > _0x599090 && _0x9d515a < _0x945925 && _0x17afb3 > _0x5928cf && _0x17afb3 < _0x553ba3) 江头夜送客(at_lists[0x0], Swing);
    }
    if (ClickSwing) swingArm();
    isClicking = true;
    click_num++;
  }
  function onContainerItemMoveEvent(_0x3652a3, _0x582668) {
    const _0x334336 = 音铮铮然有(_0x582668);
    if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x334336['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x334336['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
    if (ChestStealer && (!cs_sort || _0x3652a3 > cs_sort) && cs_current < cs_maxCount) {
      let _0x1ac037 = cs_black['length'] === 0x0 || cs_black['some'](_0x4652c2 => _0x334336['namespace']['includes'](_0x4652c2));
      if (cs_white['length'] !== 0x0 && cs_white['some'](_0x558535 => _0x334336['namespace']['includes'](_0x558535))) _0x1ac037 = false;
      if (_0x3652a3 < cs_min && _0x3652a3 > cs_max) _0x1ac037 = false;
      if (_0x334336['attackDamage'] !== 0x0 && _0x334336['attackDamage'] < cs_min_damage) _0x1ac037 = false;
      if (_0x334336['damage'] !== 0x0 && _0x334336['damage'] < cs_min_lasting) _0x1ac037 = false;
      if (!cs_weapon && _0x334336['attackDamage'] > 0x0 && _0x334336['damage'] > 0x0) _0x1ac037 = false;
      if (!cs_armor && _0x334336['attackDamage'] === 0x0 && _0x334336['damage'] > 0x0) _0x1ac037 = false;
      if (!cs_other && _0x334336['attackDamage'] === 0x0 && _0x334336['damage'] === 0x0) _0x1ac037 = false;
      if (cs_sort) cs_sort = _0x3652a3;
      if (_0x1ac037) cs_timer = 0x0;
      if (_0x1ac037) cs_current++;
      return _0x1ac037;
    }
    if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x3652a3 + '\n§e物品NBT数据: §r' + _0x582668, '§r');
  }
  function onPlayerAuthInputEvent(_0x17df34) {
    if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x17df34.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x17df34.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x17df34['pos']['x']['toFixed'](0x2) + ', ' + _0x17df34['pos']['y']['toFixed'](0x2) + ',' + _0x17df34['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x17df34['delta']['x']['toFixed'](0x2) + ', ' + _0x17df34['delta']['y']['toFixed'](0x2) + ', ' + _0x17df34['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x17df34['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x17df34['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x17df34['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x17df34['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x17df34['flags']), '§r');
  }
  function onSAuthLoginRequestEvent(_0xb82b2e) {
    if (DumpRequestSauth) {
      File['write'](nx_paths + '/SauthRequest.json', _0xb82b2e);
      showToast('已导出请求体');
    }
    if (Sauths != null && Sauths != '' && !sl_hook) {
      let _0x4edb0b = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
      const _0x3d5974 = _0xb82b2e['replace'](琵琶行浔阳(_0xb82b2e, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x4edb0b)['sauth_json']));
      showToast('已拦截替换Sauth');
      return _0x3d5974['replace'](/转义/g, '\\"');
    }
  }
  function onSAuthLoginResponseEvent(_0x2a3843) {
    if (DumpResponseSauth) {
      File['write'](nx_paths + '/SauthResponse.json', _0x2a3843);
      showToast('已导出响应体');
    }
    if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
  }
  function onSAuthJsonHookEvent(_0x16106d) {
    if (DumpCookieSauth) {
      File['write'](nx_paths + '/SauthCookie.json', _0x16106d);
      showToast('已导出本账号Cookie');
    }
    if (Sauths != null && Sauths != '' && sl_hook) {
      showToast('已拦截替换Sauth');
      let _0x4d64a9 = JSON['parse'](Sauths);
      if (typeof _0x4d64a9['sauth_json'] !== 'undefined') _0x4d64a9 = _0x4d64a9['sauth_json'];
      return _0x4d64a9;
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