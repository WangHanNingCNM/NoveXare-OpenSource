/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 06 - 01  18：00：49
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e06§b01§f180049§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x32184f, _0x147100, _0x504f72) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x32184f,
            'y': _0x147100,
            'z': _0x504f72
        },
        'type': 0x11
    });
    const getPos = _0x25aca1 => {
        let _0x41b6c7 = getEntityPos(_0x25aca1);
        if (_0x41b6c7) _0x41b6c7['y'] += getPos_offset;
        return _0x41b6c7 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x58b1b9, _0x2f54ee, _0x5807e5) => sendPlayerAuthInput({
        'pos': {
            'x': _0x58b1b9,
            'y': _0x2f54ee,
            'z': _0x5807e5
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
    const movePlayer = (_0xe4cb68, _0x39e2cf, _0x24b2d9, _0x2d5a0e = true) => sendMovePlayer({
        'id': self_id,
        'pos': {
            'x': _0xe4cb68,
            'y': _0x39e2cf,
            'z': _0x24b2d9
        },
        'yHeadRot': 0x0,
        'mode': 0x0,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        },
        'ground': _0x2d5a0e
    });
    const 左迁九江郡 = _0x8ed551 => {
        const _0x40bb90 = new Uint8Array(_0x8ed551);
        let _0x574319 = '';
        for (let _0x4250fe = 0x0; _0x4250fe < _0x40bb90['length'];) {
            let _0x1e4ae0 = _0x40bb90[_0x4250fe++];
            if (_0x1e4ae0 <= 0x7f) _0x574319 += String['fromCharCode'](_0x1e4ae0);
            else if (_0x1e4ae0 >> 0x5 === 0x6) {
                let _0x4598dd = _0x40bb90[_0x4250fe++];
                _0x574319 += String['fromCharCode']((_0x1e4ae0 & 0x1f) << 0x6 | _0x4598dd & 0x3f);
            } else if (_0x1e4ae0 >> 0x4 === 0xe) {
                let _0x2d82b0 = _0x40bb90[_0x4250fe++];
                let _0x331d35 = _0x40bb90[_0x4250fe++];
                _0x574319 += String['fromCharCode']((_0x1e4ae0 & 0xf) << 0xc | (_0x2d82b0 & 0x3f) << 0x6 | _0x331d35 & 0x3f);
            } else if (_0x1e4ae0 >> 0x3 === 0x1e) {
                let _0x29fd7b = _0x40bb90[_0x4250fe++];
                let _0x422374 = _0x40bb90[_0x4250fe++];
                let _0x4b637f = _0x40bb90[_0x4250fe++];
                let _0x42044e = (_0x1e4ae0 & 0x7) << 0x12 | (_0x29fd7b & 0x3f) << 0xc | (_0x422374 & 0x3f) << 0x6 | _0x4b637f & 0x3f;
                _0x574319 += String['fromCodePoint'](_0x42044e);
            }
        }
        return _0x574319;
    };
    const 司马明年秋 = (_0x5e1b10, _0x128f7d, _0x560d42, _0x54c2fb) => {
        let _0x3e80c3 = _0x5e1b10['indexOf'](_0x128f7d) + _0x128f7d['length'];
        let _0x26c160 = _0x5e1b10['indexOf'](_0x560d42, _0x3e80c3);
        if (typeof _0x54c2fb !== 'undefined' && _0x5e1b10['indexOf'](_0x54c2fb, _0x3e80c3) < _0x26c160 && _0x5e1b10['indexOf'](_0x54c2fb, _0x3e80c3) != -0x1) _0x26c160 = _0x5e1b10['indexOf'](_0x54c2fb, _0x3e80c3);
        if (_0x3e80c3 === -0x1 || _0x26c160 === -0x1) return null;
        return _0x5e1b10['substring'](_0x3e80c3, _0x26c160);
    };
    const 送客湓浦口 = _0x138c92 => {
        let _0x4e0793 = _0x138c92['split']('');
        let _0x5c56af = '';
        let _0x29eb0c = '4c6e2a3b195d' ['split']('');
        for (let _0x4c335e in _0x4e0793) _0x5c56af += '§' + _0x29eb0c[_0x4c335e % _0x29eb0c['length']] + _0x4e0793[_0x4c335e];
        return _0x5c56af;
    };
    const 闻舟中夜弹 = _0x3233eb => {
        if (_0x3233eb['startsWith']('0x')) _0x3233eb = _0x3233eb['slice'](0x2);
        const _0x344db4 = [];
        for (let _0x460fcf = 0x0; _0x460fcf < _0x3233eb['length']; _0x460fcf += 0x2) {
            const _0x4be66b = parseInt(_0x3233eb['slice'](_0x460fcf, _0x460fcf + 0x2), 0x10);
            _0x344db4['push'](_0x4be66b);
        }
        return new Uint8Array(_0x344db4);
    };
    const 琵琶者听其 = (_0x143353, _0x17cc13, _0x4ab5cc = 0x0) => {
        if (_0x4ab5cc == 0x1) sendRpc(_0x143353, 闻舟中夜弹(_0x17cc13));
        if (_0x4ab5cc == 0x2) sendRpc(_0x143353, _0x17cc13);
        if (_0x4ab5cc == 0x3) {
            const _0x112a05 = new Uint8Array(str['length']);
            for (let _0x900785 = 0x0; _0x900785 < str['length']; _0x900785++) _0x112a05[_0x900785] = str['charCodeAt'](_0x900785);
            sendRpc(_0x143353, _0x112a05);
        }
    };
    const 音铮铮然有 = _0x3ca12d => {
        if (nx_nbts[_0x3ca12d] !== undefined) return nx_nbts[_0x3ca12d];
        const _0x363b83 = 司马明年秋(_0x3ca12d, ',Name:"', '",WasPickedUp');
        if (_0x363b83 === '' || typeof _0x363b83 !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x719ecb = Number(司马明年秋(_0x3ca12d, ',aux:', ','));
        const _0xb27b8f = Number(司马明年秋(_0x3ca12d, 'Count:', 'b,D'));
        const _0x3e672c = _0x3ca12d['includes'](',name:"') ? 司马明年秋(_0x3ca12d, ',name:"', '",') : _0x363b83['replace']('minecraft:', '');
        const _0x543108 = _0x3ca12d['includes'](',netId:') ? Number(司马明年秋(_0x3ca12d, ',netId:', '}')) : 0x0;
        const _0x466fd3 = _0x3ca12d['includes']('maxDamage') ? Number(司马明年秋(_0x3ca12d, ',maxDamage:', ',')) : 0x0;
        const _0x1d123a = _0x3ca12d['includes']('attackDamage') ? Number(司马明年秋(_0x3ca12d, 'attackDamage:', ',')) : 0x1;
        const _0x21958f = _0x3ca12d['includes']('customColor') ? 司马明年秋(_0x3ca12d, 'customColor:', '}', ',') : '';
        const _0x5d700a = _0x3ca12d['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x3ca12d, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x5654c3 = _0x3ca12d['startsWith']('{Block:');
        const _0x29428f = {
            'name': _0x3e672c,
            'namespace': _0x363b83,
            'aux': _0x719ecb,
            'damage': _0x466fd3,
            'attackDamage': _0x1d123a,
            'count': _0xb27b8f,
            'color': _0x21958f,
            'isBlock': _0x5654c3,
            'id': _0x543108,
            'enchants': JSON['parse'](_0x5d700a)
        };
        nx_nbts[_0x3ca12d] = _0x29428f;
        return _0x29428f;
    };
    const 京都声问其 = _0x3894dd => {
        const _0x2ab172 = getEntitySize(_0x3894dd);
        const _0x530e88 = getEntityMotion(_0x3894dd);
        const _0x53b572 = getPos(_0x3894dd);
        const _0x28f9b3 = getEntityName(_0x3894dd);
        const _0x5ab4db = getEntityNamespace(_0x3894dd);
        const _0x32a3d6 = 声暗问弹者(self_id, _0x3894dd);
        const _0x39d614 = getCarried(_0x3894dd);
        const _0x12a1fb = 瑟瑟主人下(_0x3894dd);
        const _0x3934da = getEntityAttribute(_0x3894dd, 'minecraft:health');
        const _0x46772f = getEntityAttribute(_0x3894dd, 'minecraft:movement');
        const _0x251673 = getEntityTypeId(_0x3894dd);
        const _0x3267b1 = getEntityTarget(_0x3894dd);
        const _0x583b08 = getPlayerInventorySize(_0x3894dd);
        const _0x22fe1e = getPlayerHotBarSize(_0x3894dd);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x3894dd);
        const _0x220c26 = _0x32f795 => _0x32f795['toFixed'](0x2);
        const _0x330aef = ['唯一ID:' + _0x3894dd + ' 昵称:' + _0x28f9b3 + '§r 实体命名空间:' + _0x5ab4db + ' 水平碰撞箱:' + _0x220c26(_0x2ab172['x']) + ' 垂直碰撞箱:' + _0x220c26(_0x2ab172['y']) + ' Mot速度:' + _0x12a1fb, 'ability速度:[max:' + _0x46772f['max'] + ', min:' + _0x46772f['min'] + ', current:' + _0x46772f['current'] + '] 血量:[max:' + _0x3934da['max'] + ', min:' + _0x3934da['min'] + ', current:' + _0x3934da['current'] + ']', '手持:[id:' + _0x39d614['id'] + ', namespace:' + _0x39d614['namespace'] + ', name:' + _0x39d614['name'] + '§r, aux:' + _0x39d614['aux'] + '] 距离:' + _0x32a3d6 + ' 实体类型:' + _0x251673, '仰俯角:' + _0x220c26(pitch) + '° 偏航角:' + _0x220c26(yaw) + '° 仇恨目标:' + getEntityName(_0x3267b1) + '^' + _0x3267b1, '移动值:[' + _0x220c26(_0x530e88['x']) + ', ' + _0x220c26(_0x530e88['y']) + ', ' + _0x220c26(_0x530e88['z']) + '] 坐标值:[' + _0x220c26(_0x53b572['x']) + ', ' + _0x220c26(_0x53b572['y']) + ', ' + _0x220c26(_0x53b572['z']) + ']', '背包容量:' + _0x583b08 + ' 物品栏容量:' + _0x22fe1e];
        return _0x330aef['join']('\n');
    };
    const getCarried = _0x95c130 => 音铮铮然有(getEntityCarriedItem(_0x95c130));
    const getOffhand = _0x4228be => 音铮铮然有(getEntityOffhandItem(_0x4228be));
    const getInventory = (_0x52fa8f, _0x587d6d) => 音铮铮然有(getPlayerInventoryItem(_0x52fa8f, _0x587d6d));
    const 人本长安倡 = (_0x33c819, _0x3afab1, _0x2aaa4c, _0x4d5b5f = false, _0x370038 = false) => {
        let _0x2b0689 = {
            'x': _0x33c819,
            'y': _0x3afab1,
            'z': _0x2aaa4c
        };
        const _0x57d872 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x48efd8 = _0x438961 => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x438961['map'](_0x862d72 => ({
                'type': _0x862d72,
                'pos': _0x2b0689,
                'value': 0x1
            }))
        });
        const _0xd06ee6 = _0x56d36e => sendPlayerAction({
            'id': self_id,
            'pos': _0x2b0689,
            'type': _0x56d36e
        });
        if (_0x4d5b5f) _0x48efd8(_0x57d872);
        if (_0x370038) _0x57d872['forEach'](_0x5418cf => _0xd06ee6(_0x5418cf));
    };
    const 女尝学琵琶 = (_0x4797e6, _0xf1eae2, _0x32c241 = true, _0x59d0c7 = false) => {
        if (_0x4797e6 === _0xf1eae2 || getScreenName() !== 'inventory_screen') return false;
        let _0x3657f7 = getInventory(self_id, _0x4797e6);
        let _0x4a3769 = getInventory(self_id, _0xf1eae2);
        if (_0x32c241 && _0xf1eae2 < 0x9 && _0x4a3769['namespace'] != 'minecraft:air') {
            for (let _0x2fa5c7 = 0x23; _0x2fa5c7 > 0x8; _0x2fa5c7--) {
                const _0x5d3356 = getInventory(self_id, _0x2fa5c7);
                if (_0x5d3356['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0xf1eae2, _0x2fa5c7);
                    break;
                }
            }
        }
        if (_0x59d0c7 && _0x3657f7['namespace'] === 'minecraft:air' && _0x4a3769['namespace'] !== 'minecraft:air') moveInventoryItem(_0xf1eae2, _0x4797e6);
        if (_0x3657f7['namespace'] !== 'minecraft:air' && _0x4a3769['namespace'] === 'minecraft:air') moveInventoryItem(_0x4797e6, _0xf1eae2);
    };
    const 于穆曹二善 = (_0x231cd8, _0x347a34) => {
        let _0x4258c7 = _0x347a34 - 0xb4;
        if (_0x231cd8 > 0x5a) _0x231cd8 -= 0x5a;
        if (_0x231cd8 < -0x5a) _0x231cd8 += 0x5a;
        if (_0x4258c7 > 0xb4) _0x4258c7 = _0x4258c7 - 0x168;
        if (_0x4258c7 < -0xb4) _0x4258c7 = 0x168 + _0x4258c7;
        if (getPlayerViewPerspective() === 0x0 || _0x4258c7 > 0xb4 || _0x4258c7 < -0xb4 || _0x231cd8 > 0x5a || _0x231cd8 < -0x5a) return false;
        setEntityBodyRot(self_id, _0x4258c7);
        setEntityRot(self_id, _0x231cd8, _0x4258c7);
    };
    const 才年长色衰 = _0x37d745 => {
        const _0x104aa1 = getEntityAttribute(_0x37d745, 'minecraft:health');
        const _0x834d5d = getPos(_0x37d745);
        if (typeof _0x834d5d != 'object' || !_0x834d5d || !_0x834d5d['x'] || !_0x834d5d['y'] || !_0x834d5d['z']) return false;
        if (!findEntity(_0x37d745) && (_0x104aa1['max'] === undefined || _0x104aa1['min'] === undefined || _0x104aa1['current'] === undefined)) return false;
        if (_0x104aa1['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x21fc2e, _0x1f9ed1) => {
        if (typeof globalThis[_0x21fc2e] === 'undefined' || globalThis[_0x21fc2e] === _0x1f9ed1) return;
        globalThis[_0x21fc2e] = _0x1f9ed1;
        nx_cfg[_0x21fc2e] = _0x1f9ed1;
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x1f9ed1 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x21fc2e['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0x1f9ed1) 归客不发寻(0x0, _0x21fc2e, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x21fc2e, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0x21fc2e, _0x21fc2e + (_0x1f9ed1 ? ' - Enable' : ' - Disable'), _0x21fc2e + (_0x1f9ed1 ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x21fc2e, _0x21fc2e + (_0x1f9ed1 ? ' - Enable' : ' - Disable'), _0x21fc2e + (_0x1f9ed1 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0x21fc2e] !== 'undefined') addCustomArrayList(_0x21fc2e, nx_arraylist[_0x21fc2e]['CN'], nx_arraylist[_0x21fc2e]['EN'], _0x1f9ed1);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x21fc2e['includes']('_')) addCustomArrayList(_0x21fc2e, _0x21fc2e, _0x21fc2e, _0x1f9ed1);
        if (typeof nx_binds[_0x21fc2e] !== 'undefined') nx_binds[_0x21fc2e]['forEach'](_0x455cba => 委身为贾人(_0x455cba, _0x1f9ed1));
        if (typeof nx_raBinds[_0x21fc2e] !== 'undefined' && !nx_raBinds[_0x21fc2e]['isNX']) callModule(nx_funcid[nx_raBinds[_0x21fc2e]['module']], JSON['stringify']({
            'value': _0x1f9ed1
        }));
    };
    const 妇遂命酒使 = (_0x2e2332, _0x227b46, _0x5cded2, _0x4ad924, _0x12dfc0, _0x417e57 = false, _0x4101cc = {}) => {
        for (let _0x25b66e = 0x0; _0x25b66e < _0x12dfc0; _0x25b66e++) addParticle(Number(_0x2e2332), _0x227b46, _0x5cded2, _0x4ad924, _0x417e57 ? _0x4101cc['x'] : _0x227b46, _0x417e57 ? _0x4101cc['y'] : _0x5cded2, _0x417e57 ? _0x4101cc['z'] : _0x4ad924, 0x1, _0x417e57);
    };
    const 快弹数曲曲 = () => {
        const _0x53eb98 = getEntityCarriedItem(self_id);
        const _0x13d542 = getPos(self_id);
        if (!_0x53eb98['includes']('count:0')) buildBlock(self_id, _0x13d542['x'], _0x13d542['y'], _0x13d542['z'], 0x6);
    };
    const 罢悯然自叙 = _0x306203 => {
        const _0x872413 = 迁谪意因为(self_id, _0x306203);
        const _0x3c1841 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x306203 > 0x8) 女尝学琵琶(_0x306203, 0x8, true, false);
        if (_0x3c1841['includes'](_0x872413) && selectPlayerInventorySlot(self_id, _0x306203) && getPlayerSelectItemSlot(self_id) === _0x306203) 快弹数曲曲();
    };
    const 少小时欢乐 = (_0x2b9ea4, _0x444d0b, _0x233ae2, _0x12c41c) => {
        let _0x1b1985 = _0x444d0b > 0x0;
        _0x444d0b = Math['abs'](_0x444d0b);
        let _0x5caaca = _0x233ae2 * Math['cos'](_0x444d0b * Math['PI'] / 0xb4);
        let _0x19c515 = _0x233ae2 * Math['sin'](_0x444d0b * Math['PI'] / 0xb4);
        let _0x12ca8f = _0x19c515 / _0x12c41c;
        let _0x466974 = _0x12c41c * (_0x12ca8f * _0x12ca8f) * 0.5;
        let _0x5f0034 = _0x5caaca * _0x12ca8f;
        let _0x44466d = -_0x466974 / (_0x5f0034 * _0x5f0034);
        return {
            'data': _0x44466d * Math['pow'](_0x2b9ea4 - (_0x1b1985 ? -_0x5f0034 : _0x5f0034), 0x2) + _0x466974,
            'bool': _0x1b1985
        };
    };
    const getLocal = _0xe1f57 => typeof _0xe1f57 === 'undefined' || _0xe1f57 === null ? getLocalPlayerUniqueID() : _0xe1f57;
    const 事今漂沦憔 = (_0x528d50, _0x49976a, _0x524a82, _0xd28bff = false) => {
        const _0x541b09 = getBlock(_0x528d50, _0x49976a, _0x524a82);
        if (_0x541b09['id'] !== 0x0) return;
        const _0x5be4c5 = [
            [_0x528d50, _0x49976a + 0x1, _0x524a82],
            [_0x528d50, _0x49976a - 0x1, _0x524a82],
            [_0x528d50, _0x49976a, _0x524a82 + 0x1],
            [_0x528d50, _0x49976a, _0x524a82 - 0x1],
            [_0x528d50 + 0x1, _0x49976a, _0x524a82],
            [_0x528d50 - 0x1, _0x49976a, _0x524a82]
        ];
        _0x5be4c5['some']((_0x4026fb, _0x1bcf14) => {
            const _0x55bf07 = getBlock(_0x4026fb[0x0], _0x4026fb[0x1], _0x4026fb[0x2]);
            if (_0x55bf07['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x4026fb[0x0], _0x4026fb[0x1], _0x4026fb[0x2], _0x1bcf14);
        });
    };
    const 湖间予出官 = (_0x5526e9, _0x18fe7d) => {
        const _0x2e7718 = getPos(self_id);
        sendSound(_0x5526e9, _0x2e7718['x'], _0x2e7718['y'], _0x2e7718['z'], _0x18fe7d);
    };
    const 二年恬然自 = (_0x8454bb, _0x299ae8, _0x3a82d5) => {
        const _0x14dff6 = getPos(self_id);
        motion_list['push']([_0x8454bb - _0x14dff6['x'], _0x299ae8 - _0x14dff6['y'], _0x3a82d5 - _0x14dff6['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x2937ee, _0x34e1e4) => {
        let _0x49e41d = _0x2937ee === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x2937ee);
        if (typeof _0x34e1e4 !== 'undefined') _0x49e41d['namespace'] = _0x34e1e4;
        return Array['from']({
            'length': 0x24
        }, (_0x2a6f7c, _0x43c493) => getInventory(self_id, _0x43c493))['filter'](_0x501c67 => _0x501c67['namespace'] === _0x49e41d['namespace'] && (typeof _0x34e1e4 !== 'undefined' || _0x501c67['aux'] === _0x49e41d['aux']))['reduce']((_0x2b804d, _0x1b3c1a) => _0x2b804d + _0x1b3c1a['count'], 0x0);
    };
    const 是夕始觉有 = (_0x377a26, _0x11f549, _0x3ee316 = 'hotbar', _0x5ae532 = 0x0) => {
        const _0x4d2913 = _0x3ee316 == 'hotbar' ? 0x9 : 0x24;
        let _0x376054 = Array['from']({
            'length': _0x4d2913
        }, (_0x2e70be, _0x396e32) => getInventory(_0x377a26, _0x396e32));
        let _0x2e3caa = _0x376054['some'](_0x315331 => _0x315331['namespace']['includes'](_0x11f549));
        let _0x558acf = _0x376054['reduce']((_0x1977fe, _0x35eaff) => _0x1977fe + _0x35eaff['count'], 0x0);
        return _0x2e3caa && _0x558acf > _0x5ae532;
    };
    const 迁谪意因为 = (_0x1fa8c3, _0x330da9, _0x474d6f) => {
        let _0x17593e = _0x330da9 === -0x1 ? getCarried(_0x1fa8c3) : getInventory(_0x1fa8c3, _0x330da9);
        if (!_0x17593e['namespace']['includes']('_') && typeof _0x474d6f === 'undefined') return 'other';
        let _0x1b587e = typeof _0x474d6f === 'undefined' ? _0x17593e['namespace']['replace']('minecraft:', '') : _0x474d6f['replace']('minecraft:', '');
        const _0x276210 = _0x1b587e['split']('_');
        return _0x276210[0x1];
    };
    const getEntityMaxDamage = _0x3c9977 => Array['from']({
        'length': 0x24
    }, (_0x486008, _0x5abcf0) => 十六言命曰(_0x3c9977, _0x5abcf0))['reduce']((_0xa2b04e, _0x5896a4) => Math['max'](_0xa2b04e, _0x5896a4), 0x0);
    const 长句歌以赠 = (_0x88f34b, _0x425894, _0x49b900 = false) => {
        let _0x76b0bf = _0x49b900 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x543f26 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x338fb5 = 0x0; _0x338fb5 < 0x24; _0x338fb5++) {
            const _0xeb3876 = 迁谪意因为(_0x88f34b, _0x338fb5);
            const _0x326c3f = _0x543f26['indexOf'](_0xeb3876);
            if (_0x326c3f === -0x1) continue;
            const _0x5898da = 之凡六百一(_0x88f34b, _0x338fb5);
            if (!_0x49b900 && _0xeb3876 === _0x425894 && _0x76b0bf < _0x5898da) _0x76b0bf = _0x5898da;
            if (_0x49b900 && _0x76b0bf[_0x326c3f] < _0x5898da) _0x76b0bf[_0x326c3f] = _0x5898da;
        }
        return _0x76b0bf;
    };
    const 之凡六百一 = (_0x378c2, _0x4cfd1d, _0x355ab4 = true, _0x59e055 = true) => {
        let _0x31aa29 = _0x4cfd1d === -0x1 ? getCarried(_0x378c2) : getInventory(_0x378c2, _0x4cfd1d);
        if (_0x4cfd1d < -0x1) _0x31aa29 = 音铮铮然有(getPlayerArmorItem(_0x378c2, Math['abs'](_0x4cfd1d) - 0x2));
        if (_0x31aa29['count'] === 0x0 || _0x31aa29['damage'] === 0x0 || _0x31aa29['attackDamage'] > 0x0) return 0x0;
        if (!_0x59e055) return _0x31aa29['damage'];
        let _0x32103c = 0x0;
        let _0x175a67 = _0x31aa29['enchants']['findIndex'](_0x2ea384 => _0x2ea384['id'] === 0x0);
        if (_0x175a67 > -0x1) _0x32103c = _0x31aa29['enchants'][_0x175a67]['lvl'];
        if (!_0x355ab4) return 0x1 + _0x32103c / 0x64;
        return _0x31aa29['damage'] * (0x1 + _0x32103c / 0x64);
    };
    const 十六言命曰 = (_0x55030b, _0x462fd9, _0x34433e = true, _0x3e1ecb = true) => {
        let _0x22b72c = _0x462fd9 === -0x1 ? getCarried(_0x55030b) : getInventory(_0x55030b, _0x462fd9);
        if (_0x22b72c['count'] === 0x0 || _0x22b72c['attackDamage'] === 0x0 || _0x22b72c['attackDamage'] === 0x0) return 0x1;
        if (!_0x3e1ecb) return _0x22b72c['attackDamage'];
        let _0x93ae62 = 0x0;
        let _0x42d293 = _0x22b72c['enchants']['findIndex'](_0x5a7e10 => _0x5a7e10['id'] === 0x9);
        if (_0x42d293 > -0x1) _0x93ae62 = _0x22b72c['enchants'][_0x42d293]['lvl'] * 1.25;
        if (!_0x34433e) return _0x93ae62;
        return _0x22b72c['attackDamage'] + _0x93ae62;
    };
    const b2s = _0x55c64e => _0x55c64e ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x33f9c2, _0x2542a6, _0x24ca2f) => {
        let _0x48b202 = _0x33f9c2['split'](_0x2542a6)['length'] - 0x1;
        let _0x19687e = 0x0;
        let _0x331a1a = [];
        for (let _0x4e4e1c = 0x0; _0x4e4e1c < _0x48b202; _0x4e4e1c++) {
            let _0x497921 = _0x33f9c2['indexOf'](_0x2542a6, _0x19687e) + _0x2542a6['length'];
            let _0x275f51 = _0x33f9c2['indexOf'](_0x24ca2f, _0x497921);
            if (_0x275f51 === -0x1 || _0x497921 === -0x1) break;
            _0x19687e = _0x275f51;
            _0x331a1a['push'](_0x33f9c2['substring'](_0x497921, _0x275f51));
        }
        return _0x48b202 > 0x1 ? _0x331a1a : _0x331a1a[0x0];
    };
    const 江头夜送客 = (_0x15299d, _0x4a347e) => {
        if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x15299d, _0x4a347e);
    };
    const 枫叶荻花秋 = (_0x4d6c75, _0x277b96, _0x49e22a, _0x5b1e75) => {
        if (typeof _0x49e22a === 'undefined') _0x49e22a = -0x1;
        if (typeof _0x5b1e75 === 'undefined') _0x5b1e75 = -0x1;
        let _0x3d699c = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x5da8a1 = getInventory(_0x4d6c75, index);
            if (!_0x5da8a1['namespace'] || !_0x5da8a1['name']) continue;
            if (_0x5da8a1['namespace']['includes'](_0x277b96) && (_0x5da8a1['aux'] === _0x49e22a || _0x49e22a === -0x1) && (_0x5da8a1['name']['includes'](_0x5b1e75) || _0x5b1e75 === -0x1)) {
                _0x3d699c = index;
                break;
            }
        }
        return _0x3d699c;
    };
    const 瑟瑟主人下 = _0x4f5789 => {
        const _0x2ace8b = getEntityMotion(_0x4f5789);
        const _0x49fae3 = Math['sqrt'](_0x2ace8b['x'] * _0x2ace8b['x'] + _0x2ace8b['y'] * _0x2ace8b['y'] + _0x2ace8b['z'] * _0x2ace8b['z']);
        return _0x49fae3 * 0x14;
    };
    const 马客在船举 = (_0x53cfa8, _0x12a69c) => {
        const _0x258280 = _0x12a69c - _0x53cfa8 + 0x1;
        return Math['floor'](Math['random']() * _0x258280) + _0x53cfa8;
    };
    const 酒欲饮无管 = (_0x38c43d, _0x47126, _0xd07db7) => {
        return {
            'x': _0x47126['x'] + _0x38c43d['x'] * _0xd07db7,
            'y': _0x47126['y'] + _0x38c43d['x'] * _0xd07db7,
            'z': _0x47126['z'] + _0x38c43d['z'] * _0xd07db7
        };
    };
    const 弦醉不成欢 = _0x161b21 => {
        if (_0x161b21 < 0x3c) return _0x161b21 + 's';
        if (_0x161b21 >= 0x3c) return Math['floor'](_0x161b21 / 0x3c) + 'min ' + _0x161b21 % 0x3c + 's';
    };
    const 惨将别别时 = (_0x5af0b7, _0x247a79, _0xc0bc6b, _0x558af6 = 0x0, _0x3679b1 = 0x0) => {
        if (!_0xc0bc6b) return true;
        _0x5af0b7['y'] += _0x558af6;
        _0x247a79['y'] += _0x3679b1;
        const _0xb9503 = 弦弦掩抑声(_0x5af0b7, _0x247a79, 'yaw_pos');
        const _0x21a4ff = -弦弦掩抑声(_0x5af0b7, _0x247a79, 'pitch_pos');
        const _0x12be22 = getDistance(_0x5af0b7, _0x247a79);
        let _0x1d420c = true;
        for (let _0x2dc40e = 0x0; _0x2dc40e < _0x12be22; _0x2dc40e += 0.5) {
            const _0x7bc454 = 忽闻水上琵(_0x2dc40e, _0x247a79, {
                'yaw': _0xb9503,
                'pitch': _0x21a4ff
            });
            const _0x141781 = getBlock(_0x7bc454['x'], _0x7bc454['y'], _0x7bc454['z']);
            if (_0x141781['namespace'] != 'minecraft:air') {
                _0x1d420c = false;
                break;
            }
        }
        return _0x1d420c;
    };
    const 茫茫江浸月 = (_0x25595f, _0x36c126) => {
        let _0x4b84d4 = getWorldPlayerList()['sort']((_0x1cc36d, _0x2ea9fd) => _0x1cc36d['name']['localeCompare'](_0x2ea9fd['name']));
        let _0x3c4e73 = _0x4b84d4['length'] > 0x0 ? _0x4b84d4['map'](_0x522a1e => ({
            'text': '§e' + _0x522a1e['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x522a1e['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x45cabe = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x3c4e73
        };
        const _0x1718ff = JSON['stringify'](_0x45cabe);
        addForm(_0x1718ff, function(_0x52df29) {
            if (_0x4b84d4['length'] > 0x0 && _0x52df29 >= 0x0) {
                var _0x2f1c55 = _0x36c126 === 0x0 ? _0x4b84d4[_0x52df29]['name'] : _0x4b84d4[_0x52df29]['id'];
                if (typeof globalThis[_0x25595f] === 'object') globalThis[_0x25595f]['push'](_0x2f1c55);
                if (typeof globalThis[_0x25595f] === 'string') globalThis[_0x25595f] = _0x2f1c55;
                归客不发寻(0x0, 'addTarget', _0x2f1c55, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x5e03fa, _0x3a1c09, _0x13b65e) => {
        if (_0x5e03fa === 0x0) return _0x3a1c09;
        let _0x21275b = _0x5e03fa < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x13b65e;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x5e03fa = Math['abs'](_0x5e03fa);
        const _0x5055ad = yaw * Math['PI'] / 0xb4;
        const _0x36c2cc = pitch * Math['PI'] / 0xb4;
        let _0x328ca2 = pitch != 0x0 ? Math['sin'](_0x36c2cc) * _0x5e03fa : 0x0;
        let _0x35232a = pitch != 0x0 ? _0x328ca2 / Math['tan'](_0x36c2cc) : _0x5e03fa;
        let _0x32923 = _0x35232a < 0x0;
        _0x35232a = Math['abs'](_0x35232a);
        const _0x48623a = Math['cos'](_0x5055ad) * _0x35232a;
        const _0x4053c7 = Math['sin'](_0x5055ad) * _0x35232a;
        let _0x5dd377 = -Math['sin'](_0x5055ad) * _0x35232a;
        let _0x33adff = Math['cos'](_0x5055ad) * _0x35232a;
        if (_0x21275b || _0x32923) {
            _0x5dd377 = -_0x5dd377;
            if (!_0x32923) _0x328ca2 = -_0x328ca2;
            _0x33adff = -_0x33adff;
        }
        return {
            'x': _0x3a1c09['x'] + _0x5dd377,
            'y': _0x3a1c09['y'] - _0x328ca2,
            'z': _0x3a1c09['z'] + _0x33adff
        };
    };
    const getPlayerItemCount = _0x2f257d => Array['from']({
        'length': 0x24
    }, (_0x12370a, _0x3aef32) => getInventory(_0x2f257d, _0x3aef32))['filter'](_0x46df38 => _0x46df38['count'] !== 0x0)['reduce']((_0x1c31c7, _0x4966f4) => _0x1c31c7 + _0x4966f4['count'], 0x0);
    const isSimilar = (_0x46fdae, _0x345137, _0x329618) => Math['abs'](_0x46fdae - _0x345137) < _0x329618;
    const 琶声主人忘 = _0x5ad474 => {
        let _0x5ad11e = [];
        if (at_entity) _0x5ad11e['push'](...getEntityList());
        if (at_player) _0x5ad11e['push'](...getPlayerList());
        let _0x44227c = Math['min'](at_maxCount, _0x5ad11e['length']);
        let _0x504577 = [];
        for (const _0x2e7ef7 of _0x5ad11e) {
            if (!才年长色衰(_0x2e7ef7)) continue;
            const _0x369696 = getEntityNamespace(_0x2e7ef7);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x1343c4 => _0x369696['includes'](_0x1343c4)) != at_back) continue;
            const _0x351710 = getPos(_0x2e7ef7);
            const _0x1398af = getDistance(_0x351710, getPos(_0x5ad474));
            if ((_0x1398af > at_maxDist || _0x1398af < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x5ab182 = getEntityAttribute(_0x2e7ef7, 'minecraft:health');
            if (at_heal && (!_0x5ab182 || _0x5ab182['min'] > _0x5ab182['max'] || _0x5ab182['max'] > 0x186a0 || _0x5ab182['current'] <= 0x0 || _0x5ab182['max'] === 0x0) != at_back) continue;
            if (_0x369696 === 'minecraft:player') {
                const _0x519cab = getEntityRot(_0x2e7ef7);
                const _0x56b8d1 = at_BWM ? getEntityAttribute(_0x2e7ef7, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x426b2a = getEntityName(_0x2e7ef7);
                if (at_BWM && _0x56b8d1['current'] >= 0.5 && !_0x426b2a['includes']('[') && !_0x426b2a['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x2e7ef7);
                    continue;
                }
                if (at_fov && (typeof _0x519cab['yaw'] === 'undefined' || typeof _0x519cab['pitch'] === 'undefined' || _0x519cab['yaw']['toFixed'](0x2) === 0x0 || _0x519cab['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x4d289b = getEntityFlag(_0x2e7ef7, 0x5);
                if (at_hide && _0x4d289b != at_back) continue;
                const _0x12a8ba = getEntityIsGround(_0x2e7ef7);
                if (at_ground && _0x12a8ba === at_back) continue;
                if (at_wall && !惨将别别时(getPos(self_id), _0x351710, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x426b2a['startsWith'](ct_team) || ct_team['includes']('[') && _0x426b2a['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x2e7ef7) != at_back || !at_name && (_0x426b2a === getEntityName(_0x5ad474) || _0x426b2a === '') != at_back || (_0x351710['y'] > at_maxY || _0x351710['y'] < at_minY) != at_back && !at_infY || _0x2e7ef7 === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x30951e => _0x426b2a['includes'](_0x30951e))) continue;
                const _0x30d69a = teams_armor ? teams_blur ? getPlayerArmorItem(_0x2e7ef7, teams_slot) : 音铮铮然有(getPlayerArmorItem(_0x2e7ef7, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0x30d69a != '{}' && _0x30d69a === teams_self || !teams_blur && _0x30d69a['color'] && _0x30d69a['color'] === teams_self['color'])) continue;
                const _0x3857a6 = at_size ? getEntitySize(_0x2e7ef7) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x3857a6['x'] > at_defaultSize['x'] + 0.1 || _0x3857a6['x'] < at_defaultSize['x'] - 0.1) && (_0x3857a6['y'] > 1.66 || _0x3857a6['y'] < 1.64) && (_0x3857a6['y'] < at_defaultSize['y'] || _0x3857a6['y'] > at_defaultSize['y'] + 0.1) && (_0x3857a6['y'] > 1.51 || _0x3857a6['y'] < 1.49)) != at_back) continue;
            }
            const _0x2f8bf5 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x2e7ef7) : 0x0;
            const _0x5907a8 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x2e7ef7, 'yaw_rot') : 0x0;
            const _0x3f53e9 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x2e7ef7, 'pitch_rot') : 0x0;
            const _0x581be3 = modes['at_mode'] === 0x2 ? 十六言命曰(_0x2e7ef7, -0x1) : 0x0;
            _0x504577['push']({
                'distance': _0x1398af,
                'target': _0x2e7ef7,
                'damage': _0x581be3,
                'heal': _0x5ab182['current'],
                'crosshair': Math['sqrt'](_0x5907a8 * _0x5907a8 + _0x3f53e9 * _0x3f53e9),
                'items': _0x2f8bf5,
                'random': 马客在船举(0x0, _0x5ad11e['length'] - 0x1)
            });
        }
        const _0x569a6d = [(_0x362fe9, _0x327879) => _0x362fe9['distance'] - _0x327879['distance'], (_0x1a5809, _0x29f74c) => _0x1a5809['heal'] - _0x29f74c['heal'], (_0x4677aa, _0x5f2e8c) => _0x4677aa['damage'] - _0x5f2e8c['damage'], (_0x58a837, _0x37a3b2) => _0x58a837['crosshair'] - _0x37a3b2['crosshair'], (_0xaae9d5, _0x49ba08) => _0x49ba08['items'] - _0xaae9d5['items'], (_0x2785ff, _0x3cd27e) => _0x2785ff['random'] - _0x3cd27e['random']];
        _0x504577['sort'](_0x569a6d[modes['at_mode']]);
        if (at_reverse) _0x504577['reverse']();
        if (at_infCount) return _0x504577['map'](_0x4ecb23 => _0x4ecb23['target']);
        return _0x504577['slice'](0x0, _0x44227c)['map'](_0x4c8af6 => _0x4c8af6['target']);
    };
    const 归客不发寻 = (_0x1f195e = 0x0, _0xef4a6a = 'Tip', _0x3a2884, _0x4c5cd4 = '§r') => {
        if (!FuncTip) return false;
        if (_0x1f195e == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0xef4a6a + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4c5cd4) + ' ' + _0x3a2884);
        if (_0x1f195e == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0xef4a6a + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4c5cd4) + _0x3a2884;
            if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x4c5cd4) + _0x3a2884;
        }
    };
    const getDistance = (_0xa0802f, _0x40835d) => Math['sqrt'](Math['pow'](_0xa0802f['x'] - _0x40835d['x'], 0x2) + Math['pow'](_0xa0802f['y'] - _0x40835d['y'], 0x2) + Math['pow'](_0xa0802f['z'] - _0x40835d['z'], 0x2));
    const 声暗问弹者 = (_0x127e7b, _0x5b7476) => {
        if (!才年长色衰(_0x127e7b) || !才年长色衰(_0x5b7476)) return Infinity;
        const _0x1c4673 = getPos(_0x127e7b);
        const _0x24a6da = getPos(_0x5b7476);
        return Math['sqrt'](Math['pow'](_0x1c4673['x'] - _0x24a6da['x'], 0x2) + Math['pow'](_0x1c4673['y'] - _0x24a6da['y'], 0x2) + Math['pow'](_0x1c4673['z'] - _0x24a6da['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x2d4e52, _0x3108c2) => {
        if (!才年长色衰(_0x2d4e52) || !才年长色衰(_0x3108c2)) return Infinity;
        const _0x32d40e = getPos(_0x2d4e52);
        const _0x440c7c = getPos(_0x3108c2);
        return Math['sqrt'](Math['pow'](_0x32d40e['x'] - _0x440c7c['x'], 0x2) + Math['pow'](_0x32d40e['z'] - _0x440c7c['z'], 0x2));
    };
    const 欲语迟移船 = (_0x4ec705, _0x212ac0, _0x4b66ea) => {
        let _0x3e6d6a = {
            'fn-set-player-pos': {
                'x': _0x4ec705,
                'y': _0x212ac0,
                'z': _0x4b66ea
            }
        };
        callModule(0x5, JSON['stringify'](_0x3e6d6a));
    };
    const getHorizontalDistance = (_0x992782, _0x18a876) => Math['sqrt'](Math['pow'](_0x992782['x'] - _0x18a876['x'], 0x2) + Math['pow'](_0x992782['z'] - _0x18a876['z'], 0x2));
    const setRealPos = (_0x595536, _0x525183, _0x3fa140, _0x2db3f3) => setEntityPos(_0x595536, _0x525183, _0x3fa140 + setPos_offset, _0x2db3f3);
    const setPos = (_0x2847fa, _0x34c3a4, _0x36a671) => setRealPos(self_id, _0x2847fa, _0x34c3a4, _0x36a671);
    const setMotion = (_0x1415cc, _0x39eb0b, _0x40d0af) => setEntityMotion(self_id, _0x1415cc, _0x39eb0b, _0x40d0af);
    const 相近邀相见 = _0x4afa63 => {
        if (_0x4afa63 === '') return [];
        return _0x4afa63['split'](',');
    };
    const 添酒回灯重 = _0xbafc5f => {
        if (typeof _0xbafc5f != 'object' || _0xbafc5f['length'] === 0x0) return '';
        return _0xbafc5f['join'](',');
    };
    const 开宴千呼万 = (_0x20ff11, _0x456859) => {
        let _0x2b1421 = typeof _0x456859 === 'object' ? 添酒回灯重(_0x456859) : _0x456859;
        let _0x51e0e3 = typeof _0x456859 === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x20ff11 + '","placeholder":"","default":"' + _0x2b1421 + '"}]}', function(_0xa8e512) {
            if (_0x51e0e3 === 0x1) globalThis[_0x20ff11] = _0xa8e512;
            if (_0x51e0e3 === 0x0) globalThis[_0x20ff11] = 相近邀相见(_0xa8e512);
            归客不发寻(0x0, 'setValue', _0x20ff11 + ' §7>>>§r ' + _0xa8e512, '§r');
            nx_cfg[_0x20ff11] = globalThis[_0x20ff11];
        });
    };
    const 唤始出来犹 = _0x31a7e3 => {
        if (typeof _0x31a7e3 != 'string' || _0x31a7e3 === '') return 'None';
        let _0x277db8 = _0x31a7e3['match'](/\[(.*?)\]/g);
        if (_0x277db8 === null) return 'None';
        return _0x277db8[0x0];
    };
    const 抱琵琶半遮 = _0xbf94a6 => {
        if (!File['exist'](_0xbf94a6)) return '{}';
        const _0x4b5772 = File['read'](_0xbf94a6);
        return _0x4b5772 ? _0x4b5772 : '{}';
    };
    const 面转轴拨弦 = _0xb7a4cd => {
        const _0x405747 = getPos(_0xb7a4cd);
        let _0x3c6fc5 = _0xb7a4cd === self_id ? Math['floor'](_0x405747['y']) - 0x1 : Math['floor'](_0x405747['y']);
        return {
            'x': Math['floor'](_0x405747['x']),
            'y': _0x3c6fc5,
            'z': Math['floor'](_0x405747['z'])
        };
    };
    const 三两声未成 = (_0x477b44, _0x1a3349) => {
        if (_0x477b44['length'] === _0x1a3349['length']) {
            return [];
        }
        const _0x5b38d2 = _0x477b44['length'] >= _0x1a3349['length'] ? _0x477b44 : _0x1a3349;
        const _0x27e94a = _0x477b44['length'] < _0x1a3349['length'] ? _0x477b44 : _0x1a3349;
        return _0x5b38d2['filter'](_0x45e235 => !_0x27e94a['includes'](_0x45e235));
    };
    const 曲调先有情 = (_0x58b815, _0x37108a) => {
        const _0x119c8e = aa_speed;
        const _0x33d008 = aa_g;
        const _0x122908 = Math['atan'](Math['floor'](-_0x37108a) / _0x58b815);
        const _0x231083 = Math['sqrt'](_0x58b815 * _0x58b815 + _0x37108a * _0x37108a);
        const _0x395d96 = Math['atan'](_0x231083 / _0x119c8e / 0x2 / _0x119c8e * _0x33d008);
        return -((_0x395d96 + _0x122908) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x1b7347, _0x3f173f) => _0x1b7347 / _0x3f173f;
    const roundAngle = (_0x3ce2c4, _0x473ba4) => Math['round'](_0x3ce2c4 / _0x473ba4) * _0x473ba4;
    const 弦弦掩抑声 = (_0x3c5816, _0x425e62, _0x3ee462, _0x21b977 = false, _0x3c3abf = false, _0x57148e = 0x0, _0x3c4574 = 0x0) => {
        let _0x1c8e7d = typeof _0x425e62 != 'string' ? _0x425e62 : getPos(_0x425e62);
        let _0xa31be7 = typeof _0x3c5816 != 'string' ? _0x3c5816 : getPos(_0x3c5816);
        let _0x4e2b02 = getEntityRot(_0x3c5816);
        if (!_0x1c8e7d || !_0xa31be7) return Infinity;
        const _0x19e43f = getHorizontalDistance(_0xa31be7, _0x1c8e7d);
        if (_0x21b977) _0x1c8e7d = 酒欲饮无管(getEntityMotion(_0x425e62), getPos(_0x425e62), getFlyTime(_0x19e43f, aa_speed) * 0x14);
        let _0xc88854 = _0x1c8e7d['x'] - _0xa31be7['x'];
        let _0x4f6b6a = _0xa31be7['y'] - _0x1c8e7d['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0x3c4574, _0x3c4574) / 0xa;
        let _0x7eefd2 = _0x1c8e7d['z'] - _0xa31be7['z'];
        let _0x3ed55b = Math['atan2'](_0x7eefd2, _0xc88854) * 0xb4 / Math['PI'];
        const _0x41c3d2 = 曲调先有情(_0x19e43f, _0x4f6b6a);
        let _0x24a83c = _0x3c3abf ? _0x41c3d2 : Math['atan2'](_0x4f6b6a, _0x19e43f) * 0xb4 / Math['PI'];
        if (_0x3ee462 === 'yaw_pos') return _0x3ed55b > -0xb4 && _0x3ed55b <= 0x5a ? _0x3ed55b + 0x5a : _0x3ed55b - 0x10e;
        if (_0x3ee462 === 'yaw_rot') {
            _0x3ed55b = _0x3ed55b > -0xb4 && _0x3ed55b <= 0x5a ? _0x3ed55b + 0x5a : _0x3ed55b - 0x10e;
            let _0x4f7ce2 = _0x3ed55b - _0x4e2b02['yaw'] + 马客在船举(-_0x57148e / 0x2, _0x57148e / 0x2);
            return _0x4f7ce2 > 0x0 ? -_0x4f7ce2 + 0xb4 : -_0x4f7ce2 - 0xb4;
        }
        if (_0x3ee462 === 'pitch_pos') return _0x24a83c;
        if (_0x3ee462 === 'pitch_rot') return _0x24a83c - _0x4e2b02['pitch'];
    };
    const 声思似诉平 = (_0xbadead, _0x1ffea8, _0x3e9fac, _0x14c1b6) => {
        let _0xedcdac = Math['abs'](弦弦掩抑声(_0xbadead, _0x1ffea8, 'yaw_rot'));
        let _0x4667b2 = Math['abs'](弦弦掩抑声(_0xbadead, _0x1ffea8, 'pitch_rot'));
        if (_0x14c1b6 === 0x0) return Math['sqrt'](_0xedcdac * _0xedcdac + _0x4667b2 * _0x4667b2) < _0x3e9fac;
        if (_0x14c1b6 === 0x1) return Math['abs'](_0xedcdac) < _0x3e9fac;
        if (_0x14c1b6 === 0x2) return Math['abs'](_0x4667b2) < _0x3e9fac;
    };
    const 生不得志低 = _0x456e68 => {
        let _0x3c4e71 = '';
        for (let _0x2c7a39 = 0x0; _0x2c7a39 < _0x456e68['length']; _0x2c7a39 += 0x2) {
            _0x3c4e71 += String['fromCharCode'](parseInt(_0x456e68['substr'](_0x2c7a39, 0x2), 0x10));
        }
        return _0x3c4e71;
    };
    const 眉信手续续 = (_0x3bdd78, _0x2ab09f, _0x4b628b = 0.5, _0x1afb58 = false) => {
        let _0x4f68ec = [];
        let _0xf1ca93 = 弦弦掩抑声(_0x3bdd78, _0x2ab09f, 'yaw_pos');
        let _0x434c39 = 弦弦掩抑声(_0x3bdd78, _0x2ab09f, 'pitch_pos');
        if (getDistance(_0x3bdd78, _0x2ab09f) < _0x4b628b) return [_0x3bdd78];
        for (let _0x57f94a = 0x0; _0x57f94a <= getDistance(_0x3bdd78, _0x2ab09f); _0x57f94a += _0x4b628b) {
            let _0x5c3d3a = 忽闻水上琵(-_0x57f94a, _0x3bdd78, {
                'yaw': _0xf1ca93,
                'pitch': _0x1afb58 ? -_0x434c39 : 0x0
            });
            if (getBlock(_0x5c3d3a['x'], _0x5c3d3a['y'], _0x5c3d3a['z'])['namespace'] === 'minecraft:air') _0x4f68ec['push']({
                'x': _0x5c3d3a['x'],
                'y': _0x5c3d3a['y'],
                'z': _0x5c3d3a['z']
            });
        }
        return _0x4f68ec;
    };
    const 弹说尽心中 = (_0x123ee1, _0x195555) => {
        if (!才年长色衰(_0x123ee1)) return '';
        let _0x3ede41 = getEntityAttribute(_0x123ee1, 'minecraft:health');
        let _0x5f2529 = _0x3ede41['current'];
        let _0x349013 = _0x3ede41['max'];
        const _0x301cb4 = _0x5f2529 / _0x349013;
        switch (_0x195555) {
            case 0x0:
                return _0x301cb4['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x48819d = '§c';
                for (let _0x2c93ed = 0x0; _0x2c93ed < Math['floor'](_0x301cb4 * 0x14); _0x2c93ed++) _0x48819d += '❤';
                return _0x48819d + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x5f2529);
            case 0x3:
                return Math['floor'](_0x5f2529) + '/' + Math['floor'](_0x349013);
            case 0x4:
                return getProgress(_0x5f2529, _0x349013, '▌', 0x14);
            default:
                return _0x5f2529;
        }
    };
    const 无限事轻拢 = _0x53895f => {
        let _0x4f1bbc = '';
        let _0x3cabec = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0xb00081 = 0x0; _0xb00081 < _0x53895f; _0xb00081++) {
            let _0xf818aa = 马客在船举(0x0, _0x3cabec['length'] - 0x1);
            _0x4f1bbc += _0x3cabec[_0xf818aa];
        }
        return _0x4f1bbc;
    };

    function getProgress(_0x528e8d, _0x21b050, _0x4b6eb8 = '▌', _0xb8dbcc = 0x28) {
        let _0x12fe1e = Math['min'](_0x528e8d / _0x21b050, 0x1);
        const _0x36d48e = '4c6e2a3b195d591b3a2e6c4' ['split']('');
        let _0x484815 = _0x36d48e[Math['min'](Math['floor'](_0x12fe1e * _0x36d48e['length']), _0x36d48e['length'] - 0x1)];
        let _0xbdd910 = _0x4b6eb8['repeat'](_0xb8dbcc)['split']('');
        let _0x6a5d92 = Math['min'](Math['floor'](_0x12fe1e * _0xbdd910['length']), _0xbdd910['length']);
        _0xbdd910[Math['min'](_0x6a5d92, _0xbdd910['length'] - 0x1)] = _0x4b6eb8 + '§r§o§l';
        return '§r[§o§l§' + _0x484815 + _0xbdd910['join']('') + '§r]';
    }
    const 慢捻抹复挑 = _0x580300 => {
        for (let _0x253827 = Math['ceil'](-cd_size / 0x2); _0x253827 < Math['floor'](cd_size / 0x2 + 0x1); _0x253827++) {
            for (let _0x345a43 = Math['ceil'](-cd_size / 0x2); _0x345a43 < Math['floor'](cd_size / 0x2 + 0x1); _0x345a43++) {
                for (let _0x4691bd = Math['ceil'](-cd_size / 0x2); _0x4691bd < Math['floor'](cd_size / 0x2 + 0x1); _0x4691bd++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x580300;
                    const _0x1fa87f = getBlock(x + _0x253827, y + _0x345a43, z + _0x4691bd);
                    if (_0x1fa87f['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x580300['y'] + _0x345a43 <= _0x580300['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x253827, y + _0x345a43, z + _0x4691bd, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x580300['x'] + _0x253827, _0x580300['y'] + _0x345a43, _0x580300['z'] + _0x4691bd, 0x0);
                    if (cd_packet) 人本长安倡(_0x580300['x'] + _0x253827, _0x580300['y'] + _0x345a43, _0x580300['z'] + _0x4691bd, true, true);
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
            for (let _0x12d553 = 0x0; _0x12d553 < ia_move; _0x12d553++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 六幺大弦嘈 = _0x5f24da => {
        let _0x1e6b70 = '';
        let _0x5dd59b = _0x5f24da['split']('');
        for (let _0xeedc2 in _0x5dd59b) {
            let _0x31abbc = _0x5dd59b[_0xeedc2]['toUpperCase']();
            if (_0xeedc2 != _0x5dd59b['length'] - 0x1) {
                if (_0xeedc2 % 0x2 === 0x1) _0x1e6b70 += _0x31abbc + ' ';
                else _0x1e6b70 += _0x31abbc;
            } else _0x1e6b70 += _0x31abbc;
        }
        if (rpc_remark) {
            let _0x110130 = _0x1e6b70['split'](' ');
            let _0x554ab9 = '';
            for (let _0x3158c1 in _0x110130) _0x554ab9 += _0x110130[_0x3158c1] + '(' + 生不得志低(_0x110130[_0x3158c1]) + ') ';
            return _0x554ab9;
        } else return _0x1e6b70;
    };
    const 嘈如急雨小 = (_0x572494, _0x4172b8, _0x47317c = false) => {
        setEntityTarget(_0x572494, _0x4172b8);
        if (_0x47317c) setEntityTarget(_0x4172b8, _0x572494);
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

    function onTickEvent() {
        try {
            if (PauseNX) return;
            let _0x53825f = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 音铮铮然有(getPlayerArmorItem(self_id, teams_slot));
            let _0x20840f = getEntityAttribute(self_id, 'minecraft:health');
            let _0x4b7dad = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x4b7dad['y'], 0x0);
            let _0x5092ce = getCameraRotation();
            let _0x588041 = {
                'yaw': _0x5092ce['yaw'] > 0x0 ? 0xb4 - _0x5092ce['yaw'] : -0xb4 - _0x5092ce['yaw'],
                'pitch': -_0x5092ce['pitch']
            };
            let _0x442080 = getDistance(self_pos, prev_pos) / 0.05;
            let _0x4f1165 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x464255 = 瑟瑟主人下(self_id);
            let _0x50967c = 面转轴拨弦(self_id);
            let _0x3d86d7 = getWorldPlayerList();
            let _0x39e557 = getEntityIsGround(self_id);
            let _0x21f510 = getScreenName();
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x5827e8, _0x521787) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
            }
            self_item = getCarried(self_id);
            if (_0x20840f['current'] - prev_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x20840f['current'] < prev_heal) death_pos = self_pos;
            if (ShowScreenHud) 归客不发寻(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
            if (DeadCross) dc_pos['forEach'](_0x21d7b6 => {
                sendShadow(_0x21d7b6['x'], _0x21d7b6['y'], _0x21d7b6['z']);
                sendShadow(_0x21d7b6['x'], _0x21d7b6['y'] + 0x1, _0x21d7b6['z']);
                sendShadow(_0x21d7b6['x'], _0x21d7b6['y'] + 0x2, _0x21d7b6['z']);
                sendShadow(_0x21d7b6['x'] + 0x1, _0x21d7b6['y'] + 0x2, _0x21d7b6['z']);
                sendShadow(_0x21d7b6['x'] - 0x1, _0x21d7b6['y'] + 0x2, _0x21d7b6['z']);
                sendShadow(_0x21d7b6['x'], _0x21d7b6['y'] + 0x3, _0x21d7b6['z']);
            });
            if (AdminShow) {
                let _0x5086d8 = _0x3d86d7['filter'](_0x41e459 => _0x41e459['permissionLevel'] != -0x1 || _0x41e459['commandPermissionLevel'] != -0x1);
                if (_0x5086d8['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x5086d8['map'](_0x31184a => _0x31184a['name'])), '§r'));
                let _0x2738af = _0x5086d8['filter'](_0xd2347a => 声暗问弹者(_0xd2347a['id'], self_id) < as_range);
                if (_0x2738af['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x2738af['map'](_0x3fe45f => _0x3fe45f['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 琶声主人忘(self_id);
            if (NoHider) {
                const _0x59bb7e = getPlayerList();
                _0x59bb7e['forEach'](_0x133836 => {
                    if (_0x133836 != self_id) {
                        removeEntityEffect(_0x133836, 0xe);
                        setEntityFlag(_0x133836, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x133836)) at_lists['splice'](at_lists['indexOf'](_0x133836), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x50967c['x'], _0x50967c['y'] - 0x1, _0x50967c['z'])['namespace'] === 'minecraft:glass' && _0x39e557) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !cc_status && _0x4b7dad['y'] < 0x0) {
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
                const _0x36f798 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x36f798) setPos(_0x36f798['x'] + 马客在船举(-rt_range, rt_range), _0x36f798['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x36f798['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x1160ef = 马客在船举(ac_min, ac_max);
                let _0x4adf0d = Math['round'](0x3e8 / _0x1160ef);
                const _0x102b1a = at_lists['length'] > 0x0 ? 声思似诉平(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x5afff7 = 0x0; _0x5afff7 < ac_times; _0x5afff7++) {
                    if (!_0x102b1a) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0x4adf0d;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x24c48b = getEntityList()['forEach'](_0x5d99e9 => {
                    if (getEntityNamespace(_0x5d99e9) != 'minecraft:item' || !findEntity(_0x5d99e9) || 声暗问弹者(_0x5d99e9, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x39b293 = getPos(_0x5d99e9);
                    silentMove(_0x39b293['x'], _0x39b293['y'], _0x39b293['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x588041,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x588041['yaw']
            });
            if (CustomItem) {
                const _0x5b74b7 = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x5b74b7);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x5b74b7);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x5b74b7);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x18dadd = [];
                if (modes['sb_mode'] == 0x0) _0x18dadd = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x18dadd = at_lists;
                if (modes['sb_mode'] == 0x2) _0x18dadd = ['lock_pos'];
                _0x18dadd['forEach'](_0x2039d9 => {
                    if (sb_exclude && _0x2039d9 == self_id) return;
                    let _0x1e4b21 = null;
                    if (_0x2039d9 == 'lock_pos') _0x1e4b21 = sb_pos;
                    else _0x1e4b21 = 面转轴拨弦(_0x2039d9);
                    if (!_0x1e4b21) return;
                    let _0x330958 = getEntityRot(_0x2039d9);
                    if (modes['sb_mode'] < 0x2) {
                        _0x1e4b21 = 忽闻水上琵(sb_offset, _0x1e4b21, _0x330958);
                        _0x1e4b21['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x28ca91 = JSON['parse'](抱琵琶半遮(nx_paths + '/Shadow.json'));
                        _0x28ca91['forEach'](_0x3b408d => {
                            let _0x361e2d = Math['sqrt'](_0x3b408d['x'] * _0x3b408d['x'] + _0x3b408d['y'] * _0x3b408d['y'] + _0x3b408d['z'] * _0x3b408d['z']);
                            let _0x85fa18 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x3b408d, 'yaw_pos');
                            let _0x23dd3a = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x3b408d, 'pitch_pos');
                            let _0xc5a600 = 忽闻水上琵(_0x361e2d, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x23dd3a,
                                'yaw': _0x85fa18 + sb_rc_yaw
                            });
                            sendShadow(_0x1e4b21['x'] + _0xc5a600['x'], _0x1e4b21['y'] + _0xc5a600['y'], _0x1e4b21['z'] + _0xc5a600['z']);
                        });
                    } else {
                        for (let _0x29377b = Math['ceil'](-sb_length / 0x2); _0x29377b < Math['floor'](sb_length / 0x2 + 0x1); _0x29377b++) {
                            for (let _0x2c9ad0 = Math['ceil'](-sb_length / 0x2); _0x2c9ad0 < Math['floor'](sb_length / 0x2 + 0x1); _0x2c9ad0++) {
                                for (let _0x24b7f7 = Math['ceil'](-sb_length / 0x2); _0x24b7f7 < Math['floor'](sb_length / 0x2 + 0x1); _0x24b7f7++) {
                                    sendShadow(_0x1e4b21['x'] + _0x29377b, _0x1e4b21['y'] + _0x2c9ad0 + 0x2, _0x1e4b21['z'] + _0x24b7f7);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0x10b3d5 = [
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
                let _0x5bec5e = [];
                if (sm_player) _0x5bec5e['push'](...getPlayerList());
                if (sm_entity) _0x5bec5e['push'](...getEntityList());
                if (sm_target) _0x5bec5e['push'](...at_lists);
                _0x5bec5e['forEach'](_0x8acc7a => {
                    let _0x5a5402 = 弦弦掩抑声(self_id, _0x8acc7a, 'yaw_rot');
                    let _0x5c8fcc = 声暗问弹者(self_id, _0x8acc7a);
                    let _0x169e37 = Math['floor'](_0x5c8fcc / sm_size * sm_proportion * -Math['sin'](_0x5a5402 * Math['PI'] / 0xb4) * 0xa);
                    let _0x297ed5 = Math['floor'](_0x5c8fcc / sm_size * sm_proportion * -Math['cos'](_0x5a5402 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x169e37 > 0x5) _0x169e37 = 0x5;
                    if (_0x297ed5 > 0x5) _0x297ed5 = 0x5;
                    if (_0x169e37 < -0x5) _0x169e37 = -0x5;
                    if (_0x297ed5 < -0x5) _0x297ed5 = -0x5;
                    _0x10b3d5[_0x297ed5 + 0x5][_0x169e37 + 0x5] = ' §e◆§r ';
                });
                let _0x424acf = _0x10b3d5['map'](_0x1cccd9 => _0x1cccd9['join'](''))['join']('\n');
                _0x53825f['push'](归客不发寻(0x1, 'Map', '\n' + _0x424acf, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x30d4ad = getPos(cm_id);
                    const _0x4cd389 = getEntitySize(cm_id);
                    setCameraAnchor(_0x30d4ad['x'] - self_pos['x'], _0x30d4ad['y'] - self_pos['y'] + 0.85 * _0x4cd389['y'], -_0x30d4ad['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x2d27e3 = getPos(cm_attack);
                    const _0x4ea35d = getEntitySize(cm_attack);
                    if (_0x2d27e3 && _0x4ea35d) setCameraAnchor(_0x2d27e3['x'] - self_pos['x'], _0x2d27e3['y'] - self_pos['y'] + 0.85 * _0x4ea35d['y'], -_0x2d27e3['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x4b7dad['x'] * cm_moverange, -_0x4b7dad['y'] * cm_moverange, _0x4b7dad['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x20840f['current'] < prev_heal) prev_heal = _0x20840f['current'];
            if (NoDebuff) debuff['forEach'](_0x52df30 => removeEntityEffect(self_id, _0x52df30));
            if (MoveJump && self_moving && _0x39e557) playerJump();
            if (ChunkRender) {
                let _0x332ca7 = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x2ec9df = {
                    'x': _0x332ca7['x'] * 0x10,
                    'z': _0x332ca7['z'] * 0x10
                };
                let _0x22870b = {
                    'x': (_0x332ca7['x'] + 0x1) * 0x10,
                    'z': (_0x332ca7['z'] + 0x1) * 0x10
                };
                for (let _0x1b5ec2 = 0x0; _0x1b5ec2 < 0x10; _0x1b5ec2++) {
                    妇遂命酒使(0x37, _0x2ec9df['x'] + _0x1b5ec2, self_pos['y'], _0x2ec9df['z'], 0x1);
                    妇遂命酒使(0x37, _0x2ec9df['x'], self_pos['y'], _0x2ec9df['z'] + _0x1b5ec2, 0x1);
                    妇遂命酒使(0x37, _0x22870b['x'] - _0x1b5ec2, self_pos['y'], _0x22870b['z'], 0x1);
                    妇遂命酒使(0x37, _0x22870b['x'], self_pos['y'], _0x22870b['z'] - _0x1b5ec2, 0x1);
                }
                _0x53825f['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x332ca7['x'] + '， ' + _0x332ca7['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x4d0e92 of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x4d0e92, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x4d0e92, -0x1, '一局'));
                        const _0x3b0495 = getCarried(self_id);
                        if (_0x3b0495['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x59459e = getHorizontalDistance(self_pos, nx_goal);
                const _0x413e4b = getDistance(self_pos, nx_goal);
                if (_0x413e4b >= 0x5) {
                    let _0x5e4dc5 = 弦弦掩抑声(self_id, nx_goal, 'yaw_pos');
                    let _0x52043a = 忽闻水上琵(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x5e4dc5,
                        'pitch': 0x0
                    });
                    if (_0x59459e >= 0x3) setMotion(_0x52043a['x'] - self_pos['x'], _0x4b7dad['y'], _0x52043a['z'] - self_pos['z']);
                    else setMotion(_0x4b7dad['x'], (_0x52043a['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x4b7dad['z']);
                } else {
                    nx_goal = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0xd399df = 0x0; _0xd399df < ral_num; _0xd399df++) {
                    const _0x1d86da = 无限事轻拢(ral_length);
                    addCustomArrayList('RandomArrayList' + _0xd399df, _0x1d86da, _0x1d86da, true);
                }
            }
            if (ShowNowTime) {
                const _0x5e905e = new Date();
                const _0x5a10ef = _0x5e905e['getFullYear']();
                const _0x2b4933 = ('0' + (_0x5e905e['getMonth']() + 0x1))['slice'](-0x2);
                const _0x3ef760 = ('0' + _0x5e905e['getDate']())['slice'](-0x2);
                const _0x538306 = ('0' + _0x5e905e['getHours']())['slice'](-0x2);
                const _0x3e0f0f = ('0' + _0x5e905e['getMinutes']())['slice'](-0x2);
                const _0x2b8922 = ('0' + _0x5e905e['getSeconds']())['slice'](-0x2);
                const _0x3ad00f = _0x5a10ef + '-' + _0x2b4933 + '-' + _0x3ef760 + ' ' + _0x538306 + ':' + _0x3e0f0f + ':' + _0x2b8922;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x3ad00f, '当前时间: ' + _0x3ad00f, true);
            }
            if (ChestAura) {
                let _0x2dcc7e = 面转轴拨弦(self_id);
                let _0x50f73f = ca_range;
                for (let _0x29e798 = -_0x50f73f; _0x29e798 < _0x50f73f; _0x29e798++) {
                    for (let _0x203cbc = -_0x50f73f; _0x203cbc < _0x50f73f; _0x203cbc++) {
                        for (let _0x1358b1 = -_0x50f73f; _0x1358b1 < _0x50f73f; _0x1358b1++) {
                            const _0x15b8b6 = getBlock(_0x2dcc7e['x'] + _0x29e798, _0x2dcc7e['y'] + _0x203cbc, _0x2dcc7e['z'] + _0x1358b1);
                            if (_0x15b8b6['namespace'] != 'minecraft:chest') continue;
                            const _0x6f590c = getBlock(_0x2dcc7e['x'] + _0x29e798, _0x2dcc7e['y'] + _0x203cbc + 0x1, _0x2dcc7e['z'] + _0x1358b1);
                            const _0x1f7b33 = {
                                'x': _0x2dcc7e['x'] + _0x29e798,
                                'y': _0x2dcc7e['y'] + _0x203cbc,
                                'z': _0x2dcc7e['z'] + _0x1358b1
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x1f7b33)) && ca_exclude || !惨将别别时(_0x2dcc7e, _0x1f7b33, ca_wall, 1.53, 0.5) || ca_block && _0x6f590c['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x1f7b33, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x2dcc7e['x'] + _0x29e798, _0x2dcc7e['y'] + _0x203cbc, _0x2dcc7e['z'] + _0x1358b1, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x1f7b33));
                            if (ca_check && chestStates['packet'] && chestStates['click'] && _0x21f510['includes']('chest_screen')) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x3d86d7['forEach'](_0x2d7798 => {
                    const {
                        name,
                        id
                    } = _0x2d7798;
                    if (id === self_id || name === '') return;
                    let _0x1bde54 = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x1bde54 = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x1bde54 = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x48478b => {
                            if (_0x48478b['match_mode'] === '精准' && _0x48478b['has_mode'] === '存在' && _0x48478b['texts']['some'](_0x12c341 => name === _0x12c341) != _0x48478b['reverse_selection']) _0x1bde54 = id;
                            if (_0x48478b['match_mode'] === '精准' && _0x48478b['has_mode'] === '同时' && _0x48478b['texts']['every'](_0x53e4ce => name === _0x53e4ce) != _0x48478b['reverse_selection']) _0x1bde54 = id;
                            if (_0x48478b['match_mode'] === '模糊' && _0x48478b['has_mode'] === '存在' && _0x48478b['texts']['some'](_0x436e8e => name['includes'](_0x436e8e)) != _0x48478b['reverse_selection']) _0x1bde54 = id;
                            if (_0x48478b['match_mode'] === '精准' && _0x48478b['has_mode'] === '存在' && _0x48478b['texts']['every'](_0x2bf853 => name['includes'](_0x2bf853)) != _0x48478b['reverse_selection']) _0x1bde54 = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x1bde54 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x1bde54 = null;
                    if (as_ground && getEntityIsGround(id)) _0x1bde54 = null;
                    if (_0x1bde54 === null) return;
                    if (modes['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x53825f['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x4924cd => interactEntity(_0x4924cd));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (Tower && (_0x588041['pitch'] < -0x50 || _0x588041['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x39e557 || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0x50967c['x'], self_pos['y'] - 0x2, _0x50967c['z']), tower_delay * 0xa);
                }
            }
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x3d86d7['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x3d86d7['length'], '§r');
                    last_world_player = _0x3d86d7;
                }
                if (sv_id && self_id != prev_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x14e1f9 = [];
                _0x3d86d7['forEach'](_0x1a5bcf => {
                    if (modes['ca_mode'] == 0x0 && 十六言命曰(_0x1a5bcf['id'], -0x1) > 0x14) _0x14e1f9['push'](getEntityName(_0x1a5bcf['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x1a5bcf['id']) > 0x14) _0x14e1f9['push'](getEntityName(_0x1a5bcf['id']));
                });
                if (_0x14e1f9['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x14e1f9), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x3d86d7['length']) {
                const _0x430c5a = _0x3d86d7['map'](_0x573a4c => _0x573a4c['name']);
                let _0x40fcbb = 三两声未成(last_world_player, _0x430c5a);
                let _0x1c24ae = last_world_player['length'] < _0x430c5a['length'];
                if (_0x1c24ae) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x40fcbb) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x40fcbb) + '离开了世界', '§r');
                last_world_player = _0x430c5a;
            }
            if (DropRes && _0x4b7dad['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x3e7fc2 = getInventory(self_id, index);
                    if (resList['includes'](_0x3e7fc2['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x22aed7 => {
                        if (声思似诉平(self_id, _0x22aed7, aaa_fov, 0x0)) {
                            if (aa_use) 快弹数曲曲();
                            else 江头夜送客(_0x22aed7, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x12a8e6 = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0xbb26e1 = getCarried(self_id);
                        if (hs_use && !_0xbb26e1['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x12a8e6['name']) || selectitems['includes'](_0x12a8e6['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x2dacaa = getCarried(self_id);
                    if (hs_use && !_0x2dacaa['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot && ap_autobag && !getScreenName()['includes']('chest_screen')) openInventory();
            if (AutoPot && getScreenName()['includes']('chest_screen')) {
                const _0x43be3c = 是夕始觉有(self_id, 'splash_potion', 'hotbal', 0x3);
                if (!_0x43be3c) {
                    for (let _0x5e166c = ap_slot === -0x1 ? 0x23 : 0x9; _0x5e166c > -0x1; _0x5e166c--) {
                        if (ap_slot > -0x1) {
                            const _0x4f5d8f = getInventory(self_id, _0x5e166c);
                            if (_0x4f5d8f['namespace'] === 'minecraft:air') {
                                女尝学琵琶(ap_slot, _0x5e166c, false, false);
                                ap_slot = -0x1;
                                break;
                            }
                        }
                        const _0x3148b6 = getInventory(self_id, _0x5e166c);
                        if (ap_slot === -0x1 && _0x3148b6['namespace'] === 'minecraft:splash_potion') ap_slot = _0x5e166c;
                    }
                } else if (ap_autobag) deleteContainer();
            }
            if (SmartInv && (!da_inv || _0x21f510 === 'inventory_screen') && (!da_chest || _0x21f510['includes']('chest_screen')) && (!da_bow || _0x588041['pitch'] > 0x50) && ticks % da_delay === 0x0) {
                for (let _0x5d5046 = 0x0; _0x5d5046 < da_max; _0x5d5046++) {
                    const _0xa28c0d = 迁谪意因为(self_id, da_slot);
                    if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0xa28c0d)) {
                        const _0x230100 = 十六言命曰(self_id, da_slot, da_texture, da_enchant);
                        if (_0x230100 > 0x0 && _0x230100 < 0x14) {
                            if (_0x230100 >= max_damage) {
                                max_damage = _0x230100;
                                if (da_move) 女尝学琵琶(da_slot, SmartInvCfg['sword'], true, false);
                            } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                        }
                    }
                    const _0x5e5e6d = nx_armors['indexOf'](_0xa28c0d);
                    const _0xca0ed3 = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
                    if (da_armor && _0x5e5e6d !== -0x1 && _0xca0ed3 > 0x0) {
                        if (_0xca0ed3 > max_armor[_0x5e5e6d]) {
                            max_armor[_0x5e5e6d] = _0xca0ed3;
                            if (da_move) {
                                if (move_armor_slot > -0x1) 女尝学琵琶(da_slot, move_armor_slot);
                                else if (nx_armors[_0x5e5e6d]) 女尝学琵琶(da_slot, SmartInvCfg[nx_armors[_0x5e5e6d]], true, false);
                            }
                        } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                    }
                    if (da_slot < 0x23) da_slot++;
                    else {
                        da_slot = 0x0;
                        max_damage = 0x0;
                        max_armor = [0x0, 0x0, 0x0, 0x0];
                    }
                }
            }
            if (AutoArmor && (!aa_inv || _0x21f510 === 'inventory_screen') && (!aa_chest || _0x21f510['includes']('chest_screen'))) {
                let _0x1934cc = 迁谪意因为(self_id, armor_slot);
                let _0x139302 = 之凡六百一(self_id, armor_slot);
                if (_0x1934cc != 'other' && _0x139302 !== 0x0) {
                    let _0x11ffb9 = [之凡六百一(self_id, -0x2), 之凡六百一(self_id, -0x3), 之凡六百一(self_id, -0x4), 之凡六百一(self_id, -0x5)];
                    for (let _0xbc205b = 0x0; _0xbc205b < aa_times; _0xbc205b++) {
                        if (_0x1934cc === 'helmet' && _0x139302 > _0x11ffb9[0x0]) 罢悯然自叙(armor_slot);
                        if (_0x1934cc === 'chestplate' && _0x139302 > _0x11ffb9[0x1]) 罢悯然自叙(armor_slot);
                        if (_0x1934cc === 'leggings' && _0x139302 > _0x11ffb9[0x2]) 罢悯然自叙(armor_slot);
                        if (_0x1934cc === 'boots' && _0x139302 > _0x11ffb9[0x3]) 罢悯然自叙(armor_slot);
                    }
                }
                if (ticks % aa_delay == 0x0) armor_slot++;
                if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
            }
            if (Remover) {
                const _0x1070f5 = getEntityList();
                _0x1070f5['forEach'](_0x2f0462 => {
                    let _0x574ba5 = false;
                    if (rmer_entity) _0x574ba5 = !isPlayer(_0x2f0462);
                    if (rmer_item) _0x574ba5 = getEntityNamespace(_0x2f0462) == 'minecraft:item';
                    if (_0x574ba5) removeEntity(_0x2f0462);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x9823bc = 0x8; _0x9823bc >= 0x0; _0x9823bc--) {
                    let _0x592a6e = getInventory(self_id, _0x9823bc);
                    if (_0x592a6e['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x9823bc);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x522d85 = 0x0; _0x522d85 <= 0x12; _0x522d85 += 0x2) 妇遂命酒使(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x522d85 / 0xa, fc_pos['z'], 0x1);
                    _0x53825f['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x53825f['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0xc651d9 = getEntityList();
                _0xc651d9['forEach'](_0x145eb5 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x145eb5)) && at_lists['length'] > 0x0) {
                        const _0x2d7f55 = getPos(at_lists[0x0]);
                        let _0x1e1d79 = 弦弦掩抑声(_0x2d7f55, getPos(_0x145eb5), 'yaw_pos');
                        let _0x22fefc = -弦弦掩抑声(_0x2d7f55, getPos(_0x145eb5), 'pitch_pos');
                        const _0x4132ed = getPos(_0x145eb5);
                        const _0x5455e6 = 忽闻水上琵(tt_speed, _0x4132ed, {
                            'yaw': _0x1e1d79,
                            'pitch': _0x22fefc
                        });
                        setEntityMotion(_0x145eb5, _0x5455e6['x'] - _0x4132ed['x'], _0x5455e6['y'] - _0x4132ed['y'], _0x5455e6['z'] - _0x4132ed['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x145211 = getEntityList();
                _0x145211['forEach'](_0x28f942 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x28f942))) {
                        const _0x470436 = getPos(_0x28f942);
                        if (typeof arrow_rot[_0x28f942] === 'undefined') arrow_rot[_0x28f942] = _0x588041;
                        const _0x30199d = arrow_rot[_0x28f942]['yaw'];
                        const _0x40afec = arrow_rot[_0x28f942]['pitch'];
                        const _0x2f92db = 忽闻水上琵(0x1, _0x470436, {
                            'yaw': _0x30199d,
                            'pitch': _0x40afec
                        });
                        setEntityMotion(_0x28f942, _0x2f92db['x'] - _0x470436['x'], _0x2f92db['y'] - _0x470436['y'], _0x2f92db['z'] - _0x470436['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x9faaf = getEntityList();
                _0x9faaf['forEach'](_0x3873e0 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x3873e0)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x3873e0;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x12765f = getPos(av_id);
                    setCameraAnchor(_0x12765f['x'] - self_pos['x'] + (av_x - 0xa), _0x12765f['y'] - self_pos['y'] + (av_y - 0xa), -_0x12765f['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0xaa67c0 = 0x0; _0xaa67c0 < fpsr_rate * 0xa; _0xaa67c0++) {
                    for (let _0x50adaa = 0x0; _0x50adaa < fpsr_rate * 0xa; _0x50adaa++) getEntityName(_0xaa67c0 + _0x50adaa);
                }
            }
            if (ArrowParticle) {
                const _0x47e399 = getEntityList();
                _0x47e399['forEach'](_0x3163ba => {
                    if (getEntityNamespace(_0x3163ba) === 'minecraft:arrow') {
                        const _0x1eb646 = getPos(_0x3163ba);
                        妇遂命酒使(arp_type, _0x1eb646['x'], _0x1eb646['y'], _0x1eb646['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x166cf1 = getPos(at_lists[0x0]);
                let _0x4f18cd = {};
                if (fb_chest) {
                    const _0x26e1b9 = 面转轴拨弦(self_id);
                    for (let _0xe493dd = -0x2; _0xe493dd < 0x3; _0xe493dd++) {
                        for (let _0x5ca672 = -0x2; _0x5ca672 < 0x3; _0x5ca672++) {
                            for (let _0x286ab7 = -0x2; _0x286ab7 < 0x3; _0x286ab7++) {
                                const _0x258138 = getBlock(_0x26e1b9['x'] + _0xe493dd, _0x26e1b9['y'] + _0x5ca672, _0x26e1b9['z'] + _0x286ab7);
                                const _0xff4ef4 = 添酒回灯重([_0x26e1b9['x'] + _0xe493dd, _0x26e1b9['y'] + _0x5ca672, _0x26e1b9['z'] + _0x286ab7]);
                                if (_0x258138['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0xff4ef4)) {
                                    _0x4f18cd = {
                                        'x': _0x26e1b9['x'] + _0xe493dd,
                                        'y': _0x26e1b9['y'] + _0x5ca672,
                                        'z': _0x26e1b9['z'] + _0x286ab7
                                    };
                                    ca_chest_pos['push'](_0xff4ef4);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x5c7198 = (_0x39e557 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x48d0e1 = 马客在船举(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x48d0e1) {
                    _0x166cf1 = 忽闻水上琵(_0x5c7198, _0x166cf1, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x390c81 = 弦弦掩抑声(self_id, _0x166cf1, 'yaw_pos');
                let _0x301077 = 忽闻水上琵(_0x5c7198, getPos(self_id), {
                    'yaw': _0x390c81,
                    'pitch': 0x0
                });
                if (_0x20840f['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x130c68 = 谁琵琶声停(self_id, at_lists[0x0]);
                if (_0x130c68 > fb_seek) {
                    if (_0x39e557) setEntityMotion(self_id, _0x301077['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x39e557 ? fb_y : _0x4b7dad['y'], _0x301077['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0) && _0x130c68 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x39e557) setEntityMotion(self_id, fb_randMove && _0x48d0e1 ? _0x301077['x'] - self_pos['x'] : _0x4b7dad['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x4b7dad['y'], fb_randMove && _0x48d0e1 ? _0x301077['z'] - self_pos['z'] : _0x4b7dad['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x4f18cd) != '{}') {
                    let _0x596a67 = 弦弦掩抑声(self_id, _0x4f18cd, 'yaw_pos');
                    let _0x9ebffc = 忽闻水上琵(_0x5c7198, getPos(self_id), {
                        'yaw': _0x596a67,
                        'pitch': 0x0
                    });
                    if (_0x39e557) setEntityMotion(self_id, _0x9ebffc['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x39e557 ? fb_y : _0x4b7dad['y'], _0x9ebffc['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x5b53ea = 0x0; _0x5b53ea < rpc_repeat_times; _0x5b53ea++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0xf0b364 = 0x0; _0xf0b364 < shift_num; _0xf0b364++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x1a3b86 = 0x0;
                    at_lists['forEach'](_0x57aba0 => {
                        let _0x3ae74b = 面转轴拨弦(_0x57aba0);
                        if (ac_excludeY && Math['abs'](_0x3ae74b['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x3ae74b['x'], _0x3ae74b['y'] + 0x1, _0x3ae74b['z']);
                        for (let _0x1a297a = -0x1; _0x1a297a < 0x2; _0x1a297a++) {
                            for (let _0x4245fb = -0x2; _0x4245fb < 0x0; _0x4245fb++) {
                                for (let _0x87e346 = -0x1; _0x87e346 < 0x2; _0x87e346++) {
                                    let _0x80fa48 = getBlock(_0x3ae74b['x'] + _0x1a297a, _0x3ae74b['y'] + _0x87e346, _0x3ae74b['z'] + _0x4245fb);
                                    if (_0x1a3b86 > ac_count) break;
                                    if ((_0x80fa48['namespace'] === 'minecraft:bedrock' || _0x80fa48['namespace'] === 'minecraft:obsidian') && _0x1a3b86 < ac_count) {
                                        buildBlock(self_id, _0x3ae74b['x'] + _0x1a297a, _0x3ae74b['y'] + _0x87e346, _0x3ae74b['z'] + _0x4245fb, 0x1);
                                        _0x1a3b86++;
                                    }
                                }
                            }
                        }
                    });
                } else _0x53825f['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x56d197 = getEntityList();
                _0x56d197['forEach'](_0x13a82a => {
                    if (!才年长色衰(_0x13a82a)) return;
                    const _0x268304 = getPos(_0x13a82a);
                    if (getEntityTypeId(_0x13a82a) !== 0x47 || 声暗问弹者(_0x13a82a, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x17d20f = 0x0; _0x17d20f < 0x9; _0x17d20f++) {
                            const _0x2bba09 = getInventory(self_id, _0x17d20f);
                            if (_0x2bba09['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x17d20f);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x50967c['x'] + _0x268304['x']) / 0x2, (_0x50967c['y'] + _0x268304['y']) / 0x2, (_0x50967c['z'] + _0x268304['z']) / 0x2, 0x0);
                        江头夜送客(_0x13a82a, Swing);
                    }
                });
            }
            if (AutoBomb && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0x2b269b => {
                        let _0x24a824 = 面转轴拨弦(_0x2b269b);
                        let _0x26eea = getBlock(_0x24a824['x'], _0x24a824['y'] + 0x2, _0x24a824['z']);
                        if (_0x26eea['namespace'] === 'minecraft:air') buildBlock(self_id, _0x24a824['x'], _0x24a824['y'] + 0x2, _0x24a824['z'], 0x0);
                        _0x26eea = getBlock(_0x24a824['x'], _0x24a824['y'] + 0x2, _0x24a824['z']);
                        if (_0x26eea['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x24a824['x'], _0x24a824['y'] + 0x2, _0x24a824['z'], 0x0);
                    });
                } else _0x53825f['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x452337 => {
                    const _0xd75381 = 面转轴拨弦(_0x452337);
                    let _0x47d22a = [
                        [_0xd75381['x'], _0xd75381['y'] + 0x2, _0xd75381['z']],
                        [_0xd75381['x'] + 0x1, _0xd75381['y'], _0xd75381['z']],
                        [_0xd75381['x'] - 0x1, _0xd75381['y'], _0xd75381['z']],
                        [_0xd75381['x'], _0xd75381['y'], _0xd75381['z'] + 0x1],
                        [_0xd75381['x'], _0xd75381['y'], _0xd75381['z'] - 0x1],
                        [_0xd75381['x'] + 0x1, _0xd75381['y'] + 0x1, _0xd75381['z']],
                        [_0xd75381['x'] - 0x1, _0xd75381['y'] + 0x1, _0xd75381['z']],
                        [_0xd75381['x'], _0xd75381['y'] + 0x1, _0xd75381['z'] + 0x1],
                        [_0xd75381['x'], _0xd75381['y'] + 0x1, _0xd75381['z'] - 0x1]
                    ];
                    for (pos of _0x47d22a) {
                        let _0x3b7d58 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x3b7d58['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x3b7d58['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x377404 = [];
                let _0x3d3449 = false;
                random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x5b3d37 => {
                    let _0x2d94da = getPos(_0x5b3d37);
                    if (!((声暗问弹者(self_id, _0x5b3d37) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x5b3d37, ka_fov, 0x0) && 惨将别别时(self_pos, _0x2d94da, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x4b7dad['y'] < -0.42))) return;
                    _0x377404['push'](_0x5b3d37);
                    KillAura_d_1[_0x5b3d37] = Date['now']();
                    if (typeof KillAura_d_2[_0x5b3d37] !== 'undefined' && KillAura_d_1[_0x5b3d37] - KillAura_d_2[_0x5b3d37] < 0x0) return;
                    _0x3d3449 = true;
                    for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x5b3d37, Swing);
                    KillAura_d_2[_0x5b3d37] = KillAura_d_1[_0x5b3d37] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x3d3449 ? 0x1 : 0x0);
                });
                if (_0x377404['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x377404['length'] + '个目标' : 添酒回灯重(_0x377404['map'](_0x5aac79 => getEntityName(_0x5aac79))), '§r'));
                const _0x5cf9d0 = _0x377404['length'] * random_num * ka_times;
                if (ka_show) _0x53825f['push'](归客不发寻(0x1, 'APS', _0x5cf9d0 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x4b7dad['y'] < -0.074 && !_0x39e557) setMotion(_0x4b7dad['x'], -sd_speed / 0xf, _0x4b7dad['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x106804 = 忽闻水上琵(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                妇遂命酒使(srp_type, _0x106804['x'], _0x106804['y'] - 1.8 + srp_y, _0x106804['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x3f55ea = motion_list['shift']();
                setMotion(_0x3f55ea[0x0], _0x3f55ea[0x1], _0x3f55ea[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x53825f['push'](归客不发寻(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
                const _0x289a52 = 酒欲饮无管(_0x4b7dad, self_pos, 0xa);
                var _0x3a0274 = sca_move || self_moving ? 弦弦掩抑声(_0x289a52, self_id, 'yaw_pos') : _0x588041['yaw'];
                var _0x52de45 = sca_move || self_moving ? 弦弦掩抑声(_0x289a52, self_id, 'pitch_pos') : _0x588041['pitch'];
                if (!sca_acc) _0x3a0274 = roundAngle(_0x3a0274, sca_prec);
                if (!sca_acc) _0x52de45 = roundAngle(_0x52de45, sca_prec);
                if (sca_auto) {
                    let _0x421e11 = {};
                    let _0x13cb08 = Infinity;
                    for (let _0x28d102 = -0x3; _0x28d102 <= 0x3; _0x28d102++) {
                        for (let _0x2f3670 = -0x3; _0x2f3670 <= -0x1; _0x2f3670++) {
                            for (let _0x28fa56 = -0x3; _0x28fa56 <= 0x3; _0x28fa56++) {
                                let _0x2fb620 = {
                                    'x': _0x28d102 + _0x50967c['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0x2f3670,
                                    'z': _0x28fa56 + _0x50967c['z']
                                };
                                const _0x3c015c = getBlock(_0x2fb620['x'], _0x2fb620['y'], _0x2fb620['z']);
                                if (_0x3c015c['namespace'] == 'minecraft:air') continue;
                                let _0x5d2b9c = Math['sqrt'](_0x28d102 * _0x28d102 - _0x2f3670 * _0x2f3670 + _0x28fa56 * _0x28fa56);
                                if (_0x5d2b9c < _0x13cb08) {
                                    _0x13cb08 = _0x5d2b9c;
                                    _0x421e11 = _0x2fb620;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x421e11) != '{}') {
                        let _0x4e22bf = 眉信手续续(_0x421e11, _0x50967c, 0x1, true);
                        _0x4e22bf['forEach'](_0x297b93 => {
                            if (sca_surface) 事今漂沦憔(Math['floor'](_0x297b93['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x297b93['z']));
                            else buildBlock(self_id, Math['floor'](_0x297b93['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x297b93['z']), 0x1);
                        });
                    }
                }
                for (let _0x5a94a3 = 0x0; _0x5a94a3 < sca_len; _0x5a94a3++) {
                    const _0x4c702f = 忽闻水上琵(_0x5a94a3, self_pos, {
                        'yaw': _0x3a0274,
                        'pitch': sca_y ? _0x52de45 : 0x0
                    });
                    let _0x5e23be = {
                        'x': Math['floor'](_0x4c702f['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0x4c702f['z'])
                    };
                    let _0x159b52 = getBlock(_0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x159b52['namespace'])) continue;
                    if (sca_fake) setBlock(_0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 事今漂沦憔(_0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z']);
                    else buildBlock(self_id, _0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z'], 0x1);
                    if (sca_up) {
                        const _0xb76061 = getBlock(_0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0xb76061['namespace'])) buildBlock(self_id, _0x5e23be['x'], Math['floor'](_0x5e23be['y']), _0x5e23be['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x4bc841 = 0x0; _0x4bc841 < 0x9; _0x4bc841++) {
                    const _0x5c9430 = getInventory(self_id, _0x4bc841);
                    if (_0x5c9430['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x4bc841);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target && 才年长色衰(th_target)) {
                    let _0x279a76 = [];
                    const _0x2124f4 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x2b9cc3 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x11d674 = 面转轴拨弦(th_target);
                    _0x279a76['push'](th_head);
                    if (th_name) _0x279a76['push']('名称:' + getEntityName(th_target));
                    if (th_carry) _0x279a76['push']('手持: ' + _0x2124f4['name'] + ' x' + _0x2124f4['count']);
                    if (th_dist) _0x279a76['push']('距离: ' + _0x2b9cc3 + 'm');
                    if (th_pos) _0x279a76['push']('坐标: [' + _0x11d674['x'] + ', ' + _0x11d674['y'] + ', ' + _0x11d674['z'] + ']');
                    if (th_health) _0x279a76['push']('血量: ' + 弹说尽心中(th_target, modes['th_health_mode']));
                    if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
                        updateTextContent(th_id, _0x279a76['join']('\n'));
                        updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                        updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                        updateTextScale(th_id, th_size);
                    } else th_target = null;
                } else updateTextContent(th_id, '');
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x39e557 && _0x4b7dad['y'] > -av_minY) av_pos['push'](_0x50967c);
                    if (!av_running && _0x39e557) av_pos = [];
                    if (!av_running && _0x4b7dad['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x2c9d03 = av_pos.pop();
                            setPos(_0x2c9d03['x'], _0x2c9d03['y'], _0x2c9d03['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x4b7dad['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0xc9f01b = {
                        'rot': _0x588041,
                        'yHeadRot': 0x0
                    };
                    const _0x42db5b = {
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
                        ..._0xc9f01b
                    };
                    const _0x359a4f = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0xc9f01b
                    };
                    sendPlayerAuthInput(_0x42db5b);
                    sendMovePlayer(_0x359a4f);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x39e557 && _0x4b7dad['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x4b7dad['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x2e95a9 = av_pos[0x0];
                            setPos(_0x2e95a9['x'], _0x2e95a9['y'], _0x2e95a9['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x39e557)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x2046dd = 0x0; _0x2046dd < gm_count; _0x2046dd++) {
                        if (modes['gm_mode'] === 0x0) 二年恬然自(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x5b8b03 = 0x0; _0x5b8b03 < gm_count; _0x5b8b03++) {
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
                                'rot': _0x588041,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 谁琵琶声停(self_id, at_lists[0x0]) < kd_distance && (_0x39e557 || !kd_only_ground)) {
                const _0x5acb3 = 弦弦掩抑声(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x513572 = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x5acb3,
                    'pitch': _0x588041['pitch']
                });
                if (kd_anti) silentMove(_0x513572['x'] * 0x2, _0x513572['y'] * 0x2, _0x513572['z'] * 0x2);
                else setMotion(_0x513572['x'] - self_pos['x'], _0x4b7dad['y'], _0x513572['z'] - self_pos['z']);
            }
            if (AirJump && _0x4b7dad['y'] < -0.42) {
                let _0xc6697b = 酒欲饮无管(_0x4b7dad, self_pos, 瑟瑟主人下(self_id));
                let _0x1260c7 = 弦弦掩抑声(_0xc6697b, self_id, 'yaw_pos');
                let _0x2fe16a = 忽闻水上琵(aj_speed / 0xa, self_pos, {
                    'yaw': _0x1260c7,
                    'pitch': 0x0
                });
                setMotion(_0x2fe16a['x'] - self_pos['x'], aj_height / 0x64, _0x2fe16a['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0x290403 = 0x0; _0x290403 < di_speed; _0x290403++) {
                    let _0x19eb2c = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0x19eb2c, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) > tra_range) {
                let _0xde1db7 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                let _0x22276e = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
                let _0xd1e233 = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0xde1db7,
                    'pitch': -_0x22276e
                });
                setPos(_0xd1e233['x'], _0xd1e233['y'], _0xd1e233['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x59782c = getPos(self_id);
                _0x59782c['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0x4ffda2 => {
                    let _0x2826fa = getPos(_0x4ffda2);
                    _0x2826fa['y'] += 0.765;
                    let _0x1dd850 = 弦弦掩抑声(_0x59782c, _0x2826fa, 'yaw_pos');
                    let _0x31af91 = 弦弦掩抑声(_0x59782c, _0x2826fa, 'pitch_pos');
                    for (let _0x5b6f82 = 0x0; _0x5b6f82 < 声暗问弹者(_0x4ffda2, self_id); _0x5b6f82 += (0xb - lp_size) / 0x5) {
                        let _0x881662 = 忽闻水上琵(-_0x5b6f82, getPos(self_id), {
                            'yaw': _0x1dd850,
                            'pitch': -_0x31af91
                        });
                        妇遂命酒使(lp_type, _0x881662['x'], _0x881662['y'] - 1.53 + lp_offset / 0xa, _0x881662['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x1dc736 = spm_text;
                if (spm_file) {
                    let _0x26ec9a = 抱琵琶半遮(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x1dc736 = _0x26ec9a[马客在船举(0x0, _0x26ec9a['length'] - 0x1)];
                }
                const _0x2ab309 = 'abcdef';
                if (spm_gradual) _0x1dc736 = 送客湓浦口(_0x1dc736);
                if (spm_rainbow) _0x1dc736 = '§' + _0x2ab309[马客在船举(0x0, _0x2ab309['length'] - 0x1)] + _0x1dc736;
                if (spm_attack && at_lists['length'] > 0x0) _0x1dc736 = ' §e@' + at_lists['map'](_0xa13df3 => getEntityName(_0xa13df3))['join'](',') + ' §r' + _0x1dc736;
                for (let _0x319f22 = 0x0; _0x319f22 < spm_count; _0x319f22++) {
                    let _0x473884 = 无限事轻拢(0x6);
                    sendChatMessage(spm_random ? _0x1dc736 + '§r || ' + _0x473884 : _0x1dc736);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x4bccc2 => setEntitySize(_0x4bccc2, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x32cd16 => {
                    const _0x383f8d = 忽闻水上琵(suck_range, self_pos, _0x588041);
                    setRealPos(_0x32cd16, _0x383f8d['x'], _0x383f8d['y'], _0x383f8d['z']);
                });
            }
            if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x498ed5 => 声思似诉平(_0x498ed5, self_id, aaim_fov, false));
            if (aaim_states) {
                let _0x2bb7cf = 忽闻水上琵(0.3 * aaim_speed / 0x5, self_pos, {
                    'yaw': _0x588041['yaw'] + (Math['round'](马客在船举(0x0, 0x1)) ? 0x5a : -0x5a),
                    'pitch': 0x0
                });
                setMotion(_0x2bb7cf['x'] - self_pos['x'], _0x4b7dad['y'], _0x2bb7cf['z'] - self_pos['z']);
                aaim_states = false;
            }
            if (Velocity && self_moving) {
                let _0x3f6c9d = _0x588041['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0xef6014 = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0x3f6c9d = 弦弦掩抑声(self_id, _0xef6014, 'yaw_pos');
                }
                let _0x1e2821 = 忽闻水上琵((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x3f6c9d,
                    'pitch': 0x0
                });
                setMotion(_0x1e2821['x'] - self_pos['x'], vec_bhop && (_0x39e557 || bhop_airjump) && (!bhop_airjump || _0x4b7dad['y'] < -0.42) ? bhop_heigh : _0x4b7dad['y'], _0x1e2821['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x22016b = getCameraRotation();
                const _0x43105c = 忽闻水上琵(fb_speed / 0xa, self_pos, {
                    'yaw': _0x22016b['yaw'] > 0x0 ? 0xb4 - _0x22016b['yaw'] : -0xb4 - _0x22016b['yaw'],
                    'pitch': -_0x22016b['pitch']
                });
                if (!_0x39e557 && self_moving) setMotion(_0x43105c['x'] - self_pos['x'], 0x0, _0x43105c['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0x495ff0 => {
                    const _0x9fc6d7 = getPos(_0x495ff0);
                    妇遂命酒使(tp_type, _0x9fc6d7['x'], _0x9fc6d7['y'] + 0.3, _0x9fc6d7['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x21f510 === 'inventory_screen') && (!ic_chest || _0x21f510['includes']('chest_screen')) && (!ic_bow || _0x588041['pitch'] > 0x50)) {
                for (let _0x199599 = 0x0; _0x199599 < ic_max; _0x199599++) {
                    const _0x1dce07 = getInventory(self_id, cleaner_slot);
                    if (_0x1dce07['count'] === 0x0) {
                        if (cleaner_slot > 0x0) cleaner_slot--;
                        else cleaner_slot = 0x23;
                        continue;
                    };
                    let _0x1e1b9c = false;
                    let _0x20a5e3 = clear_config[_0x1dce07['namespace']];
                    let _0x148816 = 安感斯人言(-0x2, _0x1dce07['namespace']);
                    if (modes['ic_mode'] === 0x0 && _0x20a5e3) _0x1e1b9c = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x20a5e3 || _0x20a5e3 && (_0x20a5e3['max_num'] === -0x1 || _0x148816 > _0x20a5e3['max_num']) && (_0x20a5e3['aux'] === 'any' || _0x1dce07['aux'] === _0x20a5e3['aux']))) _0x1e1b9c = true;
                    if (ic_move && !_0x1e1b9c && typeof _0x20a5e3 !== 'undefined' && _0x20a5e3['slot'] !== 'undefined') 女尝学琵琶(cleaner_slot, _0x20a5e3['slot'], true, false);
                    if (_0x1e1b9c) {
                        if (trash_slot > -0x1 && cleaner_slot > 0x8) 女尝学琵琶(cleaner_slot, trash_slot, true, false);
                        dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x20a5e3 || modes['ic_mode'] === 0x1 && !_0x20a5e3);
                    }
                    if (cleaner_slot > 0x0) cleaner_slot--;
                    else cleaner_slot = 0x23;
                }
            }
            if (SafeWalk && self_moving) {
                const _0x32cd95 = getEntityRot(self_id)['yaw'];
                const _0x16c614 = 忽闻水上琵(0.5, _0x50967c, {
                    'yaw': _0x32cd95,
                    'pitch': 0x0
                });
                const _0x1a4a3b = getBlock(_0x16c614['x'], _0x16c614['y'] - 0x1, _0x16c614['z']);
                if (_0x1a4a3b['namespace'] === 'minecraft:air' && _0x39e557) setMotion((-_0x16c614['x'] + self_pos['x']) / 0x8, _0x4b7dad['y'], (-_0x16c614['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && self_moving) {
                const _0xe0a8bd = getEntityRot(self_id)['yaw'];
                const _0x1591e3 = 忽闻水上琵(0x1, _0x50967c, {
                    'yaw': _0xe0a8bd,
                    'pitch': 0x0
                });
                const _0x46ece3 = getBlock(_0x1591e3['x'], _0x1591e3['y'], _0x1591e3['z']);
                if (_0x46ece3['namespace'] != 'minecraft:air') setMotion(_0x4b7dad['x'], sp_speed / 0xf, _0x4b7dad['z']);
            }
            if (Fly && (!_0x39e557 || !fly_air) && (!fly_move || self_moving)) {
                const _0x1245eb = fly_ud ? fly_current : 0x0;
                let _0x489724 = 酒欲饮无管(_0x4b7dad, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (!fly_y) setPos(_0x489724['x'], self_pos['y'] + _0x1245eb, _0x489724['z']);
                    else setPos(self_pos['x'], _0x489724['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, -0.01, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0x489724['x'] - self_pos['x'], _0x489724['y'] - self_pos['y'], _0x489724['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0x489724['x'], _0x489724['y'], _0x489724['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0x489724['x'],
                        'y': _0x489724['y'],
                        'z': _0x489724['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0x588041['pitch'],
                        'yaw': _0x588041['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x3e1c4a = 酒欲饮无管(_0x4b7dad, self_pos, 0x1);
                const _0xf6d773 = 弦弦掩抑声(self_id, _0x3e1c4a, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0xf6d773) + '°方向移动');
            }
            if (FakeWater) setBlock(_0x50967c['x'], _0x50967c['y'], _0x50967c['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x4b7dad['x'], -0x186a0, _0x4b7dad['z']);
            if (Hover) setMotion(_0x4b7dad['x'], 0.05, _0x4b7dad['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0x57876a = getPos(at_lists[0x0]);
                const _0x16e358 = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0x57876a['x'] + _0x16e358, _0x57876a['y'] + rid_y + 0x1, _0x57876a['z'] + _0x16e358);
                _0x53825f['push'](归客不发寻(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x38b576 = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x91e511 = 忽闻水上琵(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x38b576['yaw'] > 0x0 ? 0xb4 - _0x38b576['yaw'] : -0xb4 - _0x38b576['yaw'],
                        'pitch': -_0x38b576['pitch']
                    });
                    if (spr_hor) _0x91e511['y'] = self_pos['y'];
                    const _0x111c03 = getBlock(_0x91e511['x'], _0x91e511['y'], _0x91e511['z']);
                    if (_0x111c03['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x91e511['x'], _0x91e511['y'], _0x91e511['z']);
                            setEntityMotion(self_id, _0x4b7dad['x'], -1e-7, _0x4b7dad['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x91e511['x'] - self_pos['x'], _0x91e511['y'] - self_pos['y'], _0x91e511['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x91e511['x'], _0x91e511['y'], _0x91e511['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x91e511['x'],
                                'y': _0x91e511['y'],
                                'z': _0x91e511['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x588041['pitch'],
                                'yaw': _0x588041['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x599bd0 = 0x0; _0x599bd0 < cs_count; _0x599bd0++) {
                    const _0x478212 = Math['sqrt'](_0x599bd0);
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x50967c['x'], _0x50967c['y'], _0x50967c['z'], _0x478212);
                    if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x4) sendSound(_0x599bd0, self_pos['x'], self_pos['y'], self_pos['z'], _0x599bd0);
                    if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0x16c137 => {
                        if (_0x16c137 !== self_id) 江头夜送客(_0x16c137, false);
                    });
                    if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
                        'pos': self_pos,
                        'yHeadRot': 0x0,
                        'inputMode': 0x2,
                        'playMode': 0x0,
                        'flags': [_0x599bd0],
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
                        'type': _0x599bd0,
                        'value': 0x1
                    });
                }
            }
            if (TestModule) {}
            if (KickAura && at_lists['length'] > 0x0) {
                let _0x3e0129 = [];
                if (ka_player) _0x3e0129['concat'](_0x3d86d7['map'](_0x303fd5 => _0x303fd5['id']));
                if (ka_target) _0x3e0129['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0x3e0129['forEach'](_0x2ffb5f => {
                    if (_0x2ffb5f == self_id) return;
                    const _0x345616 = getEntityName(_0x2ffb5f);
                    let _0x3c5c93 = _0x345616['indexOf'](']') - 0x2;
                    let _0x4407d8 = ['b', 'c', 'e', 'a'];
                    for (let _0x3ae322 of _0x4407d8) {
                        if (_0x345616['indexOf']('·§' + _0x3ae322) != -0x1) {
                            _0x3c5c93 = _0x345616['indexOf']('·§' + _0x3ae322);
                            break;
                        }
                    }
                    let _0x5aa6f2 = _0x3c5c93 === -0x1 ? _0x345616 : _0x345616['slice'](_0x3c5c93 + 0x3, _0x345616['length']);
                    if (_0x5aa6f2['includes']('【') && _0x5aa6f2['includes']('】')) _0x5aa6f2 = 琵琶行浔阳(_0x5aa6f2, '【', '】');
                    for (let _0x3ad301 = 0x0; _0x3ad301 < ka_count; _0x3ad301++) executeCommand('/tell "' + _0x5aa6f2 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x44f0db = 0x0; _0x44f0db < ka_count; _0x44f0db++) executeCommand('/tell @a[' + _0x3e0129['map'](_0x284cc8 => 'name="' + getEntityName(_0x284cc8) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x4b7dad['y'] < as_minY && !_0x39e557) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x13bafb = 0x0; _0x13bafb < 0x9; _0x13bafb++) {
                        const _0x4366c6 = getInventory(self_id, _0x13bafb);
                        if (_0x4366c6['isBlock'] || as_water && _0x4366c6['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x13bafb);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x332ad4 of 眉信手续续(_0x50967c, {
                            'x': _0x50967c['x'],
                            'y': _0x50967c['y'] + as_minY * 0x5,
                            'z': _0x50967c['z']
                        }, 0x1, true)) {
                        const _0x2be43a = getBlock(_0x332ad4['x'], _0x332ad4['y'], _0x332ad4['z']);
                        if (_0x2be43a['namespace'] != 'minecraft:air') continue;
                        const _0xd51938 = getBlock(_0x332ad4['x'], _0x332ad4['y'] - 0x1, _0x332ad4['z']);
                        if (_0xd51938['namespace'] === 'minecraft:air' || _0xd51938['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x332ad4['x'], _0x332ad4['y'], _0x332ad4['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
                    if (as_fake) setBlock(self_pos['x'], _0x50967c['y'] + _0x4b7dad['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);
                    else buildBlock(self_id, _0x50967c['x'], _0x50967c['y'] + _0x4b7dad['y'] * 3.1, _0x50967c['z'], 0x0);
                }
                if (as_near) {
                    let _0xa5595e = {};
                    let _0x1e7433 = Infinity;
                    for (let _0x2919f1 = -0x5; _0x2919f1 <= 0x5; _0x2919f1++) {
                        for (let _0x18826b = -0x1; _0x18826b <= 0x0; _0x18826b++) {
                            for (let _0x3d806f = -0x5; _0x3d806f <= 0x5; _0x3d806f++) {
                                let _0x260a69 = Math['sqrt'](_0x2919f1 * _0x2919f1 + _0x3d806f * _0x3d806f + _0x18826b * _0x18826b);
                                let _0x260dc4 = {
                                    'x': _0x2919f1 + _0x50967c['x'],
                                    'y': _0x18826b + _0x50967c['y'],
                                    'z': _0x3d806f + _0x50967c['z']
                                };
                                const _0x96c2bf = getBlock(_0x260dc4['x'], _0x260dc4['y'], _0x260dc4['z']);
                                if (_0x96c2bf['namespace'] === 'minecraft:air') continue;
                                if (_0x260a69 < _0x1e7433) {
                                    _0x1e7433 = _0x260a69;
                                    _0xa5595e = _0x260dc4;
                                }
                            }
                        }
                    }
                    if (_0xa5595e != {}) {
                        let _0x2308f2 = {
                            'x': _0x50967c['x'],
                            'y': _0x50967c['y'] - 0x1 + _0x4b7dad['y'] * 0x3,
                            'z': _0x50967c['z']
                        };
                        let _0x3b98bb = 眉信手续续(_0xa5595e, _0x2308f2, 0.8, true);
                        _0x3b98bb['forEach'](_0x3b8e1b => {
                            const _0x36903a = getBlock(_0x3b8e1b['x'], _0x3b8e1b['y'], _0x3b8e1b['z']);
                            if (_0x36903a['namespace'] === 'minecraft:air') 事今漂沦憔(Math['round'](_0x3b8e1b['x']), Math['floor'](_0x3b8e1b['y']), Math['round'](_0x3b8e1b['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0x3e7e5d = getEntityRot(at_lists[0x0]);
                let _0x2ae288 = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x211e7 = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x211e7 : _0x3e7e5d['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x12b3da = 忽闻水上琵(-aai_len, _0x2ae288, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x12b3da['x'], _0x2ae288['y'] + 1.83 + aai_h, _0x12b3da['z']);
                if (modes['sur_mode'] === 0x1) 二年恬然自(_0x12b3da['x'], _0x2ae288['y'] + 1.83 + aai_h, _0x12b3da['z']);
                _0x53825f['push'](归客不发寻(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0xc6a4fc = [];
                if (sp_target) _0xc6a4fc = at_lists;
                if (sp_all) _0xc6a4fc = getPlayerList();
                if (sp_entity) _0xc6a4fc = getEntityList();
                if (sp_posList['length'] > 0x0) _0xc6a4fc = sp_posList;
                let _0x2a16f4 = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x39cf93 = 0x0; _0x39cf93 < sp_vec; _0x39cf93++) {
                    if (sp_data['length'] > 0x0) _0x2a16f4 = sp_data['shift']()['sounds'];
                    if (_0x2a16f4['length'] > 0x0) {
                        _0x1fd00e: for (let _0x5e916d of _0x2a16f4) {
                            let _0xd90773 = _0x5e916d['sound'];
                            let _0x1df62d = _0x5e916d['level'];
                            if (sp_large) {
                                const _0x37041a = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x56e3a9 = -_0x37041a; _0x56e3a9 <= _0x37041a; _0x56e3a9 += sp_space) {
                                    for (let _0x1ad4a4 = -_0x37041a; _0x1ad4a4 <= _0x37041a; _0x1ad4a4 += sp_space) {
                                        sendSound(Number(_0xd90773), self_pos['x'] + _0x56e3a9, self_pos['y'] + sp_y, self_pos['z'] + _0x1ad4a4, Number(_0x1df62d));
                                    }
                                }
                                continue _0x1fd00e;
                            }
                            _0xc6a4fc['forEach'](_0x3a62c4 => {
                                if (typeof _0x3a62c4 != 'string')
                                    for (let _0xf0c744 = 0x0; _0xf0c744 < sp_count; _0xf0c744++) sendSound(Number(_0xd90773), _0x3a62c4['x'], _0x3a62c4['y'] + sp_y, _0x3a62c4['z'], Number(_0x1df62d));
                                else {
                                    if (_0x3a62c4 === self_id && sp_exclude) return;
                                    const _0x411dfe = getPos(_0x3a62c4);
                                    let _0x395ad3 = 忽闻水上琵(sp_distance, _0x411dfe, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x558035 = 0x0; _0x558035 < sp_count; _0x558035++) sendSound(Number(_0xd90773), _0x395ad3['x'], _0x395ad3['y'] + sp_y, _0x395ad3['z'], Number(_0x1df62d));
                                }
                            });
                        }
                    }
                }
                if (sp_data['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
            }
            if (_0x20840f['current'] < 0x6) _0x53825f['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x20840f['current']) <= ad_min) {
                const _0x33c556 = modes['ad_mode'];
                if (_0x33c556 === 0x2) removeEntity(self_id);
                if (_0x33c556 === 0x0 || _0x33c556 === 0x1) executeCommand(_0x33c556 === 0x0 ? '/hub' : '/again');
                if (_0x33c556 === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x588041['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x33c556 === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x33c556 === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x33c556 === 0x6) leaveWorld();
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
                const _0x31bcda = getBlock(_0x50967c['x'], _0x50967c['y'] - 0x1, _0x50967c['z']);
                if (_0x31bcda['namespace'] === 'minecraft:flowing_water' || _0x31bcda['namespace'] === 'minecraft:water' || _0x31bcda['namespace'] === 'minecraft:flowing_lava' || _0x31bcda['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x4b7dad['x'], 0x0, _0x4b7dad['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x480059 => {
                    let _0x11df37 = 京都声问其(_0x480059);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x11df37 + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x480059) + '_' + _0x480059 + '.txt', _0x11df37);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0x1a58c4 = at_lists[0x0];
                const _0x5b4adc = 声暗问弹者(self_id, _0x1a58c4);
                const _0x344e97 = 声思似诉平(self_id, _0x1a58c4, aa_fov, 0x0);
                if (_0x5b4adc <= aa_range && _0x344e97 || aa_throw) {
                    const _0x5ecd1d = 马客在船举(aa_min, aa_max);
                    let _0x2d57bb = 弦弦掩抑声(self_id, _0x1a58c4, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x18ee12 = 弦弦掩抑声(self_id, _0x1a58c4, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x2d57bb <= 0xb4 && _0x2d57bb >= -0xb4 && _0x18ee12 <= 0x5a && _0x18ee12 >= -0x5a) {
                        let _0x41e97a = _0x2d57bb >= 0x0 ? -_0x5ecd1d : _0x5ecd1d;
                        let _0x19272e = _0x18ee12 >= 0x0 ? _0x5ecd1d : -_0x5ecd1d;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x2d57bb) < _0x5ecd1d || Math['abs'](_0x18ee12) < _0x5ecd1d)) {
                            _0x41e97a = -_0x2d57bb / ((0x28 - _0x5ecd1d) / 0x2);
                            _0x19272e = -_0x18ee12 / ((0x28 - _0x5ecd1d) / 1.125);
                        }
                        const _0x3e965b = 声思似诉平(self_id, _0x1a58c4, aa_prec * 0x2, 0x1);
                        const _0x320363 = 声思似诉平(self_id, _0x1a58c4, aa_prec * 0x4, 0x2);
                        if (!_0x3e965b) setLocalPlayerTurn(0x0, _0x41e97a);
                        if (!_0x320363 && !aa_throw || !isSimilar(_0x18ee12, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x19272e, 0x0);
                    }
                    _0x53825f['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x1a58c4), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0x27a55a => {
                    const _0x35f27a = _0x27a55a;
                    const _0x5c640d = getPos(_0x35f27a);
                    if (!_0x35f27a || !findEntity(_0x35f27a)) return;
                    if (声暗问弹者(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x5d233d = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x4b7dad;
                        for (let _0x5e4f27 = 0x0; _0x5e4f27 < ia_move; _0x5e4f27++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x5c640d['x'] + _0x5d233d, _0x5c640d['y'], _0x5c640d['z'] + _0x5d233d, 0x1);
                                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                                    'pos': {
                                        'x': _0x5c640d['x'] + _0x5d233d,
                                        'y': _0x5c640d['y'] + ia_offset / 0x5,
                                        'z': _0x5c640d['z'] + _0x5d233d
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x5c640d['x'], _0x5c640d['y'], _0x5c640d['z']);
                            if (modes['ia_mode'] === 0x1) silentMove(_0x5c640d['x'] + _0x5d233d, _0x5c640d['y'] + ia_offset / 0x5, _0x5c640d['z'] + _0x5d233d);
                            if (modes['ia_mode'] === 0x2) movePlayer(_0x5c640d['x'] + _0x5d233d, _0x5c640d['y'] + ia_offset / 0x5, _0x5c640d['z'] + _0x5d233d);
                        }
                        if (ia_jump) playerJump();
                        for (let _0xab0b4a = 0x0; _0xab0b4a < ia_attack; _0xab0b4a++) 江头夜送客(_0x35f27a, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) 初为霓裳后();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) 初为霓裳后();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x53825f['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 添酒回灯重(ia_targets['map'](_0x8520a4 => getEntityName(_0x8520a4))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 慢捻抹复挑(_0x50967c);
            if (AutoVoid) {
                const _0x49b2ac = 面转轴拨弦(self_id);
                const _0x47cedc = getBlock(_0x49b2ac['x'], _0x50967c['y'] - 0x1, _0x49b2ac['z']);
                for (let _0x498215 = -0x2; _0x498215 < 0x3; _0x498215++) {
                    for (let _0x510709 = -0x2; _0x510709 < 0x3; _0x510709++) {
                        const _0x5a0efa = getBlock(_0x49b2ac['x'] + _0x498215, _0x50967c['y'] - 0x1, _0x49b2ac['z'] + _0x510709);
                        if (_0x5a0efa['namespace'] === 'minecraft:air' && _0x4b7dad['y'] < -0.0783 && _0x4b7dad['y'] > -0.0785 && _0x47cedc['namespace'] != 'minecraft:air') {
                            const _0x2dae82 = -弦弦掩抑声(self_id, {
                                'x': _0x49b2ac['x'] + _0x498215,
                                'y': self_pos['y'],
                                'z': _0x49b2ac['z'] - _0x510709
                            }, 'yaw_pos');
                            const _0x11ca84 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x2dae82,
                                'pitch': 0x0
                            });
                            setMotion(_0x11ca84['x'] - self_pos['x'], _0x4b7dad['y'], _0x11ca84['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x477e91 = getEntityList();
                _0x477e91['forEach'](_0x44a921 => {
                    if ((getEntityTypeId(_0x44a921) === 0x400055 || getEntityTypeId(_0x44a921) === 0x400056 || getEntityTypeId(_0x44a921) === 0xc00050) && 声暗问弹者(_0x44a921, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x44a921);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0x5dc5cc = 弦弦掩抑声(getPos(_0x44a921), self_id, 'yaw_pos');
                            const _0x44c278 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x5dc5cc,
                                'pitch': _0x588041['pitch']
                            });
                            setMotion(_0x44c278['x'] - self_pos['x'], _0x4b7dad['y'], _0x44c278['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 江头夜送客(_0x44a921, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x2fe443 = getPlayerList();
                let _0x2b4135 = [];
                let _0x2f2a99 = false;
                let _0x4c857e = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x3eb24c = 0x1; _0x3eb24c <= tr_len; _0x3eb24c += tr_dens / 0xa) {
                    let _0x2ca4f8 = 少小时欢乐(_0x3eb24c, _0x588041['pitch'], tr_speed, tr_g)['data'];
                    let _0x4fe3be = 忽闻水上琵(_0x3eb24c, self_pos, {
                        'yaw': _0x588041['yaw'],
                        'pitch': 0x0
                    });
                    let _0x340d8e = getBlock(_0x4fe3be['x'], _0x4fe3be['y'] + _0x2ca4f8, _0x4fe3be['z']);
                    if (tr_show || !_0x2f2a99) {
                        _0x2fe443['forEach'](_0x45cfeb => {
                            if (!_0x2f2a99) {
                                let _0x28e650 = getPos(_0x45cfeb);
                                let _0x5ef064 = {
                                    'x': _0x4fe3be['x'],
                                    'y': _0x4fe3be['y'] + _0x2ca4f8,
                                    'z': _0x4fe3be['z']
                                };
                                let _0x6df5a1 = getEntitySize(_0x45cfeb);
                                if (_0x5ef064['x'] <= _0x28e650['x'] + _0x6df5a1['x'] / 0x2 && _0x5ef064['x'] >= _0x28e650['x'] - _0x6df5a1['x'] / 0x2 && _0x5ef064['y'] <= _0x28e650['y'] + _0x6df5a1['y'] / 0x2 && _0x5ef064['y'] >= _0x28e650['y'] - _0x6df5a1['y'] / 0x2 && _0x5ef064['z'] <= _0x28e650['z'] + _0x6df5a1['x'] / 0x2 && _0x5ef064['z'] >= _0x28e650['z'] - _0x6df5a1['x'] / 0x2) {
                                    _0x53825f['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0x45cfeb), '§r'));
                                    _0x2f2a99 = true;
                                }
                            }
                        });
                    }
                    if (_0x340d8e['namespace'] != 'minecraft:air' || _0x2f2a99) {
                        _0x4c857e = _0x4fe3be;
                        if (modes['tr_mode'] === 0x1 && _0x340d8e['namespace'] != 'minecraft:air') {
                            for (let _0x2aeb2a = 0x0; _0x2aeb2a <= 0x14; _0x2aeb2a += 0x2) 妇遂命酒使(tr_type, _0x4c857e['x'], _0x4c857e['y'] + _0x2ca4f8 + _0x2aeb2a / 0xa, _0x4c857e['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0x3a8cfe = getDistance(_0x4c857e, self_pos);
                    for (let _0x297f7f = 0x1; _0x297f7f <= _0x3a8cfe; _0x297f7f += tr_dens / 0xa) {
                        let _0x569f5e = 少小时欢乐(_0x297f7f, _0x588041['pitch'], tr_speed, tr_g)['data'];
                        let _0x2411d9 = (tr_offset - 0xa) / 0xa;
                        let _0x9e0407 = _0x588041['yaw'] + 0x5a;
                        if (_0x9e0407 > 0xb4) _0x9e0407 = _0x9e0407 - 0x168;
                        if (_0x9e0407 < -0xb4) _0x9e0407 = _0x9e0407 + 0x168;
                        let _0x27ea03 = 忽闻水上琵(_0x2411d9, self_pos, {
                            'yaw': _0x9e0407,
                            'pitch': 0x0
                        });
                        let _0x1354c7 = 忽闻水上琵(_0x297f7f, _0x27ea03, {
                            'yaw': _0x588041['yaw'] - Math['atan'](_0x2411d9 / _0x3a8cfe) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x175ec2 = getBlock(_0x1354c7['x'], _0x1354c7['y'] + _0x569f5e, _0x1354c7['z']);
                        if (modes['tr_mode'] === 0x0 && _0x175ec2['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x1354c7['x'], _0x1354c7['y'] + _0x569f5e + 0.5, _0x1354c7['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x318346 = 面转轴拨弦(self_id);
                for (let _0x50ab45 = -fa_range; _0x50ab45 < fa_range; _0x50ab45++) {
                    for (let _0x54323e = -fa_range; _0x54323e < fa_range; _0x54323e++) {
                        const _0x541020 = getBlock(_0x318346['x'] + _0x50ab45, _0x50967c['y'] - 0x1, _0x318346['z'] + _0x54323e);
                        const _0x43512c = getBlock(_0x318346['x'] + _0x50ab45, _0x50967c['y'], _0x318346['z'] + _0x54323e);
                        if ((_0x541020['namespace'] === 'minecraft:dirt' || _0x541020['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x318346['x'] + _0x50ab45, _0x50967c['y'] - 0x1, _0x318346['z'] + _0x54323e, 0x1);
                        if (_0x541020['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x318346['x'] + _0x50ab45, _0x50967c['y'] - 0x1, _0x318346['z'] + _0x54323e, 0x1);
                        if (_0x43512c['aux'] === 0x7 && (_0x43512c['namespace'] === 'minecraft:beetroot' || _0x43512c['namespace'] === 'minecraft:wheat' || _0x43512c['namespace'] === 'minecraft:carrots' || _0x43512c['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x318346['x'] + _0x50ab45, _0x50967c['y'], _0x318346['z'] + _0x54323e, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x43512c['aux'] <= 0x6 && (_0x43512c['namespace'] === 'minecraft:beetroot' || _0x43512c['namespace'] === 'minecraft:wheat' || _0x43512c['namespace'] === 'minecraft:carrots' || _0x43512c['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x318346['x'] + _0x50ab45, _0x50967c['y'], _0x318346['z'] + _0x54323e, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x3e2b12 = 0x0; _0x3e2b12 < am_count; _0x3e2b12++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x50967c['x'],
                                'y': _0x50967c['y'] - 0x1,
                                'z': _0x50967c['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x381689 = JSON['parse'](抱琵琶半遮(nx_paths + '/PlayerAction.json'));
                    _0x381689['forEach'](_0x323b94 => {
                        if (_0x323b94['delay'] % am_tick === 0x0) {
                            for (let _0x37345e = 0x0; _0x37345e < _0x323b94['count']; _0x37345e++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x323b94['value'],
                                'type': Number(_0x323b94['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x3349d9 = 0x0; _0x3349d9 < pam_count; _0x3349d9++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x50967c['x'],
                        'y': _0x50967c['y'] - 0x1,
                        'z': _0x50967c['z']
                    },
                    'inputs': pam_array['map'](_0x47ce21 => Number(_0x47ce21)),
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
            if (AutoJump && _0x39e557) setMotion(_0x4b7dad['x'], aj_y / 0x64, _0x4b7dad['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x433f11 => {
                if (bc_packet) silentMove(_0x433f11['x'], _0x433f11['y'], _0x433f11['z']);
                buildBlock(self_id, _0x433f11['x'], _0x433f11['y'], _0x433f11['z'], 0x0);
            });
            if (NoFall && _0x4b7dad['y'] < -nf_max && !_0x39e557) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x39e557 && _0x39e557)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x3a5bb4 = 0x0; _0x3a5bb4 < 0x168; _0x3a5bb4 += do_density / 0xa) {
                    const _0x518439 = do_l_axis * Math['cos'](_0x3a5bb4 * Math['PI'] / 0xb4);
                    const _0x492c10 = do_s_axis * Math['sin'](_0x3a5bb4 * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x518439, do_pos[0x1], do_pos[0x2] + _0x492c10, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x53825f['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x59f337 = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x59f337['x']), Math['round'](_0x59f337['y'] - 0x1), Math['round'](_0x59f337['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Health', 'Health: ' + 弹说尽心中(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(at_lists['map'](_0x235020 => getEntityName(_0x235020))), '§r'));
            if (ShowInfo) {
                const _0x15ec24 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x39962f = Math['sqrt'](_0x4b7dad['x'] * _0x4b7dad['x'] + _0x4b7dad['z'] * _0x4b7dad['z']);
                if (show_speed) _0x53825f['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x39962f['toFixed'](0x2) + 'm/s 移动速度: ' + _0x464255['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x4f1165['toFixed'](0x2) + 'm/s 坐标速度:' + _0x442080['toFixed'](0x2) + 'm/s 能力速度:' + _0x15ec24['current']['toFixed'](0x2) + ('\n移动值: [' + _0x4b7dad['x']['toFixed'](0x2) + ', ' + _0x4b7dad['y']['toFixed'](0x2) + ', ' + _0x4b7dad['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x53825f['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x50967c['x'] + ', Y:' + _0x50967c['y'] + ', Z:' + _0x50967c['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x4729c3 = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x8801dc = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x53825f['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x4729c3['emerald'] + ', 钻石:' + _0x4729c3['diamond'] + ', 金锭:' + _0x4729c3['gold'] + ', 铁锭:' + _0x4729c3['iron'] + '\n下界之心:' + _0x4729c3['star'] + ', 经验:' + _0x8801dc, '§r'));
                }
                if (show_target_dis && at_lists['length'] > 0x0) _0x53825f['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x53825f['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x3d86d7['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
                if (show_kill_num) _0x53825f['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x53825f['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x53825f['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x53825f['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x53825f['push'](归客不发寻(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x53825f['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x20840f['current'] + ', 最大值:' + _0x20840f['max'] + ', 最小值:' + _0x20840f['min'], '§r'));
                if (show_detail_item) _0x53825f['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x58d191 = new Date();
                    const _0x20d2ff = _0x58d191['getFullYear']();
                    const _0x53d672 = ('0' + (_0x58d191['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x5cd0d9 = ('0' + _0x58d191['getDate']())['slice'](-0x2);
                    const _0x4b754b = ('0' + _0x58d191['getHours']())['slice'](-0x2);
                    const _0x262e83 = ('0' + _0x58d191['getMinutes']())['slice'](-0x2);
                    const _0x286d30 = ('0' + _0x58d191['getSeconds']())['slice'](-0x2);
                    const _0x2788d7 = _0x20d2ff + '-' + _0x53d672 + '-' + _0x5cd0d9 + ' ' + _0x4b754b + ':' + _0x262e83 + ':' + _0x286d30;
                    _0x53825f['push'](归客不发寻(0x1, 'RealTime', _0x2788d7, '§r'));
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
                let _0xb3d863 = _0x588041['yaw'];
                _0xb3d863 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0xb3d863 >= 0xb4) _0xb3d863 -= 0x168;
                if (_0xb3d863 <= -0xb4) _0xb3d863 += 0x168;
                let _0x5b000f = (_0x39e557 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x1c29c6 = (_0x39e557 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x13580f = {};
                if (rc_surround && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0xe35bdd = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x14c86a = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x1598a0 = _0x14c86a > -0x5a || _0x14c86a < 0x5a ? rc_speed : -rc_speed;
                    let _0x2fc7b1 = _0xb3d863 > -0x5a || _0xb3d863 < 0x5a ? rc_speed : -rc_speed;
                    let _0x44ef02 = rc_relative ? _0x1598a0 : _0x2fc7b1;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0xe35bdd -= _0x44ef02 * 0x5 : _0xe35bdd += _0x44ef02 * 0x5;
                    if (_0xe35bdd > 0xb4) _0xe35bdd -= 0x168;
                    if (_0xe35bdd < -0xb4) _0xe35bdd += 0x168;
                    let _0x4effff = 忽闻水上琵(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0xe35bdd,
                        'pitch': 0x0
                    });
                    let _0x17e3b5 = 弦弦掩抑声(_0x4effff, self_id, 'yaw_pos');
                    _0x13580f = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x5b000f : _0x1c29c6 : rc_speed / 0x8, self_pos, {
                        'yaw': _0x17e3b5,
                        'pitch': 0x0
                    });
                } else _0x13580f = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x5b000f : _0x1c29c6 : rc_speed / 0x8, self_pos, {
                    'yaw': _0xb3d863,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x13580f['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x13580f['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0xb3d863 + sca_yaw);
                    else 于穆曹二善(_0x588041['pitch'], _0xb3d863 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0x13580f = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x588041);
                        setMotion(_0x13580f['x'] - self_pos['x'], _0x13580f['y'] - self_pos['y'], _0x13580f['z'] - self_pos['z']);
                    } else {
                        const _0x26033b = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0x11df35 = getCameraRotation();
                        rc_roll += (_0x26033b ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0x13580f['x'] - self_pos['x'], rc_bhop && _0x39e557 || rc_ahop && _0x4b7dad['y'] < -0.4 ? rc_y : _0x4b7dad['y'], _0x13580f['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0x13580f['x'], self_pos['y'], _0x13580f['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined') {
                const _0x108c7a = getEntityMotion(self_id);
                const _0x5a1a91 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x108c7a['x'], rc_y, _0x108c7a['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x5a1a91['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x5a1a91['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x108c7a['x'], -rc_y, _0x108c7a['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x5a1a91['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x5a1a91['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x53825f['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
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
                    let _0x3b9ebe = ticks * mt_speed / 0x14 % 0x5dc0;
                    setWorldData({
                        'time': _0x3b9ebe
                    });
                } else if (mt_custom === 0x19) {
                    let _0x3a534a = 0x0;
                    if (modes['mt_time'] === 0x0) _0x3a534a = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x3a534a = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x3a534a = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x3a534a = 0x30d4;
                    setWorldData({
                        'time': _0x3a534a
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
                        showTipMessage('§bProtoHax §r| ' + _0x442080['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x194176, _0x1bf9d4) => globalThis['current_poem'] = JSON['parse'](_0x1bf9d4)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x442080['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x2fb131 = 0x0; _0x2fb131 < mine_speed; _0x2fb131++) {
                    let _0x39952e = mine_list['shift']();
                    if (typeof _0x39952e != 'object' || _0x39952e['length'] === 0x0) continue;
                    const _0x456540 = getBlock(_0x39952e[0x0], _0x39952e[0x1], _0x39952e[0x2]);
                    if (_0x456540['namespace'] != 'minecraft:air' && _0x456540['namespace'] === mine_name) {
                        destroyBlock(self_id, _0x39952e[0x0], _0x39952e[0x1], _0x39952e[0x2], 0x0);
                        mine_current++;
                    }
                }
                _0x53825f['push'](归客不发寻(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x39e557) setMotion(0x0, 0x0, 0x0);
            if (_0x53825f['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x53825f['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x53825f['join']('\n'));
                if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x53825f['join'](' | '));
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
            prev_heal = _0x20840f['current'];
            prev_ground = _0x39e557;
            prev_itemCount = self_itemCount;
        } catch (_0x580770) {
            clientMessage(_0x580770['stack']);
        }
        addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0x2f1733 = bn_list['length'] - 0x1; _0x2f1733 >= 0x0; _0x2f1733--) {
                let _0x53b1b9 = bn_list[_0x2f1733];
                _0x53b1b9['x'] -= _0x53b1b9['speed'];
                if (_0x53b1b9['x'] < 0x0) {
                    bn_list['splice'](_0x2f1733, 0x1);
                    removeText(_0x53b1b9['id']);
                } else updateTextPosition(_0x53b1b9['id'], _0x53b1b9['x'], _0x53b1b9['y']);
            }
        }
        if (Derp) {
            var _0x1a4af4 = getEntityRot(self_id);
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
            if (!dp_head) dp_pitch = _0x1a4af4['pitch'];
            if (!dp_body) dp_yaw = _0x1a4af4['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x4fb288 = getCameraRotation();
            const _0x36e12d = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x54e463 = sca_move ? 弦弦掩抑声(_0x36e12d, self_id, 'yaw_pos') : _0x4fb288['yaw'] > 0x0 ? 0xb4 - _0x4fb288['yaw'] : -0xb4 - _0x4fb288['yaw'];
            于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x54e463 + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0x48c752 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
            let _0x5e7392 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
            于穆曹二善(_0x48c752, _0x5e7392);
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

    function onExecuteCommandEvent(_0x19396f) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x19396f, '§r');
        const _0x5482f9 = _0x19396f['split'](' ');
        if (_0x5482f9[0x0] === '/set' && _0x5482f9[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x5482f9[0x2]),
                'y': Number(_0x5482f9[0x3]),
                'z': Number(_0x5482f9[0x4])
            };
            if (_0x5482f9[0x5]) nx_goalSpeed = Number(_0x5482f9[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x5482f9[0x0] === '/set' && _0x5482f9[0x1] === 'default' && _0x5482f9[0x2] === 'config') {
            if (_0x5482f9[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (抱琵琶半遮(nx_cfgs + '/' + _0x5482f9[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x5482f9[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x5482f9[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x5482f9[0x3], '§r');
            return true;
        }
        if (_0x5482f9[0x0] === '/target') {
            if (_0x5482f9[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x5482f9[0x1] === 'player') at_lists = getPlayerList();
            if (_0x5482f9[0x1] === 'all') at_lists = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x5482f9[0x0] === '/cleaner') {
            if (_0x5482f9[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x5482f9[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x5482f9[0x2]));
        }
        if (_0x5482f9[0x0] === '/bind') {
            if (_0x5482f9[0x1] === 'RunAway') {
                if (typeof globalThis[_0x5482f9[0x2]] == 'undefined' && typeof nx_funcid[_0x5482f9[0x2]] == 'undefined' || typeof globalThis[_0x5482f9[0x3]] == 'undefined' && typeof nx_funcid[_0x5482f9[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x2c0040 = typeof globalThis[_0x5482f9[0x3]] !== 'undefined';
                nx_raBinds[_0x5482f9[0x2]] = {
                    'module': _0x5482f9[0x3],
                    'isNX': _0x2c0040
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x5482f9[0x2] + ' 与 ' + _0x5482f9[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x5482f9[0x1] === 'key' && typeof globalThis[_0x5482f9[0x2]] !== 'undefined') {
                nx_isBind = _0x5482f9[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x5482f9[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x5482f9[0x1]] === 'undefined') nx_binds[_0x5482f9[0x1]] = [];
            if (typeof globalThis[_0x5482f9[0x2]] !== 'undefined' && typeof globalThis[_0x5482f9[0x1]] !== 'undefined') {
                nx_binds[_0x5482f9[0x1]]['push'](_0x5482f9[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x5482f9[0x1] + ' 与 ' + _0x5482f9[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x5482f9[0x0] === '/unbind') {
            if (_0x5482f9[0x1] === 'key' && typeof globalThis[_0x5482f9[0x2]] !== 'undefined') {
                for (let _0x48d0ca in nx_keys) {
                    if (nx_keys[_0x48d0ca] === _0x5482f9[0x2]) {
                        delete nx_keys[_0x48d0ca];
                        break;
                    }
                }
                nx_isBind = _0x5482f9[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x5482f9[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x5482f9[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x5482f9[0x1]] !== 'undefined' && _0x5482f9[0x2] === 'all') {
                delete nx_binds[_0x5482f9[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x5482f9[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x5482f9[0x1] === 'all') {
                nx_binds = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x5482f9[0x2]] !== 'undefined' && typeof globalThis[_0x5482f9[0x1]] !== 'undefined') {
                nx_binds[_0x5482f9[0x1]]['splice'](nx_binds[_0x5482f9[0x1]]['indexOf'](_0x5482f9[0x2]), 0x1);
                if (nx_binds[_0x5482f9[0x1]]['length'] === 0x0) delete nx_binds[_0x5482f9[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x5482f9[0x1] + ' 和 ' + _0x5482f9[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x5482f9[0x0] === '/nx') {
            if (typeof globalThis[_0x5482f9[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x5482f9[0x1] === 'num') globalThis[_0x5482f9[0x2]] = Number(_0x5482f9[0x3]);
            if (_0x5482f9[0x1] === 'bool') globalThis[_0x5482f9[0x2]] = Boolean(_0x5482f9[0x3]);
            if (_0x5482f9[0x1] === 'str') globalThis[_0x5482f9[0x2]] = _0x5482f9[0x3];
            if (_0x5482f9[0x1] === 'arr') globalThis[_0x5482f9[0x2]] = 相近邀相见(_0x5482f9[0x3]);
            if (_0x5482f9[0x1] === 'obj') globalThis[_0x5482f9[0x2]] = JSON['parse'](_0x5482f9[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x5482f9[0x2]] + ' => ' + _0x5482f9[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0xbac15b, _0x10c4c7, _0x2cf352) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0xbac15b + ' §e结果:§r' + _0x2cf352 + ' §e数据:§r' + JSON['stringify'](_0x10c4c7, null, 0x2), '§r');
        if (!_0x2cf352) return true;
    }

    function onCallModuleEvent(_0x1b3fc4) {
        if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x1b3fc4, null, 0x4), '§r');
        try {
            if (typeof _0x1b3fc4 !== 'undefined' && typeof _0x1b3fc4['fun'] !== 'undefined' && typeof nx_raBinds[_0x1b3fc4['fun']] !== 'undefined') {
                const _0x13366d = nx_raBinds[_0x1b3fc4['fun']]['module'];
                if (!nx_raBinds[_0x1b3fc4['fun']]['isNX']) callModule(nx_funcid[_0x13366d], JSON['stringify']({
                    'value': _0x1b3fc4['value']
                }));
                else 委身为贾人(_0x13366d, _0x1b3fc4['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (typeof _0x1b3fc4['name'] === 'undefined') {
                if (Rocker && typeof _0x1b3fc4['angle'] !== 'undefined') rc_angles = _0x1b3fc4;
                if (Rocker && typeof _0x1b3fc4['direction'] !== 'undefined') rc_directions = _0x1b3fc4;
                if (Rocker && typeof _0x1b3fc4['operation'] !== 'undefined') rc_uds = _0x1b3fc4;
                return;
            }
            if (!_0x1b3fc4['name']['includes']('NoveXare') && _0x1b3fc4['fun'] != 'fun_ride_flying') return;
            if (typeof _0x1b3fc4['SauthLogin'] !== 'undefined') {
                Sauths = _0x1b3fc4['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x1b3fc4['CustomBanTip'] !== 'undefined') bantip = _0x1b3fc4['CustomBanTip'];
            if (typeof _0x1b3fc4['key'] !== 'undefined') {
                const _0x293520 = _0x1b3fc4['key'];
                if (_0x293520 === 'ItemEditor') {
                    const _0x5580fe = getEntityCarriedItem(self_id);
                    const _0x1496f8 = 司马明年秋(_0x5580fe, 'Damage:', 's');
                    const _0x11b7fd = 司马明年秋(_0x5580fe, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x5580fe['replace']('Damage:' + _0x1496f8 + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x5580fe['replace']('{Damage:' + _0x11b7fd, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x5580fe['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x293520 === 'EditBackGround') {
                    const _0x1c2162 = 'loginVideoNew.mp4';
                    const _0x31148c = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x1c2162)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x31148c + _0x1c2162);
                    file_copy(getResource() + '/' + _0x1c2162, _0x31148c + _0x1c2162);
                    showToast('已复制文件');
                }
                if (_0x293520 === 'BJDTp') {
                    let _0x1a1ddf = getPlayerList();
                    let _0x349cb1 = _0x1a1ddf['length'] > 0x0 ? _0x1a1ddf['map'](_0xed2065 => ({
                        'text': getEntityName(_0xed2065) + '\n距离: ' + 声暗问弹者(self_id, _0xed2065)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x649644 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x349cb1
                    };
                    const _0x58c49d = JSON['stringify'](_0x649644);
                    addForm(_0x58c49d, function(_0x292654) {
                        if (_0x1a1ddf['length'] > 0x0 && _0x292654 >= 0x0) {
                            var _0x51bb21 = _0x1a1ddf[_0x292654];
                            var _0x3aea28 = getPos(_0x51bb21);
                            setPos(_0x3aea28['x'], _0x3aea28['y'] + 1.8, _0x3aea28['z']);
                            buildBlock(self_id, _0x3aea28['x'], _0x3aea28['y'], _0x3aea28['z'], 0x1);
                        }
                    });
                }
                if (_0x293520 === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x39d377 = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x39d377 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x39d377);
                    }
                    exit();
                    gc();
                }
                if (_0x293520 === 'DropInv') {
                    for (let _0x5a592a = 0x0; _0x5a592a < 0x24; _0x5a592a++) {
                        const _0x3e3871 = getInventory(self_id, _0x5a592a);
                        if (_0x3e3871['namespace'] === 'minecraft:air') continue;
                        if (_0x3e3871['count'] < 0x1) continue;
                        dl_list['push'](_0x5a592a);
                    }
                }
                if (_0x293520 === 'LookTP') {
                    let _0x3ee6a3 = {};
                    for (let _0x5cd12f = 0x0; _0x5cd12f < 0x1f4; _0x5cd12f++) {
                        _0x3ee6a3 = 忽闻水上琵(_0x5cd12f, getPos(self_id), getEntityRot(self_id));
                        const _0x3821b9 = getBlock(_0x3ee6a3['x'], _0x3ee6a3['y'], _0x3ee6a3['z']);
                        if (_0x3821b9['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x3ee6a3 != {}) {
                        const _0x260a6d = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 二年恬然自(_0x3ee6a3['x'], _0x3ee6a3['y'] + 1.53, _0x3ee6a3['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x3ee6a3['x'], _0x3ee6a3['y'] + 1.53, _0x3ee6a3['z']);
                    }
                }
                if (_0x293520 === 'OpenChest') {
                    let _0x1860bb = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x54312a = [];
                    let _0x1b6040 = 0x0;
                    let _0x48a04b = 面转轴拨弦(self_id);
                    const _0x4fdf53 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x3e88d3 = 'shulker_box';
                    for (let _0x2d66d8 = -0x7; _0x2d66d8 < 0x7; _0x2d66d8++) {
                        for (let _0x58b084 = -0x7; _0x58b084 < 0x7; _0x58b084++) {
                            for (let _0x5e6d42 = -0x7; _0x5e6d42 < 0x7; _0x5e6d42++) {
                                const _0x1a4493 = _0x2d66d8 + _0x48a04b['x'];
                                const _0x443361 = _0x58b084 + _0x48a04b['y'];
                                const _0x1092ce = _0x5e6d42 + _0x48a04b['z'];
                                const _0x11a9b5 = getBlock(_0x1a4493, _0x443361, _0x1092ce);
                                if (_0x4fdf53['includes'](_0x11a9b5['namespace']) || _0x11a9b5['namespace']['includes'](_0x3e88d3)) {
                                    const _0x788891 = getBlock(_0x1a4493, _0x443361 + 0x1, _0x1092ce);
                                    _0x1860bb['buttons'][_0x1b6040] = {
                                        'text': '命名空间: ' + _0x11a9b5['namespace'] + '\n坐标:   ' + (_0x788891['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x54312a[_0x1b6040] = {
                                        'x': _0x1a4493,
                                        'y': _0x443361,
                                        'z': _0x1092ce
                                    };
                                    _0x1b6040++;
                                }
                            }
                        }
                    }
                    if (_0x1b6040 === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x1860bb), function(_0x4f97e9) {
                        const _0x239c09 = _0x54312a[_0x4f97e9];
                        buildBlock(self_id, _0x239c09['x'], _0x239c09['y'], _0x239c09['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x293520 === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x293520 === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x293520 === 'rpc_repeat') {
                    for (let _0x2ee5f5 = 0x0; _0x2ee5f5 < rpc_repeat_times; _0x2ee5f5++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0x293520 === 'AttackSelf_one') 江头夜送客(self_id, Swing);
                if (_0x293520 === 'RemoveSelf') removeEntity(self_id);
                if (_0x293520 === 'QuitGame') leaveWorld();
                if (_0x293520 === 'sl_delete') setData('sauths', '');
                if (_0x293520 === 'dc_delete') dc_pos = [];
                if (_0x293520 === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x10ea25, _0x59b8e5, _0x450a86, _0x8e04ab) {
                        var _0x4ba524 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0xe0e019 = 0x0;
                        var _0x2a9f48 = getResource();
                        var _0x372cc0 = JSON['parse'](File['read'](_0x2a9f48 + '/ui/ui_definition.json'))['ui']['map'](_0x2468d5 => ({
                            'name': _0x2468d5 + '.json',
                            'path': _0x2a9f48 + '/ui/' + _0x2468d5 + '.json'
                        }));
                        for (var _0x5ea352 of _0x372cc0) {
                            if (!_0x5ea352['name']['includes']('NoveXare')) continue;
                            var _0x5c1fd1 = JSON['parse'](File['read'](_0x5ea352['path']));
                            if (typeof _0x5c1fd1['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x5751d1 of _0x5c1fd1['items'][0x0]['items']) {
                                if (typeof _0x5751d1['name'] === 'undefined' || typeof _0x5751d1['key'] === 'undefined') continue;
                                if (_0x450a86 && _0x5751d1['type'] != 'Switch') continue;
                                if (_0x8e04ab && _0x5751d1['type'] == 'Switch') continue;
                                if (!_0x59b8e5 && (_0x5751d1['name'] === _0x10ea25 || _0x5751d1['key'] === _0x10ea25) || _0x59b8e5 && (_0x5751d1['name']['includes'](_0x10ea25) || _0x5751d1['key']['includes'](_0x10ea25))) {
                                    _0x4ba524['items'][0x0]['items'][_0xe0e019] = _0x5751d1;
                                    _0xe0e019++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x10ea25, JSON['stringify'](_0x4ba524));
                        showMenu('search_' + _0x10ea25);
                    });
                }
                if (_0x293520 === 'sp_clear') sp_posList = [];
                if (_0x293520 === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0xcc099b) {
                        var _0x36d7b9 = _0xcc099b['split'](',');
                        sp_posList['push']({
                            'x': Number(_0x36d7b9[0x0]),
                            'y': Number(_0x36d7b9[0x1]),
                            'z': Number(_0x36d7b9[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0x293520 === 'sp_load') {
                    const _0x329836 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x329836, function(_0x13963c) {
                        var _0x45a687 = File['read'](_0x13963c);
                        if (_0x45a687 != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0x45a687);
                            sp_file = sp_loop ? _0x45a687 : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x293520 === 'sp_select') {
                    const _0x4478cb = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x3ba1da = file_list(getResource() + '/sounds/NoveXare');
                    _0x3ba1da['sort']((_0x544de0, _0x369581) => _0x544de0['name']['localeCompare'](_0x369581['name']));
                    for (let _0x2b2cfd = 0x0; _0x2b2cfd < _0x3ba1da['length']; _0x2b2cfd++) {
                        _0x4478cb['buttons'][_0x2b2cfd] = {
                            'text': _0x3ba1da[_0x2b2cfd]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x5392f4 = JSON['stringify'](_0x4478cb);
                    addForm(_0x5392f4, function(_0x29cff4) {
                        if (_0x3ba1da['length'] > 0x0 && _0x29cff4 >= 0x0) {
                            const _0x81e61e = File['read'](_0x3ba1da[_0x29cff4]['path']);
                            if (_0x81e61e != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0x81e61e);
                                sp_file = sp_loop ? _0x81e61e : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x293520 === 'save_config') {
                    const _0x4d6590 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x4d6590, function(_0x56256f, _0x1a28bb) {
                        File['write'](nx_cfgs + '/' + _0x56256f + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0x1a28bb) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x293520 === 'load_config') {
                    const _0x9dc302 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x381b83 = file_list(nx_cfgs);
                    _0x381b83['sort']((_0x4643e6, _0x55ce86) => _0x4643e6['name']['localeCompare'](_0x55ce86['name']));
                    for (let _0x147993 = 0x0; _0x147993 < _0x381b83['length']; _0x147993++) {
                        _0x9dc302['buttons'][_0x147993] = {
                            'text': '§e' + _0x381b83[_0x147993]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x5d7333 = JSON['stringify'](_0x9dc302);
                    addForm(_0x5d7333, function(_0x4cbff9) {
                        if (_0x381b83['length'] > 0x0 && _0x4cbff9 >= 0x0) {
                            var _0x3b46a1 = JSON['parse'](抱琵琶半遮(_0x381b83[_0x4cbff9]['path']));
                            var _0x24575a = 0x0;
                            nx_binds = _0x3b46a1['binds'];
                            nx_keys = _0x3b46a1['key_binds'];
                            nx_raBinds = _0x3b46a1['nx_raBinds'];
                            for (var _0x6a99f1 in _0x3b46a1) {
                                _0x24575a++;
                                if (_0x6a99f1['includes']('_mode') && _0x1b3fc4['index'] && _0x1b3fc4['index'] > 0x0) modes[_0x6a99f1] = _0x3b46a1[_0x6a99f1];
                                if (_0x6a99f1 != 'nx_raBinds' && _0x6a99f1 != 'key_binds' && _0x6a99f1 != 'binds' && _0x6a99f1 != 'name') 委身为贾人(_0x6a99f1, _0x3b46a1[_0x6a99f1]);
                            }
                            nx_cfg = _0x3b46a1;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x3b46a1['name'] + '的配置，共' + _0x24575a + '条配置', '§r');
                        }
                    });
                }
                if (_0x293520 === 'rpc_select') {
                    const _0x2c75eb = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x3bb3d5 = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0xbad788 = 0x0; _0xbad788 < _0x3bb3d5['length']; _0xbad788++) {
                        _0x2c75eb['buttons'][_0xbad788] = {
                            'text': (_0x3bb3d5[_0xbad788]['type'] === 'Send' ? '§a' : '§c') + _0x3bb3d5[_0xbad788]['packet_str']
                        };
                    }
                    const _0xfd4521 = JSON['stringify'](_0x2c75eb);
                    addForm(_0xfd4521, function(_0x4119ee) {
                        prev_rpc = {
                            'id': _0x3bb3d5[_0x4119ee]['id'],
                            'data': _0x3bb3d5[_0x4119ee]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x293520 === 'cw_range') {
                    let _0x5ebf14 = getPlayerList();
                    let _0xad96a2 = 0x0;
                    for (let _0x5965fa of _0x5ebf14) {
                        const _0x11d8dd = getPos(_0x5965fa);
                        const _0x3367cb = getDistance(_0x11d8dd, getPos(self_id));
                        if (!at_whileLists['includes'](_0x5965fa) && _0x3367cb < cw_size && _0x5965fa != self_id) {
                            at_whileLists['push'](_0x5965fa);
                            _0xad96a2++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0xad96a2 + '个玩家到白名单', '§r');
                }
                if (_0x293520 === 'KickSelf')
                    for (let _0x296c29 = 0x0; _0x296c29 < 0x3e8; _0x296c29++) 江头夜送客(self_id, Swing);
                if (_0x293520 === 'bc_delete') ac_pos = [];
                if (_0x293520 === 'cm_depart') departCamera();
                if (_0x293520 === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x293520 === 'cm_reset') resetCamera();
                if (_0x293520 === 'cm_lock') lockCamera();
                if (_0x293520 === 'ou_recover') otherId = null;
                if (_0x293520 === 'delete_chest') ca_chest_pos = [];
                if (_0x293520 === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x293520 === 'fm_place') fm_pos = self_pos;
                if (_0x293520 && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x293520)) 开宴千呼万(_0x293520, globalThis[_0x293520]);
                if (_0x293520 === 'cw_add' || _0x293520 === 'ct_add' || _0x293520 === 'ct_add') 茫茫江浸月(_0x293520 === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0x293520 === 'fw_target' || _0x293520 === 'fc_target') 茫茫江浸月(_0x293520 === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x293520 === 'cm_target') 茫茫江浸月('cm_target', 0x0);
                if (_0x293520 === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x293520 === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x293520 === 'cw_remove') at_whileLists = [];
                if (_0x293520 === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x5e07f1 => ({
                        'name': getEntityName(_0x5e07f1),
                        'id': _0x5e07f1,
                        'namespace': getEntityNamespace(_0x5e07f1)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x5844af => ({
                        'name': getEntityName(_0x5844af),
                        'id': _0x5844af,
                        'namespace': getEntityNamespace(_0x5844af)
                    }))
                }));
                if (_0x293520 === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x293520 === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(nx_paths + '/WorldInfo.json')));
                if (_0x293520 === 'Rusher') {
                    const _0x24ba14 = getCameraRotation();
                    let _0x2b56cd = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x24ba14['yaw'] > 0x0 ? 0xb4 - _0x24ba14['yaw'] : -0xb4 - _0x24ba14['yaw'],
                        'pitch': -_0x24ba14['pitch']
                    });
                    setMotion(_0x2b56cd['x'] - self_pos['x'], _0x2b56cd['y'] - self_pos['y'], _0x2b56cd['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x53af64 in _0x1b3fc4) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x53af64)) continue;
                if (typeof _0x1b3fc4['index'] !== 'undefined' && modes[_0x53af64] !== _0x1b3fc4['index']) {
                    modes[_0x53af64] = _0x1b3fc4['index'] - 0x1;
                    nx_cfg[_0x53af64] = _0x1b3fc4['index'] - 0x1;
                    归客不发寻(0x0, _0x53af64['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x1b3fc4[_0x53af64], '§r');
                    if (_0x53af64 === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, JSON['stringify']({
                            'array_list': true,
                            'array_offset_x': fst_x / 0x5,
                            'array_offset_y': fst_y / 0x5
                        }));
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x53af64 === 'Criticals') {
                    if (_0x1b3fc4[_0x53af64]) playerJump();
                    else {
                        cc_status = false;
                        callModule(0x2c, JSON['stringify']({
                            'value': false,
                            'no_move_check': true,
                            'no_fall_check': true
                        }));
                    }
                }
                if (_0x53af64 === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x1b3fc4[_0x53af64],
                    'count': ka_packet
                }));
                if (_0x53af64 === 'RandomArrayList' && !_0x1b3fc4[_0x53af64]) {
                    for (let _0x598b7e = 0x0; _0x598b7e < ral_num; _0x598b7e++) addCustomArrayList('RandomArrayList' + _0x598b7e, '', '', false);
                }
                if (_0x53af64 === 'Rocker') callModule(0x39, JSON['stringify']({
                    'value': modes['rc_mode'] === 0x1 && _0x1b3fc4[_0x53af64],
                    'fov': 0x96
                }));
                if (_0x53af64 === 'FakeMove') {
                    if (_0x1b3fc4[_0x53af64]) fmo_pos = getPos(self_id);
                    else if (!_0x1b3fc4[_0x53af64]) 欲语迟移船(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x3cf531 = {
                        'enable': !_0x1b3fc4[_0x53af64],
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
                    callModule(0x7, JSON['stringify'](_0x3cf531));
                    setTimeout(() => 欲语迟移船(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x53af64 === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x1b3fc4[_0x53af64],
                    'count': cs_packet
                }));
                if (_0x53af64 === 'ShowNowTime' && !_0x1b3fc4[_0x53af64]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0x53af64 === 'RandomFunc') {
                    const _0x14554a = Object['keys'](globalThis);
                    let _0x13c762 = [];
                    for (let _0x2c6465 of _0x14554a) {
                        if (typeof globalThis[_0x2c6465] === 'boolean') _0x13c762['push'](_0x2c6465);
                    }
                    const _0x2c6a85 = _0x13c762[马客在船举(0x0, _0x13c762['length'] - 0x1)];
                    委身为贾人(_0x2c6a85, _0x1b3fc4[_0x53af64]);
                }
                if (_0x53af64 === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x1b3fc4[_0x53af64],
                    'count': ia_packet
                }));
                if (_0x53af64 === 'FlashBack') sb();
                if (_0x53af64 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x1b3fc4[_0x53af64]) + '}');
                if (_0x53af64 === 'PyRpcManager' && rpc_store && !_0x1b3fc4[_0x53af64]) {
                    rpc_temp['forEach'](_0x3b624b => sendRpc(_0x3b624b['id'], _0x3b624b['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x53af64 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x1b3fc4[_0x53af64],
                    'defaultValue': false
                });
                if (_0x53af64 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x1b3fc4[_0x53af64],
                    'defaultValue': false
                });
                if (_0x53af64 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x1b3fc4[_0x53af64],
                    'defaultValue': false
                });
                if (_0x53af64 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x1b3fc4[_0x53af64],
                    'defaultValue': false
                });
                if (_0x53af64 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x1b3fc4[_0x53af64],
                    'defaultValue': false
                });
                if (_0x53af64 === 'FreeCam') {
                    let _0x4a1d2c = {
                        'value': _0x1b3fc4[_0x53af64],
                        'noclip': _0x1b3fc4[_0x53af64],
                        'flying': _0x1b3fc4[_0x53af64]
                    };
                    callModule(0x1, JSON['stringify'](_0x4a1d2c));
                    if (_0x1b3fc4[_0x53af64]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x53af64 === 'FakeMotion' && fm_auto && _0x1b3fc4[_0x53af64]) fm_pos = getPos(self_id);
                if (_0x53af64 === 'ShadowBoomer' && _0x1b3fc4[_0x53af64]) sb_pos = getPos(self_id);
                if (_0x53af64 === 'AvoidAttack' && _0x1b3fc4[_0x53af64]) aa_pos = getPos(self_id);
                else if (_0x53af64 === 'AvoidAttack' && !_0x1b3fc4[_0x53af64]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x53af64 === 'NoClip') {
                    let _0xc8704c = {
                        'value': _0x1b3fc4[_0x53af64],
                        'noclip': _0x1b3fc4[_0x53af64],
                        'flying': _0x1b3fc4[_0x53af64]
                    };
                    if (nc_depart && _0x1b3fc4[_0x53af64]) departCamera();
                    if (nc_depart && !_0x1b3fc4[_0x53af64]) resetCamera();
                    if (nc_bypass) callModule(0x2c, JSON['stringify']({
                        'no_move_check': _0x1b3fc4[_0x53af64],
                        'no_fall_check': _0x1b3fc4[_0x53af64],
                        'value': _0x1b3fc4[_0x53af64]
                    }));
                    callModule(0x1, JSON['stringify'](_0xc8704c));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x53af64 === 'BalanceTimer') {
                    callModule(0x25, JSON['stringify']({
                        'value': _0x1b3fc4[_0x53af64]
                    }));
                    BalanceTimer_st = !_0x1b3fc4[_0x53af64];
                }
                if (_0x53af64 === 'IQBoost') {
                    const _0x49184a = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x23fa6d = 马客在船举(0x0, _0x49184a['length'] - 0x1);
                    sendChatMessage('!' + _0x49184a[_0x23fa6d]);
                }
                if (_0x53af64 === 'AutoTarget' && !_0x1b3fc4[_0x53af64]) at_lists = [];
                if (_0x53af64 === 'SoundPlayer' && !_0x1b3fc4[_0x53af64]) sp_data = [];
                if (_0x53af64 === 'FightBot' && !_0x1b3fc4[_0x53af64]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x53af64 === 'ShowSendPacket' && !_0x1b3fc4[_0x53af64] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x564465 = '';
                    for (let _0x2de6c7 in PacketTmp['send']) _0x564465 += '名称:' + _0x2de6c7 + '，ID:' + PacketTmp['send'][_0x2de6c7]['id'] + '，发送数量:' + PacketTmp['send'][_0x2de6c7]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x564465, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x53af64 === 'ShowReceivePacket' && !_0x1b3fc4[_0x53af64] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x56a9d7 = '';
                    for (let _0x56aeb2 in PacketTmp['receive']) _0x56a9d7 += '名称:' + _0x56aeb2 + '，ID:' + PacketTmp['receive'][_0x56aeb2]['id'] + '，接受数量:' + PacketTmp['receive'][_0x56aeb2]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x56a9d7, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x53af64 === 'Scaffold' && sca_keep && _0x1b3fc4[_0x53af64]) sca_current = 0x0;
                if (_0x53af64 === 'SmartInv' && _0x1b3fc4[_0x53af64]) {
                    da_slot = 0x23;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x53af64 === 'sp_loop' && !_0x1b3fc4[_0x53af64]) sp_file = null;
                if (_0x53af64 === 'NoLiquid' && _0x1b3fc4[_0x53af64]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x53af64 === 'NoLiquid' && !_0x1b3fc4[_0x53af64]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0x1b3fc4[_0x53af64] === 'boolean' || typeof _0x1b3fc4[_0x53af64] === 'number') {
                    if (typeof _0x1b3fc4[_0x53af64] === 'boolean') {
                        委身为贾人(_0x53af64, _0x1b3fc4[_0x53af64]);
                        return;
                    }
                    nx_cfg[_0x53af64] = _0x1b3fc4[_0x53af64];
                    globalThis[_0x53af64] = _0x1b3fc4[_0x53af64];
                }
            }
        } catch (_0x4d6f0d) {
            clientMessage(_0x4d6f0d['stack']);
        }
    }

    function onPlayerAttackEvent(_0x43ddbd, _0x411b10) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x411b10;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x411b10));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x411b10));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x411b10));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x411b10));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x411b10;
            else {
                if (te_all) getEntityList()['forEach'](_0x17187b => {
                    if (_0x17187b != te_target) 嘈如急雨小(_0x17187b, te_target, te_two);
                });
                else 嘈如急雨小(_0x411b10, te_target, te_two);
                te_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x411b10);
            else startRidingEntity(_0x411b10);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x411b10;
            else {
                setEntityNBT(_0x411b10, getEntityNBT(te_target));
                enc_target = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x411b10));
        if (!attack_list['includes'](_0x411b10)) attack_list['push'](_0x411b10);
        if (_0x411b10 === null || attack_list['every'](_0x26ba12 => last_attack_target['includes'](_0x26ba12))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x411b10;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x411b10;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x411b10;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x411b10), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x219c34 = getPos(_0x411b10);
            const _0x28a14d = getEntitySize(_0x411b10);
            for (let _0x424cec = 0x0; _0x424cec < 马客在船举(ap_count, ap_count + 0x14); _0x424cec++) 妇遂命酒使(ap_type, _0x219c34['x'] + 马客在船举(-_0x28a14d['x'] * 马客在船举(0x7, 0xa), _0x28a14d['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x219c34['y'] + 马客在船举(-_0x28a14d['y'] * 0x9, _0x28a14d['y'] * 0x2) / 0xa, _0x219c34['z'] + 马客在船举(-_0x28a14d['x'] * 马客在船举(0x7, 0xa), _0x28a14d['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x30fa76 = 声暗问弹者(self_id, _0x411b10);
            callModule(0x4b, JSON['stringify']({
                'value': true,
                'line_width': 0.25,
                'mode': 0x2,
                'distance': _0x30fa76 * 1.01
            }));
            setTimeout(() => callModule(0x4b, JSON['stringify']({
                'value': false
            })), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x2896f8 = 京都声问其(_0x411b10);
            归客不发寻(0x0, 'Info', '\n' + _0x2896f8 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x411b10) + '_' + _0x411b10 + '.txt', _0x2896f8);
            return true;
        }
        if (SmartWeapon) {
            let _0x5aad31 = [];
            for (let _0x294d69 = 0x0; _0x294d69 < 0x9; _0x294d69++) _0x5aad31['push']({
                'slot': _0x294d69,
                'd': 十六言命曰(self_id, _0x294d69)
            });
            _0x5aad31['sort']((_0x30c914, _0x580897) => _0x580897['d'] - _0x30c914['d']);
            let _0x977051 = _0x5aad31[0x0];
            if (_0x977051['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x977051['slot']);
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x411b10)) at_lists['push'](_0x411b10);
            else at_lists['splice'](at_lists['indexOf'](_0x411b10), 0x1);
            归客不发寻(0x0, !at_lists['includes'](_0x411b10) ? 'delTarget' : 'addTarget', getEntityName(_0x411b10), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x346eae = getPos(_0x411b10);
            const _0x4267f0 = 弦弦掩抑声(self_pos, _0x346eae, 'yaw_pos');
            const _0xacc84c = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
                'yaw': _0x4267f0,
                'pitch': 0x0
            });
            setEntityMotion(_0x411b10, _0xacc84c['x'] - self_pos['x'], ckb_y, _0xacc84c['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x411b10)) at_whileLists['push'](_0x411b10);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x411b10), 0x1);
            归客不发寻(0x0, !at_whileLists['includes'](_0x411b10) ? 'delTarget' : 'addTarget', getEntityName(_0x411b10), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 唤始出来犹(getEntityName(_0x411b10));
            归客不发寻(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) {
            th_target = _0x411b10;
            th_tick = 0x0;
        }
        if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x3681ba) {
        if (_0x3681ba === '') return true;
        if (ReplaceMsg) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x3681ba);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x3681ba);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x3681ba);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x3681ba);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x3681ba);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x3681ba);
            return true;
        }
        if (ChatSuffix && !_0x3681ba['includes'](cs_text)) {
            sendChatMessage(_0x3681ba + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x4b36b3, _0x42a6aa) {
        if (ChatManager && (_0x4b36b3 != getEntityName(self_id) && cm_other || _0x4b36b3 == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x3077ee = 0x0; _0x3077ee < cm_repeat_times; _0x3077ee++) sendChatMessage(_0x42a6aa);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x4b36b3 + ', 消息:' + _0x42a6aa, '§r');
        if (ChatManager) return cm_black['some'](_0x2d32ea => _0x42a6aa['includes'](_0x2d32ea));
        if (ChatManager && _0x42a6aa['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x510c10 = Math['round'](马客在船举(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x5b7a11 = createText(bn_format['replaceAll']('[名字]', _0x4b36b3)['replaceAll']('[消息]', _0x42a6aa), 'Center', nx_screen['screenWidth'], _0x510c10);
            if (_0x5b7a11 > -0x1) bn_list['push']({
                'id': _0x5b7a11,
                'speed': 马客在船举(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x510c10
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x4eaa61) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x1fd4eb = getEntityMotion(_0x4eaa61);
            const _0x1b9406 = getCameraRotation();
            const _0x2e7840 = 酒欲饮无管(_0x1fd4eb, self_pos, 0x14);
            const _0x59754d = 忽闻水上琵(lj_len / 0x4, self_pos, {
                'yaw': _0x1b9406['yaw'] > 0x0 ? 0xb4 - _0x1b9406['yaw'] : -0xb4 - _0x1b9406['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x59754d['x'] - self_pos['x'], lj_y, _0x59754d['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x20cd3c, _0x51995) {
        if (PyRpcManager && rpc_rec) {
            const _0x31c7d3 = new Uint8Array(_0x51995);
            const _0x1920b1 = Array['from'](_0x31c7d3, _0x38aebb => _0x38aebb['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x202476 = 左迁九江郡(_0x51995)['toLowerCase']();
            let _0x2d7f4b = false;
            let _0x113088 = rpc_tipWhite['some'](_0x1821c1 => _0x202476['includes'](_0x1821c1));
            if (!_0x2d7f4b) _0x2d7f4b = rpc_black['some'](_0x3c76ea => _0x202476['includes'](_0x3c76ea));
            if (!_0x2d7f4b) _0x2d7f4b = rpc_recBlack['some'](_0x355ba5 => _0x202476['includes'](_0x355ba5));
            if (rpc_white['some'](_0x2856c1 => _0x202476['includes'](_0x2856c1))) _0x2d7f4b = false;
            if (rpc_recWhite['some'](_0x3b231d => _0x202476['includes'](_0x3b231d))) _0x2d7f4b = false;
            if (rpc_record && (_0x113088 && rpc_exclude || !_0x113088)) {
                const _0x4b2bde = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x107468 = JSON['parse'](抱琵琶半遮(_0x4b2bde));
                _0x107468[_0x107468['length']] = {
                    'packet_hex': _0x1920b1,
                    'packet_format': 六幺大弦嘈(_0x1920b1),
                    'packet_str': 左迁九江郡(_0x51995),
                    'packet_bin': _0x31c7d3,
                    'time': Date['now'](),
                    'id': _0x20cd3c,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x2d7f4b
                };
                File['write'](_0x4b2bde, JSON['stringify'](_0x107468, null, 0x4));
            }
            let _0x2da68f = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x2da68f = 左迁九江郡(_0x51995);
            if (modes['rpc_mode'] === 0x1) _0x2da68f = _0x1920b1;
            if (modes['rpc_mode'] === 0x2) _0x2da68f = 六幺大弦嘈(_0x1920b1);
            if (modes['rpc_mode'] === 0x3) _0x2da68f = JSON['stringify'](_0x51995);
            const _0x31c25f = _0x2d7f4b ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x113088 && (rpc_showDisintercept && !_0x2d7f4b || rpc_showIntercept && _0x2d7f4b)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x20cd3c + '\n' : '') + _0x2da68f + _0x31c25f, '§r');
            return _0x2d7f4b;
        }
    }

    function onPyRpcSendEvent(_0x1f25e6, _0x4ec78e) {
        if (PyRpcManager && rpc_send) {
            const _0xaa0395 = new Uint8Array(_0x4ec78e);
            const _0x5cb0a0 = Array['from'](_0xaa0395, _0x314d94 => _0x314d94['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x5d3c8d = 左迁九江郡(_0x4ec78e)['toLowerCase']();
            let _0x2a18a1 = false;
            let _0x217551 = rpc_tipWhite['some'](_0x15da25 => _0x5d3c8d['includes'](_0x15da25));
            if (!_0x2a18a1) _0x2a18a1 = rpc_black['some'](_0x4931b2 => _0x5d3c8d['includes'](_0x4931b2));
            if (!_0x2a18a1) _0x2a18a1 = rpc_sendBlack['some'](_0x15b918 => _0x5d3c8d['includes'](_0x15b918));
            if (rpc_white['some'](_0x4d7766 => _0x5d3c8d['includes'](_0x4d7766))) _0x2a18a1 = true;
            if (rpc_sendWhite['some'](_0x19ad4c => _0x5d3c8d['includes'](_0x19ad4c))) _0x2a18a1 = false;
            if (!_0x217551) prev_rpc = {
                'id': _0x1f25e6,
                'data': _0xaa0395
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x1f25e6,
                'data': _0xaa0395
            });
            if (rpc_intercept) _0x2a18a1 = true;
            if (rpc_record && (_0x217551 && rpc_exclude || !_0x217551)) {
                const _0xd58137 = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x42d8a9 = JSON['parse'](抱琵琶半遮(_0xd58137));
                _0x42d8a9[_0x42d8a9['length']] = {
                    'packet_hex': _0x5cb0a0,
                    'packet_format': 六幺大弦嘈(_0x5cb0a0),
                    'packet_str': 左迁九江郡(_0x4ec78e),
                    'packet_bin': _0xaa0395,
                    'time': Date['now'](),
                    'id': _0x1f25e6,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x2a18a1
                };
                File['write'](_0xd58137, JSON['stringify'](_0x42d8a9, null, 0x4));
            }
            let _0x2fa6b4 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x2fa6b4 = 左迁九江郡(_0x4ec78e);
            if (modes['rpc_mode'] === 0x1) _0x2fa6b4 = _0x5cb0a0;
            if (modes['rpc_mode'] === 0x2) _0x2fa6b4 = 六幺大弦嘈(_0x5cb0a0);
            if (modes['rpc_mode'] === 0x3) _0x2fa6b4 = JSON['stringify'](_0x4ec78e);
            for (let _0x40d687 of rpc_config) {
                if (typeof _0x40d687 === 'object') {
                    if (_0x40d687['match_mode'] === 0x0 && _0x2fa6b4['includes'](_0x40d687['packet'])) _0x2fa6b4 = remarks;
                    if (_0x40d687['match_mode'] === 0x1 && _0x2fa6b4['includes'] === _0x40d687['packet']) _0x2fa6b4 = remarks;
                } else continue;
            }
            let _0x349d6d = _0x2a18a1 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x217551 && (rpc_showDisintercept && !_0x2a18a1 || rpc_showIntercept && _0x2a18a1)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x1f25e6 + '\n' : '') + _0x2fa6b4 + _0x349d6d, '§r');
            return _0x2a18a1;
        }
    }

    function onEntityBehaviorEvent(_0x3cff1b, _0x24cc25, _0x23b193) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x3cff1b + ' 实体昵称:' + getEntityName(_0x3cff1b) + ' 行为ID:' + _0x24cc25 + ' 行为数据:' + _0x23b193, '§r');
        if (_0x24cc25 === 0x27 && _0x3cff1b === av_id) av_id = null;
        if (_0x24cc25 === 0x3 && attack_list['includes'](_0x3cff1b)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x5dabfb = 0x0; _0x5dabfb < 0x32; _0x5dabfb++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x3cff1b) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x3cff1b), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x24cc25 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x3cff1b);
        if (_0x24cc25 === 0x2 && attack_list['includes'](_0x3cff1b)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x24cc25 === 0x4 && _0x3cff1b != self_id)) {
            let _0x16ac72 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x3cff1b;
            if (声暗问弹者(_0x16ac72, self_id) < fb_range) 江头夜送客(_0x3cff1b, Swing);
            fb_ishurt = false;
        }
        if (_0x24cc25 === 0x2 && _0x3cff1b === self_id) {
            let _0x5c493f = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x23b193, '§r');
            if (HurtJump) setMotion(_0x5c493f['x'], hj_height, _0x5c493f['z']);
            if (AntiKB) {
                let _0x13399a = akb_hor / 0x64;
                let _0x45a203 = akb_y / 0x64;
                setMotion(_0x5c493f['x'] - _0x13399a * _0x5c493f['x'], _0x5c493f['y'] - _0x45a203 * _0x5c493f['y'], _0x5c493f['z'] - _0x13399a * _0x5c493f['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x23b193 == 0x2) fb_ishurt = true;
            if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
        }
        if (_0x24cc25 === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x43dcd5, _0x28189e, _0x18995b, _0x197a98, _0x5855c7) {
        const _0x4d3ec6 = getCarried(_0x43dcd5);
        const _0x502415 = getBlock(_0x28189e, _0x18995b, _0x197a98);
        if (_0x502415['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x502415['namespace'] + ', §rID:' + _0x502415['id'] + ', 方块选择面:' + _0x5855c7 + ', §r特殊值:' + _0x502415['aux'] + '\n手持:' + _0x4d3ec6['name'] + '-[' + _0x4d3ec6['namespace'] + '], 特殊值:' + _0x4d3ec6['aux'] + '\n坐标:[' + _0x28189e + ', ' + _0x18995b + ', ' + _0x197a98 + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x28189e + ' ' + _0x18995b + ' ' + _0x197a98 + '的' + _0x502415['namespace']);
        if (Miner && (_0x502415['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x27d382 => _0x502415['namespace']['includes'](_0x27d382))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x155f28 => !_0x502415['namespace']['includes'](_0x155f28)))) {
                mine_destroy = true;
                mine_name = _0x502415['namespace'];
            }
            if (mine_destroy && mine_name != _0x502415['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x502415['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x28189e,
                    'y': _0x18995b,
                    'z': _0x197a98
                }) <= mine_distance && mine_destroy) {
                let _0x3cdc83 = [
                    [_0x28189e + 0x1, _0x18995b, _0x197a98],
                    [_0x28189e - 0x1, _0x18995b, _0x197a98],
                    [_0x28189e, _0x18995b, _0x197a98 + 0x1],
                    [_0x28189e, _0x18995b, _0x197a98 - 0x1],
                    [_0x28189e, _0x18995b + 0x1, _0x197a98],
                    [_0x28189e, _0x18995b - 0x1, _0x197a98]
                ];
                for (p of _0x3cdc83) {
                    const _0x27ef0f = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x27ef0f['namespace'] != 'minecraft:air' && _0x502415['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x3c6139 = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x3c6139['levelName'] + ' ，难度:' + _0x3c6139['difficulty'] + ' 游戏模式:' + _0x3c6139['gameType'] + ' 游戏时间:' + _0x3c6139['time'] + ' 随机刻速度:' + _0x3c6139['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x163999, _0x508f54, _0x48e10a, _0xf61a2e, _0x471e53) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
        const _0x10123c = getCarried(_0x163999);
        const _0xd9e0ca = getBlock(_0x508f54, _0x48e10a, _0xf61a2e);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x10123c['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0xd9e0ca['namespace'] + ', §rID:' + _0xd9e0ca['id'] + ', 方块选择面:' + _0x471e53 + ', §r特殊值:' + _0xd9e0ca['aux'] + '\n手持:' + _0x10123c['name'] + '-[' + _0x10123c['namespace'] + '], 特殊值:' + _0x10123c['aux'] + '\n坐标:[' + _0x508f54 + ', ' + _0x48e10a + ', ' + _0xf61a2e + ']', '§r');
        if (ClickTP) 欲语迟移船(_0x508f54, _0x48e10a + 0x2, _0xf61a2e);
        const _0xeb25fa = ChestAura && ca_rot && _0xd9e0ca['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x163999) || ClickRot;
        if (_0xeb25fa) {
            let _0x24c30c = {
                'x': _0x508f54,
                'y': _0x48e10a,
                'z': _0xf61a2e
            };
            const _0x2d6913 = 酒欲饮无管(getEntityMotion(_0x163999), getPos(_0x163999), 0x14);
            let _0x5a1801 = 弦弦掩抑声(_0x2d6913, _0x24c30c, 'pitch_pos');
            let _0x14ce2f = 弦弦掩抑声(_0x2d6913, _0x24c30c, 'yaw_pos');
            于穆曹二善(_0x5a1801, _0x14ce2f);
        }
        if (GetCommand && _0xd9e0ca['namespace']['includes']('command_block')) {
            let _0x778c36 = getBlockEntityNBT(_0x508f54, _0x48e10a, _0xf61a2e);
            let _0x3ecac6 = 琵琶行浔阳(_0x778c36, 'Command:"', '",Cu');
            let _0x199628 = 琵琶行浔阳(_0x778c36, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0xd755a3 = 琵琶行浔阳(_0x778c36, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0x508f54 + ' ' + _0x48e10a + ' ' + _0xf61a2e + ']\n指令:' + _0x3ecac6 + '\n是否自动:' + _0x199628 + '\n执行延迟:' + _0xd755a3 + 'Tick', '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x508f54, _0x48e10a, _0xf61a2e];
            else {
                setBlockEntityData(_0x508f54, _0x48e10a, _0xf61a2e, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x5265bc = [
                [_0x508f54, _0x48e10a - 0x1, _0xf61a2e],
                [_0x508f54, _0x48e10a + 0x1, _0xf61a2e],
                [_0x508f54, _0x48e10a, _0xf61a2e - 0x1],
                [_0x508f54, _0x48e10a, _0xf61a2e + 0x1],
                [_0x508f54 - 0x1, _0x48e10a, _0xf61a2e],
                [_0x508f54 + 0x1, _0x48e10a, _0xf61a2e]
            ];
            setBlock(_0x5265bc[_0x471e53][0x0], _0x5265bc[_0x471e53][0x1], _0x5265bc[_0x471e53][0x2], _0x10123c['namespace'], _0x10123c['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x508f54, _0x48e10a, _0xf61a2e, _0x10123c['namespace'], _0x10123c['aux']);
        if (ClickDestroy && !AutoDestroy) 慢捻抹复挑({
            'x': _0x508f54,
            'y': _0x48e10a,
            'z': _0xf61a2e
        });
        if (AutoBed && _0xd9e0ca['namespace'] === 'minecraft:bed' && !ab_running) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x333aa4 = [
                [_0x508f54 + 0x1, _0x48e10a, _0xf61a2e],
                [_0x508f54 - 0x1, _0x48e10a, _0xf61a2e],
                [_0x508f54, _0x48e10a, _0xf61a2e + 0x1],
                [_0x508f54, _0x48e10a, _0xf61a2e - 0x1],
                [_0x508f54, _0x48e10a + 0x1, _0xf61a2e]
            ];
            ab_running = true;
            for (let _0x832999 of _0x333aa4) {
                const _0x56b2ba = getBlock(_0x832999[0x0], _0x832999[0x1], _0x832999[0x2]);
                if (_0x56b2ba['namespace'] === 'minecraft:air') 事今漂沦憔(_0x832999[0x0], _0x832999[0x1], _0x832999[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x10123c['namespace']['includes']('_sword') || _0x10123c['namespace']['includes']('_pickaxe') || _0x10123c['namespace']['includes']('_axe') || _0x10123c['namespace']['includes']('shears'))) {
            if (bk_origin) {
                callModule(0xf, JSON['stringify']({
                    'value': true
                }));
                setTimeout(() => callModule(0xf, JSON['stringify']({
                    'value': false
                })), bk_last * 0x32);
                return true;
            }
            const _0x5d3741 = Math['round'](bk_range);
            _0x260aad: for (let _0x44e4cf = -_0x5d3741; _0x44e4cf <= _0x5d3741; _0x44e4cf++) {
                for (let _0xdb5423 = -_0x5d3741; _0xdb5423 < _0x5d3741; _0xdb5423++) {
                    for (let _0x5e37de = -_0x5d3741; _0x5e37de <= _0x5d3741; _0x5e37de++) {
                        let _0x32c81f = _0x508f54 + _0x44e4cf;
                        let _0x208868 = _0x48e10a + _0xdb5423;
                        let _0x108ddf = _0xf61a2e + _0x5e37de;
                        let _0x1d4351 = getBlock(_0x32c81f, _0x208868, _0x108ddf);
                        if (bk_bed && _0x1d4351['namespace'] === 'minecraft:bed' || bk_chest && _0x1d4351['namespace'] === 'minecraft:chest') {
                            let _0x2ef64b = getBlock(_0x32c81f, _0x208868 + 0x1, _0x108ddf);
                            if (_0x2ef64b['namespace'] != 'minecraft:air' && bk_up) _0x208868 += 0x1;
                            if (bk_tool && _0x2ef64b['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x163999, 枫叶荻花秋(_0x163999, '_pickaxe'));
                            if (bk_tool && _0x2ef64b['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x163999, 枫叶荻花秋(_0x163999, '_axe'));
                            if (bk_tool && _0x2ef64b['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x163999, 枫叶荻花秋(_0x163999, 'shears'));
                            bk_pos = {
                                'ex': _0x32c81f,
                                'ey': _0x208868,
                                'ez': _0x108ddf
                            };
                            bk_timer = 0x0;
                            break _0x260aad;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x508f54,
                'y': _0x48e10a,
                'z': _0xf61a2e
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0x508f54 + ', ' + _0x48e10a + ', ' + _0xf61a2e + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x4bddfe = getCameraRotation();
            for (let _0x1b3b7b = 0x0; _0x1b3b7b < fb_len + 0x1; _0x1b3b7b++) fb_list['push'](忽闻水上琵(_0x1b3b7b, 面转轴拨弦(_0x163999), {
                'pitch': 0x0,
                'yaw': _0x4bddfe['yaw'] > 0x0 ? 0xb4 - _0x4bddfe['yaw'] : -0xb4 - _0x4bddfe['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0xd9e0ca['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0xf4ec03) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0xf4ec03, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0xf4ec03] !== 'undefined') 委身为贾人(nx_keys[_0xf4ec03], !globalThis[nx_keys[_0xf4ec03]]);
        if (nx_isBind != null && _0xf4ec03 != 0x42) {
            nx_keys[_0xf4ec03] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            归客不发寻(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0xf4ec03, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x208872) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x208872, '§r');
    }

    function onSendServerPacketEvent(_0x35330a, _0x2a1eaa) {
        if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x35330a === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0x35330a === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0x35330a === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0x35330a === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x285297 = PacketTranslate[PacketTranslate['map'](_0x1c6657 => _0x1c6657['id'])['indexOf'](_0x35330a)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x2a1eaa] === 'undefined') PacketTmp['send'][_0x2a1eaa] = {
                    'id': _0x35330a,
                    'Translate': _0x285297,
                    'count': 0x1
                };
                PacketTmp['send'][_0x2a1eaa]['count']++;
            }
            const _0x8d7732 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x31cd22 = [];
            if (sp_id) _0x31cd22['push'](_0x35330a);
            if (sp_name) _0x31cd22['push'](_0x2a1eaa);
            if (sp_trans) _0x31cd22['push'](_0x285297);
            let _0x540b0d = sp_intercept && (intercept['includes'](_0x35330a) || intercept['includes'](_0x2a1eaa));
            if (!sp_ignore || !(ignore['includes'](_0x35330a) || ignore['includes'](_0x2a1eaa))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x31cd22['join'](' - ') + (_0x540b0d ? '\n§e已拦截数据包' : ''), '§r');
            return _0x540b0d;
        }
    }

    function onReceiveServerPacketEvent(_0xef0968, _0x2cc68d) {
        if (ShadowBoomer && _0xef0968 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0xef0968 == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0xef0968 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0xef0968 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0xef0968 === 0x9) return true;
        if (ModifyTime && _0xef0968 === 0xa) return true;
        if (ca_check && _0xef0968 === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0xef0968 === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0xef0968 === 0x12) return true;
        if (NoCamShake && _0xef0968 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x1dcafb = PacketTranslate[PacketTranslate['map'](_0x588e7d => _0x588e7d['id'])['indexOf'](_0xef0968)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x2cc68d] === 'undefined') PacketTmp['receive'][_0x2cc68d] = {
                    'id': _0xef0968,
                    'Translate': _0x1dcafb,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x2cc68d]['count']++;
            }
            const _0x1f5954 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x58b58f = [];
            if (srp_id) _0x58b58f['push'](_0xef0968);
            if (srp_name) _0x58b58f['push'](_0x2cc68d);
            if (srp_trans) _0x58b58f['push'](_0x1dcafb);
            let _0x1aca2b = srp_intercept && (intercept['includes'](_0xef0968) || intercept['includes'](_0x2cc68d));
            if (!srp_ignore || !(ignore['includes'](_0xef0968) || ignore['includes'](_0x2cc68d))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x58b58f['join'](' - ') + (_0x1aca2b ? '\n§e已拦截数据包' : ''), '§r');
            return _0x1aca2b;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0xef0968 === 0x9;
    }

    function onTouchMotionDownEvent(_0x20d83e, _0x25699e, _0x2f4013) {
        if (SafeAttack) {
            const _0x56d162 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x26e2a7 = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x33b80f = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x5e21a3 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 声思似诉平(self_id, at_lists[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, at_lists[0x0]) < sa_range && _0x25699e > _0x56d162 && _0x25699e < _0x26e2a7 && _0x2f4013 > _0x33b80f && _0x2f4013 < _0x5e21a3) 江头夜送客(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x47c73c, _0x2552eb) {
        const _0x482412 = 音铮铮然有(_0x2552eb);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x482412['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x482412['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x47c73c > cs_sort) && cs_current < cs_maxCount) {
            let _0x48e0e7 = cs_black['length'] === 0x0 || cs_black['some'](_0x36c8c0 => _0x482412['namespace']['includes'](_0x36c8c0));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x119c37 => _0x482412['namespace']['includes'](_0x119c37))) _0x48e0e7 = false;
            if (_0x47c73c < cs_min && _0x47c73c > cs_max) _0x48e0e7 = false;
            if (_0x482412['attackDamage'] !== 0x0 && _0x482412['attackDamage'] < cs_min_damage) _0x48e0e7 = false;
            if (_0x482412['damage'] !== 0x0 && _0x482412['damage'] < cs_min_lasting) _0x48e0e7 = false;
            if (!cs_weapon && _0x482412['attackDamage'] > 0x0 && _0x482412['damage'] > 0x0) _0x48e0e7 = false;
            if (!cs_armor && _0x482412['attackDamage'] === 0x0 && _0x482412['damage'] > 0x0) _0x48e0e7 = false;
            if (!cs_other && _0x482412['attackDamage'] === 0x0 && _0x482412['damage'] === 0x0) _0x48e0e7 = false;
            if (cs_sort) cs_sort = _0x47c73c;
            if (_0x48e0e7) cs_timer = 0x0;
            if (_0x48e0e7) cs_current++;
            return _0x48e0e7;
        }
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x47c73c + '\n§e物品NBT数据: §r' + _0x2552eb, '§r');
    }

    function onPlayerAuthInputEvent(_0x5a36ee) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x5a36ee.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x5a36ee.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x5a36ee['pos']['x']['toFixed'](0x2) + ', ' + _0x5a36ee['pos']['y']['toFixed'](0x2) + ',' + _0x5a36ee['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x5a36ee['delta']['x']['toFixed'](0x2) + ', ' + _0x5a36ee['delta']['y']['toFixed'](0x2) + ', ' + _0x5a36ee['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x5a36ee['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x5a36ee['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x5a36ee['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x5a36ee['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x5a36ee['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x511753) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0x511753);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x2107b8 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x19f69e = _0x511753['replace'](琵琶行浔阳(_0x511753, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x2107b8)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x19f69e['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x1e4ab8) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0x1e4ab8);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x4a31c0) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x4a31c0);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x354dfd = JSON['parse'](Sauths);
            if (typeof _0x354dfd['sauth_json'] !== 'undefined') _0x354dfd = _0x354dfd['sauth_json'];
            return _0x354dfd;
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