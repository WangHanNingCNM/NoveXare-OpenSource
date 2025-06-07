/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 05 - 26  08：07：37
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e05§b26§f080737§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x5b3fba, _0x188073, _0x528517) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x5b3fba,
            'y': _0x188073,
            'z': _0x528517
        },
        'type': 0x11
    });
    const getPos = _0x269e2a => {
        let _0xfc2cae = getEntityPos(_0x269e2a);
        if (_0xfc2cae) _0xfc2cae['y'] += getPos_offset;
        return _0xfc2cae || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x304d7d, _0x322d33, _0x5baca4) => sendPlayerAuthInput({
        'pos': {
            'x': _0x304d7d,
            'y': _0x322d33,
            'z': _0x5baca4
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
    const movePlayer = (_0x98039a, _0x332345, _0x4b8064, _0x1a59ce = true) => sendMovePlayer({
        'id': self_id,
        'pos': {
            'x': _0x98039a,
            'y': _0x332345,
            'z': _0x4b8064
        },
        'yHeadRot': 0x0,
        'mode': 0x0,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        },
        'ground': _0x1a59ce
    });
    const 左迁九江郡 = _0x5835c0 => {
        const _0xdf8345 = new Uint8Array(_0x5835c0);
        let _0x4ffb1a = '';
        for (let _0x11d5a5 = 0x0; _0x11d5a5 < _0xdf8345['length'];) {
            let _0x378a45 = _0xdf8345[_0x11d5a5++];
            if (_0x378a45 <= 0x7f) _0x4ffb1a += String['fromCharCode'](_0x378a45);
            else if (_0x378a45 >> 0x5 === 0x6) {
                let _0x3dfb3b = _0xdf8345[_0x11d5a5++];
                _0x4ffb1a += String['fromCharCode']((_0x378a45 & 0x1f) << 0x6 | _0x3dfb3b & 0x3f);
            } else if (_0x378a45 >> 0x4 === 0xe) {
                let _0x242357 = _0xdf8345[_0x11d5a5++];
                let _0x24c63 = _0xdf8345[_0x11d5a5++];
                _0x4ffb1a += String['fromCharCode']((_0x378a45 & 0xf) << 0xc | (_0x242357 & 0x3f) << 0x6 | _0x24c63 & 0x3f);
            } else if (_0x378a45 >> 0x3 === 0x1e) {
                let _0x11ebbf = _0xdf8345[_0x11d5a5++];
                let _0x2f7218 = _0xdf8345[_0x11d5a5++];
                let _0x386c05 = _0xdf8345[_0x11d5a5++];
                let _0x47bd41 = (_0x378a45 & 0x7) << 0x12 | (_0x11ebbf & 0x3f) << 0xc | (_0x2f7218 & 0x3f) << 0x6 | _0x386c05 & 0x3f;
                _0x4ffb1a += String['fromCodePoint'](_0x47bd41);
            }
        }
        return _0x4ffb1a;
    };
    const 司马明年秋 = (_0xf9e4df, _0x365266, _0x594b04, _0x13f7dc) => {
        let _0x5cf221 = _0xf9e4df['indexOf'](_0x365266) + _0x365266['length'];
        let _0x561ca = _0xf9e4df['indexOf'](_0x594b04, _0x5cf221);
        if (typeof _0x13f7dc !== 'undefined' && _0xf9e4df['indexOf'](_0x13f7dc, _0x5cf221) < _0x561ca && _0xf9e4df['indexOf'](_0x13f7dc, _0x5cf221) != -0x1) _0x561ca = _0xf9e4df['indexOf'](_0x13f7dc, _0x5cf221);
        if (_0x5cf221 === -0x1 || _0x561ca === -0x1) return null;
        return _0xf9e4df['substring'](_0x5cf221, _0x561ca);
    };
    const 送客湓浦口 = _0x20dc1a => {
        let _0x4c5304 = _0x20dc1a['split']('');
        let _0x28909 = '';
        let _0x31a430 = '4c6e2a3b195d' ['split']('');
        for (let _0x265135 in _0x4c5304) _0x28909 += '§' + _0x31a430[_0x265135 % _0x31a430['length']] + _0x4c5304[_0x265135];
        return _0x28909;
    };
    const 闻舟中夜弹 = _0x3c4fc8 => {
        if (_0x3c4fc8['startsWith']('0x')) _0x3c4fc8 = _0x3c4fc8['slice'](0x2);
        const _0x582d00 = [];
        for (let _0x190395 = 0x0; _0x190395 < _0x3c4fc8['length']; _0x190395 += 0x2) {
            const _0x1452bc = parseInt(_0x3c4fc8['slice'](_0x190395, _0x190395 + 0x2), 0x10);
            _0x582d00['push'](_0x1452bc);
        }
        return new Uint8Array(_0x582d00);
    };
    const 琵琶者听其 = (_0x49fdb6, _0x20cfc5, _0x2697f9 = 0x0) => {
        if (_0x2697f9 == 0x1) sendRpc(_0x49fdb6, 闻舟中夜弹(_0x20cfc5));
        if (_0x2697f9 == 0x2) sendRpc(_0x49fdb6, _0x20cfc5);
        if (_0x2697f9 == 0x3) {
            const _0x36137d = new Uint8Array(str['length']);
            for (let _0x209290 = 0x0; _0x209290 < str['length']; _0x209290++) _0x36137d[_0x209290] = str['charCodeAt'](_0x209290);
            sendRpc(_0x49fdb6, _0x36137d);
        }
    };
    const 音铮铮然有 = _0x37d057 => {
        if (nx_nbts[_0x37d057] !== undefined) return nx_nbts[_0x37d057];
        const _0x270d0d = 司马明年秋(_0x37d057, ',Name:"', '",WasPickedUp');
        if (_0x270d0d === '' || typeof _0x270d0d !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x25f527 = Number(司马明年秋(_0x37d057, ',aux:', ','));
        const _0x411f1e = Number(司马明年秋(_0x37d057, 'Count:', 'b,D'));
        const _0x1398fc = _0x37d057['includes'](',name:"') ? 司马明年秋(_0x37d057, ',name:"', '",') : _0x270d0d['replace']('minecraft:', '');
        const _0x359c43 = _0x37d057['includes'](',netId:') ? Number(司马明年秋(_0x37d057, ',netId:', '}')) : 0x0;
        const _0x42a72c = _0x37d057['includes']('maxDamage') ? Number(司马明年秋(_0x37d057, ',maxDamage:', ',')) : 0x0;
        const _0x299eac = _0x37d057['includes']('attackDamage') ? Number(司马明年秋(_0x37d057, 'attackDamage:', ',')) : 0x1;
        const _0x565852 = _0x37d057['includes']('customColor') ? 司马明年秋(_0x37d057, 'customColor:', '}', ',') : '';
        const _0x1046ad = _0x37d057['includes']('ench:[{') ? ('[{' + 司马明年秋(_0x37d057, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x2c30ab = _0x37d057['startsWith']('{Block:');
        const _0x544775 = {
            'name': _0x1398fc,
            'namespace': _0x270d0d,
            'aux': _0x25f527,
            'damage': _0x42a72c,
            'attackDamage': _0x299eac,
            'count': _0x411f1e,
            'color': _0x565852,
            'isBlock': _0x2c30ab,
            'id': _0x359c43,
            'enchants': JSON['parse'](_0x1046ad)
        };
        nx_nbts[_0x37d057] = _0x544775;
        return _0x544775;
    };
    const 京都声问其 = _0x2adf9f => {
        const _0x50a3b7 = getEntitySize(_0x2adf9f);
        const _0x5ef655 = getEntityMotion(_0x2adf9f);
        const _0x5fc26d = getPos(_0x2adf9f);
        const _0x1952e6 = getEntityName(_0x2adf9f);
        const _0x6bf71d = getEntityNamespace(_0x2adf9f);
        const _0x9ee9d9 = 声暗问弹者(self_id, _0x2adf9f);
        const _0x26be92 = getCarried(_0x2adf9f);
        const _0x2bef9e = 瑟瑟主人下(_0x2adf9f);
        const _0x3d5241 = getEntityAttribute(_0x2adf9f, 'minecraft:health');
        const _0x12cb3b = getEntityAttribute(_0x2adf9f, 'minecraft:movement');
        const _0x1f30ba = getEntityTypeId(_0x2adf9f);
        const _0x5cba4d = getEntityTarget(_0x2adf9f);
        const _0x4aee96 = getPlayerInventorySize(_0x2adf9f);
        const _0x13d758 = getPlayerHotBarSize(_0x2adf9f);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x2adf9f);
        const _0x482a8b = _0xf989f7 => _0xf989f7['toFixed'](0x2);
        const _0x41304a = ['唯一ID:' + _0x2adf9f + ' 昵称:' + _0x1952e6 + '§r 实体命名空间:' + _0x6bf71d + ' 水平碰撞箱:' + _0x482a8b(_0x50a3b7['x']) + ' 垂直碰撞箱:' + _0x482a8b(_0x50a3b7['y']) + ' Mot速度:' + _0x2bef9e, 'ability速度:[max:' + _0x12cb3b['max'] + ', min:' + _0x12cb3b['min'] + ', current:' + _0x12cb3b['current'] + '] 血量:[max:' + _0x3d5241['max'] + ', min:' + _0x3d5241['min'] + ', current:' + _0x3d5241['current'] + ']', '手持:[id:' + _0x26be92['id'] + ', namespace:' + _0x26be92['namespace'] + ', name:' + _0x26be92['name'] + '§r, aux:' + _0x26be92['aux'] + '] 距离:' + _0x9ee9d9 + ' 实体类型:' + _0x1f30ba, '仰俯角:' + _0x482a8b(pitch) + '° 偏航角:' + _0x482a8b(yaw) + '° 仇恨目标:' + getEntityName(_0x5cba4d) + '^' + _0x5cba4d, '移动值:[' + _0x482a8b(_0x5ef655['x']) + ', ' + _0x482a8b(_0x5ef655['y']) + ', ' + _0x482a8b(_0x5ef655['z']) + '] 坐标值:[' + _0x482a8b(_0x5fc26d['x']) + ', ' + _0x482a8b(_0x5fc26d['y']) + ', ' + _0x482a8b(_0x5fc26d['z']) + ']', '背包容量:' + _0x4aee96 + ' 物品栏容量:' + _0x13d758];
        return _0x41304a['join']('\n');
    };
    const getCarried = _0x1364b9 => 音铮铮然有(getEntityCarriedItem(_0x1364b9));
    const getOffhand = _0x4a1ba6 => 音铮铮然有(getEntityOffhandItem(_0x4a1ba6));
    const getInventory = (_0x3eaf24, _0x50ece3) => 音铮铮然有(getPlayerInventoryItem(_0x3eaf24, _0x50ece3));
    const 人本长安倡 = (_0x2305f0, _0xb88490, _0x248c7e, _0x5d5b2f = false, _0x4f6859 = false) => {
        let _0x3ced86 = {
            'x': _0x2305f0,
            'y': _0xb88490,
            'z': _0x248c7e
        };
        const _0xdded12 = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x5a33c7 = _0x1c7e67 => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x1c7e67['map'](_0x5a9c2b => ({
                'type': _0x5a9c2b,
                'pos': _0x3ced86,
                'value': 0x1
            }))
        });
        const _0x1039da = _0x47d828 => sendPlayerAction({
            'id': self_id,
            'pos': _0x3ced86,
            'type': _0x47d828
        });
        if (_0x5d5b2f) _0x5a33c7(_0xdded12);
        if (_0x4f6859) _0xdded12['forEach'](_0x2a5a98 => _0x1039da(_0x2a5a98));
    };
    const 女尝学琵琶 = (_0x100707, _0x321312, _0x16229f = true, _0x35c13f = false) => {
        if (_0x100707 === _0x321312 || getScreenName() !== 'inventory_screen') return false;
        let _0x6fc39c = getInventory(self_id, _0x100707);
        let _0x3689f = getInventory(self_id, _0x321312);
        if (_0x16229f && _0x321312 < 0x9 && _0x3689f['namespace'] != 'minecraft:air') {
            for (let _0x46d9df = 0x23; _0x46d9df > 0x8; _0x46d9df--) {
                const _0xe45b0e = getInventory(self_id, _0x46d9df);
                if (_0xe45b0e['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x321312, _0x46d9df);
                    break;
                }
            }
        }
        if (_0x35c13f && _0x6fc39c['namespace'] === 'minecraft:air' && _0x3689f['namespace'] !== 'minecraft:air') moveInventoryItem(_0x321312, _0x100707);
        if (_0x6fc39c['namespace'] !== 'minecraft:air' && _0x3689f['namespace'] === 'minecraft:air') moveInventoryItem(_0x100707, _0x321312);
    };
    const 于穆曹二善 = (_0x43341a, _0x1a09eb) => {
        let _0x288e9d = _0x1a09eb - 0xb4;
        if (_0x43341a > 0x5a) _0x43341a -= 0x5a;
        if (_0x43341a < -0x5a) _0x43341a += 0x5a;
        if (_0x288e9d > 0xb4) _0x288e9d = _0x288e9d - 0x168;
        if (_0x288e9d < -0xb4) _0x288e9d = 0x168 + _0x288e9d;
        if (getPlayerViewPerspective() === 0x0 || _0x288e9d > 0xb4 || _0x288e9d < -0xb4 || _0x43341a > 0x5a || _0x43341a < -0x5a) return false;
        setEntityBodyRot(self_id, _0x288e9d);
        setEntityRot(self_id, _0x43341a, _0x288e9d);
    };
    const 才年长色衰 = _0x2eb746 => {
        const _0xbda230 = getEntityAttribute(_0x2eb746, 'minecraft:health');
        const _0x2f2918 = getPos(_0x2eb746);
        if (typeof _0x2f2918 != 'object' || !_0x2f2918 || !_0x2f2918['x'] || !_0x2f2918['y'] || !_0x2f2918['z']) return false;
        if (!findEntity(_0x2eb746) && (_0xbda230['max'] === undefined || _0xbda230['min'] === undefined || _0xbda230['current'] === undefined)) return false;
        if (_0xbda230['current'] > 0x0) return true;
    };
    const 委身为贾人 = (_0x2d747b, _0x541a1b) => {
        if (typeof globalThis[_0x2d747b] === 'undefined' || globalThis[_0x2d747b] === _0x541a1b) return;
        globalThis[_0x2d747b] = _0x541a1b;
        nx_cfg[_0x2d747b] = _0x541a1b;
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/sounds/switch_' + (_0x541a1b ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x2d747b['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0x541a1b) 归客不发寻(0x0, _0x2d747b, '§oEnable ◆', '§a');
                else 归客不发寻(0x0, _0x2d747b, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0x2d747b, _0x2d747b + (_0x541a1b ? ' - Enable' : ' - Disable'), _0x2d747b + (_0x541a1b ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x2d747b, _0x2d747b + (_0x541a1b ? ' - Enable' : ' - Disable'), _0x2d747b + (_0x541a1b ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0x2d747b] !== 'undefined') addCustomArrayList(_0x2d747b, nx_arraylist[_0x2d747b]['CN'], nx_arraylist[_0x2d747b]['EN'], _0x541a1b);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x2d747b['includes']('_')) addCustomArrayList(_0x2d747b, _0x2d747b, _0x2d747b, _0x541a1b);
        if (typeof nx_binds[_0x2d747b] !== 'undefined') nx_binds[_0x2d747b]['forEach'](_0x1aaf5e => 委身为贾人(_0x1aaf5e, _0x541a1b));
        if (typeof nx_raBinds[_0x2d747b] !== 'undefined' && !nx_raBinds[_0x2d747b]['isNX']) callModule(nx_funcid[nx_raBinds[_0x2d747b]['module']], JSON['stringify']({
            'value': _0x541a1b
        }));
    };
    const 妇遂命酒使 = (_0x2df80a, _0x5484c4, _0x23a104, _0x2ebe42, _0x411a0e, _0x13eccd = false, _0x2090fc = {}) => {
        for (let _0x6bb08f = 0x0; _0x6bb08f < _0x411a0e; _0x6bb08f++) addParticle(Number(_0x2df80a), _0x5484c4, _0x23a104, _0x2ebe42, _0x13eccd ? _0x2090fc['x'] : _0x5484c4, _0x13eccd ? _0x2090fc['y'] : _0x23a104, _0x13eccd ? _0x2090fc['z'] : _0x2ebe42, 0x1, _0x13eccd);
    };
    const 快弹数曲曲 = () => {
        const _0x5747df = getEntityCarriedItem(self_id);
        const _0xf08271 = getPos(self_id);
        if (!_0x5747df['includes']('count:0')) buildBlock(self_id, _0xf08271['x'], _0xf08271['y'], _0xf08271['z'], 0x6);
    };
    const 罢悯然自叙 = _0x400b11 => {
        const _0x1a5b0a = 迁谪意因为(self_id, _0x400b11);
        const _0xf6c21c = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x400b11 > 0x8) 女尝学琵琶(_0x400b11, 0x8, true, false);
        if (_0xf6c21c['includes'](_0x1a5b0a) && selectPlayerInventorySlot(self_id, _0x400b11) && getPlayerSelectItemSlot(self_id) === _0x400b11) 快弹数曲曲();
    };
    const 少小时欢乐 = (_0xa6e97c, _0x569f74, _0x315adf, _0x3dbd6f) => {
        let _0x1e2718 = _0x569f74 > 0x0;
        _0x569f74 = Math['abs'](_0x569f74);
        let _0x82033c = _0x315adf * Math['cos'](_0x569f74 * Math['PI'] / 0xb4);
        let _0x157627 = _0x315adf * Math['sin'](_0x569f74 * Math['PI'] / 0xb4);
        let _0x647688 = _0x157627 / _0x3dbd6f;
        let _0x59f160 = _0x3dbd6f * (_0x647688 * _0x647688) * 0.5;
        let _0x373d88 = _0x82033c * _0x647688;
        let _0x4a497e = -_0x59f160 / (_0x373d88 * _0x373d88);
        return {
            'data': _0x4a497e * Math['pow'](_0xa6e97c - (_0x1e2718 ? -_0x373d88 : _0x373d88), 0x2) + _0x59f160,
            'bool': _0x1e2718
        };
    };
    const getLocal = _0x40eef6 => typeof _0x40eef6 === 'undefined' || _0x40eef6 === null ? getLocalPlayerUniqueID() : _0x40eef6;
    const 事今漂沦憔 = (_0x1af8cb, _0x271b9a, _0x30953a, _0x4bcb7f = false) => {
        const _0x3b8708 = getBlock(_0x1af8cb, _0x271b9a, _0x30953a);
        if (_0x3b8708['id'] !== 0x0) return;
        const _0x1d710e = [
            [_0x1af8cb, _0x271b9a + 0x1, _0x30953a],
            [_0x1af8cb, _0x271b9a - 0x1, _0x30953a],
            [_0x1af8cb, _0x271b9a, _0x30953a + 0x1],
            [_0x1af8cb, _0x271b9a, _0x30953a - 0x1],
            [_0x1af8cb + 0x1, _0x271b9a, _0x30953a],
            [_0x1af8cb - 0x1, _0x271b9a, _0x30953a]
        ];
        _0x1d710e['some']((_0x1b08a8, _0x22a506) => {
            const _0x306d13 = getBlock(_0x1b08a8[0x0], _0x1b08a8[0x1], _0x1b08a8[0x2]);
            if (_0x306d13['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x1b08a8[0x0], _0x1b08a8[0x1], _0x1b08a8[0x2], _0x22a506);
        });
    };
    const 湖间予出官 = (_0x5665ae, _0x451b76) => {
        const _0x4c5b99 = getPos(self_id);
        sendSound(_0x5665ae, _0x4c5b99['x'], _0x4c5b99['y'], _0x4c5b99['z'], _0x451b76);
    };
    const 二年恬然自 = (_0x35628a, _0x2bf562, _0x5cb92e) => {
        const _0x409359 = getPos(self_id);
        motion_list['push']([_0x35628a - _0x409359['x'], _0x2bf562 - _0x409359['y'], _0x5cb92e - _0x409359['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 安感斯人言 = (_0x5a84be, _0x4b403a) => {
        let _0x28c14b = _0x5a84be === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x5a84be);
        if (typeof _0x4b403a !== 'undefined') _0x28c14b['namespace'] = _0x4b403a;
        return Array['from']({
            'length': 0x24
        }, (_0x197808, _0x47a3ed) => getInventory(self_id, _0x47a3ed))['filter'](_0x3e52fa => _0x3e52fa['namespace'] === _0x28c14b['namespace'] && (typeof _0x4b403a !== 'undefined' || _0x3e52fa['aux'] === _0x28c14b['aux']))['reduce']((_0x380e98, _0x536e5c) => _0x380e98 + _0x536e5c['count'], 0x0);
    };
    const 是夕始觉有 = (_0x28083b, _0x223a0e, _0x2bcad4 = 'hotbar', _0x4b46b3 = 0x0) => {
        const _0x3bfaf5 = _0x2bcad4 == 'hotbar' ? 0x9 : 0x24;
        let _0x47a6e9 = Array['from']({
            'length': _0x3bfaf5
        }, (_0x589855, _0x4a2dad) => getInventory(_0x28083b, _0x4a2dad));
        let _0x231355 = _0x47a6e9['some'](_0x10a0c2 => _0x10a0c2['namespace']['includes'](_0x223a0e));
        let _0x478aa4 = _0x47a6e9['reduce']((_0x97a4ff, _0x169598) => _0x97a4ff + _0x169598['count'], 0x0);
        return _0x231355 && _0x478aa4 > _0x4b46b3;
    };
    const 迁谪意因为 = (_0x32aafc, _0xda3d77, _0x350283) => {
        let _0x1bab8d = _0xda3d77 === -0x1 ? getCarried(_0x32aafc) : getInventory(_0x32aafc, _0xda3d77);
        if (!_0x1bab8d['namespace']['includes']('_') && typeof _0x350283 === 'undefined') return 'other';
        let _0x395c5b = typeof _0x350283 === 'undefined' ? _0x1bab8d['namespace']['replace']('minecraft:', '') : _0x350283['replace']('minecraft:', '');
        const _0x3016de = _0x395c5b['split']('_');
        return _0x3016de[0x1];
    };
    const getEntityMaxDamage = _0x47f198 => Array['from']({
        'length': 0x24
    }, (_0x40b0d6, _0x1d7842) => 十六言命曰(_0x47f198, _0x1d7842))['reduce']((_0x49c7fa, _0x559774) => Math['max'](_0x49c7fa, _0x559774), 0x0);
    const 长句歌以赠 = (_0x3115fb, _0xedf858, _0x1f79e4 = false) => {
        let _0x345cfc = _0x1f79e4 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x3e0cbb = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x322bbe = 0x0; _0x322bbe < 0x24; _0x322bbe++) {
            const _0x18a5a6 = 迁谪意因为(_0x3115fb, _0x322bbe);
            const _0x49822a = _0x3e0cbb['indexOf'](_0x18a5a6);
            if (_0x49822a === -0x1) continue;
            const _0x3f179c = 之凡六百一(_0x3115fb, _0x322bbe);
            if (!_0x1f79e4 && _0x18a5a6 === _0xedf858 && _0x345cfc < _0x3f179c) _0x345cfc = _0x3f179c;
            if (_0x1f79e4 && _0x345cfc[_0x49822a] < _0x3f179c) _0x345cfc[_0x49822a] = _0x3f179c;
        }
        return _0x345cfc;
    };
    const 之凡六百一 = (_0x128ccc, _0x218de2, _0x490d6b = true, _0x2af092 = true) => {
        let _0x29d79a = _0x218de2 === -0x1 ? getCarried(_0x128ccc) : getInventory(_0x128ccc, _0x218de2);
        if (_0x218de2 < -0x1) _0x29d79a = 音铮铮然有(getPlayerArmorItem(_0x128ccc, Math['abs'](_0x218de2) - 0x2));
        if (_0x29d79a['count'] === 0x0 || _0x29d79a['damage'] === 0x0 || _0x29d79a['attackDamage'] > 0x0) return 0x0;
        if (!_0x2af092) return _0x29d79a['damage'];
        let _0x51f35e = 0x0;
        let _0xc40ccd = _0x29d79a['enchants']['findIndex'](_0x27989f => _0x27989f['id'] === 0x0);
        if (_0xc40ccd > -0x1) _0x51f35e = _0x29d79a['enchants'][_0xc40ccd]['lvl'];
        if (!_0x490d6b) return 0x1 + _0x51f35e / 0x64;
        return _0x29d79a['damage'] * (0x1 + _0x51f35e / 0x64);
    };
    const 十六言命曰 = (_0xf87e97, _0x4bfa97, _0x12bb0f = true, _0x2a5694 = true) => {
        let _0x5838d6 = _0x4bfa97 === -0x1 ? getCarried(_0xf87e97) : getInventory(_0xf87e97, _0x4bfa97);
        if (_0x5838d6['count'] === 0x0 || _0x5838d6['attackDamage'] === 0x0 || _0x5838d6['attackDamage'] === 0x0) return 0x1;
        if (!_0x2a5694) return _0x5838d6['attackDamage'];
        let _0xae4416 = 0x0;
        let _0x4bef84 = _0x5838d6['enchants']['findIndex'](_0x109848 => _0x109848['id'] === 0x9);
        if (_0x4bef84 > -0x1) _0xae4416 = _0x5838d6['enchants'][_0x4bef84]['lvl'] * 1.25;
        if (!_0x12bb0f) return _0xae4416;
        return _0x5838d6['attackDamage'] + _0xae4416;
    };
    const b2s = _0x254799 => _0x254799 ? 'true' : 'false';
    const 琵琶行浔阳 = (_0x1c5ac3, _0x475981, _0x4c8d9f) => {
        let _0x4cffb3 = _0x1c5ac3['split'](_0x475981)['length'] - 0x1;
        let _0x5af572 = 0x0;
        let _0x59133c = [];
        for (let _0x352315 = 0x0; _0x352315 < _0x4cffb3; _0x352315++) {
            let _0x36d81d = _0x1c5ac3['indexOf'](_0x475981, _0x5af572) + _0x475981['length'];
            let _0x3a86c4 = _0x1c5ac3['indexOf'](_0x4c8d9f, _0x36d81d);
            if (_0x3a86c4 === -0x1 || _0x36d81d === -0x1) break;
            _0x5af572 = _0x3a86c4;
            _0x59133c['push'](_0x1c5ac3['substring'](_0x36d81d, _0x3a86c4));
        }
        return _0x4cffb3 > 0x1 ? _0x59133c : _0x59133c[0x0];
    };
    const 江头夜送客 = (_0x3d5ede, _0x36fd4a) => {
        if (ECAttack) 琵琶者听其(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x3d5ede, _0x36fd4a);
    };
    const 枫叶荻花秋 = (_0x11c1fe, _0x3c1b13, _0x1cd73d, _0x3eabd4) => {
        if (typeof _0x1cd73d === 'undefined') _0x1cd73d = -0x1;
        if (typeof _0x3eabd4 === 'undefined') _0x3eabd4 = -0x1;
        let _0x27f9d4 = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x1f74e6 = getInventory(_0x11c1fe, index);
            if (!_0x1f74e6['namespace'] || !_0x1f74e6['name']) continue;
            if (_0x1f74e6['namespace']['includes'](_0x3c1b13) && (_0x1f74e6['aux'] === _0x1cd73d || _0x1cd73d === -0x1) && (_0x1f74e6['name']['includes'](_0x3eabd4) || _0x3eabd4 === -0x1)) {
                _0x27f9d4 = index;
                break;
            }
        }
        return _0x27f9d4;
    };
    const 瑟瑟主人下 = _0x5bf209 => {
        const _0x23c845 = getEntityMotion(_0x5bf209);
        const _0x1f73b4 = Math['sqrt'](_0x23c845['x'] * _0x23c845['x'] + _0x23c845['y'] * _0x23c845['y'] + _0x23c845['z'] * _0x23c845['z']);
        return _0x1f73b4 * 0x14;
    };
    const 马客在船举 = (_0x2a73fe, _0x4ee1bc) => {
        const _0x5cf16d = _0x4ee1bc - _0x2a73fe + 0x1;
        return Math['floor'](Math['random']() * _0x5cf16d) + _0x2a73fe;
    };
    const 酒欲饮无管 = (_0x6d38c1, _0x3ba315, _0xec700d) => {
        return {
            'x': _0x3ba315['x'] + _0x6d38c1['x'] * _0xec700d,
            'y': _0x3ba315['y'] + _0x6d38c1['x'] * _0xec700d,
            'z': _0x3ba315['z'] + _0x6d38c1['z'] * _0xec700d
        };
    };
    const 弦醉不成欢 = _0x58af51 => {
        if (_0x58af51 < 0x3c) return _0x58af51 + 's';
        if (_0x58af51 >= 0x3c) return Math['floor'](_0x58af51 / 0x3c) + 'min ' + _0x58af51 % 0x3c + 's';
    };
    const 惨将别别时 = (_0xee450f, _0x26b387, _0x2f7570, _0x41be74 = 0x0, _0x7f4215 = 0x0) => {
        if (!_0x2f7570) return true;
        _0xee450f['y'] += _0x41be74;
        _0x26b387['y'] += _0x7f4215;
        const _0x24219a = 弦弦掩抑声(_0xee450f, _0x26b387, 'yaw_pos');
        const _0x5bd5c5 = -弦弦掩抑声(_0xee450f, _0x26b387, 'pitch_pos');
        const _0x10645b = getDistance(_0xee450f, _0x26b387);
        let _0x344359 = true;
        for (let _0x47919c = 0x0; _0x47919c < _0x10645b; _0x47919c += 0.5) {
            const _0x4d8c2d = 忽闻水上琵(_0x47919c, _0x26b387, {
                'yaw': _0x24219a,
                'pitch': _0x5bd5c5
            });
            const _0x3c79da = getBlock(_0x4d8c2d['x'], _0x4d8c2d['y'], _0x4d8c2d['z']);
            if (_0x3c79da['namespace'] != 'minecraft:air') {
                _0x344359 = false;
                break;
            }
        }
        return _0x344359;
    };
    const 茫茫江浸月 = (_0x908fcf, _0x184f2c) => {
        let _0x4e0122 = getWorldPlayerList()['sort']((_0x58d9e1, _0x13b910) => _0x58d9e1['name']['localeCompare'](_0x13b910['name']));
        let _0x2eb848 = _0x4e0122['length'] > 0x0 ? _0x4e0122['map'](_0x5035e0 => ({
            'text': '§e' + _0x5035e0['name'] + '\n§b距离: ' + 声暗问弹者(self_id, _0x5035e0['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x2b4494 = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x2eb848
        };
        const _0x2b9a9a = JSON['stringify'](_0x2b4494);
        addForm(_0x2b9a9a, function(_0x50d6ca) {
            if (_0x4e0122['length'] > 0x0 && _0x50d6ca >= 0x0) {
                var _0x52781b = _0x184f2c === 0x0 ? _0x4e0122[_0x50d6ca]['name'] : _0x4e0122[_0x50d6ca]['id'];
                if (typeof globalThis[_0x908fcf] === 'object') globalThis[_0x908fcf]['push'](_0x52781b);
                if (typeof globalThis[_0x908fcf] === 'string') globalThis[_0x908fcf] = _0x52781b;
                归客不发寻(0x0, 'addTarget', _0x52781b, '§r');
            }
        });
    };
    const 忽闻水上琵 = (_0x5241d9, _0x5c1384, _0x3ace20) => {
        if (_0x5241d9 === 0x0) return _0x5c1384;
        let _0x16edb0 = _0x5241d9 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x3ace20;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        _0x5241d9 = Math['abs'](_0x5241d9);
        const _0x3ca6b6 = yaw * Math['PI'] / 0xb4;
        const _0x2dbe0e = pitch * Math['PI'] / 0xb4;
        let _0x287b53 = pitch != 0x0 ? Math['sin'](_0x2dbe0e) * _0x5241d9 : 0x0;
        let _0x4aa2c7 = pitch != 0x0 ? _0x287b53 / Math['tan'](_0x2dbe0e) : _0x5241d9;
        let _0x177d3b = _0x4aa2c7 < 0x0;
        _0x4aa2c7 = Math['abs'](_0x4aa2c7);
        const _0x524eb6 = Math['cos'](_0x3ca6b6) * _0x4aa2c7;
        const _0x1a3159 = Math['sin'](_0x3ca6b6) * _0x4aa2c7;
        let _0x45bafc = -Math['sin'](_0x3ca6b6) * _0x4aa2c7;
        let _0x4684e7 = Math['cos'](_0x3ca6b6) * _0x4aa2c7;
        if (_0x16edb0 || _0x177d3b) {
            _0x45bafc = -_0x45bafc;
            if (!_0x177d3b) _0x287b53 = -_0x287b53;
            _0x4684e7 = -_0x4684e7;
        }
        return {
            'x': _0x5c1384['x'] + _0x45bafc,
            'y': _0x5c1384['y'] - _0x287b53,
            'z': _0x5c1384['z'] + _0x4684e7
        };
    };
    const getPlayerItemCount = _0x21f31b => Array['from']({
        'length': 0x24
    }, (_0x33fd80, _0x362070) => getInventory(_0x21f31b, _0x362070))['filter'](_0x9894fb => _0x9894fb['count'] !== 0x0)['reduce']((_0x22e088, _0x16abfa) => _0x22e088 + _0x16abfa['count'], 0x0);
    const isSimilar = (_0x4e74df, _0x1ccf88, _0x2df831) => Math['abs'](_0x4e74df - _0x1ccf88) < _0x2df831;
    const 琶声主人忘 = _0x55866a => {
        let _0xf7fde0 = [];
        if (at_entity) _0xf7fde0['push'](...getEntityList());
        if (at_player) _0xf7fde0['push'](...getPlayerList());
        let _0x44903a = Math['min'](at_maxCount, _0xf7fde0['length']);
        let _0x5bf7e3 = [];
        for (const _0x57c857 of _0xf7fde0) {
            if (!才年长色衰(_0x57c857)) continue;
            const _0xb1b98e = getEntityNamespace(_0x57c857);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x47ec84 => _0xb1b98e['includes'](_0x47ec84)) != at_back) continue;
            const _0x4140c3 = getPos(_0x57c857);
            const _0x4e6e39 = getDistance(_0x4140c3, getPos(_0x55866a));
            if ((_0x4e6e39 > at_maxDist || _0x4e6e39 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x2f95e5 = getEntityAttribute(_0x57c857, 'minecraft:health');
            if (at_heal && (!_0x2f95e5 || _0x2f95e5['min'] > _0x2f95e5['max'] || _0x2f95e5['max'] > 0x186a0 || _0x2f95e5['current'] <= 0x0 || _0x2f95e5['max'] === 0x0) != at_back) continue;
            if (_0xb1b98e === 'minecraft:player') {
                const _0x4be5e3 = getEntityRot(_0x57c857);
                const _0x3a90b0 = at_BWM ? getEntityAttribute(_0x57c857, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x3608bd = getEntityName(_0x57c857);
                if (at_BWM && _0x3a90b0['current'] >= 0.5 && !_0x3608bd['includes']('[') && !_0x3608bd['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x57c857);
                    continue;
                }
                if (at_fov && (typeof _0x4be5e3['yaw'] === 'undefined' || typeof _0x4be5e3['pitch'] === 'undefined' || _0x4be5e3['yaw']['toFixed'](0x2) === 0x0 || _0x4be5e3['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x3c52a7 = getEntityFlag(_0x57c857, 0x5);
                if (at_hide && _0x3c52a7 != at_back) continue;
                const _0x5a50df = getEntityIsGround(_0x57c857);
                if (at_ground && _0x5a50df === at_back) continue;
                if (at_wall && !惨将别别时(getPos(self_id), _0x4140c3, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x3608bd['startsWith'](ct_team) || ct_team['includes']('[') && _0x3608bd['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x57c857) != at_back || !at_name && (_0x3608bd === getEntityName(_0x55866a) || _0x3608bd === '') != at_back || (_0x4140c3['y'] > at_maxY || _0x4140c3['y'] < at_minY) != at_back && !at_infY || _0x57c857 === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x568357 => _0x3608bd['includes'](_0x568357))) continue;
                const _0x3e27b8 = teams_armor ? teams_blur ? getPlayerArmorItem(_0x57c857, teams_slot) : 音铮铮然有(getPlayerArmorItem(_0x57c857, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0x3e27b8 != '{}' && _0x3e27b8 === teams_self || !teams_blur && _0x3e27b8['color'] && _0x3e27b8['color'] === teams_self['color'])) continue;
                const _0x438d1b = at_size ? getEntitySize(_0x57c857) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x438d1b['x'] > at_defaultSize['x'] + 0.1 || _0x438d1b['x'] < at_defaultSize['x'] - 0.1) && (_0x438d1b['y'] > 1.66 || _0x438d1b['y'] < 1.64) && (_0x438d1b['y'] < at_defaultSize['y'] || _0x438d1b['y'] > at_defaultSize['y'] + 0.1) && (_0x438d1b['y'] > 1.51 || _0x438d1b['y'] < 1.49)) != at_back) continue;
            }
            const _0x50fcf7 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x57c857) : 0x0;
            const _0x52253c = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x57c857, 'yaw_rot') : 0x0;
            const _0x307955 = modes['at_mode'] === 0x3 ? 弦弦掩抑声(self_id, _0x57c857, 'pitch_rot') : 0x0;
            const _0x38c72e = modes['at_mode'] === 0x2 ? 十六言命曰(_0x57c857, -0x1) : 0x0;
            _0x5bf7e3['push']({
                'distance': _0x4e6e39,
                'target': _0x57c857,
                'damage': _0x38c72e,
                'heal': _0x2f95e5['current'],
                'crosshair': Math['sqrt'](_0x52253c * _0x52253c + _0x307955 * _0x307955),
                'items': _0x50fcf7,
                'random': 马客在船举(0x0, _0xf7fde0['length'] - 0x1)
            });
        }
        const _0x43f427 = [(_0x446bc3, _0x2670b5) => _0x446bc3['distance'] - _0x2670b5['distance'], (_0x4e1111, _0x2dcea1) => _0x4e1111['heal'] - _0x2dcea1['heal'], (_0x578d60, _0x119d8f) => _0x578d60['damage'] - _0x119d8f['damage'], (_0x231991, _0x1d8757) => _0x231991['crosshair'] - _0x1d8757['crosshair'], (_0xa4f372, _0x5d80ae) => _0x5d80ae['items'] - _0xa4f372['items'], (_0x3f82a0, _0x456bf6) => _0x3f82a0['random'] - _0x456bf6['random']];
        _0x5bf7e3['sort'](_0x43f427[modes['at_mode']]);
        if (at_reverse) _0x5bf7e3['reverse']();
        if (at_infCount) return _0x5bf7e3['map'](_0x4360c4 => _0x4360c4['target']);
        return _0x5bf7e3['slice'](0x0, _0x44903a)['map'](_0x30a77b => _0x30a77b['target']);
    };
    const 归客不发寻 = (_0x2ada60 = 0x0, _0x1ac931 = 'Tip', _0xcee15f, _0x476112 = '§r') => {
        if (!FuncTip) return false;
        if (_0x2ada60 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x1ac931 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x476112) + ' ' + _0xcee15f);
        if (_0x2ada60 == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0x1ac931 + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x476112) + _0xcee15f;
            if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x476112) + _0xcee15f;
        }
    };
    const getDistance = (_0x5b3aed, _0x37d68e) => Math['sqrt'](Math['pow'](_0x5b3aed['x'] - _0x37d68e['x'], 0x2) + Math['pow'](_0x5b3aed['y'] - _0x37d68e['y'], 0x2) + Math['pow'](_0x5b3aed['z'] - _0x37d68e['z'], 0x2));
    const 声暗问弹者 = (_0x4a2cdc, _0x4364c0) => {
        if (!才年长色衰(_0x4a2cdc) || !才年长色衰(_0x4364c0)) return Infinity;
        const _0x22f6e5 = getPos(_0x4a2cdc);
        const _0xc2089e = getPos(_0x4364c0);
        return Math['sqrt'](Math['pow'](_0x22f6e5['x'] - _0xc2089e['x'], 0x2) + Math['pow'](_0x22f6e5['y'] - _0xc2089e['y'], 0x2) + Math['pow'](_0x22f6e5['z'] - _0xc2089e['z'], 0x2));
    };
    const 谁琵琶声停 = (_0x13c005, _0x56baee) => {
        if (!才年长色衰(_0x13c005) || !才年长色衰(_0x56baee)) return Infinity;
        const _0x3bc8bc = getPos(_0x13c005);
        const _0x2fca38 = getPos(_0x56baee);
        return Math['sqrt'](Math['pow'](_0x3bc8bc['x'] - _0x2fca38['x'], 0x2) + Math['pow'](_0x3bc8bc['z'] - _0x2fca38['z'], 0x2));
    };
    const 欲语迟移船 = (_0xd27b5f, _0x2620eb, _0x3220af) => {
        let _0x57ca3f = {
            'fn-set-player-pos': {
                'x': _0xd27b5f,
                'y': _0x2620eb,
                'z': _0x3220af
            }
        };
        callModule(0x5, JSON['stringify'](_0x57ca3f));
    };
    const getHorizontalDistance = (_0x2e10d9, _0x16af73) => Math['sqrt'](Math['pow'](_0x2e10d9['x'] - _0x16af73['x'], 0x2) + Math['pow'](_0x2e10d9['z'] - _0x16af73['z'], 0x2));
    const setRealPos = (_0x405588, _0x4cb529, _0x4a039b, _0x1664b3) => setEntityPos(_0x405588, _0x4cb529, _0x4a039b + setPos_offset, _0x1664b3);
    const setPos = (_0x58d3c5, _0x5a3d94, _0x4b78ba) => setRealPos(self_id, _0x58d3c5, _0x5a3d94, _0x4b78ba);
    const setMotion = (_0x531c26, _0x16a032, _0x3b59e7) => setEntityMotion(self_id, _0x531c26, _0x16a032, _0x3b59e7);
    const 相近邀相见 = _0x244f47 => {
        if (_0x244f47 === '') return [];
        return _0x244f47['split'](',');
    };
    const 添酒回灯重 = _0x2dda29 => {
        if (typeof _0x2dda29 != 'object' || _0x2dda29['length'] === 0x0) return '';
        return _0x2dda29['join'](',');
    };
    const 开宴千呼万 = (_0x2f6969, _0x5ca96d) => {
        let _0x22ec19 = typeof _0x5ca96d === 'object' ? 添酒回灯重(_0x5ca96d) : _0x5ca96d;
        let _0x517fee = typeof _0x5ca96d === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x2f6969 + '","placeholder":"","default":"' + _0x22ec19 + '"}]}', function(_0x5083ab) {
            if (_0x517fee === 0x1) globalThis[_0x2f6969] = _0x5083ab;
            if (_0x517fee === 0x0) globalThis[_0x2f6969] = 相近邀相见(_0x5083ab);
            归客不发寻(0x0, 'setValue', _0x2f6969 + ' §7>>>§r ' + _0x5083ab, '§r');
            nx_cfg[_0x2f6969] = globalThis[_0x2f6969];
        });
    };
    const 唤始出来犹 = _0x562024 => {
        if (typeof _0x562024 != 'string' || _0x562024 === '') return 'None';
        let _0x4cc76e = _0x562024['match'](/\[(.*?)\]/g);
        if (_0x4cc76e === null) return 'None';
        return _0x4cc76e[0x0];
    };
    const 抱琵琶半遮 = _0x5865ff => {
        if (!File['exist'](_0x5865ff)) return '{}';
        const _0x235677 = File['read'](_0x5865ff);
        return _0x235677 ? _0x235677 : '{}';
    };
    const 面转轴拨弦 = _0x4bfb62 => {
        const _0xe28b7f = getPos(_0x4bfb62);
        let _0x44cef7 = _0x4bfb62 === self_id ? Math['floor'](_0xe28b7f['y']) - 0x1 : Math['floor'](_0xe28b7f['y']);
        return {
            'x': Math['floor'](_0xe28b7f['x']),
            'y': _0x44cef7,
            'z': Math['floor'](_0xe28b7f['z'])
        };
    };
    const 三两声未成 = (_0x5b0481, _0x372d34) => {
        if (_0x5b0481['length'] === _0x372d34['length']) {
            return [];
        }
        const _0x503156 = _0x5b0481['length'] >= _0x372d34['length'] ? _0x5b0481 : _0x372d34;
        const _0x527e9a = _0x5b0481['length'] < _0x372d34['length'] ? _0x5b0481 : _0x372d34;
        return _0x503156['filter'](_0x48f5db => !_0x527e9a['includes'](_0x48f5db));
    };
    const 曲调先有情 = (_0x1c4fe1, _0x2511f0) => {
        const _0x1e1c41 = aa_speed;
        const _0x72b9b2 = aa_g;
        const _0x8c25ed = Math['atan'](Math['floor'](-_0x2511f0) / _0x1c4fe1);
        const _0x36f2a4 = Math['sqrt'](_0x1c4fe1 * _0x1c4fe1 + _0x2511f0 * _0x2511f0);
        const _0x5a44c0 = Math['atan'](_0x36f2a4 / _0x1e1c41 / 0x2 / _0x1e1c41 * _0x72b9b2);
        return -((_0x5a44c0 + _0x8c25ed) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x35a3a3, _0x57d3cb) => _0x35a3a3 / _0x57d3cb;
    const roundAngle = (_0x39a2d7, _0x52ff5c) => Math['round'](_0x39a2d7 / _0x52ff5c) * _0x52ff5c;
    const 弦弦掩抑声 = (_0x37bfab, _0x45cfdc, _0x40a309, _0x339a92 = false, _0x49dfaa = false, _0x3ab1a6 = 0x0, _0xe56849 = 0x0) => {
        let _0x1ec751 = typeof _0x45cfdc != 'string' ? _0x45cfdc : getPos(_0x45cfdc);
        let _0x2fbb89 = typeof _0x37bfab != 'string' ? _0x37bfab : getPos(_0x37bfab);
        let _0x32caf3 = getEntityRot(_0x37bfab);
        if (!_0x1ec751 || !_0x2fbb89) return Infinity;
        const _0x24047f = getHorizontalDistance(_0x2fbb89, _0x1ec751);
        if (_0x339a92) _0x1ec751 = 酒欲饮无管(getEntityMotion(_0x45cfdc), getPos(_0x45cfdc), getFlyTime(_0x24047f, aa_speed) * 0x14);
        let _0x107693 = _0x1ec751['x'] - _0x2fbb89['x'];
        let _0x2cdc51 = _0x2fbb89['y'] - _0x1ec751['y'] + (aa_y - 0x14) / 0xa + 马客在船举(-_0xe56849, _0xe56849) / 0xa;
        let _0x2fba00 = _0x1ec751['z'] - _0x2fbb89['z'];
        let _0x19eec6 = Math['atan2'](_0x2fba00, _0x107693) * 0xb4 / Math['PI'];
        const _0x36def5 = 曲调先有情(_0x24047f, _0x2cdc51);
        let _0x5dbb15 = _0x49dfaa ? _0x36def5 : Math['atan2'](_0x2cdc51, _0x24047f) * 0xb4 / Math['PI'];
        if (_0x40a309 === 'yaw_pos') return _0x19eec6 > -0xb4 && _0x19eec6 <= 0x5a ? _0x19eec6 + 0x5a : _0x19eec6 - 0x10e;
        if (_0x40a309 === 'yaw_rot') {
            _0x19eec6 = _0x19eec6 > -0xb4 && _0x19eec6 <= 0x5a ? _0x19eec6 + 0x5a : _0x19eec6 - 0x10e;
            let _0x128d50 = _0x19eec6 - _0x32caf3['yaw'] + 马客在船举(-_0x3ab1a6 / 0x2, _0x3ab1a6 / 0x2);
            return _0x128d50 > 0x0 ? -_0x128d50 + 0xb4 : -_0x128d50 - 0xb4;
        }
        if (_0x40a309 === 'pitch_pos') return _0x5dbb15;
        if (_0x40a309 === 'pitch_rot') return _0x5dbb15 - _0x32caf3['pitch'];
    };
    const 声思似诉平 = (_0x1d246b, _0xffee85, _0x4da110, _0xf611fd) => {
        let _0x3ba0b9 = Math['abs'](弦弦掩抑声(_0x1d246b, _0xffee85, 'yaw_rot'));
        let _0x532819 = Math['abs'](弦弦掩抑声(_0x1d246b, _0xffee85, 'pitch_rot'));
        if (_0xf611fd === 0x0) return Math['sqrt'](_0x3ba0b9 * _0x3ba0b9 + _0x532819 * _0x532819) < _0x4da110;
        if (_0xf611fd === 0x1) return Math['abs'](_0x3ba0b9) < _0x4da110;
        if (_0xf611fd === 0x2) return Math['abs'](_0x532819) < _0x4da110;
    };
    const 生不得志低 = _0x349c91 => {
        let _0x1f9ff8 = '';
        for (let _0x1abd57 = 0x0; _0x1abd57 < _0x349c91['length']; _0x1abd57 += 0x2) {
            _0x1f9ff8 += String['fromCharCode'](parseInt(_0x349c91['substr'](_0x1abd57, 0x2), 0x10));
        }
        return _0x1f9ff8;
    };
    const 眉信手续续 = (_0x28c79a, _0x5ed516, _0x4424cd = 0.5, _0x336a8d = false) => {
        let _0x105fd7 = [];
        let _0x244fe9 = 弦弦掩抑声(_0x28c79a, _0x5ed516, 'yaw_pos');
        let _0x52a773 = 弦弦掩抑声(_0x28c79a, _0x5ed516, 'pitch_pos');
        if (getDistance(_0x28c79a, _0x5ed516) < _0x4424cd) return [_0x28c79a];
        for (let _0x46854a = 0x0; _0x46854a <= getDistance(_0x28c79a, _0x5ed516); _0x46854a += _0x4424cd) {
            let _0x23225a = 忽闻水上琵(-_0x46854a, _0x28c79a, {
                'yaw': _0x244fe9,
                'pitch': _0x336a8d ? -_0x52a773 : 0x0
            });
            if (getBlock(_0x23225a['x'], _0x23225a['y'], _0x23225a['z'])['namespace'] === 'minecraft:air') _0x105fd7['push']({
                'x': _0x23225a['x'],
                'y': _0x23225a['y'],
                'z': _0x23225a['z']
            });
        }
        return _0x105fd7;
    };
    const 弹说尽心中 = (_0x128875, _0x5e24d2) => {
        if (!才年长色衰(_0x128875)) return '';
        let _0x29014b = getEntityAttribute(_0x128875, 'minecraft:health');
        let _0x246eea = _0x29014b['current'];
        let _0x596c78 = _0x29014b['max'];
        const _0x15cf9a = _0x246eea / _0x596c78;
        switch (_0x5e24d2) {
            case 0x0:
                return _0x15cf9a['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x3a66b9 = '§c';
                for (let _0x3bf96c = 0x0; _0x3bf96c < Math['floor'](_0x15cf9a * 0x14); _0x3bf96c++) _0x3a66b9 += '❤';
                return _0x3a66b9 + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x246eea);
            case 0x3:
                return Math['floor'](_0x246eea) + '/' + Math['floor'](_0x596c78);
            case 0x4:
                return getProgress(_0x246eea, _0x596c78, '▌', 0x14);
            default:
                return _0x246eea;
        }
    };
    const 无限事轻拢 = _0x523488 => {
        let _0x360112 = '';
        let _0x247d01 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x5b3dd5 = 0x0; _0x5b3dd5 < _0x523488; _0x5b3dd5++) {
            let _0x4cf52d = 马客在船举(0x0, _0x247d01['length'] - 0x1);
            _0x360112 += _0x247d01[_0x4cf52d];
        }
        return _0x360112;
    };

    function getProgress(_0x1233e5, _0x163cd5, _0x3a0669 = '▌', _0x40052c = 0x28) {
        let _0x51c583 = Math['min'](_0x1233e5 / _0x163cd5, 0x1);
        const _0x467af0 = '4c6e2a3b195d591b3a2e6c4' ['split']('');
        let _0x1988ae = _0x467af0[Math['min'](Math['floor'](_0x51c583 * _0x467af0['length']), _0x467af0['length'] - 0x1)];
        let _0x3dd82a = _0x3a0669['repeat'](_0x40052c)['split']('');
        let _0x3184f9 = Math['min'](Math['floor'](_0x51c583 * _0x3dd82a['length']), _0x3dd82a['length']);
        _0x3dd82a[Math['min'](_0x3184f9, _0x3dd82a['length'] - 0x1)] = _0x3a0669 + '§r§o§l';
        return '§r[§o§l§' + _0x1988ae + _0x3dd82a['join']('') + '§r]';
    }
    const 慢捻抹复挑 = _0x2f496e => {
        for (let _0x4eed9b = Math['ceil'](-cd_size / 0x2); _0x4eed9b < Math['floor'](cd_size / 0x2 + 0x1); _0x4eed9b++) {
            for (let _0x250102 = Math['ceil'](-cd_size / 0x2); _0x250102 < Math['floor'](cd_size / 0x2 + 0x1); _0x250102++) {
                for (let _0x59b661 = Math['ceil'](-cd_size / 0x2); _0x59b661 < Math['floor'](cd_size / 0x2 + 0x1); _0x59b661++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x2f496e;
                    const _0x1e5433 = getBlock(x + _0x4eed9b, y + _0x250102, z + _0x59b661);
                    if (_0x1e5433['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x2f496e['y'] + _0x250102 <= _0x2f496e['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x4eed9b, y + _0x250102, z + _0x59b661, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x2f496e['x'] + _0x4eed9b, _0x2f496e['y'] + _0x250102, _0x2f496e['z'] + _0x59b661, 0x0);
                    if (cd_packet) 人本长安倡(_0x2f496e['x'] + _0x4eed9b, _0x2f496e['y'] + _0x250102, _0x2f496e['z'] + _0x59b661, true, true);
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
            for (let _0x57905d = 0x0; _0x57905d < ia_move; _0x57905d++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 六幺大弦嘈 = _0x42d37d => {
        let _0x2ce6aa = '';
        let _0x5c0794 = _0x42d37d['split']('');
        for (let _0x518369 in _0x5c0794) {
            let _0x374e21 = _0x5c0794[_0x518369]['toUpperCase']();
            if (_0x518369 != _0x5c0794['length'] - 0x1) {
                if (_0x518369 % 0x2 === 0x1) _0x2ce6aa += _0x374e21 + ' ';
                else _0x2ce6aa += _0x374e21;
            } else _0x2ce6aa += _0x374e21;
        }
        if (rpc_remark) {
            let _0x1be7a5 = _0x2ce6aa['split'](' ');
            let _0x1a97b9 = '';
            for (let _0x1f75fa in _0x1be7a5) _0x1a97b9 += _0x1be7a5[_0x1f75fa] + '(' + 生不得志低(_0x1be7a5[_0x1f75fa]) + ') ';
            return _0x1a97b9;
        } else return _0x2ce6aa;
    };
    const 嘈如急雨小 = (_0x41a16d, _0x21a04a, _0x1e1a3e = false) => {
        setEntityTarget(_0x41a16d, _0x21a04a);
        if (_0x1e1a3e) setEntityTarget(_0x21a04a, _0x41a16d);
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
            let _0x3ba2d4 = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 音铮铮然有(getPlayerArmorItem(self_id, teams_slot));
            let _0x43c8ec = getEntityAttribute(self_id, 'minecraft:health');
            let _0x121b73 = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x121b73['y'], 0x0);
            let _0x5a10e5 = getCameraRotation();
            let _0x4c7d49 = {
                'yaw': _0x5a10e5['yaw'] > 0x0 ? 0xb4 - _0x5a10e5['yaw'] : -0xb4 - _0x5a10e5['yaw'],
                'pitch': -_0x5a10e5['pitch']
            };
            let _0x2f306f = getDistance(self_pos, prev_pos) / 0.05;
            let _0x53e5d1 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x15899f = 瑟瑟主人下(self_id);
            let _0x410e42 = 面转轴拨弦(self_id);
            let _0x5efb97 = getWorldPlayerList();
            let _0x54c8dd = getEntityIsGround(self_id);
            let _0x4047b7 = getScreenName();
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x199ad1, _0x3dbedd) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
            }
            self_item = getCarried(self_id);
            if (_0x43c8ec['current'] - prev_heal > 0x8) {
                if (DeathInfo) 归客不发寻(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 马客在船举(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x43c8ec['current'] < prev_heal) death_pos = self_pos;
            if (ShowScreenHud) 归客不发寻(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
            if (DeadCross) dc_pos['forEach'](_0xd07228 => {
                sendShadow(_0xd07228['x'], _0xd07228['y'], _0xd07228['z']);
                sendShadow(_0xd07228['x'], _0xd07228['y'] + 0x1, _0xd07228['z']);
                sendShadow(_0xd07228['x'], _0xd07228['y'] + 0x2, _0xd07228['z']);
                sendShadow(_0xd07228['x'] + 0x1, _0xd07228['y'] + 0x2, _0xd07228['z']);
                sendShadow(_0xd07228['x'] - 0x1, _0xd07228['y'] + 0x2, _0xd07228['z']);
                sendShadow(_0xd07228['x'], _0xd07228['y'] + 0x3, _0xd07228['z']);
            });
            if (AdminShow) {
                let _0x38ae25 = _0x5efb97['filter'](_0x346d1c => _0x346d1c['permissionLevel'] != -0x1 || _0x346d1c['commandPermissionLevel'] != -0x1);
                if (_0x38ae25['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Admin', '服务器管理员: ' + 添酒回灯重(_0x38ae25['map'](_0x3b7412 => _0x3b7412['name'])), '§r'));
                let _0x2407ef = _0x38ae25['filter'](_0x480135 => 声暗问弹者(_0x480135['id'], self_id) < as_range);
                if (_0x2407ef['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 添酒回灯重(_0x2407ef['map'](_0x349efa => _0x349efa['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 琶声主人忘(self_id);
            if (NoHider) {
                const _0x113dde = getPlayerList();
                _0x113dde['forEach'](_0x3c6fad => {
                    if (_0x3c6fad != self_id) {
                        removeEntityEffect(_0x3c6fad, 0xe);
                        setEntityFlag(_0x3c6fad, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x3c6fad)) at_lists['splice'](at_lists['indexOf'](_0x3c6fad), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x410e42['x'], _0x410e42['y'] - 0x1, _0x410e42['z'])['namespace'] === 'minecraft:glass' && _0x54c8dd) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !cc_status && _0x121b73['y'] < 0x0) {
                cc_status = true;
                callModule(0x2c, '{"value":true,"no_move_check":true,"no_fall_check":true}');
                playerJump();
            }
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
                const _0x1a1d26 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x1a1d26) setPos(_0x1a1d26['x'] + 马客在船举(-rt_range, rt_range), _0x1a1d26['y'] + (rt_y ? 马客在船举(-rt_range, rt_range) : 0x0), _0x1a1d26['z'] + 马客在船举(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x3c1697 = 马客在船举(ac_min, ac_max);
                let _0x34cc20 = Math['round'](0x3e8 / _0x3c1697);
                const _0x42b3b3 = at_lists['length'] > 0x0 ? 声思似诉平(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x377be4 = 0x0; _0x377be4 < ac_times; _0x377be4++) {
                    if (!_0x42b3b3) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 快弹数曲曲();
                }
                ac_t_2 = ac_t_1 + _0x34cc20;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x1ffa90 = getEntityList()['forEach'](_0x45e115 => {
                    if (getEntityNamespace(_0x45e115) != 'minecraft:item' || !findEntity(_0x45e115) || 声暗问弹者(_0x45e115, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x444f2e = getPos(_0x45e115);
                    silentMove(_0x444f2e['x'], _0x444f2e['y'], _0x444f2e['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x4c7d49,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x4c7d49['yaw']
            });
            if (CustomItem) {
                const _0x42653d = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x42653d);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x42653d);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x42653d);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x58814d = [];
                if (modes['sb_mode'] == 0x0) _0x58814d = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x58814d = at_lists;
                if (modes['sb_mode'] == 0x2) _0x58814d = ['lock_pos'];
                _0x58814d['forEach'](_0xfc5fb9 => {
                    if (sb_exclude && _0xfc5fb9 == self_id) return;
                    let _0x21ad61 = null;
                    if (_0xfc5fb9 == 'lock_pos') _0x21ad61 = sb_pos;
                    else _0x21ad61 = 面转轴拨弦(_0xfc5fb9);
                    if (!_0x21ad61) return;
                    let _0x336cf5 = getEntityRot(_0xfc5fb9);
                    if (modes['sb_mode'] < 0x2) {
                        _0x21ad61 = 忽闻水上琵(sb_offset, _0x21ad61, _0x336cf5);
                        _0x21ad61['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x508309 = JSON['parse'](抱琵琶半遮(nx_paths + '/Shadow.json'));
                        _0x508309['forEach'](_0xe461be => {
                            let _0x5d4175 = Math['sqrt'](_0xe461be['x'] * _0xe461be['x'] + _0xe461be['y'] * _0xe461be['y'] + _0xe461be['z'] * _0xe461be['z']);
                            let _0x1bd274 = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0xe461be, 'yaw_pos');
                            let _0x35bd4b = 弦弦掩抑声({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0xe461be, 'pitch_pos');
                            let _0x316881 = 忽闻水上琵(_0x5d4175, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x35bd4b,
                                'yaw': _0x1bd274 + sb_rc_yaw
                            });
                            sendShadow(_0x21ad61['x'] + _0x316881['x'], _0x21ad61['y'] + _0x316881['y'], _0x21ad61['z'] + _0x316881['z']);
                        });
                    } else {
                        for (let _0x5b1280 = Math['ceil'](-sb_length / 0x2); _0x5b1280 < Math['floor'](sb_length / 0x2 + 0x1); _0x5b1280++) {
                            for (let _0x308d36 = Math['ceil'](-sb_length / 0x2); _0x308d36 < Math['floor'](sb_length / 0x2 + 0x1); _0x308d36++) {
                                for (let _0x3c711a = Math['ceil'](-sb_length / 0x2); _0x3c711a < Math['floor'](sb_length / 0x2 + 0x1); _0x3c711a++) {
                                    sendShadow(_0x21ad61['x'] + _0x5b1280, _0x21ad61['y'] + _0x308d36 + 0x2, _0x21ad61['z'] + _0x3c711a);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0x2e18a9 = [
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
                let _0x1f4604 = [];
                if (sm_player) _0x1f4604['push'](...getPlayerList());
                if (sm_entity) _0x1f4604['push'](...getEntityList());
                if (sm_target) _0x1f4604['push'](...at_lists);
                _0x1f4604['forEach'](_0xb70ef => {
                    let _0xcc22f9 = 弦弦掩抑声(self_id, _0xb70ef, 'yaw_rot');
                    let _0x56906d = 声暗问弹者(self_id, _0xb70ef);
                    let _0x5e258e = Math['floor'](_0x56906d / sm_size * sm_proportion * -Math['sin'](_0xcc22f9 * Math['PI'] / 0xb4) * 0xa);
                    let _0x21c94e = Math['floor'](_0x56906d / sm_size * sm_proportion * -Math['cos'](_0xcc22f9 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x5e258e > 0x5) _0x5e258e = 0x5;
                    if (_0x21c94e > 0x5) _0x21c94e = 0x5;
                    if (_0x5e258e < -0x5) _0x5e258e = -0x5;
                    if (_0x21c94e < -0x5) _0x21c94e = -0x5;
                    _0x2e18a9[_0x21c94e + 0x5][_0x5e258e + 0x5] = ' §e◆§r ';
                });
                let _0x1db730 = _0x2e18a9['map'](_0x17c121 => _0x17c121['join'](''))['join']('\n');
                _0x3ba2d4['push'](归客不发寻(0x1, 'Map', '\n' + _0x1db730, '§r'));
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x3c3b18 = getPos(cm_id);
                    const _0x499e88 = getEntitySize(cm_id);
                    setCameraAnchor(_0x3c3b18['x'] - self_pos['x'], _0x3c3b18['y'] - self_pos['y'] + 0.85 * _0x499e88['y'], -_0x3c3b18['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x27badd = getPos(cm_attack);
                    const _0x51c59f = getEntitySize(cm_attack);
                    if (_0x27badd && _0x51c59f) setCameraAnchor(_0x27badd['x'] - self_pos['x'], _0x27badd['y'] - self_pos['y'] + 0.85 * _0x51c59f['y'], -_0x27badd['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x121b73['x'] * cm_moverange, -_0x121b73['y'] * cm_moverange, _0x121b73['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x43c8ec['current'] < prev_heal) prev_heal = _0x43c8ec['current'];
            if (NoDebuff) debuff['forEach'](_0x5014f4 => removeEntityEffect(self_id, _0x5014f4));
            if (MoveJump && self_moving && _0x54c8dd) playerJump();
            if (ChunkRender) {
                let _0x3ad220 = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x4dd176 = {
                    'x': _0x3ad220['x'] * 0x10,
                    'z': _0x3ad220['z'] * 0x10
                };
                let _0x3c206c = {
                    'x': (_0x3ad220['x'] + 0x1) * 0x10,
                    'z': (_0x3ad220['z'] + 0x1) * 0x10
                };
                for (let _0x317409 = 0x0; _0x317409 < 0x10; _0x317409++) {
                    妇遂命酒使(0x37, _0x4dd176['x'] + _0x317409, self_pos['y'], _0x4dd176['z'], 0x1);
                    妇遂命酒使(0x37, _0x4dd176['x'], self_pos['y'], _0x4dd176['z'] + _0x317409, 0x1);
                    妇遂命酒使(0x37, _0x3c206c['x'] - _0x317409, self_pos['y'], _0x3c206c['z'], 0x1);
                    妇遂命酒使(0x37, _0x3c206c['x'], self_pos['y'], _0x3c206c['z'] - _0x317409, 0x1);
                }
                _0x3ba2d4['push'](归客不发寻(0x1, 'Chunk', '区块坐标: ' + _0x3ad220['x'] + '， ' + _0x3ad220['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x52152a of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x52152a, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, _0x52152a, -0x1, '一局'));
                        const _0x19bf87 = getCarried(self_id);
                        if (_0x19bf87['name']['includes']('一局')) 快弹数曲曲();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x12aecf = getHorizontalDistance(self_pos, nx_goal);
                const _0x1e6c3e = getDistance(self_pos, nx_goal);
                if (_0x1e6c3e >= 0x5) {
                    let _0x22b318 = 弦弦掩抑声(self_id, nx_goal, 'yaw_pos');
                    let _0x325dfb = 忽闻水上琵(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x22b318,
                        'pitch': 0x0
                    });
                    if (_0x12aecf >= 0x3) setMotion(_0x325dfb['x'] - self_pos['x'], _0x121b73['y'], _0x325dfb['z'] - self_pos['z']);
                    else setMotion(_0x121b73['x'], (_0x325dfb['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x121b73['z']);
                } else {
                    nx_goal = null;
                    归客不发寻(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x5c286f = 0x0; _0x5c286f < ral_num; _0x5c286f++) {
                    const _0x22c387 = 无限事轻拢(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x5c286f, _0x22c387, _0x22c387, true);
                }
            }
            if (ShowNowTime) {
                const _0x4c44b6 = new Date();
                const _0x27bd0b = _0x4c44b6['getFullYear']();
                const _0x3b51fa = ('0' + (_0x4c44b6['getMonth']() + 0x1))['slice'](-0x2);
                const _0x2b9041 = ('0' + _0x4c44b6['getDate']())['slice'](-0x2);
                const _0x3ffb50 = ('0' + _0x4c44b6['getHours']())['slice'](-0x2);
                const _0x58d943 = ('0' + _0x4c44b6['getMinutes']())['slice'](-0x2);
                const _0x51a0cc = ('0' + _0x4c44b6['getSeconds']())['slice'](-0x2);
                const _0x26251c = _0x27bd0b + '-' + _0x3b51fa + '-' + _0x2b9041 + ' ' + _0x3ffb50 + ':' + _0x58d943 + ':' + _0x51a0cc;
                addCustomArrayList('ShowNowTime', '当前时间: ' + _0x26251c, '当前时间: ' + _0x26251c, true);
            }
            if (ChestAura) {
                let _0x15a62d = 面转轴拨弦(self_id);
                let _0x310cca = ca_range;
                for (let _0xdaebbd = -_0x310cca; _0xdaebbd < _0x310cca; _0xdaebbd++) {
                    for (let _0x434ce5 = -_0x310cca; _0x434ce5 < _0x310cca; _0x434ce5++) {
                        for (let _0x56712e = -_0x310cca; _0x56712e < _0x310cca; _0x56712e++) {
                            const _0x100006 = getBlock(_0x15a62d['x'] + _0xdaebbd, _0x15a62d['y'] + _0x434ce5, _0x15a62d['z'] + _0x56712e);
                            if (_0x100006['namespace'] != 'minecraft:chest') continue;
                            const _0x2dcf18 = getBlock(_0x15a62d['x'] + _0xdaebbd, _0x15a62d['y'] + _0x434ce5 + 0x1, _0x15a62d['z'] + _0x56712e);
                            const _0x5bbfec = {
                                'x': _0x15a62d['x'] + _0xdaebbd,
                                'y': _0x15a62d['y'] + _0x434ce5,
                                'z': _0x15a62d['z'] + _0x56712e
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x5bbfec)) && ca_exclude || !惨将别别时(_0x15a62d, _0x5bbfec, ca_wall, 1.53, 0.5) || ca_block && _0x2dcf18['namespace'] != 'minecraft:air' || !声思似诉平(self_id, _0x5bbfec, ca_fov, 0x0)) continue;
                            buildBlock(self_id, _0x15a62d['x'] + _0xdaebbd, _0x15a62d['y'] + _0x434ce5, _0x15a62d['z'] + _0x56712e, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x5bbfec));
                            if (ca_check && chestStates['packet'] && chestStates['click'] && _0x4047b7['includes']('chest_screen')) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x5efb97['forEach'](_0x816203 => {
                    const {
                        name,
                        id
                    } = _0x816203;
                    if (id === self_id || name === '') return;
                    let _0x3c9464 = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x3c9464 = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x3c9464 = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x3e2ec6 => {
                            if (_0x3e2ec6['match_mode'] === '精准' && _0x3e2ec6['has_mode'] === '存在' && _0x3e2ec6['texts']['some'](_0x669d94 => name === _0x669d94) != _0x3e2ec6['reverse_selection']) _0x3c9464 = id;
                            if (_0x3e2ec6['match_mode'] === '精准' && _0x3e2ec6['has_mode'] === '同时' && _0x3e2ec6['texts']['every'](_0x692c67 => name === _0x692c67) != _0x3e2ec6['reverse_selection']) _0x3c9464 = id;
                            if (_0x3e2ec6['match_mode'] === '模糊' && _0x3e2ec6['has_mode'] === '存在' && _0x3e2ec6['texts']['some'](_0x97f97d => name['includes'](_0x97f97d)) != _0x3e2ec6['reverse_selection']) _0x3c9464 = id;
                            if (_0x3e2ec6['match_mode'] === '精准' && _0x3e2ec6['has_mode'] === '存在' && _0x3e2ec6['texts']['every'](_0x3ae8aa => name['includes'](_0x3ae8aa)) != _0x3e2ec6['reverse_selection']) _0x3c9464 = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x3c9464 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x3c9464 = null;
                    if (as_ground && getEntityIsGround(id)) _0x3c9464 = null;
                    if (_0x3c9464 === null) return;
                    if (modes['anti_mode'] === 0x0) 归客不发寻(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x3ba2d4['push'](归客不发寻(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x5b2e54 => interactEntity(_0x5b2e54));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (Tower && (_0x4c7d49['pitch'] < -0x50 || _0x4c7d49['pitch'] > 0x50) && self_item['isBlock']) {
                if (_0x54c8dd || tower_continuously) {
                    playerJump();
                    setTimeout(() => 事今漂沦憔(_0x410e42['x'], self_pos['y'] - 0x2, _0x410e42['z']), tower_delay * 0xa);
                }
            }
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x5efb97['length']) {
                    归客不发寻(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x5efb97['length'], '§r');
                    last_world_player = _0x5efb97;
                }
                if (sv_id && self_id != prev_id) 归客不发寻(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x2e7e7f = [];
                _0x5efb97['forEach'](_0x1deb8d => {
                    if (modes['ca_mode'] == 0x0 && 十六言命曰(_0x1deb8d['id'], -0x1) > 0x14) _0x2e7e7f['push'](getEntityName(_0x1deb8d['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x1deb8d['id']) > 0x14) _0x2e7e7f['push'](getEntityName(_0x1deb8d['id']));
                });
                if (_0x2e7e7f['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 添酒回灯重(_0x2e7e7f), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x5efb97['length']) {
                const _0x125c0a = _0x5efb97['map'](_0x47f4c7 => _0x47f4c7['name']);
                let _0x539784 = 三两声未成(last_world_player, _0x125c0a);
                let _0x4cbd43 = last_world_player['length'] < _0x125c0a['length'];
                if (_0x4cbd43) 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x539784) + '进入了世界', '§r');
                else 归客不发寻(0x0, 'Tip', 添酒回灯重(_0x539784) + '离开了世界', '§r');
                last_world_player = _0x125c0a;
            }
            if (DropRes && _0x121b73['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x36c782 = getInventory(self_id, index);
                    if (resList['includes'](_0x36c782['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x132d18 => {
                        if (声思似诉平(self_id, _0x132d18, aaa_fov, 0x0)) {
                            if (aa_use) 快弹数曲曲();
                            else 江头夜送客(_0x132d18, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x3ac156 = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x44444a = getCarried(self_id);
                        if (hs_use && !_0x44444a['namespace']['includes']('air')) 快弹数曲曲();
                    }
                } else if (selectitems['includes'](_0x3ac156['name']) || selectitems['includes'](_0x3ac156['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x3b2771 = getCarried(self_id);
                    if (hs_use && !_0x3b2771['namespace']['includes']('air')) 快弹数曲曲();
                }
            }
            if (AutoPot && ap_autobag && !getScreenName()['includes']('chest_screen')) openInventory();
            if (AutoPot && getScreenName()['includes']('chest_screen')) {
                const _0x5eb47a = 是夕始觉有(self_id, 'splash_potion', 'hotbal', 0x3);
                if (!_0x5eb47a) {
                    for (let _0x3d4107 = ap_slot === -0x1 ? 0x23 : 0x9; _0x3d4107 > -0x1; _0x3d4107--) {
                        if (ap_slot > -0x1) {
                            const _0x2dc297 = getInventory(self_id, _0x3d4107);
                            if (_0x2dc297['namespace'] === 'minecraft:air') {
                                女尝学琵琶(ap_slot, _0x3d4107, false, false);
                                ap_slot = -0x1;
                                break;
                            }
                        }
                        const _0x432f9c = getInventory(self_id, _0x3d4107);
                        if (ap_slot === -0x1 && _0x432f9c['namespace'] === 'minecraft:splash_potion') ap_slot = _0x3d4107;
                    }
                } else if (ap_autobag) deleteContainer();
            }
            if (SmartInv && (!da_inv || _0x4047b7 === 'inventory_screen') && (!da_chest || _0x4047b7['includes']('chest_screen')) && (!da_bow || _0x4c7d49['pitch'] > 0x50) && ticks % da_delay === 0x0) {
                for (let _0x9d3f74 = 0x0; _0x9d3f74 < da_max; _0x9d3f74++) {
                    const _0x171238 = 迁谪意因为(self_id, da_slot);
                    if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x171238)) {
                        const _0x3ed866 = 十六言命曰(self_id, da_slot, da_texture, da_enchant);
                        if (_0x3ed866 >= 0x0 && _0x3ed866 < 0x14) {
                            if (_0x3ed866 >= max_damage) {
                                max_damage = _0x3ed866;
                                if (da_move) 女尝学琵琶(da_slot, SmartInvCfg['sword'], false, false);
                            } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                        }
                    }
                    const _0xee9a = nx_armors['indexOf'](_0x171238);
                    const _0x176617 = 之凡六百一(self_id, da_slot, da_texture, da_enchant);
                    if (da_armor && _0xee9a !== -0x1 && _0x176617 > 0x0) {
                        if (_0x176617 >= max_armor[_0xee9a]) {
                            max_armor[_0xee9a] = _0x176617;
                            if (da_move) {
                                if (move_armor_slot > -0x1) 女尝学琵琶(da_slot, move_armor_slot);
                                else if (nx_armors[_0xee9a]) 女尝学琵琶(da_slot, SmartInvCfg[nx_armors[_0xee9a]], false, false);
                            }
                        } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                    }
                    if (da_slot < 0x23) da_slot++;
                    else da_slot = 0x0;
                }
            }
            if (AutoArmor && (!aa_inv || _0x4047b7 === 'inventory_screen') && (!aa_chest || _0x4047b7['includes']('chest_screen'))) {
                let _0xf6a381 = 迁谪意因为(self_id, armor_slot);
                let _0x18697e = 之凡六百一(self_id, armor_slot);
                if (_0xf6a381 != 'other' && _0x18697e !== 0x0) {
                    let _0x4b755c = [之凡六百一(self_id, -0x2), 之凡六百一(self_id, -0x3), 之凡六百一(self_id, -0x4), 之凡六百一(self_id, -0x5)];
                    for (let _0x13a607 = 0x0; _0x13a607 < aa_times; _0x13a607++) {
                        if (_0xf6a381 === 'helmet' && _0x18697e > _0x4b755c[0x0]) 罢悯然自叙(armor_slot);
                        if (_0xf6a381 === 'chestplate' && _0x18697e > _0x4b755c[0x1]) 罢悯然自叙(armor_slot);
                        if (_0xf6a381 === 'leggings' && _0x18697e > _0x4b755c[0x2]) 罢悯然自叙(armor_slot);
                        if (_0xf6a381 === 'boots' && _0x18697e > _0x4b755c[0x3]) 罢悯然自叙(armor_slot);
                    }
                }
                if (ticks % aa_delay == 0x0) armor_slot++;
                if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
            }
            if (Remover) {
                const _0x4aee23 = getEntityList();
                _0x4aee23['forEach'](_0x53b793 => {
                    let _0x1c0c94 = false;
                    if (rmer_entity) _0x1c0c94 = !isPlayer(_0x53b793);
                    if (rmer_item) _0x1c0c94 = getEntityNamespace(_0x53b793) == 'minecraft:item';
                    if (_0x1c0c94) removeEntity(_0x53b793);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x5e530b = 0x8; _0x5e530b >= 0x0; _0x5e530b--) {
                    let _0x140262 = getInventory(self_id, _0x5e530b);
                    if (_0x140262['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x5e530b);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x4bbd70 = 0x0; _0x4bbd70 <= 0x12; _0x4bbd70 += 0x2) 妇遂命酒使(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x4bbd70 / 0xa, fc_pos['z'], 0x1);
                    _0x3ba2d4['push'](归客不发寻(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x3ba2d4['push'](归客不发寻(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x370ecd = getEntityList();
                _0x370ecd['forEach'](_0x4f3d64 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x4f3d64)) && at_lists['length'] > 0x0) {
                        const _0x1e77d3 = getPos(at_lists[0x0]);
                        let _0x1c652d = 弦弦掩抑声(_0x1e77d3, getPos(_0x4f3d64), 'yaw_pos');
                        let _0x348aa1 = -弦弦掩抑声(_0x1e77d3, getPos(_0x4f3d64), 'pitch_pos');
                        const _0x3830ff = getPos(_0x4f3d64);
                        const _0x5d7a1c = 忽闻水上琵(tt_speed, _0x3830ff, {
                            'yaw': _0x1c652d,
                            'pitch': _0x348aa1
                        });
                        setEntityMotion(_0x4f3d64, _0x5d7a1c['x'] - _0x3830ff['x'], _0x5d7a1c['y'] - _0x3830ff['y'], _0x5d7a1c['z'] - _0x3830ff['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x277cd4 = getEntityList();
                _0x277cd4['forEach'](_0x459410 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x459410))) {
                        const _0x484f88 = getPos(_0x459410);
                        if (typeof arrow_rot[_0x459410] === 'undefined') arrow_rot[_0x459410] = _0x4c7d49;
                        const _0x384482 = arrow_rot[_0x459410]['yaw'];
                        const _0x3d916b = arrow_rot[_0x459410]['pitch'];
                        const _0x53aeb1 = 忽闻水上琵(0x1, _0x484f88, {
                            'yaw': _0x384482,
                            'pitch': _0x3d916b
                        });
                        setEntityMotion(_0x459410, _0x53aeb1['x'] - _0x484f88['x'], _0x53aeb1['y'] - _0x484f88['y'], _0x53aeb1['z'] - _0x484f88['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x199125 = getEntityList();
                _0x199125['forEach'](_0x99dab4 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x99dab4)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x99dab4;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x516855 = getPos(av_id);
                    setCameraAnchor(_0x516855['x'] - self_pos['x'] + (av_x - 0xa), _0x516855['y'] - self_pos['y'] + (av_y - 0xa), -_0x516855['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0x2d0ce4 = 0x0; _0x2d0ce4 < fpsr_rate * 0xa; _0x2d0ce4++) {
                    for (let _0x116188 = 0x0; _0x116188 < fpsr_rate * 0xa; _0x116188++) getEntityName(_0x2d0ce4 + _0x116188);
                }
            }
            if (ArrowParticle) {
                const _0x5b9cc5 = getEntityList();
                _0x5b9cc5['forEach'](_0x4823e0 => {
                    if (getEntityNamespace(_0x4823e0) === 'minecraft:arrow') {
                        const _0x89a1bf = getPos(_0x4823e0);
                        妇遂命酒使(arp_type, _0x89a1bf['x'], _0x89a1bf['y'], _0x89a1bf['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x14fcad = getPos(at_lists[0x0]);
                let _0x1f8dce = {};
                if (fb_chest) {
                    const _0x48908d = 面转轴拨弦(self_id);
                    for (let _0x59889a = -0x2; _0x59889a < 0x3; _0x59889a++) {
                        for (let _0x26e6b5 = -0x2; _0x26e6b5 < 0x3; _0x26e6b5++) {
                            for (let _0x5054eb = -0x2; _0x5054eb < 0x3; _0x5054eb++) {
                                const _0xeaac7 = getBlock(_0x48908d['x'] + _0x59889a, _0x48908d['y'] + _0x26e6b5, _0x48908d['z'] + _0x5054eb);
                                const _0x565248 = 添酒回灯重([_0x48908d['x'] + _0x59889a, _0x48908d['y'] + _0x26e6b5, _0x48908d['z'] + _0x5054eb]);
                                if (_0xeaac7['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x565248)) {
                                    _0x1f8dce = {
                                        'x': _0x48908d['x'] + _0x59889a,
                                        'y': _0x48908d['y'] + _0x26e6b5,
                                        'z': _0x48908d['z'] + _0x5054eb
                                    };
                                    ca_chest_pos['push'](_0x565248);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x1fb21a = (_0x54c8dd ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x18a11f = 马客在船举(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x18a11f) {
                    _0x14fcad = 忽闻水上琵(_0x1fb21a, _0x14fcad, {
                        'yaw': 马客在船举(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x3d35e0 = 弦弦掩抑声(self_id, _0x14fcad, 'yaw_pos');
                let _0x4a6d2c = 忽闻水上琵(_0x1fb21a, getPos(self_id), {
                    'yaw': _0x3d35e0,
                    'pitch': 0x0
                });
                if (_0x43c8ec['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x4b);
                    }
                }
                const _0x55e2d7 = 谁琵琶声停(self_id, at_lists[0x0]);
                if (_0x55e2d7 > fb_seek) {
                    if (_0x54c8dd) setEntityMotion(self_id, _0x4a6d2c['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x54c8dd ? fb_y : _0x121b73['y'], _0x4a6d2c['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (马客在船举(0x0, 0x64) < fb_fishRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0) && _0x55e2d7 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 快弹数曲曲();
                    }
                } else {
                    if (马客在船举(0x0, 0x64) < fb_snowRate && 声思似诉平(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 快弹数曲曲();
                    }
                    if (_0x54c8dd) setEntityMotion(self_id, fb_randMove && _0x18a11f ? _0x4a6d2c['x'] - self_pos['x'] : _0x121b73['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x121b73['y'], fb_randMove && _0x18a11f ? _0x4a6d2c['z'] - self_pos['z'] : _0x121b73['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x1f8dce) != '{}') {
                    let _0x4b4b86 = 弦弦掩抑声(self_id, _0x1f8dce, 'yaw_pos');
                    let _0x4d49e4 = 忽闻水上琵(_0x1fb21a, getPos(self_id), {
                        'yaw': _0x4b4b86,
                        'pitch': 0x0
                    });
                    if (_0x54c8dd) setEntityMotion(self_id, _0x4d49e4['x'] - self_pos['x'], (fb_jump || 马客在船举(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x54c8dd ? fb_y : _0x121b73['y'], _0x4d49e4['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x5b3e5f = 0x0; _0x5b3e5f < rpc_repeat_times; _0x5b3e5f++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x4ad13f = 0x0; _0x4ad13f < shift_num; _0x4ad13f++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x3a82ef = 0x0;
                    at_lists['forEach'](_0x29d5ce => {
                        let _0x1a690e = 面转轴拨弦(_0x29d5ce);
                        if (ac_excludeY && Math['abs'](_0x1a690e['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x1a690e['x'], _0x1a690e['y'] + 0x1, _0x1a690e['z']);
                        for (let _0x4711d5 = -0x1; _0x4711d5 < 0x2; _0x4711d5++) {
                            for (let _0x13fc4d = -0x2; _0x13fc4d < 0x0; _0x13fc4d++) {
                                for (let _0x16cb35 = -0x1; _0x16cb35 < 0x2; _0x16cb35++) {
                                    let _0x2ca276 = getBlock(_0x1a690e['x'] + _0x4711d5, _0x1a690e['y'] + _0x16cb35, _0x1a690e['z'] + _0x13fc4d);
                                    if (_0x3a82ef > ac_count) break;
                                    if ((_0x2ca276['namespace'] === 'minecraft:bedrock' || _0x2ca276['namespace'] === 'minecraft:obsidian') && _0x3a82ef < ac_count) {
                                        buildBlock(self_id, _0x1a690e['x'] + _0x4711d5, _0x1a690e['y'] + _0x16cb35, _0x1a690e['z'] + _0x13fc4d, 0x1);
                                        _0x3a82ef++;
                                    }
                                }
                            }
                        }
                    });
                } else _0x3ba2d4['push'](归客不发寻(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x14bff5 = getEntityList();
                _0x14bff5['forEach'](_0x2644db => {
                    if (!才年长色衰(_0x2644db)) return;
                    const _0x254118 = getPos(_0x2644db);
                    if (getEntityTypeId(_0x2644db) !== 0x47 || 声暗问弹者(_0x2644db, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x169478 = 0x0; _0x169478 < 0x9; _0x169478++) {
                            const _0x534111 = getInventory(self_id, _0x169478);
                            if (_0x534111['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x169478);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x410e42['x'] + _0x254118['x']) / 0x2, (_0x410e42['y'] + _0x254118['y']) / 0x2, (_0x410e42['z'] + _0x254118['z']) / 0x2, 0x0);
                        江头夜送客(_0x2644db, Swing);
                    }
                });
            }
            if (AutoBomb && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0x244bae => {
                        let _0x1d9cf8 = 面转轴拨弦(_0x244bae);
                        let _0x1f95f7 = getBlock(_0x1d9cf8['x'], _0x1d9cf8['y'] + 0x2, _0x1d9cf8['z']);
                        if (_0x1f95f7['namespace'] === 'minecraft:air') buildBlock(self_id, _0x1d9cf8['x'], _0x1d9cf8['y'] + 0x2, _0x1d9cf8['z'], 0x0);
                        _0x1f95f7 = getBlock(_0x1d9cf8['x'], _0x1d9cf8['y'] + 0x2, _0x1d9cf8['z']);
                        if (_0x1f95f7['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x1d9cf8['x'], _0x1d9cf8['y'] + 0x2, _0x1d9cf8['z'], 0x0);
                    });
                } else _0x3ba2d4['push'](归客不发寻(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (CPvP && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x2d7221 => {
                    const _0x2b72a3 = 面转轴拨弦(_0x2d7221);
                    let _0x424776 = [
                        [_0x2b72a3['x'], _0x2b72a3['y'] + 0x2, _0x2b72a3['z']],
                        [_0x2b72a3['x'] + 0x1, _0x2b72a3['y'], _0x2b72a3['z']],
                        [_0x2b72a3['x'] - 0x1, _0x2b72a3['y'], _0x2b72a3['z']],
                        [_0x2b72a3['x'], _0x2b72a3['y'], _0x2b72a3['z'] + 0x1],
                        [_0x2b72a3['x'], _0x2b72a3['y'], _0x2b72a3['z'] - 0x1],
                        [_0x2b72a3['x'] + 0x1, _0x2b72a3['y'] + 0x1, _0x2b72a3['z']],
                        [_0x2b72a3['x'] - 0x1, _0x2b72a3['y'] + 0x1, _0x2b72a3['z']],
                        [_0x2b72a3['x'], _0x2b72a3['y'] + 0x1, _0x2b72a3['z'] + 0x1],
                        [_0x2b72a3['x'], _0x2b72a3['y'] + 0x1, _0x2b72a3['z'] - 0x1]
                    ];
                    for (pos of _0x424776) {
                        let _0x217b0d = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x217b0d['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x217b0d['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x319285 = [];
                let _0xd6d59f = false;
                random_num = 马客在船举(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x413e43 => {
                    let _0x1c4124 = getPos(_0x413e43);
                    if (!((声暗问弹者(self_id, _0x413e43) <= ka_range || ka_infDist) && 声思似诉平(self_id, _0x413e43, ka_fov, 0x0) && 惨将别别时(self_pos, _0x1c4124, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x121b73['y'] < -0.42))) return;
                    _0x319285['push'](_0x413e43);
                    KillAura_d_1[_0x413e43] = Date['now']();
                    if (typeof KillAura_d_2[_0x413e43] !== 'undefined' && KillAura_d_1[_0x413e43] - KillAura_d_2[_0x413e43] < 0x0) return;
                    _0xd6d59f = true;
                    for (k = 0x0; k < ka_times; k++) 江头夜送客(_0x413e43, Swing);
                    KillAura_d_2[_0x413e43] = KillAura_d_1[_0x413e43] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0xd6d59f ? 0x1 : 0x0);
                });
                if (_0x319285['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'KillAura', ShortList ? _0x319285['length'] + '个目标' : 添酒回灯重(_0x319285['map'](_0x428551 => getEntityName(_0x428551))), '§r'));
                const _0x35108f = _0x319285['length'] * random_num * ka_times;
                if (ka_show) _0x3ba2d4['push'](归客不发寻(0x1, 'APS', _0x35108f + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x121b73['y'] < -0.074 && !_0x54c8dd) setMotion(_0x121b73['x'], -sd_speed / 0xf, _0x121b73['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x5643dd = 忽闻水上琵(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                妇遂命酒使(srp_type, _0x5643dd['x'], _0x5643dd['y'] - 1.8 + srp_y, _0x5643dd['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x3b3f85 = motion_list['shift']();
                setMotion(_0x3b3f85[0x0], _0x3b3f85[0x1], _0x3b3f85[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x3ba2d4['push'](归客不发寻(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
                const _0x8193cf = 酒欲饮无管(_0x121b73, self_pos, 0xa);
                var _0x28ebc5 = sca_move || self_moving ? 弦弦掩抑声(_0x8193cf, self_id, 'yaw_pos') : _0x4c7d49['yaw'];
                var _0x1a3d71 = sca_move || self_moving ? 弦弦掩抑声(_0x8193cf, self_id, 'pitch_pos') : _0x4c7d49['pitch'];
                if (!sca_acc) _0x28ebc5 = roundAngle(_0x28ebc5, sca_prec);
                if (!sca_acc) _0x1a3d71 = roundAngle(_0x1a3d71, sca_prec);
                if (sca_auto) {
                    let _0x30ba83 = {};
                    let _0x19743f = Infinity;
                    for (let _0x3db2da = -0x3; _0x3db2da <= 0x3; _0x3db2da++) {
                        for (let _0x33edf4 = -0x3; _0x33edf4 <= -0x1; _0x33edf4++) {
                            for (let _0x2db1dc = -0x3; _0x2db1dc <= 0x3; _0x2db1dc++) {
                                let _0x238059 = {
                                    'x': _0x3db2da + _0x410e42['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0x33edf4,
                                    'z': _0x2db1dc + _0x410e42['z']
                                };
                                const _0x2180a8 = getBlock(_0x238059['x'], _0x238059['y'], _0x238059['z']);
                                if (_0x2180a8['namespace'] == 'minecraft:air') continue;
                                let _0x507657 = Math['sqrt'](_0x3db2da * _0x3db2da - _0x33edf4 * _0x33edf4 + _0x2db1dc * _0x2db1dc);
                                if (_0x507657 < _0x19743f) {
                                    _0x19743f = _0x507657;
                                    _0x30ba83 = _0x238059;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x30ba83) != '{}') {
                        let _0x29e19d = 眉信手续续(_0x30ba83, _0x410e42, 0x1, true);
                        _0x29e19d['forEach'](_0x3a6d88 => {
                            if (sca_surface) 事今漂沦憔(Math['floor'](_0x3a6d88['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x3a6d88['z']));
                            else buildBlock(self_id, Math['floor'](_0x3a6d88['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x3a6d88['z']), 0x1);
                        });
                    }
                }
                for (let _0x35f61e = 0x0; _0x35f61e < sca_len; _0x35f61e++) {
                    const _0x3e51b6 = 忽闻水上琵(_0x35f61e, self_pos, {
                        'yaw': _0x28ebc5,
                        'pitch': sca_y ? _0x1a3d71 : 0x0
                    });
                    let _0x7901e = {
                        'x': Math['floor'](_0x3e51b6['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0x3e51b6['z'])
                    };
                    let _0x2b8b05 = getBlock(_0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x2b8b05['namespace'])) continue;
                    if (sca_fake) setBlock(_0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 事今漂沦憔(_0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z']);
                    else buildBlock(self_id, _0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z'], 0x1);
                    if (sca_up) {
                        const _0x424670 = getBlock(_0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x424670['namespace'])) buildBlock(self_id, _0x7901e['x'], Math['floor'](_0x7901e['y']), _0x7901e['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x84e0fe = 0x0; _0x84e0fe < 0x9; _0x84e0fe++) {
                    const _0x1e993c = getInventory(self_id, _0x84e0fe);
                    if (_0x1e993c['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x84e0fe);
                        break;
                    }
                }
            }
            if (AttackSelf) 江头夜送客(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target && 才年长色衰(th_target)) {
                    let _0x1c129b = [];
                    const _0x5478f6 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x17df02 = 声暗问弹者(th_target, self_id)['toFixed'](0x2);
                    const _0x35e920 = 面转轴拨弦(th_target);
                    _0x1c129b['push'](th_head);
                    if (th_name) _0x1c129b['push']('名称:' + getEntityName(th_target));
                    if (th_carry) _0x1c129b['push']('手持: ' + _0x5478f6['name'] + ' x' + _0x5478f6['count']);
                    if (th_dist) _0x1c129b['push']('距离: ' + _0x17df02 + 'm');
                    if (th_pos) _0x1c129b['push']('坐标: [' + _0x35e920['x'] + ', ' + _0x35e920['y'] + ', ' + _0x35e920['z'] + ']');
                    if (th_health) _0x1c129b['push']('血量: ' + 弹说尽心中(th_target, modes['th_health_mode']));
                    if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
                        updateTextContent(th_id, _0x1c129b['join']('\n'));
                        updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                        updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                        updateTextScale(th_id, th_size);
                    } else th_target = null;
                } else updateTextContent(th_id, '');
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x54c8dd && _0x121b73['y'] > -av_minY) av_pos['push'](_0x410e42);
                    if (!av_running && _0x54c8dd) av_pos = [];
                    if (!av_running && _0x121b73['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x246da5 = av_pos.pop();
                            setPos(_0x246da5['x'], _0x246da5['y'], _0x246da5['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x121b73['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0x535cd5 = {
                        'rot': _0x4c7d49,
                        'yHeadRot': 0x0
                    };
                    const _0x52105f = {
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
                        ..._0x535cd5
                    };
                    const _0x5460bb = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x535cd5
                    };
                    sendPlayerAuthInput(_0x52105f);
                    sendMovePlayer(_0x5460bb);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x54c8dd && _0x121b73['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x121b73['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x41f2d6 = av_pos[0x0];
                            setPos(_0x41f2d6['x'], _0x41f2d6['y'], _0x41f2d6['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x54c8dd)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x3dc498 = 0x0; _0x3dc498 < gm_count; _0x3dc498++) {
                        if (modes['gm_mode'] === 0x0) 二年恬然自(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x4754cf = 0x0; _0x4754cf < gm_count; _0x4754cf++) {
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
                                'rot': _0x4c7d49,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 谁琵琶声停(self_id, at_lists[0x0]) < kd_distance && (_0x54c8dd || !kd_only_ground)) {
                const _0x4c769e = 弦弦掩抑声(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x103f20 = 忽闻水上琵(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x4c769e,
                    'pitch': _0x4c7d49['pitch']
                });
                if (kd_anti) silentMove(_0x103f20['x'] * 0x2, _0x103f20['y'] * 0x2, _0x103f20['z'] * 0x2);
                else setMotion(_0x103f20['x'] - self_pos['x'], _0x121b73['y'], _0x103f20['z'] - self_pos['z']);
            }
            if (AirJump && _0x121b73['y'] < -0.42) {
                let _0x3b6015 = 酒欲饮无管(_0x121b73, self_pos, 瑟瑟主人下(self_id));
                let _0x49d6e4 = 弦弦掩抑声(_0x3b6015, self_id, 'yaw_pos');
                let _0x2c53fe = 忽闻水上琵(aj_speed / 0xa, self_pos, {
                    'yaw': _0x49d6e4,
                    'pitch': 0x0
                });
                setMotion(_0x2c53fe['x'] - self_pos['x'], aj_height / 0x64, _0x2c53fe['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0x3c695b = 0x0; _0x3c695b < di_speed; _0x3c695b++) {
                    let _0xafae7c = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0xafae7c, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 马客在船举(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) > tra_range) {
                let _0xddecff = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                let _0x4e1b70 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
                let _0x59a626 = 忽闻水上琵(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0xddecff,
                    'pitch': -_0x4e1b70
                });
                setPos(_0x59a626['x'], _0x59a626['y'], _0x59a626['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x445629 = getPos(self_id);
                _0x445629['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0xec49c5 => {
                    let _0x455092 = getPos(_0xec49c5);
                    _0x455092['y'] += 0.765;
                    let _0xaac231 = 弦弦掩抑声(_0x445629, _0x455092, 'yaw_pos');
                    let _0x4b6696 = 弦弦掩抑声(_0x445629, _0x455092, 'pitch_pos');
                    for (let _0x37c2c8 = 0x0; _0x37c2c8 < 声暗问弹者(_0xec49c5, self_id); _0x37c2c8 += (0xb - lp_size) / 0x5) {
                        let _0x2fec17 = 忽闻水上琵(-_0x37c2c8, getPos(self_id), {
                            'yaw': _0xaac231,
                            'pitch': -_0x4b6696
                        });
                        妇遂命酒使(lp_type, _0x2fec17['x'], _0x2fec17['y'] - 1.53 + lp_offset / 0xa, _0x2fec17['z'], 0x1);
                    }
                });
            }
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x56cbc8 = spm_text;
                const _0x2fb73b = 'abcdef';
                if (spm_gradual) _0x56cbc8 = 送客湓浦口(_0x56cbc8);
                if (spm_rainbow) _0x56cbc8 = '§' + _0x2fb73b[马客在船举(0x0, _0x2fb73b['length'] - 0x1)] + _0x56cbc8;
                if (spm_file) {
                    let _0x41634f = 抱琵琶半遮(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x56cbc8 = _0x41634f[马客在船举(0x0, _0x41634f['length'] - 0x1)];
                }
                if (spm_attack && at_lists['length'] > 0x0) _0x56cbc8 = ' §e@' + at_lists['map'](_0x75eb4e => getEntityName(_0x75eb4e))['join'](',') + ' §r' + _0x56cbc8;
                for (let _0x30c9df = 0x0; _0x30c9df < spm_count; _0x30c9df++) {
                    let _0x1f209b = 无限事轻拢(0x6);
                    sendChatMessage(spm_random ? _0x56cbc8 + '§r || ' + _0x1f209b : _0x56cbc8);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x40df7a => setEntitySize(_0x40df7a, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x53c342 => {
                    const _0xbbf47b = 忽闻水上琵(suck_range, self_pos, _0x4c7d49);
                    setRealPos(_0x53c342, _0xbbf47b['x'], _0xbbf47b['y'], _0xbbf47b['z']);
                });
            }
            if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x14ca8b => 声思似诉平(_0x14ca8b, self_id, aaim_fov, false));
            if (aaim_states) {
                let _0x40b217 = 忽闻水上琵(0.3 * aaim_speed / 0x5, self_pos, {
                    'yaw': _0x4c7d49['yaw'] + (Math['round'](马客在船举(0x0, 0x1)) ? 0x5a : -0x5a),
                    'pitch': 0x0
                });
                setMotion(_0x40b217['x'] - self_pos['x'], _0x121b73['y'], _0x40b217['z'] - self_pos['z']);
                aaim_states = false;
            }
            if (Velocity && self_moving) {
                let _0xc13765 = _0x4c7d49['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0xe73bae = 酒欲饮无管(bhop_mot, getPos(self_id), 0x5);
                    _0xc13765 = 弦弦掩抑声(self_id, _0xe73bae, 'yaw_pos');
                }
                let _0x5645ca = 忽闻水上琵((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0xc13765,
                    'pitch': 0x0
                });
                setMotion(_0x5645ca['x'] - self_pos['x'], vec_bhop && (_0x54c8dd || bhop_airjump) && (!bhop_airjump || _0x121b73['y'] < -0.42) ? bhop_heigh : _0x121b73['y'], _0x5645ca['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x49e87e = getCameraRotation();
                const _0x852b78 = 忽闻水上琵(fb_speed / 0xa, self_pos, {
                    'yaw': _0x49e87e['yaw'] > 0x0 ? 0xb4 - _0x49e87e['yaw'] : -0xb4 - _0x49e87e['yaw'],
                    'pitch': -_0x49e87e['pitch']
                });
                if (!_0x54c8dd && self_moving) setMotion(_0x852b78['x'] - self_pos['x'], 0x0, _0x852b78['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0x5435f0 => {
                    const _0x2b4145 = getPos(_0x5435f0);
                    妇遂命酒使(tp_type, _0x2b4145['x'], _0x2b4145['y'] + 0.3, _0x2b4145['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x4047b7 === 'inventory_screen') && (!ic_chest || _0x4047b7['includes']('chest_screen')) && (!ic_bow || _0x4c7d49['pitch'] > 0x50)) {
                for (let _0x47b3a7 = 0x0; _0x47b3a7 < ic_max; _0x47b3a7++) {
                    const _0x5bcdef = getInventory(self_id, cleaner_slot);
                    if (_0x5bcdef['count'] === 0x0) {
                        if (cleaner_slot > 0x0) cleaner_slot--;
                        else cleaner_slot = 0x23;
                        continue;
                    };
                    let _0xdec963 = false;
                    let _0x58ae84 = clear_config[_0x5bcdef['namespace']];
                    let _0x8933e4 = 安感斯人言(-0x2, _0x5bcdef['namespace']);
                    if (modes['ic_mode'] === 0x0 && _0x58ae84) _0xdec963 = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x58ae84 || _0x58ae84 && (_0x58ae84['max_num'] === -0x1 || _0x8933e4 > _0x58ae84['max_num']) && (_0x58ae84['aux'] === 'any' || _0x5bcdef['aux'] === _0x58ae84['aux']))) _0xdec963 = true;
                    if (ic_move && !_0xdec963 && typeof _0x58ae84 !== 'undefined' && _0x58ae84['slot'] !== 'undefined') 女尝学琵琶(cleaner_slot, _0x58ae84['slot'], true, false);
                    if (_0xdec963) {
                        if (trash_slot > -0x1 && cleaner_slot > 0x8) 女尝学琵琶(cleaner_slot, trash_slot, true, false);
                        dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x58ae84 || modes['ic_mode'] === 0x1 && !_0x58ae84);
                    }
                    if (cleaner_slot > 0x0) cleaner_slot--;
                    else cleaner_slot = 0x23;
                }
            }
            if (SafeWalk && self_moving) {
                const _0x5deb61 = getEntityRot(self_id)['yaw'];
                const _0x5d595a = 忽闻水上琵(0.5, _0x410e42, {
                    'yaw': _0x5deb61,
                    'pitch': 0x0
                });
                const _0x1b9ee7 = getBlock(_0x5d595a['x'], _0x5d595a['y'] - 0x1, _0x5d595a['z']);
                if (_0x1b9ee7['namespace'] === 'minecraft:air' && _0x54c8dd) setMotion((-_0x5d595a['x'] + self_pos['x']) / 0x8, _0x121b73['y'], (-_0x5d595a['z'] + self_pos['z']) / 0x8);
            }
            if (Spider && self_moving) {
                const _0x359333 = getEntityRot(self_id)['yaw'];
                const _0x433268 = 忽闻水上琵(0x1, _0x410e42, {
                    'yaw': _0x359333,
                    'pitch': 0x0
                });
                const _0x397b28 = getBlock(_0x433268['x'], _0x433268['y'], _0x433268['z']);
                if (_0x397b28['namespace'] != 'minecraft:air') setMotion(_0x121b73['x'], sp_speed / 0xf, _0x121b73['z']);
            }
            if (Fly && (!_0x54c8dd || !fly_air) && (!fly_move || self_moving)) {
                const _0x3b25bc = fly_ud ? fly_current : 0x0;
                let _0x3311fd = 酒欲饮无管(_0x121b73, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (!fly_y) setPos(_0x3311fd['x'], self_pos['y'] + _0x3b25bc, _0x3311fd['z']);
                    else setPos(self_pos['x'], _0x3311fd['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, -0.01, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0x3311fd['x'] - self_pos['x'], _0x3311fd['y'] - self_pos['y'], _0x3311fd['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0x3311fd['x'], _0x3311fd['y'], _0x3311fd['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0x3311fd['x'],
                        'y': _0x3311fd['y'],
                        'z': _0x3311fd['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0x4c7d49['pitch'],
                        'yaw': _0x4c7d49['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x281fc8 = 酒欲饮无管(_0x121b73, self_pos, 0x1);
                const _0x59e97b = 弦弦掩抑声(self_id, _0x281fc8, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x59e97b) + '°方向移动');
            }
            if (FakeWater) setBlock(_0x410e42['x'], _0x410e42['y'], _0x410e42['z'], 'minecraft:water', 0x0);
            if (Suspend) setMotion(_0x121b73['x'], -0x186a0, _0x121b73['z']);
            if (Hover) setMotion(_0x121b73['x'], 0.05, _0x121b73['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0x1d3370 = getPos(at_lists[0x0]);
                const _0xd8eb92 = rid_random ? 马客在船举(-0x2, 0x2) : 0x0;
                欲语迟移船(_0x1d3370['x'] + _0xd8eb92, _0x1d3370['y'] + rid_y + 0x1, _0x1d3370['z'] + _0xd8eb92);
                _0x3ba2d4['push'](归客不发寻(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x35a21f = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x377600 = 忽闻水上琵(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x35a21f['yaw'] > 0x0 ? 0xb4 - _0x35a21f['yaw'] : -0xb4 - _0x35a21f['yaw'],
                        'pitch': -_0x35a21f['pitch']
                    });
                    if (spr_hor) _0x377600['y'] = self_pos['y'];
                    const _0x4e8d27 = getBlock(_0x377600['x'], _0x377600['y'], _0x377600['z']);
                    if (_0x4e8d27['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x377600['x'], _0x377600['y'], _0x377600['z']);
                            setEntityMotion(self_id, _0x121b73['x'], -1e-7, _0x121b73['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x377600['x'] - self_pos['x'], _0x377600['y'] - self_pos['y'], _0x377600['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x377600['x'], _0x377600['y'], _0x377600['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x377600['x'],
                                'y': _0x377600['y'],
                                'z': _0x377600['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x4c7d49['pitch'],
                                'yaw': _0x4c7d49['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x77c8ac = Math['round'](-cs_count / 0x2); _0x77c8ac <= Math['round'](cs_count / 0x2); _0x77c8ac++) {
                    const _0x5ef502 = 0xa ** _0x77c8ac;
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x410e42['x'], _0x410e42['y'], _0x410e42['z'], _0x5ef502 ** 0x2);
                    if (modes['cs_mode'] === 0x1) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x64));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x64));
                    if (modes['cs_mode'] === 0x4) sendSound(_0x5ef502, _0x5ef502, _0x5ef502, _0x5ef502, _0x77c8ac);
                    if (modes['cs_mode'] === 0x5) getEntityList()['forEach'](_0x11dd99 => 江头夜送客(_0x11dd99, false));
                }
            }
            if (TestModule) {}
            if (KickAura && at_lists['length'] > 0x0) {
                let _0x3114c5 = [];
                if (ka_player) _0x3114c5['concat'](_0x5efb97['map'](_0x55e31b => _0x55e31b['id']));
                if (ka_target) _0x3114c5['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0x3114c5['forEach'](_0x5a4a61 => {
                    if (_0x5a4a61 == self_id) return;
                    const _0x5848fc = getEntityName(_0x5a4a61);
                    let _0x221b49 = _0x5848fc['indexOf'](']') - 0x2;
                    let _0x3b874e = ['b', 'c', 'e', 'a'];
                    for (let _0x15564c of _0x3b874e) {
                        if (_0x5848fc['indexOf']('·§' + _0x15564c) != -0x1) {
                            _0x221b49 = _0x5848fc['indexOf']('·§' + _0x15564c);
                            break;
                        }
                    }
                    let _0x35499a = _0x221b49 === -0x1 ? _0x5848fc : _0x5848fc['slice'](_0x221b49 + 0x3, _0x5848fc['length']);
                    if (_0x35499a['includes']('【') && _0x35499a['includes']('】')) _0x35499a = 琵琶行浔阳(_0x35499a, '【', '】');
                    for (let _0x3e0869 = 0x0; _0x3e0869 < ka_count; _0x3e0869++) executeCommand('/tell "' + _0x35499a + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x38b85c = 0x0; _0x38b85c < ka_count; _0x38b85c++) executeCommand('/tell @a[' + _0x3114c5['map'](_0x5cdb84 => 'name="' + getEntityName(_0x5cdb84) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x121b73['y'] < as_minY && !_0x54c8dd) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x170cae = 0x0; _0x170cae < 0x9; _0x170cae++) {
                        const _0x6bba0d = getInventory(self_id, _0x170cae);
                        if (_0x6bba0d['isBlock'] || as_water && _0x6bba0d['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x170cae);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x4aec8f of 眉信手续续(_0x410e42, {
                            'x': _0x410e42['x'],
                            'y': _0x410e42['y'] + as_minY * 0x5,
                            'z': _0x410e42['z']
                        }, 0x1, true)) {
                        const _0x522d68 = getBlock(_0x4aec8f['x'], _0x4aec8f['y'], _0x4aec8f['z']);
                        if (_0x522d68['namespace'] != 'minecraft:air') continue;
                        const _0x4a63ed = getBlock(_0x4aec8f['x'], _0x4aec8f['y'] - 0x1, _0x4aec8f['z']);
                        if (_0x4a63ed['namespace'] === 'minecraft:air' || _0x4a63ed['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x4aec8f['x'], _0x4aec8f['y'], _0x4aec8f['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
                    if (as_fake) setBlock(self_pos['x'], _0x410e42['y'] + _0x121b73['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);
                    else buildBlock(self_id, _0x410e42['x'], _0x410e42['y'] + _0x121b73['y'] * 3.1, _0x410e42['z'], 0x0);
                }
                if (as_near) {
                    let _0x29b652 = {};
                    let _0x2c12d6 = Infinity;
                    for (let _0x5b16c3 = -0x5; _0x5b16c3 <= 0x5; _0x5b16c3++) {
                        for (let _0x3e4fc8 = -0x1; _0x3e4fc8 <= 0x0; _0x3e4fc8++) {
                            for (let _0x53e6c6 = -0x5; _0x53e6c6 <= 0x5; _0x53e6c6++) {
                                let _0x31b11b = Math['sqrt'](_0x5b16c3 * _0x5b16c3 + _0x53e6c6 * _0x53e6c6 + _0x3e4fc8 * _0x3e4fc8);
                                let _0x432b7c = {
                                    'x': _0x5b16c3 + _0x410e42['x'],
                                    'y': _0x3e4fc8 + _0x410e42['y'],
                                    'z': _0x53e6c6 + _0x410e42['z']
                                };
                                const _0x4a1db6 = getBlock(_0x432b7c['x'], _0x432b7c['y'], _0x432b7c['z']);
                                if (_0x4a1db6['namespace'] === 'minecraft:air') continue;
                                if (_0x31b11b < _0x2c12d6) {
                                    _0x2c12d6 = _0x31b11b;
                                    _0x29b652 = _0x432b7c;
                                }
                            }
                        }
                    }
                    if (_0x29b652 != {}) {
                        let _0x3415d4 = {
                            'x': _0x410e42['x'],
                            'y': _0x410e42['y'] - 0x1 + _0x121b73['y'] * 0x3,
                            'z': _0x410e42['z']
                        };
                        let _0x2f8a30 = 眉信手续续(_0x29b652, _0x3415d4, 0.8, true);
                        _0x2f8a30['forEach'](_0x1eed11 => {
                            const _0x15d547 = getBlock(_0x1eed11['x'], _0x1eed11['y'], _0x1eed11['z']);
                            if (_0x15d547['namespace'] === 'minecraft:air') 事今漂沦憔(Math['round'](_0x1eed11['x']), Math['floor'](_0x1eed11['y']), Math['round'](_0x1eed11['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0x1fd7e4 = getEntityRot(at_lists[0x0]);
                let _0x4493b0 = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x45ace3 = aai_random ? 马客在船举(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x45ace3 : _0x1fd7e4['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x597c02 = 忽闻水上琵(-aai_len, _0x4493b0, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x597c02['x'], _0x4493b0['y'] + 1.83 + aai_h, _0x597c02['z']);
                if (modes['sur_mode'] === 0x1) 二年恬然自(_0x597c02['x'], _0x4493b0['y'] + 1.83 + aai_h, _0x597c02['z']);
                _0x3ba2d4['push'](归客不发寻(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0x19124d = [];
                if (sp_target) _0x19124d = at_lists;
                if (sp_all) _0x19124d = getPlayerList();
                if (sp_entity) _0x19124d = getEntityList();
                if (sp_posList['length'] > 0x0) _0x19124d = sp_posList;
                let _0x3c5453 = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x3c9767 = 0x0; _0x3c9767 < sp_vec; _0x3c9767++) {
                    if (sp_data['length'] > 0x0) _0x3c5453 = sp_data['shift']()['sounds'];
                    if (_0x3c5453['length'] > 0x0) {
                        _0x2756f8: for (let _0xa4e9fa of _0x3c5453) {
                            let _0x531a65 = _0xa4e9fa['sound'];
                            let _0x3d19e3 = _0xa4e9fa['level'];
                            if (sp_large) {
                                const _0x19b1de = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x2e2e38 = -_0x19b1de; _0x2e2e38 <= _0x19b1de; _0x2e2e38 += sp_space) {
                                    for (let _0xf3c5d3 = -_0x19b1de; _0xf3c5d3 <= _0x19b1de; _0xf3c5d3 += sp_space) {
                                        sendSound(Number(_0x531a65), self_pos['x'] + _0x2e2e38, self_pos['y'] + sp_y, self_pos['z'] + _0xf3c5d3, Number(_0x3d19e3));
                                    }
                                }
                                continue _0x2756f8;
                            }
                            _0x19124d['forEach'](_0x142f1f => {
                                if (typeof _0x142f1f != 'string')
                                    for (let _0x5d4aee = 0x0; _0x5d4aee < sp_count; _0x5d4aee++) sendSound(Number(_0x531a65), _0x142f1f['x'], _0x142f1f['y'] + sp_y, _0x142f1f['z'], Number(_0x3d19e3));
                                else {
                                    if (_0x142f1f === self_id && sp_exclude) return;
                                    const _0x415dcd = getPos(_0x142f1f);
                                    let _0x309f19 = 忽闻水上琵(sp_distance, _0x415dcd, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x25dd31 = 0x0; _0x25dd31 < sp_count; _0x25dd31++) sendSound(Number(_0x531a65), _0x309f19['x'], _0x309f19['y'] + sp_y, _0x309f19['z'], Number(_0x3d19e3));
                                }
                            });
                        }
                    }
                }
                if (sp_data['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, '进度', '剩余:' + sp_data['length'] + '条', '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file != null && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                归客不发寻(0x0, 'Tip', '循环播放中 共" + sp_data.length + "条音频数据', '§r');
            }
            if (_0x43c8ec['current'] < 0x6) _0x3ba2d4['push'](归客不发寻(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x43c8ec['current']) <= ad_min) {
                const _0x25e717 = modes['ad_mode'];
                if (_0x25e717 === 0x2) removeEntity(self_id);
                if (_0x25e717 === 0x0 || _0x25e717 === 0x1) executeCommand(_0x25e717 === 0x0 ? '/hub' : '/again');
                if (_0x25e717 === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x4c7d49['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 快弹数曲曲(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x25e717 === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'mushroom_stew'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x25e717 === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'skull'));
                    else {
                        快弹数曲曲();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 枫叶荻花秋(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x25e717 === 0x6) leaveWorld();
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
                const _0x3136bb = getBlock(_0x410e42['x'], _0x410e42['y'] - 0x1, _0x410e42['z']);
                if (_0x3136bb['namespace'] === 'minecraft:flowing_water' || _0x3136bb['namespace'] === 'minecraft:water' || _0x3136bb['namespace'] === 'minecraft:flowing_lava' || _0x3136bb['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x121b73['x'], 0x0, _0x121b73['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x5ba2bb => {
                    let _0x4876fd = 京都声问其(_0x5ba2bb);
                    归客不发寻(0x0, 'TargetInfo', '\n' + _0x4876fd + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x5ba2bb) + '_' + _0x5ba2bb + '.txt', _0x4876fd);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0x3a7288 = at_lists[0x0];
                const _0x58f94a = 声暗问弹者(self_id, _0x3a7288);
                const _0x48887d = 声思似诉平(self_id, _0x3a7288, aa_fov, 0x0);
                if (_0x58f94a <= aa_range && _0x48887d || aa_throw) {
                    const _0x46190c = 马客在船举(aa_min, aa_max);
                    let _0x31e369 = 弦弦掩抑声(self_id, _0x3a7288, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x3627be = 弦弦掩抑声(self_id, _0x3a7288, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x31e369 <= 0xb4 && _0x31e369 >= -0xb4 && _0x3627be <= 0x5a && _0x3627be >= -0x5a) {
                        let _0x1819e1 = _0x31e369 >= 0x0 ? -_0x46190c : _0x46190c;
                        let _0x549838 = _0x3627be >= 0x0 ? _0x46190c : -_0x46190c;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x31e369) < _0x46190c || Math['abs'](_0x3627be) < _0x46190c)) {
                            _0x1819e1 = -_0x31e369 / ((0x28 - _0x46190c) / 0x2);
                            _0x549838 = -_0x3627be / ((0x28 - _0x46190c) / 1.125);
                        }
                        const _0x46edfb = 声思似诉平(self_id, _0x3a7288, aa_prec * 0x2, 0x1);
                        const _0x4f5eeb = 声思似诉平(self_id, _0x3a7288, aa_prec * 0x4, 0x2);
                        if (!_0x46edfb) setLocalPlayerTurn(0x0, _0x1819e1);
                        if (!_0x4f5eeb && !aa_throw || !isSimilar(_0x3627be, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x549838, 0x0);
                    }
                    _0x3ba2d4['push'](归客不发寻(0x1, 'AssistAim', getEntityName(_0x3a7288), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0xa3512a => {
                    const _0x3fd796 = _0xa3512a;
                    const _0x59c5ac = getPos(_0x3fd796);
                    if (!_0x3fd796 || !findEntity(_0x3fd796)) return;
                    if (声暗问弹者(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x31a851 = ia_random ? 马客在船举(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x121b73;
                        for (let _0x30ce06 = 0x0; _0x30ce06 < ia_move; _0x30ce06++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x59c5ac['x'] + _0x31a851, _0x59c5ac['y'], _0x59c5ac['z'] + _0x31a851, 0x1);
                                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                                    'pos': {
                                        'x': _0x59c5ac['x'] + _0x31a851,
                                        'y': _0x59c5ac['y'] + ia_offset / 0x5,
                                        'z': _0x59c5ac['z'] + _0x31a851
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x59c5ac['x'], _0x59c5ac['y'], _0x59c5ac['z']);
                            if (modes['ia_mode'] === 0x1) silentMove(_0x59c5ac['x'] + _0x31a851, _0x59c5ac['y'] + ia_offset / 0x5, _0x59c5ac['z'] + _0x31a851);
                            if (modes['ia_mode'] === 0x2) movePlayer(_0x59c5ac['x'] + _0x31a851, _0x59c5ac['y'] + ia_offset / 0x5, _0x59c5ac['z'] + _0x31a851);
                        }
                        if (ia_jump) playerJump();
                        for (let _0x25f4f7 = 0x0; _0x25f4f7 < ia_attack; _0x25f4f7++) 江头夜送客(_0x3fd796, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) 初为霓裳后();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) 初为霓裳后();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x3ba2d4['push'](归客不发寻(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 添酒回灯重(ia_targets['map'](_0x1b9a1f => getEntityName(_0x1b9a1f))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 慢捻抹复挑(_0x410e42);
            if (AutoVoid) {
                const _0x16897d = 面转轴拨弦(self_id);
                const _0x36eb65 = getBlock(_0x16897d['x'], _0x410e42['y'] - 0x1, _0x16897d['z']);
                for (let _0x3eba22 = -0x2; _0x3eba22 < 0x3; _0x3eba22++) {
                    for (let _0x11ec23 = -0x2; _0x11ec23 < 0x3; _0x11ec23++) {
                        const _0x4d98f0 = getBlock(_0x16897d['x'] + _0x3eba22, _0x410e42['y'] - 0x1, _0x16897d['z'] + _0x11ec23);
                        if (_0x4d98f0['namespace'] === 'minecraft:air' && _0x121b73['y'] < -0.0783 && _0x121b73['y'] > -0.0785 && _0x36eb65['namespace'] != 'minecraft:air') {
                            const _0x1f44f3 = -弦弦掩抑声(self_id, {
                                'x': _0x16897d['x'] + _0x3eba22,
                                'y': self_pos['y'],
                                'z': _0x16897d['z'] - _0x11ec23
                            }, 'yaw_pos');
                            const _0x419a44 = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x1f44f3,
                                'pitch': 0x0
                            });
                            setMotion(_0x419a44['x'] - self_pos['x'], _0x121b73['y'], _0x419a44['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x2c7a1d = getEntityList();
                _0x2c7a1d['forEach'](_0x3a803e => {
                    if ((getEntityTypeId(_0x3a803e) === 0x400055 || getEntityTypeId(_0x3a803e) === 0x400056 || getEntityTypeId(_0x3a803e) === 0xc00050) && 声暗问弹者(_0x3a803e, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x3a803e);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0x591558 = 弦弦掩抑声(getPos(_0x3a803e), self_id, 'yaw_pos');
                            const _0x28e3aa = 忽闻水上琵(0.5, self_pos, {
                                'yaw': _0x591558,
                                'pitch': _0x4c7d49['pitch']
                            });
                            setMotion(_0x28e3aa['x'] - self_pos['x'], _0x121b73['y'], _0x28e3aa['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 江头夜送客(_0x3a803e, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x538c81 = getPlayerList();
                let _0x58a7e7 = [];
                let _0x4e324c = false;
                let _0x467395 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x1ef54a = 0x1; _0x1ef54a <= tr_len; _0x1ef54a += tr_dens / 0xa) {
                    let _0x597a69 = 少小时欢乐(_0x1ef54a, _0x4c7d49['pitch'], tr_speed, tr_g)['data'];
                    let _0x317d80 = 忽闻水上琵(_0x1ef54a, self_pos, {
                        'yaw': _0x4c7d49['yaw'],
                        'pitch': 0x0
                    });
                    let _0x239388 = getBlock(_0x317d80['x'], _0x317d80['y'] + _0x597a69, _0x317d80['z']);
                    if (tr_show || !_0x4e324c) {
                        _0x538c81['forEach'](_0xb7f091 => {
                            if (!_0x4e324c) {
                                let _0x5d81bc = getPos(_0xb7f091);
                                let _0x2f79a0 = {
                                    'x': _0x317d80['x'],
                                    'y': _0x317d80['y'] + _0x597a69,
                                    'z': _0x317d80['z']
                                };
                                let _0x390466 = getEntitySize(_0xb7f091);
                                if (_0x2f79a0['x'] <= _0x5d81bc['x'] + _0x390466['x'] / 0x2 && _0x2f79a0['x'] >= _0x5d81bc['x'] - _0x390466['x'] / 0x2 && _0x2f79a0['y'] <= _0x5d81bc['y'] + _0x390466['y'] / 0x2 && _0x2f79a0['y'] >= _0x5d81bc['y'] - _0x390466['y'] / 0x2 && _0x2f79a0['z'] <= _0x5d81bc['z'] + _0x390466['x'] / 0x2 && _0x2f79a0['z'] >= _0x5d81bc['z'] - _0x390466['x'] / 0x2) {
                                    _0x3ba2d4['push'](归客不发寻(0x1, 'HasAimed', getEntityName(_0xb7f091), '§r'));
                                    _0x4e324c = true;
                                }
                            }
                        });
                    }
                    if (_0x239388['namespace'] != 'minecraft:air' || _0x4e324c) {
                        _0x467395 = _0x317d80;
                        if (modes['tr_mode'] === 0x1 && _0x239388['namespace'] != 'minecraft:air') {
                            for (let _0x296c07 = 0x0; _0x296c07 <= 0x14; _0x296c07 += 0x2) 妇遂命酒使(tr_type, _0x467395['x'], _0x467395['y'] + _0x597a69 + _0x296c07 / 0xa, _0x467395['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0x4f0ca9 = getDistance(_0x467395, self_pos);
                    for (let _0x1acd48 = 0x1; _0x1acd48 <= _0x4f0ca9; _0x1acd48 += tr_dens / 0xa) {
                        let _0x216138 = 少小时欢乐(_0x1acd48, _0x4c7d49['pitch'], tr_speed, tr_g)['data'];
                        let _0x50ee85 = (tr_offset - 0xa) / 0xa;
                        let _0x4c55b1 = _0x4c7d49['yaw'] + 0x5a;
                        if (_0x4c55b1 > 0xb4) _0x4c55b1 = _0x4c55b1 - 0x168;
                        if (_0x4c55b1 < -0xb4) _0x4c55b1 = _0x4c55b1 + 0x168;
                        let _0x1c59e2 = 忽闻水上琵(_0x50ee85, self_pos, {
                            'yaw': _0x4c55b1,
                            'pitch': 0x0
                        });
                        let _0x2bab93 = 忽闻水上琵(_0x1acd48, _0x1c59e2, {
                            'yaw': _0x4c7d49['yaw'] - Math['atan'](_0x50ee85 / _0x4f0ca9) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x2bbf7a = getBlock(_0x2bab93['x'], _0x2bab93['y'] + _0x216138, _0x2bab93['z']);
                        if (modes['tr_mode'] === 0x0 && _0x2bbf7a['namespace'] === 'minecraft:air') 妇遂命酒使(tr_type, _0x2bab93['x'], _0x2bab93['y'] + _0x216138 + 0.5, _0x2bab93['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x1246b3 = 面转轴拨弦(self_id);
                for (let _0x1af2b9 = -fa_range; _0x1af2b9 < fa_range; _0x1af2b9++) {
                    for (let _0x42c6fa = -fa_range; _0x42c6fa < fa_range; _0x42c6fa++) {
                        const _0x35940b = getBlock(_0x1246b3['x'] + _0x1af2b9, _0x410e42['y'] - 0x1, _0x1246b3['z'] + _0x42c6fa);
                        const _0x4c2a08 = getBlock(_0x1246b3['x'] + _0x1af2b9, _0x410e42['y'], _0x1246b3['z'] + _0x42c6fa);
                        if ((_0x35940b['namespace'] === 'minecraft:dirt' || _0x35940b['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x1246b3['x'] + _0x1af2b9, _0x410e42['y'] - 0x1, _0x1246b3['z'] + _0x42c6fa, 0x1);
                        if (_0x35940b['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x1246b3['x'] + _0x1af2b9, _0x410e42['y'] - 0x1, _0x1246b3['z'] + _0x42c6fa, 0x1);
                        if (_0x4c2a08['aux'] === 0x7 && (_0x4c2a08['namespace'] === 'minecraft:beetroot' || _0x4c2a08['namespace'] === 'minecraft:wheat' || _0x4c2a08['namespace'] === 'minecraft:carrots' || _0x4c2a08['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x1246b3['x'] + _0x1af2b9, _0x410e42['y'], _0x1246b3['z'] + _0x42c6fa, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x4c2a08['aux'] <= 0x6 && (_0x4c2a08['namespace'] === 'minecraft:beetroot' || _0x4c2a08['namespace'] === 'minecraft:wheat' || _0x4c2a08['namespace'] === 'minecraft:carrots' || _0x4c2a08['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x1246b3['x'] + _0x1af2b9, _0x410e42['y'], _0x1246b3['z'] + _0x42c6fa, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x40b98d = 0x0; _0x40b98d < am_count; _0x40b98d++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x410e42['x'],
                                'y': _0x410e42['y'] - 0x1,
                                'z': _0x410e42['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x1199c1 = JSON['parse'](抱琵琶半遮(nx_paths + '/PlayerAction.json'));
                    _0x1199c1['forEach'](_0xd609a5 => {
                        if (_0xd609a5['delay'] % am_tick === 0x0) {
                            for (let _0x29c72c = 0x0; _0x29c72c < _0xd609a5['count']; _0x29c72c++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0xd609a5['value'],
                                'type': Number(_0xd609a5['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x4e1b24 = 0x0; _0x4e1b24 < pam_count; _0x4e1b24++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x410e42['x'],
                        'y': _0x410e42['y'] - 0x1,
                        'z': _0x410e42['z']
                    },
                    'inputs': pam_array['map'](_0x594887 => Number(_0x594887)),
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
            if (AutoJump && _0x54c8dd) setMotion(_0x121b73['x'], aj_y / 0x64, _0x121b73['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x2974f2 => {
                if (bc_packet) silentMove(_0x2974f2['x'], _0x2974f2['y'], _0x2974f2['z']);
                buildBlock(self_id, _0x2974f2['x'], _0x2974f2['y'], _0x2974f2['z'], 0x0);
            });
            if (NoFall && _0x121b73['y'] < -nf_max && !_0x54c8dd) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x54c8dd && _0x54c8dd)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x353b5c = 0x0; _0x353b5c < 0x168; _0x353b5c += do_density / 0xa) {
                    const _0x8d9506 = do_l_axis * Math['cos'](_0x353b5c * Math['PI'] / 0xb4);
                    const _0x704a36 = do_s_axis * Math['sin'](_0x353b5c * Math['PI'] / 0xb4);
                    妇遂命酒使(0x37, do_pos[0x0] + _0x8d9506, do_pos[0x1], do_pos[0x2] + _0x704a36, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x3ba2d4['push'](归客不发寻(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x58d1a8 = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x58d1a8['x']), Math['round'](_0x58d1a8['y'] - 0x1), Math['round'](_0x58d1a8['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Health', 'Health: ' + 弹说尽心中(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Targets', 添酒回灯重(at_lists['map'](_0x4a0744 => getEntityName(_0x4a0744))), '§r'));
            if (ShowInfo) {
                const _0x293f55 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x215bc0 = Math['sqrt'](_0x121b73['x'] * _0x121b73['x'] + _0x121b73['z'] * _0x121b73['z']);
                if (show_speed) _0x3ba2d4['push'](归客不发寻(0x1, 'Speed', '水平移动速度: ' + _0x215bc0['toFixed'](0x2) + 'm/s 移动速度: ' + _0x15899f['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x53e5d1['toFixed'](0x2) + 'm/s 坐标速度:' + _0x2f306f['toFixed'](0x2) + 'm/s 能力速度:' + _0x293f55['current']['toFixed'](0x2) + ('\n移动值: [' + _0x121b73['x']['toFixed'](0x2) + ', ' + _0x121b73['y']['toFixed'](0x2) + ', ' + _0x121b73['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x3ba2d4['push'](归客不发寻(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x410e42['x'] + ', Y:' + _0x410e42['y'] + ', Z:' + _0x410e42['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Item', self_item['name'] + ' §r§ox' + 安感斯人言(-0x1), '§r'));
                if (show_resources) {
                    const _0x4289c3 = {
                        'gold': 安感斯人言(-0x2, 'minecraft:gold_ingot'),
                        'iron': 安感斯人言(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 安感斯人言(-0x2, 'minecraft:diamond'),
                        'emerald': 安感斯人言(-0x2, 'minecraft:emerald'),
                        'star': 安感斯人言(-0x2, 'minecraft:nether_star')
                    };
                    const _0x46730f = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x3ba2d4['push'](归客不发寻(0x1, 'Resource', '绿宝石:' + _0x4289c3['emerald'] + ', 钻石:' + _0x4289c3['diamond'] + ', 金锭:' + _0x4289c3['gold'] + ', 铁锭:' + _0x4289c3['iron'] + '\n下界之心:' + _0x4289c3['star'] + ', 经验:' + _0x46730f, '§r'));
                }
                if (show_target_dis && at_lists['length'] > 0x0) _0x3ba2d4['push'](归客不发寻(0x1, 'Distance', '三维距离: ' + 声暗问弹者(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 谁琵琶声停(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x3ba2d4['push'](归客不发寻(0x1, 'PlayerList', '世界玩家: ' + _0x5efb97['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
                if (show_kill_num) _0x3ba2d4['push'](归客不发寻(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x3ba2d4['push'](归客不发寻(0x1, 'Time', 'Time: ' + 弦醉不成欢(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x3ba2d4['push'](归客不发寻(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x3ba2d4['push'](归客不发寻(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x3ba2d4['push'](归客不发寻(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x3ba2d4['push'](归客不发寻(0x1, 'Health', '当前血量: ' + _0x43c8ec['current'] + ', 最大值:' + _0x43c8ec['max'] + ', 最小值:' + _0x43c8ec['min'], '§r'));
                if (show_detail_item) _0x3ba2d4['push'](归客不发寻(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x3d2783 = new Date();
                    const _0x14c91a = _0x3d2783['getFullYear']();
                    const _0x3dd1dd = ('0' + (_0x3d2783['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x4a595a = ('0' + _0x3d2783['getDate']())['slice'](-0x2);
                    const _0x540211 = ('0' + _0x3d2783['getHours']())['slice'](-0x2);
                    const _0x35187d = ('0' + _0x3d2783['getMinutes']())['slice'](-0x2);
                    const _0x16be70 = ('0' + _0x3d2783['getSeconds']())['slice'](-0x2);
                    const _0x446285 = _0x14c91a + '-' + _0x3dd1dd + '-' + _0x4a595a + ' ' + _0x540211 + ':' + _0x35187d + ':' + _0x16be70;
                    _0x3ba2d4['push'](归客不发寻(0x1, 'RealTime', _0x446285, '§r'));
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
                let _0x425431 = _0x4c7d49['yaw'];
                _0x425431 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0x425431 >= 0xb4) _0x425431 -= 0x168;
                if (_0x425431 <= -0xb4) _0x425431 += 0x168;
                let _0x29d951 = (_0x54c8dd ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x50b7e6 = (_0x54c8dd ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0xce600a = {};
                if (rc_surround && at_lists['length'] > 0x0 && 声暗问弹者(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0xcb794c = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x3698a4 = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x33e3d9 = _0x3698a4 > -0x5a || _0x3698a4 < 0x5a ? rc_speed : -rc_speed;
                    let _0x2a20ee = _0x425431 > -0x5a || _0x425431 < 0x5a ? rc_speed : -rc_speed;
                    let _0x22cf69 = rc_relative ? _0x33e3d9 : _0x2a20ee;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0xcb794c -= _0x22cf69 * 0x5 : _0xcb794c += _0x22cf69 * 0x5;
                    if (_0xcb794c > 0xb4) _0xcb794c -= 0x168;
                    if (_0xcb794c < -0xb4) _0xcb794c += 0x168;
                    let _0x3c6bb4 = 忽闻水上琵(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0xcb794c,
                        'pitch': 0x0
                    });
                    let _0x331e59 = 弦弦掩抑声(_0x3c6bb4, self_id, 'yaw_pos');
                    _0xce600a = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x29d951 : _0x50b7e6 : rc_speed / 0x8, self_pos, {
                        'yaw': _0x331e59,
                        'pitch': 0x0
                    });
                } else _0xce600a = 忽闻水上琵(rc_legal ? modes['rc_mode'] === 0x0 ? _0x29d951 : _0x50b7e6 : rc_speed / 0x8, self_pos, {
                    'yaw': _0x425431,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0xce600a['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0xce600a['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x425431 + sca_yaw);
                    else 于穆曹二善(_0x4c7d49['pitch'], _0x425431 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0xce600a = 忽闻水上琵(rc_speed / 0x8, self_pos, _0x4c7d49);
                        setMotion(_0xce600a['x'] - self_pos['x'], _0xce600a['y'] - self_pos['y'], _0xce600a['z'] - self_pos['z']);
                    } else {
                        const _0x28ac44 = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0x317551 = getCameraRotation();
                        rc_roll += (_0x28ac44 ? 0x1 : -0x1) * 瑟瑟主人下(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0xce600a['x'] - self_pos['x'], rc_bhop && _0x54c8dd || rc_ahop && _0x121b73['y'] < -0.4 ? rc_y : _0x121b73['y'], _0xce600a['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0xce600a['x'], self_pos['y'], _0xce600a['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined') {
                const _0x2d64c0 = getEntityMotion(self_id);
                const _0x307bf8 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x2d64c0['x'], rc_y, _0x2d64c0['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x307bf8['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x307bf8['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x2d64c0['x'], -rc_y, _0x2d64c0['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x307bf8['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x307bf8['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x3ba2d4['push'](归客不发寻(0x1, 'BalanceTimer', BalanceTimer_t + 'ticks', '§r'));
                if (BalanceTimer_t <= 0x0 && BalanceTimer_st) {
                    callModule(0x1e, '{"value":false}');
                    BalanceTimer_st = false;
                }
                if (BalanceTimer_t > 0x0 && bt_lock) setMotion(0x0, 0x0, 0x0);
            }
            if (ModifyTime) {
                if (mt_custom === 0x19) {
                    let _0x40563e = 0x0;
                    if (modes['mt_time'] === 0x0) _0x40563e = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x40563e = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x40563e = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x40563e = 0x30d4;
                    setWorldData({
                        'time': _0x40563e
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
                        showTipMessage('§bProtoHax §r| ' + _0x2f306f['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x33a778, _0x156633) => globalThis['current_poem'] = JSON['parse'](_0x156633)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0x2f306f['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x3c11f4 = 0x0; _0x3c11f4 < mine_speed; _0x3c11f4++) {
                    let _0xf07015 = mine_list['shift']();
                    if (typeof _0xf07015 != 'object' || _0xf07015['length'] === 0x0) continue;
                    const _0x49cf32 = getBlock(_0xf07015[0x0], _0xf07015[0x1], _0xf07015[0x2]);
                    if (_0x49cf32['namespace'] != 'minecraft:air' && _0x49cf32['namespace'] === mine_name) {
                        destroyBlock(self_id, _0xf07015[0x0], _0xf07015[0x1], _0xf07015[0x2], 0x0);
                        mine_current++;
                    }
                }
                _0x3ba2d4['push'](归客不发寻(0x1, '连锁进度', mine_current + '/' + mine_num, '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x54c8dd) setMotion(0x0, 0x0, 0x0);
            if (_0x3ba2d4['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x3ba2d4['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x3ba2d4['join']('\n'));
                if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x3ba2d4['join'](' | '));
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
            prev_heal = _0x43c8ec['current'];
            prev_ground = _0x54c8dd;
            prev_itemCount = self_itemCount;
        } catch (_0x21a8bf) {
            clientMessage(_0x21a8bf['stack']);
        }
        addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0x1833ed = bn_list['length'] - 0x1; _0x1833ed >= 0x0; _0x1833ed--) {
                let _0x3bc0da = bn_list[_0x1833ed];
                _0x3bc0da['x'] -= _0x3bc0da['speed'];
                if (_0x3bc0da['x'] < 0x0) {
                    bn_list['splice'](_0x1833ed, 0x1);
                    removeText(_0x3bc0da['id']);
                } else updateTextPosition(_0x3bc0da['id'], _0x3bc0da['x'], _0x3bc0da['y']);
            }
        }
        if (Derp) {
            var _0x1ddd1d = getEntityRot(self_id);
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
            if (!dp_head) dp_pitch = _0x1ddd1d['pitch'];
            if (!dp_body) dp_yaw = _0x1ddd1d['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x230deb = getCameraRotation();
            const _0x5b6b4a = 酒欲饮无管(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x225f2b = sca_move ? 弦弦掩抑声(_0x5b6b4a, self_id, 'yaw_pos') : _0x230deb['yaw'] > 0x0 ? 0xb4 - _0x230deb['yaw'] : -0xb4 - _0x230deb['yaw'];
            于穆曹二善(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x225f2b + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0x8f0736 = 弦弦掩抑声(self_id, at_lists[0x0], 'pitch_pos');
            let _0x5c5e0e = 弦弦掩抑声(self_id, at_lists[0x0], 'yaw_pos');
            于穆曹二善(_0x8f0736, _0x5c5e0e);
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

    function onExecuteCommandEvent(_0x40513b) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 归客不发寻(0x0, 'ExecuteCMD', _0x40513b, '§r');
        const _0x15cf59 = _0x40513b['split'](' ');
        if (_0x15cf59[0x0] === '/set' && _0x15cf59[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x15cf59[0x2]),
                'y': Number(_0x15cf59[0x3]),
                'z': Number(_0x15cf59[0x4])
            };
            if (_0x15cf59[0x5]) nx_goalSpeed = Number(_0x15cf59[0x5]);
            归客不发寻(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x15cf59[0x0] === '/set' && _0x15cf59[0x1] === 'default' && _0x15cf59[0x2] === 'config') {
            if (_0x15cf59[0x3] === 'clear') {
                归客不发寻(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (抱琵琶半遮(nx_cfgs + '/' + _0x15cf59[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x15cf59[0x3]);
                归客不发寻(0x0, 'Tip', '已设置默认配置 - ' + _0x15cf59[0x3], '§r');
            } else 归客不发寻(0x0, 'Tip', '文件为空或不存在 - ' + _0x15cf59[0x3], '§r');
            return true;
        }
        if (_0x15cf59[0x0] === '/target') {
            if (_0x15cf59[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x15cf59[0x1] === 'player') at_lists = getPlayerList();
            if (_0x15cf59[0x1] === 'all') at_lists = getEntityList();
            归客不发寻(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x15cf59[0x0] === '/cleaner') {
            if (_0x15cf59[0x1] === 'reload') clear_config = JSON['parse'](抱琵琶半遮(cleaner_path));
            if (_0x15cf59[0x1] === 'load') clear_config = JSON['parse'](抱琵琶半遮(_0x15cf59[0x2]));
        }
        if (_0x15cf59[0x0] === '/bind') {
            if (_0x15cf59[0x1] === 'RunAway') {
                if (typeof globalThis[_0x15cf59[0x2]] == 'undefined' && typeof nx_funcid[_0x15cf59[0x2]] == 'undefined' || typeof globalThis[_0x15cf59[0x3]] == 'undefined' && typeof nx_funcid[_0x15cf59[0x3]] == 'undefined') {
                    归客不发寻(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x5411df = typeof globalThis[_0x15cf59[0x3]] !== 'undefined';
                nx_raBinds[_0x15cf59[0x2]] = {
                    'module': _0x15cf59[0x3],
                    'isNX': _0x5411df
                };
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x15cf59[0x2] + ' 与 ' + _0x15cf59[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x15cf59[0x1] === 'key' && typeof globalThis[_0x15cf59[0x2]] !== 'undefined') {
                nx_isBind = _0x15cf59[0x2];
                归客不发寻(0x0, 'Tip', '按下任意按键与' + _0x15cf59[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x15cf59[0x1]] === 'undefined') nx_binds[_0x15cf59[0x1]] = [];
            if (typeof globalThis[_0x15cf59[0x2]] !== 'undefined' && typeof globalThis[_0x15cf59[0x1]] !== 'undefined') {
                nx_binds[_0x15cf59[0x1]]['push'](_0x15cf59[0x2]);
                归客不发寻(0x0, 'Tip', '绑定 ' + _0x15cf59[0x1] + ' 与 ' + _0x15cf59[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x15cf59[0x0] === '/unbind') {
            if (_0x15cf59[0x1] === 'key' && typeof globalThis[_0x15cf59[0x2]] !== 'undefined') {
                for (let _0x4ccf0c in nx_keys) {
                    if (nx_keys[_0x4ccf0c] === _0x15cf59[0x2]) {
                        delete nx_keys[_0x4ccf0c];
                        break;
                    }
                }
                nx_isBind = _0x15cf59[0x2];
                归客不发寻(0x0, 'Tip', '解除' + _0x15cf59[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x15cf59[0x1]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x15cf59[0x1]] !== 'undefined' && _0x15cf59[0x2] === 'all') {
                delete nx_binds[_0x15cf59[0x1]];
                归客不发寻(0x0, 'Tip', '解除 ' + _0x15cf59[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x15cf59[0x1] === 'all') {
                nx_binds = {};
                归客不发寻(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x15cf59[0x2]] !== 'undefined' && typeof globalThis[_0x15cf59[0x1]] !== 'undefined') {
                nx_binds[_0x15cf59[0x1]]['splice'](nx_binds[_0x15cf59[0x1]]['indexOf'](_0x15cf59[0x2]), 0x1);
                if (nx_binds[_0x15cf59[0x1]]['length'] === 0x0) delete nx_binds[_0x15cf59[0x1]];
                归客不发寻(0x0, 'Tip', '解除绑定 ' + _0x15cf59[0x1] + ' 和 ' + _0x15cf59[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 归客不发寻(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x15cf59[0x0] === '/nx') {
            if (typeof globalThis[_0x15cf59[0x2]] === 'undefined') {
                归客不发寻(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x15cf59[0x1] === 'num') globalThis[_0x15cf59[0x2]] = Number(_0x15cf59[0x3]);
            if (_0x15cf59[0x1] === 'bool') globalThis[_0x15cf59[0x2]] = Boolean(_0x15cf59[0x3]);
            if (_0x15cf59[0x1] === 'str') globalThis[_0x15cf59[0x2]] = _0x15cf59[0x3];
            if (_0x15cf59[0x1] === 'arr') globalThis[_0x15cf59[0x2]] = 相近邀相见(_0x15cf59[0x3]);
            if (_0x15cf59[0x1] === 'obj') globalThis[_0x15cf59[0x2]] = JSON['parse'](_0x15cf59[0x3]);
            归客不发寻(0x0, 'setValue', globalThis[_0x15cf59[0x2]] + ' => ' + _0x15cf59[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x3d8481, _0x47a2f7, _0x1ce9f5) {
        if (ShowCommandOutput) 归客不发寻(0x0, 'Tip', '§e类型:§r' + _0x3d8481 + ' §e结果:§r' + _0x1ce9f5 + ' §e数据:§r' + JSON['stringify'](_0x47a2f7, null, 0x2), '§r');
        if (!_0x1ce9f5) return true;
    }

    function onCallModuleEvent(_0x525300) {
        if (ShowUI) 归客不发寻(0x0, 'UI-Data', JSON['stringify'](_0x525300, null, 0x4), '§r');
        try {
            if (typeof _0x525300 !== 'undefined' && typeof _0x525300['fun'] !== 'undefined' && typeof nx_raBinds[_0x525300['fun']] !== 'undefined') {
                const _0x3092c4 = nx_raBinds[_0x525300['fun']]['module'];
                if (!nx_raBinds[_0x525300['fun']]['isNX']) callModule(nx_funcid[_0x3092c4], JSON['stringify']({
                    'value': _0x525300['value']
                }));
                else 委身为贾人(_0x3092c4, _0x525300['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (typeof _0x525300['name'] === 'undefined') {
                if (Rocker && typeof _0x525300['angle'] !== 'undefined') rc_angles = _0x525300;
                if (Rocker && typeof _0x525300['direction'] !== 'undefined') rc_directions = _0x525300;
                if (Rocker && typeof _0x525300['operation'] !== 'undefined') rc_uds = _0x525300;
                return;
            }
            if (!_0x525300['name']['includes']('NoveXare') && _0x525300['fun'] != 'fun_ride_flying') return;
            if (typeof _0x525300['SauthLogin'] !== 'undefined') {
                Sauths = _0x525300['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x525300['CustomBanTip'] !== 'undefined') bantip = _0x525300['CustomBanTip'];
            if (typeof _0x525300['key'] !== 'undefined') {
                const _0x5968ca = _0x525300['key'];
                if (_0x5968ca === 'ItemEditor') {
                    const _0x42e3ce = getEntityCarriedItem(self_id);
                    const _0xf4ad25 = 司马明年秋(_0x42e3ce, 'Damage:', 's');
                    const _0x5d0624 = 司马明年秋(_0x42e3ce, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x42e3ce['replace']('Damage:' + _0xf4ad25 + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x42e3ce['replace']('{Damage:' + _0x5d0624, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x42e3ce['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id, false, true)), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x5968ca === 'EditBackGround') {
                    const _0x19cfda = 'loginVideoNew.mp4';
                    const _0x3e63d6 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x19cfda)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x3e63d6 + _0x19cfda);
                    file_copy(getResource() + '/' + _0x19cfda, _0x3e63d6 + _0x19cfda);
                    showToast('已复制文件');
                }
                if (_0x5968ca === 'BJDTp') {
                    let _0x114da0 = getPlayerList();
                    let _0x140943 = _0x114da0['length'] > 0x0 ? _0x114da0['map'](_0x345a8e => ({
                        'text': getEntityName(_0x345a8e) + '\n距离: ' + 声暗问弹者(self_id, _0x345a8e)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x2f5c13 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x140943
                    };
                    const _0x31b05d = JSON['stringify'](_0x2f5c13);
                    addForm(_0x31b05d, function(_0xa765b1) {
                        if (_0x114da0['length'] > 0x0 && _0xa765b1 >= 0x0) {
                            let _0x3bb537 = _0x114da0[_0xa765b1];
                            let _0x580f34 = getPos(_0x3bb537);
                            setPos(_0x580f34['x'], _0x580f34['y'] + 1.8, _0x580f34['z']);
                            buildBlock(self_id, _0x580f34['x'], _0x580f34['y'], _0x580f34['z'], 0x1);
                        }
                    });
                }
                if (_0x5968ca === 'exit') {
                    归客不发寻(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        归客不发寻(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x185cb2 = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x185cb2 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x185cb2);
                    }
                    exit();
                    gc();
                }
                if (_0x5968ca === 'DropInv') {
                    for (let _0x28ee02 = 0x0; _0x28ee02 < 0x24; _0x28ee02++) {
                        const _0x2f0042 = getInventory(self_id, _0x28ee02);
                        if (_0x2f0042['namespace'] === 'minecraft:air') continue;
                        if (_0x2f0042['count'] < 0x1) continue;
                        dl_list['push'](_0x28ee02);
                    }
                }
                if (_0x5968ca === 'LookTP') {
                    let _0x4eee39 = {};
                    for (let _0x48350c = 0x0; _0x48350c < 0x1f4; _0x48350c++) {
                        _0x4eee39 = 忽闻水上琵(_0x48350c, getPos(self_id), getEntityRot(self_id));
                        const _0x3532cf = getBlock(_0x4eee39['x'], _0x4eee39['y'], _0x4eee39['z']);
                        if (_0x3532cf['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x4eee39 != {}) {
                        const _0x15044c = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 二年恬然自(_0x4eee39['x'], _0x4eee39['y'] + 1.53, _0x4eee39['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x4eee39['x'], _0x4eee39['y'] + 1.53, _0x4eee39['z']);
                    }
                }
                if (_0x5968ca === 'OpenChest') {
                    let _0xa8c0de = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x30c32e = [];
                    let _0x5293dd = 0x0;
                    let _0x33c7a0 = 面转轴拨弦(self_id);
                    const _0xf77913 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x4fe0a6 = 'shulker_box';
                    for (let _0xfde8a1 = -0x7; _0xfde8a1 < 0x7; _0xfde8a1++) {
                        for (let _0x1ed6e0 = -0x7; _0x1ed6e0 < 0x7; _0x1ed6e0++) {
                            for (let _0x15caf2 = -0x7; _0x15caf2 < 0x7; _0x15caf2++) {
                                const _0x25624b = _0xfde8a1 + _0x33c7a0['x'];
                                const _0x13e99d = _0x1ed6e0 + _0x33c7a0['y'];
                                const _0x46ae99 = _0x15caf2 + _0x33c7a0['z'];
                                const _0x11c315 = getBlock(_0x25624b, _0x13e99d, _0x46ae99);
                                if (_0xf77913['includes'](_0x11c315['namespace']) || _0x11c315['namespace']['includes'](_0x4fe0a6)) {
                                    const _0x33a153 = getBlock(_0x25624b, _0x13e99d + 0x1, _0x46ae99);
                                    _0xa8c0de['buttons'][_0x5293dd] = {
                                        'text': '命名空间: ' + _0x11c315['namespace'] + '\n坐标:   ' + (_0x33a153['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x30c32e[_0x5293dd] = {
                                        'x': _0x25624b,
                                        'y': _0x13e99d,
                                        'z': _0x46ae99
                                    };
                                    _0x5293dd++;
                                }
                            }
                        }
                    }
                    if (_0x5293dd === 0x0) {
                        归客不发寻(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0xa8c0de), function(_0x3fc45b) {
                        const _0x50ec3d = _0x30c32e[_0x3fc45b];
                        buildBlock(self_id, _0x50ec3d['x'], _0x50ec3d['y'], _0x50ec3d['z'], 0x1);
                        归客不发寻(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x5968ca === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x5968ca === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x5968ca === 'rpc_repeat') {
                    for (let _0x23dadc = 0x0; _0x23dadc < rpc_repeat_times; _0x23dadc++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0x5968ca === 'AttackSelf_one') 江头夜送客(self_id, Swing);
                if (_0x5968ca === 'RemoveSelf') removeEntity(self_id);
                if (_0x5968ca === 'QuitGame') leaveWorld();
                if (_0x5968ca === 'sl_delete') setData('sauths', '');
                if (_0x5968ca === 'dc_delete') dc_pos = [];
                if (_0x5968ca === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x4233f6, _0x467110, _0x4e0f59, _0x2b5106) {
                        let _0xacf6c4 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        let _0x3e9af6 = 0x0;
                        const _0x37cbe6 = getResource();
                        const _0x31d66e = JSON['parse'](File['read'](_0x37cbe6 + '/ui/ui_definition.json'))['ui']['map'](_0x32d080 => ({
                            'name': _0x32d080 + '.json',
                            'path': _0x37cbe6 + '/ui/' + _0x32d080 + '.json'
                        }));
                        for (let _0x312578 of _0x31d66e) {
                            if (!_0x312578['name']['includes']('NoveXare')) continue;
                            let _0x3b9562 = JSON['parse'](File['read'](_0x312578['path']));
                            if (typeof _0x3b9562['items'][0x0]['items'] === 'undefined') continue;
                            for (let _0x39d015 of _0x3b9562['items'][0x0]['items']) {
                                if (typeof _0x39d015['name'] === 'undefined' || typeof _0x39d015['key'] === 'undefined') continue;
                                if (_0x4e0f59 && _0x39d015['type'] != 'Switch') continue;
                                if (_0x2b5106 && _0x39d015['type'] == 'Switch') continue;
                                if (!_0x467110 && (_0x39d015['name'] === _0x4233f6 || _0x39d015['key'] === _0x4233f6) || _0x467110 && (_0x39d015['name']['includes'](_0x4233f6) || _0x39d015['key']['includes'](_0x4233f6))) {
                                    _0xacf6c4['items'][0x0]['items'][_0x3e9af6] = _0x39d015;
                                    _0x3e9af6++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x4233f6, JSON['stringify'](_0xacf6c4));
                        showMenu('search_' + _0x4233f6);
                    });
                }
                if (_0x5968ca === 'sp_clear') sp_posList = [];
                if (_0x5968ca === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 面转轴拨弦(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 添酒回灯重([x, y, z]) + '"}]}', function(_0x176a9d) {
                        var _0x5d1a62 = _0x176a9d['split'](',');
                        sp_posList['push']({
                            'x': Number(_0x5d1a62[0x0]),
                            'y': Number(_0x5d1a62[0x1]),
                            'z': Number(_0x5d1a62[0x2])
                        });
                        归客不发寻(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0x5968ca === 'sp_load') {
                    const _0x3d3671 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x3d3671, function(_0x1a4e1d) {
                        var _0xa35c11 = File['read'](_0x1a4e1d);
                        if (_0xa35c11 != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0xa35c11);
                            sp_file = sp_loop ? _0xa35c11 : [];
                            归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x5968ca === 'sp_select') {
                    const _0x1c616a = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x2510cf = file_list(getResource() + '/sounds/NoveXare');
                    _0x2510cf['sort']((_0x16196a, _0x574ce2) => _0x16196a['name']['localeCompare'](_0x574ce2['name']));
                    for (let _0x8fe847 = 0x0; _0x8fe847 < _0x2510cf['length']; _0x8fe847++) {
                        _0x1c616a['buttons'][_0x8fe847] = {
                            'text': _0x2510cf[_0x8fe847]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x565a40 = JSON['stringify'](_0x1c616a);
                    addForm(_0x565a40, function(_0x11ee01) {
                        if (_0x2510cf['length'] > 0x0 && _0x11ee01 >= 0x0) {
                            const _0x48c03d = File['read'](_0x2510cf[_0x11ee01]['path']);
                            if (_0x48c03d != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0x48c03d);
                                sp_file = sp_loop ? _0x48c03d : [];
                                归客不发寻(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 归客不发寻(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x5968ca === 'save_config') {
                    const _0x3d23fb = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x3d23fb, function(_0x47e18b, _0xff2cd4) {
                        File['write'](nx_cfgs + '/' + _0x47e18b + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        归客不发寻(0x0, 'Tip', '保存成功', '§r');
                        if (_0xff2cd4) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x5968ca === 'load_config') {
                    const _0x44d0c6 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x397ac0 = file_list(nx_cfgs);
                    _0x397ac0['sort']((_0x1c7843, _0x5f2fdf) => _0x1c7843['name']['localeCompare'](_0x5f2fdf['name']));
                    for (let _0x87a296 = 0x0; _0x87a296 < _0x397ac0['length']; _0x87a296++) {
                        _0x44d0c6['buttons'][_0x87a296] = {
                            'text': '§e' + _0x397ac0[_0x87a296]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x1b699d = JSON['stringify'](_0x44d0c6);
                    addForm(_0x1b699d, function(_0x1291ef) {
                        if (_0x397ac0['length'] > 0x0 && _0x1291ef >= 0x0) {
                            let _0x41b3f6 = JSON['parse'](抱琵琶半遮(_0x397ac0[_0x1291ef]['path']));
                            let _0xa7ad44 = 0x0;
                            nx_binds = _0x41b3f6['binds'];
                            nx_keys = _0x41b3f6['key_binds'];
                            nx_raBinds = _0x41b3f6['nx_raBinds'];
                            for (let _0x635c3f in _0x41b3f6) {
                                _0xa7ad44++;
                                if (_0x635c3f['includes']('_mode') && _0x525300['index'] && _0x525300['index'] > 0x0) modes[_0x635c3f] = _0x41b3f6[_0x635c3f];
                                if (_0x635c3f != 'nx_raBinds' && _0x635c3f != 'key_binds' && _0x635c3f != 'binds' && _0x635c3f != 'name') 委身为贾人(_0x635c3f, _0x41b3f6[_0x635c3f]);
                            }
                            nx_cfg = _0x41b3f6;
                            归客不发寻(0x0, 'Tip', '成功加载' + _0x41b3f6['name'] + '的配置，共' + _0xa7ad44 + '条配置', '§r');
                        }
                    });
                }
                if (_0x5968ca === 'rpc_select') {
                    const _0x24cf2d = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x48330a = JSON['parse'](File['read'](getResource() + '/NoveXare/PyRpc_Record.json'));
                    for (let _0x287c1c = 0x0; _0x287c1c < _0x48330a['length']; _0x287c1c++) {
                        _0x24cf2d['buttons'][_0x287c1c] = {
                            'text': (_0x48330a[_0x287c1c]['type'] === 'Send' ? '§a' : '§c') + _0x48330a[_0x287c1c]['packet_str']
                        };
                    }
                    const _0x3cdc7c = JSON['stringify'](_0x24cf2d);
                    addForm(_0x3cdc7c, function(_0xec6464) {
                        prev_rpc = {
                            'id': _0x48330a[_0xec6464]['id'],
                            'data': _0x48330a[_0xec6464]['packet_bin']
                        };
                        归客不发寻(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x5968ca === 'cw_range') {
                    let _0x5f59b1 = getPlayerList();
                    let _0x521786 = 0x0;
                    for (let _0x335ab1 of _0x5f59b1) {
                        const _0x586a81 = getPos(_0x335ab1);
                        const _0x381b5f = getDistance(_0x586a81, getPos(self_id));
                        if (!at_whileLists['includes'](_0x335ab1) && _0x381b5f < cw_size && _0x335ab1 != self_id) {
                            at_whileLists['push'](_0x335ab1);
                            _0x521786++;
                        }
                    }
                    归客不发寻(0x0, 'Tip', '已添加' + _0x521786 + '个玩家到白名单', '§r');
                }
                if (_0x5968ca === 'KickSelf')
                    for (let _0x3c623a = 0x0; _0x3c623a < 0x3e8; _0x3c623a++) 江头夜送客(self_id, Swing);
                if (_0x5968ca === 'bc_delete') ac_pos = [];
                if (_0x5968ca === 'cm_depart') departCamera();
                if (_0x5968ca === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x5968ca === 'cm_reset') resetCamera();
                if (_0x5968ca === 'cm_lock') lockCamera();
                if (_0x5968ca === 'ou_recover') otherId = null;
                if (_0x5968ca === 'delete_chest') ca_chest_pos = [];
                if (_0x5968ca === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x5968ca === 'fm_place') fm_pos = self_pos;
                if (_0x5968ca && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x5968ca)) 开宴千呼万(_0x5968ca, globalThis[_0x5968ca]);
                if (_0x5968ca === 'cw_add' || _0x5968ca === 'ct_add' || _0x5968ca === 'ct_add') 茫茫江浸月(_0x5968ca === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0x5968ca === 'fw_target' || _0x5968ca === 'fc_target') 茫茫江浸月(_0x5968ca === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x5968ca === 'cm_target') 茫茫江浸月('cm_target', 0x0);
                if (_0x5968ca === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x5968ca === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x5968ca === 'cw_remove') at_whileLists = [];
                if (_0x5968ca === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x17c17e => ({
                        'name': getEntityName(_0x17c17e),
                        'id': _0x17c17e,
                        'namespace': getEntityNamespace(_0x17c17e)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x21bb62 => ({
                        'name': getEntityName(_0x21bb62),
                        'id': _0x21bb62,
                        'namespace': getEntityNamespace(_0x21bb62)
                    }))
                }));
                if (_0x5968ca === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x5968ca === 'ImportWorldInfo') setWorldData(JSON['parse'](抱琵琶半遮(nx_paths + '/WorldInfo.json')));
                if (_0x5968ca === 'Rusher') {
                    const _0x10343f = getCameraRotation();
                    let _0x2bd3c1 = 忽闻水上琵(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x10343f['yaw'] > 0x0 ? 0xb4 - _0x10343f['yaw'] : -0xb4 - _0x10343f['yaw'],
                        'pitch': -_0x10343f['pitch']
                    });
                    setMotion(_0x2bd3c1['x'] - self_pos['x'], _0x2bd3c1['y'] - self_pos['y'], _0x2bd3c1['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x323061 in _0x525300) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x323061)) continue;
                if (typeof _0x525300['index'] !== 'undefined' && _0x525300['index'] > 0x0) {
                    modes[_0x323061] = _0x525300['index'] - 0x1;
                    nx_cfg[_0x323061] = _0x525300['index'] - 0x1;
                    归客不发寻(0x0, _0x323061['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x525300[_0x323061], '§r');
                    if (_0x323061 === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, '{"array_list":true,"array_offset_x":0' + fst_x / 0x5 + ',"array_offset_y":' + 0x1e + fst_y / 0x5 + '}');
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x323061 === 'Criticals') {
                    if (_0x525300[_0x323061]) playerJump();
                    else {
                        cc_status = false;
                        callModule(0x2c, '{"value":false,"no_move_check":true,"no_fall_check":true}');
                    }
                }
                if (_0x323061 === 'KickAura' && ka_multi) callModule(0x23, '{"value":' + b2s(_0x525300[_0x323061]) + ',"count":' + ka_packet + '}');
                if (_0x323061 === 'RandomArrayList' && !_0x525300[_0x323061]) {
                    for (let _0x15bc0b = 0x0; _0x15bc0b < ral_num; _0x15bc0b++) addCustomArrayList('RandomArrayList' + _0x15bc0b, '', '', false);
                }
                if (_0x323061 === 'Rocker') callModule(0x39, '{"value":' + b2s(modes['rc_mode'] === 0x1 && _0x525300[_0x323061]) + ',"fov":150}');
                if (_0x323061 === 'FakeMove') {
                    if (_0x525300[_0x323061]) fmo_pos = getPos(self_id);
                    else if (!_0x525300[_0x323061]) 欲语迟移船(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x14d44e = {
                        'enable': !_0x525300[_0x323061],
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
                    callModule(0x7, JSON['stringify'](_0x14d44e));
                    setTimeout(() => 欲语迟移船(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x323061 === 'Crasher' && cs_multi) callModule(0x23, '{"value":' + b2s(_0x525300[_0x323061]) + ',"count":' + cs_packet + '}');
                if (_0x323061 === 'ShowNowTime' && !_0x525300[_0x323061]) addCustomArrayList('ShowNowTime', '当前时间: ', '当前时间: ', false);
                if (_0x323061 === 'RandomFunc') {
                    const _0x5c49a1 = Object['keys'](globalThis);
                    let _0x4e984b = [];
                    for (let _0x5e9c77 of _0x5c49a1) {
                        if (typeof globalThis[_0x5e9c77] === 'boolean') _0x4e984b['push'](_0x5e9c77);
                    }
                    const _0x480d60 = _0x4e984b[马客在船举(0x0, _0x4e984b['length'] - 0x1)];
                    委身为贾人(_0x480d60, _0x525300[_0x323061]);
                }
                if (_0x323061 === 'InfiniteAura' && ia_multi) callModule(0x23, '{"value":' + b2s(_0x525300[_0x323061]) + ',"count":' + ia_packet + '}');
                if (_0x323061 === 'FlashBack') sb();
                if (_0x323061 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x525300[_0x323061]) + '}');
                if (_0x323061 === 'PyRpcManager' && rpc_store && !_0x525300[_0x323061]) {
                    rpc_temp['forEach'](_0x1b769a => sendRpc(_0x1b769a['id'], _0x1b769a['data']));
                    归客不发寻(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x323061 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x525300[_0x323061],
                    'defaultValue': false
                });
                if (_0x323061 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x525300[_0x323061],
                    'defaultValue': false
                });
                if (_0x323061 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x525300[_0x323061],
                    'defaultValue': false
                });
                if (_0x323061 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x525300[_0x323061],
                    'defaultValue': false
                });
                if (_0x323061 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x525300[_0x323061],
                    'defaultValue': false
                });
                if (_0x323061 === 'FreeCam') {
                    let _0x4608c5 = {
                        'value': _0x525300[_0x323061],
                        'noclip': _0x525300[_0x323061],
                        'flying': _0x525300[_0x323061]
                    };
                    callModule(0x1, JSON['stringify'](_0x4608c5));
                    if (_0x525300[_0x323061]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x323061 === 'FakeMotion' && fm_auto && _0x525300[_0x323061]) fm_pos = getPos(self_id);
                if (_0x323061 === 'ShadowBoomer' && _0x525300[_0x323061]) sb_pos = getPos(self_id);
                if (_0x323061 === 'AvoidAttack' && _0x525300[_0x323061]) aa_pos = getPos(self_id);
                else if (_0x323061 === 'AvoidAttack' && !_0x525300[_0x323061]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x323061 === 'NoClip') {
                    let _0x91d26d = {
                        'value': _0x525300[_0x323061],
                        'noclip': _0x525300[_0x323061],
                        'flying': _0x525300[_0x323061]
                    };
                    if (nc_depart) callModule(0x9, '{"depart":' + b2s(_0x525300[_0x323061]) + '}');
                    if (nc_bypass) callModule(0x2c, '{"no_move_check":' + b2s(_0x525300[_0x323061]) + ',"no_fall_check":' + b2s(_0x525300[_0x323061]) + ',"value":' + b2s(_0x525300[_0x323061]) + '}');
                    callModule(0x1, JSON['stringify'](_0x91d26d));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x323061 === 'BalanceTimer') {
                    callModule(0x25, '{"value":' + _0x525300[_0x323061] + '}');
                    BalanceTimer_st = !_0x525300[_0x323061];
                }
                if (_0x323061 === 'IQBoost') {
                    const _0x564ba6 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x1954a4 = 马客在船举(0x0, _0x564ba6['length'] - 0x1);
                    sendChatMessage('!' + _0x564ba6[_0x1954a4]);
                }
                if (_0x323061 === 'AutoTarget' && !_0x525300[_0x323061]) at_lists = [];
                if (_0x323061 === 'SoundPlayer' && !_0x525300[_0x323061]) sp_data = [];
                if (_0x323061 === 'FightBot' && !_0x525300[_0x323061]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x323061 === 'ShowSendPacket' && !_0x525300[_0x323061] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x2f3376 = '';
                    for (let _0x32d754 in PacketTmp['send']) _0x2f3376 += '名称:' + _0x32d754 + '，ID:' + PacketTmp['send'][_0x32d754]['id'] + '，发送数量:' + PacketTmp['send'][_0x32d754]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    归客不发寻(0x0, 'sendPacket', '\n' + _0x2f3376, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x323061 === 'ShowReceivePacket' && !_0x525300[_0x323061] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x4cc1d6 = '';
                    for (let _0x59a58f in PacketTmp['receive']) _0x4cc1d6 += '名称:' + _0x59a58f + '，ID:' + PacketTmp['receive'][_0x59a58f]['id'] + '，接受数量:' + PacketTmp['receive'][_0x59a58f]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    归客不发寻(0x0, 'receivePacket', '\n' + _0x4cc1d6, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x323061 === 'Scaffold' && sca_keep && _0x525300[_0x323061]) sca_current = 0x0;
                if (_0x323061 === 'SmartInv' && _0x525300[_0x323061]) {
                    da_slot = 0x23;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x323061 === 'sp_loop' && !_0x525300[_0x323061]) sp_file = null;
                if (_0x323061 === 'NoLiquid' && _0x525300[_0x323061]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x323061 === 'NoLiquid' && !_0x525300[_0x323061]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0x525300[_0x323061] === 'boolean' || typeof _0x525300[_0x323061] === 'number') {
                    if (typeof _0x525300[_0x323061] === 'boolean') {
                        委身为贾人(_0x323061, _0x525300[_0x323061]);
                        return;
                    }
                    nx_cfg[_0x323061] = _0x525300[_0x323061];
                    globalThis[_0x323061] = _0x525300[_0x323061];
                }
            }
        } catch (_0x5bc4f8) {
            clientMessage(_0x5bc4f8['stack']);
        }
    }

    function onPlayerAttackEvent(_0x146cb1, _0x50bfd1) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/sounds/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x50bfd1;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking： §r' + getEntityName(_0x50bfd1));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x50bfd1));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x50bfd1));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x50bfd1));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x50bfd1;
            else {
                if (te_all) getEntityList()['forEach'](_0x1cbb43 => {
                    if (_0x1cbb43 != te_target) 嘈如急雨小(_0x1cbb43, te_target, te_two);
                });
                else 嘈如急雨小(_0x50bfd1, te_target, te_two);
                te_target = null;
                归客不发寻(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x50bfd1);
            else startRidingEntity(_0x50bfd1);
            归客不发寻(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x50bfd1;
            else {
                setEntityNBT(_0x50bfd1, getEntityNBT(te_target));
                enc_target = null;
                归客不发寻(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x50bfd1));
        if (!attack_list['includes'](_0x50bfd1)) attack_list['push'](_0x50bfd1);
        if (_0x50bfd1 === null || attack_list['every'](_0x3a8f89 => last_attack_target['includes'](_0x3a8f89))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x50bfd1;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x50bfd1;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x50bfd1;
            归客不发寻(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x50bfd1), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            const _0x30819f = getPos(_0x50bfd1);
            const _0x3324a1 = getEntitySize(_0x50bfd1);
            for (let _0x184413 = 0x0; _0x184413 < 马客在船举(ap_count, ap_count + 0x14); _0x184413++) 妇遂命酒使(ap_type, _0x30819f['x'] + 马客在船举(-_0x3324a1['x'] * 马客在船举(0x7, 0xa), _0x3324a1['x'] * 马客在船举(0x7, 0xa)) / 0xa, _0x30819f['y'] + 马客在船举(-_0x3324a1['y'] * 0x9, _0x3324a1['y'] * 0x2) / 0xa, _0x30819f['z'] + 马客在船举(-_0x3324a1['x'] * 马客在船举(0x7, 0xa), _0x3324a1['x'] * 马客在船举(0x7, 0xa)) / 0xa, 0x1);
        }
        if (AttackSound) {
            湖间予出官(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x2c1804 = 声暗问弹者(self_id, _0x50bfd1);
            callModule(0x4b, '{"value":true,"line_width":0.25,"mode":2,"distance":' + _0x2c1804 * 1.01 + '}');
            setTimeout(() => callModule(0x4b, '{"value":false}'), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x578cc4 = 京都声问其(_0x50bfd1);
            归客不发寻(0x0, 'Info', '\n' + _0x578cc4 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x50bfd1) + '_' + _0x50bfd1 + '.txt', _0x578cc4);
            return true;
        }
        if (SmartWeapon) {
            let _0x800bec = [];
            for (let _0x315512 = 0x0; _0x315512 < 0x9; _0x315512++) _0x800bec['push']({
                'slot': _0x315512,
                'd': 十六言命曰(self_id, _0x315512)
            });
            _0x800bec['sort']((_0x1c7916, _0x182cb4) => _0x182cb4['d'] - _0x1c7916['d']);
            let _0x234ad1 = _0x800bec[0x0];
            if (_0x234ad1['d'] > 0x1) selectPlayerInventorySlot(self_id, _0x234ad1['slot']);
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x50bfd1)) at_lists['push'](_0x50bfd1);
            else at_lists['splice'](at_lists['indexOf'](_0x50bfd1), 0x1);
            归客不发寻(0x0, !at_lists['includes'](_0x50bfd1) ? 'delTarget' : 'addTarget', getEntityName(_0x50bfd1), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x1440f7 = getPos(_0x50bfd1);
            const _0x5e00da = 弦弦掩抑声(self_pos, _0x1440f7, 'yaw_pos');
            const _0x2b091f = 忽闻水上琵(-ckb_len / 0x2, self_pos, {
                'yaw': _0x5e00da,
                'pitch': 0x0
            });
            setEntityMotion(_0x50bfd1, _0x2b091f['x'] - self_pos['x'], ckb_y, _0x2b091f['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x50bfd1)) at_whileLists['push'](_0x50bfd1);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x50bfd1), 0x1);
            归客不发寻(0x0, !at_whileLists['includes'](_0x50bfd1) ? 'delTarget' : 'addTarget', getEntityName(_0x50bfd1), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 唤始出来犹(getEntityName(_0x50bfd1));
            归客不发寻(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) {
            th_target = _0x50bfd1;
            th_tick = 0x0;
        }
        if (KillAura) return 马客在船举(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x536632) {
        if (_0x536632 === '') return true;
        if (ReplaceMsg) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x536632);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x536632);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x536632);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x536632);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x536632);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x536632);
            return true;
        }
        if (ChatSuffix && !_0x536632['includes'](cs_text)) {
            sendChatMessage(_0x536632 + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x1ac86f, _0x4923c4) {
        if (ChatManager && (_0x1ac86f != getEntityName(self_id) && cm_other || _0x1ac86f == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x492679 = 0x0; _0x492679 < cm_repeat_times; _0x492679++) sendChatMessage(_0x4923c4);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 归客不发寻(0x0, 'clientMsg', '来源: ' + _0x1ac86f + ', 消息:' + _0x4923c4, '§r');
        if (ChatManager) return cm_black['some'](_0x421d1a => _0x4923c4['includes'](_0x421d1a));
        if (ChatManager && _0x4923c4['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x4480ef = Math['round'](马客在船举(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x31ef4b = createText(bn_format['replaceAll']('[名字]', _0x1ac86f)['replaceAll']('[消息]', _0x4923c4), 'Center', nx_screen['screenWidth'], _0x4480ef);
            if (_0x31ef4b > -0x1) bn_list['push']({
                'id': _0x31ef4b,
                'speed': 马客在船举(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x4480ef
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x257b51) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (LongJump) {
            const _0x71d4d1 = getEntityMotion(_0x257b51);
            const _0xddd86c = getCameraRotation();
            const _0x151a12 = 酒欲饮无管(_0x71d4d1, self_pos, 0x14);
            const _0x114155 = 忽闻水上琵(lj_len / 0x4, self_pos, {
                'yaw': _0xddd86c['yaw'] > 0x0 ? 0xb4 - _0xddd86c['yaw'] : -0xb4 - _0xddd86c['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x114155['x'] - self_pos['x'], lj_y, _0x114155['z'] - self_pos['z']);
        }
    }

    function onPyRpcReceiveEvent(_0x4cfc31, _0x30ebc4) {
        if (PyRpcManager && rpc_rec) {
            const _0x4d3467 = new Uint8Array(_0x30ebc4);
            const _0x4fde5c = Array['from'](_0x4d3467, _0x15af62 => _0x15af62['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x4a0a49 = 左迁九江郡(_0x30ebc4)['toLowerCase']();
            let _0x255642 = false;
            let _0x52a0a0 = rpc_tipWhite['some'](_0x301f5c => _0x4a0a49['includes'](_0x301f5c));
            if (!_0x255642) _0x255642 = rpc_black['some'](_0x174abd => _0x4a0a49['includes'](_0x174abd));
            if (!_0x255642) _0x255642 = rpc_recBlack['some'](_0x12983e => _0x4a0a49['includes'](_0x12983e));
            if (rpc_white['some'](_0x4a0696 => _0x4a0a49['includes'](_0x4a0696))) _0x255642 = false;
            if (rpc_recWhite['some'](_0x4b9abe => _0x4a0a49['includes'](_0x4b9abe))) _0x255642 = false;
            if (rpc_record && (_0x52a0a0 && rpc_exclude || !_0x52a0a0)) {
                const _0x2399ca = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x271d21 = JSON['parse'](抱琵琶半遮(_0x2399ca));
                _0x271d21[_0x271d21['length']] = {
                    'packet_hex': _0x4fde5c,
                    'packet_format': 六幺大弦嘈(_0x4fde5c),
                    'packet_str': 左迁九江郡(_0x30ebc4),
                    'packet_bin': _0x4d3467,
                    'time': Date['now'](),
                    'id': _0x4cfc31,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x255642
                };
                File['write'](_0x2399ca, JSON['stringify'](_0x271d21, null, 0x4));
            }
            let _0x4895f6 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x4895f6 = 左迁九江郡(_0x30ebc4);
            if (modes['rpc_mode'] === 0x1) _0x4895f6 = _0x4fde5c;
            if (modes['rpc_mode'] === 0x2) _0x4895f6 = 六幺大弦嘈(_0x4fde5c);
            if (modes['rpc_mode'] === 0x3) _0x4895f6 = JSON['stringify'](_0x30ebc4);
            const _0xf9bcb1 = _0x255642 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x52a0a0 && (rpc_showDisintercept && !_0x255642 || rpc_showIntercept && _0x255642)) 归客不发寻(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4cfc31 + '\n' : '') + _0x4895f6 + _0xf9bcb1, '§r');
            return _0x255642;
        }
    }

    function onPyRpcSendEvent(_0x36fb27, _0x4aca2e) {
        if (PyRpcManager && rpc_send) {
            const _0x47e0a6 = new Uint8Array(_0x4aca2e);
            const _0x26dc49 = Array['from'](_0x47e0a6, _0x1fcbcf => _0x1fcbcf['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x10f7bd = 左迁九江郡(_0x4aca2e)['toLowerCase']();
            let _0x20f444 = false;
            let _0x517566 = rpc_tipWhite['some'](_0x42786c => _0x10f7bd['includes'](_0x42786c));
            if (!_0x20f444) _0x20f444 = rpc_black['some'](_0x32baa9 => _0x10f7bd['includes'](_0x32baa9));
            if (!_0x20f444) _0x20f444 = rpc_sendBlack['some'](_0x71dfc9 => _0x10f7bd['includes'](_0x71dfc9));
            if (rpc_white['some'](_0x590c62 => _0x10f7bd['includes'](_0x590c62))) _0x20f444 = true;
            if (rpc_sendWhite['some'](_0x141ee5 => _0x10f7bd['includes'](_0x141ee5))) _0x20f444 = false;
            if (!_0x517566) prev_rpc = {
                'id': _0x36fb27,
                'data': _0x47e0a6
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x36fb27,
                'data': _0x47e0a6
            });
            if (rpc_intercept) _0x20f444 = true;
            if (rpc_record && (_0x517566 && rpc_exclude || !_0x517566)) {
                const _0x3f1dce = getResource() + '/NoveXare/PyRpc_Record.json';
                const _0x3d0855 = JSON['parse'](抱琵琶半遮(_0x3f1dce));
                _0x3d0855[_0x3d0855['length']] = {
                    'packet_hex': _0x26dc49,
                    'packet_format': 六幺大弦嘈(_0x26dc49),
                    'packet_str': 左迁九江郡(_0x4aca2e),
                    'packet_bin': _0x47e0a6,
                    'time': Date['now'](),
                    'id': _0x36fb27,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x20f444
                };
                File['write'](_0x3f1dce, JSON['stringify'](_0x3d0855, null, 0x4));
            }
            let _0x4acd5e = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x4acd5e = 左迁九江郡(_0x4aca2e);
            if (modes['rpc_mode'] === 0x1) _0x4acd5e = _0x26dc49;
            if (modes['rpc_mode'] === 0x2) _0x4acd5e = 六幺大弦嘈(_0x26dc49);
            if (modes['rpc_mode'] === 0x3) _0x4acd5e = JSON['stringify'](_0x4aca2e);
            for (let _0x2f9f20 of rpc_config) {
                if (typeof _0x2f9f20 === 'object') {
                    if (_0x2f9f20['match_mode'] === 0x0 && _0x4acd5e['includes'](_0x2f9f20['packet'])) _0x4acd5e = remarks;
                    if (_0x2f9f20['match_mode'] === 0x1 && _0x4acd5e['includes'] === _0x2f9f20['packet']) _0x4acd5e = remarks;
                } else continue;
            }
            let _0x3cc2b4 = _0x20f444 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x517566 && (rpc_showDisintercept && !_0x20f444 || rpc_showIntercept && _0x20f444)) 归客不发寻(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x36fb27 + '\n' : '') + _0x4acd5e + _0x3cc2b4, '§r');
            return _0x20f444;
        }
    }

    function onEntityBehaviorEvent(_0x4194d1, _0x43edf0, _0x1880bc) {
        if (ShowEntityAnime) 归客不发寻(0x0, 'EntityBehavior', '实体ID:' + _0x4194d1 + ' 实体昵称:' + getEntityName(_0x4194d1) + ' 行为ID:' + _0x43edf0 + ' 行为数据:' + _0x1880bc, '§r');
        if (_0x43edf0 === 0x27 && _0x4194d1 === av_id) av_id = null;
        if (_0x43edf0 === 0x3 && attack_list['includes'](_0x4194d1)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x12d758 = 0x0; _0x12d758 < 0x32; _0x12d758++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x4194d1) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            归客不发寻(0x0, 'Kill', 'You Kill ' + getEntityName(_0x4194d1), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/sounds/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/sounds/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x43edf0 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x4194d1);
        if (_0x43edf0 === 0x2 && attack_list['includes'](_0x4194d1)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x43edf0 === 0x4 && _0x4194d1 != self_id)) {
            let _0x5c1b49 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x4194d1;
            if (声暗问弹者(_0x5c1b49, self_id) < fb_range) 江头夜送客(_0x4194d1, Swing);
            fb_ishurt = false;
        }
        if (_0x43edf0 === 0x2 && _0x4194d1 === self_id) {
            let _0x57861b = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/sounds/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 归客不发寻(0x0, 'Hurt', '受伤类型: ' + _0x1880bc, '§r');
            if (HurtJump) setMotion(_0x57861b['x'], hj_height, _0x57861b['z']);
            if (AntiKB) {
                let _0xed3c59 = akb_hor / 0x64;
                let _0x240f39 = akb_y / 0x64;
                setMotion(_0x57861b['x'] - _0xed3c59 * _0x57861b['x'], _0x57861b['y'] - _0x240f39 * _0x57861b['y'], _0x57861b['z'] - _0xed3c59 * _0x57861b['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x1880bc == 0x2) fb_ishurt = true;
            if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
        }
        if (_0x43edf0 === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x51c357, _0x53e655, _0x3cbeeb, _0x2d7fc2, _0x5b64b0) {
        const _0xf00e4b = getCarried(_0x51c357);
        const _0x42b53d = getBlock(_0x53e655, _0x3cbeeb, _0x2d7fc2);
        if (_0x42b53d['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/sounds/destroy.mp3');
        if (ShowDestroyBlock) 归客不发寻(0x0, 'destroy', '命名空间:' + _0x42b53d['namespace'] + ', §rID:' + _0x42b53d['id'] + ', 方块选择面:' + _0x5b64b0 + ', §r特殊值:' + _0x42b53d['aux'] + '\n手持:' + _0xf00e4b['name'] + '-[' + _0xf00e4b['namespace'] + '], 特殊值:' + _0xf00e4b['aux'] + '\n坐标:[' + _0x53e655 + ', ' + _0x3cbeeb + ', ' + _0x2d7fc2 + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x53e655 + ' ' + _0x3cbeeb + ' ' + _0x2d7fc2 + '的' + _0x42b53d['namespace']);
        if (Miner && (_0x42b53d['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current < mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x4ddafa => _0x42b53d['namespace']['includes'](_0x4ddafa))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x3a7266 => !_0x42b53d['namespace']['includes'](_0x3a7266)))) {
                mine_destroy = true;
                mine_name = _0x42b53d['namespace'];
            }
            if (mine_destroy && mine_name != _0x42b53d['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x42b53d['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x53e655,
                    'y': _0x3cbeeb,
                    'z': _0x2d7fc2
                }) <= mine_distance && mine_destroy) {
                let _0x5f4e0b = [
                    [_0x53e655 + 0x1, _0x3cbeeb, _0x2d7fc2],
                    [_0x53e655 - 0x1, _0x3cbeeb, _0x2d7fc2],
                    [_0x53e655, _0x3cbeeb, _0x2d7fc2 + 0x1],
                    [_0x53e655, _0x3cbeeb, _0x2d7fc2 - 0x1],
                    [_0x53e655, _0x3cbeeb + 0x1, _0x2d7fc2],
                    [_0x53e655, _0x3cbeeb - 0x1, _0x2d7fc2]
                ];
                for (p of _0x5f4e0b) {
                    const _0x449311 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x449311['namespace'] != 'minecraft:air' && _0x42b53d['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x4a9236 = getWorldData();
            if (ShowGameInfo) 归客不发寻(0x0, 'Tip', '进入世界 ' + _0x4a9236['levelName'] + ' ，难度:' + _0x4a9236['difficulty'] + ' 游戏模式:' + _0x4a9236['gameType'] + ' 游戏时间:' + _0x4a9236['time'] + ' 随机刻速度:' + _0x4a9236['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x292bf4, _0x1d73b9, _0x58b67c, _0xcc077, _0x4e0cc8) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/sounds/build.mp3');
        const _0x349462 = getCarried(_0x292bf4);
        const _0x473170 = getBlock(_0x1d73b9, _0x58b67c, _0xcc077);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x349462['name']);
        if (ShowClickBlock) 归客不发寻(0x0, 'build', '命名空间:' + _0x473170['namespace'] + ', §rID:' + _0x473170['id'] + ', 方块选择面:' + _0x4e0cc8 + ', §r特殊值:' + _0x473170['aux'] + '\n手持:' + _0x349462['name'] + '-[' + _0x349462['namespace'] + '], 特殊值:' + _0x349462['aux'] + '\n坐标:[' + _0x1d73b9 + ', ' + _0x58b67c + ', ' + _0xcc077 + ']', '§r');
        if (ClickTP) 欲语迟移船(_0x1d73b9, _0x58b67c + 0x2, _0xcc077);
        const _0x871aad = ChestAura && ca_rot && _0x473170['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x292bf4) || ClickRot;
        if (_0x871aad) {
            let _0x286609 = {
                'x': _0x1d73b9,
                'y': _0x58b67c,
                'z': _0xcc077
            };
            const _0x32941e = 酒欲饮无管(getEntityMotion(_0x292bf4), getPos(_0x292bf4), 0x14);
            let _0x3144e0 = 弦弦掩抑声(_0x32941e, _0x286609, 'pitch_pos');
            let _0x52476e = 弦弦掩抑声(_0x32941e, _0x286609, 'yaw_pos');
            于穆曹二善(_0x3144e0, _0x52476e);
        }
        if (GetCommand && _0x473170['namespace']['includes']('command_block')) {
            let _0x5a7cb5 = getBlockEntityNBT(_0x1d73b9, _0x58b67c, _0xcc077);
            let _0x1a3dbd = 琵琶行浔阳(_0x5a7cb5, 'Command:"', '",Cu');
            let _0x483d8e = 琵琶行浔阳(_0x5a7cb5, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x1a1961 = 琵琶行浔阳(_0x5a7cb5, 'TickDelay:', ',Tr');
            归客不发寻(0x0, 'Cmd', '坐标:[' + _0x1d73b9 + ' ' + _0x58b67c + ' ' + _0xcc077 + ']\n指令:' + _0x1a3dbd + '\n是否自动:' + _0x483d8e + '\n执行延迟:' + _0x1a1961 + 'Tick', '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x1d73b9, _0x58b67c, _0xcc077];
            else {
                setBlockEntityData(_0x1d73b9, _0x58b67c, _0xcc077, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                归客不发寻(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x492710 = [
                [_0x1d73b9, _0x58b67c - 0x1, _0xcc077],
                [_0x1d73b9, _0x58b67c + 0x1, _0xcc077],
                [_0x1d73b9, _0x58b67c, _0xcc077 - 0x1],
                [_0x1d73b9, _0x58b67c, _0xcc077 + 0x1],
                [_0x1d73b9 - 0x1, _0x58b67c, _0xcc077],
                [_0x1d73b9 + 0x1, _0x58b67c, _0xcc077]
            ];
            setBlock(_0x492710[_0x4e0cc8][0x0], _0x492710[_0x4e0cc8][0x1], _0x492710[_0x4e0cc8][0x2], _0x349462['namespace'], _0x349462['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x1d73b9, _0x58b67c, _0xcc077, _0x349462['namespace'], _0x349462['aux']);
        if (ClickDestroy && !AutoDestroy) 慢捻抹复挑({
            'x': _0x1d73b9,
            'y': _0x58b67c,
            'z': _0xcc077
        });
        if (AutoBed && _0x473170['namespace'] === 'minecraft:bed' && !ab_running) {
            归客不发寻(0x0, 'Tip', '请手持方块', '§r');
            let _0x2e919b = [
                [_0x1d73b9 + 0x1, _0x58b67c, _0xcc077],
                [_0x1d73b9 - 0x1, _0x58b67c, _0xcc077],
                [_0x1d73b9, _0x58b67c, _0xcc077 + 0x1],
                [_0x1d73b9, _0x58b67c, _0xcc077 - 0x1],
                [_0x1d73b9, _0x58b67c + 0x1, _0xcc077]
            ];
            ab_running = true;
            for (let _0x228e1c of _0x2e919b) {
                const _0x2a2c98 = getBlock(_0x228e1c[0x0], _0x228e1c[0x1], _0x228e1c[0x2]);
                if (_0x2a2c98['namespace'] === 'minecraft:air') 事今漂沦憔(_0x228e1c[0x0], _0x228e1c[0x1], _0x228e1c[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x349462['namespace']['includes']('_sword') || _0x349462['namespace']['includes']('_pickaxe') || _0x349462['namespace']['includes']('_axe') || _0x349462['namespace']['includes']('shears'))) {
            if (bk_origin) {
                callModule(0xf, '{"value":true}');
                setTimeout(() => callModule(0xf, '{"value":false}'), bk_last * 0x32);
                return true;
            }
            const _0x10593b = Math['round'](bk_range);
            _0x2751da: for (let _0x3ae38e = -_0x10593b; _0x3ae38e <= _0x10593b; _0x3ae38e++) {
                for (let _0x1a0e8e = -_0x10593b; _0x1a0e8e < _0x10593b; _0x1a0e8e++) {
                    for (let _0x45dda8 = -_0x10593b; _0x45dda8 <= _0x10593b; _0x45dda8++) {
                        let _0x208493 = _0x1d73b9 + _0x3ae38e;
                        let _0x196f31 = _0x58b67c + _0x1a0e8e;
                        let _0x28fc1f = _0xcc077 + _0x45dda8;
                        let _0x1756c5 = getBlock(_0x208493, _0x196f31, _0x28fc1f);
                        if (bk_bed && _0x1756c5['namespace'] === 'minecraft:bed' || bk_chest && _0x1756c5['namespace'] === 'minecraft:chest') {
                            let _0x34923c = getBlock(_0x208493, _0x196f31 + 0x1, _0x28fc1f);
                            if (_0x34923c['namespace'] != 'minecraft:air' && bk_up) _0x196f31 += 0x1;
                            if (bk_tool && _0x34923c['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x292bf4, 枫叶荻花秋(_0x292bf4, '_pickaxe'));
                            if (bk_tool && _0x34923c['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x292bf4, 枫叶荻花秋(_0x292bf4, '_axe'));
                            if (bk_tool && _0x34923c['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x292bf4, 枫叶荻花秋(_0x292bf4, 'shears'));
                            bk_pos = {
                                'ex': _0x208493,
                                'ey': _0x196f31,
                                'ez': _0x28fc1f
                            };
                            bk_timer = 0x0;
                            break _0x2751da;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x1d73b9,
                'y': _0x58b67c,
                'z': _0xcc077
            });
            归客不发寻(0x0, 'Tip', '已添加[' + _0x1d73b9 + ', ' + _0x58b67c + ', ' + _0xcc077 + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x3d7366 = getCameraRotation();
            for (let _0x39cb55 = 0x0; _0x39cb55 < fb_len + 0x1; _0x39cb55++) fb_list['push'](忽闻水上琵(_0x39cb55, 面转轴拨弦(_0x292bf4), {
                'pitch': 0x0,
                'yaw': _0x3d7366['yaw'] > 0x0 ? 0xb4 - _0x3d7366['yaw'] : -0xb4 - _0x3d7366['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0x473170['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0x52867f) {
        if (ShowPressKey) 归客不发寻(0x0, 'KeyBoard', '按下键值 ' + _0x52867f, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x52867f] !== 'undefined') 委身为贾人(nx_keys[_0x52867f], !globalThis[nx_keys[_0x52867f]]);
        if (nx_isBind != null && _0x52867f != 0x42) {
            nx_keys[_0x52867f] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            归客不发寻(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x52867f, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x309fc7) {
        if (ShowUpliftKey) 归客不发寻(0x0, 'Tip', '释放键值 ' + _0x309fc7, '§r');
    }

    function onSendServerPacketEvent(_0x426c83, _0x5d5743) {
        if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x426c83 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0x426c83 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0x426c83 === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0x426c83 === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x2a22c4 = PacketTranslate[PacketTranslate['map'](_0x28a663 => _0x28a663['id'])['indexOf'](_0x426c83)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x5d5743] === 'undefined') PacketTmp['send'][_0x5d5743] = {
                    'id': _0x426c83,
                    'Translate': _0x2a22c4,
                    'count': 0x1
                };
                PacketTmp['send'][_0x5d5743]['count']++;
            }
            const _0x3de855 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x563747 = [];
            if (sp_id) _0x563747['push'](_0x426c83);
            if (sp_name) _0x563747['push'](_0x5d5743);
            if (sp_trans) _0x563747['push'](_0x2a22c4);
            let _0x178187 = sp_intercept && (intercept['includes'](_0x426c83) || intercept['includes'](_0x5d5743));
            if (!sp_ignore || !(ignore['includes'](_0x426c83) || ignore['includes'](_0x5d5743))) 归客不发寻(0x0, 'SendPacket', '发送数据包: ' + _0x563747['join'](' - ') + (_0x178187 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x178187;
        }
    }

    function onReceiveServerPacketEvent(_0x42d79b, _0x3e6c6b) {
        if (ShadowBoomer && _0x42d79b == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x42d79b == 0x55) {
            KillAura = false;
            归客不发寻(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x42d79b === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x42d79b === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x42d79b === 0x9) return true;
        if (ModifyTime && _0x42d79b === 0xa) return true;
        if (ca_check && _0x42d79b === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x42d79b === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0x42d79b === 0x12) return true;
        if (NoCamShake && _0x42d79b === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0xad86ae = PacketTranslate[PacketTranslate['map'](_0x3e26a6 => _0x3e26a6['id'])['indexOf'](_0x42d79b)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x3e6c6b] === 'undefined') PacketTmp['receive'][_0x3e6c6b] = {
                    'id': _0x42d79b,
                    'Translate': _0xad86ae,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x3e6c6b]['count']++;
            }
            const _0x11f8ad = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x17816b = [];
            if (srp_id) _0x17816b['push'](_0x42d79b);
            if (srp_name) _0x17816b['push'](_0x3e6c6b);
            if (srp_trans) _0x17816b['push'](_0xad86ae);
            let _0x4aeddf = srp_intercept && (intercept['includes'](_0x42d79b) || intercept['includes'](_0x3e6c6b));
            if (!srp_ignore || !(ignore['includes'](_0x42d79b) || ignore['includes'](_0x3e6c6b))) 归客不发寻(0x0, 'ReceivePacket', '接收数据包: ' + _0x17816b['join'](' - ') + (_0x4aeddf ? '\n§e已拦截数据包' : ''), '§r');
            return _0x4aeddf;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x42d79b === 0x9;
    }

    function onTouchMotionDownEvent(_0x754726, _0x39008d, _0x4a991e) {
        if (SafeAttack) {
            const _0x5ca407 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x1205b1 = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x57ef34 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x39e899 = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 声思似诉平(self_id, at_lists[0x0], sa_fov, 0x0) && 声暗问弹者(self_id, at_lists[0x0]) < sa_range && _0x39008d > _0x5ca407 && _0x39008d < _0x1205b1 && _0x4a991e > _0x57ef34 && _0x4a991e < _0x39e899) 江头夜送客(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x27c31c, _0x201a40) {
        const _0x32232f = 音铮铮然有(_0x201a40);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x32232f['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x32232f['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x27c31c > cs_sort) && cs_current < cs_maxCount) {
            let _0xd9abd4 = cs_black['length'] === 0x0 || cs_black['some'](_0x34d2ee => _0x32232f['namespace']['includes'](_0x34d2ee));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x642bb1 => _0x32232f['namespace']['includes'](_0x642bb1))) _0xd9abd4 = false;
            if (_0x27c31c < cs_min && _0x27c31c > cs_max) _0xd9abd4 = false;
            if (_0x32232f['attackDamage'] !== 0x0 && _0x32232f['attackDamage'] < cs_min_damage) _0xd9abd4 = false;
            if (_0x32232f['damage'] !== 0x0 && _0x32232f['damage'] < cs_min_lasting) _0xd9abd4 = false;
            if (!cs_weapon && _0x32232f['attackDamage'] > 0x0 && _0x32232f['damage'] > 0x0) _0xd9abd4 = false;
            if (!cs_armor && _0x32232f['attackDamage'] === 0x0 && _0x32232f['damage'] > 0x0) _0xd9abd4 = false;
            if (!cs_other && _0x32232f['attackDamage'] === 0x0 && _0x32232f['damage'] === 0x0) _0xd9abd4 = false;
            if (cs_sort) cs_sort = _0x27c31c;
            if (_0xd9abd4) cs_timer = 0x0;
            if (_0xd9abd4) cs_current++;
            return _0xd9abd4;
        }
        if (ShowMoveContainer) 归客不发寻(0x0, 'Container', '§e容器所在格子: §r' + _0x27c31c + '\n§e物品NBT数据: §r' + _0x201a40, '§r');
    }

    function onPlayerAuthInputEvent(_0x232a45) {
        if (PlayerAuthInputPacket) 归客不发寻(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x232a45.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x232a45.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x232a45['pos']['x']['toFixed'](0x2) + ', ' + _0x232a45['pos']['y']['toFixed'](0x2) + ',' + _0x232a45['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x232a45['delta']['x']['toFixed'](0x2) + ', ' + _0x232a45['delta']['y']['toFixed'](0x2) + ', ' + _0x232a45['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x232a45['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x232a45['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x232a45['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x232a45['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x232a45['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0xdfcfe1) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0xdfcfe1);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0xf215cd = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x5ce4ac = _0xdfcfe1['replace'](琵琶行浔阳(_0xdfcfe1, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0xf215cd)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x5ce4ac['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x48c63e) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0x48c63e);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x316602) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x316602);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x3260c8 = JSON['parse'](Sauths);
            if (typeof _0x3260c8['sauth_json'] !== 'undefined') _0x3260c8 = _0x3260c8['sauth_json'];
            return _0x3260c8;
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