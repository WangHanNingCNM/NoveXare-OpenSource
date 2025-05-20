/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 09  00: 20: 10
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b09§f002010§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const createShadow = (_0x1be18a, _0x361604, _0x65956c) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x1be18a,
            'y': _0x361604,
            'z': _0x65956c
        },
        'type': 0x11
    });
    const getPos = _0x5f3b30 => {
        let _0x1e6a69 = getEntityPos(_0x5f3b30);
        if (_0x1e6a69) _0x1e6a69['y'] += getPos_offset;
        return _0x1e6a69 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentTP = (_0x1d04cc, _0x237ee0, _0x46e3ca) => sendPlayerAuthInput({
        'inputMode': 0x2,
        'playMode': 0x0,
        'pos': {
            'x': _0x1d04cc,
            'y': _0x237ee0,
            'z': _0x46e3ca
        }
    });
    const 左迁九江郡 = _0x27864d => {
        const _0x33788e = new Uint8Array(_0x27864d);
        let _0x37d810 = '';
        for (let _0x1a9699 = 0x0; _0x1a9699 < _0x33788e['length'];) {
            let _0x259160 = _0x33788e[_0x1a9699++];
            if (_0x259160 <= 0x7f) _0x37d810 += String['fromCharCode'](_0x259160);
            else if (_0x259160 >> 0x5 === 0x6) {
                let _0x1f20ec = _0x33788e[_0x1a9699++];
                _0x37d810 += String['fromCharCode']((_0x259160 & 0x1f) << 0x6 | _0x1f20ec & 0x3f);
            } else if (_0x259160 >> 0x4 === 0xe) {
                let _0x3a62bc = _0x33788e[_0x1a9699++];
                let _0x5c7ab0 = _0x33788e[_0x1a9699++];
                _0x37d810 += String['fromCharCode']((_0x259160 & 0xf) << 0xc | (_0x3a62bc & 0x3f) << 0x6 | _0x5c7ab0 & 0x3f);
            } else if (_0x259160 >> 0x3 === 0x1e) {
                let _0x4ee7ed = _0x33788e[_0x1a9699++];
                let _0x9a5336 = _0x33788e[_0x1a9699++];
                let _0x59f69d = _0x33788e[_0x1a9699++];
                let _0x79dfdf = (_0x259160 & 0x7) << 0x12 | (_0x4ee7ed & 0x3f) << 0xc | (_0x9a5336 & 0x3f) << 0x6 | _0x59f69d & 0x3f;
                _0x37d810 += String['fromCodePoint'](_0x79dfdf);
            }
        }
        return _0x37d810;
    };
    const createText = (_0x563fb2, _0x47bb65, _0x3fd115, _0x5f1933, _0x17b3a8) => addCustomArrayList(_0x17b3a8, ' ' ['repeat'](_0x563fb2), '\n' ['repeat'](_0x47bb65) + ' ' + _0x3fd115, _0x5f1933);
    const 司马明年秋 = (_0x1c1909, _0x3fe54c, _0x21b1af, _0x101ad3) => {
        let _0x456756 = _0x1c1909['indexOf'](_0x3fe54c) + _0x3fe54c['length'];
        let _0x45f9df = _0x1c1909['indexOf'](_0x21b1af, _0x456756);
        if (typeof _0x101ad3 !== 'undefined' && _0x1c1909['indexOf'](_0x101ad3, _0x456756) < _0x45f9df && _0x1c1909['indexOf'](_0x101ad3, _0x456756) != -0x1) _0x45f9df = _0x1c1909['indexOf'](_0x101ad3, _0x456756);
        if (_0x456756 === -0x1 || _0x45f9df === -0x1) return null;
        return _0x1c1909['substring'](_0x456756, _0x45f9df);
    };
    const 送客湓浦口 = _0x161104 => {
        let _0x3030ec = _0x161104['split']('');
        let _0x168f98 = '';
        let _0x4f275c = '4c6e2a3b195d' ['split']('');
        for (let _0x5a8595 in _0x3030ec) _0x168f98 += '§' + _0x4f275c[_0x5a8595 % _0x4f275c['length']] + _0x3030ec[_0x5a8595];
        return _0x168f98;
    };
    const 闻舟中夜弹 = _0x7f49d => {
        if (_0x7f49d['startsWith']('0x')) _0x7f49d = _0x7f49d['slice'](0x2);
        const _0x3996ab = [];
        for (let _0x206aac = 0x0; _0x206aac < _0x7f49d['length']; _0x206aac += 0x2) {
            const _0x2c249a = parseInt(_0x7f49d['slice'](_0x206aac, _0x206aac + 0x2), 0x10);
            _0x3996ab['push'](_0x2c249a);
        }
        return new Uint8Array(_0x3996ab);
    };
    const 琵琶者听其 = (_0x2115fa, _0x5bb8da, _0x103f53 = 0x0) => {
        if (_0x103f53 == 0x1) sendRpc(_0x2115fa, 闻舟中夜弹(_0x5bb8da));
        if (_0x103f53 == 0x2) sendRpc(_0x2115fa, _0x5bb8da);
        if (_0x103f53 == 0x3) {
            const _0xb9dd72 = new Uint8Array(str['length']);
            for (let _0x2f09cf = 0x0; _0x2f09cf < str['length']; _0x2f09cf++) _0xb9dd72[_0x2f09cf] = str['charCodeAt'](_0x2f09cf);
            sendRpc(_0x2115fa, _0xb9dd72);
        }
    };
    const 音铮铮然有 = _0x1dcc39 => {
        if (item_nbt_library[_0x1dcc39] !== undefined) return item_nbt_library[_0x1dcc39];
        const _0x4661fb = 司马明年秋(_0x1dcc39, ',Name:"', '",WasPickedUp');
        if (_0x4661fb === '' || typeof _0x4661fb !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x54ce7e = Number(司马明年秋(_0x1dcc39, ',aux:', ','));
        const _0x33b80e = Number(司马明年秋(_0x1dcc39, 'Count:', 'b,D'));
        const _0x2662c7 = _0x1dcc39['includes'](',name:"') ? 司马明年秋(_0x1dcc39, ',name:"', '",') : _0x4661fb['replace']('minecraft:', '');
        const _0x3f7171 = _0x1dcc39['includes'](',netId:') ? Number(司马明年秋(_0x1dcc39, ',netId:', '}')) : 0x0;
        const _0x2a488a = _0x1dcc39['includes']('maxDamage') ? Number(司马明年秋(_0x1dcc39, ',maxDamage:', ',')) : 0x0;
        const _0x3f41c8 = _0x1dcc39['includes']('attackDamage') ? Number(司马明年秋(_0x1dcc39, 'attackDamage:', ',')) : 0x1;
        const _0x5bebb8 = _0x1dcc39['includes']('customColor') ? 司马明年秋(_0x1dcc39, 'customColor:', '}', ',') : '';
        const _0x151cb3 = _0x1dcc39['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x1dcc39, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x28cb57 = _0x1dcc39['startsWith']('{Block:');
        const _0x3e3aef = {
            'name': _0x2662c7,
            'namespace': _0x4661fb,
            'aux': _0x54ce7e,
            'damage': _0x2a488a,
            'attackDamage': _0x3f41c8,
            'count': _0x33b80e,
            'color': _0x5bebb8,
            'isBlock': _0x28cb57,
            'id': _0x3f7171,
            'enchants': JSON['parse'](_0x151cb3)
        };
        item_nbt_library[_0x1dcc39] = _0x3e3aef;
        return _0x3e3aef;
    };
    const 京都声问其 = _0x574d4a => {
        const _0x52447a = getEntitySize(_0x574d4a);
        const _0x25ce3a = getEntityMotion(_0x574d4a);
        const _0x6472a0 = getPos(_0x574d4a);
        const _0x38dc00 = getEntityName(_0x574d4a);
        const _0x5d83dd = getEntityNamespace(_0x574d4a);
        const _0xf0d0bf = 声暗问弹者(self_id, _0x574d4a);
        const _0x509788 = getCarried(_0x574d4a);
        const _0x1f278a = 瑟瑟主人下(_0x574d4a);
        const _0x19d7f8 = getEntityAttribute(_0x574d4a, 'minecraft:health');
        const _0x4c7fb1 = getEntityAttribute(_0x574d4a, 'minecraft:movement');
        const _0x502d69 = getEntityTypeId(_0x574d4a);
        const _0x3de028 = getEntityTarget(_0x574d4a);
        const _0x5dd126 = getPlayerInventorySize(_0x574d4a);
        const _0x387d1a = getPlayerHotBarSize(_0x574d4a);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x574d4a);
        const _0x538b6f = _0x5ce9bd => _0x5ce9bd['toFixed'](0x2);
        const _0x12a49f = ['唯一ID:' + _0x574d4a + ' 昵称:' + _0x38dc00 + '§r 实体命名空间:' + _0x5d83dd + ' 水平碰撞箱:' + _0x538b6f(_0x52447a['x']) + ' 垂直碰撞箱:' + _0x538b6f(_0x52447a['y']) + ' Mot速度:' + _0x1f278a, 'ability速度:[max:' + _0x4c7fb1['max'] + ', min:' + _0x4c7fb1['min'] + ', current:' + _0x4c7fb1['current'] + '] 血量:[max:' + _0x19d7f8['max'] + ', min:' + _0x19d7f8['min'] + ', current:' + _0x19d7f8['current'] + ']', '手持:[id:' + _0x509788['id'] + ', namespace:' + _0x509788['namespace'] + ', name:' + _0x509788['name'] + '§r, aux:' + _0x509788['aux'] + '] 距离:' + _0xf0d0bf + ' 实体类型:' + _0x502d69, '仰俯角:' + _0x538b6f(pitch) + '° 偏航角:' + _0x538b6f(yaw) + '° 仇恨目标:' + getEntityName(_0x3de028) + '^' + _0x3de028, '移动值:[' + _0x538b6f(_0x25ce3a['x']) + ', ' + _0x538b6f(_0x25ce3a['y']) + ', ' + _0x538b6f(_0x25ce3a['z']) + '] 坐标值:[' + _0x538b6f(_0x6472a0['x']) + ', ' + _0x538b6f(_0x6472a0['y']) + ', ' + _0x538b6f(_0x6472a0['z']) + ']', '背包容量:' + _0x5dd126 + ' 物品栏容量:' + _0x387d1a];
        return _0x12a49f['join']('\n');
    };
    const getCarried = _0x208642 => 音铮铮然有(getEntityCarriedItem(_0x208642));
    const getOffhand = _0x48a544 => 音铮铮然有(getEntityOffhandItem(_0x48a544));
    const getInventory = (_0x224d91, _0x423faa) => 音铮铮然有(getPlayerInventoryItem(_0x224d91, _0x423faa));
    const 人本长安倡 = (_0x20258d, _0x41513e, _0x37d996, _0x2dd146 = false, _0x1faa44 = false) => {
        let _0x532490 = {
            'x': _0x20258d,
            'y': _0x41513e,
            'z': _0x37d996
        };
        const _0x1415d8 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x59d65c = _0xe5db4b => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0xe5db4b['map'](_0x33a27f => ({
                'type': _0x33a27f,
                'pos': _0x532490,
                'value': 0x1
            }))
        });
        const _0x45ed71 = _0x42d6b0 => sendPlayerAction({
            'id': self_id,
            'pos': _0x532490,
            'type': _0x42d6b0
        });
        if (_0x2dd146) _0x59d65c(_0x1415d8);
        if (_0x1faa44) _0x1415d8['forEach'](_0x570904 => _0x45ed71(_0x570904));
    };
    const 女尝学琵琶 = (_0x2f46df, _0x397aa0, _0x2d2e8c = true, _0x409e99 = false) => {
        if (_0x2f46df === _0x397aa0) return false;
        let _0x11bbcc = getInventory(self_id, _0x2f46df);
        let _0x183fd2 = getInventory(self_id, _0x397aa0);
        if (_0x2d2e8c && _0x397aa0 < 0x9 && _0x183fd2['namespace'] != 'minecraft:air') {
            for (let _0x5bc5be = 0x23; _0x5bc5be > 0x8; _0x5bc5be--) {
                const _0x558508 = getInventory(self_id, _0x5bc5be);
                if (_0x558508['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x397aa0, _0x5bc5be);
                    break;
                }
            }
        }
        if (_0x409e99) {
            for (var _0x1e82ac = 0x23; _0x1e82ac > 0x0; _0x1e82ac--) {
                const _0x33eb31 = getInventory(self_id, _0x1e82ac);
                if (_0x33eb31['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x397aa0, _0x1e82ac);
                    break;
                }
            }
        }
        if (_0x11bbcc['namespace'] != 'minecraft:air' && _0x183fd2['namespace'] === 'minecraft:air') moveInventoryItem(_0x2f46df, _0x397aa0);
        if (_0x409e99 && _0x1e82ac) moveInventoryItem(_0x1e82ac, _0x397aa0);
    };
    const 于穆曹二善 = (_0x378c6e, _0x24728f) => {
        let _0x16ea6e = _0x24728f - 0xb4;
        if (_0x378c6e > 0x5a) _0x378c6e -= 0x5a;
        if (_0x378c6e < -0x5a) _0x378c6e += 0x5a;
        if (_0x16ea6e > 0xb4) _0x16ea6e = _0x16ea6e - 0x168;
        if (_0x16ea6e < -0xb4) _0x16ea6e = 0x168 + _0x16ea6e;
        if (getPlayerViewPerspective() === 0x0 || _0x16ea6e > 0xb4 || _0x16ea6e < -0xb4 || _0x378c6e > 0x5a || _0x378c6e < -0x5a) return false;
        setEntityBodyRot(self_id, _0x16ea6e);
        setEntityRot(self_id, _0x378c6e, _0x16ea6e);
    };
    const 才年长色衰 = _0xea9a46 => {
        const _0x5129d4 = getEntityAttribute(_0xea9a46, 'minecraft:health');
        const _0x5195a8 = getPos(_0xea9a46);
        if (typeof _0x5195a8 != 'object' || !_0x5195a8 || !_0x5195a8['x'] || !_0x5195a8['y'] || !_0x5195a8['z']) return false;
        if (!findEntity(_0xea9a46) && (_0x5129d4['max'] === undefined || _0x5129d4['min'] === undefined || _0x5129d4['current'] === undefined)) return false;
        if (_0x5129d4['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x3e9431, _0x7c0ffc) => {
        if (typeof globalThis[_0x3e9431] === 'undefined' || globalThis[_0x3e9431] === _0x7c0ffc) return;
        globalThis[_0x3e9431] = _0x7c0ffc;
        NoveXare_Config[_0x3e9431] = _0x7c0ffc;
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch_' + (_0x7c0ffc ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x3e9431['includes']('_'))) {
            if (modelist['tip_mode'] === 0x0) {
                if (_0x7c0ffc) 归客不发寻(0x0, _0x3e9431, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x3e9431, '§oDisable ◇', '§c');
            }
            if (modelist['tip_mode'] === 0x1) {
                addCustomArrayList(_0x3e9431, _0x3e9431 + (_0x7c0ffc ? ' - Enable' : ' - Disable'), _0x3e9431 + (_0x7c0ffc ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x3e9431, _0x3e9431 + (_0x7c0ffc ? ' - Enable' : ' - Disable'), _0x3e9431 + (_0x7c0ffc ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof ArrayListCfg[_0x3e9431] !== 'undefined') addCustomArrayList(_0x3e9431, ArrayListCfg[_0x3e9431]['CN'], ArrayListCfg[_0x3e9431]['EN'], _0x7c0ffc);
        else if (modelist['tip_mode'] != 0x1 && ArrayList && !_0x3e9431['includes']('_')) addCustomArrayList(_0x3e9431, _0x3e9431, _0x3e9431, _0x7c0ffc);
        if (typeof bind_func[_0x3e9431] !== 'undefined') bind_func[_0x3e9431]['forEach'](_0x384b17 => 委身为贾人(_0x384b17, _0x7c0ffc));
        if (typeof RunAway_binds[_0x3e9431] !== 'undefined' && !RunAway_binds[_0x3e9431]['isNX']) callModule(RunAwayID[RunAway_binds[_0x3e9431]['module']], JSON['stringify']({
            'value': _0x7c0ffc
        }));
    };
    const 妇遂命酒使 = (_0x52d33e, _0x2997b6, _0x1b9028, _0x476593, _0x44a42e, _0x101de7 = false, _0xfdec59 = {}) => {
        for (let _0x50a3e7 = 0x0; _0x50a3e7 < _0x44a42e; _0x50a3e7++) addParticle(Number(_0x52d33e), _0x2997b6, _0x1b9028, _0x476593, _0x101de7 ? _0xfdec59['x'] : _0x2997b6, _0x101de7 ? _0xfdec59['y'] : _0x1b9028, _0x101de7 ? _0xfdec59['z'] : _0x476593, 0x1, _0x101de7);
    };
    const 快弹数曲曲 = () => {
        const _0x5b7d0e = getEntityCarriedItem(self_id);
        const _0x1969de = getPos(self_id);
        if (!_0x5b7d0e['includes']('count:0')) buildBlock(self_id, _0x1969de['x'], _0x1969de['y'], _0x1969de['z'], 0x6);
    };
    const 罢悯然自叙 = _0x34b4d8 => {
        const _0x5ae4d6 = getInventory(self_id, _0x34b4d8);
        const _0x269ab3 = 迁谪意因为(self_id, _0x34b4d8);
        const _0x4c98fe = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x5ae4d6['namespace'] != 'minecraft:air' && _0x5ae4d6['count'] > 0x0 && _0x4c98fe['includes'](_0x269ab3) && selectPlayerInventorySlot(self_id, _0x34b4d8)) {
            const _0x302c4c = getPlayerSelectItemSlot(self_id);
            if (_0x302c4c === _0x34b4d8) 快弹数曲曲();
        }
    };
    const 少小时欢乐 = (_0x56be71, _0x5cfdc6, _0x32d387, _0x1677f5) => {
        let _0x57710c = _0x5cfdc6 > 0x0;
        _0x5cfdc6 = Math['abs'](_0x5cfdc6);
        let _0x3ca091 = _0x32d387 * Math['cos'](_0x5cfdc6 * Math['PI'] / 0xb4);
        let _0xd577b8 = _0x32d387 * Math['sin'](_0x5cfdc6 * Math['PI'] / 0xb4);
        let _0x389b7f = _0xd577b8 / _0x1677f5;
        let _0x5426a2 = _0x1677f5 * (_0x389b7f * _0x389b7f) * 0.5;
        let _0x1a87f8 = _0x3ca091 * _0x389b7f;
        let _0x145d31 = -_0x5426a2 / (_0x1a87f8 * _0x1a87f8);
        return {
            'data': _0x145d31 * Math['pow'](_0x56be71 - (_0x57710c ? -_0x1a87f8 : _0x1a87f8), 0x2) + _0x5426a2,
            'bool': _0x57710c
        };
    };
    const getUserID = _0x15232c => typeof _0x15232c === 'undefined' || _0x15232c === null ? getLocalPlayerUniqueID() : _0x15232c;
    const 事今漂沦憔 = (_0x511942, _0x41605f, _0x221d47) => {
        const _0x595e3f = [
            [_0x511942, _0x41605f + 0x1, _0x221d47],
            [_0x511942, _0x41605f - 0x1, _0x221d47],
            [_0x511942, _0x41605f, _0x221d47 + 0x1],
            [_0x511942, _0x41605f, _0x221d47 - 0x1],
            [_0x511942 + 0x1, _0x41605f, _0x221d47],
            [_0x511942 - 0x1, _0x41605f, _0x221d47]
        ];
        _0x595e3f['some']((_0x4b8d0d, _0xd86938) => {
            const _0x1b296d = getBlock(_0x4b8d0d[0x0], _0x4b8d0d[0x1], _0x4b8d0d[0x2]);
            if (_0x1b296d['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x4b8d0d[0x0], _0x4b8d0d[0x1], _0x4b8d0d[0x2], _0xd86938);
        });
    };
    const 湖间予出官 = (_0x4e6515, _0x4e218f) => {
        const _0x19d894 = getPos(self_id);
        sendSound(_0x4e6515, _0x19d894['x'], _0x19d894['y'], _0x19d894['z'], _0x4e218f);
    };
    const 二年恬然自 = (_0x1f7b44, _0x1b6521, _0x458bfd) => {
        const _0x49b25b = getPos(self_id);
        motion_list['push']([_0x1f7b44 - _0x49b25b['x'], _0x1b6521 - _0x49b25b['y'], _0x458bfd - _0x49b25b['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x35d414, _0x13c569) => {
        let _0x15fb4b = _0x35d414 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x35d414);
        if (typeof _0x13c569 !== 'undefined') _0x15fb4b['namespace'] = _0x13c569;
        return Array['from']({
            'length': 0x24
        }, (_0x290a70, _0x2995ec) => getInventory(self_id, _0x2995ec))['filter'](_0x2388d0 => _0x2388d0['namespace'] === _0x15fb4b['namespace'] && (typeof _0x13c569 !== 'undefined' || _0x2388d0['aux'] === _0x15fb4b['aux']))['reduce']((_0x3d9601, _0x12f1c6) => _0x3d9601 + _0x12f1c6['count'], 0x0);
    };
    const 是夕始觉有 = (_0x200782, _0x59b698, _0x317665 = 'hotbar', _0xbce0a7 = 0x0) => {
        const _0x123c05 = _0x317665 == 'hotbar' ? 0x9 : 0x24;
        let _0x43f827 = Array['from']({
            'length': _0x123c05
        }, (_0x4a2c46, _0x1d0dcb) => getInventory(_0x200782, _0x1d0dcb));
        let _0x21098f = _0x43f827['some'](_0x17850b => _0x17850b['namespace']['includes'](_0x59b698));
        let _0x8a67d8 = _0x43f827['reduce']((_0x48d27b, _0x2dc444) => _0x48d27b + _0x2dc444['count'], 0x0);
        return _0x21098f && _0x8a67d8 > _0xbce0a7;
    };
    const 迁谪意因为 = (_0x376d07, _0x1701a5, _0x2c0716) => {
        let _0x237b1b = _0x1701a5 === -0x1 ? getCarried(_0x376d07) : getInventory(_0x376d07, _0x1701a5);
        if (!_0x237b1b['namespace']['includes']('_') && typeof _0x2c0716 === 'undefined') return 'other';
        let _0x3cab1e = typeof _0x2c0716 === 'undefined' ? _0x237b1b['namespace']['replace']('minecraft:', '') : _0x2c0716['replace']('minecraft:', '');
        const _0x3ae6b4 = _0x3cab1e['split']('_');
        return _0x3ae6b4[0x1];
    };
    const getEntityMaxDamage = _0x5e0ca4 => Array['from']({
        'length': 0x24
    }, (_0x52d29d, _0x599b00) => 十六言命曰(_0x5e0ca4, _0x599b00))['reduce']((_0x36d68f, _0x15e72a) => Math['max'](_0x36d68f, _0x15e72a), 0x0);
    const 长句歌以赠 = (_0x17c66d, _0x5d833d, _0x259f32 = false) => {
        let _0x2cf2c5 = _0x259f32 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0xd623bb = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x4cf2a7 = 0x0; _0x4cf2a7 < 0x24; _0x4cf2a7++) {
            const _0x3022a4 = 迁谪意因为(_0x17c66d, _0x4cf2a7);
            const _0x563f08 = _0xd623bb['indexOf'](_0x3022a4);
            if (_0x563f08 === -0x1) continue;
            const _0x5e5081 = 之凡六百一(_0x17c66d, _0x4cf2a7);
            if (!_0x259f32 && _0x3022a4 === _0x5d833d && _0x2cf2c5 < _0x5e5081) _0x2cf2c5 = _0x5e5081;
            if (_0x259f32 && _0x2cf2c5[_0x563f08] < _0x5e5081) _0x2cf2c5[_0x563f08] = _0x5e5081;
        }
        return _0x2cf2c5;
    };
    const 之凡六百一 = (_0x5e7f94, _0x4eeed4, _0x1ae626 = true, _0x215998 = true) => {
        let _0x34d523 = _0x4eeed4 === -0x1 ? getCarried(_0x5e7f94) : getInventory(_0x5e7f94, _0x4eeed4);
        if (_0x4eeed4 < -0x1) _0x34d523 = 音铮铮然有(getPlayerArmorItem(_0x5e7f94, Math['abs'](_0x4eeed4) - 0x2));
        if (_0x34d523['count'] === 0x0 || _0x34d523['damage'] === 0x0) return 0x0;
        if (!_0x215998) return _0x34d523['damage'];
        let _0xd2a324 = 0x0;
        let _0x43028e = _0x34d523['enchants']['findIndex'](_0x5bcd74 => _0x5bcd74['id'] === 0x0);
        if (_0x43028e > -0x1) _0xd2a324 = _0x34d523['enchants'][_0x43028e]['lvl'];
        if (!_0x1ae626) return 0x1 + _0xd2a324 / 0xa;
        return _0x34d523['damage'] * (0x1 + _0xd2a324 / 0xa);
    };
    const 十六言命曰 = (_0x4bf75c, _0xbdafbf, _0x288292 = true, _0x5385b0 = true) => {
        let _0x50c2f0 = _0xbdafbf === -0x1 ? getCarried(_0x4bf75c) : getInventory(_0x4bf75c, _0xbdafbf);
        if (_0x50c2f0['count'] === 0x0 || _0x50c2f0['attackDamage'] === 0x1) return 0x1;
        if (!_0x5385b0) return _0x50c2f0['attackDamage'];
        let _0x545ddd = 0x0;
        let _0x2c095d = _0x50c2f0['enchants']['findIndex'](_0x2c20e7 => _0x2c20e7['id'] === 0x9);
        if (_0x2c095d > -0x1) _0x545ddd = _0x50c2f0['enchants'][_0x2c095d]['lvl'] * 1.25;
        if (!_0x288292) return _0x545ddd;
        return _0x50c2f0['attackDamage'] + _0x545ddd;
    };
    const b2s = _0x43b0a5 => _0x43b0a5 ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x4cfdac, _0x387421, _0x401094) => {
        let _0x114293 = _0x4cfdac['split'](_0x387421)['length'] - 0x1;
        let _0x33ad73 = 0x0;
        let _0x16c1f4 = [];
        for (let _0x3ac24e = 0x0; _0x3ac24e < _0x114293; _0x3ac24e++) {
            let _0x426acd = _0x4cfdac['indexOf'](_0x387421, _0x33ad73) + _0x387421['length'];
            let _0x23e36d = _0x4cfdac['indexOf'](_0x401094, _0x426acd);
            if (_0x23e36d === -0x1 || _0x426acd === -0x1) break;
            _0x33ad73 = _0x23e36d;
            _0x16c1f4['push'](_0x4cfdac['substring'](_0x426acd, _0x23e36d));
        }
        return _0x114293 > 0x1 ? _0x16c1f4 : _0x16c1f4[0x0];
    };
    const 江头夜送客 = (_0x46ea1d, _0x45af84) => {
        if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x46ea1d, _0x45af84);
    };
    const 枫叶荻花秋 = (_0x4e409d, _0x3ac056, _0x3e7236, _0x8b93c0) => {
        if (typeof _0x3e7236 === 'undefined') _0x3e7236 = -0x1;
        if (typeof _0x8b93c0 === 'undefined') _0x8b93c0 = -0x1;
        let _0x4a36e3 = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x14894b = getInventory(_0x4e409d, index);
            if (!_0x14894b['namespace'] || !_0x14894b['name']) continue;
            if (_0x14894b['namespace']['includes'](_0x3ac056) && (_0x14894b['aux'] === _0x3e7236 || _0x3e7236 === -0x1) && (_0x14894b['name']['includes'](_0x8b93c0) || _0x8b93c0 === -0x1)) {
                _0x4a36e3 = index;
                break;
            }
        }
        return _0x4a36e3;
    };
    const 瑟瑟主人下 = _0x489c1f => {
        const _0x5d7d8b = getEntityMotion(_0x489c1f);
        const _0x544240 = Math['sqrt'](_0x5d7d8b['x'] * _0x5d7d8b['x'] + _0x5d7d8b['y'] * _0x5d7d8b['y'] + _0x5d7d8b['z'] * _0x5d7d8b['z']);
        return _0x544240 * 0x14;
    };
    const 马客在船举 = (_0x2a7b18, _0x10e45e) => {
        const _0x22d7bf = _0x10e45e - _0x2a7b18 + 0x1;
        return Math['floor'](Math['random']() * _0x22d7bf) + _0x2a7b18;
    };
    const 酒欲饮无管 = (_0x571ace, _0x40331e, _0x52e3af) => {
        return {
            'x': _0x40331e['x'] + _0x571ace['x'] * _0x52e3af,
            'y': _0x40331e['y'] + _0x571ace['x'] * _0x52e3af,
            'z': _0x40331e['z'] + _0x571ace['z'] * _0x52e3af
        };
    };
    const 弦醉不成欢 = _0xec7e3f => {
        if (_0xec7e3f < 0x3c) return _0xec7e3f + 's';
        if (_0xec7e3f >= 0x3c) return Math['floor'](_0xec7e3f / 0x3c) + 'min ' + _0xec7e3f % 0x3c + 's';
    };
    const 惨将别别时 = (_0x494160, _0x141d1c, _0x4c7633, _0xd1434d = 0x0, _0x5b1a77 = 0x0) => {
        if (!_0x4c7633) return true;
        _0x494160['y'] += _0xd1434d;
        _0x141d1c['y'] += _0x5b1a77;
        const _0x38afe0 = 弦弦掩抑声(_0x494160, _0x141d1c, 'yaw_pos');
        const _0x20540a = -弦弦掩抑声(_0x494160, _0x141d1c, 'pitch_pos');
        const _0x12f4cc = getDistance(_0x494160, _0x141d1c);
        let _0x75ef05 = true;
        for (let _0x348bb9 = 0x0; _0x348bb9 < _0x12f4cc; _0x348bb9 += 0.5) {
            const _0x40b895 = 忽闻水上琵(_0x348bb9, _0x141d1c, {
                'yaw': _0x38afe0,
                'pitch': _0x20540a
            });
            const _0x13d7c0 = getBlock(_0x40b895['x'], _0x40b895['y'], _0x40b895['z']);
            if (_0x13d7c0['namespace'] != 'minecraft:air') {
                _0x75ef05 = false;
                break;
            }
        }
        return _0x75ef05;
    };
    const 茫茫江浸月 = (_0x5938d2, _0x2624bd) => {
        let _0x484003 = getWorldPlayerList()['sort']((_0x42d231, _0x1af751) => _0x42d231['name']['localeCompare'](_0x1af751['name']));
        let _0x507f53 = _0x484003['length'] > 0x0 ? _0x484003['map'](_0x3a5f83 => ({
            'text': '§e' + _0x3a5f83['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x3a5f83['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x5c385c = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x507f53
        };
        const _0x274a35 = JSON['stringify'](_0x5c385c);
        addForm(_0x274a35, function(_0x508ea0) {
            if (_0x484003['length'] > 0x0 && _0x508ea0 >= 0x0) {
                var _0x13edee = _0x2624bd === 0x0 ? _0x484003[_0x508ea0]['name'] : _0x484003[_0x508ea0]['id'];
                if (typeof globalThis[_0x5938d2] === 'object') globalThis[_0x5938d2]['push'](_0x13edee);
                if (typeof globalThis[_0x5938d2] === 'string') globalThis[_0x5938d2] = _0x13edee;
                归客不发寻(0x0, 'addTarget', _0x13edee, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x55d846, _0x2cd819, _0x436d45) => {
        let _0xe0b431 = _0x55d846 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x436d45;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x55d846 = Math['abs'](_0x55d846);
        const _0xdcd0f6 = yaw * Math['PI'] / 0xb4;
        const _0x1a6781 = pitch * Math['PI'] / 0xb4;
        let _0xa37d3c = pitch != 0x0 ? Math['sin'](_0x1a6781) * _0x55d846 : 0x0;
        let _0x18543b = pitch != 0x0 ? _0xa37d3c / Math['tan'](_0x1a6781) : _0x55d846;
        let _0x77d872 = _0x18543b < 0x0;
        _0x18543b = Math['abs'](_0x18543b);
        const _0x13c84c = Math['cos'](_0xdcd0f6) * _0x18543b;
        const _0x3e47e3 = Math['sin'](_0xdcd0f6) * _0x18543b;
        let _0x91f804 = -Math['sin'](_0xdcd0f6) * _0x18543b;
        let _0x102d7c = Math['cos'](_0xdcd0f6) * _0x18543b;
        if (_0xe0b431 || _0x77d872) {
            _0x91f804 = -_0x91f804;
            if (!_0x77d872) _0xa37d3c = -_0xa37d3c;
            _0x102d7c = -_0x102d7c;
        }
        return {
            'x': _0x2cd819['x'] + _0x91f804,
            'y': _0x2cd819['y'] - _0xa37d3c,
            'z': _0x2cd819['z'] + _0x102d7c
        };
    };
    const getPlayerItemCount = _0xe78a9c => Array['from']({
        'length': 0x24
    }, (_0x5ab118, _0x152423) => getInventory(_0xe78a9c, _0x152423))['filter'](_0x57163a => _0x57163a['count'] !== 0x0)['reduce']((_0x54bd08, _0x473d6e) => _0x54bd08 + _0x473d6e['count'], 0x0);
    const isSame = (_0x7b83fd, _0x261df6, _0x12fc95) => Math['abs'](_0x7b83fd - _0x261df6) < _0x12fc95;
    const 琶声主人忘 = _0x20d3cb => {
        let _0x1a82c6 = [];
        if (at_entity) _0x1a82c6 = _0x1a82c6['concat'](getEntityList());
        if (at_player) _0x1a82c6 = _0x1a82c6['concat'](getPlayerList());
        let _0x4df5bb = Math['min'](at_maxCount, _0x1a82c6['length']);
        let _0x3948a9 = [];
        for (const _0x5913b2 of _0x1a82c6) {
            if (!才年长色衰(_0x5913b2)) continue;
            const _0x388c7d = getEntityNamespace(_0x5913b2);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x1e2dbb => _0x388c7d['includes'](_0x1e2dbb)) != at_back) continue;
            const _0x548887 = getPos(_0x5913b2);
            const _0x405a99 = getDistance(_0x548887, getPos(_0x20d3cb));
            if ((_0x405a99 > at_minDist || _0x405a99 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x5ccaf6 = getEntityAttribute(_0x5913b2, 'minecraft:health');
            if (at_heal && (!_0x5ccaf6 || _0x5ccaf6['min'] > _0x5ccaf6['max'] || _0x5ccaf6['max'] > 0x186a0 || _0x5ccaf6['current'] <= 0x0 || _0x5ccaf6['max'] === 0x0) != at_back) continue;
            if (_0x388c7d === 'minecraft:player') {
                const _0x2344bc = getEntityRot(_0x5913b2);
                const _0x32e8e6 = at_BWM ? getEntityAttribute(_0x5913b2, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x221227 = getEntityName(_0x5913b2);
                if (at_BWM && _0x32e8e6['current'] >= 0.5 && !_0x221227['includes']('[') && !_0x221227['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x5913b2);
                    continue;
                }
                if (at_fov && (typeof _0x2344bc['yaw'] === 'undefined' || typeof _0x2344bc['pitch'] === 'undefined' || _0x2344bc['yaw']['toFixed'](0x2) === 0x0 || _0x2344bc['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x5cf8c1 = getEntityFlag(_0x5913b2, 0x5);
                if (at_hide && _0x5cf8c1 != at_back) continue;
                const _0x1ebd09 = getEntityIsGround(_0x5913b2);
                if (at_ground && _0x1ebd09 === at_back) continue;
                if (!惨将别别时(getPos(self_id), _0x548887, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x221227['startsWith'](ct_team) || ct_team['includes']('[') && _0x221227['includes'](ct_team))) continue;
                if (white_list['includes'](_0x5913b2) != at_back || !at_name && (_0x221227 === getEntityName(_0x20d3cb) || _0x221227 === '') != at_back || (_0x548887['y'] > at_maxY || _0x548887['y'] < at_minY) != at_back && !at_infY || _0x5913b2 === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x152a7f => _0x221227['includes'](_0x152a7f))) continue;
                const _0x52ff0e = teams_armor ? 音铮铮然有(getPlayerArmorItem(_0x5913b2, teams_slot)) : {};
                if (Teams && teams_armor && _0x52ff0e != '' && _0x52ff0e['color'] === 音铮铮然有(getPlayerArmorItem(self_id, teams_slot))['color']) continue;
                const _0x4f3f0e = at_size ? getEntitySize(_0x5913b2) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && ((_0x4f3f0e['x'] > default_size['x'] + 0.1 || _0x4f3f0e['x'] < default_size['x'] - 0.1) && (_0x4f3f0e['y'] > 1.66 || _0x4f3f0e['y'] < 1.64) && (_0x4f3f0e['y'] < default_size['y'] || _0x4f3f0e['y'] > default_size['y'] + 0.1) && (_0x4f3f0e['y'] > 1.51 || _0x4f3f0e['y'] < 1.49)) != at_back) continue;
            }
            const _0x4bebb7 = modelist['at_mode'] === 0x4 ? getPlayerItemCount(_0x5913b2) : 0x0;
            const _0x50b266 = modelist['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x5913b2, 'yaw_rot') : 0x0;
            const _0x21d062 = modelist['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x5913b2, 'pitch_rot') : 0x0;
            const _0x15affc = modelist['at_mode'] === 0x2 ? 十六言命曰(_0x5913b2, -0x1) : 0x0;
            _0x3948a9['push']({
                'distance': _0x405a99,
                'target': _0x5913b2,
                'damage': _0x15affc,
                'heal': _0x5ccaf6['current'],
                'crosshair': Math['sqrt'](_0x50b266 * _0x50b266 + _0x21d062 * _0x21d062),
                'items': _0x4bebb7,
                'random': 马客在船举(0x0, _0x1a82c6['length'] - 0x1)
            });
        }
        const _0x21ce80 = [(_0x2f64af, _0x370a96) => _0x2f64af['distance'] - _0x370a96['distance'], (_0x4d7dec, _0x1d4f21) => _0x4d7dec['heal'] - _0x1d4f21['heal'], (_0x257f52, _0x358320) => _0x257f52['damage'] - _0x358320['damage'], (_0xb66355, _0x92d80) => _0xb66355['crosshair'] - _0x92d80['crosshair'], (_0x38db3f, _0x3e513b) => _0x3e513b['items'] - _0x38db3f['items'], (_0x32cf5a, _0x1c1fc6) => _0x32cf5a['random'] - _0x1c1fc6['random']];
        _0x3948a9['sort'](_0x21ce80[modelist['at_mode']]);
        if (at_reverse) _0x3948a9['reverse']();
        if (at_infCount) return _0x3948a9['map'](_0x4ad25c => _0x4ad25c['target']);
        return _0x3948a9['slice'](0x0, _0x4df5bb)['map'](_0x4e205a => _0x4e205a['target']);
    };
    const 归客不发寻 = (_0x4920f6 = 0x0, _0x10c37b = 'Tip', _0x1becaa, _0x4358d4 = '§r') => {
        if (!FuncTip) return false;
        if (_0x4920f6 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x10c37b + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4358d4) + ' ' + _0x1becaa);
        if (_0x4920f6 == 0x1) return '§r' + _0x10c37b + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4358d4) + ' ' + _0x1becaa;
    };
    const getDistance = (_0x368ef2, _0x2ccbe1) => Math['sqrt'](Math['pow'](_0x368ef2['x'] - _0x2ccbe1['x'], 0x2) + Math['pow'](_0x368ef2['y'] - _0x2ccbe1['y'], 0x2) + Math['pow'](_0x368ef2['z'] - _0x2ccbe1['z'], 0x2));
    const 声暗问弹者 = (_0x3f8d18, _0x39ec37) => {
        if (!才年长色衰(_0x3f8d18) || !才年长色衰(_0x39ec37)) return Infinity;
        const _0x3e0ad0 = getPos(_0x3f8d18);
        const _0x598383 = getPos(_0x39ec37);
        return Math['sqrt'](Math['pow'](_0x3e0ad0['x'] - _0x598383['x'], 0x2) + Math['pow'](_0x3e0ad0['y'] - _0x598383['y'], 0x2) + Math['pow'](_0x3e0ad0['z'] - _0x598383['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x36fc1, _0x505756) => {
        if (!才年长色衰(_0x36fc1) || !才年长色衰(_0x505756)) return Infinity;
        const _0x5aade2 = getPos(_0x36fc1);
        const _0xaf7f7c = getPos(_0x505756);
        return Math['sqrt'](Math['pow'](_0x5aade2['x'] - _0xaf7f7c['x'], 0x2) + Math['pow'](_0x5aade2['z'] - _0xaf7f7c['z'], 0x2));
    };
    const 欲语迟移船 = (_0x3580bb, _0x3bd19a, _0xfb9013) => {
        let _0x5e772a = {
            'fn-set-player-pos': {
                'x': _0x3580bb,
                'y': _0x3bd19a,
                'z': _0xfb9013
            }
        };
        callModule(0x5, JSON['stringify'](_0x5e772a));
    };
    const getHorizontalDistance = (_0x575b9a, _0x2de1f6) => Math['sqrt'](Math['pow'](_0x575b9a['x'] - _0x2de1f6['x'], 0x2) + Math['pow'](_0x575b9a['z'] - _0x2de1f6['z'], 0x2));
    const setRealPos = (_0xd069a, _0x1699fb, _0x54e52d, _0x3ac55d) => setEntityPos(_0xd069a, _0x1699fb, _0x54e52d + setPos_offset, _0x3ac55d);
    const setPos = (_0x2308b2, _0x16037f, _0x3d0f84) => setRealPos(self_id, _0x2308b2, _0x16037f, _0x3d0f84);
    const setMotion = (_0x1e0dfb, _0x1b25a4, _0x2b22ae) => setEntityMotion(self_id, _0x1e0dfb, _0x1b25a4, _0x2b22ae);
    const 相近邀相见 = _0x4d0cfd => {
        if (_0x4d0cfd === '') return [];
        return _0x4d0cfd['split'](',');
    };
    const 添酒回灯重 = _0x27e7cb => {
        if (typeof _0x27e7cb != 'object' || _0x27e7cb['length'] === 0x0) return '';
        return _0x27e7cb['join'](',');
    };
    const 开宴千呼万 = (_0x332bd3, _0x27219b) => {
        let _0x38a343 = typeof _0x27219b === 'object' ? 添酒回灯重(_0x27219b) : _0x27219b;
        let _0x2980d9 = typeof _0x27219b === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x332bd3 + '","placeholder":"","default":"' + _0x38a343 + '"}]}', function(_0x50f9cd) {
            if (_0x2980d9 === 0x1) globalThis[_0x332bd3] = _0x50f9cd;
            if (_0x2980d9 === 0x0) globalThis[_0x332bd3] = 相近邀相见(_0x50f9cd);
            归客不发寻(0x0, 'setValue', _0x332bd3 + ' §7>>>§r ' + _0x50f9cd, '§r');
            NoveXare_Config[_0x332bd3] = globalThis[_0x332bd3];
        });
    };
    const 唤始出来犹 = _0x433918 => {
        if (typeof _0x433918 != 'string' || _0x433918 === '') return 'None';
        let _0x2575b8 = _0x433918['match'](/\[(.*?)\]/g);
        if (_0x2575b8 === null) return 'None';
        return _0x2575b8[0x0];
    };
    const 抱琵琶半遮 = _0x533686 => {
        if (!File['exist'](_0x533686)) return '{}';
        const _0x38b7ea = File['read'](_0x533686);
        return _0x38b7ea ? _0x38b7ea : '{}';
    };
    const 面转轴拨弦 = _0x2c00fe => {
        const _0xe121c6 = getPos(_0x2c00fe);
        let _0x4d9069 = _0x2c00fe === self_id ? Math['floor'](_0xe121c6['y']) - 0x1 : Math['floor'](_0xe121c6['y']);
        return {
            'x': Math['floor'](_0xe121c6['x']),
            'y': _0x4d9069,
            'z': Math['floor'](_0xe121c6['z'])
        };
    };
    const 三两声未成 = (_0x120936, _0x33dcd2) => {
        if (_0x120936['length'] === _0x33dcd2['length']) {
            return [];
        }
        const _0x59389d = _0x120936['length'] >= _0x33dcd2['length'] ? _0x120936 : _0x33dcd2;
        const _0x1b0413 = _0x120936['length'] < _0x33dcd2['length'] ? _0x120936 : _0x33dcd2;
        return _0x59389d['filter'](_0x5b4a61 => !_0x1b0413['includes'](_0x5b4a61));
    };
    const 曲调先有情 = (_0x5c2be1, _0x4db2c0) => {
        const _0x2f3b96 = aa_speed;
        const _0x349595 = aa_g;
        const _0x545a1f = Math['atan'](Math['floor'](-_0x4db2c0) / _0x5c2be1);
        const _0x1c64a9 = Math['sqrt'](_0x5c2be1 * _0x5c2be1 + _0x4db2c0 * _0x4db2c0);
        const _0x490b8c = Math['atan'](_0x1c64a9 / _0x2f3b96 / 0x2 / _0x2f3b96 * _0x349595);
        return -((_0x490b8c + _0x545a1f) / Math['PI'] * 0xb4);
    };
    const getArrowFlyTime = (_0x22046d, _0x45a821) => _0x22046d / _0x45a821;
    const angleRound = (_0x3096a2, _0x2ab884) => Math['round'](_0x3096a2 / _0x2ab884) * _0x2ab884;
    const 弦弦掩抑声 = (_0x2678dd, _0x325c10, _0x33b86d, _0x31b13a = false, _0x5d283d = false, _0x2a91de = 0x0, _0x51c3d5 = 0x0) => {
        let _0xba58f6 = typeof _0x325c10 != 'string' ? _0x325c10 : getPos(_0x325c10);
        let _0x5bf8ea = typeof _0x2678dd != 'string' ? _0x2678dd : getPos(_0x2678dd);
        let _0x2d45e8 = getEntityRot(_0x2678dd);
        if (!_0xba58f6 || !_0x5bf8ea) return Infinity;
        const _0x2141d5 = getHorizontalDistance(_0x5bf8ea, _0xba58f6);
        if (_0x31b13a) _0xba58f6 = 酒欲饮无管(getEntityMotion(_0x325c10), getPos(_0x325c10), getArrowFlyTime(_0x2141d5, aa_speed) * 0x14);
        let _0x984c3e = _0xba58f6['x'] - _0x5bf8ea['x'];
        let _0x1110cb = _0x5bf8ea['y'] - _0xba58f6['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x51c3d5, _0x51c3d5) / 0xa;
        let _0x24c37f = _0xba58f6['z'] - _0x5bf8ea['z'];
        let _0x40c29a = Math['atan2'](_0x24c37f, _0x984c3e) * 0xb4 / Math['PI'];
        const _0x58f5a2 = 曲调先有情(_0x2141d5, _0x1110cb);
        let _0x2d5ebc = _0x5d283d ? _0x58f5a2 : Math['atan2'](_0x1110cb, _0x2141d5) * 0xb4 / Math['PI'];
        if (_0x33b86d === 'yaw_pos') return _0x40c29a > -0xb4 && _0x40c29a <= 0x5a ? _0x40c29a + 0x5a : _0x40c29a - 0x10e;
        if (_0x33b86d === 'yaw_rot') {
            _0x40c29a = _0x40c29a > -0xb4 && _0x40c29a <= 0x5a ? _0x40c29a + 0x5a : _0x40c29a - 0x10e;
            let _0x486d20 = _0x40c29a - _0x2d45e8['yaw'] + 马客在船举(-_0x2a91de / 0x2, _0x2a91de / 0x2);
            return _0x486d20 > 0x0 ? -_0x486d20 + 0xb4 : -_0x486d20 - 0xb4;
        }
        if (_0x33b86d === 'pitch_pos') return _0x2d5ebc;
        if (_0x33b86d === 'pitch_rot') return _0x2d5ebc - _0x2d45e8['pitch'];
    };
    const 声思似诉平 = (_0x58b3bb, _0x414699, _0x5a859b, _0x3d3277) => {
        let _0x4754f6 = Math['abs'](弦弦掩抑声(_0x58b3bb, _0x414699, 'yaw_rot'));
        let _0x30739c = Math['abs'](弦弦掩抑声(_0x58b3bb, _0x414699, 'pitch_rot'));
        if (_0x3d3277 === 0x0) return Math['sqrt'](_0x4754f6 * _0x4754f6 + _0x30739c * _0x30739c) < _0x5a859b;
        if (_0x3d3277 === 0x1) return Math['abs'](_0x4754f6) < _0x5a859b;
        if (_0x3d3277 === 0x2) return Math['abs'](_0x30739c) < _0x5a859b;
    };
    const 生不得志低 = _0xd8025 => {
        let _0x31cd31 = '';
        for (let _0x3f57c6 = 0x0; _0x3f57c6 < _0xd8025['length']; _0x3f57c6 += 0x2) {
            _0x31cd31 += String['fromCharCode'](parseInt(_0xd8025['substr'](_0x3f57c6, 0x2), 0x10));
        }
        return _0x31cd31;
    };
    const 眉信手续续 = (_0x550a69, _0x38c326, _0x3e9a14 = 0.5, _0x50e1ac = false) => {
        let _0xce43cd = [];
        let _0x1b596c = 弦弦掩抑声(_0x550a69, _0x38c326, 'yaw_pos');
        let _0x3eb645 = 弦弦掩抑声(_0x550a69, _0x38c326, 'pitch_pos');
        if (getDistance(_0x550a69, _0x38c326) < _0x3e9a14) return [_0x550a69];
        for (let _0x324b3c = 0x0; _0x324b3c <= getDistance(_0x550a69, _0x38c326); _0x324b3c += _0x3e9a14) {
            let _0x5e41a6 = 忽闻水上琵(-_0x324b3c, _0x550a69, {
                'yaw': _0x1b596c,
                'pitch': _0x50e1ac ? -_0x3eb645 : 0x0
            });
            if (getBlock(_0x5e41a6['x'], _0x5e41a6['y'], _0x5e41a6['z'])['namespace'] === 'minecraft:air') _0xce43cd['push']({
                'x': _0x5e41a6['x'],
                'y': _0x5e41a6['y'],
                'z': _0x5e41a6['z']
            });
        }
        return _0xce43cd;
    };
    const 弹说尽心中 = _0x3513a2 => {
        let _0x12bed1 = '';
        for (let _0x558873 = 0x0; _0x558873 < _0x3513a2['length']; _0x558873++) {
            _0x12bed1 += _0x3513a2['charCodeAt'](_0x558873)['toString'](0x10);
        }
        return _0x12bed1;
    };
    const 无限事轻拢 = (_0x536729, _0x2449a2) => {
        let _0x538e8e = getEntityAttribute(_0x536729, 'minecraft:health');
        let _0x44dbbc = _0x538e8e['current'];
        let _0x2bf1c0 = _0x538e8e['max'];
        const _0x37a439 = _0x44dbbc / _0x2bf1c0;
        switch (_0x2449a2) {
            case 0x0:
                return _0x37a439['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x56b481 = '§c';
                for (let _0x3dae4b = 0x0; _0x3dae4b < Math['floor'](_0x37a439 * 0x14); _0x3dae4b++) _0x56b481 += '❤';
                return _0x56b481 + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x44dbbc);
            case 0x3:
                return Math['floor'](_0x44dbbc) + '/' + Math['floor'](_0x2bf1c0);
            default:
                return _0x44dbbc;
        }
    };
    const 慢捻抹复挑 = _0x120ac6 => {
        let _0x37857b = '';
        let _0x2fec68 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x2a64e6 = 0x0; _0x2a64e6 < _0x120ac6; _0x2a64e6++) {
            let _0x593d11 = 马客在船举(0x0, _0x2fec68['length'] - 0x1);
            _0x37857b += _0x2fec68[_0x593d11];
        }
        return _0x37857b;
    };
    const 初为霓裳后 = _0x4bb135 => {
        for (let _0x2fcce8 = Math['ceil'](-cd_size / 0x2); _0x2fcce8 < Math['floor'](cd_size / 0x2 + 0x1); _0x2fcce8++) {
            for (let _0x7b291d = Math['ceil'](-cd_size / 0x2); _0x7b291d < Math['floor'](cd_size / 0x2 + 0x1); _0x7b291d++) {
                for (let _0x156953 = Math['ceil'](-cd_size / 0x2); _0x156953 < Math['floor'](cd_size / 0x2 + 0x1); _0x156953++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x4bb135;
                    const _0x3edecf = getBlock(x + _0x2fcce8, y + _0x7b291d, z + _0x156953);
                    if (_0x3edecf['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x4bb135['y'] + _0x7b291d <= _0x4bb135['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x2fcce8, y + _0x7b291d, z + _0x156953, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x4bb135['x'] + _0x2fcce8, _0x4bb135['y'] + _0x7b291d, _0x4bb135['z'] + _0x156953, 0x0);
                    if (cd_packet) 人本长安倡(_0x4bb135['x'] + _0x2fcce8, _0x4bb135['y'] + _0x7b291d, _0x4bb135['z'] + _0x156953, true, true);
                }
            }
        }
    };
    const 六幺大弦嘈 = () => {
        if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
        if (ia_comeClick) {
            buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
            if (!ia_nopacket) sendPlayerAuthInput({
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
                }],
                'motion': {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                }
            });
        }
        if (ia_back) {
            for (let _0x25668c = 0x0; _0x25668c < ia_move; _0x25668c++) {
                if (modelist['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modelist['ia_mode'] === 0x1) 二年恬然自(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modelist['ia_mode'] === 0x2) sendPlayerAuthInput({
                    'inputMode': 0x2,
                    'playMode': 0x0,
                    'pos': {
                        'x': InfiniteAura_backPos['x'],
                        'y': InfiniteAura_backPos['y'],
                        'z': InfiniteAura_backPos['z']
                    },
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
    const 嘈如急雨小 = _0x2521db => {
        let _0x2478df = '';
        let _0xa5a6d5 = _0x2521db['split']('');
        for (let _0x215c33 in _0xa5a6d5) {
            let _0x2fd2ab = _0xa5a6d5[_0x215c33]['toUpperCase']();
            if (_0x215c33 != _0xa5a6d5['length'] - 0x1) {
                if (_0x215c33 % 0x2 === 0x1) _0x2478df += _0x2fd2ab + ' ';
                else _0x2478df += _0x2fd2ab;
            } else _0x2478df += _0x2fd2ab;
        }
        if (rpc_remark) {
            let _0x3106f7 = _0x2478df['split'](' ');
            let _0x745637 = '';
            for (let _0x1dd8b0 in _0x3106f7) _0x745637 += _0x3106f7[_0x1dd8b0] + '(' + 生不得志低(_0x3106f7[_0x1dd8b0]) + ') ';
            return _0x745637;
        } else return _0x2478df;
    };
    const 弦切切如私 = (_0x10ff30, _0xb8da26, _0x426a56 = false) => {
        setEntityTarget(_0x10ff30, _0xb8da26);
        if (_0x426a56) setEntityTarget(_0xb8da26, _0x10ff30);
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
    var ct_team = 'NoveXare';
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
    var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
    var dr_mot = 1.3;
    var cleaner_path = getResource() + '/NoveXare/Cleaner.json';
    var {
        clear_config,
        trash_slot
    } = JSON['parse'](抱琵琶半遮(cleaner_path));
    var ic_delay = 0x24;
    var ic_delay = 0x1;
    modelist['ic_mode'] = 0x0;
    var cleaner_slot = 0x23;
    var ic_bow = false;
    var ic_chest = false;
    var ic_change = false;
    var ic_move = true;
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
    var ca_range = 0x3;
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
    var sp_target = false;
    var sp_entity = false;
    var sp_vec = 0x1;
    var sp_exclude = false;
    var sound_data = [];
    var sp_count = 0x1;
    var SoundPlayer_yaw = -0xb4;
    var sp_loop = false;
    var sp_distance = 0x5;
    var play_pos_list = [];
    var sp_all = true;
    var sp_type = 0x51;
    var sp_range = 0x8;
    var sp_space = 0x10;
    var sp_large = false;
    var sp_level = 0x0;
    var sp_y = 0x0;
    var other_user = null;
    var fl_abnormal = 0x5;
    var lag_t = 0x0;
    var fl_show = false;
    modelist['fl_mode'] = 0x0;
    var fl_reverse = true;
    var fakelag_status = false;
    var fl_normal = 0x14;
    var default_size = {
        'x': 0.6,
        'y': 1.8
    };
    var temp_size = {
        'x': 0.6,
        'y': 1.8
    };
    var at_regex = ['player', 'entity', '主城', '商店', '[LV', 'CIT-', 'ˉ', '－', '%', '-', '%'];
    var at_typeWhite = [];
    var at_hide = true;
    var target_list = [];
    var white_list = [];
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
    modelist['at_mode'] = 0x0;
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
    modelist['gm_mode'] = 0x0;
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
    var rec_y = 0x0;
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
    var last_PyRpc = {};
    var rpc_repeat_times = 0x1;
    var rpc_exclude = false;
    var rpc_showDisintercept = false;
    var rpc_showIntercept = false;
    modelist['rpc_mode'] = 0x0;
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
    var freecam_pos = {};
    modelist['fc_mode'] = 0x0;
    var fc_draw = false;
    var fc_dist = false;
    var fakemove_pos = {};
    modelist['av_mode'] = 0x0;
    var lagback_pos = [];
    var lagback_run = false;
    var av_minY = 0.8;
    var av_derp = false;
    var AvoidAttack_pos = {};
    var shift_tick = 0x0;
    var shift_num = 0x64;
    var cd_fake = false;
    var cd_size = 0x1;
    var cd_delay = 0x1;
    var cd_exclude = false;
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
    modelist['as_mode'] = 0x0;
    modelist['anti_mode'] = 0x0;
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
    modelist['ca_mode'] = 0x0;
    var ca_delay = 0x1;
    var again_item = ['easecation:all_games', 'minecraft:emerald'];
    modelist['gg_mode'] = 0x0;
    var aa_prec = 0x0;
    var aa_min = 0x14;
    var aa_max = 0x14;
    var aa_pred = false;
    var aa_auto = false;
    var AssistAim_lock = false;
    var aa_range = 0x5;
    var aa_fov = 0x5a;
    var aa_randomY = 0x0;
    var aa_xz = 0x0;
    var aa_speed = 0x64;
    var aa_g = 0x10;
    var AssistAim_test = false;
    var aa_throw = false;
    var aa_silent = false;
    var aa_y = 0x14;
    modelist['AssistAim_mode'] = 0x1;
    var ap_autobag = false;
    var ap_min = 0x3;
    var splash_slot = -0x1;
    var ie_drop = true;
    var ie_data = '0';
    var ie_delay = 0x14;
    modelist['itemedit_mode'] = 0x0;
    var nf_max = 0.42;
    modelist['nf_mode'] = 0x0;
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
    modelist['bm_mode'] = 0x0;
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
    modelist['bhop_mode'] = 0x0;
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
    var record_water = {};
    var record_lava = {};
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
    var InfiniteAura_switch_delay_r = 0xa;
    var InfiniteAura_list = [];
    var InfiniteAura_target = [];
    var ia_delay = 0x5;
    var tick = 0xa;
    var move_tick = 0x0;
    var ia_attack = 0x1;
    var InfiniteAura_num_r = 0x0;
    modelist['ia_mode'] = 0x2;
    var InfiniteAura_backPos = null;
    var InfiniteAura_backMot = null;
    var ia_toClick = true;
    var ia_comeClick = true;
    var ia_offset = 0x0;
    var ia_fix = false;
    var ad_min = 0xa;
    modelist['ad_mode'] = 0x0;
    modelist['person_mode'] = 0x0;
    modelist['new_ctrl_mode'] = 0x0;
    var aai_len = 0x3;
    var aai_max = 0x2;
    var LockBehind_yaw = -0xb4;
    var sur_speed = 0x5;
    var aai_min = 0x0;
    var aai_speed = 0x5;
    var LockBehind_h = 0x0;
    var isReverse = false;
    modelist['sur_mode'] = 0x0;
    var surround_particle_yaw = -0xb4;
    var srp_type = 0x13;
    var srp_size = 0x1;
    var srp_move = 0x0;
    var spr_speed = 0x5;
    var spr_hor = false;
    var spr_packet = false;
    var spr_auth = false;
    modelist['sprint_mode'] = 0x0;
    var spr_nowall = false;
    var spr_move = false;
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
    var message_list = {
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
    modelist['ka_mode'] = 0x0;
    var cs_packet = 0x1f4;
    var cs_multi = false;
    var cs_count = 0x32;
    modelist['cs_mode'] = 0x0;
    var hb_hor = 0x2;
    var hb_y = 1.8;
    modelist['health_mode'] = 0x0;
    var hj_height = 0.42;
    var CPvP = false;
    modelist['cpvp_mode'] = 0x0;
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
    var Spammer_l = false;
    var Spammer_o = false;
    var Spammer_k = false;
    var spm_count = 0x1;
    var rush_length = 0x5;
    var fb_len = 0x4;
    var fb_delay = 0xa;
    var build_t = 0x0;
    var build_list = [];
    var build_success = true;
    var rc_speed = 0x8;
    var rc_lock = 0x3;
    var rc_follow = true;
    var rc_bhop = true;
    var rc_ahop = false;
    var rc_legal = true;
    modelist['rocker_mode'] = 0x0;
    modelist['rc_mode'] = 0x0;
    var rc_surround = true;
    var rc_dist = 1.5;
    var rocker_func = {};
    var direction_func = {};
    var airjump_func = {};
    var rc_relative = true;
    var rc_range = 0xb4;
    var current_roll = 0x0;
    var current_yaw = getEntityRot(self_id)['yaw'];
    var current_pitch = 0xb4 - (getEntityRot(self_id)['pitch'] + 0x5a);
    var Camera_anchor_pos = {
        'x': 0x0,
        'y': 0x0,
        'z': 0x0
    };
    var rc_boost = false;
    var rc_y = 0.42;
    modelist['LookTP_mode'] = 0x0;
    var bk_bed = true;
    var bk_chest = true;
    var bk_tool = false;
    var bk_range = 0x5;
    var bk_last = 0x1;
    var breaker_pos = null;
    var breaker_timer = 0x0;
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
    var isBedbuild = false;
    var tt_speed = 0.5;
    var arp_type = 0xc;
    modelist['avoid_mode'] = 0x0;
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
    modelist['mt_time'] = 0x0;
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
    modelist['tr_mode'] = 0x0;
    var ad_sword = false;
    modelist['copy_mode'] = 0x0;
    var copy_random = 0x0;
    var Criticals_status = false;
    var fpsr_rate = 0xa;
    var fb_speed = 0x5;
    modelist['custom_mode'] = 0x0;
    var ci_slot = 0x0;
    modelist['fakeTip_mode'] = 0x0;
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
    var sa_fov = 0x32;
    var sa_size = 0.8;
    var sa_range = 0x4;
    var derp_p_r = 0x5a;
    var derp_y_r = -0xb4;
    modelist['derp_mode'] = 0x0;
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
    var record_blink_pos = {};
    var sl_hook = false;
    var Sauths = getData('sauths', '');
    var bantip = '';
    var am_count = 0x1;
    var am_id = 0x0;
    var am_value = 0x0;
    var am_delay = 0x0;
    var action_tick = 0x0;
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
    var teams_slot = 0x0;
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

    function onTickEvent() {
        try {
            if (PauseNX) return;
            let _0xc56e6a = [];
            self_id = getUserID(other_user);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            let _0x1563ff = getEntityAttribute(self_id, 'minecraft:health');
            let _0x45692e = getEntityMotion(self_id);
            isMoving = getEntityFlag(self_id, 0x22) || typeof rocker_func['angle'] !== 'undefined';
            if (FastStop && !isMoving) setMotion(0x0, _0x45692e['y'], 0x0);
            let _0x8a8133 = getCameraRotation();
            let _0x48f0b8 = {
                'yaw': _0x8a8133['yaw'] > 0x0 ? 0xb4 - _0x8a8133['yaw'] : -0xb4 - _0x8a8133['yaw'],
                'pitch': -_0x8a8133['pitch']
            };
            let _0xe4e6 = getDistance(self_pos, last_tick_pos) / 0.05;
            let _0x1b2d8a = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
            let _0xd5c29e = 瑟瑟主人下(self_id);
            let _0x415d20 = 面转轴拨弦(self_id);
            let _0x5f07f6 = getWorldPlayerList();
            let _0x24a7b8 = getEntityIsGround(self_id);
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    ping_1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x20ebe2, _0x5c2b7f) => globalThis['ping_2'] = Date['now']());
                    ping = Math['abs'](ping_2 - ping_1);
                }
                if (InvCleaner && ic_change || SmartInv && da_change) item_count = getPlayerItemCount(self_id);
            }
            self_item = getCarried(self_id);
            if (_0x1563ff['current'] - last_tick_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x1563ff['current'] < last_tick_heal) death_pos = self_pos;
            if (TestModule) closeInventory();
            if (DeadCross) dc_pos['forEach'](_0x38f15e => {
                createShadow(_0x38f15e['x'], _0x38f15e['y'], _0x38f15e['z']);
                createShadow(_0x38f15e['x'], _0x38f15e['y'] + 0x1, _0x38f15e['z']);
                createShadow(_0x38f15e['x'], _0x38f15e['y'] + 0x2, _0x38f15e['z']);
                createShadow(_0x38f15e['x'] + 0x1, _0x38f15e['y'] + 0x2, _0x38f15e['z']);
                createShadow(_0x38f15e['x'] - 0x1, _0x38f15e['y'] + 0x2, _0x38f15e['z']);
                createShadow(_0x38f15e['x'], _0x38f15e['y'] + 0x3, _0x38f15e['z']);
            });
            if (AdminShow) {
                let _0x575258 = _0x5f07f6['filter'](_0x1a8d62 => _0x1a8d62['permissionLevel'] != -0x1 || _0x1a8d62['commandPermissionLevel'] != -0x1);
                if (_0x575258['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x575258['map'](_0x323565 => _0x323565['name'])), '§r'));
                let _0x3a1de1 = _0x575258['filter'](_0x26def4 => 声暗问弹者(_0x26def4['id'], self_id) < as_range);
                if (_0x3a1de1['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x3a1de1['map'](_0x1d3730 => _0x1d3730['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(target_list[0x0])) && ticks % at_delay == 0x0) target_list = 琶声主人忘(self_id, at_maxDist, at_maxCount);
            if (NoHider) {
                const _0xc2b811 = getPlayerList();
                _0xc2b811['forEach'](_0x4bc43c => {
                    if (_0x4bc43c != self_id) {
                        removeEntityEffect(_0x4bc43c, 0xe);
                        setEntityFlag(_0x4bc43c, 0x5, false);
                        if (nh_exclude && target_list['includes'](_0x4bc43c)) target_list['splice'](target_list['indexOf'](_0x4bc43c), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x415d20['x'], _0x415d20['y'] - 0x1, _0x415d20['z'])['namespace'] === 'minecraft:glass' && _0x24a7b8) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !Criticals_status && _0x45692e['y'] < 0x0) {
                Criticals_status = true;
                callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
                playerJump();
            }
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || target_list['length'] > 0x0)) {
                const _0x37ce75 = rt_target ? getPos(target_list[0x0]) : self_pos;
                if (_0x37ce75) setPos(_0x37ce75['x'] + 马客在船举(-rt_range, rt_range), _0x37ce75['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x37ce75['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x3dbb09 = 马客在船举(ac_min, ac_max);
                let _0x30f79b = Math['round'](0x3e8 / _0x3dbb09);
                const _0x4063ac = target_list['length'] > 0x0 ? 声思似诉平(self_id, target_list[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x1dac21 = 0x0; _0x1dac21 < ac_times; _0x1dac21++) {
                    if (!_0x4063ac) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0x30f79b;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x51b0b9 = getEntityList()['forEach'](_0x3ed1de => {
                    if (getEntityNamespace(_0x3ed1de) != 'minecraft:item' || !findEntity(_0x3ed1de) || 声暗问弹者(_0x3ed1de, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x108428 = getPos(_0x3ed1de);
                    silentTP(_0x108428['x'], _0x108428['y'], _0x108428['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x48f0b8,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x48f0b8['yaw']
            });
            if (CustomItem) {
                const _0x4d0155 = getEntityCarriedItem(self_id);
                if (modelist['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modelist['custom_mode'], _0x4d0155);
                else if (modelist['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x4d0155);
                else if (modelist['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x4d0155);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x3802eb = [];
                if (modelist['sb_mode'] == 0x0) _0x3802eb = getPlayerList();
                if (modelist['sb_mode'] == 0x1) _0x3802eb = target_list;
                if (modelist['sb_mode'] == 0x2) _0x3802eb = ['lock_pos'];
                _0x3802eb['forEach'](_0x44ac9a => {
                    if (sb_exclude && _0x44ac9a == self_id) return;
                    let _0x93106 = null;
                    if (_0x44ac9a == 'lock_pos') _0x93106 = sb_pos;
                    else _0x93106 = 面转轴拨弦(_0x44ac9a);
                    if (!_0x93106) return;
                    let _0x498094 = getEntityRot(_0x44ac9a);
                    if (modelist['sb_mode'] < 0x2) {
                        _0x93106 = 忽闻水上琵(sb_offset, _0x93106, _0x498094);
                        _0x93106['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x50b7be = JSON['parse'](抱琵琶半遮(NoveXare_path + '/Shadow.json'));
                        _0x50b7be['forEach'](_0x5793fa => {
                            let _0x37147f = Math['sqrt'](_0x5793fa['x'] * _0x5793fa['x'] + _0x5793fa['y'] * _0x5793fa['y'] + _0x5793fa['z'] * _0x5793fa['z']);
                            let _0x349b47 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x5793fa, 'yaw_pos');
                            let _0x4a2314 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x5793fa, 'pitch_pos');
                            let _0x19a3d7 = 忽闻水上琵(_0x37147f, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x4a2314,
                                'yaw': _0x349b47 + sb_current_yaw
                            });
                            createShadow(_0x93106['x'] + _0x19a3d7['x'], _0x93106['y'] + _0x19a3d7['y'], _0x93106['z'] + _0x19a3d7['z']);
                        });
                    } else {
                        for (let _0x158d19 = Math['ceil'](-sb_length / 0x2); _0x158d19 < Math['floor'](sb_length / 0x2 + 0x1); _0x158d19++) {
                            for (let _0x13f882 = Math['ceil'](-sb_length / 0x2); _0x13f882 < Math['floor'](sb_length / 0x2 + 0x1); _0x13f882++) {
                                for (let _0x496c8b = Math['ceil'](-sb_length / 0x2); _0x496c8b < Math['floor'](sb_length / 0x2 + 0x1); _0x496c8b++) {
                                    createShadow(_0x93106['x'] + _0x158d19, _0x93106['y'] + _0x13f882 + 0x2, _0x93106['z'] + _0x496c8b);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_current_yaw < 0xb4) sb_current_yaw += sb_rot;
            else sb_current_yaw = -0xb4;
            if (SmallMap) {
                let _0x4bf1a8 = [
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
                let _0x50e795 = [];
                if (sm_player) _0x50e795['push'](...getPlayerList());
                if (sm_entity) _0x50e795['push'](...getEntityList());
                if (sm_target) _0x50e795['push'](...target_list);
                _0x50e795['forEach'](_0x54bf8d => {
                    let _0x44484c = 弦弦掩抑声(self_id, _0x54bf8d, 'yaw_rot');
                    let _0x50815e = 声暗问弹者(self_id, _0x54bf8d);
                    let _0x5c7c85 = Math['floor'](_0x50815e / sm_size * sm_proportion * -Math['sin'](_0x44484c * Math['PI'] / 0xb4) * 0xa);
                    let _0x29479b = Math['floor'](_0x50815e / sm_size * sm_proportion * -Math['cos'](_0x44484c * Math['PI'] / 0xb4) * 0xa);
                    if (_0x5c7c85 > 0x5) _0x5c7c85 = 0x5;
                    if (_0x29479b > 0x5) _0x29479b = 0x5;
                    if (_0x5c7c85 < -0x5) _0x5c7c85 = -0x5;
                    if (_0x29479b < -0x5) _0x29479b = -0x5;
                    _0x4bf1a8[_0x29479b + 0x5][_0x5c7c85 + 0x5] = ' §e◆§r ';
                });
                let _0x2105aa = _0x4bf1a8['map'](_0x3f5305 => _0x3f5305['join'](''))['join']('\n');
                _0xc56e6a['push'](归客不发寻(0x1, 'Map', '\n' + _0x2105aa, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (anchor_target === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x424b92 = getPos(anchor_target);
                    const _0xfd59b = getEntitySize(anchor_target);
                    setCameraAnchor(_0x424b92['x'] - self_pos['x'], _0x424b92['y'] - self_pos['y'] + 0.85 * _0xfd59b['y'], -_0x424b92['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x29bdf8 = getPos(cm_attack);
                    const _0x43597d = getEntitySize(cm_attack);
                    setCameraAnchor(_0x29bdf8['x'] - self_pos['x'], _0x29bdf8['y'] - self_pos['y'] + 0.85 * _0x43597d['y'], -_0x29bdf8['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x45692e['x'] * cm_moverange, -_0x45692e['y'] * cm_moverange, _0x45692e['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset((cm_x - 0x19) / 0x3, (cm_y - 0x19) / 0x3, (cm_z - 0x19) / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x1563ff['current'] < last_tick_heal) last_tick_heal = _0x1563ff['current'];
            if (NoDebuff) debuff['forEach'](_0x445aee => removeEntityEffect(self_id, _0x445aee));
            if (MoveJump && isMoving && _0x24a7b8) playerJump();
            if (ChunkRender) {
                let _0x59417a = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x3f422b = {
                    'x': _0x59417a['x'] * 0x10,
                    'z': _0x59417a['z'] * 0x10
                };
                let _0x3f89cd = {
                    'x': (_0x59417a['x'] + 0x1) * 0x10,
                    'z': (_0x59417a['z'] + 0x1) * 0x10
                };
                for (let _0x136401 = 0x0; _0x136401 < 0x10; _0x136401++) {
                    妇遂命酒使(0x37, _0x3f422b['x'] + _0x136401, self_pos['y'], _0x3f422b['z'], 0x1);
                    妇遂命酒使(0x37, _0x3f422b['x'], self_pos['y'], _0x3f422b['z'] + _0x136401, 0x1);
                    妇遂命酒使(0x37, _0x3f89cd['x'] - _0x136401, self_pos['y'], _0x3f89cd['z'], 0x1);
                    妇遂命酒使(0x37, _0x3f89cd['x'], self_pos['y'], _0x3f89cd['z'] - _0x136401, 0x1);
                }
                _0xc56e6a['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x59417a['x'] + '， ' + _0x59417a['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x5e20a4 of again_item) {
                    if (modelist['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x5e20a4, -0x1, '一局'));
                    if (modelist['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x5e20a4, -0x1, '一局'));
                        const _0x43a620 = getCarried(self_id);
                        if (_0x43a620['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (goto_pos != null) {
                const _0x4f73ac = getHorizontalDistance(self_pos, goto_pos);
                const _0x21de1e = getDistance(self_pos, goto_pos);
                if (_0x21de1e >= 0x5) {
                    let _0x25f8cf = 弦弦掩抑声(self_id, goto_pos, 'yaw_pos');
                    let _0x2daec3 = 忽闻水上琵(-default_speed / 0xa, self_pos, {
                        'yaw': _0x25f8cf,
                        'pitch': 0x0
                    });
                    if (_0x4f73ac >= 0x3) setMotion(_0x2daec3['x'] - self_pos['x'], _0x45692e['y'], _0x2daec3['z'] - self_pos['z']);
                    else setMotion(_0x45692e['x'], (_0x2daec3['y'] - self_pos['y'] > 0x0 ? default_speed : -default_speed) / 0xa, _0x45692e['z']);
                } else {
                    goto_pos = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x156d18 = 0x0; _0x156d18 < ral_num; _0x156d18++) {
                    const _0x6a2438 = 慢捻抹复挑(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x156d18, _0x6a2438, _0x6a2438, true);
                }
            }
            if (ShowNowTime) {
                const _0x3257f7 = new Date();
                const _0x4b2c11 = _0x3257f7['getFullYear']();
                const _0x7df965 = ('0' + (_0x3257f7['getMonth']() + 0x1))['slice'](-0x2);
                const _0x11123c = ('0' + _0x3257f7['getDate']())['slice'](-0x2);
                const _0x5e89d7 = ('0' + _0x3257f7['getHours']())['slice'](-0x2);
                const _0x414923 = ('0' + _0x3257f7['getMinutes']())['slice'](-0x2);
                const _0x15b4fa = ('0' + _0x3257f7['getSeconds']())['slice'](-0x2);
                const _0x23ab61 = _0x4b2c11 + '-' + _0x7df965 + '-' + _0x11123c + ' ' + _0x5e89d7 + ':' + _0x414923 + ':' + _0x15b4fa;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x23ab61, '当前时间: ' + _0x23ab61, true);
            }
            if (ChestAura) {
                let _0x4d89a5 = 面转轴拨弦(self_id);
                let _0xebafc9 = ca_range;
                for (let _0x3399f6 = -_0xebafc9; _0x3399f6 < _0xebafc9; _0x3399f6++) {
                    for (let _0x37d630 = -_0xebafc9; _0x37d630 < _0xebafc9; _0x37d630++) {
                        for (let _0x3bd6d4 = -_0xebafc9; _0x3bd6d4 < _0xebafc9; _0x3bd6d4++) {
                            const _0x12a350 = getBlock(_0x4d89a5['x'] + _0x3399f6, _0x4d89a5['y'] + _0x37d630, _0x4d89a5['z'] + _0x3bd6d4);
                            if (_0x12a350['namespace'] != 'minecraft:chest') continue;
                            const _0x165df4 = getBlock(_0x4d89a5['x'] + _0x3399f6, _0x4d89a5['y'] + _0x37d630 + 0x1, _0x4d89a5['z'] + _0x3bd6d4);
                            const _0x182b45 = {
                                'x': _0x4d89a5['x'] + _0x3399f6,
                                'y': _0x4d89a5['y'] + _0x37d630,
                                'z': _0x4d89a5['z'] + _0x3bd6d4
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x182b45)) && ca_exclude || isOpenChest || !惨将别别时(_0x4d89a5, _0x182b45, ca_wall, 1.53, 0.5) || ca_block && _0x165df4['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x182b45, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x4d89a5['x'] + _0x3399f6, _0x4d89a5['y'] + _0x37d630, _0x4d89a5['z'] + _0x3bd6d4, 0x1);
                            if (!ca_check || open_chest['packet'] && open_chest['click']) ca_chest_pos['push'](JSON['stringify'](_0x182b45));
                            if (ca_check && open_chest['packet'] && open_chest['click']) {
                                open_chest['click'] = false;
                                open_chest['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x5f07f6['forEach'](_0x2b016b => {
                    const {
                        name,
                        id
                    } = _0x2b016b;
                    if (id === self_id || name === '') return;
                    let _0x4f0969 = null;
                    if (modelist['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x4f0969 = id;
                    if (modelist['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x4f0969 = id;
                    if (modelist['as_mode'] === 0x2) {
                        as_config['forEach'](_0x479ab1 => {
                            if (_0x479ab1['match_mode'] === '精准' && _0x479ab1['has_mode'] === '存在' && _0x479ab1['texts']['some'](_0x11065c => name === _0x11065c) != _0x479ab1['reverse_selection']) _0x4f0969 = id;
                            if (_0x479ab1['match_mode'] === '精准' && _0x479ab1['has_mode'] === '同时' && _0x479ab1['texts']['every'](_0x2387c4 => name === _0x2387c4) != _0x479ab1['reverse_selection']) _0x4f0969 = id;
                            if (_0x479ab1['match_mode'] === '模糊' && _0x479ab1['has_mode'] === '存在' && _0x479ab1['texts']['some'](_0x2818ba => name['includes'](_0x2818ba)) != _0x479ab1['reverse_selection']) _0x4f0969 = id;
                            if (_0x479ab1['match_mode'] === '精准' && _0x479ab1['has_mode'] === '存在' && _0x479ab1['texts']['every'](_0x5454b8 => name['includes'](_0x5454b8)) != _0x479ab1['reverse_selection']) _0x4f0969 = id;
                        });
                    }
                    if (modelist['as_mode'] === 0x3) _0x4f0969 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x4f0969 = null;
                    if (as_ground && getEntityIsGround(id)) _0x4f0969 = null;
                    if (_0x4f0969 === null) return;
                    if (modelist['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modelist['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modelist['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modelist['anti_mode'] === 0x3) _0xc56e6a['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modelist['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) target_list['forEach'](_0x4d5a46 => interactEntity(_0x4d5a46));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modelist['person_mode']);
            if (Tower && (_0x48f0b8['pitch'] < -0x50 || _0x48f0b8['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x24a7b8 || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0x415d20['x'], self_pos['y'] - 0x2, _0x415d20['z']), tower_delay * 0x32);
                }
            }
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x5f07f6['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x5f07f6['length'], '§r');
                    last_world_player = _0x5f07f6;
                }
                if (sv_id && self_id != last_tick_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + last_tick_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x5d1556 = [];
                _0x5f07f6['forEach'](_0x4acfff => {
                    if (modelist['ca_mode'] == 0x0 && 十六言命曰(_0x4acfff['id'], -0x1) > 0x14) _0x5d1556['push'](getEntityName(_0x4acfff['id']));
                    if (modelist['ca_mode'] == 0x1 && getEntityMaxDamage(_0x4acfff['id']) > 0x14) _0x5d1556['push'](getEntityName(_0x4acfff['id']));
                });
                if (_0x5d1556['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x5d1556), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x5f07f6['length']) {
                const _0x1c1ca7 = _0x5f07f6['map'](_0x5a61d7 => _0x5a61d7['name']);
                let _0x16779d = 三两声未成(last_world_player, _0x1c1ca7);
                let _0x5614fe = last_world_player['length'] < _0x1c1ca7['length'];
                if (_0x5614fe) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x16779d) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x16779d) + '离开了世界', '§r');
                last_world_player = _0x1c1ca7;
            }
            if (DropRes && _0x45692e['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x514462 = getInventory(self_id, index);
                    if (resList['includes'](_0x514462['namespace'])) dropPlayerInventorySlot(self_id, index);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    target_list['forEach'](_0x9f2300 => {
                        if (声思似诉平(self_id, _0x9f2300, aaa_fov, 0x0)) {
                            if (aa_use) 快弹数曲曲();
                            else 江头夜送客(_0x9f2300, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x8566b2 = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x32bd24 = getCarried(self_id);
                        if (hs_use && !_0x32bd24['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x8566b2['name']) || selectitems['includes'](_0x8566b2['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x51107d = getCarried(self_id);
                    if (hs_use && !_0x51107d['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot) {
                const _0x578e38 = 是夕始觉有(self_id, 'splash_potion', 'hotbar', ap_min);
                const _0x25e8a3 = 是夕始觉有(self_id, 'splash_potion', 'inv', 0x0);
                if (_0x25e8a3) {
                    if (ap_autobag && !_0x578e38) openInventory();
                    if (!_0x578e38) {
                        for (let _0x482a80 = splash_slot === -0x1 ? 0x23 : 0x9; _0x482a80 > -0x1; _0x482a80--) {
                            if (splash_slot > -0x1) {
                                const _0x4a1d77 = getInventory(self_id, _0x482a80);
                                if (_0x4a1d77['namespace'] === 'minecraft:air') {
                                    女尝学琵琶(splash_slot, _0x482a80, false);
                                    splash_slot = -0x1;
                                    break;
                                }
                            }
                            const _0x22a168 = getInventory(self_id, _0x482a80);
                            if (splash_slot === -0x1 && _0x22a168['namespace'] === 'minecraft:splash_potion') splash_slot = _0x482a80;
                        }
                    }
                    if (ap_autobag && _0x578e38) setTimeout(() => closeInventory(), 0x64);
                }
            }
            if (SmartInv && (!da_change || item_count != lasttick_item_count) && (!da_bow || _0x48f0b8['pitch'] > 0x50) && (!da_chest || isOpenChest)) {
                let _0x1ae6f4 = 0x1;
                let _0x15d454 = [0x0, 0x0, 0x0, 0x0];
                let _0x12e930 = -0x1;
                let _0x5cfc56 = [-0x1, -0x1, -0x1, -0x1];
                for (let _0x553b0f = 0x23; _0x553b0f > -0x1; _0x553b0f--) {
                    const _0x190873 = 迁谪意因为(self_id, _0x553b0f);
                    if (_0x190873 === 'other') continue;
                    const _0x3002ff = armorTypes['indexOf'](_0x190873);
                    if (_0x3002ff === -0x1 && !['sword', 'axe', 'pickaxe']['includes'](_0x190873)) continue;
                    if (da_weapon) {
                        const _0x1bdd28 = 十六言命曰(self_id, _0x553b0f, da_texture, da_enchant);
                        if (_0x1bdd28 > 0x14) continue;
                        if (['sword', 'axe', 'pickaxe']['includes'](_0x190873) && _0x1bdd28 > _0x1ae6f4) {
                            _0x1ae6f4 = _0x1bdd28;
                            _0x12e930 = _0x553b0f;
                        } else if (['sword', 'axe', 'pickaxe']['includes'](_0x190873) && _0x1bdd28 <= _0x1ae6f4) dropPlayerInventorySlot(self_id, _0x553b0f);
                    }
                    if (da_armor) {
                        const _0x3413c0 = 之凡六百一(self_id, _0x553b0f, da_texture, da_enchant);
                        if (_0x3002ff > -0x1 && _0x3413c0 > _0x15d454[_0x3002ff]) {
                            _0x15d454[_0x3002ff] = _0x3413c0;
                            _0x5cfc56[_0x3002ff] = _0x553b0f;
                        } else if (_0x3002ff > -0x1 && _0x3413c0 <= _0x15d454[_0x3002ff]) dropPlayerInventorySlot(self_id, _0x553b0f);
                    }
                }
                if (da_move) {
                    if (_0x12e930 > -0x1) 女尝学琵琶(_0x12e930, SmartInvCfg['sword'], false, true);
                    for (let _0x365322 in _0x5cfc56) {
                        let _0x2e809a = _0x5cfc56[_0x365322];
                        if (_0x2e809a > -0x1 && move_armor_slot < 0x0) 女尝学琵琶(_0x2e809a, SmartInvCfg[armorTypes[_0x365322]], false, true);
                        if (_0x2e809a > -0x1 && move_armor_slot > -0x1) 女尝学琵琶(_0x2e809a, move_armor_slot, false, true);
                    }
                }
                if (da_chest) isOpenChest = false;
            }
            if (AutoArmor) {
                let _0x10a6b0 = 迁谪意因为(self_id, armor_slot);
                let _0x2ac68a = 之凡六百一(self_id, armor_slot);
                if (_0x10a6b0 != 'other' && _0x2ac68a !== 0x0) {
                    for (let _0x283c6a = 0x0; _0x283c6a < aa_times; _0x283c6a++) {
                        if (_0x10a6b0 === 'helmet' && _0x2ac68a > 之凡六百一(self_id, -0x2)) 罢悯然自叙(armor_slot);
                        if (_0x10a6b0 === 'chestplate' && _0x2ac68a > 之凡六百一(self_id, -0x3)) 罢悯然自叙(armor_slot);
                        if (_0x10a6b0 === 'leggings' && _0x2ac68a > 之凡六百一(self_id, -0x4)) 罢悯然自叙(armor_slot);
                        if (_0x10a6b0 === 'boots' && _0x2ac68a > 之凡六百一(self_id, -0x5)) 罢悯然自叙(armor_slot);
                    }
                    if (armor_slot > (modelist['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
                }
            }
            if (Remover) {
                const _0x359f97 = getEntityList();
                _0x359f97['forEach'](_0xeb686f => {
                    let _0x39c9bd = false;
                    if (rmer_entity) _0x39c9bd = !isPlayer(_0xeb686f);
                    if (rmer_item) _0x39c9bd = getEntityNamespace(_0xeb686f) == 'minecraft:item';
                    if (_0x39c9bd) removeEntity(_0xeb686f);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && last_tick_item['count'] > 0x0 && last_tick_item['namespace'] != 'minecraft:air') {
                for (let _0x2982bd = 0x8; _0x2982bd >= 0x0; _0x2982bd--) {
                    let _0x414747 = getInventory(self_id, _0x2982bd);
                    if (_0x414747['namespace'] === last_tick_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x2982bd);
                        break;
                    }
                }
            }
            if (FreeCam && freecam_pos != {}) {
                if (fc_draw) {
                    for (let _0x32a1a4 = 0x0; _0x32a1a4 <= 0x12; _0x32a1a4 += 0x2) 妇遂命酒使(0x37, freecam_pos['x'], freecam_pos['y'] - 1.53 + _0x32a1a4 / 0xa, freecam_pos['z'], 0x1);
                    _0xc56e6a['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + freecam_pos['x']['toFixed'](0x2) + ', Y:' + freecam_pos['y']['toFixed'](0x2) + ', Z:' + freecam_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0xc56e6a['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, freecam_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x53009b = getEntityList();
                _0x53009b['forEach'](_0x5c4223 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x5c4223)) && target_list['length'] > 0x0) {
                        const _0x2097ad = getPos(target_list[0x0]);
                        let _0x758da5 = 弦弦掩抑声(_0x2097ad, getPos(_0x5c4223), 'yaw_pos');
                        let _0x429b3c = -弦弦掩抑声(_0x2097ad, getPos(_0x5c4223), 'pitch_pos');
                        const _0x53fe3f = getPos(_0x5c4223);
                        const _0x59a19a = 忽闻水上琵(tt_speed, _0x53fe3f, {
                            'yaw': _0x758da5,
                            'pitch': _0x429b3c
                        });
                        setEntityMotion(_0x5c4223, _0x59a19a['x'] - _0x53fe3f['x'], _0x59a19a['y'] - _0x53fe3f['y'], _0x59a19a['z'] - _0x53fe3f['z']);
                    }
                });
                if (target_list['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(target_list[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x26cf16 = getEntityList();
                _0x26cf16['forEach'](_0x44a0f3 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x44a0f3))) {
                        const _0x5a1fe8 = getPos(_0x44a0f3);
                        if (typeof arrow_rot[_0x44a0f3] === 'undefined') arrow_rot[_0x44a0f3] = _0x48f0b8;
                        const _0x292a17 = arrow_rot[_0x44a0f3]['yaw'];
                        const _0x3c9588 = arrow_rot[_0x44a0f3]['pitch'];
                        const _0x379b1c = 忽闻水上琵(0x1, _0x5a1fe8, {
                            'yaw': _0x292a17,
                            'pitch': _0x3c9588
                        });
                        setEntityMotion(_0x44a0f3, _0x379b1c['x'] - _0x5a1fe8['x'], _0x379b1c['y'] - _0x5a1fe8['y'], _0x379b1c['z'] - _0x5a1fe8['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x4238b3 = getEntityList();
                _0x4238b3['forEach'](_0x59cc6d => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x59cc6d)) && Arrow_id === null && !ArrowList['includes'](Arrow_id)) Arrow_id = _0x59cc6d;
                });
                if (Arrow_id != null) {
                    if (!ArrowList['includes'](Arrow_id)) ArrowList['push'](Arrow_id);
                    let _0x145797 = getPos(Arrow_id);
                    setCameraAnchor(_0x145797['x'] - self_pos['x'] + (av_x - 0xa), _0x145797['y'] - self_pos['y'] + (av_y - 0xa), -_0x145797['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(Arrow_id)) Arrow_id = null;
            }
            if (FPSReducer) {
                for (let _0x539ac8 = 0x0; _0x539ac8 < fpsr_rate * 0xa; _0x539ac8++) {
                    for (let _0x35220a = 0x0; _0x35220a < fpsr_rate * 0xa; _0x35220a++) getEntityName(_0x539ac8 + _0x35220a);
                }
            }
            if (ArrowParticle) {
                const _0x2bc070 = getEntityList();
                _0x2bc070['forEach'](_0x556479 => {
                    if (getEntityNamespace(_0x556479) === 'minecraft:arrow') {
                        const _0x280a65 = getPos(_0x556479);
                        妇遂命酒使(arp_type, _0x280a65['x'], _0x280a65['y'], _0x280a65['z'], 0x1);
                    }
                });
            }
            if (FightBot && target_list['length'] > 0x0) {
                let _0x5ee742 = getPos(target_list[0x0]);
                let _0xf06c1f = {};
                if (fb_chest) {
                    const _0x15f22a = 面转轴拨弦(self_id);
                    for (let _0x58bcd4 = -0x2; _0x58bcd4 < 0x3; _0x58bcd4++) {
                        for (let _0x29d585 = -0x2; _0x29d585 < 0x3; _0x29d585++) {
                            for (let _0x2e92e = -0x2; _0x2e92e < 0x3; _0x2e92e++) {
                                const _0x44ba4b = getBlock(_0x15f22a['x'] + _0x58bcd4, _0x15f22a['y'] + _0x29d585, _0x15f22a['z'] + _0x2e92e);
                                const _0x5109ab = 添酒回灯重([_0x15f22a['x'] + _0x58bcd4, _0x15f22a['y'] + _0x29d585, _0x15f22a['z'] + _0x2e92e]);
                                if (_0x44ba4b['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x5109ab)) {
                                    _0xf06c1f = {
                                        'x': _0x15f22a['x'] + _0x58bcd4,
                                        'y': _0x15f22a['y'] + _0x29d585,
                                        'z': _0x15f22a['z'] + _0x2e92e
                                    };
                                    ca_chest_pos['push'](_0x5109ab);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x1fa919 = (_0x24a7b8 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x54f34f = 马客在船举(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x54f34f) {
                    _0x5ee742 = 忽闻水上琵(_0x1fa919, _0x5ee742, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x46b449 = 弦弦掩抑声(self_id, _0x5ee742, 'yaw_pos');
                let _0x299e5f = 忽闻水上琵(_0x1fa919, getPos(self_id), {
                    'yaw': _0x46b449,
                    'pitch': 0x0
                });
                if (_0x1563ff['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x31adc9 = 谁琵琶声停(self_id, target_list[0x0]);
                if (_0x31adc9 > fb_seek) {
                    if (_0x24a7b8) setEntityMotion(self_id, _0x299e5f['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x24a7b8 ? fb_y : _0x45692e['y'], _0x299e5f['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) rec_y = 0x0;
                    if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0) && _0x31adc9 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x24a7b8) setEntityMotion(self_id, fb_randMove && _0x54f34f ? _0x299e5f['x'] - self_pos['x'] : _0x45692e['x'], fb_combo && !getEntityIsGround(target_list[0x0]) ? fb_y : _0x45692e['y'], fb_randMove && _0x54f34f ? _0x299e5f['z'] - self_pos['z'] : _0x45692e['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0xf06c1f) != '{}') {
                    let _0x4eb738 = 弦弦掩抑声(self_id, _0xf06c1f, 'yaw_pos');
                    let _0x27b46b = 忽闻水上琵(_0x1fa919, getPos(self_id), {
                        'yaw': _0x4eb738,
                        'pitch': 0x0
                    });
                    if (_0x24a7b8) setEntityMotion(self_id, _0x27b46b['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x24a7b8 ? fb_y : _0x45692e['y'], _0x27b46b['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x3bcbaf = 0x0; _0x3bcbaf < rpc_repeat_times; _0x3bcbaf++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x5a5ba3 = 0x0; _0x5a5ba3 < shift_num; _0x5a5ba3++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && target_list['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x1bbd05 = 0x0;
                    target_list['forEach'](_0x19d91a => {
                        let _0x137281 = 面转轴拨弦(_0x19d91a);
                        if (ac_excludeY && Math['abs'](_0x137281['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x137281['x'], _0x137281['y'] + 0x1, _0x137281['z']);
                        _0x4e2652: for (let _0x1682ae = -0x1; _0x1682ae < 0x2; _0x1682ae++) {
                            for (let _0x15d431 = -0x2; _0x15d431 < 0x0; _0x15d431++) {
                                for (let _0x3cb60a = -0x1; _0x3cb60a < 0x2; _0x3cb60a++) {
                                    let _0x23d290 = getBlock(_0x137281['x'] + _0x1682ae, _0x137281['y'] + _0x3cb60a, _0x137281['z'] + _0x15d431);
                                    if (_0x1bbd05 > ac_count) break _0x4e2652;
                                    if ((_0x23d290['namespace'] === 'minecraft:bedrock' || _0x23d290['namespace'] === 'minecraft:obsidian') && _0x1bbd05 < ac_count) {
                                        buildBlock(self_id, _0x137281['x'] + _0x1682ae, _0x137281['y'] + _0x3cb60a, _0x137281['z'] + _0x15d431, 0x1);
                                        _0x1bbd05 += 0x1;
                                    }
                                }
                            }
                        }
                    });
                } else _0xc56e6a['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x55e433 = getEntityList();
                _0x55e433['forEach'](_0x1939dd => {
                    if (!才年长色衰(_0x1939dd)) return;
                    const _0x459b24 = getPos(_0x1939dd);
                    if (getEntityTypeId(_0x1939dd) !== 0x47 || 声暗问弹者(_0x1939dd, target_list[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x333419 = 0x0; _0x333419 < 0x9; _0x333419++) {
                            const _0x410569 = getInventory(self_id, _0x333419);
                            if (_0x410569['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x333419);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x415d20['x'] + _0x459b24['x']) / 0x2, (_0x415d20['y'] + _0x459b24['y']) / 0x2, (_0x415d20['z'] + _0x459b24['z']) / 0x2, 0x0);
                        江头夜送客(_0x1939dd, Swing);
                    }
                });
            }
            if (AutoBomb && target_list['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    target_list['forEach'](_0x59702b => {
                        let _0x420120 = 面转轴拨弦(_0x59702b);
                        let _0x174663 = getBlock(_0x420120['x'], _0x420120['y'] + 0x2, _0x420120['z']);
                        if (_0x174663['namespace'] === 'minecraft:air') buildBlock(self_id, _0x420120['x'], _0x420120['y'] + 0x2, _0x420120['z'], 0x0);
                        _0x174663 = getBlock(_0x420120['x'], _0x420120['y'] + 0x2, _0x420120['z']);
                        if (_0x174663['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x420120['x'], _0x420120['y'] + 0x2, _0x420120['z'], 0x0);
                    });
                } else _0xc56e6a['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && target_list['length'] > 0x0) {
                target_list['forEach'](_0x3dc3ad => {
                    const _0x2c6a9f = 面转轴拨弦(_0x3dc3ad);
                    let _0x3b9741 = [
                        [_0x2c6a9f['x'], _0x2c6a9f['y'] + 0x2, _0x2c6a9f['z']],
                        [_0x2c6a9f['x'] + 0x1, _0x2c6a9f['y'], _0x2c6a9f['z']],
                        [_0x2c6a9f['x'] - 0x1, _0x2c6a9f['y'], _0x2c6a9f['z']],
                        [_0x2c6a9f['x'], _0x2c6a9f['y'], _0x2c6a9f['z'] + 0x1],
                        [_0x2c6a9f['x'], _0x2c6a9f['y'], _0x2c6a9f['z'] - 0x1],
                        [_0x2c6a9f['x'] + 0x1, _0x2c6a9f['y'] + 0x1, _0x2c6a9f['z']],
                        [_0x2c6a9f['x'] - 0x1, _0x2c6a9f['y'] + 0x1, _0x2c6a9f['z']],
                        [_0x2c6a9f['x'], _0x2c6a9f['y'] + 0x1, _0x2c6a9f['z'] + 0x1],
                        [_0x2c6a9f['x'], _0x2c6a9f['y'] + 0x1, _0x2c6a9f['z'] - 0x1]
                    ];
                    for (pos of _0x3b9741) {
                        let _0x208ab0 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x208ab0['namespace'] === 'minecraft:air' && modelist['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x208ab0['namespace'] != 'minecraft:air' && modelist['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && target_list['length'] > 0x0) {
                let _0x2171a8 = [];
                let _0x17a8c3 = false;
                random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? target_list['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                target_list['forEach'](_0x316500 => {
                    let _0x48b91b = getPos(_0x316500);
                    if (!((声暗问弹者(self_id, _0x316500) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x316500, ka_fov, 0x0) && 惨将别别时(self_pos, _0x48b91b, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x45692e['y'] < -0.42))) return;
                    _0x2171a8['push'](_0x316500);
                    KillAura_d_1[_0x316500] = Date['now']();
                    if (typeof KillAura_d_2[_0x316500] !== 'undefined' && KillAura_d_1[_0x316500] - KillAura_d_2[_0x316500] < 0x0) return;
                    _0x17a8c3 = true;
                    for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x316500, Swing);
                    KillAura_d_2[_0x316500] = KillAura_d_1[_0x316500] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x17a8c3 ? 0x1 : 0x0);
                });
                if (_0x2171a8['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x2171a8['length'] + '个目标' : 添酒回灯重(_0x2171a8['map'](_0x2850a5 => getEntityName(_0x2850a5))), '§r'));
                const _0x1191ae = _0x2171a8['length'] * random_num * ka_times;
                if (ka_show) _0xc56e6a['push'](归客不发寻(0x1, 'APS', _0x1191ae + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x45692e['y'] < -0.074 && !_0x24a7b8) setMotion(_0x45692e['x'], -sd_speed / 0xf, _0x45692e['z']);
            if (SurroundParticle && (isMoving || !srp_move)) {
                surround_particle_yaw = surround_particle_yaw + srp_speed * 0x3;
                if (surround_particle_yaw > 0xb4) surround_particle_yaw = -0xb4;
                let _0x53fd8f = 忽闻水上琵(srp_len, self_pos, {
                    'yaw': surround_particle_yaw,
                    'pitch': 0x0
                });
                妇遂命酒使(srp_type, _0x53fd8f['x'], _0x53fd8f['y'] - 1.8 + srp_y, _0x53fd8f['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x4c934a = motion_list['shift']();
                setMotion(_0x4c934a[0x0], _0x4c934a[0x1], _0x4c934a[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                rec_y = !sca_keep || rec_y === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : rec_y;
                if (sca_count) createText(0x69, 0x13, self_item['name'] + ' x' + self_item['count'], sca_count, 'sca_count');
                const _0x441848 = 酒欲饮无管(_0x45692e, self_pos, 0xa);
                var _0x35b429 = sca_move || isMoving ? 弦弦掩抑声(_0x441848, self_id, 'yaw_pos') : _0x48f0b8['yaw'];
                var _0x3ba06b = sca_move || isMoving ? 弦弦掩抑声(_0x441848, self_id, 'pitch_pos') : _0x48f0b8['pitch'];
                if (!sca_acc) _0x35b429 = angleRound(_0x35b429, sca_prec);
                if (!sca_acc) _0x3ba06b = angleRound(_0x3ba06b, sca_prec);
                if (sca_auto) {
                    let _0x49cee3 = {};
                    let _0x2f9bf9 = Infinity;
                    for (let _0xf80723 = -0x3; _0xf80723 <= 0x3; _0xf80723++) {
                        for (let _0xef585d = -0x3; _0xef585d <= -0x1; _0xef585d++) {
                            for (let _0x36bb2c = -0x3; _0x36bb2c <= 0x3; _0x36bb2c++) {
                                let _0x418ac2 = {
                                    'x': _0xf80723 + _0x415d20['x'],
                                    'y': Math['floor'](rec_y) - 0x1 + _0xef585d,
                                    'z': _0x36bb2c + _0x415d20['z']
                                };
                                const _0x3937c7 = getBlock(_0x418ac2['x'], _0x418ac2['y'], _0x418ac2['z']);
                                if (_0x3937c7['namespace'] == 'minecraft:air') continue;
                                let _0x5720d1 = Math['sqrt'](_0xf80723 * _0xf80723 - _0xef585d * _0xef585d + _0x36bb2c * _0x36bb2c);
                                if (_0x5720d1 < _0x2f9bf9) {
                                    _0x2f9bf9 = _0x5720d1;
                                    _0x49cee3 = _0x418ac2;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x49cee3) != '{}') {
                        let _0x462541 = 眉信手续续(_0x49cee3, _0x415d20, 0x1, true);
                        _0x462541['forEach'](_0x3bbd6a => {
                            if (sca_surface) 事今漂沦憔(Math['round'](_0x3bbd6a['x']), Math['round'](rec_y - 0x1), Math['round'](_0x3bbd6a['z']));
                            else buildBlock(self_id, Math['round'](_0x3bbd6a['x']), Math['round'](rec_y - 0x1), Math['round'](_0x3bbd6a['z']), 0x1);
                        });
                    }
                }
                for (let _0x508713 = 0x0; _0x508713 < sca_len; _0x508713++) {
                    const _0x5ee82c = 忽闻水上琵(_0x508713, self_pos, {
                        'yaw': _0x35b429,
                        'pitch': sca_y ? _0x3ba06b : 0x0
                    });
                    let _0x25cab9 = {
                        'x': Math['floor'](_0x5ee82c['x']),
                        'y': Math['floor'](rec_y) - 0x1,
                        'z': Math['floor'](_0x5ee82c['z'])
                    };
                    let _0x2cd155 = getBlock(_0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x2cd155['namespace'])) continue;
                    if (sca_fake) setBlock(_0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 事今漂沦憔(_0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z']);
                    else buildBlock(self_id, _0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z'], 0x1);
                    if (sca_up) {
                        const _0x4c9e6f = getBlock(_0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x4c9e6f['namespace'])) buildBlock(self_id, _0x25cab9['x'], Math['floor'](_0x25cab9['y']), _0x25cab9['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x1ecf82 = 0x0; _0x1ecf82 < 0x9; _0x1ecf82++) {
                    const _0x5b4017 = getInventory(self_id, _0x1ecf82);
                    if (_0x5b4017['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x1ecf82);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, Swing);
            if (TargetHud) {
                if (modelist['th_select_mode'] === 0x0) th_target = target_list[0x0];
                if (th_target) {
                    let _0x370702 = [];
                    const _0x409b9b = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x31a705 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x57a1ae = 面转轴拨弦(th_target);
                    if (th_name) _0x370702['push'](getEntityName(th_target));
                    if (th_carry) _0x370702['push'](_0x409b9b['name'] + ' x' + _0x409b9b['count']);
                    if (th_dist) _0x370702['push']('距离: ' + _0x31a705 + 'm');
                    if (th_health) _0x370702['push']('血量: ' + 无限事轻拢(th_target, modelist['th_health_mode']));
                    if (th_pos) _0x370702['push']('[' + _0x57a1ae['x'] + ', ' + _0x57a1ae['y'] + ', ' + _0x57a1ae['z'] + ']');
                    createText(0x69 + th_x, 0x13 + th_y / 0xa, _0x370702['join']('\n'), true, 'TargetHud');
                }
            }
            if (AntiVoid) {
                if (modelist['av_mode'] === 0x0) {
                    if (!lagback_run && !_0x24a7b8 && _0x45692e['y'] > -av_minY) lagback_pos['push'](_0x415d20);
                    if (!lagback_run && _0x24a7b8) lagback_pos = [];
                    if (!lagback_run && _0x45692e['y'] <= -av_minY) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0x3b021f = lagback_pos.pop();
                            setPos(_0x3b021f['x'], _0x3b021f['y'], _0x3b021f['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else lagback_run = false;
                    }
                }
                if (_0x45692e['y'] <= -av_minY && modelist['av_mode'] === 0x1) {
                    const _0x324c17 = {
                        'rot': _0x48f0b8,
                        'yHeadRot': 0x0
                    };
                    const _0x3be363 = {
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
                        ..._0x324c17
                    };
                    const _0x104356 = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x324c17
                    };
                    sendPlayerAuthInput(_0x3be363);
                    sendMovePlayer(_0x104356);
                }
                if (modelist['av_mode'] === 0x2) {
                    if (!lagback_run && _0x24a7b8 && _0x45692e['y'] > -av_minY) lagback_pos[0x0] = self_pos;
                    if (!lagback_run && _0x45692e['y'] <= -av_minY) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0xe20409 = lagback_pos[0x0];
                            setPos(_0xe20409['x'], _0xe20409['y'], _0xe20409['z']);
                            lagback_pos = [];
                        } else lagback_run = false;
                    }
                }
            }
            if (GodMode && (!gm_move || isMoving) && (!gm_ground || _0x24a7b8)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x9acf1 = 0x0; _0x9acf1 < gm_count; _0x9acf1++) {
                        if (modelist['gm_mode'] === 0x0) 二年恬然自(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
                        if (modelist['gm_mode'] === 0x1) setPos(self_pos['x'], gm_y > 0x0 ? 0xa ** gm_y : -0x3, self_pos['z']);
                        if (modelist['gm_mode'] === 0x2) sendPlayerAuthInput({
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
                            'rot': _0x48f0b8,
                            'yHeadRot': 0x0
                        });
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x5e0b79 = 0x0; _0x5e0b79 < gm_count; _0x5e0b79++) {
                        if (modelist['gm_mode'] < 0x2) setPos(gm_pos['x'], gm_pos['y'], gm_pos['z']);
                        if (modelist['gm_mode'] < 0x2) setMotion(gm_mot['x'], gm_mot['y'], gm_mot['z']);
                        if (modelist['gm_mode'] === 0x2) {
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
                                'rot': _0x48f0b8,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && target_list['length'] > 0x0 && 谁琵琶声停(self_id, target_list[0x0]) < kd_distance && (_0x24a7b8 || !kd_only_ground)) {
                const _0x29588a = 弦弦掩抑声(getPos(target_list[0x0]), self_id, 'yaw_pos');
                const _0x1b88fd = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x29588a,
                    'pitch': _0x48f0b8['pitch']
                });
                if (kd_anti) silentTP(_0x1b88fd['x'] * 0x2, _0x1b88fd['y'] * 0x2, _0x1b88fd['z'] * 0x2);
                else setMotion(_0x1b88fd['x'] - self_pos['x'], _0x45692e['y'], _0x1b88fd['z'] - self_pos['z']);
            }
            if (AirJump && _0x45692e['y'] < -0.42) {
                let _0x133499 = 酒欲饮无管(_0x45692e, self_pos, 瑟瑟主人下(self_id));
                let _0x4e4380 = 弦弦掩抑声(_0x133499, self_id, 'yaw_pos');
                let _0x52dc8a = 忽闻水上琵(aj_speed / 0xa, self_pos, {
                    'yaw': _0x4e4380,
                    'pitch': 0x0
                });
                setMotion(_0x52dc8a['x'] - self_pos['x'], aj_height / 0x64, _0x52dc8a['z'] - self_pos['z']);
            }
            if (drop_list['length'] > 0x0) {
                for (let _0x58df00 = 0x0; _0x58df00 < di_speed; _0x58df00++) {
                    let _0x417f2c = drop_list.pop();
                    dropPlayerInventorySlot(self_id, _0x417f2c);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) > tra_range) {
                let _0x43ebf2 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                let _0x22ab5f = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
                let _0x541361 = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x43ebf2,
                    'pitch': -_0x22ab5f
                });
                setPos(_0x541361['x'], _0x541361['y'], _0x541361['z']);
            }
            if (LineParticle && target_list['length'] > 0x0) {
                let _0x320880 = getPos(self_id);
                _0x320880['y'] += lp_offset / 0xa;
                target_list['forEach'](_0x5c8e24 => {
                    let _0x1517a2 = getPos(_0x5c8e24);
                    _0x1517a2['y'] += 0.765;
                    let _0x193399 = 弦弦掩抑声(_0x320880, _0x1517a2, 'yaw_pos');
                    let _0x4062fa = 弦弦掩抑声(_0x320880, _0x1517a2, 'pitch_pos');
                    for (let _0x51e146 = 0x0; _0x51e146 < 声暗问弹者(_0x5c8e24, self_id); _0x51e146 += (0xb - lp_size) / 0x5) {
                        let _0x107d9c = 忽闻水上琵(-_0x51e146, getPos(self_id), {
                            'yaw': _0x193399,
                            'pitch': -_0x4062fa
                        });
                        妇遂命酒使(lp_type, _0x107d9c['x'], _0x107d9c['y'] - 1.53 + lp_offset / 0xa, _0x107d9c['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x148388 = spm_text;
                const _0x422e1f = 'abcdef';
                if (spm_gradual) _0x148388 = 送客湓浦口(_0x148388);
                if (Spammer_l) _0x148388 = '§l' + _0x148388;
                if (Spammer_k) _0x148388 = '§k' + _0x148388;
                if (Spammer_o) _0x148388 = '§o' + _0x148388;
                if (spm_rainbow) _0x148388 = '§' + _0x422e1f[马客在船举(0x0, _0x422e1f['length'] - 0x1)] + _0x148388;
                if (spm_file) {
                    let _0x40af45 = 抱琵琶半遮(NoveXare_path + '/Spammer.txt')['split']('\n');
                    _0x148388 = _0x40af45[马客在船举(0x0, _0x40af45['length'] - 0x1)];
                }
                if (spm_attack && target_list['length'] > 0x0) _0x148388 = ' §e@' + target_list['map'](_0xe3b767 => getEntityName(_0xe3b767))['join'](',') + ' §r' + _0x148388;
                for (let _0x48f482 = 0x0; _0x48f482 < spm_count; _0x48f482++) {
                    let _0x4f002a = 慢捻抹复挑(0x6);
                    sendChatMessage(spm_random ? _0x148388 + '§r || ' + _0x4f002a : _0x148388);
                }
            }
            if (HitBox && target_list['length'] > 0x0) target_list['forEach'](_0x5a0f85 => setEntitySize(_0x5a0f85, hb_hor, hb_y));
            if (Sucker && target_list['length'] > 0x0) {
                target_list['forEach'](_0x48cf46 => {
                    const _0x30732c = 忽闻水上琵(suck_range, self_pos, _0x48f0b8);
                    setRealPos(_0x48cf46, _0x30732c['x'], _0x30732c['y'], _0x30732c['z']);
                });
            }
            if (Velocity && isMoving) {
                let _0x2b6431 = _0x48f0b8['yaw'];
                if (modelist['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x1edc74 = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0x2b6431 = 弦弦掩抑声(self_id, _0x1edc74, 'yaw_pos');
                }
                let _0x436c84 = 忽闻水上琵((modelist['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x2b6431,
                    'pitch': 0x0
                });
                setMotion(_0x436c84['x'] - self_pos['x'], vec_bhop && (_0x24a7b8 || bhop_airjump) && (!bhop_airjump || _0x45692e['y'] < -0.42) ? bhop_heigh : _0x45692e['y'], _0x436c84['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x555b6d = getCameraRotation();
                const _0xe177f = 忽闻水上琵(fb_speed / 0xa, self_pos, {
                    'yaw': _0x555b6d['yaw'] > 0x0 ? 0xb4 - _0x555b6d['yaw'] : -0xb4 - _0x555b6d['yaw'],
                    'pitch': -_0x555b6d['pitch']
                });
                if (!_0x24a7b8 && isMoving) setMotion(_0xe177f['x'] - self_pos['x'], 0x0, _0xe177f['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                target_list['forEach'](_0x18a450 => {
                    const _0x17df44 = getPos(_0x18a450);
                    妇遂命酒使(tp_type, _0x17df44['x'], _0x17df44['y'] + 0.3, _0x17df44['z'], tp_size);
                });
            }
            if (InvCleaner && modelist['ic_mode'] < 0x2 && (item_count != lasttick_item_count || cleaner_slot != 0x23 || !ic_change) && ticks % ic_delay === 0x0 && (!ic_bow || _0x48f0b8['pitch'] > 0x50) && (!ic_chest || isOpenChest)) {
                let _0x3e5990 = {};
                for (let _0x31b1a2 = 0x0; _0x31b1a2 < ic_delay; _0x31b1a2++) {
                    let _0x186234 = cleaner_slot - _0x31b1a2;
                    const _0xc96b3a = getInventory(self_id, _0x186234);
                    if (_0xc96b3a['count'] === 0x0) continue;
                    let _0x292425 = false;
                    let _0x61108f = clear_config[_0xc96b3a['namespace']];
                    if (typeof _0x3e5990[_0xc96b3a['namespace']] === 'undefined') _0x3e5990[_0xc96b3a['namespace']] = 安感斯人言(-0x2, _0xc96b3a['namespace']);
                    let _0x3c4a16 = _0x3e5990[_0xc96b3a['namespace']];
                    if (typeof _0x61108f !== 'undefined') _0x292425 = (_0x3c4a16 > _0x61108f['max_num'] || _0x61108f['max_num'] === -0x1) && (_0xc96b3a['aux'] === _0x61108f['aux'] || _0x61108f['aux'] === 'any');
                    if (modelist['ic_mode'] === 0x1 && typeof _0x61108f === 'undefined') _0x292425 = true;
                    if (ic_move && !_0x292425 && typeof _0x61108f !== 'undefined' && _0x61108f['slot'] !== 'undefined') 女尝学琵琶(_0x186234, _0x61108f['slot'], false, true);
                    if (_0x292425) {
                        if (trash_slot > -0x1 && _0x186234 > 0x8) 女尝学琵琶(_0x186234, trash_slot, false, true);
                        dropPlayerInventorySlot(self_id, _0x186234);
                    }
                }
                if (cleaner_slot > 0x0) cleaner_slot -= ic_delay;
                else cleaner_slot = 0x23;
                if (ic_chest) isOpenChest = false;
            }
            if (SafeWalk && isMoving) {
                const _0x2496c1 = getEntityRot(self_id)['yaw'];
                const _0x318a5d = 忽闻水上琵(0.3, _0x415d20, {
                    'yaw': _0x2496c1,
                    'pitch': 0x0
                });
                const _0x315061 = getBlock(_0x318a5d['x'], _0x318a5d['y'] - 0x1, _0x318a5d['z']);
                if (_0x315061['namespace'] === 'minecraft:air' && _0x24a7b8) setMotion((-_0x318a5d['x'] + self_pos['x']) / 0x8, _0x45692e['y'], (-_0x318a5d['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && isMoving) {
                const _0x17b51b = getEntityRot(self_id)['yaw'];
                const _0x2cd7d9 = 忽闻水上琵(0.5, _0x415d20, {
                    'yaw': _0x17b51b,
                    'pitch': 0x0
                });
                const _0x4d571f = getBlock(_0x2cd7d9['x'], _0x2cd7d9['y'], _0x2cd7d9['z']);
                if (_0x4d571f['namespace'] != 'minecraft:air') setMotion(_0x45692e['x'], sp_speed / 0xf, _0x45692e['z']);
            }
            if (Fly && (!fly_only_fly || isMoving)) {
                if ((!_0x24a7b8 || !fly_block) && (!fly_run || isMoving)) {
                    const _0x3a2f23 = fly_up_down ? fly_ud : 0x0;
                    let _0x10aa28 = 酒欲饮无管(_0x45692e, self_pos, fly_speed * 2.5);
                    if (modelist['fly_mode'] === 0x0) {
                        if (!fly_includeY) setPos(_0x10aa28['x'], self_pos['y'] + _0x3a2f23, _0x10aa28['z']);
                        if (fly_includeY) setPos(self_pos['x'], _0x10aa28['y'], self_pos['z']);
                        if (fly_mot) setMotion(0x0, -0.01, 0x0);
                    }
                    if (modelist['fly_mode'] === 0x1) setMotion(_0x10aa28['x'] - self_pos['x'], _0x10aa28['y'] - self_pos['y'] + _0x3a2f23, _0x10aa28['z'] - self_pos['z']);
                    if (fly_AuthInput_packet) silentTP(_0x10aa28['x'], _0x10aa28['y'], _0x10aa28['z']);
                    if (fly_move_packet) sendMovePlayer({
                        'id': self_id,
                        'pos': {
                            'x': _0x10aa28['x'],
                            'y': _0x10aa28['y'],
                            'z': _0x10aa28['z']
                        },
                        'mode': 0x1,
                        'ground': true,
                        'rot': {
                            'pitch': _0x48f0b8['pitch'],
                            'yaw': _0x48f0b8['yaw']
                        },
                        'yHeadRot': getEntityBodyRot(self_id)
                    });
                    fly_ud = fly_ud > 0x0 ? -fly_set_ud / 0xa : fly_set_ud / 0xa;
                }
            }
            if (ActivitySender && isMoving) {
                let _0x690427 = 酒欲饮无管(_0x45692e, self_pos, 0x1);
                const _0x383529 = 弦弦掩抑声(self_id, _0x690427, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x383529) + '°方向移动');
            }
            if (FakeWater) setBlock(_0x415d20['x'], _0x415d20['y'], _0x415d20['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x45692e['x'], -0x186a0, _0x45692e['z']);
            if (Hover) setMotion(_0x45692e['x'], 0.05, _0x45692e['z']);
            if (Rider && target_list['length'] > 0x0) {
                let _0x414433 = getPos(target_list[0x0]);
                const _0x13da4d = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0x414433['x'] + _0x13da4d, _0x414433['y'] + rid_y + 0x1, _0x414433['z'] + _0x13da4d);
                _0xc56e6a['push'](归客不发寻(0x1, 'Rider', getEntityName(target_list[0x0]), '§r'));
            }
            if (JetPack) {
                const _0xc71e2c = getCameraRotation();
                if (isMoving || !spr_move) {
                    let _0x110bbf = 忽闻水上琵(modelist['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0xc71e2c['yaw'] > 0x0 ? 0xb4 - _0xc71e2c['yaw'] : -0xb4 - _0xc71e2c['yaw'],
                        'pitch': -_0xc71e2c['pitch']
                    });
                    if (spr_hor) _0x110bbf['y'] = self_pos['y'];
                    const _0xfdaae3 = getBlock(_0x110bbf['x'], _0x110bbf['y'], _0x110bbf['z']);
                    if (_0xfdaae3['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modelist['sprint_mode'] === 0x0) {
                            setPos(_0x110bbf['x'], _0x110bbf['y'], _0x110bbf['z']);
                            setEntityMotion(self_id, _0x45692e['x'], -1e-7, _0x45692e['z']);
                        }
                        if (modelist['sprint_mode'] === 0x1) setMotion(_0x110bbf['x'] - self_pos['x'], _0x110bbf['y'] - self_pos['y'], _0x110bbf['z'] - self_pos['z']);
                        if (spr_auth) silentTP(_0x110bbf['x'], _0x110bbf['y'], _0x110bbf['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x110bbf['x'],
                                'y': _0x110bbf['y'],
                                'z': _0x110bbf['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x48f0b8['pitch'],
                                'yaw': _0x48f0b8['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x5a7f23 = Math['round'](-cs_count / 0x2); _0x5a7f23 <= Math['round'](cs_count / 0x2); _0x5a7f23++) {
                    const _0x5e9a79 = 0xa ** _0x5a7f23;
                    if (modelist['cs_mode'] === 0x0) buildBlock(self_id, _0x415d20['x'], _0x415d20['y'], _0x415d20['z'], _0x5e9a79 ** 0x2);
                    if (modelist['cs_mode'] === 0x1) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                    if (modelist['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['cs_mode'] === 0x4) sendSound(_0x5e9a79, _0x5e9a79, _0x5e9a79, _0x5e9a79, _0x5a7f23);
                    if (modelist['cs_mode'] === 0x5) getEntityList()['forEach'](_0x201964 => 江头夜送客(_0x201964, false));
                }
            }
            if (KickAura && target_list['length'] > 0x0) {
                let _0x41e0a6 = [];
                if (ka_player) _0x41e0a6['concat'](_0x5f07f6['map'](_0x5be48d => _0x5be48d['id']));
                if (ka_target) _0x41e0a6['concat'](target_list);
                if (modelist['ka_mode'] == 0x0) _0x41e0a6['forEach'](_0x524002 => {
                    if (_0x524002 == self_id) return;
                    const _0x147b9f = getEntityName(_0x524002);
                    let _0x15b4fb = _0x147b9f['indexOf'](']') - 0x2;
                    let _0x12e07e = ['b', 'c', 'e', 'a'];
                    for (let _0x2cafce of _0x12e07e) {
                        if (_0x147b9f['indexOf']('·§' + _0x2cafce) != -0x1) {
                            _0x15b4fb = _0x147b9f['indexOf']('·§' + _0x2cafce);
                            break;
                        }
                    }
                    let _0x5339d8 = _0x15b4fb === -0x1 ? _0x147b9f : _0x147b9f['slice'](_0x15b4fb + 0x3, _0x147b9f['length']);
                    if (_0x5339d8['includes']('【') && _0x5339d8['includes']('】')) _0x5339d8 = 琵琶行浔阳(_0x5339d8, '【', '】');
                    for (let _0x1e2381 = 0x0; _0x1e2381 < ka_count; _0x1e2381++) executeCommand('/tell "' + _0x5339d8 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modelist['ka_mode'] == 0x1) {
                    for (let _0x163ec8 = 0x0; _0x163ec8 < ka_count; _0x163ec8++) executeCommand('/tell @a[' + _0x41e0a6['map'](_0x132c00 => 'name="' + getEntityName(_0x132c00) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x45692e['y'] < -as_minY && !_0x24a7b8) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x5a219f = 0x0; _0x5a219f < 0x9; _0x5a219f++) {
                        const _0xa7704 = getInventory(self_id, _0x5a219f);
                        if (_0xa7704['isBlock'] || as_water && _0xa7704['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x5a219f);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x50ae09 of 眉信手续续(_0x415d20, {
                            'x': _0x415d20['x'],
                            'y': _0x415d20['y'] - as_minY * 0x5,
                            'z': _0x415d20['z']
                        }, 0x1, true)) {
                        const _0x5c5a88 = getBlock(_0x50ae09['x'], _0x50ae09['y'], _0x50ae09['z']);
                        if (_0x5c5a88['namespace'] != 'minecraft:air') continue;
                        const _0x369639 = getBlock(_0x50ae09['x'], _0x50ae09['y'] - 0x1, _0x50ae09['z']);
                        if (_0x369639['namespace'] === 'minecraft:air' || _0x369639['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x50ae09['x'], _0x50ae09['y'], _0x50ae09['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket') {
                    if (as_fake) callModule(0x25, '{"value":true}');
                    buildBlock(self_id, _0x415d20['x'], _0x415d20['y'] - as_minY * 3.1, _0x415d20['z'], 0x0);
                    if (as_fake) callModule(0x25, '{"value":false}');
                }
                if (as_near) {
                    let _0x2a24c3 = {};
                    let _0x5df6d4 = Infinity;
                    for (let _0xf0a5a0 = -0x5; _0xf0a5a0 <= 0x5; _0xf0a5a0++) {
                        for (let _0x43ddbf = -0x1; _0x43ddbf <= 0x0; _0x43ddbf++) {
                            for (let _0x7ab08a = -0x5; _0x7ab08a <= 0x5; _0x7ab08a++) {
                                let _0xc9e620 = Math['sqrt'](_0xf0a5a0 * _0xf0a5a0 + _0x7ab08a * _0x7ab08a + _0x43ddbf * _0x43ddbf);
                                let _0x387417 = {
                                    'x': _0xf0a5a0 + _0x415d20['x'],
                                    'y': _0x43ddbf + _0x415d20['y'],
                                    'z': _0x7ab08a + _0x415d20['z']
                                };
                                const _0x405f12 = getBlock(_0x387417['x'], _0x387417['y'], _0x387417['z']);
                                if (_0x405f12['namespace'] === 'minecraft:air') continue;
                                if (_0xc9e620 < _0x5df6d4) {
                                    _0x5df6d4 = _0xc9e620;
                                    _0x2a24c3 = _0x387417;
                                }
                            }
                        }
                    }
                    if (_0x2a24c3 != {}) {
                        let _0x153671 = {
                            'x': _0x415d20['x'],
                            'y': _0x415d20['y'] - 0x1 + _0x45692e['y'] * 0x3,
                            'z': _0x415d20['z']
                        };
                        let _0x473baf = 眉信手续续(_0x2a24c3, _0x153671, 0.8, true);
                        _0x473baf['forEach'](_0x1fc632 => {
                            const _0x3938ff = getBlock(_0x1fc632['x'], _0x1fc632['y'], _0x1fc632['z']);
                            if (_0x3938ff['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x1fc632['x']), Math['floor'](_0x1fc632['y']), Math['floor'](_0x1fc632['z']));
                        });
                    }
                }
            }
            if (AssAssInate && target_list['length'] > 0x0) {
                let _0x485e1c = getEntityRot(target_list[0x0]);
                let _0x1298e8 = getPos(target_list[0x0]);
                if (LockBehind_h > aai_max) isReverse = true;
                else if (LockBehind_h < aai_min) isReverse = false;
                LockBehind_h += (isReverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x25212d = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
                LockBehind_yaw = Surround ? LockBehind_yaw + _0x25212d : _0x485e1c['yaw'];
                if (Surround && LockBehind_yaw > 0xb4) LockBehind_yaw = -0xb4;
                let _0x1cd61a = 忽闻水上琵(-aai_len, _0x1298e8, {
                    'yaw': LockBehind_yaw,
                    'pitch': 0x0
                });
                if (modelist['sur_mode'] === 0x0) setPos(_0x1cd61a['x'], _0x1298e8['y'] + 1.83 + LockBehind_h, _0x1cd61a['z']);
                if (modelist['sur_mode'] === 0x1) 二年恬然自(_0x1cd61a['x'], _0x1298e8['y'] + 1.83 + LockBehind_h, _0x1cd61a['z']);
                _0xc56e6a['push'](归客不发寻(0x1, 'LockBack', getEntityName(target_list[0x0]), '§r'));
            }
            if (SoundPlayer || sound_data['length'] > 0x0) {
                let _0x1e15d2 = [];
                if (sp_target) _0x1e15d2 = target_list;
                if (sp_all) _0x1e15d2 = getPlayerList();
                if (sp_entity) _0x1e15d2 = getEntityList();
                if (play_pos_list['length'] > 0x0) _0x1e15d2 = play_pos_list;
                let _0xaf5a70 = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                SoundPlayer_yaw += 0x14;
                if (SoundPlayer_yaw > 0xb4) SoundPlayer_yaw = -0xb4;
                for (let _0x232e2e = 0x0; _0x232e2e < sp_vec; _0x232e2e++) {
                    if (sound_data['length'] > 0x0) _0xaf5a70 = sound_data['shift']()['sounds'];
                    if (_0xaf5a70['length'] > 0x0) {
                        _0x2f5ccc: for (let _0x3517c8 of _0xaf5a70) {
                            let _0x26fadd = _0x3517c8['sound'];
                            let _0x34ca82 = _0x3517c8['level'];
                            if (sp_large) {
                                const _0x385b84 = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x3c734a = -_0x385b84; _0x3c734a <= _0x385b84; _0x3c734a += sp_space) {
                                    for (let _0x36a221 = -_0x385b84; _0x36a221 <= _0x385b84; _0x36a221 += sp_space) {
                                        sendSound(Number(_0x26fadd), self_pos['x'] + _0x3c734a, self_pos['y'] + sp_y, self_pos['z'] + _0x36a221, Number(_0x34ca82));
                                    }
                                }
                                continue _0x2f5ccc;
                            }
                            _0x1e15d2['forEach'](_0x1bfc75 => {
                                if (typeof _0x1bfc75 != 'string')
                                    for (let _0x3d4020 = 0x0; _0x3d4020 < sp_count; _0x3d4020++) sendSound(Number(_0x26fadd), _0x1bfc75['x'], _0x1bfc75['y'] + sp_y, _0x1bfc75['z'], Number(_0x34ca82));
                                else {
                                    if (_0x1bfc75 === self_id && sp_exclude) return;
                                    const _0xf46199 = getPos(_0x1bfc75);
                                    let _0x22ae1d = 忽闻水上琵(sp_distance, _0xf46199, {
                                        'yaw': SoundPlayer_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x1dea17 = 0x0; _0x1dea17 < sp_count; _0x1dea17++) sendSound(Number(_0x26fadd), _0x22ae1d['x'], _0x22ae1d['y'] + sp_y, _0x22ae1d['z'], Number(_0x34ca82));
                                }
                            });
                        }
                    }
                }
                if (sound_data['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, '进度', '剩余:' + sound_data['length'] + '条', '§r'));
            }
            if (sp_loop && SoundPlayer && sound_file != null && sound_data['length'] === 0x0) {
                sound_data = JSON['parse'](sound_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sound_data.length + "条音频数据', '§r');
            }
            if (_0x1563ff['current'] < 0x6) _0xc56e6a['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x1563ff['current']) <= ad_min) {
                const _0x2ecc0e = modelist['ad_mode'];
                if (_0x2ecc0e === 0x2) removeEntity(self_id);
                if (_0x2ecc0e === 0x0 || _0x2ecc0e === 0x1) executeCommand(_0x2ecc0e === 0x0 ? '/hub' : '/again');
                if (_0x2ecc0e === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x48f0b8['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2ecc0e === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2ecc0e === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2ecc0e === 0x6) leaveWorld();
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
                const _0x5a1bf9 = getBlock(_0x415d20['x'], _0x415d20['y'] - 0x1, _0x415d20['z']);
                if (_0x5a1bf9['namespace'] === 'minecraft:flowing_water' || _0x5a1bf9['namespace'] === 'minecraft:water' || _0x5a1bf9['namespace'] === 'minecraft:flowing_lava' || _0x5a1bf9['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x45692e['x'], 0x0, _0x45692e['z']);
            }
            if (RecordInfo && !ri_click && target_list['length'] > 0x0) {
                target_list['forEach'](_0xc43a6e => {
                    let _0x3cde92 = 京都声问其(_0xc43a6e);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x3cde92 + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](NoveXare_path + '/' + getEntityName(_0xc43a6e) + '_' + _0xc43a6e + '.txt', _0x3cde92);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && target_list['length'] > 0x0) {
                const _0x23b908 = target_list[0x0];
                const _0x2b1265 = 声暗问弹者(self_id, _0x23b908);
                const _0x5f1e68 = 声思似诉平(self_id, _0x23b908, aa_fov, 0x0);
                if (_0x2b1265 <= aa_range && _0x5f1e68 || aa_throw) {
                    const _0x37d69a = 马客在船举(aa_min, aa_max);
                    let _0x1899df = 弦弦掩抑声(self_id, _0x23b908, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0xc8296c = 弦弦掩抑声(self_id, _0x23b908, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x1899df <= 0xb4 && _0x1899df >= -0xb4 && _0xc8296c <= 0x5a && _0xc8296c >= -0x5a) {
                        let _0x2a6977 = _0x1899df >= 0x0 ? -_0x37d69a : _0x37d69a;
                        let _0x57f9f8 = _0xc8296c >= 0x0 ? _0x37d69a : -_0x37d69a;
                        if (modelist['AssistAim_mode'] === 0x1 || modelist['AssistAim_mode'] === 0x0 && (Math['abs'](_0x1899df) < _0x37d69a || Math['abs'](_0xc8296c) < _0x37d69a)) {
                            _0x2a6977 = -_0x1899df / ((0x28 - _0x37d69a) / 0x2);
                            _0x57f9f8 = -_0xc8296c / ((0x28 - _0x37d69a) / 1.125);
                        }
                        const _0x5ad4db = 声思似诉平(self_id, _0x23b908, aa_prec * 0x2, 0x1);
                        const _0x4e42a5 = 声思似诉平(self_id, _0x23b908, aa_prec * 0x4, 0x2);
                        if (!_0x5ad4db) setLocalPlayerTurn(0x0, _0x2a6977);
                        if (!_0x4e42a5 && !aa_throw || !isSame(_0xc8296c, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x57f9f8, 0x0);
                    }
                    _0xc56e6a['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x23b908), '§r'));
                }
            }
            if (InfiniteAura && InfiniteAura_target['length'] > 0x0) {
                InfiniteAura_target['forEach'](_0x4301d5 => {
                    const _0x1ea014 = _0x4301d5;
                    const _0x4ca75b = getPos(_0x1ea014);
                    if (!_0x1ea014 || !findEntity(_0x1ea014)) return;
                    if (声暗问弹者(InfiniteAura_target[0x0], self_id) > ia_range) return;
                    if (tick === 0x0) {
                        const _0x4f54b7 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x45692e;
                        for (let _0x37af11 = 0x0; _0x37af11 < ia_move; _0x37af11++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x4ca75b['x'] + _0x4f54b7, _0x4ca75b['y'], _0x4ca75b['z'] + _0x4f54b7, 0x1);
                                if (!ia_nopacket) sendPlayerAuthInput({
                                    'inputMode': 0x2,
                                    'playMode': 0x0,
                                    'pos': {
                                        'x': _0x4ca75b['x'] + _0x4f54b7,
                                        'y': _0x4ca75b['y'] + ia_offset / 0x5,
                                        'z': _0x4ca75b['z'] + _0x4f54b7
                                    },
                                    'actions': [{
                                        'pos': {
                                            'x': _0x4ca75b['x'] + _0x4f54b7,
                                            'y': _0x4ca75b['y'] + ia_offset / 0x5,
                                            'z': _0x4ca75b['z'] + _0x4f54b7
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
                            if (modelist['ia_mode'] === 0x0) setPos(_0x4ca75b['x'], _0x4ca75b['y'], _0x4ca75b['z']);
                            if (modelist['ia_mode'] === 0x1) 二年恬然自(_0x4ca75b['x'], _0x4ca75b['y'], _0x4ca75b['z']);
                            if (modelist['ia_mode'] === 0x2) sendPlayerAuthInput({
                                'inputMode': 0x2,
                                'playMode': 0x0,
                                'pos': {
                                    'x': _0x4ca75b['x'] + _0x4f54b7,
                                    'y': _0x4ca75b['y'] + ia_offset / 0x5,
                                    'z': _0x4ca75b['z'] + _0x4f54b7
                                },
                                'actions': [{
                                    'pos': {
                                        'x': _0x4ca75b['x'] + _0x4f54b7,
                                        'y': _0x4ca75b['y'] + ia_offset / 0x5,
                                        'z': _0x4ca75b['z'] + _0x4f54b7
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
                        for (let _0x4cf95b = 0x0; _0x4cf95b < ia_attack; _0x4cf95b++) 江头夜送客(_0x1ea014, Swing);
                    }
                    if (tick <= -ia_return && ia_fix) 六幺大弦嘈();
                });
                if (tick <= -ia_return) {
                    if (!ia_fix) 六幺大弦嘈();
                    tick = ia_delay;
                }
                if (tick > -ia_return) tick--;
                _0xc56e6a['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? InfiniteAura_target['length'] + '个目标' : 添酒回灯重(InfiniteAura_target['map'](_0x6c075a => getEntityName(_0x6c075a))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 初为霓裳后(_0x415d20);
            if (AutoVoid) {
                const _0xf0cc4a = 面转轴拨弦(self_id);
                const _0x2eab11 = getBlock(_0xf0cc4a['x'], _0x415d20['y'] - 0x1, _0xf0cc4a['z']);
                for (let _0x4137a0 = -0x2; _0x4137a0 < 0x3; _0x4137a0++) {
                    for (let _0x3df37b = -0x2; _0x3df37b < 0x3; _0x3df37b++) {
                        const _0x4c255e = getBlock(_0xf0cc4a['x'] + _0x4137a0, _0x415d20['y'] - 0x1, _0xf0cc4a['z'] + _0x3df37b);
                        if (_0x4c255e['namespace'] === 'minecraft:air' && _0x45692e['y'] < -0.0783 && _0x45692e['y'] > -0.0785 && _0x2eab11['namespace'] != 'minecraft:air') {
                            const _0x2c7f97 = -弦弦掩抑声(self_id, {
                                'x': _0xf0cc4a['x'] + _0x4137a0,
                                'y': self_pos['y'],
                                'z': _0xf0cc4a['z'] - _0x3df37b
                            }, 'yaw_pos');
                            const _0x3f5323 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x2c7f97,
                                'pitch': 0x0
                            });
                            setMotion(_0x3f5323['x'] - self_pos['x'], _0x45692e['y'], _0x3f5323['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x3b6db0 = getEntityList();
                _0x3b6db0['forEach'](_0x43bc50 => {
                    if ((getEntityTypeId(_0x43bc50) === 0x400055 || getEntityTypeId(_0x43bc50) === 0x400056 || getEntityTypeId(_0x43bc50) === 0xc00050) && 声暗问弹者(_0x43bc50, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x43bc50);
                        if (modelist['avoid_mode'] === 0x0) {
                            const _0x5b4f4b = 弦弦掩抑声(getPos(_0x43bc50), self_id, 'yaw_pos');
                            const _0x2b3b7a = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x5b4f4b,
                                'pitch': _0x48f0b8['pitch']
                            });
                            setMotion(_0x2b3b7a['x'] - self_pos['x'], _0x45692e['y'], _0x2b3b7a['z'] - self_pos['z']);
                        }
                        if (modelist['avoid_mode'] === 0x1) 江头夜送客(_0x43bc50, Swing);
                        if (modelist['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x2047b0 = getPlayerList();
                let _0x42af44 = [];
                let _0xba3753 = false;
                let _0x2443fa = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x34e884 = 0x1; _0x34e884 <= tr_len; _0x34e884 += tr_dens / 0xa) {
                    let _0xff055c = 少小时欢乐(_0x34e884, _0x48f0b8['pitch'], tr_speed, tr_g)['data'];
                    let _0x3849a8 = 忽闻水上琵(_0x34e884, self_pos, {
                        'yaw': _0x48f0b8['yaw'],
                        'pitch': 0x0
                    });
                    let _0x89e8c6 = getBlock(_0x3849a8['x'], _0x3849a8['y'] + _0xff055c, _0x3849a8['z']);
                    if (tr_show || !_0xba3753) {
                        _0x2047b0['forEach'](_0x1e0c44 => {
                            if (!_0xba3753) {
                                let _0x38412e = getPos(_0x1e0c44);
                                let _0x5e1b25 = {
                                    'x': _0x3849a8['x'],
                                    'y': _0x3849a8['y'] + _0xff055c,
                                    'z': _0x3849a8['z']
                                };
                                let _0x36c0bd = getEntitySize(_0x1e0c44);
                                if (_0x5e1b25['x'] <= _0x38412e['x'] + _0x36c0bd['x'] / 0x2 && _0x5e1b25['x'] >= _0x38412e['x'] - _0x36c0bd['x'] / 0x2 && _0x5e1b25['y'] <= _0x38412e['y'] + _0x36c0bd['y'] / 0x2 && _0x5e1b25['y'] >= _0x38412e['y'] - _0x36c0bd['y'] / 0x2 && _0x5e1b25['z'] <= _0x38412e['z'] + _0x36c0bd['x'] / 0x2 && _0x5e1b25['z'] >= _0x38412e['z'] - _0x36c0bd['x'] / 0x2) {
                                    _0xc56e6a['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x1e0c44), '§r'));
                                    _0xba3753 = true;
                                }
                            }
                        });
                    }
                    if (_0x89e8c6['namespace'] != 'minecraft:air' || _0xba3753) {
                        _0x2443fa = _0x3849a8;
                        if (modelist['tr_mode'] === 0x1 && _0x89e8c6['namespace'] != 'minecraft:air') {
                            for (let _0x221aa0 = 0x0; _0x221aa0 <= 0x14; _0x221aa0 += 0x2) 妇遂命酒使(tr_type, _0x2443fa['x'], _0x2443fa['y'] + _0xff055c + _0x221aa0 / 0xa, _0x2443fa['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modelist['tr_mode'] === 0x0) {
                    let _0xfd00bb = getDistance(_0x2443fa, self_pos);
                    for (let _0x3936c3 = 0x1; _0x3936c3 <= _0xfd00bb; _0x3936c3 += tr_dens / 0xa) {
                        let _0x133b29 = 少小时欢乐(_0x3936c3, _0x48f0b8['pitch'], tr_speed, tr_g)['data'];
                        let _0x21cb92 = (tr_offset - 0xa) / 0xa;
                        let _0x55b1ff = _0x48f0b8['yaw'] + 0x5a;
                        if (_0x55b1ff > 0xb4) _0x55b1ff = _0x55b1ff - 0x168;
                        if (_0x55b1ff < -0xb4) _0x55b1ff = _0x55b1ff + 0x168;
                        let _0x3152ba = 忽闻水上琵(_0x21cb92, self_pos, {
                            'yaw': _0x55b1ff,
                            'pitch': 0x0
                        });
                        let _0x4c5819 = 忽闻水上琵(_0x3936c3, _0x3152ba, {
                            'yaw': _0x48f0b8['yaw'] - Math['atan'](_0x21cb92 / _0xfd00bb) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x592a1d = getBlock(_0x4c5819['x'], _0x4c5819['y'] + _0x133b29, _0x4c5819['z']);
                        if (modelist['tr_mode'] === 0x0 && _0x592a1d['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x4c5819['x'], _0x4c5819['y'] + _0x133b29 + 0.5, _0x4c5819['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x5b9a82 = 面转轴拨弦(self_id);
                for (let _0x2ea8d2 = -0x4; _0x2ea8d2 < 0x5; _0x2ea8d2++) {
                    for (let _0x4c2f53 = -0x4; _0x4c2f53 < 0x5; _0x4c2f53++) {
                        const _0x4503b6 = getBlock(_0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'] - 0x1, _0x5b9a82['z'] + _0x4c2f53);
                        const _0x347c28 = getBlock(_0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'], _0x5b9a82['z'] + _0x4c2f53);
                        if ((_0x4503b6['namespace'] === 'minecraft:dirt' || _0x4503b6['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'] - 0x1, _0x5b9a82['z'] + _0x4c2f53, 0x1);
                        if (_0x4503b6['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'] - 0x1, _0x5b9a82['z'] + _0x4c2f53, 0x1);
                        if (_0x347c28['aux'] === 0x7 && (_0x347c28['namespace'] === 'minecraft:beetroot' || _0x347c28['namespace'] === 'minecraft:wheat' || _0x347c28['namespace'] === 'minecraft:carrots' || _0x347c28['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'], _0x5b9a82['z'] + _0x4c2f53, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x347c28['aux'] <= 0x6 && (_0x347c28['namespace'] === 'minecraft:beetroot' || _0x347c28['namespace'] === 'minecraft:wheat' || _0x347c28['namespace'] === 'minecraft:carrots' || _0x347c28['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x5b9a82['x'] + _0x2ea8d2, _0x415d20['y'], _0x5b9a82['z'] + _0x4c2f53, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x21e6bc = 0x0; _0x21e6bc < am_count; _0x21e6bc++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x415d20['x'],
                                'y': _0x415d20['y'] - 0x1,
                                'z': _0x415d20['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x4432f1 = JSON['parse'](抱琵琶半遮(NoveXare_path + '/PlayerAction.json'));
                    _0x4432f1['forEach'](_0x35567a => {
                        if (_0x35567a['delay'] % action_tick === 0x0) {
                            for (let _0x3f9356 = 0x0; _0x3f9356 < _0x35567a['count']; _0x3f9356++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x35567a['value'],
                                'type': Number(_0x35567a['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x280bd8 = 0x0; _0x280bd8 < pam_count; _0x280bd8++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x415d20['x'],
                        'y': _0x415d20['y'] - 0x1,
                        'z': _0x415d20['z']
                    },
                    'inputs': pam_array['map'](_0x3cb59e => Number(_0x3cb59e)),
                    'actions': [{
                        'id': self_id,
                        'pos': self_pos,
                        'type': Number(pam_id),
                        'value': Number(pam_value)
                    }]
                });
            }
            if (isDestroy && (destroy_list['length'] === 0x0 || current_mine_num >= mine_num)) {
                isDestroy = false;
                destroy_namespace = null;
                destroy_list = [];
                current_mine_num = 0x0;
            }
            if (AutoJump && _0x24a7b8) setMotion(_0x45692e['x'], aj_y / 0x64, _0x45692e['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x24161f => {
                if (bc_packet) silentTP(_0x24161f['x'], _0x24161f['y'], _0x24161f['z']);
                buildBlock(self_id, _0x24161f['x'], _0x24161f['y'], _0x24161f['z'], 0x0);
            });
            if (NoFall && _0x45692e['y'] < -nf_max && !_0x24a7b8) {
                if (modelist['nf_mode'] === 0x0) setMotion(0x0, 0x0, 0x0);
                if (modelist['nf_mode'] === 0x1) {
                    callModule(0x25, '{"value":true}');
                    setTimeout(() => callModule(0x25, '{"value":false}'), 0x4b);
                }
                if (modelist['nf_mode'] === 0x2) {
                    callModule(0x1e, '{"value":true,"speed":0}');
                    setTimeout(() => callModule(0x1e, '{"value":false}'), 0x4b);
                }
                if (modelist['nf_mode'] === 0x3) sendPlayerAction({
                    'id': self_id,
                    'pos': self_pos,
                    'value': 0x1,
                    'type': 0x7
                });
            }
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && lastTick_ground != _0x24a7b8 && _0x24a7b8)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x4b9981 = 0x0; _0x4b9981 < 0x168; _0x4b9981 += do_density / 0xa) {
                    const _0x42dd60 = do_l_axis * Math['cos'](_0x4b9981 * Math['PI'] / 0xb4);
                    const _0x411a9b = do_s_axis * Math['sin'](_0x4b9981 * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x42dd60, do_pos[0x1], do_pos[0x2] + _0x411a9b, 0x1);
                }
            }
            if (FakeLag) {
                if (lag_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    lag_t = 0x0;
                }
                if (lag_t > fl_normal && lag_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0xc56e6a['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modelist['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modelist['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modelist['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modelist['fl_mode'] === 0x3), '§r'));
            }
            if (build_list['length'] > 0x0 && build_t > fb_delay && !build_success) {
                const _0x188d92 = build_list['shift']();
                buildBlock(self_id, Math['round'](_0x188d92['x']), Math['round'](_0x188d92['y'] - 0x1), Math['round'](_0x188d92['z']), 0x0);
                build_t = 0x0;
                if (build_list['length'] === 0x0) build_success = true;
            }
            if (TargetHealth && target_list['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Health', 'Health: ' + 无限事轻拢(target_list[0x0], modelist['health_mode']), '§r'));
            if (ShowTargetList && target_list['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(target_list['map'](_0x478dc8 => getEntityName(_0x478dc8))), '§r'));
            if (ShowInfo) {
                const _0x2bd2e5 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x3729bf = Math['sqrt'](_0x45692e['x'] * _0x45692e['x'] + _0x45692e['z'] * _0x45692e['z']);
                if (show_speed) _0xc56e6a['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x3729bf['toFixed'](0x2) + 'm/s 移动速度: ' + _0xd5c29e['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x1b2d8a['toFixed'](0x2) + 'm/s 坐标速度:' + _0xe4e6['toFixed'](0x2) + 'm/s 能力速度:' + _0x2bd2e5['current']['toFixed'](0x2) + ('\n移动值: [' + _0x45692e['x']['toFixed'](0x2) + ', ' + _0x45692e['y']['toFixed'](0x2) + ', ' + _0x45692e['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0xc56e6a['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x415d20['x'] + ', Y:' + _0x415d20['y'] + ', Z:' + _0x415d20['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x5cfd9d = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x474247 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0xc56e6a['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x5cfd9d['emerald'] + ', 钻石:' + _0x5cfd9d['diamond'] + ', 金锭:' + _0x5cfd9d['gold'] + ', 铁锭:' + _0x5cfd9d['iron'] + '\n下界之心:' + _0x5cfd9d['star'] + ', 经验:' + _0x474247, '§r'));
                }
                if (show_target_dis && target_list['length'] > 0x0) _0xc56e6a['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, target_list[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, target_list[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0xc56e6a['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x5f07f6['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + target_list['length'] + '人', '§r'));
                if (show_kill_num) _0xc56e6a['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0xc56e6a['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0xc56e6a['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0xc56e6a['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0xc56e6a['push'](归客不发寻(0x1, 'PING', ping + 'ms', '§r'));
                if (show_self_health) _0xc56e6a['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x1563ff['current'] + ', 最大值:' + _0x1563ff['max'] + ', 最小值:' + _0x1563ff['min'], '§r'));
                if (show_detail_item) _0xc56e6a['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x5d9607 = new Date();
                    const _0x5bf9d2 = _0x5d9607['getFullYear']();
                    const _0x4f1083 = ('0' + (_0x5d9607['getMonth']() + 0x1))['slice'](-0x2);
                    const _0xa1cd9e = ('0' + _0x5d9607['getDate']())['slice'](-0x2);
                    const _0x394378 = ('0' + _0x5d9607['getHours']())['slice'](-0x2);
                    const _0x1f0e2a = ('0' + _0x5d9607['getMinutes']())['slice'](-0x2);
                    const _0x326ad0 = ('0' + _0x5d9607['getSeconds']())['slice'](-0x2);
                    const _0x536081 = _0x5bf9d2 + '-' + _0x4f1083 + '-' + _0xa1cd9e + ' ' + _0x394378 + ':' + _0x1f0e2a + ':' + _0x326ad0;
                    _0xc56e6a['push'](归客不发寻(0x1, 'RealTime', _0x536081, '§r'));
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
            if (typeof rocker_func['angle'] !== 'undefined') {
                let _0x3d89e2 = _0x48f0b8['yaw'];
                _0x3d89e2 += rocker_func['angle'] < 0x5a ? rocker_func['angle'] + 0x5a : rocker_func['angle'] - 0x10e;
                if (_0x3d89e2 >= 0xb4) _0x3d89e2 -= 0x168;
                if (_0x3d89e2 <= -0xb4) _0x3d89e2 += 0x168;
                let _0x4e7be3 = (_0x24a7b8 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x212adf = (_0x24a7b8 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x55cf14 = {};
                if (rc_surround && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) <= rc_lock) {
                    let _0x3328dc = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                    let _0x54c65c = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_rot');
                    let _0x59ac81 = _0x54c65c > -0x5a || _0x54c65c < 0x5a ? rc_speed : -rc_speed;
                    let _0x55ce2b = _0x3d89e2 > -0x5a || _0x3d89e2 < 0x5a ? rc_speed : -rc_speed;
                    let _0xe2dea1 = rc_relative ? _0x59ac81 : _0x55ce2b;
                    Angel = rocker_func['angle'] > 0x1c2 - rc_range && rocker_func['angle'] <= rc_range + 0xb4 || rocker_func['angle'] > 0xb4 - rc_range && rocker_func['angle'] <= rc_range - 0x5a ? _0x3328dc -= _0xe2dea1 * 0x5 : _0x3328dc += _0xe2dea1 * 0x5;
                    if (_0x3328dc > 0xb4) _0x3328dc -= 0x168;
                    if (_0x3328dc < -0xb4) _0x3328dc += 0x168;
                    let _0x5220eb = 忽闻水上琵(rc_dist, getPos(target_list[0x0]), {
                        'yaw': _0x3328dc,
                        'pitch': 0x0
                    });
                    let _0x3fa595 = 弦弦掩抑声(_0x5220eb, self_id, 'yaw_pos');
                    _0x55cf14 = 忽闻水上琵(rc_legal ? modelist['rc_mode'] === 0x0 ? _0x4e7be3 : _0x212adf : rc_speed / 0x8, self_pos, {
                        'yaw': _0x3fa595,
                        'pitch': 0x0
                    });
                } else _0x55cf14 = 忽闻水上琵(rc_legal ? modelist['rc_mode'] === 0x0 ? _0x4e7be3 : _0x212adf : rc_speed / 0x8, self_pos, {
                    'yaw': _0x3d89e2,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x55cf14['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x55cf14['z'] + self_pos['z'])
                };
                if (rc_follow && modelist['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && isMoving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x3d89e2 + sca_yaw);
                    else 于穆曹二善(_0x48f0b8['pitch'], _0x3d89e2 - 0xb4);
                }
                if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modelist['rocker_mode'] === 0x3) {
                    if (rocker_func['angle'] < 0x13b && rocker_func['angle'] > 0xe1 || rocker_func['angle'] > 0x2d && rocker_func['angle'] < 0x87) {
                        _0x55cf14 = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x48f0b8);
                        setMotion(_0x55cf14['x'] - self_pos['x'], _0x55cf14['y'] - self_pos['y'], _0x55cf14['z'] - self_pos['z']);
                    } else {
                        const _0x1584da = rocker_func['angle'] > 0x13b || rocker_func['angle'] < 0x2d;
                        const _0x41f163 = getCameraRotation();
                        current_roll += (_0x1584da ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (modelist['rocker_mode'] === 0x0) setMotion(_0x55cf14['x'] - self_pos['x'], rc_bhop && _0x24a7b8 || rc_ahop && _0x45692e['y'] < -0.4 ? rc_y : _0x45692e['y'], _0x55cf14['z'] - self_pos['z']);
                if (modelist['rocker_mode'] === 0x1) setPos(_0x55cf14['x'], self_pos['y'], _0x55cf14['z']);
                if (direction_func['direction'] === 0x0) rocker_func = {};
            }
            if (typeof airjump_func['operation'] !== 'undefined') {
                const _0x1fec13 = getEntityMotion(self_id);
                const _0x18bcaa = getCameraRotation();
                if (airjump_func['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x1fec13['x'], rc_y, _0x1fec13['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw -= Math['sin'](_0x18bcaa['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch += Math['cos'](_0x18bcaa['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (airjump_func['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x1fec13['x'], -rc_y, _0x1fec13['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw += Math['sin'](_0x18bcaa['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch -= Math['cos'](_0x18bcaa['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0xc56e6a['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
                if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
                    callModule(0x1e, '{"value":false}');
                    BalanceTimer_st = false;
                }
                if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
            }
            if (ModifyTime) {
                if (mt_custom === 0x19) {
                    let _0x5e7694 = 0x0;
                    if (modelist['mt_time'] === 0x0) _0x5e7694 = 0x3e8;
                    if (modelist['mt_time'] === 0x1) _0x5e7694 = 0x32c8;
                    if (modelist['mt_time'] === 0x2) _0x5e7694 = 0x1770;
                    if (modelist['mt_time'] === 0x3) _0x5e7694 = 0x30d4;
                    setWorldData({
                        'time': _0x5e7694
                    });
                } else setWorldData({
                    'time': mt_custom * 0x3e8
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
                人本长安倡(ex, ey, ez, bk_auth, bk_action);
                if (breaker_timer > bk_last) breaker_pos = null;
                breaker_timer++;
            }
            if (FakeTip) {
                switch (modelist['fakeTip_mode']) {
                    case 0x0:
                        showTipMessage('§bProtoHax §r| ' + _0xe4e6['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x5d3b07, _0x2dff57) => globalThis['current_poem'] = JSON['parse'](_0x2dff57)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + ping + 'ms Speed: ' + _0xe4e6['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x12d49d = 0x0; _0x12d49d < mine_speed; _0x12d49d++) {
                    let _0x34ea02 = destroy_list['shift']();
                    if (typeof _0x34ea02 != 'object' || _0x34ea02['length'] === 0x0) continue;
                    const _0x45d5bd = getBlock(_0x34ea02[0x0], _0x34ea02[0x1], _0x34ea02[0x2]);
                    if (_0x45d5bd['namespace'] != 'minecraft:air' && _0x45d5bd['namespace'] === destroy_namespace) {
                        destroyBlock(self_id, _0x34ea02[0x0], _0x34ea02[0x1], _0x34ea02[0x2], 0x0);
                        current_mine_num++;
                    }
                }
                _0xc56e6a['push'](归客不发寻(0x1, '连锁进度', current_mine_num + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x24a7b8) setMotion(0x0, 0x0, 0x0);
            if (_0xc56e6a['length'] > 0x0 && !FakeTip) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0xc56e6a['join'](',\n'));
            if (last_tick_id != self_id) last_tick_id = self_id;
            if (FakeLag) lag_t++;
            if (GodMode) gm_tick++;
            if (SlowMotion && sm_circulate && !isSlowMotion) sm_circulate_t++;
            if (FastBuild && build_list['length'] > 0x0) build_t++;
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
            if (ChestStealer && cs_timer > 0x14) cs_sort = 0x0;
            if (ChestStealer) cs_timer++;
            if (HotbarSelector) select_t++;
            if (rpc_cycle) rpc_t++;
            if (InfiniteAura) InfiniteAura_switch_delay_r++;
            if (AutoArmor && ticks % aa_delay == 0x0) armor_slot++;
            if (FakeTip && modelist['fakeTip_mode'] === 0x1) tip_t1++;
            if (select_t > hs_delay) {
                select_slot++;
                select_t = 0x0;
            }
            if (select_slot > 0x8) select_slot = 0x0;
            if (target_list['length'] > 0x0 && ia_switch === 0x0) InfiniteAura_list = target_list;
            if (ia_switch > 0x0 && InfiniteAura_switch_delay_r > ia_switch && InfiniteAura_list['length'] > 0x0) {
                InfiniteAura_target[0x0] = InfiniteAura_list['shift']();
                InfiniteAura_switch_delay_r = 0x0;
            }
            if (ia_switch === 0x0 && target_list['length'] > 0x0) InfiniteAura_target = target_list;
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
            last_tick_heal = _0x1563ff['current'];
            lastTick_ground = _0x24a7b8;
            lasttick_item_count = item_count;
        } catch (_0x25afb0) {
            clientMessage(_0x25afb0['stack']);
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
            derp_p_r -= dp_random ? 马客在船举(-0xa, 0xa) : dp_headSpeed * 0x2;
            derp_y_r += dp_random ? 马客在船举(-0xa, 0xa) : dp_bodySpeed * 0x2;
            if (derp_p_r < -0x5a) derp_p_r = 0x5a;
            if (derp_y_r > 0xb4) derp_y_r = derp_y_r - 0x168;
            if (!dp_head) derp_p_r = self_rot['pitch'];
            if (!dp_body) derp_y_r = self_rot['yaw'];
            if (dp_lock) derp_p_r = 0x5a;
        }
        if (Scaffold && sca_moveRot && isMoving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x233207 = getCameraRotation();
            const _0xb3b3ef = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x459193 = sca_move ? 弦弦掩抑声(_0xb3b3ef, self_id, 'yaw_pos') : _0x233207['yaw'] > 0x0 ? 0xb4 - _0x233207['yaw'] : -0xb4 - _0x233207['yaw'];
            于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x459193 + sca_yaw);
        }
        if (AssistAim && aa_silent && target_list['length'] > 0x0) {
            let _0x34c56a = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
            let _0x146815 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
            于穆曹二善(_0x34c56a, _0x146815);
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

    function onExecuteCommandEvent(_0x2c18ad) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x2c18ad, '§r');
        const _0x59fd59 = _0x2c18ad['split'](' ');
        if (_0x59fd59[0x0] === '/set' && _0x59fd59[0x1] === 'pos') {
            goto_pos = {
                'x': Number(_0x59fd59[0x2]),
                'y': Number(_0x59fd59[0x3]),
                'z': Number(_0x59fd59[0x4])
            };
            if (_0x59fd59[0x5]) default_speed = Number(_0x59fd59[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x59fd59[0x0] === '/set' && _0x59fd59[0x1] === 'default' && _0x59fd59[0x2] === 'config') {
            if (_0x59fd59[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('default_config', 'null');
                return true;
            }
            if (抱琵琶半遮(config_path + '/' + _0x59fd59[0x3] + '.json') != '{}') {
                setData('default_config', _0x59fd59[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x59fd59[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x59fd59[0x3], '§r');
            return true;
        }
        if (_0x59fd59[0x0] === '/target') {
            if (_0x59fd59[0x1] === 'self') target_list[0x0] = self_id;
            if (_0x59fd59[0x1] === 'player') target_list = getPlayerList();
            if (_0x59fd59[0x1] === 'all') target_list = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + target_list['length'] + '个目标', '§r');
            return true;
        }
        if (_0x59fd59[0x0] === '/cleaner') {
            if (_0x59fd59[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x59fd59[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x59fd59[0x2]));
        }
        if (_0x59fd59[0x0] === '/bind') {
            if (_0x59fd59[0x1] === 'RunAway') {
                if (typeof globalThis[_0x59fd59[0x2]] == 'undefined' && typeof RunAwayID[_0x59fd59[0x2]] == 'undefined' || typeof globalThis[_0x59fd59[0x3]] == 'undefined' && typeof RunAwayID[_0x59fd59[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x12749e = typeof globalThis[_0x59fd59[0x3]] !== 'undefined';
                RunAway_binds[_0x59fd59[0x2]] = {
                    'module': _0x59fd59[0x3],
                    'isNX': _0x12749e
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x59fd59[0x2] + ' 与 ' + _0x59fd59[0x3] + ' 成功', '§r');
                NoveXare_Config['RunAway_binds'] = RunAway_binds;
                return true;
            }
            if (_0x59fd59[0x1] === 'key' && typeof globalThis[_0x59fd59[0x2]] !== 'undefined') {
                isBinding = _0x59fd59[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x59fd59[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x59fd59[0x1]] === 'undefined') bind_func[_0x59fd59[0x1]] = [];
            if (typeof globalThis[_0x59fd59[0x2]] !== 'undefined' && typeof globalThis[_0x59fd59[0x1]] !== 'undefined') {
                bind_func[_0x59fd59[0x1]]['push'](_0x59fd59[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x59fd59[0x1] + ' 与 ' + _0x59fd59[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x59fd59[0x0] === '/unbind') {
            if (_0x59fd59[0x1] === 'key' && typeof globalThis[_0x59fd59[0x2]] !== 'undefined') {
                for (let _0x497f46 in key_bind_list) {
                    if (key_bind_list[_0x497f46] === _0x59fd59[0x2]) {
                        delete key_bind_list[_0x497f46];
                        break;
                    }
                }
                isBinding = _0x59fd59[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x59fd59[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x59fd59[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x59fd59[0x1]] !== 'undefined' && _0x59fd59[0x2] === 'all') {
                delete bind_func[_0x59fd59[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x59fd59[0x1] + ' 的所有绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (_0x59fd59[0x1] === 'all') {
                bind_func = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (typeof globalThis[_0x59fd59[0x2]] !== 'undefined' && typeof globalThis[_0x59fd59[0x1]] !== 'undefined') {
                bind_func[_0x59fd59[0x1]]['splice'](bind_func[_0x59fd59[0x1]]['indexOf'](_0x59fd59[0x2]), 0x1);
                if (bind_func[_0x59fd59[0x1]]['length'] === 0x0) delete bind_func[_0x59fd59[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x59fd59[0x1] + ' 和 ' + _0x59fd59[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x59fd59[0x0] === '/nx') {
            if (typeof globalThis[_0x59fd59[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x59fd59[0x1] === 'num') globalThis[_0x59fd59[0x2]] = Number(_0x59fd59[0x3]);
            if (_0x59fd59[0x1] === 'bool') globalThis[_0x59fd59[0x2]] = Boolean(_0x59fd59[0x3]);
            if (_0x59fd59[0x1] === 'str') globalThis[_0x59fd59[0x2]] = _0x59fd59[0x3];
            if (_0x59fd59[0x1] === 'arr') globalThis[_0x59fd59[0x2]] = 相近邀相见(_0x59fd59[0x3]);
            if (_0x59fd59[0x1] === 'obj') globalThis[_0x59fd59[0x2]] = JSON['parse'](_0x59fd59[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x59fd59[0x2]] + ' => ' + _0x59fd59[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x210a81, _0x30c131, _0x3cf65d) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x210a81 + ' §e结果:§r' + _0x3cf65d + ' §e数据:§r' + JSON['stringify'](_0x30c131, null, 0x2), '§r');
        if (!_0x3cf65d) return true;
    }

    function onCallModuleEvent(_0x4225b5) {
        try {
            if (typeof _0x4225b5 !== 'undefined' && typeof _0x4225b5['fun'] !== 'undefined' && typeof RunAway_binds[_0x4225b5['fun']] !== 'undefined') {
                const _0x3ee7de = RunAway_binds[_0x4225b5['fun']]['module'];
                if (!RunAway_binds[_0x4225b5['fun']]['isNX']) callModule(RunAwayID[_0x3ee7de], JSON['stringify']({
                    'value': _0x4225b5['value']
                }));
                else 委身为贾人(_0x3ee7de, _0x4225b5['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x4225b5, null, 0x4), '§r');
            if (typeof _0x4225b5['name'] === 'undefined') {
                if (Rocker && typeof _0x4225b5['angle'] !== 'undefined') rocker_func = _0x4225b5;
                if (Rocker && typeof _0x4225b5['direction'] !== 'undefined') direction_func = _0x4225b5;
                if (Rocker && typeof _0x4225b5['operation'] !== 'undefined') airjump_func = _0x4225b5;
                return;
            }
            if (_0x4225b5['fun'] === 'fun_hitbox' && typeof _0x4225b5['size'] !== 'undefined') temp_size = {
                'x': _0x4225b5['size'],
                'y': _0x4225b5['size']
            };
            if (target_list['length'] > 0x0 && _0x4225b5['fun'] === 'fun_hitbox' && _0x4225b5['value']) default_size = temp_size;
            if (!_0x4225b5['name']['includes']('NoveXare') && _0x4225b5['fun'] != 'fun_ride_flying') return;
            if (typeof _0x4225b5['SauthLogin'] !== 'undefined') {
                Sauths = _0x4225b5['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x4225b5['CustomBanTip'] !== 'undefined') bantip = _0x4225b5['CustomBanTip'];
            if (typeof _0x4225b5['key'] !== 'undefined') {
                const _0xe97f4e = _0x4225b5['key'];
                if (_0xe97f4e === 'ct_team' || _0xe97f4e === 'km_text') 开宴千呼万(_0xe97f4e, _0xe97f4e === 'ct_team' ? ct_team : km_text);
                if (_0xe97f4e === 'CopyItem') {
                    if (modelist['copy_mode'] === 0x0) dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id));
                    if (modelist['copy_mode'] === 0x1) {
                        for (let _0x490c64 = 0x0; _0x490c64 < 0x24; _0x490c64++) {
                            const _0x1c6085 = getInventory(self_id, _0x490c64);
                            if (_0x1c6085['namespace'] === 'minecraft:air') continue;
                            for (let _0x32215a = 0x0; _0x32215a < _0x1c6085['count']; _0x32215a++) dropPlayerInventorySlot(self_id, _0x490c64);
                        }
                    }
                    const _0x59e2bd = getPos(self_id);
                    setTimeout(() => {
                        for (var _0x1dcf69 = 0x6; _0x1dcf69 <= 0xc8; _0x1dcf69++) buildBlock(self_id, _0x59e2bd['x'], _0x59e2bd['y'], _0x59e2bd['z'], _0x1dcf69);
                        showToast('物品复制成功 请退出重进');
                    }, 0x2710 + copy_random * 0x64);
                }
                if (_0xe97f4e === 'ItemEditor') {
                    const _0x54a8f3 = getEntityCarriedItem(self_id);
                    const _0x4c6301 = 司马明年秋(_0x54a8f3, 'Damage:', 's');
                    const _0x433ef7 = 司马明年秋(_0x54a8f3, '{Damage:', '}', ',');
                    if (modelist['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x54a8f3['replace']('Damage:' + _0x4c6301 + 's', 'Damage:' + ie_data + 's'));
                    if (modelist['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x54a8f3['replace']('{Damage:' + _0x433ef7, '{Damage:' + ie_data));
                    if (modelist['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x54a8f3['replace']('{', '{' + (modelist['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + all_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0xe97f4e === 'EditBackGround') {
                    const _0xde3920 = 'loginVideoNew.mp4';
                    const _0x28d545 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0xde3920)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x28d545 + _0xde3920);
                    file_copy(getResource() + '/' + _0xde3920, _0x28d545 + _0xde3920);
                    showToast('已复制文件');
                }
                if (_0xe97f4e === 'spm_text') 开宴千呼万(_0xe97f4e, spm_text);
                if (_0xe97f4e === 'am_text') 开宴千呼万(_0xe97f4e, am_text);
                if (_0xe97f4e === 'BJDTp') {
                    let _0x1cfe2c = getPlayerList();
                    let _0x2dcfb8 = _0x1cfe2c['length'] > 0x0 ? _0x1cfe2c['map'](_0xd9dc1d => ({
                        'text': getEntityName(_0xd9dc1d) + '\n距离: ' + 声暗问弹者(self_id, _0xd9dc1d)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x2d3091 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x2dcfb8
                    };
                    const _0x253593 = JSON['stringify'](_0x2d3091);
                    addForm(_0x253593, function(_0x362783) {
                        if (_0x1cfe2c['length'] > 0x0 && _0x362783 >= 0x0) {
                            let _0x520b30 = _0x1cfe2c[_0x362783];
                            let _0x54f2d3 = getPos(_0x520b30);
                            setPos(_0x54f2d3['x'], _0x54f2d3['y'] + 1.8, _0x54f2d3['z']);
                            buildBlock(self_id, _0x54f2d3['x'], _0x54f2d3['y'], _0x54f2d3['z'], 0x1);
                        }
                    });
                }
                if (_0xe97f4e === 'ka_text') 开宴千呼万(_0xe97f4e, ka_text);
                if (_0xe97f4e === 'tp_type') 开宴千呼万(_0xe97f4e, tp_type);
                if (_0xe97f4e === 'lp_type') 开宴千呼万(_0xe97f4e, lp_type);
                if (_0xe97f4e === 'ap_type') 开宴千呼万(_0xe97f4e, ap_type);
                if (_0xe97f4e === 'arp_type') 开宴千呼万(_0xe97f4e, arp_type);
                if (_0xe97f4e === 'srp_type') 开宴千呼万(_0xe97f4e, srp_type);
                if (_0xe97f4e === 'tr_type') 开宴千呼万(_0xe97f4e, tr_type);
                if (_0xe97f4e === 'as_type') 开宴千呼万(_0xe97f4e, as_type);
                if (_0xe97f4e === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x4a34d7 = Date['now']();
                        File['write'](config_path + '/自动保存配置 - ' + _0x4a34d7 + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        if (AutoLoadCfg) setData('default_config', '自动保存配置 - ' + _0x4a34d7);
                    }
                    exit();
                    gc();
                }
                if (_0xe97f4e === 'sp_type') 开宴千呼万(_0xe97f4e, sp_type);
                if (_0xe97f4e === 'as_level') 开宴千呼万(_0xe97f4e, as_level);
                if (_0xe97f4e === 'am_id') 开宴千呼万(_0xe97f4e, am_id);
                if (_0xe97f4e === 'am_value') 开宴千呼万(_0xe97f4e, am_value);
                if (_0xe97f4e === 'pam_id') 开宴千呼万(_0xe97f4e, pam_id);
                if (_0xe97f4e === 'pam_value') 开宴千呼万(_0xe97f4e, pam_value);
                if (_0xe97f4e === 'pam_array') 开宴千呼万(_0xe97f4e, pam_array);
                if (_0xe97f4e === 'sp_level') 开宴千呼万(_0xe97f4e, sp_level);
                if (_0xe97f4e === 'cs_text') 开宴千呼万(_0xe97f4e, cs_text);
                if (_0xe97f4e === 'DropInv') {
                    for (let _0x55a9d5 = 0x0; _0x55a9d5 < 0x24; _0x55a9d5++) {
                        const _0x2bc345 = getInventory(self_id, _0x55a9d5);
                        if (_0x2bc345['namespace'] === 'minecraft:air') continue;
                        if (_0x2bc345['count'] < 0x1) continue;
                        for (let _0xa64fac = 0x0; _0xa64fac < _0x2bc345['count']; _0xa64fac++) drop_list['push'](_0x55a9d5);
                    }
                }
                if (_0xe97f4e === 'LookTP') {
                    let _0x33572e = {};
                    for (let _0x3741f6 = 0x0; _0x3741f6 < 0x1f4; _0x3741f6++) {
                        _0x33572e = 忽闻水上琵(_0x3741f6, getPos(self_id), getEntityRot(self_id));
                        const _0x43df7e = getBlock(_0x33572e['x'], _0x33572e['y'], _0x33572e['z']);
                        if (_0x43df7e['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x33572e != {}) {
                        const _0x5a2aa6 = getPos(self_id);
                        if (modelist['LookTP_mode'] === 0x0) 二年恬然自(_0x33572e['x'], _0x33572e['y'] + 1.53, _0x33572e['z']);
                        if (modelist['LookTP_mode'] === 0x1) setPos(_0x33572e['x'], _0x33572e['y'] + 1.53, _0x33572e['z']);
                    }
                }
                if (_0xe97f4e === 'OpenChest') {
                    let _0x2f93ec = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x19848f = [];
                    let _0x201840 = 0x0;
                    let _0x46ce26 = 面转轴拨弦(self_id);
                    const _0x25d3f7 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x277584 = 'shulker_box';
                    for (let _0x2fb32b = -0x7; _0x2fb32b < 0x7; _0x2fb32b++) {
                        for (let _0x2f63f5 = -0x7; _0x2f63f5 < 0x7; _0x2f63f5++) {
                            for (let _0x1a7f39 = -0x7; _0x1a7f39 < 0x7; _0x1a7f39++) {
                                const _0x3dedb3 = _0x2fb32b + _0x46ce26['x'];
                                const _0x5409ca = _0x2f63f5 + _0x46ce26['y'];
                                const _0x5913f4 = _0x1a7f39 + _0x46ce26['z'];
                                const _0x3ce73e = getBlock(_0x3dedb3, _0x5409ca, _0x5913f4);
                                if (_0x25d3f7['includes'](_0x3ce73e['namespace']) || _0x3ce73e['namespace']['includes'](_0x277584)) {
                                    const _0x394607 = getBlock(_0x3dedb3, _0x5409ca + 0x1, _0x5913f4);
                                    _0x2f93ec['buttons'][_0x201840] = {
                                        'text': '命名空间: ' + _0x3ce73e['namespace'] + '\n坐标:   ' + (_0x394607['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x19848f[_0x201840] = {
                                        'x': _0x3dedb3,
                                        'y': _0x5409ca,
                                        'z': _0x5913f4
                                    };
                                    _0x201840++;
                                }
                            }
                        }
                    }
                    if (_0x201840 === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x2f93ec), function(_0x5abd88) {
                        var _0x486b72 = _0x19848f[_0x5abd88];
                        buildBlock(self_id, _0x486b72['x'], _0x486b72['y'], _0x486b72['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0xe97f4e === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0xe97f4e === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0xe97f4e === 'rpc_repeat') {
                    for (let _0x1948af = 0x0; _0x1948af < rpc_repeat_times; _0x1948af++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                }
                if (_0xe97f4e === 'rpc_black') 开宴千呼万(_0xe97f4e, rpc_black);
                if (_0xe97f4e === 'rpc_tipWhite') 开宴千呼万(_0xe97f4e, rpc_tipWhite);
                if (_0xe97f4e === 'rpc_sendBlack') 开宴千呼万(_0xe97f4e, rpc_sendBlack);
                if (_0xe97f4e === 'AttackSelf_one') 江头夜送客(self_id, Swing);
                if (_0xe97f4e === 'RemoveSelf') removeEntity(self_id);
                if (_0xe97f4e === 'QuitGame') leaveWorld();
                if (_0xe97f4e === 'cm_black') 开宴千呼万(_0xe97f4e, cm_black);
                if (_0xe97f4e === 'rpc_recBlack') 开宴千呼万(_0xe97f4e, rpc_recBlack);
                if (_0xe97f4e === 'rpc_white') 开宴千呼万(_0xe97f4e, rpc_white);
                if (_0xe97f4e === 'sl_delete') setData('sauths', '');
                if (_0xe97f4e === 'dc_delete') dc_pos = [];
                if (_0xe97f4e === 'hs_item') 开宴千呼万('selectitems', selectitems);
                if (_0xe97f4e === 'hs_slot') 开宴千呼万('hs_slot', hs_slot);
                if (_0xe97f4e === 'rpc_sendWhite') 开宴千呼万(_0xe97f4e, rpc_sendWhite);
                if (_0xe97f4e === 'rpc_recWhite') 开宴千呼万(_0xe97f4e, rpc_recWhite);
                if (_0xe97f4e === 'at_typeWhite') 开宴千呼万(_0xe97f4e, at_typeWhite);
                if (_0xe97f4e === 'ie_data') 开宴千呼万(_0xe97f4e, ie_data);
                if (_0xe97f4e === 'mine_white') 开宴千呼万(_0xe97f4e, mine_white);
                if (_0xe97f4e === 'cs_white') 开宴千呼万(_0xe97f4e, cs_white);
                if (_0xe97f4e === 'mine_black') 开宴千呼万(_0xe97f4e, mine_black);
                if (_0xe97f4e === 'cs_black') 开宴千呼万(_0xe97f4e, cs_black);
                if (_0xe97f4e === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x119632, _0x132b84, _0x134f5b, _0x3c9878) {
                        var _0x2108fd = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0x2e089f = 0x0;
                        var _0x6e1470 = getResource();
                        var _0x1bb64b = JSON['parse'](File['read'](_0x6e1470 + '/ui/ui_definition.json'))['ui']['map'](_0x503f45 => ({
                            'name': _0x503f45 + '.json',
                            'path': _0x6e1470 + '/ui/' + _0x503f45 + '.json'
                        }));
                        for (var _0x3d965e of _0x1bb64b) {
                            if (!_0x3d965e['name']['includes']('NoveXare')) continue;
                            var _0x2c30de = JSON['parse'](File['read'](_0x3d965e['path']));
                            if (typeof _0x2c30de['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x2237ef of _0x2c30de['items'][0x0]['items']) {
                                if (typeof _0x2237ef['name'] === 'undefined' || typeof _0x2237ef['key'] === 'undefined') continue;
                                if (_0x134f5b && _0x2237ef['type'] != 'Switch') continue;
                                if (_0x3c9878 && _0x2237ef['type'] == 'Switch') continue;
                                if (!_0x132b84 && (_0x2237ef['name'] === _0x119632 || _0x2237ef['key'] === _0x119632) || _0x132b84 && (_0x2237ef['name']['includes'](_0x119632) || _0x2237ef['key']['includes'](_0x119632))) {
                                    _0x2108fd['items'][0x0]['items'][_0x2e089f] = _0x2237ef;
                                    _0x2e089f++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x119632, JSON['stringify'](_0x2108fd));
                    });
                }
                if (_0xe97f4e === 'sp_clear') play_pos_list = [];
                if (_0xe97f4e === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0x25deac) {
                        var _0x3d328d = _0x25deac['split'](',');
                        play_pos_list['push']({
                            'x': Number(_0x3d328d[0x0]),
                            'y': Number(_0x3d328d[0x1]),
                            'z': Number(_0x3d328d[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + play_pos_list['length'] + '组坐标', '§r');
                    });
                }
                if (_0xe97f4e === 'sp_load') {
                    const _0x55efdd = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x55efdd, function(_0x3af18e) {
                        var _0x16c209 = File['read'](_0x3af18e);
                        if (_0x16c209 != '' && SoundPlayer) {
                            sound_data = JSON['parse'](_0x16c209);
                            sound_file = sp_loop ? _0x16c209 : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0xe97f4e === 'sp_select') {
                    const _0x1bc481 = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x27d598 = file_list(getResource() + '/sounds/NoveXare');
                    _0x27d598['sort']((_0x5ac75e, _0x1ae54b) => _0x5ac75e['name']['localeCompare'](_0x1ae54b['name']));
                    for (let _0x418c6f = 0x0; _0x418c6f < _0x27d598['length']; _0x418c6f++) {
                        _0x1bc481['buttons'][_0x418c6f] = {
                            'text': _0x27d598[_0x418c6f]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x1beb61 = JSON['stringify'](_0x1bc481);
                    addForm(_0x1beb61, function(_0x3b675e) {
                        if (_0x27d598['length'] > 0x0 && _0x3b675e >= 0x0) {
                            var _0xfc2199 = File['read'](_0x27d598[_0x3b675e]['path']);
                            if (_0xfc2199 != '' && SoundPlayer) {
                                sound_data = JSON['parse'](_0xfc2199);
                                sound_file = sp_loop ? _0xfc2199 : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0xe97f4e === 'save_config') {
                    const _0x2841a2 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](NoveXare_Config)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x2841a2, function(_0x18bb1c, _0x11c60b) {
                        File['write'](config_path + '/' + _0x18bb1c + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0x11c60b) NoveXare_Config = {
                            'binds': {},
                            'key_binds': [],
                            'RunAway_binds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0xe97f4e === 'load_config') {
                    const _0x8c4ef5 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x3a52ce = file_list(config_path);
                    _0x3a52ce['sort']((_0x4fcc58, _0x19808c) => _0x4fcc58['name']['localeCompare'](_0x19808c['name']));
                    for (let _0x5c8c33 = 0x0; _0x5c8c33 < _0x3a52ce['length']; _0x5c8c33++) {
                        _0x8c4ef5['buttons'][_0x5c8c33] = {
                            'text': '§e' + _0x3a52ce[_0x5c8c33]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x4387e2 = JSON['stringify'](_0x8c4ef5);
                    addForm(_0x4387e2, function(_0x1895ac) {
                        if (_0x3a52ce['length'] > 0x0 && _0x1895ac >= 0x0) {
                            var _0x3ed1aa = JSON['parse'](抱琵琶半遮(_0x3a52ce[_0x1895ac]['path']));
                            var _0xc13c99 = 0x0;
                            bind_func = _0x3ed1aa['binds'];
                            key_bind_list = _0x3ed1aa['key_binds'];
                            RunAway_binds = _0x3ed1aa['RunAway_binds'];
                            for (var _0x346721 in _0x3ed1aa) {
                                _0xc13c99++;
                                if (_0x346721['includes']('_mode') && _0x4225b5['index'] && _0x4225b5['index'] > 0x0) modelist[_0x346721] = _0x3ed1aa[_0x346721];
                                if (_0x346721 != 'RunAway_binds' && _0x346721 != 'key_binds' && _0x346721 != 'binds' && _0x346721 != 'name') 委身为贾人(_0x346721, _0x3ed1aa[_0x346721]);
                            }
                            NoveXare_Config = _0x3ed1aa;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x3ed1aa['name'] + '的配置，共' + _0xc13c99 + '条配置', '§r');
                        }
                    });
                }
                if (_0xe97f4e === 'rpc_select') {
                    const _0x85d623 = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x1b942e = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x35dcd7 = 0x0; _0x35dcd7 < _0x1b942e['length']; _0x35dcd7++) {
                        _0x85d623['buttons'][_0x35dcd7] = {
                            'text': (_0x1b942e[_0x35dcd7]['type'] === 'Send' ? '§a' : '§c') + _0x1b942e[_0x35dcd7]['packet_str']
                        };
                    }
                    const _0xd868b9 = JSON['stringify'](_0x85d623);
                    addForm(_0xd868b9, function(_0x4a9d01) {
                        last_PyRpc = {
                            'id': _0x1b942e[_0x4a9d01]['id'],
                            'data': _0x1b942e[_0x4a9d01]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0xe97f4e === 'cw_range') {
                    let _0x6ac04c = getPlayerList();
                    let _0x369a4d = 0x0;
                    for (let _0x180a88 of _0x6ac04c) {
                        const _0x3c82b4 = getPos(_0x180a88);
                        const _0x570949 = getDistance(_0x3c82b4, getPos(self_id));
                        if (!white_list['includes'](_0x180a88) && _0x570949 < cw_size && _0x180a88 != self_id) {
                            white_list['push'](_0x180a88);
                            _0x369a4d++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0x369a4d + '个玩家到白名单', '§r');
                }
                if (_0xe97f4e === 'KickSelf')
                    for (let _0x544d94 = 0x0; _0x544d94 < 0x3e8; _0x544d94++) 江头夜送客(self_id, Swing);
                if (_0xe97f4e === 'bc_delete') ac_pos = [];
                if (_0xe97f4e === 'cm_depart') departCamera();
                if (_0xe97f4e === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0xe97f4e === 'cm_reset') resetCamera();
                if (_0xe97f4e === 'cm_lock') lockCamera();
                if (_0xe97f4e === 'ou_recover') other_user = null;
                if (_0xe97f4e === 'delete_chest') ca_chest_pos = [];
                if (_0xe97f4e === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0xe97f4e === 'fm_place') fm_pos = self_pos;
                if (_0xe97f4e === 'at_regex') 开宴千呼万(_0xe97f4e, at_regex);
                if (_0xe97f4e === 'cw_add' || _0xe97f4e === 'ct_add' || _0xe97f4e === 'ct_add') 茫茫江浸月(_0xe97f4e === 'cw_add' ? 'white_list' : 'target_list', 0x1);
                if (_0xe97f4e === 'fw_target' || _0xe97f4e === 'fc_target') 茫茫江浸月(_0xe97f4e === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0xe97f4e === 'cm_target') 茫茫江浸月('cm_target', 0x0);
                if (_0xe97f4e === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0xe97f4e === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0xe97f4e === 'cw_remove') white_list = [];
                if (_0xe97f4e === 'DumpList') File['write'](NoveXare_path + '/List.json', JSON['stringify']({
                    'targets': target_list['map'](_0x263f44 => ({
                        'name': getEntityName(_0x263f44),
                        'id': _0x263f44,
                        'namespace': getEntityNamespace(_0x263f44)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x3f52e7 => ({
                        'name': getEntityName(_0x3f52e7),
                        'id': _0x3f52e7,
                        'namespace': getEntityNamespace(_0x3f52e7)
                    }))
                }));
                if (_0xe97f4e === 'DumpWorldInfo') File['write'](NoveXare_path + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0xe97f4e === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(NoveXare_path + '/WorldInfo.json')));
                if (_0xe97f4e === 'Rusher') {
                    const _0x2f3a30 = getCameraRotation();
                    let _0x5188bc = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x2f3a30['yaw'] > 0x0 ? 0xb4 - _0x2f3a30['yaw'] : -0xb4 - _0x2f3a30['yaw'],
                        'pitch': -_0x2f3a30['pitch']
                    });
                    setMotion(_0x5188bc['x'] - self_pos['x'], _0x5188bc['y'] - self_pos['y'], _0x5188bc['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x238c92 in _0x4225b5) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x238c92)) continue;
                if (typeof _0x4225b5['index'] !== 'undefined') {
                    modelist[_0x238c92] = _0x4225b5['index'] - 0x1;
                    NoveXare_Config[_0x238c92] = _0x4225b5['index'] - 0x1;
                    归客不发寻(0x0, _0x238c92['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x4225b5[_0x238c92], '§r');
                    if (_0x238c92 === 'tip_mode' && modelist['tip_mode'] === 0x1) {
                        callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x238c92 === 'Criticals') {
                    if (_0x4225b5[_0x238c92]) playerJump();
                    else {
                        Criticals_status = false;
                        callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
                    }
                }
                if (_0x238c92 === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x4225b5[_0x238c92]) + ',"count":' + ka_packet + '}');
                if (_0x238c92 === 'RandomArrayList' && !_0x4225b5[_0x238c92]) {
                    for (let _0x4569bd = 0x0; _0x4569bd < ral_num; _0x4569bd++) addCustomArrayList('RandomArrayList' + _0x4569bd, '', '', false);
                }
                if (_0x238c92 === 'Rocker') callModule(0x39, '{"value":' + b2s(modelist['rc_mode'] === 0x1 && _0x4225b5[_0x238c92]) + ',"fov":150}');
                if (_0x238c92 === 'FakeMove') {
                    if (_0x4225b5[_0x238c92]) fakemove_pos = getPos(self_id);
                    else if (!_0x4225b5[_0x238c92]) 欲语迟移船(fakemove_pos['x'], fakemove_pos['y'], fakemove_pos['z']);
                    let _0x55b25d = {
                        'enable': !_0x4225b5[_0x238c92],
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
                    callModule(0x7, JSON['stringify'](_0x55b25d));
                    setTimeout(() => 欲语迟移船(fakemove_pos['x'] + 0xf, fakemove_pos['y'] + 0xf, fakemove_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x238c92 === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x4225b5[_0x238c92]) + ',"count":' + cs_packet + '}');
                if (_0x238c92 === 'ShowNowTime' && !_0x4225b5[_0x238c92]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0x238c92 === 'RandomFunc') {
                    const _0x237437 = Object['keys'](globalThis);
                    let _0x4d3d56 = [];
                    for (let _0x1dba3b of _0x237437) {
                        if (typeof globalThis[_0x1dba3b] === 'boolean') _0x4d3d56['push'](_0x1dba3b);
                    }
                    const _0x50913c = _0x4d3d56[马客在船举(0x0, _0x4d3d56['length'] - 0x1)];
                    委身为贾人(_0x50913c, _0x4225b5[_0x238c92]);
                }
                if (_0x238c92 === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x4225b5[_0x238c92]) + ',"count":' + ia_packet + '}');
                if (_0x238c92 === 'FlashBack') sb();
                if (_0x238c92 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x4225b5[_0x238c92]) + '}');
                if (_0x238c92 === 'PyRpcManager' && rpc_store && !_0x4225b5[_0x238c92]) {
                    rpc_temp['forEach'](_0x47e923 => sendRpc(_0x47e923['id'], _0x47e923['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x238c92 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x4225b5[_0x238c92],
                    'defaultValue': false
                });
                if (_0x238c92 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x4225b5[_0x238c92],
                    'defaultValue': false
                });
                if (_0x238c92 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x4225b5[_0x238c92],
                    'defaultValue': false
                });
                if (_0x238c92 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x4225b5[_0x238c92],
                    'defaultValue': false
                });
                if (_0x238c92 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x4225b5[_0x238c92],
                    'defaultValue': false
                });
                if (_0x238c92 === 'FreeCam') {
                    let _0x4eb123 = {
                        'value': _0x4225b5[_0x238c92],
                        'noclip': _0x4225b5[_0x238c92],
                        'flying': _0x4225b5[_0x238c92]
                    };
                    callModule(0x1, JSON['stringify'](_0x4eb123));
                    if (_0x4225b5[_0x238c92]) freecam_pos = getPos(self_id);
                    else setPos(freecam_pos['x'], freecam_pos['y'], freecam_pos['z']);
                }
                if (_0x238c92 === 'FakeMotion' && fm_auto && _0x4225b5[_0x238c92]) fm_pos = getPos(self_id);
                if (_0x238c92 === 'ShadowBoomer' && _0x4225b5[_0x238c92]) sb_pos = getPos(self_id);
                if (_0x238c92 === 'AvoidAttack' && _0x4225b5[_0x238c92]) AvoidAttack_pos = getPos(self_id);
                else if (_0x238c92 === 'AvoidAttack' && !_0x4225b5[_0x238c92]) setPos(AvoidAttack_pos['x'], AvoidAttack_pos['y'], AvoidAttack_pos['z']);
                if (_0x238c92 === 'NoClip') {
                    let _0x433677 = {
                        'value': _0x4225b5[_0x238c92],
                        'noclip': _0x4225b5[_0x238c92],
                        'flying': _0x4225b5[_0x238c92]
                    };
                    if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x4225b5[_0x238c92]) + '}');
                    if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x4225b5[_0x238c92]) + ',"no_fall_check":' + b2s(_0x4225b5[_0x238c92]) + ',"value":' + b2s(_0x4225b5[_0x238c92]) + '}');
                    callModule(0x1, JSON['stringify'](_0x433677));
                    if (nc_blink) record_blink_pos = getPos(self_id);
                    else record_blink_pos = {};
                }
                if (_0x238c92 === 'BalanceTimer') {
                    callModule(0x25, '{"value":' + _0x4225b5[_0x238c92] + '}');
                    BalanceTimer_st = !_0x4225b5[_0x238c92];
                }
                if (_0x238c92 === 'IQBoost') {
                    const _0x3c547c = File['read'](NoveXare_path + '/iQBoost.txt')['split']('\n');
                    let _0x56c64c = 马客在船举(0x0, _0x3c547c['length'] - 0x1);
                    sendChatMessage('!' + _0x3c547c[_0x56c64c]);
                }
                if (_0x238c92 === 'AutoTarget' && !_0x4225b5[_0x238c92]) target_list = [];
                if (_0x238c92 === 'SoundPlayer' && !_0x4225b5[_0x238c92]) sound_data = [];
                if (_0x238c92 === 'FightBot' && !_0x4225b5[_0x238c92]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x238c92 === 'ShowSendPacket' && !_0x4225b5[_0x238c92] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x3e9520 = '';
                    for (let _0x50817b in PacketTmp['send']) _0x3e9520 += '名称:' + _0x50817b + '，ID:' + PacketTmp['send'][_0x50817b]['id'] + '，发送数量:' + PacketTmp['send'][_0x50817b]['count'] + '\n';
                    if (sp_save) File['write'](NoveXare_path + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x3e9520, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x238c92 === 'ShowReceivePacket' && !_0x4225b5[_0x238c92] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x13f1dd = '';
                    for (let _0x5724ce in PacketTmp['receive']) _0x13f1dd += '名称:' + _0x5724ce + '，ID:' + PacketTmp['receive'][_0x5724ce]['id'] + '，接受数量:' + PacketTmp['receive'][_0x5724ce]['count'] + '\n';
                    if (srp_save) File['write'](NoveXare_path + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x13f1dd, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x238c92 === 'Scaffold' && sca_keep && _0x4225b5[_0x238c92]) rec_y = 0x0;
                if (_0x238c92 === 'Scaffold' && !_0x4225b5[_0x238c92]) createText(0x1, 0x1, ' ', false, 'sca_count');
                if (_0x238c92 === 'TargetHud' && !_0x4225b5[_0x238c92]) createText(0x1, 0x1, ' ', false, 'TargetHud');
                if (_0x238c92 === 'sp_loop' && !_0x4225b5[_0x238c92]) sound_file = null;
                if (_0x238c92 === 'NoLiquid' && _0x4225b5[_0x238c92]) {
                    record_water = getEntityAttribute(self_id, 0x2);
                    record_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x238c92 === 'NoLiquid' && !_0x4225b5[_0x238c92]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', record_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', record_lava);
                }
                if (typeof _0x4225b5[_0x238c92] === 'boolean' || typeof _0x4225b5[_0x238c92] === 'number') {
                    if (target_list['length'] > 0x0) {
                        if (_0x238c92 === 'hb_hor') temp_size['x'] = _0x4225b5[_0x238c92];
                        if (_0x238c92 === 'hb_y') temp_size['y'] = _0x4225b5[_0x238c92];
                    }
                    if (target_list['length'] > 0x0 && _0x238c92 === 'HitBox' && _0x4225b5[_0x238c92]) default_size = temp_size;
                    if (typeof _0x4225b5[_0x238c92] === 'boolean') {
                        委身为贾人(_0x238c92, _0x4225b5[_0x238c92]);
                        return;
                    }
                    NoveXare_Config[_0x238c92] = _0x4225b5[_0x238c92];
                    globalThis[_0x238c92] = _0x4225b5[_0x238c92];
                }
            }
        } catch (_0x5786e0) {
            clientMessage(_0x5786e0['stack']);
        }
    }

    function onPlayerAttackEvent(_0x49925f, _0x38a766) {
        if (SoundManager && sm_attack) playSound(NoveXare_path + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x38a766;
        if (SlowMotion && sm_onhit && !isSlowMotion) isSlowMotion = true;
        if (FakeTip && modelist['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x38a766));
        if (FakeTip && modelist['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x38a766));
        if (FakeTip && modelist['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x38a766));
        if (FakeTip && modelist['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x38a766));
        if (TargetEdit) {
            if (first_target === null) first_target = _0x38a766;
            else {
                if (te_all) getEntityList()['forEach'](_0x571e22 => {
                    if (_0x571e22 != first_target) 弦切切如私(_0x571e22, first_target, te_two);
                });
                else 弦切切如私(_0x38a766, first_target, te_two);
                first_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x38a766);
            else startRidingEntity(_0x38a766);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (first_entity === null) first_entity = _0x38a766;
            else {
                setEntityNBT(_0x38a766, getEntityNBT(first_target));
                first_entity = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x38a766));
        if (!attack_list['includes'](_0x38a766)) attack_list['push'](_0x38a766);
        if (_0x38a766 === null || attack_list['every'](_0x1d6780 => last_attack_target['includes'](_0x1d6780))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x38a766;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            other_user = _0x38a766;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            anchor_target = _0x38a766;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x38a766), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x2f0359 = getPos(_0x38a766);
            const _0xc8d750 = getEntitySize(_0x38a766);
            for (let _0x2523ca = 0x0; _0x2523ca < 马客在船举(ap_count, ap_count + 0x14); _0x2523ca++) 妇遂命酒使(ap_type, _0x2f0359['x'] + 马客在船举(-_0xc8d750['x'] * 马客在船举(0x7, 0xa), _0xc8d750['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x2f0359['y'] + 马客在船举(-_0xc8d750['y'] * 0x9, _0xc8d750['y'] * 0x2) / 0xa, _0x2f0359['z'] + 马客在船举(-_0xc8d750['x'] * 马客在船举(0x7, 0xa), _0xc8d750['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x314a6e = 声暗问弹者(self_id, _0x38a766);
            callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"at_maxDist":' + _0x314a6e * 1.01 + '}');
            setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x555888 = 京都声问其(_0x38a766);
            归客不发寻(0x0, 'Info', '\n' + _0x555888 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](NoveXare_path + '/' + getEntityName(_0x38a766) + '_' + _0x38a766 + '.txt', _0x555888);
            return true;
        }
        if (SmartWeapon) {
            let _0x2e4450 = [];
            for (let _0xd28c23 = 0x0; _0xd28c23 < 0x9; _0xd28c23++) _0x2e4450['push']({
                'slot': _0xd28c23,
                'd': 十六言命曰(self_id, _0xd28c23)
            });
            _0x2e4450['sort']((_0x321086, _0xa69e94) => _0xa69e94['d'] - _0x321086['d']);
            let _0x1ddb63 = _0x2e4450[0x0];
            if (_0x1ddb63['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x1ddb63['slot']);
        }
        if (ClickTarget) {
            if (!target_list['includes'](_0x38a766)) target_list['push'](_0x38a766);
            else target_list['splice'](target_list['indexOf'](_0x38a766), 0x1);
            归客不发寻(0x0, !target_list['includes'](_0x38a766) ? 'delTarget' : 'addTarget', getEntityName(_0x38a766), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x371e7f = getPos(_0x38a766);
            const _0x36d9a9 = 弦弦掩抑声(self_pos, _0x371e7f, 'yaw_pos');
            const _0x5bbe58 = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
                'yaw': _0x36d9a9,
                'pitch': 0x0
            });
            setEntityMotion(_0x38a766, _0x5bbe58['x'] - self_pos['x'], ckb_y, _0x5bbe58['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!white_list['includes'](_0x38a766)) white_list['push'](_0x38a766);
            else white_list['splice'](white_list['indexOf'](_0x38a766), 0x1);
            归客不发寻(0x0, !white_list['includes'](_0x38a766) ? 'delTarget' : 'addTarget', getEntityName(_0x38a766), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 唤始出来犹(getEntityName(_0x38a766));
            归客不发寻(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modelist['th_select_mode'] == 0x1) th_target = _0x38a766;
        if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x2b5b15) {
        if (_0x2b5b15 === '') return true;
        if (BypassMute) {
            if (modelist['bm_mode'] === 0x0) executeCommand('me ' + _0x2b5b15);
            if (modelist['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x2b5b15);
            if (modelist['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x2b5b15);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x2b5b15);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x2b5b15);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x2b5b15);
            return true;
        }
        if (ChatSuffix && !_0x2b5b15['includes'](cs_text)) {
            sendChatMessage(_0x2b5b15 + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x235e07, _0xa3f9dd) {
        if (ChatManager && (_0x235e07 != getEntityName(self_id) && cm_other || _0x235e07 == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x296ebb = 0x0; _0x296ebb < cm_repeat_times; _0x296ebb++) sendChatMessage(_0xa3f9dd);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x235e07 + ', 消息:' + _0xa3f9dd, '§r');
        if (ChatManager) return cm_black['some'](_0x21afa3 => _0xa3f9dd['includes'](_0x21afa3));
        if (ChatManager && _0xa3f9dd['length'] > cm_length) return;
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x16c362) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x5d26b9 = getEntityMotion(_0x16c362);
            const _0x3d2b8c = getCameraRotation();
            const _0x56d2a8 = 酒欲饮无管(_0x5d26b9, self_pos, 0x14);
            const _0x49f325 = 忽闻水上琵(lj_len / 0x4, self_pos, {
                'yaw': _0x3d2b8c['yaw'] > 0x0 ? 0xb4 - _0x3d2b8c['yaw'] : -0xb4 - _0x3d2b8c['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x49f325['x'] - self_pos['x'], lj_y, _0x49f325['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x29a272, _0x311a5e) {
        if (PyRpcManager && rpc_rec) {
            const _0x17ccd4 = new Uint8Array(_0x311a5e);
            const _0x54286c = Array['from'](_0x17ccd4, _0x3ac0ea => _0x3ac0ea['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x2bd862 = 左迁九江郡(_0x311a5e)['toLowerCase']();
            let _0x2084bf = false;
            let _0x4642e5 = rpc_tipWhite['some'](_0x1e6b7e => _0x2bd862['includes'](_0x1e6b7e));
            if (!_0x2084bf) _0x2084bf = rpc_black['some'](_0x102a5f => _0x2bd862['includes'](_0x102a5f));
            if (!_0x2084bf) _0x2084bf = rpc_recBlack['some'](_0x34b1a8 => _0x2bd862['includes'](_0x34b1a8));
            if (rpc_white['some'](_0x4a371e => _0x2bd862['includes'](_0x4a371e))) _0x2084bf = false;
            if (rpc_recWhite['some'](_0x265dfa => _0x2bd862['includes'](_0x265dfa))) _0x2084bf = false;
            if (rpc_record && (_0x4642e5 && rpc_exclude || !_0x4642e5)) {
                const _0x3ea4eb = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x370d2a = JSON['parse'](抱琵琶半遮(_0x3ea4eb));
                _0x370d2a[_0x370d2a['length']] = {
                    'packet_hex': _0x54286c,
                    'packet_format': 嘈如急雨小(_0x54286c),
                    'packet_str': 左迁九江郡(_0x311a5e),
                    'packet_bin': _0x17ccd4,
                    'time': Date['now'](),
                    'id': _0x29a272,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x2084bf
                };
                File['write'](_0x3ea4eb, JSON['stringify'](_0x370d2a, null, 0x4));
            }
            let _0x549f79 = 'Null';
            if (modelist['rpc_mode'] === 0x0) _0x549f79 = 左迁九江郡(_0x311a5e);
            if (modelist['rpc_mode'] === 0x1) _0x549f79 = _0x54286c;
            if (modelist['rpc_mode'] === 0x2) _0x549f79 = 嘈如急雨小(_0x54286c);
            if (modelist['rpc_mode'] === 0x3) _0x549f79 = JSON['stringify'](_0x311a5e);
            const _0x270156 = _0x2084bf ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x4642e5 && (rpc_showDisintercept && !_0x2084bf || rpc_showIntercept && _0x2084bf)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x29a272 + '\n' : '') + _0x549f79 + _0x270156, '§r');
            return _0x2084bf;
        }
    }

    function onPyRpcSendEvent(_0x5ce46a, _0x5e23fc) {
        if (PyRpcManager && rpc_send) {
            const _0x3e300f = new Uint8Array(_0x5e23fc);
            const _0x57abd0 = Array['from'](_0x3e300f, _0xbd6e0d => _0xbd6e0d['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x307ab8 = 左迁九江郡(_0x5e23fc)['toLowerCase']();
            let _0x1e7962 = false;
            let _0x11294f = rpc_tipWhite['some'](_0x50bcfb => _0x307ab8['includes'](_0x50bcfb));
            if (!_0x1e7962) _0x1e7962 = rpc_black['some'](_0x3e6a79 => _0x307ab8['includes'](_0x3e6a79));
            if (!_0x1e7962) _0x1e7962 = rpc_sendBlack['some'](_0x362cc6 => _0x307ab8['includes'](_0x362cc6));
            if (rpc_white['some'](_0x249212 => _0x307ab8['includes'](_0x249212))) _0x1e7962 = true;
            if (rpc_sendWhite['some'](_0x297b51 => _0x307ab8['includes'](_0x297b51))) _0x1e7962 = false;
            if (!_0x11294f) last_PyRpc = {
                'id': _0x5ce46a,
                'data': _0x3e300f
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x5ce46a,
                'data': _0x3e300f
            });
            if (rpc_intercept) _0x1e7962 = true;
            if (rpc_record && (_0x11294f && rpc_exclude || !_0x11294f)) {
                const _0x304e9f = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x392ea9 = JSON['parse'](抱琵琶半遮(_0x304e9f));
                _0x392ea9[_0x392ea9['length']] = {
                    'packet_hex': _0x57abd0,
                    'packet_format': 嘈如急雨小(_0x57abd0),
                    'packet_str': 左迁九江郡(_0x5e23fc),
                    'packet_bin': _0x3e300f,
                    'time': Date['now'](),
                    'id': _0x5ce46a,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x1e7962
                };
                File['write'](_0x304e9f, JSON['stringify'](_0x392ea9, null, 0x4));
            }
            let _0x2d153d = 'Null';
            if (modelist['rpc_mode'] === 0x0) _0x2d153d = 左迁九江郡(_0x5e23fc);
            if (modelist['rpc_mode'] === 0x1) _0x2d153d = _0x57abd0;
            if (modelist['rpc_mode'] === 0x2) _0x2d153d = 嘈如急雨小(_0x57abd0);
            if (modelist['rpc_mode'] === 0x3) _0x2d153d = JSON['stringify'](_0x5e23fc);
            for (let _0x4a1bd6 of rpc_config) {
                if (typeof _0x4a1bd6 === 'object') {
                    if (_0x4a1bd6['match_mode'] === 0x0 && _0x2d153d['includes'](_0x4a1bd6['packet'])) _0x2d153d = remarks;
                    if (_0x4a1bd6['match_mode'] === 0x1 && _0x2d153d['includes'] === _0x4a1bd6['packet']) _0x2d153d = remarks;
                } else continue;
            }
            let _0x6b85b6 = _0x1e7962 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x11294f && (rpc_showDisintercept && !_0x1e7962 || rpc_showIntercept && _0x1e7962)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x5ce46a + '\n' : '') + _0x2d153d + _0x6b85b6, '§r');
            return _0x1e7962;
        }
    }

    function onEntityBehaviorEvent(_0x1143f0, _0x259d1f, _0x12210f) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x1143f0 + ' 实体昵称:' + getEntityName(_0x1143f0) + ' 行为ID:' + _0x259d1f + ' 行为数据:' + _0x12210f, '§r');
        if (_0x259d1f === 0x27 && _0x1143f0 === Arrow_id) Arrow_id = null;
        if (_0x259d1f === 0x3 && attack_list['includes'](_0x1143f0)) {
            if (SlowMotion && sm_onkill && !isSlowMotion) isSlowMotion = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x1f7903 = 0x0; _0x1f7903 < 0x32; _0x1f7903++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x1143f0) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x1143f0), '§r');
            if (SoundManager && sm_kill) playSound(NoveXare_path + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(NoveXare_path + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(kill_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x259d1f === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x1143f0);
        if (_0x259d1f === 0x2 && attack_list['includes'](_0x1143f0)) real_attack++;
        if (FightBack && fb_ishurt && (modelist['fb_mode'] == 0x0 || _0x259d1f === 0x4 && _0x1143f0 != self_id)) {
            let _0x1961da = modelist['fb_mode'] == 0x0 ? target_list[0x0] : _0x1143f0;
            if (声暗问弹者(_0x1961da, self_id) < fb_range) 江头夜送客(_0x1143f0, Swing);
            fb_ishurt = false;
        }
        if (_0x259d1f === 0x2 && _0x1143f0 === self_id) {
            let _0x28c526 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(NoveXare_path + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !isSlowMotion) isSlowMotion = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x12210f, '§r');
            if (HurtJump) setMotion(_0x28c526['x'], hj_height, _0x28c526['z']);
            if (AntiKB) {
                let _0x4ad355 = akb_hor / 0x64;
                let _0x2f271e = akb_y / 0x64;
                setMotion(_0x28c526['x'] - _0x4ad355 * _0x28c526['x'], _0x28c526['y'] - _0x2f271e * _0x28c526['y'], _0x28c526['z'] - _0x4ad355 * _0x28c526['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x12210f == 0x2) fb_ishurt = true;
        }
        if (_0x259d1f === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x2d3b9c, _0x4641a, _0x3d2e03, _0xf52035, _0x5d4e3f) {
        const _0xf9188c = getCarried(_0x2d3b9c);
        const _0x3820b7 = getBlock(_0x4641a, _0x3d2e03, _0xf52035);
        if (_0x3820b7['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(NoveXare_path + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x3820b7['namespace'] + ', §rID:' + _0x3820b7['id'] + ', 方块选择面:' + _0x5d4e3f + ', §r特殊值:' + _0x3820b7['aux'] + '\n手持:' + _0xf9188c['name'] + '-[' + _0xf9188c['namespace'] + '], 特殊值:' + _0xf9188c['aux'] + '\n坐标:[' + _0x4641a + ', ' + _0x3d2e03 + ', ' + _0xf52035 + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x4641a + ' ' + _0x3d2e03 + ' ' + _0xf52035 + '的' + _0x3820b7['namespace']);
        if (Miner && (_0x3820b7['namespace'] === destroy_namespace || !isDestroy)) {
            if (!isDestroy && current_mine_num < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0xf5225f => _0x3820b7['namespace']['includes'](_0xf5225f))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x1da2dd => !_0x3820b7['namespace']['includes'](_0x1da2dd)))) {
                isDestroy = true;
                destroy_namespace = _0x3820b7['namespace'];
            }
            if (isDestroy && destroy_namespace != _0x3820b7['namespace'] && current_mine_num < mine_num && destroy_list['length'] > 0x0) destroy_namespace = _0x3820b7['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x4641a,
                    'y': _0x3d2e03,
                    'z': _0xf52035
                }) <= mine_distance && isDestroy) {
                let _0x64003 = [
                    [_0x4641a + 0x1, _0x3d2e03, _0xf52035],
                    [_0x4641a - 0x1, _0x3d2e03, _0xf52035],
                    [_0x4641a, _0x3d2e03, _0xf52035 + 0x1],
                    [_0x4641a, _0x3d2e03, _0xf52035 - 0x1],
                    [_0x4641a, _0x3d2e03 + 0x1, _0xf52035],
                    [_0x4641a, _0x3d2e03 - 0x1, _0xf52035]
                ];
                for (p of _0x64003) {
                    const _0x2fb655 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x2fb655['namespace'] != 'minecraft:air' && _0x3820b7['namespace'] === destroy_namespace) destroy_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x3c94e4 = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x3c94e4['levelName'] + ' ，难度:' + _0x3c94e4['difficulty'] + ' 游戏模式:' + _0x3c94e4['gameType'] + ' 游戏时间:' + _0x3c94e4['time'] + ' 随机刻速度:' + _0x3c94e4['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x170edb, _0x3e4cd4, _0x5b6a2e, _0x48898c, _0x15f282) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(NoveXare_path + '/sounds/build.mp3');
        const _0x32444f = getCarried(_0x170edb);
        const _0x26784d = getBlock(_0x3e4cd4, _0x5b6a2e, _0x48898c);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x32444f['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x26784d['namespace'] + ', §rID:' + _0x26784d['id'] + ', 方块选择面:' + _0x15f282 + ', §r特殊值:' + _0x26784d['aux'] + '\n手持:' + _0x32444f['name'] + '-[' + _0x32444f['namespace'] + '], 特殊值:' + _0x32444f['aux'] + '\n坐标:[' + _0x3e4cd4 + ', ' + _0x5b6a2e + ', ' + _0x48898c + ']', '§r');
        if (ClickTP) 欲语迟移船(_0x3e4cd4, _0x5b6a2e + 0x2, _0x48898c);
        const _0x2f9b6e = ChestAura && ca_rot && _0x26784d['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x170edb) || ClickRot;
        if (_0x2f9b6e) {
            let _0x1a5cd9 = {
                'x': _0x3e4cd4,
                'y': _0x5b6a2e,
                'z': _0x48898c
            };
            const _0x474c91 = 酒欲饮无管(getEntityMotion(_0x170edb), getPos(_0x170edb), 0x14);
            let _0x43ccec = 弦弦掩抑声(_0x474c91, _0x1a5cd9, 'pitch_pos');
            let _0x4c7b61 = 弦弦掩抑声(_0x474c91, _0x1a5cd9, 'yaw_pos');
            于穆曹二善(_0x43ccec, _0x4c7b61);
        }
        if (GetCommand && _0x26784d['namespace']['includes']('command_block')) {
            let _0x903e98 = getBlockEntityNBT(_0x3e4cd4, _0x5b6a2e, _0x48898c);
            let _0x123a34 = 琵琶行浔阳(_0x903e98, 'Command:"', '",Cu');
            let _0x5c34be = 琵琶行浔阳(_0x903e98, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x332836 = 琵琶行浔阳(_0x903e98, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0x3e4cd4 + ' ' + _0x5b6a2e + ' ' + _0x48898c + '] 指令:' + _0x123a34 + ' 是否自动:' + _0x5c34be + ' 执行延迟:' + _0x332836, '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (first_pos === null) first_pos = [_0x3e4cd4, _0x5b6a2e, _0x48898c];
            else {
                setBlockEntityData(_0x3e4cd4, _0x5b6a2e, _0x48898c, getBlockEntityData(first_pos[0x0], first_pos[0x1], first_pos[0x2]));
                first_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x5b1d13 = [
                [_0x3e4cd4, _0x5b6a2e - 0x1, _0x48898c],
                [_0x3e4cd4, _0x5b6a2e + 0x1, _0x48898c],
                [_0x3e4cd4, _0x5b6a2e, _0x48898c - 0x1],
                [_0x3e4cd4, _0x5b6a2e, _0x48898c + 0x1],
                [_0x3e4cd4 - 0x1, _0x5b6a2e, _0x48898c],
                [_0x3e4cd4 + 0x1, _0x5b6a2e, _0x48898c]
            ];
            setBlock(_0x5b1d13[_0x15f282][0x0], _0x5b1d13[_0x15f282][0x1], _0x5b1d13[_0x15f282][0x2], _0x32444f['namespace'], _0x32444f['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x3e4cd4, _0x5b6a2e, _0x48898c, _0x32444f['namespace'], _0x32444f['aux']);
        if ((InvCleaner || SmartInv) && _0x26784d['namespace'] === 'minecraft:chest') isOpenChest = true;
        if (ClickDestroy && !AutoDestroy) 初为霓裳后({
            'x': _0x3e4cd4,
            'y': _0x5b6a2e,
            'z': _0x48898c
        });
        if (AutoBed && _0x26784d['namespace'] === 'minecraft:bed' && !isBedbuild) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x302a66 = [
                [_0x3e4cd4 + 0x1, _0x5b6a2e, _0x48898c],
                [_0x3e4cd4 - 0x1, _0x5b6a2e, _0x48898c],
                [_0x3e4cd4, _0x5b6a2e, _0x48898c + 0x1],
                [_0x3e4cd4, _0x5b6a2e, _0x48898c - 0x1],
                [_0x3e4cd4, _0x5b6a2e + 0x1, _0x48898c]
            ];
            isBedbuild = true;
            for (let _0x11598e of _0x302a66) {
                const _0x40da03 = getBlock(_0x11598e[0x0], _0x11598e[0x1], _0x11598e[0x2]);
                if (_0x40da03['namespace'] === 'minecraft:air') 事今漂沦憔(_0x11598e[0x0], _0x11598e[0x1], _0x11598e[0x2]);
            }
            isBedbuild = false;
        }
        if (Breaker && (_0x32444f['namespace']['includes']('sword') || _0x32444f['namespace']['includes']('pickaxe'))) {
            if (bk_origin) {
                callModule(0xf, '{"value":true}');
                setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
                return true;
            }
            const _0x108205 = Math['round'](bk_range);
            _0x2441e7: for (let _0x3e24a9 = -_0x108205; _0x3e24a9 <= _0x108205; _0x3e24a9++) {
                for (let _0x4ddafb = -_0x108205; _0x4ddafb < _0x108205; _0x4ddafb++) {
                    for (let _0x8908a = -_0x108205; _0x8908a <= _0x108205; _0x8908a++) {
                        let _0x303d17 = _0x3e4cd4 + _0x3e24a9;
                        let _0x3a4a11 = _0x5b6a2e + _0x4ddafb;
                        let _0x4fbf3 = _0x48898c + _0x8908a;
                        let _0x55111d = getBlock(_0x303d17, _0x3a4a11, _0x4fbf3);
                        if (bk_bed && _0x55111d['namespace'] === 'minecraft:bed' || bk_chest && _0x55111d['namespace'] === 'minecraft:chest') {
                            let _0x1bcfd4 = getBlock(_0x303d17, _0x3a4a11 + 0x1, _0x4fbf3);
                            if (_0x1bcfd4['namespace'] != 'minecraft:air' && bk_up) _0x3a4a11 += 0x1;
                            if (bk_tool && _0x1bcfd4['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0x170edb, 枫叶荻花秋(_0x170edb, '_pickaxe'));
                            if (bk_tool && _0x1bcfd4['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0x170edb, 枫叶荻花秋(_0x170edb, '_axe'));
                            breaker_pos = {
                                'ex': _0x303d17,
                                'ey': _0x3a4a11,
                                'ez': _0x4fbf3
                            };
                            breaker_timer = 0x0;
                            break _0x2441e7;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x3e4cd4,
                'y': _0x5b6a2e,
                'z': _0x48898c
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0x3e4cd4 + ', ' + _0x5b6a2e + ', ' + _0x48898c + ']', '§r');
            return true;
        }
        if (FastBuild && build_list['length'] === 0x0 && build_success) {
            const _0x47cf09 = getCameraRotation();
            for (let _0x134347 = 0x0; _0x134347 < fb_len + 0x1; _0x134347++) build_list['push'](忽闻水上琵(_0x134347, 面转轴拨弦(_0x170edb), {
                'pitch': 0x0,
                'yaw': _0x47cf09['yaw'] > 0x0 ? 0xb4 - _0x47cf09['yaw'] : -0xb4 - _0x47cf09['yaw']
            }));
            build_success = false;
            return true;
        }
        if (ca_check && _0x26784d['namespace'] === 'minecraft:chest') open_chest['click'] = true;
    }

    function onKeyboardDownEvent(_0x28b7a5) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x28b7a5, '§r');
        if (key_bind_list['length'] > 0x0 && typeof key_bind_list[_0x28b7a5] !== 'undefined') 委身为贾人(key_bind_list[_0x28b7a5], !globalThis[key_bind_list[_0x28b7a5]]);
        if (isBinding != null && _0x28b7a5 != 0x42) {
            key_bind_list[_0x28b7a5] = isBinding;
            NoveXare_Config['key_binds'] = key_bind_list;
            归客不发寻(0x0, 'Tip', '绑定 ' + isBinding + ' 与键值 ' + _0x28b7a5, '§r');
            isBinding = null;
        }
    }

    function onKeyboardUpEvent(_0x5f0260) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x5f0260, '§r');
    }

    function onSendServerPacketEvent(_0x156732, _0x3bbf27) {
        if (NoClip && nc_blink && (_0x156732 === 0x13 || _0x156732 === 0x90) && Object['keys'](record_blink_pos)['length'] > 0x0) {
            if (getDistance(record_blink_pos, self_pos) > nc_dist) record_blink_pos = self_pos;
            else return true;
        }
        if (FakeLag && modelist['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modelist['fl_mode'] === 0x1 && fakelag_status && _0x156732 === 0x13) return true;
        if (FreeCam && modelist['fc_mode'] === 0x1 && _0x156732 === 0x13) return true;
        if (FreeCam && modelist['fc_mode'] === 0x2 && _0x156732 === 0xa1) return true;
        if (FreeCam && modelist['fc_mode'] === 0x3 && _0x156732 === 0x90) return true;
        if (FreeCam && modelist['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x3b4af6 = PacketTranslate[PacketTranslate['map'](_0x2234b1 => _0x2234b1['id'])['indexOf'](_0x156732)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x3bbf27] === 'undefined') PacketTmp['send'][_0x3bbf27] = {
                    'id': _0x156732,
                    'Translate': _0x3b4af6,
                    'count': 0x1
                };
                PacketTmp['send'][_0x3bbf27]['count']++;
            }
            const _0x4e9712 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x12f06a = [];
            if (sp_id) _0x12f06a['push'](_0x156732);
            if (sp_name) _0x12f06a['push'](_0x3bbf27);
            if (sp_trans) _0x12f06a['push'](_0x3b4af6);
            let _0x3cfbc7 = sp_intercept && (intercept['includes'](_0x156732) || intercept['includes'](_0x3bbf27));
            if (!sp_ignore || !(ignore['includes'](_0x156732) || ignore['includes'](_0x3bbf27))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x12f06a['join'](' - ') + (_0x3cfbc7 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x3cfbc7;
        }
    }

    function onReceiveServerPacketEvent(_0x3ddbc1, _0x32f6d7) {
        if (ShadowBoomer && _0x3ddbc1 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x3ddbc1 == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x3ddbc1 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x3ddbc1 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x3ddbc1 === 0x9) return true;
        if (ModifyTime && _0x3ddbc1 === 0xa) return true;
        if (ca_check && _0x3ddbc1 === 0x2f) open_chest['packet'] = true;
        if (FakeLag && modelist['fl_mode'] === 0x2 && fakelag_status && _0x3ddbc1 === 0x13) return true;
        if (FakeLag && modelist['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modelist['fc_mode'] === 0x4 && _0x3ddbc1 === 0x12) return true;
        if (NoCamShake && _0x3ddbc1 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x2404e1 = PacketTranslate[PacketTranslate['map'](_0x4dc88e => _0x4dc88e['id'])['indexOf'](_0x3ddbc1)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x32f6d7] === 'undefined') PacketTmp['receive'][_0x32f6d7] = {
                    'id': _0x3ddbc1,
                    'Translate': _0x2404e1,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x32f6d7]['count']++;
            }
            const _0x25fd3a = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x2e6b9a = [];
            if (srp_id) _0x2e6b9a['push'](_0x3ddbc1);
            if (srp_name) _0x2e6b9a['push'](_0x32f6d7);
            if (srp_trans) _0x2e6b9a['push'](_0x2404e1);
            let _0x16cdcd = srp_intercept && (intercept['includes'](_0x3ddbc1) || intercept['includes'](_0x32f6d7));
            if (!srp_ignore || !(ignore['includes'](_0x3ddbc1) || ignore['includes'](_0x32f6d7))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x2e6b9a['join'](' - ') + (_0x16cdcd ? '\n§e已拦截数据包' : ''), '§r');
            return _0x16cdcd;
        }
        return (modelist['cs_mode'] === 0x2 || modelist['cs_mode'] === 0x3) && _0x3ddbc1 === 0x9;
    }

    function onTouchMotionDownEvent(_0x2e58c5, _0x75fba2, _0x81680c) {
        if (SafeAttack) {
            const _0x303aa9 = 0x0 + (0x1 - sa_size) / 0x2 * screen['deviceWidth'];
            const _0x3527a6 = screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * screen['deviceWidth'];
            const _0x24dc71 = 0x0 + (0x1 - sa_size) / 0x2 * screen['deviceHeight'];
            const _0x4150ba = screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * screen['deviceHeight'];
            if (target_list['length'] > 0x0 && 声思似诉平(self_id, target_list[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, target_list[0x0]) < sa_range && _0x75fba2 > _0x303aa9 && _0x75fba2 < _0x3527a6 && _0x81680c > _0x24dc71 && _0x81680c < _0x4150ba) 江头夜送客(target_list[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x44f4e7, _0x50add5) {
        const _0x585a60 = 音铮铮然有(_0x50add5);
        if (InvCleaner && modelist['ic_mode'] >= 0x2 && typeof clear_config[_0x585a60['namespace']] !== 'undefined' && modelist['ic_mode'] == 0x2 || typeof clear_config[_0x585a60['namespace']] == 'undefined' && modelist['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x44f4e7 > cs_sort) && cs_current < cs_maxCount) {
            let _0xa2a628 = cs_black['length'] === 0x0 || cs_black['some'](_0x461d5b => _0x585a60['namespace']['includes'](_0x461d5b));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x14cfd8 => _0x585a60['namespace']['includes'](_0x14cfd8))) _0xa2a628 = false;
            if (_0x44f4e7 < cs_min && _0x44f4e7 > cs_max) _0xa2a628 = false;
            if (_0x585a60['attackDamage'] !== 0x0 && _0x585a60['attackDamage'] < cs_min_damage) _0xa2a628 = false;
            if (_0x585a60['damage'] !== 0x0 && _0x585a60['damage'] < cs_min_lasting) _0xa2a628 = false;
            if (!cs_weapon && _0x585a60['attackDamage'] > 0x0 && _0x585a60['damage'] > 0x0) _0xa2a628 = false;
            if (!cs_armor && _0x585a60['attackDamage'] === 0x0 && _0x585a60['damage'] > 0x0) _0xa2a628 = false;
            if (!cs_other && _0x585a60['attackDamage'] === 0x0 && _0x585a60['damage'] === 0x0) _0xa2a628 = false;
            if (cs_sort) cs_sort = _0x44f4e7;
            if (_0xa2a628) cs_timer = 0x0;
            if (_0xa2a628) cs_current++;
            if (cs_close) setTimeout(() => closeInventory(), cs_delay * 0x32);
            return _0xa2a628;
        }
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x44f4e7 + '\n§e物品NBT数据: §r' + _0x50add5, '§r');
    }

    function onPlayerAuthInputEvent(_0xe86a0c) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0xe86a0c.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0xe86a0c.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0xe86a0c['pos']['x']['toFixed'](0x2) + ', ' + _0xe86a0c['pos']['y']['toFixed'](0x2) + ',' + _0xe86a0c['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0xe86a0c['delta']['x']['toFixed'](0x2) + ', ' + _0xe86a0c['delta']['y']['toFixed'](0x2) + ', ' + _0xe86a0c['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0xe86a0c['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0xe86a0c['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0xe86a0c['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0xe86a0c['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0xe86a0c['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x23dd20) {
        if (DumpRequestSauth) {
            File['write'](NoveXare_path + '/SauthRequest.json', _0x23dd20);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x2a3d43 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x5489df = _0x23dd20['replace'](琵琶行浔阳(_0x23dd20, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x2a3d43)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x5489df['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x808f5d) {
        if (DumpResponseSauth) {
            File['write'](NoveXare_path + '/SauthResponse.json', _0x808f5d);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x3fea9c) {
        if (DumpCookieSauth) {
            File['write'](NoveXare_path + '/SauthCookie.json', _0x3fea9c);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x183b22 = JSON['parse'](Sauths);
            if (typeof _0x183b22['sauth_json'] !== 'undefined') _0x183b22 = _0x183b22['sauth_json'];
            return _0x183b22;
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
    clientMessage(e.toString());
}