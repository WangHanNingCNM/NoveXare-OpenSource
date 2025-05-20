/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 09  07：16：23
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b09§f071623§bC§dr§ca§ac§ek§7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const createShadow = (_0x3f98dd, _0x4836fb, _0x5aae0f) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x3f98dd,
            'y': _0x4836fb,
            'z': _0x5aae0f
        },
        'type': 0x11
    });
    const getPos = _0x2126cd => {
        let _0x32d749 = getEntityPos(_0x2126cd);
        if (_0x32d749) _0x32d749['y'] += getPos_offset;
        return _0x32d749 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentTP = (_0x13b8a7, _0x21e2ae, _0x568976) => sendPlayerAuthInput({
        'inputMode': 0x2,
        'playMode': 0x0,
        'pos': {
            'x': _0x13b8a7,
            'y': _0x21e2ae,
            'z': _0x568976
        }
    });
    const 左迁九江郡 = _0x4f168d => {
        const _0x234cb1 = new Uint8Array(_0x4f168d);
        let _0x44f6fe = '';
        for (let _0x33b63e = 0x0; _0x33b63e < _0x234cb1['length'];) {
            let _0x581328 = _0x234cb1[_0x33b63e++];
            if (_0x581328 <= 0x7f) _0x44f6fe += String['fromCharCode'](_0x581328);
            else if (_0x581328 >> 0x5 === 0x6) {
                let _0x4d9e63 = _0x234cb1[_0x33b63e++];
                _0x44f6fe += String['fromCharCode']((_0x581328 & 0x1f) << 0x6 | _0x4d9e63 & 0x3f);
            } else if (_0x581328 >> 0x4 === 0xe) {
                let _0x53574c = _0x234cb1[_0x33b63e++];
                let _0x3a78a5 = _0x234cb1[_0x33b63e++];
                _0x44f6fe += String['fromCharCode']((_0x581328 & 0xf) << 0xc | (_0x53574c & 0x3f) << 0x6 | _0x3a78a5 & 0x3f);
            } else if (_0x581328 >> 0x3 === 0x1e) {
                let _0x2599bf = _0x234cb1[_0x33b63e++];
                let _0x325f67 = _0x234cb1[_0x33b63e++];
                let _0xa5756 = _0x234cb1[_0x33b63e++];
                let _0x50bd05 = (_0x581328 & 0x7) << 0x12 | (_0x2599bf & 0x3f) << 0xc | (_0x325f67 & 0x3f) << 0x6 | _0xa5756 & 0x3f;
                _0x44f6fe += String['fromCodePoint'](_0x50bd05);
            }
        }
        return _0x44f6fe;
    };
    const createText = (_0x42d41f, _0x2c0229, _0x248971, _0x379b6d, _0xd92ac0) => addCustomArrayList(_0xd92ac0, ' ' ['repeat'](_0x42d41f), '\n' ['repeat'](_0x2c0229) + ' ' + _0x248971, _0x379b6d);
    const 司马明年秋 = (_0x53ac86, _0xe36dcb, _0x5ce29f, _0x1aef9d) => {
        let _0x132f76 = _0x53ac86['indexOf'](_0xe36dcb) + _0xe36dcb['length'];
        let _0x53f592 = _0x53ac86['indexOf'](_0x5ce29f, _0x132f76);
        if (typeof _0x1aef9d !== 'undefined' && _0x53ac86['indexOf'](_0x1aef9d, _0x132f76) < _0x53f592 && _0x53ac86['indexOf'](_0x1aef9d, _0x132f76) != -0x1) _0x53f592 = _0x53ac86['indexOf'](_0x1aef9d, _0x132f76);
        if (_0x132f76 === -0x1 || _0x53f592 === -0x1) return null;
        return _0x53ac86['substring'](_0x132f76, _0x53f592);
    };
    const 送客湓浦口 = _0x9586ee => {
        let _0x45f502 = _0x9586ee['split']('');
        let _0x563a54 = '';
        let _0x40298d = '4c6e2a3b195d' ['split']('');
        for (let _0x4ecbff in _0x45f502) _0x563a54 += '§' + _0x40298d[_0x4ecbff % _0x40298d['length']] + _0x45f502[_0x4ecbff];
        return _0x563a54;
    };
    const 闻舟中夜弹 = _0x2f86a7 => {
        if (_0x2f86a7['startsWith']('0x')) _0x2f86a7 = _0x2f86a7['slice'](0x2);
        const _0x22c64c = [];
        for (let _0xd28b9 = 0x0; _0xd28b9 < _0x2f86a7['length']; _0xd28b9 += 0x2) {
            const _0x394370 = parseInt(_0x2f86a7['slice'](_0xd28b9, _0xd28b9 + 0x2), 0x10);
            _0x22c64c['push'](_0x394370);
        }
        return new Uint8Array(_0x22c64c);
    };
    const 琵琶者听其 = (_0x177b46, _0x512251, _0x7fb479 = 0x0) => {
        if (_0x7fb479 == 0x1) sendRpc(_0x177b46, 闻舟中夜弹(_0x512251));
        if (_0x7fb479 == 0x2) sendRpc(_0x177b46, _0x512251);
        if (_0x7fb479 == 0x3) {
            const _0x19c24d = new Uint8Array(str['length']);
            for (let _0x17394d = 0x0; _0x17394d < str['length']; _0x17394d++) _0x19c24d[_0x17394d] = str['charCodeAt'](_0x17394d);
            sendRpc(_0x177b46, _0x19c24d);
        }
    };
    const 音铮铮然有 = _0x34951e => {
        if (item_nbt_library[_0x34951e] !== undefined) return item_nbt_library[_0x34951e];
        const _0x5a9f7f = 司马明年秋(_0x34951e, ',Name:"', '",WasPickedUp');
        if (_0x5a9f7f === '' || typeof _0x5a9f7f !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x33ffb2 = Number(司马明年秋(_0x34951e, ',aux:', ','));
        const _0x2a62b7 = Number(司马明年秋(_0x34951e, 'Count:', 'b,D'));
        const _0x2999c8 = _0x34951e['includes'](',name:"') ? 司马明年秋(_0x34951e, ',name:"', '",') : _0x5a9f7f['replace']('minecraft:', '');
        const _0x42c86f = _0x34951e['includes'](',netId:') ? Number(司马明年秋(_0x34951e, ',netId:', '}')) : 0x0;
        const _0x4cf3c8 = _0x34951e['includes']('maxDamage') ? Number(司马明年秋(_0x34951e, ',maxDamage:', ',')) : 0x0;
        const _0x191c2f = _0x34951e['includes']('attackDamage') ? Number(司马明年秋(_0x34951e, 'attackDamage:', ',')) : 0x1;
        const _0x148633 = _0x34951e['includes']('customColor') ? 司马明年秋(_0x34951e, 'customColor:', '}', ',') : '';
        const _0x56032e = _0x34951e['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x34951e, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x2f5ed0 = _0x34951e['startsWith']('{Block:');
        const _0x624656 = {
            'name': _0x2999c8,
            'namespace': _0x5a9f7f,
            'aux': _0x33ffb2,
            'damage': _0x4cf3c8,
            'attackDamage': _0x191c2f,
            'count': _0x2a62b7,
            'color': _0x148633,
            'isBlock': _0x2f5ed0,
            'id': _0x42c86f,
            'enchants': JSON['parse'](_0x56032e)
        };
        item_nbt_library[_0x34951e] = _0x624656;
        return _0x624656;
    };
    const 京都声问其 = _0x47e0df => {
        const _0x3417b2 = getEntitySize(_0x47e0df);
        const _0x1c1c85 = getEntityMotion(_0x47e0df);
        const _0x40238a = getPos(_0x47e0df);
        const _0x519101 = getEntityName(_0x47e0df);
        const _0x205812 = getEntityNamespace(_0x47e0df);
        const _0x126177 = 声暗问弹者(self_id, _0x47e0df);
        const _0x24af8e = getCarried(_0x47e0df);
        const _0xbcb73e = 瑟瑟主人下(_0x47e0df);
        const _0x3365c8 = getEntityAttribute(_0x47e0df, 'minecraft:health');
        const _0x64efae = getEntityAttribute(_0x47e0df, 'minecraft:movement');
        const _0x2288a6 = getEntityTypeId(_0x47e0df);
        const _0x339e67 = getEntityTarget(_0x47e0df);
        const _0x1772c7 = getPlayerInventorySize(_0x47e0df);
        const _0x3432c0 = getPlayerHotBarSize(_0x47e0df);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x47e0df);
        const _0x2d0039 = _0x5e9302 => _0x5e9302['toFixed'](0x2);
        const _0x496e91 = ['唯一ID:' + _0x47e0df + ' 昵称:' + _0x519101 + '§r 实体命名空间:' + _0x205812 + ' 水平碰撞箱:' + _0x2d0039(_0x3417b2['x']) + ' 垂直碰撞箱:' + _0x2d0039(_0x3417b2['y']) + ' Mot速度:' + _0xbcb73e, 'ability速度:[max:' + _0x64efae['max'] + ', min:' + _0x64efae['min'] + ', current:' + _0x64efae['current'] + '] 血量:[max:' + _0x3365c8['max'] + ', min:' + _0x3365c8['min'] + ', current:' + _0x3365c8['current'] + ']', '手持:[id:' + _0x24af8e['id'] + ', namespace:' + _0x24af8e['namespace'] + ', name:' + _0x24af8e['name'] + '§r, aux:' + _0x24af8e['aux'] + '] 距离:' + _0x126177 + ' 实体类型:' + _0x2288a6, '仰俯角:' + _0x2d0039(pitch) + '° 偏航角:' + _0x2d0039(yaw) + '° 仇恨目标:' + getEntityName(_0x339e67) + '^' + _0x339e67, '移动值:[' + _0x2d0039(_0x1c1c85['x']) + ', ' + _0x2d0039(_0x1c1c85['y']) + ', ' + _0x2d0039(_0x1c1c85['z']) + '] 坐标值:[' + _0x2d0039(_0x40238a['x']) + ', ' + _0x2d0039(_0x40238a['y']) + ', ' + _0x2d0039(_0x40238a['z']) + ']', '背包容量:' + _0x1772c7 + ' 物品栏容量:' + _0x3432c0];
        return _0x496e91['join']('\n');
    };
    const getCarried = _0x195cfc => 音铮铮然有(getEntityCarriedItem(_0x195cfc));
    const getOffhand = _0x369af9 => 音铮铮然有(getEntityOffhandItem(_0x369af9));
    const getInventory = (_0x493da8, _0x2cc7f3) => 音铮铮然有(getPlayerInventoryItem(_0x493da8, _0x2cc7f3));
    const 人本长安倡 = (_0x233428, _0x44f56d, _0x17b185, _0x40d1b5 = false, _0x3933a7 = false) => {
        let _0x11acc5 = {
            'x': _0x233428,
            'y': _0x44f56d,
            'z': _0x17b185
        };
        const _0x13bb4d = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x445ce1 = _0x3406ff => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x3406ff['map'](_0x4ecb5d => ({
                'type': _0x4ecb5d,
                'pos': _0x11acc5,
                'value': 0x1
            }))
        });
        const _0x576c78 = _0xee153a => sendPlayerAction({
            'id': self_id,
            'pos': _0x11acc5,
            'type': _0xee153a
        });
        if (_0x40d1b5) _0x445ce1(_0x13bb4d);
        if (_0x3933a7) _0x13bb4d['forEach'](_0x587e9d => _0x576c78(_0x587e9d));
    };
    const 女尝学琵琶 = (_0x1c5f49, _0x327722, _0x319851 = true, _0x346126 = false) => {
        if (_0x1c5f49 === _0x327722) return false;
        let _0x3579fc = getInventory(self_id, _0x1c5f49);
        let _0x25a75d = getInventory(self_id, _0x327722);
        if (_0x319851 && _0x327722 < 0x9 && _0x25a75d['namespace'] != 'minecraft:air') {
            for (let _0x3c62e3 = 0x23; _0x3c62e3 > 0x8; _0x3c62e3--) {
                const _0x3c592f = getInventory(self_id, _0x3c62e3);
                if (_0x3c592f['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x327722, _0x3c62e3);
                    break;
                }
            }
        }
        if (_0x346126) {
            for (var _0x2bfad4 = 0x23; _0x2bfad4 > 0x0; _0x2bfad4--) {
                const _0x52eab5 = getInventory(self_id, _0x2bfad4);
                if (_0x52eab5['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x327722, _0x2bfad4);
                    break;
                }
            }
        }
        if (_0x3579fc['namespace'] != 'minecraft:air' && _0x25a75d['namespace'] === 'minecraft:air') moveInventoryItem(_0x1c5f49, _0x327722);
        if (_0x346126 && _0x2bfad4) moveInventoryItem(_0x2bfad4, _0x327722);
    };
    const 于穆曹二善 = (_0x3e4c08, _0x2e1796) => {
        let _0x2eb732 = _0x2e1796 - 0xb4;
        if (_0x3e4c08 > 0x5a) _0x3e4c08 -= 0x5a;
        if (_0x3e4c08 < -0x5a) _0x3e4c08 += 0x5a;
        if (_0x2eb732 > 0xb4) _0x2eb732 = _0x2eb732 - 0x168;
        if (_0x2eb732 < -0xb4) _0x2eb732 = 0x168 + _0x2eb732;
        if (getPlayerViewPerspective() === 0x0 || _0x2eb732 > 0xb4 || _0x2eb732 < -0xb4 || _0x3e4c08 > 0x5a || _0x3e4c08 < -0x5a) return false;
        setEntityBodyRot(self_id, _0x2eb732);
        setEntityRot(self_id, _0x3e4c08, _0x2eb732);
    };
    const 才年长色衰 = _0x393545 => {
        const _0x41c8f5 = getEntityAttribute(_0x393545, 'minecraft:health');
        const _0x13fe59 = getPos(_0x393545);
        if (typeof _0x13fe59 != 'object' || !_0x13fe59 || !_0x13fe59['x'] || !_0x13fe59['y'] || !_0x13fe59['z']) return false;
        if (!findEntity(_0x393545) && (_0x41c8f5['max'] === undefined || _0x41c8f5['min'] === undefined || _0x41c8f5['current'] === undefined)) return false;
        if (_0x41c8f5['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x31b800, _0x18fcbe) => {
        if (typeof globalThis[_0x31b800] === 'undefined' || globalThis[_0x31b800] === _0x18fcbe) return;
        globalThis[_0x31b800] = _0x18fcbe;
        NoveXare_Config[_0x31b800] = _0x18fcbe;
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(NoveXare_path + '/sounds/switch_' + (_0x18fcbe ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x31b800['includes']('_'))) {
            if (modelist['tip_mode'] === 0x0) {
                if (_0x18fcbe) 归客不发寻(0x0, _0x31b800, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x31b800, '§oDisable ◇', '§c');
            }
            if (modelist['tip_mode'] === 0x1) {
                addCustomArrayList(_0x31b800, _0x31b800 + (_0x18fcbe ? ' - Enable' : ' - Disable'), _0x31b800 + (_0x18fcbe ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x31b800, _0x31b800 + (_0x18fcbe ? ' - Enable' : ' - Disable'), _0x31b800 + (_0x18fcbe ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof ArrayListCfg[_0x31b800] !== 'undefined') addCustomArrayList(_0x31b800, ArrayListCfg[_0x31b800]['CN'], ArrayListCfg[_0x31b800]['EN'], _0x18fcbe);
        else if (modelist['tip_mode'] != 0x1 && ArrayList && !_0x31b800['includes']('_')) addCustomArrayList(_0x31b800, _0x31b800, _0x31b800, _0x18fcbe);
        if (typeof bind_func[_0x31b800] !== 'undefined') bind_func[_0x31b800]['forEach'](_0x19ffff => 委身为贾人(_0x19ffff, _0x18fcbe));
        if (typeof RunAway_binds[_0x31b800] !== 'undefined' && !RunAway_binds[_0x31b800]['isNX']) callModule(RunAwayID[RunAway_binds[_0x31b800]['module']], JSON['stringify']({
            'value': _0x18fcbe
        }));
    };
    const 妇遂命酒使 = (_0x261870, _0x1f7c5b, _0x62ce6c, _0x1c669e, _0x3a25df, _0x1566b2 = false, _0x909552 = {}) => {
        for (let _0x115728 = 0x0; _0x115728 < _0x3a25df; _0x115728++) addParticle(Number(_0x261870), _0x1f7c5b, _0x62ce6c, _0x1c669e, _0x1566b2 ? _0x909552['x'] : _0x1f7c5b, _0x1566b2 ? _0x909552['y'] : _0x62ce6c, _0x1566b2 ? _0x909552['z'] : _0x1c669e, 0x1, _0x1566b2);
    };
    const 快弹数曲曲 = () => {
        const _0x1269b3 = getEntityCarriedItem(self_id);
        const _0x1606e8 = getPos(self_id);
        if (!_0x1269b3['includes']('count:0')) buildBlock(self_id, _0x1606e8['x'], _0x1606e8['y'], _0x1606e8['z'], 0x6);
    };
    const 罢悯然自叙 = _0x55ac5f => {
        const _0x77f059 = getInventory(self_id, _0x55ac5f);
        const _0x1768ad = 迁谪意因为(self_id, _0x55ac5f);
        const _0x4efaa9 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x77f059['namespace'] != 'minecraft:air' && _0x77f059['count'] > 0x0 && _0x4efaa9['includes'](_0x1768ad) && selectPlayerInventorySlot(self_id, _0x55ac5f)) {
            const _0x510777 = getPlayerSelectItemSlot(self_id);
            if (_0x510777 === _0x55ac5f) 快弹数曲曲();
        }
    };
    const 少小时欢乐 = (_0x4b9835, _0x4fbd70, _0x1cc1b6, _0x559375) => {
        let _0x3e1fc2 = _0x4fbd70 > 0x0;
        _0x4fbd70 = Math['abs'](_0x4fbd70);
        let _0x32fb42 = _0x1cc1b6 * Math['cos'](_0x4fbd70 * Math['PI'] / 0xb4);
        let _0xae836a = _0x1cc1b6 * Math['sin'](_0x4fbd70 * Math['PI'] / 0xb4);
        let _0x1ba68e = _0xae836a / _0x559375;
        let _0x4bdd22 = _0x559375 * (_0x1ba68e * _0x1ba68e) * 0.5;
        let _0x15068e = _0x32fb42 * _0x1ba68e;
        let _0x3ea341 = -_0x4bdd22 / (_0x15068e * _0x15068e);
        return {
            'data': _0x3ea341 * Math['pow'](_0x4b9835 - (_0x3e1fc2 ? -_0x15068e : _0x15068e), 0x2) + _0x4bdd22,
            'bool': _0x3e1fc2
        };
    };
    const getUserID = _0x384ec2 => typeof _0x384ec2 === 'undefined' || _0x384ec2 === null ? getLocalPlayerUniqueID() : _0x384ec2;
    const 事今漂沦憔 = (_0x54b802, _0x30af81, _0x59171d) => {
        const _0x56b5ec = [
            [_0x54b802, _0x30af81 + 0x1, _0x59171d],
            [_0x54b802, _0x30af81 - 0x1, _0x59171d],
            [_0x54b802, _0x30af81, _0x59171d + 0x1],
            [_0x54b802, _0x30af81, _0x59171d - 0x1],
            [_0x54b802 + 0x1, _0x30af81, _0x59171d],
            [_0x54b802 - 0x1, _0x30af81, _0x59171d]
        ];
        _0x56b5ec['some']((_0x279a15, _0x56e069) => {
            const _0x1e84b8 = getBlock(_0x279a15[0x0], _0x279a15[0x1], _0x279a15[0x2]);
            if (_0x1e84b8['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x279a15[0x0], _0x279a15[0x1], _0x279a15[0x2], _0x56e069);
        });
    };
    const 湖间予出官 = (_0x113dcc, _0x2a2050) => {
        const _0x274f28 = getPos(self_id);
        sendSound(_0x113dcc, _0x274f28['x'], _0x274f28['y'], _0x274f28['z'], _0x2a2050);
    };
    const 二年恬然自 = (_0x156e31, _0x4dc520, _0x22bb58) => {
        const _0x4ce4d5 = getPos(self_id);
        motion_list['push']([_0x156e31 - _0x4ce4d5['x'], _0x4dc520 - _0x4ce4d5['y'], _0x22bb58 - _0x4ce4d5['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x5115a4, _0x1bec01) => {
        let _0x283ba1 = _0x5115a4 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x5115a4);
        if (typeof _0x1bec01 !== 'undefined') _0x283ba1['namespace'] = _0x1bec01;
        return Array['from']({
            'length': 0x24
        }, (_0x39bc8d, _0x3b4608) => getInventory(self_id, _0x3b4608))['filter'](_0x5cf699 => _0x5cf699['namespace'] === _0x283ba1['namespace'] && (typeof _0x1bec01 !== 'undefined' || _0x5cf699['aux'] === _0x283ba1['aux']))['reduce']((_0x52da1c, _0x537732) => _0x52da1c + _0x537732['count'], 0x0);
    };
    const 是夕始觉有 = (_0x399af7, _0x306017, _0x14d7d9 = 'hotbar', _0x25e198 = 0x0) => {
        const _0x122fe7 = _0x14d7d9 == 'hotbar' ? 0x9 : 0x24;
        let _0x1d64d9 = Array['from']({
            'length': _0x122fe7
        }, (_0x529e22, _0x1f8437) => getInventory(_0x399af7, _0x1f8437));
        let _0x395153 = _0x1d64d9['some'](_0x55ecb4 => _0x55ecb4['namespace']['includes'](_0x306017));
        let _0x32a726 = _0x1d64d9['reduce']((_0x387a49, _0x113c38) => _0x387a49 + _0x113c38['count'], 0x0);
        return _0x395153 && _0x32a726 > _0x25e198;
    };
    const 迁谪意因为 = (_0x2a5cb8, _0x553474, _0x1d2a95) => {
        let _0x38efcf = _0x553474 === -0x1 ? getCarried(_0x2a5cb8) : getInventory(_0x2a5cb8, _0x553474);
        if (!_0x38efcf['namespace']['includes']('_') && typeof _0x1d2a95 === 'undefined') return 'other';
        let _0x316838 = typeof _0x1d2a95 === 'undefined' ? _0x38efcf['namespace']['replace']('minecraft:', '') : _0x1d2a95['replace']('minecraft:', '');
        const _0x1291c8 = _0x316838['split']('_');
        return _0x1291c8[0x1];
    };
    const getEntityMaxDamage = _0xaa6b17 => Array['from']({
        'length': 0x24
    }, (_0x9a5536, _0x46d17) => 十六言命曰(_0xaa6b17, _0x46d17))['reduce']((_0x4f9795, _0x1807b5) => Math['max'](_0x4f9795, _0x1807b5), 0x0);
    const 长句歌以赠 = (_0x462596, _0x5140cd, _0x1af316 = false) => {
        let _0x4bafc8 = _0x1af316 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x1355a1 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x5abc3a = 0x0; _0x5abc3a < 0x24; _0x5abc3a++) {
            const _0x1c2d9e = 迁谪意因为(_0x462596, _0x5abc3a);
            const _0x4104da = _0x1355a1['indexOf'](_0x1c2d9e);
            if (_0x4104da === -0x1) continue;
            const _0x12b50c = 之凡六百一(_0x462596, _0x5abc3a);
            if (!_0x1af316 && _0x1c2d9e === _0x5140cd && _0x4bafc8 < _0x12b50c) _0x4bafc8 = _0x12b50c;
            if (_0x1af316 && _0x4bafc8[_0x4104da] < _0x12b50c) _0x4bafc8[_0x4104da] = _0x12b50c;
        }
        return _0x4bafc8;
    };
    const 之凡六百一 = (_0x58d885, _0xa6ea38, _0x482e00 = true, _0x59ec5a = true) => {
        let _0x6380bb = _0xa6ea38 === -0x1 ? getCarried(_0x58d885) : getInventory(_0x58d885, _0xa6ea38);
        if (_0xa6ea38 < -0x1) _0x6380bb = 音铮铮然有(getPlayerArmorItem(_0x58d885, Math['abs'](_0xa6ea38) - 0x2));
        if (_0x6380bb['count'] === 0x0 || _0x6380bb['damage'] === 0x0) return 0x0;
        if (!_0x59ec5a) return _0x6380bb['damage'];
        let _0x3c1153 = 0x0;
        let _0x39f356 = _0x6380bb['enchants']['findIndex'](_0x1ee946 => _0x1ee946['id'] === 0x0);
        if (_0x39f356 > -0x1) _0x3c1153 = _0x6380bb['enchants'][_0x39f356]['lvl'];
        if (!_0x482e00) return 0x1 + _0x3c1153 / 0xa;
        return _0x6380bb['damage'] * (0x1 + _0x3c1153 / 0xa);
    };
    const 十六言命曰 = (_0x3254e3, _0x5ea3b2, _0x2ef532 = true, _0x33c72f = true) => {
        let _0x452817 = _0x5ea3b2 === -0x1 ? getCarried(_0x3254e3) : getInventory(_0x3254e3, _0x5ea3b2);
        if (_0x452817['count'] === 0x0 || _0x452817['attackDamage'] === 0x1) return 0x1;
        if (!_0x33c72f) return _0x452817['attackDamage'];
        let _0x5eec44 = 0x0;
        let _0x2c3f10 = _0x452817['enchants']['findIndex'](_0x493afd => _0x493afd['id'] === 0x9);
        if (_0x2c3f10 > -0x1) _0x5eec44 = _0x452817['enchants'][_0x2c3f10]['lvl'] * 1.25;
        if (!_0x2ef532) return _0x5eec44;
        return _0x452817['attackDamage'] + _0x5eec44;
    };
    const b2s = _0x468349 => _0x468349 ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x4f61ca, _0x314b01, _0xe5331b) => {
        let _0x317103 = _0x4f61ca['split'](_0x314b01)['length'] - 0x1;
        let _0x35caf8 = 0x0;
        let _0xd63f4c = [];
        for (let _0x1e0018 = 0x0; _0x1e0018 < _0x317103; _0x1e0018++) {
            let _0x2c5c1f = _0x4f61ca['indexOf'](_0x314b01, _0x35caf8) + _0x314b01['length'];
            let _0x38ee4d = _0x4f61ca['indexOf'](_0xe5331b, _0x2c5c1f);
            if (_0x38ee4d === -0x1 || _0x2c5c1f === -0x1) break;
            _0x35caf8 = _0x38ee4d;
            _0xd63f4c['push'](_0x4f61ca['substring'](_0x2c5c1f, _0x38ee4d));
        }
        return _0x317103 > 0x1 ? _0xd63f4c : _0xd63f4c[0x0];
    };
    const 江头夜送客 = (_0x6974d9, _0x2618ae) => {
        if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x6974d9, _0x2618ae);
    };
    const 枫叶荻花秋 = (_0x8746a0, _0x5b9f9a, _0x40bf2c, _0x50b1f4) => {
        if (typeof _0x40bf2c === 'undefined') _0x40bf2c = -0x1;
        if (typeof _0x50b1f4 === 'undefined') _0x50b1f4 = -0x1;
        let _0x2525cf = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x102272 = getInventory(_0x8746a0, index);
            if (!_0x102272['namespace'] || !_0x102272['name']) continue;
            if (_0x102272['namespace']['includes'](_0x5b9f9a) && (_0x102272['aux'] === _0x40bf2c || _0x40bf2c === -0x1) && (_0x102272['name']['includes'](_0x50b1f4) || _0x50b1f4 === -0x1)) {
                _0x2525cf = index;
                break;
            }
        }
        return _0x2525cf;
    };
    const 瑟瑟主人下 = _0x466d66 => {
        const _0x5e5b23 = getEntityMotion(_0x466d66);
        const _0x10c220 = Math['sqrt'](_0x5e5b23['x'] * _0x5e5b23['x'] + _0x5e5b23['y'] * _0x5e5b23['y'] + _0x5e5b23['z'] * _0x5e5b23['z']);
        return _0x10c220 * 0x14;
    };
    const 马客在船举 = (_0x454ea5, _0x3dfabb) => {
        const _0x2bfd20 = _0x3dfabb - _0x454ea5 + 0x1;
        return Math['floor'](Math['random']() * _0x2bfd20) + _0x454ea5;
    };
    const 酒欲饮无管 = (_0x29468a, _0x380e15, _0x4e1ab3) => {
        return {
            'x': _0x380e15['x'] + _0x29468a['x'] * _0x4e1ab3,
            'y': _0x380e15['y'] + _0x29468a['x'] * _0x4e1ab3,
            'z': _0x380e15['z'] + _0x29468a['z'] * _0x4e1ab3
        };
    };
    const 弦醉不成欢 = _0x48afe0 => {
        if (_0x48afe0 < 0x3c) return _0x48afe0 + 's';
        if (_0x48afe0 >= 0x3c) return Math['floor'](_0x48afe0 / 0x3c) + 'min ' + _0x48afe0 % 0x3c + 's';
    };
    const 惨将别别时 = (_0x30bbd5, _0x110379, _0x3b18fb, _0x1223a3 = 0x0, _0x1ed884 = 0x0) => {
        if (!_0x3b18fb) return true;
        _0x30bbd5['y'] += _0x1223a3;
        _0x110379['y'] += _0x1ed884;
        const _0xe76b5a = 弦弦掩抑声(_0x30bbd5, _0x110379, 'yaw_pos');
        const _0x3b89e5 = -弦弦掩抑声(_0x30bbd5, _0x110379, 'pitch_pos');
        const _0x49f2f7 = getDistance(_0x30bbd5, _0x110379);
        let _0x7a63c9 = true;
        for (let _0x203624 = 0x0; _0x203624 < _0x49f2f7; _0x203624 += 0.5) {
            const _0x2abcf7 = 忽闻水上琵(_0x203624, _0x110379, {
                'yaw': _0xe76b5a,
                'pitch': _0x3b89e5
            });
            const _0x1e445a = getBlock(_0x2abcf7['x'], _0x2abcf7['y'], _0x2abcf7['z']);
            if (_0x1e445a['namespace'] != 'minecraft:air') {
                _0x7a63c9 = false;
                break;
            }
        }
        return _0x7a63c9;
    };
    const 茫茫江浸月 = (_0x26a908, _0x216b2b) => {
        let _0x561b41 = getWorldPlayerList()['sort']((_0x379665, _0x448cbf) => _0x379665['name']['localeCompare'](_0x448cbf['name']));
        let _0x3b28fb = _0x561b41['length'] > 0x0 ? _0x561b41['map'](_0xa98112 => ({
            'text': '§e' + _0xa98112['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0xa98112['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x30d72a = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x3b28fb
        };
        const _0x44d011 = JSON['stringify'](_0x30d72a);
        addForm(_0x44d011, function(_0x276c2d) {
            if (_0x561b41['length'] > 0x0 && _0x276c2d >= 0x0) {
                var _0x445e1b = _0x216b2b === 0x0 ? _0x561b41[_0x276c2d]['name'] : _0x561b41[_0x276c2d]['id'];
                if (typeof globalThis[_0x26a908] === 'object') globalThis[_0x26a908]['push'](_0x445e1b);
                if (typeof globalThis[_0x26a908] === 'string') globalThis[_0x26a908] = _0x445e1b;
                归客不发寻(0x0, 'addTarget', _0x445e1b, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x4c476b, _0x59f801, _0x57ffb4) => {
        let _0xca070e = _0x4c476b < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x57ffb4;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x4c476b = Math['abs'](_0x4c476b);
        const _0x6b410b = yaw * Math['PI'] / 0xb4;
        const _0x506831 = pitch * Math['PI'] / 0xb4;
        let _0x1f5b95 = pitch != 0x0 ? Math['sin'](_0x506831) * _0x4c476b : 0x0;
        let _0x446376 = pitch != 0x0 ? _0x1f5b95 / Math['tan'](_0x506831) : _0x4c476b;
        let _0x16d6dc = _0x446376 < 0x0;
        _0x446376 = Math['abs'](_0x446376);
        const _0x1d9efe = Math['cos'](_0x6b410b) * _0x446376;
        const _0x2d6c94 = Math['sin'](_0x6b410b) * _0x446376;
        let _0x478db0 = -Math['sin'](_0x6b410b) * _0x446376;
        let _0x360aa8 = Math['cos'](_0x6b410b) * _0x446376;
        if (_0xca070e || _0x16d6dc) {
            _0x478db0 = -_0x478db0;
            if (!_0x16d6dc) _0x1f5b95 = -_0x1f5b95;
            _0x360aa8 = -_0x360aa8;
        }
        return {
            'x': _0x59f801['x'] + _0x478db0,
            'y': _0x59f801['y'] - _0x1f5b95,
            'z': _0x59f801['z'] + _0x360aa8
        };
    };
    const getPlayerItemCount = _0x226665 => Array['from']({
        'length': 0x24
    }, (_0x10b175, _0x4679f7) => getInventory(_0x226665, _0x4679f7))['filter'](_0x551388 => _0x551388['count'] !== 0x0)['reduce']((_0x25ac02, _0x183f8d) => _0x25ac02 + _0x183f8d['count'], 0x0);
    const isSame = (_0x24522d, _0x28df2c, _0x4ca68c) => Math['abs'](_0x24522d - _0x28df2c) < _0x4ca68c;
    const 琶声主人忘 = _0x3bd018 => {
        let _0x1279c3 = [];
        if (at_entity) _0x1279c3 = _0x1279c3['concat'](getEntityList());
        if (at_player) _0x1279c3 = _0x1279c3['concat'](getPlayerList());
        let _0x4ccaa2 = Math['min'](at_maxCount, _0x1279c3['length']);
        let _0x299b68 = [];
        for (const _0x305287 of _0x1279c3) {
            if (!才年长色衰(_0x305287)) continue;
            const _0x1b7181 = getEntityNamespace(_0x305287);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x1c698c => _0x1b7181['includes'](_0x1c698c)) != at_back) continue;
            const _0x358a2f = getPos(_0x305287);
            const _0x1fa102 = getDistance(_0x358a2f, getPos(_0x3bd018));
            if ((_0x1fa102 > at_maxDist || _0x1fa102 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x3661e9 = getEntityAttribute(_0x305287, 'minecraft:health');
            if (at_heal && (!_0x3661e9 || _0x3661e9['min'] > _0x3661e9['max'] || _0x3661e9['max'] > 0x186a0 || _0x3661e9['current'] <= 0x0 || _0x3661e9['max'] === 0x0) != at_back) continue;
            if (_0x1b7181 === 'minecraft:player') {
                const _0x2ccc07 = getEntityRot(_0x305287);
                const _0xb28670 = at_BWM ? getEntityAttribute(_0x305287, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x2610e0 = getEntityName(_0x305287);
                if (at_BWM && _0xb28670['current'] >= 0.5 && !_0x2610e0['includes']('[') && !_0x2610e0['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x305287);
                    continue;
                }
                if (at_fov && (typeof _0x2ccc07['yaw'] === 'undefined' || typeof _0x2ccc07['pitch'] === 'undefined' || _0x2ccc07['yaw']['toFixed'](0x2) === 0x0 || _0x2ccc07['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x4fbca9 = getEntityFlag(_0x305287, 0x5);
                if (at_hide && _0x4fbca9 != at_back) continue;
                const _0x3fcbd7 = getEntityIsGround(_0x305287);
                if (at_ground && _0x3fcbd7 === at_back) continue;
                if (!惨将别别时(getPos(self_id), _0x358a2f, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x2610e0['startsWith'](ct_team) || ct_team['includes']('[') && _0x2610e0['includes'](ct_team))) continue;
                if (white_list['includes'](_0x305287) != at_back || !at_name && (_0x2610e0 === getEntityName(_0x3bd018) || _0x2610e0 === '') != at_back || (_0x358a2f['y'] > at_maxY || _0x358a2f['y'] < at_minY) != at_back && !at_infY || _0x305287 === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x49981c => _0x2610e0['includes'](_0x49981c))) continue;
                const _0x521fe9 = teams_armor ? 音铮铮然有(getPlayerArmorItem(_0x305287, teams_slot)) : {};
                if (Teams && teams_armor && _0x521fe9 != '' && _0x521fe9['color'] === 音铮铮然有(getPlayerArmorItem(self_id, teams_slot))['color']) continue;
                const _0x5c59bc = at_size ? getEntitySize(_0x305287) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && ((_0x5c59bc['x'] > default_size['x'] + 0.1 || _0x5c59bc['x'] < default_size['x'] - 0.1) && (_0x5c59bc['y'] > 1.66 || _0x5c59bc['y'] < 1.64) && (_0x5c59bc['y'] < default_size['y'] || _0x5c59bc['y'] > default_size['y'] + 0.1) && (_0x5c59bc['y'] > 1.51 || _0x5c59bc['y'] < 1.49)) != at_back) continue;
            }
            const _0x4e390a = modelist['at_mode'] === 0x4 ? getPlayerItemCount(_0x305287) : 0x0;
            const _0x4902bc = modelist['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x305287, 'yaw_rot') : 0x0;
            const _0x3eb81e = modelist['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x305287, 'pitch_rot') : 0x0;
            const _0x5bf475 = modelist['at_mode'] === 0x2 ? 十六言命曰(_0x305287, -0x1) : 0x0;
            _0x299b68['push']({
                'distance': _0x1fa102,
                'target': _0x305287,
                'damage': _0x5bf475,
                'heal': _0x3661e9['current'],
                'crosshair': Math['sqrt'](_0x4902bc * _0x4902bc + _0x3eb81e * _0x3eb81e),
                'items': _0x4e390a,
                'random': 马客在船举(0x0, _0x1279c3['length'] - 0x1)
            });
        }
        const _0x1b49af = [(_0x5812e0, _0x387a37) => _0x5812e0['distance'] - _0x387a37['distance'], (_0x1f78af, _0x4b2550) => _0x1f78af['heal'] - _0x4b2550['heal'], (_0x3e343c, _0x76b79e) => _0x3e343c['damage'] - _0x76b79e['damage'], (_0x2319c9, _0x1ee425) => _0x2319c9['crosshair'] - _0x1ee425['crosshair'], (_0x2af3bc, _0x47e9ea) => _0x47e9ea['items'] - _0x2af3bc['items'], (_0x3b8e9a, _0x59abc3) => _0x3b8e9a['random'] - _0x59abc3['random']];
        _0x299b68['sort'](_0x1b49af[modelist['at_mode']]);
        if (at_reverse) _0x299b68['reverse']();
        if (at_infCount) return _0x299b68['map'](_0xe9f5f4 => _0xe9f5f4['target']);
        return _0x299b68['slice'](0x0, _0x4ccaa2)['map'](_0x56b993 => _0x56b993['target']);
    };
    const 归客不发寻 = (_0x56eabe = 0x0, _0x39b2f1 = 'Tip', _0x303983, _0x27654c = '§r') => {
        if (!FuncTip) return false;
        if (_0x56eabe == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x39b2f1 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x27654c) + ' ' + _0x303983);
        if (_0x56eabe == 0x1) return '§r' + _0x39b2f1 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x27654c) + ' ' + _0x303983;
    };
    const getDistance = (_0xacaca8, _0x365bcc) => Math['sqrt'](Math['pow'](_0xacaca8['x'] - _0x365bcc['x'], 0x2) + Math['pow'](_0xacaca8['y'] - _0x365bcc['y'], 0x2) + Math['pow'](_0xacaca8['z'] - _0x365bcc['z'], 0x2));
    const 声暗问弹者 = (_0x17fc83, _0x14381f) => {
        if (!才年长色衰(_0x17fc83) || !才年长色衰(_0x14381f)) return Infinity;
        const _0x24ee1f = getPos(_0x17fc83);
        const _0x508a65 = getPos(_0x14381f);
        return Math['sqrt'](Math['pow'](_0x24ee1f['x'] - _0x508a65['x'], 0x2) + Math['pow'](_0x24ee1f['y'] - _0x508a65['y'], 0x2) + Math['pow'](_0x24ee1f['z'] - _0x508a65['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x237075, _0x485b7e) => {
        if (!才年长色衰(_0x237075) || !才年长色衰(_0x485b7e)) return Infinity;
        const _0x13cbd8 = getPos(_0x237075);
        const _0x3b5d75 = getPos(_0x485b7e);
        return Math['sqrt'](Math['pow'](_0x13cbd8['x'] - _0x3b5d75['x'], 0x2) + Math['pow'](_0x13cbd8['z'] - _0x3b5d75['z'], 0x2));
    };
    const 欲语迟移船 = (_0x38b191, _0x3cd379, _0x573f9a) => {
        let _0x2d5715 = {
            'fn-set-player-pos': {
                'x': _0x38b191,
                'y': _0x3cd379,
                'z': _0x573f9a
            }
        };
        callModule(0x5, JSON['stringify'](_0x2d5715));
    };
    const getHorizontalDistance = (_0x3eb9a2, _0x41b2e9) => Math['sqrt'](Math['pow'](_0x3eb9a2['x'] - _0x41b2e9['x'], 0x2) + Math['pow'](_0x3eb9a2['z'] - _0x41b2e9['z'], 0x2));
    const setRealPos = (_0x7694bb, _0xf942f6, _0x1bbfa1, _0x560dec) => setEntityPos(_0x7694bb, _0xf942f6, _0x1bbfa1 + setPos_offset, _0x560dec);
    const setPos = (_0x3c1165, _0x41c90f, _0xf5bfdc) => setRealPos(self_id, _0x3c1165, _0x41c90f, _0xf5bfdc);
    const setMotion = (_0x5e6fcd, _0x55cc2a, _0x8f68e8) => setEntityMotion(self_id, _0x5e6fcd, _0x55cc2a, _0x8f68e8);
    const 相近邀相见 = _0x4eeb46 => {
        if (_0x4eeb46 === '') return [];
        return _0x4eeb46['split'](',');
    };
    const 添酒回灯重 = _0x5f1786 => {
        if (typeof _0x5f1786 != 'object' || _0x5f1786['length'] === 0x0) return '';
        return _0x5f1786['join'](',');
    };
    const 开宴千呼万 = (_0x318b9a, _0x388f32) => {
        let _0x5248a1 = typeof _0x388f32 === 'object' ? 添酒回灯重(_0x388f32) : _0x388f32;
        let _0x2e7375 = typeof _0x388f32 === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x318b9a + '","placeholder":"","default":"' + _0x5248a1 + '"}]}', function(_0xb90aa7) {
            if (_0x2e7375 === 0x1) globalThis[_0x318b9a] = _0xb90aa7;
            if (_0x2e7375 === 0x0) globalThis[_0x318b9a] = 相近邀相见(_0xb90aa7);
            归客不发寻(0x0, 'setValue', _0x318b9a + ' §7>>>§r ' + _0xb90aa7, '§r');
            NoveXare_Config[_0x318b9a] = globalThis[_0x318b9a];
        });
    };
    const 唤始出来犹 = _0x1e1189 => {
        if (typeof _0x1e1189 != 'string' || _0x1e1189 === '') return 'None';
        let _0x13ba1a = _0x1e1189['match'](/\[(.*?)\]/g);
        if (_0x13ba1a === null) return 'None';
        return _0x13ba1a[0x0];
    };
    const 抱琵琶半遮 = _0x47e09e => {
        if (!File['exist'](_0x47e09e)) return '{}';
        const _0x18710e = File['read'](_0x47e09e);
        return _0x18710e ? _0x18710e : '{}';
    };
    const 面转轴拨弦 = _0x5dbd32 => {
        const _0x18abf2 = getPos(_0x5dbd32);
        let _0x48de03 = _0x5dbd32 === self_id ? Math['floor'](_0x18abf2['y']) - 0x1 : Math['floor'](_0x18abf2['y']);
        return {
            'x': Math['floor'](_0x18abf2['x']),
            'y': _0x48de03,
            'z': Math['floor'](_0x18abf2['z'])
        };
    };
    const 三两声未成 = (_0x46fc54, _0x27c572) => {
        if (_0x46fc54['length'] === _0x27c572['length']) {
            return [];
        }
        const _0x246ca9 = _0x46fc54['length'] >= _0x27c572['length'] ? _0x46fc54 : _0x27c572;
        const _0xae57f2 = _0x46fc54['length'] < _0x27c572['length'] ? _0x46fc54 : _0x27c572;
        return _0x246ca9['filter'](_0x5b1e0c => !_0xae57f2['includes'](_0x5b1e0c));
    };
    const 曲调先有情 = (_0xc3707c, _0x59b234) => {
        const _0x207009 = aa_speed;
        const _0x3051e4 = aa_g;
        const _0x270a8b = Math['atan'](Math['floor'](-_0x59b234) / _0xc3707c);
        const _0x364d1b = Math['sqrt'](_0xc3707c * _0xc3707c + _0x59b234 * _0x59b234);
        const _0x5f4b6d = Math['atan'](_0x364d1b / _0x207009 / 0x2 / _0x207009 * _0x3051e4);
        return -((_0x5f4b6d + _0x270a8b) / Math['PI'] * 0xb4);
    };
    const getArrowFlyTime = (_0xccb28e, _0xecbbd9) => _0xccb28e / _0xecbbd9;
    const angleRound = (_0x10aa0c, _0x3c2dc0) => Math['round'](_0x10aa0c / _0x3c2dc0) * _0x3c2dc0;
    const 弦弦掩抑声 = (_0x1a5f6b, _0x19f941, _0x2a16ca, _0x24feda = false, _0x28cf95 = false, _0x26fa59 = 0x0, _0x1ead39 = 0x0) => {
        let _0x5111b3 = typeof _0x19f941 != 'string' ? _0x19f941 : getPos(_0x19f941);
        let _0x1dd48d = typeof _0x1a5f6b != 'string' ? _0x1a5f6b : getPos(_0x1a5f6b);
        let _0x182020 = getEntityRot(_0x1a5f6b);
        if (!_0x5111b3 || !_0x1dd48d) return Infinity;
        const _0x14ba40 = getHorizontalDistance(_0x1dd48d, _0x5111b3);
        if (_0x24feda) _0x5111b3 = 酒欲饮无管(getEntityMotion(_0x19f941), getPos(_0x19f941), getArrowFlyTime(_0x14ba40, aa_speed) * 0x14);
        let _0x3ae200 = _0x5111b3['x'] - _0x1dd48d['x'];
        let _0x12e4b8 = _0x1dd48d['y'] - _0x5111b3['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x1ead39, _0x1ead39) / 0xa;
        let _0x879658 = _0x5111b3['z'] - _0x1dd48d['z'];
        let _0x2e1be0 = Math['atan2'](_0x879658, _0x3ae200) * 0xb4 / Math['PI'];
        const _0x5abac6 = 曲调先有情(_0x14ba40, _0x12e4b8);
        let _0x2561bd = _0x28cf95 ? _0x5abac6 : Math['atan2'](_0x12e4b8, _0x14ba40) * 0xb4 / Math['PI'];
        if (_0x2a16ca === 'yaw_pos') return _0x2e1be0 > -0xb4 && _0x2e1be0 <= 0x5a ? _0x2e1be0 + 0x5a : _0x2e1be0 - 0x10e;
        if (_0x2a16ca === 'yaw_rot') {
            _0x2e1be0 = _0x2e1be0 > -0xb4 && _0x2e1be0 <= 0x5a ? _0x2e1be0 + 0x5a : _0x2e1be0 - 0x10e;
            let _0x37a7af = _0x2e1be0 - _0x182020['yaw'] + 马客在船举(-_0x26fa59 / 0x2, _0x26fa59 / 0x2);
            return _0x37a7af > 0x0 ? -_0x37a7af + 0xb4 : -_0x37a7af - 0xb4;
        }
        if (_0x2a16ca === 'pitch_pos') return _0x2561bd;
        if (_0x2a16ca === 'pitch_rot') return _0x2561bd - _0x182020['pitch'];
    };
    const 声思似诉平 = (_0x48c39e, _0x15f5cb, _0x3bd478, _0x49b916) => {
        let _0x5aeecd = Math['abs'](弦弦掩抑声(_0x48c39e, _0x15f5cb, 'yaw_rot'));
        let _0x4a53b0 = Math['abs'](弦弦掩抑声(_0x48c39e, _0x15f5cb, 'pitch_rot'));
        if (_0x49b916 === 0x0) return Math['sqrt'](_0x5aeecd * _0x5aeecd + _0x4a53b0 * _0x4a53b0) < _0x3bd478;
        if (_0x49b916 === 0x1) return Math['abs'](_0x5aeecd) < _0x3bd478;
        if (_0x49b916 === 0x2) return Math['abs'](_0x4a53b0) < _0x3bd478;
    };
    const 生不得志低 = _0x1062ba => {
        let _0x28288c = '';
        for (let _0x460e02 = 0x0; _0x460e02 < _0x1062ba['length']; _0x460e02 += 0x2) {
            _0x28288c += String['fromCharCode'](parseInt(_0x1062ba['substr'](_0x460e02, 0x2), 0x10));
        }
        return _0x28288c;
    };
    const 眉信手续续 = (_0x28c942, _0x503b90, _0xc52f24 = 0.5, _0x254676 = false) => {
        let _0x28c28a = [];
        let _0x2805dd = 弦弦掩抑声(_0x28c942, _0x503b90, 'yaw_pos');
        let _0x3ea28c = 弦弦掩抑声(_0x28c942, _0x503b90, 'pitch_pos');
        if (getDistance(_0x28c942, _0x503b90) < _0xc52f24) return [_0x28c942];
        for (let _0x3546e1 = 0x0; _0x3546e1 <= getDistance(_0x28c942, _0x503b90); _0x3546e1 += _0xc52f24) {
            let _0x25b8b2 = 忽闻水上琵(-_0x3546e1, _0x28c942, {
                'yaw': _0x2805dd,
                'pitch': _0x254676 ? -_0x3ea28c : 0x0
            });
            if (getBlock(_0x25b8b2['x'], _0x25b8b2['y'], _0x25b8b2['z'])['namespace'] === 'minecraft:air') _0x28c28a['push']({
                'x': _0x25b8b2['x'],
                'y': _0x25b8b2['y'],
                'z': _0x25b8b2['z']
            });
        }
        return _0x28c28a;
    };
    const 弹说尽心中 = _0x6038cb => {
        let _0x54aab3 = '';
        for (let _0x25dbdc = 0x0; _0x25dbdc < _0x6038cb['length']; _0x25dbdc++) {
            _0x54aab3 += _0x6038cb['charCodeAt'](_0x25dbdc)['toString'](0x10);
        }
        return _0x54aab3;
    };
    const 无限事轻拢 = (_0xb28410, _0x3c4470) => {
        let _0x26e88e = getEntityAttribute(_0xb28410, 'minecraft:health');
        let _0x24ec67 = _0x26e88e['current'];
        let _0x290fc1 = _0x26e88e['max'];
        const _0x3aaacf = _0x24ec67 / _0x290fc1;
        switch (_0x3c4470) {
            case 0x0:
                return _0x3aaacf['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x150935 = '§c';
                for (let _0xf4d15a = 0x0; _0xf4d15a < Math['floor'](_0x3aaacf * 0x14); _0xf4d15a++) _0x150935 += '❤';
                return _0x150935 + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x24ec67);
            case 0x3:
                return Math['floor'](_0x24ec67) + '/' + Math['floor'](_0x290fc1);
            default:
                return _0x24ec67;
        }
    };
    const 慢捻抹复挑 = _0x3f48d5 => {
        let _0x4344e0 = '';
        let _0x4c9d77 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x549d44 = 0x0; _0x549d44 < _0x3f48d5; _0x549d44++) {
            let _0x120938 = 马客在船举(0x0, _0x4c9d77['length'] - 0x1);
            _0x4344e0 += _0x4c9d77[_0x120938];
        }
        return _0x4344e0;
    };
    const 初为霓裳后 = _0x4328ff => {
        for (let _0x2f58d6 = Math['ceil'](-cd_size / 0x2); _0x2f58d6 < Math['floor'](cd_size / 0x2 + 0x1); _0x2f58d6++) {
            for (let _0x9bdb8a = Math['ceil'](-cd_size / 0x2); _0x9bdb8a < Math['floor'](cd_size / 0x2 + 0x1); _0x9bdb8a++) {
                for (let _0x8f1864 = Math['ceil'](-cd_size / 0x2); _0x8f1864 < Math['floor'](cd_size / 0x2 + 0x1); _0x8f1864++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x4328ff;
                    const _0x5e2976 = getBlock(x + _0x2f58d6, y + _0x9bdb8a, z + _0x8f1864);
                    if (_0x5e2976['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x4328ff['y'] + _0x9bdb8a <= _0x4328ff['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x2f58d6, y + _0x9bdb8a, z + _0x8f1864, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x4328ff['x'] + _0x2f58d6, _0x4328ff['y'] + _0x9bdb8a, _0x4328ff['z'] + _0x8f1864, 0x0);
                    if (cd_packet) 人本长安倡(_0x4328ff['x'] + _0x2f58d6, _0x4328ff['y'] + _0x9bdb8a, _0x4328ff['z'] + _0x8f1864, true, true);
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
            for (let _0x12f5b5 = 0x0; _0x12f5b5 < ia_move; _0x12f5b5++) {
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
    const 嘈如急雨小 = _0xf69e0b => {
        let _0x5e5601 = '';
        let _0x46b87b = _0xf69e0b['split']('');
        for (let _0x1ed07e in _0x46b87b) {
            let _0x3cd7b2 = _0x46b87b[_0x1ed07e]['toUpperCase']();
            if (_0x1ed07e != _0x46b87b['length'] - 0x1) {
                if (_0x1ed07e % 0x2 === 0x1) _0x5e5601 += _0x3cd7b2 + ' ';
                else _0x5e5601 += _0x3cd7b2;
            } else _0x5e5601 += _0x3cd7b2;
        }
        if (rpc_remark) {
            let _0x131c16 = _0x5e5601['split'](' ');
            let _0x25ab67 = '';
            for (let _0x4aaa93 in _0x131c16) _0x25ab67 += _0x131c16[_0x4aaa93] + '(' + 生不得志低(_0x131c16[_0x4aaa93]) + ') ';
            return _0x25ab67;
        } else return _0x5e5601;
    };
    const 弦切切如私 = (_0x43cfaf, _0x4abb15, _0x44dc30 = false) => {
        setEntityTarget(_0x43cfaf, _0x4abb15);
        if (_0x44dc30) setEntityTarget(_0x4abb15, _0x43cfaf);
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
            let _0x20040c = [];
            self_id = getUserID(other_user);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            let _0x23c1f3 = getEntityAttribute(self_id, 'minecraft:health');
            let _0x1d6d54 = getEntityMotion(self_id);
            isMoving = getEntityFlag(self_id, 0x22) || typeof rocker_func['angle'] !== 'undefined';
            if (FastStop && !isMoving) setMotion(0x0, _0x1d6d54['y'], 0x0);
            let _0x442e17 = getCameraRotation();
            let _0x331d40 = {
                'yaw': _0x442e17['yaw'] > 0x0 ? 0xb4 - _0x442e17['yaw'] : -0xb4 - _0x442e17['yaw'],
                'pitch': -_0x442e17['pitch']
            };
            let _0xdff7ed = getDistance(self_pos, last_tick_pos) / 0.05;
            let _0x47c82e = getHorizontalDistance(self_pos, last_tick_pos) / 0.05;
            let _0x55727f = 瑟瑟主人下(self_id);
            let _0xd84d72 = 面转轴拨弦(self_id);
            let _0x2c9d14 = getWorldPlayerList();
            let _0x40cc05 = getEntityIsGround(self_id);
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    ping_1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x5c82b2, _0x280dd3) => globalThis['ping_2'] = Date['now']());
                    ping = Math['abs'](ping_2 - ping_1);
                }
                if (InvCleaner && ic_change || SmartInv && da_change) item_count = getPlayerItemCount(self_id);
            }
            self_item = getCarried(self_id);
            if (_0x23c1f3['current'] - last_tick_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x23c1f3['current'] < last_tick_heal) death_pos = self_pos;
            if (TestModule) closeInventory();
            if (DeadCross) dc_pos['forEach'](_0x543f62 => {
                createShadow(_0x543f62['x'], _0x543f62['y'], _0x543f62['z']);
                createShadow(_0x543f62['x'], _0x543f62['y'] + 0x1, _0x543f62['z']);
                createShadow(_0x543f62['x'], _0x543f62['y'] + 0x2, _0x543f62['z']);
                createShadow(_0x543f62['x'] + 0x1, _0x543f62['y'] + 0x2, _0x543f62['z']);
                createShadow(_0x543f62['x'] - 0x1, _0x543f62['y'] + 0x2, _0x543f62['z']);
                createShadow(_0x543f62['x'], _0x543f62['y'] + 0x3, _0x543f62['z']);
            });
            if (AdminShow) {
                let _0x2f6a48 = _0x2c9d14['filter'](_0xc7e3b9 => _0xc7e3b9['permissionLevel'] != -0x1 || _0xc7e3b9['commandPermissionLevel'] != -0x1);
                if (_0x2f6a48['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x2f6a48['map'](_0x2baafd => _0x2baafd['name'])), '§r'));
                let _0x367b25 = _0x2f6a48['filter'](_0x584172 => 声暗问弹者(_0x584172['id'], self_id) < as_range);
                if (_0x367b25['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x367b25['map'](_0x2fd45e => _0x2fd45e['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(target_list[0x0])) && ticks % at_delay == 0x0) target_list = 琶声主人忘(self_id);
            if (NoHider) {
                const _0x4cfc4b = getPlayerList();
                _0x4cfc4b['forEach'](_0xe81dd3 => {
                    if (_0xe81dd3 != self_id) {
                        removeEntityEffect(_0xe81dd3, 0xe);
                        setEntityFlag(_0xe81dd3, 0x5, false);
                        if (nh_exclude && target_list['includes'](_0xe81dd3)) target_list['splice'](target_list['indexOf'](_0xe81dd3), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0xd84d72['x'], _0xd84d72['y'] - 0x1, _0xd84d72['z'])['namespace'] === 'minecraft:glass' && _0x40cc05) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !Criticals_status && _0x1d6d54['y'] < 0x0) {
                Criticals_status = true;
                callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
                playerJump();
            }
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || target_list['length'] > 0x0)) {
                const _0xcdca46 = rt_target ? getPos(target_list[0x0]) : self_pos;
                if (_0xcdca46) setPos(_0xcdca46['x'] + 马客在船举(-rt_range, rt_range), _0xcdca46['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0xcdca46['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x127f0c = 马客在船举(ac_min, ac_max);
                let _0xe6673e = Math['round'](0x3e8 / _0x127f0c);
                const _0x15c6ac = target_list['length'] > 0x0 ? 声思似诉平(self_id, target_list[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x421923 = 0x0; _0x421923 < ac_times; _0x421923++) {
                    if (!_0x15c6ac) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0xe6673e;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x5b4e99 = getEntityList()['forEach'](_0x5df391 => {
                    if (getEntityNamespace(_0x5df391) != 'minecraft:item' || !findEntity(_0x5df391) || 声暗问弹者(_0x5df391, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x225689 = getPos(_0x5df391);
                    silentTP(_0x225689['x'], _0x225689['y'], _0x225689['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x331d40,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x331d40['yaw']
            });
            if (CustomItem) {
                const _0x5ad3d3 = getEntityCarriedItem(self_id);
                if (modelist['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modelist['custom_mode'], _0x5ad3d3);
                else if (modelist['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x5ad3d3);
                else if (modelist['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x5ad3d3);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x31ac65 = [];
                if (modelist['sb_mode'] == 0x0) _0x31ac65 = getPlayerList();
                if (modelist['sb_mode'] == 0x1) _0x31ac65 = target_list;
                if (modelist['sb_mode'] == 0x2) _0x31ac65 = ['lock_pos'];
                _0x31ac65['forEach'](_0x296a70 => {
                    if (sb_exclude && _0x296a70 == self_id) return;
                    let _0x21f4d1 = null;
                    if (_0x296a70 == 'lock_pos') _0x21f4d1 = sb_pos;
                    else _0x21f4d1 = 面转轴拨弦(_0x296a70);
                    if (!_0x21f4d1) return;
                    let _0xa8a9e6 = getEntityRot(_0x296a70);
                    if (modelist['sb_mode'] < 0x2) {
                        _0x21f4d1 = 忽闻水上琵(sb_offset, _0x21f4d1, _0xa8a9e6);
                        _0x21f4d1['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x436d01 = JSON['parse'](抱琵琶半遮(NoveXare_path + '/Shadow.json'));
                        _0x436d01['forEach'](_0xc8b3be => {
                            let _0x5eb02c = Math['sqrt'](_0xc8b3be['x'] * _0xc8b3be['x'] + _0xc8b3be['y'] * _0xc8b3be['y'] + _0xc8b3be['z'] * _0xc8b3be['z']);
                            let _0x105e12 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0xc8b3be, 'yaw_pos');
                            let _0x366b80 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0xc8b3be, 'pitch_pos');
                            let _0x397352 = 忽闻水上琵(_0x5eb02c, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x366b80,
                                'yaw': _0x105e12 + sb_current_yaw
                            });
                            createShadow(_0x21f4d1['x'] + _0x397352['x'], _0x21f4d1['y'] + _0x397352['y'], _0x21f4d1['z'] + _0x397352['z']);
                        });
                    } else {
                        for (let _0x2d1c6b = Math['ceil'](-sb_length / 0x2); _0x2d1c6b < Math['floor'](sb_length / 0x2 + 0x1); _0x2d1c6b++) {
                            for (let _0x41bd16 = Math['ceil'](-sb_length / 0x2); _0x41bd16 < Math['floor'](sb_length / 0x2 + 0x1); _0x41bd16++) {
                                for (let _0x75cf6a = Math['ceil'](-sb_length / 0x2); _0x75cf6a < Math['floor'](sb_length / 0x2 + 0x1); _0x75cf6a++) {
                                    createShadow(_0x21f4d1['x'] + _0x2d1c6b, _0x21f4d1['y'] + _0x41bd16 + 0x2, _0x21f4d1['z'] + _0x75cf6a);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_current_yaw < 0xb4) sb_current_yaw += sb_rot;
            else sb_current_yaw = -0xb4;
            if (SmallMap) {
                let _0x16880e = [
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
                let _0x5eeca1 = [];
                if (sm_player) _0x5eeca1['push'](...getPlayerList());
                if (sm_entity) _0x5eeca1['push'](...getEntityList());
                if (sm_target) _0x5eeca1['push'](...target_list);
                _0x5eeca1['forEach'](_0x5a00c2 => {
                    let _0xfbe787 = 弦弦掩抑声(self_id, _0x5a00c2, 'yaw_rot');
                    let _0x2f0854 = 声暗问弹者(self_id, _0x5a00c2);
                    let _0x2a60cb = Math['floor'](_0x2f0854 / sm_size * sm_proportion * -Math['sin'](_0xfbe787 * Math['PI'] / 0xb4) * 0xa);
                    let _0x29b420 = Math['floor'](_0x2f0854 / sm_size * sm_proportion * -Math['cos'](_0xfbe787 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x2a60cb > 0x5) _0x2a60cb = 0x5;
                    if (_0x29b420 > 0x5) _0x29b420 = 0x5;
                    if (_0x2a60cb < -0x5) _0x2a60cb = -0x5;
                    if (_0x29b420 < -0x5) _0x29b420 = -0x5;
                    _0x16880e[_0x29b420 + 0x5][_0x2a60cb + 0x5] = ' §e◆§r ';
                });
                let _0x19747b = _0x16880e['map'](_0x3afb9b => _0x3afb9b['join'](''))['join']('\n');
                _0x20040c['push'](归客不发寻(0x1, 'Map', '\n' + _0x19747b, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (anchor_target === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x4758db = getPos(anchor_target);
                    const _0x120a98 = getEntitySize(anchor_target);
                    setCameraAnchor(_0x4758db['x'] - self_pos['x'], _0x4758db['y'] - self_pos['y'] + 0.85 * _0x120a98['y'], -_0x4758db['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x5b29e8 = getPos(cm_attack);
                    const _0x2cebac = getEntitySize(cm_attack);
                    setCameraAnchor(_0x5b29e8['x'] - self_pos['x'], _0x5b29e8['y'] - self_pos['y'] + 0.85 * _0x2cebac['y'], -_0x5b29e8['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x1d6d54['x'] * cm_moverange, -_0x1d6d54['y'] * cm_moverange, _0x1d6d54['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset((cm_x - 0x19) / 0x3, (cm_y - 0x19) / 0x3, (cm_z - 0x19) / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x23c1f3['current'] < last_tick_heal) last_tick_heal = _0x23c1f3['current'];
            if (NoDebuff) debuff['forEach'](_0x5abd1f => removeEntityEffect(self_id, _0x5abd1f));
            if (MoveJump && isMoving && _0x40cc05) playerJump();
            if (ChunkRender) {
                let _0x316e7f = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x1a033f = {
                    'x': _0x316e7f['x'] * 0x10,
                    'z': _0x316e7f['z'] * 0x10
                };
                let _0x2f40f7 = {
                    'x': (_0x316e7f['x'] + 0x1) * 0x10,
                    'z': (_0x316e7f['z'] + 0x1) * 0x10
                };
                for (let _0x59dc8d = 0x0; _0x59dc8d < 0x10; _0x59dc8d++) {
                    妇遂命酒使(0x37, _0x1a033f['x'] + _0x59dc8d, self_pos['y'], _0x1a033f['z'], 0x1);
                    妇遂命酒使(0x37, _0x1a033f['x'], self_pos['y'], _0x1a033f['z'] + _0x59dc8d, 0x1);
                    妇遂命酒使(0x37, _0x2f40f7['x'] - _0x59dc8d, self_pos['y'], _0x2f40f7['z'], 0x1);
                    妇遂命酒使(0x37, _0x2f40f7['x'], self_pos['y'], _0x2f40f7['z'] - _0x59dc8d, 0x1);
                }
                _0x20040c['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x316e7f['x'] + '， ' + _0x316e7f['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x5cec1c of again_item) {
                    if (modelist['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x5cec1c, -0x1, '一局'));
                    if (modelist['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x5cec1c, -0x1, '一局'));
                        const _0x527d35 = getCarried(self_id);
                        if (_0x527d35['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (goto_pos != null) {
                const _0x2cf6e7 = getHorizontalDistance(self_pos, goto_pos);
                const _0xf3c95e = getDistance(self_pos, goto_pos);
                if (_0xf3c95e >= 0x5) {
                    let _0x4cc0aa = 弦弦掩抑声(self_id, goto_pos, 'yaw_pos');
                    let _0x1228ea = 忽闻水上琵(-default_speed / 0xa, self_pos, {
                        'yaw': _0x4cc0aa,
                        'pitch': 0x0
                    });
                    if (_0x2cf6e7 >= 0x3) setMotion(_0x1228ea['x'] - self_pos['x'], _0x1d6d54['y'], _0x1228ea['z'] - self_pos['z']);
                    else setMotion(_0x1d6d54['x'], (_0x1228ea['y'] - self_pos['y'] > 0x0 ? default_speed : -default_speed) / 0xa, _0x1d6d54['z']);
                } else {
                    goto_pos = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x13bf07 = 0x0; _0x13bf07 < ral_num; _0x13bf07++) {
                    const _0x334118 = 慢捻抹复挑(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x13bf07, _0x334118, _0x334118, true);
                }
            }
            if (ShowNowTime) {
                const _0x17a0b1 = new Date();
                const _0x4acbb1 = _0x17a0b1['getFullYear']();
                const _0x182775 = ('0' + (_0x17a0b1['getMonth']() + 0x1))['slice'](-0x2);
                const _0x22e22a = ('0' + _0x17a0b1['getDate']())['slice'](-0x2);
                const _0x41cb53 = ('0' + _0x17a0b1['getHours']())['slice'](-0x2);
                const _0x5b340c = ('0' + _0x17a0b1['getMinutes']())['slice'](-0x2);
                const _0x4811d3 = ('0' + _0x17a0b1['getSeconds']())['slice'](-0x2);
                const _0x417de2 = _0x4acbb1 + '-' + _0x182775 + '-' + _0x22e22a + ' ' + _0x41cb53 + ':' + _0x5b340c + ':' + _0x4811d3;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x417de2, '当前时间: ' + _0x417de2, true);
            }
            if (ChestAura) {
                let _0x166c30 = 面转轴拨弦(self_id);
                let _0x347baf = ca_range;
                for (let _0x489110 = -_0x347baf; _0x489110 < _0x347baf; _0x489110++) {
                    for (let _0x4f3fa7 = -_0x347baf; _0x4f3fa7 < _0x347baf; _0x4f3fa7++) {
                        for (let _0x45b251 = -_0x347baf; _0x45b251 < _0x347baf; _0x45b251++) {
                            const _0x5805d1 = getBlock(_0x166c30['x'] + _0x489110, _0x166c30['y'] + _0x4f3fa7, _0x166c30['z'] + _0x45b251);
                            if (_0x5805d1['namespace'] != 'minecraft:chest') continue;
                            const _0x1cbbbd = getBlock(_0x166c30['x'] + _0x489110, _0x166c30['y'] + _0x4f3fa7 + 0x1, _0x166c30['z'] + _0x45b251);
                            const _0x3fba7a = {
                                'x': _0x166c30['x'] + _0x489110,
                                'y': _0x166c30['y'] + _0x4f3fa7,
                                'z': _0x166c30['z'] + _0x45b251
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x3fba7a)) && ca_exclude || isOpenChest || !惨将别别时(_0x166c30, _0x3fba7a, ca_wall, 1.53, 0.5) || ca_block && _0x1cbbbd['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x3fba7a, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x166c30['x'] + _0x489110, _0x166c30['y'] + _0x4f3fa7, _0x166c30['z'] + _0x45b251, 0x1);
                            if (!ca_check || open_chest['packet'] && open_chest['click']) ca_chest_pos['push'](JSON['stringify'](_0x3fba7a));
                            if (ca_check && open_chest['packet'] && open_chest['click']) {
                                open_chest['click'] = false;
                                open_chest['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x2c9d14['forEach'](_0x130b50 => {
                    const {
                        name,
                        id
                    } = _0x130b50;
                    if (id === self_id || name === '') return;
                    let _0x30c591 = null;
                    if (modelist['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x30c591 = id;
                    if (modelist['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x30c591 = id;
                    if (modelist['as_mode'] === 0x2) {
                        as_config['forEach'](_0x17537e => {
                            if (_0x17537e['match_mode'] === '精准' && _0x17537e['has_mode'] === '存在' && _0x17537e['texts']['some'](_0x22f41e => name === _0x22f41e) != _0x17537e['reverse_selection']) _0x30c591 = id;
                            if (_0x17537e['match_mode'] === '精准' && _0x17537e['has_mode'] === '同时' && _0x17537e['texts']['every'](_0x4fe9de => name === _0x4fe9de) != _0x17537e['reverse_selection']) _0x30c591 = id;
                            if (_0x17537e['match_mode'] === '模糊' && _0x17537e['has_mode'] === '存在' && _0x17537e['texts']['some'](_0x188852 => name['includes'](_0x188852)) != _0x17537e['reverse_selection']) _0x30c591 = id;
                            if (_0x17537e['match_mode'] === '精准' && _0x17537e['has_mode'] === '存在' && _0x17537e['texts']['every'](_0xbd941e => name['includes'](_0xbd941e)) != _0x17537e['reverse_selection']) _0x30c591 = id;
                        });
                    }
                    if (modelist['as_mode'] === 0x3) _0x30c591 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x30c591 = null;
                    if (as_ground && getEntityIsGround(id)) _0x30c591 = null;
                    if (_0x30c591 === null) return;
                    if (modelist['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modelist['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modelist['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modelist['anti_mode'] === 0x3) _0x20040c['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modelist['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) target_list['forEach'](_0x1914d2 => interactEntity(_0x1914d2));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modelist['person_mode']);
            if (Tower && (_0x331d40['pitch'] < -0x50 || _0x331d40['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x40cc05 || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0xd84d72['x'], self_pos['y'] - 0x2, _0xd84d72['z']), tower_delay * 0x32);
                }
            }
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x2c9d14['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x2c9d14['length'], '§r');
                    last_world_player = _0x2c9d14;
                }
                if (sv_id && self_id != last_tick_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + last_tick_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x32b6aa = [];
                _0x2c9d14['forEach'](_0x2d462e => {
                    if (modelist['ca_mode'] == 0x0 && 十六言命曰(_0x2d462e['id'], -0x1) > 0x14) _0x32b6aa['push'](getEntityName(_0x2d462e['id']));
                    if (modelist['ca_mode'] == 0x1 && getEntityMaxDamage(_0x2d462e['id']) > 0x14) _0x32b6aa['push'](getEntityName(_0x2d462e['id']));
                });
                if (_0x32b6aa['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x32b6aa), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x2c9d14['length']) {
                const _0x5095b1 = _0x2c9d14['map'](_0x5241dd => _0x5241dd['name']);
                let _0x2ee7a3 = 三两声未成(last_world_player, _0x5095b1);
                let _0x1c3b7a = last_world_player['length'] < _0x5095b1['length'];
                if (_0x1c3b7a) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2ee7a3) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x2ee7a3) + '离开了世界', '§r');
                last_world_player = _0x5095b1;
            }
            if (DropRes && _0x1d6d54['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x3c9dea = getInventory(self_id, index);
                    if (resList['includes'](_0x3c9dea['namespace'])) dropPlayerInventorySlot(self_id, index);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    target_list['forEach'](_0x552589 => {
                        if (声思似诉平(self_id, _0x552589, aaa_fov, 0x0)) {
                            if (aa_use) 快弹数曲曲();
                            else 江头夜送客(_0x552589, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x548e0b = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x1bbd99 = getCarried(self_id);
                        if (hs_use && !_0x1bbd99['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x548e0b['name']) || selectitems['includes'](_0x548e0b['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x308bd2 = getCarried(self_id);
                    if (hs_use && !_0x308bd2['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot) {
                const _0x5524b8 = 是夕始觉有(self_id, 'splash_potion', 'hotbar', ap_min);
                const _0x1d099f = 是夕始觉有(self_id, 'splash_potion', 'inv', 0x0);
                if (_0x1d099f) {
                    if (ap_autobag && !_0x5524b8) openInventory();
                    if (!_0x5524b8) {
                        for (let _0x5228e6 = splash_slot === -0x1 ? 0x23 : 0x9; _0x5228e6 > -0x1; _0x5228e6--) {
                            if (splash_slot > -0x1) {
                                const _0x28671f = getInventory(self_id, _0x5228e6);
                                if (_0x28671f['namespace'] === 'minecraft:air') {
                                    女尝学琵琶(splash_slot, _0x5228e6, false);
                                    splash_slot = -0x1;
                                    break;
                                }
                            }
                            const _0x527df8 = getInventory(self_id, _0x5228e6);
                            if (splash_slot === -0x1 && _0x527df8['namespace'] === 'minecraft:splash_potion') splash_slot = _0x5228e6;
                        }
                    }
                    if (ap_autobag && _0x5524b8) setTimeout(() => closeInventory(), 0x64);
                }
            }
            if (SmartInv && (!da_change || item_count != lasttick_item_count) && (!da_bow || _0x331d40['pitch'] > 0x50) && (!da_chest || isOpenChest)) {
                let _0x323b54 = 0x1;
                let _0x4e5cbc = [0x0, 0x0, 0x0, 0x0];
                let _0x369165 = -0x1;
                let _0x269711 = [-0x1, -0x1, -0x1, -0x1];
                for (let _0x2786eb = 0x23; _0x2786eb > -0x1; _0x2786eb--) {
                    const _0x243428 = 迁谪意因为(self_id, _0x2786eb);
                    if (_0x243428 === 'other') continue;
                    const _0x406e8d = armorTypes['indexOf'](_0x243428);
                    if (_0x406e8d === -0x1 && !['sword', 'axe', 'pickaxe']['includes'](_0x243428)) continue;
                    if (da_weapon) {
                        const _0x18270c = 十六言命曰(self_id, _0x2786eb, da_texture, da_enchant);
                        if (_0x18270c > 0x14) continue;
                        if (['sword', 'axe', 'pickaxe']['includes'](_0x243428) && _0x18270c > _0x323b54) {
                            _0x323b54 = _0x18270c;
                            _0x369165 = _0x2786eb;
                        } else if (['sword', 'axe', 'pickaxe']['includes'](_0x243428) && _0x18270c <= _0x323b54) dropPlayerInventorySlot(self_id, _0x2786eb);
                    }
                    if (da_armor) {
                        const _0x14dfcd = 之凡六百一(self_id, _0x2786eb, da_texture, da_enchant);
                        if (_0x406e8d > -0x1 && _0x14dfcd > _0x4e5cbc[_0x406e8d]) {
                            _0x4e5cbc[_0x406e8d] = _0x14dfcd;
                            _0x269711[_0x406e8d] = _0x2786eb;
                        } else if (_0x406e8d > -0x1 && _0x14dfcd <= _0x4e5cbc[_0x406e8d]) dropPlayerInventorySlot(self_id, _0x2786eb);
                    }
                }
                if (da_move) {
                    if (_0x369165 > -0x1) 女尝学琵琶(_0x369165, SmartInvCfg['sword'], false, true);
                    for (let _0x22691a in _0x269711) {
                        let _0x7917f9 = _0x269711[_0x22691a];
                        if (_0x7917f9 > -0x1 && move_armor_slot < 0x0) 女尝学琵琶(_0x7917f9, SmartInvCfg[armorTypes[_0x22691a]], false, true);
                        if (_0x7917f9 > -0x1 && move_armor_slot > -0x1) 女尝学琵琶(_0x7917f9, move_armor_slot, false, true);
                    }
                }
                if (da_chest) isOpenChest = false;
            }
            if (AutoArmor) {
                let _0x37933d = 迁谪意因为(self_id, armor_slot);
                let _0x44ad02 = 之凡六百一(self_id, armor_slot);
                if (_0x37933d != 'other' && _0x44ad02 !== 0x0) {
                    for (let _0x2a6941 = 0x0; _0x2a6941 < aa_times; _0x2a6941++) {
                        if (_0x37933d === 'helmet' && _0x44ad02 > 之凡六百一(self_id, -0x2)) 罢悯然自叙(armor_slot);
                        if (_0x37933d === 'chestplate' && _0x44ad02 > 之凡六百一(self_id, -0x3)) 罢悯然自叙(armor_slot);
                        if (_0x37933d === 'leggings' && _0x44ad02 > 之凡六百一(self_id, -0x4)) 罢悯然自叙(armor_slot);
                        if (_0x37933d === 'boots' && _0x44ad02 > 之凡六百一(self_id, -0x5)) 罢悯然自叙(armor_slot);
                    }
                    if (armor_slot > (modelist['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
                }
            }
            if (Remover) {
                const _0x449533 = getEntityList();
                _0x449533['forEach'](_0x5ef29c => {
                    let _0x698823 = false;
                    if (rmer_entity) _0x698823 = !isPlayer(_0x5ef29c);
                    if (rmer_item) _0x698823 = getEntityNamespace(_0x5ef29c) == 'minecraft:item';
                    if (_0x698823) removeEntity(_0x5ef29c);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && last_tick_item['count'] > 0x0 && last_tick_item['namespace'] != 'minecraft:air') {
                for (let _0x1b0eb7 = 0x8; _0x1b0eb7 >= 0x0; _0x1b0eb7--) {
                    let _0x18c64b = getInventory(self_id, _0x1b0eb7);
                    if (_0x18c64b['namespace'] === last_tick_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x1b0eb7);
                        break;
                    }
                }
            }
            if (FreeCam && freecam_pos != {}) {
                if (fc_draw) {
                    for (let _0x37595f = 0x0; _0x37595f <= 0x12; _0x37595f += 0x2) 妇遂命酒使(0x37, freecam_pos['x'], freecam_pos['y'] - 1.53 + _0x37595f / 0xa, freecam_pos['z'], 0x1);
                    _0x20040c['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + freecam_pos['x']['toFixed'](0x2) + ', Y:' + freecam_pos['y']['toFixed'](0x2) + ', Z:' + freecam_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x20040c['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, freecam_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x5a16a3 = getEntityList();
                _0x5a16a3['forEach'](_0x4350c4 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x4350c4)) && target_list['length'] > 0x0) {
                        const _0x35e0e2 = getPos(target_list[0x0]);
                        let _0x35177f = 弦弦掩抑声(_0x35e0e2, getPos(_0x4350c4), 'yaw_pos');
                        let _0x49f1b9 = -弦弦掩抑声(_0x35e0e2, getPos(_0x4350c4), 'pitch_pos');
                        const _0x38e165 = getPos(_0x4350c4);
                        const _0x225dd7 = 忽闻水上琵(tt_speed, _0x38e165, {
                            'yaw': _0x35177f,
                            'pitch': _0x49f1b9
                        });
                        setEntityMotion(_0x4350c4, _0x225dd7['x'] - _0x38e165['x'], _0x225dd7['y'] - _0x38e165['y'], _0x225dd7['z'] - _0x38e165['z']);
                    }
                });
                if (target_list['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(target_list[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x44e304 = getEntityList();
                _0x44e304['forEach'](_0x15a6af => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x15a6af))) {
                        const _0x12415c = getPos(_0x15a6af);
                        if (typeof arrow_rot[_0x15a6af] === 'undefined') arrow_rot[_0x15a6af] = _0x331d40;
                        const _0x51ca60 = arrow_rot[_0x15a6af]['yaw'];
                        const _0x1defe9 = arrow_rot[_0x15a6af]['pitch'];
                        const _0xc06595 = 忽闻水上琵(0x1, _0x12415c, {
                            'yaw': _0x51ca60,
                            'pitch': _0x1defe9
                        });
                        setEntityMotion(_0x15a6af, _0xc06595['x'] - _0x12415c['x'], _0xc06595['y'] - _0x12415c['y'], _0xc06595['z'] - _0x12415c['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x24e4e8 = getEntityList();
                _0x24e4e8['forEach'](_0x2c5175 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x2c5175)) && Arrow_id === null && !ArrowList['includes'](Arrow_id)) Arrow_id = _0x2c5175;
                });
                if (Arrow_id != null) {
                    if (!ArrowList['includes'](Arrow_id)) ArrowList['push'](Arrow_id);
                    let _0x56ca93 = getPos(Arrow_id);
                    setCameraAnchor(_0x56ca93['x'] - self_pos['x'] + (av_x - 0xa), _0x56ca93['y'] - self_pos['y'] + (av_y - 0xa), -_0x56ca93['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(Arrow_id)) Arrow_id = null;
            }
            if (FPSReducer) {
                for (let _0x58bba7 = 0x0; _0x58bba7 < fpsr_rate * 0xa; _0x58bba7++) {
                    for (let _0x5c42ff = 0x0; _0x5c42ff < fpsr_rate * 0xa; _0x5c42ff++) getEntityName(_0x58bba7 + _0x5c42ff);
                }
            }
            if (ArrowParticle) {
                const _0x5a681e = getEntityList();
                _0x5a681e['forEach'](_0x24bff9 => {
                    if (getEntityNamespace(_0x24bff9) === 'minecraft:arrow') {
                        const _0x1ae65f = getPos(_0x24bff9);
                        妇遂命酒使(arp_type, _0x1ae65f['x'], _0x1ae65f['y'], _0x1ae65f['z'], 0x1);
                    }
                });
            }
            if (FightBot && target_list['length'] > 0x0) {
                let _0x387cd3 = getPos(target_list[0x0]);
                let _0x38dfb = {};
                if (fb_chest) {
                    const _0x1d24d4 = 面转轴拨弦(self_id);
                    for (let _0x5161c9 = -0x2; _0x5161c9 < 0x3; _0x5161c9++) {
                        for (let _0x412954 = -0x2; _0x412954 < 0x3; _0x412954++) {
                            for (let _0x31ad1f = -0x2; _0x31ad1f < 0x3; _0x31ad1f++) {
                                const _0x34d706 = getBlock(_0x1d24d4['x'] + _0x5161c9, _0x1d24d4['y'] + _0x412954, _0x1d24d4['z'] + _0x31ad1f);
                                const _0x50eb11 = 添酒回灯重([_0x1d24d4['x'] + _0x5161c9, _0x1d24d4['y'] + _0x412954, _0x1d24d4['z'] + _0x31ad1f]);
                                if (_0x34d706['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x50eb11)) {
                                    _0x38dfb = {
                                        'x': _0x1d24d4['x'] + _0x5161c9,
                                        'y': _0x1d24d4['y'] + _0x412954,
                                        'z': _0x1d24d4['z'] + _0x31ad1f
                                    };
                                    ca_chest_pos['push'](_0x50eb11);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x433504 = (_0x40cc05 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x2b1dbc = 马客在船举(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x2b1dbc) {
                    _0x387cd3 = 忽闻水上琵(_0x433504, _0x387cd3, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x1e5af4 = 弦弦掩抑声(self_id, _0x387cd3, 'yaw_pos');
                let _0x573d01 = 忽闻水上琵(_0x433504, getPos(self_id), {
                    'yaw': _0x1e5af4,
                    'pitch': 0x0
                });
                if (_0x23c1f3['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x5940d0 = 谁琵琶声停(self_id, target_list[0x0]);
                if (_0x5940d0 > fb_seek) {
                    if (_0x40cc05) setEntityMotion(self_id, _0x573d01['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x40cc05 ? fb_y : _0x1d6d54['y'], _0x573d01['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) rec_y = 0x0;
                    if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0) && _0x5940d0 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, target_list[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x40cc05) setEntityMotion(self_id, fb_randMove && _0x2b1dbc ? _0x573d01['x'] - self_pos['x'] : _0x1d6d54['x'], fb_combo && !getEntityIsGround(target_list[0x0]) ? fb_y : _0x1d6d54['y'], fb_randMove && _0x2b1dbc ? _0x573d01['z'] - self_pos['z'] : _0x1d6d54['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x38dfb) != '{}') {
                    let _0x2e769d = 弦弦掩抑声(self_id, _0x38dfb, 'yaw_pos');
                    let _0x526ae8 = 忽闻水上琵(_0x433504, getPos(self_id), {
                        'yaw': _0x2e769d,
                        'pitch': 0x0
                    });
                    if (_0x40cc05) setEntityMotion(self_id, _0x526ae8['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x40cc05 ? fb_y : _0x1d6d54['y'], _0x526ae8['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x8e52b6 = 0x0; _0x8e52b6 < rpc_repeat_times; _0x8e52b6++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x2c630d = 0x0; _0x2c630d < shift_num; _0x2c630d++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && target_list['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x3f3dca = 0x0;
                    target_list['forEach'](_0x5c7314 => {
                        let _0x5bf96a = 面转轴拨弦(_0x5c7314);
                        if (ac_excludeY && Math['abs'](_0x5bf96a['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x5bf96a['x'], _0x5bf96a['y'] + 0x1, _0x5bf96a['z']);
                        _0x20589d: for (let _0x13d704 = -0x1; _0x13d704 < 0x2; _0x13d704++) {
                            for (let _0x28809c = -0x2; _0x28809c < 0x0; _0x28809c++) {
                                for (let _0x2e741f = -0x1; _0x2e741f < 0x2; _0x2e741f++) {
                                    let _0x46a1cb = getBlock(_0x5bf96a['x'] + _0x13d704, _0x5bf96a['y'] + _0x2e741f, _0x5bf96a['z'] + _0x28809c);
                                    if (_0x3f3dca > ac_count) break _0x20589d;
                                    if ((_0x46a1cb['namespace'] === 'minecraft:bedrock' || _0x46a1cb['namespace'] === 'minecraft:obsidian') && _0x3f3dca < ac_count) {
                                        buildBlock(self_id, _0x5bf96a['x'] + _0x13d704, _0x5bf96a['y'] + _0x2e741f, _0x5bf96a['z'] + _0x28809c, 0x1);
                                        _0x3f3dca += 0x1;
                                    }
                                }
                            }
                        }
                    });
                } else _0x20040c['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x376ac5 = getEntityList();
                _0x376ac5['forEach'](_0x19a78b => {
                    if (!才年长色衰(_0x19a78b)) return;
                    const _0x5af1fe = getPos(_0x19a78b);
                    if (getEntityTypeId(_0x19a78b) !== 0x47 || 声暗问弹者(_0x19a78b, target_list[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x4ce493 = 0x0; _0x4ce493 < 0x9; _0x4ce493++) {
                            const _0x5a5cf3 = getInventory(self_id, _0x4ce493);
                            if (_0x5a5cf3['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x4ce493);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0xd84d72['x'] + _0x5af1fe['x']) / 0x2, (_0xd84d72['y'] + _0x5af1fe['y']) / 0x2, (_0xd84d72['z'] + _0x5af1fe['z']) / 0x2, 0x0);
                        江头夜送客(_0x19a78b, Swing);
                    }
                });
            }
            if (AutoBomb && target_list['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    target_list['forEach'](_0x167572 => {
                        let _0x14efcd = 面转轴拨弦(_0x167572);
                        let _0x3a803e = getBlock(_0x14efcd['x'], _0x14efcd['y'] + 0x2, _0x14efcd['z']);
                        if (_0x3a803e['namespace'] === 'minecraft:air') buildBlock(self_id, _0x14efcd['x'], _0x14efcd['y'] + 0x2, _0x14efcd['z'], 0x0);
                        _0x3a803e = getBlock(_0x14efcd['x'], _0x14efcd['y'] + 0x2, _0x14efcd['z']);
                        if (_0x3a803e['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x14efcd['x'], _0x14efcd['y'] + 0x2, _0x14efcd['z'], 0x0);
                    });
                } else _0x20040c['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && target_list['length'] > 0x0) {
                target_list['forEach'](_0x4f8b81 => {
                    const _0x8c9206 = 面转轴拨弦(_0x4f8b81);
                    let _0x294f13 = [
                        [_0x8c9206['x'], _0x8c9206['y'] + 0x2, _0x8c9206['z']],
                        [_0x8c9206['x'] + 0x1, _0x8c9206['y'], _0x8c9206['z']],
                        [_0x8c9206['x'] - 0x1, _0x8c9206['y'], _0x8c9206['z']],
                        [_0x8c9206['x'], _0x8c9206['y'], _0x8c9206['z'] + 0x1],
                        [_0x8c9206['x'], _0x8c9206['y'], _0x8c9206['z'] - 0x1],
                        [_0x8c9206['x'] + 0x1, _0x8c9206['y'] + 0x1, _0x8c9206['z']],
                        [_0x8c9206['x'] - 0x1, _0x8c9206['y'] + 0x1, _0x8c9206['z']],
                        [_0x8c9206['x'], _0x8c9206['y'] + 0x1, _0x8c9206['z'] + 0x1],
                        [_0x8c9206['x'], _0x8c9206['y'] + 0x1, _0x8c9206['z'] - 0x1]
                    ];
                    for (pos of _0x294f13) {
                        let _0x2dc31d = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x2dc31d['namespace'] === 'minecraft:air' && modelist['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x2dc31d['namespace'] != 'minecraft:air' && modelist['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && target_list['length'] > 0x0) {
                let _0x1800a8 = [];
                let _0x9cba00 = false;
                random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? target_list['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                target_list['forEach'](_0x437905 => {
                    let _0x3b2be1 = getPos(_0x437905);
                    if (!((声暗问弹者(self_id, _0x437905) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x437905, ka_fov, 0x0) && 惨将别别时(self_pos, _0x3b2be1, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x1d6d54['y'] < -0.42))) return;
                    _0x1800a8['push'](_0x437905);
                    KillAura_d_1[_0x437905] = Date['now']();
                    if (typeof KillAura_d_2[_0x437905] !== 'undefined' && KillAura_d_1[_0x437905] - KillAura_d_2[_0x437905] < 0x0) return;
                    _0x9cba00 = true;
                    for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x437905, Swing);
                    KillAura_d_2[_0x437905] = KillAura_d_1[_0x437905] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x9cba00 ? 0x1 : 0x0);
                });
                if (_0x1800a8['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x1800a8['length'] + '个目标' : 添酒回灯重(_0x1800a8['map'](_0x3591fa => getEntityName(_0x3591fa))), '§r'));
                const _0x573612 = _0x1800a8['length'] * random_num * ka_times;
                if (ka_show) _0x20040c['push'](归客不发寻(0x1, 'APS', _0x573612 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x1d6d54['y'] < -0.074 && !_0x40cc05) setMotion(_0x1d6d54['x'], -sd_speed / 0xf, _0x1d6d54['z']);
            if (SurroundParticle && (isMoving || !srp_move)) {
                surround_particle_yaw = surround_particle_yaw + srp_speed * 0x3;
                if (surround_particle_yaw > 0xb4) surround_particle_yaw = -0xb4;
                let _0x4db95b = 忽闻水上琵(srp_len, self_pos, {
                    'yaw': surround_particle_yaw,
                    'pitch': 0x0
                });
                妇遂命酒使(srp_type, _0x4db95b['x'], _0x4db95b['y'] - 1.8 + srp_y, _0x4db95b['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x208b7f = motion_list['shift']();
                setMotion(_0x208b7f[0x0], _0x208b7f[0x1], _0x208b7f[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                rec_y = !sca_keep || rec_y === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : rec_y;
                if (sca_count) createText(0x69, 0x13, self_item['name'] + ' x' + self_item['count'], sca_count, 'sca_count');
                const _0x11dd71 = 酒欲饮无管(_0x1d6d54, self_pos, 0xa);
                var _0x51e6c8 = sca_move || isMoving ? 弦弦掩抑声(_0x11dd71, self_id, 'yaw_pos') : _0x331d40['yaw'];
                var _0x5d42f8 = sca_move || isMoving ? 弦弦掩抑声(_0x11dd71, self_id, 'pitch_pos') : _0x331d40['pitch'];
                if (!sca_acc) _0x51e6c8 = angleRound(_0x51e6c8, sca_prec);
                if (!sca_acc) _0x5d42f8 = angleRound(_0x5d42f8, sca_prec);
                if (sca_auto) {
                    let _0x25239b = {};
                    let _0x5ff20b = Infinity;
                    for (let _0x4e2042 = -0x3; _0x4e2042 <= 0x3; _0x4e2042++) {
                        for (let _0x4784e9 = -0x3; _0x4784e9 <= -0x1; _0x4784e9++) {
                            for (let _0x1ea7a6 = -0x3; _0x1ea7a6 <= 0x3; _0x1ea7a6++) {
                                let _0x48c6ab = {
                                    'x': _0x4e2042 + _0xd84d72['x'],
                                    'y': Math['floor'](rec_y) - 0x1 + _0x4784e9,
                                    'z': _0x1ea7a6 + _0xd84d72['z']
                                };
                                const _0x481507 = getBlock(_0x48c6ab['x'], _0x48c6ab['y'], _0x48c6ab['z']);
                                if (_0x481507['namespace'] == 'minecraft:air') continue;
                                let _0x42ca80 = Math['sqrt'](_0x4e2042 * _0x4e2042 - _0x4784e9 * _0x4784e9 + _0x1ea7a6 * _0x1ea7a6);
                                if (_0x42ca80 < _0x5ff20b) {
                                    _0x5ff20b = _0x42ca80;
                                    _0x25239b = _0x48c6ab;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x25239b) != '{}') {
                        let _0x7b07c5 = 眉信手续续(_0x25239b, _0xd84d72, 0x1, true);
                        _0x7b07c5['forEach'](_0x2bd4e7 => {
                            if (sca_surface) 事今漂沦憔(Math['round'](_0x2bd4e7['x']), Math['round'](rec_y - 0x1), Math['round'](_0x2bd4e7['z']));
                            else buildBlock(self_id, Math['round'](_0x2bd4e7['x']), Math['round'](rec_y - 0x1), Math['round'](_0x2bd4e7['z']), 0x1);
                        });
                    }
                }
                for (let _0x5831df = 0x0; _0x5831df < sca_len; _0x5831df++) {
                    const _0x4982a8 = 忽闻水上琵(_0x5831df, self_pos, {
                        'yaw': _0x51e6c8,
                        'pitch': sca_y ? _0x5d42f8 : 0x0
                    });
                    let _0x15b400 = {
                        'x': Math['floor'](_0x4982a8['x']),
                        'y': Math['floor'](rec_y) - 0x1,
                        'z': Math['floor'](_0x4982a8['z'])
                    };
                    let _0x36c932 = getBlock(_0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x36c932['namespace'])) continue;
                    if (sca_fake) setBlock(_0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 事今漂沦憔(_0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z']);
                    else buildBlock(self_id, _0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z'], 0x1);
                    if (sca_up) {
                        const _0x1a40e9 = getBlock(_0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x1a40e9['namespace'])) buildBlock(self_id, _0x15b400['x'], Math['floor'](_0x15b400['y']), _0x15b400['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x36ceda = 0x0; _0x36ceda < 0x9; _0x36ceda++) {
                    const _0x16dea5 = getInventory(self_id, _0x36ceda);
                    if (_0x16dea5['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x36ceda);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, Swing);
            if (TargetHud) {
                if (modelist['th_select_mode'] === 0x0) th_target = target_list[0x0];
                if (th_target) {
                    let _0x3931c6 = [];
                    const _0x26c028 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x469d7b = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x23de3c = 面转轴拨弦(th_target);
                    if (th_name) _0x3931c6['push'](getEntityName(th_target));
                    if (th_carry) _0x3931c6['push'](_0x26c028['name'] + ' x' + _0x26c028['count']);
                    if (th_dist) _0x3931c6['push']('距离: ' + _0x469d7b + 'm');
                    if (th_health) _0x3931c6['push']('血量: ' + 无限事轻拢(th_target, modelist['th_health_mode']));
                    if (th_pos) _0x3931c6['push']('[' + _0x23de3c['x'] + ', ' + _0x23de3c['y'] + ', ' + _0x23de3c['z'] + ']');
                    createText(0x69 + th_x, 0x13 + th_y / 0xa, _0x3931c6['join']('\n'), true, 'TargetHud');
                }
            }
            if (AntiVoid) {
                if (modelist['av_mode'] === 0x0) {
                    if (!lagback_run && !_0x40cc05 && _0x1d6d54['y'] > -av_minY) lagback_pos['push'](_0xd84d72);
                    if (!lagback_run && _0x40cc05) lagback_pos = [];
                    if (!lagback_run && _0x1d6d54['y'] <= -av_minY) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0x246789 = lagback_pos.pop();
                            setPos(_0x246789['x'], _0x246789['y'], _0x246789['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else lagback_run = false;
                    }
                }
                if (_0x1d6d54['y'] <= -av_minY && modelist['av_mode'] === 0x1) {
                    const _0x4f4108 = {
                        'rot': _0x331d40,
                        'yHeadRot': 0x0
                    };
                    const _0x1f23da = {
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
                        ..._0x4f4108
                    };
                    const _0x2c2c4d = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x4f4108
                    };
                    sendPlayerAuthInput(_0x1f23da);
                    sendMovePlayer(_0x2c2c4d);
                }
                if (modelist['av_mode'] === 0x2) {
                    if (!lagback_run && _0x40cc05 && _0x1d6d54['y'] > -av_minY) lagback_pos[0x0] = self_pos;
                    if (!lagback_run && _0x1d6d54['y'] <= -av_minY) lagback_run = true;
                    if (lagback_run) {
                        if (lagback_pos['length'] > 0x0) {
                            let _0x205571 = lagback_pos[0x0];
                            setPos(_0x205571['x'], _0x205571['y'], _0x205571['z']);
                            lagback_pos = [];
                        } else lagback_run = false;
                    }
                }
            }
            if (GodMode && (!gm_move || isMoving) && (!gm_ground || _0x40cc05)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x46b22d = 0x0; _0x46b22d < gm_count; _0x46b22d++) {
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
                            'rot': _0x331d40,
                            'yHeadRot': 0x0
                        });
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x23a12a = 0x0; _0x23a12a < gm_count; _0x23a12a++) {
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
                                'rot': _0x331d40,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && target_list['length'] > 0x0 && 谁琵琶声停(self_id, target_list[0x0]) < kd_distance && (_0x40cc05 || !kd_only_ground)) {
                const _0x2dd64f = 弦弦掩抑声(getPos(target_list[0x0]), self_id, 'yaw_pos');
                const _0x4a347a = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x2dd64f,
                    'pitch': _0x331d40['pitch']
                });
                if (kd_anti) silentTP(_0x4a347a['x'] * 0x2, _0x4a347a['y'] * 0x2, _0x4a347a['z'] * 0x2);
                else setMotion(_0x4a347a['x'] - self_pos['x'], _0x1d6d54['y'], _0x4a347a['z'] - self_pos['z']);
            }
            if (AirJump && _0x1d6d54['y'] < -0.42) {
                let _0xb1e0fe = 酒欲饮无管(_0x1d6d54, self_pos, 瑟瑟主人下(self_id));
                let _0x8cd920 = 弦弦掩抑声(_0xb1e0fe, self_id, 'yaw_pos');
                let _0x565cc0 = 忽闻水上琵(aj_speed / 0xa, self_pos, {
                    'yaw': _0x8cd920,
                    'pitch': 0x0
                });
                setMotion(_0x565cc0['x'] - self_pos['x'], aj_height / 0x64, _0x565cc0['z'] - self_pos['z']);
            }
            if (drop_list['length'] > 0x0) {
                for (let _0x4a0449 = 0x0; _0x4a0449 < di_speed; _0x4a0449++) {
                    let _0x225710 = drop_list.pop();
                    dropPlayerInventorySlot(self_id, _0x225710);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) > tra_range) {
                let _0x277c57 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                let _0x55a08c = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
                let _0x14cc68 = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x277c57,
                    'pitch': -_0x55a08c
                });
                setPos(_0x14cc68['x'], _0x14cc68['y'], _0x14cc68['z']);
            }
            if (LineParticle && target_list['length'] > 0x0) {
                let _0x51740d = getPos(self_id);
                _0x51740d['y'] += lp_offset / 0xa;
                target_list['forEach'](_0x39bf3c => {
                    let _0x33f064 = getPos(_0x39bf3c);
                    _0x33f064['y'] += 0.765;
                    let _0x719d1c = 弦弦掩抑声(_0x51740d, _0x33f064, 'yaw_pos');
                    let _0x273306 = 弦弦掩抑声(_0x51740d, _0x33f064, 'pitch_pos');
                    for (let _0x503dd0 = 0x0; _0x503dd0 < 声暗问弹者(_0x39bf3c, self_id); _0x503dd0 += (0xb - lp_size) / 0x5) {
                        let _0x2d2a74 = 忽闻水上琵(-_0x503dd0, getPos(self_id), {
                            'yaw': _0x719d1c,
                            'pitch': -_0x273306
                        });
                        妇遂命酒使(lp_type, _0x2d2a74['x'], _0x2d2a74['y'] - 1.53 + lp_offset / 0xa, _0x2d2a74['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x22e70f = spm_text;
                const _0x16b029 = 'abcdef';
                if (spm_gradual) _0x22e70f = 送客湓浦口(_0x22e70f);
                if (Spammer_l) _0x22e70f = '§l' + _0x22e70f;
                if (Spammer_k) _0x22e70f = '§k' + _0x22e70f;
                if (Spammer_o) _0x22e70f = '§o' + _0x22e70f;
                if (spm_rainbow) _0x22e70f = '§' + _0x16b029[马客在船举(0x0, _0x16b029['length'] - 0x1)] + _0x22e70f;
                if (spm_file) {
                    let _0x4033b8 = 抱琵琶半遮(NoveXare_path + '/Spammer.txt')['split']('\n');
                    _0x22e70f = _0x4033b8[马客在船举(0x0, _0x4033b8['length'] - 0x1)];
                }
                if (spm_attack && target_list['length'] > 0x0) _0x22e70f = ' §e@' + target_list['map'](_0x1e98c4 => getEntityName(_0x1e98c4))['join'](',') + ' §r' + _0x22e70f;
                for (let _0x25e65c = 0x0; _0x25e65c < spm_count; _0x25e65c++) {
                    let _0x4b6b36 = 慢捻抹复挑(0x6);
                    sendChatMessage(spm_random ? _0x22e70f + '§r || ' + _0x4b6b36 : _0x22e70f);
                }
            }
            if (HitBox && target_list['length'] > 0x0) target_list['forEach'](_0x192909 => setEntitySize(_0x192909, hb_hor, hb_y));
            if (Sucker && target_list['length'] > 0x0) {
                target_list['forEach'](_0x3b4e47 => {
                    const _0x2f6379 = 忽闻水上琵(suck_range, self_pos, _0x331d40);
                    setRealPos(_0x3b4e47, _0x2f6379['x'], _0x2f6379['y'], _0x2f6379['z']);
                });
            }
            if (Velocity && isMoving) {
                let _0x314abe = _0x331d40['yaw'];
                if (modelist['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x51a51d = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0x314abe = 弦弦掩抑声(self_id, _0x51a51d, 'yaw_pos');
                }
                let _0x6190bf = 忽闻水上琵((modelist['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x314abe,
                    'pitch': 0x0
                });
                setMotion(_0x6190bf['x'] - self_pos['x'], vec_bhop && (_0x40cc05 || bhop_airjump) && (!bhop_airjump || _0x1d6d54['y'] < -0.42) ? bhop_heigh : _0x1d6d54['y'], _0x6190bf['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x5b2265 = getCameraRotation();
                const _0xc555a2 = 忽闻水上琵(fb_speed / 0xa, self_pos, {
                    'yaw': _0x5b2265['yaw'] > 0x0 ? 0xb4 - _0x5b2265['yaw'] : -0xb4 - _0x5b2265['yaw'],
                    'pitch': -_0x5b2265['pitch']
                });
                if (!_0x40cc05 && isMoving) setMotion(_0xc555a2['x'] - self_pos['x'], 0x0, _0xc555a2['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                target_list['forEach'](_0x2be02a => {
                    const _0x527f70 = getPos(_0x2be02a);
                    妇遂命酒使(tp_type, _0x527f70['x'], _0x527f70['y'] + 0.3, _0x527f70['z'], tp_size);
                });
            }
            if (InvCleaner && modelist['ic_mode'] < 0x2 && (item_count != lasttick_item_count || cleaner_slot != 0x23 || !ic_change) && ticks % ic_delay === 0x0 && (!ic_bow || _0x331d40['pitch'] > 0x50) && (!ic_chest || isOpenChest)) {
                let _0x5d7662 = {};
                for (let _0x308595 = 0x0; _0x308595 < ic_delay; _0x308595++) {
                    let _0x24c99c = cleaner_slot - _0x308595;
                    const _0x458d71 = getInventory(self_id, _0x24c99c);
                    if (_0x458d71['count'] === 0x0) continue;
                    let _0x35e74b = false;
                    let _0x2269e9 = clear_config[_0x458d71['namespace']];
                    if (typeof _0x5d7662[_0x458d71['namespace']] === 'undefined') _0x5d7662[_0x458d71['namespace']] = 安感斯人言(-0x2, _0x458d71['namespace']);
                    let _0xc9cf60 = _0x5d7662[_0x458d71['namespace']];
                    if (typeof _0x2269e9 !== 'undefined') _0x35e74b = (_0xc9cf60 > _0x2269e9['max_num'] || _0x2269e9['max_num'] === -0x1) && (_0x458d71['aux'] === _0x2269e9['aux'] || _0x2269e9['aux'] === 'any');
                    if (modelist['ic_mode'] === 0x1 && typeof _0x2269e9 === 'undefined') _0x35e74b = true;
                    if (ic_move && !_0x35e74b && typeof _0x2269e9 !== 'undefined' && _0x2269e9['slot'] !== 'undefined') 女尝学琵琶(_0x24c99c, _0x2269e9['slot'], false, true);
                    if (_0x35e74b) {
                        if (trash_slot > -0x1 && _0x24c99c > 0x8) 女尝学琵琶(_0x24c99c, trash_slot, false, true);
                        dropPlayerInventorySlot(self_id, _0x24c99c);
                    }
                }
                if (cleaner_slot > 0x0) cleaner_slot -= ic_delay;
                else cleaner_slot = 0x23;
                if (ic_chest) isOpenChest = false;
            }
            if (SafeWalk && isMoving) {
                const _0x51da90 = getEntityRot(self_id)['yaw'];
                const _0x1217be = 忽闻水上琵(0.3, _0xd84d72, {
                    'yaw': _0x51da90,
                    'pitch': 0x0
                });
                const _0x23a653 = getBlock(_0x1217be['x'], _0x1217be['y'] - 0x1, _0x1217be['z']);
                if (_0x23a653['namespace'] === 'minecraft:air' && _0x40cc05) setMotion((-_0x1217be['x'] + self_pos['x']) / 0x8, _0x1d6d54['y'], (-_0x1217be['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && isMoving) {
                const _0x4428f4 = getEntityRot(self_id)['yaw'];
                const _0x4152b0 = 忽闻水上琵(0.5, _0xd84d72, {
                    'yaw': _0x4428f4,
                    'pitch': 0x0
                });
                const _0x38023e = getBlock(_0x4152b0['x'], _0x4152b0['y'], _0x4152b0['z']);
                if (_0x38023e['namespace'] != 'minecraft:air') setMotion(_0x1d6d54['x'], sp_speed / 0xf, _0x1d6d54['z']);
            }
            if (Fly && (!fly_only_fly || isMoving)) {
                if ((!_0x40cc05 || !fly_block) && (!fly_run || isMoving)) {
                    const _0x469ba6 = fly_up_down ? fly_ud : 0x0;
                    let _0x30ddca = 酒欲饮无管(_0x1d6d54, self_pos, fly_speed * 2.5);
                    if (modelist['fly_mode'] === 0x0) {
                        if (!fly_includeY) setPos(_0x30ddca['x'], self_pos['y'] + _0x469ba6, _0x30ddca['z']);
                        if (fly_includeY) setPos(self_pos['x'], _0x30ddca['y'], self_pos['z']);
                        if (fly_mot) setMotion(0x0, -0.01, 0x0);
                    }
                    if (modelist['fly_mode'] === 0x1) setMotion(_0x30ddca['x'] - self_pos['x'], _0x30ddca['y'] - self_pos['y'] + _0x469ba6, _0x30ddca['z'] - self_pos['z']);
                    if (fly_AuthInput_packet) silentTP(_0x30ddca['x'], _0x30ddca['y'], _0x30ddca['z']);
                    if (fly_move_packet) sendMovePlayer({
                        'id': self_id,
                        'pos': {
                            'x': _0x30ddca['x'],
                            'y': _0x30ddca['y'],
                            'z': _0x30ddca['z']
                        },
                        'mode': 0x1,
                        'ground': true,
                        'rot': {
                            'pitch': _0x331d40['pitch'],
                            'yaw': _0x331d40['yaw']
                        },
                        'yHeadRot': getEntityBodyRot(self_id)
                    });
                    fly_ud = fly_ud > 0x0 ? -fly_set_ud / 0xa : fly_set_ud / 0xa;
                }
            }
            if (ActivitySender && isMoving) {
                let _0x293b7e = 酒欲饮无管(_0x1d6d54, self_pos, 0x1);
                const _0x3d7c12 = 弦弦掩抑声(self_id, _0x293b7e, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x3d7c12) + '°方向移动');
            }
            if (FakeWater) setBlock(_0xd84d72['x'], _0xd84d72['y'], _0xd84d72['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x1d6d54['x'], -0x186a0, _0x1d6d54['z']);
            if (Hover) setMotion(_0x1d6d54['x'], 0.05, _0x1d6d54['z']);
            if (Rider && target_list['length'] > 0x0) {
                let _0x44cc58 = getPos(target_list[0x0]);
                const _0x3d285a = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0x44cc58['x'] + _0x3d285a, _0x44cc58['y'] + rid_y + 0x1, _0x44cc58['z'] + _0x3d285a);
                _0x20040c['push'](归客不发寻(0x1, 'Rider', getEntityName(target_list[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x20e3eb = getCameraRotation();
                if (isMoving || !spr_move) {
                    let _0x165638 = 忽闻水上琵(modelist['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x20e3eb['yaw'] > 0x0 ? 0xb4 - _0x20e3eb['yaw'] : -0xb4 - _0x20e3eb['yaw'],
                        'pitch': -_0x20e3eb['pitch']
                    });
                    if (spr_hor) _0x165638['y'] = self_pos['y'];
                    const _0x35e199 = getBlock(_0x165638['x'], _0x165638['y'], _0x165638['z']);
                    if (_0x35e199['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modelist['sprint_mode'] === 0x0) {
                            setPos(_0x165638['x'], _0x165638['y'], _0x165638['z']);
                            setEntityMotion(self_id, _0x1d6d54['x'], -1e-7, _0x1d6d54['z']);
                        }
                        if (modelist['sprint_mode'] === 0x1) setMotion(_0x165638['x'] - self_pos['x'], _0x165638['y'] - self_pos['y'], _0x165638['z'] - self_pos['z']);
                        if (spr_auth) silentTP(_0x165638['x'], _0x165638['y'], _0x165638['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x165638['x'],
                                'y': _0x165638['y'],
                                'z': _0x165638['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x331d40['pitch'],
                                'yaw': _0x331d40['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x6aa559 = Math['round'](-cs_count / 0x2); _0x6aa559 <= Math['round'](cs_count / 0x2); _0x6aa559++) {
                    const _0x39aac = 0xa ** _0x6aa559;
                    if (modelist['cs_mode'] === 0x0) buildBlock(self_id, _0xd84d72['x'], _0xd84d72['y'], _0xd84d72['z'], _0x39aac ** 0x2);
                    if (modelist['cs_mode'] === 0x1) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                    if (modelist['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x64));
                    if (modelist['cs_mode'] === 0x4) sendSound(_0x39aac, _0x39aac, _0x39aac, _0x39aac, _0x6aa559);
                    if (modelist['cs_mode'] === 0x5) getEntityList()['forEach'](_0x3840bc => 江头夜送客(_0x3840bc, false));
                }
            }
            if (KickAura && target_list['length'] > 0x0) {
                let _0x2cdf95 = [];
                if (ka_player) _0x2cdf95['concat'](_0x2c9d14['map'](_0xc5b117 => _0xc5b117['id']));
                if (ka_target) _0x2cdf95['concat'](target_list);
                if (modelist['ka_mode'] == 0x0) _0x2cdf95['forEach'](_0x2c965d => {
                    if (_0x2c965d == self_id) return;
                    const _0x393e = getEntityName(_0x2c965d);
                    let _0xf2dc6 = _0x393e['indexOf'](']') - 0x2;
                    let _0x1fcf11 = ['b', 'c', 'e', 'a'];
                    for (let _0x4810f7 of _0x1fcf11) {
                        if (_0x393e['indexOf']('·§' + _0x4810f7) != -0x1) {
                            _0xf2dc6 = _0x393e['indexOf']('·§' + _0x4810f7);
                            break;
                        }
                    }
                    let _0x16fe01 = _0xf2dc6 === -0x1 ? _0x393e : _0x393e['slice'](_0xf2dc6 + 0x3, _0x393e['length']);
                    if (_0x16fe01['includes']('【') && _0x16fe01['includes']('】')) _0x16fe01 = 琵琶行浔阳(_0x16fe01, '【', '】');
                    for (let _0x180929 = 0x0; _0x180929 < ka_count; _0x180929++) executeCommand('/tell "' + _0x16fe01 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modelist['ka_mode'] == 0x1) {
                    for (let _0x5a59a1 = 0x0; _0x5a59a1 < ka_count; _0x5a59a1++) executeCommand('/tell @a[' + _0x2cdf95['map'](_0x1959a6 => 'name="' + getEntityName(_0x1959a6) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x1d6d54['y'] < -as_minY && !_0x40cc05) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x11bb75 = 0x0; _0x11bb75 < 0x9; _0x11bb75++) {
                        const _0x3728d2 = getInventory(self_id, _0x11bb75);
                        if (_0x3728d2['isBlock'] || as_water && _0x3728d2['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x11bb75);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x4937c9 of 眉信手续续(_0xd84d72, {
                            'x': _0xd84d72['x'],
                            'y': _0xd84d72['y'] - as_minY * 0x5,
                            'z': _0xd84d72['z']
                        }, 0x1, true)) {
                        const _0x3d7e95 = getBlock(_0x4937c9['x'], _0x4937c9['y'], _0x4937c9['z']);
                        if (_0x3d7e95['namespace'] != 'minecraft:air') continue;
                        const _0x331e64 = getBlock(_0x4937c9['x'], _0x4937c9['y'] - 0x1, _0x4937c9['z']);
                        if (_0x331e64['namespace'] === 'minecraft:air' || _0x331e64['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x4937c9['x'], _0x4937c9['y'], _0x4937c9['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket') {
                    if (as_fake) callModule(0x25, '{"value":true}');
                    buildBlock(self_id, _0xd84d72['x'], _0xd84d72['y'] - as_minY * 3.1, _0xd84d72['z'], 0x0);
                    if (as_fake) callModule(0x25, '{"value":false}');
                }
                if (as_near) {
                    let _0x20877f = {};
                    let _0x627db1 = Infinity;
                    for (let _0x20acda = -0x5; _0x20acda <= 0x5; _0x20acda++) {
                        for (let _0x5553a9 = -0x1; _0x5553a9 <= 0x0; _0x5553a9++) {
                            for (let _0x3dd35d = -0x5; _0x3dd35d <= 0x5; _0x3dd35d++) {
                                let _0x44adaf = Math['sqrt'](_0x20acda * _0x20acda + _0x3dd35d * _0x3dd35d + _0x5553a9 * _0x5553a9);
                                let _0x3d6968 = {
                                    'x': _0x20acda + _0xd84d72['x'],
                                    'y': _0x5553a9 + _0xd84d72['y'],
                                    'z': _0x3dd35d + _0xd84d72['z']
                                };
                                const _0xa2102c = getBlock(_0x3d6968['x'], _0x3d6968['y'], _0x3d6968['z']);
                                if (_0xa2102c['namespace'] === 'minecraft:air') continue;
                                if (_0x44adaf < _0x627db1) {
                                    _0x627db1 = _0x44adaf;
                                    _0x20877f = _0x3d6968;
                                }
                            }
                        }
                    }
                    if (_0x20877f != {}) {
                        let _0x21583f = {
                            'x': _0xd84d72['x'],
                            'y': _0xd84d72['y'] - 0x1 + _0x1d6d54['y'] * 0x3,
                            'z': _0xd84d72['z']
                        };
                        let _0x57eccf = 眉信手续续(_0x20877f, _0x21583f, 0.8, true);
                        _0x57eccf['forEach'](_0x1571ef => {
                            const _0x3f0001 = getBlock(_0x1571ef['x'], _0x1571ef['y'], _0x1571ef['z']);
                            if (_0x3f0001['namespace'] === 'minecraft:air') 事今漂沦憔(Math['floor'](_0x1571ef['x']), Math['floor'](_0x1571ef['y']), Math['floor'](_0x1571ef['z']));
                        });
                    }
                }
            }
            if (AssAssInate && target_list['length'] > 0x0) {
                let _0x1d66e7 = getEntityRot(target_list[0x0]);
                let _0x1bc17d = getPos(target_list[0x0]);
                if (LockBehind_h > aai_max) isReverse = true;
                else if (LockBehind_h < aai_min) isReverse = false;
                LockBehind_h += (isReverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x43afd7 = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
                LockBehind_yaw = Surround ? LockBehind_yaw + _0x43afd7 : _0x1d66e7['yaw'];
                if (Surround && LockBehind_yaw > 0xb4) LockBehind_yaw = -0xb4;
                let _0x57121c = 忽闻水上琵(-aai_len, _0x1bc17d, {
                    'yaw': LockBehind_yaw,
                    'pitch': 0x0
                });
                if (modelist['sur_mode'] === 0x0) setPos(_0x57121c['x'], _0x1bc17d['y'] + 1.83 + LockBehind_h, _0x57121c['z']);
                if (modelist['sur_mode'] === 0x1) 二年恬然自(_0x57121c['x'], _0x1bc17d['y'] + 1.83 + LockBehind_h, _0x57121c['z']);
                _0x20040c['push'](归客不发寻(0x1, 'LockBack', getEntityName(target_list[0x0]), '§r'));
            }
            if (SoundPlayer || sound_data['length'] > 0x0) {
                let _0x4e438b = [];
                if (sp_target) _0x4e438b = target_list;
                if (sp_all) _0x4e438b = getPlayerList();
                if (sp_entity) _0x4e438b = getEntityList();
                if (play_pos_list['length'] > 0x0) _0x4e438b = play_pos_list;
                let _0x39163d = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                SoundPlayer_yaw += 0x14;
                if (SoundPlayer_yaw > 0xb4) SoundPlayer_yaw = -0xb4;
                for (let _0x1b4340 = 0x0; _0x1b4340 < sp_vec; _0x1b4340++) {
                    if (sound_data['length'] > 0x0) _0x39163d = sound_data['shift']()['sounds'];
                    if (_0x39163d['length'] > 0x0) {
                        _0x11463f: for (let _0xb51433 of _0x39163d) {
                            let _0x3002f3 = _0xb51433['sound'];
                            let _0x54b34c = _0xb51433['level'];
                            if (sp_large) {
                                const _0x588051 = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x243583 = -_0x588051; _0x243583 <= _0x588051; _0x243583 += sp_space) {
                                    for (let _0x2ba245 = -_0x588051; _0x2ba245 <= _0x588051; _0x2ba245 += sp_space) {
                                        sendSound(Number(_0x3002f3), self_pos['x'] + _0x243583, self_pos['y'] + sp_y, self_pos['z'] + _0x2ba245, Number(_0x54b34c));
                                    }
                                }
                                continue _0x11463f;
                            }
                            _0x4e438b['forEach'](_0x4d9490 => {
                                if (typeof _0x4d9490 != 'string')
                                    for (let _0x4cb09c = 0x0; _0x4cb09c < sp_count; _0x4cb09c++) sendSound(Number(_0x3002f3), _0x4d9490['x'], _0x4d9490['y'] + sp_y, _0x4d9490['z'], Number(_0x54b34c));
                                else {
                                    if (_0x4d9490 === self_id && sp_exclude) return;
                                    const _0x15059f = getPos(_0x4d9490);
                                    let _0x246b8d = 忽闻水上琵(sp_distance, _0x15059f, {
                                        'yaw': SoundPlayer_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x4c90e1 = 0x0; _0x4c90e1 < sp_count; _0x4c90e1++) sendSound(Number(_0x3002f3), _0x246b8d['x'], _0x246b8d['y'] + sp_y, _0x246b8d['z'], Number(_0x54b34c));
                                }
                            });
                        }
                    }
                }
                if (sound_data['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, '进度', '剩余:' + sound_data['length'] + '条', '§r'));
            }
            if (sp_loop && SoundPlayer && sound_file != null && sound_data['length'] === 0x0) {
                sound_data = JSON['parse'](sound_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sound_data.length + "条音频数据', '§r');
            }
            if (_0x23c1f3['current'] < 0x6) _0x20040c['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x23c1f3['current']) <= ad_min) {
                const _0x5ef06d = modelist['ad_mode'];
                if (_0x5ef06d === 0x2) removeEntity(self_id);
                if (_0x5ef06d === 0x0 || _0x5ef06d === 0x1) executeCommand(_0x5ef06d === 0x0 ? '/hub' : '/again');
                if (_0x5ef06d === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x331d40['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x5ef06d === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x5ef06d === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x5ef06d === 0x6) leaveWorld();
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
                const _0x1430fe = getBlock(_0xd84d72['x'], _0xd84d72['y'] - 0x1, _0xd84d72['z']);
                if (_0x1430fe['namespace'] === 'minecraft:flowing_water' || _0x1430fe['namespace'] === 'minecraft:water' || _0x1430fe['namespace'] === 'minecraft:flowing_lava' || _0x1430fe['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x1d6d54['x'], 0x0, _0x1d6d54['z']);
            }
            if (RecordInfo && !ri_click && target_list['length'] > 0x0) {
                target_list['forEach'](_0x1c8da0 => {
                    let _0x4985b6 = 京都声问其(_0x1c8da0);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x4985b6 + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](NoveXare_path + '/' + getEntityName(_0x1c8da0) + '_' + _0x1c8da0 + '.txt', _0x4985b6);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && target_list['length'] > 0x0) {
                const _0x5ddfb7 = target_list[0x0];
                const _0x1568cf = 声暗问弹者(self_id, _0x5ddfb7);
                const _0x40b3ea = 声思似诉平(self_id, _0x5ddfb7, aa_fov, 0x0);
                if (_0x1568cf <= aa_range && _0x40b3ea || aa_throw) {
                    const _0x2cdeb2 = 马客在船举(aa_min, aa_max);
                    let _0x86d640 = 弦弦掩抑声(self_id, _0x5ddfb7, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x428c0e = 弦弦掩抑声(self_id, _0x5ddfb7, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x86d640 <= 0xb4 && _0x86d640 >= -0xb4 && _0x428c0e <= 0x5a && _0x428c0e >= -0x5a) {
                        let _0x84d85b = _0x86d640 >= 0x0 ? -_0x2cdeb2 : _0x2cdeb2;
                        let _0x5dac19 = _0x428c0e >= 0x0 ? _0x2cdeb2 : -_0x2cdeb2;
                        if (modelist['AssistAim_mode'] === 0x1 || modelist['AssistAim_mode'] === 0x0 && (Math['abs'](_0x86d640) < _0x2cdeb2 || Math['abs'](_0x428c0e) < _0x2cdeb2)) {
                            _0x84d85b = -_0x86d640 / ((0x28 - _0x2cdeb2) / 0x2);
                            _0x5dac19 = -_0x428c0e / ((0x28 - _0x2cdeb2) / 1.125);
                        }
                        const _0x31461d = 声思似诉平(self_id, _0x5ddfb7, aa_prec * 0x2, 0x1);
                        const _0x4cc59b = 声思似诉平(self_id, _0x5ddfb7, aa_prec * 0x4, 0x2);
                        if (!_0x31461d) setLocalPlayerTurn(0x0, _0x84d85b);
                        if (!_0x4cc59b && !aa_throw || !isSame(_0x428c0e, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x5dac19, 0x0);
                    }
                    _0x20040c['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x5ddfb7), '§r'));
                }
            }
            if (InfiniteAura && InfiniteAura_target['length'] > 0x0) {
                InfiniteAura_target['forEach'](_0x272d94 => {
                    const _0x28e999 = _0x272d94;
                    const _0xdcec0f = getPos(_0x28e999);
                    if (!_0x28e999 || !findEntity(_0x28e999)) return;
                    if (声暗问弹者(InfiniteAura_target[0x0], self_id) > ia_range) return;
                    if (tick === 0x0) {
                        const _0x5de334 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x1d6d54;
                        for (let _0x2ecbe6 = 0x0; _0x2ecbe6 < ia_move; _0x2ecbe6++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0xdcec0f['x'] + _0x5de334, _0xdcec0f['y'], _0xdcec0f['z'] + _0x5de334, 0x1);
                                if (!ia_nopacket) sendPlayerAuthInput({
                                    'inputMode': 0x2,
                                    'playMode': 0x0,
                                    'pos': {
                                        'x': _0xdcec0f['x'] + _0x5de334,
                                        'y': _0xdcec0f['y'] + ia_offset / 0x5,
                                        'z': _0xdcec0f['z'] + _0x5de334
                                    },
                                    'actions': [{
                                        'pos': {
                                            'x': _0xdcec0f['x'] + _0x5de334,
                                            'y': _0xdcec0f['y'] + ia_offset / 0x5,
                                            'z': _0xdcec0f['z'] + _0x5de334
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
                            if (modelist['ia_mode'] === 0x0) setPos(_0xdcec0f['x'], _0xdcec0f['y'], _0xdcec0f['z']);
                            if (modelist['ia_mode'] === 0x1) 二年恬然自(_0xdcec0f['x'], _0xdcec0f['y'], _0xdcec0f['z']);
                            if (modelist['ia_mode'] === 0x2) sendPlayerAuthInput({
                                'inputMode': 0x2,
                                'playMode': 0x0,
                                'pos': {
                                    'x': _0xdcec0f['x'] + _0x5de334,
                                    'y': _0xdcec0f['y'] + ia_offset / 0x5,
                                    'z': _0xdcec0f['z'] + _0x5de334
                                },
                                'actions': [{
                                    'pos': {
                                        'x': _0xdcec0f['x'] + _0x5de334,
                                        'y': _0xdcec0f['y'] + ia_offset / 0x5,
                                        'z': _0xdcec0f['z'] + _0x5de334
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
                        for (let _0x559b39 = 0x0; _0x559b39 < ia_attack; _0x559b39++) 江头夜送客(_0x28e999, Swing);
                    }
                    if (tick <= -ia_return && ia_fix) 六幺大弦嘈();
                });
                if (tick <= -ia_return) {
                    if (!ia_fix) 六幺大弦嘈();
                    tick = ia_delay;
                }
                if (tick > -ia_return) tick--;
                _0x20040c['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? InfiniteAura_target['length'] + '个目标' : 添酒回灯重(InfiniteAura_target['map'](_0x2a62b2 => getEntityName(_0x2a62b2))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 初为霓裳后(_0xd84d72);
            if (AutoVoid) {
                const _0x3b4a05 = 面转轴拨弦(self_id);
                const _0x137340 = getBlock(_0x3b4a05['x'], _0xd84d72['y'] - 0x1, _0x3b4a05['z']);
                for (let _0x2217e6 = -0x2; _0x2217e6 < 0x3; _0x2217e6++) {
                    for (let _0x391920 = -0x2; _0x391920 < 0x3; _0x391920++) {
                        const _0x1cb7ff = getBlock(_0x3b4a05['x'] + _0x2217e6, _0xd84d72['y'] - 0x1, _0x3b4a05['z'] + _0x391920);
                        if (_0x1cb7ff['namespace'] === 'minecraft:air' && _0x1d6d54['y'] < -0.0783 && _0x1d6d54['y'] > -0.0785 && _0x137340['namespace'] != 'minecraft:air') {
                            const _0x81a6ac = -弦弦掩抑声(self_id, {
                                'x': _0x3b4a05['x'] + _0x2217e6,
                                'y': self_pos['y'],
                                'z': _0x3b4a05['z'] - _0x391920
                            }, 'yaw_pos');
                            const _0x1dd7f0 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x81a6ac,
                                'pitch': 0x0
                            });
                            setMotion(_0x1dd7f0['x'] - self_pos['x'], _0x1d6d54['y'], _0x1dd7f0['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x5ef504 = getEntityList();
                _0x5ef504['forEach'](_0x1b9b76 => {
                    if ((getEntityTypeId(_0x1b9b76) === 0x400055 || getEntityTypeId(_0x1b9b76) === 0x400056 || getEntityTypeId(_0x1b9b76) === 0xc00050) && 声暗问弹者(_0x1b9b76, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x1b9b76);
                        if (modelist['avoid_mode'] === 0x0) {
                            const _0xb00d41 = 弦弦掩抑声(getPos(_0x1b9b76), self_id, 'yaw_pos');
                            const _0x1e0e81 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0xb00d41,
                                'pitch': _0x331d40['pitch']
                            });
                            setMotion(_0x1e0e81['x'] - self_pos['x'], _0x1d6d54['y'], _0x1e0e81['z'] - self_pos['z']);
                        }
                        if (modelist['avoid_mode'] === 0x1) 江头夜送客(_0x1b9b76, Swing);
                        if (modelist['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x39b093 = getPlayerList();
                let _0x186d36 = [];
                let _0x24179e = false;
                let _0x319c74 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x36f63d = 0x1; _0x36f63d <= tr_len; _0x36f63d += tr_dens / 0xa) {
                    let _0x14573b = 少小时欢乐(_0x36f63d, _0x331d40['pitch'], tr_speed, tr_g)['data'];
                    let _0x536485 = 忽闻水上琵(_0x36f63d, self_pos, {
                        'yaw': _0x331d40['yaw'],
                        'pitch': 0x0
                    });
                    let _0x74d95e = getBlock(_0x536485['x'], _0x536485['y'] + _0x14573b, _0x536485['z']);
                    if (tr_show || !_0x24179e) {
                        _0x39b093['forEach'](_0x5f0ebf => {
                            if (!_0x24179e) {
                                let _0x567202 = getPos(_0x5f0ebf);
                                let _0x3f51bf = {
                                    'x': _0x536485['x'],
                                    'y': _0x536485['y'] + _0x14573b,
                                    'z': _0x536485['z']
                                };
                                let _0x13718a = getEntitySize(_0x5f0ebf);
                                if (_0x3f51bf['x'] <= _0x567202['x'] + _0x13718a['x'] / 0x2 && _0x3f51bf['x'] >= _0x567202['x'] - _0x13718a['x'] / 0x2 && _0x3f51bf['y'] <= _0x567202['y'] + _0x13718a['y'] / 0x2 && _0x3f51bf['y'] >= _0x567202['y'] - _0x13718a['y'] / 0x2 && _0x3f51bf['z'] <= _0x567202['z'] + _0x13718a['x'] / 0x2 && _0x3f51bf['z'] >= _0x567202['z'] - _0x13718a['x'] / 0x2) {
                                    _0x20040c['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x5f0ebf), '§r'));
                                    _0x24179e = true;
                                }
                            }
                        });
                    }
                    if (_0x74d95e['namespace'] != 'minecraft:air' || _0x24179e) {
                        _0x319c74 = _0x536485;
                        if (modelist['tr_mode'] === 0x1 && _0x74d95e['namespace'] != 'minecraft:air') {
                            for (let _0xd4cb8d = 0x0; _0xd4cb8d <= 0x14; _0xd4cb8d += 0x2) 妇遂命酒使(tr_type, _0x319c74['x'], _0x319c74['y'] + _0x14573b + _0xd4cb8d / 0xa, _0x319c74['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modelist['tr_mode'] === 0x0) {
                    let _0x3c3674 = getDistance(_0x319c74, self_pos);
                    for (let _0x2d20b0 = 0x1; _0x2d20b0 <= _0x3c3674; _0x2d20b0 += tr_dens / 0xa) {
                        let _0xf6f143 = 少小时欢乐(_0x2d20b0, _0x331d40['pitch'], tr_speed, tr_g)['data'];
                        let _0x2a3336 = (tr_offset - 0xa) / 0xa;
                        let _0x5b383a = _0x331d40['yaw'] + 0x5a;
                        if (_0x5b383a > 0xb4) _0x5b383a = _0x5b383a - 0x168;
                        if (_0x5b383a < -0xb4) _0x5b383a = _0x5b383a + 0x168;
                        let _0x1ef0e5 = 忽闻水上琵(_0x2a3336, self_pos, {
                            'yaw': _0x5b383a,
                            'pitch': 0x0
                        });
                        let _0x23151d = 忽闻水上琵(_0x2d20b0, _0x1ef0e5, {
                            'yaw': _0x331d40['yaw'] - Math['atan'](_0x2a3336 / _0x3c3674) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x22d42d = getBlock(_0x23151d['x'], _0x23151d['y'] + _0xf6f143, _0x23151d['z']);
                        if (modelist['tr_mode'] === 0x0 && _0x22d42d['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x23151d['x'], _0x23151d['y'] + _0xf6f143 + 0.5, _0x23151d['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0xc1df9a = 面转轴拨弦(self_id);
                for (let _0x328e64 = -0x4; _0x328e64 < 0x5; _0x328e64++) {
                    for (let _0x547fa0 = -0x4; _0x547fa0 < 0x5; _0x547fa0++) {
                        const _0x3f9f63 = getBlock(_0xc1df9a['x'] + _0x328e64, _0xd84d72['y'] - 0x1, _0xc1df9a['z'] + _0x547fa0);
                        const _0x544420 = getBlock(_0xc1df9a['x'] + _0x328e64, _0xd84d72['y'], _0xc1df9a['z'] + _0x547fa0);
                        if ((_0x3f9f63['namespace'] === 'minecraft:dirt' || _0x3f9f63['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0xc1df9a['x'] + _0x328e64, _0xd84d72['y'] - 0x1, _0xc1df9a['z'] + _0x547fa0, 0x1);
                        if (_0x3f9f63['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0xc1df9a['x'] + _0x328e64, _0xd84d72['y'] - 0x1, _0xc1df9a['z'] + _0x547fa0, 0x1);
                        if (_0x544420['aux'] === 0x7 && (_0x544420['namespace'] === 'minecraft:beetroot' || _0x544420['namespace'] === 'minecraft:wheat' || _0x544420['namespace'] === 'minecraft:carrots' || _0x544420['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0xc1df9a['x'] + _0x328e64, _0xd84d72['y'], _0xc1df9a['z'] + _0x547fa0, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x544420['aux'] <= 0x6 && (_0x544420['namespace'] === 'minecraft:beetroot' || _0x544420['namespace'] === 'minecraft:wheat' || _0x544420['namespace'] === 'minecraft:carrots' || _0x544420['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0xc1df9a['x'] + _0x328e64, _0xd84d72['y'], _0xc1df9a['z'] + _0x547fa0, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x2d38ad = 0x0; _0x2d38ad < am_count; _0x2d38ad++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0xd84d72['x'],
                                'y': _0xd84d72['y'] - 0x1,
                                'z': _0xd84d72['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x548690 = JSON['parse'](抱琵琶半遮(NoveXare_path + '/PlayerAction.json'));
                    _0x548690['forEach'](_0x48064b => {
                        if (_0x48064b['delay'] % action_tick === 0x0) {
                            for (let _0x159602 = 0x0; _0x159602 < _0x48064b['count']; _0x159602++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x48064b['value'],
                                'type': Number(_0x48064b['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x16c9a3 = 0x0; _0x16c9a3 < pam_count; _0x16c9a3++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0xd84d72['x'],
                        'y': _0xd84d72['y'] - 0x1,
                        'z': _0xd84d72['z']
                    },
                    'inputs': pam_array['map'](_0x42a523 => Number(_0x42a523)),
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
            if (AutoJump && _0x40cc05) setMotion(_0x1d6d54['x'], aj_y / 0x64, _0x1d6d54['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x1fb97c => {
                if (bc_packet) silentTP(_0x1fb97c['x'], _0x1fb97c['y'], _0x1fb97c['z']);
                buildBlock(self_id, _0x1fb97c['x'], _0x1fb97c['y'], _0x1fb97c['z'], 0x0);
            });
            if (NoFall && _0x1d6d54['y'] < -nf_max && !_0x40cc05) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && lastTick_ground != _0x40cc05 && _0x40cc05)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x7f1bb7 = 0x0; _0x7f1bb7 < 0x168; _0x7f1bb7 += do_density / 0xa) {
                    const _0x38e936 = do_l_axis * Math['cos'](_0x7f1bb7 * Math['PI'] / 0xb4);
                    const _0x3f8071 = do_s_axis * Math['sin'](_0x7f1bb7 * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x38e936, do_pos[0x1], do_pos[0x2] + _0x3f8071, 0x1);
                }
            }
            if (FakeLag) {
                if (lag_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    lag_t = 0x0;
                }
                if (lag_t > fl_normal && lag_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x20040c['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modelist['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modelist['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modelist['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modelist['fl_mode'] === 0x3), '§r'));
            }
            if (build_list['length'] > 0x0 && build_t > fb_delay && !build_success) {
                const _0x1b5403 = build_list['shift']();
                buildBlock(self_id, Math['round'](_0x1b5403['x']), Math['round'](_0x1b5403['y'] - 0x1), Math['round'](_0x1b5403['z']), 0x0);
                build_t = 0x0;
                if (build_list['length'] === 0x0) build_success = true;
            }
            if (TargetHealth && target_list['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Health', 'Health: ' + 无限事轻拢(target_list[0x0], modelist['health_mode']), '§r'));
            if (ShowTargetList && target_list['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(target_list['map'](_0x2a41e8 => getEntityName(_0x2a41e8))), '§r'));
            if (ShowInfo) {
                const _0x1cdd64 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x1299c9 = Math['sqrt'](_0x1d6d54['x'] * _0x1d6d54['x'] + _0x1d6d54['z'] * _0x1d6d54['z']);
                if (show_speed) _0x20040c['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x1299c9['toFixed'](0x2) + 'm/s 移动速度: ' + _0x55727f['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x47c82e['toFixed'](0x2) + 'm/s 坐标速度:' + _0xdff7ed['toFixed'](0x2) + 'm/s 能力速度:' + _0x1cdd64['current']['toFixed'](0x2) + ('\n移动值: [' + _0x1d6d54['x']['toFixed'](0x2) + ', ' + _0x1d6d54['y']['toFixed'](0x2) + ', ' + _0x1d6d54['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x20040c['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0xd84d72['x'] + ', Y:' + _0xd84d72['y'] + ', Z:' + _0xd84d72['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x54f342 = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x1d1e61 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x20040c['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x54f342['emerald'] + ', 钻石:' + _0x54f342['diamond'] + ', 金锭:' + _0x54f342['gold'] + ', 铁锭:' + _0x54f342['iron'] + '\n下界之心:' + _0x54f342['star'] + ', 经验:' + _0x1d1e61, '§r'));
                }
                if (show_target_dis && target_list['length'] > 0x0) _0x20040c['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, target_list[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, target_list[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x20040c['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x2c9d14['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + target_list['length'] + '人', '§r'));
                if (show_kill_num) _0x20040c['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x20040c['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x20040c['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x20040c['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x20040c['push'](归客不发寻(0x1, 'PING', ping + 'ms', '§r'));
                if (show_self_health) _0x20040c['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x23c1f3['current'] + ', 最大值:' + _0x23c1f3['max'] + ', 最小值:' + _0x23c1f3['min'], '§r'));
                if (show_detail_item) _0x20040c['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x4faa40 = new Date();
                    const _0x4a8c2a = _0x4faa40['getFullYear']();
                    const _0x4a46e9 = ('0' + (_0x4faa40['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x298c4f = ('0' + _0x4faa40['getDate']())['slice'](-0x2);
                    const _0x25adbd = ('0' + _0x4faa40['getHours']())['slice'](-0x2);
                    const _0x48261f = ('0' + _0x4faa40['getMinutes']())['slice'](-0x2);
                    const _0x48c23d = ('0' + _0x4faa40['getSeconds']())['slice'](-0x2);
                    const _0x15753c = _0x4a8c2a + '-' + _0x4a46e9 + '-' + _0x298c4f + ' ' + _0x25adbd + ':' + _0x48261f + ':' + _0x48c23d;
                    _0x20040c['push'](归客不发寻(0x1, 'RealTime', _0x15753c, '§r'));
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
                let _0x35bf80 = _0x331d40['yaw'];
                _0x35bf80 += rocker_func['angle'] < 0x5a ? rocker_func['angle'] + 0x5a : rocker_func['angle'] - 0x10e;
                if (_0x35bf80 >= 0xb4) _0x35bf80 -= 0x168;
                if (_0x35bf80 <= -0xb4) _0x35bf80 += 0x168;
                let _0x27653e = (_0x40cc05 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x4f213d = (_0x40cc05 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x1e1c90 = {};
                if (rc_surround && target_list['length'] > 0x0 && 声暗问弹者(self_id, target_list[0x0]) <= rc_lock) {
                    let _0x5ebd6b = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
                    let _0x164639 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_rot');
                    let _0x5577fc = _0x164639 > -0x5a || _0x164639 < 0x5a ? rc_speed : -rc_speed;
                    let _0x1e825b = _0x35bf80 > -0x5a || _0x35bf80 < 0x5a ? rc_speed : -rc_speed;
                    let _0x35792a = rc_relative ? _0x5577fc : _0x1e825b;
                    Angel = rocker_func['angle'] > 0x1c2 - rc_range && rocker_func['angle'] <= rc_range + 0xb4 || rocker_func['angle'] > 0xb4 - rc_range && rocker_func['angle'] <= rc_range - 0x5a ? _0x5ebd6b -= _0x35792a * 0x5 : _0x5ebd6b += _0x35792a * 0x5;
                    if (_0x5ebd6b > 0xb4) _0x5ebd6b -= 0x168;
                    if (_0x5ebd6b < -0xb4) _0x5ebd6b += 0x168;
                    let _0x1b85e8 = 忽闻水上琵(rc_dist, getPos(target_list[0x0]), {
                        'yaw': _0x5ebd6b,
                        'pitch': 0x0
                    });
                    let _0x5f1f0d = 弦弦掩抑声(_0x1b85e8, self_id, 'yaw_pos');
                    _0x1e1c90 = 忽闻水上琵(rc_legal ? modelist['rc_mode'] === 0x0 ? _0x27653e : _0x4f213d : rc_speed / 0x8, self_pos, {
                        'yaw': _0x5f1f0d,
                        'pitch': 0x0
                    });
                } else _0x1e1c90 = 忽闻水上琵(rc_legal ? modelist['rc_mode'] === 0x0 ? _0x27653e : _0x4f213d : rc_speed / 0x8, self_pos, {
                    'yaw': _0x35bf80,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x1e1c90['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x1e1c90['z'] + self_pos['z'])
                };
                if (rc_follow && modelist['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && isMoving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x35bf80 + sca_yaw);
                    else 于穆曹二善(_0x331d40['pitch'], _0x35bf80 - 0xb4);
                }
                if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modelist['rocker_mode'] === 0x3) {
                    if (rocker_func['angle'] < 0x13b && rocker_func['angle'] > 0xe1 || rocker_func['angle'] > 0x2d && rocker_func['angle'] < 0x87) {
                        _0x1e1c90 = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x331d40);
                        setMotion(_0x1e1c90['x'] - self_pos['x'], _0x1e1c90['y'] - self_pos['y'], _0x1e1c90['z'] - self_pos['z']);
                    } else {
                        const _0x372abc = rocker_func['angle'] > 0x13b || rocker_func['angle'] < 0x2d;
                        const _0x16fb84 = getCameraRotation();
                        current_roll += (_0x372abc ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (modelist['rocker_mode'] === 0x0) setMotion(_0x1e1c90['x'] - self_pos['x'], rc_bhop && _0x40cc05 || rc_ahop && _0x1d6d54['y'] < -0.4 ? rc_y : _0x1d6d54['y'], _0x1e1c90['z'] - self_pos['z']);
                if (modelist['rocker_mode'] === 0x1) setPos(_0x1e1c90['x'], self_pos['y'], _0x1e1c90['z']);
                if (direction_func['direction'] === 0x0) rocker_func = {};
            }
            if (typeof airjump_func['operation'] !== 'undefined') {
                const _0x41c035 = getEntityMotion(self_id);
                const _0x23da93 = getCameraRotation();
                if (airjump_func['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x41c035['x'], rc_y, _0x41c035['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw -= Math['sin'](_0x23da93['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch += Math['cos'](_0x23da93['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(current_pitch, current_yaw, current_roll);
                    }
                }
                if (airjump_func['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modelist['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modelist['rocker_mode'] === 0x0) setMotion(_0x41c035['x'], -rc_y, _0x41c035['z']);
                    if (modelist['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modelist['rocker_mode'] === 0x3) {
                        current_yaw += Math['sin'](_0x23da93['roll'] * Math['PI'] / 0xb4) * 0x2;
                        current_pitch -= Math['cos'](_0x23da93['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x20040c['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
                if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
                    callModule(0x1e, '{"value":false}');
                    BalanceTimer_st = false;
                }
                if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
            }
            if (ModifyTime) {
                if (mt_custom === 0x19) {
                    let _0x2426ad = 0x0;
                    if (modelist['mt_time'] === 0x0) _0x2426ad = 0x3e8;
                    if (modelist['mt_time'] === 0x1) _0x2426ad = 0x32c8;
                    if (modelist['mt_time'] === 0x2) _0x2426ad = 0x1770;
                    if (modelist['mt_time'] === 0x3) _0x2426ad = 0x30d4;
                    setWorldData({
                        'time': _0x2426ad
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
                        showTipMessage('§bProtoHax §r| ' + _0xdff7ed['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x179d2a, _0xedb101) => globalThis['current_poem'] = JSON['parse'](_0xedb101)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + ping + 'ms Speed: ' + _0xdff7ed['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x1ad647 = 0x0; _0x1ad647 < mine_speed; _0x1ad647++) {
                    let _0x222e76 = destroy_list['shift']();
                    if (typeof _0x222e76 != 'object' || _0x222e76['length'] === 0x0) continue;
                    const _0x250482 = getBlock(_0x222e76[0x0], _0x222e76[0x1], _0x222e76[0x2]);
                    if (_0x250482['namespace'] != 'minecraft:air' && _0x250482['namespace'] === destroy_namespace) {
                        destroyBlock(self_id, _0x222e76[0x0], _0x222e76[0x1], _0x222e76[0x2], 0x0);
                        current_mine_num++;
                    }
                }
                _0x20040c['push'](归客不发寻(0x1, '连锁进度', current_mine_num + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x40cc05) setMotion(0x0, 0x0, 0x0);
            if (_0x20040c['length'] > 0x0 && !FakeTip) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x20040c['join'](',\n'));
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
            last_tick_heal = _0x23c1f3['current'];
            lastTick_ground = _0x40cc05;
            lasttick_item_count = item_count;
        } catch (_0x26f37c) {
            clientMessage(_0x26f37c['stack']);
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
            const _0x3f11b3 = getCameraRotation();
            const _0x39ca94 = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x8a0d61 = sca_move ? 弦弦掩抑声(_0x39ca94, self_id, 'yaw_pos') : _0x3f11b3['yaw'] > 0x0 ? 0xb4 - _0x3f11b3['yaw'] : -0xb4 - _0x3f11b3['yaw'];
            于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x8a0d61 + sca_yaw);
        }
        if (AssistAim && aa_silent && target_list['length'] > 0x0) {
            let _0x2d5c06 = 弦弦掩抑声(self_id, target_list[0x0], 'pitch_pos');
            let _0x4a7598 = 弦弦掩抑声(self_id, target_list[0x0], 'yaw_pos');
            于穆曹二善(_0x2d5c06, _0x4a7598);
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

    function onExecuteCommandEvent(_0x4b2db7) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x4b2db7, '§r');
        const _0x2299f4 = _0x4b2db7['split'](' ');
        if (_0x2299f4[0x0] === '/set' && _0x2299f4[0x1] === 'pos') {
            goto_pos = {
                'x': Number(_0x2299f4[0x2]),
                'y': Number(_0x2299f4[0x3]),
                'z': Number(_0x2299f4[0x4])
            };
            if (_0x2299f4[0x5]) default_speed = Number(_0x2299f4[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x2299f4[0x0] === '/set' && _0x2299f4[0x1] === 'default' && _0x2299f4[0x2] === 'config') {
            if (_0x2299f4[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('default_config', 'null');
                return true;
            }
            if (抱琵琶半遮(config_path + '/' + _0x2299f4[0x3] + '.json') != '{}') {
                setData('default_config', _0x2299f4[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x2299f4[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x2299f4[0x3], '§r');
            return true;
        }
        if (_0x2299f4[0x0] === '/target') {
            if (_0x2299f4[0x1] === 'self') target_list[0x0] = self_id;
            if (_0x2299f4[0x1] === 'player') target_list = getPlayerList();
            if (_0x2299f4[0x1] === 'all') target_list = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + target_list['length'] + '个目标', '§r');
            return true;
        }
        if (_0x2299f4[0x0] === '/cleaner') {
            if (_0x2299f4[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x2299f4[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x2299f4[0x2]));
        }
        if (_0x2299f4[0x0] === '/bind') {
            if (_0x2299f4[0x1] === 'RunAway') {
                if (typeof globalThis[_0x2299f4[0x2]] == 'undefined' && typeof RunAwayID[_0x2299f4[0x2]] == 'undefined' || typeof globalThis[_0x2299f4[0x3]] == 'undefined' && typeof RunAwayID[_0x2299f4[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x162a32 = typeof globalThis[_0x2299f4[0x3]] !== 'undefined';
                RunAway_binds[_0x2299f4[0x2]] = {
                    'module': _0x2299f4[0x3],
                    'isNX': _0x162a32
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x2299f4[0x2] + ' 与 ' + _0x2299f4[0x3] + ' 成功', '§r');
                NoveXare_Config['RunAway_binds'] = RunAway_binds;
                return true;
            }
            if (_0x2299f4[0x1] === 'key' && typeof globalThis[_0x2299f4[0x2]] !== 'undefined') {
                isBinding = _0x2299f4[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x2299f4[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x2299f4[0x1]] === 'undefined') bind_func[_0x2299f4[0x1]] = [];
            if (typeof globalThis[_0x2299f4[0x2]] !== 'undefined' && typeof globalThis[_0x2299f4[0x1]] !== 'undefined') {
                bind_func[_0x2299f4[0x1]]['push'](_0x2299f4[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x2299f4[0x1] + ' 与 ' + _0x2299f4[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x2299f4[0x0] === '/unbind') {
            if (_0x2299f4[0x1] === 'key' && typeof globalThis[_0x2299f4[0x2]] !== 'undefined') {
                for (let _0x41ec0b in key_bind_list) {
                    if (key_bind_list[_0x41ec0b] === _0x2299f4[0x2]) {
                        delete key_bind_list[_0x41ec0b];
                        break;
                    }
                }
                isBinding = _0x2299f4[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x2299f4[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof bind_func[_0x2299f4[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x2299f4[0x1]] !== 'undefined' && _0x2299f4[0x2] === 'all') {
                delete bind_func[_0x2299f4[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x2299f4[0x1] + ' 的所有绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (_0x2299f4[0x1] === 'all') {
                bind_func = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                NoveXare_Config['binds'] = bind_func;
                return true;
            }
            if (typeof globalThis[_0x2299f4[0x2]] !== 'undefined' && typeof globalThis[_0x2299f4[0x1]] !== 'undefined') {
                bind_func[_0x2299f4[0x1]]['splice'](bind_func[_0x2299f4[0x1]]['indexOf'](_0x2299f4[0x2]), 0x1);
                if (bind_func[_0x2299f4[0x1]]['length'] === 0x0) delete bind_func[_0x2299f4[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x2299f4[0x1] + ' 和 ' + _0x2299f4[0x2] + ' 成功', '§r');
                NoveXare_Config['binds'] = bind_func;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x2299f4[0x0] === '/nx') {
            if (typeof globalThis[_0x2299f4[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x2299f4[0x1] === 'num') globalThis[_0x2299f4[0x2]] = Number(_0x2299f4[0x3]);
            if (_0x2299f4[0x1] === 'bool') globalThis[_0x2299f4[0x2]] = Boolean(_0x2299f4[0x3]);
            if (_0x2299f4[0x1] === 'str') globalThis[_0x2299f4[0x2]] = _0x2299f4[0x3];
            if (_0x2299f4[0x1] === 'arr') globalThis[_0x2299f4[0x2]] = 相近邀相见(_0x2299f4[0x3]);
            if (_0x2299f4[0x1] === 'obj') globalThis[_0x2299f4[0x2]] = JSON['parse'](_0x2299f4[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x2299f4[0x2]] + ' => ' + _0x2299f4[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x444574, _0x4675d1, _0x31af17) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x444574 + ' §e结果:§r' + _0x31af17 + ' §e数据:§r' + JSON['stringify'](_0x4675d1, null, 0x2), '§r');
        if (!_0x31af17) return true;
    }

    function onCallModuleEvent(_0x5a8c2a) {
        try {
            if (typeof _0x5a8c2a !== 'undefined' && typeof _0x5a8c2a['fun'] !== 'undefined' && typeof RunAway_binds[_0x5a8c2a['fun']] !== 'undefined') {
                const _0x5a85b0 = RunAway_binds[_0x5a8c2a['fun']]['module'];
                if (!RunAway_binds[_0x5a8c2a['fun']]['isNX']) callModule(RunAwayID[_0x5a85b0], JSON['stringify']({
                    'value': _0x5a8c2a['value']
                }));
                else 委身为贾人(_0x5a85b0, _0x5a8c2a['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x5a8c2a, null, 0x4), '§r');
            if (typeof _0x5a8c2a['name'] === 'undefined') {
                if (Rocker && typeof _0x5a8c2a['angle'] !== 'undefined') rocker_func = _0x5a8c2a;
                if (Rocker && typeof _0x5a8c2a['direction'] !== 'undefined') direction_func = _0x5a8c2a;
                if (Rocker && typeof _0x5a8c2a['operation'] !== 'undefined') airjump_func = _0x5a8c2a;
                return;
            }
            if (_0x5a8c2a['fun'] === 'fun_hitbox' && typeof _0x5a8c2a['size'] !== 'undefined') temp_size = {
                'x': _0x5a8c2a['size'],
                'y': _0x5a8c2a['size']
            };
            if (target_list['length'] > 0x0 && _0x5a8c2a['fun'] === 'fun_hitbox' && _0x5a8c2a['value']) default_size = temp_size;
            if (!_0x5a8c2a['name']['includes']('NoveXare') && _0x5a8c2a['fun'] != 'fun_ride_flying') return;
            if (typeof _0x5a8c2a['SauthLogin'] !== 'undefined') {
                Sauths = _0x5a8c2a['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x5a8c2a['CustomBanTip'] !== 'undefined') bantip = _0x5a8c2a['CustomBanTip'];
            if (typeof _0x5a8c2a['key'] !== 'undefined') {
                const _0x43a91c = _0x5a8c2a['key'];
                if (_0x43a91c === 'ct_team' || _0x43a91c === 'km_text') 开宴千呼万(_0x43a91c, _0x43a91c === 'ct_team' ? ct_team : km_text);
                if (_0x43a91c === 'CopyItem') {
                    if (modelist['copy_mode'] === 0x0) dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id));
                    if (modelist['copy_mode'] === 0x1) {
                        for (let _0x3931c5 = 0x0; _0x3931c5 < 0x24; _0x3931c5++) {
                            const _0x4413d4 = getInventory(self_id, _0x3931c5);
                            if (_0x4413d4['namespace'] === 'minecraft:air') continue;
                            for (let _0x156cac = 0x0; _0x156cac < _0x4413d4['count']; _0x156cac++) dropPlayerInventorySlot(self_id, _0x3931c5);
                        }
                    }
                    const _0x35223f = getPos(self_id);
                    setTimeout(() => {
                        for (var _0x2643e0 = 0x6; _0x2643e0 <= 0xc8; _0x2643e0++) buildBlock(self_id, _0x35223f['x'], _0x35223f['y'], _0x35223f['z'], _0x2643e0);
                        showToast('物品复制成功 请退出重进');
                    }, 0x2710 + copy_random * 0x64);
                }
                if (_0x43a91c === 'ItemEditor') {
                    const _0x262e7a = getEntityCarriedItem(self_id);
                    const _0x25ac56 = 司马明年秋(_0x262e7a, 'Damage:', 's');
                    const _0x5d05b8 = 司马明年秋(_0x262e7a, '{Damage:', '}', ',');
                    if (modelist['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x262e7a['replace']('Damage:' + _0x25ac56 + 's', 'Damage:' + ie_data + 's'));
                    if (modelist['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x262e7a['replace']('{Damage:' + _0x5d05b8, '{Damage:' + ie_data));
                    if (modelist['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x262e7a['replace']('{', '{' + (modelist['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + all_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x43a91c === 'EditBackGround') {
                    const _0x7d7975 = 'loginVideoNew.mp4';
                    const _0x285ccb = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x7d7975)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x285ccb + _0x7d7975);
                    file_copy(getResource() + '/' + _0x7d7975, _0x285ccb + _0x7d7975);
                    showToast('已复制文件');
                }
                if (_0x43a91c === 'spm_text') 开宴千呼万(_0x43a91c, spm_text);
                if (_0x43a91c === 'am_text') 开宴千呼万(_0x43a91c, am_text);
                if (_0x43a91c === 'BJDTp') {
                    let _0x2b36b3 = getPlayerList();
                    let _0x39c9d4 = _0x2b36b3['length'] > 0x0 ? _0x2b36b3['map'](_0x59f61b => ({
                        'text': getEntityName(_0x59f61b) + '\n距离: ' + 声暗问弹者(self_id, _0x59f61b)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x1daf30 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x39c9d4
                    };
                    const _0x4ce9a3 = JSON['stringify'](_0x1daf30);
                    addForm(_0x4ce9a3, function(_0x55d4e8) {
                        if (_0x2b36b3['length'] > 0x0 && _0x55d4e8 >= 0x0) {
                            var _0x4c5099 = _0x2b36b3[_0x55d4e8];
                            var _0x186256 = getPos(_0x4c5099);
                            setPos(_0x186256['x'], _0x186256['y'] + 1.8, _0x186256['z']);
                            buildBlock(self_id, _0x186256['x'], _0x186256['y'], _0x186256['z'], 0x1);
                        }
                    });
                }
                if (_0x43a91c === 'ka_text') 开宴千呼万(_0x43a91c, ka_text);
                if (_0x43a91c === 'tp_type') 开宴千呼万(_0x43a91c, tp_type);
                if (_0x43a91c === 'lp_type') 开宴千呼万(_0x43a91c, lp_type);
                if (_0x43a91c === 'ap_type') 开宴千呼万(_0x43a91c, ap_type);
                if (_0x43a91c === 'arp_type') 开宴千呼万(_0x43a91c, arp_type);
                if (_0x43a91c === 'srp_type') 开宴千呼万(_0x43a91c, srp_type);
                if (_0x43a91c === 'tr_type') 开宴千呼万(_0x43a91c, tr_type);
                if (_0x43a91c === 'as_type') 开宴千呼万(_0x43a91c, as_type);
                if (_0x43a91c === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x2902eb = Date['now']();
                        File['write'](config_path + '/自动保存配置 - ' + _0x2902eb + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        if (AutoLoadCfg) setData('default_config', '自动保存配置 - ' + _0x2902eb);
                    }
                    exit();
                    gc();
                }
                if (_0x43a91c === 'sp_type') 开宴千呼万(_0x43a91c, sp_type);
                if (_0x43a91c === 'as_level') 开宴千呼万(_0x43a91c, as_level);
                if (_0x43a91c === 'am_id') 开宴千呼万(_0x43a91c, am_id);
                if (_0x43a91c === 'am_value') 开宴千呼万(_0x43a91c, am_value);
                if (_0x43a91c === 'pam_id') 开宴千呼万(_0x43a91c, pam_id);
                if (_0x43a91c === 'pam_value') 开宴千呼万(_0x43a91c, pam_value);
                if (_0x43a91c === 'pam_array') 开宴千呼万(_0x43a91c, pam_array);
                if (_0x43a91c === 'sp_level') 开宴千呼万(_0x43a91c, sp_level);
                if (_0x43a91c === 'cs_text') 开宴千呼万(_0x43a91c, cs_text);
                if (_0x43a91c === 'DropInv') {
                    for (let _0x1c6a36 = 0x0; _0x1c6a36 < 0x24; _0x1c6a36++) {
                        const _0x3c6d9b = getInventory(self_id, _0x1c6a36);
                        if (_0x3c6d9b['namespace'] === 'minecraft:air') continue;
                        if (_0x3c6d9b['count'] < 0x1) continue;
                        for (let _0x6e7ae0 = 0x0; _0x6e7ae0 < _0x3c6d9b['count']; _0x6e7ae0++) drop_list['push'](_0x1c6a36);
                    }
                }
                if (_0x43a91c === 'LookTP') {
                    let _0x5de603 = {};
                    for (let _0xecf282 = 0x0; _0xecf282 < 0x1f4; _0xecf282++) {
                        _0x5de603 = 忽闻水上琵(_0xecf282, getPos(self_id), getEntityRot(self_id));
                        const _0x1eb119 = getBlock(_0x5de603['x'], _0x5de603['y'], _0x5de603['z']);
                        if (_0x1eb119['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x5de603 != {}) {
                        const _0x2075ef = getPos(self_id);
                        if (modelist['LookTP_mode'] === 0x0) 二年恬然自(_0x5de603['x'], _0x5de603['y'] + 1.53, _0x5de603['z']);
                        if (modelist['LookTP_mode'] === 0x1) setPos(_0x5de603['x'], _0x5de603['y'] + 1.53, _0x5de603['z']);
                    }
                }
                if (_0x43a91c === 'OpenChest') {
                    let _0x8d0a01 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x1f2df5 = [];
                    let _0x25a67c = 0x0;
                    let _0x4a492d = 面转轴拨弦(self_id);
                    const _0x108e54 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x4b907c = 'shulker_box';
                    for (let _0x521004 = -0x7; _0x521004 < 0x7; _0x521004++) {
                        for (let _0x14482f = -0x7; _0x14482f < 0x7; _0x14482f++) {
                            for (let _0x318a3c = -0x7; _0x318a3c < 0x7; _0x318a3c++) {
                                const _0x2a82c1 = _0x521004 + _0x4a492d['x'];
                                const _0x1da32b = _0x14482f + _0x4a492d['y'];
                                const _0x48e1c2 = _0x318a3c + _0x4a492d['z'];
                                const _0x32043d = getBlock(_0x2a82c1, _0x1da32b, _0x48e1c2);
                                if (_0x108e54['includes'](_0x32043d['namespace']) || _0x32043d['namespace']['includes'](_0x4b907c)) {
                                    const _0x2d49ef = getBlock(_0x2a82c1, _0x1da32b + 0x1, _0x48e1c2);
                                    _0x8d0a01['buttons'][_0x25a67c] = {
                                        'text': '命名空间: ' + _0x32043d['namespace'] + '\n坐标:   ' + (_0x2d49ef['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x1f2df5[_0x25a67c] = {
                                        'x': _0x2a82c1,
                                        'y': _0x1da32b,
                                        'z': _0x48e1c2
                                    };
                                    _0x25a67c++;
                                }
                            }
                        }
                    }
                    if (_0x25a67c === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x8d0a01), function(_0x5da4c9) {
                        var _0x1b7574 = _0x1f2df5[_0x5da4c9];
                        buildBlock(self_id, _0x1b7574['x'], _0x1b7574['y'], _0x1b7574['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x43a91c === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x43a91c === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x43a91c === 'rpc_repeat') {
                    for (let _0xcfa864 = 0x0; _0xcfa864 < rpc_repeat_times; _0xcfa864++) sendRpc(last_PyRpc['id'], last_PyRpc['data']);
                }
                if (_0x43a91c === 'rpc_black') 开宴千呼万(_0x43a91c, rpc_black);
                if (_0x43a91c === 'rpc_tipWhite') 开宴千呼万(_0x43a91c, rpc_tipWhite);
                if (_0x43a91c === 'rpc_sendBlack') 开宴千呼万(_0x43a91c, rpc_sendBlack);
                if (_0x43a91c === 'AttackSelf_one') 江头夜送客(self_id, Swing);
                if (_0x43a91c === 'RemoveSelf') removeEntity(self_id);
                if (_0x43a91c === 'QuitGame') leaveWorld();
                if (_0x43a91c === 'cm_black') 开宴千呼万(_0x43a91c, cm_black);
                if (_0x43a91c === 'rpc_recBlack') 开宴千呼万(_0x43a91c, rpc_recBlack);
                if (_0x43a91c === 'rpc_white') 开宴千呼万(_0x43a91c, rpc_white);
                if (_0x43a91c === 'sl_delete') setData('sauths', '');
                if (_0x43a91c === 'dc_delete') dc_pos = [];
                if (_0x43a91c === 'hs_item') 开宴千呼万('selectitems', selectitems);
                if (_0x43a91c === 'hs_slot') 开宴千呼万('hs_slot', hs_slot);
                if (_0x43a91c === 'rpc_sendWhite') 开宴千呼万(_0x43a91c, rpc_sendWhite);
                if (_0x43a91c === 'rpc_recWhite') 开宴千呼万(_0x43a91c, rpc_recWhite);
                if (_0x43a91c === 'at_typeWhite') 开宴千呼万(_0x43a91c, at_typeWhite);
                if (_0x43a91c === 'ie_data') 开宴千呼万(_0x43a91c, ie_data);
                if (_0x43a91c === 'mine_white') 开宴千呼万(_0x43a91c, mine_white);
                if (_0x43a91c === 'cs_white') 开宴千呼万(_0x43a91c, cs_white);
                if (_0x43a91c === 'mine_black') 开宴千呼万(_0x43a91c, mine_black);
                if (_0x43a91c === 'cs_black') 开宴千呼万(_0x43a91c, cs_black);
                if (_0x43a91c === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x3c1bf3, _0x2a1b3b, _0x28fc80, _0x86bdeb) {
                        let _0x17a8d2 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        let _0x3ea12e = 0x0;
                        const _0x485404 = getResource();
                        const _0x2b42d0 = JSON['parse'](File['read'](_0x485404 + '/ui/ui_definition.json'))['ui']['map'](_0x13b6dc => ({
                            'name': _0x13b6dc + '.json',
                            'path': _0x485404 + '/ui/' + _0x13b6dc + '.json'
                        }));
                        for (let _0xd02880 of _0x2b42d0) {
                            if (!_0xd02880['name']['includes']('NoveXare')) continue;
                            let _0x7e941c = JSON['parse'](File['read'](_0xd02880['path']));
                            if (typeof _0x7e941c['items'][0x0]['items'] === 'undefined') continue;
                            for (let _0xefa320 of _0x7e941c['items'][0x0]['items']) {
                                if (typeof _0xefa320['name'] === 'undefined' || typeof _0xefa320['key'] === 'undefined') continue;
                                if (_0x28fc80 && _0xefa320['type'] != 'Switch') continue;
                                if (_0x86bdeb && _0xefa320['type'] == 'Switch') continue;
                                if (!_0x2a1b3b && (_0xefa320['name'] === _0x3c1bf3 || _0xefa320['key'] === _0x3c1bf3) || _0x2a1b3b && (_0xefa320['name']['includes'](_0x3c1bf3) || _0xefa320['key']['includes'](_0x3c1bf3))) {
                                    _0x17a8d2['items'][0x0]['items'][_0x3ea12e] = _0xefa320;
                                    _0x3ea12e++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x3c1bf3, JSON['stringify'](_0x17a8d2));
                    });
                }
                if (_0x43a91c === 'sp_clear') play_pos_list = [];
                if (_0x43a91c === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0xf2d9fa) {
                        var _0x386706 = _0xf2d9fa['split'](',');
                        play_pos_list['push']({
                            'x': Number(_0x386706[0x0]),
                            'y': Number(_0x386706[0x1]),
                            'z': Number(_0x386706[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + play_pos_list['length'] + '组坐标', '§r');
                    });
                }
                if (_0x43a91c === 'sp_load') {
                    const _0x429416 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x429416, function(_0x3ea931) {
                        var _0x566915 = File['read'](_0x3ea931);
                        if (_0x566915 != '' && SoundPlayer) {
                            sound_data = JSON['parse'](_0x566915);
                            sound_file = sp_loop ? _0x566915 : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x43a91c === 'sp_select') {
                    const _0x24b2de = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x4c3fb8 = file_list(getResource() + '/sounds/NoveXare');
                    _0x4c3fb8['sort']((_0x295aa2, _0x51fda2) => _0x295aa2['name']['localeCompare'](_0x51fda2['name']));
                    for (let _0x279e2e = 0x0; _0x279e2e < _0x4c3fb8['length']; _0x279e2e++) {
                        _0x24b2de['buttons'][_0x279e2e] = {
                            'text': _0x4c3fb8[_0x279e2e]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x37b3ef = JSON['stringify'](_0x24b2de);
                    addForm(_0x37b3ef, function(_0x24f1f8) {
                        if (_0x4c3fb8['length'] > 0x0 && _0x24f1f8 >= 0x0) {
                            var _0x40e1d6 = File['read'](_0x4c3fb8[_0x24f1f8]['path']);
                            if (_0x40e1d6 != '' && SoundPlayer) {
                                sound_data = JSON['parse'](_0x40e1d6);
                                sound_file = sp_loop ? _0x40e1d6 : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sound_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x43a91c === 'save_config') {
                    const _0x57c977 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](NoveXare_Config)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x57c977, function(_0x4920af, _0x266c4b) {
                        File['write'](config_path + '/' + _0x4920af + '.json', JSON['stringify'](NoveXare_Config, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0x266c4b) NoveXare_Config = {
                            'binds': {},
                            'key_binds': [],
                            'RunAway_binds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x43a91c === 'load_config') {
                    const _0x1aa3e8 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x10e2ef = file_list(config_path);
                    _0x10e2ef['sort']((_0x5147e6, _0x5b251a) => _0x5147e6['name']['localeCompare'](_0x5b251a['name']));
                    for (let _0x3c8003 = 0x0; _0x3c8003 < _0x10e2ef['length']; _0x3c8003++) {
                        _0x1aa3e8['buttons'][_0x3c8003] = {
                            'text': '§e' + _0x10e2ef[_0x3c8003]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x2d5fa7 = JSON['stringify'](_0x1aa3e8);
                    addForm(_0x2d5fa7, function(_0x5b42d1) {
                        if (_0x10e2ef['length'] > 0x0 && _0x5b42d1 >= 0x0) {
                            let _0x478054 = JSON['parse'](抱琵琶半遮(_0x10e2ef[_0x5b42d1]['path']));
                            let _0x22573d = 0x0;
                            bind_func = _0x478054['binds'];
                            key_bind_list = _0x478054['key_binds'];
                            RunAway_binds = _0x478054['RunAway_binds'];
                            for (let _0x373283 in _0x478054) {
                                _0x22573d++;
                                if (_0x373283['includes']('_mode') && _0x5a8c2a['index'] && _0x5a8c2a['index'] > 0x0) modelist[_0x373283] = _0x478054[_0x373283];
                                if (_0x373283 != 'RunAway_binds' && _0x373283 != 'key_binds' && _0x373283 != 'binds' && _0x373283 != 'name') 委身为贾人(_0x373283, _0x478054[_0x373283]);
                            }
                            NoveXare_Config = _0x478054;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x478054['name'] + '的配置，共' + _0x22573d + '条配置', '§r');
                        }
                    });
                }
                if (_0x43a91c === 'rpc_select') {
                    const _0x38b7ec = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x30bb84 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x24854c = 0x0; _0x24854c < _0x30bb84['length']; _0x24854c++) {
                        _0x38b7ec['buttons'][_0x24854c] = {
                            'text': (_0x30bb84[_0x24854c]['type'] === 'Send' ? '§a' : '§c') + _0x30bb84[_0x24854c]['packet_str']
                        };
                    }
                    const _0x3698dc = JSON['stringify'](_0x38b7ec);
                    addForm(_0x3698dc, function(_0x4a7269) {
                        last_PyRpc = {
                            'id': _0x30bb84[_0x4a7269]['id'],
                            'data': _0x30bb84[_0x4a7269]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x43a91c === 'cw_range') {
                    let _0x471b6e = getPlayerList();
                    let _0x53a8ad = 0x0;
                    for (let _0x3503dd of _0x471b6e) {
                        const _0x2dbe0d = getPos(_0x3503dd);
                        const _0x5aab7e = getDistance(_0x2dbe0d, getPos(self_id));
                        if (!white_list['includes'](_0x3503dd) && _0x5aab7e < cw_size && _0x3503dd != self_id) {
                            white_list['push'](_0x3503dd);
                            _0x53a8ad++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0x53a8ad + '个玩家到白名单', '§r');
                }
                if (_0x43a91c === 'KickSelf')
                    for (let _0x3966b7 = 0x0; _0x3966b7 < 0x3e8; _0x3966b7++) 江头夜送客(self_id, Swing);
                if (_0x43a91c === 'bc_delete') ac_pos = [];
                if (_0x43a91c === 'cm_depart') departCamera();
                if (_0x43a91c === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x43a91c === 'cm_reset') resetCamera();
                if (_0x43a91c === 'cm_lock') lockCamera();
                if (_0x43a91c === 'ou_recover') other_user = null;
                if (_0x43a91c === 'delete_chest') ca_chest_pos = [];
                if (_0x43a91c === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x43a91c === 'fm_place') fm_pos = self_pos;
                if (_0x43a91c === 'at_regex') 开宴千呼万(_0x43a91c, at_regex);
                if (_0x43a91c === 'cw_add' || _0x43a91c === 'ct_add' || _0x43a91c === 'ct_add') 茫茫江浸月(_0x43a91c === 'cw_add' ? 'white_list' : 'target_list', 0x1);
                if (_0x43a91c === 'fw_target' || _0x43a91c === 'fc_target') 茫茫江浸月(_0x43a91c === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x43a91c === 'cm_target') 茫茫江浸月('cm_target', 0x0);
                if (_0x43a91c === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x43a91c === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x43a91c === 'cw_remove') white_list = [];
                if (_0x43a91c === 'DumpList') File['write'](NoveXare_path + '/List.json', JSON['stringify']({
                    'targets': target_list['map'](_0x375e8d => ({
                        'name': getEntityName(_0x375e8d),
                        'id': _0x375e8d,
                        'namespace': getEntityNamespace(_0x375e8d)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x722cf4 => ({
                        'name': getEntityName(_0x722cf4),
                        'id': _0x722cf4,
                        'namespace': getEntityNamespace(_0x722cf4)
                    }))
                }));
                if (_0x43a91c === 'DumpWorldInfo') File['write'](NoveXare_path + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x43a91c === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(NoveXare_path + '/WorldInfo.json')));
                if (_0x43a91c === 'Rusher') {
                    const _0xb53e91 = getCameraRotation();
                    let _0x56c251 = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0xb53e91['yaw'] > 0x0 ? 0xb4 - _0xb53e91['yaw'] : -0xb4 - _0xb53e91['yaw'],
                        'pitch': -_0xb53e91['pitch']
                    });
                    setMotion(_0x56c251['x'] - self_pos['x'], _0x56c251['y'] - self_pos['y'], _0x56c251['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0xe626f7 in _0x5a8c2a) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0xe626f7)) continue;
                if (typeof _0x5a8c2a['index'] !== 'undefined') {
                    modelist[_0xe626f7] = _0x5a8c2a['index'] - 0x1;
                    NoveXare_Config[_0xe626f7] = _0x5a8c2a['index'] - 0x1;
                    归客不发寻(0x0, _0xe626f7['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x5a8c2a[_0xe626f7], '§r');
                    if (_0xe626f7 === 'tip_mode' && modelist['tip_mode'] === 0x1) {
                        callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0xe626f7 === 'Criticals') {
                    if (_0x5a8c2a[_0xe626f7]) playerJump();
                    else {
                        Criticals_status = false;
                        callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
                    }
                }
                if (_0xe626f7 === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x5a8c2a[_0xe626f7]) + ',"count":' + ka_packet + '}');
                if (_0xe626f7 === 'RandomArrayList' && !_0x5a8c2a[_0xe626f7]) {
                    for (let _0x1bbafe = 0x0; _0x1bbafe < ral_num; _0x1bbafe++) addCustomArrayList('RandomArrayList' + _0x1bbafe, '', '', false);
                }
                if (_0xe626f7 === 'Rocker') callModule(0x39, '{"value":' + b2s(modelist['rc_mode'] === 0x1 && _0x5a8c2a[_0xe626f7]) + ',"fov":150}');
                if (_0xe626f7 === 'FakeMove') {
                    if (_0x5a8c2a[_0xe626f7]) fakemove_pos = getPos(self_id);
                    else if (!_0x5a8c2a[_0xe626f7]) 欲语迟移船(fakemove_pos['x'], fakemove_pos['y'], fakemove_pos['z']);
                    let _0x53e5fc = {
                        'enable': !_0x5a8c2a[_0xe626f7],
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
                    callModule(0x7, JSON['stringify'](_0x53e5fc));
                    setTimeout(() => 欲语迟移船(fakemove_pos['x'] + 0xf, fakemove_pos['y'] + 0xf, fakemove_pos['z'] + 0xf), 0x3e8);
                }
                if (_0xe626f7 === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x5a8c2a[_0xe626f7]) + ',"count":' + cs_packet + '}');
                if (_0xe626f7 === 'ShowNowTime' && !_0x5a8c2a[_0xe626f7]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0xe626f7 === 'RandomFunc') {
                    const _0x5eb124 = Object['keys'](globalThis);
                    let _0x2b1135 = [];
                    for (let _0x3f32b8 of _0x5eb124) {
                        if (typeof globalThis[_0x3f32b8] === 'boolean') _0x2b1135['push'](_0x3f32b8);
                    }
                    const _0x4fc708 = _0x2b1135[马客在船举(0x0, _0x2b1135['length'] - 0x1)];
                    委身为贾人(_0x4fc708, _0x5a8c2a[_0xe626f7]);
                }
                if (_0xe626f7 === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x5a8c2a[_0xe626f7]) + ',"count":' + ia_packet + '}');
                if (_0xe626f7 === 'FlashBack') sb();
                if (_0xe626f7 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x5a8c2a[_0xe626f7]) + '}');
                if (_0xe626f7 === 'PyRpcManager' && rpc_store && !_0x5a8c2a[_0xe626f7]) {
                    rpc_temp['forEach'](_0x58d715 => sendRpc(_0x58d715['id'], _0x58d715['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0xe626f7 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x5a8c2a[_0xe626f7],
                    'defaultValue': false
                });
                if (_0xe626f7 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x5a8c2a[_0xe626f7],
                    'defaultValue': false
                });
                if (_0xe626f7 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x5a8c2a[_0xe626f7],
                    'defaultValue': false
                });
                if (_0xe626f7 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x5a8c2a[_0xe626f7],
                    'defaultValue': false
                });
                if (_0xe626f7 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x5a8c2a[_0xe626f7],
                    'defaultValue': false
                });
                if (_0xe626f7 === 'FreeCam') {
                    let _0x2010e7 = {
                        'value': _0x5a8c2a[_0xe626f7],
                        'noclip': _0x5a8c2a[_0xe626f7],
                        'flying': _0x5a8c2a[_0xe626f7]
                    };
                    callModule(0x1, JSON['stringify'](_0x2010e7));
                    if (_0x5a8c2a[_0xe626f7]) freecam_pos = getPos(self_id);
                    else setPos(freecam_pos['x'], freecam_pos['y'], freecam_pos['z']);
                }
                if (_0xe626f7 === 'FakeMotion' && fm_auto && _0x5a8c2a[_0xe626f7]) fm_pos = getPos(self_id);
                if (_0xe626f7 === 'ShadowBoomer' && _0x5a8c2a[_0xe626f7]) sb_pos = getPos(self_id);
                if (_0xe626f7 === 'AvoidAttack' && _0x5a8c2a[_0xe626f7]) AvoidAttack_pos = getPos(self_id);
                else if (_0xe626f7 === 'AvoidAttack' && !_0x5a8c2a[_0xe626f7]) setPos(AvoidAttack_pos['x'], AvoidAttack_pos['y'], AvoidAttack_pos['z']);
                if (_0xe626f7 === 'NoClip') {
                    let _0x358803 = {
                        'value': _0x5a8c2a[_0xe626f7],
                        'noclip': _0x5a8c2a[_0xe626f7],
                        'flying': _0x5a8c2a[_0xe626f7]
                    };
                    if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x5a8c2a[_0xe626f7]) + '}');
                    if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x5a8c2a[_0xe626f7]) + ',"no_fall_check":' + b2s(_0x5a8c2a[_0xe626f7]) + ',"value":' + b2s(_0x5a8c2a[_0xe626f7]) + '}');
                    callModule(0x1, JSON['stringify'](_0x358803));
                    if (nc_blink) record_blink_pos = getPos(self_id);
                    else record_blink_pos = {};
                }
                if (_0xe626f7 === 'BalanceTimer') {
                    callModule(0x25, '{"value":' + _0x5a8c2a[_0xe626f7] + '}');
                    BalanceTimer_st = !_0x5a8c2a[_0xe626f7];
                }
                if (_0xe626f7 === 'IQBoost') {
                    const _0x44bd21 = File['read'](NoveXare_path + '/iQBoost.txt')['split']('\n');
                    let _0x19e21f = 马客在船举(0x0, _0x44bd21['length'] - 0x1);
                    sendChatMessage('!' + _0x44bd21[_0x19e21f]);
                }
                if (_0xe626f7 === 'AutoTarget' && !_0x5a8c2a[_0xe626f7]) target_list = [];
                if (_0xe626f7 === 'SoundPlayer' && !_0x5a8c2a[_0xe626f7]) sound_data = [];
                if (_0xe626f7 === 'FightBot' && !_0x5a8c2a[_0xe626f7]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0xe626f7 === 'ShowSendPacket' && !_0x5a8c2a[_0xe626f7] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x41c218 = '';
                    for (let _0x2e2228 in PacketTmp['send']) _0x41c218 += '名称:' + _0x2e2228 + '，ID:' + PacketTmp['send'][_0x2e2228]['id'] + '，发送数量:' + PacketTmp['send'][_0x2e2228]['count'] + '\n';
                    if (sp_save) File['write'](NoveXare_path + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x41c218, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0xe626f7 === 'ShowReceivePacket' && !_0x5a8c2a[_0xe626f7] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x328234 = '';
                    for (let _0x505ded in PacketTmp['receive']) _0x328234 += '名称:' + _0x505ded + '，ID:' + PacketTmp['receive'][_0x505ded]['id'] + '，接受数量:' + PacketTmp['receive'][_0x505ded]['count'] + '\n';
                    if (srp_save) File['write'](NoveXare_path + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x328234, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0xe626f7 === 'Scaffold' && sca_keep && _0x5a8c2a[_0xe626f7]) rec_y = 0x0;
                if (_0xe626f7 === 'Scaffold' && !_0x5a8c2a[_0xe626f7]) createText(0x1, 0x1, ' ', false, 'sca_count');
                if (_0xe626f7 === 'TargetHud' && !_0x5a8c2a[_0xe626f7]) createText(0x1, 0x1, ' ', false, 'TargetHud');
                if (_0xe626f7 === 'sp_loop' && !_0x5a8c2a[_0xe626f7]) sound_file = null;
                if (_0xe626f7 === 'NoLiquid' && _0x5a8c2a[_0xe626f7]) {
                    record_water = getEntityAttribute(self_id, 0x2);
                    record_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0xe626f7 === 'NoLiquid' && !_0x5a8c2a[_0xe626f7]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', record_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', record_lava);
                }
                if (typeof _0x5a8c2a[_0xe626f7] === 'boolean' || typeof _0x5a8c2a[_0xe626f7] === 'number') {
                    if (target_list['length'] > 0x0) {
                        if (_0xe626f7 === 'hb_hor') temp_size['x'] = _0x5a8c2a[_0xe626f7];
                        if (_0xe626f7 === 'hb_y') temp_size['y'] = _0x5a8c2a[_0xe626f7];
                    }
                    if (target_list['length'] > 0x0 && _0xe626f7 === 'HitBox' && _0x5a8c2a[_0xe626f7]) default_size = temp_size;
                    if (typeof _0x5a8c2a[_0xe626f7] === 'boolean') {
                        委身为贾人(_0xe626f7, _0x5a8c2a[_0xe626f7]);
                        return;
                    }
                    NoveXare_Config[_0xe626f7] = _0x5a8c2a[_0xe626f7];
                    globalThis[_0xe626f7] = _0x5a8c2a[_0xe626f7];
                }
            }
        } catch (_0x2039ef) {
            clientMessage(_0x2039ef['stack']);
        }
    }

    function onPlayerAttackEvent(_0x2d3f56, _0x49f662) {
        if (SoundManager && sm_attack) playSound(NoveXare_path + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x49f662;
        if (SlowMotion && sm_onhit && !isSlowMotion) isSlowMotion = true;
        if (FakeTip && modelist['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x49f662));
        if (FakeTip && modelist['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x49f662));
        if (FakeTip && modelist['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x49f662));
        if (FakeTip && modelist['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x49f662));
        if (TargetEdit) {
            if (first_target === null) first_target = _0x49f662;
            else {
                if (te_all) getEntityList()['forEach'](_0x1fa24b => {
                    if (_0x1fa24b != first_target) 弦切切如私(_0x1fa24b, first_target, te_two);
                });
                else 弦切切如私(_0x49f662, first_target, te_two);
                first_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x49f662);
            else startRidingEntity(_0x49f662);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (first_entity === null) first_entity = _0x49f662;
            else {
                setEntityNBT(_0x49f662, getEntityNBT(first_target));
                first_entity = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x49f662));
        if (!attack_list['includes'](_0x49f662)) attack_list['push'](_0x49f662);
        if (_0x49f662 === null || attack_list['every'](_0x5eb9fc => last_attack_target['includes'](_0x5eb9fc))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x49f662;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            other_user = _0x49f662;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            anchor_target = _0x49f662;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x49f662), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x2ebb80 = getPos(_0x49f662);
            const _0x235e89 = getEntitySize(_0x49f662);
            for (let _0x5c917f = 0x0; _0x5c917f < 马客在船举(ap_count, ap_count + 0x14); _0x5c917f++) 妇遂命酒使(ap_type, _0x2ebb80['x'] + 马客在船举(-_0x235e89['x'] * 马客在船举(0x7, 0xa), _0x235e89['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x2ebb80['y'] + 马客在船举(-_0x235e89['y'] * 0x9, _0x235e89['y'] * 0x2) / 0xa, _0x2ebb80['z'] + 马客在船举(-_0x235e89['x'] * 马客在船举(0x7, 0xa), _0x235e89['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x1f53bb = 声暗问弹者(self_id, _0x49f662);
            callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"distance":' + _0x1f53bb * 1.01 + '}');
            setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x49fade = 京都声问其(_0x49f662);
            归客不发寻(0x0, 'Info', '\n' + _0x49fade + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](NoveXare_path + '/' + getEntityName(_0x49f662) + '_' + _0x49f662 + '.txt', _0x49fade);
            return true;
        }
        if (SmartWeapon) {
            let _0x4c5d66 = [];
            for (let _0x55d407 = 0x0; _0x55d407 < 0x9; _0x55d407++) _0x4c5d66['push']({
                'slot': _0x55d407,
                'd': 十六言命曰(self_id, _0x55d407)
            });
            _0x4c5d66['sort']((_0x3ebf31, _0x49e00f) => _0x49e00f['d'] - _0x3ebf31['d']);
            let _0x4f2b94 = _0x4c5d66[0x0];
            if (_0x4f2b94['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x4f2b94['slot']);
        }
        if (ClickTarget) {
            if (!target_list['includes'](_0x49f662)) target_list['push'](_0x49f662);
            else target_list['splice'](target_list['indexOf'](_0x49f662), 0x1);
            归客不发寻(0x0, !target_list['includes'](_0x49f662) ? 'delTarget' : 'addTarget', getEntityName(_0x49f662), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x61b9e4 = getPos(_0x49f662);
            const _0x121769 = 弦弦掩抑声(self_pos, _0x61b9e4, 'yaw_pos');
            const _0x7c1f34 = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
                'yaw': _0x121769,
                'pitch': 0x0
            });
            setEntityMotion(_0x49f662, _0x7c1f34['x'] - self_pos['x'], ckb_y, _0x7c1f34['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!white_list['includes'](_0x49f662)) white_list['push'](_0x49f662);
            else white_list['splice'](white_list['indexOf'](_0x49f662), 0x1);
            归客不发寻(0x0, !white_list['includes'](_0x49f662) ? 'delTarget' : 'addTarget', getEntityName(_0x49f662), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 唤始出来犹(getEntityName(_0x49f662));
            归客不发寻(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modelist['th_select_mode'] == 0x1) th_target = _0x49f662;
        if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x445588) {
        if (_0x445588 === '') return true;
        if (BypassMute) {
            if (modelist['bm_mode'] === 0x0) executeCommand('me ' + _0x445588);
            if (modelist['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x445588);
            if (modelist['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x445588);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x445588);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x445588);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x445588);
            return true;
        }
        if (ChatSuffix && !_0x445588['includes'](cs_text)) {
            sendChatMessage(_0x445588 + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x2b105f, _0x18a901) {
        if (ChatManager && (_0x2b105f != getEntityName(self_id) && cm_other || _0x2b105f == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0xf8f215 = 0x0; _0xf8f215 < cm_repeat_times; _0xf8f215++) sendChatMessage(_0x18a901);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x2b105f + ', 消息:' + _0x18a901, '§r');
        if (ChatManager) return cm_black['some'](_0x4b3549 => _0x18a901['includes'](_0x4b3549));
        if (ChatManager && _0x18a901['length'] > cm_length) return;
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x1e6751) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x782926 = getEntityMotion(_0x1e6751);
            const _0x22433f = getCameraRotation();
            const _0x2b4b06 = 酒欲饮无管(_0x782926, self_pos, 0x14);
            const _0x4fba1a = 忽闻水上琵(lj_len / 0x4, self_pos, {
                'yaw': _0x22433f['yaw'] > 0x0 ? 0xb4 - _0x22433f['yaw'] : -0xb4 - _0x22433f['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x4fba1a['x'] - self_pos['x'], lj_y, _0x4fba1a['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x4d97f3, _0x43f7c2) {
        if (PyRpcManager && rpc_rec) {
            const _0x50b94d = new Uint8Array(_0x43f7c2);
            const _0x2544f7 = Array['from'](_0x50b94d, _0x2493fa => _0x2493fa['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x379cdb = 左迁九江郡(_0x43f7c2)['toLowerCase']();
            let _0xb6a875 = false;
            let _0x45c300 = rpc_tipWhite['some'](_0x4815d0 => _0x379cdb['includes'](_0x4815d0));
            if (!_0xb6a875) _0xb6a875 = rpc_black['some'](_0x4ba85e => _0x379cdb['includes'](_0x4ba85e));
            if (!_0xb6a875) _0xb6a875 = rpc_recBlack['some'](_0x2946b0 => _0x379cdb['includes'](_0x2946b0));
            if (rpc_white['some'](_0x202d95 => _0x379cdb['includes'](_0x202d95))) _0xb6a875 = false;
            if (rpc_recWhite['some'](_0x5f203b => _0x379cdb['includes'](_0x5f203b))) _0xb6a875 = false;
            if (rpc_record && (_0x45c300 && rpc_exclude || !_0x45c300)) {
                const _0x5c7bef = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x194b14 = JSON['parse'](抱琵琶半遮(_0x5c7bef));
                _0x194b14[_0x194b14['length']] = {
                    'packet_hex': _0x2544f7,
                    'packet_format': 嘈如急雨小(_0x2544f7),
                    'packet_str': 左迁九江郡(_0x43f7c2),
                    'packet_bin': _0x50b94d,
                    'time': Date['now'](),
                    'id': _0x4d97f3,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0xb6a875
                };
                File['write'](_0x5c7bef, JSON['stringify'](_0x194b14, null, 0x4));
            }
            let _0x4a2428 = 'Null';
            if (modelist['rpc_mode'] === 0x0) _0x4a2428 = 左迁九江郡(_0x43f7c2);
            if (modelist['rpc_mode'] === 0x1) _0x4a2428 = _0x2544f7;
            if (modelist['rpc_mode'] === 0x2) _0x4a2428 = 嘈如急雨小(_0x2544f7);
            if (modelist['rpc_mode'] === 0x3) _0x4a2428 = JSON['stringify'](_0x43f7c2);
            const _0x3e7420 = _0xb6a875 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x45c300 && (rpc_showDisintercept && !_0xb6a875 || rpc_showIntercept && _0xb6a875)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4d97f3 + '\n' : '') + _0x4a2428 + _0x3e7420, '§r');
            return _0xb6a875;
        }
    }

    function onPyRpcSendEvent(_0x4d2bcb, _0x259663) {
        if (PyRpcManager && rpc_send) {
            const _0x289124 = new Uint8Array(_0x259663);
            const _0x20f13c = Array['from'](_0x289124, _0x3d4c20 => _0x3d4c20['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x1350c6 = 左迁九江郡(_0x259663)['toLowerCase']();
            let _0x69bda1 = false;
            let _0x3e7075 = rpc_tipWhite['some'](_0x3821e7 => _0x1350c6['includes'](_0x3821e7));
            if (!_0x69bda1) _0x69bda1 = rpc_black['some'](_0x4cb078 => _0x1350c6['includes'](_0x4cb078));
            if (!_0x69bda1) _0x69bda1 = rpc_sendBlack['some'](_0x1140ba => _0x1350c6['includes'](_0x1140ba));
            if (rpc_white['some'](_0x50a092 => _0x1350c6['includes'](_0x50a092))) _0x69bda1 = true;
            if (rpc_sendWhite['some'](_0x54c753 => _0x1350c6['includes'](_0x54c753))) _0x69bda1 = false;
            if (!_0x3e7075) last_PyRpc = {
                'id': _0x4d2bcb,
                'data': _0x289124
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x4d2bcb,
                'data': _0x289124
            });
            if (rpc_intercept) _0x69bda1 = true;
            if (rpc_record && (_0x3e7075 && rpc_exclude || !_0x3e7075)) {
                const _0xdad150 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x2aa0e4 = JSON['parse'](抱琵琶半遮(_0xdad150));
                _0x2aa0e4[_0x2aa0e4['length']] = {
                    'packet_hex': _0x20f13c,
                    'packet_format': 嘈如急雨小(_0x20f13c),
                    'packet_str': 左迁九江郡(_0x259663),
                    'packet_bin': _0x289124,
                    'time': Date['now'](),
                    'id': _0x4d2bcb,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x69bda1
                };
                File['write'](_0xdad150, JSON['stringify'](_0x2aa0e4, null, 0x4));
            }
            let _0x3cd5ab = 'Null';
            if (modelist['rpc_mode'] === 0x0) _0x3cd5ab = 左迁九江郡(_0x259663);
            if (modelist['rpc_mode'] === 0x1) _0x3cd5ab = _0x20f13c;
            if (modelist['rpc_mode'] === 0x2) _0x3cd5ab = 嘈如急雨小(_0x20f13c);
            if (modelist['rpc_mode'] === 0x3) _0x3cd5ab = JSON['stringify'](_0x259663);
            for (let _0x481084 of rpc_config) {
                if (typeof _0x481084 === 'object') {
                    if (_0x481084['match_mode'] === 0x0 && _0x3cd5ab['includes'](_0x481084['packet'])) _0x3cd5ab = remarks;
                    if (_0x481084['match_mode'] === 0x1 && _0x3cd5ab['includes'] === _0x481084['packet']) _0x3cd5ab = remarks;
                } else continue;
            }
            let _0x210a04 = _0x69bda1 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x3e7075 && (rpc_showDisintercept && !_0x69bda1 || rpc_showIntercept && _0x69bda1)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4d2bcb + '\n' : '') + _0x3cd5ab + _0x210a04, '§r');
            return _0x69bda1;
        }
    }

    function onEntityBehaviorEvent(_0x411e9e, _0x3cb88c, _0x4dea15) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x411e9e + ' 实体昵称:' + getEntityName(_0x411e9e) + ' 行为ID:' + _0x3cb88c + ' 行为数据:' + _0x4dea15, '§r');
        if (_0x3cb88c === 0x27 && _0x411e9e === Arrow_id) Arrow_id = null;
        if (_0x3cb88c === 0x3 && attack_list['includes'](_0x411e9e)) {
            if (SlowMotion && sm_onkill && !isSlowMotion) isSlowMotion = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x228f80 = 0x0; _0x228f80 < 0x32; _0x228f80++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x411e9e) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x411e9e), '§r');
            if (SoundManager && sm_kill) playSound(NoveXare_path + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(NoveXare_path + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(kill_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x3cb88c === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x411e9e);
        if (_0x3cb88c === 0x2 && attack_list['includes'](_0x411e9e)) real_attack++;
        if (FightBack && fb_ishurt && (modelist['fb_mode'] == 0x0 || _0x3cb88c === 0x4 && _0x411e9e != self_id)) {
            let _0x3eef8d = modelist['fb_mode'] == 0x0 ? target_list[0x0] : _0x411e9e;
            if (声暗问弹者(_0x3eef8d, self_id) < fb_range) 江头夜送客(_0x411e9e, Swing);
            fb_ishurt = false;
        }
        if (_0x3cb88c === 0x2 && _0x411e9e === self_id) {
            let _0x29a722 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(NoveXare_path + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !isSlowMotion) isSlowMotion = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x4dea15, '§r');
            if (HurtJump) setMotion(_0x29a722['x'], hj_height, _0x29a722['z']);
            if (AntiKB) {
                let _0x460728 = akb_hor / 0x64;
                let _0x16d555 = akb_y / 0x64;
                setMotion(_0x29a722['x'] - _0x460728 * _0x29a722['x'], _0x29a722['y'] - _0x16d555 * _0x29a722['y'], _0x29a722['z'] - _0x460728 * _0x29a722['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x4dea15 == 0x2) fb_ishurt = true;
        }
        if (_0x3cb88c === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x841ce1, _0x4cf76e, _0x4b9cc0, _0x4b10db, _0xe2d04d) {
        const _0x2bc400 = getCarried(_0x841ce1);
        const _0x31406e = getBlock(_0x4cf76e, _0x4b9cc0, _0x4b10db);
        if (_0x31406e['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(NoveXare_path + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x31406e['namespace'] + ', §rID:' + _0x31406e['id'] + ', 方块选择面:' + _0xe2d04d + ', §r特殊值:' + _0x31406e['aux'] + '\n手持:' + _0x2bc400['name'] + '-[' + _0x2bc400['namespace'] + '], 特殊值:' + _0x2bc400['aux'] + '\n坐标:[' + _0x4cf76e + ', ' + _0x4b9cc0 + ', ' + _0x4b10db + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x4cf76e + ' ' + _0x4b9cc0 + ' ' + _0x4b10db + '的' + _0x31406e['namespace']);
        if (Miner && (_0x31406e['namespace'] === destroy_namespace || !isDestroy)) {
            if (!isDestroy && current_mine_num < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x512914 => _0x31406e['namespace']['includes'](_0x512914))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x561c6a => !_0x31406e['namespace']['includes'](_0x561c6a)))) {
                isDestroy = true;
                destroy_namespace = _0x31406e['namespace'];
            }
            if (isDestroy && destroy_namespace != _0x31406e['namespace'] && current_mine_num < mine_num && destroy_list['length'] > 0x0) destroy_namespace = _0x31406e['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x4cf76e,
                    'y': _0x4b9cc0,
                    'z': _0x4b10db
                }) <= mine_distance && isDestroy) {
                let _0x2507ca = [
                    [_0x4cf76e + 0x1, _0x4b9cc0, _0x4b10db],
                    [_0x4cf76e - 0x1, _0x4b9cc0, _0x4b10db],
                    [_0x4cf76e, _0x4b9cc0, _0x4b10db + 0x1],
                    [_0x4cf76e, _0x4b9cc0, _0x4b10db - 0x1],
                    [_0x4cf76e, _0x4b9cc0 + 0x1, _0x4b10db],
                    [_0x4cf76e, _0x4b9cc0 - 0x1, _0x4b10db]
                ];
                for (p of _0x2507ca) {
                    const _0x3c3754 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x3c3754['namespace'] != 'minecraft:air' && _0x31406e['namespace'] === destroy_namespace) destroy_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x1dec27 = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x1dec27['levelName'] + ' ，难度:' + _0x1dec27['difficulty'] + ' 游戏模式:' + _0x1dec27['gameType'] + ' 游戏时间:' + _0x1dec27['time'] + ' 随机刻速度:' + _0x1dec27['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x50bf94, _0xda6237, _0x899b61, _0x34fab6, _0x414261) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(NoveXare_path + '/sounds/build.mp3');
        const _0x4496db = getCarried(_0x50bf94);
        const _0x5931a7 = getBlock(_0xda6237, _0x899b61, _0x34fab6);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x4496db['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x5931a7['namespace'] + ', §rID:' + _0x5931a7['id'] + ', 方块选择面:' + _0x414261 + ', §r特殊值:' + _0x5931a7['aux'] + '\n手持:' + _0x4496db['name'] + '-[' + _0x4496db['namespace'] + '], 特殊值:' + _0x4496db['aux'] + '\n坐标:[' + _0xda6237 + ', ' + _0x899b61 + ', ' + _0x34fab6 + ']', '§r');
        if (ClickTP) 欲语迟移船(_0xda6237, _0x899b61 + 0x2, _0x34fab6);
        const _0x14cb15 = ChestAura && ca_rot && _0x5931a7['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x50bf94) || ClickRot;
        if (_0x14cb15) {
            let _0x5814d5 = {
                'x': _0xda6237,
                'y': _0x899b61,
                'z': _0x34fab6
            };
            const _0x1ba6b9 = 酒欲饮无管(getEntityMotion(_0x50bf94), getPos(_0x50bf94), 0x14);
            let _0x1a4cb6 = 弦弦掩抑声(_0x1ba6b9, _0x5814d5, 'pitch_pos');
            let _0x53d6dc = 弦弦掩抑声(_0x1ba6b9, _0x5814d5, 'yaw_pos');
            于穆曹二善(_0x1a4cb6, _0x53d6dc);
        }
        if (GetCommand && _0x5931a7['namespace']['includes']('command_block')) {
            let _0x568a1e = getBlockEntityNBT(_0xda6237, _0x899b61, _0x34fab6);
            let _0x3d430f = 琵琶行浔阳(_0x568a1e, 'Command:"', '",Cu');
            let _0x5ee230 = 琵琶行浔阳(_0x568a1e, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x2c1157 = 琵琶行浔阳(_0x568a1e, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0xda6237 + ' ' + _0x899b61 + ' ' + _0x34fab6 + '] 指令:' + _0x3d430f + ' 是否自动:' + _0x5ee230 + ' 执行延迟:' + _0x2c1157, '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (first_pos === null) first_pos = [_0xda6237, _0x899b61, _0x34fab6];
            else {
                setBlockEntityData(_0xda6237, _0x899b61, _0x34fab6, getBlockEntityData(first_pos[0x0], first_pos[0x1], first_pos[0x2]));
                first_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x42b327 = [
                [_0xda6237, _0x899b61 - 0x1, _0x34fab6],
                [_0xda6237, _0x899b61 + 0x1, _0x34fab6],
                [_0xda6237, _0x899b61, _0x34fab6 - 0x1],
                [_0xda6237, _0x899b61, _0x34fab6 + 0x1],
                [_0xda6237 - 0x1, _0x899b61, _0x34fab6],
                [_0xda6237 + 0x1, _0x899b61, _0x34fab6]
            ];
            setBlock(_0x42b327[_0x414261][0x0], _0x42b327[_0x414261][0x1], _0x42b327[_0x414261][0x2], _0x4496db['namespace'], _0x4496db['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0xda6237, _0x899b61, _0x34fab6, _0x4496db['namespace'], _0x4496db['aux']);
        if ((InvCleaner || SmartInv) && _0x5931a7['namespace'] === 'minecraft:chest') isOpenChest = true;
        if (ClickDestroy && !AutoDestroy) 初为霓裳后({
            'x': _0xda6237,
            'y': _0x899b61,
            'z': _0x34fab6
        });
        if (AutoBed && _0x5931a7['namespace'] === 'minecraft:bed' && !isBedbuild) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x6a99f2 = [
                [_0xda6237 + 0x1, _0x899b61, _0x34fab6],
                [_0xda6237 - 0x1, _0x899b61, _0x34fab6],
                [_0xda6237, _0x899b61, _0x34fab6 + 0x1],
                [_0xda6237, _0x899b61, _0x34fab6 - 0x1],
                [_0xda6237, _0x899b61 + 0x1, _0x34fab6]
            ];
            isBedbuild = true;
            for (let _0x1b4602 of _0x6a99f2) {
                const _0x523b83 = getBlock(_0x1b4602[0x0], _0x1b4602[0x1], _0x1b4602[0x2]);
                if (_0x523b83['namespace'] === 'minecraft:air') 事今漂沦憔(_0x1b4602[0x0], _0x1b4602[0x1], _0x1b4602[0x2]);
            }
            isBedbuild = false;
        }
        if (Breaker && (_0x4496db['namespace']['includes']('sword') || _0x4496db['namespace']['includes']('pickaxe'))) {
            if (bk_origin) {
                callModule(0xf, '{"value":true}');
                setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
                return true;
            }
            const _0xe43d93 = Math['round'](bk_range);
            _0x19077d: for (let _0x4aeb82 = -_0xe43d93; _0x4aeb82 <= _0xe43d93; _0x4aeb82++) {
                for (let _0x28705b = -_0xe43d93; _0x28705b < _0xe43d93; _0x28705b++) {
                    for (let _0x5c097f = -_0xe43d93; _0x5c097f <= _0xe43d93; _0x5c097f++) {
                        let _0x55c80f = _0xda6237 + _0x4aeb82;
                        let _0x766e6a = _0x899b61 + _0x28705b;
                        let _0x3e3c0a = _0x34fab6 + _0x5c097f;
                        let _0x509d8 = getBlock(_0x55c80f, _0x766e6a, _0x3e3c0a);
                        if (bk_bed && _0x509d8['namespace'] === 'minecraft:bed' || bk_chest && _0x509d8['namespace'] === 'minecraft:chest') {
                            let _0x5e37ce = getBlock(_0x55c80f, _0x766e6a + 0x1, _0x3e3c0a);
                            if (_0x5e37ce['namespace'] != 'minecraft:air' && bk_up) _0x766e6a += 0x1;
                            if (bk_tool && _0x5e37ce['namespace'] === 'minecraft:end_stone') selectPlayerInventorySlot(_0x50bf94, 枫叶荻花秋(_0x50bf94, '_pickaxe'));
                            if (bk_tool && _0x5e37ce['namespace'] === 'minecraft:planks') selectPlayerInventorySlot(_0x50bf94, 枫叶荻花秋(_0x50bf94, '_axe'));
                            breaker_pos = {
                                'ex': _0x55c80f,
                                'ey': _0x766e6a,
                                'ez': _0x3e3c0a
                            };
                            breaker_timer = 0x0;
                            break _0x19077d;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0xda6237,
                'y': _0x899b61,
                'z': _0x34fab6
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0xda6237 + ', ' + _0x899b61 + ', ' + _0x34fab6 + ']', '§r');
            return true;
        }
        if (FastBuild && build_list['length'] === 0x0 && build_success) {
            const _0x77b504 = getCameraRotation();
            for (let _0x3e1089 = 0x0; _0x3e1089 < fb_len + 0x1; _0x3e1089++) build_list['push'](忽闻水上琵(_0x3e1089, 面转轴拨弦(_0x50bf94), {
                'pitch': 0x0,
                'yaw': _0x77b504['yaw'] > 0x0 ? 0xb4 - _0x77b504['yaw'] : -0xb4 - _0x77b504['yaw']
            }));
            build_success = false;
            return true;
        }
        if (ca_check && _0x5931a7['namespace'] === 'minecraft:chest') open_chest['click'] = true;
    }

    function onKeyboardDownEvent(_0x38cfbe) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x38cfbe, '§r');
        if (key_bind_list['length'] > 0x0 && typeof key_bind_list[_0x38cfbe] !== 'undefined') 委身为贾人(key_bind_list[_0x38cfbe], !globalThis[key_bind_list[_0x38cfbe]]);
        if (isBinding != null && _0x38cfbe != 0x42) {
            key_bind_list[_0x38cfbe] = isBinding;
            NoveXare_Config['key_binds'] = key_bind_list;
            归客不发寻(0x0, 'Tip', '绑定 ' + isBinding + ' 与键值 ' + _0x38cfbe, '§r');
            isBinding = null;
        }
    }

    function onKeyboardUpEvent(_0x3cadf5) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x3cadf5, '§r');
    }

    function onSendServerPacketEvent(_0x6dfa21, _0x183461) {
        if (NoClip && nc_blink && (_0x6dfa21 === 0x13 || _0x6dfa21 === 0x90) && Object['keys'](record_blink_pos)['length'] > 0x0) {
            if (getDistance(record_blink_pos, self_pos) > nc_dist) record_blink_pos = self_pos;
            else return true;
        }
        if (FakeLag && modelist['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modelist['fl_mode'] === 0x1 && fakelag_status && _0x6dfa21 === 0x13) return true;
        if (FreeCam && modelist['fc_mode'] === 0x1 && _0x6dfa21 === 0x13) return true;
        if (FreeCam && modelist['fc_mode'] === 0x2 && _0x6dfa21 === 0xa1) return true;
        if (FreeCam && modelist['fc_mode'] === 0x3 && _0x6dfa21 === 0x90) return true;
        if (FreeCam && modelist['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x5a9520 = PacketTranslate[PacketTranslate['map'](_0x253b9d => _0x253b9d['id'])['indexOf'](_0x6dfa21)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x183461] === 'undefined') PacketTmp['send'][_0x183461] = {
                    'id': _0x6dfa21,
                    'Translate': _0x5a9520,
                    'count': 0x1
                };
                PacketTmp['send'][_0x183461]['count']++;
            }
            const _0x2bf98c = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x11dc30 = [];
            if (sp_id) _0x11dc30['push'](_0x6dfa21);
            if (sp_name) _0x11dc30['push'](_0x183461);
            if (sp_trans) _0x11dc30['push'](_0x5a9520);
            let _0x3377d8 = sp_intercept && (intercept['includes'](_0x6dfa21) || intercept['includes'](_0x183461));
            if (!sp_ignore || !(ignore['includes'](_0x6dfa21) || ignore['includes'](_0x183461))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x11dc30['join'](' - ') + (_0x3377d8 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x3377d8;
        }
    }

    function onReceiveServerPacketEvent(_0x31a545, _0x2a8b0a) {
        if (ShadowBoomer && _0x31a545 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x31a545 == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x31a545 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x31a545 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x31a545 === 0x9) return true;
        if (ModifyTime && _0x31a545 === 0xa) return true;
        if (ca_check && _0x31a545 === 0x2f) open_chest['packet'] = true;
        if (FakeLag && modelist['fl_mode'] === 0x2 && fakelag_status && _0x31a545 === 0x13) return true;
        if (FakeLag && modelist['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modelist['fc_mode'] === 0x4 && _0x31a545 === 0x12) return true;
        if (NoCamShake && _0x31a545 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x355879 = PacketTranslate[PacketTranslate['map'](_0x12e56d => _0x12e56d['id'])['indexOf'](_0x31a545)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x2a8b0a] === 'undefined') PacketTmp['receive'][_0x2a8b0a] = {
                    'id': _0x31a545,
                    'Translate': _0x355879,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x2a8b0a]['count']++;
            }
            const _0x32343c = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x154646 = [];
            if (srp_id) _0x154646['push'](_0x31a545);
            if (srp_name) _0x154646['push'](_0x2a8b0a);
            if (srp_trans) _0x154646['push'](_0x355879);
            let _0x9aa761 = srp_intercept && (intercept['includes'](_0x31a545) || intercept['includes'](_0x2a8b0a));
            if (!srp_ignore || !(ignore['includes'](_0x31a545) || ignore['includes'](_0x2a8b0a))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x154646['join'](' - ') + (_0x9aa761 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x9aa761;
        }
        return (modelist['cs_mode'] === 0x2 || modelist['cs_mode'] === 0x3) && _0x31a545 === 0x9;
    }

    function onTouchMotionDownEvent(_0x5f0fdb, _0x5e97c3, _0x3ab1df) {
        if (SafeAttack) {
            const _0x2ac665 = 0x0 + (0x1 - sa_size) / 0x2 * screen['deviceWidth'];
            const _0x19e16c = screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * screen['deviceWidth'];
            const _0xb5506 = 0x0 + (0x1 - sa_size) / 0x2 * screen['deviceHeight'];
            const _0x39814b = screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * screen['deviceHeight'];
            if (target_list['length'] > 0x0 && 声思似诉平(self_id, target_list[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, target_list[0x0]) < sa_range && _0x5e97c3 > _0x2ac665 && _0x5e97c3 < _0x19e16c && _0x3ab1df > _0xb5506 && _0x3ab1df < _0x39814b) 江头夜送客(target_list[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x4c01fa, _0x41742c) {
        const _0x4b1951 = 音铮铮然有(_0x41742c);
        if (InvCleaner && modelist['ic_mode'] >= 0x2 && typeof clear_config[_0x4b1951['namespace']] !== 'undefined' && modelist['ic_mode'] == 0x2 || typeof clear_config[_0x4b1951['namespace']] == 'undefined' && modelist['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x4c01fa > cs_sort) && cs_current < cs_maxCount) {
            let _0x1041e5 = cs_black['length'] === 0x0 || cs_black['some'](_0x36397b => _0x4b1951['namespace']['includes'](_0x36397b));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x4b5ca8 => _0x4b1951['namespace']['includes'](_0x4b5ca8))) _0x1041e5 = false;
            if (_0x4c01fa < cs_min && _0x4c01fa > cs_max) _0x1041e5 = false;
            if (_0x4b1951['attackDamage'] !== 0x0 && _0x4b1951['attackDamage'] < cs_min_damage) _0x1041e5 = false;
            if (_0x4b1951['damage'] !== 0x0 && _0x4b1951['damage'] < cs_min_lasting) _0x1041e5 = false;
            if (!cs_weapon && _0x4b1951['attackDamage'] > 0x0 && _0x4b1951['damage'] > 0x0) _0x1041e5 = false;
            if (!cs_armor && _0x4b1951['attackDamage'] === 0x0 && _0x4b1951['damage'] > 0x0) _0x1041e5 = false;
            if (!cs_other && _0x4b1951['attackDamage'] === 0x0 && _0x4b1951['damage'] === 0x0) _0x1041e5 = false;
            if (cs_sort) cs_sort = _0x4c01fa;
            if (_0x1041e5) cs_timer = 0x0;
            if (_0x1041e5) cs_current++;
            if (cs_close) setTimeout(() => closeInventory(), cs_delay * 0x32);
            return _0x1041e5;
        }
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x4c01fa + '\n§e物品NBT数据: §r' + _0x41742c, '§r');
    }

    function onPlayerAuthInputEvent(_0x4a0b24) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x4a0b24.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x4a0b24.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x4a0b24['pos']['x']['toFixed'](0x2) + ', ' + _0x4a0b24['pos']['y']['toFixed'](0x2) + ',' + _0x4a0b24['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x4a0b24['delta']['x']['toFixed'](0x2) + ', ' + _0x4a0b24['delta']['y']['toFixed'](0x2) + ', ' + _0x4a0b24['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x4a0b24['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x4a0b24['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x4a0b24['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x4a0b24['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x4a0b24['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x472e50) {
        if (DumpRequestSauth) {
            File['write'](NoveXare_path + '/SauthRequest.json', _0x472e50);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x301a81 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x185c04 = _0x472e50['replace'](琵琶行浔阳(_0x472e50, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x301a81)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x185c04['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x13e30e) {
        if (DumpResponseSauth) {
            File['write'](NoveXare_path + '/SauthResponse.json', _0x13e30e);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x31e1c9) {
        if (DumpCookieSauth) {
            File['write'](NoveXare_path + '/SauthCookie.json', _0x31e1c9);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x30103d = JSON['parse'](Sauths);
            if (typeof _0x30103d['sauth_json'] !== 'undefined') _0x30103d = _0x30103d['sauth_json'];
            return _0x30103d;
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