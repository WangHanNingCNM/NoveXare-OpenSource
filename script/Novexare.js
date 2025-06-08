/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 06 - 08  23: 10: 21
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e06§b08§f231021§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x4359c7, _0x10132e, _0x54f389) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x4359c7,
            'y': _0x10132e,
            'z': _0x54f389
        },
        'type': 0x11
    });
    const getPos = _0x551bfb => {
        let _0x556fec = getEntityPos(_0x551bfb);
        if (_0x556fec) _0x556fec['y'] += getPos_offset;
        return _0x556fec || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x1833df, _0x1a60a1, _0x38f352) => sendPlayerAuthInput({
        'pos': {
            'x': _0x1833df,
            'y': _0x1a60a1,
            'z': _0x38f352
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
    const movePlayer = (_0x3a031e, _0x5b2d25, _0x3d0b4c, _0x3f5b05 = true) => sendMovePlayer({
        'id': self_id,
        'pos': {
            'x': _0x3a031e,
            'y': _0x5b2d25,
            'z': _0x3d0b4c
        },
        'yHeadRot': 0x0,
        'mode': 0x0,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        },
        'ground': _0x3f5b05
    });
    const 臣密言臣以 = _0x261eda => {
        const _0x19e75e = new Uint8Array(_0x261eda);
        let _0x386d07 = '';
        for (let _0x2dfb8b = 0x0; _0x2dfb8b < _0x19e75e['length'];) {
            let _0x45c9b9 = _0x19e75e[_0x2dfb8b++];
            if (_0x45c9b9 <= 0x7f) _0x386d07 += String['fromCharCode'](_0x45c9b9);
            else if (_0x45c9b9 >> 0x5 === 0x6) {
                let _0x54c807 = _0x19e75e[_0x2dfb8b++];
                _0x386d07 += String['fromCharCode']((_0x45c9b9 & 0x1f) << 0x6 | _0x54c807 & 0x3f);
            } else if (_0x45c9b9 >> 0x4 === 0xe) {
                let _0x17fb54 = _0x19e75e[_0x2dfb8b++];
                let _0x58bffa = _0x19e75e[_0x2dfb8b++];
                _0x386d07 += String['fromCharCode']((_0x45c9b9 & 0xf) << 0xc | (_0x17fb54 & 0x3f) << 0x6 | _0x58bffa & 0x3f);
            } else if (_0x45c9b9 >> 0x3 === 0x1e) {
                let _0x4e8892 = _0x19e75e[_0x2dfb8b++];
                let _0x2323ad = _0x19e75e[_0x2dfb8b++];
                let _0x31ebe3 = _0x19e75e[_0x2dfb8b++];
                let _0x5093fd = (_0x45c9b9 & 0x7) << 0x12 | (_0x4e8892 & 0x3f) << 0xc | (_0x2323ad & 0x3f) << 0x6 | _0x31ebe3 & 0x3f;
                _0x386d07 += String['fromCodePoint'](_0x5093fd);
            }
        }
        return _0x386d07;
    };
    const 险衅夙遭闵 = (_0x52907d, _0x20b711, _0x5c9ddb, _0x330986) => {
        let _0x4bdd99 = _0x52907d['indexOf'](_0x20b711) + _0x20b711['length'];
        let _0xc1df07 = _0x52907d['indexOf'](_0x5c9ddb, _0x4bdd99);
        if (typeof _0x330986 !== 'undefined' && _0x52907d['indexOf'](_0x330986, _0x4bdd99) < _0xc1df07 && _0x52907d['indexOf'](_0x330986, _0x4bdd99) != -0x1) _0xc1df07 = _0x52907d['indexOf'](_0x330986, _0x4bdd99);
        if (_0x4bdd99 === -0x1 || _0xc1df07 === -0x1) return null;
        return _0x52907d['substring'](_0x4bdd99, _0xc1df07);
    };
    const 凶生孩六月 = _0x1b2089 => {
        let _0x332839 = _0x1b2089['split']('');
        let _0x5d6aef = '';
        let _0x5870f8 = '4c6e2a3b195d' ['split']('');
        for (let _0x561932 in _0x332839) _0x5d6aef += '§' + _0x5870f8[_0x561932 % _0x5870f8['length']] + _0x332839[_0x561932];
        return _0x5d6aef;
    };
    const 慈父见背行 = _0x1bab14 => {
        if (_0x1bab14['startsWith']('0x')) _0x1bab14 = _0x1bab14['slice'](0x2);
        const _0x4d16a9 = [];
        for (let _0xcb344 = 0x0; _0xcb344 < _0x1bab14['length']; _0xcb344 += 0x2) {
            const _0x124165 = parseInt(_0x1bab14['slice'](_0xcb344, _0xcb344 + 0x2), 0x10);
            _0x4d16a9['push'](_0x124165);
        }
        return new Uint8Array(_0x4d16a9);
    };
    const 年四岁舅夺 = (_0x48da48, _0x33f7da, _0x3052a7 = 0x1) => {
        if (_0x3052a7 == 0x1) sendRpc(_0x48da48, 慈父见背行(_0x33f7da));
        if (_0x3052a7 == 0x2) sendRpc(_0x48da48, _0x33f7da);
        if (_0x3052a7 == 0x3) {
            const _0x5500b9 = new Uint8Array(str['length']);
            for (let _0x21ea8b = 0x0; _0x21ea8b < str['length']; _0x21ea8b++) _0x5500b9[_0x21ea8b] = str['charCodeAt'](_0x21ea8b);
            sendRpc(_0x48da48, _0x5500b9);
        }
    };
    const 母志祖母刘 = _0x32dcf7 => {
        if (nx_nbts[_0x32dcf7] !== undefined) return nx_nbts[_0x32dcf7];
        const _0x1225b9 = 险衅夙遭闵(_0x32dcf7, ',Name:"', '",WasPickedUp');
        if (_0x1225b9 === '' || typeof _0x1225b9 !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x3a57af = Number(险衅夙遭闵(_0x32dcf7, ',aux:', ','));
        const _0x381e39 = Number(险衅夙遭闵(_0x32dcf7, 'Count:', 'b,D'));
        const _0x34ad7b = _0x32dcf7['includes'](',name:"') ? 险衅夙遭闵(_0x32dcf7, ',name:"', '",') : _0x1225b9['replace']('minecraft:', '');
        const _0x5d2cf2 = _0x32dcf7['includes'](',netId:') ? Number(险衅夙遭闵(_0x32dcf7, ',netId:', '}')) : 0x0;
        const _0x11df31 = _0x32dcf7['includes']('maxDamage') ? Number(险衅夙遭闵(_0x32dcf7, ',maxDamage:', ',')) : 0x0;
        const _0x142883 = _0x32dcf7['includes']('attackDamage') ? Number(险衅夙遭闵(_0x32dcf7, 'attackDamage:', ',')) : 0x1;
        const _0xedaf37 = _0x32dcf7['includes']('customColor') ? 险衅夙遭闵(_0x32dcf7, 'customColor:', '}', ',') : '';
        const _0x40cdcc = _0x32dcf7['includes']('ench:[{') ? ('[{' + 险衅夙遭闵(_0x32dcf7, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x473e5e = _0x32dcf7['startsWith']('{Block:');
        const _0x116ed2 = {
            'name': _0x34ad7b,
            'namespace': _0x1225b9,
            'aux': _0x3a57af,
            'damage': _0x11df31,
            'attackDamage': _0x142883,
            'count': _0x381e39,
            'color': _0xedaf37,
            'isBlock': _0x473e5e,
            'id': _0x5d2cf2,
            'enchants': JSON['parse'](_0x40cdcc)
        };
        nx_nbts[_0x32dcf7] = _0x116ed2;
        return _0x116ed2;
    };
    const 愍臣孤弱躬 = _0x564031 => {
        const _0xb69c5f = getEntitySize(_0x564031);
        const _0x2db659 = getEntityMotion(_0x564031);
        const _0x123d91 = getPos(_0x564031);
        const _0x27e424 = getEntityName(_0x564031);
        const _0x59e734 = getEntityNamespace(_0x564031);
        const _0x571244 = 能上报臣具(self_id, _0x564031);
        const _0x19d27f = getCarried(_0x564031);
        const _0x3beeb7 = 臣荣举臣秀(_0x564031);
        const _0x435913 = getEntityAttribute(_0x564031, 'minecraft:health');
        const _0x438ad6 = getEntityAttribute(_0x564031, 'minecraft:movement');
        const _0x4fe444 = getEntityTypeId(_0x564031);
        const _0x23491a = getEntityTarget(_0x564031);
        const _0x221a55 = getPlayerInventorySize(_0x564031);
        const _0x3efe40 = getPlayerHotBarSize(_0x564031);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x564031);
        const _0x5cbdda = _0x4f2ecc => _0x4f2ecc['toFixed'](0x2);
        const _0x4f6181 = ['唯一ID:' + _0x564031 + ' 昵称:' + _0x27e424 + '§r 实体命名空间:' + _0x59e734 + ' 水平碰撞箱:' + _0x5cbdda(_0xb69c5f['x']) + ' 垂直碰撞箱:' + _0x5cbdda(_0xb69c5f['y']) + ' Mot速度:' + _0x3beeb7, 'ability速度:[max:' + _0x438ad6['max'] + ', min:' + _0x438ad6['min'] + ', current:' + _0x438ad6['current'] + '] 血量:[max:' + _0x435913['max'] + ', min:' + _0x435913['min'] + ', current:' + _0x435913['current'] + ']', '手持:[id:' + _0x19d27f['id'] + ', namespace:' + _0x19d27f['namespace'] + ', name:' + _0x19d27f['name'] + '§r, aux:' + _0x19d27f['aux'] + '] 距离:' + _0x571244 + ' 实体类型:' + _0x4fe444, '仰俯角:' + _0x5cbdda(pitch) + '° 偏航角:' + _0x5cbdda(yaw) + '° 仇恨目标:' + getEntityName(_0x23491a) + '^' + _0x23491a, '移动值:[' + _0x5cbdda(_0x2db659['x']) + ', ' + _0x5cbdda(_0x2db659['y']) + ', ' + _0x5cbdda(_0x2db659['z']) + '] 坐标值:[' + _0x5cbdda(_0x123d91['x']) + ', ' + _0x5cbdda(_0x123d91['y']) + ', ' + _0x5cbdda(_0x123d91['z']) + ']', '背包容量:' + _0x221a55 + ' 物品栏容量:' + _0x3efe40];
        return _0x4f6181['join']('\n');
    };
    const getCarried = _0x3337f3 => 母志祖母刘(getEntityCarriedItem(_0x3337f3));
    const getOffhand = _0x2f15bf => 母志祖母刘(getEntityOffhandItem(_0x2f15bf));
    const getInventory = (_0x1d2d82, _0x23bdab) => 母志祖母刘(getPlayerInventoryItem(_0x1d2d82, _0x23bdab));
    const 亲抚养臣少 = (_0x1243da, _0x4aea62, _0x36c715, _0x3ae5a3 = false, _0xb42d4b = false) => {
        let _0x13eda9 = {
            'x': _0x1243da,
            'y': _0x4aea62,
            'z': _0x36c715
        };
        const _0x6792b1 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x336558 = _0x17db9f => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x17db9f['map'](_0x51e7e6 => ({
                'type': _0x51e7e6,
                'pos': _0x13eda9,
                'value': 0x1
            }))
        });
        const _0x2aed2f = _0x54ce5c => sendPlayerAction({
            'id': self_id,
            'pos': _0x13eda9,
            'type': _0x54ce5c
        });
        if (_0x3ae5a3) _0x336558(_0x6792b1);
        if (_0xb42d4b) _0x6792b1['forEach'](_0x2dd662 => _0x2aed2f(_0x2dd662));
    };
    const 多疾病九岁 = (_0x3da39a, _0x557e41, _0x409162 = true, _0x38464a = false) => {
        if (_0x3da39a === _0x557e41 || getScreenName() !== 'inventory_screen') return false;
        let _0xcd9816 = getInventory(self_id, _0x3da39a);
        let _0x171f65 = getInventory(self_id, _0x557e41);
        if (_0x409162 && _0x557e41 < 0x9 && _0x171f65['namespace'] != 'minecraft:air') {
            for (let _0x445546 = 0x23; _0x445546 > 0x8; _0x445546--) {
                const _0x25b62c = getInventory(self_id, _0x445546);
                if (_0x25b62c['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x557e41, _0x445546);
                    break;
                }
            }
        }
        if (_0x38464a && _0xcd9816['namespace'] === 'minecraft:air' && _0x171f65['namespace'] !== 'minecraft:air') moveInventoryItem(_0x557e41, _0x3da39a);
        if (_0xcd9816['namespace'] !== 'minecraft:air' && _0x171f65['namespace'] === 'minecraft:air') moveInventoryItem(_0x3da39a, _0x557e41);
    };
    const 不行零丁孤 = (_0x1c827a, _0xd75840) => {
        let _0xed7390 = _0xd75840 - 0xb4;
        if (_0x1c827a > 0x5a) _0x1c827a -= 0x5a;
        if (_0x1c827a < -0x5a) _0x1c827a += 0x5a;
        if (_0xed7390 > 0xb4) _0xed7390 = _0xed7390 - 0x168;
        if (_0xed7390 < -0xb4) _0xed7390 = 0x168 + _0xed7390;
        if (getPlayerViewPerspective() === 0x0 || _0xed7390 > 0xb4 || _0xed7390 < -0xb4 || _0x1c827a > 0x5a || _0x1c827a < -0x5a) return false;
        setEntityBodyRot(self_id, _0xed7390);
        setEntityRot(self_id, _0x1c827a, _0xed7390);
    };
    const 苦至于成立 = _0x2b0ad9 => {
        const _0x408307 = getEntityAttribute(_0x2b0ad9, 'minecraft:health');
        const _0x16ab35 = getPos(_0x2b0ad9);
        if (typeof _0x16ab35 != 'object' || !_0x16ab35 || !_0x16ab35['x'] || !_0x16ab35['y'] || !_0x16ab35['z']) return false;
        if (!findEntity(_0x2b0ad9) && (_0x408307['max'] === undefined || _0x408307['min'] === undefined || _0x408307['current'] === undefined)) return false;
        if (_0x408307['current'] > 0x0) return true;
    };
    const 既无伯叔终 = (_0x4bd588, _0x4d893e) => {
        if (typeof globalThis[_0x4bd588] === 'undefined' || globalThis[_0x4bd588] === _0x4d893e) return;
        globalThis[_0x4bd588] = _0x4d893e;
        nx_cfg[_0x4bd588] = _0x4d893e;
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x4d893e ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x4bd588['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0x4d893e) 非臣陨首所(0x0, _0x4bd588, '§oEnable ◆', '§a');
                else 非臣陨首所(0x0, _0x4bd588, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0x4bd588, _0x4bd588 + (_0x4d893e ? ' - Enable' : ' - Disable'), _0x4bd588 + (_0x4d893e ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x4bd588, _0x4bd588 + (_0x4d893e ? ' - Enable' : ' - Disable'), _0x4bd588 + (_0x4d893e ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0x4bd588] !== 'undefined') addCustomArrayList(_0x4bd588, nx_arraylist[_0x4bd588]['CN'], nx_arraylist[_0x4bd588]['EN'], _0x4d893e);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x4bd588['includes']('_')) addCustomArrayList(_0x4bd588, _0x4bd588, _0x4bd588, _0x4d893e);
        if (typeof nx_binds[_0x4bd588] !== 'undefined') nx_binds[_0x4bd588]['forEach'](_0x1156ea => 既无伯叔终(_0x1156ea, _0x4d893e));
        if (typeof nx_raBinds[_0x4bd588] !== 'undefined' && !nx_raBinds[_0x4bd588]['isNX']) callModule(nx_funcid[nx_raBinds[_0x4bd588]['module']], JSON['stringify']({
            'value': _0x4d893e
        }));
    };
    const 鲜兄弟门衰 = (_0x38bef7, _0x1da86d, _0xfe7ee3, _0x242f7b, _0x22652b, _0x59d615 = false, _0x67ffd7 = {}) => {
        for (let _0x2dd74d = 0x0; _0x2dd74d < _0x22652b; _0x2dd74d++) addParticle(Number(_0x38bef7), _0x1da86d, _0xfe7ee3, _0x242f7b, _0x59d615 ? _0x67ffd7['x'] : _0x1da86d, _0x59d615 ? _0x67ffd7['y'] : _0xfe7ee3, _0x59d615 ? _0x67ffd7['z'] : _0x242f7b, 0x1, _0x59d615);
    };
    const 祚薄晚有儿 = () => {
        const _0x4f9e04 = getEntityCarriedItem(self_id);
        const _0x344971 = getPos(self_id);
        if (!_0x4f9e04['includes']('count:0')) buildBlock(self_id, _0x344971['x'], _0x344971['y'], _0x344971['z'], 0x6);
    };
    const 息外无期功 = _0x320738 => {
        const _0x5ddfea = 曾废离愍(self_id, _0x320738);
        const _0x2319a4 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x320738 > 0x8) 多疾病九岁(_0x320738, 0x8, true, false);
        if (_0x2319a4['includes'](_0x5ddfea) && selectPlayerInventorySlot(self_id, _0x320738) && getPlayerSelectItemSlot(self_id) === _0x320738) 祚薄晚有儿();
    };
    const 强近之亲内 = (_0x485a90, _0x1b7c46, _0x528251, _0x4656f7) => {
        let _0x24bfa7 = _0x1b7c46 > 0x0;
        _0x1b7c46 = Math['abs'](_0x1b7c46);
        let _0x33d893 = _0x528251 * Math['cos'](_0x1b7c46 * Math['PI'] / 0xb4);
        let _0x44a67d = _0x528251 * Math['sin'](_0x1b7c46 * Math['PI'] / 0xb4);
        let _0x3a1fa0 = _0x44a67d / _0x4656f7;
        let _0xff9496 = _0x4656f7 * (_0x3a1fa0 * _0x3a1fa0) * 0.5;
        let _0x38c756 = _0x33d893 * _0x3a1fa0;
        let _0x4b45c2 = -_0xff9496 / (_0x38c756 * _0x38c756);
        return {
            'data': _0x4b45c2 * Math['pow'](_0x485a90 - (_0x24bfa7 ? -_0x38c756 : _0x38c756), 0x2) + _0xff9496,
            'bool': _0x24bfa7
        };
    };
    const getLocal = _0x44254a => typeof _0x44254a === 'undefined' || _0x44254a === null ? getLocalPlayerUniqueID() : _0x44254a;
    const 无应门五尺 = (_0x2eed3c, _0x3bb4de, _0xdf6beb, _0x11f555 = false) => {
        const _0x48c9a6 = getBlock(_0x2eed3c, _0x3bb4de, _0xdf6beb);
        if (_0x48c9a6['id'] !== 0x0) return;
        const _0x177fdf = [
            [_0x2eed3c, _0x3bb4de + 0x1, _0xdf6beb],
            [_0x2eed3c, _0x3bb4de - 0x1, _0xdf6beb],
            [_0x2eed3c, _0x3bb4de, _0xdf6beb + 0x1],
            [_0x2eed3c, _0x3bb4de, _0xdf6beb - 0x1],
            [_0x2eed3c + 0x1, _0x3bb4de, _0xdf6beb],
            [_0x2eed3c - 0x1, _0x3bb4de, _0xdf6beb]
        ];
        _0x177fdf['some']((_0x5c64ec, _0x25bf69) => {
            const _0x31aee0 = getBlock(_0x5c64ec[0x0], _0x5c64ec[0x1], _0x5c64ec[0x2]);
            if (_0x31aee0['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x5c64ec[0x0], _0x5c64ec[0x1], _0x5c64ec[0x2], _0x25bf69);
        });
    };
    const 立形影相吊 = (_0x208ba7, _0x2a6d7d) => {
        const _0x8c5e6f = getPos(self_id);
        sendSound(_0x208ba7, _0x8c5e6f['x'], _0x8c5e6f['y'], _0x8c5e6f['z'], _0x2a6d7d);
    };
    const 而刘夙婴疾 = (_0x1c3cb5, _0x28b63f, _0xbedb18) => {
        const _0x238c03 = getPos(self_id);
        motion_list['push']([_0x1c3cb5 - _0x238c03['x'], _0x28b63f - _0x238c03['y'], _0xbedb18 - _0x238c03['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 病常在床蓐 = (_0xf0aaa3, _0x1af9a9) => {
        let _0x49e882 = _0xf0aaa3 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0xf0aaa3);
        if (typeof _0x1af9a9 !== 'undefined') _0x49e882['namespace'] = _0x1af9a9;
        return Array['from']({
            'length': 0x24
        }, (_0x507aa3, _0xbf980a) => getInventory(self_id, _0xbf980a))['filter'](_0x55c505 => _0x55c505['namespace'] === _0x49e882['namespace'] && (typeof _0x1af9a9 !== 'undefined' || _0x55c505['aux'] === _0x49e882['aux']))['reduce']((_0x1bc053, _0x406a96) => _0x1bc053 + _0x406a96['count'], 0x0);
    };
    const 臣侍汤药未 = (_0x4915b5, _0x32119f, _0x54e48b = 'hotbar', _0x53f84b = 0x0) => {
        const _0x294967 = _0x54e48b == 'hotbar' ? 0x9 : 0x24;
        let _0x4879b4 = Array['from']({
            'length': _0x294967
        }, (_0x465c99, _0x40df6e) => getInventory(_0x4915b5, _0x40df6e));
        let _0x5ef120 = _0x4879b4['some'](_0x41a6dc => _0x41a6dc['namespace']['includes'](_0x32119f));
        let _0x370b9f = _0x4879b4['reduce']((_0xd26cc, _0x25d0bf) => _0xd26cc + _0x25d0bf['count'], 0x0);
        return _0x5ef120 && _0x370b9f > _0x53f84b;
    };
    const 曾废离愍 = (_0x3860eb, _0x2a0a51, _0x261d87) => {
        let _0x21ed3b = _0x2a0a51 === -0x1 ? getCarried(_0x3860eb) : getInventory(_0x3860eb, _0x2a0a51);
        if (!_0x21ed3b['namespace']['includes']('_') && typeof _0x261d87 === 'undefined') return 'other';
        let _0xa7d4f6 = typeof _0x261d87 === 'undefined' ? _0x21ed3b['namespace']['replace']('minecraft:', '') : _0x261d87['replace']('minecraft:', '');
        const _0x24ebb7 = _0xa7d4f6['split']('_');
        return _0x24ebb7[0x1];
    };
    const getEntityMaxDamage = _0x41a7a7 => Array['from']({
        'length': 0x24
    }, (_0x412d09, _0xe93c70) => 逮奉圣朝沐(_0x41a7a7, _0xe93c70))['reduce']((_0x32fbdc, _0x1b2e09) => Math['max'](_0x32fbdc, _0x1b2e09), 0x0);
    const 一作悯孑立 = (_0x23028f, _0x27911a, _0x11c29b = false) => {
        let _0x4db410 = _0x11c29b ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x55dbc5 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x151798 = 0x0; _0x151798 < 0x24; _0x151798++) {
            const _0x279912 = 曾废离愍(_0x23028f, _0x151798);
            const _0x4470c9 = _0x55dbc5['indexOf'](_0x279912);
            if (_0x4470c9 === -0x1) continue;
            const _0xb1d28f = 一作独立(_0x23028f, _0x151798);
            if (!_0x11c29b && _0x279912 === _0x27911a && _0x4db410 < _0xb1d28f) _0x4db410 = _0xb1d28f;
            if (_0x11c29b && _0x4db410[_0x4470c9] < _0xb1d28f) _0x4db410[_0x4470c9] = _0xb1d28f;
        }
        return _0x4db410;
    };
    const 一作独立 = (_0xfd4452, _0x3d054b, _0xfdf196 = true, _0x207648 = true) => {
        let _0x1794cb = _0x3d054b === -0x1 ? getCarried(_0xfd4452) : getInventory(_0xfd4452, _0x3d054b);
        if (_0x3d054b < -0x1) _0x1794cb = 母志祖母刘(getPlayerArmorItem(_0xfd4452, Math['abs'](_0x3d054b) - 0x2));
        if (_0x1794cb['count'] === 0x0 || _0x1794cb['damage'] === 0x0 || _0x1794cb['attackDamage'] > 0x0) return 0x0;
        if (!_0x207648) return _0x1794cb['damage'];
        let _0x5342e4 = 0x0;
        let _0x1582ba = _0x1794cb['enchants']['findIndex'](_0x1fb605 => _0x1fb605['id'] === 0x0);
        if (_0x1582ba > -0x1) _0x5342e4 = _0x1794cb['enchants'][_0x1582ba]['lvl'];
        if (!_0xfdf196) return 0x1 + _0x5342e4 / 0x64;
        return _0x1794cb['damage'] * (0x1 + _0x5342e4 / 0x64);
    };
    const 逮奉圣朝沐 = (_0x24b48e, _0x25e9ac, _0x2ff354 = true, _0x4a2353 = true) => {
        let _0x5bc544 = _0x25e9ac === -0x1 ? getCarried(_0x24b48e) : getInventory(_0x24b48e, _0x25e9ac);
        if (_0x5bc544['count'] === 0x0 || _0x5bc544['attackDamage'] === 0x0 || _0x5bc544['attackDamage'] === 0x0) return 0x1;
        if (!_0x4a2353) return _0x5bc544['attackDamage'];
        let _0x17be90 = 0x0;
        let _0xd2e62d = _0x5bc544['enchants']['findIndex'](_0x385b8f => _0x385b8f['id'] === 0x9);
        if (_0xd2e62d > -0x1) _0x17be90 = _0x5bc544['enchants'][_0xd2e62d]['lvl'] * 1.25;
        if (!_0x2ff354) return _0x17be90;
        return _0x5bc544['attackDamage'] + _0x17be90;
    };
    const b2s = _0x4ff832 => _0x4ff832 ? 'true' : 'false';
    const 浴清化前太 = (_0x4c0d97, _0x449780, _0x310755) => {
        let _0x916905 = _0x4c0d97['split'](_0x449780)['length'] - 0x1;
        let _0x50cb23 = 0x0;
        let _0xbf23e5 = [];
        for (let _0x1a48d0 = 0x0; _0x1a48d0 < _0x916905; _0x1a48d0++) {
            let _0x5bc8c4 = _0x4c0d97['indexOf'](_0x449780, _0x50cb23) + _0x449780['length'];
            let _0x1b3e8f = _0x4c0d97['indexOf'](_0x310755, _0x5bc8c4);
            if (_0x1b3e8f === -0x1 || _0x5bc8c4 === -0x1) break;
            _0x50cb23 = _0x1b3e8f;
            _0xbf23e5['push'](_0x4c0d97['substring'](_0x5bc8c4, _0x1b3e8f));
        }
        return _0x916905 > 0x1 ? _0xbf23e5 : _0xbf23e5[0x0];
    };
    const 守臣逵察臣 = (_0x4d407c, _0x15077a) => {
        if (ECAttack) 年四岁舅夺(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x4d407c, _0x15077a);
    };
    const 孝廉后刺史 = (_0x1f3949, _0x5e4725, _0x4e41bd, _0x4751b4) => {
        if (typeof _0x4e41bd === 'undefined') _0x4e41bd = -0x1;
        if (typeof _0x4751b4 === 'undefined') _0x4751b4 = -0x1;
        let _0x34de54 = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x2e0cd8 = getInventory(_0x1f3949, index);
            if (!_0x2e0cd8['namespace'] || !_0x2e0cd8['name']) continue;
            if (_0x2e0cd8['namespace']['includes'](_0x5e4725) && (_0x2e0cd8['aux'] === _0x4e41bd || _0x4e41bd === -0x1) && (_0x2e0cd8['name']['includes'](_0x4751b4) || _0x4751b4 === -0x1)) {
                _0x34de54 = index;
                break;
            }
        }
        return _0x34de54;
    };
    const 臣荣举臣秀 = _0xef276a => {
        const _0x20c15b = getEntityMotion(_0xef276a);
        const _0xce3945 = Math['sqrt'](_0x20c15b['x'] * _0x20c15b['x'] + _0x20c15b['y'] * _0x20c15b['y'] + _0x20c15b['z'] * _0x20c15b['z']);
        return _0xce3945 * 0x14;
    };
    const 才臣以供养 = (_0x401a77, _0x6a8772) => {
        const _0x39131e = _0x6a8772 - _0x401a77 + 0x1;
        return Math['floor'](Math['random']() * _0x39131e) + _0x401a77;
    };
    const 无主辞不赴 = (_0x229823, _0x2b76d0, _0x441cb7) => {
        return {
            'x': _0x2b76d0['x'] + _0x229823['x'] * _0x441cb7,
            'y': _0x2b76d0['y'] + _0x229823['x'] * _0x441cb7,
            'z': _0x2b76d0['z'] + _0x229823['z'] * _0x441cb7
        };
    };
    const 命诏书特下 = _0x348e71 => {
        if (_0x348e71 < 0x3c) return _0x348e71 + 's';
        if (_0x348e71 >= 0x3c) return Math['floor'](_0x348e71 / 0x3c) + 'min ' + _0x348e71 % 0x3c + 's';
    };
    const 拜臣郎中寻 = (_0xc5d5ea, _0x5bf573, _0xc273c9, _0x5c4ea7 = 0x0, _0x4a5e43 = 0x0) => {
        if (!_0xc273c9) return true;
        _0xc5d5ea['y'] += _0x5c4ea7;
        _0x5bf573['y'] += _0x4a5e43;
        const _0x356c31 = 不许臣之进(_0xc5d5ea, _0x5bf573, 'yaw_pos');
        const _0x5015ad = -不许臣之进(_0xc5d5ea, _0x5bf573, 'pitch_pos');
        const _0x1942df = getDistance(_0xc5d5ea, _0x5bf573);
        let _0x4ef599 = true;
        for (let _0x1fc4b7 = 0x0; _0x1fc4b7 < _0x1942df; _0x1fc4b7 += 0.5) {
            const _0x1075e8 = 洗马猥以微(_0x1fc4b7, _0x5bf573, {
                'yaw': _0x356c31,
                'pitch': _0x5015ad
            });
            const _0x27c958 = getBlock(_0x1075e8['x'], _0x1075e8['y'], _0x1075e8['z']);
            if (_0x27c958['namespace'] != 'minecraft:air') {
                _0x4ef599 = false;
                break;
            }
        }
        return _0x4ef599;
    };
    const 蒙国恩除臣 = (_0x4d1b72, _0x190802) => {
        let _0x22b407 = getWorldPlayerList()['sort']((_0x33302b, _0x5a9152) => _0x33302b['name']['localeCompare'](_0x5a9152['name']));
        let _0xeb2a8e = _0x22b407['length'] > 0x0 ? _0x22b407['map'](_0x9bfec7 => ({
            'text': '§e' + _0x9bfec7['name'] + '\n§b距离: ' + 能上报臣具(self_id, _0x9bfec7['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x58879e = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0xeb2a8e
        };
        const _0x21ce4e = JSON['stringify'](_0x58879e);
        addForm(_0x21ce4e, function(_0x8e8f66) {
            if (_0x22b407['length'] > 0x0 && _0x8e8f66 >= 0x0) {
                var _0x184415 = _0x190802 === 0x0 ? _0x22b407[_0x8e8f66]['name'] : _0x22b407[_0x8e8f66]['id'];
                if (typeof globalThis[_0x4d1b72] === 'object') globalThis[_0x4d1b72]['push'](_0x184415);
                if (typeof globalThis[_0x4d1b72] === 'string') globalThis[_0x4d1b72] = _0x184415;
                非臣陨首所(0x0, 'addTarget', _0x184415, '§r');
            }
        });
    };
    const 洗马猥以微 = (_0x1bd997, _0x1b99d0, _0x344426) => {
        if (_0x1bd997 === 0x0) return _0x1b99d0;
        let _0x1e9a2a = _0x1bd997 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x344426;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        if (pitch < -0x5a) pitch = -0x5a;
        if (pitch > 0x5a) pitch = 0x5a;
        _0x1bd997 = Math['abs'](_0x1bd997);
        const _0x3ada2d = yaw * Math['PI'] / 0xb4;
        const _0xba85da = pitch * Math['PI'] / 0xb4;
        let _0x1d650d = pitch != 0x0 ? Math['sin'](_0xba85da) * _0x1bd997 : 0x0;
        let _0x1bd5cc = pitch != 0x0 ? _0x1d650d / Math['tan'](_0xba85da) : _0x1bd997;
        let _0xf7fc8a = _0x1bd5cc < 0x0;
        _0x1bd5cc = Math['abs'](_0x1bd5cc);
        const _0x419bd3 = Math['cos'](_0x3ada2d) * _0x1bd5cc;
        const _0x1eebd1 = Math['sin'](_0x3ada2d) * _0x1bd5cc;
        let _0x3dddda = -Math['sin'](_0x3ada2d) * _0x1bd5cc;
        let _0x5a887e = Math['cos'](_0x3ada2d) * _0x1bd5cc;
        if (_0x1e9a2a || _0xf7fc8a) {
            _0x3dddda = -_0x3dddda;
            if (!_0xf7fc8a) _0x1d650d = -_0x1d650d;
            _0x5a887e = -_0x5a887e;
        }
        return {
            'x': _0x1b99d0['x'] + _0x3dddda,
            'y': _0x1b99d0['y'] - _0x1d650d,
            'z': _0x1b99d0['z'] + _0x5a887e
        };
    };
    const getPlayerItemCount = _0x3d2c20 => Array['from']({
        'length': 0x24
    }, (_0x30d5ca, _0x22f1cc) => getInventory(_0x3d2c20, _0x22f1cc))['filter'](_0x5d81c7 => _0x5d81c7['count'] !== 0x0)['reduce']((_0x3de085, _0x1658b7) => _0x3de085 + _0x1658b7['count'], 0x0);
    const isSimilar = (_0x235707, _0xc33f1c, _0x57fee5) => Math['abs'](_0x235707 - _0xc33f1c) < _0x57fee5;
    const 贱当侍东宫 = _0x3116ae => {
        let _0x186cb5 = [];
        if (at_entity) _0x186cb5['push'](...getEntityList());
        if (at_player) _0x186cb5['push'](...getPlayerList());
        let _0x5d953d = Math['min'](at_maxCount, _0x186cb5['length']);
        let _0x3017be = [];
        for (const _0x1d7559 of _0x186cb5) {
            if (!苦至于成立(_0x1d7559)) continue;
            const _0x2f3810 = getEntityNamespace(_0x1d7559);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x164b35 => _0x2f3810['includes'](_0x164b35)) != at_back) continue;
            const _0x46d1db = getPos(_0x1d7559);
            const _0x20cdc4 = getDistance(_0x46d1db, getPos(_0x3116ae));
            if ((_0x20cdc4 > at_maxDist || _0x20cdc4 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x2cf56a = getEntityAttribute(_0x1d7559, 'minecraft:health');
            if (at_heal && (!_0x2cf56a || _0x2cf56a['min'] > _0x2cf56a['max'] || _0x2cf56a['max'] > 0x186a0 || _0x2cf56a['current'] <= 0x0 || _0x2cf56a['max'] === 0x0) != at_back) continue;
            if (_0x2f3810 === 'minecraft:player') {
                const _0x2f7ed7 = getEntityRot(_0x1d7559);
                const _0x11433d = at_BWM ? getEntityAttribute(_0x1d7559, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x5454eb = getEntityName(_0x1d7559);
                if (at_BWM && _0x11433d['current'] >= 0.5 && !_0x5454eb['includes']('[') && !_0x5454eb['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x1d7559);
                    continue;
                }
                if (at_fov && (typeof _0x2f7ed7['yaw'] === 'undefined' || typeof _0x2f7ed7['pitch'] === 'undefined' || _0x2f7ed7['yaw']['toFixed'](0x2) === 0x0 || _0x2f7ed7['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x28cbe6 = getEntityFlag(_0x1d7559, 0x5);
                if (at_hide && _0x28cbe6 != at_back) continue;
                const _0x20eb05 = getEntityIsGround(_0x1d7559);
                if (at_ground && _0x20eb05 === at_back) continue;
                if (at_wall && !拜臣郎中寻(getPos(self_id), _0x46d1db, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x5454eb['startsWith'](ct_team) || ct_team['includes']('[') && _0x5454eb['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x1d7559) != at_back || !at_name && (_0x5454eb === getEntityName(_0x3116ae) || _0x5454eb === '') != at_back || (_0x46d1db['y'] > at_maxY || _0x46d1db['y'] < at_minY) != at_back && !at_infY || _0x1d7559 === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x498bc4 => _0x5454eb['includes'](_0x498bc4))) continue;
                const _0xafcb33 = teams_armor ? teams_blur ? getPlayerArmorItem(_0x1d7559, teams_slot) : 母志祖母刘(getPlayerArmorItem(_0x1d7559, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0xafcb33 != '{}' && _0xafcb33 === teams_self || !teams_blur && _0xafcb33['color'] && _0xafcb33['color'] === teams_self['color'])) continue;
                const _0x595e77 = at_size ? getEntitySize(_0x1d7559) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x595e77['x'] > at_defaultSize['x'] + 0.1 || _0x595e77['x'] < at_defaultSize['x'] - 0.1) && (_0x595e77['y'] > 1.66 || _0x595e77['y'] < 1.64) && (_0x595e77['y'] < at_defaultSize['y'] || _0x595e77['y'] > at_defaultSize['y'] + 0.1) && (_0x595e77['y'] > 1.51 || _0x595e77['y'] < 1.49)) != at_back) continue;
            }
            const _0x33f4cb = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x1d7559) : 0x0;
            const _0x243e0d = modes['at_mode'] === 0x3 ? 不许臣之进(self_id, _0x1d7559, 'yaw_rot') : 0x0;
            const _0x2db61c = modes['at_mode'] === 0x3 ? 不许臣之进(self_id, _0x1d7559, 'pitch_rot') : 0x0;
            const _0x3d5fab = modes['at_mode'] === 0x2 ? 逮奉圣朝沐(_0x1d7559, -0x1) : 0x0;
            _0x3017be['push']({
                'distance': _0x20cdc4,
                'target': _0x1d7559,
                'damage': _0x3d5fab,
                'heal': _0x2cf56a['current'],
                'crosshair': Math['sqrt'](_0x243e0d * _0x243e0d + _0x2db61c * _0x2db61c),
                'items': _0x33f4cb,
                'random': 才臣以供养(0x0, _0x186cb5['length'] - 0x1)
            });
        }
        const _0x127256 = [(_0x18f2e0, _0x133974) => _0x18f2e0['distance'] - _0x133974['distance'], (_0x3c4cc7, _0x2e2fdd) => _0x3c4cc7['heal'] - _0x2e2fdd['heal'], (_0x1053a1, _0x5efc34) => _0x1053a1['damage'] - _0x5efc34['damage'], (_0x11e576, _0x3f09a3) => _0x11e576['crosshair'] - _0x3f09a3['crosshair'], (_0x4b8d76, _0x199733) => _0x199733['items'] - _0x4b8d76['items'], (_0x15a327, _0x5d3413) => _0x15a327['random'] - _0x5d3413['random']];
        _0x3017be['sort'](_0x127256[modes['at_mode']]);
        if (at_reverse) _0x3017be['reverse']();
        if (at_infCount) return _0x3017be['map'](_0x290d6a => _0x290d6a['target']);
        return _0x3017be['slice'](0x0, _0x5d953d)['map'](_0x21127b => _0x21127b['target']);
    };
    const 非臣陨首所 = (_0xe5d0f7 = 0x0, _0x575f9c = 'Tip', _0x392471, _0x1b800b = '§r') => {
        if (!FuncTip) return false;
        if (_0xe5d0f7 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x575f9c + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1b800b) + ' ' + _0x392471);
        if (_0xe5d0f7 == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0x575f9c + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1b800b) + _0x392471;
            if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1b800b) + _0x392471;
        }
    };
    const getDistance = (_0x582d75, _0x18b742) => Math['sqrt'](Math['pow'](_0x582d75['x'] - _0x18b742['x'], 0x2) + Math['pow'](_0x582d75['y'] - _0x18b742['y'], 0x2) + Math['pow'](_0x582d75['z'] - _0x18b742['z'], 0x2));
    const 能上报臣具 = (_0x212507, _0x339fca) => {
        if (!苦至于成立(_0x212507) || !苦至于成立(_0x339fca)) return Infinity;
        const _0x5db217 = getPos(_0x212507);
        const _0x295915 = getPos(_0x339fca);
        return Math['sqrt'](Math['pow'](_0x5db217['x'] - _0x295915['x'], 0x2) + Math['pow'](_0x5db217['y'] - _0x295915['y'], 0x2) + Math['pow'](_0x5db217['z'] - _0x295915['z'], 0x2));
    };
    const 以表闻辞不 = (_0x2835a5, _0x2bce54) => {
        if (!苦至于成立(_0x2835a5) || !苦至于成立(_0x2bce54)) return Infinity;
        const _0x366ffd = getPos(_0x2835a5);
        const _0x417158 = getPos(_0x2bce54);
        return Math['sqrt'](Math['pow'](_0x366ffd['x'] - _0x417158['x'], 0x2) + Math['pow'](_0x366ffd['z'] - _0x417158['z'], 0x2));
    };
    const 就职诏书切 = (_0x2a7dff, _0x5c06be, _0x2d9e34) => {
        let _0xef0876 = {
            'fn-set-player-pos': {
                'x': _0x2a7dff,
                'y': _0x5c06be,
                'z': _0x2d9e34
            }
        };
        callModule(0x5, JSON['stringify'](_0xef0876));
    };
    const getHorizontalDistance = (_0x38faf4, _0x13a293) => Math['sqrt'](Math['pow'](_0x38faf4['x'] - _0x13a293['x'], 0x2) + Math['pow'](_0x38faf4['z'] - _0x13a293['z'], 0x2));
    const setRealPos = (_0x295a9d, _0x51fbf5, _0x46191a, _0x3eaf2f) => setEntityPos(_0x295a9d, _0x51fbf5, _0x46191a + setPos_offset, _0x3eaf2f);
    const setPos = (_0x3dda3b, _0x3b1836, _0x17adbc) => setRealPos(self_id, _0x3dda3b, _0x3b1836, _0x17adbc);
    const setMotion = (_0x3fec72, _0x5286c1, _0x5de9ec) => setEntityMotion(self_id, _0x3fec72, _0x5286c1, _0x5de9ec);
    const 峻责臣逋慢 = _0x2596eb => {
        if (_0x2596eb === '') return [];
        return _0x2596eb['split'](',');
    };
    const 郡县逼迫催 = _0x35547c => {
        if (typeof _0x35547c != 'object' || _0x35547c['length'] === 0x0) return '';
        return _0x35547c['join'](',');
    };
    const 臣上道州司 = (_0x288fd8, _0x55eded) => {
        let _0x3e26d4 = typeof _0x55eded === 'object' ? 郡县逼迫催(_0x55eded) : _0x55eded;
        let _0x283096 = typeof _0x55eded === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x288fd8 + '","placeholder":"","default":"' + _0x3e26d4 + '"}]}', function(_0x21eeca) {
            if (_0x283096 === 0x1) globalThis[_0x288fd8] = _0x21eeca;
            if (_0x283096 === 0x0) globalThis[_0x288fd8] = 峻责臣逋慢(_0x21eeca);
            非臣陨首所(0x0, 'setValue', _0x288fd8 + ' §7>>>§r ' + _0x21eeca, '§r');
            nx_cfg[_0x288fd8] = globalThis[_0x288fd8];
        });
    };
    const 临门急于星 = _0x10324b => {
        if (typeof _0x10324b != 'string' || _0x10324b === '') return 'None';
        let _0x196af7 = _0x10324b['match'](/\[(.*?)\]/g);
        if (_0x196af7 === null) return 'None';
        return _0x196af7[0x0];
    };
    const 火臣欲奉诏 = _0x13a21b => {
        if (!File['exist'](_0x13a21b)) return '{}';
        const _0x366757 = File['read'](_0x13a21b);
        return _0x366757 ? _0x366757 : '{}';
    };
    const 奔驰则刘病 = _0xa6cf2a => {
        const _0x5cea51 = getPos(_0xa6cf2a);
        let _0x4e9ab7 = _0xa6cf2a === self_id ? Math['floor'](_0x5cea51['y']) - 0x1 : Math['floor'](_0x5cea51['y']);
        return {
            'x': Math['floor'](_0x5cea51['x']),
            'y': _0x4e9ab7,
            'z': Math['floor'](_0x5cea51['z'])
        };
    };
    const 日笃欲苟顺 = (_0x4e13c1, _0x32c173) => {
        if (_0x4e13c1['length'] === _0x32c173['length']) {
            return [];
        }
        const _0x1417d2 = _0x4e13c1['length'] >= _0x32c173['length'] ? _0x4e13c1 : _0x32c173;
        const _0x295a81 = _0x4e13c1['length'] < _0x32c173['length'] ? _0x4e13c1 : _0x32c173;
        return _0x1417d2['filter'](_0x211ede => !_0x295a81['includes'](_0x211ede));
    };
    const 私情则告诉 = (_0x987730, _0x2bd219) => {
        const _0x2676da = aa_speed;
        const _0x3c320f = aa_g;
        const _0x596ccf = Math['atan'](Math['floor'](-_0x2bd219) / _0x987730);
        const _0x257a32 = Math['sqrt'](_0x987730 * _0x987730 + _0x2bd219 * _0x2bd219);
        const _0x2351d6 = Math['atan'](_0x257a32 / _0x2676da / 0x2 / _0x2676da * _0x3c320f);
        return -((_0x2351d6 + _0x596ccf) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x3a2ca1, _0x511d32) => _0x3a2ca1 / _0x511d32;
    const roundAngle = (_0x16aa8f, _0x385511) => Math['round'](_0x16aa8f / _0x385511) * _0x385511;
    const 不许臣之进 = (_0x429489, _0x54b40a, _0x3a5c0d, _0xab02e4 = false, _0x580eb9 = false, _0x448b9a = 0x0, _0x54670d = 0x0) => {
        let _0x458ae7 = typeof _0x54b40a != 'string' ? _0x54b40a : getPos(_0x54b40a);
        let _0x276b26 = typeof _0x429489 != 'string' ? _0x429489 : getPos(_0x429489);
        let _0x535907 = getEntityRot(_0x429489);
        if (!_0x458ae7 || !_0x276b26) return Infinity;
        const _0x33f22f = getHorizontalDistance(_0x276b26, _0x458ae7);
        if (_0xab02e4) _0x458ae7 = 无主辞不赴(getEntityMotion(_0x54b40a), getPos(_0x54b40a), getFlyTime(_0x33f22f, aa_speed) * 0x14);
        let _0x1db91a = _0x458ae7['x'] - _0x276b26['x'];
        let _0x702d36 = _0x276b26['y'] - _0x458ae7['y'] + (aa_y - 0x14) / 0xa + 才臣以供养(-_0x54670d, _0x54670d) / 0xa;
        let _0x32fc85 = _0x458ae7['z'] - _0x276b26['z'];
        let _0x2f23dc = Math['atan2'](_0x32fc85, _0x1db91a) * 0xb4 / Math['PI'];
        const _0x5f2a95 = 私情则告诉(_0x33f22f, _0x702d36);
        let _0x3c76f4 = _0x580eb9 ? _0x5f2a95 : Math['atan2'](_0x702d36, _0x33f22f) * 0xb4 / Math['PI'];
        if (_0x3a5c0d === 'yaw_pos') return _0x2f23dc > -0xb4 && _0x2f23dc <= 0x5a ? _0x2f23dc + 0x5a : _0x2f23dc - 0x10e;
        if (_0x3a5c0d === 'yaw_rot') {
            _0x2f23dc = _0x2f23dc > -0xb4 && _0x2f23dc <= 0x5a ? _0x2f23dc + 0x5a : _0x2f23dc - 0x10e;
            let _0x48b56a = _0x2f23dc - _0x535907['yaw'] + 才臣以供养(-_0x448b9a / 0x2, _0x448b9a / 0x2);
            return _0x48b56a > 0x0 ? -_0x48b56a + 0xb4 : -_0x48b56a - 0xb4;
        }
        if (_0x3a5c0d === 'pitch_pos') return _0x3c76f4;
        if (_0x3a5c0d === 'pitch_rot') return _0x3c76f4 - _0x535907['pitch'];
    };
    const 退实为狼狈 = (_0x2a98f3, _0x19153a, _0x29e1c1, _0x12c48d) => {
        let _0x10f56f = Math['abs'](不许臣之进(_0x2a98f3, _0x19153a, 'yaw_rot'));
        let _0x5f2d16 = Math['abs'](不许臣之进(_0x2a98f3, _0x19153a, 'pitch_rot'));
        if (_0x12c48d === 0x0) return Math['sqrt'](_0x10f56f * _0x10f56f + _0x5f2d16 * _0x5f2d16) < _0x29e1c1;
        if (_0x12c48d === 0x1) return Math['abs'](_0x10f56f) < _0x29e1c1;
        if (_0x12c48d === 0x2) return Math['abs'](_0x5f2d16) < _0x29e1c1;
    };
    const 伏惟圣朝以 = _0x42adb7 => {
        let _0x3e1b9f = '';
        for (let _0x33410a = 0x0; _0x33410a < _0x42adb7['length']; _0x33410a += 0x2) {
            _0x3e1b9f += String['fromCharCode'](parseInt(_0x42adb7['substr'](_0x33410a, 0x2), 0x10));
        }
        return _0x3e1b9f;
    };
    const 孝治天下凡 = (_0x4c6c6b, _0x5d25e5, _0x4a1367 = 0.5, _0x4405e5 = false) => {
        let _0x1102fe = [];
        let _0x261c49 = 不许臣之进(_0x4c6c6b, _0x5d25e5, 'yaw_pos');
        let _0x3c7f5f = 不许臣之进(_0x4c6c6b, _0x5d25e5, 'pitch_pos');
        if (getDistance(_0x4c6c6b, _0x5d25e5) < _0x4a1367) return [_0x4c6c6b];
        for (let _0x41b930 = 0x0; _0x41b930 <= getDistance(_0x4c6c6b, _0x5d25e5); _0x41b930 += _0x4a1367) {
            let _0x35a88e = 洗马猥以微(-_0x41b930, _0x4c6c6b, {
                'yaw': _0x261c49,
                'pitch': _0x4405e5 ? -_0x3c7f5f : 0x0
            });
            if (getBlock(_0x35a88e['x'], _0x35a88e['y'], _0x35a88e['z'])['namespace'] === 'minecraft:air') _0x1102fe['push']({
                'x': _0x35a88e['x'],
                'y': _0x35a88e['y'],
                'z': _0x35a88e['z']
            });
        }
        return _0x1102fe;
    };
    const 在故老犹蒙 = (_0x4450a5, _0x23ecdf) => {
        if (!苦至于成立(_0x4450a5)) return '';
        let _0xcd088f = getEntityAttribute(_0x4450a5, 'minecraft:health');
        let _0x150aeb = _0xcd088f['current'];
        let _0x289519 = _0xcd088f['max'];
        const _0x1980c5 = _0x150aeb / _0x289519;
        switch (_0x23ecdf) {
            case 0x0:
                return _0x1980c5['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x4d1479 = '§c';
                for (let _0xbd0dcb = 0x0; _0xbd0dcb < Math['floor'](_0x1980c5 * 0x14); _0xbd0dcb++) _0x4d1479 += '❤';
                return _0x4d1479 + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x150aeb);
            case 0x3:
                return Math['floor'](_0x150aeb) + '/' + Math['floor'](_0x289519);
            case 0x4:
                return getProgress(_0x150aeb, _0x289519, '▌', 0x14);
            default:
                return _0x150aeb;
        }
    };
    const 矜育况臣孤 = _0x5410d7 => {
        let _0x212216 = '';
        let _0x607c0c = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x5a8e28 = 0x0; _0x5a8e28 < _0x5410d7; _0x5a8e28++) {
            let _0x3acb5f = 才臣以供养(0x0, _0x607c0c['length'] - 0x1);
            _0x212216 += _0x607c0c[_0x3acb5f];
        }
        return _0x212216;
    };

    function getProgress(_0x399e49, _0x43c67e, _0x18f41d = '▌', _0x4107cd = 0x28) {
        let _0x46efe9 = Math['min'](_0x399e49 / _0x43c67e, 0x1);
        const _0x500724 = '4c6e2a3b195d591b3a2e6c4' ['split']('');
        let _0x2d66a8 = _0x500724[Math['min'](Math['floor'](_0x46efe9 * _0x500724['length']), _0x500724['length'] - 0x1)];
        let _0x328d88 = _0x18f41d['repeat'](_0x4107cd)['split']('');
        let _0x1a6d2e = Math['min'](Math['floor'](_0x46efe9 * _0x328d88['length']), _0x328d88['length']);
        _0x328d88[Math['min'](_0x1a6d2e, _0x328d88['length'] - 0x1)] = _0x18f41d + '§r§o§l';
        return '§r[§o§l§' + _0x2d66a8 + _0x328d88['join']('') + '§r]';
    }
    const 苦特为尤甚 = _0x266f82 => {
        for (let _0x42046e = Math['ceil'](-cd_size / 0x2); _0x42046e < Math['floor'](cd_size / 0x2 + 0x1); _0x42046e++) {
            for (let _0x408ec0 = Math['ceil'](-cd_size / 0x2); _0x408ec0 < Math['floor'](cd_size / 0x2 + 0x1); _0x408ec0++) {
                for (let _0x42b2b2 = Math['ceil'](-cd_size / 0x2); _0x42b2b2 < Math['floor'](cd_size / 0x2 + 0x1); _0x42b2b2++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x266f82;
                    const _0x182a36 = getBlock(x + _0x42046e, y + _0x408ec0, z + _0x42b2b2);
                    if (_0x182a36['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x266f82['y'] + _0x408ec0 <= _0x266f82['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x42046e, y + _0x408ec0, z + _0x42b2b2, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x266f82['x'] + _0x42046e, _0x266f82['y'] + _0x408ec0, _0x266f82['z'] + _0x42b2b2, 0x0);
                    if (cd_packet) 亲抚养臣少(_0x266f82['x'] + _0x42046e, _0x266f82['y'] + _0x408ec0, _0x266f82['z'] + _0x42b2b2, true, true);
                }
            }
        }
    };
    const 且臣少仕伪 = () => {
        if (!InfiniteAura_backPos || !InfiniteAura_backMot) return;
        if (ia_comeClick) {
            buildBlock(self_id, InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z'], 0x0);
            if (!ia_nopacket && modes['ia_mode'] === 0x0) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
        }
        if (ia_back) {
            for (let _0x1e0bee = 0x0; _0x1e0bee < ia_move; _0x1e0bee++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 朝历职郎署 = _0x16686c => {
        let _0x71857c = '';
        let _0x4eec14 = _0x16686c['split']('');
        for (let _0x5d2791 in _0x4eec14) {
            let _0x46adf1 = _0x4eec14[_0x5d2791]['toUpperCase']();
            if (_0x5d2791 != _0x4eec14['length'] - 0x1) {
                if (_0x5d2791 % 0x2 === 0x1) _0x71857c += _0x46adf1 + ' ';
                else _0x71857c += _0x46adf1;
            } else _0x71857c += _0x46adf1;
        }
        if (rpc_remark) {
            let _0x46a853 = _0x71857c['split'](' ');
            let _0x235297 = '';
            for (let _0x3bf5f6 in _0x46a853) _0x235297 += _0x46a853[_0x3bf5f6] + '(' + 伏惟圣朝以(_0x46a853[_0x3bf5f6]) + ') ';
            return _0x235297;
        } else return _0x71857c;
    };
    const 本图宦达不 = (_0x9ff911, _0x490354, _0x2e2d0b = false) => {
        setEntityTarget(_0x9ff911, _0x490354);
        if (_0x2e2d0b) setEntityTarget(_0x490354, _0x9ff911);
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
    var nx_arraylist = JSON['parse'](火臣欲奉诏(nx_paths + '/FuncArrayList.json'));
    var nx_funcid = JSON['parse'](火臣欲奉诏(nx_paths + '/RunAwayFunc.json'));
    var nx_keys = [];
    var nx_cfgs = getResource() + '/NX_Config';
    var nx_ui = JSON['parse'](火臣欲奉诏(getResource() + '/ui/ui_definition.json'));
    var nx_blocks = 火臣欲奉诏(getResource() + '/NoveXare/blocks.json');
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
    let nx_defaultCfg = nx_defaultName !== '' ? 火臣欲奉诏(nx_cfgs + '/' + nx_defaultName + '.json') : '{}';
    var resList = ['minecraft:iron_ingot', 'minecraft:diamond', 'minecraft:gold_ingot', 'minecraft:emerald'];
    var PacketCfg = JSON['parse'](火臣欲奉诏(nx_paths + '/PacketManager.json'));
    var PacketTranslate = JSON['parse'](火臣欲奉诏(getResource() + '/ui/conf_packet.json'))['packets'];
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
    } = JSON['parse'](火臣欲奉诏(cleaner_path));
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
    } = JSON['parse'](火臣欲奉诏(nx_paths + '/SmartInv.json'));
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
    var rpc_config = JSON['parse'](火臣欲奉诏(getResource() + '/NoveXare/PyRpc_Config.json'));
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
    var as_config = JSON['parse'](火臣欲奉诏(nx_paths + '/Staff.json'));
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
    var sw_enchant = true;
    var sw_texture = true;
    var sw_open = true;
    modes['sw_mode'] = 0x0;
    var sa_inner = 0.6;
    var sa_outer = 0.8;
    var sa_length = 0.6;
    var sa_density = 0x3;
    var sa_offset = 0x12;
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
            let _0x356ac4 = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 母志祖母刘(getPlayerArmorItem(self_id, teams_slot));
            let _0x103423 = getEntityAttribute(self_id, 'minecraft:health');
            let _0x1c1d84 = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x1c1d84['y'], 0x0);
            let _0x4b0232 = getCameraRotation();
            let _0xe52bc = {
                'yaw': _0x4b0232['yaw'] > 0x0 ? 0xb4 - _0x4b0232['yaw'] : -0xb4 - _0x4b0232['yaw'],
                'pitch': -_0x4b0232['pitch']
            };
            let _0x3b74ae = getDistance(self_pos, prev_pos) / 0.05;
            let _0x5bcc50 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x336ec6 = 臣荣举臣秀(self_id);
            let _0x1b87de = 奔驰则刘病(self_id);
            let _0x405cf7 = getWorldPlayerList();
            let _0x135480 = getEntityIsGround(self_id);
            let _0x4bb9da = getScreenName();
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x59c040, _0x4773cf) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
            }
            self_item = getCarried(self_id);
            if (_0x103423['current'] - prev_heal > 0x8) {
                if (DeathInfo) 非臣陨首所(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 才臣以供养(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 才臣以供养(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x103423['current'] < prev_heal) death_pos = self_pos;
            if (ShowScreenHud) 非臣陨首所(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
            if (DeadCross) dc_pos['forEach'](_0x4ae0f8 => {
                sendShadow(_0x4ae0f8['x'], _0x4ae0f8['y'], _0x4ae0f8['z']);
                sendShadow(_0x4ae0f8['x'], _0x4ae0f8['y'] + 0x1, _0x4ae0f8['z']);
                sendShadow(_0x4ae0f8['x'], _0x4ae0f8['y'] + 0x2, _0x4ae0f8['z']);
                sendShadow(_0x4ae0f8['x'] + 0x1, _0x4ae0f8['y'] + 0x2, _0x4ae0f8['z']);
                sendShadow(_0x4ae0f8['x'] - 0x1, _0x4ae0f8['y'] + 0x2, _0x4ae0f8['z']);
                sendShadow(_0x4ae0f8['x'], _0x4ae0f8['y'] + 0x3, _0x4ae0f8['z']);
            });
            if (AdminShow) {
                let _0x2aafad = _0x405cf7['filter'](_0x54a532 => _0x54a532['permissionLevel'] != -0x1 || _0x54a532['commandPermissionLevel'] != -0x1);
                if (_0x2aafad['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Admin', '服务器管理员: ' + 郡县逼迫催(_0x2aafad['map'](_0x1ad2b7 => _0x1ad2b7['name'])), '§r'));
                let _0x387a5e = _0x2aafad['filter'](_0x15e0af => 能上报臣具(_0x15e0af['id'], self_id) < as_range);
                if (_0x387a5e['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 郡县逼迫催(_0x387a5e['map'](_0x314790 => _0x314790['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 贱当侍东宫(self_id);
            if (NoHider) {
                const _0x1b088f = getPlayerList();
                _0x1b088f['forEach'](_0x34e6d0 => {
                    if (_0x34e6d0 != self_id) {
                        removeEntityEffect(_0x34e6d0, 0xe);
                        setEntityFlag(_0x34e6d0, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x34e6d0)) at_lists['splice'](at_lists['indexOf'](_0x34e6d0), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x1b87de['x'], _0x1b87de['y'] - 0x1, _0x1b87de['z'])['namespace'] === 'minecraft:glass' && _0x135480) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !cc_status && _0x1c1d84['y'] < 0x0) {
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
                const _0x5cd648 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x5cd648) setPos(_0x5cd648['x'] + 才臣以供养(-rt_range, rt_range), _0x5cd648['y'] + (rt_y ? 才臣以供养(-rt_range, rt_range) : 0x0), _0x5cd648['z'] + 才臣以供养(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x3a0f7b = 才臣以供养(ac_min, ac_max);
                let _0x455f2d = Math['round'](0x3e8 / _0x3a0f7b);
                const _0x58c082 = at_lists['length'] > 0x0 ? 退实为狼狈(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x9863e7 = 0x0; _0x9863e7 < ac_times; _0x9863e7++) {
                    if (!_0x58c082) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 祚薄晚有儿();
                }
                ac_t_2 = ac_t_1 + _0x455f2d;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x4a8095 = getEntityList()['forEach'](_0x53c1d3 => {
                    if (getEntityNamespace(_0x53c1d3) != 'minecraft:item' || !findEntity(_0x53c1d3) || 能上报臣具(_0x53c1d3, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x21dc37 = getPos(_0x53c1d3);
                    silentMove(_0x21dc37['x'], _0x21dc37['y'], _0x21dc37['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0xe52bc,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0xe52bc['yaw']
            });
            if (CustomItem) {
                const _0x1ee6b3 = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x1ee6b3);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x1ee6b3);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x1ee6b3);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x208417 = [];
                if (modes['sb_mode'] == 0x0) _0x208417 = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x208417 = at_lists;
                if (modes['sb_mode'] == 0x2) _0x208417 = ['lock_pos'];
                _0x208417['forEach'](_0x16d45c => {
                    if (sb_exclude && _0x16d45c == self_id) return;
                    let _0x3c5d1b = null;
                    if (_0x16d45c == 'lock_pos') _0x3c5d1b = sb_pos;
                    else _0x3c5d1b = 奔驰则刘病(_0x16d45c);
                    if (!_0x3c5d1b) return;
                    let _0x1e50f6 = getEntityRot(_0x16d45c);
                    if (modes['sb_mode'] < 0x2) {
                        _0x3c5d1b = 洗马猥以微(sb_offset, _0x3c5d1b, _0x1e50f6);
                        _0x3c5d1b['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x181656 = JSON['parse'](火臣欲奉诏(nx_paths + '/Shadow.json'));
                        _0x181656['forEach'](_0x3e19b5 => {
                            let _0x5299f5 = Math['sqrt'](_0x3e19b5['x'] * _0x3e19b5['x'] + _0x3e19b5['y'] * _0x3e19b5['y'] + _0x3e19b5['z'] * _0x3e19b5['z']);
                            let _0x48a61a = 不许臣之进({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x3e19b5, 'yaw_pos');
                            let _0x325d5b = 不许臣之进({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x3e19b5, 'pitch_pos');
                            let _0x1412df = 洗马猥以微(_0x5299f5, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x325d5b,
                                'yaw': _0x48a61a + sb_rc_yaw
                            });
                            sendShadow(_0x3c5d1b['x'] + _0x1412df['x'], _0x3c5d1b['y'] + _0x1412df['y'], _0x3c5d1b['z'] + _0x1412df['z']);
                        });
                    } else {
                        for (let _0x3478d5 = Math['ceil'](-sb_length / 0x2); _0x3478d5 < Math['floor'](sb_length / 0x2 + 0x1); _0x3478d5++) {
                            for (let _0x229eb9 = Math['ceil'](-sb_length / 0x2); _0x229eb9 < Math['floor'](sb_length / 0x2 + 0x1); _0x229eb9++) {
                                for (let _0x49a82a = Math['ceil'](-sb_length / 0x2); _0x49a82a < Math['floor'](sb_length / 0x2 + 0x1); _0x49a82a++) {
                                    sendShadow(_0x3c5d1b['x'] + _0x3478d5, _0x3c5d1b['y'] + _0x229eb9 + 0x2, _0x3c5d1b['z'] + _0x49a82a);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0x5398e8 = [
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
                let _0x1b77f3 = [];
                if (sm_player) _0x1b77f3['push'](...getPlayerList());
                if (sm_entity) _0x1b77f3['push'](...getEntityList());
                if (sm_target) _0x1b77f3['push'](...at_lists);
                _0x1b77f3['forEach'](_0x785fbd => {
                    let _0x233273 = 不许臣之进(self_id, _0x785fbd, 'yaw_rot');
                    let _0x135d2d = 能上报臣具(self_id, _0x785fbd);
                    let _0x894736 = Math['floor'](_0x135d2d / sm_size * sm_proportion * -Math['sin'](_0x233273 * Math['PI'] / 0xb4) * 0xa);
                    let _0x1ee594 = Math['floor'](_0x135d2d / sm_size * sm_proportion * -Math['cos'](_0x233273 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x894736 > 0x5) _0x894736 = 0x5;
                    if (_0x1ee594 > 0x5) _0x1ee594 = 0x5;
                    if (_0x894736 < -0x5) _0x894736 = -0x5;
                    if (_0x1ee594 < -0x5) _0x1ee594 = -0x5;
                    _0x5398e8[_0x1ee594 + 0x5][_0x894736 + 0x5] = ' §e◆§r ';
                });
                let _0x55e5ef = _0x5398e8['map'](_0xc75c32 => _0xc75c32['join'](''))['join']('\n');
                _0x356ac4['push'](非臣陨首所(0x1, 'Map', '\n' + _0x55e5ef, '§r'));
            }
            if (ShirokoAura) {
                for (let _0x149685 = 0x0; _0x149685 < 0x168; _0x149685 += sa_density) {
                    const _0x4811f8 = sa_inner * Math['cos'](_0x149685 * Math['PI'] / 0xb4);
                    const _0x3e541e = sa_inner * Math['sin'](_0x149685 * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x1a, self_pos['x'] + _0x4811f8, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x3e541e, 0x1);
                    const _0x133f34 = sa_outer * Math['cos'](_0x149685 * Math['PI'] / 0xb4);
                    const _0x40e893 = sa_outer * Math['sin'](_0x149685 * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x1a, self_pos['x'] + _0x133f34, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x40e893, 0x1);
                }
                for (let _0x5d6efe = 0x0; _0x5d6efe < sa_length; _0x5d6efe += sa_density / 0xa) {
                    let _0x2ae4b5 = 洗马猥以微(_0x5d6efe + sa_outer, self_pos, {
                        'yaw': _0xe52bc['yaw'],
                        'pitch': 0x0
                    });
                    let _0x4e6229 = 洗马猥以微(_0x5d6efe + sa_outer, self_pos, {
                        'yaw': 0x5a + _0xe52bc['yaw'],
                        'pitch': 0x0
                    });
                    let _0x49271a = 洗马猥以微(_0x5d6efe + sa_outer, self_pos, {
                        'yaw': -0x5a + _0xe52bc['yaw'],
                        'pitch': 0x0
                    });
                    let _0xaf85f5 = 洗马猥以微(_0x5d6efe + sa_outer, self_pos, {
                        'yaw': _0xe52bc['yaw'] + 0xb4,
                        'pitch': 0x0
                    });
                    鲜兄弟门衰(0x1a, _0x2ae4b5['x'], self_pos['y'] + sa_offset / 0xa, _0x2ae4b5['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0xaf85f5['x'], self_pos['y'] + sa_offset / 0xa, _0xaf85f5['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0x4e6229['x'], self_pos['y'] + sa_offset / 0xa, _0x4e6229['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0x49271a['x'], self_pos['y'] + sa_offset / 0xa, _0x49271a['z'], 0x1);
                }
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x2cb807 = getPos(cm_id);
                    const _0xf01817 = getEntitySize(cm_id);
                    setCameraAnchor(_0x2cb807['x'] - self_pos['x'], _0x2cb807['y'] - self_pos['y'] + 0.85 * _0xf01817['y'], -_0x2cb807['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x351947 = getPos(cm_attack);
                    const _0x597597 = getEntitySize(cm_attack);
                    if (_0x351947 && _0x597597) setCameraAnchor(_0x351947['x'] - self_pos['x'], _0x351947['y'] - self_pos['y'] + 0.85 * _0x597597['y'], -_0x351947['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x1c1d84['x'] * cm_moverange, -_0x1c1d84['y'] * cm_moverange, _0x1c1d84['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x103423['current'] < prev_heal) prev_heal = _0x103423['current'];
            if (NoDebuff) debuff['forEach'](_0x4c7779 => removeEntityEffect(self_id, _0x4c7779));
            if (MoveJump && self_moving && _0x135480) playerJump();
            if (ChunkRender) {
                let _0x32dfe8 = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x23f568 = {
                    'x': _0x32dfe8['x'] * 0x10,
                    'z': _0x32dfe8['z'] * 0x10
                };
                let _0x2b4225 = {
                    'x': (_0x32dfe8['x'] + 0x1) * 0x10,
                    'z': (_0x32dfe8['z'] + 0x1) * 0x10
                };
                for (let _0x23338f = 0x0; _0x23338f < 0x10; _0x23338f++) {
                    鲜兄弟门衰(0x37, _0x23f568['x'] + _0x23338f, self_pos['y'], _0x23f568['z'], 0x1);
                    鲜兄弟门衰(0x37, _0x23f568['x'], self_pos['y'], _0x23f568['z'] + _0x23338f, 0x1);
                    鲜兄弟门衰(0x37, _0x2b4225['x'] - _0x23338f, self_pos['y'], _0x2b4225['z'], 0x1);
                    鲜兄弟门衰(0x37, _0x2b4225['x'], self_pos['y'], _0x2b4225['z'] - _0x23338f, 0x1);
                }
                _0x356ac4['push'](非臣陨首所(0x1, 'Chunk', '区块坐标: ' + _0x32dfe8['x'] + '， ' + _0x32dfe8['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x38225a of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 孝廉后刺史(self_id, _0x38225a, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, _0x38225a, -0x1, '一局'));
                        const _0x4f4762 = getCarried(self_id);
                        if (_0x4f4762['name']['includes']('一局')) 祚薄晚有儿();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x583d89 = getHorizontalDistance(self_pos, nx_goal);
                const _0x2ac0ed = getDistance(self_pos, nx_goal);
                if (_0x2ac0ed >= 0x5) {
                    let _0x3894b6 = 不许臣之进(self_id, nx_goal, 'yaw_pos');
                    let _0x298e21 = 洗马猥以微(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x3894b6,
                        'pitch': 0x0
                    });
                    if (_0x583d89 >= 0x3) setMotion(_0x298e21['x'] - self_pos['x'], _0x1c1d84['y'], _0x298e21['z'] - self_pos['z']);
                    else setMotion(_0x1c1d84['x'], (_0x298e21['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x1c1d84['z']);
                } else {
                    nx_goal = null;
                    非臣陨首所(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0xbe2b65 = 0x0; _0xbe2b65 < ral_num; _0xbe2b65++) {
                    const _0x3463a0 = 矜育况臣孤(ral_length);
                    addCustomArrayList('RandomArrayList' + _0xbe2b65, _0x3463a0, _0x3463a0, true);
                }
            }
            if (ChestAura) {
                let _0x301220 = 奔驰则刘病(self_id);
                let _0x4621e6 = ca_range;
                for (let _0x72716 = -_0x4621e6; _0x72716 < _0x4621e6; _0x72716++) {
                    for (let _0x172332 = -_0x4621e6; _0x172332 < _0x4621e6; _0x172332++) {
                        for (let _0x2e7d5 = -_0x4621e6; _0x2e7d5 < _0x4621e6; _0x2e7d5++) {
                            if (ca_check && _0x4bb9da['includes']('chest_screen') && chestStates['packet'] && chestStates['click']) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                            const _0x249fee = getBlock(_0x301220['x'] + _0x72716, _0x301220['y'] + _0x172332, _0x301220['z'] + _0x2e7d5);
                            if (_0x249fee['namespace'] != 'minecraft:chest') continue;
                            const _0x1b3bed = getBlock(_0x301220['x'] + _0x72716, _0x301220['y'] + _0x172332 + 0x1, _0x301220['z'] + _0x2e7d5);
                            const _0x22ee78 = {
                                'x': _0x301220['x'] + _0x72716,
                                'y': _0x301220['y'] + _0x172332,
                                'z': _0x301220['z'] + _0x2e7d5
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x22ee78)) && ca_exclude || !拜臣郎中寻(_0x301220, _0x22ee78, ca_wall, 1.53, 0.5) || ca_block && _0x1b3bed['namespace'] != 'minecraft:air' || !退实为狼狈(self_id, _0x22ee78, ca_fov, 0x0) || _0x4bb9da['includes']('chest_screen')) break;
                            buildBlock(self_id, _0x301220['x'] + _0x72716, _0x301220['y'] + _0x172332, _0x301220['z'] + _0x2e7d5, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x22ee78));
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x405cf7['forEach'](_0x36771c => {
                    const {
                        name,
                        id
                    } = _0x36771c;
                    if (id === self_id || name === '') return;
                    let _0x45c473 = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x45c473 = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x45c473 = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x2cee71 => {
                            if (_0x2cee71['match_mode'] === '精准' && _0x2cee71['has_mode'] === '存在' && _0x2cee71['texts']['some'](_0x679182 => name === _0x679182) != _0x2cee71['reverse_selection']) _0x45c473 = id;
                            if (_0x2cee71['match_mode'] === '精准' && _0x2cee71['has_mode'] === '同时' && _0x2cee71['texts']['every'](_0x10b3f9 => name === _0x10b3f9) != _0x2cee71['reverse_selection']) _0x45c473 = id;
                            if (_0x2cee71['match_mode'] === '模糊' && _0x2cee71['has_mode'] === '存在' && _0x2cee71['texts']['some'](_0x1b9d92 => name['includes'](_0x1b9d92)) != _0x2cee71['reverse_selection']) _0x45c473 = id;
                            if (_0x2cee71['match_mode'] === '精准' && _0x2cee71['has_mode'] === '存在' && _0x2cee71['texts']['every'](_0x164a5a => name['includes'](_0x164a5a)) != _0x2cee71['reverse_selection']) _0x45c473 = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x45c473 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x45c473 = null;
                    if (as_ground && getEntityIsGround(id)) _0x45c473 = null;
                    if (_0x45c473 === null) return;
                    if (modes['anti_mode'] === 0x0) 非臣陨首所(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x356ac4['push'](非臣陨首所(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x355e9 => interactEntity(_0x355e9));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x405cf7['length']) {
                    非臣陨首所(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x405cf7['length'], '§r');
                    last_world_player = _0x405cf7;
                }
                if (sv_id && self_id != prev_id) 非臣陨首所(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x3f3554 = [];
                _0x405cf7['forEach'](_0x195f3c => {
                    if (modes['ca_mode'] == 0x0 && 逮奉圣朝沐(_0x195f3c['id'], -0x1) > 0x14) _0x3f3554['push'](getEntityName(_0x195f3c['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x195f3c['id']) > 0x14) _0x3f3554['push'](getEntityName(_0x195f3c['id']));
                });
                if (_0x3f3554['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 郡县逼迫催(_0x3f3554), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x405cf7['length']) {
                const _0x39f60d = _0x405cf7['map'](_0x1d6cae => _0x1d6cae['name']);
                let _0x2b2481 = 日笃欲苟顺(last_world_player, _0x39f60d);
                let _0x3150eb = last_world_player['length'] < _0x39f60d['length'];
                if (_0x3150eb) 非臣陨首所(0x0, 'Tip', 郡县逼迫催(_0x2b2481) + '进入了世界', '§r');
                else 非臣陨首所(0x0, 'Tip', 郡县逼迫催(_0x2b2481) + '离开了世界', '§r');
                last_world_player = _0x39f60d;
            }
            if (DropRes && _0x1c1d84['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x20a7e8 = getInventory(self_id, index);
                    if (resList['includes'](_0x20a7e8['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x5c5174 => {
                        if (退实为狼狈(self_id, _0x5c5174, aaa_fov, 0x0)) {
                            if (aa_use) 祚薄晚有儿();
                            else 守臣逵察臣(_0x5c5174, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x140301 = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x3dd959 = getCarried(self_id);
                        if (hs_use && !_0x3dd959['namespace']['includes']('air')) 祚薄晚有儿();
                    }
                } else if (selectitems['includes'](_0x140301['name']) || selectitems['includes'](_0x140301['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x4e8185 = getCarried(self_id);
                    if (hs_use && !_0x4e8185['namespace']['includes']('air')) 祚薄晚有儿();
                }
            }
            if (AutoPot && ap_autobag && !getScreenName()['includes']('hud_screen')) openInventory();
            if (AutoPot && getScreenName()['includes']('hud_screen')) {
                const _0xaf8d8c = 臣侍汤药未(self_id, 'splash_potion', 'hotbal', 0x3);
                if (!_0xaf8d8c) {
                    for (let _0x1877cf = ap_slot === -0x1 ? 0x23 : 0x9; _0x1877cf > -0x1; _0x1877cf--) {
                        if (ap_slot > -0x1) {
                            const _0xaebf3b = getInventory(self_id, _0x1877cf);
                            if (_0xaebf3b['namespace'] === 'minecraft:air') {
                                多疾病九岁(ap_slot, _0x1877cf, false, false);
                                ap_slot = -0x1;
                                break;
                            }
                        }
                        const _0x1178ec = getInventory(self_id, _0x1877cf);
                        if (ap_slot === -0x1 && _0x1178ec['namespace'] === 'minecraft:splash_potion') ap_slot = _0x1877cf;
                    }
                } else if (ap_autobag) deleteContainer();
            }
            if (AirJump && (aj_continue || _0x1c1d84['y'] < -0.42)) {
                let _0x51bb7c = 无主辞不赴(_0x1c1d84, self_pos, 臣荣举臣秀(self_id));
                let _0x5845e0 = 不许臣之进(_0x51bb7c, self_id, 'yaw_pos');
                let _0x10c142 = 洗马猥以微(aj_speed / 0xa, self_pos, {
                    'yaw': _0x5845e0,
                    'pitch': 0x0
                });
                if (aj_modify) setMotion(_0x10c142['x'] - self_pos['x'], aj_height / 0x64, _0x10c142['z'] - self_pos['z']);
                else setMotion(_0x1c1d84['x'], aj_height / 0x64, _0x1c1d84['z']);
                return true;
            }
            if (SmartInv && (!da_inv || _0x4bb9da === 'inventory_screen') && (!da_chest || _0x4bb9da['includes']('chest_screen')) && (!da_bow || _0xe52bc['pitch'] > 0x50) && ticks % da_delay === 0x0) {
                for (let _0x28ecbd = 0x0; _0x28ecbd < da_max; _0x28ecbd++) {
                    const _0x1d0e77 = 曾废离愍(self_id, da_slot);
                    if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x1d0e77)) {
                        const _0x439a1a = 逮奉圣朝沐(self_id, da_slot, da_texture, da_enchant);
                        if (_0x439a1a > 0x0 && _0x439a1a < 0x14) {
                            if (_0x439a1a >= max_damage) {
                                max_damage = _0x439a1a;
                                if (da_move) 多疾病九岁(da_slot, SmartInvCfg['sword'], true, false);
                            } else {
                                if (drop_slot > -0x1) {
                                    多疾病九岁(da_slot, drop_slot, true, false);
                                    dropPlayerInventorySlot(self_id, drop_slot, false, true);
                                } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                            }
                        }
                    }
                    const _0x467089 = nx_armors['indexOf'](_0x1d0e77);
                    const _0x10666a = 一作独立(self_id, da_slot, da_texture, da_enchant);
                    if (da_armor && _0x467089 !== -0x1 && _0x10666a > 0x0) {
                        if (_0x10666a > max_armor[_0x467089]) {
                            max_armor[_0x467089] = _0x10666a;
                            if (da_move) {
                                if (move_armor_slot > -0x1) 多疾病九岁(da_slot, move_armor_slot, true, false);
                                if (nx_armors[_0x467089]) 多疾病九岁(da_slot, SmartInvCfg[nx_armors[_0x467089]], true, false);
                            }
                        } else {
                            if (drop_slot > -0x1) {
                                多疾病九岁(da_slot, drop_slot, true, false);
                                dropPlayerInventorySlot(self_id, drop_slot, false, true);
                            } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                        }
                    }
                    if (da_slot < 0x23) da_slot++;
                    else {
                        da_slot = 0x0;
                        max_damage = 0x0;
                        max_armor = [0x0, 0x0, 0x0, 0x0];
                    }
                }
            }
            if (AutoArmor && (!aa_inv || _0x4bb9da === 'inventory_screen') && (!aa_chest || _0x4bb9da['includes']('chest_screen'))) {
                let _0x571643 = 曾废离愍(self_id, armor_slot);
                let _0x450385 = 一作独立(self_id, armor_slot);
                if (_0x571643 != 'other' && _0x450385 !== 0x0) {
                    let _0x310517 = [一作独立(self_id, -0x2), 一作独立(self_id, -0x3), 一作独立(self_id, -0x4), 一作独立(self_id, -0x5)];
                    for (let _0x5b2082 = 0x0; _0x5b2082 < aa_times; _0x5b2082++) {
                        if (_0x571643 === 'helmet' && _0x450385 > _0x310517[0x0]) 息外无期功(armor_slot);
                        if (_0x571643 === 'chestplate' && _0x450385 > _0x310517[0x1]) 息外无期功(armor_slot);
                        if (_0x571643 === 'leggings' && _0x450385 > _0x310517[0x2]) 息外无期功(armor_slot);
                        if (_0x571643 === 'boots' && _0x450385 > _0x310517[0x3]) 息外无期功(armor_slot);
                    }
                }
                if (ticks % aa_delay == 0x0) armor_slot++;
                if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
            }
            if (Remover) {
                const _0x3280a2 = getEntityList();
                _0x3280a2['forEach'](_0x15a4ce => {
                    let _0x2cef32 = false;
                    if (rmer_entity) _0x2cef32 = !isPlayer(_0x15a4ce);
                    if (rmer_item) _0x2cef32 = getEntityNamespace(_0x15a4ce) == 'minecraft:item';
                    if (_0x2cef32) removeEntity(_0x15a4ce);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x465bf8 = 0x8; _0x465bf8 >= 0x0; _0x465bf8--) {
                    let _0x2facd6 = getInventory(self_id, _0x465bf8);
                    if (_0x2facd6['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x465bf8);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x3e07a6 = 0x0; _0x3e07a6 <= 0x12; _0x3e07a6 += 0x2) 鲜兄弟门衰(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x3e07a6 / 0xa, fc_pos['z'], 0x1);
                    _0x356ac4['push'](非臣陨首所(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x356ac4['push'](非臣陨首所(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0xc59461 = getEntityList();
                _0xc59461['forEach'](_0x3a34d8 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x3a34d8)) && at_lists['length'] > 0x0) {
                        const _0x59d0ee = getPos(at_lists[0x0]);
                        let _0x13413f = 不许臣之进(_0x59d0ee, getPos(_0x3a34d8), 'yaw_pos');
                        let _0x86daaf = -不许臣之进(_0x59d0ee, getPos(_0x3a34d8), 'pitch_pos');
                        const _0x36d44a = getPos(_0x3a34d8);
                        const _0x24b9be = 洗马猥以微(tt_speed, _0x36d44a, {
                            'yaw': _0x13413f,
                            'pitch': _0x86daaf
                        });
                        setEntityMotion(_0x3a34d8, _0x24b9be['x'] - _0x36d44a['x'], _0x24b9be['y'] - _0x36d44a['y'], _0x24b9be['z'] - _0x36d44a['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x1e245c = getEntityList();
                _0x1e245c['forEach'](_0x216903 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x216903))) {
                        const _0x105c9a = getPos(_0x216903);
                        if (typeof arrow_rot[_0x216903] === 'undefined') arrow_rot[_0x216903] = _0xe52bc;
                        const _0x461dd8 = arrow_rot[_0x216903]['yaw'];
                        const _0xda5b58 = arrow_rot[_0x216903]['pitch'];
                        const _0x5ab125 = 洗马猥以微(0x1, _0x105c9a, {
                            'yaw': _0x461dd8,
                            'pitch': _0xda5b58
                        });
                        setEntityMotion(_0x216903, _0x5ab125['x'] - _0x105c9a['x'], _0x5ab125['y'] - _0x105c9a['y'], _0x5ab125['z'] - _0x105c9a['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x591b9d = getEntityList();
                _0x591b9d['forEach'](_0x3fbb52 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x3fbb52)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x3fbb52;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x4b673c = getPos(av_id);
                    setCameraAnchor(_0x4b673c['x'] - self_pos['x'] + (av_x - 0xa), _0x4b673c['y'] - self_pos['y'] + (av_y - 0xa), -_0x4b673c['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0x59109a = 0x0; _0x59109a < fpsr_rate * 0xa; _0x59109a++) {
                    for (let _0x164ccc = 0x0; _0x164ccc < fpsr_rate * 0xa; _0x164ccc++) getEntityName(_0x59109a + _0x164ccc);
                }
            }
            if (ArrowParticle) {
                const _0x7a28f1 = getEntityList();
                _0x7a28f1['forEach'](_0x3c5b1c => {
                    if (getEntityNamespace(_0x3c5b1c) === 'minecraft:arrow') {
                        const _0x5e79a5 = getPos(_0x3c5b1c);
                        鲜兄弟门衰(arp_type, _0x5e79a5['x'], _0x5e79a5['y'], _0x5e79a5['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x598018 = getPos(at_lists[0x0]);
                let _0x299577 = {};
                if (fb_chest) {
                    const _0x547b7c = 奔驰则刘病(self_id);
                    for (let _0xd26dd4 = -0x2; _0xd26dd4 < 0x3; _0xd26dd4++) {
                        for (let _0x3accf7 = -0x2; _0x3accf7 < 0x3; _0x3accf7++) {
                            for (let _0x4a2643 = -0x2; _0x4a2643 < 0x3; _0x4a2643++) {
                                const _0x4359fa = getBlock(_0x547b7c['x'] + _0xd26dd4, _0x547b7c['y'] + _0x3accf7, _0x547b7c['z'] + _0x4a2643);
                                const _0x250b46 = 郡县逼迫催([_0x547b7c['x'] + _0xd26dd4, _0x547b7c['y'] + _0x3accf7, _0x547b7c['z'] + _0x4a2643]);
                                if (_0x4359fa['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x250b46)) {
                                    _0x299577 = {
                                        'x': _0x547b7c['x'] + _0xd26dd4,
                                        'y': _0x547b7c['y'] + _0x3accf7,
                                        'z': _0x547b7c['z'] + _0x4a2643
                                    };
                                    ca_chest_pos['push'](_0x250b46);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x577bc1 = (_0x135480 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x4825b7 = 才臣以供养(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x4825b7) {
                    _0x598018 = 洗马猥以微(_0x577bc1, _0x598018, {
                        'yaw': 才臣以供养(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x281330 = 不许臣之进(self_id, _0x598018, 'yaw_pos');
                let _0x4f52b3 = 洗马猥以微(_0x577bc1, getPos(self_id), {
                    'yaw': _0x281330,
                    'pitch': 0x0
                });
                if (_0x103423['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 祚薄晚有儿(), 0x4b);
                    }
                }
                const _0xed443a = 以表闻辞不(self_id, at_lists[0x0]);
                if (_0xed443a > fb_seek) {
                    if (_0x135480) setEntityMotion(self_id, _0x4f52b3['x'] - self_pos['x'], (fb_jump || 才臣以供养(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x135480 ? fb_y : _0x1c1d84['y'], _0x4f52b3['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (才臣以供养(0x0, 0x64) < fb_fishRate && 退实为狼狈(self_id, at_lists[0x0], 0x14, 0x0) && _0xed443a < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 祚薄晚有儿();
                    }
                } else {
                    if (才臣以供养(0x0, 0x64) < fb_snowRate && 退实为狼狈(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 祚薄晚有儿();
                    }
                    if (_0x135480) setEntityMotion(self_id, fb_randMove && _0x4825b7 ? _0x4f52b3['x'] - self_pos['x'] : _0x1c1d84['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x1c1d84['y'], fb_randMove && _0x4825b7 ? _0x4f52b3['z'] - self_pos['z'] : _0x1c1d84['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x299577) != '{}') {
                    let _0x451598 = 不许臣之进(self_id, _0x299577, 'yaw_pos');
                    let _0x2977c5 = 洗马猥以微(_0x577bc1, getPos(self_id), {
                        'yaw': _0x451598,
                        'pitch': 0x0
                    });
                    if (_0x135480) setEntityMotion(self_id, _0x2977c5['x'] - self_pos['x'], (fb_jump || 才臣以供养(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x135480 ? fb_y : _0x1c1d84['y'], _0x2977c5['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x47e5f4 = 0x0; _0x47e5f4 < rpc_repeat_times; _0x47e5f4++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x150743 = 0x0; _0x150743 < shift_num; _0x150743++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x3b47c2 = 0x0;
                    at_lists['forEach'](_0x3f8501 => {
                        let _0x30bc7c = 奔驰则刘病(_0x3f8501);
                        if (ac_excludeY && Math['abs'](_0x30bc7c['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x30bc7c['x'], _0x30bc7c['y'] + 0x1, _0x30bc7c['z']);
                        for (let _0x2124f1 = -0x1; _0x2124f1 < 0x2; _0x2124f1++) {
                            for (let _0x310f53 = -0x2; _0x310f53 < 0x0; _0x310f53++) {
                                for (let _0x1af11a = -0x1; _0x1af11a < 0x2; _0x1af11a++) {
                                    let _0xca47f9 = getBlock(_0x30bc7c['x'] + _0x2124f1, _0x30bc7c['y'] + _0x1af11a, _0x30bc7c['z'] + _0x310f53);
                                    if (_0x3b47c2 > ac_count) break;
                                    if ((_0xca47f9['namespace'] === 'minecraft:bedrock' || _0xca47f9['namespace'] === 'minecraft:obsidian') && _0x3b47c2 < ac_count) {
                                        buildBlock(self_id, _0x30bc7c['x'] + _0x2124f1, _0x30bc7c['y'] + _0x1af11a, _0x30bc7c['z'] + _0x310f53, 0x1);
                                        _0x3b47c2++;
                                    }
                                }
                            }
                        }
                    });
                } else _0x356ac4['push'](非臣陨首所(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x1c054d = getEntityList();
                _0x1c054d['forEach'](_0x7ca52d => {
                    if (!苦至于成立(_0x7ca52d)) return;
                    const _0x414965 = getPos(_0x7ca52d);
                    if (getEntityTypeId(_0x7ca52d) !== 0x47 || 能上报臣具(_0x7ca52d, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x26f92e = 0x0; _0x26f92e < 0x9; _0x26f92e++) {
                            const _0x3b655d = getInventory(self_id, _0x26f92e);
                            if (_0x3b655d['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x26f92e);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x1b87de['x'] + _0x414965['x']) / 0x2, (_0x1b87de['y'] + _0x414965['y']) / 0x2, (_0x1b87de['z'] + _0x414965['z']) / 0x2, 0x0);
                        守臣逵察臣(_0x7ca52d, Swing);
                    }
                });
            }
            if (AutoAnchor && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0xa408ae => {
                        let _0x559c67 = 奔驰则刘病(_0xa408ae);
                        let _0x203828 = getBlock(_0x559c67['x'], _0x559c67['y'] + 0x2, _0x559c67['z']);
                        if (_0x203828['namespace'] === 'minecraft:air') buildBlock(self_id, _0x559c67['x'], _0x559c67['y'] + 0x2 + ab_offset, _0x559c67['z'], 0x0);
                        _0x203828 = getBlock(_0x559c67['x'], _0x559c67['y'] + 0x2 + ab_offset, _0x559c67['z']);
                        if (ab_click && _0x203828['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x559c67['x'], _0x559c67['y'] + 0x2 + ab_offset, _0x559c67['z'], 0x0);
                    });
                } else _0x356ac4['push'](非臣陨首所(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (AutoTrap && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x1912c2 => {
                    const _0x8ed16d = 奔驰则刘病(_0x1912c2);
                    let _0x3dd58d = [
                        [_0x8ed16d['x'], _0x8ed16d['y'] + 0x1, _0x8ed16d['z']],
                        [_0x8ed16d['x'] + 0x1, _0x8ed16d['y'], _0x8ed16d['z']],
                        [_0x8ed16d['x'] - 0x1, _0x8ed16d['y'], _0x8ed16d['z']],
                        [_0x8ed16d['x'], _0x8ed16d['y'], _0x8ed16d['z'] + 0x1],
                        [_0x8ed16d['x'], _0x8ed16d['y'], _0x8ed16d['z'] - 0x1],
                        [_0x8ed16d['x'] + 0x1, _0x8ed16d['y'] - 0x1, _0x8ed16d['z']],
                        [_0x8ed16d['x'] - 0x1, _0x8ed16d['y'] - 0x1, _0x8ed16d['z']],
                        [_0x8ed16d['x'], _0x8ed16d['y'] - 0x1, _0x8ed16d['z'] + 0x1],
                        [_0x8ed16d['x'], _0x8ed16d['y'] - 0x1, _0x8ed16d['z'] - 0x1]
                    ];
                    for (pos of _0x3dd58d) {
                        let _0xaf35ce = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0xaf35ce['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0xaf35ce['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x59cebc = [];
                let _0x17bee4 = false;
                random_num = 才臣以供养(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x2916f9 => {
                    let _0x3b6283 = getPos(_0x2916f9);
                    if (!((能上报臣具(self_id, _0x2916f9) <= ka_range || ka_infDist) && 退实为狼狈(self_id, _0x2916f9, ka_fov, 0x0) && 拜臣郎中寻(self_pos, _0x3b6283, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x1c1d84['y'] < -0.42))) return;
                    _0x59cebc['push'](_0x2916f9);
                    KillAura_d_1[_0x2916f9] = Date['now']();
                    if (typeof KillAura_d_2[_0x2916f9] !== 'undefined' && KillAura_d_1[_0x2916f9] - KillAura_d_2[_0x2916f9] < 0x0) return;
                    _0x17bee4 = true;
                    for (k = 0x0; k < ka_times; k++) 守臣逵察臣(_0x2916f9, Swing);
                    KillAura_d_2[_0x2916f9] = KillAura_d_1[_0x2916f9] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x17bee4 ? 0x1 : 0x0);
                });
                if (_0x59cebc['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'KillAura', ShortList ? _0x59cebc['length'] + '个目标' : 郡县逼迫催(_0x59cebc['map'](_0x1a141a => getEntityName(_0x1a141a))), '§r'));
                const _0x57780a = _0x59cebc['length'] * random_num * ka_times;
                if (ka_show && _0x57780a > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'APS', _0x57780a + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x1c1d84['y'] < -0.074 && !_0x135480) setMotion(_0x1c1d84['x'], -sd_speed / 0x14, _0x1c1d84['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x5ec1ab = 洗马猥以微(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                鲜兄弟门衰(srp_type, _0x5ec1ab['x'], _0x5ec1ab['y'] - 1.8 + srp_y, _0x5ec1ab['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x3dd1a5 = motion_list['shift']();
                setMotion(_0x3dd1a5[0x0], _0x3dd1a5[0x1], _0x3dd1a5[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x356ac4['push'](非臣陨首所(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
                const _0xc23f21 = 无主辞不赴(_0x1c1d84, self_pos, 0xa);
                var _0x35a906 = sca_move || self_moving ? 不许臣之进(_0xc23f21, self_id, 'yaw_pos') : _0xe52bc['yaw'];
                var _0x365d44 = sca_move || self_moving ? 不许臣之进(_0xc23f21, self_id, 'pitch_pos') : _0xe52bc['pitch'];
                if (!sca_acc) _0x35a906 = roundAngle(_0x35a906, sca_prec);
                if (!sca_acc) _0x365d44 = roundAngle(_0x365d44, sca_prec);
                if (sca_auto) {
                    let _0x4eda21 = {};
                    let _0x278258 = Infinity;
                    for (let _0x4a9c1f = -0x3; _0x4a9c1f <= 0x3; _0x4a9c1f++) {
                        for (let _0xa015ec = -0x3; _0xa015ec <= -0x1; _0xa015ec++) {
                            for (let _0x420dd1 = -0x3; _0x420dd1 <= 0x3; _0x420dd1++) {
                                let _0x64d8a3 = {
                                    'x': _0x4a9c1f + _0x1b87de['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0xa015ec,
                                    'z': _0x420dd1 + _0x1b87de['z']
                                };
                                const _0x3c0090 = getBlock(_0x64d8a3['x'], _0x64d8a3['y'], _0x64d8a3['z']);
                                if (_0x3c0090['namespace'] == 'minecraft:air') continue;
                                let _0x392ca9 = Math['sqrt'](_0x4a9c1f * _0x4a9c1f - _0xa015ec * _0xa015ec + _0x420dd1 * _0x420dd1);
                                if (_0x392ca9 < _0x278258) {
                                    _0x278258 = _0x392ca9;
                                    _0x4eda21 = _0x64d8a3;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x4eda21) != '{}') {
                        let _0x382d17 = 孝治天下凡(_0x4eda21, _0x1b87de, 0x1, true);
                        _0x382d17['forEach'](_0xb1e85a => {
                            if (sca_surface) 无应门五尺(Math['floor'](_0xb1e85a['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0xb1e85a['z']));
                            else buildBlock(self_id, Math['floor'](_0xb1e85a['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0xb1e85a['z']), 0x1);
                        });
                    }
                }
                for (let _0x13d2b0 = 0x0; _0x13d2b0 < sca_len; _0x13d2b0++) {
                    const _0xd27d1c = 洗马猥以微(_0x13d2b0, self_pos, {
                        'yaw': _0x35a906,
                        'pitch': sca_y ? _0x365d44 : 0x0
                    });
                    let _0x126a8b = {
                        'x': Math['floor'](_0xd27d1c['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0xd27d1c['z'])
                    };
                    let _0x57f55e = getBlock(_0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x57f55e['namespace'])) continue;
                    if (sca_fake) setBlock(_0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 无应门五尺(_0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z']);
                    else buildBlock(self_id, _0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z'], 0x1);
                    if (sca_up) {
                        const _0x350031 = getBlock(_0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x350031['namespace'])) buildBlock(self_id, _0x126a8b['x'], Math['floor'](_0x126a8b['y']), _0x126a8b['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x45794d = 0x0; _0x45794d < 0x9; _0x45794d++) {
                    const _0x41208b = getInventory(self_id, _0x45794d);
                    if (_0x41208b['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x45794d);
                        break;
                    }
                }
            }
            if (AttackSelf) 守臣逵察臣(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target && 苦至于成立(th_target)) {
                    let _0x425c79 = [];
                    const _0xbf6e5f = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x4113ca = 能上报臣具(th_target, self_id)['toFixed'](0x2);
                    const _0x1b16f9 = 奔驰则刘病(th_target);
                    _0x425c79['push'](th_head);
                    if (th_name) _0x425c79['push']('名称:' + getEntityName(th_target));
                    if (th_carry) _0x425c79['push']('手持: ' + _0xbf6e5f['name'] + ' x' + _0xbf6e5f['count']);
                    if (th_dist) _0x425c79['push']('距离: ' + _0x4113ca + 'm');
                    if (th_pos) _0x425c79['push']('坐标: [' + _0x1b16f9['x'] + ', ' + _0x1b16f9['y'] + ', ' + _0x1b16f9['z'] + ']');
                    if (th_health) _0x425c79['push']('血量: ' + 在故老犹蒙(th_target, modes['th_health_mode']));
                    if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
                        updateTextContent(th_id, _0x425c79['join']('\n'));
                        updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                        updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                        updateTextScale(th_id, th_size);
                    } else th_target = null;
                } else updateTextContent(th_id, '');
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x135480 && _0x1c1d84['y'] > -av_minY) av_pos['push'](_0x1b87de);
                    if (!av_running && _0x135480) av_pos = [];
                    if (!av_running && _0x1c1d84['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x7b72 = av_pos.pop();
                            setPos(_0x7b72['x'], _0x7b72['y'], _0x7b72['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x1c1d84['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0x4d6bdc = {
                        'rot': _0xe52bc,
                        'yHeadRot': 0x0
                    };
                    const _0x33f2fb = {
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
                        ..._0x4d6bdc
                    };
                    const _0x27931d = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x4d6bdc
                    };
                    sendPlayerAuthInput(_0x33f2fb);
                    sendMovePlayer(_0x27931d);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x135480 && _0x1c1d84['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x1c1d84['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x4cd47d = av_pos[0x0];
                            setPos(_0x4cd47d['x'], _0x4cd47d['y'], _0x4cd47d['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x135480)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x3b55bf = 0x0; _0x3b55bf < gm_count; _0x3b55bf++) {
                        if (modes['gm_mode'] === 0x0) 而刘夙婴疾(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x2fbe19 = 0x0; _0x2fbe19 < gm_count; _0x2fbe19++) {
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
                                'rot': _0xe52bc,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 以表闻辞不(self_id, at_lists[0x0]) < kd_distance && (_0x135480 || !kd_only_ground)) {
                const _0x172c21 = 不许臣之进(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x2e9637 = 洗马猥以微(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x172c21,
                    'pitch': _0xe52bc['pitch']
                });
                if (kd_anti) silentMove(_0x2e9637['x'] * 0x2, _0x2e9637['y'] * 0x2, _0x2e9637['z'] * 0x2);
                else setMotion(_0x2e9637['x'] - self_pos['x'], _0x1c1d84['y'], _0x2e9637['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0x408bfc = 0x0; _0x408bfc < di_speed; _0x408bfc++) {
                    let _0x1fe401 = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0x1fe401, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 才臣以供养(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 才臣以供养(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 能上报臣具(self_id, at_lists[0x0]) > tra_range) {
                let _0x209a9e = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
                let _0x478c32 = 不许臣之进(self_id, at_lists[0x0], 'pitch_pos');
                let _0x2c7cba = 洗马猥以微(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x209a9e,
                    'pitch': -_0x478c32
                });
                setPos(_0x2c7cba['x'], _0x2c7cba['y'], _0x2c7cba['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x4cd5a3 = getPos(self_id);
                _0x4cd5a3['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0x1f8e0e => {
                    let _0x2092be = getPos(_0x1f8e0e);
                    _0x2092be['y'] += 0.765;
                    let _0x25ff0b = 不许臣之进(_0x4cd5a3, _0x2092be, 'yaw_pos');
                    let _0x54642f = 不许臣之进(_0x4cd5a3, _0x2092be, 'pitch_pos');
                    for (let _0xa16de8 = 0x0; _0xa16de8 < 能上报臣具(_0x1f8e0e, self_id); _0xa16de8 += (0xb - lp_size) / 0x5) {
                        let _0x1f1918 = 洗马猥以微(-_0xa16de8, getPos(self_id), {
                            'yaw': _0x25ff0b,
                            'pitch': -_0x54642f
                        });
                        鲜兄弟门衰(lp_type, _0x1f1918['x'], _0x1f1918['y'] - 1.53 + lp_offset / 0xa, _0x1f1918['z'], 0x1);
                    }
                });
            }
            if (PyRpcManager && rpc_store) _0x356ac4['push'](非臣陨首所(0x1, 'PyRpcManager', '已储存的RPC: ' + rpc_temp['length'] + '个', '§r'));
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x460178 = spm_text;
                if (spm_file) {
                    let _0xe13b49 = 火臣欲奉诏(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x460178 = _0xe13b49[才臣以供养(0x0, _0xe13b49['length'] - 0x1)];
                }
                const _0xddca1b = 'abcdef';
                if (spm_gradual) _0x460178 = 凶生孩六月(_0x460178);
                if (spm_rainbow) _0x460178 = '§' + _0xddca1b[才臣以供养(0x0, _0xddca1b['length'] - 0x1)] + _0x460178;
                if (spm_attack && at_lists['length'] > 0x0) _0x460178 = ' §e@' + at_lists['map'](_0x395ad3 => getEntityName(_0x395ad3))['join'](',') + ' §r' + _0x460178;
                for (let _0x461edd = 0x0; _0x461edd < spm_count; _0x461edd++) {
                    let _0x1040a7 = 矜育况臣孤(0x6);
                    sendChatMessage(spm_random ? _0x460178 + '§r || ' + _0x1040a7 : _0x460178);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x4c8f07 => setEntitySize(_0x4c8f07, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x4e66ab => {
                    const _0x4cd7d5 = 洗马猥以微(suck_range, self_pos, _0xe52bc);
                    setRealPos(_0x4e66ab, _0x4cd7d5['x'], _0x4cd7d5['y'], _0x4cd7d5['z']);
                });
            }
            if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x3ad7e9 => 退实为狼狈(_0x3ad7e9, self_id, aaim_fov, false));
            if (aaim_states) {
                let _0x101ee7 = 洗马猥以微(0.3 * aaim_speed / 0x5, self_pos, {
                    'yaw': _0xe52bc['yaw'] + (Math['round'](才臣以供养(0x0, 0x1)) ? 0x5a : -0x5a),
                    'pitch': 0x0
                });
                setMotion(_0x101ee7['x'] - self_pos['x'], _0x1c1d84['y'], _0x101ee7['z'] - self_pos['z']);
                aaim_states = false;
            }
            if (Velocity && self_moving) {
                let _0x4e02d3 = _0xe52bc['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x50e1c1 = 无主辞不赴(bhop_mot, getPos(self_id), 0x5);
                    _0x4e02d3 = 不许臣之进(self_id, _0x50e1c1, 'yaw_pos');
                }
                let _0x5839e4 = 洗马猥以微((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x4e02d3,
                    'pitch': 0x0
                });
                setMotion(_0x5839e4['x'] - self_pos['x'], vec_bhop && (_0x135480 || bhop_airjump) && (!bhop_airjump || _0x1c1d84['y'] < -0.42) ? bhop_heigh : _0x1c1d84['y'], _0x5839e4['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x1c7832 = getCameraRotation();
                const _0x3572bd = 洗马猥以微(fb_speed / 0xa, self_pos, {
                    'yaw': _0x1c7832['yaw'] > 0x0 ? 0xb4 - _0x1c7832['yaw'] : -0xb4 - _0x1c7832['yaw'],
                    'pitch': -_0x1c7832['pitch']
                });
                if (!_0x135480 && self_moving) setMotion(_0x3572bd['x'] - self_pos['x'], 0x0, _0x3572bd['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0x2474df => {
                    const _0x379283 = getPos(_0x2474df);
                    鲜兄弟门衰(tp_type, _0x379283['x'], _0x379283['y'] + 0.3, _0x379283['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x4bb9da === 'inventory_screen') && (!ic_chest || _0x4bb9da['includes']('chest_screen')) && (!ic_bow || _0xe52bc['pitch'] > 0x50)) {
                for (let _0x46796d = 0x0; _0x46796d < ic_max; _0x46796d++) {
                    const _0xaebc06 = getInventory(self_id, cleaner_slot);
                    if (_0xaebc06['count'] === 0x0) {
                        if (cleaner_slot > 0x0) cleaner_slot--;
                        else cleaner_slot = 0x23;
                        continue;
                    };
                    let _0x29f236 = false;
                    let _0x52a79c = clear_config[_0xaebc06['namespace']];
                    let _0x46de03 = 病常在床蓐(-0x2, _0xaebc06['namespace']);
                    if (modes['ic_mode'] === 0x0 && _0x52a79c) _0x29f236 = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x52a79c || _0x52a79c && (_0x52a79c['max_num'] === -0x1 || _0x46de03 > _0x52a79c['max_num']) && (_0x52a79c['aux'] === 'any' || _0xaebc06['aux'] === _0x52a79c['aux']))) _0x29f236 = true;
                    if (ic_move && !_0x29f236 && typeof _0x52a79c !== 'undefined' && _0x52a79c['slot'] !== 'undefined') 多疾病九岁(cleaner_slot, _0x52a79c['slot'], true, false);
                    if (_0x29f236) {
                        if (trash_slot > -0x1 && cleaner_slot > 0x8) {
                            多疾病九岁(cleaner_slot, trash_slot, true, false);
                            dropPlayerInventorySlot(self_id, trash_slot, false, modes['ic_mode'] === 0x0 && _0x52a79c || modes['ic_mode'] === 0x1 && !_0x52a79c);
                        } else dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x52a79c || modes['ic_mode'] === 0x1 && !_0x52a79c);
                    }
                    if (cleaner_slot > 0x0) cleaner_slot--;
                    else cleaner_slot = 0x23;
                }
            }
            if (SafeWalk && self_moving) {
                const _0x17490e = getEntityRot(self_id)['yaw'];
                const _0x2cb4ba = 洗马猥以微(0.3, self_pos, {
                    'yaw': _0x17490e,
                    'pitch': 0x0
                });
                const _0x1de37b = getBlock(_0x2cb4ba['x'], _0x2cb4ba['y'] - 1.7, _0x2cb4ba['z']);
                if (_0x1de37b['namespace'] === 'minecraft:air' && _0x135480) setMotion(-_0x1c1d84['x'], _0x1c1d84['y'], -_0x1c1d84['z']);
            }
            if (Spider && self_moving) {
                const _0x5a7589 = _0xe52bc['yaw'];
                const _0x4658fd = 洗马猥以微(0.5, self_pos, {
                    'yaw': _0x5a7589,
                    'pitch': 0x0
                });
                const _0xb2d9b5 = getBlock(_0x4658fd['x'], self_pos['y'] - 1.3, _0x4658fd['z']);
                if (_0xb2d9b5['namespace'] != 'minecraft:air') setMotion(_0x1c1d84['x'], sp_speed / 0xf, _0x1c1d84['z']);
            }
            if (DirectRender) {
                const _0x26b075 = 无主辞不赴(_0x1c1d84, self_pos, 0xa);
                const _0x264b2f = 洗马猥以微(0x1, self_pos, {
                    'yaw': _0x35a906,
                    'pitch': 0x0
                });
                var _0x1c3971 = _0xe52bc['yaw'];
                var _0x48a6ed = 不许臣之进(_0x26b075, self_id, 'yaw_pos');
                for (let _0x87e568 = 0x0; _0x87e568 < dr_num; _0x87e568++) {
                    const _0x3ba5f9 = 洗马猥以微(_0x87e568 * dr_space / 0x5, self_pos, {
                        'yaw': _0x1c3971,
                        'pitch': 0x0
                    });
                    const _0x379878 = 洗马猥以微(_0x87e568 * dr_space / 0x5, self_pos, {
                        'yaw': _0x48a6ed,
                        'pitch': 0x0
                    });
                    if (dr_rot) 鲜兄弟门衰(0x37, _0x3ba5f9['x'], self_pos['y'] - 0.27, _0x3ba5f9['z'], 0x1);
                    if (dr_move) 鲜兄弟门衰(0x37, _0x379878['x'], self_pos['y'] - 1.3, _0x379878['z'], 0x1);
                }
            }
            if (Fly && (!_0x135480 || !fly_air) && (!fly_move || self_moving) && _0x5bcc50 > 0x0) {
                const _0x3f9caa = fly_ud ? fly_current : 0x0;
                let _0x3d03f5 = 无主辞不赴(_0x1c1d84, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (fly_y) setPos(_0x3d03f5['x'], self_pos['y'] + _0x3f9caa, _0x3d03f5['z']);
                    else setPos(self_pos['x'], _0x3d03f5['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, 0x0, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0x3d03f5['x'] - self_pos['x'], _0x3d03f5['y'] - self_pos['y'], _0x3d03f5['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0x3d03f5['x'], _0x3d03f5['y'], _0x3d03f5['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0x3d03f5['x'],
                        'y': _0x3d03f5['y'],
                        'z': _0x3d03f5['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0xe52bc['pitch'],
                        'yaw': _0xe52bc['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x20587f = 无主辞不赴(_0x1c1d84, self_pos, 0x1);
                const _0x5ea80e = 不许臣之进(self_id, _0x20587f, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x5ea80e) + '°方向移动');
            }
            if (Suspend) setMotion(_0x1c1d84['x'], -0x186a0, _0x1c1d84['z']);
            if (Hover) setMotion(_0x1c1d84['x'], 0.05, _0x1c1d84['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0x1623db = getPos(at_lists[0x0]);
                const _0x1512c5 = rid_random ? 才臣以供养(-0x2, 0x2) : 0x0;
                就职诏书切(_0x1623db['x'] + _0x1512c5, _0x1623db['y'] + rid_y + 0x1, _0x1623db['z'] + _0x1512c5);
                _0x356ac4['push'](非臣陨首所(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x69fb70 = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x43c595 = 洗马猥以微(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x69fb70['yaw'] > 0x0 ? 0xb4 - _0x69fb70['yaw'] : -0xb4 - _0x69fb70['yaw'],
                        'pitch': -_0x69fb70['pitch']
                    });
                    if (spr_hor) _0x43c595['y'] = self_pos['y'];
                    const _0x2d7b3f = getBlock(_0x43c595['x'], _0x43c595['y'], _0x43c595['z']);
                    if (_0x2d7b3f['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x43c595['x'], _0x43c595['y'], _0x43c595['z']);
                            setEntityMotion(self_id, _0x1c1d84['x'], -1e-7, _0x1c1d84['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x43c595['x'] - self_pos['x'], _0x43c595['y'] - self_pos['y'], _0x43c595['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x43c595['x'], _0x43c595['y'], _0x43c595['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x43c595['x'],
                                'y': _0x43c595['y'],
                                'z': _0x43c595['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0xe52bc['pitch'],
                                'yaw': _0xe52bc['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x45acbe = 0x0; _0x45acbe < cs_count; _0x45acbe++) {
                    const _0x2ee87e = Math['sqrt'](_0x45acbe);
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x1b87de['x'], _0x1b87de['y'], _0x1b87de['z'], _0x2ee87e);
                    if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x4) sendSound(_0x45acbe, self_pos['x'], self_pos['y'], self_pos['z'], _0x45acbe);
                    if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0x191deb => {
                        if (_0x191deb !== self_id) 守臣逵察臣(_0x191deb, false);
                    });
                    if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
                        'pos': self_pos,
                        'yHeadRot': 0x0,
                        'inputMode': 0x2,
                        'playMode': 0x0,
                        'flags': [_0x45acbe],
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
                        'type': _0x45acbe,
                        'value': 0x1
                    });
                    if (modes['cs_mode'] === 0x8) executeCommand('/w 你好 再见');
                }
            }
            if (KickAura && at_lists['length'] > 0x0) {
                let _0x2d93b6 = [];
                if (ka_player) _0x2d93b6['concat'](_0x405cf7['map'](_0x53c913 => _0x53c913['id']));
                if (ka_target) _0x2d93b6['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0x2d93b6['forEach'](_0x5af4fe => {
                    if (_0x5af4fe == self_id) return;
                    const _0x2dfd4f = getEntityName(_0x5af4fe);
                    let _0x1a98b9 = _0x2dfd4f['indexOf'](']') - 0x2;
                    let _0x152156 = ['b', 'c', 'e', 'a'];
                    for (let _0x26d751 of _0x152156) {
                        if (_0x2dfd4f['indexOf']('·§' + _0x26d751) != -0x1) {
                            _0x1a98b9 = _0x2dfd4f['indexOf']('·§' + _0x26d751);
                            break;
                        }
                    }
                    let _0x4825cb = _0x1a98b9 === -0x1 ? _0x2dfd4f : _0x2dfd4f['slice'](_0x1a98b9 + 0x3, _0x2dfd4f['length']);
                    if (_0x4825cb['includes']('【') && _0x4825cb['includes']('】')) _0x4825cb = 浴清化前太(_0x4825cb, '【', '】');
                    for (let _0x5809c8 = 0x0; _0x5809c8 < ka_count; _0x5809c8++) executeCommand('/tell "' + _0x4825cb + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x14719a = 0x0; _0x14719a < ka_count; _0x14719a++) executeCommand('/tell @a[' + _0x2d93b6['map'](_0x3bde9b => 'name="' + getEntityName(_0x3bde9b) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x1c1d84['y'] < as_minY && !_0x135480) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x241b92 = 0x0; _0x241b92 < 0x9; _0x241b92++) {
                        const _0x2b8a3a = getInventory(self_id, _0x241b92);
                        if (_0x2b8a3a['isBlock'] || as_water && _0x2b8a3a['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x241b92);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x7fa24a of 孝治天下凡(_0x1b87de, {
                            'x': _0x1b87de['x'],
                            'y': _0x1b87de['y'] + as_minY * 0x5,
                            'z': _0x1b87de['z']
                        }, 0x1, true)) {
                        const _0x5152b7 = getBlock(_0x7fa24a['x'], _0x7fa24a['y'], _0x7fa24a['z']);
                        if (_0x5152b7['namespace'] != 'minecraft:air') continue;
                        const _0x4571f6 = getBlock(_0x7fa24a['x'], _0x7fa24a['y'] - 0x1, _0x7fa24a['z']);
                        if (_0x4571f6['namespace'] === 'minecraft:air' || _0x4571f6['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x7fa24a['x'], _0x7fa24a['y'], _0x7fa24a['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
                    if (as_fake) setBlock(self_pos['x'], _0x1b87de['y'] + _0x1c1d84['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);
                    else buildBlock(self_id, _0x1b87de['x'], _0x1b87de['y'] + _0x1c1d84['y'] * 3.1, _0x1b87de['z'], 0x0);
                }
                if (as_near) {
                    let _0x3d8f22 = {};
                    let _0x329ed0 = Infinity;
                    for (let _0x5ce073 = -0x5; _0x5ce073 <= 0x5; _0x5ce073++) {
                        for (let _0x34ee2c = -0x1; _0x34ee2c <= 0x0; _0x34ee2c++) {
                            for (let _0x6d384e = -0x5; _0x6d384e <= 0x5; _0x6d384e++) {
                                let _0x41cb7c = Math['sqrt'](_0x5ce073 * _0x5ce073 + _0x6d384e * _0x6d384e + _0x34ee2c * _0x34ee2c);
                                let _0x263e8c = {
                                    'x': _0x5ce073 + _0x1b87de['x'],
                                    'y': _0x34ee2c + _0x1b87de['y'],
                                    'z': _0x6d384e + _0x1b87de['z']
                                };
                                const _0x2135a9 = getBlock(_0x263e8c['x'], _0x263e8c['y'], _0x263e8c['z']);
                                if (_0x2135a9['namespace'] === 'minecraft:air') continue;
                                if (_0x41cb7c < _0x329ed0) {
                                    _0x329ed0 = _0x41cb7c;
                                    _0x3d8f22 = _0x263e8c;
                                }
                            }
                        }
                    }
                    if (_0x3d8f22 != {}) {
                        let _0x448b8f = {
                            'x': _0x1b87de['x'],
                            'y': _0x1b87de['y'] - 0x1 + _0x1c1d84['y'] * 0x3,
                            'z': _0x1b87de['z']
                        };
                        let _0x1c7e30 = 孝治天下凡(_0x3d8f22, _0x448b8f, 0.8, true);
                        _0x1c7e30['forEach'](_0x11431e => {
                            const _0x12dfe6 = getBlock(_0x11431e['x'], _0x11431e['y'], _0x11431e['z']);
                            if (_0x12dfe6['namespace'] === 'minecraft:air') 无应门五尺(Math['round'](_0x11431e['x']), Math['floor'](_0x11431e['y']), Math['round'](_0x11431e['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0x5c5c6e = getEntityRot(at_lists[0x0]);
                let _0x191a5e = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x495e76 = aai_random ? 才臣以供养(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x495e76 : _0x5c5c6e['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x2f3a8f = 洗马猥以微(-aai_len, _0x191a5e, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x2f3a8f['x'], _0x191a5e['y'] + 1.83 + aai_h, _0x2f3a8f['z']);
                if (modes['sur_mode'] === 0x1) 而刘夙婴疾(_0x2f3a8f['x'], _0x191a5e['y'] + 1.83 + aai_h, _0x2f3a8f['z']);
                _0x356ac4['push'](非臣陨首所(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0x4c9536 = [];
                if (sp_target) _0x4c9536 = at_lists;
                if (sp_all) _0x4c9536 = getPlayerList();
                if (sp_entity) _0x4c9536 = getEntityList();
                if (sp_posList['length'] > 0x0) _0x4c9536 = sp_posList;
                let _0x203f42 = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x1dd2a2 = 0x0; _0x1dd2a2 < sp_vec; _0x1dd2a2++) {
                    if (sp_data['length'] > 0x0) _0x203f42 = sp_data['shift']()['sounds'];
                    if (_0x203f42['length'] > 0x0) {
                        _0x202812: for (let _0x1226b9 of _0x203f42) {
                            let _0x3beb55 = _0x1226b9['sound'];
                            let _0x50d116 = _0x1226b9['level'];
                            if (_0x50d116 === -0x1 && _0x3beb55 === 0x0) continue;
                            if (sp_large) {
                                const _0x3368ac = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x4563e5 = -_0x3368ac; _0x4563e5 <= _0x3368ac; _0x4563e5 += sp_space) {
                                    for (let _0x589628 = -_0x3368ac; _0x589628 <= _0x3368ac; _0x589628 += sp_space) {
                                        sendSound(Number(_0x3beb55), self_pos['x'] + _0x4563e5, self_pos['y'] + sp_y, self_pos['z'] + _0x589628, Number(_0x50d116));
                                    }
                                }
                                continue _0x202812;
                            }
                            _0x4c9536['forEach'](_0x69903f => {
                                if (typeof _0x69903f != 'string')
                                    for (let _0x225994 = 0x0; _0x225994 < sp_count; _0x225994++) sendSound(Number(_0x3beb55), _0x69903f['x'], _0x69903f['y'] + sp_y, _0x69903f['z'], Number(_0x50d116));
                                else {
                                    if (_0x69903f === self_id && sp_exclude) return;
                                    const _0xfd0c30 = getPos(_0x69903f);
                                    let _0x41183c = 洗马猥以微(sp_distance, _0xfd0c30, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x357c66 = 0x0; _0x357c66 < sp_count; _0x357c66++) sendSound(Number(_0x3beb55), _0x41183c['x'], _0x41183c['y'] + sp_y, _0x41183c['z'], Number(_0x50d116));
                                }
                            });
                        }
                    }
                }
                if (sp_info && sp_data['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'SoundPlayer', '进度: ' + (sp_length - sp_data['length']) + '/' + sp_length + ' - ' + ((sp_length - sp_data['length']) / sp_length * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(sp_length - sp_data['length'], sp_length, '▌', 0x20), '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                非臣陨首所(0x0, '进度', '循环播放中 共' + sp_data['length'] + '条音频数据', '§r');
            }
            if (_0x103423['current'] < 0x6) _0x356ac4['push'](非臣陨首所(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x103423['current']) <= ad_min) {
                const _0x1dd5f7 = modes['ad_mode'];
                if (_0x1dd5f7 === 0x2) removeEntity(self_id);
                if (_0x1dd5f7 === 0x0 || _0x1dd5f7 === 0x1) executeCommand(_0x1dd5f7 === 0x0 ? '/hub' : '/again');
                if (_0x1dd5f7 === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0xe52bc['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 祚薄晚有儿(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x1dd5f7 === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'mushroom_stew'));
                    else {
                        祚薄晚有儿();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x1dd5f7 === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'skull'));
                    else {
                        祚薄晚有儿();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x1dd5f7 === 0x6) leaveWorld();
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
                const _0x121cf8 = getBlock(_0x1b87de['x'], _0x1b87de['y'] - 0x1, _0x1b87de['z']);
                if (_0x121cf8['namespace'] === 'minecraft:flowing_water' || _0x121cf8['namespace'] === 'minecraft:water' || _0x121cf8['namespace'] === 'minecraft:flowing_lava' || _0x121cf8['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x1c1d84['x'], 0x0, _0x1c1d84['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x1ad13a => {
                    let _0xa955b = 愍臣孤弱躬(_0x1ad13a);
                    非臣陨首所(0x0, 'TargetInfo', '\n' + _0xa955b + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x1ad13a) + '_' + _0x1ad13a + '.txt', _0xa955b);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0x423a0a = at_lists[0x0];
                const _0x2d852b = 能上报臣具(self_id, _0x423a0a);
                const _0x3dbd06 = 退实为狼狈(self_id, _0x423a0a, aa_fov, 0x0);
                if (_0x2d852b <= aa_range && _0x3dbd06 || aa_throw) {
                    const _0x1d4b15 = 才臣以供养(aa_min, aa_max);
                    let _0x3dba11 = 不许臣之进(self_id, _0x423a0a, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x640e74 = 不许臣之进(self_id, _0x423a0a, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x3dba11 <= 0xb4 && _0x3dba11 >= -0xb4 && _0x640e74 <= 0x5a && _0x640e74 >= -0x5a) {
                        let _0x549258 = _0x3dba11 >= 0x0 ? -_0x1d4b15 : _0x1d4b15;
                        let _0xf21f52 = _0x640e74 >= 0x0 ? _0x1d4b15 : -_0x1d4b15;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x3dba11) < _0x1d4b15 || Math['abs'](_0x640e74) < _0x1d4b15)) {
                            _0x549258 = -_0x3dba11 / ((0x28 - _0x1d4b15) / 0x2);
                            _0xf21f52 = -_0x640e74 / ((0x28 - _0x1d4b15) / 1.125);
                        }
                        const _0xdcf68f = 退实为狼狈(self_id, _0x423a0a, aa_prec * 0x2, 0x1);
                        const _0x5cabde = 退实为狼狈(self_id, _0x423a0a, aa_prec * 0x4, 0x2);
                        if (!_0xdcf68f) setLocalPlayerTurn(0x0, _0x549258);
                        if (!_0x5cabde && !aa_throw || !isSimilar(_0x640e74, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0xf21f52, 0x0);
                    }
                    _0x356ac4['push'](非臣陨首所(0x1, 'AssistAim', getEntityName(_0x423a0a), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0x270f08 => {
                    const _0x43ea33 = _0x270f08;
                    const _0x314964 = getPos(_0x43ea33);
                    if (!_0x43ea33 || !findEntity(_0x43ea33)) return;
                    if (能上报臣具(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x4354da = ia_random ? 才臣以供养(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x1c1d84;
                        for (let _0x50cc06 = 0x0; _0x50cc06 < ia_move; _0x50cc06++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x314964['x'] + _0x4354da, _0x314964['y'], _0x314964['z'] + _0x4354da, 0x1);
                                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                                    'pos': {
                                        'x': _0x314964['x'] + _0x4354da,
                                        'y': _0x314964['y'] + ia_offset / 0x5,
                                        'z': _0x314964['z'] + _0x4354da
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x314964['x'], _0x314964['y'], _0x314964['z']);
                            if (modes['ia_mode'] === 0x1) silentMove(_0x314964['x'] + _0x4354da, _0x314964['y'] + ia_offset / 0x5, _0x314964['z'] + _0x4354da);
                            if (modes['ia_mode'] === 0x2) movePlayer(_0x314964['x'] + _0x4354da, _0x314964['y'] + ia_offset / 0x5, _0x314964['z'] + _0x4354da);
                        }
                        if (ia_jump) playerJump();
                        for (let _0x1deb72 = 0x0; _0x1deb72 < ia_attack; _0x1deb72++) 守臣逵察臣(_0x43ea33, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) 且臣少仕伪();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) 且臣少仕伪();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x356ac4['push'](非臣陨首所(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 郡县逼迫催(ia_targets['map'](_0x4340e0 => getEntityName(_0x4340e0))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 苦特为尤甚(_0x1b87de);
            if (AutoVoid) {
                const _0x3f35c8 = 奔驰则刘病(self_id);
                const _0x44c264 = getBlock(_0x3f35c8['x'], _0x1b87de['y'] - 0x1, _0x3f35c8['z']);
                for (let _0x1478d4 = -0x2; _0x1478d4 < 0x3; _0x1478d4++) {
                    for (let _0x31590a = -0x2; _0x31590a < 0x3; _0x31590a++) {
                        const _0x5f2327 = getBlock(_0x3f35c8['x'] + _0x1478d4, _0x1b87de['y'] - 0x1, _0x3f35c8['z'] + _0x31590a);
                        if (_0x5f2327['namespace'] === 'minecraft:air' && _0x1c1d84['y'] < -0.0783 && _0x1c1d84['y'] > -0.0785 && _0x44c264['namespace'] != 'minecraft:air') {
                            const _0x10a81c = -不许臣之进(self_id, {
                                'x': _0x3f35c8['x'] + _0x1478d4,
                                'y': self_pos['y'],
                                'z': _0x3f35c8['z'] - _0x31590a
                            }, 'yaw_pos');
                            const _0x48d8d0 = 洗马猥以微(0.5, self_pos, {
                                'yaw': _0x10a81c,
                                'pitch': 0x0
                            });
                            setMotion(_0x48d8d0['x'] - self_pos['x'], _0x1c1d84['y'], _0x48d8d0['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x5455cd = getEntityList();
                _0x5455cd['forEach'](_0x189a48 => {
                    if ((getEntityTypeId(_0x189a48) === 0x400055 || getEntityTypeId(_0x189a48) === 0x400056 || getEntityTypeId(_0x189a48) === 0xc00050) && 能上报臣具(_0x189a48, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x189a48);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0x1c29ef = 不许臣之进(getPos(_0x189a48), self_id, 'yaw_pos');
                            const _0x3f6800 = 洗马猥以微(0.5, self_pos, {
                                'yaw': _0x1c29ef,
                                'pitch': _0xe52bc['pitch']
                            });
                            setMotion(_0x3f6800['x'] - self_pos['x'], _0x1c1d84['y'], _0x3f6800['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 守臣逵察臣(_0x189a48, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x19cca4 = getPlayerList();
                let _0x55658 = [];
                let _0x4328b8 = false;
                let _0x813b56 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x505e77 = 0x1; _0x505e77 <= tr_len; _0x505e77 += tr_dens / 0xa) {
                    let _0x444ab4 = 强近之亲内(_0x505e77, _0xe52bc['pitch'], tr_speed, tr_g)['data'];
                    let _0x146f2c = 洗马猥以微(_0x505e77, self_pos, {
                        'yaw': _0xe52bc['yaw'],
                        'pitch': 0x0
                    });
                    let _0x5ddc8b = getBlock(_0x146f2c['x'], _0x146f2c['y'] + _0x444ab4, _0x146f2c['z']);
                    if (tr_show || !_0x4328b8) {
                        _0x19cca4['forEach'](_0x330883 => {
                            if (!_0x4328b8) {
                                let _0x21bdbb = getPos(_0x330883);
                                let _0x3ef2df = {
                                    'x': _0x146f2c['x'],
                                    'y': _0x146f2c['y'] + _0x444ab4,
                                    'z': _0x146f2c['z']
                                };
                                let _0x3f801e = getEntitySize(_0x330883);
                                if (_0x3ef2df['x'] <= _0x21bdbb['x'] + _0x3f801e['x'] / 0x2 && _0x3ef2df['x'] >= _0x21bdbb['x'] - _0x3f801e['x'] / 0x2 && _0x3ef2df['y'] <= _0x21bdbb['y'] + _0x3f801e['y'] / 0x2 && _0x3ef2df['y'] >= _0x21bdbb['y'] - _0x3f801e['y'] / 0x2 && _0x3ef2df['z'] <= _0x21bdbb['z'] + _0x3f801e['x'] / 0x2 && _0x3ef2df['z'] >= _0x21bdbb['z'] - _0x3f801e['x'] / 0x2) {
                                    _0x356ac4['push'](非臣陨首所(0x1, 'HasAimed', getEntityName(_0x330883), '§r'));
                                    _0x4328b8 = true;
                                }
                            }
                        });
                    }
                    if (_0x5ddc8b['namespace'] != 'minecraft:air' || _0x4328b8) {
                        _0x813b56 = _0x146f2c;
                        if (modes['tr_mode'] === 0x1 && _0x5ddc8b['namespace'] != 'minecraft:air') {
                            for (let _0x262263 = 0x0; _0x262263 <= 0x14; _0x262263 += 0x2) 鲜兄弟门衰(tr_type, _0x813b56['x'], _0x813b56['y'] + _0x444ab4 + _0x262263 / 0xa, _0x813b56['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0xaad4eb = getDistance(_0x813b56, self_pos);
                    for (let _0x9c697b = 0x1; _0x9c697b <= _0xaad4eb; _0x9c697b += tr_dens / 0xa) {
                        let _0x3a625f = 强近之亲内(_0x9c697b, _0xe52bc['pitch'], tr_speed, tr_g)['data'];
                        let _0x4647b6 = (tr_offset - 0xa) / 0xa;
                        let _0x133558 = _0xe52bc['yaw'] + 0x5a;
                        if (_0x133558 > 0xb4) _0x133558 = _0x133558 - 0x168;
                        if (_0x133558 < -0xb4) _0x133558 = _0x133558 + 0x168;
                        let _0x13275f = 洗马猥以微(_0x4647b6, self_pos, {
                            'yaw': _0x133558,
                            'pitch': 0x0
                        });
                        let _0x5abf63 = 洗马猥以微(_0x9c697b, _0x13275f, {
                            'yaw': _0xe52bc['yaw'] - Math['atan'](_0x4647b6 / _0xaad4eb) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x3097ed = getBlock(_0x5abf63['x'], _0x5abf63['y'] + _0x3a625f, _0x5abf63['z']);
                        if (modes['tr_mode'] === 0x0 && _0x3097ed['namespace'] === 'minecraft:air') 鲜兄弟门衰(tr_type, _0x5abf63['x'], _0x5abf63['y'] + _0x3a625f + 0.5, _0x5abf63['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x39d224 = 奔驰则刘病(self_id);
                for (let _0x4d7311 = -fa_range; _0x4d7311 < fa_range; _0x4d7311++) {
                    for (let _0x41efd5 = -fa_range; _0x41efd5 < fa_range; _0x41efd5++) {
                        const _0xf8a437 = getBlock(_0x39d224['x'] + _0x4d7311, _0x1b87de['y'] - 0x1, _0x39d224['z'] + _0x41efd5);
                        const _0xe08405 = getBlock(_0x39d224['x'] + _0x4d7311, _0x1b87de['y'], _0x39d224['z'] + _0x41efd5);
                        if ((_0xf8a437['namespace'] === 'minecraft:dirt' || _0xf8a437['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x39d224['x'] + _0x4d7311, _0x1b87de['y'] - 0x1, _0x39d224['z'] + _0x41efd5, 0x1);
                        if (_0xf8a437['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x39d224['x'] + _0x4d7311, _0x1b87de['y'] - 0x1, _0x39d224['z'] + _0x41efd5, 0x1);
                        if (_0xe08405['aux'] === 0x7 && (_0xe08405['namespace'] === 'minecraft:beetroot' || _0xe08405['namespace'] === 'minecraft:wheat' || _0xe08405['namespace'] === 'minecraft:carrots' || _0xe08405['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x39d224['x'] + _0x4d7311, _0x1b87de['y'], _0x39d224['z'] + _0x41efd5, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0xe08405['aux'] <= 0x6 && (_0xe08405['namespace'] === 'minecraft:beetroot' || _0xe08405['namespace'] === 'minecraft:wheat' || _0xe08405['namespace'] === 'minecraft:carrots' || _0xe08405['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x39d224['x'] + _0x4d7311, _0x1b87de['y'], _0x39d224['z'] + _0x41efd5, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x473558 = 0x0; _0x473558 < am_count; _0x473558++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x1b87de['x'],
                                'y': _0x1b87de['y'] - 0x1,
                                'z': _0x1b87de['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x30d021 = JSON['parse'](火臣欲奉诏(nx_paths + '/PlayerAction.json'));
                    _0x30d021['forEach'](_0x531a11 => {
                        if (_0x531a11['delay'] % am_tick === 0x0) {
                            for (let _0x5a20e6 = 0x0; _0x5a20e6 < _0x531a11['count']; _0x5a20e6++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x531a11['value'],
                                'type': Number(_0x531a11['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x33e061 = 0x0; _0x33e061 < pam_count; _0x33e061++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x1b87de['x'],
                        'y': _0x1b87de['y'] - 0x1,
                        'z': _0x1b87de['z']
                    },
                    'inputs': pam_array['map'](_0x6854ee => Number(_0x6854ee)),
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
            if (AutoJump && _0x135480) setMotion(_0x1c1d84['x'], aj_y / 0x64, _0x1c1d84['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x1f2e8d => {
                if (bc_packet) silentMove(_0x1f2e8d['x'], _0x1f2e8d['y'], _0x1f2e8d['z']);
                buildBlock(self_id, _0x1f2e8d['x'], _0x1f2e8d['y'], _0x1f2e8d['z'], 0x0);
            });
            if (NoFall && _0x1c1d84['y'] < -nf_max && !_0x135480) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x135480 && _0x135480)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x24ee57 = 0x0; _0x24ee57 < 0x168; _0x24ee57 += do_density / 0xa) {
                    const _0x4d0672 = do_l_axis * Math['cos'](_0x24ee57 * Math['PI'] / 0xb4);
                    const _0x54dccd = do_s_axis * Math['sin'](_0x24ee57 * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x37, do_pos[0x0] + _0x4d0672, do_pos[0x1], do_pos[0x2] + _0x54dccd, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x356ac4['push'](非臣陨首所(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x16651f = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x16651f['x']), Math['round'](_0x16651f['y'] - 0x1), Math['round'](_0x16651f['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Health', 'Health: ' + 在故老犹蒙(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Targets', 郡县逼迫催(at_lists['map'](_0x3149a5 => getEntityName(_0x3149a5))), '§r'));
            if (ShowInfo) {
                const _0x3b846a = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x33b0c8 = Math['sqrt'](_0x1c1d84['x'] * _0x1c1d84['x'] + _0x1c1d84['z'] * _0x1c1d84['z']);
                if (show_speed) _0x356ac4['push'](非臣陨首所(0x1, 'Speed', '水平移动速度: ' + _0x33b0c8['toFixed'](0x2) + 'm/s 移动速度: ' + _0x336ec6['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x5bcc50['toFixed'](0x2) + 'm/s 坐标速度:' + _0x3b74ae['toFixed'](0x2) + 'm/s 能力速度:' + _0x3b846a['current']['toFixed'](0x2) + ('\n移动值: [' + _0x1c1d84['x']['toFixed'](0x2) + ', ' + _0x1c1d84['y']['toFixed'](0x2) + ', ' + _0x1c1d84['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x356ac4['push'](非臣陨首所(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x1b87de['x'] + ', Y:' + _0x1b87de['y'] + ', Z:' + _0x1b87de['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Item', self_item['name'] + ' §r§ox' + 病常在床蓐(-0x1), '§r'));
                if (show_resources) {
                    const _0x545975 = {
                        'gold': 病常在床蓐(-0x2, 'minecraft:gold_ingot'),
                        'iron': 病常在床蓐(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 病常在床蓐(-0x2, 'minecraft:diamond'),
                        'emerald': 病常在床蓐(-0x2, 'minecraft:emerald'),
                        'star': 病常在床蓐(-0x2, 'minecraft:nether_star')
                    };
                    const _0x109161 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x356ac4['push'](非臣陨首所(0x1, 'Resource', '绿宝石:' + _0x545975['emerald'] + ', 钻石:' + _0x545975['diamond'] + ', 金锭:' + _0x545975['gold'] + ', 铁锭:' + _0x545975['iron'] + '\n下界之心:' + _0x545975['star'] + ', 经验:' + _0x109161, '§r'));
                }
                if (show_target_dis && at_lists['length'] > 0x0) _0x356ac4['push'](非臣陨首所(0x1, 'Distance', '三维距离: ' + 能上报臣具(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 以表闻辞不(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x356ac4['push'](非臣陨首所(0x1, 'PlayerList', '世界玩家: ' + _0x405cf7['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
                if (show_kill_num) _0x356ac4['push'](非臣陨首所(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x356ac4['push'](非臣陨首所(0x1, 'Time', 'Time: ' + 命诏书特下(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x356ac4['push'](非臣陨首所(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x356ac4['push'](非臣陨首所(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x356ac4['push'](非臣陨首所(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x356ac4['push'](非臣陨首所(0x1, 'Health', '当前血量: ' + _0x103423['current'] + ', 最大值:' + _0x103423['max'] + ', 最小值:' + _0x103423['min'], '§r'));
                if (show_detail_item) _0x356ac4['push'](非臣陨首所(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x182f46 = new Date();
                    const _0x34e26a = _0x182f46['getFullYear']();
                    const _0x11016f = ('0' + (_0x182f46['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x288e8c = ('0' + _0x182f46['getDate']())['slice'](-0x2);
                    const _0x221b7f = ('0' + _0x182f46['getHours']())['slice'](-0x2);
                    const _0x4933c3 = ('0' + _0x182f46['getMinutes']())['slice'](-0x2);
                    const _0xbee22a = ('0' + _0x182f46['getSeconds']())['slice'](-0x2);
                    const _0xa8b072 = _0x34e26a + '-' + _0x11016f + '-' + _0x288e8c + ' ' + _0x221b7f + ':' + _0x4933c3 + ':' + _0xbee22a;
                    _0x356ac4['push'](非臣陨首所(0x1, 'RealTime', _0xa8b072, '§r'));
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
                let _0x4f5986 = _0xe52bc['yaw'];
                _0x4f5986 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0x4f5986 >= 0xb4) _0x4f5986 -= 0x168;
                if (_0x4f5986 <= -0xb4) _0x4f5986 += 0x168;
                let _0x494d69 = (_0x135480 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0xdf8720 = (_0x135480 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x7010bb = {};
                if (rc_surround && at_lists['length'] > 0x0 && 能上报臣具(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0x2189d5 = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x237d92 = 不许臣之进(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x2b9c02 = _0x237d92 > -0x5a || _0x237d92 < 0x5a ? rc_speed : -rc_speed;
                    let _0x5b7acf = _0x4f5986 > -0x5a || _0x4f5986 < 0x5a ? rc_speed : -rc_speed;
                    let _0x4fd37b = rc_relative ? _0x2b9c02 : _0x5b7acf;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x2189d5 -= _0x4fd37b * 0x5 : _0x2189d5 += _0x4fd37b * 0x5;
                    if (_0x2189d5 > 0xb4) _0x2189d5 -= 0x168;
                    if (_0x2189d5 < -0xb4) _0x2189d5 += 0x168;
                    let _0x18c24c = 洗马猥以微(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0x2189d5,
                        'pitch': 0x0
                    });
                    let _0x43dd20 = 不许臣之进(_0x18c24c, self_id, 'yaw_pos');
                    _0x7010bb = 洗马猥以微(rc_legal ? modes['rc_mode'] === 0x0 ? _0x494d69 : _0xdf8720 : rc_speed / 0x8, self_pos, {
                        'yaw': _0x43dd20,
                        'pitch': 0x0
                    });
                } else _0x7010bb = 洗马猥以微(rc_legal ? modes['rc_mode'] === 0x0 ? _0x494d69 : _0xdf8720 : rc_speed / 0x8, self_pos, {
                    'yaw': _0x4f5986,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x7010bb['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x7010bb['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 不行零丁孤(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x4f5986 + sca_yaw);
                    else 不行零丁孤(_0xe52bc['pitch'], _0x4f5986 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0x7010bb = 洗马猥以微(rc_speed / 0x8, self_pos, _0xe52bc);
                        setMotion(_0x7010bb['x'] - self_pos['x'], _0x7010bb['y'] - self_pos['y'], _0x7010bb['z'] - self_pos['z']);
                    } else {
                        const _0x40f4bc = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0xd12af = getCameraRotation();
                        rc_roll += (_0x40f4bc ? 0x1 : -0x1) * 臣荣举臣秀(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0x7010bb['x'] - self_pos['x'], rc_bhop && _0x135480 || rc_ahop && _0x1c1d84['y'] < -0.4 ? rc_y : _0x1c1d84['y'], _0x7010bb['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0x7010bb['x'], self_pos['y'], _0x7010bb['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined') {
                const _0x59b371 = getEntityMotion(self_id);
                const _0x3f7e35 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x59b371['x'], rc_y, _0x59b371['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x3f7e35['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x3f7e35['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x59b371['x'], -rc_y, _0x59b371['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x3f7e35['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x3f7e35['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x356ac4['push'](非臣陨首所(0x1, 'BalanceTimer', '储存的Tick: ' + BalanceTimer_t + 'ticks', '§r'));
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
                    let _0x3161d8 = ticks * mt_speed / 0x14 % 0x5dc0;
                    setWorldData({
                        'time': _0x3161d8
                    });
                } else if (mt_custom === 0x19) {
                    let _0x578c5b = 0x0;
                    if (modes['mt_time'] === 0x0) _0x578c5b = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x578c5b = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x578c5b = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x578c5b = 0x30d4;
                    setWorldData({
                        'time': _0x578c5b
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
                亲抚养臣少(ex, ey, ez, bk_auth, bk_action);
                if (bk_timer > bk_last) bk_pos = null;
                bk_timer++;
            }
            if (FakeTip) {
                switch (modes['fakeTip_mode']) {
                    case 0x0:
                        showTipMessage('§bProtoHax §r| ' + _0x3b74ae['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x1834c5, _0x421a41) => globalThis['current_poem'] = JSON['parse'](_0x421a41)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x3b74ae['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x42e3c8 = 0x0; _0x42e3c8 < mine_speed; _0x42e3c8++) {
                    let _0xf1fc7 = mine_list['shift']();
                    if (typeof _0xf1fc7 != 'object' || _0xf1fc7['length'] === 0x0) continue;
                    const _0x9260d = getBlock(_0xf1fc7[0x0], _0xf1fc7[0x1], _0xf1fc7[0x2]);
                    if (_0x9260d['namespace'] != 'minecraft:air' && _0x9260d['namespace'] === mine_name) {
                        destroyBlock(self_id, _0xf1fc7[0x0], _0xf1fc7[0x1], _0xf1fc7[0x2], 0x0);
                        mine_current++;
                    }
                }
                if (mine_info) _0x356ac4['push'](非臣陨首所(0x1, 'Miner', '进度: ' + mine_current + '/' + mine_num + ' - ' + (mine_current / mine_num * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(mine_current, mine_num, '▌', 0x20), '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x135480) setMotion(0x0, 0x0, 0x0);
            if (_0x356ac4['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x356ac4['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x356ac4['join']('\n'));
                if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x356ac4['join'](' | '));
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
            prev_heal = _0x103423['current'];
            prev_ground = _0x135480;
            prev_itemCount = self_itemCount;
        } catch (_0x380e9a) {
            clientMessage(_0x380e9a['stack']);
        }
        if (ShowNXInfo) addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0x5c5b32 = bn_list['length'] - 0x1; _0x5c5b32 >= 0x0; _0x5c5b32--) {
                let _0x16c1ae = bn_list[_0x5c5b32];
                _0x16c1ae['x'] -= _0x16c1ae['speed'];
                if (_0x16c1ae['x'] < 0x0) {
                    bn_list['splice'](_0x5c5b32, 0x1);
                    removeText(_0x16c1ae['id']);
                } else updateTextPosition(_0x16c1ae['id'], _0x16c1ae['x'], _0x16c1ae['y']);
            }
        }
        if (Derp) {
            var _0x24cd70 = getEntityRot(self_id);
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
            dp_pitch -= dp_random ? 才臣以供养(-0xa, 0xa) : dp_headSpeed * 0x2;
            dp_yaw += dp_random ? 才臣以供养(-0xa, 0xa) : dp_bodySpeed * 0x2;
            if (dp_pitch < -0x5a) dp_pitch = 0x5a;
            if (dp_yaw > 0xb4) dp_yaw = dp_yaw - 0x168;
            if (!dp_head) dp_pitch = _0x24cd70['pitch'];
            if (!dp_body) dp_yaw = _0x24cd70['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x1a4135 = getCameraRotation();
            const _0x54a8e4 = 无主辞不赴(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0xd9202c = sca_move ? 不许臣之进(_0x54a8e4, self_id, 'yaw_pos') : _0x1a4135['yaw'] > 0x0 ? 0xb4 - _0x1a4135['yaw'] : -0xb4 - _0x1a4135['yaw'];
            不行零丁孤(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0xd9202c + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0x52c1d1 = 不许臣之进(self_id, at_lists[0x0], 'pitch_pos');
            let _0x212475 = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
            不行零丁孤(_0x52c1d1, _0x212475);
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

    function onExecuteCommandEvent(_0x3c26a2) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 非臣陨首所(0x0, 'ExecuteCMD', _0x3c26a2, '§r');
        const _0x32f942 = _0x3c26a2['split'](' ');
        if (_0x32f942[0x0] === '/set' && _0x32f942[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x32f942[0x2]),
                'y': Number(_0x32f942[0x3]),
                'z': Number(_0x32f942[0x4])
            };
            if (_0x32f942[0x5]) nx_goalSpeed = Number(_0x32f942[0x5]);
            非臣陨首所(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x32f942[0x0] === '/set' && _0x32f942[0x1] === 'default' && _0x32f942[0x2] === 'config') {
            if (_0x32f942[0x3] === 'clear') {
                非臣陨首所(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (火臣欲奉诏(nx_cfgs + '/' + _0x32f942[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x32f942[0x3]);
                非臣陨首所(0x0, 'Tip', '已设置默认配置 - ' + _0x32f942[0x3], '§r');
            } else 非臣陨首所(0x0, 'Tip', '文件为空或不存在 - ' + _0x32f942[0x3], '§r');
            return true;
        }
        if (_0x32f942[0x0] === '/target') {
            if (_0x32f942[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x32f942[0x1] === 'player') at_lists = getPlayerList();
            if (_0x32f942[0x1] === 'all') at_lists = getEntityList();
            非臣陨首所(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x32f942[0x0] === '/cleaner') {
            if (_0x32f942[0x1] === 'reload') clear_config = JSON['parse'](火臣欲奉诏(cleaner_path));
            if (_0x32f942[0x1] === 'load') clear_config = JSON['parse'](火臣欲奉诏(_0x32f942[0x2]));
        }
        if (_0x32f942[0x0] === '/bind') {
            if (_0x32f942[0x1] === 'RunAway') {
                if (typeof globalThis[_0x32f942[0x2]] == 'undefined' && typeof nx_funcid[_0x32f942[0x2]] == 'undefined' || typeof globalThis[_0x32f942[0x3]] == 'undefined' && typeof nx_funcid[_0x32f942[0x3]] == 'undefined') {
                    非臣陨首所(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x5ecee2 = typeof globalThis[_0x32f942[0x3]] !== 'undefined';
                nx_raBinds[_0x32f942[0x2]] = {
                    'module': _0x32f942[0x3],
                    'isNX': _0x5ecee2
                };
                非臣陨首所(0x0, 'Tip', '绑定 ' + _0x32f942[0x2] + ' 与 ' + _0x32f942[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x32f942[0x1] === 'key' && typeof globalThis[_0x32f942[0x2]] !== 'undefined') {
                nx_isBind = _0x32f942[0x2];
                非臣陨首所(0x0, 'Tip', '按下任意按键与' + _0x32f942[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x32f942[0x1]] === 'undefined') nx_binds[_0x32f942[0x1]] = [];
            if (typeof globalThis[_0x32f942[0x2]] !== 'undefined' && typeof globalThis[_0x32f942[0x1]] !== 'undefined') {
                nx_binds[_0x32f942[0x1]]['push'](_0x32f942[0x2]);
                非臣陨首所(0x0, 'Tip', '绑定 ' + _0x32f942[0x1] + ' 与 ' + _0x32f942[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 非臣陨首所(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x32f942[0x0] === '/unbind') {
            if (_0x32f942[0x1] === 'key' && typeof globalThis[_0x32f942[0x2]] !== 'undefined') {
                for (let _0x303f40 in nx_keys) {
                    if (nx_keys[_0x303f40] === _0x32f942[0x2]) {
                        delete nx_keys[_0x303f40];
                        break;
                    }
                }
                nx_isBind = _0x32f942[0x2];
                非臣陨首所(0x0, 'Tip', '解除' + _0x32f942[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x32f942[0x1]] === 'undefined') {
                非臣陨首所(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x32f942[0x1]] !== 'undefined' && _0x32f942[0x2] === 'all') {
                delete nx_binds[_0x32f942[0x1]];
                非臣陨首所(0x0, 'Tip', '解除 ' + _0x32f942[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x32f942[0x1] === 'all') {
                nx_binds = {};
                非臣陨首所(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x32f942[0x2]] !== 'undefined' && typeof globalThis[_0x32f942[0x1]] !== 'undefined') {
                nx_binds[_0x32f942[0x1]]['splice'](nx_binds[_0x32f942[0x1]]['indexOf'](_0x32f942[0x2]), 0x1);
                if (nx_binds[_0x32f942[0x1]]['length'] === 0x0) delete nx_binds[_0x32f942[0x1]];
                非臣陨首所(0x0, 'Tip', '解除绑定 ' + _0x32f942[0x1] + ' 和 ' + _0x32f942[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 非臣陨首所(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x32f942[0x0] === '/nx') {
            if (typeof globalThis[_0x32f942[0x2]] === 'undefined') {
                非臣陨首所(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x32f942[0x1] === 'num') globalThis[_0x32f942[0x2]] = Number(_0x32f942[0x3]);
            if (_0x32f942[0x1] === 'bool') globalThis[_0x32f942[0x2]] = Boolean(_0x32f942[0x3]);
            if (_0x32f942[0x1] === 'str') globalThis[_0x32f942[0x2]] = _0x32f942[0x3];
            if (_0x32f942[0x1] === 'arr') globalThis[_0x32f942[0x2]] = 峻责臣逋慢(_0x32f942[0x3]);
            if (_0x32f942[0x1] === 'obj') globalThis[_0x32f942[0x2]] = JSON['parse'](_0x32f942[0x3]);
            非臣陨首所(0x0, 'setValue', globalThis[_0x32f942[0x2]] + ' => ' + _0x32f942[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x172454, _0x269fed, _0x332678) {
        if (ShowCommandOutput) 非臣陨首所(0x0, 'Tip', '§e类型:§r' + _0x172454 + ' §e结果:§r' + _0x332678 + ' §e数据:§r' + JSON['stringify'](_0x269fed, null, 0x2), '§r');
        if (Crasher && modes['cs_mode'] === 0x8 && !_0x332678) return true;
    }

    function onCallModuleEvent(_0x50c2a6) {
        if (ShowUI) 非臣陨首所(0x0, 'UI-Data', JSON['stringify'](_0x50c2a6, null, 0x4), '§r');
        try {
            if (typeof _0x50c2a6 !== 'undefined' && typeof _0x50c2a6['fun'] !== 'undefined' && typeof nx_raBinds[_0x50c2a6['fun']] !== 'undefined') {
                const _0x4578be = nx_raBinds[_0x50c2a6['fun']]['module'];
                if (!nx_raBinds[_0x50c2a6['fun']]['isNX']) callModule(nx_funcid[_0x4578be], JSON['stringify']({
                    'value': _0x50c2a6['value']
                }));
                else 既无伯叔终(_0x4578be, _0x50c2a6['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (typeof _0x50c2a6['name'] === 'undefined') {
                if (Rocker && typeof _0x50c2a6['angle'] !== 'undefined') rc_angles = _0x50c2a6;
                if (Rocker && typeof _0x50c2a6['direction'] !== 'undefined') rc_directions = _0x50c2a6;
                if (Rocker && typeof _0x50c2a6['operation'] !== 'undefined') rc_uds = _0x50c2a6;
                return;
            }
            if (!_0x50c2a6['name']['includes']('NoveXare') && _0x50c2a6['fun'] != 'fun_ride_flying') return;
            if (typeof _0x50c2a6['SauthLogin'] !== 'undefined') {
                Sauths = _0x50c2a6['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x50c2a6['CustomBanTip'] !== 'undefined') bantip = _0x50c2a6['CustomBanTip'];
            if (typeof _0x50c2a6['key'] !== 'undefined') {
                const _0x1c3051 = _0x50c2a6['key'];
                if (_0x1c3051 === 'ItemEditor') {
                    const _0x565f6a = getEntityCarriedItem(self_id);
                    const _0x53994b = 险衅夙遭闵(_0x565f6a, 'Damage:', 's');
                    const _0x5eca10 = 险衅夙遭闵(_0x565f6a, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x565f6a['replace']('Damage:' + _0x53994b + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x565f6a['replace']('{Damage:' + _0x5eca10, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x565f6a['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x1c3051 === 'EditBackGround') {
                    const _0x149c54 = 'loginVideoNew.mp4';
                    const _0x6351a0 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x149c54)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x6351a0 + _0x149c54);
                    file_copy(getResource() + '/' + _0x149c54, _0x6351a0 + _0x149c54);
                    showToast('已复制文件');
                }
                if (_0x1c3051 === 'BJDTp') {
                    let _0x5814bc = getPlayerList();
                    let _0x121b1d = _0x5814bc['length'] > 0x0 ? _0x5814bc['map'](_0x1f192a => ({
                        'text': getEntityName(_0x1f192a) + '\n距离: ' + 能上报臣具(self_id, _0x1f192a)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x399ea2 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x121b1d
                    };
                    const _0x12fac7 = JSON['stringify'](_0x399ea2);
                    addForm(_0x12fac7, function(_0x27505f) {
                        if (_0x5814bc['length'] > 0x0 && _0x27505f >= 0x0) {
                            let _0xca24b9 = _0x5814bc[_0x27505f];
                            let _0x4e20da = getPos(_0xca24b9);
                            setPos(_0x4e20da['x'], _0x4e20da['y'] + 1.8, _0x4e20da['z']);
                            buildBlock(self_id, _0x4e20da['x'], _0x4e20da['y'], _0x4e20da['z'], 0x1);
                        }
                    });
                }
                if (_0x1c3051 === 'exit') {
                    非臣陨首所(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        非臣陨首所(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x135a3d = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x135a3d + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x135a3d);
                    }
                    exit();
                    gc();
                }
                if (_0x1c3051 === 'DropInv') {
                    for (let _0x1dbcfa = 0x0; _0x1dbcfa < 0x24; _0x1dbcfa++) {
                        const _0x537415 = getInventory(self_id, _0x1dbcfa);
                        if (_0x537415['namespace'] === 'minecraft:air') continue;
                        if (_0x537415['count'] < 0x1) continue;
                        dl_list['push'](_0x1dbcfa);
                    }
                }
                if (_0x1c3051 === 'LookTP') {
                    let _0x13abba = {};
                    for (let _0x128037 = 0x0; _0x128037 < 0x1f4; _0x128037++) {
                        _0x13abba = 洗马猥以微(_0x128037, getPos(self_id), getEntityRot(self_id));
                        const _0x26a492 = getBlock(_0x13abba['x'], _0x13abba['y'], _0x13abba['z']);
                        if (_0x26a492['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x13abba != {}) {
                        const _0x156b1c = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 而刘夙婴疾(_0x13abba['x'], _0x13abba['y'] + 1.53, _0x13abba['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x13abba['x'], _0x13abba['y'] + 1.53, _0x13abba['z']);
                    }
                }
                if (_0x1c3051 === 'OpenChest') {
                    let _0x5ec9c0 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x3c4b7c = [];
                    let _0xd44a96 = 0x0;
                    let _0x274de6 = 奔驰则刘病(self_id);
                    const _0x5e0de4 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0xaf545e = 'shulker_box';
                    for (let _0x9b5373 = -0x7; _0x9b5373 < 0x7; _0x9b5373++) {
                        for (let _0x1d0864 = -0x7; _0x1d0864 < 0x7; _0x1d0864++) {
                            for (let _0x45c5a3 = -0x7; _0x45c5a3 < 0x7; _0x45c5a3++) {
                                const _0x2ff0c6 = _0x9b5373 + _0x274de6['x'];
                                const _0x560158 = _0x1d0864 + _0x274de6['y'];
                                const _0x17cb15 = _0x45c5a3 + _0x274de6['z'];
                                const _0x5a8e5e = getBlock(_0x2ff0c6, _0x560158, _0x17cb15);
                                if (_0x5e0de4['includes'](_0x5a8e5e['namespace']) || _0x5a8e5e['namespace']['includes'](_0xaf545e)) {
                                    const _0x15d13a = getBlock(_0x2ff0c6, _0x560158 + 0x1, _0x17cb15);
                                    _0x5ec9c0['buttons'][_0xd44a96] = {
                                        'text': '命名空间: ' + _0x5a8e5e['namespace'] + '\n坐标:   ' + (_0x15d13a['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x3c4b7c[_0xd44a96] = {
                                        'x': _0x2ff0c6,
                                        'y': _0x560158,
                                        'z': _0x17cb15
                                    };
                                    _0xd44a96++;
                                }
                            }
                        }
                    }
                    if (_0xd44a96 === 0x0) {
                        非臣陨首所(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x5ec9c0), function(_0x3f77e5) {
                        var _0x1a328f = _0x3c4b7c[_0x3f77e5];
                        buildBlock(self_id, _0x1a328f['x'], _0x1a328f['y'], _0x1a328f['z'], 0x1);
                        非臣陨首所(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x1c3051 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x1c3051 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x1c3051 === 'rpc_repeat') {
                    for (let _0x4e61a0 = 0x0; _0x4e61a0 < rpc_repeat_times; _0x4e61a0++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0x1c3051 === 'AttackSelf_one') 守臣逵察臣(self_id, Swing);
                if (_0x1c3051 === 'RemoveSelf') removeEntity(self_id);
                if (_0x1c3051 === 'QuitGame') leaveWorld();
                if (_0x1c3051 === 'sl_delete') setData('sauths', '');
                if (_0x1c3051 === 'dc_delete') dc_pos = [];
                if (_0x1c3051 === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x507fe6, _0x2efe23, _0x38ba16, _0x55d362) {
                        var _0x56e596 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0x3a86c2 = 0x0;
                        var _0x268114 = getResource();
                        var _0x172914 = JSON['parse'](File['read'](_0x268114 + '/ui/ui_definition.json'))['ui']['map'](_0x13223b => ({
                            'name': _0x13223b + '.json',
                            'path': _0x268114 + '/ui/' + _0x13223b + '.json'
                        }));
                        for (var _0x7850ed of _0x172914) {
                            if (!_0x7850ed['name']['includes']('NoveXare')) continue;
                            var _0x2dc530 = JSON['parse'](File['read'](_0x7850ed['path']));
                            if (typeof _0x2dc530['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x166cf0 of _0x2dc530['items'][0x0]['items']) {
                                if (typeof _0x166cf0['name'] === 'undefined' || typeof _0x166cf0['key'] === 'undefined') continue;
                                if (_0x38ba16 && _0x166cf0['type'] != 'Switch') continue;
                                if (_0x55d362 && _0x166cf0['type'] == 'Switch') continue;
                                if (!_0x2efe23 && (_0x166cf0['name'] === _0x507fe6 || _0x166cf0['key'] === _0x507fe6) || _0x2efe23 && (_0x166cf0['name']['includes'](_0x507fe6) || _0x166cf0['key']['includes'](_0x507fe6))) {
                                    _0x56e596['items'][0x0]['items'][_0x3a86c2] = _0x166cf0;
                                    _0x3a86c2++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x507fe6, JSON['stringify'](_0x56e596));
                        showMenu('search_' + _0x507fe6);
                    });
                }
                if (_0x1c3051 === 'sp_clear') sp_posList = [];
                if (_0x1c3051 === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 奔驰则刘病(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 郡县逼迫催([x, y, z]) + '"}]}', function(_0x419f9e) {
                        const _0xac4af7 = _0x419f9e['split'](',');
                        sp_posList['push']({
                            'x': Number(_0xac4af7[0x0]),
                            'y': Number(_0xac4af7[0x1]),
                            'z': Number(_0xac4af7[0x2])
                        });
                        非臣陨首所(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0x1c3051 === 'sp_load') {
                    const _0x2511cd = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x2511cd, function(_0x51debe) {
                        var _0x35b281 = File['read'](_0x51debe);
                        if (_0x35b281 != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0x35b281);
                            sp_file = sp_loop ? _0x35b281 : [];
                            sp_length = sp_data['length'];
                            非臣陨首所(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 非臣陨首所(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x1c3051 === 'sp_select') {
                    const _0x478397 = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x300d1d = file_list(getResource() + '/sounds/NoveXare');
                    _0x300d1d['sort']((_0xbfe8c, _0x1fedfe) => _0xbfe8c['name']['localeCompare'](_0x1fedfe['name']));
                    for (let _0x301883 = 0x0; _0x301883 < _0x300d1d['length']; _0x301883++) {
                        _0x478397['buttons'][_0x301883] = {
                            'text': _0x300d1d[_0x301883]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x3a33c9 = JSON['stringify'](_0x478397);
                    addForm(_0x3a33c9, function(_0x4186c9) {
                        if (_0x300d1d['length'] > 0x0 && _0x4186c9 >= 0x0) {
                            var _0x115137 = File['read'](_0x300d1d[_0x4186c9]['path']);
                            if (_0x115137 != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0x115137);
                                sp_file = sp_loop ? _0x115137 : [];
                                sp_length = sp_data['length'];
                                非臣陨首所(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 非臣陨首所(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x1c3051 === 'save_config') {
                    const _0x5dc4c9 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x5dc4c9, function(_0x1c9e38, _0x15c4af) {
                        File['write'](nx_cfgs + '/' + _0x1c9e38 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        非臣陨首所(0x0, 'Tip', '保存成功', '§r');
                        if (_0x15c4af) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x1c3051 === 'load_config') {
                    const _0x4b7869 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x547e9c = file_list(nx_cfgs);
                    _0x547e9c['sort']((_0x3f4229, _0x5a2a3d) => _0x3f4229['name']['localeCompare'](_0x5a2a3d['name']));
                    for (let _0x5d4155 = 0x0; _0x5d4155 < _0x547e9c['length']; _0x5d4155++) {
                        _0x4b7869['buttons'][_0x5d4155] = {
                            'text': '§e' + _0x547e9c[_0x5d4155]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x16693b = JSON['stringify'](_0x4b7869);
                    addForm(_0x16693b, function(_0x4e17e3) {
                        if (_0x547e9c['length'] > 0x0 && _0x4e17e3 >= 0x0) {
                            var _0x41e20c = JSON['parse'](火臣欲奉诏(_0x547e9c[_0x4e17e3]['path']));
                            var _0x5ad10f = 0x0;
                            nx_binds = _0x41e20c['binds'];
                            nx_keys = _0x41e20c['key_binds'];
                            nx_raBinds = _0x41e20c['nx_raBinds'];
                            for (var _0x1922b5 in _0x41e20c) {
                                _0x5ad10f++;
                                if (_0x1922b5['includes']('_mode') && _0x50c2a6['index'] && _0x50c2a6['index'] > 0x0) modes[_0x1922b5] = _0x41e20c[_0x1922b5];
                                if (_0x1922b5 != 'nx_raBinds' && _0x1922b5 != 'key_binds' && _0x1922b5 != 'binds' && _0x1922b5 != 'name') 既无伯叔终(_0x1922b5, _0x41e20c[_0x1922b5]);
                            }
                            nx_cfg = _0x41e20c;
                            非臣陨首所(0x0, 'Tip', '成功加载' + _0x41e20c['name'] + '的配置，共' + _0x5ad10f + '条配置', '§r');
                        }
                    });
                }
                if (_0x1c3051 === 'rpc_select') {
                    const _0x598337 = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x154f48 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x7bcbff = 0x0; _0x7bcbff < _0x154f48['length']; _0x7bcbff++) {
                        _0x598337['buttons'][_0x7bcbff] = {
                            'text': (_0x154f48[_0x7bcbff]['type'] === 'Send' ? '§a' : '§c') + _0x154f48[_0x7bcbff]['packet_str']
                        };
                    }
                    const _0x3cae26 = JSON['stringify'](_0x598337);
                    addForm(_0x3cae26, function(_0x584f3a) {
                        prev_rpc = {
                            'id': _0x154f48[_0x584f3a]['id'],
                            'data': _0x154f48[_0x584f3a]['packet_bin']
                        };
                        非臣陨首所(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x1c3051 === 'cw_range') {
                    let _0x4e01b3 = getPlayerList();
                    let _0xd70a44 = 0x0;
                    for (let _0x3ac917 of _0x4e01b3) {
                        const _0x59bbbc = getPos(_0x3ac917);
                        const _0xc302ad = getDistance(_0x59bbbc, getPos(self_id));
                        if (!at_whileLists['includes'](_0x3ac917) && _0xc302ad < cw_size && _0x3ac917 != self_id) {
                            at_whileLists['push'](_0x3ac917);
                            _0xd70a44++;
                        }
                    }
                    非臣陨首所(0x0, 'Tip', '已添加' + _0xd70a44 + '个玩家到白名单', '§r');
                }
                if (_0x1c3051 === 'KickSelf')
                    for (let _0x24e7e2 = 0x0; _0x24e7e2 < 0x3e8; _0x24e7e2++) 守臣逵察臣(self_id, Swing);
                if (_0x1c3051 === 'bc_delete') ac_pos = [];
                if (_0x1c3051 === 'cm_depart') departCamera();
                if (_0x1c3051 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x1c3051 === 'cm_reset') resetCamera();
                if (_0x1c3051 === 'cm_lock') lockCamera();
                if (_0x1c3051 === 'ou_recover') otherId = null;
                if (_0x1c3051 === 'delete_chest') ca_chest_pos = [];
                if (_0x1c3051 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x1c3051 === 'fm_place') fm_pos = self_pos;
                if (_0x1c3051 && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x1c3051)) 臣上道州司(_0x1c3051, globalThis[_0x1c3051]);
                if (_0x1c3051 === 'cw_add' || _0x1c3051 === 'ct_add' || _0x1c3051 === 'ct_add') 蒙国恩除臣(_0x1c3051 === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0x1c3051 === 'fw_target' || _0x1c3051 === 'fc_target') 蒙国恩除臣(_0x1c3051 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x1c3051 === 'cm_target') 蒙国恩除臣('cm_target', 0x0);
                if (_0x1c3051 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x1c3051 === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x1c3051 === 'cw_remove') at_whileLists = [];
                if (_0x1c3051 === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x14380d => ({
                        'name': getEntityName(_0x14380d),
                        'id': _0x14380d,
                        'namespace': getEntityNamespace(_0x14380d)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x480d92 => ({
                        'name': getEntityName(_0x480d92),
                        'id': _0x480d92,
                        'namespace': getEntityNamespace(_0x480d92)
                    }))
                }));
                if (_0x1c3051 === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x1c3051 === 'ImportWorldInfo') setWorldData(JSON['parse'](火臣欲奉诏(nx_paths + '/WorldInfo.json')));
                if (_0x1c3051 === 'Rusher') {
                    const _0x33fb99 = getCameraRotation();
                    let _0x51f631 = 洗马猥以微(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x33fb99['yaw'] > 0x0 ? 0xb4 - _0x33fb99['yaw'] : -0xb4 - _0x33fb99['yaw'],
                        'pitch': -_0x33fb99['pitch']
                    });
                    setMotion(_0x51f631['x'] - self_pos['x'], _0x51f631['y'] - self_pos['y'], _0x51f631['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x4bdfac in _0x50c2a6) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x4bdfac)) continue;
                if (typeof _0x50c2a6['index'] !== 'undefined' && modes[_0x4bdfac] !== _0x50c2a6['index']) {
                    modes[_0x4bdfac] = _0x50c2a6['index'] - 0x1;
                    nx_cfg[_0x4bdfac] = _0x50c2a6['index'] - 0x1;
                    非臣陨首所(0x0, _0x4bdfac['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x50c2a6[_0x4bdfac], '§r');
                    if (_0x4bdfac === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, JSON['stringify']({
                            'array_list': true,
                            'array_offset_x': fst_x / 0x5,
                            'array_offset_y': fst_y / 0x5
                        }));
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x4bdfac === 'Criticals') {
                    if (_0x50c2a6[_0x4bdfac]) playerJump();
                    else {
                        cc_status = false;
                        callModule(0x2c, JSON['stringify']({
                            'value': false,
                            'no_move_check': true,
                            'no_fall_check': true
                        }));
                    }
                }
                if (_0x4bdfac === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x50c2a6[_0x4bdfac],
                    'count': ka_packet
                }));
                if (_0x4bdfac === 'RandomArrayList' && !_0x50c2a6[_0x4bdfac]) {
                    for (let _0x9df41d = 0x0; _0x9df41d < ral_num; _0x9df41d++) addCustomArrayList('RandomArrayList' + _0x9df41d, '', '', false);
                }
                if (_0x4bdfac === 'Rocker') callModule(0x39, JSON['stringify']({
                    'value': modes['rc_mode'] === 0x1 && _0x50c2a6[_0x4bdfac],
                    'fov': 0x96
                }));
                if (_0x4bdfac === 'FakeMove') {
                    if (_0x50c2a6[_0x4bdfac]) fmo_pos = getPos(self_id);
                    else if (!_0x50c2a6[_0x4bdfac]) 就职诏书切(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x22eb56 = {
                        'enable': !_0x50c2a6[_0x4bdfac],
                        'index': 0x13,
                        'packet': 'receive'
                    };
                    callModule(0x7, JSON['stringify']({
                        'enable': false,
                        'index': 0x13,
                        'packet': 'send'
                    }));
                    就职诏书切(self_pos['x'] + 0x3e8, self_pos['y'] + 0x3e8, self_pos['z'] + 0x3e8);
                    callModule(0x7, JSON['stringify']({
                        'enable': true,
                        'index': 0x13,
                        'packet': 'send'
                    }));
                    callModule(0x7, JSON['stringify'](_0x22eb56));
                    setTimeout(() => 就职诏书切(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x4bdfac === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x50c2a6[_0x4bdfac],
                    'count': cs_packet
                }));
                if (_0x4bdfac === 'ShowNXInfo' && !_0x50c2a6[_0x4bdfac]) addCustomArrayList('NoveXare', '', '', false);
                if (_0x4bdfac === 'RandomFunc') {
                    const _0x123822 = Object['keys'](globalThis);
                    let _0x5a36f3 = [];
                    for (let _0x19d5c5 of _0x123822) {
                        if (typeof globalThis[_0x19d5c5] === 'boolean') _0x5a36f3['push'](_0x19d5c5);
                    }
                    const _0x25425a = _0x5a36f3[才臣以供养(0x0, _0x5a36f3['length'] - 0x1)];
                    既无伯叔终(_0x25425a, _0x50c2a6[_0x4bdfac]);
                }
                if (_0x4bdfac === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x50c2a6[_0x4bdfac],
                    'count': ia_packet
                }));
                if (_0x4bdfac === 'FlashBack') sb();
                if (_0x4bdfac === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x50c2a6[_0x4bdfac]) + '}');
                if (_0x4bdfac === 'PyRpcManager' && rpc_store && !_0x50c2a6[_0x4bdfac]) {
                    rpc_temp['forEach'](_0xe925e8 => sendRpc(_0xe925e8['id'], _0xe925e8['data']));
                    非臣陨首所(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x4bdfac === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x50c2a6[_0x4bdfac],
                    'defaultValue': false
                });
                if (_0x4bdfac === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x50c2a6[_0x4bdfac],
                    'defaultValue': false
                });
                if (_0x4bdfac === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x50c2a6[_0x4bdfac],
                    'defaultValue': false
                });
                if (_0x4bdfac === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x50c2a6[_0x4bdfac],
                    'defaultValue': false
                });
                if (_0x4bdfac === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x50c2a6[_0x4bdfac],
                    'defaultValue': false
                });
                if (_0x4bdfac === 'FreeCam') {
                    let _0x2f3b0b = {
                        'value': _0x50c2a6[_0x4bdfac],
                        'noclip': _0x50c2a6[_0x4bdfac],
                        'flying': _0x50c2a6[_0x4bdfac]
                    };
                    callModule(0x1, JSON['stringify'](_0x2f3b0b));
                    if (_0x50c2a6[_0x4bdfac]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x4bdfac === 'FakeMotion' && fm_auto && _0x50c2a6[_0x4bdfac]) fm_pos = getPos(self_id);
                if (_0x4bdfac === 'ShadowBoomer' && _0x50c2a6[_0x4bdfac]) sb_pos = getPos(self_id);
                if (_0x4bdfac === 'AvoidAttack' && _0x50c2a6[_0x4bdfac]) aa_pos = getPos(self_id);
                else if (_0x4bdfac === 'AvoidAttack' && !_0x50c2a6[_0x4bdfac]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x4bdfac === 'NoClip') {
                    let _0x12a33e = {
                        'value': _0x50c2a6[_0x4bdfac],
                        'noclip': _0x50c2a6[_0x4bdfac],
                        'flying': _0x50c2a6[_0x4bdfac]
                    };
                    if (nc_depart && _0x50c2a6[_0x4bdfac]) departCamera();
                    if (nc_depart && !_0x50c2a6[_0x4bdfac]) resetCamera();
                    if (nc_bypass) callModule(0x2c, JSON['stringify']({
                        'no_move_check': _0x50c2a6[_0x4bdfac],
                        'no_fall_check': _0x50c2a6[_0x4bdfac],
                        'value': _0x50c2a6[_0x4bdfac]
                    }));
                    callModule(0x1, JSON['stringify'](_0x12a33e));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x4bdfac === 'BalanceTimer') {
                    callModule(0x25, JSON['stringify']({
                        'value': _0x50c2a6[_0x4bdfac]
                    }));
                    BalanceTimer_st = !_0x50c2a6[_0x4bdfac];
                }
                if (_0x4bdfac === 'IQBoost') {
                    const _0x43f138 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x17de79 = 才臣以供养(0x0, _0x43f138['length'] - 0x1);
                    sendChatMessage('!' + _0x43f138[_0x17de79]);
                }
                if (_0x4bdfac === 'AutoTarget' && !_0x50c2a6[_0x4bdfac]) at_lists = [];
                if (_0x4bdfac === 'SoundPlayer' && !_0x50c2a6[_0x4bdfac]) sp_data = [];
                if (_0x4bdfac === 'FightBot' && !_0x50c2a6[_0x4bdfac]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x4bdfac === 'ShowSendPacket' && !_0x50c2a6[_0x4bdfac] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x1fd3dc = '';
                    for (let _0x219665 in PacketTmp['send']) _0x1fd3dc += '名称:' + _0x219665 + '，ID:' + PacketTmp['send'][_0x219665]['id'] + '，发送数量:' + PacketTmp['send'][_0x219665]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    非臣陨首所(0x0, 'sendPacket', '\n' + _0x1fd3dc, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x4bdfac === 'ShowReceivePacket' && !_0x50c2a6[_0x4bdfac] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x28f70a = '';
                    for (let _0x305a03 in PacketTmp['receive']) _0x28f70a += '名称:' + _0x305a03 + '，ID:' + PacketTmp['receive'][_0x305a03]['id'] + '，接受数量:' + PacketTmp['receive'][_0x305a03]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    非臣陨首所(0x0, 'receivePacket', '\n' + _0x28f70a, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x4bdfac === 'Scaffold' && sca_keep && _0x50c2a6[_0x4bdfac]) sca_current = 0x0;
                if (_0x4bdfac === 'SmartInv' && _0x50c2a6[_0x4bdfac]) {
                    da_slot = 0x23;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x4bdfac === 'sp_loop' && !_0x50c2a6[_0x4bdfac]) sp_file = null;
                if (_0x4bdfac === 'NoLiquid' && _0x50c2a6[_0x4bdfac]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x4bdfac === 'NoLiquid' && !_0x50c2a6[_0x4bdfac]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0x50c2a6[_0x4bdfac] === 'boolean' || typeof _0x50c2a6[_0x4bdfac] === 'number') {
                    if (typeof _0x50c2a6[_0x4bdfac] === 'boolean') {
                        既无伯叔终(_0x4bdfac, _0x50c2a6[_0x4bdfac]);
                        return;
                    }
                    nx_cfg[_0x4bdfac] = _0x50c2a6[_0x4bdfac];
                    globalThis[_0x4bdfac] = _0x50c2a6[_0x4bdfac];
                }
            }
        } catch (_0xc078f9) {
            clientMessage(_0xc078f9['stack']);
        }
    }

    function onPlayerAttackEvent(_0x4d9345, _0x144f99) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x144f99;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x144f99));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x144f99));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x144f99));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x144f99));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x144f99;
            else {
                if (te_all) getEntityList()['forEach'](_0x7e4b63 => {
                    if (_0x7e4b63 != te_target) 本图宦达不(_0x7e4b63, te_target, te_two);
                });
                else 本图宦达不(_0x144f99, te_target, te_two);
                te_target = null;
                非臣陨首所(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x144f99);
            else startRidingEntity(_0x144f99);
            非臣陨首所(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x144f99;
            else {
                setEntityNBT(_0x144f99, getEntityNBT(te_target));
                enc_target = null;
                非臣陨首所(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x144f99));
        if (!attack_list['includes'](_0x144f99)) attack_list['push'](_0x144f99);
        if (_0x144f99 === null || attack_list['every'](_0x13508a => last_attack_target['includes'](_0x13508a))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x144f99;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x144f99;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x144f99;
            非臣陨首所(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x144f99), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            if (ap_crit) {
                const _0x15708a = getPos(_0x144f99);
                const _0x5adc4a = getEntitySize(_0x144f99);
                for (let _0x1b7657 = 0x0; _0x1b7657 < 才臣以供养(ap_count, ap_count + 0x14); _0x1b7657++) 鲜兄弟门衰(ap_type, _0x15708a['x'] + 才臣以供养(-_0x5adc4a['x'] * 才臣以供养(0x5, ap_density), _0x5adc4a['x'] * 才臣以供养(0x5, ap_density)) / 0xa, _0x15708a['y'] + 才臣以供养(-_0x5adc4a['y'] * 0x9, _0x5adc4a['y'] * 0x2) / 0xa + ap_offset / 0xa, _0x15708a['z'] + 才臣以供养(-_0x5adc4a['x'] * 才臣以供养(0x5, ap_density), _0x5adc4a['x'] * 才臣以供养(0x5, ap_density)) / 0xa, 0x1);
            }
            if (ap_slashblade) {
                let _0x11ba46 = getCameraRotation();
                let _0x2282e0 = {
                    'yaw': _0x11ba46['yaw'] > 0x0 ? 0xb4 - _0x11ba46['yaw'] : -0xb4 - _0x11ba46['yaw'],
                    'pitch': -_0x11ba46['pitch']
                };
                let _0x5cd80d = 才臣以供养(0x0, 0x1);
                for (let _0x1bffad = -ap_sb_count * 0x2; _0x1bffad <= ap_sb_count * 0x2; _0x1bffad += ap_sb_space) {
                    let _0x4b41f2 = _0x5cd80d ? _0x1bffad : -_0x1bffad;
                    const _0x554f51 = 洗马猥以微(ap_sb_dist, self_pos, {
                        'yaw': _0x2282e0['yaw'] + _0x4b41f2,
                        'pitch': _0x2282e0['pitch'] + _0x1bffad
                    });
                    鲜兄弟门衰(ap_type, _0x554f51['x'], _0x554f51['y'] + ap_offset / 0xa, _0x554f51['z'], 0x1);
                }
            }
        }
        if (AttackSound) {
            立形影相吊(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x5c2fd0 = 能上报臣具(self_id, _0x144f99);
            callModule(0x4b, JSON['stringify']({
                'value': true,
                'line_width': 0.25,
                'mode': 0x2,
                'distance': _0x5c2fd0 * 1.01
            }));
            setTimeout(() => callModule(0x4b, JSON['stringify']({
                'value': false
            })), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x3a32ab = 愍臣孤弱躬(_0x144f99);
            非臣陨首所(0x0, 'Info', '\n' + _0x3a32ab + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x144f99) + '_' + _0x144f99 + '.txt', _0x3a32ab);
            return true;
        }
        if (SmartWeapon) {
            let _0x35586c = [];
            let _0x1fc4a7 = modes['sw_mode'] ? 0x24 : 0x9;
            for (let _0x2a8113 = 0x0; _0x2a8113 < _0x1fc4a7; _0x2a8113++) _0x35586c['push']({
                'slot': _0x2a8113,
                'd': 逮奉圣朝沐(self_id, _0x2a8113, sw_texture, sw_enchant)
            });
            _0x35586c['sort']((_0x5c2145, _0x480758) => _0x480758['d'] - _0x5c2145['d']);
            let _0x3b5ad3 = _0x35586c[0x0];
            let _0x474b0b = getPlayerSelectItemSlot(self_id);
            if (_0x3b5ad3['d'] > 0x1 && _0x3b5ad3['slot'] !== _0x474b0b) {
                if (_0x3b5ad3['slot'] > 0x8) {
                    if (sw_open) openInventory();
                    setTimeout(() => 多疾病九岁(_0x3b5ad3['slot'], _0x474b0b, true, false), 0xc8);
                } else selectPlayerInventorySlot(self_id, _0x3b5ad3['slot']);
            }
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x144f99)) at_lists['push'](_0x144f99);
            else at_lists['splice'](at_lists['indexOf'](_0x144f99), 0x1);
            非臣陨首所(0x0, !at_lists['includes'](_0x144f99) ? 'delTarget' : 'addTarget', getEntityName(_0x144f99), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x314910 = getPos(_0x144f99);
            const _0x3bf041 = 不许臣之进(self_pos, _0x314910, 'yaw_pos');
            const _0x3ae145 = 洗马猥以微(-ckb_len / 0x2, self_pos, {
                'yaw': _0x3bf041,
                'pitch': 0x0
            });
            setEntityMotion(_0x144f99, _0x3ae145['x'] - self_pos['x'], ckb_y, _0x3ae145['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x144f99)) at_whileLists['push'](_0x144f99);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x144f99), 0x1);
            非臣陨首所(0x0, !at_whileLists['includes'](_0x144f99) ? 'delTarget' : 'addTarget', getEntityName(_0x144f99), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 临门急于星(getEntityName(_0x144f99));
            非臣陨首所(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) {
            th_target = _0x144f99;
            th_tick = 0x0;
        }
        if (KillAura) return 才臣以供养(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x30b262) {
        if (_0x30b262 === '') return true;
        if (ReplaceMsg) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x30b262);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x30b262);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x30b262);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x30b262);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x30b262);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x30b262);
            return true;
        }
        if (ChatSuffix && !_0x30b262['includes'](cs_text)) {
            sendChatMessage(_0x30b262 + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x3aadfe, _0x169986) {
        if (ChatManager && (_0x3aadfe != getEntityName(self_id) && cm_other || _0x3aadfe == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x3572dd = 0x0; _0x3572dd < cm_repeat_times; _0x3572dd++) sendChatMessage(_0x169986);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 非臣陨首所(0x0, 'clientMsg', '来源: ' + _0x3aadfe + ', 消息:' + _0x169986, '§r');
        if (ChatManager) return cm_black['some'](_0x3b27ba => _0x169986['includes'](_0x3b27ba));
        if (ChatManager && _0x169986['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x50b749 = Math['round'](才臣以供养(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x5ee3b5 = bn_format['replaceAll']('[名字]', _0x3aadfe)['replaceAll']('[消息]', _0x169986);
            const _0x5c4485 = 'abcdef';
            if (bn_format) _0x5ee3b5 = 凶生孩六月(_0x5ee3b5);
            if (bn_rainbow) _0x5ee3b5 = '§' + _0x5c4485[才臣以供养(0x0, _0x5c4485['length'] - 0x1)] + _0x5ee3b5;
            let _0x51f120 = createText(_0x5ee3b5, 'Center', nx_screen['screenWidth'], _0x50b749);
            if (_0x51f120 !== -0x1) bn_list['push']({
                'id': _0x51f120,
                'speed': 才臣以供养(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x50b749
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x3c2dfe) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (Scaffold && sca_tower) {
            let _0x4e1fc7 = Date['now']();
            if (_0x4e1fc7 - sca_prevTower < sca_space * 0x32 && setPos(self_pos['x'], self_pos['y'] + 1.3, self_pos['z']) && buildBlock(self_id, self_pos['x'], self_pos['y'] - 2.3, self_pos['z'], 0x1) && sca_keep) sca_current = Math['floor'](self_pos['y']) + 0x1;
            sca_prevTower = _0x4e1fc7;
        }
        if (LongJump) {
            const _0x33eacf = getEntityMotion(_0x3c2dfe);
            const _0x492d87 = getCameraRotation();
            const _0x27e61e = 无主辞不赴(_0x33eacf, self_pos, 0x14);
            const _0x125c72 = 洗马猥以微(lj_len / 0x4, self_pos, {
                'yaw': _0x492d87['yaw'] > 0x0 ? 0xb4 - _0x492d87['yaw'] : -0xb4 - _0x492d87['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x125c72['x'] - self_pos['x'], lj_y, _0x125c72['z'] - self_pos['z']);
            return true;
        }
    }

    function onPyRpcReceiveEvent(_0x4d6a54, _0x1a55e7) {
        if (PyRpcManager && rpc_rec) {
            const _0x389387 = new Uint8Array(_0x1a55e7);
            const _0x247503 = Array['from'](_0x389387, _0x49472d => _0x49472d['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x362db7 = 臣密言臣以(_0x1a55e7)['toLowerCase']();
            let _0xa181d4 = false;
            let _0x436751 = rpc_tipWhite['some'](_0x11fa16 => _0x362db7['includes'](_0x11fa16));
            if (!_0xa181d4) _0xa181d4 = rpc_black['some'](_0x39cf42 => _0x362db7['includes'](_0x39cf42));
            if (!_0xa181d4) _0xa181d4 = rpc_recBlack['some'](_0x379e11 => _0x362db7['includes'](_0x379e11));
            if (rpc_white['some'](_0xc1d637 => _0x362db7['includes'](_0xc1d637))) _0xa181d4 = false;
            if (rpc_recWhite['some'](_0x4c29c2 => _0x362db7['includes'](_0x4c29c2))) _0xa181d4 = false;
            if (rpc_record && (_0x436751 && rpc_exclude || !_0x436751)) {
                const _0x477b3c = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x337fbf = JSON['parse'](火臣欲奉诏(_0x477b3c));
                _0x337fbf[_0x337fbf['length']] = {
                    'packet_hex': _0x247503,
                    'packet_format': 朝历职郎署(_0x247503),
                    'packet_str': 臣密言臣以(_0x1a55e7),
                    'packet_bin': _0x389387,
                    'time': Date['now'](),
                    'id': _0x4d6a54,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0xa181d4
                };
                File['write'](_0x477b3c, JSON['stringify'](_0x337fbf, null, 0x4));
            }
            let _0x396161 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x396161 = 臣密言臣以(_0x1a55e7);
            if (modes['rpc_mode'] === 0x1) _0x396161 = _0x247503;
            if (modes['rpc_mode'] === 0x2) _0x396161 = 朝历职郎署(_0x247503);
            if (modes['rpc_mode'] === 0x3) _0x396161 = JSON['stringify'](_0x1a55e7);
            const _0x515e59 = _0xa181d4 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x436751 && (rpc_showDisintercept && !_0xa181d4 || rpc_showIntercept && _0xa181d4)) 非臣陨首所(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4d6a54 + '\n' : '') + _0x396161 + _0x515e59, '§r');
            return _0xa181d4;
        }
    }

    function onPyRpcSendEvent(_0x162ad4, _0x1ac4d9) {
        if (PyRpcManager && rpc_send) {
            const _0x3ee538 = new Uint8Array(_0x1ac4d9);
            const _0x1ee2ef = Array['from'](_0x3ee538, _0x1df214 => _0x1df214['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x13682d = 臣密言臣以(_0x1ac4d9)['toLowerCase']();
            let _0x10b645 = false;
            let _0x41ec92 = rpc_tipWhite['some'](_0x53144b => _0x13682d['includes'](_0x53144b));
            if (!_0x10b645) _0x10b645 = rpc_black['some'](_0x5b2f8e => _0x13682d['includes'](_0x5b2f8e));
            if (!_0x10b645) _0x10b645 = rpc_sendBlack['some'](_0x496182 => _0x13682d['includes'](_0x496182));
            if (rpc_white['some'](_0x548bdc => _0x13682d['includes'](_0x548bdc))) _0x10b645 = true;
            if (rpc_sendWhite['some'](_0x423201 => _0x13682d['includes'](_0x423201))) _0x10b645 = false;
            if (!_0x41ec92) prev_rpc = {
                'id': _0x162ad4,
                'data': _0x3ee538
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x162ad4,
                'data': _0x3ee538
            });
            if (rpc_intercept) _0x10b645 = true;
            if (rpc_record && (_0x41ec92 && rpc_exclude || !_0x41ec92)) {
                const _0x1c0be0 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x1065dd = JSON['parse'](火臣欲奉诏(_0x1c0be0));
                _0x1065dd[_0x1065dd['length']] = {
                    'packet_hex': _0x1ee2ef,
                    'packet_format': 朝历职郎署(_0x1ee2ef),
                    'packet_str': 臣密言臣以(_0x1ac4d9),
                    'packet_bin': _0x3ee538,
                    'time': Date['now'](),
                    'id': _0x162ad4,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x10b645
                };
                File['write'](_0x1c0be0, JSON['stringify'](_0x1065dd, null, 0x4));
            }
            let _0x12afc2 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x12afc2 = 臣密言臣以(_0x1ac4d9);
            if (modes['rpc_mode'] === 0x1) _0x12afc2 = _0x1ee2ef;
            if (modes['rpc_mode'] === 0x2) _0x12afc2 = 朝历职郎署(_0x1ee2ef);
            if (modes['rpc_mode'] === 0x3) _0x12afc2 = JSON['stringify'](_0x1ac4d9);
            for (let _0x2b257a of rpc_config) {
                if (typeof _0x2b257a === 'object') {
                    if (_0x2b257a['match_mode'] === 0x0 && _0x12afc2['includes'](_0x2b257a['packet'])) _0x12afc2 = remarks;
                    if (_0x2b257a['match_mode'] === 0x1 && _0x12afc2['includes'] === _0x2b257a['packet']) _0x12afc2 = remarks;
                } else continue;
            }
            let _0x3ce183 = _0x10b645 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x41ec92 && (rpc_showDisintercept && !_0x10b645 || rpc_showIntercept && _0x10b645)) 非臣陨首所(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x162ad4 + '\n' : '') + _0x12afc2 + _0x3ce183, '§r');
            return _0x10b645;
        }
    }

    function onEntityBehaviorEvent(_0x3c202d, _0x534195, _0x3b10b6) {
        if (ShowEntityAnime) 非臣陨首所(0x0, 'EntityBehavior', '实体ID:' + _0x3c202d + ' 实体昵称:' + getEntityName(_0x3c202d) + ' 行为ID:' + _0x534195 + ' 行为数据:' + _0x3b10b6, '§r');
        if (_0x534195 === 0x27 && _0x3c202d === av_id) av_id = null;
        if (_0x534195 === 0x3 && attack_list['includes'](_0x3c202d)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x3c05bf = 0x0; _0x3c05bf < 0x32; _0x3c05bf++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x3c202d) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            非臣陨首所(0x0, 'Kill', 'You Kill ' + getEntityName(_0x3c202d), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x534195 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x3c202d);
        if (_0x534195 === 0x2 && attack_list['includes'](_0x3c202d)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x534195 === 0x4 && _0x3c202d != self_id)) {
            let _0x3fe18c = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x3c202d;
            if (能上报臣具(_0x3fe18c, self_id) < fb_range) 守臣逵察臣(_0x3c202d, Swing);
            fb_ishurt = false;
        }
        if (_0x534195 === 0x2 && _0x3c202d === self_id) {
            let _0xf2cca6 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 非臣陨首所(0x0, 'Hurt', '受伤类型: ' + _0x3b10b6, '§r');
            if (HurtJump) setMotion(_0xf2cca6['x'], hj_height, _0xf2cca6['z']);
            if (AntiKB) {
                let _0x45c6f6 = akb_hor / 0x64;
                let _0x5896df = akb_y / 0x64;
                setMotion(_0xf2cca6['x'] - _0x45c6f6 * _0xf2cca6['x'], _0xf2cca6['y'] - _0x5896df * _0xf2cca6['y'], _0xf2cca6['z'] - _0x45c6f6 * _0xf2cca6['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x3b10b6 == 0x2) fb_ishurt = true;
            if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
        }
        if (_0x534195 === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x9abefb, _0x39ed6e, _0x19445f, _0xd94a62, _0x21bc36) {
        const _0x56300d = getCarried(_0x9abefb);
        const _0x28df7b = getBlock(_0x39ed6e, _0x19445f, _0xd94a62);
        if (_0x28df7b['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 非臣陨首所(0x0, 'destroy', '命名空间:' + _0x28df7b['namespace'] + ', §rID:' + _0x28df7b['id'] + ', 方块选择面:' + _0x21bc36 + ', §r特殊值:' + _0x28df7b['aux'] + '\n手持:' + _0x56300d['name'] + '-[' + _0x56300d['namespace'] + '], 特殊值:' + _0x56300d['aux'] + '\n坐标:[' + _0x39ed6e + ', ' + _0x19445f + ', ' + _0xd94a62 + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x39ed6e + ' ' + _0x19445f + ' ' + _0xd94a62 + '的' + _0x28df7b['namespace']);
        if (Miner && (_0x28df7b['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current <= mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x2e57f5 => _0x28df7b['namespace']['includes'](_0x2e57f5))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x19e2b6 => !_0x28df7b['namespace']['includes'](_0x19e2b6)))) {
                mine_destroy = true;
                mine_name = _0x28df7b['namespace'];
            }
            if (mine_destroy && mine_name != _0x28df7b['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x28df7b['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x39ed6e,
                    'y': _0x19445f,
                    'z': _0xd94a62
                }) <= mine_distance && mine_destroy) {
                let _0xad1238 = [
                    [_0x39ed6e + 0x1, _0x19445f, _0xd94a62],
                    [_0x39ed6e - 0x1, _0x19445f, _0xd94a62],
                    [_0x39ed6e, _0x19445f, _0xd94a62 + 0x1],
                    [_0x39ed6e, _0x19445f, _0xd94a62 - 0x1],
                    [_0x39ed6e, _0x19445f + 0x1, _0xd94a62],
                    [_0x39ed6e, _0x19445f - 0x1, _0xd94a62]
                ];
                for (p of _0xad1238) {
                    const _0x5ea926 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x5ea926['namespace'] != 'minecraft:air' && _0x28df7b['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x2e7cf2 = getWorldData();
            if (ShowGameInfo) 非臣陨首所(0x0, 'Tip', '进入世界 ' + _0x2e7cf2['levelName'] + ' ，难度:' + _0x2e7cf2['difficulty'] + ' 游戏模式:' + _0x2e7cf2['gameType'] + ' 游戏时间:' + _0x2e7cf2['time'] + ' 随机刻速度:' + _0x2e7cf2['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x1c846d, _0x52cfa2, _0x12242a, _0x4de85a, _0x3b2350) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
        const _0x33b5ac = getCarried(_0x1c846d);
        const _0x2a2d42 = getBlock(_0x52cfa2, _0x12242a, _0x4de85a);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x33b5ac['name']);
        if (ShowClickBlock) 非臣陨首所(0x0, 'build', '命名空间:' + _0x2a2d42['namespace'] + ', §rID:' + _0x2a2d42['id'] + ', 方块选择面:' + _0x3b2350 + ', §r特殊值:' + _0x2a2d42['aux'] + '\n手持:' + _0x33b5ac['name'] + '-[' + _0x33b5ac['namespace'] + '], 特殊值:' + _0x33b5ac['aux'] + '\n坐标:[' + _0x52cfa2 + ', ' + _0x12242a + ', ' + _0x4de85a + ']', '§r');
        if (ClickTP) 就职诏书切(_0x52cfa2, _0x12242a + 0x2, _0x4de85a);
        const _0x2ebdfb = ChestAura && ca_rot && _0x2a2d42['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x1c846d) || ClickRot;
        if (_0x2ebdfb) {
            let _0x510ced = {
                'x': _0x52cfa2,
                'y': _0x12242a,
                'z': _0x4de85a
            };
            const _0x4c2c19 = 无主辞不赴(getEntityMotion(_0x1c846d), getPos(_0x1c846d), 0x14);
            let _0x3d47c7 = 不许臣之进(_0x4c2c19, _0x510ced, 'pitch_pos');
            let _0x4ecb56 = 不许臣之进(_0x4c2c19, _0x510ced, 'yaw_pos');
            不行零丁孤(_0x3d47c7, _0x4ecb56);
        }
        if (GetCommand && _0x2a2d42['namespace']['includes']('command_block')) {
            let _0x1f0ad7 = getBlockEntityNBT(_0x52cfa2, _0x12242a, _0x4de85a);
            let _0x1dd632 = 浴清化前太(_0x1f0ad7, 'Command:"', '",Cu');
            let _0x1f92d0 = 浴清化前太(_0x1f0ad7, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x851f9e = 浴清化前太(_0x1f0ad7, 'TickDelay:', ',Tr');
            非臣陨首所(0x0, 'Cmd', '坐标:[' + _0x52cfa2 + ' ' + _0x12242a + ' ' + _0x4de85a + ']\n指令:' + _0x1dd632 + '\n是否自动:' + _0x1f92d0 + '\n执行延迟:' + _0x851f9e + 'Tick', '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x52cfa2, _0x12242a, _0x4de85a];
            else {
                setBlockEntityData(_0x52cfa2, _0x12242a, _0x4de85a, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                非臣陨首所(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x40f819 = [
                [_0x52cfa2, _0x12242a - 0x1, _0x4de85a],
                [_0x52cfa2, _0x12242a + 0x1, _0x4de85a],
                [_0x52cfa2, _0x12242a, _0x4de85a - 0x1],
                [_0x52cfa2, _0x12242a, _0x4de85a + 0x1],
                [_0x52cfa2 - 0x1, _0x12242a, _0x4de85a],
                [_0x52cfa2 + 0x1, _0x12242a, _0x4de85a]
            ];
            setBlock(_0x40f819[_0x3b2350][0x0], _0x40f819[_0x3b2350][0x1], _0x40f819[_0x3b2350][0x2], _0x33b5ac['namespace'], _0x33b5ac['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x52cfa2, _0x12242a, _0x4de85a, _0x33b5ac['namespace'], _0x33b5ac['aux']);
        if (ClickDestroy && !AutoDestroy) 苦特为尤甚({
            'x': _0x52cfa2,
            'y': _0x12242a,
            'z': _0x4de85a
        });
        if (AutoBed && _0x2a2d42['namespace'] === 'minecraft:bed' && !ab_running) {
            非臣陨首所(0x0, 'Tip', '请手持方块', '§r');
            let _0x59684a = [
                [_0x52cfa2 + 0x1, _0x12242a, _0x4de85a],
                [_0x52cfa2 - 0x1, _0x12242a, _0x4de85a],
                [_0x52cfa2, _0x12242a, _0x4de85a + 0x1],
                [_0x52cfa2, _0x12242a, _0x4de85a - 0x1],
                [_0x52cfa2, _0x12242a + 0x1, _0x4de85a]
            ];
            ab_running = true;
            for (let _0x30e328 of _0x59684a) {
                const _0xf76b5c = getBlock(_0x30e328[0x0], _0x30e328[0x1], _0x30e328[0x2]);
                if (_0xf76b5c['namespace'] === 'minecraft:air') 无应门五尺(_0x30e328[0x0], _0x30e328[0x1], _0x30e328[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x33b5ac['namespace']['includes']('_sword') || _0x33b5ac['namespace']['includes']('_pickaxe') || _0x33b5ac['namespace']['includes']('_axe') || _0x33b5ac['namespace']['includes']('shears'))) {
            if (bk_origin) {
                callModule(0xf, JSON['stringify']({
                    'value': true
                }));
                setTimeout(() => callModule(0xf, JSON['stringify']({
                    'value': false
                })), bk_last * 0x32);
                return true;
            }
            const _0x52a5a3 = Math['round'](bk_range);
            _0x1e95ac: for (let _0x47964d = -_0x52a5a3; _0x47964d <= _0x52a5a3; _0x47964d++) {
                for (let _0x44cfc1 = -_0x52a5a3; _0x44cfc1 < _0x52a5a3; _0x44cfc1++) {
                    for (let _0x37dcd7 = -_0x52a5a3; _0x37dcd7 <= _0x52a5a3; _0x37dcd7++) {
                        let _0x5b9eb0 = _0x52cfa2 + _0x47964d;
                        let _0x46181a = _0x12242a + _0x44cfc1;
                        let _0x4da929 = _0x4de85a + _0x37dcd7;
                        let _0x1e1c1e = getBlock(_0x5b9eb0, _0x46181a, _0x4da929);
                        if (bk_bed && _0x1e1c1e['namespace'] === 'minecraft:bed' || bk_chest && _0x1e1c1e['namespace'] === 'minecraft:chest') {
                            let _0x44dcd3 = getBlock(_0x5b9eb0, _0x46181a + 0x1, _0x4da929);
                            if (_0x44dcd3['namespace'] != 'minecraft:air' && bk_up) _0x46181a += 0x1;
                            if (bk_tool && _0x44dcd3['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x1c846d, 孝廉后刺史(_0x1c846d, '_pickaxe'));
                            if (bk_tool && _0x44dcd3['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x1c846d, 孝廉后刺史(_0x1c846d, '_axe'));
                            if (bk_tool && _0x44dcd3['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x1c846d, 孝廉后刺史(_0x1c846d, 'shears'));
                            bk_pos = {
                                'ex': _0x5b9eb0,
                                'ey': _0x46181a,
                                'ez': _0x4da929
                            };
                            bk_timer = 0x0;
                            break _0x1e95ac;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x52cfa2,
                'y': _0x12242a,
                'z': _0x4de85a
            });
            非臣陨首所(0x0, 'Tip', '已添加[' + _0x52cfa2 + ', ' + _0x12242a + ', ' + _0x4de85a + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x83bd08 = getCameraRotation();
            for (let _0x38b95e = 0x0; _0x38b95e < fb_len + 0x1; _0x38b95e++) fb_list['push'](洗马猥以微(_0x38b95e, 奔驰则刘病(_0x1c846d), {
                'pitch': 0x0,
                'yaw': _0x83bd08['yaw'] > 0x0 ? 0xb4 - _0x83bd08['yaw'] : -0xb4 - _0x83bd08['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0x2a2d42['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0x116499) {
        if (ShowPressKey) 非臣陨首所(0x0, 'KeyBoard', '按下键值 ' + _0x116499, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x116499] !== 'undefined') 既无伯叔终(nx_keys[_0x116499], !globalThis[nx_keys[_0x116499]]);
        if (nx_isBind != null && _0x116499 != 0x42) {
            nx_keys[_0x116499] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            非臣陨首所(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x116499, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x20fa51) {
        if (ShowUpliftKey) 非臣陨首所(0x0, 'Tip', '释放键值 ' + _0x20fa51, '§r');
    }

    function onSendServerPacketEvent(_0x124008, _0x8bd0e9) {
        if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x124008 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0x124008 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0x124008 === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0x124008 === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x133fb9 = PacketTranslate[PacketTranslate['map'](_0xe72708 => _0xe72708['id'])['indexOf'](_0x124008)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x8bd0e9] === 'undefined') PacketTmp['send'][_0x8bd0e9] = {
                    'id': _0x124008,
                    'Translate': _0x133fb9,
                    'count': 0x1
                };
                PacketTmp['send'][_0x8bd0e9]['count']++;
            }
            const _0x5bec07 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x42fb54 = [];
            if (sp_id) _0x42fb54['push'](_0x124008);
            if (sp_name) _0x42fb54['push'](_0x8bd0e9);
            if (sp_trans) _0x42fb54['push'](_0x133fb9);
            let _0x4d03b6 = sp_intercept && (intercept['includes'](_0x124008) || intercept['includes'](_0x8bd0e9));
            if (!sp_ignore || !(ignore['includes'](_0x124008) || ignore['includes'](_0x8bd0e9))) 非臣陨首所(0x0, 'SendPacket', '发送数据包: ' + _0x42fb54['join'](' - ') + (_0x4d03b6 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x4d03b6;
        }
    }

    function onReceiveServerPacketEvent(_0x4174f5, _0x179755) {
        if (ShadowBoomer && _0x4174f5 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x4174f5 == 0x55) {
            KillAura = false;
            非臣陨首所(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x4174f5 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x4174f5 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x4174f5 === 0x9) return true;
        if (ModifyTime && _0x4174f5 === 0xa) return true;
        if (ca_check && _0x4174f5 === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x4174f5 === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0x4174f5 === 0x12) return true;
        if (NoCamShake && _0x4174f5 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x38eefe = PacketTranslate[PacketTranslate['map'](_0x197d33 => _0x197d33['id'])['indexOf'](_0x4174f5)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x179755] === 'undefined') PacketTmp['receive'][_0x179755] = {
                    'id': _0x4174f5,
                    'Translate': _0x38eefe,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x179755]['count']++;
            }
            const _0x1592c4 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x55599e = [];
            if (srp_id) _0x55599e['push'](_0x4174f5);
            if (srp_name) _0x55599e['push'](_0x179755);
            if (srp_trans) _0x55599e['push'](_0x38eefe);
            let _0xf84b9 = srp_intercept && (intercept['includes'](_0x4174f5) || intercept['includes'](_0x179755));
            if (!srp_ignore || !(ignore['includes'](_0x4174f5) || ignore['includes'](_0x179755))) 非臣陨首所(0x0, 'ReceivePacket', '接收数据包: ' + _0x55599e['join'](' - ') + (_0xf84b9 ? '\n§e已拦截数据包' : ''), '§r');
            return _0xf84b9;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x4174f5 === 0x9;
    }

    function onTouchMotionDownEvent(_0x356bf4, _0x452695, _0x4a91d6) {
        if (SafeAttack) {
            const _0x24704e = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x308b36 = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x133047 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x102e51 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 退实为狼狈(self_id, at_lists[0x0], sa_fov, 0x0) && 能上报臣具(self_id, at_lists[0x0]) < sa_range && _0x452695 > _0x24704e && _0x452695 < _0x308b36 && _0x4a91d6 > _0x133047 && _0x4a91d6 < _0x102e51) 守臣逵察臣(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x1f1b57, _0x4aeadb) {
        const _0x37a988 = 母志祖母刘(_0x4aeadb);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x37a988['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x37a988['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x1f1b57 > cs_sort) && cs_current < cs_maxCount) {
            let _0x4725de = cs_black['length'] === 0x0 || cs_black['some'](_0xfbf4c4 => _0x37a988['namespace']['includes'](_0xfbf4c4));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x41d7e6 => _0x37a988['namespace']['includes'](_0x41d7e6))) _0x4725de = false;
            if (_0x1f1b57 < cs_min && _0x1f1b57 > cs_max) _0x4725de = false;
            if (_0x37a988['attackDamage'] !== 0x0 && _0x37a988['attackDamage'] < cs_min_damage) _0x4725de = false;
            if (_0x37a988['damage'] !== 0x0 && _0x37a988['damage'] < cs_min_lasting) _0x4725de = false;
            if (!cs_weapon && _0x37a988['attackDamage'] > 0x0 && _0x37a988['damage'] > 0x0) _0x4725de = false;
            if (!cs_armor && _0x37a988['attackDamage'] === 0x0 && _0x37a988['damage'] > 0x0) _0x4725de = false;
            if (!cs_other && _0x37a988['attackDamage'] === 0x0 && _0x37a988['damage'] === 0x0) _0x4725de = false;
            if (cs_sort) cs_sort = _0x1f1b57;
            if (_0x4725de) cs_timer = 0x0;
            if (_0x4725de) cs_current++;
            return _0x4725de;
        }
        if (ShowMoveContainer) 非臣陨首所(0x0, 'Container', '§e容器所在格子: §r' + _0x1f1b57 + '\n§e物品NBT数据: §r' + _0x4aeadb, '§r');
    }

    function onPlayerAuthInputEvent(_0x213c9c) {
        if (PlayerAuthInputPacket) 非臣陨首所(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x213c9c.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x213c9c.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x213c9c['pos']['x']['toFixed'](0x2) + ', ' + _0x213c9c['pos']['y']['toFixed'](0x2) + ',' + _0x213c9c['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x213c9c['delta']['x']['toFixed'](0x2) + ', ' + _0x213c9c['delta']['y']['toFixed'](0x2) + ', ' + _0x213c9c['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x213c9c['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x213c9c['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x213c9c['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x213c9c['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x213c9c['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x31dee4) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0x31dee4);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x4cb8a9 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x1c091e = _0x31dee4['replace'](浴清化前太(_0x31dee4, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x4cb8a9)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x1c091e['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x46a5f9) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0x46a5f9);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x2edc54) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x2edc54);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x4cdaa9 = JSON['parse'](Sauths);
            if (typeof _0x4cdaa9['sauth_json'] !== 'undefined') _0x4cdaa9 = _0x4cdaa9['sauth_json'];
            return _0x4cdaa9;
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
            if (key != 'nx_raBinds' && key != 'key_binds' && key != 'binds' && key != 'name') 既无伯叔终(key, list[key]);
        }
        nx_cfg = list;
        非臣陨首所(0x0, 'Tip', '成功加载' + list['name'] + '的配置，共' + num + '条配置', '§r');
    }
    非臣陨首所(0x0, 'Tip', '§aNoveXare Load Successful!', '§a');
    非臣陨首所(0x0, 'Tip', 'You Are Use ' + nx_ui['name'] + ' To Play NX', '§b');
} catch (e) {
    clientMessage(e.toString());
}