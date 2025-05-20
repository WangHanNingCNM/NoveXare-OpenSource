/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 06  23：36：07
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b05§f133538§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const createShadow = (_0x43454f, _0x2a66e2, _0x253714) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x43454f,
            'y': _0x2a66e2,
            'z': _0x253714
        },
        'type': 0x11
    });
    const getPos = _0x62a957 => {
        let _0x4c8982 = getEntityPos(_0x62a957);
        if (_0x4c8982) _0x4c8982['y'] += getPos_offset;
        return _0x4c8982 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentTP = (_0x409f99, _0x1503a7, _0x45c72d) => sendPlayerAuthInput({
        'inputMode': 0x2,
        'playMode': 0x0,
        'pos': {
            'x': _0x409f99,
            'y': _0x1503a7,
            'z': _0x45c72d
        }
    });
    const 左迁九江郡 = _0x2b1009 => {
        const _0x318287 = new Uint8Array(_0x2b1009);
        let _0x4bff6a = '';
        for (let _0x31d3d6 = 0x0; _0x31d3d6 < _0x318287['length'];) {
            let _0x41fb5e = _0x318287[_0x31d3d6++];
            if (_0x41fb5e <= 0x7f) _0x4bff6a += String['fromCharCode'](_0x41fb5e);
            else if (_0x41fb5e >> 0x5 === 0x6) {
                let _0x164612 = _0x318287[_0x31d3d6++];
                _0x4bff6a += String['fromCharCode']((_0x41fb5e & 0x1f) << 0x6 | _0x164612 & 0x3f);
            } else if (_0x41fb5e >> 0x4 === 0xe) {
                let _0x5b7549 = _0x318287[_0x31d3d6++];
                let _0x517667 = _0x318287[_0x31d3d6++];
                _0x4bff6a += String['fromCharCode']((_0x41fb5e & 0xf) << 0xc | (_0x5b7549 & 0x3f) << 0x6 | _0x517667 & 0x3f);
            } else if (_0x41fb5e >> 0x3 === 0x1e) {
                let _0x807ea4 = _0x318287[_0x31d3d6++];
                let _0x2e0870 = _0x318287[_0x31d3d6++];
                let _0x40a2af = _0x318287[_0x31d3d6++];
                let _0x363205 = (_0x41fb5e & 0x7) << 0x12 | (_0x807ea4 & 0x3f) << 0xc | (_0x2e0870 & 0x3f) << 0x6 | _0x40a2af & 0x3f;
                _0x4bff6a += String['fromCodePoint'](_0x363205);
            }
        }
        return _0x4bff6a;
    };
    const createText = (_0x5bedba, _0x1d245c, _0x3a4484, _0x103299, _0x3546d1) => addCustomArrayList(_0x3546d1, ' ' ['repeat'](_0x5bedba), '\n' ['repeat'](_0x1d245c) + ' ' + _0x3a4484, _0x103299);
    const 司马明年秋 = (_0xb02a96, _0x3c320c, _0x5b7a56, _0x541c6c) => {
        let _0x12b76c = _0xb02a96['indexOf'](_0x3c320c) + _0x3c320c['length'];
        let _0x1f0df5 = _0xb02a96['indexOf'](_0x5b7a56, _0x12b76c);
        if (typeof _0x541c6c !== 'undefined' && _0xb02a96['indexOf'](_0x541c6c, _0x12b76c) < _0x1f0df5 && _0xb02a96['indexOf'](_0x541c6c, _0x12b76c) != -0x1) _0x1f0df5 = _0xb02a96['indexOf'](_0x541c6c, _0x12b76c);
        if (_0x12b76c === -0x1 || _0x1f0df5 === -0x1) return null;
        return _0xb02a96['substring'](_0x12b76c, _0x1f0df5);
    };
    const 送客湓浦口 = _0x110925 => {
        let _0x2920e1 = _0x110925['split']('');
        let _0x49bbb2 = '';
        let _0x3879a8 = '4c6e2a3b195d' ['split']('');
        for (let _0x4a0136 in _0x2920e1) _0x49bbb2 += '§' + _0x3879a8[_0x4a0136 % _0x3879a8['length']] + _0x2920e1[_0x4a0136];
        return _0x49bbb2;
    };
    const 闻舟中夜弹 = _0x7ea66a => {
        if (_0x7ea66a['startsWith']('0x')) _0x7ea66a = _0x7ea66a['slice'](0x2);
        const _0xe2cbae = [];
        for (let _0x27ad58 = 0x0; _0x27ad58 < _0x7ea66a['length']; _0x27ad58 += 0x2) {
            const _0xb2f57c = parseInt(_0x7ea66a['slice'](_0x27ad58, _0x27ad58 + 0x2), 0x10);
            _0xe2cbae['push'](_0xb2f57c);
        }
        return new Uint8Array(_0xe2cbae);
    };
    const 琵琶者听其 = (_0x12ae38, _0x448246, _0x5a51a7 = 0x0) => {
        if (_0x5a51a7 == 0x1) sendRpc(_0x12ae38, 闻舟中夜弹(_0x448246));
        if (_0x5a51a7 == 0x2) sendRpc(_0x12ae38, _0x448246);
        if (_0x5a51a7 == 0x3) {
            const _0x2358f0 = new Uint8Array(str['length']);
            for (let _0x36cbb9 = 0x0; _0x36cbb9 < str['length']; _0x36cbb9++) _0x2358f0[_0x36cbb9] = str['charCodeAt'](_0x36cbb9);
            sendRpc(_0x12ae38, _0x2358f0);
        }
    };
    const 音铮铮然有 = _0x42c64b => {
        if (item_nbt_library[_0x42c64b] !== undefined) return item_nbt_library[_0x42c64b];
        const _0x593a04 = 司马明年秋(_0x42c64b, ',Name:"', '",WasPickedUp');
        if (_0x593a04 === '' || typeof _0x593a04 !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x3ce2f7 = Number(司马明年秋(_0x42c64b, ',aux:', ','));
        const _0x29f1b7 = Number(司马明年秋(_0x42c64b, 'Count:', 'b,D'));
        const _0x357be1 = _0x42c64b['includes'](',name:"') ? 司马明年秋(_0x42c64b, ',name:"', '",') : _0x593a04['replace']('minecraft:', '');
        const _0x7ce80a = _0x42c64b['includes'](',netId:') ? Number(司马明年秋(_0x42c64b, ',netId:', '}')) : 0x0;
        const _0x26a1ad = _0x42c64b['includes']('maxDamage') ? Number(司马明年秋(_0x42c64b, ',maxDamage:', ',')) : 0x0;
        const _0x107c05 = _0x42c64b['includes']('attackDamage') ? Number(司马明年秋(_0x42c64b, 'attackDamage:', ',')) : 0x1;
        const _0x185179 = _0x42c64b['includes']('customColor') ? 司马明年秋(_0x42c64b, 'customColor:', '}', ',') : '';
        const _0x398337 = _0x42c64b['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x42c64b, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x46fa34 = _0x42c64b['startsWith']('{Block:');
        const _0x5c77df = {
            'name': _0x357be1,
            'namespace': _0x593a04,
            'aux': _0x3ce2f7,
            'damage': _0x26a1ad,
            'attackDamage': _0x107c05,
            'count': _0x29f1b7,
            'color': _0x185179,
            'isBlock': _0x46fa34,
            'id': _0x7ce80a,
            'enchants': JSON['parse'](_0x398337)
        };
        item_nbt_library[_0x42c64b] = _0x5c77df;
        return _0x5c77df;
    };
    const 京都声问其 = _0x3875f8 => {
        const _0xfeefcf = getEntitySize(_0x3875f8);
        const _0x26ac6f = getEntityMotion(_0x3875f8);
        const _0x4ffa5f = getPos(_0x3875f8);
        const _0x3ba5ca = getEntityName(_0x3875f8);
        const _0x4d6a46 = getEntityNamespace(_0x3875f8);
        const _0x22c382 = 声暗问弹者(self_id, _0x3875f8);
        const _0x4c2600 = getCarried(_0x3875f8);
        const _0x2d9540 = 瑟瑟主人下(_0x3875f8);
        const _0x26efb2 = getEntityAttribute(_0x3875f8, 'minecraft:health');
        const _0x1823aa = getEntityAttribute(_0x3875f8, 'minecraft:movement');
        const _0x451530 = getEntityTypeId(_0x3875f8);
        const _0x5019ed = getEntityTarget(_0x3875f8);
        const _0x2b39f1 = getPlayerInventorySize(_0x3875f8);
        const _0x141d87 = getPlayerHotBarSize(_0x3875f8);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x3875f8);
        const _0x165673 = _0x33f389 => _0x33f389['toFixed'](0x2);
        const _0x4fc1dc = ['唯一ID:' + _0x3875f8 + ' 昵称:' + _0x3ba5ca + '§r 实体命名空间:' + _0x4d6a46 + ' 水平碰撞箱:' + _0x165673(_0xfeefcf['x']) + ' 垂直碰撞箱:' + _0x165673(_0xfeefcf['y']) + ' Mot速度:' + _0x2d9540, 'ability速度:[max:' + _0x1823aa['max'] + ', min:' + _0x1823aa['min'] + ', current:' + _0x1823aa['current'] + '] 血量:[max:' + _0x26efb2['max'] + ', min:' + _0x26efb2['min'] + ', current:' + _0x26efb2['current'] + ']', '手持:[id:' + _0x4c2600['id'] + ', namespace:' + _0x4c2600['namespace'] + ', name:' + _0x4c2600['name'] + '§r, aux:' + _0x4c2600['aux'] + '] 距离:' + _0x22c382 + ' 实体类型:' + _0x451530, '仰俯角:' + _0x165673(pitch) + '° 偏航角:' + _0x165673(yaw) + '° 仇恨目标:' + getEntityName(_0x5019ed) + '^' + _0x5019ed, '移动值:[' + _0x165673(_0x26ac6f['x']) + ', ' + _0x165673(_0x26ac6f['y']) + ', ' + _0x165673(_0x26ac6f['z']) + '] 坐标值:[' + _0x165673(_0x4ffa5f['x']) + ', ' + _0x165673(_0x4ffa5f['y']) + ', ' + _0x165673(_0x4ffa5f['z']) + ']', '背包容量:' + _0x2b39f1 + ' 物品栏容量:' + _0x141d87];
        return _0x4fc1dc['join']('\n');
    };
    const getCarried = _0x4b7974 => 音铮铮然有(getEntityCarriedItem(_0x4b7974));
    const getOffhand = _0x54f90d => 音铮铮然有(getEntityOffhandItem(_0x54f90d));
    const getInventory = (_0x58e719, _0x43ea9a) => 音铮铮然有(getPlayerInventoryItem(_0x58e719, _0x43ea9a));
    const 人本长安倡 = (_0x11c2a8, _0x193b72, _0x2b83a4, _0x2f67ad = false, _0x523e0e = false) => {
        let _0x5c1405 = {
            'x': _0x11c2a8,
            'y': _0x193b72,
            'z': _0x2b83a4
        };
        const _0x3a87cd = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x358137 = _0x4cd8ff => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x4cd8ff['map'](_0x4c368d => ({
                'type': _0x4c368d,
                'pos': _0x5c1405,
                'value': 0x1
            }))
        });
        const _0x465cfd = _0x51c39c => sendPlayerAction({
            'id': self_id,
            'pos': _0x5c1405,
            'type': _0x51c39c
        });
        if (_0x2f67ad) _0x358137(_0x3a87cd);
        if (_0x523e0e) _0x3a87cd['forEach'](_0x387c1f => _0x465cfd(_0x387c1f));
    };
    const 女尝学琵琶 = (_0x2c30e6, _0x11999e, _0xe60bd1 = true, _0x47bec4 = false) => {
        if (_0x2c30e6 === _0x11999e) return false;
        let _0x102fa4 = getInventory(self_id, _0x2c30e6);
        let _0x4a7861 = getInventory(self_id, _0x11999e);
        if (_0xe60bd1 && _0x11999e < 0x9 && _0x4a7861['namespace'] != 'minecraft:air') {
            for (let _0x15a671 = 0x23; _0x15a671 > 0x8; _0x15a671--) {
                const _0x4462c8 = getInventory(self_id, _0x15a671);
                if (_0x4462c8['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x11999e, _0x15a671);
                    break;
                }
            }
        }
        if (_0x47bec4) {
            for (var _0x2839cd = 0x23; _0x2839cd > 0x0; _0x2839cd--) {
                const _0x50f367 = getInventory(self_id, _0x2839cd);
                if (_0x50f367['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x11999e, _0x2839cd);
                    break;
                }
            }
        }
        if (_0x102fa4['namespace'] != 'minecraft:air' && _0x4a7861['namespace'] === 'minecraft:air') moveInventoryItem(_0x2c30e6, _0x11999e);
        if (_0x47bec4 && _0x2839cd) moveInventoryItem(_0x2839cd, _0x11999e);
    };
    const 于穆曹二善 = (_0x355072, _0x4a4d36) => {
        let _0xc7bc23 = _0x4a4d36 - 0xb4;
        if (_0x355072 > 0x5a) _0x355072 -= 0x5a;
        if (_0x355072 < -0x5a) _0x355072 += 0x5a;
        if (_0xc7bc23 > 0xb4) _0xc7bc23 = _0xc7bc23 - 0x168;
        if (_0xc7bc23 < -0xb4) _0xc7bc23 = 0x168 + _0xc7bc23;
        if (getPlayerViewPerspective() === 0x0 || _0xc7bc23 > 0xb4 || _0xc7bc23 < -0xb4 || _0x355072 > 0x5a || _0x355072 < -0x5a) return false;
        setEntityBodyRot(self_id, _0xc7bc23);
        setEntityRot(self_id, _0x355072, _0xc7bc23);
    };
    const 才年长色衰 = _0x57b871 => {
        const _0x30d9c9 = getEntityAttribute(_0x57b871, 'minecraft:health');
        const _0x2f049b = getPos(_0x57b871);
        if (typeof _0x2f049b != 'object' || !_0x2f049b || !_0x2f049b['x'] || !_0x2f049b['y'] || !_0x2f049b['z']) return false;
        if (!findEntity(_0x57b871) && (_0x30d9c9['max'] === undefined || _0x30d9c9['min'] === undefined || _0x30d9c9['current'] === undefined)) return false;
        if (_0x30d9c9['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x62b2fe, _0x21fe0f) => {
        if (typeof globalThis[_0x62b2fe] === 'undefined' || globalThis[_0x62b2fe] === _0x21fe0f) return;
        globalThis[_0x62b2fe] = _0x21fe0f;
        NoveXare_Config[_0x62b2fe] = _0x21fe0f;
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch_' + (_0x21fe0f ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x62b2fe['includes']('_'))) {
            if (modelist['tip_mode'] === 0x0) {
                if (_0x21fe0f) 归客不发寻(0x0, _0x62b2fe, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x62b2fe, '§oDisable ◇', '§c');
            }
            if (modelist['tip_mode'] === 0x1) {
                addCustomArrayList(_0x62b2fe, _0x62b2fe + (_0x21fe0f ? ' - Enable' : ' - Disable'), _0x62b2fe + (_0x21fe0f ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x62b2fe, _0x62b2fe + (_0x21fe0f ? ' - Enable' : ' - Disable'), _0x62b2fe + (_0x21fe0f ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof ArrayListCfg[_0x62b2fe] !== 'undefined') addCustomArrayList(_0x62b2fe, ArrayListCfg[_0x62b2fe]['CN'], ArrayListCfg[_0x62b2fe]['EN'], _0x21fe0f);
        else if (modelist['tip_mode'] != 0x1 && ArrayList && !_0x62b2fe['includes']('_')) addCustomArrayList(_0x62b2fe, _0x62b2fe, _0x62b2fe, _0x21fe0f);
        if (typeof bind_func[_0x62b2fe] !== 'undefined') bind_func[_0x62b2fe]['forEach'](_0x4d26a0 => 委身为贾人(_0x4d26a0, _0x21fe0f));
        if (typeof RunAway_binds[_0x62b2fe] !== 'undefined' && !RunAway_binds[_0x62b2fe]['isNX']) callModule(RunAwayID[RunAway_binds[_0x62b2fe]['module']], JSON['stringify']({
            'value': _0x21fe0f
        }));
    };
    const 妇遂命酒使 = (_0x15e455, _0x2f9b7c, _0x4deb51, _0x2534ba, _0x1fd151, _0x3e1606 = false, _0x2b867b = {}) => {
        for (let _0x3db474 = 0x0; _0x3db474 < _0x1fd151; _0x3db474++) addParticle(Number(_0x15e455), _0x2f9b7c, _0x4deb51, _0x2534ba, _0x3e1606 ? _0x2b867b['x'] : _0x2f9b7c, _0x3e1606 ? _0x2b867b['y'] : _0x4deb51, _0x3e1606 ? _0x2b867b['z'] : _0x2534ba, 0x1, _0x3e1606);
    };
    const 快弹数曲曲 = () => {
        const _0x4ad8ae = getEntityCarriedItem(self_id);
        const _0x14a5ea = getPos(self_id);
        if (!_0x4ad8ae['includes']('count:0')) buildBlock(self_id, _0x14a5ea['x'], _0x14a5ea['y'], _0x14a5ea['z'], 0x6);
    };
    const 罢悯然自叙 = _0x3068fb => {
        const _0x4b1379 = getInventory(self_id, _0x3068fb);
        const _0x2e32c9 = 迁谪意因为(self_id, _0x3068fb);
        const _0x9ee220 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x4b1379['namespace'] != 'minecraft:air' && _0x4b1379['count'] > 0x0 && _0x9ee220['includes'](_0x2e32c9) && selectPlayerInventorySlot(self_id, _0x3068fb)) {
            const _0x40c804 = getPlayerSelectItemSlot(self_id);
            if (_0x40c804 === _0x3068fb) 快弹数曲曲();
        }
    };
    const 少小时欢乐 = (_0x5699c2, _0x69bd14, _0x1afdfb, _0x369baf) => {
        let _0xa21d99 = _0x69bd14 > 0x0;
        _0x69bd14 = Math['abs'](_0x69bd14);
        let _0x1a48ca = _0x1afdfb * Math['cos'](_0x69bd14 * Math['PI'] / 0xb4);
        let _0x2aaa41 = _0x1afdfb * Math['sin'](_0x69bd14 * Math['PI'] / 0xb4);
        let _0x2a696b = _0x2aaa41 / _0x369baf;
        let _0x3a5ed1 = _0x369baf * (_0x2a696b * _0x2a696b) * 0.5;
        let _0x572b6a = _0x1a48ca * _0x2a696b;
        let _0x44f3bc = -_0x3a5ed1 / (_0x572b6a * _0x572b6a);
        return {
            'data': _0x44f3bc * Math['pow'](_0x5699c2 - (_0xa21d99 ? -_0x572b6a : _0x572b6a), 0x2) + _0x3a5ed1,
            'bool': _0xa21d99
        };
    };
    const getUserID = _0x261716 => typeof _0x261716 === 'undefined' || _0x261716 === null ? getLocalPlayerUniqueID() : _0x261716;
    const 事今漂沦憔 = (_0x11e0ab, _0x2f671b, _0x12b997) => {
        const _0x30fe18 = [
            [_0x11e0ab, _0x2f671b + 0x1, _0x12b997],
            [_0x11e0ab, _0x2f671b - 0x1, _0x12b997],
            [_0x11e0ab, _0x2f671b, _0x12b997 + 0x1],
            [_0x11e0ab, _0x2f671b, _0x12b997 - 0x1],
            [_0x11e0ab + 0x1, _0x2f671b, _0x12b997],
            [_0x11e0ab - 0x1, _0x2f671b, _0x12b997]
        ];
        _0x30fe18['some']((_0xfda53, _0x3b4c2b) => {
            const _0x4fa5ec = getBlock(_0xfda53[0x0], _0xfda53[0x1], _0xfda53[0x2]);
            if (_0x4fa5ec['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0xfda53[0x0], _0xfda53[0x1], _0xfda53[0x2], _0x3b4c2b);
        });
    };
    const 湖间予出官 = (_0x312ddc, _0x1394be) => {
        const _0x4eac47 = getPos(self_id);
        sendSound(_0x312ddc, _0x4eac47['x'], _0x4eac47['y'], _0x4eac47['z'], _0x1394be);
    };
    const 二年恬然自 = (_0xf98624, _0x2ece58, _0x178c57) => {
        const _0x49eca6 = getPos(self_id);
        motion_list['push']([_0xf98624 - _0x49eca6['x'], _0x2ece58 - _0x49eca6['y'], _0x178c57 - _0x49eca6['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x18d022, _0x328de1) => {
        let _0x32ae82 = _0x18d022 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x18d022);
        if (typeof _0x328de1 !== 'undefined') _0x32ae82['namespace'] = _0x328de1;
        return Array['from']({
            'length': 0x24
        }, (_0x202f6f, _0x58d28a) => getInventory(self_id, _0x58d28a))['filter'](_0x2b5fcf => _0x2b5fcf['namespace'] === _0x32ae82['namespace'] && (typeof _0x328de1 !== 'undefined' || _0x2b5fcf['aux'] === _0x32ae82['aux']))['reduce']((_0x500a0e, _0x5f5602) => _0x500a0e + _0x5f5602['count'], 0x0);
    };
    const 是夕始觉有 = (_0x32a480, _0x4e4586, _0x203d37 = 'hotbar', _0x425e40 = 0x0) => {
        const _0x3b023a = _0x203d37 == 'hotbar' ? 0x9 : 0x24;
        let _0xef9a8f = Array['from']({
            'length': _0x3b023a
        }, (_0x4fba43, _0x55522e) => getInventory(_0x32a480, _0x55522e));
        let _0x5a3dd3 = _0xef9a8f['some'](_0x6bf906 => _0x6bf906['namespace']['includes'](_0x4e4586));
        let _0x1ce835 = _0xef9a8f['reduce']((_0x426b5f, _0x4aa7a4) => _0x426b5f + _0x4aa7a4['count'], 0x0);
        return _0x5a3dd3 && _0x1ce835 > _0x425e40;
    };
    const 迁谪意因为 = (_0x19c794, _0xff0f4f, _0xd6b6a2) => {
        let _0x2ef2e5 = _0xff0f4f === -0x1 ? getCarried(_0x19c794) : getInventory(_0x19c794, _0xff0f4f);
        if (!_0x2ef2e5['namespace']['includes']('_') && typeof _0xd6b6a2 === 'undefined') return 'other';
        let _0x39b6f1 = typeof _0xd6b6a2 === 'undefined' ? _0x2ef2e5['namespace']['replace']('minecraft:', '') : _0xd6b6a2['replace']('minecraft:', '');
        const _0x473f81 = _0x39b6f1['split']('_');
        return _0x473f81[0x1];
    };
    const getEntityMaxDamage = _0x26831f => Array['from']({
        'length': 0x24
    }, (_0x248b28, _0x260e98) => 十六言命曰(_0x26831f, _0x260e98))['reduce']((_0x33fabb, _0x1088c7) => Math['max'](_0x33fabb, _0x1088c7), 0x0);
    const 长句歌以赠 = (_0x58be82, _0x37bad9, _0x25fde3 = false) => {
        let _0x1bdb7f = _0x25fde3 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x150b70 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x313463 = 0x0; _0x313463 < 0x24; _0x313463++) {
            const _0x2ab6a7 = 迁谪意因为(_0x58be82, _0x313463);
            const _0x550b2f = _0x150b70['indexOf'](_0x2ab6a7);
            if (_0x550b2f === -0x1) continue;
            const _0xb73842 = 之凡六百一(_0x58be82, _0x313463);
            if (!_0x25fde3 && _0x2ab6a7 === _0x37bad9 && _0x1bdb7f < _0xb73842) _0x1bdb7f = _0xb73842;
            if (_0x25fde3 && _0x1bdb7f[_0x550b2f] < _0xb73842) _0x1bdb7f[_0x550b2f] = _0xb73842;
        }
        return _0x1bdb7f;
    };
    const 之凡六百一 = (_0x4ebb66, _0x19f2f4, _0x54c7cc = true, _0x2577f9 = true) => {
        let _0xebc153 = _0x19f2f4 === -0x1 ? getCarried(_0x4ebb66) : getInventory(_0x4ebb66, _0x19f2f4);
        if (_0x19f2f4 < -0x1) _0xebc153 = 音铮铮然有(getPlayerArmorItem(_0x4ebb66, Math['abs'](_0x19f2f4) - 0x2));
        if (_0xebc153['count'] === 0x0 || _0xebc153['damage'] === 0x0) return 0x0;
        if (!_0x2577f9) return _0xebc153['damage'];
        let _0x3a4f94 = 0x0;
        let _0x3fa5f2 = _0xebc153['enchants']['findIndex'](_0x3f67dd => _0x3f67dd['id'] === 0x0);
        if (_0x3fa5f2 > -0x1) _0x3a4f94 = _0xebc153['enchants'][_0x3fa5f2]['lvl'];
        if (!_0x54c7cc) return 0x1 + _0x3a4f94 / 0xa;
        return _0xebc153['damage'] * (0x1 + _0x3a4f94 / 0xa);
    };
    const 十六言命曰 = (_0x4c2fa8, _0x53bb86, _0x4c2718 = true, _0x568f4a = true) => {
        let _0x3fb63c = _0x53bb86 === -0x1 ? getCarried(_0x4c2fa8) : getInventory(_0x4c2fa8, _0x53bb86);
        if (_0x3fb63c['count'] === 0x0 || _0x3fb63c['attackDamage'] === 0x1) return 0x1;
        if (!_0x568f4a) return _0x3fb63c['attackDamage'];
        let _0x5548fa = 0x0;
        let _0x179bab = _0x3fb63c['enchants']['findIndex'](_0x5d9e17 => _0x5d9e17['id'] === 0x9);
        if (_0x179bab > -0x1) _0x5548fa = _0x3fb63c['enchants'][_0x179bab]['lvl'] * 1.25;
        if (!_0x4c2718) return _0x5548fa;
        return _0x3fb63c['attackDamage'] + _0x5548fa;
    };
    const b2s = _0x2a83fe => _0x2a83fe ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x3d4238, _0x2dd624, _0x1a2005) => {
        let _0xad179a = _0x3d4238['split'](_0x2dd624)['length'] - 0x1;
        let _0x54ccd7 = 0x0;
        let _0x2ee1df = [];
        for (let _0x1ca75e = 0x0; _0x1ca75e < _0xad179a; _0x1ca75e++) {
            let _0x488619 = _0x3d4238['indexOf'](_0x2dd624, _0x54ccd7) + _0x2dd624['length'];
            let _0x2d7538 = _0x3d4238['indexOf'](_0x1a2005, _0x488619);
            if (_0x2d7538 === -0x1 || _0x488619 === -0x1) break;
            _0x54ccd7 = _0x2d7538;
            _0x2ee1df['push'](_0x3d4238['substring'](_0x488619, _0x2d7538));
        }
        return _0xad179a > 0x1 ? _0x2ee1df : _0x2ee1df[0x0];
    };
    const 江头夜送客 = (_0x1de072, _0x2bd44f) => {
        if (AttackPacket) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x1de072, _0x2bd44f);
    };
    const 枫叶荻花秋 = (_0x1dfe6f, _0x398cc7, _0x2fdbc3, _0x51ee31) => {
        if (typeof _0x2fdbc3 === 'undefined') _0x2fdbc3 = -0x1;
        if (typeof _0x51ee31 === 'undefined') _0x51ee31 = -0x1;
        let _0x1e50f1 = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x337095 = getInventory(_0x1dfe6f, index);
            if (!_0x337095['namespace'] || !_0x337095['name']) continue;
            if (_0x337095['namespace']['includes'](_0x398cc7) && (_0x337095['aux'] === _0x2fdbc3 || _0x2fdbc3 === -0x1) && (_0x337095['name']['includes'](_0x51ee31) || _0x51ee31 === -0x1)) {
                _0x1e50f1 = index;
                break;
            }
        }
        return _0x1e50f1;
    };
    const 瑟瑟主人下 = _0x156f2e => {
        const _0x2d7249 = getEntityMotion(_0x156f2e);
        const _0x1fb3c1 = Math['sqrt'](_0x2d7249['x'] * _0x2d7249['x'] + _0x2d7249['y'] * _0x2d7249['y'] + _0x2d7249['z'] * _0x2d7249['z']);
        return _0x1fb3c1 * 0x14;
    };
    const 马客在船举 = (_0x2fa108, _0x3defc3) => {
        const _0x5d7aae = _0x3defc3 - _0x2fa108 + 0x1;
        return Math['floor'](Math['random']() * _0x5d7aae) + _0x2fa108;
    };
    const 酒欲饮无管 = (_0x62a7d7, _0x1253f7, _0x2e246e) => {
        return {
            'x': _0x1253f7['x'] + _0x62a7d7['x'] * _0x2e246e,
            'y': _0x1253f7['y'] + _0x62a7d7['x'] * _0x2e246e,
            'z': _0x1253f7['z'] + _0x62a7d7['z'] * _0x2e246e
        };
    };
    const 弦醉不成欢 = _0x30be79 => {
        if (_0x30be79 < 0x3c) return _0x30be79 + 's';
        if (_0x30be79 >= 0x3c) return Math['floor'](_0x30be79 / 0x3c) + 'min ' + _0x30be79 % 0x3c + 's';
    };
    const 惨将别别时 = (_0x384c56, _0x3c4157, _0x4c5e67, _0x37a17e = 0x0, _0x3a0265 = 0x0) => {
        if (!_0x4c5e67) return true;
        _0x384c56['y'] += _0x37a17e;
        _0x3c4157['y'] += _0x3a0265;
        const _0x3e0770 = 弦弦掩抑声(_0x384c56, _0x3c4157, 'yaw_pos');
        const _0x52f65b = -弦弦掩抑声(_0x384c56, _0x3c4157, 'pitch_pos');
        const _0x54107b = getDistance(_0x384c56, _0x3c4157);
        let _0xfa52df = true;
        for (let _0x315b51 = 0x0; _0x315b51 < _0x54107b; _0x315b51 += 0.5) {
            const _0x35dacd = 忽闻水上琵(_0x315b51, _0x3c4157, {
                'yaw': _0x3e0770,
                'pitch': _0x52f65b
            });
            const _0x2d8bdf = getBlock(_0x35dacd['x'], _0x35dacd['y'], _0x35dacd['z']);
            if (_0x2d8bdf['namespace'] != 'minecraft:air') {
                _0xfa52df = false;
                break;
            }
        }
        return _0xfa52df;
    };
    const 茫茫江浸月 = (_0x32fc25, _0x5c8046) => {
        let _0x48b3f3 = getWorldPlayerList()['sort']((_0x1ebec1, _0x2d9804) => _0x1ebec1['name']['localeCompare'](_0x2d9804['name']));
        let _0x468245 = _0x48b3f3['length'] > 0x0 ? _0x48b3f3['map'](_0x5602af => ({
            'text': '§e' + _0x5602af['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x5602af['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x1e5a67 = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x468245
        };
        const _0x50d99a = JSON['stringify'](_0x1e5a67);
        addForm(_0x50d99a, function(_0x3eb66b) {
            if (_0x48b3f3['length'] > 0x0 && _0x3eb66b >= 0x0) {
                const _0x5941ec = _0x5c8046 === 0x0 ? _0x48b3f3[_0x3eb66b]['name'] : _0x48b3f3[_0x3eb66b]['id'];
                if (typeof globalThis[_0x32fc25] === 'object') globalThis[_0x32fc25]['push'](_0x5941ec);
                if (typeof globalThis[_0x32fc25] === 'string') globalThis[_0x32fc25] = _0x5941ec;
                归客不发寻(0x0, 'addTarget', _0x5941ec, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x2d7f23, _0x9ece8a, _0x22ff1a) => {
        let _0x167f5d = _0x2d7f23 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x22ff1a;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x2d7f23 = Math['abs'](_0x2d7f23);
        const _0x1e18ad = yaw * Math['PI'] / 0xb4;
        const _0x509a13 = pitch * Math['PI'] / 0xb4;
        let _0x35c4c1 = pitch != 0x0 ? Math['sin'](_0x509a13) * _0x2d7f23 : 0x0;
        let _0x11f9a9 = pitch != 0x0 ? _0x35c4c1 / Math['tan'](_0x509a13) : _0x2d7f23;
        let _0x16b189 = _0x11f9a9 < 0x0;
        _0x11f9a9 = Math['abs'](_0x11f9a9);
        const _0x52fd24 = Math['cos'](_0x1e18ad) * _0x11f9a9;
        const _0x5d916e = Math['sin'](_0x1e18ad) * _0x11f9a9;
        let _0x149a8a = -Math['sin'](_0x1e18ad) * _0x11f9a9;
        let _0x1cf726 = Math['cos'](_0x1e18ad) * _0x11f9a9;
        if (_0x167f5d || _0x16b189) {
            _0x149a8a = -_0x149a8a;
            if (!_0x16b189) _0x35c4c1 = -_0x35c4c1;
            _0x1cf726 = -_0x1cf726;
        }
        return {
            'x': _0x9ece8a['x'] + _0x149a8a,
            'y': _0x9ece8a['y'] - _0x35c4c1,
            'z': _0x9ece8a['z'] + _0x1cf726
        };
    };
    const getPlayerItemCount = _0x3309c2 => Array['from']({
        'length': 0x24
    }, (_0x313fb5, _0x3f0b66) => getInventory(_0x3309c2, _0x3f0b66))['filter'](_0x47c66f => _0x47c66f['count'] !== 0x0)['reduce']((_0x32d1a9, _0x102b94) => _0x32d1a9 + _0x102b94['count'], 0x0);
    const isSame = (_0x3cf21e, _0xdf3812, _0x27dae4) => Math['abs'](_0x3cf21e - _0xdf3812) < _0x27dae4;
    const 琶声主人忘 = (_0x57a8d9, _0x3604fb, _0x107098) => {
        let _0xd9bd52 = [];
        if (include_entity) _0xd9bd52 = _0xd9bd52['concat'](getEntityList());
        if (include_player) _0xd9bd52 = _0xd9bd52['concat'](getPlayerList());
        _0x107098 = Math['min'](_0x107098, _0xd9bd52['length']);
        let _0x19c0a8 = [];
        for (const _0x4bbae3 of _0xd9bd52) {
            if (!才年长色衰(_0x4bbae3)) continue;
            const _0x4682e2 = getEntityNamespace(_0x4bbae3);
            if (entity_keyword['length'] > 0x0 && entity_keyword['some'](_0x1a185f => _0x4682e2['includes'](_0x1a185f)) != back_select) continue;
            const _0xa451c7 = getPos(_0x4bbae3);
            const _0x43e03b = getDistance(_0xa451c7, getPos(_0x57a8d9));
            if ((_0x43e03b > _0x3604fb || _0x43e03b < min_distance) != back_select && !InfiniteAura && !infinite_distance) continue;
            const _0x5420eb = getEntityAttribute(_0x4bbae3, 'minecraft:health');
            if (check_health && (!_0x5420eb || _0x5420eb['min'] > _0x5420eb['max'] || _0x5420eb['max'] === Infinity || _0x5420eb['current'] <= 0x0 || _0x5420eb['max'] === 0x0) != back_select) continue;
            if (_0x4682e2 === 'minecraft:player') {
                const _0x341332 = getEntityRot(_0x4bbae3);
                const _0x12aa62 = bypass_bjd ? getEntityAttribute(_0x4bbae3, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x4a71b8 = getEntityName(_0x4bbae3);
                if (bypass_bjd && _0x12aa62['current'] >= 0.5 && !_0x4a71b8['includes']('[') && !_0x4a71b8['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x4bbae3);
                    continue;
                }
                if (check_rot && (_0x341332['yaw']['toFixed'](0x2) === 0x0 || _0x341332['pitch']['toFixed'](0x2) === 0x0 || typeof _0x341332['yaw'] === 'undefined' || typeof _0x341332['pitch'] === 'undefined') != back_select) continue;
                const _0x505e0 = getEntityFlag(_0x4bbae3, 0x5);
                if (check_hide && _0x505e0 != back_select) continue;
                const _0x9a83d2 = getEntityIsGround(_0x4bbae3);
                if (check_ground && _0x9a83d2 === back_select) continue;
                if (!惨将别别时(getPos(self_id), _0xa451c7, check_wall, true, 1.53, 0.9) != back_select) continue;
                if (Teams && teams_name && (_0x4a71b8['startsWith'](team) || team['includes']('[') && _0x4a71b8['includes'](team))) continue;
                if (white_list['includes'](_0x4bbae3) != back_select || !check_name && (_0x4a71b8 === getEntityName(_0x57a8d9) || _0x4a71b8 === '') != back_select || (_0xa451c7['y'] > limit_y || _0xa451c7['y'] < limit_min_y) != back_select && !ignore_height || _0x4bbae3 === self_id) continue;
                if (regex_enable && regex['some'](_0x5c7c8c => _0x4a71b8['includes'](_0x5c7c8c))) continue;
                const _0x2bb3ba = isPlayer(_0x4bbae3) && teams_armor ? 音铮铮然有(getPlayerArmorItem(_0x4bbae3, team_slot)) : {};
                if (Teams && _0x2bb3ba != '' && isPlayer(_0x4bbae3) && teams_armor && _0x2bb3ba['color'] === 音铮铮然有(getPlayerArmorItem(self_id, team_slot))['color']) continue;
                const _0x11cdea = check_size ? getEntitySize(_0x4bbae3) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (check_size && ((_0x11cdea['x'] > default_size['x'] + 0.1 || _0x11cdea['x'] < default_size['x'] - 0.1) && (_0x11cdea['y'] > 1.66 || _0x11cdea['y'] < 1.64) && (_0x11cdea['y'] < default_size['y'] || _0x11cdea['y'] > default_size['y'] + 0.1) && (_0x11cdea['y'] > 1.51 || _0x11cdea['y'] < 1.49)) != back_select) continue;
            }
            const _0x243d2f = modelist['select_mode'] === 0x4 ? getPlayerItemCount(_0x4bbae3) : 0x0;
            const _0x30f0f5 = modelist['select_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x4bbae3, 'yaw_rot') : 0x0;
            const _0x468826 = modelist['select_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x4bbae3, 'pitch_rot') : 0x0;
            const _0x28ae28 = modelist['select_mode'] === 0x2 ? 十六言命曰(_0x4bbae3, -0x1) : 0x0;
            _0x19c0a8['push']({
                'distance': _0x43e03b,
                'target': _0x4bbae3,
                'damage': _0x28ae28,
                'heal': _0x5420eb['current'],
                'crosshair': Math['sqrt'](_0x30f0f5 * _0x30f0f5 + _0x468826 * _0x468826),
                'items': _0x243d2f,
                'random': 马客在船举(0x0, _0xd9bd52['length'] - 0x1)
            });
        }
        const _0x1dd630 = [(_0x578616, _0x1e024a) => _0x578616['distance'] - _0x1e024a['distance'], (_0x5acbf5, _0x455ca0) => _0x5acbf5['heal'] - _0x455ca0['heal'], (_0x1232da, _0x458b27) => _0x1232da['damage'] - _0x458b27['damage'], (_0x22921c, _0x522919) => _0x22921c['crosshair'] - _0x522919['crosshair'], (_0x53e3b7, _0x291f5b) => _0x291f5b['items'] - _0x53e3b7['items'], (_0x345d9e, _0x194968) => _0x345d9e['random'] - _0x194968['random']];
        _0x19c0a8['sort'](_0x1dd630[modelist['select_mode']]);
        if (reverse_target) _0x19c0a8['reverse']();
        if (infinite_targets) return _0x19c0a8['map'](_0x2bfa54 => _0x2bfa54['target']);
        return _0x19c0a8['slice'](0x0, _0x107098)['map'](_0x38a424 => _0x38a424['target']);
    };
    const 归客不发寻 = (_0x8e5c2b = 0x0, _0x4cbed8 = 'Tip', _0x1baaf3, _0x2946f7 = '§r') => {
        if (!FuncTip) return false;
        if (_0x8e5c2b == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x4cbed8 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x2946f7) + ' ' + _0x1baaf3);
        if (_0x8e5c2b == 0x1) return '§r' + _0x4cbed8 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x2946f7) + ' ' + _0x1baaf3;
    };
    const getDistance = (_0x25d8fb, _0x3027d9) => Math['sqrt'](Math['pow'](_0x25d8fb['x'] - _0x3027d9['x'], 0x2) + Math['pow'](_0x25d8fb['y'] - _0x3027d9['y'], 0x2) + Math['pow'](_0x25d8fb['z'] - _0x3027d9['z'], 0x2));
    const 声暗问弹者 = (_0x449823, _0x57464e) => {
        if (!才年长色衰(_0x449823) || !才年长色衰(_0x57464e)) return Infinity;
        const _0xd9fe6d = getPos(_0x449823);
        const _0x41d407 = getPos(_0x57464e);
        return Math['sqrt'](Math['pow'](_0xd9fe6d['x'] - _0x41d407['x'], 0x2) + Math['pow'](_0xd9fe6d['y'] - _0x41d407['y'], 0x2) + Math['pow'](_0xd9fe6d['z'] - _0x41d407['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x1c4e62, _0x3a9265) => {
        if (!才年长色衰(_0x1c4e62) || !才年长色衰(_0x3a9265)) return Infinity;
        const _0x5d3fd4 = getPos(_0x1c4e62);
        const _0x2d4ab5 = getPos(_0x3a9265);
        return Math['sqrt'](Math['pow'](_0x5d3fd4['x'] - _0x2d4ab5['x'], 0x2) + Math['pow'](_0x5d3fd4['z'] - _0x2d4ab5['z'], 0x2));
    };
    const 欲语迟移船 = (_0x1f3f16, _0x6db542, _0x22f6cd) => {
        let _0x323bd5 = {
            'fn-set-player-pos': {
                'x': _0x1f3f16,
                'y': _0x6db542,
                'z': _0x22f6cd
            }
        };
        callModule(0x5, JSON['stringify'](_0x323bd5));
    };
    const getHorizontalDistance = (_0x473984, _0x6ecd68) => Math['sqrt'](Math['pow'](_0x473984['x'] - _0x6ecd68['x'], 0x2) + Math['pow'](_0x473984['z'] - _0x6ecd68['z'], 0x2));
    const setRealPos = (_0x43e3e7, _0x3104fb, _0x5656c3, _0x4cde75) => setEntityPos(_0x43e3e7, _0x3104fb, _0x5656c3 + setPos_offset, _0x4cde75);
    const setPos = (_0x476c57, _0x3c5d6b, _0x4fb316) => setRealPos(self_id, _0x476c57, _0x3c5d6b, _0x4fb316);
    const setMotion = (_0xd6f7c7, _0x3887a0, _0x42244b) => setEntityMotion(self_id, _0xd6f7c7, _0x3887a0, _0x42244b);
    const 相近邀相见 = _0x3c70ae => {
        if (_0x3c70ae === '') return [];
        return _0x3c70ae['split'](',');
    };
    const 添酒回灯重 = _0x1f9585 => {
        if (typeof _0x1f9585 != 'object' || _0x1f9585['length'] === 0x0) return '';
        return _0x1f9585['join'](',');
    };
    const 开宴千呼万 = (_0x531d44, _0x10bac) => {
        let _0x129128 = typeof _0x10bac === 'object' ? 添酒回灯重(_0x10bac) : _0x10bac;
        let _0x30f8ef = typeof _0x10bac === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x531d44 + '","placeholder":"","default":"' + _0x129128 + '"}]}', function(_0x412abc) {
            if (_0x30f8ef === 0x1) globalThis[_0x531d44] = _0x412abc;
            if (_0x30f8ef === 0x0) globalThis[_0x531d44] = 相近邀相见(_0x412abc);
            归客不发寻(0x0, 'setValue', _0x531d44 + ' §7>>>§r ' + _0x412abc, '§r');
            NoveXare_Config[_0x531d44] = globalThis[_0x531d44];
        });
    };
    const 唤始出来犹 = _0x55af41 => {
        if (typeof _0x55af41 != 'string' || _0x55af41 === '') return 'None';
        let _0x5ced9d = _0x55af41['match'](/\[(.*?)\]/g);
        if (_0x5ced9d === null) return 'None';
        return _0x5ced9d[0x0];
    };
    const 抱琵琶半遮 = _0x205a19 => {
        if (!File['exist'](_0x205a19)) return '{}';
        const _0x51042f = File['read'](_0x205a19);
        return _0x51042f ? _0x51042f : '{}';
    };
    const 面转轴拨弦 = _0x2d6066 => {
        const _0x57f0a4 = getPos(_0x2d6066);
        let _0x169ffb = _0x2d6066 === self_id ? Math['floor'](_0x57f0a4['y']) - 0x1 : Math['floor'](_0x57f0a4['y']);
        return {
            'x': Math['floor'](_0x57f0a4['x']),
            'y': _0x169ffb,
            'z': Math['floor'](_0x57f0a4['z'])
        };
    };
    const 三两声未成 = (_0x554177, _0x15dbcc) => {
        if (_0x554177['length'] === _0x15dbcc['length']) {
            return [];
        }
        const _0x14f505 = _0x554177['length'] >= _0x15dbcc['length'] ? _0x554177 : _0x15dbcc;
        const _0x516a89 = _0x554177['length'] < _0x15dbcc['length'] ? _0x554177 : _0x15dbcc;
        return _0x14f505['filter'](_0x5a7b0e => !_0x516a89['includes'](_0x5a7b0e));
    };
    const 曲调先有情 = (_0x2ca7ad, _0x6b2ba6) => {
        const _0x369328 = AssistAim_speed;
        const _0x3e9aa8 = AssistAim_gravity;
        const _0x77b0cd = Math['atan'](Math['floor'](-_0x6b2ba6) / _0x2ca7ad);
        const _0x274eaf = Math['sqrt'](_0x2ca7ad * _0x2ca7ad + _0x6b2ba6 * _0x6b2ba6);
        const _0x21ba84 = Math['atan'](_0x274eaf / _0x369328 / 0x2 / _0x369328 * _0x3e9aa8);
        return -((_0x21ba84 + _0x77b0cd) / Math['PI'] * 0xb4);
    };
    const getArrowFlyTime = (_0x202981, _0x8a0b69) => _0x202981 / _0x8a0b69;
    const angleRound = (_0x63de53, _0x2e0071) => Math['round'](_0x63de53 / _0x2e0071) * _0x2e0071;
    const 弦弦掩抑声 = (_0x2bd8b2, _0x404451, _0x537c8f, _0x336b79 = false, _0x653d03 = false, _0x5ee807 = 0x0, _0x4e42b0 = 0x0) => {
        let _0x4b7d8c = typeof _0x404451 != 'string' ? _0x404451 : getPos(_0x404451);
        let _0x893d50 = typeof _0x2bd8b2 != 'string' ? _0x2bd8b2 : getPos(_0x2bd8b2);
        let _0x34b3b8 = getEntityRot(_0x2bd8b2);
        if (!_0x4b7d8c || !_0x893d50) return Infinity;
        const _0x44a48a = getHorizontalDistance(_0x893d50, _0x4b7d8c);
        if (_0x336b79) _0x4b7d8c = 酒欲饮无管(getEntityMotion(_0x404451), getPos(_0x404451), getArrowFlyTime(_0x44a48a, AssistAim_speed) * 0x14);
        let _0x383cac = _0x4b7d8c['x'] - _0x893d50['x'];
        let _0x84a779 = _0x893d50['y'] - _0x4b7d8c['y'] + (AssistAim_y - 0x14) / 0xa + 马客在船举(-_0x4e42b0, _0x4e42b0) / 0xa;
        let _0x4b7554 = _0x4b7d8c['z'] - _0x893d50['z'];
        let _0x31f70b = Math['atan2'](_0x4b7554, _0x383cac) * 0xb4 / Math['PI'];
        const _0x4c6bea = 曲调先有情(_0x44a48a, _0x84a779);
        let _0x38a412 = _0x653d03 ? _0x4c6bea : Math['atan2'](_0x84a779, _0x44a48a) * 0xb4 / Math['PI'];
        if (_0x537c8f === 'yaw_pos') return _0x31f70b > -0xb4 && _0x31f70b <= 0x5a ? _0x31f70b + 0x5a : _0x31f70b - 0x10e;
        if (_0x537c8f === 'yaw_rot') {
            _0x31f70b = _0x31f70b > -0xb4 && _0x31f70b <= 0x5a ? _0x31f70b + 0x5a : _0x31f70b - 0x10e;
            let _0x2bcd9f = _0x31f70b - _0x34b3b8['yaw'] + 马客在船举(-_0x5ee807 / 0x2, _0x5ee807 / 0x2);
            return _0x2bcd9f > 0x0 ? -_0x2bcd9f + 0xb4 : -_0x2bcd9f - 0xb4;
        }
        if (_0x537c8f === 'pitch_pos') return _0x38a412;
        if (_0x537c8f === 'pitch_rot') return _0x38a412 - _0x34b3b8['pitch'];
    };
    const 声思似诉平 = (_0x3780bc, _0xd03924, _0x470529, _0x429655) => {
        let _0x48b0cc = Math['abs'](弦弦掩抑声(_0x3780bc, _0xd03924, 'yaw_rot'));
        let _0x37fc4d = Math['abs'](弦弦掩抑声(_0x3780bc, _0xd03924, 'pitch_rot'));
        if (_0x429655 === 0x0) return Math['sqrt'](_0x48b0cc * _0x48b0cc + _0x37fc4d * _0x37fc4d) < _0x470529;
        if (_0x429655 === 0x1) return Math['abs'](_0x48b0cc) < _0x470529;
        if (_0x429655 === 0x2) return Math['abs'](_0x37fc4d) < _0x470529;
    };
    const 生不得志低 = _0x425bad => {
        let _0x43f572 = '';
        for (let _0x12cdcc = 0x0; _0x12cdcc < _0x425bad['length']; _0x12cdcc += 0x2) {
            _0x43f572 += String['fromCharCode'](parseInt(_0x425bad['substr'](_0x12cdcc, 0x2), 0x10));
        }
        return _0x43f572;
    };
    const 眉信手续续 = (_0x27e1ed, _0x2146ec, _0x1565dd = 0.5, _0x5ec62f = false) => {
        let _0x4ec603 = [];
        let _0x40a289 = 弦弦掩抑声(_0x27e1ed, _0x2146ec, 'yaw_pos');
        let _0x227ecb = 弦弦掩抑声(_0x27e1ed, _0x2146ec, 'pitch_pos');
        if (getDistance(_0x27e1ed, _0x2146ec) < _0x1565dd) return [_0x27e1ed];
        for (let _0x17b1d8 = 0x0; _0x17b1d8 <= getDistance(_0x27e1ed, _0x2146ec); _0x17b1d8 += _0x1565dd) {
            let _0x3ffc02 = 忽闻水上琵(-_0x17b1d8, _0x27e1ed, {
                'yaw': _0x40a289,
                'pitch': _0x5ec62f ? -_0x227ecb : 0x0
            });
            if (getBlock(_0x3ffc02['x'], _0x3ffc02['y'], _0x3ffc02['z'])['namespace'] === 'minecraft:air') _0x4ec603['push']({
                'x': _0x3ffc02['x'],
                'y': _0x3ffc02['y'],
                'z': _0x3ffc02['z']
            });
        }
        return _0x4ec603;
    };
    const 弹说尽心中 = _0x51dc90 => {
        let _0x133dc2 = '';
        for (let _0x146162 = 0x0; _0x146162 < _0x51dc90['length']; _0x146162++) {
            _0x133dc2 += _0x51dc90['charCodeAt'](_0x146162)['toString'](0x10);
        }
        return _0x133dc2;
    };
    const 无限事轻拢 = (_0x1551ec, _0x49ea65) => {
        let _0xc7e79d = getEntityAttribute(_0x1551ec, 'minecraft:health');
        let _0x58d0e4 = _0xc7e79d['current'];
        let _0x48d929 = _0xc7e79d['max'];
        const _0x5ba06c = _0x58d0e4 / _0x48d929;
        switch (_0x49ea65) {
            case 0x0:
                return _0x5ba06c['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x121dde = '§c';
                for (let _0xb8f04e = 0x0; _0xb8f04e < Math['floor'](_0x5ba06c * 0x14); _0xb8f04e++) _0x121dde += '❤';
                return _0x121dde + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x58d0e4);
            case 0x3:
                return Math['floor'](_0x58d0e4) + '/' + Math['floor'](_0x48d929);
            default:
                return _0x58d0e4;
        }
    };
    const 慢捻抹复挑 = _0x339d96 => {
        let _0x4fddbe = '';
        let _0x492089 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x55831d = 0x0; _0x55831d < _0x339d96; _0x55831d++) {
            let _0x5ef7b8 = 马客在船举(0x0, _0x492089['length'] - 0x1);
            _0x4fddbe += _0x492089[_0x5ef7b8];
        }
        return _0x4fddbe;
    };
    const 初为霓裳后 = _0x4717e0 => {
        for (let _0x7b4aa3 = Math['ceil'](-destroy_size / 0x2); _0x7b4aa3 < Math['floor'](destroy_size / 0x2 + 0x1); _0x7b4aa3++) {
            for (let _0x160191 = Math['ceil'](-destroy_size / 0x2); _0x160191 < Math['floor'](destroy_size / 0x2 + 0x1); _0x160191++) {
                for (let _0x46b386 = Math['ceil'](-destroy_size / 0x2); _0x46b386 < Math['floor'](destroy_size / 0x2 + 0x1); _0x46b386++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x4717e0;
                    const _0x9cb264 = getBlock(x + _0x7b4aa3, y + _0x160191, z + _0x46b386);
                    if (_0x9cb264['namespace'] === 'minecraft:air') continue;
                    if (exclude_step && _0x4717e0['y'] + _0x160191 <= _0x4717e0['y'] - 0x1) continue;
                    if (replace_block) setBlock(x + _0x7b4aa3, y + _0x160191, z + _0x46b386, 'air', 0x0);
                    if (!replace_block) destroyBlock(self_id, _0x4717e0['x'] + _0x7b4aa3, _0x4717e0['y'] + _0x160191, _0x4717e0['z'] + _0x46b386, 0x0);
                    if (destroy_packet) 人本长安倡(_0x4717e0['x'] + _0x7b4aa3, _0x4717e0['y'] + _0x160191, _0x4717e0['z'] + _0x46b386, true, true);
                }
            }
        }
    };
    const 六幺大弦嘈 = () => {
        if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
        if (InfiniteAura_backclick) {
            buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
            sendPlayerAuthInput({
                'pos': {
                    'x': InfiniteAura_backPos['x'],
                    'y': InfiniteAura_backPos['y'],
                    'z': InfiniteAura_backPos['z']
                },
                'inputs': [0x24],
                'actions': [{
                    'pos': {
                        'x': InfiniteAura_backPos['x'],
                        'y': InfiniteAura_backPos['y'],
                        'z': InfiniteAura_backPos['z']
                    },
                    'type': 0x19,
                    'value': 0x1
                }]
            });
        }
        if (InfiniteAura_back) {
            for (let _0x52d9e6 = 0x0; _0x52d9e6 < InfiniteAura_move; _0x52d9e6++) {
                if (modelist['InfiniteAura_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'] + (InfiniteAura_backY ? 1.5 : 0x0), InfiniteAura_backPos['z']);
                if (modelist['InfiniteAura_mode'] === 0x1) 二年恬然自(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'] + (InfiniteAura_backY ? 1.5 : 0x0), InfiniteAura_backPos['z']);
                if (modelist['InfiniteAura_mode'] === 0x2) sendPlayerAuthInput({
                    'inputMode': 0x2,
                    'playMode': 0x0,
                    'pos': {
                        'x': InfiniteAura_backPos['x'],
                        'y': InfiniteAura_backPos['y'] + (InfiniteAura_backY ? 1.5 : 0x0),
                        'z': InfiniteAura_backPos['z']
                    },
                    'motion': InfiniteAura_backMot
                });
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 嘈如急雨小 = _0x2c11e0 => {
        let _0x18c47b = '';
        let _0xb50144 = _0x2c11e0['split']('');
        for (let _0x4049ff in _0xb50144) {
            let _0x332939 = _0xb50144[_0x4049ff]['toUpperCase']();
            if (_0x4049ff != _0xb50144['length'] - 0x1) {
                if (_0x4049ff % 0x2 === 0x1) _0x18c47b += _0x332939 + ' ';
                else _0x18c47b += _0x332939;
            } else _0x18c47b += _0x332939;
        }
        if (remark_hex) {
            let _0x4aa53e = _0x18c47b['split'](' ');
            let _0x4ac95e = '';
            for (let _0x1e228d in _0x4aa53e) _0x4ac95e += _0x4aa53e[_0x1e228d] + '(' + 生不得志低(_0x4aa53e[_0x1e228d]) + ') ';
            return _0x4ac95e;
        } else return _0x18c47b;
    };
    const 弦切切如私 = (_0x348c29, _0x28b1d8, _0xfbce2b = false) => {
        setEntityTarget(_0x348c29, _0x28b1d8);
        if (_0xfbce2b) setEntityTarget(_0x28b1d8, _0x348c29);
    };
    var self_id = getUserID(other_user);
    var last_tick_id = getUserID(other_user);
    var last_tick_heal = 0x14;
    var last_tick_pos = getPos(self_id);
    var last_world_player = [];
    var self_pos = {
        'x': 0x0,
        'y': 0x0,
        'z': 0x0
    };
    var prev_pos = getEntityPosPrev(self_id);
    var kills = 0x0;
    var seconds = 0x0;
    var ticks = 0x0;
    var item_count = 0x0;
    var lasttick_item_count = 0x0;
    var team = 'NoveXare';
    var death_pos = {};
    var last_tick_item = {};
    var ping = 0x0;
    var ping_1 = 0x0;
    var ping_2 = 0x0;
    var getSelf = 0x64;
    var setPos_offset = 0x0;
    var getPos_offset = 0x0;
    var attack_list = [];
    var isMoving = false;
    var self_item = {};
    var lastTick_ground = true;
    var item_nbt_library = {};
    var NoveXare_path = getResource() + '/NoveXare';
    var screen = getScreenSizeData();
    var ArrayListCfg = JSON['parse'](抱琵琶半遮(NoveXare_path + '/FuncArrayList.json'));
    var RunAwayID = JSON['parse'](抱琵琶半遮(NoveXare_path + '/RunAwayFunc.json'));
    var key_bind_list = [];
    var config_path = getResource() + '/NX_Config';
    var current_ui = JSON['parse'](抱琵琶半遮(getResource() + '/ui/ui_definition.json'));
    var all_blocks = 抱琵琶半遮(getResource() + '/NoveXare/blocks.json');
    var bind_func = {};
    var goto_pos = null;
    var RunAway_binds = [];
    var NoveXare_Config = {
        'binds': {},
        'key_binds': [],
        'RunAway_binds': [],
        'name': getEntityName(self_id)
    };
    var modelist = {};
    var default_speed = 1.5;
    var isBinding = null;
    var armorTypes = ['helmet', 'chestplate', 'leggings', 'boots'];
    let default_config_name = getData('default_config', 'null');
    let default_config = default_config_name !== '' ? 抱琵琶半遮(config_path + '/' + default_config_name + '.json') : '{}';
    var PacketCfg = JSON['parse'](抱琵琶半遮(NoveXare_path + '/PacketManager.json'));
    var PacketTranslate = JSON['parse'](抱琵琶半遮(getResource() + '/ui/conf_packet.json'))['packets'];
    var PacketTmp = {
        'send': {},
        'receive': {}
    };
    var ignore_ReceivePacket = false;
    var show_ReceiveID = true;
    var show_SendID = true;
    var show_ReceiveName = true;
    var show_ReceiveTranslate = true;
    var show_SendName = true;
    var show_SendTranslate = true;
    var save_ReceivePacket = false;
    var save_SendPacket = false;
    var intercept_ReceivePacket = false;
    var ignore_SendPacket = false;
    var intercept_SendPacket = false;
    var statistics_SendPacket = false;
    var statistics_ReceivePacket = false;
    var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
    var drop_motion = 1.3;
    var cleaner_path = getResource() + '/NoveXare/Cleaner.json';
    var {
        clear_config,
        trash_slot
    } = JSON['parse'](抱琵琶半遮(cleaner_path));
    var max_drop_item = 0x24;
    var drop_delay = 0x1;
    modelist['cleaner_mode'] = 0x0;
    var cleaner_slot = 0x23;
    var cleaner_bow = false;
    var cleaner_chest = false;
    var cleaner_change = false;
    var cleaner_move = true;
    var {
        SmartInvCfg,
        move_armor_slot
    } = JSON['parse'](抱琵琶半遮(NoveXare_path + '/SmartInv.json'));
    var armor_slot = 0x0;
    var da_bow = false;
    var da_enchant = true;
    var da_texture = true;
    var da_weapon = true;
    var da_armor = true;
    var da_chest = false;
    var da_move = true;
    var da_change = false;
    var motion_list = [];
    var ca_chest_pos = [];
    var isOpenChest = false;
    var open_chest = {
        'packet': false,
        'click': false
    };
    var ChestAura_length = 0x3;
    var ca_wall = false;
    var ca_exclude = true;
    var ca_fov = 0x5a;
    var ca_rot = false;
    var ca_check = false;
    var ca_block = false;
    var destroy_list = [];
    var isDestroy = false;
    var destroy_namespace = null;
    var current_mine_num = 0x0;
    var mine_num = 0x14;
    var mine_distance = 0x5;
    var mine_speed = 0x5;
    var mine_white = [];
    var mine_black = [];
    var drop_list = [];
    var di_speed = 0x1;
    var sound_file = null;
    var surround_target = false;
    var surround_all_entity = false;
    var SoundPlayer_vec = 0x1;
    var surround_exclude_self = false;
    var sound_data = [];
    var SoundPlayer_num = 0x1;
    var SoundPlayer_yaw = -0xb4;
    var surround_loop = false;
    var SoundPlayer_distance = 0x5;
    var play_pos_list = [];
    var surround_all = true;
    var SoundPlayer_type = 0x51;
    var SoundPlayer_range = 0x8;
    var SoundPlayer_range_space = 0x10;
    var surround_range_play = false;
    var SoundPlayer_level = 0x0;
    var SoundPlayer_offset = 0x0;
    var other_user = null;
    var lag_last_tick = 0x5;
    var lag_t = 0x0;
    var fakelag_show = false;
    modelist['FakeLag_mode'] = 0x0;
    var reverse_lag = true;
    var fakelag_status = false;
    var lag_tick = 0x14;
    var default_size = {
        'x': 0.6,
        'y': 1.8
    };
    var temp_size = {
        'x': 0.6,
        'y': 1.8
    };
    var regex = ['player', 'entity', '主城', '商店', '[LV', 'CIT-', 'ˉ', '－', '%', '-', '%'];
    var entity_keyword = [];
    var check_hide = true;
    var target_list = [];
    var white_list = [];
    var max_target_num = 0x3;
    var max_distance = 0x6;
    var min_distance = 0x0;
    var include_entity = false;
    var include_player = true;
    var limit_y = 0x17c;
    var limit_min_y = -0x3c;
    var ignore_height = true;
    var infinite_distance = false;
    var check_size = true;
    var check_rot = true;
    var infinite_targets = false;
    var check_health = true;
    var bypass_bjd = true;
    modelist['select_mode'] = 0x0;
    var regex_enable = true;
    var back_select = false;
    var reverse_target = false;
    var check_wall = false;
    var check_ground = false;
    var check_name = true;
    var switch_delay = 0x1;
    var lock_target = false;
    var debuff = [0x2, 0x4, 0x7, 0x9, 0xf, 0x11, 0x12, 0x13, 0x14, 0x1b, 0x1f, 0x21];
    var gm_pos = {};
    var gm_mot = {};
    var tp_back = false;
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
    modelist['GodMode_mode'] = 0x0;
    var Scaffold_pitch = false;
    var Scaffold_info = false;
    var Scaffold_yaw = 0x0;
    var Scaffold_length = 0x2;
    var Scaffold_precision = 0x1e;
    var Scaffold_simulate = true;
    var Scaffold_hyt = false;
    var Scaffold_move = true;
    var Scaffold_move_rot = false;
    var Scaffold_click_rot = false;
    var Scaffold_up = false;
    var Scaffold_auto_block = true;
    var Scaffold_findPath = false;
    var keep_y = false;
    var rec_y = 0x0;
    var Scaffold_angle = 0x3c;
    var Scaffold_accurate = false;
    var rpc_config = JSON['parse'](抱琵琶半遮(getResource() + '/NoveXare/PyRpc_Config.json'));
    var keyword = ['kick', 'movemcpkick', 'rank', 'music', 'setcan'];
    var keyword2 = [];
    var send_keyword = ['pongggg', 'clicked'];
    var send_keyword2 = [];
    var receive_keyword = [];
    var receive_keyword2 = [];
    var rpc_t = 0x0;
    var last_PyRpc = {};
    var rpc_repeat_times = 0x1;
    var neglect_exclude = false;
    var show_no_intercept = false;
    var show_intercept = false;
    modelist['pyrpc_mode'] = 0x0;
    var tip_keyword = ['refresh', 'player', 'unload', 'upload', 'vip', 'music', 'textboard', 'scoreboard', 'start', 'condition'];
    var rpc_cycle = false;
    var rpc_repeat_ticks = 0x1;
    var show_pyrpc_id = true;
    var remark_hex = false;
    var rpc_store = false;
    var rpc_intercept = false;
    var rpc_temp = [];
    var packet_send = true;
    var packet_receive = false;
    var packet_tip = false;
    var packet_record = false;
    var freecam_pos = {};
    modelist['freecam_mode'] = 0x0;
    var freecam_show = false;
    var freecam_dis = false;
    var fakemove_pos = {};
    modelist['lag_mode'] = 0x0;
    var lagback_pos = [];
    var lagback_run = false;
    var lagback_y = 0.8;
    var lagback_derp = false;
    var AvoidAttack_pos = {};
    var shift_tick = 0x0;
    var shift_num = 0x64;
    var replace_block = false;
    var destroy_size = 0x1;
    var destroy_delay = 0x1;
    var exclude_step = false;
    var lr_delay = 0x0;
    var lr_random = 0x1;
    var mini_title = true;
    var kill_tip = ['重重一击', '两连击', '三连击', '非常犀利', '无人能挡', '主宰比赛', '迈向超神', '正在暴走', '如神一般', '已经超神'];
    var mini_tick = 0x0;
    var mini_delay = 0x0;
    var mini_kills = 0x0;
    var fst_y = 0x0;
    var fst_x = 0x0;
    var fst_time = 0x14;
    modelist['tip_mode'] = 0x0;
    var as_config = JSON['parse'](抱琵琶半遮(NoveXare_path + '/Staff.json'));
    modelist['AntiStaff_mode'] = 0x0;
    modelist['anti_mode'] = 0x0;
    var AntiStaff_ground = false;
    var AntiStaff_Invisible = false;
    var block_ac_select = false;
    var bc_packet = false;
    var bc_delay = 0x1;
    var ac_pos = [];
    var rgb_color = '4c6e2a3b195d591b3a2e6c4' ['split']('');
    var rgb_l = 0x0;
    var rgb_t = 0x0;
    var rgb_cycle = 0x2;
    var Edit_Y = 0x55;
    var SelectCrystal = false;
    var bomb_delay = 0x1;
    var crystal_delay = 0x1;
    var crystal_acount = 0x1;
    var CrystalTP = false;
    var CrystalAura_distance = 0x3;
    var SelectBomb = false;
    var jump_length = 0x5;
    var jump_heigh = 0x2a;
    var arrow_rot = {};
    var select_slot = 0x0;
    var select_t = 0x0;
    var selectitems = [];
    var select_hotbar_slots = [];
    var select_use = false;
    var select_delay = 0x1;
    modelist['ca_mode'] = 0x0;
    var ca_delay = 0x1;
    var again_item = ['easecation:all_games', 'minecraft:emerald'];
    modelist['gg_mode'] = 0x0;
    var AssistAim_precision = 0x0;
    var AssistAim_min_speed = 0x14;
    var AssistAim_max_speed = 0x14;
    var AssistAim_predict = false;
    var AssistAim_auto = false;
    var AssistAim_lock = false;
    var AssistAim_distance = 0x5;
    var AssistAim_Fov = 0x5a;
    var AssistAim_random_y = 0x0;
    var AssistAim_random_xz = 0x0;
    var AssistAim_speed = 0x64;
    var AssistAim_gravity = 0x10;
    var AssistAim_test = false;
    var AssistAim_throw = false;
    var AssistAim_self = false;
    var AssistAim_y = 0x14;
    modelist['AssistAim_mode'] = 0x1;
    var ap_autobag = false;
    var ap_min = 0x3;
    var splash_slot = -0x1;
    var ie_drop = true;
    var ie_data = '0';
    var ie_delay = 0x14;
    modelist['itemedit_mode'] = 0x0;
    var nofall_y = 0.42;
    modelist['nofall_mode'] = 0x0;
    var edit_suffix = 'This is a suffix';
    var line_particle_offset = 0x0;
    var line_particle_type = 0x3;
    var line_particle_size = 0x1;
    var avoid_remove = false;
    var aim_attack_aps = 0xa;
    var aim_attack_fov = 0xf;
    var aim_attack_use = false;
    var aim_t0 = -Infinity;
    var aim_t1 = 0x0;
    var Rider_random = false;
    var Rider_heigh = 0x1;
    var bt_lock = false;
    modelist['bm_mode'] = 0x0;
    var gradual_up = true;
    var attack_sound_type = 0x51;
    var attack_sound_level = 0x0;
    var whilelist_range = 0x6;
    var surround_particle_heigh = 0x0;
    var surround_particle_length = 0x0;
    var particle_surround_speed = 0x5;
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
    modelist['bhop_mode'] = 0x0;
    var bhop_airjump = false;
    var KillAura_empty = 0x0;
    var KillAura_aps_delay = 0x0;
    var KillAura_boost = 0x1;
    var KillAura_Balance = false;
    var KillAura_max_aps = 0xa;
    var KillAura_min_aps = 0xa;
    var KillAura_Fov = 0x5a;
    var KillAura_distance = 0x4;
    var KillAura_infinite = false;
    var KillAura_d_1 = [];
    var KillAura_d_2 = [];
    var KillAura_auto_close = true;
    var KillAura_crit = false;
    var KillAura_person = false;
    var random_num = 0x0;
    var random_delay = 0x0;
    var through_wall = true;
    var record_water = {};
    var record_lava = {};
    var InfiniteAura_random = false;
    var InfiniteAura_packet = 0x3;
    var InfiniteAura_backY = false;
    var InfiniteAura_amove = false;
    var InfiniteAura_distance = 0x64;
    var InfiniteAura_move = 0x1;
    var InfiniteAura_delay = 0x1;
    var InfiniteAura_repeat = false;
    var InfiniteAura_back = true;
    var InfiniteAura_switch_delay = 0x0;
    var InfiniteAura_switch_delay_r = 0xa;
    var InfiniteAura_list = [];
    var InfiniteAura_target = [];
    var InfiniteAura_tick = 0x5;
    var tick = 0xa;
    var move_tick = 0x0;
    var InfiniteAura_num = 0x1;
    var InfiniteAura_num_r = 0x0;
    modelist['InfiniteAura_mode'] = 0x2;
    var InfiniteAura_backPos = null;
    var InfiniteAura_backMot = null;
    var InfiniteAura_click = true;
    var InfiniteAura_backclick = true;
    var InfiniteAura_yoffset = 0x0;
    var InfiniteAura_for_tp = false;
    var min_run_heal = 0xa;
    modelist['low_health_operate_mode'] = 0x0;
    modelist['person_mode'] = 0x0;
    modelist['new_ctrl_mode'] = 0x0;
    var LockBehind_length = 0x3;
    var LockBehind_heigh = 0x2;
    var LockBehind_yaw = -0xb4;
    var surround_speed = 0x5;
    var LockBehind_min_heigh = 0x0;
    var LockBehind_updown_speed = 0x5;
    var LockBehind_h = 0x0;
    var isReverse = false;
    modelist['surround_mode'] = 0x0;
    var surround_particle_yaw = -0xb4;
    var surround_particle_type = 0x13;
    var surround_particle_size = 0x1;
    var only_walk = 0x0;
    var sprint_speed = 0x5;
    var sprint_horizontal = false;
    var sprint_move_packet = false;
    var sprint_AuthInput_packet = false;
    modelist['sprint_mode'] = 0x0;
    var throw_wall = false;
    var move_fly = false;
    var fly_AuthInput_packet = false;
    var fly_move_packet = false;
    var fly_speed = 0xf;
    var fly_run = false;
    var fly_mot = true;
    var fly_includeY = false;
    var fly_up_down = false;
    var fly_set_ud = 0xa;
    var fly_ud = 0x1;
    var fly_block = false;
    modelist['fly_mode'] = 0x0;
    var fly_only_fly = false;
    var up_down_speed = 0x1;
    var Trace_min_dis = 0x5;
    var Trace_speed = 0x5;
    var km_text = 'Lmao';
    var km_hide = false;
    var chat_keyword = [];
    var cm_intercept_length = 0x64;
    var cm_self = false;
    var cf_target = '';
    var cm_fake = false;
    var cm_other = false;
    var cm_repeat_times = 0x1;
    var message_list = {
        'self': null,
        'other': null
    };
    var isRepeating = false;
    var Sucker_dis = 0x3;
    var slowdown_speed = 0x5;
    var kd_distance = 0x3;
    var kd_only_ground = false;
    var kd_speed = 0x5;
    var kd_anti = false;
    var KickAura_times = 0x1f4;
    var KickAura_multi = false;
    var KickAura_for = 0x32;
    var edit_KickAura = '🤓';
    var KickAura_repeat = 0x32;
    var ka_fake = false;
    var ka_target = false;
    var ka_player = false;
    modelist['ka_mode'] = 0x0;
    var Crasher_times = 0x1f4;
    var Crasher_multi = false;
    var Crasher_for = 0x32;
    modelist['Crasher_mode'] = 0x0;
    var HitBox_x = 0x2;
    var HitBox_y = 1.8;
    modelist['health_mode'] = 0x0;
    var hj_height = 0.42;
    var CPvP = false;
    modelist['cpvp_mode'] = 0x0;
    var longjump_x = 0x5;
    var longjump_y = 0.5;
    var CustomKB_x = 0x1;
    var CustomKB_y = 0.5;
    var content = 'NoveXare YYDS';
    var Spammer_delay = 0x14;
    var Spammer_random = false;
    var Spammer_colors = false;
    var Spammer_rainbow = false;
    var Spammer_target = false;
    var Spammer_word = false;
    var Spammer_l = false;
    var Spammer_o = false;
    var Spammer_k = false;
    var Spammer_num = 0x1;
    var rush_length = 0x5;
    var build_distance = 0x4;
    var build_tick = 0xa;
    var build_t = 0x0;
    var build_list = [];
    var build_success = true;
    var rocker_speed = 0x8;
    var rocker_ts_lock = 0x3;
    var rocker_body = true;
    var rocker_bhop = true;
    var rocker_ahop = false;
    var rocker_legalmove = true;
    modelist['rocker_mode'] = 0x0;
    modelist['move_mode'] = 0x0;
    var rocker_ts = true;
    var rocker_ts_distance = 1.5;
    var rocker_func = {};
    var direction_func = {};
    var airjump_func = {};
    var rocker_ts_relative = true;
    var rocker_ts_range = 0xb4;
    var current_roll = 0x0;
    var current_yaw = getEntityRot(self_id)['yaw'];
    var current_pitch = 0xb4 - (getEntityRot(self_id)['pitch'] + 0x5a);
    var Camera_anchor_pos = {
        'x': 0x0,
        'y': 0x0,
        'z': 0x0
    };
    var rocker_boost = false;
    var rocker_bhop_heigh = 0.42;
    modelist['LookTP_mode'] = 0x0;
    var break_bed = true;
    var break_chest = true;
    var breaker_auto = false;
    var breaker_range = 0x5;
    var breaker_delay = 0x1;
    var breaker_pos = null;
    var breaker_timer = 0x0;
    var destroy_up = false;
    var destroy_playeraction = false;
    var destroy_authinput = false;
    var destroy_packet = false;
    var autobreak = false;
    var destroy_call = false;
    var autosave_fake_block = false;
    var autosave_near_block = false;
    var autosave_air = true;
    var autosave_autoselect = true;
    var autosave_water = false;
    var max_mot_y = 0.42;
    var attack_particle_size = 0x14;
    var attack_particle_type = 0x3;
    var particle_size = 0x1;
    var particle_type = 0x0;
    var click_num = 0x0;
    var click_t = 0x0;
    var isClicking = false;
    var show_aps = true;
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
    var isBedbuild = false;
    var bow_speed = 0.5;
    var arrow_particle_type = 0xc;
    modelist['avoid_mode'] = 0x0;
    var avoid_distance = 0x5;
    var cs_max = 0x23;
    var cs_min = 0x0;
    var cs_min_damage = 0x0;
    var cs_min_lasting = 0x0;
    var cs_white = [];
    var cs_black = [];
    var click_mode = false;
    var save_to_file = false;
    var FightBot_rocker_legalmove = false;
    var FightBot_distance = 0x4;
    var FightBot_speed = 0x5;
    var FightBot_pot_health = 0x0;
    var FightBot_jump = false;
    var FightBot_KillAura = true;
    var FightBot_aimbot = false;
    var FightBot_KeepDistance = false;
    var FightBot_combo = false;
    var FightBot_height = 0.42;
    var FightBot_Scaffold = false;
    var FightBot_autochest = false;
    var FightBot_jump_rate = 0x21;
    var FightBot_move_rate = 0x21;
    var FightBot_fishhook_rate = 0x0;
    var FightBot_snowball_rate = 0x0;
    var FightBot_random_jump = false;
    var FightBot_random_move = false;
    var FightBot_autoweapon = false;
    var custom_time = 0x19;
    modelist['set_time'] = 0x0;
    var jump_strength = 0x2a;
    var AntiKB_resistance_h = 0x64;
    var AntiKB_resistance_v = 0x64;
    var throwable_particle_gravity = 0x14;
    var throwable_particle_speed = 0x64;
    var throwable_particle_length = 0xc8;
    var throwable_particle_type = 0x37;
    var throwable_particle_offset = 0x14;
    var throwable_particle_target = true;
    var throwable_particle_density = 0xa;
    modelist['throwable_particle_mode'] = 0x0;
    var low_health_operate_sword = false;
    modelist['copy_mode'] = 0x0;
    var copy_random = 0x0;
    var Criticals_status = false;
    var fps_rate = 0xa;
    var flexibleMove_speed = 0x5;
    modelist['custom_mode'] = 0x0;
    var ci_slot = 0x0;
    modelist['fakeTip_mode'] = 0x0;
    var current_poem = '';
    var tip_t1 = 0xc9;
    var BalanceTimer_t = 0x0;
    var BalanceTimer_st = false;
    var variable_player = false;
    var variable_id = false;
    var swing_speed = 0x11;
    var sm_attack = false;
    var sm_destroy = false;
    var sm_build = false;
    var sm_hurt = false;
    var sm_switch = false;
    var sm_kill = false;
    var ArrowView_x = 0xa;
    var ArrowView_z = 0xa;
    var ArrowView_y = 0xa;
    var Arrow_id = null;
    var ArrowList = [];
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
    var anchor_target = self_id;
    var nomove_pos = {};
    var SafeAttack_fov = 0x32;
    var SafeAttack_screen = 0.8;
    var SafeAttack_dis = 0x4;
    var derp_p_r = 0x5a;
    var derp_y_r = -0xb4;
    modelist['derp_mode'] = 0x0;
    var body_rot_speed = 0x1e;
    var head_rot_speed = 0x5;
    var head_rot = false;
    var body_rot = true;
    var lock_head = true;
    var random_rot = false;
    var TestModule = false;
    var ac_min_aps = 0xa;
    var ac_only_aimed = false;
    var ac_aim_fov = 0xf;
    var ac_max_aps = 0xa;
    var ac_t_1 = 0x0;
    var ac_exclude_y = false;
    var ac_left_click = false;
    var ac_right_click = false;
    var ac_boost = false;
    var ac_t_2 = -Infinity;
    var enable_bypass = false;
    var enable_disabler = true;
    var nc_dist = 0xf;
    var enable_blink = true;
    var record_blink_pos = {};
    var record_sauth = false;
    var use_hook_sauth = false;
    var Sauths = getData('sauths', '');
    var bantip = '';
    var action_times = 0x1;
    var edit_action_id = 0x0;
    var edit_action_value = 0x0;
    var action_ticks = 0x0;
    var action_tick = 0x0;
    var use_action_config = false;
    var auth_ticks = 0x1;
    var edit_auth_action_id = 0x0;
    var edit_auth_action_value = 0x0;
    var edit_auth_array = [0x0];
    var auth_times = 0x1;
    var tower_continuously = true;
    var tower_delay = 0xa;
    var teams_name = false;
    var teams_armor = true;
    var team_slot = 0x0;
    var te_all = false;
    var te_two = false;
    var first_target = null;
    var first_pos = null;
    var first_entity = null;
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
    var isSlowMotion = false;
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
    modelist['aa_mode'] = 0x0;
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
    modelist['th_health_mode'] = 0x0;
    modelist['th_select_mode'] = 0x0;
    var th_x = 0x0;
    var th_y = 0x0;
    var th_target = null;
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
    modelist['sb_mode'] = 0x0;
    var sb_pos = null;
    var sb_rot = false;
    var sb_custom = false;
    var sb_current_yaw = 0x0;
    var fb_attack = 0x1;
    var fb_ishurt = false;
    var fb_range = 0x7;
    modelist['fb_mode'] = 0x0;
    var dc_pos = [];
    var nl_offset = 0x1;
    var rmer_item = false;
    var rmer_entity = false;
    var as_range = 0x14;
    var AttackPacket = false;
    var AttackSwing = true;
    var BlockClicker = false;
    var BypassMute = false;
    var FuncMessage = true;
    var KillAura = false;
    var AutoTarget = true;
    var FuncTip = true;
    var Bhop = false;
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
    var LockBehind = false;
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
    var RandomLock = false;
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
    var ChestSteal = false;
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

    function onTickEvent() {
        try {
            if (PauseNX) return;
            let _0x5ab7f6 = [];
            self_id = getUserID(other_user);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            let _0x4e1c9a = getEntityAttribute(self_id, 'minecraft:health');
            let _0x66499d = getEntityMotion(self_id);
            isMoving = getEntityFlag(self_id, 0x22) || typeof rocker_func['angle'] !== 'undefined';
            if (FastStop && !isMoving) setMotion(0x0, _0x66499d['y'], 0x0);
            let _0x33f64b = getCameraRotation();
            let _0x443bb9 = {
                'yaw': _0x33f64b['yaw'] > 0x0 ? 0xb4 - _0x33f64b['yaw'] : -0xb4 - _0x33f64b['yaw'],
                'pitch': -_0x33f64b['pitch']
            };
            let _0x316aef = getDistance(self_pos, last_tick_pos) / 0.05;
            let _0x17bae6 = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
            let _0x50f51a = 瑟瑟主人下(self_id);
            let _0x4c3434 = 面转轴拨弦(self_id);
            let _0x3516a2 = getWorldPlayerList();
            let _0x762d72 = getEntityIsGround(self_id);
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    ping_1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x5097e7, _0x2f7e0d) => globalThis['ping_2'] = Date['now']());
                    ping = Math['abs'](ping_2 - ping_1);
                }
                if (InvCleaner && cleaner_change || SmartInv && da_change) item_count = getPlayerItemCount(self_id);
            }
            self_item = getCarried(self_id);
            if (_0x4e1c9a['current'] - last_tick_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x4e1c9a['current'] < last_tick_heal) death_pos = self_pos;
            if (TestModule) sendPlayerAuthInput({
                'pos': self_pos,
                'rot': {
                    'yaw': Infinity,
                    'pitch': Infinity
                },
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': Infinity
            });
            if (DeadCross) dc_pos['forEach'](_0x303096 => {
                createShadow(_0x303096['x'], _0x303096['y'], _0x303096['z']);
                createShadow(_0x303096['x'], _0x303096['y'] + 0x1, _0x303096['z']);
                createShadow(_0x303096['x'], _0x303096['y'] + 0x2, _0x303096['z']);
                createShadow(_0x303096['x'] + 0x1, _0x303096['y'] + 0x2, _0x303096['z']);
                createShadow(_0x303096['x'] - 0x1, _0x303096['y'] + 0x2, _0x303096['z']);
                createShadow(_0x303096['x'], _0x303096['y'] + 0x3, _0x303096['z']);
            });
            if (AdminShow) {
                let _0x4a43b3 = _0x3516a2['filter'](_0x160a9c => _0x160a9c['permissionLevel'] != -0x1 || _0x160a9c['commandPermissionLevel'] != -0x1);
                if (_0x4a43b3['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x4a43b3['map'](_0x311d9e => _0x311d9e['name'])), '§r'));
                let _0x2d900b = _0x4a43b3['filter'](_0x84a070 => 声暗问弹者(_0x84a070['id'], self_id) < as_range);
                if (_0x2d900b['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x2d900b['map'](_0x120d20 => _0x120d20['name'])), '§r'));
            }
            if (AutoTarget && (!lock_target || !findEntity(target_list[0x0])) && ticks % switch_delay == 0x0) target_list = 琶声主人忘(self_id, max_distance, max_target_num);
            if (NoHider) {
                const _0x330184 = getPlayerList();
                _0x330184['forEach'](_0x5ab5ca => {
                    if (_0x5ab5ca != self_id) {
                        removeEntityEffect(_0x5ab5ca, 0xe);
                        setEntityFlag(_0x5ab5ca, 0x5, false);
                        if (nh_exclude && target_list['includes'](_0x5ab5ca)) target_list['splice'](target_list['indexOf'](_0x5ab5ca), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x4c3434['x'], _0x4c3434['y'] - 0x1, _0x4c3434['z'])['namespace'] === 'minecraft:glass' && _0x762d72) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !Criticals_status && _0x66499d['y'] < 0x0) {
                Criticals_status = true;
                callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
                playerJump();
            }
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || target_list['length'] > 0x0)) {
                const _0x2879b2 = rt_target ? getPos(target_list[0x0]) : self_pos;
                if (_0x2879b2) setPos(_0x2879b2['x'] + 马客在船举(-rt_range, rt_range), _0x2879b2['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x2879b2['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x155e0d = 马客在船举(ac_min_aps, ac_max_aps);
                let _0x1aa828 = Math['round'](0x3e8 / _0x155e0d);
                const _0x5520f0 = target_list['length'] > 0x0 ? 声思似诉平(self_id, target_list[0x0], ac_aim_fov, 0x0) || !ac_only_aimed : !ac_only_aimed;
                for (let _0x21e554 = 0x0; _0x21e554 < ac_boost; _0x21e554++) {
                    if (!_0x5520f0) break;
                    if (ac_left_click) simulateClick();
                    if (ac_right_click) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0x1aa828;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x1afa04 = getEntityList()['forEach'](_0x43d933 => {
                    if (getEntityNamespace(_0x43d933) != 'minecraft:item' || !findEntity(_0x43d933) || 声暗问弹者(_0x43d933, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x27fca1 = getPos(_0x43d933);
                    silentTP(_0x27fca1['x'], _0x27fca1['y'], _0x27fca1['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x443bb9,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x443bb9['yaw']
            });
            if (CustomItem) {
                const _0x48c4f0 = getEntityCarriedItem(self_id);
                if (modelist['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modelist['custom_mode'], _0x48c4f0);
                else if (modelist['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x48c4f0);
                else if (modelist['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x48c4f0);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x4418d1 = [];
                if (modelist['sb_mode'] == 0x0) _0x4418d1 = getPlayerList();
                if (modelist['sb_mode'] == 0x1) _0x4418d1 = target_list;
                if (modelist['sb_mode'] == 0x2) _0x4418d1 = ['lock_pos'];
                _0x4418d1['forEach'](_0x52bde3 => {
                    if (sb_exclude && _0x52bde3 == self_id) return;
                    let _0x2804c1 = null;
                    if (_0x52bde3 == 'lock_pos') _0x2804c1 = sb_pos;
                    else _0x2804c1 = 面转轴拨弦(_0x52bde3);
                    if (!_0x2804c1) return;
                    let _0x1f5e5c = getEntityRot(_0x52bde3);
                    if (modelist['sb_mode'] < 0x2) {
                        _0x2804c1 = 忽闻水上琵(sb_offset, _0x2804c1, _0x1f5e5c);
                        _0x2804c1['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x34ec44 = JSON['parse'](抱琵琶半遮(NoveXare_path + '/Shadow.json'));
                        _0x34ec44['forEach'](_0x513a0f => {
                            let _0x30d3a = Math['sqrt'](_0x513a0f['x'] * _0x513a0f['x'] + _0x513a0f['y'] * _0x513a0f['y'] + _0x513a0f['z'] * _0x513a0f['z']);
                            let _0xaa9674 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x513a0f, 'yaw_pos');
                            let _0x551413 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x513a0f, 'pitch_pos');
                            let _0x519e9d = 忽闻水上琵(_0x30d3a, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x551413,
                                'yaw': _0xaa9674 + sb_current_yaw
                            });
                            createShadow(_0x2804c1['x'] + _0x519e9d['x'], _0x2804c1['y'] + _0x519e9d['y'], _0x2804c1['z'] + _0x519e9d['z']);
                        });
                    } else {
                        for (let _0x48aa4e = Math['ceil'](-sb_length / 0x2); _0x48aa4e < Math['floor'](sb_length / 0x2 + 0x1); _0x48aa4e++) {
                            for (let _0x4042c1 = Math['ceil'](-sb_length / 0x2); _0x4042c1 < Math['floor'](sb_length / 0x2 + 0x1); _0x4042c1++) {
                                for (let _0x54ea64 = Math['ceil'](-sb_length / 0x2); _0x54ea64 < Math['floor'](sb_length / 0x2 + 0x1); _0x54ea64++) {
                                    createShadow(_0x2804c1['x'] + _0x48aa4e, _0x2804c1['y'] + _0x4042c1 + 0x2, _0x2804c1['z'] + _0x54ea64);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_current_yaw < 0xb4) sb_current_yaw += sb_rot;
            else sb_current_yaw = -0xb4;
            if (SmallMap) {
                let _0x1e760c = [
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
                let _0x32e8c5 = [];
                if (sm_player) _0x32e8c5['push'](...getPlayerList());
                if (sm_entity) _0x32e8c5['push'](...getEntityList());
                if (sm_target) _0x32e8c5['push'](...target_list);
                _0x32e8c5['forEach'](_0x3e2fa0 => {
                    let _0x486a0f = 弦弦掩抑声(self_id, _0x3e2fa0, 'yaw_rot');
                    let _0x3837f2 = 声暗问弹者(self_id, _0x3e2fa0);
                    let _0x2067f7 = Math['floor'](_0x3837f2 / sm_size * sm_proportion * -Math['sin'](_0x486a0f * Math['PI'] / 0xb4) * 0xa);
                    let _0x19048d = Math['floor'](_0x3837f2 / sm_size * sm_proportion * -Math['cos'](_0x486a0f * Math['PI'] / 0xb4) * 0xa);
                    if (_0x2067f7 > 0x5) _0x2067f7 = 0x5;
                    if (_0x19048d > 0x5) _0x19048d = 0x5;
                    if (_0x2067f7 < -0x5) _0x2067f7 = -0x5;
                    if (_0x19048d < -0x5) _0x19048d = -0x5;
                    _0x1e760c[_0x19048d + 0x5][_0x2067f7 + 0x5] = ' §e◆§r ';
                });
                let _0x40acba = _0x1e760c['map'](_0x322506 => _0x322506['join'](''))['join']('\n');
                _0x5ab7f6['push'](归客不发寻(0x1, 'Map', '\n' + _0x40acba, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (anchor_target === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x2d03c8 = getPos(anchor_target);
                    const _0x1392e7 = getEntitySize(anchor_target);
                    setCameraAnchor(_0x2d03c8['x'] - self_pos['x'], _0x2d03c8['y'] - self_pos['y'] + 0.85 * _0x1392e7['y'], -_0x2d03c8['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x369f76 = getPos(cm_attack);
                    const _0x109546 = getEntitySize(cm_attack);
                    setCameraAnchor(_0x369f76['x'] - self_pos['x'], _0x369f76['y'] - self_pos['y'] + 0.85 * _0x109546['y'], -_0x369f76['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x66499d['x'] * cm_moverange, -_0x66499d['y'] * cm_moverange, _0x66499d['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset((cm_x - 0x19) / 0x3, (cm_y - 0x19) / 0x3, (cm_z - 0x19) / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x4e1c9a['current'] < last_tick_heal) last_tick_heal = _0x4e1c9a['current'];
            if (NoDebuff) debuff['forEach'](_0x197b88 => removeEntityEffect(self_id, _0x197b88));
            if (MoveJump && isMoving && _0x762d72) playerJump();
            if (ChunkRender) {
                let _0x3a0e05 = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x24669a = {
                    'x': _0x3a0e05['x'] * 0x10,
                    'z': _0x3a0e05['z'] * 0x10
                };
                let _0x1fe7f7 = {
                    'x': (_0x3a0e05['x'] + 0x1) * 0x10,
                    'z': (_0x3a0e05['z'] + 0x1) * 0x10
                };
                for (let _0x514b94 = 0x0; _0x514b94 < 0x10; _0x514b94++) {
                    妇遂命酒使(0x37, _0x24669a['x'] + _0x514b94, self_pos['y'], _0x24669a['z'], 0x1);
                    妇遂命酒使(0x37, _0x24669a['x'], self_pos['y'], _0x24669a['z'] + _0x514b94, 0x1);
                    妇遂命酒使(0x37, _0x1fe7f7['x'] - _0x514b94, self_pos['y'], _0x1fe7f7['z'], 0x1);
                    妇遂命酒使(0x37, _0x1fe7f7['x'], self_pos['y'], _0x1fe7f7['z'] - _0x514b94, 0x1);
                }
                _0x5ab7f6['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x3a0e05['x'] + '， ' + _0x3a0e05['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0xf72187 of again_item) {
                    if (modelist['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0xf72187, -0x1, '一局'));
                    if (modelist['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0xf72187, -0x1, '一局'));
                        const _0x534c43 = getCarried(self_id);
                        if (_0x534c43['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (goto_pos != null) {
                const _0x3f7773 = getHorizontalDistance(self_pos, goto_pos);
                const _0x1998e6 = getDistance(self_pos, goto_pos);
                if (_0x1998e6 >= 0x5) {
                    let _0x39fa34 = 弦弦掩抑声(self_id, goto_pos, 'yaw_pos');
                    let _0x393cf3 = 忽闻水上琵(-default_speed / 0xa, self_pos, {
                        'yaw': _0x39fa34,
                        'pitch': 0x0
                    });
                    if (_0x3f7773 >= 0x3) setMotion(_0x393cf3['x'] - self_pos['x'], _0x66499d['y'], _0x393cf3['z'] - self_pos['z']);
                    else setMotion(_0x66499d['x'], (_0x393cf3['y'] - self_pos['y'] > 0x0 ? default_speed : -default_speed) / 0xa, _0x66499d['z']);
                } else {
                    goto_pos = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x2cb1d9 = 0x0; _0x2cb1d9 < ral_num; _0x2cb1d9++) {
                    const _0x499ee5 = 慢捻抹复挑(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x2cb1d9, _0x499ee5, _0x499ee5, true);
                }
            }
            if (ShowNowTime) {
                const _0x748d73 = new Date();
                const _0x3639e1 = _0x748d73['getFullYear']();
                const _0x2ff640 = ('0' + (_0x748d73['getMonth']() + 0x1))['slice'](-0x2);
                const _0x2298cf = ('0' + _0x748d73['getDate']())['slice'](-0x2);
                const _0x5975dd = ('0' + _0x748d73['getHours']())['slice'](-0x2);
                const _0x333ccc = ('0' + _0x748d73['getMinutes']())['slice'](-0x2);
                const _0x2285b1 = ('0' + _0x748d73['getSeconds']())['slice'](-0x2);
                const _0x36973d = _0x3639e1 + '-' + _0x2ff640 + '-' + _0x2298cf + ' ' + _0x5975dd + ':' + _0x333ccc + ':' + _0x2285b1;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x36973d, '当前时间: ' + _0x36973d, true);
            }
            if (ChestAura) {
                let _0x1816b8 = 面转轴拨弦(self_id);
                let _0x100dc6 = ChestAura_length;
                for (let _0x35e38d = -_0x100dc6; _0x35e38d < _0x100dc6; _0x35e38d++) {
                    for (let _0x51be5e = -_0x100dc6; _0x51be5e < _0x100dc6; _0x51be5e++) {
                        for (let _0x349300 = -_0x100dc6; _0x349300 < _0x100dc6; _0x349300++) {
                            const _0x287d00 = getBlock(_0x1816b8['x'] + _0x35e38d, _0x1816b8['y'] + _0x51be5e, _0x1816b8['z'] + _0x349300);
                            if (_0x287d00['namespace'] != 'minecraft:chest') continue;
                            const _0x582ab3 = getBlock(_0x1816b8['x'] + _0x35e38d, _0x1816b8['y'] + _0x51be5e + 0x1, _0x1816b8['z'] + _0x349300);
                            const _0x2eaac9 = {
                                'x': _0x1816b8['x'] + _0x35e38d,
                                'y': _0x1816b8['y'] + _0x51be5e,
                                'z': _0x1816b8['z'] + _0x349300
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x2eaac9)) && ca_exclude || isOpenChest || !惨将别别时(_0x1816b8, _0x2eaac9, ca_wall, 1.53, 0.5) || ca_block && _0x582ab3['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x2eaac9, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x1816b8['x'] + _0x35e38d, _0x1816b8['y'] + _0x51be5e, _0x1816b8['z'] + _0x349300, 0x1);
                            if (!ca_check || open_chest['packet'] && open_chest['click']) ca_chest_pos['push'](JSON['stringify'](_0x2eaac9));
                            if (ca_check && open_chest['packet'] && open_chest['click']) {
                                open_chest['click'] = false;
                                open_chest['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x3516a2['forEach'](_0x3cc58d => {
                    const {
                        name,
                        id
                    } = _0x3cc58d;
                    if (id === self_id || name === '') return;
                    let _0x556c18 = null;
                    if (modelist['AntiStaff_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x556c18 = id;
                    if (modelist['AntiStaff_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x556c18 = id;
                    if (modelist['AntiStaff_mode'] === 0x2) {
                        as_config['forEach'](_0x46e8f2 => {
                            if (_0x46e8f2['match_mode'] === '精准' && _0x46e8f2['has_mode'] === '存在' && _0x46e8f2['texts']['some'](_0x13e02d => name === _0x13e02d) != _0x46e8f2['reverse_selection']) _0x556c18 = id;
                            if (_0x46e8f2['match_mode'] === '精准' && _0x46e8f2['has_mode'] === '同时' && _0x46e8f2['texts']['every'](_0x40a4d8 => name === _0x40a4d8) != _0x46e8f2['reverse_selection']) _0x556c18 = id;
                            if (_0x46e8f2['match_mode'] === '模糊' && _0x46e8f2['has_mode'] === '存在' && _0x46e8f2['texts']['some'](_0x1eff83 => name['includes'](_0x1eff83)) != _0x46e8f2['reverse_selection']) _0x556c18 = id;
                            if (_0x46e8f2['match_mode'] === '精准' && _0x46e8f2['has_mode'] === '存在' && _0x46e8f2['texts']['every'](_0x23cef1 => name['includes'](_0x23cef1)) != _0x46e8f2['reverse_selection']) _0x556c18 = id;
                        });
                    }
                    if (modelist['AntiStaff_mode'] === 0x3) _0x556c18 = id;
                    if (AntiStaff_Invisible && !getEntityFlag(id, 0x5)) _0x556c18 = null;
                    if (AntiStaff_ground && getEntityIsGround(id)) _0x556c18 = null;
                    if (_0x556c18 === null) return;
                    if (modelist['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modelist['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modelist['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modelist['anti_mode'] === 0x3) _0x5ab7f6['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modelist['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) target_list['forEach'](_0x3d182c => interactEntity(_0x3d182c));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modelist['person_mode']);
            if (Tower && (_0x443bb9['pitch'] < -0x50 || _0x443bb9['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x762d72 || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0x4c3434['x'], self_pos['y'] - 0x2, _0x4c3434['z']), tower_delay * 0x32);
                }
            }
            if (ShowVariable) {
                if (letiable_player && last_world_player['length'] != _0x3516a2['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x3516a2['length'], '§r');
                    last_world_player = _0x3516a2;
                }
                if (letiable_id && self_id != last_tick_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + last_tick_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x19f470 = [];
                _0x3516a2['forEach'](_0x570437 => {
                    if (modelist['ca_mode'] == 0x0 && 十六言命曰(_0x570437['id'], -0x1) > 0x14) _0x19f470['push'](getEntityName(_0x570437['id']));
                    if (modelist['ca_mode'] == 0x1 && getEntityMaxDamage(_0x570437['id']) > 0x14) _0x19f470['push'](getEntityName(_0x570437['id']));
                });
                if (_0x19f470['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x19f470), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x3516a2['length']) {
                const _0xb512c8 = _0x3516a2['map'](_0x383eab => _0x383eab['name']);
                let _0x4781d9 = 三两声未成(last_world_player, _0xb512c8);
                let _0x1098bb = last_world_player['length'] < _0xb512c8['length'];
                if (_0x1098bb) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x4781d9) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x4781d9) + '离开了世界', '§r');
                last_world_player = _0xb512c8;
            }
            if (DropRes && _0x66499d['y'] < -drop_motion) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x359c23 = getInventory(self_id, index);
                    if (resList['includes'](_0x359c23['namespace'])) dropPlayerInventorySlot(self_id, index);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aim_attack_aps) - 0x32) {
                    target_list['forEach'](_0x5abb4e => {
                        if (声思似诉平(self_id, _0x5abb4e, aim_attack_fov, 0x0)) {
                            if (aim_attack_use) 快弹数曲曲();
                            else 江头夜送客(_0x5abb4e, AttackSwing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x3a9894 = getInventory(self_id, select_slot);
                if (select_hotbar_slots['length'] > 0x0) {
                    if (select_hotbar_slots['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x4384b7 = getCarried(self_id);
                        if (select_use && !_0x4384b7['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x3a9894['name']) || selectitems['includes'](_0x3a9894['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0xf5c71f = getCarried(self_id);
                    if (select_use && !_0xf5c71f['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot) {
                const _0x33f0b3 = 是夕始觉有(self_id, 'splash_potion', 'hotbar', ap_min);
                const _0x596b25 = 是夕始觉有(self_id, 'splash_potion', 'inv', 0x0);
                if (_0x596b25) {
                    if (ap_autobag && !_0x33f0b3) openInventory();
                    if (!_0x33f0b3) {
                        for (let _0xdaa598 = splash_slot === -0x1 ? 0x23 : 0x9; _0xdaa598 > -0x1; _0xdaa598--) {
                            if (splash_slot > -0x1) {
                                const _0x3188fe = getInventory(self_id, _0xdaa598);
                                if (_0x3188fe['namespace'] === 'minecraft:air') {
                                    女尝学琵琶(splash_slot, _0xdaa598, false);
                                    splash_slot = -0x1;
                                    break;
                                }
                            }
                            const _0xb5c503 = getInventory(self_id, _0xdaa598);
                            if (splash_slot === -0x1 && _0xb5c503['namespace'] === 'minecraft:splash_potion') splash_slot = _0xdaa598;
                        }
                    }
                    if (ap_autobag && _0x33f0b3) setTimeout(() => closeInventory(), 0x64);
                }
            }
            if (SmartInv && (!da_change || item_count != lasttick_item_count) && (!da_bow || _0x443bb9['pitch'] > 0x50) && (!da_chest || isOpenChest)) {
                let _0x30716f = 0x1;
                let _0x4800d1 = [0x0, 0x0, 0x0, 0x0];
                let _0x180828 = -0x1;
                let _0x36e94a = [-0x1, -0x1, -0x1, -0x1];
                for (let _0x32e67f = 0x23; _0x32e67f > -0x1; _0x32e67f--) {
                    const _0x3c1b92 = 迁谪意因为(self_id, _0x32e67f);
                    if (_0x3c1b92 === 'other') continue;
                    const _0x434b84 = armorTypes['indexOf'](_0x3c1b92);
                    if (_0x434b84 === -0x1 && !['sword', 'axe', 'pickaxe']['includes'](_0x3c1b92)) continue;
                    if (da_weapon) {
                        const _0x15121b = 十六言命曰(self_id, _0x32e67f, da_texture, da_enchant);
                        if (_0x15121b > 0x14) continue;
                        if (['sword', 'axe', 'pickaxe']['includes'](_0x3c1b92) && _0x15121b > _0x30716f) {
                            _0x30716f = _0x15121b;
                            _0x180828 = _0x32e67f;
                        } else if (['sword', 'axe', 'pickaxe']['includes'](_0x3c1b92) && _0x15121b <= _0x30716f) dropPlayerInventorySlot(self_id, _0x32e67f);
                    }
                    if (da_armor) {
                        const _0x204ee7 = 之凡六百一(self_id, _0x32e67f, da_texture, da_enchant);
                        if (_0x434b84 > -0x1 && _0x204ee7 > _0x4800d1[_0x434b84]) {
                            _0x4800d1[_0x434b84] = _0x204ee7;
                            _0x36e94a[_0x434b84] = _0x32e67f;
                        } else if (_0x434b84 > -0x1 && _0x204ee7 <= _0x4800d1[_0x434b84]) dropPlayerInventorySlot(self_id, _0x32e67f);
                    }
                }
                if (da_move) {
                    if (_0x180828 > -0x1) 女尝学琵琶(_0x180828, SmartInvCfg['sword'], false, true);
                    for (let _0xe72827 in _0x36e94a) {
                        let _0x50de5d = _0x36e94a[_0xe72827];
                        if (_0x50de5d > -0x1 && move_armor_slot < 0x0) 女尝学琵琶(_0x50de5d, SmartInvCfg[armorTypes[_0xe72827]], false, true);
                        if (_0x50de5d > -0x1 && move_armor_slot > -0x1) 女尝学琵琶(_0x50de5d, move_armor_slot, false, true);
                    }
                }
                if (da_chest) isOpenChest = false;
            }
            if (AutoArmor) {
                let _0x38bd98 = 迁谪意因为(self_id, armor_slot);
                let _0x51af4a = 之凡六百一(self_id, armor_slot);
                if (_0x38bd98 != 'other' && _0x51af4a !== 0x0) {
                    for (let _0x230fa9 = 0x0; _0x230fa9 < aa_times; _0x230fa9++) {
                        if (_0x38bd98 === 'helmet' && _0x51af4a > 之凡六百一(self_id, -0x2)) 罢悯然自叙(armor_slot);
                        if (_0x38bd98 === 'chestplate' && _0x51af4a > 之凡六百一(self_id, -0x3)) 罢悯然自叙(armor_slot);
                        if (_0x38bd98 === 'leggings' && _0x51af4a > 之凡六百一(self_id, -0x4)) 罢悯然自叙(armor_slot);
                        if (_0x38bd98 === 'boots' && _0x51af4a > 之凡六百一(self_id, -0x5)) 罢悯然自叙(armor_slot);
                    }
                    if (armor_slot > (modelist['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
                }
            }
            if (Remover) {
                const _0x6bc633 = getEntityList();
                _0x6bc633['forEach'](_0x12caad => {
                    let _0x4d3c67 = false;
                    if (rmer_entity) _0x4d3c67 = !isPlayer(_0x12caad);
                    if (rmer_item) _0x4d3c67 = getEntityNamespace(_0x12caad) == 'minecraft:item';
                    if (_0x4d3c67) removeEntity(_0x12caad);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && last_tick_item['count'] > 0x0 && last_tick_item['namespace'] != 'minecraft:air') {
                for (let _0x1bb4c7 = 0x8; _0x1bb4c7 >= 0x0; _0x1bb4c7--) {
                    let _0x1efb9b = getInventory(self_id, _0x1bb4c7);
                    if (_0x1efb9b['namespace'] === last_tick_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x1bb4c7);
                        break;
                    }
                }
            }
            if (FreeCam && freecam_pos != {}) {
                if (freecam_show) {
                    for (let _0x517f28 = 0x0; _0x517f28 <= 0x12; _0x517f28 += 0x2) 妇遂命酒使(0x37, freecam_pos['x'], freecam_pos['y'] - 1.53 + _0x517f28 / 0xa, freecam_pos['z'], 0x1);
                    _0x5ab7f6['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + freecam_pos['x']['toFixed'](0x2) + ', Y:' + freecam_pos['y']['toFixed'](0x2) + ', Z:' + freecam_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (freecam_dis) _0x5ab7f6['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, freecam_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x11ca02 = getEntityList();
                _0x11ca02['forEach'](_0x5f27af => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x5f27af)) && target_list['length'] > 0x0) {
                        const _0x3a41d6 = getPos(target_list[0x0]);
                        let _0x4e452a = 弦弦掩抑声(_0x3a41d6, getPos(_0x5f27af), 'yaw_pos');
                        let _0x4e52c8 = -弦弦掩抑声(_0x3a41d6, getPos(_0x5f27af), 'pitch_pos');
                        const _0x3e80ac = getPos(_0x5f27af);
                        const _0x1fddb4 = 忽闻水上琵(bow_speed, _0x3e80ac, {
                            'yaw': _0x4e452a,
                            'pitch': _0x4e52c8
                        });
                        setEntityMotion(_0x5f27af, _0x1fddb4['x'] - _0x3e80ac['x'], _0x1fddb4['y'] - _0x3e80ac['y'], _0x1fddb4['z'] - _0x3e80ac['z']);
                    }
                });
                if (target_list['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(target_list[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x381bd1 = getEntityList();
                _0x381bd1['forEach'](_0x3f1844 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x3f1844))) {
                        const _0x17a4ad = getPos(_0x3f1844);
                        if (typeof arrow_rot[_0x3f1844] === 'undefined') arrow_rot[_0x3f1844] = _0x443bb9;
                        const _0x511b00 = arrow_rot[_0x3f1844]['yaw'];
                        const _0x1f265e = arrow_rot[_0x3f1844]['pitch'];
                        const _0x228017 = 忽闻水上琵(0x1, _0x17a4ad, {
                            'yaw': _0x511b00,
                            'pitch': _0x1f265e
                        });
                        setEntityMotion(_0x3f1844, _0x228017['x'] - _0x17a4ad['x'], _0x228017['y'] - _0x17a4ad['y'], _0x228017['z'] - _0x17a4ad['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0xfcd8f = getEntityList();
                _0xfcd8f['forEach'](_0x26a3ae => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x26a3ae)) && Arrow_id === null && !ArrowList['includes'](Arrow_id)) Arrow_id = _0x26a3ae;
                });
                if (Arrow_id != null) {
                    if (!ArrowList['includes'](Arrow_id)) ArrowList['push'](Arrow_id);
                    let _0x424b3c = getPos(Arrow_id);
                    setCameraAnchor(_0x424b3c['x'] - self_pos['x'] + (ArrowView_x - 0xa), _0x424b3c['y'] - self_pos['y'] + (ArrowView_y - 0xa), -_0x424b3c['z'] + self_pos['z'] + (ArrowView_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(Arrow_id)) Arrow_id = null;
            }
            if (FPSReducer) {
                for (let _0x259a4a = 0x0; _0x259a4a < fps_rate * 0xa; _0x259a4a++) {
                    for (let _0xfa950b = 0x0; _0xfa950b < fps_rate * 0xa; _0xfa950b++) getEntityName(_0x259a4a + _0xfa950b);
                }
            }
            if (ArrowParticle) {
                const _0x3bbbcd = getEntityList();
                _0x3bbbcd['forEach'](_0x4a3367 => {
                    if (getEntityNamespace(_0x4a3367) === 'minecraft:arrow') {
                        const _0x3526b7 = getPos(_0x4a3367);
                        妇遂命酒使(arrow_particle_type, _0x3526b7['x'], _0x3526b7['y'], _0x3526b7['z'], 0x1);
                    }
                });
            }
            if (FightBot && target_list['length'] > 0x0) {
                let _0x4f5f2e = getPos(target_list[0x0]);
                let _0x50f072 = {};
                if (FightBot_autochest) {
                    const _0x5e22e0 = 面转轴拨弦(self_id);
                    for (let _0x2a9fa2 = -0x2; _0x2a9fa2 < 0x3; _0x2a9fa2++) {
                        for (let _0xfd3753 = -0x2; _0xfd3753 < 0x3; _0xfd3753++) {
                            for (let _0x3cb267 = -0x2; _0x3cb267 < 0x3; _0x3cb267++) {
                                const _0x29e58a = getBlock(_0x5e22e0['x'] + _0x2a9fa2, _0x5e22e0['y'] + _0xfd3753, _0x5e22e0['z'] + _0x3cb267);
                                const _0x548c5d = 添酒回灯重([_0x5e22e0['x'] + _0x2a9fa2, _0x5e22e0['y'] + _0xfd3753, _0x5e22e0['z'] + _0x3cb267]);
                                if (_0x29e58a['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x548c5d)) {
                                    _0x50f072 = {
                                        'x': _0x5e22e0['x'] + _0x2a9fa2,
                                        'y': _0x5e22e0['y'] + _0xfd3753,
                                        'z': _0x5e22e0['z'] + _0x3cb267
                                    };
                                    ca_chest_pos['push'](_0x548c5d);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x5bba4e = (_0x762d72 ? -0.278 : -0.293) - FightBot_speed * Number(!FightBot_rocker_legalmove) / 0x5;
                let _0x2a2189 = 马客在船举(0x0, 0x64) < FightBot_move_rate;
                if (FightBot_random_move && _0x2a2189) {
                    _0x4f5f2e = 忽闻水上琵(_0x5bba4e, _0x4f5f2e, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x41502c = 弦弦掩抑声(self_id, _0x4f5f2e, 'yaw_pos');
                let _0x1bd5a7 = 忽闻水上琵(_0x5bba4e, getPos(self_id), {
                    'yaw': _0x41502c,
                    'pitch': 0x0
                });
                if (_0x4e1c9a['current'] < FightBot_pot_health) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x3d2ee5 = 谁琵琶声停(self_id, target_list[0x0]);
                if (_0x3d2ee5 > FightBot_distance) {
                    if (_0x762d72) setEntityMotion(self_id, _0x1bd5a7['x'] - self_pos['x'], (FightBot_jump || 马客在船举(0x0, 0x64) < FightBot_jump_rate && FightBot_random_jump) && _0x762d72 ? FightBot_height : _0x66499d['y'], _0x1bd5a7['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (FightBot_Scaffold) Scaffold = true;
                    if (Scaffold && keep_y) rec_y = 0x0;
                    if (马客在船举(0x0, 0x64) < FightBot_fishhook_rate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0) && _0x3d2ee5 < FightBot_distance * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < FightBot_snowball_rate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x762d72) setEntityMotion(self_id, FightBot_random_move && _0x2a2189 ? _0x1bd5a7['x'] - self_pos['x'] : _0x66499d['x'], FightBot_combo && !getEntityIsGround(target_list[0x0]) ? FightBot_height : _0x66499d['y'], FightBot_random_move && _0x2a2189 ? _0x1bd5a7['z'] - self_pos['z'] : _0x66499d['z']);
                    if (FightBot_autoweapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (FightBot_KillAura) KillAura = true;
                    if (FightBot_KeepDistance) KeepDistance = true;
                    if (FightBot_aimbot) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x50f072) != '{}') {
                    let _0x2741f4 = 弦弦掩抑声(self_id, _0x50f072, 'yaw_pos');
                    let _0x2bfa04 = 忽闻水上琵(_0x5bba4e, getPos(self_id), {
                        'yaw': _0x2741f4,
                        'pitch': 0x0
                    });
                    if (_0x762d72) setEntityMotion(self_id, _0x2bfa04['x'] - self_pos['x'], (FightBot_jump || 马客在船举(0x0, 0x64) < FightBot_jump_rate && FightBot_random_jump) && _0x762d72 ? FightBot_height : _0x66499d['y'], _0x2bfa04['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x2b54a4 = 0x0; _0x2b54a4 < rpc_repeat_times; _0x2b54a4++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x1330d2 = 0x0; _0x1330d2 < shift_num; _0x1330d2++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && target_list['length'] > 0x0) {
                if (SelectCrystal) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % crystal_delay == 0x0) {
                    let _0x431d44 = 0x0;
                    target_list['forEach'](_0x51dd64 => {
                        let _0x223953 = 面转轴拨弦(_0x51dd64);
                        if (ac_exclude_y && Math['abs'](_0x223953['y'] - self_pos['y']) < 0x1) return;
                        if (CrystalTP) setPos(_0x223953['x'], _0x223953['y'] + 0x1, _0x223953['z']);
                        _0x188d6b: for (let _0x1629e9 = -0x1; _0x1629e9 < 0x2; _0x1629e9++) {
                            for (let _0x321564 = -0x2; _0x321564 < 0x0; _0x321564++) {
                                for (let _0x5479a7 = -0x1; _0x5479a7 < 0x2; _0x5479a7++) {
                                    let _0x3480b7 = getBlock(_0x223953['x'] + _0x1629e9, _0x223953['y'] + _0x5479a7, _0x223953['z'] + _0x321564);
                                    if (_0x431d44 > crystal_acount) break _0x188d6b;
                                    if ((_0x3480b7['namespace'] === 'minecraft:bedrock' || _0x3480b7['namespace'] === 'minecraft:obsidian') && _0x431d44 < crystal_acount) {
                                        buildBlock(self_id, _0x223953['x'] + _0x1629e9, _0x223953['y'] + _0x5479a7, _0x223953['z'] + _0x321564, 0x1);
                                        _0x431d44 += 0x1;
                                    }
                                }
                            }
                        }
                    });
                } else _0x5ab7f6['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0xc44046 = getEntityList();
                _0xc44046['forEach'](_0x43efd1 => {
                    if (!才年长色衰(_0x43efd1)) return;
                    const _0xa67cd7 = getPos(_0x43efd1);
                    if (getEntityTypeId(_0x43efd1) !== 0x47 || 声暗问弹者(_0x43efd1, target_list[0x0]) > CrystalAura_distance) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x5f0ed2 = 0x0; _0x5f0ed2 < 0x9; _0x5f0ed2++) {
                            const _0x438299 = getInventory(self_id, _0x5f0ed2);
                            if (_0x438299['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x5f0ed2);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x4c3434['x'] + _0xa67cd7['x']) / 0x2, (_0x4c3434['y'] + _0xa67cd7['y']) / 0x2, (_0x4c3434['z'] + _0xa67cd7['z']) / 0x2, 0x0);
                        江头夜送客(_0x43efd1, AttackSwing);
                    }
                });
            }
            if (AutoBomb && target_list['length'] > 0x0) {
                if (SelectBomb) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % bomb_delay === 0x0) {
                    target_list['forEach'](_0x5c0082 => {
                        let _0x1551ae = 面转轴拨弦(_0x5c0082);
                        let _0x41ffd8 = getBlock(_0x1551ae['x'], _0x1551ae['y'] + 0x2, _0x1551ae['z']);
                        if (_0x41ffd8['namespace'] === 'minecraft:air') buildBlock(self_id, _0x1551ae['x'], _0x1551ae['y'] + 0x2, _0x1551ae['z'], 0x0);
                        _0x41ffd8 = getBlock(_0x1551ae['x'], _0x1551ae['y'] + 0x2, _0x1551ae['z']);
                        if (_0x41ffd8['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x1551ae['x'], _0x1551ae['y'] + 0x2, _0x1551ae['z'], 0x0);
                    });
                } else _0x5ab7f6['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && target_list['length'] > 0x0) {
                target_list['forEach'](_0x2dc2ae => {
                    const _0xa7d1e3 = 面转轴拨弦(_0x2dc2ae);
                    let _0x5f04d6 = [
                        [_0xa7d1e3['x'], _0xa7d1e3['y'] + 0x2, _0xa7d1e3['z']],
                        [_0xa7d1e3['x'] + 0x1, _0xa7d1e3['y'], _0xa7d1e3['z']],
                        [_0xa7d1e3['x'] - 0x1, _0xa7d1e3['y'], _0xa7d1e3['z']],
                        [_0xa7d1e3['x'], _0xa7d1e3['y'], _0xa7d1e3['z'] + 0x1],
                        [_0xa7d1e3['x'], _0xa7d1e3['y'], _0xa7d1e3['z'] - 0x1],
                        [_0xa7d1e3['x'] + 0x1, _0xa7d1e3['y'] + 0x1, _0xa7d1e3['z']],
                        [_0xa7d1e3['x'] - 0x1, _0xa7d1e3['y'] + 0x1, _0xa7d1e3['z']],
                        [_0xa7d1e3['x'], _0xa7d1e3['y'] + 0x1, _0xa7d1e3['z'] + 0x1],
                        [_0xa7d1e3['x'], _0xa7d1e3['y'] + 0x1, _0xa7d1e3['z'] - 0x1]
                    ];
                    for (pos of _0x5f04d6) {
                        let _0x45c242 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x45c242['namespace'] === 'minecraft:air' && modelist['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x45c242['namespace'] != 'minecraft:air' && modelist['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && target_list['length'] > 0x0) {
                let _0x5582a8 = [];
                let _0x177932 = false;
                random_num = 马客在船举(KillAura_min_aps, KillAura_max_aps) / (KillAura_Balance ? target_list['length'] : 0x1);
                random_delay = KillAura_aps_delay > 0x0 ? KillAura_aps_delay * 0x32 : Math['round'](0x3e8 / random_num);
                target_list['forEach'](_0x527ed3 => {
                    let _0x40dbf8 = getPos(_0x527ed3);
                    if (!((声暗问弹者(self_id, _0x527ed3) <= KillAura_distance || KillAura_infinite) && 声思似诉平(self_id, _0x527ed3, KillAura_Fov, 0x0) && 惨将别别时(self_pos, _0x40dbf8, !through_wall, 1.53, 0.9) && (!KillAura_crit || _0x66499d['y'] < -0.42))) return;
                    _0x5582a8['push'](_0x527ed3);
                    KillAura_d_1[_0x527ed3] = Date['now']();
                    if (typeof KillAura_d_2[_0x527ed3] !== 'undefined' && KillAura_d_1[_0x527ed3] - KillAura_d_2[_0x527ed3] < 0x0) return;
                    _0x177932 = true;
                    for (k = 0x0; k < KillAura_boost; k++) 江头夜送客(_0x527ed3, AttackSwing);
                    KillAura_d_2[_0x527ed3] = KillAura_d_1[_0x527ed3] + random_delay;
                    if (KillAura_person) setPlayerViewPerspective(_0x177932 ? 0x1 : 0x0);
                });
                if (_0x5582a8['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x5582a8['length'] + '个目标' : 添酒回灯重(_0x5582a8['map'](_0x14e59d => getEntityName(_0x14e59d))), '§r'));
                const _0x29a7b3 = _0x5582a8['length'] * random_num * KillAura_boost;
                if (show_aps) _0x5ab7f6['push'](归客不发寻(0x1, 'APS', _0x29a7b3 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x66499d['y'] < -0.074 && !_0x762d72) setMotion(_0x66499d['x'], -slowdown_speed / 0xf, _0x66499d['z']);
            if (SurroundParticle && (isMoving || !only_walk)) {
                surround_particle_yaw = surround_particle_yaw + particle_surround_speed * 0x3;
                if (surround_particle_yaw > 0xb4) surround_particle_yaw = -0xb4;
                let _0x226e3e = 忽闻水上琵(surround_particle_length, self_pos, {
                    'yaw': surround_particle_yaw,
                    'pitch': 0x0
                });
                妇遂命酒使(surround_particle_type, _0x226e3e['x'], _0x226e3e['y'] - 1.8 + surround_particle_heigh, _0x226e3e['z'], surround_particle_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x3d84e7 = motion_list['shift']();
                setMotion(_0x3d84e7[0x0], _0x3d84e7[0x1], _0x3d84e7[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                rec_y = !keep_y || rec_y === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : rec_y;
                if (Scaffold_info) createText(0x69, 0x13, self_item['name'] + ' x' + self_item['count'], Scaffold_info, 'Scaffold_info');
                let _0x337818 = Scaffold_move ? 弦弦掩抑声(prev_pos, self_pos, 'yaw_pos') : _0x443bb9['yaw'];
                let _0x381c50 = Scaffold_move ? 弦弦掩抑声(prev_pos, self_pos, 'pitch_pos') : _0x443bb9['pitch'];
                if (!Scaffold_accurate) _0x337818 = angleRound(_0x337818, Scaffold_precision);
                if (!Scaffold_accurate) _0x381c50 = angleRound(_0x381c50, Scaffold_precision);
                if (Scaffold_findPath) {
                    let _0xf4d35b = {};
                    let _0x5d01e4 = Infinity;
                    for (let _0x280d64 = -0x3; _0x280d64 <= 0x3; _0x280d64++) {
                        for (let _0x13b194 = -0x3; _0x13b194 <= 0x3; _0x13b194++) {
                            for (let _0x5e766d = -0x3; _0x5e766d <= 0x3; _0x5e766d++) {
                                const _0x5005d1 = getBlock(_0xcb1d55['x'], _0xcb1d55['y'], _0xcb1d55['z']);
                                if (_0x5005d1['namespace'] == 'minecraft:air') continue;
                                let _0x590d03 = Math['sqrt'](_0x280d64 * _0x280d64 - _0x13b194 * _0x13b194 + _0x5e766d * _0x5e766d);
                                let _0xcb1d55 = {
                                    'x': _0x280d64 + _0x4c3434['x'],
                                    'y': Math['floor'](rec_y) - 0x1 + _0x13b194,
                                    'z': _0x5e766d + _0x4c3434['z']
                                };
                                if (_0x590d03 < _0x5d01e4) {
                                    _0x5d01e4 = _0x590d03;
                                    _0xf4d35b = _0xcb1d55;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0xf4d35b) != '{}') {
                        let _0x5f469a = 眉信手续续(_0x4c3434, _0xf4d35b, 0.8, true);
                        _0x5f469a['forEach'](_0x55d57b => {
                            if (Scaffold_simulate) 事今漂沦憔(Math['round'](_0x55d57b['x']), Math['round'](rec_y) - 0x1, Math['round'](_0x55d57b['z']));
                            else buildBlock(self_id, Math['round'](_0x55d57b['x']), Math['round'](rec_y) - 0x1, Math['round'](_0x55d57b['z']), 0x1);
                        });
                    }
                }
                let _0x35b3e0 = Math['abs'](_0x337818) % 0x2d;
                for (let _0x7f54c7 = 0x0; _0x7f54c7 < Scaffold_length; _0x7f54c7 += 0x1 / Math['cos'](_0x35b3e0 * (Math['PI'] / 0xb4))) {
                    const _0x535d64 = 忽闻水上琵(_0x7f54c7, self_pos, {
                        'yaw': _0x337818,
                        'pitch': Scaffold_pitch ? _0x381c50 : 0x0
                    });
                    let _0x5e23aa = {
                        'x': Math['floor'](_0x535d64['x']),
                        'y': Math['floor'](rec_y) - 0x1,
                        'z': Math['floor'](_0x535d64['z'])
                    };
                    let _0x3dbb71 = getBlock(_0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x3dbb71['namespace'])) continue;
                    if (Scaffold_hyt) setBlock(_0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z'], self_item['namespace'], self_item['aux']);
                    else if (Scaffold_simulate) 事今漂沦憔(_0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z']);
                    else buildBlock(self_id, _0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z'], 0x1);
                    if (Scaffold_up) {
                        const _0x88a1ca = getBlock(_0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x88a1ca['namespace'])) buildBlock(self_id, _0x5e23aa['x'], Math['floor'](_0x5e23aa['y']), _0x5e23aa['z'], 0x0);
                    };
                }
            }
            if (Scaffold && Scaffold_auto_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x437794 = 0x0; _0x437794 < 0x9; _0x437794++) {
                    const _0x5bf3f6 = getInventory(self_id, _0x437794);
                    if (_0x5bf3f6['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x437794);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, AttackSwing);
            if (TargetHud) {
                if (modelist['th_select_mode'] === 0x0) th_target = target_list[0x0];
                if (th_target) {
                    let _0x3542f9 = [];
                    const _0x5bb9a6 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x301cb9 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x2171ea = 面转轴拨弦(th_target);
                    if (th_name) _0x3542f9['push'](getEntityName(th_target));
                    if (th_carry) _0x3542f9['push'](_0x5bb9a6['name'] + ' x' + _0x5bb9a6['count']);
                    if (th_dist) _0x3542f9['push']('距离: ' + _0x301cb9 + 'm');
                    if (th_health) _0x3542f9['push']('血量: ' + 无限事轻拢(th_target, modelist['th_health_mode']));
                    if (th_pos) _0x3542f9['push']('[' + _0x2171ea['x'] + ', ' + _0x2171ea['y'] + ', ' + _0x2171ea['z'] + ']');
                    createText(0x69 + th_x, 0x13 + th_y / 0xa, _0x3542f9['join']('\n'), true, 'TargetHud');
                }
            }
            if (AntiVoid) {
                if (modelist['lag_mode'] === 0x0) {
                    if (!lagback_run && !_0x762d72 && _0x66499d['y'] > -lagback_y) lagback_pos['push'](_0x4c3434);
                    if (!lagback_run && _0x762d72) lagback_pos = [];
                    if (!lagback_run && _0x66499d['y'] <= -lagback_y) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0xf5bcfc = lagback_pos.pop();
                            setPos(_0xf5bcfc['x'], _0xf5bcfc['y'], _0xf5bcfc['z']);
                            if (lagback_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else lagback_run = false;
                    }
                }
                if (_0x66499d['y'] <= -lagback_y && modelist['lag_mode'] === 0x1) {
                    const _0x5ccb95 = {
                        'rot': _0x443bb9,
                        'yHeadRot': 0x0
                    };
                    const _0x561166 = {
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
                        ..._0x5ccb95
                    };
                    const _0x913044 = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x5ccb95
                    };
                    sendPlayerAuthInput(_0x561166);
                    sendMovePlayer(_0x913044);
                }
                if (modelist['lag_mode'] === 0x2) {
                    if (!lagback_run && _0x762d72 && _0x66499d['y'] > -lagback_y) lagback_pos[0x0] = self_pos;
                    if (!lagback_run && _0x66499d['y'] <= -lagback_y) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0x2a5cde = lagback_pos[0x0];
                            setPos(_0x2a5cde['x'], _0x2a5cde['y'], _0x2a5cde['z']);
                            lagback_pos = [];
                        } else lagback_run = false;
                    }
                }
            }
            if (GodMode && (!gm_move || isMoving) && (!gm_ground || _0x762d72)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x57e557 = 0x0; _0x57e557 < gm_count; _0x57e557++) {
                        if (modelist['GodMode_mode'] === 0x0) 二年恬然自(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
                        if (modelist['GodMode_mode'] === 0x1) setPos(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
                        if (modelist['GodMode_mode'] === 0x2) sendPlayerAuthInput({
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
                            'rot': _0x443bb9,
                            'yHeadRot': 0x0
                        });
                    }
                    if (!tp_back) gm_tick = 0x0;
                }
                if (tp_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x150bff = 0x0; _0x150bff < gm_count; _0x150bff++) {
                        if (modelist['GodMode_mode'] < 0x2) setPos(gm_pos['x'], gm_pos['y'], gm_pos['z']);
                        if (modelist['GodMode_mode'] < 0x2) setMotion(gm_mot['x'], gm_mot['y'], gm_mot['z']);
                        if (modelist['GodMode_mode'] === 0x2) {
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
                                'rot': _0x443bb9,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && target_list['length'] > 0x0 && 谁琵琶声停(self_id, target_list[0x0]) < kd_distance && (_0x762d72 || !kd_only_ground)) {
                const _0x4d071e = 弦弦掩抑声(getPos(target_list[0x0]), self_id, 'yaw_pos');
                const _0x3a3c71 = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x4d071e,
                    'pitch': _0x443bb9['pitch']
                });
                if (kd_anti) silentTP(_0x3a3c71['x'] * 0x2, _0x3a3c71['y'] * 0x2, _0x3a3c71['z'] * 0x2);
                else setMotion(_0x3a3c71['x'] - self_pos['x'], _0x66499d['y'], _0x3a3c71['z'] - self_pos['z']);
            }
            if (AirJump && _0x66499d['y'] < -0.42) {
                let _0x256a1c = 酒欲饮无管(_0x66499d, self_pos, 瑟瑟主人下(self_id));
                let _0x456785 = 弦弦掩抑声(_0x256a1c, self_id, 'yaw_pos');
                let _0x491583 = 忽闻水上琵(jump_length / 0xa, self_pos, {
                    'yaw': _0x456785,
                    'pitch': 0x0
                });
                setMotion(_0x491583['x'] - self_pos['x'], jump_heigh / 0x64, _0x491583['z'] - self_pos['z']);
            }
            if (drop_list['length'] > 0x0) {
                for (let _0x53f389 = 0x0; _0x53f389 < di_speed; _0x53f389++) {
                    let _0x427271 = drop_list.pop();
                    dropPlayerInventorySlot(self_id, _0x427271);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) > Trace_min_dis) {
                let _0x5605a6 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                let _0x496ac7 = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
                let _0x301ea6 = 忽闻水上琵(-Trace_speed / 0x5, getPos(self_id), {
                    'yaw': _0x5605a6,
                    'pitch': -_0x496ac7
                });
                setPos(_0x301ea6['x'], _0x301ea6['y'], _0x301ea6['z']);
            }
            if (LineParticle && target_list['length'] > 0x0) {
                let _0x3e20b3 = getPos(self_id);
                _0x3e20b3['y'] += line_particle_offset / 0xa;
                target_list['forEach'](_0x53b200 => {
                    let _0x548d62 = getPos(_0x53b200);
                    _0x548d62['y'] += 0.765;
                    let _0x5ce649 = 弦弦掩抑声(_0x3e20b3, _0x548d62, 'yaw_pos');
                    let _0x209c05 = 弦弦掩抑声(_0x3e20b3, _0x548d62, 'pitch_pos');
                    for (let _0x3ef44c = 0x0; _0x3ef44c < 声暗问弹者(_0x53b200, self_id); _0x3ef44c += (0xb - line_particle_size) / 0x5) {
                        let _0x522351 = 忽闻水上琵(-_0x3ef44c, getPos(self_id), {
                            'yaw': _0x5ce649,
                            'pitch': -_0x209c05
                        });
                        妇遂命酒使(line_particle_type, _0x522351['x'], _0x522351['y'] - 1.53 + line_particle_offset / 0xa, _0x522351['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % Spammer_delay == 0x0) {
                let _0x32cbd9 = content;
                const _0x506040 = 'abcdef';
                if (Spammer_colors) _0x32cbd9 = 送客湓浦口(_0x32cbd9);
                if (Spammer_l) _0x32cbd9 = '§l' + _0x32cbd9;
                if (Spammer_k) _0x32cbd9 = '§k' + _0x32cbd9;
                if (Spammer_o) _0x32cbd9 = '§o' + _0x32cbd9;
                if (Spammer_rainbow) _0x32cbd9 = '§' + _0x506040[马客在船举(0x0, _0x506040['length'] - 0x1)] + _0x32cbd9;
                if (Spammer_word) {
                    let _0x402ca1 = 抱琵琶半遮(NoveXare_path + '/Spammer.txt')['split']('\n');
                    _0x32cbd9 = _0x402ca1[马客在船举(0x0, _0x402ca1['length'] - 0x1)];
                }
                if (Spammer_target && target_list['length'] > 0x0) _0x32cbd9 = ' §e@' + target_list['map'](_0x24c1c3 => getEntityName(_0x24c1c3))['join'](',') + ' §r' + _0x32cbd9;
                for (let _0x18ed2b = 0x0; _0x18ed2b < Spammer_num; _0x18ed2b++) {
                    let _0x51da3c = 慢捻抹复挑(0x6);
                    sendChatMessage(Spammer_random ? _0x32cbd9 + '§r || ' + _0x51da3c : _0x32cbd9);
                }
            }
            if (HitBox && target_list['length'] > 0x0) target_list['forEach'](_0x3e290e => setEntitySize(_0x3e290e, HitBox_x, HitBox_y));
            if (Sucker && target_list['length'] > 0x0) {
                target_list['forEach'](_0x590ddc => {
                    const _0x4afdcc = 忽闻水上琵(Sucker_dis, self_pos, _0x443bb9);
                    setRealPos(_0x590ddc, _0x4afdcc['x'], _0x4afdcc['y'], _0x4afdcc['z']);
                });
            }
            if (Velocity && isMoving) {
                let _0x39d47b = _0x443bb9['yaw'];
                if (modelist['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x2cae7a = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0x39d47b = 弦弦掩抑声(self_id, _0x2cae7a, 'yaw_pos');
                }
                let _0x5b8f7a = 忽闻水上琵((modelist['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x39d47b,
                    'pitch': 0x0
                });
                setMotion(_0x5b8f7a['x'] - self_pos['x'], Bhop && (_0x762d72 || bhop_airjump) && (!bhop_airjump || _0x66499d['y'] < -0.42) ? bhop_heigh : _0x66499d['y'], _0x5b8f7a['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x41844c = getCameraRotation();
                const _0x150954 = 忽闻水上琵(flexibleMove_speed / 0xa, self_pos, {
                    'yaw': _0x41844c['yaw'] > 0x0 ? 0xb4 - _0x41844c['yaw'] : -0xb4 - _0x41844c['yaw'],
                    'pitch': -_0x41844c['pitch']
                });
                if (!_0x762d72 && isMoving) setMotion(_0x150954['x'] - self_pos['x'], 0x0, _0x150954['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                target_list['forEach'](_0x3ae52a => {
                    const _0x5ce3b3 = getPos(_0x3ae52a);
                    妇遂命酒使(particle_type, _0x5ce3b3['x'], _0x5ce3b3['y'] + 0.3, _0x5ce3b3['z'], particle_size);
                });
            }
            if (InvCleaner && modelist['cleaner_mode'] < 0x2 && (item_count != lasttick_item_count || cleaner_slot != 0x23 || !cleaner_change) && ticks % drop_delay === 0x0 && (!cleaner_bow || _0x443bb9['pitch'] > 0x50) && (!cleaner_chest || isOpenChest)) {
                let _0x2fa194 = {};
                for (let _0x35c507 = 0x0; _0x35c507 < max_drop_item; _0x35c507++) {
                    let _0x151dc5 = cleaner_slot - _0x35c507;
                    const _0x19dd88 = getInventory(self_id, _0x151dc5);
                    if (_0x19dd88['count'] === 0x0) continue;
                    let _0x20f8b5 = false;
                    let _0x42338e = clear_config[_0x19dd88['namespace']];
                    if (typeof _0x2fa194[_0x19dd88['namespace']] === 'undefined') _0x2fa194[_0x19dd88['namespace']] = 安感斯人言(-0x2, _0x19dd88['namespace']);
                    let _0x3a24d7 = _0x2fa194[_0x19dd88['namespace']];
                    if (typeof _0x42338e !== 'undefined') _0x20f8b5 = (_0x3a24d7 > _0x42338e['max_num'] || _0x42338e['max_num'] === -0x1) && (_0x19dd88['aux'] === _0x42338e['aux'] || _0x42338e['aux'] === 'any');
                    if (modelist['cleaner_mode'] === 0x1 && typeof _0x42338e === 'undefined') _0x20f8b5 = true;
                    if (cleaner_move && !_0x20f8b5 && typeof _0x42338e !== 'undefined' && _0x42338e['slot'] !== 'undefined') 女尝学琵琶(_0x151dc5, _0x42338e['slot'], false, true);
                    if (_0x20f8b5) {
                        if (trash_slot > -0x1 && _0x151dc5 > 0x8) 女尝学琵琶(_0x151dc5, trash_slot, false, true);
                        dropPlayerInventorySlot(self_id, _0x151dc5);
                    }
                }
                if (cleaner_slot > 0x0) cleaner_slot -= max_drop_item;
                else cleaner_slot = 0x23;
                if (cleaner_chest) isOpenChest = false;
            }
            if (SafeWalk && isMoving) {
                const _0x3f2d2c = getEntityRot(self_id)['yaw'];
                const _0x1452aa = 忽闻水上琵(0.3, _0x4c3434, {
                    'yaw': _0x3f2d2c,
                    'pitch': 0x0
                });
                const _0x50f45d = getBlock(_0x1452aa['x'], _0x1452aa['y'] - 0x1, _0x1452aa['z']);
                if (_0x50f45d['namespace'] === 'minecraft:air' && _0x762d72) setMotion((-_0x1452aa['x'] + self_pos['x']) / 0x8, _0x66499d['y'], (-_0x1452aa['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && isMoving) {
                const _0x4beab9 = getEntityRot(self_id)['yaw'];
                const _0x363a7b = 忽闻水上琵(0.5, _0x4c3434, {
                    'yaw': _0x4beab9,
                    'pitch': 0x0
                });
                const _0x8e09c7 = getBlock(_0x363a7b['x'], _0x363a7b['y'], _0x363a7b['z']);
                if (_0x8e09c7['namespace'] != 'minecraft:air') setMotion(_0x66499d['x'], sp_speed / 0xf, _0x66499d['z']);
            }
            if (Fly && (!fly_only_fly || isMoving)) {
                if ((!_0x762d72 || !fly_block) && (!fly_run || isMoving)) {
                    const _0x1cde39 = fly_up_down ? fly_ud : 0x0;
                    let _0xcca629 = 酒欲饮无管(_0x66499d, self_pos, fly_speed * 2.5);
                    if (modelist['fly_mode'] === 0x0) {
                        if (!fly_includeY) setPos(_0xcca629['x'], self_pos['y'] + _0x1cde39, _0xcca629['z']);
                        if (fly_includeY) setPos(self_pos['x'], _0xcca629['y'], self_pos['z']);
                        if (fly_mot) setMotion(0x0, -0.01, 0x0);
                    }
                    if (modelist['fly_mode'] === 0x1) setMotion(_0xcca629['x'] - self_pos['x'], _0xcca629['y'] - self_pos['y'] + _0x1cde39, _0xcca629['z'] - self_pos['z']);
                    if (fly_AuthInput_packet) silentTP(_0xcca629['x'], _0xcca629['y'], _0xcca629['z']);
                    if (fly_move_packet) sendMovePlayer({
                        'id': self_id,
                        'pos': {
                            'x': _0xcca629['x'],
                            'y': _0xcca629['y'],
                            'z': _0xcca629['z']
                        },
                        'mode': 0x1,
                        'ground': true,
                        'rot': {
                            'pitch': _0x443bb9['pitch'],
                            'yaw': _0x443bb9['yaw']
                        },
                        'yHeadRot': getEntityBodyRot(self_id)
                    });
                    fly_ud = fly_ud > 0x0 ? -fly_set_ud / 0xa : fly_set_ud / 0xa;
                }
            }
            if (ActivitySender && isMoving) {
                let _0x5d6c4d = 酒欲饮无管(_0x66499d, self_pos, 0x1);
                const _0x4a56d8 = 弦弦掩抑声(self_id, _0x5d6c4d, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x4a56d8) + '°方向移动');
            }
            if (FakeWater) setBlock(_0x4c3434['x'], _0x4c3434['y'], _0x4c3434['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x66499d['x'], -0x186a0, _0x66499d['z']);
            if (Hover) setMotion(_0x66499d['x'], 0.05, _0x66499d['z']);
            if (Rider && target_list['length'] > 0x0) {
                let _0x1560e2 = getPos(target_list[0x0]);
                const _0x1f0d58 = Rider_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0x1560e2['x'] + _0x1f0d58, _0x1560e2['y'] + Rider_heigh + 0x1, _0x1560e2['z'] + _0x1f0d58);
                _0x5ab7f6['push'](归客不发寻(0x1, 'Rider', getEntityName(target_list[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x5d23ab = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x196e31 = getCameraRotation();
                if (_0x5d23ab['current'] > 0.12 || !move_fly) {
                    let _0x15064a = 忽闻水上琵(modelist['sprint_mode'] === 0x0 ? sprint_speed / 0xb : sprint_speed / 0xb, getPos(self_id), {
                        'yaw': _0x196e31['yaw'] > 0x0 ? 0xb4 - _0x196e31['yaw'] : -0xb4 - _0x196e31['yaw'],
                        'pitch': -_0x196e31['pitch']
                    });
                    if (sprint_horizontal) _0x15064a['y'] = self_pos['y'];
                    const _0x3b91a3 = getBlock(_0x15064a['x'], _0x15064a['y'], _0x15064a['z']);
                    if (_0x3b91a3['namespace'] === 'minecraft:air' || throw_wall) {
                        if (modelist['sprint_mode'] === 0x0) {
                            setPos(_0x15064a['x'], _0x15064a['y'], _0x15064a['z']);
                            setEntityMotion(self_id, _0x66499d['x'], -1e-7, _0x66499d['z']);
                        }
                        if (modelist['sprint_mode'] === 0x1) setMotion(_0x15064a['x'] - self_pos['x'], _0x15064a['y'] - self_pos['y'], _0x15064a['z'] - self_pos['z']);
                        if (sprint_AuthInput_packet) silentTP(_0x15064a['x'], _0x15064a['y'], _0x15064a['z']);
                        if (sprint_move_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x15064a['x'],
                                'y': _0x15064a['y'],
                                'z': _0x15064a['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x443bb9['pitch'],
                                'yaw': _0x443bb9['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x51bda9 = Math['round'](-Crasher_for / 0x2); _0x51bda9 <= Math['round'](Crasher_for / 0x2); _0x51bda9++) {
                    const _0x8eab92 = 0xa ** _0x51bda9;
                    if (modelist['Crasher_mode'] === 0x0) buildBlock(self_id, _0x4c3434['x'], _0x4c3434['y'], _0x4c3434['z'], _0x8eab92 ** 0x2);
                    if (modelist['Crasher_mode'] === 0x1) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                    if (modelist['Crasher_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['Crasher_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['Crasher_mode'] === 0x4) sendSound(_0x8eab92, _0x8eab92, _0x8eab92, _0x8eab92, _0x51bda9);
                    if (modelist['Crasher_mode'] === 0x5) getEntityList()['forEach'](_0x664924 => 江头夜送客(_0x664924, false));
                }
            }
            if (KickAura && target_list['length'] > 0x0) {
                let _0xf828cb = [];
                if (ka_player) _0xf828cb['concat'](_0x3516a2['map'](_0x5d151c => _0x5d151c['id']));
                if (ka_target) _0xf828cb['concat'](target_list);
                if (modelist['ka_mode'] == 0x0) _0xf828cb['forEach'](_0x591582 => {
                    if (_0x591582 == self_id) return;
                    const _0x117715 = getEntityName(_0x591582);
                    let _0x20d089 = _0x117715['indexOf'](']') - 0x2;
                    let _0x35687b = ['b', 'c', 'e', 'a'];
                    for (let _0x5482fe of _0x35687b) {
                        if (_0x117715['indexOf']('·§' + _0x5482fe) != -0x1) {
                            _0x20d089 = _0x117715['indexOf']('·§' + _0x5482fe);
                            break;
                        }
                    }
                    let _0x4c0b43 = _0x20d089 === -0x1 ? _0x117715 : _0x117715['slice'](_0x20d089 + 0x3, _0x117715['length']);
                    if (_0x4c0b43['includes']('【') && _0x4c0b43['includes']('】')) _0x4c0b43 = 琵琶行浔阳(_0x4c0b43, '【', '】');
                    for (let _0x23b95f = 0x0; _0x23b95f < KickAura_for; _0x23b95f++) executeCommand('/tell "' + _0x4c0b43 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + edit_KickAura['repeat'](KickAura_repeat));
                });
                if (modelist['ka_mode'] == 0x1) {
                    for (let _0x51726c = 0x0; _0x51726c < KickAura_for; _0x51726c++) executeCommand('/tell @a[' + _0xf828cb['map'](_0x599e15 => 'name="' + getEntityName(_0x599e15) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + edit_KickAura['repeat'](KickAura_repeat));
                }
            }
            if (AutoSave && _0x66499d['y'] < -max_mot_y && !_0x762d72) {
                if (autosave_autoselect && !self_item['isBlock']) {
                    for (let _0x19e494 = 0x0; _0x19e494 < 0x9; _0x19e494++) {
                        const _0x32d9ed = getInventory(self_id, _0x19e494);
                        if (_0x32d9ed['isBlock'] || autosave_water && _0x32d9ed['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x19e494);
                            break;
                        }
                    }
                }
                if (autosave_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x1fdb2a of 眉信手续续(_0x4c3434, {
                            'x': _0x4c3434['x'],
                            'y': _0x4c3434['y'] - max_mot_y * 0x5,
                            'z': _0x4c3434['z']
                        }, 0x1, true)) {
                        const _0x1bdb3a = getBlock(_0x1fdb2a['x'], _0x1fdb2a['y'], _0x1fdb2a['z']);
                        if (_0x1bdb3a['namespace'] != 'minecraft:air') continue;
                        const _0x4c788f = getBlock(_0x1fdb2a['x'], _0x1fdb2a['y'] - 0x1, _0x1fdb2a['z']);
                        if (_0x4c788f['namespace'] === 'minecraft:air' || _0x4c788f['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x1fdb2a['x'], _0x1fdb2a['y'], _0x1fdb2a['z'], 0x0);
                    }
                }
                if (autosave_air) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!autosave_near_block && self_item['namespace'] != 'minecraft:water_bucket') {
                    if (autosave_fake_block) callModule(0x25, '{"value":true}');
                    buildBlock(self_id, _0x4c3434['x'], _0x4c3434['y'] - max_mot_y * 3.1, _0x4c3434['z'], 0x0);
                    if (autosave_fake_block) callModule(0x25, '{"value":false}');
                }
                if (autosave_near_block) {
                    let _0x2b61dd = {};
                    let _0x2db5d3 = Infinity;
                    for (let _0x86e04c = -0x5; _0x86e04c <= 0x5; _0x86e04c++) {
                        for (let _0x5a7307 = -0x1; _0x5a7307 <= 0x0; _0x5a7307++) {
                            for (let _0x52af27 = -0x5; _0x52af27 <= 0x5; _0x52af27++) {
                                let _0x5ecf81 = Math['sqrt'](_0x86e04c * _0x86e04c + _0x52af27 * _0x52af27 + _0x5a7307 * _0x5a7307);
                                let _0x3da606 = {
                                    'x': _0x86e04c + _0x4c3434['x'],
                                    'y': _0x5a7307 + _0x4c3434['y'],
                                    'z': _0x52af27 + _0x4c3434['z']
                                };
                                const _0x1733d2 = getBlock(_0x3da606['x'], _0x3da606['y'], _0x3da606['z']);
                                if (_0x1733d2['namespace'] === 'minecraft:air') continue;
                                if (_0x5ecf81 < _0x2db5d3) {
                                    _0x2db5d3 = _0x5ecf81;
                                    _0x2b61dd = _0x3da606;
                                }
                            }
                        }
                    }
                    if (_0x2b61dd != {}) {
                        let _0x163e94 = {
                            'x': _0x4c3434['x'],
                            'y': _0x4c3434['y'] - 0x1 + _0x66499d['y'] * 0x3,
                            'z': _0x4c3434['z']
                        };
                        let _0x32c9f4 = 眉信手续续(_0x2b61dd, _0x163e94, 0.8, true);
                        _0x32c9f4['forEach'](_0x4c6c4b => {
                            const _0x5d41fb = getBlock(_0x4c6c4b['x'], _0x4c6c4b['y'], _0x4c6c4b['z']);
                            if (_0x5d41fb['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x4c6c4b['x']), Math['floor'](_0x4c6c4b['y']), Math['floor'](_0x4c6c4b['z']));
                        });
                    }
                }
            }
            if (LockBehind && target_list['length'] > 0x0) {
                let _0xa7773e = getEntityRot(target_list[0x0]);
                let _0x25f1c1 = getPos(target_list[0x0]);
                if (LockBehind_h > LockBehind_heigh) isReverse = true;
                else if (LockBehind_h < LockBehind_min_heigh) isReverse = false;
                LockBehind_h += (isReverse ? -0x1 : 0x1) * LockBehind_updown_speed / 0x14;
                const _0x35a18d = RandomLock ? 马客在船举(-0xa, 0xa) : surround_speed * 0x3;
                LockBehind_yaw = Surround ? LockBehind_yaw + _0x35a18d : _0xa7773e['yaw'];
                if (Surround && LockBehind_yaw > 0xb4) LockBehind_yaw = -0xb4;
                let _0x557d01 = 忽闻水上琵(-LockBehind_length, _0x25f1c1, {
                    'yaw': LockBehind_yaw,
                    'pitch': 0x0
                });
                if (modelist['surround_mode'] === 0x0) setPos(_0x557d01['x'], _0x25f1c1['y'] + 1.83 + LockBehind_h, _0x557d01['z']);
                if (modelist['surround_mode'] === 0x1) 二年恬然自(_0x557d01['x'], _0x25f1c1['y'] + 1.83 + LockBehind_h, _0x557d01['z']);
                _0x5ab7f6['push'](归客不发寻(0x1, 'LockBack', getEntityName(target_list[0x0]), '§r'));
            }
            if (SoundPlayer || sound_data['length'] > 0x0) {
                let _0x5c21b2 = [];
                if (surround_target) _0x5c21b2 = target_list;
                if (surround_all) _0x5c21b2 = getPlayerList();
                if (surround_all_entity) _0x5c21b2 = getEntityList();
                if (play_pos_list['length'] > 0x0) _0x5c21b2 = play_pos_list;
                let _0x5eac41 = [{
                    'sound': SoundPlayer_type,
                    'level': SoundPlayer_level
                }];
                SoundPlayer_yaw += 0x14;
                if (SoundPlayer_yaw > 0xb4) SoundPlayer_yaw = -0xb4;
                for (let _0x2f09d3 = 0x0; _0x2f09d3 < SoundPlayer_vec; _0x2f09d3++) {
                    if (sound_data['length'] > 0x0) _0x5eac41 = sound_data['shift']()['sounds'];
                    if (_0x5eac41['length'] > 0x0) {
                        _0x5ea27b: for (let _0x132677 of _0x5eac41) {
                            let _0x5ebda0 = _0x132677['sound'];
                            let _0x263c73 = _0x132677['level'];
                            if (surround_range_play) {
                                const _0x1e759f = Math['round'](SoundPlayer_range * SoundPlayer_range_space / 0x2);
                                for (let _0x5ebd3a = -_0x1e759f; _0x5ebd3a <= _0x1e759f; _0x5ebd3a += SoundPlayer_range_space) {
                                    for (let _0x48a68e = -_0x1e759f; _0x48a68e <= _0x1e759f; _0x48a68e += SoundPlayer_range_space) {
                                        sendSound(Number(_0x5ebda0), self_pos['x'] + _0x5ebd3a, self_pos['y'] + SoundPlayer_offset, self_pos['z'] + _0x48a68e, Number(_0x263c73));
                                    }
                                }
                                continue _0x5ea27b;
                            }
                            _0x5c21b2['forEach'](_0x570499 => {
                                if (typeof _0x570499 != 'string')
                                    for (let _0x3fcc22 = 0x0; _0x3fcc22 < SoundPlayer_num; _0x3fcc22++) sendSound(Number(_0x5ebda0), _0x570499['x'], _0x570499['y'] + SoundPlayer_offset, _0x570499['z'], Number(_0x263c73));
                                else {
                                    if (_0x570499 === self_id && surround_exclude_self) return;
                                    const _0x6761f3 = getPos(_0x570499);
                                    let _0xace622 = 忽闻水上琵(SoundPlayer_distance, _0x6761f3, {
                                        'yaw': SoundPlayer_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x5dc063 = 0x0; _0x5dc063 < SoundPlayer_num; _0x5dc063++) sendSound(Number(_0x5ebda0), _0xace622['x'], _0xace622['y'] + SoundPlayer_offset, _0xace622['z'], Number(_0x263c73));
                                }
                            });
                        }
                    }
                }
                if (sound_data['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, '进度', '剩余:' + sound_data['length'] + '条', '§r'));
            }
            if (surround_loop && SoundPlayer && sound_file != null && sound_data['length'] === 0x0) {
                sound_data = JSON['parse'](sound_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sound_data.length + "条音频数据', '§r');
            }
            if (_0x4e1c9a['current'] < 0x6) _0x5ab7f6['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x4e1c9a['current']) <= min_run_heal) {
                const _0x8275aa = modelist['low_health_operate_mode'];
                if (_0x8275aa === 0x2) removeEntity(self_id);
                if (_0x8275aa === 0x0 || _0x8275aa === 0x1) executeCommand(_0x8275aa === 0x0 ? '/hub' : '/again');
                if (_0x8275aa === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x443bb9['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (low_health_operate_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x8275aa === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (low_health_operate_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x8275aa === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (low_health_operate_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x8275aa === 0x6) leaveWorld();
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
            if (Breaker && autobreak) buildBlock(self_id, self_pos['x'], self_pos['y'], self_pos['z'], 0x1);
            if (Jesus) {
                const _0x36f13d = getBlock(_0x4c3434['x'], _0x4c3434['y'] - 0x1, _0x4c3434['z']);
                if (_0x36f13d['namespace'] === 'minecraft:flowing_water' || _0x36f13d['namespace'] === 'minecraft:water' || _0x36f13d['namespace'] === 'minecraft:flowing_lava' || _0x36f13d['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x66499d['x'], 0x0, _0x66499d['z']);
            }
            if (RecordInfo && !click_mode && target_list['length'] > 0x0) {
                target_list['forEach'](_0x1c44aa => {
                    let _0x38df74 = 京都声问其(_0x1c44aa);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x38df74 + '\n§r§b==============================', '§r');
                    if (save_to_file) File['write'](NoveXare_path + '/' + getEntityName(_0x1c44aa) + '_' + _0x1c44aa + '.txt', _0x38df74);
                });
            }
            if (AssistAim && AssistAim_auto) AssistAim_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !AssistAim_self && target_list['length'] > 0x0) {
                const _0x491f50 = target_list[0x0];
                const _0x1a7fe4 = 声暗问弹者(self_id, _0x491f50);
                const _0x243a8f = 声思似诉平(self_id, _0x491f50, AssistAim_Fov, 0x0);
                if (_0x1a7fe4 <= AssistAim_distance && _0x243a8f || AssistAim_throw) {
                    const _0x1be114 = 马客在船举(AssistAim_min_speed, AssistAim_max_speed);
                    let _0x4d55e1 = 弦弦掩抑声(self_id, _0x491f50, 'yaw_rot', AssistAim_predict, AssistAim_throw, AssistAim_random_xz, AssistAim_random_y);
                    let _0x39abb9 = 弦弦掩抑声(self_id, _0x491f50, 'pitch_rot', AssistAim_predict, AssistAim_throw, AssistAim_random_xz, AssistAim_random_y);
                    if (_0x4d55e1 <= 0xb4 && _0x4d55e1 >= -0xb4 && _0x39abb9 <= 0x5a && _0x39abb9 >= -0x5a) {
                        let _0x5e4dd8 = _0x4d55e1 >= 0x0 ? -_0x1be114 : _0x1be114;
                        let _0x2c1f05 = _0x39abb9 >= 0x0 ? _0x1be114 : -_0x1be114;
                        if (modelist['AssistAim_mode'] === 0x1 || modelist['AssistAim_mode'] === 0x0 && (Math['abs'](_0x4d55e1) < _0x1be114 || Math['abs'](_0x39abb9) < _0x1be114)) {
                            _0x5e4dd8 = -_0x4d55e1 / ((0x28 - _0x1be114) / 0x2);
                            _0x2c1f05 = -_0x39abb9 / ((0x28 - _0x1be114) / 1.125);
                        }
                        const _0x48e1ce = 声思似诉平(self_id, _0x491f50, AssistAim_precision * 0x2, 0x1);
                        const _0x25d9bd = 声思似诉平(self_id, _0x491f50, AssistAim_precision * 0x4, 0x2);
                        if (!_0x48e1ce) setLocalPlayerTurn(0x0, _0x5e4dd8);
                        if (!_0x25d9bd && !AssistAim_throw || !isSame(_0x39abb9, 0x0, 0x1) && AssistAim_throw) setLocalPlayerTurn(_0x2c1f05, 0x0);
                    }
                    _0x5ab7f6['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x491f50), '§r'));
                }
            }
            if (InfiniteAura && InfiniteAura_target['length'] > 0x0) {
                InfiniteAura_target['forEach'](_0xb50d18 => {
                    const _0x391288 = _0xb50d18;
                    const _0x383379 = getPos(_0x391288);
                    if (!_0x391288 || !findEntity(_0x391288)) return;
                    if (声暗问弹者(InfiniteAura_target[0x0], self_id) > InfiniteAura_distance) return;
                    if (tick === 0x0) {
                        const _0x4c39cb = InfiniteAura_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x66499d;
                        for (let _0x1d290f = 0x0; _0x1d290f < InfiniteAura_move; _0x1d290f++) {
                            if (InfiniteAura_click) {
                                buildBlock(self_id, _0x383379['x'] + _0x4c39cb, _0x383379['y'], _0x383379['z'] + _0x4c39cb, 0x1);
                                sendPlayerAuthInput({
                                    'inputMode': 0x2,
                                    'playMode': 0x0,
                                    'pos': {
                                        'x': _0x383379['x'] + _0x4c39cb,
                                        'y': _0x383379['y'] + InfiniteAura_yoffset / 0x5,
                                        'z': _0x383379['z'] + _0x4c39cb
                                    },
                                    'actions': [{
                                        'pos': {
                                            'x': _0x383379['x'] + _0x4c39cb,
                                            'y': _0x383379['y'] + InfiniteAura_yoffset / 0x5,
                                            'z': _0x383379['z'] + _0x4c39cb
                                        },
                                        'value': 0x1,
                                        'type': 0x19
                                    }],
                                    'motion': _0x66499d
                                });
                            }
                            if (modelist['InfiniteAura_mode'] === 0x0) setPos(_0x383379['x'], _0x383379['y'], _0x383379['z']);
                            if (modelist['InfiniteAura_mode'] === 0x1) 二年恬然自(_0x383379['x'], _0x383379['y'], _0x383379['z']);
                            if (modelist['InfiniteAura_mode'] === 0x2) sendPlayerAuthInput({
                                'inputMode': 0x2,
                                'playMode': 0x0,
                                'pos': {
                                    'x': _0x383379['x'] + _0x4c39cb,
                                    'y': _0x383379['y'] + InfiniteAura_yoffset / 0x5,
                                    'z': _0x383379['z'] + _0x4c39cb
                                },
                                'actions': [{
                                    'pos': {
                                        'x': _0x383379['x'] + _0x4c39cb,
                                        'y': _0x383379['y'] + InfiniteAura_yoffset / 0x5,
                                        'z': _0x383379['z'] + _0x4c39cb
                                    },
                                    'value': 0x1,
                                    'type': 0x19
                                }],
                                'motion': _0x66499d
                            });
                        }
                        if (InfiniteAura_amove) playerJump();
                        for (let _0x247cf1 = 0x0; _0x247cf1 < InfiniteAura_num; _0x247cf1++) 江头夜送客(_0x391288, AttackSwing);
                    }
                    if (tick <= -InfiniteAura_delay && InfiniteAura_for_tp) 六幺大弦嘈();
                });
                if (tick <= -InfiniteAura_delay) {
                    if (!InfiniteAura_for_tp) 六幺大弦嘈();
                    tick = InfiniteAura_tick;
                }
                if (tick > -InfiniteAura_delay) tick--;
                _0x5ab7f6['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? InfiniteAura_target['length'] + '个目标' : 添酒回灯重(InfiniteAura_target['map'](_0x13858b => getEntityName(_0x13858b))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % destroy_delay === 0x0) 初为霓裳后(_0x4c3434);
            if (AutoVoid) {
                const _0x143600 = 面转轴拨弦(self_id);
                const _0x4e0153 = getBlock(_0x143600['x'], _0x4c3434['y'] - 0x1, _0x143600['z']);
                for (let _0x2c1947 = -0x2; _0x2c1947 < 0x3; _0x2c1947++) {
                    for (let _0xfa95e0 = -0x2; _0xfa95e0 < 0x3; _0xfa95e0++) {
                        const _0x364269 = getBlock(_0x143600['x'] + _0x2c1947, _0x4c3434['y'] - 0x1, _0x143600['z'] + _0xfa95e0);
                        if (_0x364269['namespace'] === 'minecraft:air' && _0x66499d['y'] < -0.0783 && _0x66499d['y'] > -0.0785 && _0x4e0153['namespace'] != 'minecraft:air') {
                            const _0x6a7bc = -弦弦掩抑声(self_id, {
                                'x': _0x143600['x'] + _0x2c1947,
                                'y': self_pos['y'],
                                'z': _0x143600['z'] - _0xfa95e0
                            }, 'yaw_pos');
                            const _0x2d0328 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x6a7bc,
                                'pitch': 0x0
                            });
                            setMotion(_0x2d0328['x'] - self_pos['x'], _0x66499d['y'], _0x2d0328['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x4dc1ab = getEntityList();
                _0x4dc1ab['forEach'](_0x9e6b19 => {
                    if ((getEntityTypeId(_0x9e6b19) === 0x400055 || getEntityTypeId(_0x9e6b19) === 0x400056 || getEntityTypeId(_0x9e6b19) === 0xc00050) && 声暗问弹者(_0x9e6b19, self_id) <= avoid_distance) {
                        if (avoid_remove) removeEntity(_0x9e6b19);
                        if (modelist['avoid_mode'] === 0x0) {
                            const _0x4a6db1 = 弦弦掩抑声(getPos(_0x9e6b19), self_id, 'yaw_pos');
                            const _0x3a9ed3 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x4a6db1,
                                'pitch': _0x443bb9['pitch']
                            });
                            setMotion(_0x3a9ed3['x'] - self_pos['x'], _0x66499d['y'], _0x3a9ed3['z'] - self_pos['z']);
                        }
                        if (modelist['avoid_mode'] === 0x1) 江头夜送客(_0x9e6b19, AttackSwing);
                        if (modelist['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x3016d3 = getPlayerList();
                let _0x2f61f4 = [];
                let _0x346e48 = false;
                let _0x53e5c0 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x366c26 = 0x1; _0x366c26 <= throwable_particle_length; _0x366c26 += throwable_particle_density / 0xa) {
                    let _0x1b68c2 = 少小时欢乐(_0x366c26, _0x443bb9['pitch'], throwable_particle_speed, throwable_particle_gravity)['data'];
                    let _0xc221f = 忽闻水上琵(_0x366c26, self_pos, {
                        'yaw': _0x443bb9['yaw'],
                        'pitch': 0x0
                    });
                    let _0x399c60 = getBlock(_0xc221f['x'], _0xc221f['y'] + _0x1b68c2, _0xc221f['z']);
                    if (throwable_particle_target || !_0x346e48) {
                        _0x3016d3['forEach'](_0x2a5e76 => {
                            if (!_0x346e48) {
                                let _0x2131df = getPos(_0x2a5e76);
                                let _0x305f08 = {
                                    'x': _0xc221f['x'],
                                    'y': _0xc221f['y'] + _0x1b68c2,
                                    'z': _0xc221f['z']
                                };
                                let _0xeb0bb2 = getEntitySize(_0x2a5e76);
                                if (_0x305f08['x'] <= _0x2131df['x'] + _0xeb0bb2['x'] / 0x2 && _0x305f08['x'] >= _0x2131df['x'] - _0xeb0bb2['x'] / 0x2 && _0x305f08['y'] <= _0x2131df['y'] + _0xeb0bb2['y'] / 0x2 && _0x305f08['y'] >= _0x2131df['y'] - _0xeb0bb2['y'] / 0x2 && _0x305f08['z'] <= _0x2131df['z'] + _0xeb0bb2['x'] / 0x2 && _0x305f08['z'] >= _0x2131df['z'] - _0xeb0bb2['x'] / 0x2) {
                                    _0x5ab7f6['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x2a5e76), '§r'));
                                    _0x346e48 = true;
                                }
                            }
                        });
                    }
                    if (_0x399c60['namespace'] != 'minecraft:air' || _0x346e48) {
                        _0x53e5c0 = _0xc221f;
                        if (modelist['throwable_particle_mode'] === 0x1 && _0x399c60['namespace'] != 'minecraft:air') {
                            for (let _0x1583bc = 0x0; _0x1583bc <= 0x14; _0x1583bc += 0x2) 妇遂命酒使(throwable_particle_type, _0x53e5c0['x'], _0x53e5c0['y'] + _0x1b68c2 + _0x1583bc / 0xa, _0x53e5c0['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modelist['throwable_particle_mode'] === 0x0) {
                    let _0x2c183d = getDistance(_0x53e5c0, self_pos);
                    for (let _0x4afb4d = 0x1; _0x4afb4d <= _0x2c183d; _0x4afb4d += throwable_particle_density / 0xa) {
                        let _0x430145 = 少小时欢乐(_0x4afb4d, _0x443bb9['pitch'], throwable_particle_speed, throwable_particle_gravity)['data'];
                        let _0x480ef8 = (throwable_particle_offset - 0xa) / 0xa;
                        let _0x474049 = _0x443bb9['yaw'] + 0x5a;
                        if (_0x474049 > 0xb4) _0x474049 = _0x474049 - 0x168;
                        if (_0x474049 < -0xb4) _0x474049 = _0x474049 + 0x168;
                        let _0x30a63f = 忽闻水上琵(_0x480ef8, self_pos, {
                            'yaw': _0x474049,
                            'pitch': 0x0
                        });
                        let _0xb3e635 = 忽闻水上琵(_0x4afb4d, _0x30a63f, {
                            'yaw': _0x443bb9['yaw'] - Math['atan'](_0x480ef8 / _0x2c183d) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x13337c = getBlock(_0xb3e635['x'], _0xb3e635['y'] + _0x430145, _0xb3e635['z']);
                        if (modelist['throwable_particle_mode'] === 0x0 && _0x13337c['namespace'] === 'minecraft:air') 妇遂命酒使(throwable_particle_type, _0xb3e635['x'], _0xb3e635['y'] + _0x430145 + 0.5, _0xb3e635['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x44cc6a = 面转轴拨弦(self_id);
                for (let _0x2c2bf2 = -0x4; _0x2c2bf2 < 0x5; _0x2c2bf2++) {
                    for (let _0x5413a9 = -0x4; _0x5413a9 < 0x5; _0x5413a9++) {
                        const _0x2d6524 = getBlock(_0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'] - 0x1, _0x44cc6a['z'] + _0x5413a9);
                        const _0x53051f = getBlock(_0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'], _0x44cc6a['z'] + _0x5413a9);
                        if ((_0x2d6524['namespace'] === 'minecraft:dirt' || _0x2d6524['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'] - 0x1, _0x44cc6a['z'] + _0x5413a9, 0x1);
                        if (_0x2d6524['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'] - 0x1, _0x44cc6a['z'] + _0x5413a9, 0x1);
                        if (_0x53051f['aux'] === 0x7 && (_0x53051f['namespace'] === 'minecraft:beetroot' || _0x53051f['namespace'] === 'minecraft:wheat' || _0x53051f['namespace'] === 'minecraft:carrots' || _0x53051f['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'], _0x44cc6a['z'] + _0x5413a9, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x53051f['aux'] <= 0x6 && (_0x53051f['namespace'] === 'minecraft:beetroot' || _0x53051f['namespace'] === 'minecraft:wheat' || _0x53051f['namespace'] === 'minecraft:carrots' || _0x53051f['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x44cc6a['x'] + _0x2c2bf2, _0x4c3434['y'], _0x44cc6a['z'] + _0x5413a9, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!use_action_config) {
                    if (ticks % action_ticks == 0x0) {
                        for (let _0x4da978 = 0x0; _0x4da978 < action_times; _0x4da978++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x4c3434['x'],
                                'y': _0x4c3434['y'] - 0x1,
                                'z': _0x4c3434['z']
                            },
                            'type': Number(edit_action_id),
                            'value': Number(edit_action_value)
                        });
                    }
                } else {
                    const _0x58f69c = JSON['parse'](抱琵琶半遮(NoveXare_path + '/PlayerAction.json'));
                    _0x58f69c['forEach'](_0x1cf26e => {
                        if (_0x1cf26e['delay'] % action_tick === 0x0) {
                            for (let _0x526f53 = 0x0; _0x526f53 < _0x1cf26e['count']; _0x526f53++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x1cf26e['value'],
                                'type': Number(_0x1cf26e['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % auth_ticks === 0x0) {
                for (let _0x4685bb = 0x0; _0x4685bb < auth_times; _0x4685bb++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x4c3434['x'],
                        'y': _0x4c3434['y'] - 0x1,
                        'z': _0x4c3434['z']
                    },
                    'inputs': edit_auth_array['map'](_0x3424f4 => Number(_0x3424f4)),
                    'actions': [{
                        'id': self_id,
                        'pos': self_pos,
                        'type': Number(edit_auth_action_id),
                        'value': Number(edit_auth_action_value)
                    }]
                });
            }
            if (isDestroy && (destroy_list['length'] === 0x0 || current_mine_num >= mine_num)) {
                isDestroy = false;
                destroy_namespace = null;
                destroy_list = [];
                current_mine_num = 0x0;
            }
            if (AutoJump && _0x762d72) setMotion(_0x66499d['x'], jump_strength / 0x64, _0x66499d['z']);
            if (BlockClicker && !block_ac_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0xe847aa => {
                if (bc_packet) silentTP(_0xe847aa['x'], _0xe847aa['y'], _0xe847aa['z']);
                buildBlock(self_id, _0xe847aa['x'], _0xe847aa['y'], _0xe847aa['z'], 0x0);
            });
            if (NoFall && _0x66499d['y'] < -nofall_y && !_0x762d72) {
                if (modelist['nofall_mode'] === 0x0) setMotion(0x0, 0x0, 0x0);
                if (modelist['nofall_mode'] === 0x1) {
                    callModule(0x25, '{"value":true}');
                    setTimeout(() => callModule(0x25, '{"value":false}'), 0x4b);
                }
                if (modelist['nofall_mode'] === 0x2) {
                    callModule(0x1e, '{"value":true,"speed":0}');
                    setTimeout(() => callModule(0x1e, '{"value":false}'), 0x4b);
                }
                if (modelist['nofall_mode'] === 0x3) sendPlayerAction({
                    'id': self_id,
                    'pos': self_pos,
                    'value': 0x1,
                    'type': 0x7
                });
            }
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && lastTick_ground != _0x762d72 && _0x762d72)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x15dbc4 = 0x0; _0x15dbc4 < 0x168; _0x15dbc4 += do_density / 0xa) {
                    const _0x1d9c2b = do_l_axis * Math['cos'](_0x15dbc4 * Math['PI'] / 0xb4);
                    const _0x3d39de = do_s_axis * Math['sin'](_0x15dbc4 * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x1d9c2b, do_pos[0x1], do_pos[0x2] + _0x3d39de, 0x1);
                }
            }
            if (FakeLag) {
                if (lag_t >= lag_tick + lag_last_tick) {
                    fakelag_status = !reverse_lag;
                    lag_t = 0x0;
                }
                if (lag_t > lag_tick && lag_t < lag_tick + lag_last_tick) fakelag_status = reverse_lag;
                if (fakelag_show) _0x5ab7f6['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modelist['FakeLag_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modelist['FakeLag_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modelist['FakeLag_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modelist['FakeLag_mode'] === 0x3), '§r'));
            }
            if (build_list['length'] > 0x0 && build_t > build_tick && !build_success) {
                const _0x240112 = build_list['shift']();
                buildBlock(self_id, Math['round'](_0x240112['x']), Math['round'](_0x240112['y'] - 0x1), Math['round'](_0x240112['z']), 0x0);
                build_t = 0x0;
                if (build_list['length'] === 0x0) build_success = true;
            }
            if (TargetHealth && target_list['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Health', 'Health: ' + 无限事轻拢(target_list[0x0], modelist['health_mode']), '§r'));
            if (ShowTargetList && target_list['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(target_list['map'](_0x26568c => getEntityName(_0x26568c))), '§r'));
            if (ShowInfo) {
                const _0x3b9cff = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x26cd26 = Math['sqrt'](_0x66499d['x'] * _0x66499d['x'] + _0x66499d['z'] * _0x66499d['z']);
                if (show_speed) _0x5ab7f6['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x26cd26['toFixed'](0x2) + 'm/s 移动速度: ' + _0x50f51a['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x17bae6['toFixed'](0x2) + 'm/s 坐标速度:' + _0x316aef['toFixed'](0x2) + 'm/s 能力速度:' + _0x3b9cff['current']['toFixed'](0x2) + ('\n移动值: [' + _0x66499d['x']['toFixed'](0x2) + ', ' + _0x66499d['y']['toFixed'](0x2) + ', ' + _0x66499d['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x5ab7f6['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x4c3434['x'] + ', Y:' + _0x4c3434['y'] + ', Z:' + _0x4c3434['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x56ac7e = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x206858 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x5ab7f6['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x56ac7e['emerald'] + ', 钻石:' + _0x56ac7e['diamond'] + ', 金锭:' + _0x56ac7e['gold'] + ', 铁锭:' + _0x56ac7e['iron'] + '\n下界之心:' + _0x56ac7e['star'] + ', 经验:' + _0x206858, '§r'));
                }
                if (show_target_dis && target_list['length'] > 0x0) _0x5ab7f6['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, target_list[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, target_list[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x5ab7f6['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x3516a2['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + target_list['length'] + '人', '§r'));
                if (show_kill_num) _0x5ab7f6['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x5ab7f6['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x5ab7f6['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x5ab7f6['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x5ab7f6['push'](归客不发寻(0x1, 'PING', ping + 'ms', '§r'));
                if (show_self_health) _0x5ab7f6['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x4e1c9a['current'] + ', 最大值:' + _0x4e1c9a['max'] + ', 最小值:' + _0x4e1c9a['min'], '§r'));
                if (show_detail_item) _0x5ab7f6['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x1c2495 = new Date();
                    const _0x4bf4b0 = _0x1c2495['getFullYear']();
                    const _0x1a2286 = ('0' + (_0x1c2495['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x8ae046 = ('0' + _0x1c2495['getDate']())['slice'](-0x2);
                    const _0x5c5518 = ('0' + _0x1c2495['getHours']())['slice'](-0x2);
                    const _0x4e415c = ('0' + _0x1c2495['getMinutes']())['slice'](-0x2);
                    const _0x12ec92 = ('0' + _0x1c2495['getSeconds']())['slice'](-0x2);
                    const _0x3fede9 = _0x4bf4b0 + '-' + _0x1a2286 + '-' + _0x8ae046 + ' ' + _0x5c5518 + ':' + _0x4e415c + ':' + _0x12ec92;
                    _0x5ab7f6['push'](归客不发寻(0x1, 'RealTime', _0x3fede9, '§r'));
                }
            }
            if (ModifySwing && swing_speed != 0x11) setEntityEffect(self_id, {
                'id': swing_speed < 0x11 ? 0x4 : 0x3,
                'duration': 0x2,
                'amplifier': swing_speed < 0x11 ? 0x11 - swing_speed : swing_speed - 0x11,
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
            if (typeof rocker_func['angle'] !== 'undefined') {
                let _0x45f0a0 = _0x443bb9['yaw'];
                _0x45f0a0 += rocker_func['angle'] < 0x5a ? rocker_func['angle'] + 0x5a : rocker_func['angle'] - 0x10e;
                if (_0x45f0a0 >= 0xb4) _0x45f0a0 -= 0x168;
                if (_0x45f0a0 <= -0xb4) _0x45f0a0 += 0x168;
                let _0x1a7656 = (_0x762d72 ? 0.22 : 0.23) + (rocker_boost ? rocker_speed / 0x32 : 0x0);
                let _0x2c7510 = (_0x762d72 ? 0.29 : 0.3) + (rocker_boost ? rocker_speed / 0x32 : 0x0);
                let _0x22303f = {};
                if (rocker_ts && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) <= rocker_ts_lock) {
                    let _0x5ec952 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                    let _0x568046 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_rot');
                    let _0x54472f = _0x568046 > -0x5a || _0x568046 < 0x5a ? rocker_speed : -rocker_speed;
                    let _0x396fb6 = _0x45f0a0 > -0x5a || _0x45f0a0 < 0x5a ? rocker_speed : -rocker_speed;
                    let _0x35a7dd = rocker_ts_relative ? _0x54472f : _0x396fb6;
                    Angel = rocker_func['angle'] > 0x1c2 - rocker_ts_range && rocker_func['angle'] <= rocker_ts_range + 0xb4 || rocker_func['angle'] > 0xb4 - rocker_ts_range && rocker_func['angle'] <= rocker_ts_range - 0x5a ? _0x5ec952 -= _0x35a7dd * 0x5 : _0x5ec952 += _0x35a7dd * 0x5;
                    if (_0x5ec952 > 0xb4) _0x5ec952 -= 0x168;
                    if (_0x5ec952 < -0xb4) _0x5ec952 += 0x168;
                    let _0x38b741 = 忽闻水上琵(rocker_ts_distance, getPos(target_list[0x0]), {
                        'yaw': _0x5ec952,
                        'pitch': 0x0
                    });
                    let _0x1679be = 弦弦掩抑声(_0x38b741, self_id, 'yaw_pos');
                    _0x22303f = 忽闻水上琵(rocker_legalmove ? modelist['move_mode'] === 0x0 ? _0x1a7656 : _0x2c7510 : rocker_speed / 0x8, self_pos, {
                        'yaw': _0x1679be,
                        'pitch': 0x0
                    });
                } else _0x22303f = 忽闻水上琵(rocker_legalmove ? modelist['move_mode'] === 0x0 ? _0x1a7656 : _0x2c7510 : rocker_speed / 0x8, self_pos, {
                    'yaw': _0x45f0a0,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x22303f['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x22303f['z'] + self_pos['z'])
                };
                if (rocker_body && modelist['rocker_mode'] < 0x3) {
                    if (Scaffold && Scaffold_move_rot && isMoving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(Scaffold_angle, (Scaffold_length === 0x1 ? 0x0 : 0xb4) + _0x45f0a0 + Scaffold_yaw);
                    else 于穆曹二善(_0x443bb9['pitch'], _0x45f0a0 - 0xb4);
                }
                if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modelist['rocker_mode'] === 0x3) {
                    if (rocker_func['angle'] < 0x13b && rocker_func['angle'] > 0xe1 || rocker_func['angle'] > 0x2d && rocker_func['angle'] < 0x87) {
                        _0x22303f = 忽闻水上琵(rocker_speed / 0x8, self_pos, _0x443bb9);
                        setMotion(_0x22303f['x'] - self_pos['x'], _0x22303f['y'] - self_pos['y'], _0x22303f['z'] - self_pos['z']);
                    } else {
                        const _0x1cd7e2 = rocker_func['angle'] > 0x13b || rocker_func['angle'] < 0x2d;
                        const _0x2a1b17 = getCameraRotation();
                        current_roll += (_0x1cd7e2 ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (modelist['rocker_mode'] === 0x0) setMotion(_0x22303f['x'] - self_pos['x'], rocker_bhop && _0x762d72 || rocker_ahop && _0x66499d['y'] < -0.4 ? rocker_bhop_heigh : _0x66499d['y'], _0x22303f['z'] - self_pos['z']);
                if (modelist['rocker_mode'] === 0x1) setPos(_0x22303f['x'], self_pos['y'], _0x22303f['z']);
                if (direction_func['direction'] === 0x0) rocker_func = {};
            }
            if (typeof airjump_func['operation'] !== 'undefined') {
                const _0x1b418f = getEntityMotion(self_id);
                const _0x3079d9 = getCameraRotation();
                if (airjump_func['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rocker_bhop_heigh;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rocker_bhop_heigh, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x1b418f['x'], rocker_bhop_heigh, _0x1b418f['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw -= Math['sin'](_0x3079d9['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch += Math['cos'](_0x3079d9['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (airjump_func['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rocker_bhop_heigh;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rocker_bhop_heigh, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x1b418f['x'], -rocker_bhop_heigh, _0x1b418f['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw += Math['sin'](_0x3079d9['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch -= Math['cos'](_0x3079d9['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (current_yaw >= 0xb4) current_yaw -= 0x168;
                if (current_yaw <= -0xb4) current_yaw += 0x168;
                if (current_pitch > 0xb4) current_pitch = 0xb4;
                if (current_pitch < 0x0) current_pitch = 0x0;
                if (airjump_func['operation'] === 'none') airjump_func = {};
            }
            if (BalanceTimer || BalanceTimer_st) {
                _0x5ab7f6['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
                if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
                    callModule(0x1e, '{"value":false}');
                    BalanceTimer_st = false;
                }
                if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
            }
            if (ModifyTime) {
                if (custom_time === 0x19) {
                    let _0x2daa57 = 0x0;
                    if (modelist['set_time'] === 0x0) _0x2daa57 = 0x3e8;
                    if (modelist['set_time'] === 0x1) _0x2daa57 = 0x32c8;
                    if (modelist['set_time'] === 0x2) _0x2daa57 = 0x1770;
                    if (modelist['set_time'] === 0x3) _0x2daa57 = 0x30d4;
                    setWorldData({
                        'time': _0x2daa57
                    });
                } else setWorldData({
                    'time': custom_time * 0x3e8
                });
            }
            if (!BalanceTimer && BalanceTimer_t > 0x0 && BalanceTimer_st) BalanceTimer_t--;
            if (breaker_pos != null) {
                const {
                    ex,
                    ey,
                    ez
                } = breaker_pos;
                destroyBlock(self_id, ex, ey, ez, 0x0);
                人本长安倡(ex, ey, ez, destroy_authinput, destroy_playeraction);
                if (breaker_timer > breaker_delay) breaker_pos = null;
                breaker_timer++;
            }
            if (FakeTip) {
                switch (modelist['fakeTip_mode']) {
                    case 0x0:
                        showTipMessage('§bProtoHax §r| ' + _0x316aef['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x118733, _0x2981ae) => globalThis['current_poem'] = JSON['parse'](_0x2981ae)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + ping + 'ms Speed: ' + _0x316aef['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
                        break;
                    case 0x6:
                        showTipMessage('§cWelcome to use §rTianYuByte');
                        break;
                }
            }
            if (sm_circulate_t > sm_circulate_tick && !isSlowMotion) {
                isSlowMotion = true;
                sm_circulate_t = 0x0;
            }
            if (SlowMotion && isSlowMotion) {
                callModule(0x1e, '{"value":true,"speed":' + sm_speed / 0xa + '}');
                setTimeout(() => {
                    callModule(0x1e, '{"value":false,"speed":20.0}');
                    isSlowMotion = false;
                }, sm_circulate_last_tick * 0x32);
            }
            if (destroy_list['length'] > 0x0 && isDestroy) {
                for (let _0x1eb52d = 0x0; _0x1eb52d < mine_speed; _0x1eb52d++) {
                    let _0x37e27e = destroy_list['shift']();
                    if (typeof _0x37e27e != 'object' || _0x37e27e['length'] === 0x0) continue;
                    const _0x4cac1d = getBlock(_0x37e27e[0x0], _0x37e27e[0x1], _0x37e27e[0x2]);
                    if (_0x4cac1d['namespace'] != 'minecraft:air' && _0x4cac1d['namespace'] === destroy_namespace) {
                        destroyBlock(self_id, _0x37e27e[0x0], _0x37e27e[0x1], _0x37e27e[0x2], 0x0);
                        current_mine_num++;
                    }
                }
                _0x5ab7f6['push'](归客不发寻(0x1, '连锁进度', current_mine_num + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x762d72) setMotion(0x0, 0x0, 0x0);
            if (_0x5ab7f6['length'] > 0x0 && !FakeTip) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x5ab7f6['join'](',\n'));
            if (last_tick_id != self_id) last_tick_id = self_id;
            if (FakeLag) lag_t++;
            if (GodMode) gm_tick++;
            if (SlowMotion && sm_circulate && !isSlowMotion) sm_circulate_t++;
            if (FastBuild && build_list['length'] > 0x0) build_t++;
            if (ticks % rgb_cycle == 0x0) rgb_l++;
            if (rgb_l >= rgb_color['length']) rgb_l = 0x0;
            if (attack_tick > 0x14 && gradual_up) attack_sound_level = 0x0;
            if (isAttacking) {
                attack_ticks++;
                isAttacking = false;
            }
            if (isClicking) {
                click_t++;
                isClicking = false;
            }
            attack_tick++;
            if (HotbarSelector) select_t++;
            if (rpc_cycle) rpc_t++;
            if (InfiniteAura) InfiniteAura_switch_delay_r++;
            if (AutoArmor && ticks % aa_delay == 0x0) armor_slot++;
            if (FakeTip && modelist['fakeTip_mode'] === 0x1) tip_t1++;
            if (select_t > select_delay) {
                select_slot++;
                select_t = 0x0;
            }
            if (select_slot > 0x8) select_slot = 0x0;
            if (target_list['length'] > 0x0 && InfiniteAura_switch_delay === 0x0) InfiniteAura_list = target_list;
            if (InfiniteAura_switch_delay > 0x0 && InfiniteAura_switch_delay_r > InfiniteAura_switch_delay && InfiniteAura_list['length'] > 0x0) {
                InfiniteAura_target[0x0] = InfiniteAura_list['shift']();
                InfiniteAura_switch_delay_r = 0x0;
            }
            if (InfiniteAura_switch_delay === 0x0 && target_list['length'] > 0x0) InfiniteAura_target = target_list;
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
            last_tick_pos = self_pos;
            last_tick_item = self_item;
            last_tick_heal = _0x4e1c9a['current'];
            lastTick_ground = _0x762d72;
            lasttick_item_count = item_count;
        } catch (_0x411af7) {
            clientMessage(_0x411af7['stack']);
        }
    }
    setInterval(() => {
        if (Derp) {
            if (modelist['derp_mode'] === 0x0) {
                setEntityRot(self_id, derp_p_r, derp_y_r);
                setEntityBodyRot(self_id, derp_y_r);
            }
            if (modelist['derp_mode'] === 0x1) sendPlayerAuthInput({
                'inputMode': 0x2,
                'playMode': 0x0,
                'pos': self_pos,
                'motion': getEntityMotion(self_id),
                'rot': {
                    'pitch': derp_p_r,
                    'yaw': derp_y_r
                },
                'yHeadRot': derp_y_r,
                'inputs': []
            });
            if (modelist['derp_mode'] === 0x2) sendMovePlayer({
                'id': self_id,
                'pos': self_pos,
                'mode': 0x0,
                'ground': getEntityIsGround(self_id),
                'rot': {
                    'pitch': derp_p_r,
                    'yaw': derp_y_r
                },
                'yHeadRot': 0x0
            });
            derp_p_r -= random_rot ? 马客在船举(-0xa, 0xa) : head_rot_speed * 0x2;
            derp_y_r += random_rot ? 马客在船举(-0xa, 0xa) : body_rot_speed * 0x2;
            if (derp_p_r < -0x5a) derp_p_r = 0x5a;
            if (derp_y_r > 0xb4) derp_y_r = derp_y_r - 0x168;
            if (!head_rot) derp_p_r = self_rot['pitch'];
            if (!body_rot) derp_y_r = self_rot['yaw'];
            if (lock_head) derp_p_r = 0x5a;
        }
        if (Scaffold && Scaffold_move_rot && isMoving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x282fd7 = getCameraRotation();
            const _0x2edc52 = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x8ebc06 = Scaffold_move ? 弦弦掩抑声(_0x2edc52, self_id, 'yaw_pos') : _0x282fd7['yaw'] > 0x0 ? 0xb4 - _0x282fd7['yaw'] : -0xb4 - _0x282fd7['yaw'];
            于穆曹二善(Scaffold_angle, (Scaffold_length === 0x1 ? 0x0 : 0xb4) + _0x8ebc06 + Scaffold_yaw);
        }
        if (AssistAim && AssistAim_self && target_list['length'] > 0x0) {
            let _0x599093 = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
            let _0x29e651 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
            于穆曹二善(_0x599093, _0x29e651);
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

    function onExecuteCommandEvent(_0x22d136) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x22d136, '§r');
        const _0x2b8d2a = _0x22d136['split'](' ');
        if (_0x2b8d2a[0x0] === '/set' && _0x2b8d2a[0x1] === 'pos') {
            goto_pos = {
                'x': Number(_0x2b8d2a[0x2]),
                'y': Number(_0x2b8d2a[0x3]),
                'z': Number(_0x2b8d2a[0x4])
            };
            if (_0x2b8d2a[0x5]) default_speed = Number(_0x2b8d2a[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x2b8d2a[0x0] === '/set' && _0x2b8d2a[0x1] === 'default' && _0x2b8d2a[0x2] === 'config') {
            if (_0x2b8d2a[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('default_config', 'null');
                return true;
            }
            if (抱琵琶半遮(config_path + '/' + _0x2b8d2a[0x3] + '.json') != '{}') {
                setData('default_config', _0x2b8d2a[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x2b8d2a[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x2b8d2a[0x3], '§r');
            return true;
        }
        if (_0x2b8d2a[0x0] === '/target') {
            if (_0x2b8d2a[0x1] === 'self') target_list[0x0] = self_id;
            if (_0x2b8d2a[0x1] === 'player') target_list = getPlayerList();
            if (_0x2b8d2a[0x1] === 'all') target_list = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + target_list['length'] + '个目标', '§r');
            return true;
        }
        if (_0x2b8d2a[0x0] === '/cleaner') {
            if (_0x2b8d2a[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x2b8d2a[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x2b8d2a[0x2]));
        }
        if (_0x2b8d2a[0x0] === '/bind') {
            if (_0x2b8d2a[0x1] === 'RunAway') {
                if (typeof globalThis[_0x2b8d2a[0x2]] == 'undefined' && typeof RunAwayID[_0x2b8d2a[0x2]] == 'undefined' || typeof globalThis[_0x2b8d2a[0x3]] == 'undefined' && typeof RunAwayID[_0x2b8d2a[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x1f21f7 = typeof globalThis[_0x2b8d2a[0x3]] !== 'undefined';
                RunAway_binds[_0x2b8d2a[0x2]] = {
                    'module': _0x2b8d2a[0x3],
                    'isNX': _0x1f21f7
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x2b8d2a[0x2] + ' 与 ' + _0x2b8d2a[0x3] + ' 成功', '§r');
                NoveXare_Config['RunAway_binds'] = RunAway_binds;
                return true;
            }
            if (_0x2b8d2a[0x1] === 'key' && typeof globalThis[_0x2b8d2a[0x2]] !== 'undefined') {
                isBinding = _0x2b8d2a[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x2b8d2a[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x2b8d2a[0x1]] === 'undefined') bind_func[_0x2b8d2a[0x1]] = [];
            if (typeof globalThis[_0x2b8d2a[0x2]] !== 'undefined' && typeof globalThis[_0x2b8d2a[0x1]] !== 'undefined') {
                bind_func[_0x2b8d2a[0x1]]['push'](_0x2b8d2a[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x2b8d2a[0x1] + ' 与 ' + _0x2b8d2a[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x2b8d2a[0x0] === '/unbind') {
            if (_0x2b8d2a[0x1] === 'key' && typeof globalThis[_0x2b8d2a[0x2]] !== 'undefined') {
                for (let _0x4dd0af in key_bind_list) {
                    if (key_bind_list[_0x4dd0af] === _0x2b8d2a[0x2]) {
                        delete key_bind_list[_0x4dd0af];
                        break;
                    }
                }
                isBinding = _0x2b8d2a[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x2b8d2a[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x2b8d2a[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x2b8d2a[0x1]] !== 'undefined' && _0x2b8d2a[0x2] === 'all') {
                delete bind_func[_0x2b8d2a[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x2b8d2a[0x1] + ' 的所有绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (_0x2b8d2a[0x1] === 'all') {
                bind_func = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (typeof globalThis[_0x2b8d2a[0x2]] !== 'undefined' && typeof globalThis[_0x2b8d2a[0x1]] !== 'undefined') {
                bind_func[_0x2b8d2a[0x1]]['splice'](bind_func[_0x2b8d2a[0x1]]['indexOf'](_0x2b8d2a[0x2]), 0x1);
                if (bind_func[_0x2b8d2a[0x1]]['length'] === 0x0) delete bind_func[_0x2b8d2a[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x2b8d2a[0x1] + ' 和 ' + _0x2b8d2a[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x2b8d2a[0x0] === '/nx') {
            if (typeof globalThis[_0x2b8d2a[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x2b8d2a[0x1] === 'num') globalThis[_0x2b8d2a[0x2]] = Number(_0x2b8d2a[0x3]);
            if (_0x2b8d2a[0x1] === 'bool') globalThis[_0x2b8d2a[0x2]] = Boolean(_0x2b8d2a[0x3]);
            if (_0x2b8d2a[0x1] === 'str') globalThis[_0x2b8d2a[0x2]] = _0x2b8d2a[0x3];
            if (_0x2b8d2a[0x1] === 'arr') globalThis[_0x2b8d2a[0x2]] = 相近邀相见(_0x2b8d2a[0x3]);
            if (_0x2b8d2a[0x1] === 'obj') globalThis[_0x2b8d2a[0x2]] = JSON['parse'](_0x2b8d2a[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x2b8d2a[0x2]] + ' => ' + _0x2b8d2a[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x1d07ee, _0x3261ab, _0x46d862) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x1d07ee + ' §e结果:§r' + _0x46d862 + ' §e数据:§r' + JSON['stringify'](_0x3261ab, null, 0x2), '§r');
        if (!_0x46d862) return true;
    }

    function onCallModuleEvent(_0x43218a) {
        try {
            if (typeof _0x43218a !== 'undefined' && typeof _0x43218a['fun'] !== 'undefined' && typeof RunAway_binds[_0x43218a['fun']] !== 'undefined') {
                const _0x4194ad = RunAway_binds[_0x43218a['fun']]['module'];
                if (!RunAway_binds[_0x43218a['fun']]['isNX']) callModule(RunAwayID[_0x4194ad], JSON['stringify']({
                    'value': _0x43218a['value']
                }));
                else 委身为贾人(_0x4194ad, _0x43218a['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x43218a, null, 0x4), '§r');
            if (typeof _0x43218a['name'] === 'undefined') {
                if (Rocker && typeof _0x43218a['angle'] !== 'undefined') rocker_func = _0x43218a;
                if (Rocker && typeof _0x43218a['direction'] !== 'undefined') direction_func = _0x43218a;
                if (Rocker && typeof _0x43218a['operation'] !== 'undefined') airjump_func = _0x43218a;
                return;
            }
            if (_0x43218a['fun'] === 'fun_hitbox' && typeof _0x43218a['size'] !== 'undefined') temp_size = {
                'x': _0x43218a['size'],
                'y': _0x43218a['size']
            };
            if (target_list['length'] > 0x0 && _0x43218a['fun'] === 'fun_hitbox' && _0x43218a['value']) default_size = temp_size;
            if (!_0x43218a['name']['includes']('NoveXare') && _0x43218a['fun'] != 'fun_ride_flying') return;
            if (typeof _0x43218a['SauthLogin'] !== 'undefined') {
                Sauths = _0x43218a['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x43218a['CustomBanTip'] !== 'undefined') bantip = _0x43218a['CustomBanTip'];
            if (typeof _0x43218a['key'] !== 'undefined') {
                const _0x46e450 = _0x43218a['key'];
                if (_0x46e450 === 'team' || _0x46e450 === 'km_text') 开宴千呼万(_0x46e450, _0x46e450 === 'team' ? team : km_text);
                if (_0x46e450 === 'CopyItem') {
                    if (modelist['copy_mode'] === 0x0) dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id));
                    if (modelist['copy_mode'] === 0x1) {
                        for (let _0x3661ff = 0x0; _0x3661ff < 0x24; _0x3661ff++) {
                            const _0x6b3bb8 = getInventory(self_id, _0x3661ff);
                            if (_0x6b3bb8['namespace'] === 'minecraft:air') continue;
                            for (let _0xb6e056 = 0x0; _0xb6e056 < _0x6b3bb8['count']; _0xb6e056++) dropPlayerInventorySlot(self_id, _0x3661ff);
                        }
                    }
                    const _0x184f36 = getPos(self_id);
                    setTimeout(() => {
                        for (let _0x4ab286 = 0x6; _0x4ab286 <= 0xc8; _0x4ab286++) buildBlock(self_id, _0x184f36['x'], _0x184f36['y'], _0x184f36['z'], _0x4ab286);
                        showToast('物品复制成功 请退出重进');
                    }, 0x2710 + copy_random * 0x64);
                }
                if (_0x46e450 === 'ItemEditor') {
                    const _0x2ba961 = getEntityCarriedItem(self_id);
                    const _0x211011 = 司马明年秋(_0x2ba961, 'Damage:', 's');
                    const _0x52e012 = 司马明年秋(_0x2ba961, '{Damage:', '}', ',');
                    if (modelist['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x2ba961['replace']('Damage:' + _0x211011 + 's', 'Damage:' + ie_data + 's'));
                    if (modelist['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x2ba961['replace']('{Damage:' + _0x52e012, '{Damage:' + ie_data));
                    if (modelist['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x2ba961['replace']('{', '{' + (modelist['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + all_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x46e450 === 'EditBackGround') {
                    const _0x30bad0 = 'loginVideoNew.mp4';
                    const _0x1920c0 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x30bad0)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x1920c0 + _0x30bad0);
                    file_copy(getResource() + '/' + _0x30bad0, _0x1920c0 + _0x30bad0);
                    showToast('已复制文件');
                }
                if (_0x46e450 === 'content') 开宴千呼万(_0x46e450, content);
                if (_0x46e450 === 'am_text') 开宴千呼万(_0x46e450, am_text);
                if (_0x46e450 === 'BJDTp') {
                    let _0x243a75 = getPlayerList();
                    let _0xcf4bab = _0x243a75['length'] > 0x0 ? _0x243a75['map'](_0x4d350a => ({
                        'text': getEntityName(_0x4d350a) + '\n距离: ' + 声暗问弹者(self_id, _0x4d350a)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x43e8ca = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0xcf4bab
                    };
                    const _0x5c8a69 = JSON['stringify'](_0x43e8ca);
                    addForm(_0x5c8a69, function(_0x37fdeb) {
                        if (_0x243a75['length'] > 0x0 && _0x37fdeb >= 0x0) {
                            let _0xe92e84 = _0x243a75[_0x37fdeb];
                            let _0x2f5345 = getPos(_0xe92e84);
                            setPos(_0x2f5345['x'], _0x2f5345['y'] + 1.8, _0x2f5345['z']);
                            buildBlock(self_id, _0x2f5345['x'], _0x2f5345['y'], _0x2f5345['z'], 0x1);
                        }
                    });
                }
                if (_0x46e450 === 'edit_KickAura') 开宴千呼万(_0x46e450, edit_KickAura);
                if (_0x46e450 === 'particle_type') 开宴千呼万(_0x46e450, particle_type);
                if (_0x46e450 === 'line_particle_type') 开宴千呼万(_0x46e450, line_particle_type);
                if (_0x46e450 === 'attack_particle_type') 开宴千呼万(_0x46e450, attack_particle_type);
                if (_0x46e450 === 'arrow_particle_type') 开宴千呼万(_0x46e450, arrow_particle_type);
                if (_0x46e450 === 'surround_particle_type') 开宴千呼万(_0x46e450, surround_particle_type);
                if (_0x46e450 === 'throwable_particle_type') 开宴千呼万(_0x46e450, throwable_particle_type);
                if (_0x46e450 === 'attack_sound_type') 开宴千呼万(_0x46e450, attack_sound_type);
                if (_0x46e450 === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x94924f = Date['now']();
                        File['write'](config_path + '/自动保存配置 - ' + _0x94924f + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        if (AutoLoadCfg) setData('default_config', '自动保存配置 - ' + _0x94924f);
                    }
                    exit();
                    gc();
                }
                if (_0x46e450 === 'SoundPlayer_type') 开宴千呼万(_0x46e450, SoundPlayer_type);
                if (_0x46e450 === 'attack_sound_level') 开宴千呼万(_0x46e450, attack_sound_level);
                if (_0x46e450 === 'edit_action_id') 开宴千呼万(_0x46e450, edit_action_id);
                if (_0x46e450 === 'edit_action_value') 开宴千呼万(_0x46e450, edit_action_value);
                if (_0x46e450 === 'edit_auth_action_id') 开宴千呼万(_0x46e450, edit_auth_action_id);
                if (_0x46e450 === 'edit_auth_action_value') 开宴千呼万(_0x46e450, edit_auth_action_value);
                if (_0x46e450 === 'edit_auth_array') 开宴千呼万(_0x46e450, edit_auth_array);
                if (_0x46e450 === 'SoundPlayer_level') 开宴千呼万(_0x46e450, SoundPlayer_level);
                if (_0x46e450 === 'edit_suffix') 开宴千呼万(_0x46e450, edit_suffix);
                if (_0x46e450 === 'DropInv') {
                    for (let _0x1652c4 = 0x0; _0x1652c4 < 0x24; _0x1652c4++) {
                        const _0x4009d3 = getInventory(self_id, _0x1652c4);
                        if (_0x4009d3['namespace'] === 'minecraft:air') continue;
                        if (_0x4009d3['count'] < 0x1) continue;
                        for (let _0x2c24e8 = 0x0; _0x2c24e8 < _0x4009d3['count']; _0x2c24e8++) drop_list['push'](_0x1652c4);
                    }
                }
                if (_0x46e450 === 'LookTP') {
                    let _0x300a00 = {};
                    for (let _0x1847b5 = 0x0; _0x1847b5 < 0x1f4; _0x1847b5++) {
                        _0x300a00 = 忽闻水上琵(_0x1847b5, getPos(self_id), getEntityRot(self_id));
                        const _0x553dca = getBlock(_0x300a00['x'], _0x300a00['y'], _0x300a00['z']);
                        if (_0x553dca['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x300a00 != {}) {
                        const _0x295323 = getPos(self_id);
                        if (modelist['LookTP_mode'] === 0x0) 二年恬然自(_0x300a00['x'], _0x300a00['y'] + 1.53, _0x300a00['z']);
                        if (modelist['LookTP_mode'] === 0x1) setPos(_0x300a00['x'], _0x300a00['y'] + 1.53, _0x300a00['z']);
                    }
                }
                if (_0x46e450 === 'OpenChest') {
                    let _0x37df65 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x2a0d26 = [];
                    let _0x3590d4 = 0x0;
                    let _0x5684b5 = 面转轴拨弦(self_id);
                    const _0x38362b = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x2f6453 = 'shulker_box';
                    for (let _0x54cb9d = -0x7; _0x54cb9d < 0x7; _0x54cb9d++) {
                        for (let _0x25b0aa = -0x7; _0x25b0aa < 0x7; _0x25b0aa++) {
                            for (let _0x1078e6 = -0x7; _0x1078e6 < 0x7; _0x1078e6++) {
                                const _0x4ae5a7 = _0x54cb9d + _0x5684b5['x'];
                                const _0x46d24a = _0x25b0aa + _0x5684b5['y'];
                                const _0x243d8f = _0x1078e6 + _0x5684b5['z'];
                                const _0x3632a1 = getBlock(_0x4ae5a7, _0x46d24a, _0x243d8f);
                                if (_0x38362b['includes'](_0x3632a1['namespace']) || _0x3632a1['namespace']['includes'](_0x2f6453)) {
                                    const _0x5bb557 = getBlock(_0x4ae5a7, _0x46d24a + 0x1, _0x243d8f);
                                    _0x37df65['buttons'][_0x3590d4] = {
                                        'text': '命名空间: ' + _0x3632a1['namespace'] + '\n坐标:   ' + (_0x5bb557['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x2a0d26[_0x3590d4] = {
                                        'x': _0x4ae5a7,
                                        'y': _0x46d24a,
                                        'z': _0x243d8f
                                    };
                                    _0x3590d4++;
                                }
                            }
                        }
                    }
                    if (_0x3590d4 === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x37df65), function(_0x5b48c5) {
                        var _0xe98b62 = _0x2a0d26[_0x5b48c5];
                        buildBlock(self_id, _0xe98b62['x'], _0xe98b62['y'], _0xe98b62['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x46e450 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x46e450 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x46e450 === 'rpc_repeat') {
                    for (let _0x13d6a5 = 0x0; _0x13d6a5 < rpc_repeat_times; _0x13d6a5++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                }
                if (_0x46e450 === 'keyword') 开宴千呼万(_0x46e450, keyword);
                if (_0x46e450 === 'tip_keyword') 开宴千呼万(_0x46e450, tip_keyword);
                if (_0x46e450 === 'send_keyword') 开宴千呼万(_0x46e450, send_keyword);
                if (_0x46e450 === 'AttackSelf_one') 江头夜送客(self_id, AttackSwing);
                if (_0x46e450 === 'RemoveSelf') removeEntity(self_id);
                if (_0x46e450 === 'QuitGame') leaveWorld();
                if (_0x46e450 === 'chat_keyword') 开宴千呼万(_0x46e450, chat_keyword);
                if (_0x46e450 === 'receive_keyword') 开宴千呼万(_0x46e450, receive_keyword);
                if (_0x46e450 === 'keyword2') 开宴千呼万(_0x46e450, keyword2);
                if (_0x46e450 === 'delete_sauth') setData('sauths', '');
                if (_0x46e450 === 'dc_delete') dc_pos = [];
                if (_0x46e450 === 'select_hotbar_items') 开宴千呼万('selectitems', selectitems);
                if (_0x46e450 === 'select_hotbar_slots') 开宴千呼万('select_hotbar_slots', select_hotbar_slots);
                if (_0x46e450 === 'send_keyword2') 开宴千呼万(_0x46e450, send_keyword2);
                if (_0x46e450 === 'receive_keyword2') 开宴千呼万(_0x46e450, receive_keyword2);
                if (_0x46e450 === 'entity_keyword') 开宴千呼万(_0x46e450, entity_keyword);
                if (_0x46e450 === 'ie_data') 开宴千呼万(_0x46e450, ie_data);
                if (_0x46e450 === 'mine_white') 开宴千呼万(_0x46e450, mine_white);
                if (_0x46e450 === 'cs_white') 开宴千呼万(_0x46e450, cs_white);
                if (_0x46e450 === 'mine_black') 开宴千呼万(_0x46e450, mine_black);
                if (_0x46e450 === 'cs_black') 开宴千呼万(_0x46e450, cs_black);
                if (_0x46e450 === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x1cb35e, _0x3c7216, _0x408d9a, _0x3fe88d) {
                        var _0x30e722 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0x202eff = 0x0;
                        var _0x10c069 = getResource();
                        var _0x59a4ba = JSON['parse'](File['read'](_0x10c069 + '/ui/ui_definition.json'))['ui']['map'](_0x4060da => ({
                            'name': _0x4060da + '.json',
                            'path': _0x10c069 + '/ui/' + _0x4060da + '.json'
                        }));
                        for (var _0x64e0d5 of _0x59a4ba) {
                            if (!_0x64e0d5['name']['includes']('NoveXare')) continue;
                            var _0x4c5a46 = JSON['parse'](File['read'](_0x64e0d5['path']));
                            if (typeof _0x4c5a46['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x1238d8 of _0x4c5a46['items'][0x0]['items']) {
                                if (typeof _0x1238d8['name'] === 'undefined' || typeof _0x1238d8['key'] === 'undefined') continue;
                                if (_0x408d9a && _0x1238d8['type'] != 'Switch') continue;
                                if (_0x3fe88d && _0x1238d8['type'] == 'Switch') continue;
                                if (!_0x3c7216 && (_0x1238d8['name'] === _0x1cb35e || _0x1238d8['key'] === _0x1cb35e) || _0x3c7216 && (_0x1238d8['name']['includes'](_0x1cb35e) || _0x1238d8['key']['includes'](_0x1cb35e))) {
                                    _0x30e722['items'][0x0]['items'][_0x202eff] = _0x1238d8;
                                    _0x202eff++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x1cb35e, JSON['stringify'](_0x30e722));
                    });
                }
                if (_0x46e450 === 'delete_PlayPos') play_pos_list = [];
                if (_0x46e450 === 'addPlayPos') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0x169a8f) {
                        var _0x1b3ad5 = _0x169a8f['split'](',');
                        play_pos_list['push']({
                            'x': Number(_0x1b3ad5[0x0]),
                            'y': Number(_0x1b3ad5[0x1]),
                            'z': Number(_0x1b3ad5[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + play_pos_list['length'] + '组坐标', '§r');
                    });
                }
                if (_0x46e450 === 'load_sound') {
                    const _0x34862f = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x34862f, function(_0x53ca31) {
                        var _0x3d66fa = File['read'](_0x53ca31);
                        if (_0x3d66fa != '' && SoundPlayer) {
                            sound_data = JSON['parse'](_0x3d66fa);
                            sound_file = surround_loop ? _0x3d66fa : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x46e450 === 'select_sound') {
                    const _0x412f4f = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x48239b = file_list(getResource() + '/sounds/NoveXare');
                    _0x48239b['sort']((_0x3e3437, _0x246ed4) => _0x3e3437['name']['localeCompare'](_0x246ed4['name']));
                    for (let _0x141cd1 = 0x0; _0x141cd1 < _0x48239b['length']; _0x141cd1++) {
                        _0x412f4f['buttons'][_0x141cd1] = {
                            'text': _0x48239b[_0x141cd1]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x1edc9f = JSON['stringify'](_0x412f4f);
                    addForm(_0x1edc9f, function(_0x16d557) {
                        if (_0x48239b['length'] > 0x0 && _0x16d557 >= 0x0) {
                            const _0x1aa7ed = File['read'](_0x48239b[_0x16d557]['path']);
                            if (_0x1aa7ed != '' && SoundPlayer) {
                                sound_data = JSON['parse'](_0x1aa7ed);
                                sound_file = surround_loop ? _0x1aa7ed : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x46e450 === 'save_config') {
                    const _0x1008ec = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](NoveXare_Config)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x1008ec, function(_0x25c204, _0xdd6092) {
                        File['write'](config_path + '/' + _0x25c204 + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0xdd6092) NoveXare_Config = {
                            'binds': {},
                            'key_binds': [],
                            'RunAway_binds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x46e450 === 'load_config') {
                    const _0x3ea257 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x1222d2 = file_list(config_path);
                    _0x1222d2['sort']((_0x3230ca, _0x2a3af5) => _0x3230ca['name']['localeCompare'](_0x2a3af5['name']));
                    for (let _0x44c5d8 = 0x0; _0x44c5d8 < _0x1222d2['length']; _0x44c5d8++) {
                        _0x3ea257['buttons'][_0x44c5d8] = {
                            'text': '§e' + _0x1222d2[_0x44c5d8]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x583a76 = JSON['stringify'](_0x3ea257);
                    addForm(_0x583a76, function(_0x3ac49d) {
                        if (_0x1222d2['length'] > 0x0 && _0x3ac49d >= 0x0) {
                            var _0x5f1edd = JSON['parse'](抱琵琶半遮(_0x1222d2[_0x3ac49d]['path']));
                            var _0x411ee6 = 0x0;
                            bind_func = _0x5f1edd['binds'];
                            key_bind_list = _0x5f1edd['key_binds'];
                            RunAway_binds = _0x5f1edd['RunAway_binds'];
                            for (var _0x14f639 in _0x5f1edd) {
                                _0x411ee6++;
                                if (_0x14f639['includes']('_mode') && _0x43218a['index'] && _0x43218a['index'] > 0x0) modelist[_0x14f639] = _0x5f1edd[_0x14f639];
                                if (_0x14f639 != 'RunAway_binds' && _0x14f639 != 'key_binds' && _0x14f639 != 'binds' && _0x14f639 != 'name') 委身为贾人(_0x14f639, _0x5f1edd[_0x14f639]);
                            }
                            NoveXare_Config = _0x5f1edd;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x5f1edd['name'] + '的配置，共' + _0x411ee6 + '条配置', '§r');
                        }
                    });
                }
                if (_0x46e450 === 'rpc_select') {
                    const _0x4cb9e1 = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0xdcd9ae = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x9b6f6e = 0x0; _0x9b6f6e < _0xdcd9ae['length']; _0x9b6f6e++) {
                        _0x4cb9e1['buttons'][_0x9b6f6e] = {
                            'text': (_0xdcd9ae[_0x9b6f6e]['type'] === 'Send' ? '§a' : '§c') + _0xdcd9ae[_0x9b6f6e]['packet_str']
                        };
                    }
                    const _0x53ec2b = JSON['stringify'](_0x4cb9e1);
                    addForm(_0x53ec2b, function(_0x3e5c94) {
                        last_PyRpc = {
                            'id': _0xdcd9ae[_0x3e5c94]['id'],
                            'data': _0xdcd9ae[_0x3e5c94]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x46e450 === 'add_range_whitelist') {
                    let _0x10094e = getPlayerList();
                    let _0x1ae64b = 0x0;
                    for (let _0x42f0b6 of _0x10094e) {
                        const _0x237ea3 = getPos(_0x42f0b6);
                        const _0x9754eb = getDistance(_0x237ea3, getPos(self_id));
                        if (!white_list['includes'](_0x42f0b6) && _0x9754eb < whilelist_range && _0x42f0b6 != self_id) {
                            white_list['push'](_0x42f0b6);
                            _0x1ae64b++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0x1ae64b + '个玩家到白名单', '§r');
                }
                if (_0x46e450 === 'KickSelf')
                    for (let _0x16ac51 = 0x0; _0x16ac51 < 0x3e8; _0x16ac51++) 江头夜送客(self_id, AttackSwing);
                if (_0x46e450 === 'delete_ac') ac_pos = [];
                if (_0x46e450 === 'cm_depart') departCamera();
                if (_0x46e450 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x46e450 === 'cm_reset') resetCamera();
                if (_0x46e450 === 'cm_lock') lockCamera();
                if (_0x46e450 === 'recover') other_user = null;
                if (_0x46e450 === 'delete_chest') ca_chest_pos = [];
                if (_0x46e450 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x46e450 === 'fm_place') fm_pos = self_pos;
                if (_0x46e450 === 'regex' || _0x46e450 === 'white_list') 开宴千呼万(_0x46e450, _0x46e450 === 'regex' ? regex : white_list);
                if (_0x46e450 === 'add_whitelist' || _0x46e450 === 'add_target' || _0x46e450 === 'add_target') 茫茫江浸月(_0x46e450 === 'add_whitelist' ? 'white_list' : 'target_list', 0x1);
                if (_0x46e450 === 'fw_target' || _0x46e450 === 'fc_target') 茫茫江浸月(_0x46e450 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x46e450 === 'cf_target') 茫茫江浸月('cf_target', 0x0);
                if (_0x46e450 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x46e450 === 'surround_particle_add') surround_particle_type = Number(surround_particle_type) + 0x1;
                if (_0x46e450 === 'remove_white_list') white_list = [];
                if (_0x46e450 === 'DumpList') File['write'](NoveXare_path + '/List.json', JSON['stringify']({
                    'targets': target_list['map'](_0x4b5203 => ({
                        'name': getEntityName(_0x4b5203),
                        'id': _0x4b5203,
                        'namespace': getEntityNamespace(_0x4b5203)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x1d0314 => ({
                        'name': getEntityName(_0x1d0314),
                        'id': _0x1d0314,
                        'namespace': getEntityNamespace(_0x1d0314)
                    }))
                }));
                if (_0x46e450 === 'DumpWorldInfo') File['write'](NoveXare_path + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x46e450 === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(NoveXare_path + '/WorldInfo.json')));
                if (_0x46e450 === 'Rusher') {
                    const _0x2a13cf = getCameraRotation();
                    let _0xb45a25 = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x2a13cf['yaw'] > 0x0 ? 0xb4 - _0x2a13cf['yaw'] : -0xb4 - _0x2a13cf['yaw'],
                        'pitch': -_0x2a13cf['pitch']
                    });
                    setMotion(_0xb45a25['x'] - self_pos['x'], _0xb45a25['y'] - self_pos['y'], _0xb45a25['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x2e6f91 in _0x43218a) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x2e6f91)) continue;
                if (typeof _0x43218a['index'] !== 'undefined') {
                    modelist[_0x2e6f91] = _0x43218a['index'] - 0x1;
                    NoveXare_Config[_0x2e6f91] = _0x43218a['index'] - 0x1;
                    归客不发寻(0x0, _0x2e6f91['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x43218a[_0x2e6f91], '§r');
                    if (_0x2e6f91 === 'tip_mode' && modelist['tip_mode'] === 0x1) {
                        callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x2e6f91 === 'Criticals') {
                    if (_0x43218a[_0x2e6f91]) playerJump();
                    else {
                        Criticals_status = false;
                        callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
                    }
                }
                if (_0x2e6f91 === 'KickAura') {
                    if (KickAura_multi) callModule(0x23, '{"value":' + b2s(_0x43218a[_0x2e6f91]) + ',"count":' + KickAura_times + '}');
                }
                if (_0x2e6f91 === 'RandomArrayList' && !_0x43218a[_0x2e6f91]) {
                    for (let _0x448253 = 0x0; _0x448253 < ral_num; _0x448253++) addCustomArrayList('RandomArrayList' + _0x448253, '', '', false);
                }
                if (_0x2e6f91 === 'Rocker') callModule(0x39, '{"value":' + b2s(modelist['move_mode'] === 0x1 && _0x43218a[_0x2e6f91]) + ',"fov":150}');
                if (_0x2e6f91 === 'NewTouchControl') {
                    let _0x48f30b = _0x43218a[_0x2e6f91];
                    setBooleanOption(0xd, {
                        'value': _0x48f30b
                    });
                    if (_0x48f30b && typeof modelist['new_ctrl_mode'] !== 'undefined') {
                        setEnumOption(0x4, {
                            'currentValue': modelist['new_ctrl_mode']
                        });
                    }
                    if (isInGame()) showToast('需要进入设置后返回才能生效');
                }
                if (_0x2e6f91 === 'FakeMove') {
                    if (_0x43218a[_0x2e6f91]) fakemove_pos = getPos(self_id);
                    else if (!_0x43218a[_0x2e6f91]) 欲语迟移船(fakemove_pos['x'], fakemove_pos['y'], fakemove_pos['z']);
                    let _0x1a1431 = {
                        'enable': !_0x43218a[_0x2e6f91],
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
                    callModule(0x7, JSON['stringify'](_0x1a1431));
                    setTimeout(() => 欲语迟移船(fakemove_pos['x'] + 0xf, fakemove_pos['y'] + 0xf, fakemove_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x2e6f91 === 'Crasher' && Crasher_multi) callModule(0x23, '{"value":' + b2s(_0x43218a[_0x2e6f91]) + ',"count":' + Crasher_times + '}');
                if (_0x2e6f91 === 'ShowNowTime' && !_0x43218a[_0x2e6f91]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0x2e6f91 === 'RandomFunc') {
                    const _0x11ba25 = Object['keys'](globalThis);
                    let _0x37e9bd = [];
                    for (let _0x5da107 of _0x11ba25) {
                        if (typeof globalThis[_0x5da107] === 'boolean') _0x37e9bd['push'](_0x5da107);
                    }
                    const _0x255810 = _0x37e9bd[马客在船举(0x0, _0x37e9bd['length'] - 0x1)];
                    委身为贾人(_0x255810, _0x43218a[_0x2e6f91]);
                }
                if (_0x2e6f91 === 'InfiniteAura' && InfiniteAura_repeat) callModule(0x23, '{"value":' + b2s(_0x43218a[_0x2e6f91]) + ',"count":' + InfiniteAura_packet + '}');
                if (_0x2e6f91 === 'FlashBack') sb();
                if (_0x2e6f91 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x43218a[_0x2e6f91]) + '}');
                if (_0x2e6f91 === 'PyRpcManager' && rpc_store && !_0x43218a[_0x2e6f91]) {
                    rpc_temp['forEach'](_0xc2a797 => sendRpc(_0xc2a797['id'], _0xc2a797['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x2e6f91 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x43218a[_0x2e6f91],
                    'defaultValue': false
                });
                if (_0x2e6f91 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x43218a[_0x2e6f91],
                    'defaultValue': false
                });
                if (_0x2e6f91 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x43218a[_0x2e6f91],
                    'defaultValue': false
                });
                if (_0x2e6f91 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x43218a[_0x2e6f91],
                    'defaultValue': false
                });
                if (_0x2e6f91 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x43218a[_0x2e6f91],
                    'defaultValue': false
                });
                if (_0x2e6f91 === 'FreeCam') {
                    let _0xe16e5f = {
                        'value': _0x43218a[_0x2e6f91],
                        'noclip': _0x43218a[_0x2e6f91],
                        'flying': _0x43218a[_0x2e6f91]
                    };
                    callModule(0x1, JSON['stringify'](_0xe16e5f));
                    if (_0x43218a[_0x2e6f91]) freecam_pos = getPos(self_id);
                    else setPos(freecam_pos['x'], freecam_pos['y'], freecam_pos['z']);
                }
                if (_0x2e6f91 === 'FakeMotion' && fm_auto && _0x43218a[_0x2e6f91]) fm_pos = getPos(self_id);
                if (_0x2e6f91 === 'ShadowBoomer' && _0x43218a[_0x2e6f91]) sb_pos = getPos(self_id);
                if (_0x2e6f91 === 'AvoidAttack' && _0x43218a[_0x2e6f91]) AvoidAttack_pos = getPos(self_id);
                else if (_0x2e6f91 === 'AvoidAttack' && !_0x43218a[_0x2e6f91]) setPos(AvoidAttack_pos['x'], AvoidAttack_pos['y'], AvoidAttack_pos['z']);
                if (_0x2e6f91 === 'NoClip') {
                    let _0x59d546 = {
                        'value': _0x43218a[_0x2e6f91],
                        'noclip': _0x43218a[_0x2e6f91],
                        'flying': _0x43218a[_0x2e6f91]
                    };
                    if (enable_bypass) callModule(0x9, '{"depart":' + b2s(_0x43218a[_0x2e6f91]) + '}');
                    if (enable_disabler) callModule(0x2c, '{"no_move_check":' + b2s(_0x43218a[_0x2e6f91]) + ',"no_fall_check":' + b2s(_0x43218a[_0x2e6f91]) + ',"value":' + b2s(_0x43218a[_0x2e6f91]) + '}');
                    callModule(0x1, JSON['stringify'](_0x59d546));
                    if (enable_blink) record_blink_pos = getPos(self_id);
                    else record_blink_pos = {};
                }
                if (_0x2e6f91 === 'BalanceTimer') {
                    callModule(0x25, '{"value":' + _0x43218a[_0x2e6f91] + '}');
                    BalanceTimer_st = !_0x43218a[_0x2e6f91];
                }
                if (_0x2e6f91 === 'IQBoost') {
                    const _0x101821 = File['read'](NoveXare_path + '/iQBoost.txt')['split']('\n');
                    let _0x5e8279 = 马客在船举(0x0, _0x101821['length'] - 0x1);
                    sendChatMessage('!' + _0x101821[_0x5e8279]);
                }
                if (_0x2e6f91 === 'AutoTarget' && !_0x43218a[_0x2e6f91]) target_list = [];
                if (_0x2e6f91 === 'SoundPlayer' && !_0x43218a[_0x2e6f91]) sound_data = [];
                if (_0x2e6f91 === 'FightBot' && !_0x43218a[_0x2e6f91]) {
                    if (FightBot_KillAura) KillAura = false;
                    if (FightBot_aimbot) AssistAim = false;
                    if (FightBot_KeepDistance) KeepDistance = false;
                    if (FightBot_Scaffold) Scaffold = false;
                }
                if (_0x2e6f91 === 'ShowSendPacket' && !_0x43218a[_0x2e6f91] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x4365dd = '';
                    for (let _0x52877c in PacketTmp['send']) _0x4365dd += '名称:' + _0x52877c + '，ID:' + PacketTmp['send'][_0x52877c]['id'] + '，发送数量:' + PacketTmp['send'][_0x52877c]['count'] + '\n';
                    if (save_SendPacket) File['write'](NoveXare_path + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x4365dd, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x2e6f91 === 'ShowReceivePacket' && !_0x43218a[_0x2e6f91] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x45b87b = '';
                    for (let _0x491471 in PacketTmp['receive']) _0x45b87b += '名称:' + _0x491471 + '，ID:' + PacketTmp['receive'][_0x491471]['id'] + '，接受数量:' + PacketTmp['receive'][_0x491471]['count'] + '\n';
                    if (save_ReceivePacket) File['write'](NoveXare_path + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x45b87b, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x2e6f91 === 'Scaffold' && keep_y && _0x43218a[_0x2e6f91]) rec_y = 0x0;
                if (_0x2e6f91 === 'Scaffold' && !_0x43218a[_0x2e6f91]) createText(0x1, 0x1, ' ', false, 'Scaffold_info');
                if (_0x2e6f91 === 'TargetHud' && !_0x43218a[_0x2e6f91]) createText(0x1, 0x1, ' ', false, 'TargetHud');
                if (_0x2e6f91 === 'surround_loop' && !_0x43218a[_0x2e6f91]) sound_file = null;
                if (_0x2e6f91 === 'NoLiquid' && _0x43218a[_0x2e6f91]) {
                    record_water = getEntityAttribute(self_id, 0x2);
                    record_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x2e6f91 === 'NoLiquid' && !_0x43218a[_0x2e6f91]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', record_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', record_lava);
                }
                if (typeof _0x43218a[_0x2e6f91] === 'boolean' || typeof _0x43218a[_0x2e6f91] === 'number') {
                    if (target_list['length'] > 0x0) {
                        if (_0x2e6f91 === 'HitBox_x') temp_size['x'] = _0x43218a[_0x2e6f91];
                        if (_0x2e6f91 === 'HitBox_y') temp_size['y'] = _0x43218a[_0x2e6f91];
                    }
                    if (target_list['length'] > 0x0 && _0x2e6f91 === 'HitBox' && _0x43218a[_0x2e6f91]) default_size = temp_size;
                    if (typeof _0x43218a[_0x2e6f91] === 'boolean') {
                        委身为贾人(_0x2e6f91, _0x43218a[_0x2e6f91]);
                        return;
                    }
                    NoveXare_Config[_0x2e6f91] = _0x43218a[_0x2e6f91];
                    globalThis[_0x2e6f91] = _0x43218a[_0x2e6f91];
                }
            }
        } catch (_0xcc3f26) {
            clientMessage(_0xcc3f26['stack']);
        }
    }

    function onPlayerAttackEvent(_0x3dad2b, _0x38c2fc) {
        if (SoundManager && sm_attack) playSound(NoveXare_path + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x38c2fc;
        if (SlowMotion && sm_onhit && !isSlowMotion) isSlowMotion = true;
        if (FakeTip && modelist['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x38c2fc));
        if (FakeTip && modelist['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x38c2fc));
        if (FakeTip && modelist['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x38c2fc));
        if (FakeTip && modelist['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x38c2fc));
        if (TargetEdit) {
            if (first_target === null) first_target = _0x38c2fc;
            else {
                if (te_all) getEntityList()['forEach'](_0x1f78d2 => {
                    if (_0x1f78d2 != first_target) 弦切切如私(_0x1f78d2, first_target, te_two);
                });
                else 弦切切如私(_0x38c2fc, first_target, te_two);
                first_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x38c2fc);
            else startRidingEntity(_0x38c2fc);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (first_entity === null) first_entity = _0x38c2fc;
            else {
                setEntityNBT(_0x38c2fc, getEntityNBT(first_target));
                first_entity = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x38c2fc));
        if (!attack_list['includes'](_0x38c2fc)) attack_list['push'](_0x38c2fc);
        if (_0x38c2fc === null || attack_list['every'](_0x5ced35 => last_attack_target['includes'](_0x5ced35))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x38c2fc;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            other_user = _0x38c2fc;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            anchor_target = _0x38c2fc;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x38c2fc), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x57b5c4 = getPos(_0x38c2fc);
            const _0x1e3595 = getEntitySize(_0x38c2fc);
            for (let _0xd30916 = 0x0; _0xd30916 < 马客在船举(attack_particle_size, attack_particle_size + 0x14); _0xd30916++) 妇遂命酒使(attack_particle_type, _0x57b5c4['x'] + 马客在船举(-_0x1e3595['x'] * 马客在船举(0x7, 0xa), _0x1e3595['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x57b5c4['y'] + 马客在船举(-_0x1e3595['y'] * 0x9, _0x1e3595['y'] * 0x2) / 0xa, _0x57b5c4['z'] + 马客在船举(-_0x1e3595['x'] * 马客在船举(0x7, 0xa), _0x1e3595['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(attack_sound_type), Number(attack_sound_level));
            if (gradual_up) attack_sound_level = Number(attack_sound_level) + 0x1;
            if (gradual_up) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x6f201d = 声暗问弹者(self_id, _0x38c2fc);
            callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"max_distance":' + _0x6f201d * 1.01 + '}');
            setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
        }
        if (RecordInfo && click_mode) {
            let _0x1faf95 = 京都声问其(_0x38c2fc);
            归客不发寻(0x0, 'Info', '\n' + _0x1faf95 + '\n§r§b==============================', '§r');
            if (save_to_file) File['write'](NoveXare_path + '/' + getEntityName(_0x38c2fc) + '_' + _0x38c2fc + '.txt', _0x1faf95);
            return true;
        }
        if (SmartWeapon) {
            let _0x365ccc = [];
            for (let _0x4a00c2 = 0x0; _0x4a00c2 < 0x9; _0x4a00c2++) _0x365ccc['push']({
                'slot': _0x4a00c2,
                'd': 十六言命曰(self_id, _0x4a00c2)
            });
            _0x365ccc['sort']((_0x76c0ba, _0x36e15a) => _0x36e15a['d'] - _0x76c0ba['d']);
            let _0x46c413 = _0x365ccc[0x0];
            if (_0x46c413['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x46c413['slot']);
        }
        if (ClickTarget) {
            if (!target_list['includes'](_0x38c2fc)) target_list['push'](_0x38c2fc);
            else target_list['splice'](target_list['indexOf'](_0x38c2fc), 0x1);
            归客不发寻(0x0, !target_list['includes'](_0x38c2fc) ? 'delTarget' : 'addTarget', getEntityName(_0x38c2fc), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x4732e5 = getPos(_0x38c2fc);
            const _0x37ce6d = 弦弦掩抑声(self_pos, _0x4732e5, 'yaw_pos');
            const _0x5c0c69 = 忽闻水上琵(-CustomKB_x / 0x2, self_pos, {
                'yaw': _0x37ce6d,
                'pitch': 0x0
            });
            setEntityMotion(_0x38c2fc, _0x5c0c69['x'] - self_pos['x'], CustomKB_y, _0x5c0c69['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!white_list['includes'](_0x38c2fc)) white_list['push'](_0x38c2fc);
            else white_list['splice'](white_list['indexOf'](_0x38c2fc), 0x1);
            归客不发寻(0x0, !white_list['includes'](_0x38c2fc) ? 'delTarget' : 'addTarget', getEntityName(_0x38c2fc), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || team === 'NoveXare')) {
            team = 唤始出来犹(getEntityName(_0x38c2fc));
            归客不发寻(0x0, 'setTeam', team, '§r');
            return true;
        }
        if (TargetHud && modelist['th_select_mode'] == 0x1) th_target = _0x38c2fc;
        if (KillAura) return 马客在船举(0x0, 0x64) < KillAura_empty;
    }

    function onSendChatMessageEvent(_0x4914b9) {
        if (_0x4914b9 === '') return true;
        if (BypassMute) {
            if (modelist['bm_mode'] === 0x0) executeCommand('me ' + _0x4914b9);
            if (modelist['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x4914b9);
            if (modelist['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x4914b9);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cf_target + '> ' + _0x4914b9);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x4914b9);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x4914b9);
            return true;
        }
        if (ChatSuffix && !_0x4914b9['includes'](edit_suffix)) {
            sendChatMessage(_0x4914b9 + edit_suffix);
            return true;
        }
    }

    function onClientMessageEvent(_0x230d1f, _0x1f1256) {
        if (ChatManager && (_0x230d1f != getEntityName(self_id) && cm_other || _0x230d1f == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x4502f7 = 0x0; _0x4502f7 < cm_repeat_times; _0x4502f7++) sendChatMessage(_0x1f1256);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x230d1f + ', 消息:' + _0x1f1256, '§r');
        if (ChatManager) return chat_keyword['some'](_0x187095 => _0x1f1256['includes'](_0x187095));
        if (ChatManager && _0x1f1256['length'] > cm_intercept_length) return;
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x1680b6) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x116270 = getEntityMotion(_0x1680b6);
            const _0x526a1c = getCameraRotation();
            const _0x32b8d6 = 酒欲饮无管(_0x116270, self_pos, 0x14);
            const _0x2873d1 = 忽闻水上琵(longjump_x / 0x4, self_pos, {
                'yaw': _0x526a1c['yaw'] > 0x0 ? 0xb4 - _0x526a1c['yaw'] : -0xb4 - _0x526a1c['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x2873d1['x'] - self_pos['x'], longjump_y, _0x2873d1['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x95bcdc, _0x164d5b) {
        if (PyRpcManager && packet_receive) {
            const _0x28fe74 = new Uint8Array(_0x164d5b);
            const _0x2cfe0b = Array['from'](_0x28fe74, _0x81db9e => _0x81db9e['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x459f3f = 左迁九江郡(_0x164d5b)['toLowerCase']();
            let _0x36e77d = false;
            let _0x23433e = tip_keyword['some'](_0x5226e2 => _0x459f3f['includes'](_0x5226e2));
            if (!_0x36e77d) _0x36e77d = keyword['some'](_0x353fba => _0x459f3f['includes'](_0x353fba));
            if (!_0x36e77d) _0x36e77d = receive_keyword['some'](_0x4a969b => _0x459f3f['includes'](_0x4a969b));
            if (keyword2['some'](_0x5c8532 => _0x459f3f['includes'](_0x5c8532))) _0x36e77d = false;
            if (receive_keyword2['some'](_0x258bcb => _0x459f3f['includes'](_0x258bcb))) _0x36e77d = false;
            if (packet_record && (_0x23433e && neglect_exclude || !_0x23433e)) {
                const _0x509f39 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x432fcf = JSON['parse'](抱琵琶半遮(_0x509f39));
                _0x432fcf[_0x432fcf['length']] = {
                    'packet_hex': _0x2cfe0b,
                    'packet_format': 嘈如急雨小(_0x2cfe0b),
                    'packet_str': 左迁九江郡(_0x164d5b),
                    'packet_bin': _0x28fe74,
                    'time': Date['now'](),
                    'id': _0x95bcdc,
                    'type': 'Receive',
                    'keyword': receive_keyword,
                    'global_keyword': keyword,
                    'intercept': _0x36e77d
                };
                File['write'](_0x509f39, JSON['stringify'](_0x432fcf, null, 0x4));
            }
            let _0x3e72fd = 'Null';
            if (modelist['pyrpc_mode'] === 0x0) _0x3e72fd = 左迁九江郡(_0x164d5b);
            if (modelist['pyrpc_mode'] === 0x1) _0x3e72fd = _0x2cfe0b;
            if (modelist['pyrpc_mode'] === 0x2) _0x3e72fd = 嘈如急雨小(_0x2cfe0b);
            if (modelist['pyrpc_mode'] === 0x3) _0x3e72fd = JSON['stringify'](_0x164d5b);
            const _0x627b29 = _0x36e77d ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (packet_tip && !_0x23433e && (show_no_intercept && !_0x36e77d || show_intercept && _0x36e77d)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (show_pyrpc_id ? 'ID: ' + _0x95bcdc + '\n' : '') + _0x3e72fd + _0x627b29, '§r');
            return _0x36e77d;
        }
    }

    function onPyRpcSendEvent(_0x584952, _0x1f1ee7) {
        if (PyRpcManager && packet_send) {
            const _0x3675d0 = new Uint8Array(_0x1f1ee7);
            const _0xab7852 = Array['from'](_0x3675d0, _0x556a1c => _0x556a1c['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x40758b = 左迁九江郡(_0x1f1ee7)['toLowerCase']();
            let _0xbb12b = false;
            let _0x28a754 = tip_keyword['some'](_0x368476 => _0x40758b['includes'](_0x368476));
            if (!_0xbb12b) _0xbb12b = keyword['some'](_0x355426 => _0x40758b['includes'](_0x355426));
            if (!_0xbb12b) _0xbb12b = send_keyword['some'](_0xdb1884 => _0x40758b['includes'](_0xdb1884));
            if (keyword2['some'](_0x29c7fb => _0x40758b['includes'](_0x29c7fb))) _0xbb12b = true;
            if (send_keyword2['some'](_0x57bd78 => _0x40758b['includes'](_0x57bd78))) _0xbb12b = false;
            if (!_0x28a754) last_PyRpc = {
                'id': _0x584952,
                'data': _0x3675d0
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x584952,
                'data': _0x3675d0
            });
            if (rpc_intercept) _0xbb12b = true;
            if (packet_record && (_0x28a754 && neglect_exclude || !_0x28a754)) {
                const _0x2f79df = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x51f138 = JSON['parse'](抱琵琶半遮(_0x2f79df));
                _0x51f138[_0x51f138['length']] = {
                    'packet_hex': _0xab7852,
                    'packet_format': 嘈如急雨小(_0xab7852),
                    'packet_str': 左迁九江郡(_0x1f1ee7),
                    'packet_bin': _0x3675d0,
                    'time': Date['now'](),
                    'id': _0x584952,
                    'type': 'Send',
                    'keyword': send_keyword,
                    'global_keyword': keyword,
                    'intercept': _0xbb12b
                };
                File['write'](_0x2f79df, JSON['stringify'](_0x51f138, null, 0x4));
            }
            let _0x300e93 = 'Null';
            if (modelist['pyrpc_mode'] === 0x0) _0x300e93 = 左迁九江郡(_0x1f1ee7);
            if (modelist['pyrpc_mode'] === 0x1) _0x300e93 = _0xab7852;
            if (modelist['pyrpc_mode'] === 0x2) _0x300e93 = 嘈如急雨小(_0xab7852);
            if (modelist['pyrpc_mode'] === 0x3) _0x300e93 = JSON['stringify'](_0x1f1ee7);
            for (let _0x60c58 of rpc_config) {
                if (typeof _0x60c58 === 'object') {
                    if (_0x60c58['match_mode'] === 0x0 && _0x300e93['includes'](_0x60c58['packet'])) _0x300e93 = remarks;
                    if (_0x60c58['match_mode'] === 0x1 && _0x300e93['includes'] === _0x60c58['packet']) _0x300e93 = remarks;
                } else continue;
            }
            let _0x2ca01a = _0xbb12b ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (packet_tip && !_0x28a754 && (show_no_intercept && !_0xbb12b || show_intercept && _0xbb12b)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (show_pyrpc_id ? 'ID: ' + _0x584952 + '\n' : '') + _0x300e93 + _0x2ca01a, '§r');
            return _0xbb12b;
        }
    }

    function onEntityBehaviorEvent(_0x3c2abf, _0x2e0d2a, _0x393c40) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x3c2abf + ' 实体昵称:' + getEntityName(_0x3c2abf) + ' 行为ID:' + _0x2e0d2a + ' 行为数据:' + _0x393c40, '§r');
        if (_0x2e0d2a === 0x27 && _0x3c2abf === Arrow_id) Arrow_id = null;
        if (_0x2e0d2a === 0x3 && attack_list['includes'](_0x3c2abf)) {
            if (SlowMotion && sm_onkill && !isSlowMotion) isSlowMotion = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x3cc10e = 0x0; _0x3cc10e < 0x32; _0x3cc10e++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x3c2abf) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x3c2abf), '§r');
            if (SoundManager && sm_kill) playSound(NoveXare_path + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(NoveXare_path + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(kill_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x2e0d2a === 0x2 && AvoidInvalid) AttackSwing = attack_list['includes'](_0x3c2abf);
        if (_0x2e0d2a === 0x2 && attack_list['includes'](_0x3c2abf)) real_attack++;
        if (FightBack && fb_ishurt && (modelist['fb_mode'] == 0x0 || _0x2e0d2a === 0x4 && _0x3c2abf != self_id)) {
            let _0x50a0e9 = modelist['fb_mode'] == 0x0 ? target_list[0x0] : _0x3c2abf;
            if (声暗问弹者(_0x50a0e9, self_id) < fb_range) 江头夜送客(_0x3c2abf, AttackSwing);
            fb_ishurt = false;
        }
        if (_0x2e0d2a === 0x2 && _0x3c2abf === self_id) {
            let _0x4ca545 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(NoveXare_path + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !isSlowMotion) isSlowMotion = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x393c40, '§r');
            if (HurtJump) setMotion(_0x4ca545['x'], hj_height, _0x4ca545['z']);
            if (AntiKB) {
                let _0x264a0f = AntiKB_resistance_h / 0x64;
                let _0x74d0d5 = AntiKB_resistance_v / 0x64;
                setMotion(_0x4ca545['x'] - _0x264a0f * _0x4ca545['x'], _0x4ca545['y'] - _0x74d0d5 * _0x4ca545['y'], _0x4ca545['z'] - _0x264a0f * _0x4ca545['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x393c40 == 0x2) fb_ishurt = true;
        }
        if (_0x2e0d2a === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x3731d2, _0x5d3979, _0x42e988, _0xcff40b, _0xffdc7c) {
        const _0x6081c6 = getCarried(_0x3731d2);
        const _0x4762c0 = getBlock(_0x5d3979, _0x42e988, _0xcff40b);
        if (_0x4762c0['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(NoveXare_path + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x4762c0['namespace'] + ', §rID:' + _0x4762c0['id'] + ', 方块选择面:' + _0xffdc7c + ', §r特殊值:' + _0x4762c0['aux'] + '\n手持:' + _0x6081c6['name'] + '-[' + _0x6081c6['namespace'] + '], 特殊值:' + _0x6081c6['aux'] + '\n坐标:[' + _0x5d3979 + ', ' + _0x42e988 + ', ' + _0xcff40b + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x5d3979 + ' ' + _0x42e988 + ' ' + _0xcff40b + '的' + _0x4762c0['namespace']);
        if (Miner && (_0x4762c0['namespace'] === destroy_namespace || !isDestroy)) {
            if (!isDestroy && current_mine_num < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x23761a => _0x4762c0['namespace']['includes'](_0x23761a))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x1a3e0b => !_0x4762c0['namespace']['includes'](_0x1a3e0b)))) {
                isDestroy = true;
                destroy_namespace = _0x4762c0['namespace'];
            }
            if (isDestroy && destroy_namespace != _0x4762c0['namespace'] && current_mine_num < mine_num && destroy_list['length'] > 0x0) destroy_namespace = _0x4762c0['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x5d3979,
                    'y': _0x42e988,
                    'z': _0xcff40b
                }) <= mine_distance && isDestroy) {
                let _0x2f2d31 = [
                    [_0x5d3979 + 0x1, _0x42e988, _0xcff40b],
                    [_0x5d3979 - 0x1, _0x42e988, _0xcff40b],
                    [_0x5d3979, _0x42e988, _0xcff40b + 0x1],
                    [_0x5d3979, _0x42e988, _0xcff40b - 0x1],
                    [_0x5d3979, _0x42e988 + 0x1, _0xcff40b],
                    [_0x5d3979, _0x42e988 - 0x1, _0xcff40b]
                ];
                for (p of _0x2f2d31) {
                    const _0x58a1bf = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x58a1bf['namespace'] != 'minecraft:air' && _0x4762c0['namespace'] === destroy_namespace) destroy_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0xd672cb = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0xd672cb['levelName'] + ' ，难度:' + _0xd672cb['difficulty'] + ' 游戏模式:' + _0xd672cb['gameType'] + ' 游戏时间:' + _0xd672cb['time'] + ' 随机刻速度:' + _0xd672cb['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0xb5e324, _0x2b7352, _0x172c6b, _0x187648, _0x4f8cc7) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(NoveXare_path + '/sounds/build.mp3');
        const _0x5e806e = getCarried(_0xb5e324);
        const _0x2a1805 = getBlock(_0x2b7352, _0x172c6b, _0x187648);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x5e806e['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x2a1805['namespace'] + ', §rID:' + _0x2a1805['id'] + ', 方块选择面:' + _0x4f8cc7 + ', §r特殊值:' + _0x2a1805['aux'] + '\n手持:' + _0x5e806e['name'] + '-[' + _0x5e806e['namespace'] + '], 特殊值:' + _0x5e806e['aux'] + '\n坐标:[' + _0x2b7352 + ', ' + _0x172c6b + ', ' + _0x187648 + ']', '§r');
        if (ClickTP) 欲语迟移船(_0x2b7352, _0x172c6b + 0x2, _0x187648);
        const _0x3b1c06 = ChestAura && ca_rot && _0x2a1805['namespace'] === 'minecraft:chest' || Scaffold && Scaffold_click_rot && self_item['isBlock'] && !getEntityIsGround(_0xb5e324) || ClickRot;
        if (_0x3b1c06) {
            let _0x446618 = {
                'x': _0x2b7352,
                'y': _0x172c6b,
                'z': _0x187648
            };
            const _0x65fe56 = 酒欲饮无管(getEntityMotion(_0xb5e324), getPos(_0xb5e324), 0x14);
            let _0x540c3c = 弦弦掩抑声(_0x65fe56, _0x446618, 'pitch_pos');
            let _0x3d883e = 弦弦掩抑声(_0x65fe56, _0x446618, 'yaw_pos');
            于穆曹二善(_0x540c3c, _0x3d883e);
        }
        if (GetCommand && _0x2a1805['namespace']['includes']('command_block')) {
            let _0xf09022 = getBlockEntityNBT(_0x2b7352, _0x172c6b, _0x187648);
            let _0x1e7238 = 琵琶行浔阳(_0xf09022, 'Command:"', '",Cu');
            let _0x48d88c = 琵琶行浔阳(_0xf09022, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0xe1a178 = 琵琶行浔阳(_0xf09022, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0x2b7352 + ' ' + _0x172c6b + ' ' + _0x187648 + '] 指令:' + _0x1e7238 + ' 是否自动:' + _0x48d88c + ' 执行延迟:' + _0xe1a178, '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (first_pos === null) first_pos = [_0x2b7352, _0x172c6b, _0x187648];
            else {
                setBlockEntityData(_0x2b7352, _0x172c6b, _0x187648, getBlockEntityData(first_pos[0x0], first_pos[0x1], first_pos[0x2]));
                first_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x57b314 = [
                [_0x2b7352, _0x172c6b - 0x1, _0x187648],
                [_0x2b7352, _0x172c6b + 0x1, _0x187648],
                [_0x2b7352, _0x172c6b, _0x187648 - 0x1],
                [_0x2b7352, _0x172c6b, _0x187648 + 0x1],
                [_0x2b7352 - 0x1, _0x172c6b, _0x187648],
                [_0x2b7352 + 0x1, _0x172c6b, _0x187648]
            ];
            setBlock(_0x57b314[_0x4f8cc7][0x0], _0x57b314[_0x4f8cc7][0x1], _0x57b314[_0x4f8cc7][0x2], _0x5e806e['namespace'], _0x5e806e['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x2b7352, _0x172c6b, _0x187648, _0x5e806e['namespace'], _0x5e806e['aux']);
        if ((InvCleaner || SmartInv) && _0x2a1805['namespace'] === 'minecraft:chest') isOpenChest = true;
        if (ClickDestroy && !AutoDestroy) 初为霓裳后({
            'x': _0x2b7352,
            'y': _0x172c6b,
            'z': _0x187648
        });
        if (AutoBed && _0x2a1805['namespace'] === 'minecraft:bed' && !isBedbuild) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x3acc9f = [
                [_0x2b7352 + 0x1, _0x172c6b, _0x187648],
                [_0x2b7352 - 0x1, _0x172c6b, _0x187648],
                [_0x2b7352, _0x172c6b, _0x187648 + 0x1],
                [_0x2b7352, _0x172c6b, _0x187648 - 0x1],
                [_0x2b7352, _0x172c6b + 0x1, _0x187648]
            ];
            isBedbuild = true;
            for (let _0x232c5e of _0x3acc9f) {
                const _0x129a5d = getBlock(_0x232c5e[0x0], _0x232c5e[0x1], _0x232c5e[0x2]);
                if (_0x129a5d['namespace'] === 'minecraft:air') 事今漂沦憔(_0x232c5e[0x0], _0x232c5e[0x1], _0x232c5e[0x2]);
            }
            isBedbuild = false;
        }
        if (Breaker && (_0x5e806e['namespace']['includes']('sword') || _0x5e806e['namespace']['includes']('pickaxe'))) {
            if (destroy_call) {
                callModule(0xf, '{"value":true}');
                setTimeout(() => callModule(0xf, '{"value":false}'), breaker_delay * 0x32);
                return true;
            }
            const _0x539f0b = Math['round'](breaker_range);
            _0x407e3d: for (let _0x25a286 = -_0x539f0b; _0x25a286 <= _0x539f0b; _0x25a286++) {
                for (let _0x976714 = -_0x539f0b; _0x976714 < _0x539f0b; _0x976714++) {
                    for (let _0x50bf19 = -_0x539f0b; _0x50bf19 <= _0x539f0b; _0x50bf19++) {
                        let _0x2d1850 = _0x2b7352 + _0x25a286;
                        let _0xec4931 = _0x172c6b + _0x976714;
                        let _0x597ffa = _0x187648 + _0x50bf19;
                        let _0x177bff = getBlock(_0x2d1850, _0xec4931, _0x597ffa);
                        if (break_bed && _0x177bff['namespace'] === 'minecraft:bed' || break_chest && _0x177bff['namespace'] === 'minecraft:chest') {
                            let _0x1f35c7 = getBlock(_0x2d1850, _0xec4931 + 0x1, _0x597ffa);
                            if (_0x1f35c7['namespace'] != 'minecraft:air' && destroy_up) _0xec4931 += 0x1;
                            if (breaker_auto && _0x1f35c7['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0xb5e324, 枫叶荻花秋(_0xb5e324, '_pickaxe'));
                            if (breaker_auto && _0x1f35c7['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0xb5e324, 枫叶荻花秋(_0xb5e324, '_axe'));
                            breaker_pos = {
                                'ex': _0x2d1850,
                                'ey': _0xec4931,
                                'ez': _0x597ffa
                            };
                            breaker_timer = 0x0;
                            break _0x407e3d;
                        }
                    }
                }
            }
        }
        if (block_ac_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x2b7352,
                'y': _0x172c6b,
                'z': _0x187648
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0x2b7352 + ', ' + _0x172c6b + ', ' + _0x187648 + ']', '§r');
            return true;
        }
        if (FastBuild && build_list['length'] === 0x0 && build_success) {
            const _0x527981 = getCameraRotation();
            for (let _0xdc8e7a = 0x0; _0xdc8e7a < build_distance + 0x1; _0xdc8e7a++) build_list['push'](忽闻水上琵(_0xdc8e7a, 面转轴拨弦(_0xb5e324), {
                'pitch': 0x0,
                'yaw': _0x527981['yaw'] > 0x0 ? 0xb4 - _0x527981['yaw'] : -0xb4 - _0x527981['yaw']
            }));
            build_success = false;
            return true;
        }
        if (ca_check && _0x2a1805['namespace'] === 'minecraft:chest') open_chest['click'] = true;
    }

    function onKeyboardDownEvent(_0x2e39bb) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x2e39bb, '§r');
        if (key_bind_list['length'] > 0x0 && typeof key_bind_list[_0x2e39bb] !== 'undefined') 委身为贾人(key_bind_list[_0x2e39bb], !globalThis[key_bind_list[_0x2e39bb]]);
        if (isBinding != null && _0x2e39bb != 0x42) {
            key_bind_list[_0x2e39bb] = isBinding;
            NoveXare_Config['key_binds'] = key_bind_list;
            归客不发寻(0x0, 'Tip', '绑定 ' + isBinding + ' 与键值 ' + _0x2e39bb, '§r');
            isBinding = null;
        }
    }

    function onKeyboardUpEvent(_0x520ad8) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x520ad8, '§r');
    }

    function onSendServerPacketEvent(_0x56c6dc, _0x2a3c50) {
        if (NoClip && enable_blink && (_0x56c6dc === 0x13 || _0x56c6dc === 0x90) && Object['keys'](record_blink_pos)['length'] > 0x0) {
            if (getDistance(record_blink_pos, self_pos) > nc_dist) record_blink_pos = self_pos;
            else return true;
        }
        if (FakeLag && modelist['FakeLag_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modelist['FakeLag_mode'] === 0x1 && fakelag_status && _0x56c6dc === 0x13) return true;
        if (FreeCam && modelist['freecam_mode'] === 0x1 && _0x56c6dc === 0x13) return true;
        if (FreeCam && modelist['freecam_mode'] === 0x2 && _0x56c6dc === 0xa1) return true;
        if (FreeCam && modelist['freecam_mode'] === 0x3 && _0x56c6dc === 0x90) return true;
        if (FreeCam && modelist['freecam_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x96da52 = PacketTranslate[PacketTranslate['map'](_0x37b1c7 => _0x37b1c7['id'])['indexOf'](_0x56c6dc)]['text'];
            if (statistics_SendPacket) {
                if (typeof PacketTmp['send'][_0x2a3c50] === 'undefined') PacketTmp['send'][_0x2a3c50] = {
                    'id': _0x56c6dc,
                    'Translate': _0x96da52,
                    'count': 0x1
                };
                PacketTmp['send'][_0x2a3c50]['count']++;
            }
            const _0x4f32d8 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x33ed3b = [];
            if (show_SendID) _0x33ed3b['push'](_0x56c6dc);
            if (show_SendName) _0x33ed3b['push'](_0x2a3c50);
            if (show_SendTranslate) _0x33ed3b['push'](_0x96da52);
            let _0xea8d95 = intercept_SendPacket && (intercept['includes'](_0x56c6dc) || intercept['includes'](_0x2a3c50));
            if (!ignore_SendPacket || !(ignore['includes'](_0x56c6dc) || ignore['includes'](_0x2a3c50))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x33ed3b['join'](' - ') + (_0xea8d95 ? '\n§e已拦截数据包' : ''), '§r');
            return _0xea8d95;
        }
    }

    function onReceiveServerPacketEvent(_0x101d52, _0x4557de) {
        if (ShadowBoomer && _0x101d52 == 0x19 && sb_hide) return true;
        if (KillAura_auto_close && KillAura && _0x101d52 == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x101d52 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x101d52 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x101d52 === 0x9) return true;
        if (ModifyTime && _0x101d52 === 0xa) return true;
        if (ca_check && _0x101d52 === 0x2f) open_chest['packet'] = true;
        if (FakeLag && modelist['FakeLag_mode'] === 0x2 && fakelag_status && _0x101d52 === 0x13) return true;
        if (FakeLag && modelist['FakeLag_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modelist['freecam_mode'] === 0x4 && _0x101d52 === 0x12) return true;
        if (NoCamShake && _0x101d52 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x2a1d35 = PacketTranslate[PacketTranslate['map'](_0x5cf85f => _0x5cf85f['id'])['indexOf'](_0x101d52)]['text'];
            if (statistics_ReceivePacket) {
                if (typeof PacketTmp['receive'][_0x4557de] === 'undefined') PacketTmp['receive'][_0x4557de] = {
                    'id': _0x101d52,
                    'Translate': _0x2a1d35,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x4557de]['count']++;
            }
            const _0x742e00 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x124d79 = [];
            if (show_ReceiveID) _0x124d79['push'](_0x101d52);
            if (show_ReceiveName) _0x124d79['push'](_0x4557de);
            if (show_ReceiveTranslate) _0x124d79['push'](_0x2a1d35);
            let _0x4ecb3e = intercept_ReceivePacket && (intercept['includes'](_0x101d52) || intercept['includes'](_0x4557de));
            if (!ignore_ReceivePacket || !(ignore['includes'](_0x101d52) || ignore['includes'](_0x4557de))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x124d79['join'](' - ') + (_0x4ecb3e ? '\n§e已拦截数据包' : ''), '§r');
            return _0x4ecb3e;
        }
        return (modelist['Crasher_mode'] === 0x5 || modelist['Crasher_mode'] === 0x4) && _0x101d52 === 0x9;
    }

    function onTouchMotionDownEvent(_0x15edfa, _0x1f3edc, _0x195cb1) {
        if (SafeAttack) {
            const _0x57b397 = 0x0 + (0x1 - SafeAttack_screen) / 0x2 * screen['deviceWidth'];
            const _0x3c95b4 = screen['deviceWidth'] - (0x1 - SafeAttack_screen) / 0x2 * screen['deviceWidth'];
            const _0x2f5b62 = 0x0 + (0x1 - SafeAttack_screen) / 0x2 * screen['deviceHeight'];
            const _0x34bf44 = screen['deviceHeight'] - (0x1 - SafeAttack_screen) / 0x2 * screen['deviceHeight'];
            if (target_list['length'] > 0x0 && 声思似诉平(self_id, target_list[0x0], SafeAttack_fov, 0x0) && 声暗问弹者(self_id, target_list[0x0]) < SafeAttack_dis && _0x1f3edc > _0x57b397 && _0x1f3edc < _0x3c95b4 && _0x195cb1 > _0x2f5b62 && _0x195cb1 < _0x34bf44) 江头夜送客(target_list[0x0], AttackSwing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0xaa6bd2, _0x2ac5ae) {
        const _0x554926 = 音铮铮然有(_0x2ac5ae);
        if (InvCleaner && modelist['cleaner_mode'] >= 0x2 && typeof clear_config[_0x554926['namespace']] !== 'undefined' && modelist['cleaner_mode'] == 0x2 || typeof clear_config[_0x554926['namespace']] == 'undefined' && modelist['cleaner_mode'] == 0x3) return true;
        if (ChestSteal && (_0x554926['attackDamage'] >= cs_min_damage || _0x554926['attackDamage'] === 0x1) && (_0x554926['damage'] === 0x0 || _0x554926['damage'] >= cs_min_lasting) && _0xaa6bd2 >= cs_min && _0xaa6bd2 <= cs_max && (cs_white['length'] === 0x0 || cs_white['every'](_0x29915b => !_0x554926['namespace']['includes'](_0x29915b))) && (cs_black['length'] === 0x0 || cs_black['some'](_0x2bf148 => _0x554926['namespace']['includes'](_0x2bf148)))) return true;
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0xaa6bd2 + '\n§e物品NBT数据: §r' + _0x2ac5ae, '§r');
    }

    function onPlayerAuthInputEvent(_0x3bbb1a) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x3bbb1a.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x3bbb1a.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x3bbb1a['pos']['x']['toFixed'](0x2) + ', ' + _0x3bbb1a['pos']['y']['toFixed'](0x2) + ',' + _0x3bbb1a['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x3bbb1a['delta']['x']['toFixed'](0x2) + ', ' + _0x3bbb1a['delta']['y']['toFixed'](0x2) + ', ' + _0x3bbb1a['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x3bbb1a['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x3bbb1a['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x3bbb1a['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x3bbb1a['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x3bbb1a['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x168acb) {
        if (DumpRequestSauth) {
            File['write'](NoveXare_path + '/SauthRequest.json', _0x168acb);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !use_hook_sauth) {
            let _0x2ce4e5 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x59eeb7 = _0x168acb['replace'](琵琶行浔阳(_0x168acb, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x2ce4e5)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x59eeb7['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x4d6c53) {
        if (DumpResponseSauth) {
            File['write'](NoveXare_path + '/SauthResponse.json', _0x4d6c53);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x2d006f) {
        if (DumpCookieSauth) {
            File['write'](NoveXare_path + '/SauthCookie.json', _0x2d006f);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && use_hook_sauth) {
            showToast('已拦截替换Sauth');
            let _0x5dc99b = JSON['parse'](Sauths);
            if (typeof _0x5dc99b['sauth_json'] !== 'undefined') _0x5dc99b = _0x5dc99b['sauth_json'];
            return _0x5dc99b;
        }
    }
    if (default_config != '{}') {
        let list = JSON['parse'](default_config);
        let num = 0x0;
        bind_func = list['binds'];
        key_bind_list = list['key_binds'];
        RunAway_binds = list['RunAway_binds'];
        for (let key in list) {
            num++;
            if (key['includes']('_mode')) modelist[key] = list[key];
            if (key != 'RunAway_binds' && key != 'key_binds' && key != 'binds' && key != 'name') 委身为贾人(key, list[key]);
        }
        NoveXare_Config = list;
        归客不发寻(0x0, 'Tip', '成功加载' + list['name'] + '的配置，共' + num + '条配置', '§r');
    }
    归客不发寻(0x0, 'Tip', '§aNoveXare Load Successful!', '§a');
    归客不发寻(0x0, 'Tip', 'You Are Use ' + current_ui['name'] + ' To Play NX', '§b');
} catch (e) {
    clientMessage(`§c${e}`);
}