/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 11  17：13：49
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b11§f171349§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x556a14, _0x297270, _0x28ced9) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x556a14,
            'y': _0x297270,
            'z': _0x28ced9
        },
        'type': 0x11
    });
    const getPos = _0x42b878 => {
        let _0x12c920 = getEntityPos(_0x42b878);
        if (_0x12c920) _0x12c920['y'] += getPos_offset;
        return _0x12c920 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x5953c0, _0x362f82, _0xee5090) => sendPlayerAuthInput({
        'inputMode': 0x2,
        'playMode': 0x0,
        'pos': {
            'x': _0x5953c0,
            'y': _0x362f82,
            'z': _0xee5090
        }
    });
    const 左迁九江郡 = _0x2491e8 => {
        const _0x413314 = new Uint8Array(_0x2491e8);
        let _0x2126b1 = '';
        for (let _0x500fec = 0x0; _0x500fec < _0x413314['length'];) {
            let _0x221262 = _0x413314[_0x500fec++];
            if (_0x221262 <= 0x7f) _0x2126b1 += String['fromCharCode'](_0x221262);
            else if (_0x221262 >> 0x5 === 0x6) {
                let _0x32e930 = _0x413314[_0x500fec++];
                _0x2126b1 += String['fromCharCode']((_0x221262 & 0x1f) << 0x6 | _0x32e930 & 0x3f);
            } else if (_0x221262 >> 0x4 === 0xe) {
                let _0x1ab6ba = _0x413314[_0x500fec++];
                let _0x2a3aca = _0x413314[_0x500fec++];
                _0x2126b1 += String['fromCharCode']((_0x221262 & 0xf) << 0xc | (_0x1ab6ba & 0x3f) << 0x6 | _0x2a3aca & 0x3f);
            } else if (_0x221262 >> 0x3 === 0x1e) {
                let _0x10844a = _0x413314[_0x500fec++];
                let _0x368bcf = _0x413314[_0x500fec++];
                let _0x5ee169 = _0x413314[_0x500fec++];
                let _0x3abee6 = (_0x221262 & 0x7) << 0x12 | (_0x10844a & 0x3f) << 0xc | (_0x368bcf & 0x3f) << 0x6 | _0x5ee169 & 0x3f;
                _0x2126b1 += String['fromCodePoint'](_0x3abee6);
            }
        }
        return _0x2126b1;
    };
    const 司马明年秋 = (_0xada7c7, _0x4f6528, _0x17bdd1, _0x3a3fcd) => {
        let _0x59646b = _0xada7c7['indexOf'](_0x4f6528) + _0x4f6528['length'];
        let _0x30f955 = _0xada7c7['indexOf'](_0x17bdd1, _0x59646b);
        if (typeof _0x3a3fcd !== 'undefined' && _0xada7c7['indexOf'](_0x3a3fcd, _0x59646b) < _0x30f955 && _0xada7c7['indexOf'](_0x3a3fcd, _0x59646b) != -0x1) _0x30f955 = _0xada7c7['indexOf'](_0x3a3fcd, _0x59646b);
        if (_0x59646b === -0x1 || _0x30f955 === -0x1) return null;
        return _0xada7c7['substring'](_0x59646b, _0x30f955);
    };
    const 送客湓浦口 = _0x28b9df => {
        let _0x176868 = _0x28b9df['split']('');
        let _0x3eb883 = '';
        let _0x1b0968 = '4c6e2a3b195d' ['split']('');
        for (let _0x55c155 in _0x176868) _0x3eb883 += '§' + _0x1b0968[_0x55c155 % _0x1b0968['length']] + _0x176868[_0x55c155];
        return _0x3eb883;
    };
    const 闻舟中夜弹 = _0x519f53 => {
        if (_0x519f53['startsWith']('0x')) _0x519f53 = _0x519f53['slice'](0x2);
        const _0x5234af = [];
        for (let _0x344e8e = 0x0; _0x344e8e < _0x519f53['length']; _0x344e8e += 0x2) {
            const _0xb65d44 = parseInt(_0x519f53['slice'](_0x344e8e, _0x344e8e + 0x2), 0x10);
            _0x5234af['push'](_0xb65d44);
        }
        return new Uint8Array(_0x5234af);
    };
    const 琵琶者听其 = (_0x3e5046, _0x42dd0c, _0x22117d = 0x0) => {
        if (_0x22117d == 0x1) sendRpc(_0x3e5046, 闻舟中夜弹(_0x42dd0c));
        if (_0x22117d == 0x2) sendRpc(_0x3e5046, _0x42dd0c);
        if (_0x22117d == 0x3) {
            const _0x2be19c = new Uint8Array(str['length']);
            for (let _0x18beb6 = 0x0; _0x18beb6 < str['length']; _0x18beb6++) _0x2be19c[_0x18beb6] = str['charCodeAt'](_0x18beb6);
            sendRpc(_0x3e5046, _0x2be19c);
        }
    };
    const 音铮铮然有 = _0xada16d => {
        if (nx_nbts[_0xada16d] !== undefined) return nx_nbts[_0xada16d];
        const _0xf9552 = 司马明年秋(_0xada16d, ',Name:"', '",WasPickedUp');
        if (_0xf9552 === '' || typeof _0xf9552 !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x2c8463 = Number(司马明年秋(_0xada16d, ',aux:', ','));
        const _0x413a17 = Number(司马明年秋(_0xada16d, 'Count:', 'b,D'));
        const _0x202352 = _0xada16d['includes'](',name:"') ? 司马明年秋(_0xada16d, ',name:"', '",') : _0xf9552['replace']('minecraft:', '');
        const _0x39af93 = _0xada16d['includes'](',netId:') ? Number(司马明年秋(_0xada16d, ',netId:', '}')) : 0x0;
        const _0x449e81 = _0xada16d['includes']('maxDamage') ? Number(司马明年秋(_0xada16d, ',maxDamage:', ',')) : 0x0;
        const _0x255240 = _0xada16d['includes']('attackDamage') ? Number(司马明年秋(_0xada16d, 'attackDamage:', ',')) : 0x1;
        const _0x1dfd52 = _0xada16d['includes']('customColor') ? 司马明年秋(_0xada16d, 'customColor:', '}', ',') : '';
        const _0xc9f433 = _0xada16d['includes']('ench:[{') ? ('[{' + 司马明年秋(_0xada16d, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x52ffb2 = _0xada16d['startsWith']('{Block:');
        const _0xe2c737 = {
            'name': _0x202352,
            'namespace': _0xf9552,
            'aux': _0x2c8463,
            'damage': _0x449e81,
            'attackDamage': _0x255240,
            'count': _0x413a17,
            'color': _0x1dfd52,
            'isBlock': _0x52ffb2,
            'id': _0x39af93,
            'enchants': JSON['parse'](_0xc9f433)
        };
        nx_nbts[_0xada16d] = _0xe2c737;
        return _0xe2c737;
    };
    const 京都声问其 = _0x1b7a78 => {
        const _0x3affe1 = getEntitySize(_0x1b7a78);
        const _0x1eda45 = getEntityMotion(_0x1b7a78);
        const _0x1a2e61 = getPos(_0x1b7a78);
        const _0x386d09 = getEntityName(_0x1b7a78);
        const _0xa6d35c = getEntityNamespace(_0x1b7a78);
        const _0x353e45 = 声暗问弹者(self_id, _0x1b7a78);
        const _0x351ab7 = getCarried(_0x1b7a78);
        const _0x4d232e = 瑟瑟主人下(_0x1b7a78);
        const _0x285bea = getEntityAttribute(_0x1b7a78, 'minecraft:health');
        const _0x440af0 = getEntityAttribute(_0x1b7a78, 'minecraft:movement');
        const _0x207559 = getEntityTypeId(_0x1b7a78);
        const _0x43492d = getEntityTarget(_0x1b7a78);
        const _0x3e26eb = getPlayerInventorySize(_0x1b7a78);
        const _0x3f8ac3 = getPlayerHotBarSize(_0x1b7a78);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x1b7a78);
        const _0x42e658 = _0x3bd015 => _0x3bd015['toFixed'](0x2);
        const _0x3a3a9d = ['唯一ID:' + _0x1b7a78 + ' 昵称:' + _0x386d09 + '§r 实体命名空间:' + _0xa6d35c + ' 水平碰撞箱:' + _0x42e658(_0x3affe1['x']) + ' 垂直碰撞箱:' + _0x42e658(_0x3affe1['y']) + ' Mot速度:' + _0x4d232e, 'ability速度:[max:' + _0x440af0['max'] + ', min:' + _0x440af0['min'] + ', current:' + _0x440af0['current'] + '] 血量:[max:' + _0x285bea['max'] + ', min:' + _0x285bea['min'] + ', current:' + _0x285bea['current'] + ']', '手持:[id:' + _0x351ab7['id'] + ', namespace:' + _0x351ab7['namespace'] + ', name:' + _0x351ab7['name'] + '§r, aux:' + _0x351ab7['aux'] + '] 距离:' + _0x353e45 + ' 实体类型:' + _0x207559, '仰俯角:' + _0x42e658(pitch) + '° 偏航角:' + _0x42e658(yaw) + '° 仇恨目标:' + getEntityName(_0x43492d) + '^' + _0x43492d, '移动值:[' + _0x42e658(_0x1eda45['x']) + ', ' + _0x42e658(_0x1eda45['y']) + ', ' + _0x42e658(_0x1eda45['z']) + '] 坐标值:[' + _0x42e658(_0x1a2e61['x']) + ', ' + _0x42e658(_0x1a2e61['y']) + ', ' + _0x42e658(_0x1a2e61['z']) + ']', '背包容量:' + _0x3e26eb + ' 物品栏容量:' + _0x3f8ac3];
        return _0x3a3a9d['join']('\n');
    };
    const getCarried = _0x1d5e3f => 音铮铮然有(getEntityCarriedItem(_0x1d5e3f));
    const getOffhand = _0x16568e => 音铮铮然有(getEntityOffhandItem(_0x16568e));
    const getInventory = (_0x54173a, _0x5857a2) => 音铮铮然有(getPlayerInventoryItem(_0x54173a, _0x5857a2));
    const 人本长安倡 = (_0x13b76b, _0x366c33, _0x3b9fc6, _0x3d192c = false, _0x2f2f80 = false) => {
        let _0x380d11 = {
            'x': _0x13b76b,
            'y': _0x366c33,
            'z': _0x3b9fc6
        };
        const _0x78f871 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x6054fa = _0x5d08eb => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x5d08eb['map'](_0x1f18e9 => ({
                'type': _0x1f18e9,
                'pos': _0x380d11,
                'value': 0x1
            }))
        });
        const _0x4b95c8 = _0x42159b => sendPlayerAction({
            'id': self_id,
            'pos': _0x380d11,
            'type': _0x42159b
        });
        if (_0x3d192c) _0x6054fa(_0x78f871);
        if (_0x2f2f80) _0x78f871['forEach'](_0x917cea => _0x4b95c8(_0x917cea));
    };
    const 女尝学琵琶 = (_0x42c037, _0x1e7442, _0x182340 = true, _0xaf59f2 = false) => {
        if (_0x42c037 === _0x1e7442) return false;
        let _0xa7235e = getInventory(self_id, _0x42c037);
        let _0x38b0bd = getInventory(self_id, _0x1e7442);
        if (_0x182340 && _0x1e7442 < 0x9 && _0x38b0bd['namespace'] != 'minecraft:air') {
            for (let _0x4618df = 0x23; _0x4618df > 0x8; _0x4618df--) {
                const _0x1f4efe = getInventory(self_id, _0x4618df);
                if (_0x1f4efe['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x1e7442, _0x4618df);
                    break;
                }
            }
        }
        if (_0xaf59f2) {
            for (var _0x2e35bc = 0x23; _0x2e35bc > 0x0; _0x2e35bc--) {
                const _0x30e2ef = getInventory(self_id, _0x2e35bc);
                if (_0x30e2ef['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x1e7442, _0x2e35bc);
                    break;
                }
            }
        }
        if (_0xa7235e['namespace'] != 'minecraft:air' && _0x38b0bd['namespace'] === 'minecraft:air') moveInventoryItem(_0x42c037, _0x1e7442);
        if (_0xaf59f2 && _0x2e35bc) moveInventoryItem(_0x2e35bc, _0x1e7442);
    };
    const 于穆曹二善 = (_0x4af0ba, _0x49980c) => {
        let _0x5134db = _0x49980c - 0xb4;
        if (_0x4af0ba > 0x5a) _0x4af0ba -= 0x5a;
        if (_0x4af0ba < -0x5a) _0x4af0ba += 0x5a;
        if (_0x5134db > 0xb4) _0x5134db = _0x5134db - 0x168;
        if (_0x5134db < -0xb4) _0x5134db = 0x168 + _0x5134db;
        if (getPlayerViewPerspective() === 0x0 || _0x5134db > 0xb4 || _0x5134db < -0xb4 || _0x4af0ba > 0x5a || _0x4af0ba < -0x5a) return false;
        setEntityBodyRot(self_id, _0x5134db);
        setEntityRot(self_id, _0x4af0ba, _0x5134db);
    };
    const 才年长色衰 = _0x59dba8 => {
        const _0x2c2dc8 = getEntityAttribute(_0x59dba8, 'minecraft:health');
        const _0x2f2ca3 = getPos(_0x59dba8);
        if (typeof _0x2f2ca3 != 'object' || !_0x2f2ca3 || !_0x2f2ca3['x'] || !_0x2f2ca3['y'] || !_0x2f2ca3['z']) return false;
        if (!findEntity(_0x59dba8) && (_0x2c2dc8['max'] === undefined || _0x2c2dc8['min'] === undefined || _0x2c2dc8['current'] === undefined)) return false;
        if (_0x2c2dc8['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x5026bb, _0x35ed1b) => {
        if (typeof globalThis[_0x5026bb] === 'undefined' || globalThis[_0x5026bb] === _0x35ed1b) return;
        globalThis[_0x5026bb] = _0x35ed1b;
        nx_cfg[_0x5026bb] = _0x35ed1b;
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x35ed1b ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x5026bb['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0x35ed1b) 归客不发寻(0x0, _0x5026bb, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x5026bb, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0x5026bb, _0x5026bb + (_0x35ed1b ? ' - Enable' : ' - Disable'), _0x5026bb + (_0x35ed1b ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x5026bb, _0x5026bb + (_0x35ed1b ? ' - Enable' : ' - Disable'), _0x5026bb + (_0x35ed1b ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0x5026bb] !== 'undefined') addCustomArrayList(_0x5026bb, nx_arraylist[_0x5026bb]['CN'], nx_arraylist[_0x5026bb]['EN'], _0x35ed1b);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x5026bb['includes']('_')) addCustomArrayList(_0x5026bb, _0x5026bb, _0x5026bb, _0x35ed1b);
        if (typeof nx_binds[_0x5026bb] !== 'undefined') nx_binds[_0x5026bb]['forEach'](_0x5c4170 => 委身为贾人(_0x5c4170, _0x35ed1b));
        if (typeof nx_raBinds[_0x5026bb] !== 'undefined' && !nx_raBinds[_0x5026bb]['isNX']) callModule(nx_funcid[nx_raBinds[_0x5026bb]['module']], JSON['stringify']({
            'value': _0x35ed1b
        }));
    };
    const 妇遂命酒使 = (_0x8b92c3, _0x504e68, _0x3df453, _0x2b3cbb, _0x2ab180, _0x3bd490 = false, _0x21d90b = {}) => {
        for (let _0x4acb1f = 0x0; _0x4acb1f < _0x2ab180; _0x4acb1f++) addParticle(Number(_0x8b92c3), _0x504e68, _0x3df453, _0x2b3cbb, _0x3bd490 ? _0x21d90b['x'] : _0x504e68, _0x3bd490 ? _0x21d90b['y'] : _0x3df453, _0x3bd490 ? _0x21d90b['z'] : _0x2b3cbb, 0x1, _0x3bd490);
    };
    const 快弹数曲曲 = () => {
        const _0x4b8c0a = getEntityCarriedItem(self_id);
        const _0x1b4666 = getPos(self_id);
        if (!_0x4b8c0a['includes']('count:0')) buildBlock(self_id, _0x1b4666['x'], _0x1b4666['y'], _0x1b4666['z'], 0x6);
    };
    const 罢悯然自叙 = _0x39b434 => {
        const _0x59717a = getInventory(self_id, _0x39b434);
        const _0x5c9cf8 = 迁谪意因为(self_id, _0x39b434);
        const _0x40b266 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x59717a['namespace'] != 'minecraft:air' && _0x59717a['count'] > 0x0 && _0x40b266['includes'](_0x5c9cf8) && selectPlayerInventorySlot(self_id, _0x39b434)) {
            const _0xffd722 = getPlayerSelectItemSlot(self_id);
            if (_0xffd722 === _0x39b434) 快弹数曲曲();
        }
    };
    const 少小时欢乐 = (_0x50c772, _0xffb932, _0x49e163, _0xea719f) => {
        let _0x47ad6e = _0xffb932 > 0x0;
        _0xffb932 = Math['abs'](_0xffb932);
        let _0x1663da = _0x49e163 * Math['cos'](_0xffb932 * Math['PI'] / 0xb4);
        let _0x332a18 = _0x49e163 * Math['sin'](_0xffb932 * Math['PI'] / 0xb4);
        let _0x2a9449 = _0x332a18 / _0xea719f;
        let _0x272e5c = _0xea719f * (_0x2a9449 * _0x2a9449) * 0.5;
        let _0x1f78a2 = _0x1663da * _0x2a9449;
        let _0x3f76b8 = -_0x272e5c / (_0x1f78a2 * _0x1f78a2);
        return {
            'data': _0x3f76b8 * Math['pow'](_0x50c772 - (_0x47ad6e ? -_0x1f78a2 : _0x1f78a2), 0x2) + _0x272e5c,
            'bool': _0x47ad6e
        };
    };
    const getLocal = _0x206b39 => typeof _0x206b39 === 'undefined' || _0x206b39 === null ? getLocalPlayerUniqueID() : _0x206b39;
    const 事今漂沦憔 = (_0x1e980d, _0x35b674, _0x49f00f) => {
        const _0x384f75 = [
            [_0x1e980d, _0x35b674 + 0x1, _0x49f00f],
            [_0x1e980d, _0x35b674 - 0x1, _0x49f00f],
            [_0x1e980d, _0x35b674, _0x49f00f + 0x1],
            [_0x1e980d, _0x35b674, _0x49f00f - 0x1],
            [_0x1e980d + 0x1, _0x35b674, _0x49f00f],
            [_0x1e980d - 0x1, _0x35b674, _0x49f00f]
        ];
        _0x384f75['some']((_0x545e8c, _0x3b424d) => {
            const _0x1ea25c = getBlock(_0x545e8c[0x0], _0x545e8c[0x1], _0x545e8c[0x2]);
            if (_0x1ea25c['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x545e8c[0x0], _0x545e8c[0x1], _0x545e8c[0x2], _0x3b424d);
        });
    };
    const 湖间予出官 = (_0x1cf257, _0x26d095) => {
        const _0x2468f3 = getPos(self_id);
        sendSound(_0x1cf257, _0x2468f3['x'], _0x2468f3['y'], _0x2468f3['z'], _0x26d095);
    };
    const 二年恬然自 = (_0x345286, _0x4dbc0f, _0x3c477c) => {
        const _0x790ed5 = getPos(self_id);
        motion_list['push']([_0x345286 - _0x790ed5['x'], _0x4dbc0f - _0x790ed5['y'], _0x3c477c - _0x790ed5['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x4bab45, _0x535c69) => {
        let _0x1eec55 = _0x4bab45 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x4bab45);
        if (typeof _0x535c69 !== 'undefined') _0x1eec55['namespace'] = _0x535c69;
        return Array['from']({
            'length': 0x24
        }, (_0x488782, _0x1b9380) => getInventory(self_id, _0x1b9380))['filter'](_0x5ec07b => _0x5ec07b['namespace'] === _0x1eec55['namespace'] && (typeof _0x535c69 !== 'undefined' || _0x5ec07b['aux'] === _0x1eec55['aux']))['reduce']((_0x40cac9, _0x5e0f06) => _0x40cac9 + _0x5e0f06['count'], 0x0);
    };
    const 是夕始觉有 = (_0x427cea, _0x3c881a, _0x36e279 = 'hotbar', _0x20d16b = 0x0) => {
        const _0x267fc6 = _0x36e279 == 'hotbar' ? 0x9 : 0x24;
        let _0x31fa45 = Array['from']({
            'length': _0x267fc6
        }, (_0xa9b593, _0x247395) => getInventory(_0x427cea, _0x247395));
        let _0x398c78 = _0x31fa45['some'](_0x2cdd61 => _0x2cdd61['namespace']['includes'](_0x3c881a));
        let _0x40b83b = _0x31fa45['reduce']((_0x3f2a04, _0x437493) => _0x3f2a04 + _0x437493['count'], 0x0);
        return _0x398c78 && _0x40b83b > _0x20d16b;
    };
    const 迁谪意因为 = (_0x4b33b1, _0x12c1bc, _0x47d5bb) => {
        let _0x375547 = _0x12c1bc === -0x1 ? getCarried(_0x4b33b1) : getInventory(_0x4b33b1, _0x12c1bc);
        if (!_0x375547['namespace']['includes']('_') && typeof _0x47d5bb === 'undefined') return 'other';
        let _0x36bde3 = typeof _0x47d5bb === 'undefined' ? _0x375547['namespace']['replace']('minecraft:', '') : _0x47d5bb['replace']('minecraft:', '');
        const _0x44d233 = _0x36bde3['split']('_');
        return _0x44d233[0x1];
    };
    const getEntityMaxDamage = _0x505b37 => Array['from']({
        'length': 0x24
    }, (_0x435c52, _0x416058) => 十六言命曰(_0x505b37, _0x416058))['reduce']((_0x2c8fa1, _0x199872) => Math['max'](_0x2c8fa1, _0x199872), 0x0);
    const 长句歌以赠 = (_0x4212bc, _0x345fa0, _0x213f68 = false) => {
        let _0x3c5077 = _0x213f68 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x22e215 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x150094 = 0x0; _0x150094 < 0x24; _0x150094++) {
            const _0xc2234c = 迁谪意因为(_0x4212bc, _0x150094);
            const _0x324d72 = _0x22e215['indexOf'](_0xc2234c);
            if (_0x324d72 === -0x1) continue;
            const _0x901b17 = 之凡六百一(_0x4212bc, _0x150094);
            if (!_0x213f68 && _0xc2234c === _0x345fa0 && _0x3c5077 < _0x901b17) _0x3c5077 = _0x901b17;
            if (_0x213f68 && _0x3c5077[_0x324d72] < _0x901b17) _0x3c5077[_0x324d72] = _0x901b17;
        }
        return _0x3c5077;
    };
    const 之凡六百一 = (_0x454912, _0x14d9ba, _0xf4ab2f = true, _0x461d30 = true) => {
        let _0x341e9b = _0x14d9ba === -0x1 ? getCarried(_0x454912) : getInventory(_0x454912, _0x14d9ba);
        if (_0x14d9ba < -0x1) _0x341e9b = 音铮铮然有(getPlayerArmorItem(_0x454912, Math['abs'](_0x14d9ba) - 0x2));
        if (_0x341e9b['count'] === 0x0 || _0x341e9b['damage'] === 0x0) return 0x0;
        if (!_0x461d30) return _0x341e9b['damage'];
        let _0xad8729 = 0x0;
        let _0x2dac27 = _0x341e9b['enchants']['findIndex'](_0xd26e5b => _0xd26e5b['id'] === 0x0);
        if (_0x2dac27 > -0x1) _0xad8729 = _0x341e9b['enchants'][_0x2dac27]['lvl'];
        if (!_0xf4ab2f) return 0x1 + _0xad8729 / 0xa;
        return _0x341e9b['damage'] * (0x1 + _0xad8729 / 0xa);
    };
    const 十六言命曰 = (_0x31439b, _0x1b00ca, _0x2fc75 = true, _0x493e43 = true) => {
        let _0x12504a = _0x1b00ca === -0x1 ? getCarried(_0x31439b) : getInventory(_0x31439b, _0x1b00ca);
        if (_0x12504a['count'] === 0x0 || _0x12504a['attackDamage'] === 0x0) return 0x1;
        if (!_0x493e43) return _0x12504a['attackDamage'];
        let _0x166a33 = 0x0;
        let _0x2dc375 = _0x12504a['enchants']['findIndex'](_0x3f888a => _0x3f888a['id'] === 0x9);
        if (_0x2dc375 > -0x1) _0x166a33 = _0x12504a['enchants'][_0x2dc375]['lvl'] * 1.25;
        if (!_0x2fc75) return _0x166a33;
        return _0x12504a['attackDamage'] + _0x166a33;
    };
    const b2s = _0x32edee => _0x32edee ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x2167ef, _0x19da02, _0x3aaa01) => {
        let _0x5ae7a1 = _0x2167ef['split'](_0x19da02)['length'] - 0x1;
        let _0xa76188 = 0x0;
        let _0x599992 = [];
        for (let _0x33546b = 0x0; _0x33546b < _0x5ae7a1; _0x33546b++) {
            let _0x28a94a = _0x2167ef['indexOf'](_0x19da02, _0xa76188) + _0x19da02['length'];
            let _0x45dc68 = _0x2167ef['indexOf'](_0x3aaa01, _0x28a94a);
            if (_0x45dc68 === -0x1 || _0x28a94a === -0x1) break;
            _0xa76188 = _0x45dc68;
            _0x599992['push'](_0x2167ef['substring'](_0x28a94a, _0x45dc68));
        }
        return _0x5ae7a1 > 0x1 ? _0x599992 : _0x599992[0x0];
    };
    const 江头夜送客 = (_0x38ccc2, _0x34ae5a) => {
        if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x38ccc2, _0x34ae5a);
    };
    const 枫叶荻花秋 = (_0x1f0794, _0x5c9a1f, _0x565950, _0x7bac55) => {
        if (typeof _0x565950 === 'undefined') _0x565950 = -0x1;
        if (typeof _0x7bac55 === 'undefined') _0x7bac55 = -0x1;
        let _0x252a6f = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x2a4013 = getInventory(_0x1f0794, index);
            if (!_0x2a4013['namespace'] || !_0x2a4013['name']) continue;
            if (_0x2a4013['namespace']['includes'](_0x5c9a1f) && (_0x2a4013['aux'] === _0x565950 || _0x565950 === -0x1) && (_0x2a4013['name']['includes'](_0x7bac55) || _0x7bac55 === -0x1)) {
                _0x252a6f = index;
                break;
            }
        }
        return _0x252a6f;
    };
    const 瑟瑟主人下 = _0x1cf291 => {
        const _0x6d76a1 = getEntityMotion(_0x1cf291);
        const _0x104d14 = Math['sqrt'](_0x6d76a1['x'] * _0x6d76a1['x'] + _0x6d76a1['y'] * _0x6d76a1['y'] + _0x6d76a1['z'] * _0x6d76a1['z']);
        return _0x104d14 * 0x14;
    };
    const 马客在船举 = (_0x43a29a, _0x2e8212) => {
        const _0x46b727 = _0x2e8212 - _0x43a29a + 0x1;
        return Math['floor'](Math['random']() * _0x46b727) + _0x43a29a;
    };
    const 酒欲饮无管 = (_0x47da76, _0x16e06b, _0x4492ff) => {
        return {
            'x': _0x16e06b['x'] + _0x47da76['x'] * _0x4492ff,
            'y': _0x16e06b['y'] + _0x47da76['x'] * _0x4492ff,
            'z': _0x16e06b['z'] + _0x47da76['z'] * _0x4492ff
        };
    };
    const 弦醉不成欢 = _0x24871c => {
        if (_0x24871c < 0x3c) return _0x24871c + 's';
        if (_0x24871c >= 0x3c) return Math['floor'](_0x24871c / 0x3c) + 'min ' + _0x24871c % 0x3c + 's';
    };
    const 惨将别别时 = (_0x341280, _0x8313f3, _0x554456, _0x5df10b = 0x0, _0x126523 = 0x0) => {
        if (!_0x554456) return true;
        _0x341280['y'] += _0x5df10b;
        _0x8313f3['y'] += _0x126523;
        const _0x23eb78 = 弦弦掩抑声(_0x341280, _0x8313f3, 'yaw_pos');
        const _0x3e0912 = -弦弦掩抑声(_0x341280, _0x8313f3, 'pitch_pos');
        const _0x50fbb6 = getDistance(_0x341280, _0x8313f3);
        let _0x5c9fc0 = true;
        for (let _0x13c1ec = 0x0; _0x13c1ec < _0x50fbb6; _0x13c1ec += 0.5) {
            const _0x23a54c = 忽闻水上琵(_0x13c1ec, _0x8313f3, {
                'yaw': _0x23eb78,
                'pitch': _0x3e0912
            });
            const _0x53cba9 = getBlock(_0x23a54c['x'], _0x23a54c['y'], _0x23a54c['z']);
            if (_0x53cba9['namespace'] != 'minecraft:air') {
                _0x5c9fc0 = false;
                break;
            }
        }
        return _0x5c9fc0;
    };
    const 茫茫江浸月 = (_0x4a4868, _0xe62c30) => {
        let _0x17e930 = getWorldPlayerList()['sort']((_0x1a56e9, _0x2202e5) => _0x1a56e9['name']['localeCompare'](_0x2202e5['name']));
        let _0x1babc7 = _0x17e930['length'] > 0x0 ? _0x17e930['map'](_0x32fa36 => ({
            'text': '§e' + _0x32fa36['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x32fa36['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x2f6284 = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x1babc7
        };
        const _0x246acb = JSON['stringify'](_0x2f6284);
        addForm(_0x246acb, function(_0x15dc79) {
            if (_0x17e930['length'] > 0x0 && _0x15dc79 >= 0x0) {
                const _0xa15ef6 = _0xe62c30 === 0x0 ? _0x17e930[_0x15dc79]['name'] : _0x17e930[_0x15dc79]['id'];
                if (typeof globalThis[_0x4a4868] === 'object') globalThis[_0x4a4868]['push'](_0xa15ef6);
                if (typeof globalThis[_0x4a4868] === 'string') globalThis[_0x4a4868] = _0xa15ef6;
                归客不发寻(0x0, 'addTarget', _0xa15ef6, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x28a6da, _0x397dc, _0x261bcc) => {
        let _0x5a47b2 = _0x28a6da < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x261bcc;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x28a6da = Math['abs'](_0x28a6da);
        const _0x2ac561 = yaw * Math['PI'] / 0xb4;
        const _0x41e799 = pitch * Math['PI'] / 0xb4;
        let _0x25fecd = pitch != 0x0 ? Math['sin'](_0x41e799) * _0x28a6da : 0x0;
        let _0x4f4f18 = pitch != 0x0 ? _0x25fecd / Math['tan'](_0x41e799) : _0x28a6da;
        let _0x14a6fc = _0x4f4f18 < 0x0;
        _0x4f4f18 = Math['abs'](_0x4f4f18);
        const _0x55d8b1 = Math['cos'](_0x2ac561) * _0x4f4f18;
        const _0x108294 = Math['sin'](_0x2ac561) * _0x4f4f18;
        let _0x54ac58 = -Math['sin'](_0x2ac561) * _0x4f4f18;
        let _0x221975 = Math['cos'](_0x2ac561) * _0x4f4f18;
        if (_0x5a47b2 || _0x14a6fc) {
            _0x54ac58 = -_0x54ac58;
            if (!_0x14a6fc) _0x25fecd = -_0x25fecd;
            _0x221975 = -_0x221975;
        }
        return {
            'x': _0x397dc['x'] + _0x54ac58,
            'y': _0x397dc['y'] - _0x25fecd,
            'z': _0x397dc['z'] + _0x221975
        };
    };
    const getPlayerItemCount = _0x191991 => Array['from']({
        'length': 0x24
    }, (_0x151e62, _0x2054bc) => getInventory(_0x191991, _0x2054bc))['filter'](_0x128365 => _0x128365['count'] !== 0x0)['reduce']((_0x1a3e27, _0x1f8d07) => _0x1a3e27 + _0x1f8d07['count'], 0x0);
    const isSimilar = (_0x12e997, _0x14bf14, _0x1dc7ee) => Math['abs'](_0x12e997 - _0x14bf14) < _0x1dc7ee;
    const 琶声主人忘 = _0x375be6 => {
        let _0x1ba019 = [];
        if (at_entity) _0x1ba019['push'](...getEntityList());
        if (at_player) _0x1ba019['push'](...getPlayerList());
        let _0x54132b = Math['min'](at_maxCount, _0x1ba019['length']);
        let _0x425197 = [];
        for (const _0x47358f of _0x1ba019) {
            if (!才年长色衰(_0x47358f)) continue;
            const _0x4a30cb = getEntityNamespace(_0x47358f);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x508d09 => _0x4a30cb['includes'](_0x508d09)) != at_back) continue;
            const _0x32f101 = getPos(_0x47358f);
            const _0x393df5 = getDistance(_0x32f101, getPos(_0x375be6));
            if ((_0x393df5 > at_maxDist || _0x393df5 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x5bd718 = getEntityAttribute(_0x47358f, 'minecraft:health');
            if (at_heal && (!_0x5bd718 || _0x5bd718['min'] > _0x5bd718['max'] || _0x5bd718['max'] > 0x186a0 || _0x5bd718['current'] <= 0x0 || _0x5bd718['max'] === 0x0) != at_back) continue;
            if (_0x4a30cb === 'minecraft:player') {
                const _0x57d90d = getEntityRot(_0x47358f);
                const _0xe86710 = at_BWM ? getEntityAttribute(_0x47358f, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x4b5445 = getEntityName(_0x47358f);
                if (at_BWM && _0xe86710['current'] >= 0.5 && !_0x4b5445['includes']('[') && !_0x4b5445['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x47358f);
                    continue;
                }
                if (at_fov && (typeof _0x57d90d['yaw'] === 'undefined' || typeof _0x57d90d['pitch'] === 'undefined' || _0x57d90d['yaw']['toFixed'](0x2) === 0x0 || _0x57d90d['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x466e8e = getEntityFlag(_0x47358f, 0x5);
                if (at_hide && _0x466e8e != at_back) continue;
                const _0x1a82bc = getEntityIsGround(_0x47358f);
                if (at_ground && _0x1a82bc === at_back) continue;
                if (at_wall && !惨将别别时(getPos(self_id), _0x32f101, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x4b5445['startsWith'](ct_team) || ct_team['includes']('[') && _0x4b5445['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x47358f) != at_back || !at_name && (_0x4b5445 === getEntityName(_0x375be6) || _0x4b5445 === '') != at_back || (_0x32f101['y'] > at_maxY || _0x32f101['y'] < at_minY) != at_back && !at_infY || _0x47358f === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x2bde0e => _0x4b5445['includes'](_0x2bde0e))) continue;
                const _0x427ea7 = teams_armor ? teams_blur ? getPlayerArmorItem(_0x47358f, teams_slot) : 音铮铮然有(getPlayerArmorItem(_0x47358f, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0x427ea7 != '{}' && _0x427ea7 === teams_self || !teams_blur && _0x427ea7['color'] && _0x427ea7['color'] === teams_self['color'])) continue;
                const _0x1ce397 = at_size ? getEntitySize(_0x47358f) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x1ce397['x'] > at_defaultSize['x'] + 0.1 || _0x1ce397['x'] < at_defaultSize['x'] - 0.1) && (_0x1ce397['y'] > 1.66 || _0x1ce397['y'] < 1.64) && (_0x1ce397['y'] < at_defaultSize['y'] || _0x1ce397['y'] > at_defaultSize['y'] + 0.1) && (_0x1ce397['y'] > 1.51 || _0x1ce397['y'] < 1.49)) != at_back) continue;
            }
            const _0x1c3038 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x47358f) : 0x0;
            const _0x1930e1 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x47358f, 'yaw_rot') : 0x0;
            const _0x2496c1 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x47358f, 'pitch_rot') : 0x0;
            const _0x3a03f2 = modes['at_mode'] === 0x2 ? 十六言命曰(_0x47358f, -0x1) : 0x0;
            _0x425197['push']({
                'distance': _0x393df5,
                'target': _0x47358f,
                'damage': _0x3a03f2,
                'heal': _0x5bd718['current'],
                'crosshair': Math['sqrt'](_0x1930e1 * _0x1930e1 + _0x2496c1 * _0x2496c1),
                'items': _0x1c3038,
                'random': 马客在船举(0x0, _0x1ba019['length'] - 0x1)
            });
        }
        const _0xf6861f = [(_0x462673, _0x3d50f8) => _0x462673['distance'] - _0x3d50f8['distance'], (_0x5eb825, _0x4b8583) => _0x5eb825['heal'] - _0x4b8583['heal'], (_0x536b58, _0x511a07) => _0x536b58['damage'] - _0x511a07['damage'], (_0x44814e, _0x17ad81) => _0x44814e['crosshair'] - _0x17ad81['crosshair'], (_0x5c7e26, _0x395f4c) => _0x395f4c['items'] - _0x5c7e26['items'], (_0x5820e4, _0x48182c) => _0x5820e4['random'] - _0x48182c['random']];
        _0x425197['sort'](_0xf6861f[modes['at_mode']]);
        if (at_reverse) _0x425197['reverse']();
        if (at_infCount) return _0x425197['map'](_0x4a706b => _0x4a706b['target']);
        return _0x425197['slice'](0x0, _0x54132b)['map'](_0x4f2c41 => _0x4f2c41['target']);
    };
    const 归客不发寻 = (_0x3c3866 = 0x0, _0x169c78 = 'Tip', _0x33adb3, _0xa75403 = '§r') => {
        if (!FuncTip) return false;
        if (_0x3c3866 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x169c78 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa75403) + ' ' + _0x33adb3);
        if (_0x3c3866 == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0x169c78 + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa75403) + _0x33adb3;
            if (modes['tipType_mode'] === 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0xa75403) + _0x33adb3;
        }
    };
    const getDistance = (_0x4c4cfc, _0x367e61) => Math['sqrt'](Math['pow'](_0x4c4cfc['x'] - _0x367e61['x'], 0x2) + Math['pow'](_0x4c4cfc['y'] - _0x367e61['y'], 0x2) + Math['pow'](_0x4c4cfc['z'] - _0x367e61['z'], 0x2));
    const 声暗问弹者 = (_0xc793c, _0x171235) => {
        if (!才年长色衰(_0xc793c) || !才年长色衰(_0x171235)) return Infinity;
        const _0x5f4f8d = getPos(_0xc793c);
        const _0xd8221b = getPos(_0x171235);
        return Math['sqrt'](Math['pow'](_0x5f4f8d['x'] - _0xd8221b['x'], 0x2) + Math['pow'](_0x5f4f8d['y'] - _0xd8221b['y'], 0x2) + Math['pow'](_0x5f4f8d['z'] - _0xd8221b['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x3846f6, _0x236350) => {
        if (!才年长色衰(_0x3846f6) || !才年长色衰(_0x236350)) return Infinity;
        const _0x378a58 = getPos(_0x3846f6);
        const _0x3f8abf = getPos(_0x236350);
        return Math['sqrt'](Math['pow'](_0x378a58['x'] - _0x3f8abf['x'], 0x2) + Math['pow'](_0x378a58['z'] - _0x3f8abf['z'], 0x2));
    };
    const 欲语迟移船 = (_0x21ad68, _0x1ba4ef, _0x10c10f) => {
        let _0x1fee33 = {
            'fn-set-player-pos': {
                'x': _0x21ad68,
                'y': _0x1ba4ef,
                'z': _0x10c10f
            }
        };
        callModule(0x5, JSON['stringify'](_0x1fee33));
    };
    const getHorizontalDistance = (_0x489cd4, _0xbcd641) => Math['sqrt'](Math['pow'](_0x489cd4['x'] - _0xbcd641['x'], 0x2) + Math['pow'](_0x489cd4['z'] - _0xbcd641['z'], 0x2));
    const setRealPos = (_0x29bf92, _0x469676, _0x3e38f7, _0x21d776) => setEntityPos(_0x29bf92, _0x469676, _0x3e38f7 + setPos_offset, _0x21d776);
    const setPos = (_0xd58e47, _0x1bf203, _0x466cf4) => setRealPos(self_id, _0xd58e47, _0x1bf203, _0x466cf4);
    const setMotion = (_0x2e8255, _0x315b1e, _0x304806) => setEntityMotion(self_id, _0x2e8255, _0x315b1e, _0x304806);
    const 相近邀相见 = _0x1849bb => {
        if (_0x1849bb === '') return [];
        return _0x1849bb['split'](',');
    };
    const 添酒回灯重 = _0x462200 => {
        if (typeof _0x462200 != 'object' || _0x462200['length'] === 0x0) return '';
        return _0x462200['join'](',');
    };
    const 开宴千呼万 = (_0x319dff, _0x24e5e2) => {
        let _0x202576 = typeof _0x24e5e2 === 'object' ? 添酒回灯重(_0x24e5e2) : _0x24e5e2;
        let _0x339f44 = typeof _0x24e5e2 === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x319dff + '","placeholder":"","default":"' + _0x202576 + '"}]}', function(_0x4532aa) {
            if (_0x339f44 === 0x1) globalThis[_0x319dff] = _0x4532aa;
            if (_0x339f44 === 0x0) globalThis[_0x319dff] = 相近邀相见(_0x4532aa);
            归客不发寻(0x0, 'setValue', _0x319dff + ' §7>>>§r ' + _0x4532aa, '§r');
            nx_cfg[_0x319dff] = globalThis[_0x319dff];
        });
    };
    const 唤始出来犹 = _0x5c746a => {
        if (typeof _0x5c746a != 'string' || _0x5c746a === '') return 'None';
        let _0x683b8c = _0x5c746a['match'](/\[(.*?)\]/g);
        if (_0x683b8c === null) return 'None';
        return _0x683b8c[0x0];
    };
    const 抱琵琶半遮 = _0x2f3c46 => {
        if (!File['exist'](_0x2f3c46)) return '{}';
        const _0x21b553 = File['read'](_0x2f3c46);
        return _0x21b553 ? _0x21b553 : '{}';
    };
    const 面转轴拨弦 = _0x3e9538 => {
        const _0x13bb85 = getPos(_0x3e9538);
        let _0xcaf470 = _0x3e9538 === self_id ? Math['floor'](_0x13bb85['y']) - 0x1 : Math['floor'](_0x13bb85['y']);
        return {
            'x': Math['floor'](_0x13bb85['x']),
            'y': _0xcaf470,
            'z': Math['floor'](_0x13bb85['z'])
        };
    };
    const 三两声未成 = (_0x46b9db, _0x3716a3) => {
        if (_0x46b9db['length'] === _0x3716a3['length']) {
            return [];
        }
        const _0x4babc5 = _0x46b9db['length'] >= _0x3716a3['length'] ? _0x46b9db : _0x3716a3;
        const _0x1dd370 = _0x46b9db['length'] < _0x3716a3['length'] ? _0x46b9db : _0x3716a3;
        return _0x4babc5['filter'](_0x58ff64 => !_0x1dd370['includes'](_0x58ff64));
    };
    const 曲调先有情 = (_0x52e559, _0x34d77c) => {
        const _0x3d2c92 = aa_speed;
        const _0xf1e626 = aa_g;
        const _0x5c0ce3 = Math['atan'](Math['floor'](-_0x34d77c) / _0x52e559);
        const _0x58bc0f = Math['sqrt'](_0x52e559 * _0x52e559 + _0x34d77c * _0x34d77c);
        const _0x20de10 = Math['atan'](_0x58bc0f / _0x3d2c92 / 0x2 / _0x3d2c92 * _0xf1e626);
        return -((_0x20de10 + _0x5c0ce3) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x2bc473, _0x22c355) => _0x2bc473 / _0x22c355;
    const roundAngle = (_0xbbef33, _0x5f4548) => Math['round'](_0xbbef33 / _0x5f4548) * _0x5f4548;
    const 弦弦掩抑声 = (_0x582e0c, _0x3d3457, _0x5dee11, _0x358700 = false, _0xfc6b28 = false, _0x1c34d1 = 0x0, _0x5485f2 = 0x0) => {
        let _0x590393 = typeof _0x3d3457 != 'string' ? _0x3d3457 : getPos(_0x3d3457);
        let _0x1e76d1 = typeof _0x582e0c != 'string' ? _0x582e0c : getPos(_0x582e0c);
        let _0x2e172b = getEntityRot(_0x582e0c);
        if (!_0x590393 || !_0x1e76d1) return Infinity;
        const _0x4d6d0c = getHorizontalDistance(_0x1e76d1, _0x590393);
        if (_0x358700) _0x590393 = 酒欲饮无管(getEntityMotion(_0x3d3457), getPos(_0x3d3457), getFlyTime(_0x4d6d0c, aa_speed) * 0x14);
        let _0x2d636a = _0x590393['x'] - _0x1e76d1['x'];
        let _0x3a6e3 = _0x1e76d1['y'] - _0x590393['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x5485f2, _0x5485f2) / 0xa;
        let _0x27f4d2 = _0x590393['z'] - _0x1e76d1['z'];
        let _0x112c74 = Math['atan2'](_0x27f4d2, _0x2d636a) * 0xb4 / Math['PI'];
        const _0x2fcd9c = 曲调先有情(_0x4d6d0c, _0x3a6e3);
        let _0x691fa6 = _0xfc6b28 ? _0x2fcd9c : Math['atan2'](_0x3a6e3, _0x4d6d0c) * 0xb4 / Math['PI'];
        if (_0x5dee11 === 'yaw_pos') return _0x112c74 > -0xb4 && _0x112c74 <= 0x5a ? _0x112c74 + 0x5a : _0x112c74 - 0x10e;
        if (_0x5dee11 === 'yaw_rot') {
            _0x112c74 = _0x112c74 > -0xb4 && _0x112c74 <= 0x5a ? _0x112c74 + 0x5a : _0x112c74 - 0x10e;
            let _0x28cf0b = _0x112c74 - _0x2e172b['yaw'] + 马客在船举(-_0x1c34d1 / 0x2, _0x1c34d1 / 0x2);
            return _0x28cf0b > 0x0 ? -_0x28cf0b + 0xb4 : -_0x28cf0b - 0xb4;
        }
        if (_0x5dee11 === 'pitch_pos') return _0x691fa6;
        if (_0x5dee11 === 'pitch_rot') return _0x691fa6 - _0x2e172b['pitch'];
    };
    const 声思似诉平 = (_0x59790c, _0x4116c6, _0x261502, _0x44607f) => {
        let _0x36e0cb = Math['abs'](弦弦掩抑声(_0x59790c, _0x4116c6, 'yaw_rot'));
        let _0x3d1d9d = Math['abs'](弦弦掩抑声(_0x59790c, _0x4116c6, 'pitch_rot'));
        if (_0x44607f === 0x0) return Math['sqrt'](_0x36e0cb * _0x36e0cb + _0x3d1d9d * _0x3d1d9d) < _0x261502;
        if (_0x44607f === 0x1) return Math['abs'](_0x36e0cb) < _0x261502;
        if (_0x44607f === 0x2) return Math['abs'](_0x3d1d9d) < _0x261502;
    };
    const 生不得志低 = _0x4e096b => {
        let _0xd3112c = '';
        for (let _0x487de3 = 0x0; _0x487de3 < _0x4e096b['length']; _0x487de3 += 0x2) {
            _0xd3112c += String['fromCharCode'](parseInt(_0x4e096b['substr'](_0x487de3, 0x2), 0x10));
        }
        return _0xd3112c;
    };
    const 眉信手续续 = (_0x1b8cc4, _0x34eab9, _0x396166 = 0.5, _0xb6e0d2 = false) => {
        let _0x9b47ee = [];
        let _0x4147bb = 弦弦掩抑声(_0x1b8cc4, _0x34eab9, 'yaw_pos');
        let _0x3ae58 = 弦弦掩抑声(_0x1b8cc4, _0x34eab9, 'pitch_pos');
        if (getDistance(_0x1b8cc4, _0x34eab9) < _0x396166) return [_0x1b8cc4];
        for (let _0x4fcb54 = 0x0; _0x4fcb54 <= getDistance(_0x1b8cc4, _0x34eab9); _0x4fcb54 += _0x396166) {
            let _0x12aa38 = 忽闻水上琵(-_0x4fcb54, _0x1b8cc4, {
                'yaw': _0x4147bb,
                'pitch': _0xb6e0d2 ? -_0x3ae58 : 0x0
            });
            if (getBlock(_0x12aa38['x'], _0x12aa38['y'], _0x12aa38['z'])['namespace'] === 'minecraft:air') _0x9b47ee['push']({
                'x': _0x12aa38['x'],
                'y': _0x12aa38['y'],
                'z': _0x12aa38['z']
            });
        }
        return _0x9b47ee;
    };
    const 弹说尽心中 = (_0xe19957, _0x57f840) => {
        let _0xa272ca = getEntityAttribute(_0xe19957, 'minecraft:health');
        let _0x48b605 = _0xa272ca['current'];
        let _0x5e32b8 = _0xa272ca['max'];
        const _0xab00cc = _0x48b605 / _0x5e32b8;
        switch (_0x57f840) {
            case 0x0:
                return _0xab00cc['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x16e45a = '§c';
                for (let _0x3d8603 = 0x0; _0x3d8603 < Math['floor'](_0xab00cc * 0x14); _0x3d8603++) _0x16e45a += '❤';
                return _0x16e45a + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x48b605);
            case 0x3:
                return Math['floor'](_0x48b605) + '/' + Math['floor'](_0x5e32b8);
            default:
                return _0x48b605;
        }
    };
    const 无限事轻拢 = _0x13a569 => {
        let _0x2d1b2f = '';
        let _0x1a338f = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x4db4c7 = 0x0; _0x4db4c7 < _0x13a569; _0x4db4c7++) {
            let _0x4bcf3d = 马客在船举(0x0, _0x1a338f['length'] - 0x1);
            _0x2d1b2f += _0x1a338f[_0x4bcf3d];
        }
        return _0x2d1b2f;
    };
    const 慢捻抹复挑 = _0x21c14d => {
        for (let _0x4f6cdd = Math['ceil'](-cd_size / 0x2); _0x4f6cdd < Math['floor'](cd_size / 0x2 + 0x1); _0x4f6cdd++) {
            for (let _0x4a6c8f = Math['ceil'](-cd_size / 0x2); _0x4a6c8f < Math['floor'](cd_size / 0x2 + 0x1); _0x4a6c8f++) {
                for (let _0x2e8ff1 = Math['ceil'](-cd_size / 0x2); _0x2e8ff1 < Math['floor'](cd_size / 0x2 + 0x1); _0x2e8ff1++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x21c14d;
                    const _0x347948 = getBlock(x + _0x4f6cdd, y + _0x4a6c8f, z + _0x2e8ff1);
                    if (_0x347948['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x21c14d['y'] + _0x4a6c8f <= _0x21c14d['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x4f6cdd, y + _0x4a6c8f, z + _0x2e8ff1, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x21c14d['x'] + _0x4f6cdd, _0x21c14d['y'] + _0x4a6c8f, _0x21c14d['z'] + _0x2e8ff1, 0x0);
                    if (cd_packet) 人本长安倡(_0x21c14d['x'] + _0x4f6cdd, _0x21c14d['y'] + _0x4a6c8f, _0x21c14d['z'] + _0x2e8ff1, true, true);
                }
            }
        }
    };
    const 初为霓裳后 = () => {
        if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
        if (ia_comeClick) {
            buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
            if (!ia_nopacket) sendPlayerAuthInput({
                'pos': {
                    'x': InfiniteAura_backPos['x'],
                    'y': InfiniteAura_backPos['y'],
                    'z': InfiniteAura_backPos['z']
                },
                'inputs': [0x24, 0x12],
                'actions': [{
                    'pos': {
                        'x': InfiniteAura_backPos['x'],
                        'y': InfiniteAura_backPos['y'],
                        'z': InfiniteAura_backPos['z']
                    },
                    'type': 0x19,
                    'value': 0x1
                }],
                'motion': {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                }
            });
        }
        if (ia_back) {
            for (let _0x50146b = 0x0; _0x50146b < ia_move; _0x50146b++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) sendPlayerAuthInput({
                    'inputMode': 0x2,
                    'playMode': 0x0,
                    'pos': {
                        'x': InfiniteAura_backPos['x'],
                        'y': InfiniteAura_backPos['y'],
                        'z': InfiniteAura_backPos['z']
                    },
                    'flags': [0x12],
                    'motion': {
                        'x': 0x0,
                        'y': 0x0,
                        'z': 0x0
                    }
                });
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 六幺大弦嘈 = _0x44813a => {
        let _0x484176 = '';
        let _0x44c65c = _0x44813a['split']('');
        for (let _0x194883 in _0x44c65c) {
            let _0x158e42 = _0x44c65c[_0x194883]['toUpperCase']();
            if (_0x194883 != _0x44c65c['length'] - 0x1) {
                if (_0x194883 % 0x2 === 0x1) _0x484176 += _0x158e42 + ' ';
                else _0x484176 += _0x158e42;
            } else _0x484176 += _0x158e42;
        }
        if (rpc_remark) {
            let _0x330a07 = _0x484176['split'](' ');
            let _0x4ccd8e = '';
            for (let _0x55d8cc in _0x330a07) _0x4ccd8e += _0x330a07[_0x55d8cc] + '(' + 生不得志低(_0x330a07[_0x55d8cc]) + ') ';
            return _0x4ccd8e;
        } else return _0x484176;
    };
    const 嘈如急雨小 = (_0x453c30, _0x2e3630, _0x455168 = false) => {
        setEntityTarget(_0x453c30, _0x2e3630);
        if (_0x455168) setEntityTarget(_0x2e3630, _0x453c30);
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
    var rgb_color = '4c6e2a3b195d591b3a2e6c4' ['split']('');
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
            let _0x37cb98 = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 音铮铮然有(getPlayerArmorItem(self_id, teams_slot));
            let _0x5984c5 = getEntityAttribute(self_id, 'minecraft:health');
            let _0x418e27 = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x418e27['y'], 0x0);
            let _0x18423d = getCameraRotation();
            let _0x172dbf = {
                'yaw': _0x18423d['yaw'] > 0x0 ? 0xb4 - _0x18423d['yaw'] : -0xb4 - _0x18423d['yaw'],
                'pitch': -_0x18423d['pitch']
            };
            let _0x1b0e29 = getDistance(self_pos, prev_pos) / 0.05;
            let _0x245101 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x271278 = 瑟瑟主人下(self_id);
            let _0x5508dd = 面转轴拨弦(self_id);
            let _0x21ec62 = getWorldPlayerList();
            let _0x524a42 = getEntityIsGround(self_id);
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x39d125, _0x33d390) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
                if (InvCleaner && ic_change || SmartInv && da_change) self_itemCount = getPlayerItemCount(self_id);
            }
            self_item = getCarried(self_id);
            if (_0x5984c5['current'] - prev_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x5984c5['current'] < prev_heal) death_pos = self_pos;
            if (TestModule) closeInventory();
            if (DeadCross) dc_pos['forEach'](_0x49b475 => {
                sendShadow(_0x49b475['x'], _0x49b475['y'], _0x49b475['z']);
                sendShadow(_0x49b475['x'], _0x49b475['y'] + 0x1, _0x49b475['z']);
                sendShadow(_0x49b475['x'], _0x49b475['y'] + 0x2, _0x49b475['z']);
                sendShadow(_0x49b475['x'] + 0x1, _0x49b475['y'] + 0x2, _0x49b475['z']);
                sendShadow(_0x49b475['x'] - 0x1, _0x49b475['y'] + 0x2, _0x49b475['z']);
                sendShadow(_0x49b475['x'], _0x49b475['y'] + 0x3, _0x49b475['z']);
            });
            if (AdminShow) {
                let _0x30f049 = _0x21ec62['filter'](_0x144c97 => _0x144c97['permissionLevel'] != -0x1 || _0x144c97['commandPermissionLevel'] != -0x1);
                if (_0x30f049['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x30f049['map'](_0x4ad958 => _0x4ad958['name'])), '§r'));
                let _0x5c7b49 = _0x30f049['filter'](_0x3e88bb => 声暗问弹者(_0x3e88bb['id'], self_id) < as_range);
                if (_0x5c7b49['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x5c7b49['map'](_0x445ae0 => _0x445ae0['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 琶声主人忘(self_id);
            if (NoHider) {
                const _0x1e0238 = getPlayerList();
                _0x1e0238['forEach'](_0x5a4aa2 => {
                    if (_0x5a4aa2 != self_id) {
                        removeEntityEffect(_0x5a4aa2, 0xe);
                        setEntityFlag(_0x5a4aa2, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x5a4aa2)) at_lists['splice'](at_lists['indexOf'](_0x5a4aa2), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x5508dd['x'], _0x5508dd['y'] - 0x1, _0x5508dd['z'])['namespace'] === 'minecraft:glass' && _0x524a42) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !cc_status && _0x418e27['y'] < 0x0) {
                cc_status = true;
                callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
                playerJump();
            }
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
                const _0x583a24 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x583a24) setPos(_0x583a24['x'] + 马客在船举(-rt_range, rt_range), _0x583a24['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x583a24['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x4a2df4 = 马客在船举(ac_min, ac_max);
                let _0x3aceb7 = Math['round'](0x3e8 / _0x4a2df4);
                const _0x205ec0 = at_lists['length'] > 0x0 ? 声思似诉平(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x31b182 = 0x0; _0x31b182 < ac_times; _0x31b182++) {
                    if (!_0x205ec0) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0x3aceb7;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0xb8649a = getEntityList()['forEach'](_0x116331 => {
                    if (getEntityNamespace(_0x116331) != 'minecraft:item' || !findEntity(_0x116331) || 声暗问弹者(_0x116331, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x1541a0 = getPos(_0x116331);
                    silentMove(_0x1541a0['x'], _0x1541a0['y'], _0x1541a0['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x172dbf,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x172dbf['yaw']
            });
            if (CustomItem) {
                const _0x4bf1d3 = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x4bf1d3);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x4bf1d3);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x4bf1d3);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x1c314d = [];
                if (modes['sb_mode'] == 0x0) _0x1c314d = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x1c314d = at_lists;
                if (modes['sb_mode'] == 0x2) _0x1c314d = ['lock_pos'];
                _0x1c314d['forEach'](_0x16b860 => {
                    if (sb_exclude && _0x16b860 == self_id) return;
                    let _0x5e4f5d = null;
                    if (_0x16b860 == 'lock_pos') _0x5e4f5d = sb_pos;
                    else _0x5e4f5d = 面转轴拨弦(_0x16b860);
                    if (!_0x5e4f5d) return;
                    let _0x4494df = getEntityRot(_0x16b860);
                    if (modes['sb_mode'] < 0x2) {
                        _0x5e4f5d = 忽闻水上琵(sb_offset, _0x5e4f5d, _0x4494df);
                        _0x5e4f5d['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x3f69be = JSON['parse'](抱琵琶半遮(nx_paths + '/Shadow.json'));
                        _0x3f69be['forEach'](_0x4467af => {
                            let _0xcdb401 = Math['sqrt'](_0x4467af['x'] * _0x4467af['x'] + _0x4467af['y'] * _0x4467af['y'] + _0x4467af['z'] * _0x4467af['z']);
                            let _0xbaf567 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x4467af, 'yaw_pos');
                            let _0x34e15b = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x4467af, 'pitch_pos');
                            let _0xe07f43 = 忽闻水上琵(_0xcdb401, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x34e15b,
                                'yaw': _0xbaf567 + sb_rc_yaw
                            });
                            sendShadow(_0x5e4f5d['x'] + _0xe07f43['x'], _0x5e4f5d['y'] + _0xe07f43['y'], _0x5e4f5d['z'] + _0xe07f43['z']);
                        });
                    } else {
                        for (let _0x2876ba = Math['ceil'](-sb_length / 0x2); _0x2876ba < Math['floor'](sb_length / 0x2 + 0x1); _0x2876ba++) {
                            for (let _0x37e9bb = Math['ceil'](-sb_length / 0x2); _0x37e9bb < Math['floor'](sb_length / 0x2 + 0x1); _0x37e9bb++) {
                                for (let _0x462a9e = Math['ceil'](-sb_length / 0x2); _0x462a9e < Math['floor'](sb_length / 0x2 + 0x1); _0x462a9e++) {
                                    sendShadow(_0x5e4f5d['x'] + _0x2876ba, _0x5e4f5d['y'] + _0x37e9bb + 0x2, _0x5e4f5d['z'] + _0x462a9e);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0x457402 = [
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['一', '一', '一', '一', '一', '十', '一', '一', '一', '一', '一'],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  '],
                    ['  ', '  ', '  ', '  ', '   ', '│', '   ', '  ', '  ', '  ', '  ']
                ];
                let _0x42bb6c = [];
                if (sm_player) _0x42bb6c['push'](...getPlayerList());
                if (sm_entity) _0x42bb6c['push'](...getEntityList());
                if (sm_target) _0x42bb6c['push'](...at_lists);
                _0x42bb6c['forEach'](_0x29bd6d => {
                    let _0x5f3635 = 弦弦掩抑声(self_id, _0x29bd6d, 'yaw_rot');
                    let _0x3c6ae7 = 声暗问弹者(self_id, _0x29bd6d);
                    let _0x31a12f = Math['floor'](_0x3c6ae7 / sm_size * sm_proportion * -Math['sin'](_0x5f3635 * Math['PI'] / 0xb4) * 0xa);
                    let _0x22a7c5 = Math['floor'](_0x3c6ae7 / sm_size * sm_proportion * -Math['cos'](_0x5f3635 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x31a12f > 0x5) _0x31a12f = 0x5;
                    if (_0x22a7c5 > 0x5) _0x22a7c5 = 0x5;
                    if (_0x31a12f < -0x5) _0x31a12f = -0x5;
                    if (_0x22a7c5 < -0x5) _0x22a7c5 = -0x5;
                    _0x457402[_0x22a7c5 + 0x5][_0x31a12f + 0x5] = ' §e◆§r ';
                });
                let _0x4f027e = _0x457402['map'](_0x260842 => _0x260842['join'](''))['join']('\n');
                _0x37cb98['push'](归客不发寻(0x1, 'Map', '\n' + _0x4f027e, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x136e0d = getPos(cm_id);
                    const _0x32c853 = getEntitySize(cm_id);
                    setCameraAnchor(_0x136e0d['x'] - self_pos['x'], _0x136e0d['y'] - self_pos['y'] + 0.85 * _0x32c853['y'], -_0x136e0d['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x29cd21 = getPos(cm_attack);
                    const _0x5f518f = getEntitySize(cm_attack);
                    setCameraAnchor(_0x29cd21['x'] - self_pos['x'], _0x29cd21['y'] - self_pos['y'] + 0.85 * _0x5f518f['y'], -_0x29cd21['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x418e27['x'] * cm_moverange, -_0x418e27['y'] * cm_moverange, _0x418e27['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x5984c5['current'] < prev_heal) prev_heal = _0x5984c5['current'];
            if (NoDebuff) debuff['forEach'](_0x20ac1a => removeEntityEffect(self_id, _0x20ac1a));
            if (MoveJump && self_moving && _0x524a42) playerJump();
            if (ChunkRender) {
                let _0x4af6b0 = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x583a41 = {
                    'x': _0x4af6b0['x'] * 0x10,
                    'z': _0x4af6b0['z'] * 0x10
                };
                let _0x2f1cc6 = {
                    'x': (_0x4af6b0['x'] + 0x1) * 0x10,
                    'z': (_0x4af6b0['z'] + 0x1) * 0x10
                };
                for (let _0x3d51ba = 0x0; _0x3d51ba < 0x10; _0x3d51ba++) {
                    妇遂命酒使(0x37, _0x583a41['x'] + _0x3d51ba, self_pos['y'], _0x583a41['z'], 0x1);
                    妇遂命酒使(0x37, _0x583a41['x'], self_pos['y'], _0x583a41['z'] + _0x3d51ba, 0x1);
                    妇遂命酒使(0x37, _0x2f1cc6['x'] - _0x3d51ba, self_pos['y'], _0x2f1cc6['z'], 0x1);
                    妇遂命酒使(0x37, _0x2f1cc6['x'], self_pos['y'], _0x2f1cc6['z'] - _0x3d51ba, 0x1);
                }
                _0x37cb98['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x4af6b0['x'] + '， ' + _0x4af6b0['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x3ff1ea of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x3ff1ea, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x3ff1ea, -0x1, '一局'));
                        const _0x5be25e = getCarried(self_id);
                        if (_0x5be25e['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x36ea35 = getHorizontalDistance(self_pos, nx_goal);
                const _0xbf0180 = getDistance(self_pos, nx_goal);
                if (_0xbf0180 >= 0x5) {
                    let _0x56b906 = 弦弦掩抑声(self_id, nx_goal, 'yaw_pos');
                    let _0x577729 = 忽闻水上琵(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x56b906,
                        'pitch': 0x0
                    });
                    if (_0x36ea35 >= 0x3) setMotion(_0x577729['x'] - self_pos['x'], _0x418e27['y'], _0x577729['z'] - self_pos['z']);
                    else setMotion(_0x418e27['x'], (_0x577729['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x418e27['z']);
                } else {
                    nx_goal = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x591243 = 0x0; _0x591243 < ral_num; _0x591243++) {
                    const _0xc573e1 = 无限事轻拢(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x591243, _0xc573e1, _0xc573e1, true);
                }
            }
            if (ShowNowTime) {
                const _0x2949fc = new Date();
                const _0x336214 = _0x2949fc['getFullYear']();
                const _0x3dbba9 = ('0' + (_0x2949fc['getMonth']() + 0x1))['slice'](-0x2);
                const _0x15ce0b = ('0' + _0x2949fc['getDate']())['slice'](-0x2);
                const _0x5d8f31 = ('0' + _0x2949fc['getHours']())['slice'](-0x2);
                const _0x24e0d2 = ('0' + _0x2949fc['getMinutes']())['slice'](-0x2);
                const _0x4fc57c = ('0' + _0x2949fc['getSeconds']())['slice'](-0x2);
                const _0x4b96b7 = _0x336214 + '-' + _0x3dbba9 + '-' + _0x15ce0b + ' ' + _0x5d8f31 + ':' + _0x24e0d2 + ':' + _0x4fc57c;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x4b96b7, '当前时间: ' + _0x4b96b7, true);
            }
            if (ChestAura) {
                let _0x1a33ff = 面转轴拨弦(self_id);
                let _0xf1a576 = ca_range;
                for (let _0x3933d9 = -_0xf1a576; _0x3933d9 < _0xf1a576; _0x3933d9++) {
                    for (let _0x1b90c6 = -_0xf1a576; _0x1b90c6 < _0xf1a576; _0x1b90c6++) {
                        for (let _0x42e1e8 = -_0xf1a576; _0x42e1e8 < _0xf1a576; _0x42e1e8++) {
                            const _0x29f3d7 = getBlock(_0x1a33ff['x'] + _0x3933d9, _0x1a33ff['y'] + _0x1b90c6, _0x1a33ff['z'] + _0x42e1e8);
                            if (_0x29f3d7['namespace'] != 'minecraft:chest') continue;
                            const _0xce4568 = getBlock(_0x1a33ff['x'] + _0x3933d9, _0x1a33ff['y'] + _0x1b90c6 + 0x1, _0x1a33ff['z'] + _0x42e1e8);
                            const _0x4de5d8 = {
                                'x': _0x1a33ff['x'] + _0x3933d9,
                                'y': _0x1a33ff['y'] + _0x1b90c6,
                                'z': _0x1a33ff['z'] + _0x42e1e8
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x4de5d8)) && ca_exclude || isChest || !惨将别别时(_0x1a33ff, _0x4de5d8, ca_wall, 1.53, 0.5) || ca_block && _0xce4568['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x4de5d8, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x1a33ff['x'] + _0x3933d9, _0x1a33ff['y'] + _0x1b90c6, _0x1a33ff['z'] + _0x42e1e8, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x4de5d8));
                            if (ca_check && chestStates['packet'] && chestStates['click']) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x21ec62['forEach'](_0x22d116 => {
                    const {
                        name,
                        id
                    } = _0x22d116;
                    if (id === self_id || name === '') return;
                    let _0x8a2557 = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x8a2557 = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x8a2557 = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x2899fd => {
                            if (_0x2899fd['match_mode'] === '精准' && _0x2899fd['has_mode'] === '存在' && _0x2899fd['texts']['some'](_0x48c150 => name === _0x48c150) != _0x2899fd['reverse_selection']) _0x8a2557 = id;
                            if (_0x2899fd['match_mode'] === '精准' && _0x2899fd['has_mode'] === '同时' && _0x2899fd['texts']['every'](_0x5d388c => name === _0x5d388c) != _0x2899fd['reverse_selection']) _0x8a2557 = id;
                            if (_0x2899fd['match_mode'] === '模糊' && _0x2899fd['has_mode'] === '存在' && _0x2899fd['texts']['some'](_0x50146c => name['includes'](_0x50146c)) != _0x2899fd['reverse_selection']) _0x8a2557 = id;
                            if (_0x2899fd['match_mode'] === '精准' && _0x2899fd['has_mode'] === '存在' && _0x2899fd['texts']['every'](_0x26a6dc => name['includes'](_0x26a6dc)) != _0x2899fd['reverse_selection']) _0x8a2557 = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x8a2557 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x8a2557 = null;
                    if (as_ground && getEntityIsGround(id)) _0x8a2557 = null;
                    if (_0x8a2557 === null) return;
                    if (modes['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x37cb98['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x2d1fe8 => interactEntity(_0x2d1fe8));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (Tower && (_0x172dbf['pitch'] < -0x50 || _0x172dbf['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x524a42 || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0x5508dd['x'], self_pos['y'] - 0x2, _0x5508dd['z']), tower_delay * 0xa);
                }
            }
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x21ec62['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x21ec62['length'], '§r');
                    last_world_player = _0x21ec62;
                }
                if (sv_id && self_id != prev_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x3290f0 = [];
                _0x21ec62['forEach'](_0x3c42da => {
                    if (modes['ca_mode'] == 0x0 && 十六言命曰(_0x3c42da['id'], -0x1) > 0x14) _0x3290f0['push'](getEntityName(_0x3c42da['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x3c42da['id']) > 0x14) _0x3290f0['push'](getEntityName(_0x3c42da['id']));
                });
                if (_0x3290f0['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x3290f0), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x21ec62['length']) {
                const _0x4afee6 = _0x21ec62['map'](_0xd85549 => _0xd85549['name']);
                let _0x2a9dd9 = 三两声未成(last_world_player, _0x4afee6);
                let _0x1e430b = last_world_player['length'] < _0x4afee6['length'];
                if (_0x1e430b) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2a9dd9) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2a9dd9) + '离开了世界', '§r');
                last_world_player = _0x4afee6;
            }
            if (DropRes && _0x418e27['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x1c6057 = getInventory(self_id, index);
                    if (resList['includes'](_0x1c6057['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x24b696 => {
                        if (声思似诉平(self_id, _0x24b696, aaa_fov, 0x0)) {
                            if (aa_use) 快弹数曲曲();
                            else 江头夜送客(_0x24b696, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x62886f = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x2a3b55 = getCarried(self_id);
                        if (hs_use && !_0x2a3b55['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x62886f['name']) || selectitems['includes'](_0x62886f['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x1bd24c = getCarried(self_id);
                    if (hs_use && !_0x1bd24c['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot) {
                const _0x41d62c = 是夕始觉有(self_id, 'splash_potion', 'hotbar', ap_min);
                const _0x2d3008 = 是夕始觉有(self_id, 'splash_potion', 'inv', 0x0);
                if (_0x2d3008) {
                    if (ap_autobag && !_0x41d62c) openInventory();
                    if (!_0x41d62c) {
                        for (let _0x374700 = ap_slot === -0x1 ? 0x23 : 0x9; _0x374700 > -0x1; _0x374700--) {
                            if (ap_slot > -0x1) {
                                const _0x1d294a = getInventory(self_id, _0x374700);
                                if (_0x1d294a['namespace'] === 'minecraft:air') {
                                    女尝学琵琶(ap_slot, _0x374700, false);
                                    ap_slot = -0x1;
                                    break;
                                }
                            }
                            const _0x2c8e7e = getInventory(self_id, _0x374700);
                            if (ap_slot === -0x1 && _0x2c8e7e['namespace'] === 'minecraft:splash_potion') ap_slot = _0x374700;
                        }
                    }
                    if (ap_autobag && _0x41d62c) setTimeout(() => closeInventory(), 0x64);
                }
            }
            if (SmartInv && (!da_change || self_itemCount != prev_itemCount) && (!da_bow || _0x172dbf['pitch'] > 0x50) && (!da_chest || isChest)) {
                const _0x41dcd1 = 迁谪意因为(self_id, da_slot);
                const _0x5bd5aa = nx_armors['indexOf'](_0x41dcd1);
                if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x41dcd1)) {
                    const _0x29dcf3 = 十六言命曰(self_id, da_slot, da_texture, da_enchant);
                    if (_0x29dcf3 < 0x14) {
                        if (_0x29dcf3 > max_damage) {
                            max_damage = _0x29dcf3;
                            if (da_move) 女尝学琵琶(da_slot, SmartInvCfg['sword'], false, true);
                        } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                    }
                }
                if (da_armor && _0x5bd5aa !== -0x1) {
                    const _0x259665 = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
                    if (_0x259665 > max_armor[_0x5bd5aa]) {
                        max_armor[_0x5bd5aa] = _0x259665;
                        if (da_move) {
                            if (move_armor_slot < 0x0) 女尝学琵琶(da_slot, SmartInvCfg[nx_armors[_0x5bd5aa]], false, true);
                            if (move_armor_slot > -0x1) 女尝学琵琶(da_slot, move_armor_slot, false, true);
                        }
                    } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                }
                if (da_chest) isChest = false;
            }
            if (AutoArmor) {
                let _0x472a4a = 迁谪意因为(self_id, armor_slot);
                let _0x1f72ce = 之凡六百一(self_id, armor_slot);
                if (_0x472a4a != 'other' && _0x1f72ce !== 0x0) {
                    for (let _0x42bebd = 0x0; _0x42bebd < aa_times; _0x42bebd++) {
                        if (_0x472a4a === 'helmet' && _0x1f72ce > 之凡六百一(self_id, -0x2)) 罢悯然自叙(armor_slot);
                        if (_0x472a4a === 'chestplate' && _0x1f72ce > 之凡六百一(self_id, -0x3)) 罢悯然自叙(armor_slot);
                        if (_0x472a4a === 'leggings' && _0x1f72ce > 之凡六百一(self_id, -0x4)) 罢悯然自叙(armor_slot);
                        if (_0x472a4a === 'boots' && _0x1f72ce > 之凡六百一(self_id, -0x5)) 罢悯然自叙(armor_slot);
                    }
                    if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
                }
            }
            if (Remover) {
                const _0x5dadec = getEntityList();
                _0x5dadec['forEach'](_0x28a106 => {
                    let _0x34a69d = false;
                    if (rmer_entity) _0x34a69d = !isPlayer(_0x28a106);
                    if (rmer_item) _0x34a69d = getEntityNamespace(_0x28a106) == 'minecraft:item';
                    if (_0x34a69d) removeEntity(_0x28a106);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x3baa9f = 0x8; _0x3baa9f >= 0x0; _0x3baa9f--) {
                    let _0x217b32 = getInventory(self_id, _0x3baa9f);
                    if (_0x217b32['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x3baa9f);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x34f54b = 0x0; _0x34f54b <= 0x12; _0x34f54b += 0x2) 妇遂命酒使(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x34f54b / 0xa, fc_pos['z'], 0x1);
                    _0x37cb98['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x37cb98['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x3d2b86 = getEntityList();
                _0x3d2b86['forEach'](_0x5c8621 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x5c8621)) && at_lists['length'] > 0x0) {
                        const _0x489487 = getPos(at_lists[0x0]);
                        let _0x2a4bfb = 弦弦掩抑声(_0x489487, getPos(_0x5c8621), 'yaw_pos');
                        let _0x40fad5 = -弦弦掩抑声(_0x489487, getPos(_0x5c8621), 'pitch_pos');
                        const _0x3738eb = getPos(_0x5c8621);
                        const _0x4ee28e = 忽闻水上琵(tt_speed, _0x3738eb, {
                            'yaw': _0x2a4bfb,
                            'pitch': _0x40fad5
                        });
                        setEntityMotion(_0x5c8621, _0x4ee28e['x'] - _0x3738eb['x'], _0x4ee28e['y'] - _0x3738eb['y'], _0x4ee28e['z'] - _0x3738eb['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x44aeb3 = getEntityList();
                _0x44aeb3['forEach'](_0x121b6d => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x121b6d))) {
                        const _0x33c751 = getPos(_0x121b6d);
                        if (typeof arrow_rot[_0x121b6d] === 'undefined') arrow_rot[_0x121b6d] = _0x172dbf;
                        const _0x1719b5 = arrow_rot[_0x121b6d]['yaw'];
                        const _0x19421b = arrow_rot[_0x121b6d]['pitch'];
                        const _0x2da6c9 = 忽闻水上琵(0x1, _0x33c751, {
                            'yaw': _0x1719b5,
                            'pitch': _0x19421b
                        });
                        setEntityMotion(_0x121b6d, _0x2da6c9['x'] - _0x33c751['x'], _0x2da6c9['y'] - _0x33c751['y'], _0x2da6c9['z'] - _0x33c751['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x4ccbee = getEntityList();
                _0x4ccbee['forEach'](_0x44e293 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x44e293)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x44e293;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x272425 = getPos(av_id);
                    setCameraAnchor(_0x272425['x'] - self_pos['x'] + (av_x - 0xa), _0x272425['y'] - self_pos['y'] + (av_y - 0xa), -_0x272425['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0x5822b0 = 0x0; _0x5822b0 < fpsr_rate * 0xa; _0x5822b0++) {
                    for (let _0x4c0fca = 0x0; _0x4c0fca < fpsr_rate * 0xa; _0x4c0fca++) getEntityName(_0x5822b0 + _0x4c0fca);
                }
            }
            if (ArrowParticle) {
                const _0x1a9327 = getEntityList();
                _0x1a9327['forEach'](_0x318fe7 => {
                    if (getEntityNamespace(_0x318fe7) === 'minecraft:arrow') {
                        const _0x58b063 = getPos(_0x318fe7);
                        妇遂命酒使(arp_type, _0x58b063['x'], _0x58b063['y'], _0x58b063['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x2fbdfe = getPos(at_lists[0x0]);
                let _0x1062ed = {};
                if (fb_chest) {
                    const _0x37d778 = 面转轴拨弦(self_id);
                    for (let _0x49d0b3 = -0x2; _0x49d0b3 < 0x3; _0x49d0b3++) {
                        for (let _0x5429fe = -0x2; _0x5429fe < 0x3; _0x5429fe++) {
                            for (let _0x1cff66 = -0x2; _0x1cff66 < 0x3; _0x1cff66++) {
                                const _0x3ee84f = getBlock(_0x37d778['x'] + _0x49d0b3, _0x37d778['y'] + _0x5429fe, _0x37d778['z'] + _0x1cff66);
                                const _0x2ce8d5 = 添酒回灯重([_0x37d778['x'] + _0x49d0b3, _0x37d778['y'] + _0x5429fe, _0x37d778['z'] + _0x1cff66]);
                                if (_0x3ee84f['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x2ce8d5)) {
                                    _0x1062ed = {
                                        'x': _0x37d778['x'] + _0x49d0b3,
                                        'y': _0x37d778['y'] + _0x5429fe,
                                        'z': _0x37d778['z'] + _0x1cff66
                                    };
                                    ca_chest_pos['push'](_0x2ce8d5);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x55cc53 = (_0x524a42 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x45cd5e = 马客在船举(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x45cd5e) {
                    _0x2fbdfe = 忽闻水上琵(_0x55cc53, _0x2fbdfe, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x2b42a3 = 弦弦掩抑声(self_id, _0x2fbdfe, 'yaw_pos');
                let _0x568bef = 忽闻水上琵(_0x55cc53, getPos(self_id), {
                    'yaw': _0x2b42a3,
                    'pitch': 0x0
                });
                if (_0x5984c5['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x5a3db1 = 谁琵琶声停(self_id, at_lists[0x0]);
                if (_0x5a3db1 > fb_seek) {
                    if (_0x524a42) setEntityMotion(self_id, _0x568bef['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x524a42 ? fb_y : _0x418e27['y'], _0x568bef['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0) && _0x5a3db1 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x524a42) setEntityMotion(self_id, fb_randMove && _0x45cd5e ? _0x568bef['x'] - self_pos['x'] : _0x418e27['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x418e27['y'], fb_randMove && _0x45cd5e ? _0x568bef['z'] - self_pos['z'] : _0x418e27['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x1062ed) != '{}') {
                    let _0x2bd84f = 弦弦掩抑声(self_id, _0x1062ed, 'yaw_pos');
                    let _0x11b3bc = 忽闻水上琵(_0x55cc53, getPos(self_id), {
                        'yaw': _0x2bd84f,
                        'pitch': 0x0
                    });
                    if (_0x524a42) setEntityMotion(self_id, _0x11b3bc['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x524a42 ? fb_y : _0x418e27['y'], _0x11b3bc['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x48f0be = 0x0; _0x48f0be < rpc_repeat_times; _0x48f0be++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x172ec5 = 0x0; _0x172ec5 < shift_num; _0x172ec5++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x47e9ab = 0x0;
                    at_lists['forEach'](_0x90c1ec => {
                        let _0x4c8811 = 面转轴拨弦(_0x90c1ec);
                        if (ac_excludeY && Math['abs'](_0x4c8811['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x4c8811['x'], _0x4c8811['y'] + 0x1, _0x4c8811['z']);
                        _0x5cbe99: for (let _0x49a4e8 = -0x1; _0x49a4e8 < 0x2; _0x49a4e8++) {
                            for (let _0x12ddc4 = -0x2; _0x12ddc4 < 0x0; _0x12ddc4++) {
                                for (let _0x516488 = -0x1; _0x516488 < 0x2; _0x516488++) {
                                    let _0x308937 = getBlock(_0x4c8811['x'] + _0x49a4e8, _0x4c8811['y'] + _0x516488, _0x4c8811['z'] + _0x12ddc4);
                                    if (_0x47e9ab > ac_count) break _0x5cbe99;
                                    if ((_0x308937['namespace'] === 'minecraft:bedrock' || _0x308937['namespace'] === 'minecraft:obsidian') && _0x47e9ab < ac_count) {
                                        buildBlock(self_id, _0x4c8811['x'] + _0x49a4e8, _0x4c8811['y'] + _0x516488, _0x4c8811['z'] + _0x12ddc4, 0x1);
                                        _0x47e9ab += 0x1;
                                    }
                                }
                            }
                        }
                    });
                } else _0x37cb98['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x17d4f5 = getEntityList();
                _0x17d4f5['forEach'](_0xd600ab => {
                    if (!才年长色衰(_0xd600ab)) return;
                    const _0x5a0077 = getPos(_0xd600ab);
                    if (getEntityTypeId(_0xd600ab) !== 0x47 || 声暗问弹者(_0xd600ab, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x370504 = 0x0; _0x370504 < 0x9; _0x370504++) {
                            const _0x240350 = getInventory(self_id, _0x370504);
                            if (_0x240350['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x370504);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x5508dd['x'] + _0x5a0077['x']) / 0x2, (_0x5508dd['y'] + _0x5a0077['y']) / 0x2, (_0x5508dd['z'] + _0x5a0077['z']) / 0x2, 0x0);
                        江头夜送客(_0xd600ab, Swing);
                    }
                });
            }
            if (AutoBomb && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0x54dfab => {
                        let _0x24ac55 = 面转轴拨弦(_0x54dfab);
                        let _0x5ae110 = getBlock(_0x24ac55['x'], _0x24ac55['y'] + 0x2, _0x24ac55['z']);
                        if (_0x5ae110['namespace'] === 'minecraft:air') buildBlock(self_id, _0x24ac55['x'], _0x24ac55['y'] + 0x2, _0x24ac55['z'], 0x0);
                        _0x5ae110 = getBlock(_0x24ac55['x'], _0x24ac55['y'] + 0x2, _0x24ac55['z']);
                        if (_0x5ae110['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x24ac55['x'], _0x24ac55['y'] + 0x2, _0x24ac55['z'], 0x0);
                    });
                } else _0x37cb98['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x4c028e => {
                    const _0x2000e7 = 面转轴拨弦(_0x4c028e);
                    let _0x4e13c1 = [
                        [_0x2000e7['x'], _0x2000e7['y'] + 0x2, _0x2000e7['z']],
                        [_0x2000e7['x'] + 0x1, _0x2000e7['y'], _0x2000e7['z']],
                        [_0x2000e7['x'] - 0x1, _0x2000e7['y'], _0x2000e7['z']],
                        [_0x2000e7['x'], _0x2000e7['y'], _0x2000e7['z'] + 0x1],
                        [_0x2000e7['x'], _0x2000e7['y'], _0x2000e7['z'] - 0x1],
                        [_0x2000e7['x'] + 0x1, _0x2000e7['y'] + 0x1, _0x2000e7['z']],
                        [_0x2000e7['x'] - 0x1, _0x2000e7['y'] + 0x1, _0x2000e7['z']],
                        [_0x2000e7['x'], _0x2000e7['y'] + 0x1, _0x2000e7['z'] + 0x1],
                        [_0x2000e7['x'], _0x2000e7['y'] + 0x1, _0x2000e7['z'] - 0x1]
                    ];
                    for (pos of _0x4e13c1) {
                        let _0x58d9bb = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x58d9bb['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x58d9bb['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x424c5b = [];
                let _0x4131c2 = false;
                random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x390565 => {
                    let _0x3ab12c = getPos(_0x390565);
                    if (!((声暗问弹者(self_id, _0x390565) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x390565, ka_fov, 0x0) && 惨将别别时(self_pos, _0x3ab12c, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x418e27['y'] < -0.42))) return;
                    _0x424c5b['push'](_0x390565);
                    KillAura_d_1[_0x390565] = Date['now']();
                    if (typeof KillAura_d_2[_0x390565] !== 'undefined' && KillAura_d_1[_0x390565] - KillAura_d_2[_0x390565] < 0x0) return;
                    _0x4131c2 = true;
                    for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x390565, Swing);
                    KillAura_d_2[_0x390565] = KillAura_d_1[_0x390565] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x4131c2 ? 0x1 : 0x0);
                });
                if (_0x424c5b['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x424c5b['length'] + '个目标' : 添酒回灯重(_0x424c5b['map'](_0x2cb667 => getEntityName(_0x2cb667))), '§r'));
                const _0x2ffa32 = _0x424c5b['length'] * random_num * ka_times;
                if (ka_show) _0x37cb98['push'](归客不发寻(0x1, 'APS', _0x2ffa32 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x418e27['y'] < -0.074 && !_0x524a42) setMotion(_0x418e27['x'], -sd_speed / 0xf, _0x418e27['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x1926f7 = 忽闻水上琵(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                妇遂命酒使(srp_type, _0x1926f7['x'], _0x1926f7['y'] - 1.8 + srp_y, _0x1926f7['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x4fd886 = motion_list['shift']();
                setMotion(_0x4fd886[0x0], _0x4fd886[0x1], _0x4fd886[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x37cb98['push'](归客不发寻(0x1, self_item['name'] + ' x' + self_item['count'], '§r'));
                const _0x3de6d0 = 酒欲饮无管(_0x418e27, self_pos, 0xa);
                var _0x38b5d6 = sca_move || self_moving ? 弦弦掩抑声(_0x3de6d0, self_id, 'yaw_pos') : _0x172dbf['yaw'];
                var _0x8720da = sca_move || self_moving ? 弦弦掩抑声(_0x3de6d0, self_id, 'pitch_pos') : _0x172dbf['pitch'];
                if (!sca_acc) _0x38b5d6 = roundAngle(_0x38b5d6, sca_prec);
                if (!sca_acc) _0x8720da = roundAngle(_0x8720da, sca_prec);
                if (sca_auto) {
                    let _0xa19a91 = {};
                    let _0x235c8e = Infinity;
                    for (let _0x1bacfe = -0x3; _0x1bacfe <= 0x3; _0x1bacfe++) {
                        for (let _0x9f0723 = -0x3; _0x9f0723 <= -0x1; _0x9f0723++) {
                            for (let _0x1f315c = -0x3; _0x1f315c <= 0x3; _0x1f315c++) {
                                let _0x4014cf = {
                                    'x': _0x1bacfe + _0x5508dd['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0x9f0723,
                                    'z': _0x1f315c + _0x5508dd['z']
                                };
                                const _0x1782fd = getBlock(_0x4014cf['x'], _0x4014cf['y'], _0x4014cf['z']);
                                if (_0x1782fd['namespace'] == 'minecraft:air') continue;
                                let _0x5c37f9 = Math['sqrt'](_0x1bacfe * _0x1bacfe - _0x9f0723 * _0x9f0723 + _0x1f315c * _0x1f315c);
                                if (_0x5c37f9 < _0x235c8e) {
                                    _0x235c8e = _0x5c37f9;
                                    _0xa19a91 = _0x4014cf;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0xa19a91) != '{}') {
                        let _0x2b6cb0 = 眉信手续续(_0xa19a91, _0x5508dd, 0x1, true);
                        _0x2b6cb0['forEach'](_0x22b8a7 => {
                            if (sca_surface) 事今漂沦憔(Math['round'](_0x22b8a7['x']), Math['round'](sca_current - 0x1), Math['round'](_0x22b8a7['z']));
                            else buildBlock(self_id, Math['round'](_0x22b8a7['x']), Math['round'](sca_current - 0x1), Math['round'](_0x22b8a7['z']), 0x1);
                        });
                    }
                }
                for (let _0x589709 = 0x0; _0x589709 < sca_len; _0x589709++) {
                    const _0x3aff60 = 忽闻水上琵(_0x589709, self_pos, {
                        'yaw': _0x38b5d6,
                        'pitch': sca_y ? _0x8720da : 0x0
                    });
                    let _0x33fd5b = {
                        'x': Math['floor'](_0x3aff60['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0x3aff60['z'])
                    };
                    let _0x2f7536 = getBlock(_0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x2f7536['namespace'])) continue;
                    if (sca_fake) setBlock(_0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 事今漂沦憔(_0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z']);
                    else buildBlock(self_id, _0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z'], 0x1);
                    if (sca_up) {
                        const _0x1d0cf1 = getBlock(_0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x1d0cf1['namespace'])) buildBlock(self_id, _0x33fd5b['x'], Math['floor'](_0x33fd5b['y']), _0x33fd5b['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x41fae2 = 0x0; _0x41fae2 < 0x9; _0x41fae2++) {
                    const _0x2e6658 = getInventory(self_id, _0x41fae2);
                    if (_0x2e6658['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x41fae2);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target) {
                    let _0x1e81f7 = [];
                    const _0x4f1cc1 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x36a137 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x214b75 = 面转轴拨弦(th_target);
                    if (th_name) _0x1e81f7['push'](getEntityName(th_target));
                    if (th_carry) _0x1e81f7['push'](_0x4f1cc1['name'] + ' x' + _0x4f1cc1['count']);
                    if (th_dist) _0x1e81f7['push']('距离: ' + _0x36a137 + 'm');
                    if (th_health) _0x1e81f7['push']('血量: ' + 弹说尽心中(th_target, modes['th_health_mode']));
                    if (th_pos) _0x1e81f7['push']('[' + _0x214b75['x'] + ', ' + _0x214b75['y'] + ', ' + _0x214b75['z'] + ']');
                    updateTextContent(th_id, _0x1e81f7['join']('\n'));
                    updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                    updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                }
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x524a42 && _0x418e27['y'] > -av_minY) av_pos['push'](_0x5508dd);
                    if (!av_running && _0x524a42) av_pos = [];
                    if (!av_running && _0x418e27['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x2e3f73 = av_pos.pop();
                            setPos(_0x2e3f73['x'], _0x2e3f73['y'], _0x2e3f73['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x418e27['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0x10762f = {
                        'rot': _0x172dbf,
                        'yHeadRot': 0x0
                    };
                    const _0x21d801 = {
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
                        ..._0x10762f
                    };
                    const _0x14bd45 = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x10762f
                    };
                    sendPlayerAuthInput(_0x21d801);
                    sendMovePlayer(_0x14bd45);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x524a42 && _0x418e27['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x418e27['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0xd9865b = av_pos[0x0];
                            setPos(_0xd9865b['x'], _0xd9865b['y'], _0xd9865b['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x524a42)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0xa2654f = 0x0; _0xa2654f < gm_count; _0xa2654f++) {
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
                            'rot': _0x172dbf,
                            'yHeadRot': 0x0
                        });
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x14dcfb = 0x0; _0x14dcfb < gm_count; _0x14dcfb++) {
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
                                'rot': _0x172dbf,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 谁琵琶声停(self_id, at_lists[0x0]) < kd_distance && (_0x524a42 || !kd_only_ground)) {
                const _0x57d734 = 弦弦掩抑声(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x4bfd8b = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x57d734,
                    'pitch': _0x172dbf['pitch']
                });
                if (kd_anti) silentMove(_0x4bfd8b['x'] * 0x2, _0x4bfd8b['y'] * 0x2, _0x4bfd8b['z'] * 0x2);
                else setMotion(_0x4bfd8b['x'] - self_pos['x'], _0x418e27['y'], _0x4bfd8b['z'] - self_pos['z']);
            }
            if (AirJump && _0x418e27['y'] < -0.42) {
                let _0x375f2f = 酒欲饮无管(_0x418e27, self_pos, 瑟瑟主人下(self_id));
                let _0x2111fc = 弦弦掩抑声(_0x375f2f, self_id, 'yaw_pos');
                let _0x28f182 = 忽闻水上琵(aj_speed / 0xa, self_pos, {
                    'yaw': _0x2111fc,
                    'pitch': 0x0
                });
                setMotion(_0x28f182['x'] - self_pos['x'], aj_height / 0x64, _0x28f182['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0x55d898 = 0x0; _0x55d898 < di_speed; _0x55d898++) {
                    let _0x353c23 = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0x353c23, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) > tra_range) {
                let _0x2e30ed = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                let _0x2ffd93 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
                let _0x9b511a = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x2e30ed,
                    'pitch': -_0x2ffd93
                });
                setPos(_0x9b511a['x'], _0x9b511a['y'], _0x9b511a['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x490d1f = getPos(self_id);
                _0x490d1f['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0x22fb14 => {
                    let _0x4c5530 = getPos(_0x22fb14);
                    _0x4c5530['y'] += 0.765;
                    let _0x1f1ceb = 弦弦掩抑声(_0x490d1f, _0x4c5530, 'yaw_pos');
                    let _0x480821 = 弦弦掩抑声(_0x490d1f, _0x4c5530, 'pitch_pos');
                    for (let _0x1f59ee = 0x0; _0x1f59ee < 声暗问弹者(_0x22fb14, self_id); _0x1f59ee += (0xb - lp_size) / 0x5) {
                        let _0x35764c = 忽闻水上琵(-_0x1f59ee, getPos(self_id), {
                            'yaw': _0x1f1ceb,
                            'pitch': -_0x480821
                        });
                        妇遂命酒使(lp_type, _0x35764c['x'], _0x35764c['y'] - 1.53 + lp_offset / 0xa, _0x35764c['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x165ac3 = spm_text;
                const _0x36d168 = 'abcdef';
                if (spm_gradual) _0x165ac3 = 送客湓浦口(_0x165ac3);
                if (spm_rainbow) _0x165ac3 = '§' + _0x36d168[马客在船举(0x0, _0x36d168['length'] - 0x1)] + _0x165ac3;
                if (spm_file) {
                    let _0x10a67f = 抱琵琶半遮(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x165ac3 = _0x10a67f[马客在船举(0x0, _0x10a67f['length'] - 0x1)];
                }
                if (spm_attack && at_lists['length'] > 0x0) _0x165ac3 = ' §e@' + at_lists['map'](_0x6e64d2 => getEntityName(_0x6e64d2))['join'](',') + ' §r' + _0x165ac3;
                for (let _0x3627bb = 0x0; _0x3627bb < spm_count; _0x3627bb++) {
                    let _0xebe77d = 无限事轻拢(0x6);
                    sendChatMessage(spm_random ? _0x165ac3 + '§r || ' + _0xebe77d : _0x165ac3);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x55e47a => setEntitySize(_0x55e47a, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x5dfdd6 => {
                    const _0x59e6be = 忽闻水上琵(suck_range, self_pos, _0x172dbf);
                    setRealPos(_0x5dfdd6, _0x59e6be['x'], _0x59e6be['y'], _0x59e6be['z']);
                });
            }
            if (Velocity && self_moving) {
                let _0x3abe0f = _0x172dbf['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x152577 = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0x3abe0f = 弦弦掩抑声(self_id, _0x152577, 'yaw_pos');
                }
                let _0x151c56 = 忽闻水上琵((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x3abe0f,
                    'pitch': 0x0
                });
                setMotion(_0x151c56['x'] - self_pos['x'], vec_bhop && (_0x524a42 || bhop_airjump) && (!bhop_airjump || _0x418e27['y'] < -0.42) ? bhop_heigh : _0x418e27['y'], _0x151c56['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x3524cb = getCameraRotation();
                const _0x3895a6 = 忽闻水上琵(fb_speed / 0xa, self_pos, {
                    'yaw': _0x3524cb['yaw'] > 0x0 ? 0xb4 - _0x3524cb['yaw'] : -0xb4 - _0x3524cb['yaw'],
                    'pitch': -_0x3524cb['pitch']
                });
                if (!_0x524a42 && self_moving) setMotion(_0x3895a6['x'] - self_pos['x'], 0x0, _0x3895a6['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0xb2765e => {
                    const _0x12ebaa = getPos(_0xb2765e);
                    妇遂命酒使(tp_type, _0x12ebaa['x'], _0x12ebaa['y'] + 0.3, _0x12ebaa['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && (self_itemCount != prev_itemCount || cleaner_slot != 0x23 || !ic_change) && ticks % ic_delay === 0x0 && (!ic_bow || _0x172dbf['pitch'] > 0x50) && (!ic_chest || isChest)) {
                let _0x4a7e3d = {};
                for (let _0x5163c2 = 0x0; _0x5163c2 < ic_max; _0x5163c2++) {
                    let _0x5c7a8e = cleaner_slot - _0x5163c2;
                    const _0x436bef = getInventory(self_id, _0x5c7a8e);
                    if (_0x436bef['count'] === 0x0) continue;
                    let _0x5a5a84 = false;
                    let _0x390692 = clear_config[_0x436bef['namespace']];
                    if (typeof _0x4a7e3d[_0x436bef['namespace']] === 'undefined') _0x4a7e3d[_0x436bef['namespace']] = 安感斯人言(-0x2, _0x436bef['namespace']);
                    let _0xd26348 = _0x4a7e3d[_0x436bef['namespace']];
                    if (modes['ic_mode'] === 0x0 && _0x390692) _0x5a5a84 = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x390692 || _0x390692 && (_0x390692['max_num'] === -0x1 || _0xd26348 > _0x390692['max_num']) && (_0x390692['aux'] === 'any' || _0x436bef['aux'] === _0x390692['aux']))) _0x5a5a84 = true;
                    if (ic_move && !_0x5a5a84 && typeof _0x390692 !== 'undefined' && _0x390692['slot'] !== 'undefined') 女尝学琵琶(_0x5c7a8e, _0x390692['slot'], false, true);
                    if (_0x5a5a84) {
                        if (trash_slot > -0x1 && _0x5c7a8e > 0x8) 女尝学琵琶(_0x5c7a8e, trash_slot, false, true);
                        dropPlayerInventorySlot(self_id, _0x5c7a8e, false, modes['ic_mode'] === 0x0 && _0x390692 || modes['ic_mode'] === 0x1 && !_0x390692);
                    }
                }
                if (cleaner_slot > 0x0) cleaner_slot -= ic_delay;
                else cleaner_slot = 0x23;
                if (ic_chest) isChest = false;
            }
            if (SafeWalk && self_moving) {
                const _0x35e5b7 = getEntityRot(self_id)['yaw'];
                const _0x222810 = 忽闻水上琵(0.3, _0x5508dd, {
                    'yaw': _0x35e5b7,
                    'pitch': 0x0
                });
                const _0x407ee7 = getBlock(_0x222810['x'], _0x222810['y'] - 0x1, _0x222810['z']);
                if (_0x407ee7['namespace'] === 'minecraft:air' && _0x524a42) setMotion((-_0x222810['x'] + self_pos['x']) / 0x8, _0x418e27['y'], (-_0x222810['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && self_moving) {
                const _0x21e52d = getEntityRot(self_id)['yaw'];
                const _0x10a7ab = 忽闻水上琵(0.5, _0x5508dd, {
                    'yaw': _0x21e52d,
                    'pitch': 0x0
                });
                const _0x1c2175 = getBlock(_0x10a7ab['x'], _0x10a7ab['y'], _0x10a7ab['z']);
                if (_0x1c2175['namespace'] != 'minecraft:air') setMotion(_0x418e27['x'], sp_speed / 0xf, _0x418e27['z']);
            }
            if (Fly && (!_0x524a42 || !fly_air) && (!fly_move || self_moving)) {
                const _0x314c36 = fly_ud ? fly_current : 0x0;
                let _0xb2d56d = 酒欲饮无管(_0x418e27, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (!fly_y) setPos(_0xb2d56d['x'], self_pos['y'] + _0x314c36, _0xb2d56d['z']);
                    if (fly_y) setPos(self_pos['x'], _0xb2d56d['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, -0.01, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0xb2d56d['x'] - self_pos['x'], _0xb2d56d['y'] - self_pos['y'] + _0x314c36, _0xb2d56d['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0xb2d56d['x'], _0xb2d56d['y'], _0xb2d56d['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0xb2d56d['x'],
                        'y': _0xb2d56d['y'],
                        'z': _0xb2d56d['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0x172dbf['pitch'],
                        'yaw': _0x172dbf['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x3e7058 = 酒欲饮无管(_0x418e27, self_pos, 0x1);
                const _0x3a40d1 = 弦弦掩抑声(self_id, _0x3e7058, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x3a40d1) + '°方向移动');
            }
            if (FakeWater) setBlock(_0x5508dd['x'], _0x5508dd['y'], _0x5508dd['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x418e27['x'], -0x186a0, _0x418e27['z']);
            if (Hover) setMotion(_0x418e27['x'], 0.05, _0x418e27['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0xbaa0aa = getPos(at_lists[0x0]);
                const _0x36ebcb = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0xbaa0aa['x'] + _0x36ebcb, _0xbaa0aa['y'] + rid_y + 0x1, _0xbaa0aa['z'] + _0x36ebcb);
                _0x37cb98['push'](归客不发寻(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x4421c0 = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x147654 = 忽闻水上琵(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x4421c0['yaw'] > 0x0 ? 0xb4 - _0x4421c0['yaw'] : -0xb4 - _0x4421c0['yaw'],
                        'pitch': -_0x4421c0['pitch']
                    });
                    if (spr_hor) _0x147654['y'] = self_pos['y'];
                    const _0x2dd01a = getBlock(_0x147654['x'], _0x147654['y'], _0x147654['z']);
                    if (_0x2dd01a['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x147654['x'], _0x147654['y'], _0x147654['z']);
                            setEntityMotion(self_id, _0x418e27['x'], -1e-7, _0x418e27['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x147654['x'] - self_pos['x'], _0x147654['y'] - self_pos['y'], _0x147654['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x147654['x'], _0x147654['y'], _0x147654['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x147654['x'],
                                'y': _0x147654['y'],
                                'z': _0x147654['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x172dbf['pitch'],
                                'yaw': _0x172dbf['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x26a5ee = Math['round'](-cs_count / 0x2); _0x26a5ee <= Math['round'](cs_count / 0x2); _0x26a5ee++) {
                    const _0x129859 = 0xa ** _0x26a5ee;
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x5508dd['x'], _0x5508dd['y'], _0x5508dd['z'], _0x129859 ** 0x2);
                    if (modes['cs_mode'] === 0x1) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x64));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x64));
                    if (modes['cs_mode'] === 0x4) sendSound(_0x129859, _0x129859, _0x129859, _0x129859, _0x26a5ee);
                    if (modes['cs_mode'] === 0x5) getEntityList()['forEach'](_0x1b9cc0 => 江头夜送客(_0x1b9cc0, false));
                }
            }
            if (KickAura && at_lists['length'] > 0x0) {
                let _0x17735a = [];
                if (ka_player) _0x17735a['concat'](_0x21ec62['map'](_0x30be3e => _0x30be3e['id']));
                if (ka_target) _0x17735a['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0x17735a['forEach'](_0x18a184 => {
                    if (_0x18a184 == self_id) return;
                    const _0x3e35a0 = getEntityName(_0x18a184);
                    let _0x4d38d0 = _0x3e35a0['indexOf'](']') - 0x2;
                    let _0x9a6e9e = ['b', 'c', 'e', 'a'];
                    for (let _0x23983f of _0x9a6e9e) {
                        if (_0x3e35a0['indexOf']('·§' + _0x23983f) != -0x1) {
                            _0x4d38d0 = _0x3e35a0['indexOf']('·§' + _0x23983f);
                            break;
                        }
                    }
                    let _0x4ee232 = _0x4d38d0 === -0x1 ? _0x3e35a0 : _0x3e35a0['slice'](_0x4d38d0 + 0x3, _0x3e35a0['length']);
                    if (_0x4ee232['includes']('【') && _0x4ee232['includes']('】')) _0x4ee232 = 琵琶行浔阳(_0x4ee232, '【', '】');
                    for (let _0x11cae5 = 0x0; _0x11cae5 < ka_count; _0x11cae5++) executeCommand('/tell "' + _0x4ee232 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x2159a5 = 0x0; _0x2159a5 < ka_count; _0x2159a5++) executeCommand('/tell @a[' + _0x17735a['map'](_0x59d210 => 'name="' + getEntityName(_0x59d210) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x418e27['y'] < -as_minY && !_0x524a42) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x29ae36 = 0x0; _0x29ae36 < 0x9; _0x29ae36++) {
                        const _0x50daf7 = getInventory(self_id, _0x29ae36);
                        if (_0x50daf7['isBlock'] || as_water && _0x50daf7['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x29ae36);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x159a3e of 眉信手续续(_0x5508dd, {
                            'x': _0x5508dd['x'],
                            'y': _0x5508dd['y'] - as_minY * 0x5,
                            'z': _0x5508dd['z']
                        }, 0x1, true)) {
                        const _0x4cf87d = getBlock(_0x159a3e['x'], _0x159a3e['y'], _0x159a3e['z']);
                        if (_0x4cf87d['namespace'] != 'minecraft:air') continue;
                        const _0x2405ba = getBlock(_0x159a3e['x'], _0x159a3e['y'] - 0x1, _0x159a3e['z']);
                        if (_0x2405ba['namespace'] === 'minecraft:air' || _0x2405ba['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x159a3e['x'], _0x159a3e['y'], _0x159a3e['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket') {
                    if (as_fake) callModule(0x25, '{"value":true}');
                    buildBlock(self_id, _0x5508dd['x'], _0x5508dd['y'] - as_minY * 3.1, _0x5508dd['z'], 0x0);
                    if (as_fake) callModule(0x25, '{"value":false}');
                }
                if (as_near) {
                    let _0xcef0aa = {};
                    let _0x4add0a = Infinity;
                    for (let _0x27561f = -0x5; _0x27561f <= 0x5; _0x27561f++) {
                        for (let _0x30262b = -0x1; _0x30262b <= 0x0; _0x30262b++) {
                            for (let _0x48f727 = -0x5; _0x48f727 <= 0x5; _0x48f727++) {
                                let _0xbc8f9f = Math['sqrt'](_0x27561f * _0x27561f + _0x48f727 * _0x48f727 + _0x30262b * _0x30262b);
                                let _0x5b3319 = {
                                    'x': _0x27561f + _0x5508dd['x'],
                                    'y': _0x30262b + _0x5508dd['y'],
                                    'z': _0x48f727 + _0x5508dd['z']
                                };
                                const _0x369832 = getBlock(_0x5b3319['x'], _0x5b3319['y'], _0x5b3319['z']);
                                if (_0x369832['namespace'] === 'minecraft:air') continue;
                                if (_0xbc8f9f < _0x4add0a) {
                                    _0x4add0a = _0xbc8f9f;
                                    _0xcef0aa = _0x5b3319;
                                }
                            }
                        }
                    }
                    if (_0xcef0aa != {}) {
                        let _0x28e378 = {
                            'x': _0x5508dd['x'],
                            'y': _0x5508dd['y'] - 0x1 + _0x418e27['y'] * 0x3,
                            'z': _0x5508dd['z']
                        };
                        let _0x3e41e7 = 眉信手续续(_0xcef0aa, _0x28e378, 0.8, true);
                        _0x3e41e7['forEach'](_0x4d0413 => {
                            const _0x5a1759 = getBlock(_0x4d0413['x'], _0x4d0413['y'], _0x4d0413['z']);
                            if (_0x5a1759['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x4d0413['x']), Math['floor'](_0x4d0413['y']), Math['floor'](_0x4d0413['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0x26d435 = getEntityRot(at_lists[0x0]);
                let _0x16c38d = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x28aedf = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x28aedf : _0x26d435['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x215067 = 忽闻水上琵(-aai_len, _0x16c38d, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x215067['x'], _0x16c38d['y'] + 1.83 + aai_h, _0x215067['z']);
                if (modes['sur_mode'] === 0x1) 二年恬然自(_0x215067['x'], _0x16c38d['y'] + 1.83 + aai_h, _0x215067['z']);
                _0x37cb98['push'](归客不发寻(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0xf39435 = [];
                if (sp_target) _0xf39435 = at_lists;
                if (sp_all) _0xf39435 = getPlayerList();
                if (sp_entity) _0xf39435 = getEntityList();
                if (sp_posList['length'] > 0x0) _0xf39435 = sp_posList;
                let _0x287371 = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x3a3633 = 0x0; _0x3a3633 < sp_vec; _0x3a3633++) {
                    if (sp_data['length'] > 0x0) _0x287371 = sp_data['shift']()['sounds'];
                    if (_0x287371['length'] > 0x0) {
                        _0x9ac046: for (let _0x580ed4 of _0x287371) {
                            let _0x16c70d = _0x580ed4['sound'];
                            let _0xf3689 = _0x580ed4['level'];
                            if (sp_large) {
                                const _0x57f5ff = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x4c1a2f = -_0x57f5ff; _0x4c1a2f <= _0x57f5ff; _0x4c1a2f += sp_space) {
                                    for (let _0x3015ff = -_0x57f5ff; _0x3015ff <= _0x57f5ff; _0x3015ff += sp_space) {
                                        sendSound(Number(_0x16c70d), self_pos['x'] + _0x4c1a2f, self_pos['y'] + sp_y, self_pos['z'] + _0x3015ff, Number(_0xf3689));
                                    }
                                }
                                continue _0x9ac046;
                            }
                            _0xf39435['forEach'](_0x1f923f => {
                                if (typeof _0x1f923f != 'string')
                                    for (let _0x1e3e89 = 0x0; _0x1e3e89 < sp_count; _0x1e3e89++) sendSound(Number(_0x16c70d), _0x1f923f['x'], _0x1f923f['y'] + sp_y, _0x1f923f['z'], Number(_0xf3689));
                                else {
                                    if (_0x1f923f === self_id && sp_exclude) return;
                                    const _0x39ae0c = getPos(_0x1f923f);
                                    let _0xcc09e7 = 忽闻水上琵(sp_distance, _0x39ae0c, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x8ba86b = 0x0; _0x8ba86b < sp_count; _0x8ba86b++) sendSound(Number(_0x16c70d), _0xcc09e7['x'], _0xcc09e7['y'] + sp_y, _0xcc09e7['z'], Number(_0xf3689));
                                }
                            });
                        }
                    }
                }
                if (sp_data['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
            }
            if (_0x5984c5['current'] < 0x6) _0x37cb98['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x5984c5['current']) <= ad_min) {
                const _0x301526 = modes['ad_mode'];
                if (_0x301526 === 0x2) removeEntity(self_id);
                if (_0x301526 === 0x0 || _0x301526 === 0x1) executeCommand(_0x301526 === 0x0 ? '/hub' : '/again');
                if (_0x301526 === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x172dbf['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x301526 === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x301526 === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x301526 === 0x6) leaveWorld();
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
                const _0x2f9386 = getBlock(_0x5508dd['x'], _0x5508dd['y'] - 0x1, _0x5508dd['z']);
                if (_0x2f9386['namespace'] === 'minecraft:flowing_water' || _0x2f9386['namespace'] === 'minecraft:water' || _0x2f9386['namespace'] === 'minecraft:flowing_lava' || _0x2f9386['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x418e27['x'], 0x0, _0x418e27['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x190149 => {
                    let _0x45ee73 = 京都声问其(_0x190149);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x45ee73 + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x190149) + '_' + _0x190149 + '.txt', _0x45ee73);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0x566542 = at_lists[0x0];
                const _0x2f672e = 声暗问弹者(self_id, _0x566542);
                const _0x2773a6 = 声思似诉平(self_id, _0x566542, aa_fov, 0x0);
                if (_0x2f672e <= aa_range && _0x2773a6 || aa_throw) {
                    const _0x344109 = 马客在船举(aa_min, aa_max);
                    let _0x47835a = 弦弦掩抑声(self_id, _0x566542, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x50a85e = 弦弦掩抑声(self_id, _0x566542, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x47835a <= 0xb4 && _0x47835a >= -0xb4 && _0x50a85e <= 0x5a && _0x50a85e >= -0x5a) {
                        let _0x18563d = _0x47835a >= 0x0 ? -_0x344109 : _0x344109;
                        let _0x34f4d4 = _0x50a85e >= 0x0 ? _0x344109 : -_0x344109;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x47835a) < _0x344109 || Math['abs'](_0x50a85e) < _0x344109)) {
                            _0x18563d = -_0x47835a / ((0x28 - _0x344109) / 0x2);
                            _0x34f4d4 = -_0x50a85e / ((0x28 - _0x344109) / 1.125);
                        }
                        const _0x41837b = 声思似诉平(self_id, _0x566542, aa_prec * 0x2, 0x1);
                        const _0x44e8f0 = 声思似诉平(self_id, _0x566542, aa_prec * 0x4, 0x2);
                        if (!_0x41837b) setLocalPlayerTurn(0x0, _0x18563d);
                        if (!_0x44e8f0 && !aa_throw || !isSimilar(_0x50a85e, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x34f4d4, 0x0);
                    }
                    _0x37cb98['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x566542), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0x18def1 => {
                    const _0x1e2e5b = _0x18def1;
                    const _0x59d196 = getPos(_0x1e2e5b);
                    if (!_0x1e2e5b || !findEntity(_0x1e2e5b)) return;
                    if (声暗问弹者(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x143322 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x418e27;
                        for (let _0x4a78c3 = 0x0; _0x4a78c3 < ia_move; _0x4a78c3++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x59d196['x'] + _0x143322, _0x59d196['y'], _0x59d196['z'] + _0x143322, 0x1);
                                if (!ia_nopacket) sendPlayerAuthInput({
                                    'inputMode': 0x2,
                                    'playMode': 0x0,
                                    'pos': {
                                        'x': _0x59d196['x'] + _0x143322,
                                        'y': _0x59d196['y'] + ia_offset / 0x5,
                                        'z': _0x59d196['z'] + _0x143322
                                    },
                                    'flags': [0x24, 0x12],
                                    'actions': [{
                                        'pos': {
                                            'x': _0x59d196['x'] + _0x143322,
                                            'y': _0x59d196['y'] + ia_offset / 0x5,
                                            'z': _0x59d196['z'] + _0x143322
                                        },
                                        'value': 0x1,
                                        'type': 0x19
                                    }],
                                    'motion': {
                                        'x': 0x0,
                                        'y': 0x0,
                                        'z': 0x0
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x59d196['x'], _0x59d196['y'], _0x59d196['z']);
                            if (modes['ia_mode'] === 0x1) sendPlayerAuthInput({
                                'inputMode': 0x2,
                                'playMode': 0x0,
                                'pos': {
                                    'x': _0x59d196['x'] + _0x143322,
                                    'y': _0x59d196['y'] + ia_offset / 0x5,
                                    'z': _0x59d196['z'] + _0x143322
                                },
                                'flags': [0x24, 0x12],
                                'actions': [{
                                    'pos': {
                                        'x': _0x59d196['x'] + _0x143322,
                                        'y': _0x59d196['y'] + ia_offset / 0x5,
                                        'z': _0x59d196['z'] + _0x143322
                                    },
                                    'value': 0x1,
                                    'type': 0x19
                                }],
                                'motion': {
                                    'x': 0x0,
                                    'y': 0x0,
                                    'z': 0x0
                                }
                            });
                        }
                        if (ia_jump) playerJump();
                        for (let _0x2fae1d = 0x0; _0x2fae1d < ia_attack; _0x2fae1d++) 江头夜送客(_0x1e2e5b, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) 初为霓裳后();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) 初为霓裳后();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x37cb98['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 添酒回灯重(ia_targets['map'](_0x5aeac3 => getEntityName(_0x5aeac3))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 慢捻抹复挑(_0x5508dd);
            if (AutoVoid) {
                const _0x10af22 = 面转轴拨弦(self_id);
                const _0x29f740 = getBlock(_0x10af22['x'], _0x5508dd['y'] - 0x1, _0x10af22['z']);
                for (let _0xe2a661 = -0x2; _0xe2a661 < 0x3; _0xe2a661++) {
                    for (let _0x2f440e = -0x2; _0x2f440e < 0x3; _0x2f440e++) {
                        const _0x12699d = getBlock(_0x10af22['x'] + _0xe2a661, _0x5508dd['y'] - 0x1, _0x10af22['z'] + _0x2f440e);
                        if (_0x12699d['namespace'] === 'minecraft:air' && _0x418e27['y'] < -0.0783 && _0x418e27['y'] > -0.0785 && _0x29f740['namespace'] != 'minecraft:air') {
                            const _0x2cf90f = -弦弦掩抑声(self_id, {
                                'x': _0x10af22['x'] + _0xe2a661,
                                'y': self_pos['y'],
                                'z': _0x10af22['z'] - _0x2f440e
                            }, 'yaw_pos');
                            const _0x405106 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x2cf90f,
                                'pitch': 0x0
                            });
                            setMotion(_0x405106['x'] - self_pos['x'], _0x418e27['y'], _0x405106['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x322b6e = getEntityList();
                _0x322b6e['forEach'](_0x515a0a => {
                    if ((getEntityTypeId(_0x515a0a) === 0x400055 || getEntityTypeId(_0x515a0a) === 0x400056 || getEntityTypeId(_0x515a0a) === 0xc00050) && 声暗问弹者(_0x515a0a, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x515a0a);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0x247753 = 弦弦掩抑声(getPos(_0x515a0a), self_id, 'yaw_pos');
                            const _0x5796af = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x247753,
                                'pitch': _0x172dbf['pitch']
                            });
                            setMotion(_0x5796af['x'] - self_pos['x'], _0x418e27['y'], _0x5796af['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 江头夜送客(_0x515a0a, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x17b854 = getPlayerList();
                let _0x5b486b = [];
                let _0x5b2358 = false;
                let _0xd07a35 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x3f64cf = 0x1; _0x3f64cf <= tr_len; _0x3f64cf += tr_dens / 0xa) {
                    let _0x5afb75 = 少小时欢乐(_0x3f64cf, _0x172dbf['pitch'], tr_speed, tr_g)['data'];
                    let _0xc5e6e6 = 忽闻水上琵(_0x3f64cf, self_pos, {
                        'yaw': _0x172dbf['yaw'],
                        'pitch': 0x0
                    });
                    let _0x5f26be = getBlock(_0xc5e6e6['x'], _0xc5e6e6['y'] + _0x5afb75, _0xc5e6e6['z']);
                    if (tr_show || !_0x5b2358) {
                        _0x17b854['forEach'](_0x31048b => {
                            if (!_0x5b2358) {
                                let _0x261bb4 = getPos(_0x31048b);
                                let _0x28647f = {
                                    'x': _0xc5e6e6['x'],
                                    'y': _0xc5e6e6['y'] + _0x5afb75,
                                    'z': _0xc5e6e6['z']
                                };
                                let _0x301c1c = getEntitySize(_0x31048b);
                                if (_0x28647f['x'] <= _0x261bb4['x'] + _0x301c1c['x'] / 0x2 && _0x28647f['x'] >= _0x261bb4['x'] - _0x301c1c['x'] / 0x2 && _0x28647f['y'] <= _0x261bb4['y'] + _0x301c1c['y'] / 0x2 && _0x28647f['y'] >= _0x261bb4['y'] - _0x301c1c['y'] / 0x2 && _0x28647f['z'] <= _0x261bb4['z'] + _0x301c1c['x'] / 0x2 && _0x28647f['z'] >= _0x261bb4['z'] - _0x301c1c['x'] / 0x2) {
                                    _0x37cb98['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x31048b), '§r'));
                                    _0x5b2358 = true;
                                }
                            }
                        });
                    }
                    if (_0x5f26be['namespace'] != 'minecraft:air' || _0x5b2358) {
                        _0xd07a35 = _0xc5e6e6;
                        if (modes['tr_mode'] === 0x1 && _0x5f26be['namespace'] != 'minecraft:air') {
                            for (let _0x365326 = 0x0; _0x365326 <= 0x14; _0x365326 += 0x2) 妇遂命酒使(tr_type, _0xd07a35['x'], _0xd07a35['y'] + _0x5afb75 + _0x365326 / 0xa, _0xd07a35['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0xf2a44c = getDistance(_0xd07a35, self_pos);
                    for (let _0x283055 = 0x1; _0x283055 <= _0xf2a44c; _0x283055 += tr_dens / 0xa) {
                        let _0xb77106 = 少小时欢乐(_0x283055, _0x172dbf['pitch'], tr_speed, tr_g)['data'];
                        let _0x231b63 = (tr_offset - 0xa) / 0xa;
                        let _0x1d5fb8 = _0x172dbf['yaw'] + 0x5a;
                        if (_0x1d5fb8 > 0xb4) _0x1d5fb8 = _0x1d5fb8 - 0x168;
                        if (_0x1d5fb8 < -0xb4) _0x1d5fb8 = _0x1d5fb8 + 0x168;
                        let _0x5d90cc = 忽闻水上琵(_0x231b63, self_pos, {
                            'yaw': _0x1d5fb8,
                            'pitch': 0x0
                        });
                        let _0x13eb3a = 忽闻水上琵(_0x283055, _0x5d90cc, {
                            'yaw': _0x172dbf['yaw'] - Math['atan'](_0x231b63 / _0xf2a44c) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x2e10f1 = getBlock(_0x13eb3a['x'], _0x13eb3a['y'] + _0xb77106, _0x13eb3a['z']);
                        if (modes['tr_mode'] === 0x0 && _0x2e10f1['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x13eb3a['x'], _0x13eb3a['y'] + _0xb77106 + 0.5, _0x13eb3a['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x59cdc7 = 面转轴拨弦(self_id);
                for (let _0xbce0eb = -0x4; _0xbce0eb < 0x5; _0xbce0eb++) {
                    for (let _0x51ae79 = -0x4; _0x51ae79 < 0x5; _0x51ae79++) {
                        const _0x55d1f8 = getBlock(_0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'] - 0x1, _0x59cdc7['z'] + _0x51ae79);
                        const _0x34a22f = getBlock(_0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'], _0x59cdc7['z'] + _0x51ae79);
                        if ((_0x55d1f8['namespace'] === 'minecraft:dirt' || _0x55d1f8['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'] - 0x1, _0x59cdc7['z'] + _0x51ae79, 0x1);
                        if (_0x55d1f8['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'] - 0x1, _0x59cdc7['z'] + _0x51ae79, 0x1);
                        if (_0x34a22f['aux'] === 0x7 && (_0x34a22f['namespace'] === 'minecraft:beetroot' || _0x34a22f['namespace'] === 'minecraft:wheat' || _0x34a22f['namespace'] === 'minecraft:carrots' || _0x34a22f['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'], _0x59cdc7['z'] + _0x51ae79, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x34a22f['aux'] <= 0x6 && (_0x34a22f['namespace'] === 'minecraft:beetroot' || _0x34a22f['namespace'] === 'minecraft:wheat' || _0x34a22f['namespace'] === 'minecraft:carrots' || _0x34a22f['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x59cdc7['x'] + _0xbce0eb, _0x5508dd['y'], _0x59cdc7['z'] + _0x51ae79, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x1c8574 = 0x0; _0x1c8574 < am_count; _0x1c8574++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x5508dd['x'],
                                'y': _0x5508dd['y'] - 0x1,
                                'z': _0x5508dd['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x262887 = JSON['parse'](抱琵琶半遮(nx_paths + '/PlayerAction.json'));
                    _0x262887['forEach'](_0x494af1 => {
                        if (_0x494af1['delay'] % am_tick === 0x0) {
                            for (let _0xa9bec8 = 0x0; _0xa9bec8 < _0x494af1['count']; _0xa9bec8++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x494af1['value'],
                                'type': Number(_0x494af1['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x5486a8 = 0x0; _0x5486a8 < pam_count; _0x5486a8++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x5508dd['x'],
                        'y': _0x5508dd['y'] - 0x1,
                        'z': _0x5508dd['z']
                    },
                    'inputs': pam_array['map'](_0x71114e => Number(_0x71114e)),
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
            if (AutoJump && _0x524a42) setMotion(_0x418e27['x'], aj_y / 0x64, _0x418e27['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x1ae2a7 => {
                if (bc_packet) silentMove(_0x1ae2a7['x'], _0x1ae2a7['y'], _0x1ae2a7['z']);
                buildBlock(self_id, _0x1ae2a7['x'], _0x1ae2a7['y'], _0x1ae2a7['z'], 0x0);
            });
            if (NoFall && _0x418e27['y'] < -nf_max && !_0x524a42) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x524a42 && _0x524a42)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x5b5722 = 0x0; _0x5b5722 < 0x168; _0x5b5722 += do_density / 0xa) {
                    const _0x193a50 = do_l_axis * Math['cos'](_0x5b5722 * Math['PI'] / 0xb4);
                    const _0x5e5e12 = do_s_axis * Math['sin'](_0x5b5722 * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x193a50, do_pos[0x1], do_pos[0x2] + _0x5e5e12, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x37cb98['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x4da863 = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x4da863['x']), Math['round'](_0x4da863['y'] - 0x1), Math['round'](_0x4da863['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Health', 'Health: ' + 弹说尽心中(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(at_lists['map'](_0x3d6cae => getEntityName(_0x3d6cae))), '§r'));
            if (ShowInfo) {
                const _0x24e4d1 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x109db0 = Math['sqrt'](_0x418e27['x'] * _0x418e27['x'] + _0x418e27['z'] * _0x418e27['z']);
                if (show_speed) _0x37cb98['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x109db0['toFixed'](0x2) + 'm/s 移动速度: ' + _0x271278['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x245101['toFixed'](0x2) + 'm/s 坐标速度:' + _0x1b0e29['toFixed'](0x2) + 'm/s 能力速度:' + _0x24e4d1['current']['toFixed'](0x2) + ('\n移动值: [' + _0x418e27['x']['toFixed'](0x2) + ', ' + _0x418e27['y']['toFixed'](0x2) + ', ' + _0x418e27['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x37cb98['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x5508dd['x'] + ', Y:' + _0x5508dd['y'] + ', Z:' + _0x5508dd['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x57dece = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x1b27fd = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x37cb98['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x57dece['emerald'] + ', 钻石:' + _0x57dece['diamond'] + ', 金锭:' + _0x57dece['gold'] + ', 铁锭:' + _0x57dece['iron'] + '\n下界之心:' + _0x57dece['star'] + ', 经验:' + _0x1b27fd, '§r'));
                }
                if (show_target_dis && at_lists['length'] > 0x0) _0x37cb98['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x37cb98['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x21ec62['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
                if (show_kill_num) _0x37cb98['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x37cb98['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x37cb98['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x37cb98['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x37cb98['push'](归客不发寻(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x37cb98['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x5984c5['current'] + ', 最大值:' + _0x5984c5['max'] + ', 最小值:' + _0x5984c5['min'], '§r'));
                if (show_detail_item) _0x37cb98['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x576815 = new Date();
                    const _0x596a14 = _0x576815['getFullYear']();
                    const _0x2d54e4 = ('0' + (_0x576815['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x38a264 = ('0' + _0x576815['getDate']())['slice'](-0x2);
                    const _0x133aa8 = ('0' + _0x576815['getHours']())['slice'](-0x2);
                    const _0x40b472 = ('0' + _0x576815['getMinutes']())['slice'](-0x2);
                    const _0x51cd9b = ('0' + _0x576815['getSeconds']())['slice'](-0x2);
                    const _0x4baa3c = _0x596a14 + '-' + _0x2d54e4 + '-' + _0x38a264 + ' ' + _0x133aa8 + ':' + _0x40b472 + ':' + _0x51cd9b;
                    _0x37cb98['push'](归客不发寻(0x1, 'RealTime', _0x4baa3c, '§r'));
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
                let _0x3f93f6 = _0x172dbf['yaw'];
                _0x3f93f6 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0x3f93f6 >= 0xb4) _0x3f93f6 -= 0x168;
                if (_0x3f93f6 <= -0xb4) _0x3f93f6 += 0x168;
                let _0x2831c1 = (_0x524a42 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x217d37 = (_0x524a42 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x531061 = {};
                if (rc_surround && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0x4f766e = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x5d7751 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x55b586 = _0x5d7751 > -0x5a || _0x5d7751 < 0x5a ? rc_speed : -rc_speed;
                    let _0x2ea469 = _0x3f93f6 > -0x5a || _0x3f93f6 < 0x5a ? rc_speed : -rc_speed;
                    let _0x1afd58 = rc_relative ? _0x55b586 : _0x2ea469;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x4f766e -= _0x1afd58 * 0x5 : _0x4f766e += _0x1afd58 * 0x5;
                    if (_0x4f766e > 0xb4) _0x4f766e -= 0x168;
                    if (_0x4f766e < -0xb4) _0x4f766e += 0x168;
                    let _0xa2e3a0 = 忽闻水上琵(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0x4f766e,
                        'pitch': 0x0
                    });
                    let _0x5f0391 = 弦弦掩抑声(_0xa2e3a0, self_id, 'yaw_pos');
                    _0x531061 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x2831c1 : _0x217d37 : rc_speed / 0x8, self_pos, {
                        'yaw': _0x5f0391,
                        'pitch': 0x0
                    });
                } else _0x531061 = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x2831c1 : _0x217d37 : rc_speed / 0x8, self_pos, {
                    'yaw': _0x3f93f6,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x531061['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x531061['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x3f93f6 + sca_yaw);
                    else 于穆曹二善(_0x172dbf['pitch'], _0x3f93f6 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0x531061 = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x172dbf);
                        setMotion(_0x531061['x'] - self_pos['x'], _0x531061['y'] - self_pos['y'], _0x531061['z'] - self_pos['z']);
                    } else {
                        const _0x3c5a75 = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0x46babc = getCameraRotation();
                        rc_roll += (_0x3c5a75 ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0x531061['x'] - self_pos['x'], rc_bhop && _0x524a42 || rc_ahop && _0x418e27['y'] < -0.4 ? rc_y : _0x418e27['y'], _0x531061['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0x531061['x'], self_pos['y'], _0x531061['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined') {
                const _0x1ac458 = getEntityMotion(self_id);
                const _0x3e5be7 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x1ac458['x'], rc_y, _0x1ac458['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x3e5be7['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x3e5be7['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x1ac458['x'], -rc_y, _0x1ac458['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x3e5be7['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x3e5be7['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x37cb98['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
                if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
                    callModule(0x1e, '{"value":false}');
                    BalanceTimer_st = false;
                }
                if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
            }
            if (ModifyTime) {
                if (mt_custom === 0x19) {
                    let _0x56ec2e = 0x0;
                    if (modes['mt_time'] === 0x0) _0x56ec2e = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x56ec2e = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x56ec2e = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x56ec2e = 0x30d4;
                    setWorldData({
                        'time': _0x56ec2e
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
                        showTipMessage('§bProtoHax §r| ' + _0x1b0e29['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x5ac89e, _0x3dc55f) => globalThis['current_poem'] = JSON['parse'](_0x3dc55f)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x1b0e29['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x9dd99f = 0x0; _0x9dd99f < mine_speed; _0x9dd99f++) {
                    let _0x247789 = mine_list['shift']();
                    if (typeof _0x247789 != 'object' || _0x247789['length'] === 0x0) continue;
                    const _0x447ff7 = getBlock(_0x247789[0x0], _0x247789[0x1], _0x247789[0x2]);
                    if (_0x447ff7['namespace'] != 'minecraft:air' && _0x447ff7['namespace'] === mine_name) {
                        destroyBlock(self_id, _0x247789[0x0], _0x247789[0x1], _0x247789[0x2], 0x0);
                        mine_current++;
                    }
                }
                _0x37cb98['push'](归客不发寻(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x524a42) setMotion(0x0, 0x0, 0x0);
            if (_0x37cb98['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x37cb98['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x37cb98['join']('\n'));
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
            prev_heal = _0x5984c5['current'];
            prev_ground = _0x524a42;
            prev_itemCount = self_itemCount;
        } catch (_0x76f521) {
            clientMessage(_0x76f521['stack']);
        }
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0x30dd5e = bn_list['length'] - 0x1; _0x30dd5e >= 0x0; _0x30dd5e--) {
                let _0x3c3a9d = bn_list[_0x30dd5e];
                _0x3c3a9d['x'] -= _0x3c3a9d['speed'];
                if (_0x3c3a9d['x'] < 0x0) {
                    bn_list['splice'](_0x30dd5e, 0x1);
                    removeText(_0x3c3a9d['id']);
                } else updateTextPosition(_0x3c3a9d['id'], _0x3c3a9d['x'], _0x3c3a9d['y']);
            }
        }
        if (Derp) {
            var _0x5be225 = getEntityRot(self_id);
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
            if (!dp_head) dp_pitch = _0x5be225['pitch'];
            if (!dp_body) dp_yaw = _0x5be225['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x13921f = getCameraRotation();
            const _0x383125 = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x2d5db1 = sca_move ? 弦弦掩抑声(_0x383125, self_id, 'yaw_pos') : _0x13921f['yaw'] > 0x0 ? 0xb4 - _0x13921f['yaw'] : -0xb4 - _0x13921f['yaw'];
            于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x2d5db1 + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0xf41fd = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
            let _0x30f3eb = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
            于穆曹二善(_0xf41fd, _0x30f3eb);
        }
        if (ItemRotation) {
            ir_angle += (ir_isBack ? -0x1 : 0x1) * 0.0175 * ir_speed;
            if (ir_angle >= 6.3 * ir_max / 0x168) {
                if (ir_move) ir_isBack = true;
                else ir_angle = ir_min;
            }
            if (ir_angle <= 6.3 * ir_min / 0x168) ir_isBack = false;
            callModule(0x26, JSON['stringify']({
                'rotate_angle': ir_angle
            }));
        }
    }, 0xa);

    function onExecuteCommandEvent(_0x2c6338) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x2c6338, '§r');
        const _0x5f1491 = _0x2c6338['split'](' ');
        if (_0x5f1491[0x0] === '/set' && _0x5f1491[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x5f1491[0x2]),
                'y': Number(_0x5f1491[0x3]),
                'z': Number(_0x5f1491[0x4])
            };
            if (_0x5f1491[0x5]) nx_goalSpeed = Number(_0x5f1491[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x5f1491[0x0] === '/set' && _0x5f1491[0x1] === 'default' && _0x5f1491[0x2] === 'config') {
            if (_0x5f1491[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (抱琵琶半遮(nx_cfgs + '/' + _0x5f1491[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x5f1491[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x5f1491[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x5f1491[0x3], '§r');
            return true;
        }
        if (_0x5f1491[0x0] === '/target') {
            if (_0x5f1491[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x5f1491[0x1] === 'player') at_lists = getPlayerList();
            if (_0x5f1491[0x1] === 'all') at_lists = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x5f1491[0x0] === '/cleaner') {
            if (_0x5f1491[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x5f1491[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x5f1491[0x2]));
        }
        if (_0x5f1491[0x0] === '/bind') {
            if (_0x5f1491[0x1] === 'RunAway') {
                if (typeof globalThis[_0x5f1491[0x2]] == 'undefined' && typeof nx_funcid[_0x5f1491[0x2]] == 'undefined' || typeof globalThis[_0x5f1491[0x3]] == 'undefined' && typeof nx_funcid[_0x5f1491[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x36c723 = typeof globalThis[_0x5f1491[0x3]] !== 'undefined';
                nx_raBinds[_0x5f1491[0x2]] = {
                    'module': _0x5f1491[0x3],
                    'isNX': _0x36c723
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x5f1491[0x2] + ' 与 ' + _0x5f1491[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x5f1491[0x1] === 'key' && typeof globalThis[_0x5f1491[0x2]] !== 'undefined') {
                nx_isBind = _0x5f1491[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x5f1491[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x5f1491[0x1]] === 'undefined') nx_binds[_0x5f1491[0x1]] = [];
            if (typeof globalThis[_0x5f1491[0x2]] !== 'undefined' && typeof globalThis[_0x5f1491[0x1]] !== 'undefined') {
                nx_binds[_0x5f1491[0x1]]['push'](_0x5f1491[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x5f1491[0x1] + ' 与 ' + _0x5f1491[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x5f1491[0x0] === '/unbind') {
            if (_0x5f1491[0x1] === 'key' && typeof globalThis[_0x5f1491[0x2]] !== 'undefined') {
                for (let _0x247a89 in nx_keys) {
                    if (nx_keys[_0x247a89] === _0x5f1491[0x2]) {
                        delete nx_keys[_0x247a89];
                        break;
                    }
                }
                nx_isBind = _0x5f1491[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x5f1491[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x5f1491[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x5f1491[0x1]] !== 'undefined' && _0x5f1491[0x2] === 'all') {
                delete nx_binds[_0x5f1491[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x5f1491[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x5f1491[0x1] === 'all') {
                nx_binds = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x5f1491[0x2]] !== 'undefined' && typeof globalThis[_0x5f1491[0x1]] !== 'undefined') {
                nx_binds[_0x5f1491[0x1]]['splice'](nx_binds[_0x5f1491[0x1]]['indexOf'](_0x5f1491[0x2]), 0x1);
                if (nx_binds[_0x5f1491[0x1]]['length'] === 0x0) delete nx_binds[_0x5f1491[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x5f1491[0x1] + ' 和 ' + _0x5f1491[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x5f1491[0x0] === '/nx') {
            if (typeof globalThis[_0x5f1491[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x5f1491[0x1] === 'num') globalThis[_0x5f1491[0x2]] = Number(_0x5f1491[0x3]);
            if (_0x5f1491[0x1] === 'bool') globalThis[_0x5f1491[0x2]] = Boolean(_0x5f1491[0x3]);
            if (_0x5f1491[0x1] === 'str') globalThis[_0x5f1491[0x2]] = _0x5f1491[0x3];
            if (_0x5f1491[0x1] === 'arr') globalThis[_0x5f1491[0x2]] = 相近邀相见(_0x5f1491[0x3]);
            if (_0x5f1491[0x1] === 'obj') globalThis[_0x5f1491[0x2]] = JSON['parse'](_0x5f1491[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x5f1491[0x2]] + ' => ' + _0x5f1491[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x1f58d1, _0x5c2026, _0x342baa) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x1f58d1 + ' §e结果:§r' + _0x342baa + ' §e数据:§r' + JSON['stringify'](_0x5c2026, null, 0x2), '§r');
        if (!_0x342baa) return true;
    }

    function onCallModuleEvent(_0x270a47) {
        try {
            if (typeof _0x270a47 !== 'undefined' && typeof _0x270a47['fun'] !== 'undefined' && typeof nx_raBinds[_0x270a47['fun']] !== 'undefined') {
                const _0x4ec28e = nx_raBinds[_0x270a47['fun']]['module'];
                if (!nx_raBinds[_0x270a47['fun']]['isNX']) callModule(nx_funcid[_0x4ec28e], JSON['stringify']({
                    'value': _0x270a47['value']
                }));
                else 委身为贾人(_0x4ec28e, _0x270a47['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x270a47, null, 0x4), '§r');
            if (typeof _0x270a47['name'] === 'undefined') {
                if (Rocker && typeof _0x270a47['angle'] !== 'undefined') rc_angles = _0x270a47;
                if (Rocker && typeof _0x270a47['direction'] !== 'undefined') rc_directions = _0x270a47;
                if (Rocker && typeof _0x270a47['operation'] !== 'undefined') rc_uds = _0x270a47;
                return;
            }
            if (!_0x270a47['name']['includes']('NoveXare') && _0x270a47['fun'] != 'fun_ride_flying') return;
            if (typeof _0x270a47['SauthLogin'] !== 'undefined') {
                Sauths = _0x270a47['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x270a47['CustomBanTip'] !== 'undefined') bantip = _0x270a47['CustomBanTip'];
            if (typeof _0x270a47['key'] !== 'undefined') {
                const _0xf6babf = _0x270a47['key'];
                if (_0xf6babf === 'ct_team' || _0xf6babf === 'km_text') 开宴千呼万(_0xf6babf, _0xf6babf === 'ct_team' ? ct_team : km_text);
                if (_0xf6babf === 'ItemEditor') {
                    const _0x12e645 = getEntityCarriedItem(self_id);
                    const _0x3c970a = 司马明年秋(_0x12e645, 'Damage:', 's');
                    const _0x19057e = 司马明年秋(_0x12e645, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x12e645['replace']('Damage:' + _0x3c970a + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x12e645['replace']('{Damage:' + _0x19057e, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x12e645['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0xf6babf === 'EditBackGround') {
                    const _0x4cda93 = 'loginVideoNew.mp4';
                    const _0x1c8edf = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x4cda93)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x1c8edf + _0x4cda93);
                    file_copy(getResource() + '/' + _0x4cda93, _0x1c8edf + _0x4cda93);
                    showToast('已复制文件');
                }
                if (_0xf6babf === 'spm_text') 开宴千呼万(_0xf6babf, spm_text);
                if (_0xf6babf === 'am_text') 开宴千呼万(_0xf6babf, am_text);
                if (_0xf6babf === 'BJDTp') {
                    let _0x4a6e9a = getPlayerList();
                    let _0x2af540 = _0x4a6e9a['length'] > 0x0 ? _0x4a6e9a['map'](_0x3999f5 => ({
                        'text': getEntityName(_0x3999f5) + '\n距离: ' + 声暗问弹者(self_id, _0x3999f5)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x4a90e9 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x2af540
                    };
                    const _0x2a467f = JSON['stringify'](_0x4a90e9);
                    addForm(_0x2a467f, function(_0x3e2c64) {
                        if (_0x4a6e9a['length'] > 0x0 && _0x3e2c64 >= 0x0) {
                            var _0x1401d8 = _0x4a6e9a[_0x3e2c64];
                            var _0x38db05 = getPos(_0x1401d8);
                            setPos(_0x38db05['x'], _0x38db05['y'] + 1.8, _0x38db05['z']);
                            buildBlock(self_id, _0x38db05['x'], _0x38db05['y'], _0x38db05['z'], 0x1);
                        }
                    });
                }
                if (_0xf6babf === 'ka_text') 开宴千呼万(_0xf6babf, ka_text);
                if (_0xf6babf === 'tp_type') 开宴千呼万(_0xf6babf, tp_type);
                if (_0xf6babf === 'lp_type') 开宴千呼万(_0xf6babf, lp_type);
                if (_0xf6babf === 'ap_type') 开宴千呼万(_0xf6babf, ap_type);
                if (_0xf6babf === 'arp_type') 开宴千呼万(_0xf6babf, arp_type);
                if (_0xf6babf === 'srp_type') 开宴千呼万(_0xf6babf, srp_type);
                if (_0xf6babf === 'tr_type') 开宴千呼万(_0xf6babf, tr_type);
                if (_0xf6babf === 'as_type') 开宴千呼万(_0xf6babf, as_type);
                if (_0xf6babf === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x1736d1 = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x1736d1 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x1736d1);
                    }
                    exit();
                    gc();
                }
                if (_0xf6babf === 'sp_type') 开宴千呼万(_0xf6babf, sp_type);
                if (_0xf6babf === 'as_level') 开宴千呼万(_0xf6babf, as_level);
                if (_0xf6babf === 'am_id') 开宴千呼万(_0xf6babf, am_id);
                if (_0xf6babf === 'am_value') 开宴千呼万(_0xf6babf, am_value);
                if (_0xf6babf === 'pam_id') 开宴千呼万(_0xf6babf, pam_id);
                if (_0xf6babf === 'pam_value') 开宴千呼万(_0xf6babf, pam_value);
                if (_0xf6babf === 'pam_array') 开宴千呼万(_0xf6babf, pam_array);
                if (_0xf6babf === 'sp_level') 开宴千呼万(_0xf6babf, sp_level);
                if (_0xf6babf === 'cs_text') 开宴千呼万(_0xf6babf, cs_text);
                if (_0xf6babf === 'DropInv') {
                    for (let _0x428dd5 = 0x0; _0x428dd5 < 0x24; _0x428dd5++) {
                        const _0x866a36 = getInventory(self_id, _0x428dd5);
                        if (_0x866a36['namespace'] === 'minecraft:air') continue;
                        if (_0x866a36['count'] < 0x1) continue;
                        dl_list['push'](_0x428dd5);
                    }
                }
                if (_0xf6babf === 'LookTP') {
                    let _0x568c65 = {};
                    for (let _0x3b3d29 = 0x0; _0x3b3d29 < 0x1f4; _0x3b3d29++) {
                        _0x568c65 = 忽闻水上琵(_0x3b3d29, getPos(self_id), getEntityRot(self_id));
                        const _0x57a8d0 = getBlock(_0x568c65['x'], _0x568c65['y'], _0x568c65['z']);
                        if (_0x57a8d0['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x568c65 != {}) {
                        const _0x2a8af8 = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 二年恬然自(_0x568c65['x'], _0x568c65['y'] + 1.53, _0x568c65['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x568c65['x'], _0x568c65['y'] + 1.53, _0x568c65['z']);
                    }
                }
                if (_0xf6babf === 'OpenChest') {
                    let _0x470f45 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x3b2a9c = [];
                    let _0x336666 = 0x0;
                    let _0x4694da = 面转轴拨弦(self_id);
                    const _0x5cce77 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x4e4916 = 'shulker_box';
                    for (let _0x1aff6d = -0x7; _0x1aff6d < 0x7; _0x1aff6d++) {
                        for (let _0x435709 = -0x7; _0x435709 < 0x7; _0x435709++) {
                            for (let _0xdfff69 = -0x7; _0xdfff69 < 0x7; _0xdfff69++) {
                                const _0x9bd32d = _0x1aff6d + _0x4694da['x'];
                                const _0x43594a = _0x435709 + _0x4694da['y'];
                                const _0x1ac408 = _0xdfff69 + _0x4694da['z'];
                                const _0x39ec81 = getBlock(_0x9bd32d, _0x43594a, _0x1ac408);
                                if (_0x5cce77['includes'](_0x39ec81['namespace']) || _0x39ec81['namespace']['includes'](_0x4e4916)) {
                                    const _0x2eb421 = getBlock(_0x9bd32d, _0x43594a + 0x1, _0x1ac408);
                                    _0x470f45['buttons'][_0x336666] = {
                                        'text': '命名空间: ' + _0x39ec81['namespace'] + '\n坐标:   ' + (_0x2eb421['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x3b2a9c[_0x336666] = {
                                        'x': _0x9bd32d,
                                        'y': _0x43594a,
                                        'z': _0x1ac408
                                    };
                                    _0x336666++;
                                }
                            }
                        }
                    }
                    if (_0x336666 === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x470f45), function(_0x288b9b) {
                        const _0x453828 = _0x3b2a9c[_0x288b9b];
                        buildBlock(self_id, _0x453828['x'], _0x453828['y'], _0x453828['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0xf6babf === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0xf6babf === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0xf6babf === 'rpc_repeat') {
                    for (let _0x337cca = 0x0; _0x337cca < rpc_repeat_times; _0x337cca++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0xf6babf === 'rpc_black') 开宴千呼万(_0xf6babf, rpc_black);
                if (_0xf6babf === 'rpc_tipWhite') 开宴千呼万(_0xf6babf, rpc_tipWhite);
                if (_0xf6babf === 'rpc_sendBlack') 开宴千呼万(_0xf6babf, rpc_sendBlack);
                if (_0xf6babf === 'AttackSelf_one') 江头夜送客(self_id, Swing);
                if (_0xf6babf === 'RemoveSelf') removeEntity(self_id);
                if (_0xf6babf === 'QuitGame') leaveWorld();
                if (_0xf6babf === 'cm_black') 开宴千呼万(_0xf6babf, cm_black);
                if (_0xf6babf === 'rpc_recBlack') 开宴千呼万(_0xf6babf, rpc_recBlack);
                if (_0xf6babf === 'rpc_white') 开宴千呼万(_0xf6babf, rpc_white);
                if (_0xf6babf === 'sl_delete') setData('sauths', '');
                if (_0xf6babf === 'dc_delete') dc_pos = [];
                if (_0xf6babf === 'hs_item') 开宴千呼万('selectitems', selectitems);
                if (_0xf6babf === 'hs_slot') 开宴千呼万('hs_slot', hs_slot);
                if (_0xf6babf === 'rpc_sendWhite') 开宴千呼万(_0xf6babf, rpc_sendWhite);
                if (_0xf6babf === 'rpc_recWhite') 开宴千呼万(_0xf6babf, rpc_recWhite);
                if (_0xf6babf === 'at_typeWhite') 开宴千呼万(_0xf6babf, at_typeWhite);
                if (_0xf6babf === 'ie_data') 开宴千呼万(_0xf6babf, ie_data);
                if (_0xf6babf === 'mine_white') 开宴千呼万(_0xf6babf, mine_white);
                if (_0xf6babf === 'cs_white') 开宴千呼万(_0xf6babf, cs_white);
                if (_0xf6babf === 'mine_black') 开宴千呼万(_0xf6babf, mine_black);
                if (_0xf6babf === 'cs_black') 开宴千呼万(_0xf6babf, cs_black);
                if (_0xf6babf === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0xd3137f, _0x43016a, _0x51d8dd, _0x31abf5) {
                        let _0x14eb7b = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        let _0x47d97b = 0x0;
                        const _0x1630e6 = getResource();
                        const _0x1fa3e5 = JSON['parse'](File['read'](_0x1630e6 + '/ui/ui_definition.json'))['ui']['map'](_0x4f3d52 => ({
                            'name': _0x4f3d52 + '.json',
                            'path': _0x1630e6 + '/ui/' + _0x4f3d52 + '.json'
                        }));
                        for (let _0x49ebb0 of _0x1fa3e5) {
                            if (!_0x49ebb0['name']['includes']('NoveXare')) continue;
                            let _0x8db39b = JSON['parse'](File['read'](_0x49ebb0['path']));
                            if (typeof _0x8db39b['items'][0x0]['items'] === 'undefined') continue;
                            for (let _0x4cbef9 of _0x8db39b['items'][0x0]['items']) {
                                if (typeof _0x4cbef9['name'] === 'undefined' || typeof _0x4cbef9['key'] === 'undefined') continue;
                                if (_0x51d8dd && _0x4cbef9['type'] != 'Switch') continue;
                                if (_0x31abf5 && _0x4cbef9['type'] == 'Switch') continue;
                                if (!_0x43016a && (_0x4cbef9['name'] === _0xd3137f || _0x4cbef9['key'] === _0xd3137f) || _0x43016a && (_0x4cbef9['name']['includes'](_0xd3137f) || _0x4cbef9['key']['includes'](_0xd3137f))) {
                                    _0x14eb7b['items'][0x0]['items'][_0x47d97b] = _0x4cbef9;
                                    _0x47d97b++;
                                }
                            }
                        }
                        loadMenu('search_' + _0xd3137f, JSON['stringify'](_0x14eb7b));
                    });
                }
                if (_0xf6babf === 'sp_clear') sp_posList = [];
                if (_0xf6babf === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0x5951a7) {
                        const _0x2dc7c2 = _0x5951a7['split'](',');
                        sp_posList['push']({
                            'x': Number(_0x2dc7c2[0x0]),
                            'y': Number(_0x2dc7c2[0x1]),
                            'z': Number(_0x2dc7c2[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0xf6babf === 'sp_load') {
                    const _0x2c848b = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x2c848b, function(_0x381d75) {
                        var _0xb4410e = File['read'](_0x381d75);
                        if (_0xb4410e != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0xb4410e);
                            sp_file = sp_loop ? _0xb4410e : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0xf6babf === 'sp_select') {
                    const _0xdb32f1 = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x3a8d2c = file_list(getResource() + '/sounds/NoveXare');
                    _0x3a8d2c['sort']((_0x6ec773, _0x108269) => _0x6ec773['name']['localeCompare'](_0x108269['name']));
                    for (let _0x5e752d = 0x0; _0x5e752d < _0x3a8d2c['length']; _0x5e752d++) {
                        _0xdb32f1['buttons'][_0x5e752d] = {
                            'text': _0x3a8d2c[_0x5e752d]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x19bedc = JSON['stringify'](_0xdb32f1);
                    addForm(_0x19bedc, function(_0x24fca6) {
                        if (_0x3a8d2c['length'] > 0x0 && _0x24fca6 >= 0x0) {
                            const _0xac1193 = File['read'](_0x3a8d2c[_0x24fca6]['path']);
                            if (_0xac1193 != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0xac1193);
                                sp_file = sp_loop ? _0xac1193 : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0xf6babf === 'save_config') {
                    const _0x105a60 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x105a60, function(_0x52a28a, _0x10b320) {
                        File['write'](nx_cfgs + '/' + _0x52a28a + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0x10b320) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0xf6babf === 'load_config') {
                    const _0x990278 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x347034 = file_list(nx_cfgs);
                    _0x347034['sort']((_0x10096f, _0x1856da) => _0x10096f['name']['localeCompare'](_0x1856da['name']));
                    for (let _0x3bf4ff = 0x0; _0x3bf4ff < _0x347034['length']; _0x3bf4ff++) {
                        _0x990278['buttons'][_0x3bf4ff] = {
                            'text': '§e' + _0x347034[_0x3bf4ff]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x5f12bf = JSON['stringify'](_0x990278);
                    addForm(_0x5f12bf, function(_0x1c948c) {
                        if (_0x347034['length'] > 0x0 && _0x1c948c >= 0x0) {
                            var _0x30c077 = JSON['parse'](抱琵琶半遮(_0x347034[_0x1c948c]['path']));
                            var _0x3878cc = 0x0;
                            nx_binds = _0x30c077['binds'];
                            nx_keys = _0x30c077['key_binds'];
                            nx_raBinds = _0x30c077['nx_raBinds'];
                            for (var _0x247825 in _0x30c077) {
                                _0x3878cc++;
                                if (_0x247825['includes']('_mode') && _0x270a47['index'] && _0x270a47['index'] > 0x0) modes[_0x247825] = _0x30c077[_0x247825];
                                if (_0x247825 != 'nx_raBinds' && _0x247825 != 'key_binds' && _0x247825 != 'binds' && _0x247825 != 'name') 委身为贾人(_0x247825, _0x30c077[_0x247825]);
                            }
                            nx_cfg = _0x30c077;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x30c077['name'] + '的配置，共' + _0x3878cc + '条配置', '§r');
                        }
                    });
                }
                if (_0xf6babf === 'rpc_select') {
                    const _0x3c6594 = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x187481 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x13c466 = 0x0; _0x13c466 < _0x187481['length']; _0x13c466++) {
                        _0x3c6594['buttons'][_0x13c466] = {
                            'text': (_0x187481[_0x13c466]['type'] === 'Send' ? '§a' : '§c') + _0x187481[_0x13c466]['packet_str']
                        };
                    }
                    const _0x5f3ff2 = JSON['stringify'](_0x3c6594);
                    addForm(_0x5f3ff2, function(_0x12741f) {
                        prev_rpc = {
                            'id': _0x187481[_0x12741f]['id'],
                            'data': _0x187481[_0x12741f]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0xf6babf === 'cw_range') {
                    let _0x14ea37 = getPlayerList();
                    let _0x115d03 = 0x0;
                    for (let _0x52cbfe of _0x14ea37) {
                        const _0x2e3fb9 = getPos(_0x52cbfe);
                        const _0x4ff393 = getDistance(_0x2e3fb9, getPos(self_id));
                        if (!at_whileLists['includes'](_0x52cbfe) && _0x4ff393 < cw_size && _0x52cbfe != self_id) {
                            at_whileLists['push'](_0x52cbfe);
                            _0x115d03++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0x115d03 + '个玩家到白名单', '§r');
                }
                if (_0xf6babf === 'KickSelf')
                    for (let _0x23ca1d = 0x0; _0x23ca1d < 0x3e8; _0x23ca1d++) 江头夜送客(self_id, Swing);
                if (_0xf6babf === 'bc_delete') ac_pos = [];
                if (_0xf6babf === 'cm_depart') departCamera();
                if (_0xf6babf === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0xf6babf === 'cm_reset') resetCamera();
                if (_0xf6babf === 'cm_lock') lockCamera();
                if (_0xf6babf === 'ou_recover') otherId = null;
                if (_0xf6babf === 'delete_chest') ca_chest_pos = [];
                if (_0xf6babf === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0xf6babf === 'fm_place') fm_pos = self_pos;
                if (_0xf6babf === 'at_regex') 开宴千呼万(_0xf6babf, at_regex);
                if (_0xf6babf === 'cw_add' || _0xf6babf === 'ct_add' || _0xf6babf === 'ct_add') 茫茫江浸月(_0xf6babf === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0xf6babf === 'fw_target' || _0xf6babf === 'fc_target') 茫茫江浸月(_0xf6babf === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0xf6babf === 'cm_target') 茫茫江浸月('cm_target', 0x0);
                if (_0xf6babf === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0xf6babf === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0xf6babf === 'cw_remove') at_whileLists = [];
                if (_0xf6babf === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x56ded9 => ({
                        'name': getEntityName(_0x56ded9),
                        'id': _0x56ded9,
                        'namespace': getEntityNamespace(_0x56ded9)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x34197f => ({
                        'name': getEntityName(_0x34197f),
                        'id': _0x34197f,
                        'namespace': getEntityNamespace(_0x34197f)
                    }))
                }));
                if (_0xf6babf === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0xf6babf === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(nx_paths + '/WorldInfo.json')));
                if (_0xf6babf === 'Rusher') {
                    const _0x50ea3d = getCameraRotation();
                    let _0x8fe018 = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x50ea3d['yaw'] > 0x0 ? 0xb4 - _0x50ea3d['yaw'] : -0xb4 - _0x50ea3d['yaw'],
                        'pitch': -_0x50ea3d['pitch']
                    });
                    setMotion(_0x8fe018['x'] - self_pos['x'], _0x8fe018['y'] - self_pos['y'], _0x8fe018['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x464ddb in _0x270a47) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x464ddb)) continue;
                if (typeof _0x270a47['index'] !== 'undefined' && _0x270a47['index'] > 0x0) {
                    modes[_0x464ddb] = _0x270a47['index'] - 0x1;
                    nx_cfg[_0x464ddb] = _0x270a47['index'] - 0x1;
                    归客不发寻(0x0, _0x464ddb['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x270a47[_0x464ddb], '§r');
                    if (_0x464ddb === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x464ddb === 'Criticals') {
                    if (_0x270a47[_0x464ddb]) playerJump();
                    else {
                        cc_status = false;
                        callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
                    }
                }
                if (_0x464ddb === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x270a47[_0x464ddb]) + ',"count":' + ka_packet + '}');
                if (_0x464ddb === 'RandomArrayList' && !_0x270a47[_0x464ddb]) {
                    for (let _0x40767a = 0x0; _0x40767a < ral_num; _0x40767a++) addCustomArrayList('RandomArrayList' + _0x40767a, '', '', false);
                }
                if (_0x464ddb === 'Rocker') callModule(0x39, '{"value":' + b2s(modes['rc_mode'] === 0x1 && _0x270a47[_0x464ddb]) + ',"fov":150}');
                if (_0x464ddb === 'FakeMove') {
                    if (_0x270a47[_0x464ddb]) fmo_pos = getPos(self_id);
                    else if (!_0x270a47[_0x464ddb]) 欲语迟移船(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x275fdc = {
                        'enable': !_0x270a47[_0x464ddb],
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
                    callModule(0x7, JSON['stringify'](_0x275fdc));
                    setTimeout(() => 欲语迟移船(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x464ddb === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x270a47[_0x464ddb]) + ',"count":' + cs_packet + '}');
                if (_0x464ddb === 'ShowNowTime' && !_0x270a47[_0x464ddb]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0x464ddb === 'RandomFunc') {
                    const _0x12fa19 = Object['keys'](globalThis);
                    let _0x410ff3 = [];
                    for (let _0x496274 of _0x12fa19) {
                        if (typeof globalThis[_0x496274] === 'boolean') _0x410ff3['push'](_0x496274);
                    }
                    const _0x2cb91b = _0x410ff3[马客在船举(0x0, _0x410ff3['length'] - 0x1)];
                    委身为贾人(_0x2cb91b, _0x270a47[_0x464ddb]);
                }
                if (_0x464ddb === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x270a47[_0x464ddb]) + ',"count":' + ia_packet + '}');
                if (_0x464ddb === 'FlashBack') sb();
                if (_0x464ddb === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x270a47[_0x464ddb]) + '}');
                if (_0x464ddb === 'PyRpcManager' && rpc_store && !_0x270a47[_0x464ddb]) {
                    rpc_temp['forEach'](_0x138234 => sendRpc(_0x138234['id'], _0x138234['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x464ddb === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x270a47[_0x464ddb],
                    'defaultValue': false
                });
                if (_0x464ddb === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x270a47[_0x464ddb],
                    'defaultValue': false
                });
                if (_0x464ddb === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x270a47[_0x464ddb],
                    'defaultValue': false
                });
                if (_0x464ddb === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x270a47[_0x464ddb],
                    'defaultValue': false
                });
                if (_0x464ddb === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x270a47[_0x464ddb],
                    'defaultValue': false
                });
                if (_0x464ddb === 'FreeCam') {
                    let _0x421d72 = {
                        'value': _0x270a47[_0x464ddb],
                        'noclip': _0x270a47[_0x464ddb],
                        'flying': _0x270a47[_0x464ddb]
                    };
                    callModule(0x1, JSON['stringify'](_0x421d72));
                    if (_0x270a47[_0x464ddb]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x464ddb === 'FakeMotion' && fm_auto && _0x270a47[_0x464ddb]) fm_pos = getPos(self_id);
                if (_0x464ddb === 'ShadowBoomer' && _0x270a47[_0x464ddb]) sb_pos = getPos(self_id);
                if (_0x464ddb === 'AvoidAttack' && _0x270a47[_0x464ddb]) aa_pos = getPos(self_id);
                else if (_0x464ddb === 'AvoidAttack' && !_0x270a47[_0x464ddb]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x464ddb === 'NoClip') {
                    let _0x484681 = {
                        'value': _0x270a47[_0x464ddb],
                        'noclip': _0x270a47[_0x464ddb],
                        'flying': _0x270a47[_0x464ddb]
                    };
                    if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x270a47[_0x464ddb]) + '}');
                    if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x270a47[_0x464ddb]) + ',"no_fall_check":' + b2s(_0x270a47[_0x464ddb]) + ',"value":' + b2s(_0x270a47[_0x464ddb]) + '}');
                    callModule(0x1, JSON['stringify'](_0x484681));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x464ddb === 'BalanceTimer') {
                    callModule(0x25, '{"value":' + _0x270a47[_0x464ddb] + '}');
                    BalanceTimer_st = !_0x270a47[_0x464ddb];
                }
                if (_0x464ddb === 'IQBoost') {
                    const _0x5f2c84 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x5d1d77 = 马客在船举(0x0, _0x5f2c84['length'] - 0x1);
                    sendChatMessage('!' + _0x5f2c84[_0x5d1d77]);
                }
                if (_0x464ddb === 'AutoTarget' && !_0x270a47[_0x464ddb]) at_lists = [];
                if (_0x464ddb === 'SoundPlayer' && !_0x270a47[_0x464ddb]) sp_data = [];
                if (_0x464ddb === 'FightBot' && !_0x270a47[_0x464ddb]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x464ddb === 'ShowSendPacket' && !_0x270a47[_0x464ddb] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x59f046 = '';
                    for (let _0x414ce in PacketTmp['send']) _0x59f046 += '名称:' + _0x414ce + '，ID:' + PacketTmp['send'][_0x414ce]['id'] + '，发送数量:' + PacketTmp['send'][_0x414ce]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x59f046, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x464ddb === 'ShowReceivePacket' && !_0x270a47[_0x464ddb] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x579f90 = '';
                    for (let _0x1946c8 in PacketTmp['receive']) _0x579f90 += '名称:' + _0x1946c8 + '，ID:' + PacketTmp['receive'][_0x1946c8]['id'] + '，接受数量:' + PacketTmp['receive'][_0x1946c8]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x579f90, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x464ddb === 'Scaffold' && sca_keep && _0x270a47[_0x464ddb]) sca_current = 0x0;
                if (_0x464ddb === 'SmartInv' && _0x270a47[_0x464ddb]) {
                    da_slot = 0x0;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x464ddb === 'sp_loop' && !_0x270a47[_0x464ddb]) sp_file = null;
                if (_0x464ddb === 'NoLiquid' && _0x270a47[_0x464ddb]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x464ddb === 'NoLiquid' && !_0x270a47[_0x464ddb]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0x270a47[_0x464ddb] === 'boolean' || typeof _0x270a47[_0x464ddb] === 'number') {
                    if (typeof _0x270a47[_0x464ddb] === 'boolean') {
                        委身为贾人(_0x464ddb, _0x270a47[_0x464ddb]);
                        return;
                    }
                    nx_cfg[_0x464ddb] = _0x270a47[_0x464ddb];
                    globalThis[_0x464ddb] = _0x270a47[_0x464ddb];
                }
            }
        } catch (_0x34e63d) {
            clientMessage(_0x34e63d['stack']);
        }
    }

    function onPlayerAttackEvent(_0x1fe842, _0x8d95e6) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x8d95e6;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x8d95e6));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x8d95e6));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x8d95e6));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x8d95e6));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x8d95e6;
            else {
                if (te_all) getEntityList()['forEach'](_0x3b70a9 => {
                    if (_0x3b70a9 != te_target) 嘈如急雨小(_0x3b70a9, te_target, te_two);
                });
                else 嘈如急雨小(_0x8d95e6, te_target, te_two);
                te_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x8d95e6);
            else startRidingEntity(_0x8d95e6);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x8d95e6;
            else {
                setEntityNBT(_0x8d95e6, getEntityNBT(te_target));
                enc_target = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x8d95e6));
        if (!attack_list['includes'](_0x8d95e6)) attack_list['push'](_0x8d95e6);
        if (_0x8d95e6 === null || attack_list['every'](_0x77844 => last_attack_target['includes'](_0x77844))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x8d95e6;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x8d95e6;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x8d95e6;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x8d95e6), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x4da2af = getPos(_0x8d95e6);
            const _0x309d8c = getEntitySize(_0x8d95e6);
            for (let _0x16b1e5 = 0x0; _0x16b1e5 < 马客在船举(ap_count, ap_count + 0x14); _0x16b1e5++) 妇遂命酒使(ap_type, _0x4da2af['x'] + 马客在船举(-_0x309d8c['x'] * 马客在船举(0x7, 0xa), _0x309d8c['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x4da2af['y'] + 马客在船举(-_0x309d8c['y'] * 0x9, _0x309d8c['y'] * 0x2) / 0xa, _0x4da2af['z'] + 马客在船举(-_0x309d8c['x'] * 马客在船举(0x7, 0xa), _0x309d8c['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x2747a7 = 声暗问弹者(self_id, _0x8d95e6);
            callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"distance":' + _0x2747a7 * 1.01 + '}');
            setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x3d2e89 = 京都声问其(_0x8d95e6);
            归客不发寻(0x0, 'Info', '\n' + _0x3d2e89 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x8d95e6) + '_' + _0x8d95e6 + '.txt', _0x3d2e89);
            return true;
        }
        if (SmartWeapon) {
            let _0x33eb5d = [];
            for (let _0x1e8f5c = 0x0; _0x1e8f5c < 0x9; _0x1e8f5c++) _0x33eb5d['push']({
                'slot': _0x1e8f5c,
                'd': 十六言命曰(self_id, _0x1e8f5c)
            });
            _0x33eb5d['sort']((_0x3530d5, _0x2d9c80) => _0x2d9c80['d'] - _0x3530d5['d']);
            let _0x10b1ee = _0x33eb5d[0x0];
            if (_0x10b1ee['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x10b1ee['slot']);
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x8d95e6)) at_lists['push'](_0x8d95e6);
            else at_lists['splice'](at_lists['indexOf'](_0x8d95e6), 0x1);
            归客不发寻(0x0, !at_lists['includes'](_0x8d95e6) ? 'delTarget' : 'addTarget', getEntityName(_0x8d95e6), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x4c16e7 = getPos(_0x8d95e6);
            const _0x3492e9 = 弦弦掩抑声(self_pos, _0x4c16e7, 'yaw_pos');
            const _0x18761b = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
                'yaw': _0x3492e9,
                'pitch': 0x0
            });
            setEntityMotion(_0x8d95e6, _0x18761b['x'] - self_pos['x'], ckb_y, _0x18761b['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x8d95e6)) at_whileLists['push'](_0x8d95e6);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x8d95e6), 0x1);
            归客不发寻(0x0, !at_whileLists['includes'](_0x8d95e6) ? 'delTarget' : 'addTarget', getEntityName(_0x8d95e6), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 唤始出来犹(getEntityName(_0x8d95e6));
            归客不发寻(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) th_target = _0x8d95e6;
        if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x582d9f) {
        if (_0x582d9f === '') return true;
        if (BypassMute) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x582d9f);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x582d9f);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x582d9f);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x582d9f);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x582d9f);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x582d9f);
            return true;
        }
        if (ChatSuffix && !_0x582d9f['includes'](cs_text)) {
            sendChatMessage(_0x582d9f + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x31adf7, _0x426d55) {
        if (ChatManager && (_0x31adf7 != getEntityName(self_id) && cm_other || _0x31adf7 == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x125bcf = 0x0; _0x125bcf < cm_repeat_times; _0x125bcf++) sendChatMessage(_0x426d55);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x31adf7 + ', 消息:' + _0x426d55, '§r');
        if (ChatManager) return cm_black['some'](_0xe998b2 => _0x426d55['includes'](_0xe998b2));
        if (ChatManager && _0x426d55['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x1d4fb0 = Math['round'](马客在船举(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x54ab31 = createText(bn_format['replaceAll']('[名字]', _0x31adf7)['replaceAll']('[消息]', _0x426d55), 'Center', nx_screen['screenWidth'], _0x1d4fb0);
            if (_0x54ab31 > -0x1) bn_list['push']({
                'id': _0x54ab31,
                'speed': 马客在船举(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x1d4fb0
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x505ec2) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x53bbb2 = getEntityMotion(_0x505ec2);
            const _0xa40722 = getCameraRotation();
            const _0x73ad6c = 酒欲饮无管(_0x53bbb2, self_pos, 0x14);
            const _0x468576 = 忽闻水上琵(lj_len / 0x4, self_pos, {
                'yaw': _0xa40722['yaw'] > 0x0 ? 0xb4 - _0xa40722['yaw'] : -0xb4 - _0xa40722['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x468576['x'] - self_pos['x'], lj_y, _0x468576['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x33ce69, _0x4fd696) {
        if (PyRpcManager && rpc_rec) {
            const _0xd70a29 = new Uint8Array(_0x4fd696);
            const _0x463d10 = Array['from'](_0xd70a29, _0x466995 => _0x466995['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x4a1af8 = 左迁九江郡(_0x4fd696)['toLowerCase']();
            let _0x19e3be = false;
            let _0x4c3f00 = rpc_tipWhite['some'](_0x3493da => _0x4a1af8['includes'](_0x3493da));
            if (!_0x19e3be) _0x19e3be = rpc_black['some'](_0x35ac9a => _0x4a1af8['includes'](_0x35ac9a));
            if (!_0x19e3be) _0x19e3be = rpc_recBlack['some'](_0x21b71f => _0x4a1af8['includes'](_0x21b71f));
            if (rpc_white['some'](_0x3450a3 => _0x4a1af8['includes'](_0x3450a3))) _0x19e3be = false;
            if (rpc_recWhite['some'](_0x23195b => _0x4a1af8['includes'](_0x23195b))) _0x19e3be = false;
            if (rpc_record && (_0x4c3f00 && rpc_exclude || !_0x4c3f00)) {
                const _0x4f1ba0 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x22c8d7 = JSON['parse'](抱琵琶半遮(_0x4f1ba0));
                _0x22c8d7[_0x22c8d7['length']] = {
                    'packet_hex': _0x463d10,
                    'packet_format': 六幺大弦嘈(_0x463d10),
                    'packet_str': 左迁九江郡(_0x4fd696),
                    'packet_bin': _0xd70a29,
                    'time': Date['now'](),
                    'id': _0x33ce69,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x19e3be
                };
                File['write'](_0x4f1ba0, JSON['stringify'](_0x22c8d7, null, 0x4));
            }
            let _0x1dad35 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x1dad35 = 左迁九江郡(_0x4fd696);
            if (modes['rpc_mode'] === 0x1) _0x1dad35 = _0x463d10;
            if (modes['rpc_mode'] === 0x2) _0x1dad35 = 六幺大弦嘈(_0x463d10);
            if (modes['rpc_mode'] === 0x3) _0x1dad35 = JSON['stringify'](_0x4fd696);
            const _0x43a805 = _0x19e3be ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x4c3f00 && (rpc_showDisintercept && !_0x19e3be || rpc_showIntercept && _0x19e3be)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x33ce69 + '\n' : '') + _0x1dad35 + _0x43a805, '§r');
            return _0x19e3be;
        }
    }

    function onPyRpcSendEvent(_0x7d25a2, _0x50978e) {
        if (PyRpcManager && rpc_send) {
            const _0x368bbf = new Uint8Array(_0x50978e);
            const _0x9867aa = Array['from'](_0x368bbf, _0x5047db => _0x5047db['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x503880 = 左迁九江郡(_0x50978e)['toLowerCase']();
            let _0x56da34 = false;
            let _0x3c9445 = rpc_tipWhite['some'](_0xccffe2 => _0x503880['includes'](_0xccffe2));
            if (!_0x56da34) _0x56da34 = rpc_black['some'](_0x44064d => _0x503880['includes'](_0x44064d));
            if (!_0x56da34) _0x56da34 = rpc_sendBlack['some'](_0x8c275e => _0x503880['includes'](_0x8c275e));
            if (rpc_white['some'](_0x491bd8 => _0x503880['includes'](_0x491bd8))) _0x56da34 = true;
            if (rpc_sendWhite['some'](_0x5e02aa => _0x503880['includes'](_0x5e02aa))) _0x56da34 = false;
            if (!_0x3c9445) prev_rpc = {
                'id': _0x7d25a2,
                'data': _0x368bbf
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x7d25a2,
                'data': _0x368bbf
            });
            if (rpc_intercept) _0x56da34 = true;
            if (rpc_record && (_0x3c9445 && rpc_exclude || !_0x3c9445)) {
                const _0x16b279 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x1066b5 = JSON['parse'](抱琵琶半遮(_0x16b279));
                _0x1066b5[_0x1066b5['length']] = {
                    'packet_hex': _0x9867aa,
                    'packet_format': 六幺大弦嘈(_0x9867aa),
                    'packet_str': 左迁九江郡(_0x50978e),
                    'packet_bin': _0x368bbf,
                    'time': Date['now'](),
                    'id': _0x7d25a2,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x56da34
                };
                File['write'](_0x16b279, JSON['stringify'](_0x1066b5, null, 0x4));
            }
            let _0x2daac2 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x2daac2 = 左迁九江郡(_0x50978e);
            if (modes['rpc_mode'] === 0x1) _0x2daac2 = _0x9867aa;
            if (modes['rpc_mode'] === 0x2) _0x2daac2 = 六幺大弦嘈(_0x9867aa);
            if (modes['rpc_mode'] === 0x3) _0x2daac2 = JSON['stringify'](_0x50978e);
            for (let _0x4f903c of rpc_config) {
                if (typeof _0x4f903c === 'object') {
                    if (_0x4f903c['match_mode'] === 0x0 && _0x2daac2['includes'](_0x4f903c['packet'])) _0x2daac2 = remarks;
                    if (_0x4f903c['match_mode'] === 0x1 && _0x2daac2['includes'] === _0x4f903c['packet']) _0x2daac2 = remarks;
                } else continue;
            }
            let _0x355500 = _0x56da34 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x3c9445 && (rpc_showDisintercept && !_0x56da34 || rpc_showIntercept && _0x56da34)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x7d25a2 + '\n' : '') + _0x2daac2 + _0x355500, '§r');
            return _0x56da34;
        }
    }

    function onEntityBehaviorEvent(_0x1b579d, _0x5b9992, _0x42ec1d) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x1b579d + ' 实体昵称:' + getEntityName(_0x1b579d) + ' 行为ID:' + _0x5b9992 + ' 行为数据:' + _0x42ec1d, '§r');
        if (_0x5b9992 === 0x27 && _0x1b579d === av_id) av_id = null;
        if (_0x5b9992 === 0x3 && attack_list['includes'](_0x1b579d)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x4494fd = 0x0; _0x4494fd < 0x32; _0x4494fd++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x1b579d) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x1b579d), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x5b9992 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x1b579d);
        if (_0x5b9992 === 0x2 && attack_list['includes'](_0x1b579d)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x5b9992 === 0x4 && _0x1b579d != self_id)) {
            let _0x552db1 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x1b579d;
            if (声暗问弹者(_0x552db1, self_id) < fb_range) 江头夜送客(_0x1b579d, Swing);
            fb_ishurt = false;
        }
        if (_0x5b9992 === 0x2 && _0x1b579d === self_id) {
            let _0x18e465 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x42ec1d, '§r');
            if (HurtJump) setMotion(_0x18e465['x'], hj_height, _0x18e465['z']);
            if (AntiKB) {
                let _0x45837a = akb_hor / 0x64;
                let _0x2d1f48 = akb_y / 0x64;
                setMotion(_0x18e465['x'] - _0x45837a * _0x18e465['x'], _0x18e465['y'] - _0x2d1f48 * _0x18e465['y'], _0x18e465['z'] - _0x45837a * _0x18e465['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x42ec1d == 0x2) fb_ishurt = true;
        }
        if (_0x5b9992 === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0xcdb722, _0x357910, _0x400549, _0x661cd2, _0xf4e5d9) {
        const _0x1390bc = getCarried(_0xcdb722);
        const _0x103f23 = getBlock(_0x357910, _0x400549, _0x661cd2);
        if (_0x103f23['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x103f23['namespace'] + ', §rID:' + _0x103f23['id'] + ', 方块选择面:' + _0xf4e5d9 + ', §r特殊值:' + _0x103f23['aux'] + '\n手持:' + _0x1390bc['name'] + '-[' + _0x1390bc['namespace'] + '], 特殊值:' + _0x1390bc['aux'] + '\n坐标:[' + _0x357910 + ', ' + _0x400549 + ', ' + _0x661cd2 + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x357910 + ' ' + _0x400549 + ' ' + _0x661cd2 + '的' + _0x103f23['namespace']);
        if (Miner && (_0x103f23['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x1e2567 => _0x103f23['namespace']['includes'](_0x1e2567))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x2d0997 => !_0x103f23['namespace']['includes'](_0x2d0997)))) {
                mine_destroy = true;
                mine_name = _0x103f23['namespace'];
            }
            if (mine_destroy && mine_name != _0x103f23['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x103f23['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x357910,
                    'y': _0x400549,
                    'z': _0x661cd2
                }) <= mine_distance && mine_destroy) {
                let _0x391846 = [
                    [_0x357910 + 0x1, _0x400549, _0x661cd2],
                    [_0x357910 - 0x1, _0x400549, _0x661cd2],
                    [_0x357910, _0x400549, _0x661cd2 + 0x1],
                    [_0x357910, _0x400549, _0x661cd2 - 0x1],
                    [_0x357910, _0x400549 + 0x1, _0x661cd2],
                    [_0x357910, _0x400549 - 0x1, _0x661cd2]
                ];
                for (p of _0x391846) {
                    const _0x3bb697 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x3bb697['namespace'] != 'minecraft:air' && _0x103f23['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x253338 = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x253338['levelName'] + ' ，难度:' + _0x253338['difficulty'] + ' 游戏模式:' + _0x253338['gameType'] + ' 游戏时间:' + _0x253338['time'] + ' 随机刻速度:' + _0x253338['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x1b25df, _0x381065, _0x407a77, _0x5b3b6b, _0x5a4790) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
        const _0x5af82e = getCarried(_0x1b25df);
        const _0x590554 = getBlock(_0x381065, _0x407a77, _0x5b3b6b);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x5af82e['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x590554['namespace'] + ', §rID:' + _0x590554['id'] + ', 方块选择面:' + _0x5a4790 + ', §r特殊值:' + _0x590554['aux'] + '\n手持:' + _0x5af82e['name'] + '-[' + _0x5af82e['namespace'] + '], 特殊值:' + _0x5af82e['aux'] + '\n坐标:[' + _0x381065 + ', ' + _0x407a77 + ', ' + _0x5b3b6b + ']', '§r');
        if (ClickTP) 欲语迟移船(_0x381065, _0x407a77 + 0x2, _0x5b3b6b);
        const _0x16910b = ChestAura && ca_rot && _0x590554['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x1b25df) || ClickRot;
        if (_0x16910b) {
            let _0xadd080 = {
                'x': _0x381065,
                'y': _0x407a77,
                'z': _0x5b3b6b
            };
            const _0x317ac5 = _0x317ac5(getEntityMotion(_0x1b25df), getPos(_0x1b25df), 0x14);
            let _0xb2cfc9 = 弦弦掩抑声(_0x317ac5, _0xadd080, 'pitch_pos');
            let _0x4c8c38 = 弦弦掩抑声(_0x317ac5, _0xadd080, 'yaw_pos');
            于穆曹二善(_0xb2cfc9, _0x4c8c38);
        }
        if (GetCommand && _0x590554['namespace']['includes']('command_block')) {
            let _0x53398a = getBlockEntityNBT(_0x381065, _0x407a77, _0x5b3b6b);
            let _0x239449 = 琵琶行浔阳(_0x53398a, 'Command:"', '",Cu');
            let _0x478940 = 琵琶行浔阳(_0x53398a, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x5d914b = 琵琶行浔阳(_0x53398a, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0x381065 + ' ' + _0x407a77 + ' ' + _0x5b3b6b + '] 指令:' + _0x239449 + ' 是否自动:' + _0x478940 + ' 执行延迟:' + _0x5d914b, '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x381065, _0x407a77, _0x5b3b6b];
            else {
                setBlockEntityData(_0x381065, _0x407a77, _0x5b3b6b, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x34b51e = [
                [_0x381065, _0x407a77 - 0x1, _0x5b3b6b],
                [_0x381065, _0x407a77 + 0x1, _0x5b3b6b],
                [_0x381065, _0x407a77, _0x5b3b6b - 0x1],
                [_0x381065, _0x407a77, _0x5b3b6b + 0x1],
                [_0x381065 - 0x1, _0x407a77, _0x5b3b6b],
                [_0x381065 + 0x1, _0x407a77, _0x5b3b6b]
            ];
            setBlock(_0x34b51e[_0x5a4790][0x0], _0x34b51e[_0x5a4790][0x1], _0x34b51e[_0x5a4790][0x2], _0x5af82e['namespace'], _0x5af82e['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x381065, _0x407a77, _0x5b3b6b, _0x5af82e['namespace'], _0x5af82e['aux']);
        if ((InvCleaner || SmartInv) && _0x590554['namespace'] === 'minecraft:chest') isChest = true;
        if (ClickDestroy && !AutoDestroy) 慢捻抹复挑({
            'x': _0x381065,
            'y': _0x407a77,
            'z': _0x5b3b6b
        });
        if (AutoBed && _0x590554['namespace'] === 'minecraft:bed' && !ab_running) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x5005b8 = [
                [_0x381065 + 0x1, _0x407a77, _0x5b3b6b],
                [_0x381065 - 0x1, _0x407a77, _0x5b3b6b],
                [_0x381065, _0x407a77, _0x5b3b6b + 0x1],
                [_0x381065, _0x407a77, _0x5b3b6b - 0x1],
                [_0x381065, _0x407a77 + 0x1, _0x5b3b6b]
            ];
            ab_running = true;
            for (let _0x44b5e7 of _0x5005b8) {
                const _0x322d10 = getBlock(_0x44b5e7[0x0], _0x44b5e7[0x1], _0x44b5e7[0x2]);
                if (_0x322d10['namespace'] === 'minecraft:air') 事今漂沦憔(_0x44b5e7[0x0], _0x44b5e7[0x1], _0x44b5e7[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x5af82e['namespace']['includes']('sword') || _0x5af82e['namespace']['includes']('pickaxe'))) {
            if (bk_origin) {
                callModule(0xf, '{"value":true}');
                setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
                return true;
            }
            const _0xcfb46f = Math['round'](bk_range);
            _0x46fd3f: for (let _0x2ef98c = -_0xcfb46f; _0x2ef98c <= _0xcfb46f; _0x2ef98c++) {
                for (let _0x8e140b = -_0xcfb46f; _0x8e140b < _0xcfb46f; _0x8e140b++) {
                    for (let _0x355061 = -_0xcfb46f; _0x355061 <= _0xcfb46f; _0x355061++) {
                        let _0x343a83 = _0x381065 + _0x2ef98c;
                        let _0x1f862d = _0x407a77 + _0x8e140b;
                        let _0x9640d5 = _0x5b3b6b + _0x355061;
                        let _0x292763 = getBlock(_0x343a83, _0x1f862d, _0x9640d5);
                        if (bk_bed && _0x292763['namespace'] === 'minecraft:bed' || bk_chest && _0x292763['namespace'] === 'minecraft:chest') {
                            let _0x4cbabb = getBlock(_0x343a83, _0x1f862d + 0x1, _0x9640d5);
                            if (_0x4cbabb['namespace'] != 'minecraft:air' && bk_up) _0x1f862d += 0x1;
                            if (bk_tool && _0x4cbabb['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0x1b25df, 枫叶荻花秋(_0x1b25df, '_pickaxe'));
                            if (bk_tool && _0x4cbabb['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0x1b25df, 枫叶荻花秋(_0x1b25df, '_axe'));
                            bk_pos = {
                                'ex': _0x343a83,
                                'ey': _0x1f862d,
                                'ez': _0x9640d5
                            };
                            bk_timer = 0x0;
                            break _0x46fd3f;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x381065,
                'y': _0x407a77,
                'z': _0x5b3b6b
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0x381065 + ', ' + _0x407a77 + ', ' + _0x5b3b6b + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x25ace4 = getCameraRotation();
            for (let _0x18f46d = 0x0; _0x18f46d < fb_len + 0x1; _0x18f46d++) fb_list['push'](忽闻水上琵(_0x18f46d, 面转轴拨弦(_0x1b25df), {
                'pitch': 0x0,
                'yaw': _0x25ace4['yaw'] > 0x0 ? 0xb4 - _0x25ace4['yaw'] : -0xb4 - _0x25ace4['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0x590554['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0x47f686) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x47f686, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x47f686] !== 'undefined') 委身为贾人(nx_keys[_0x47f686], !globalThis[nx_keys[_0x47f686]]);
        if (nx_isBind != null && _0x47f686 != 0x42) {
            nx_keys[_0x47f686] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            归客不发寻(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x47f686, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x4a5e10) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x4a5e10, '§r');
    }

    function onSendServerPacketEvent(_0x4aa516, _0x17a6aa) {
        if (NoClip && nc_blink && (_0x4aa516 === 0x13 || _0x4aa516 === 0x90) && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x4aa516 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0x4aa516 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0x4aa516 === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0x4aa516 === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0xb4b4cb = PacketTranslate[PacketTranslate['map'](_0x1ed604 => _0x1ed604['id'])['indexOf'](_0x4aa516)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x17a6aa] === 'undefined') PacketTmp['send'][_0x17a6aa] = {
                    'id': _0x4aa516,
                    'Translate': _0xb4b4cb,
                    'count': 0x1
                };
                PacketTmp['send'][_0x17a6aa]['count']++;
            }
            const _0x43a298 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x3ff4b6 = [];
            if (sp_id) _0x3ff4b6['push'](_0x4aa516);
            if (sp_name) _0x3ff4b6['push'](_0x17a6aa);
            if (sp_trans) _0x3ff4b6['push'](_0xb4b4cb);
            let _0x2370d7 = sp_intercept && (intercept['includes'](_0x4aa516) || intercept['includes'](_0x17a6aa));
            if (!sp_ignore || !(ignore['includes'](_0x4aa516) || ignore['includes'](_0x17a6aa))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x3ff4b6['join'](' - ') + (_0x2370d7 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x2370d7;
        }
    }

    function onReceiveServerPacketEvent(_0x5d62b4, _0x109183) {
        if (ShadowBoomer && _0x5d62b4 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x5d62b4 == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x5d62b4 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x5d62b4 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x5d62b4 === 0x9) return true;
        if (ModifyTime && _0x5d62b4 === 0xa) return true;
        if (ca_check && _0x5d62b4 === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x5d62b4 === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0x5d62b4 === 0x12) return true;
        if (NoCamShake && _0x5d62b4 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x217784 = PacketTranslate[PacketTranslate['map'](_0x13e39d => _0x13e39d['id'])['indexOf'](_0x5d62b4)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x109183] === 'undefined') PacketTmp['receive'][_0x109183] = {
                    'id': _0x5d62b4,
                    'Translate': _0x217784,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x109183]['count']++;
            }
            const _0x348de5 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x1f1028 = [];
            if (srp_id) _0x1f1028['push'](_0x5d62b4);
            if (srp_name) _0x1f1028['push'](_0x109183);
            if (srp_trans) _0x1f1028['push'](_0x217784);
            let _0x49242d = srp_intercept && (intercept['includes'](_0x5d62b4) || intercept['includes'](_0x109183));
            if (!srp_ignore || !(ignore['includes'](_0x5d62b4) || ignore['includes'](_0x109183))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x1f1028['join'](' - ') + (_0x49242d ? '\n§e已拦截数据包' : ''), '§r');
            return _0x49242d;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x5d62b4 === 0x9;
    }

    function onTouchMotionDownEvent(_0x2405ac, _0x200380, _0x5a81d3) {
        if (SafeAttack) {
            const _0x3f4d58 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x36ebff = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x4e0921 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x49fa58 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 声思似诉平(self_id, at_lists[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, at_lists[0x0]) < sa_range && _0x200380 > _0x3f4d58 && _0x200380 < _0x36ebff && _0x5a81d3 > _0x4e0921 && _0x5a81d3 < _0x49fa58) 江头夜送客(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0xf1fc97, _0x4fb26c) {
        const _0x3e19b4 = 音铮铮然有(_0x4fb26c);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x3e19b4['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x3e19b4['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0xf1fc97 > cs_sort) && cs_current < cs_maxCount) {
            let _0x470189 = cs_black['length'] === 0x0 || cs_black['some'](_0x4da202 => _0x3e19b4['namespace']['includes'](_0x4da202));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x2b57b4 => _0x3e19b4['namespace']['includes'](_0x2b57b4))) _0x470189 = false;
            if (_0xf1fc97 < cs_min && _0xf1fc97 > cs_max) _0x470189 = false;
            if (_0x3e19b4['attackDamage'] !== 0x0 && _0x3e19b4['attackDamage'] < cs_min_damage) _0x470189 = false;
            if (_0x3e19b4['damage'] !== 0x0 && _0x3e19b4['damage'] < cs_min_lasting) _0x470189 = false;
            if (!cs_weapon && _0x3e19b4['attackDamage'] > 0x0 && _0x3e19b4['damage'] > 0x0) _0x470189 = false;
            if (!cs_armor && _0x3e19b4['attackDamage'] === 0x0 && _0x3e19b4['damage'] > 0x0) _0x470189 = false;
            if (!cs_other && _0x3e19b4['attackDamage'] === 0x0 && _0x3e19b4['damage'] === 0x0) _0x470189 = false;
            if (cs_sort) cs_sort = _0xf1fc97;
            if (_0x470189) cs_timer = 0x0;
            if (_0x470189) cs_current++;
            return _0x470189;
        }
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0xf1fc97 + '\n§e物品NBT数据: §r' + _0x4fb26c, '§r');
    }

    function onPlayerAuthInputEvent(_0x5bff8) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x5bff8.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x5bff8.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x5bff8['pos']['x']['toFixed'](0x2) + ', ' + _0x5bff8['pos']['y']['toFixed'](0x2) + ',' + _0x5bff8['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x5bff8['delta']['x']['toFixed'](0x2) + ', ' + _0x5bff8['delta']['y']['toFixed'](0x2) + ', ' + _0x5bff8['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x5bff8['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x5bff8['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x5bff8['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x5bff8['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x5bff8['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x567dd8) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0x567dd8);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x58d149 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x2a277a = _0x567dd8['replace'](琵琶行浔阳(_0x567dd8, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x58d149)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x2a277a['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x331c5a) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0x331c5a);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x83e33f) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x83e33f);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x2304b3 = JSON['parse'](Sauths);
            if (typeof _0x2304b3['sauth_json'] !== 'undefined') _0x2304b3 = _0x2304b3['sauth_json'];
            return _0x2304b3;
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