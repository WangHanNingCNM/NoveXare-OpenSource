/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 08 - 05  19：18：34
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e08§b05§f191834§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x1ba9c3, _0x1fef5a, _0x2dbdb9) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x1ba9c3,
            'y': _0x1fef5a,
            'z': _0x2dbdb9
        },
        'type': 0x11
    });
    const getPos = _0x4a6318 => {
        let _0x3db7a4 = getEntityPos(_0x4a6318);
        if (_0x3db7a4) _0x3db7a4['y'] += getPos_offset;
        return _0x3db7a4 || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x16836b, _0x3af56b, _0x44ccc1, _0x4f31e7 = {
        'x': 0x0,
        'y': 0x0,
        'z': 0x0
    }) => sendPlayerAuthInput({
        'pos': {
            'x': _0x16836b,
            'y': _0x3af56b,
            'z': _0x44ccc1
        },
        'yHeadRot': 0x0,
        'inputMode': 0x2,
        'playMode': 0x0,
        'flags': [0x6],
        'motion': _0x4f31e7,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        }
    });
    const movePlayer = (_0x40b434, _0x12cf47, _0x4c5732, _0x5d3e94 = true) => sendMovePlayer({
        'id': self_id,
        'pos': {
            'x': _0x40b434,
            'y': _0x12cf47,
            'z': _0x4c5732
        },
        'yHeadRot': 0x0,
        'mode': 0x0,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        },
        'ground': _0x5d3e94
    });

    function calHexPos(_0x1b431d) {
        function _0x37d890(_0x454fd5) {
            if (_0x454fd5['length'] !== 0x10) throw new Error('Hex data must be 16 characters');
            const _0x3504e4 = new Uint8Array(0x8);
            for (let _0x52cd9a = 0x0; _0x52cd9a < 0x8; _0x52cd9a++) _0x3504e4[_0x52cd9a] = parseInt(_0x454fd5['substring'](_0x52cd9a * 0x2, _0x52cd9a * 0x2 + 0x2), 0x10);
            const _0x4e02e1 = new DataView(_0x3504e4['buffer']);
            return _0x4e02e1['getFloat64'](0x0, false);
        }
        const _0x5c20c1 = '76616c7565';
        const _0x480a4d = _0x1b431d['indexOf'](_0x5c20c1);
        if (_0x480a4d === -0x1) throw new Error('Value key not found in hex string');
        let _0x473937 = _0x480a4d + _0x5c20c1['length'];
        const _0x364904 = _0x1b431d['substring'](_0x473937, _0x473937 + 0x2);
        if (_0x364904 !== '93') throw new Error('Expected array tag \'93\' after value key');
        _0x473937 += 0x2;
        const _0x1c8ae2 = [];
        for (let _0x19c9f2 = 0x0; _0x19c9f2 < 0x3; _0x19c9f2++) {
            const _0x41ec8b = _0x1b431d['substring'](_0x473937, _0x473937 + 0x2);
            if (_0x41ec8b !== 'cb') throw new Error('Expected float64 tag \'cb\' at position ' + _0x473937 + ', found ' + _0x41ec8b);
            _0x473937 += 0x2;
            const _0x1e7171 = _0x1b431d['substring'](_0x473937, _0x473937 + 0x10);
            _0x473937 += 0x10;
            const _0x25f1c2 = _0x37d890(_0x1e7171);
            _0x1c8ae2['push'](_0x25f1c2);
        }
        return {
            'x': Number(_0x1c8ae2[0x0]['toFixed'](0x2)),
            'y': Number(_0x1c8ae2[0x1]['toFixed'](0x2)),
            'z': Number(_0x1c8ae2[0x2]['toFixed'](0x2))
        };
    }
    const 臣密言臣以 = _0x4ba162 => {
        let _0x3772f2 = '';
        for (let _0x57f1a2 = 0x0; _0x57f1a2 < _0x4ba162['length']; _0x57f1a2++) _0x3772f2 += _0x4ba162['charCodeAt'](_0x57f1a2)['toString'](0x10)['padStart'](0x2, '0');
        return _0x3772f2;
    };
    const 险衅夙遭闵 = _0x568cff => {
        愍臣孤弱躬(0x5db23ae, '93c401729200c4314d696e6563726166743a7065743a7065745f736b696c6c5f667269656e645f6332735f6765745f667269656e645f706f73c0');
        愍臣孤弱躬(0x5db23ae, '93c40163920082c407706c617965727391c4' + _0x568cff['length']['toString'](0x10)['toLowerCase']()['padStart'](0x2, '0') + 臣密言臣以(_0x568cff) + 'c40b726571506c617965724964c4' + self_id['length']['toString'](0x10)['toLowerCase']()['padStart'](0x2, '0') + 臣密言臣以(self_id) + 'c0');
    };
    const 凶生孩六月 = _0x11a07d => {
        const _0x19715f = new Uint8Array(_0x11a07d);
        let _0x118672 = '';
        for (let _0x7d2b = 0x0; _0x7d2b < _0x19715f['length'];) {
            let _0xfd05e7 = _0x19715f[_0x7d2b++];
            if (_0xfd05e7 <= 0x7f) _0x118672 += String['fromCharCode'](_0xfd05e7);
            else if (_0xfd05e7 >> 0x5 === 0x6) {
                let _0x381a0e = _0x19715f[_0x7d2b++];
                _0x118672 += String['fromCharCode']((_0xfd05e7 & 0x1f) << 0x6 | _0x381a0e & 0x3f);
            } else if (_0xfd05e7 >> 0x4 === 0xe) {
                let _0x2f68fd = _0x19715f[_0x7d2b++];
                let _0x252eec = _0x19715f[_0x7d2b++];
                _0x118672 += String['fromCharCode']((_0xfd05e7 & 0xf) << 0xc | (_0x2f68fd & 0x3f) << 0x6 | _0x252eec & 0x3f);
            } else if (_0xfd05e7 >> 0x3 === 0x1e) {
                let _0x1b7602 = _0x19715f[_0x7d2b++];
                let _0x129b3c = _0x19715f[_0x7d2b++];
                let _0x142bb9 = _0x19715f[_0x7d2b++];
                let _0x4f6183 = (_0xfd05e7 & 0x7) << 0x12 | (_0x1b7602 & 0x3f) << 0xc | (_0x129b3c & 0x3f) << 0x6 | _0x142bb9 & 0x3f;
                _0x118672 += String['fromCodePoint'](_0x4f6183);
            }
        }
        return _0x118672;
    };
    const 慈父见背行 = (_0x49d60c, _0x123bd9, _0x1690b5, _0x22bd00) => {
        let _0x3868a1 = _0x49d60c['indexOf'](_0x123bd9) + _0x123bd9['length'];
        let _0x1d34ec = _0x49d60c['indexOf'](_0x1690b5, _0x3868a1);
        if (typeof _0x22bd00 !== 'undefined' && _0x49d60c['indexOf'](_0x22bd00, _0x3868a1) < _0x1d34ec && _0x49d60c['indexOf'](_0x22bd00, _0x3868a1) != -0x1) _0x1d34ec = _0x49d60c['indexOf'](_0x22bd00, _0x3868a1);
        if (_0x3868a1 === -0x1 || _0x1d34ec === -0x1) return null;
        return _0x49d60c['substring'](_0x3868a1, _0x1d34ec);
    };
    const 年四岁舅夺 = _0x2c56c5 => {
        let _0x103cb8 = _0x2c56c5['split']('');
        let _0x16fd13 = '';
        let _0x4a75a5 = '4c6e2a3b195d' ['split']('');
        for (let _0xdb3034 in _0x103cb8) _0x16fd13 += '§' + _0x4a75a5[_0xdb3034 % _0x4a75a5['length']] + _0x103cb8[_0xdb3034];
        return _0x16fd13;
    };
    const 母志祖母刘 = _0x35248f => {
        if (_0x35248f['startsWith']('0x')) _0x35248f = _0x35248f['slice'](0x2);
        const _0x41801c = [];
        for (let _0x21fedc = 0x0; _0x21fedc < _0x35248f['length']; _0x21fedc += 0x2) {
            const _0x434048 = parseInt(_0x35248f['slice'](_0x21fedc, _0x21fedc + 0x2), 0x10);
            _0x41801c['push'](_0x434048);
        }
        return new Uint8Array(_0x41801c);
    };
    const 愍臣孤弱躬 = (_0x14589b, _0xfb52e0, _0x1cc154 = 0x1) => {
        if (_0x1cc154 == 0x1) sendRpc(_0x14589b, 母志祖母刘(_0xfb52e0));
        if (_0x1cc154 == 0x2) sendRpc(_0x14589b, _0xfb52e0);
        if (_0x1cc154 == 0x3) {
            const _0x235609 = new Uint8Array(str['length']);
            for (let _0x20e97e = 0x0; _0x20e97e < str['length']; _0x20e97e++) _0x235609[_0x20e97e] = str['charCodeAt'](_0x20e97e);
            sendRpc(_0x14589b, _0x235609);
        }
    };
    const 亲抚养臣少 = _0x732d4c => {
        if (nx_nbts[_0x732d4c] !== undefined) return nx_nbts[_0x732d4c];
        const _0x236d6d = 慈父见背行(_0x732d4c, ',Name:"', '",WasPickedUp');
        if (_0x236d6d === '' || typeof _0x236d6d !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x3b006a = Number(慈父见背行(_0x732d4c, ',aux:', ','));
        const _0x2d1ee0 = Number(慈父见背行(_0x732d4c, 'Count:', 'b,D'));
        const _0x3dd9f9 = _0x732d4c['includes'](',name:"') ? 慈父见背行(_0x732d4c, ',name:"', '",') : _0x236d6d['replace']('minecraft:', '');
        const _0x1b6885 = _0x732d4c['includes'](',netId:') ? Number(慈父见背行(_0x732d4c, ',netId:', '}')) : 0x0;
        const _0x53b9b7 = _0x732d4c['includes']('maxDamage') ? Number(慈父见背行(_0x732d4c, ',maxDamage:', ',')) : 0x0;
        const _0x47906e = _0x732d4c['includes']('attackDamage') ? Number(慈父见背行(_0x732d4c, 'attackDamage:', ',')) : 0x1;
        const _0x4b720c = _0x732d4c['includes']('customColor') ? 慈父见背行(_0x732d4c, 'customColor:', '}', ',') : '';
        const _0x17f365 = _0x732d4c['includes']('ench:[{') ? ('[{' + 慈父见背行(_0x732d4c, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x3a6ab2 = _0x732d4c['startsWith']('{Block:');
        const _0x44d360 = {
            'name': _0x3dd9f9,
            'namespace': _0x236d6d,
            'aux': _0x3b006a,
            'damage': _0x53b9b7,
            'attackDamage': _0x47906e,
            'count': _0x2d1ee0,
            'color': _0x4b720c,
            'isBlock': _0x3a6ab2,
            'id': _0x1b6885,
            'enchants': JSON['parse'](_0x17f365)
        };
        nx_nbts[_0x732d4c] = _0x44d360;
        return _0x44d360;
    };
    const 多疾病九岁 = _0xc589b6 => {
        const _0x1f381d = getEntitySize(_0xc589b6);
        const _0x299fbb = getEntityMotion(_0xc589b6);
        const _0x2f8eba = getPos(_0xc589b6);
        const _0x4c192d = getEntityName(_0xc589b6);
        const _0x172ce4 = getEntityNamespace(_0xc589b6);
        const _0x40f1ef = 就职诏书切(self_id, _0xc589b6);
        const _0xf4f45 = getCarried(_0xc589b6);
        const _0x399941 = 无主辞不赴(_0xc589b6);
        const _0x282200 = getEntityAttribute(_0xc589b6, 'minecraft:health');
        const _0x20c1eb = getEntityAttribute(_0xc589b6, 'minecraft:movement');
        const _0xd3e7 = getEntityTypeId(_0xc589b6);
        const _0x52558c = getEntityTarget(_0xc589b6);
        const _0x346c0f = getPlayerInventorySize(_0xc589b6);
        const _0x38037d = getPlayerHotBarSize(_0xc589b6);
        const {
            yaw,
            pitch
        } = getEntityRot(_0xc589b6);
        const _0x199993 = _0x807a0 => _0x807a0['toFixed'](0x2);
        const _0x2c14e1 = ['唯一ID:' + _0xc589b6 + ' 昵称:' + _0x4c192d + '§r 实体命名空间:' + _0x172ce4 + ' 水平碰撞箱:' + _0x199993(_0x1f381d['x']) + ' 垂直碰撞箱:' + _0x199993(_0x1f381d['y']) + ' Mot速度:' + _0x399941, 'ability速度:[max:' + _0x20c1eb['max'] + ', min:' + _0x20c1eb['min'] + ', current:' + _0x20c1eb['current'] + '] 血量:[max:' + _0x282200['max'] + ', min:' + _0x282200['min'] + ', current:' + _0x282200['current'] + ']', '手持:[id:' + _0xf4f45['id'] + ', namespace:' + _0xf4f45['namespace'] + ', name:' + _0xf4f45['name'] + '§r, aux:' + _0xf4f45['aux'] + '] 距离:' + _0x40f1ef + ' 实体类型:' + _0xd3e7, '仰俯角:' + _0x199993(pitch) + '° 偏航角:' + _0x199993(yaw) + '° 仇恨目标:' + getEntityName(_0x52558c) + '^' + _0x52558c, '移动值:[' + _0x199993(_0x299fbb['x']) + ', ' + _0x199993(_0x299fbb['y']) + ', ' + _0x199993(_0x299fbb['z']) + '] 坐标值:[' + _0x199993(_0x2f8eba['x']) + ', ' + _0x199993(_0x2f8eba['y']) + ', ' + _0x199993(_0x2f8eba['z']) + ']', '背包容量:' + _0x346c0f + ' 物品栏容量:' + _0x38037d];
        return _0x2c14e1['join']('\n');
    };
    const getCarried = _0x6efcc5 => 亲抚养臣少(getEntityCarriedItem(_0x6efcc5));
    const getOffhand = _0x204576 => 亲抚养臣少(getEntityOffhandItem(_0x204576));
    const getInventory = (_0x57875b, _0x556ad8) => 亲抚养臣少(getPlayerInventoryItem(_0x57875b, _0x556ad8));

    function destroy(_0x22bca5, _0x23954a, _0x4bdb51, _0x50f0f9, _0x49a5d2) {
        destroyBlock(_0x22bca5, _0x23954a, _0x4bdb51, _0x50f0f9, _0x49a5d2);
        不行零丁孤(_0x23954a, _0x4bdb51, _0x50f0f9, true, true);
    }
    const 不行零丁孤 = (_0x3a5e76, _0x2ff2d3, _0x4f8d40, _0x36ea16 = false, _0x565120 = false) => {
        let _0x2c7ce4 = {
            'x': _0x3a5e76,
            'y': _0x2ff2d3,
            'z': _0x4f8d40
        };
        const _0x513135 = [0x0, 0xd, 0x12, 0x1b];
        const _0x3c971a = _0xed95e8 => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0xed95e8['map'](_0x31737c => ({
                'type': _0x31737c,
                'pos': _0x2c7ce4,
                'value': 0x1
            }))
        });
        const _0x17184a = _0x4692c4 => sendPlayerAction({
            'id': self_id,
            'pos': _0x2c7ce4,
            'type': _0x4692c4
        });
        if (_0x36ea16) _0x3c971a(_0x513135);
        if (_0x565120) _0x513135['forEach'](_0x9424f3 => _0x17184a(_0x9424f3));
    };
    const 苦至于成立 = (_0x33966a, _0x2ec0d4, _0x6ab2f7 = true, _0x4bd033 = false) => {
        if (_0x33966a === _0x2ec0d4 || getScreenName() !== 'inventory_screen') return false;
        let _0x28f0f7 = getInventory(self_id, _0x33966a);
        let _0x5253d5 = getInventory(self_id, _0x2ec0d4);
        if (_0x6ab2f7 && _0x2ec0d4 < 0x9 && _0x5253d5['namespace'] != 'minecraft:air') {
            for (let _0x2a0a80 = 0x23; _0x2a0a80 > 0x8; _0x2a0a80--) {
                const _0x457b60 = getInventory(self_id, _0x2a0a80);
                if (_0x457b60['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x2ec0d4, _0x2a0a80);
                    break;
                }
            }
        }
        if (_0x4bd033 && _0x28f0f7['namespace'] === 'minecraft:air' && _0x5253d5['namespace'] !== 'minecraft:air') moveInventoryItem(_0x2ec0d4, _0x33966a);
        if (_0x28f0f7['namespace'] !== 'minecraft:air' && _0x5253d5['namespace'] === 'minecraft:air') moveInventoryItem(_0x33966a, _0x2ec0d4);
    };
    const 既无伯叔终 = (_0x3c9360, _0x49dd33) => {
        let _0x1f13b0 = _0x49dd33 - 0xb4;
        if (_0x3c9360 > 0x5a) _0x3c9360 -= 0x5a;
        if (_0x3c9360 < -0x5a) _0x3c9360 += 0x5a;
        if (_0x1f13b0 > 0xb4) _0x1f13b0 = _0x1f13b0 - 0x168;
        if (_0x1f13b0 < -0xb4) _0x1f13b0 = 0x168 + _0x1f13b0;
        if (getPlayerViewPerspective() === 0x0 || _0x1f13b0 > 0xb4 || _0x1f13b0 < -0xb4 || _0x3c9360 > 0x5a || _0x3c9360 < -0x5a) return false;
        setEntityBodyRot(self_id, _0x1f13b0);
        setEntityRot(self_id, _0x3c9360, _0x1f13b0);
    };
    const 鲜兄弟门衰 = _0x7a3360 => {
        const _0x371e08 = getEntityAttribute(_0x7a3360, 'minecraft:health');
        const _0x3200fd = getPos(_0x7a3360);
        if (typeof _0x3200fd != 'object' || !_0x3200fd || !_0x3200fd['x'] || !_0x3200fd['y'] || !_0x3200fd['z']) return false;
        if (!findEntity(_0x7a3360) && (_0x371e08['max'] === undefined || _0x371e08['min'] === undefined || _0x371e08['current'] === undefined)) return false;
        if (_0x371e08['current'] > 0x0) return true;
    };
    const 祚薄晚有儿 = (_0x4f51d5, _0x2cd444) => {
        if (typeof globalThis[_0x4f51d5] === 'undefined' || globalThis[_0x4f51d5] === _0x2cd444) return;
        globalThis[_0x4f51d5] = _0x2cd444;
        nx_cfg[_0x4f51d5] = _0x2cd444;
        if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch_' + (_0x2cd444 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0x4f51d5['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0x2cd444) 以表闻辞不(0x0, _0x4f51d5, '§oEnable ◆', '§a');
                else 以表闻辞不(0x0, _0x4f51d5, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0x4f51d5, _0x4f51d5 + (_0x2cd444 ? ' - Enable' : ' - Disable'), _0x4f51d5 + (_0x2cd444 ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0x4f51d5, _0x4f51d5 + (_0x2cd444 ? ' - Enable' : ' - Disable'), _0x4f51d5 + (_0x2cd444 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0x4f51d5] !== 'undefined') addCustomArrayList(_0x4f51d5, nx_arraylist[_0x4f51d5]['CN'], nx_arraylist[_0x4f51d5]['EN'], _0x2cd444);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0x4f51d5['includes']('_')) addCustomArrayList(_0x4f51d5, _0x4f51d5, _0x4f51d5, _0x2cd444);
        if (typeof nx_binds[_0x4f51d5] !== 'undefined') nx_binds[_0x4f51d5]['forEach'](_0x3bb288 => 祚薄晚有儿(_0x3bb288, _0x2cd444));
        if (typeof nx_raBinds[_0x4f51d5] !== 'undefined' && !nx_raBinds[_0x4f51d5]['isNX']) callModule(nx_funcid[nx_raBinds[_0x4f51d5]['module']], JSON['stringify']({
            'value': _0x2cd444
        }));
    };
    const 息外无期功 = (_0x1d637a, _0x1387e4, _0x51a96d, _0x25cf4f, _0x3d7d97, _0x2fc4e0 = false, _0x7df77f = {}) => {
        for (let _0x28e8a6 = 0x0; _0x28e8a6 < _0x3d7d97; _0x28e8a6++) addParticle(Number(_0x1d637a), _0x1387e4, _0x51a96d, _0x25cf4f, _0x2fc4e0 ? _0x7df77f['x'] : _0x1387e4, _0x2fc4e0 ? _0x7df77f['y'] : _0x51a96d, _0x2fc4e0 ? _0x7df77f['z'] : _0x25cf4f, 0x1, _0x2fc4e0);
    };
    const 强近之亲内 = () => {
        const _0x73eb5f = getEntityCarriedItem(self_id);
        const _0x1820f9 = getPos(self_id);
        if (!_0x73eb5f['includes']('count:0')) buildBlock(self_id, _0x1820f9['x'], _0x1820f9['y'], _0x1820f9['z'], 0x6);
    };
    const 无应门五尺 = _0x464864 => {
        const _0x15b727 = 一作独立(self_id, _0x464864);
        const _0x22dd75 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x464864 > 0x8) 苦至于成立(_0x464864, 0x8, true, false);
        if (_0x22dd75['includes'](_0x15b727) && selectPlayerInventorySlot(self_id, _0x464864) && getPlayerSelectItemSlot(self_id) === _0x464864) 强近之亲内();
    };
    const 之僮茕茕孑 = (_0x942480, _0x54b218, _0x323230, _0x31425f) => {
        let _0x12bd92 = _0x54b218 > 0x0;
        _0x54b218 = Math['abs'](_0x54b218);
        let _0x18fd5d = _0x323230 * Math['cos'](_0x54b218 * Math['PI'] / 0xb4);
        let _0x3c9585 = _0x323230 * Math['sin'](_0x54b218 * Math['PI'] / 0xb4);
        let _0x26dd3d = _0x3c9585 / _0x31425f;
        let _0x4aacf4 = _0x31425f * (_0x26dd3d * _0x26dd3d) * 0.5;
        let _0x34422e = _0x18fd5d * _0x26dd3d;
        let _0x1fb94e = -_0x4aacf4 / (_0x34422e * _0x34422e);
        return {
            'data': _0x1fb94e * Math['pow'](_0x942480 - (_0x12bd92 ? -_0x34422e : _0x34422e), 0x2) + _0x4aacf4,
            'bool': _0x12bd92
        };
    };
    const getLocal = _0x533d0b => !_0x533d0b ? getLocalPlayerUniqueID() : _0x533d0b;
    const 立形影相吊 = (_0xcd0e47, _0x33072c, _0x12462a, _0x203558 = false) => {
        const _0x337cfc = getBlock(_0xcd0e47, _0x33072c, _0x12462a);
        if (_0x337cfc['id'] !== 0x0) return;
        const _0x2ab170 = [
            [_0xcd0e47, _0x33072c + 0x1, _0x12462a],
            [_0xcd0e47, _0x33072c - 0x1, _0x12462a],
            [_0xcd0e47, _0x33072c, _0x12462a + 0x1],
            [_0xcd0e47, _0x33072c, _0x12462a - 0x1],
            [_0xcd0e47 + 0x1, _0x33072c, _0x12462a],
            [_0xcd0e47 - 0x1, _0x33072c, _0x12462a]
        ];
        _0x2ab170['some']((_0x348d2f, _0x6863b0) => {
            const _0x50d7c2 = getBlock(_0x348d2f[0x0], _0x348d2f[0x1], _0x348d2f[0x2]);
            if (_0x50d7c2['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x348d2f[0x0], _0x348d2f[0x1], _0x348d2f[0x2], _0x6863b0);
        });
    };
    const 病常在床蓐 = (_0x1bfe94, _0x2082b7) => {
        const _0x31f5be = getPos(self_id);
        sendSound(_0x1bfe94, _0x31f5be['x'], _0x31f5be['y'], _0x31f5be['z'], _0x2082b7);
    };
    const 臣侍汤药未 = (_0x639234, _0x4b2486, _0x5a4e77) => {
        const _0x441daa = getPos(self_id);
        motion_list['push']([_0x639234 - _0x441daa['x'], _0x4b2486 - _0x441daa['y'], _0x5a4e77 - _0x441daa['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 曾废离愍 = (_0x3ac360, _0x4b443a) => {
        let _0x54ddf2 = _0x3ac360 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0x3ac360);
        if (typeof _0x4b443a !== 'undefined') _0x54ddf2['namespace'] = _0x4b443a;
        return Array['from']({
            'length': 0x24
        }, (_0x8c5ab7, _0x28be68) => getInventory(self_id, _0x28be68))['filter'](_0x35ae76 => _0x35ae76['namespace'] === _0x54ddf2['namespace'] && (typeof _0x4b443a !== 'undefined' || _0x35ae76['aux'] === _0x54ddf2['aux']))['reduce']((_0x59121c, _0x302337) => _0x59121c + _0x302337['count'], 0x0);
    };
    const 一作悯孑立 = (_0x185a95, _0x50bb01, _0x586088 = 'hotbar', _0x5b2fb2 = 0x0) => {
        const _0x8a244 = _0x586088 == 'hotbar' ? 0x9 : 0x24;
        let _0x1ec1d6 = Array['from']({
            'length': _0x8a244
        }, (_0x4fb9ee, _0x37d961) => getInventory(_0x185a95, _0x37d961));
        let _0x4d9236 = _0x1ec1d6['some'](_0x3bd320 => _0x3bd320['namespace']['includes'](_0x50bb01));
        let _0x4502e3 = _0x1ec1d6['reduce']((_0x457481, _0x5acde5) => _0x457481 + _0x5acde5['count'], 0x0);
        return _0x4d9236 && _0x4502e3 > _0x5b2fb2;
    };
    const 一作独立 = (_0x2d950b, _0x302fb5, _0x349d36) => {
        let _0x32e020 = _0x302fb5 === -0x1 ? getCarried(_0x2d950b) : getInventory(_0x2d950b, _0x302fb5);
        if (!_0x32e020['namespace']['includes']('_') && typeof _0x349d36 === 'undefined') return 'other';
        let _0x2012cb = typeof _0x349d36 === 'undefined' ? _0x32e020['namespace']['replace']('minecraft:', '') : _0x349d36['replace']('minecraft:', '');
        const _0x37876d = _0x2012cb['split']('_');
        return _0x37876d[0x1];
    };
    const getEntityMaxDamage = _0x1da5a6 => Array['from']({
        'length': 0x24
    }, (_0x2edc75, _0x347d45) => 守臣逵察臣(_0x1da5a6, _0x347d45))['reduce']((_0x20e5e1, _0x2ade08) => Math['max'](_0x20e5e1, _0x2ade08), 0x0);
    const 逮奉圣朝沐 = (_0xd92df1, _0x5bc7cb, _0xfaf8b3 = false) => {
        let _0x26ff5d = _0xfaf8b3 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x537f81 = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x4bb070 = 0x0; _0x4bb070 < 0x24; _0x4bb070++) {
            const _0x1cad52 = 一作独立(_0xd92df1, _0x4bb070);
            const _0x2d87d1 = _0x537f81['indexOf'](_0x1cad52);
            if (_0x2d87d1 === -0x1) continue;
            const _0x2925f3 = 浴清化前太(_0xd92df1, _0x4bb070);
            if (!_0xfaf8b3 && _0x1cad52 === _0x5bc7cb && _0x26ff5d < _0x2925f3) _0x26ff5d = _0x2925f3;
            if (_0xfaf8b3 && _0x26ff5d[_0x2d87d1] < _0x2925f3) _0x26ff5d[_0x2d87d1] = _0x2925f3;
        }
        return _0x26ff5d;
    };
    const 浴清化前太 = (_0x343df4, _0x3db750, _0x218070 = true, _0x2e9e2e = true) => {
        let _0x20b3da = _0x3db750 === -0x1 ? getCarried(_0x343df4) : getInventory(_0x343df4, _0x3db750);
        if (_0x3db750 < -0x1) _0x20b3da = 亲抚养臣少(getPlayerArmorItem(_0x343df4, Math['abs'](_0x3db750) - 0x2));
        if (_0x20b3da['count'] === 0x0 || _0x20b3da['damage'] === 0x0 || _0x20b3da['attackDamage'] > 0x0) return 0x0;
        if (!_0x2e9e2e) return _0x20b3da['damage'];
        let _0xe17c67 = 0x0;
        let _0x30acbe = _0x20b3da['enchants']['findIndex'](_0x4cc2c5 => _0x4cc2c5['id'] === 0x0);
        if (_0x30acbe > -0x1) _0xe17c67 = _0x20b3da['enchants'][_0x30acbe]['lvl'];
        if (!_0x218070) return 0x1 + _0xe17c67 / 0x64;
        return _0x20b3da['damage'] * (0x1 + _0xe17c67 / 0x64);
    };
    const 守臣逵察臣 = (_0x5e78b5, _0x4de025, _0x4350f2 = true, _0x20d333 = true) => {
        let _0x24de26 = _0x4de025 === -0x1 ? getCarried(_0x5e78b5) : getInventory(_0x5e78b5, _0x4de025);
        if (_0x24de26['count'] === 0x0 || _0x24de26['attackDamage'] === 0x0 || _0x24de26['attackDamage'] === 0x0) return 0x1;
        if (!_0x20d333) return _0x24de26['attackDamage'];
        let _0x1820f8 = 0x0;
        let _0x12cf26 = _0x24de26['enchants']['findIndex'](_0x2111f5 => _0x2111f5['id'] === 0x9);
        if (_0x12cf26 > -0x1) _0x1820f8 = _0x24de26['enchants'][_0x12cf26]['lvl'] * 1.25;
        if (!_0x4350f2) return _0x1820f8;
        return _0x24de26['attackDamage'] + _0x1820f8;
    };
    const b2s = _0x2a1f30 => _0x2a1f30 ? 'true' : 'false';
    const 孝廉后刺史 = (_0x5978f4, _0x3c5fe3, _0x4b2654) => {
        let _0x1f0f08 = _0x5978f4['split'](_0x3c5fe3)['length'] - 0x1;
        let _0x484f67 = 0x0;
        let _0x524a68 = [];
        for (let _0x5e7a12 = 0x0; _0x5e7a12 < _0x1f0f08; _0x5e7a12++) {
            let _0x79ee5d = _0x5978f4['indexOf'](_0x3c5fe3, _0x484f67) + _0x3c5fe3['length'];
            let _0xb9aacc = _0x5978f4['indexOf'](_0x4b2654, _0x79ee5d);
            if (_0xb9aacc === -0x1 || _0x79ee5d === -0x1) break;
            _0x484f67 = _0xb9aacc;
            _0x524a68['push'](_0x5978f4['substring'](_0x79ee5d, _0xb9aacc));
        }
        return _0x1f0f08 > 0x1 ? _0x524a68 : _0x524a68[0x0];
    };
    const 臣荣举臣秀 = (_0x3f77c1, _0x31b396) => {
        if (ECAttack) 愍臣孤弱躬(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x3f77c1, _0x31b396);
    };
    const 才臣以供养 = (_0x37ce6d, _0x35e0db, _0x4802ae, _0x48765a) => {
        if (typeof _0x4802ae === 'undefined') _0x4802ae = -0x1;
        if (typeof _0x48765a === 'undefined') _0x48765a = -0x1;
        let _0x49badf = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0xaca78d = getInventory(_0x37ce6d, index);
            if (!_0xaca78d['namespace'] || !_0xaca78d['name']) continue;
            if (_0xaca78d['namespace']['includes'](_0x35e0db) && (_0xaca78d['aux'] === _0x4802ae || _0x4802ae === -0x1) && (_0xaca78d['name']['includes'](_0x48765a) || _0x48765a === -0x1)) {
                _0x49badf = index;
                break;
            }
        }
        return _0x49badf;
    };
    const 无主辞不赴 = _0x285aaa => {
        const _0x245220 = getEntityMotion(_0x285aaa);
        const _0x5afcc5 = Math['sqrt'](_0x245220['x'] * _0x245220['x'] + _0x245220['y'] * _0x245220['y'] + _0x245220['z'] * _0x245220['z']);
        return _0x5afcc5 * 0x14;
    };
    const 命诏书特下 = (_0xb2adf2, _0x26e1e9) => {
        const _0x58ed77 = _0x26e1e9 - _0xb2adf2 + 0x1;
        return Math['floor'](Math['random']() * _0x58ed77) + _0xb2adf2;
    };
    const 拜臣郎中寻 = (_0xcd9316, _0xd53477, _0x7e20dc) => {
        return {
            'x': _0xd53477['x'] + _0xcd9316['x'] * _0x7e20dc,
            'y': _0xd53477['y'] + _0xcd9316['x'] * _0x7e20dc,
            'z': _0xd53477['z'] + _0xcd9316['z'] * _0x7e20dc
        };
    };
    const 蒙国恩除臣 = _0x5c4bd1 => {
        if (_0x5c4bd1 < 0x3c) return _0x5c4bd1 + 's';
        if (_0x5c4bd1 >= 0x3c) return Math['floor'](_0x5c4bd1 / 0x3c) + 'min ' + _0x5c4bd1 % 0x3c + 's';
    };
    const 洗马猥以微 = (_0x4effa3, _0x16b39c, _0x22f3f3, _0x33d912 = 0x0, _0x102c8e = 0x0) => {
        if (!_0x22f3f3) return true;
        _0x4effa3['y'] += _0x33d912;
        _0x16b39c['y'] += _0x102c8e;
        const _0x3eefcf = 伏惟圣朝以(_0x4effa3, _0x16b39c, 'yaw_pos');
        const _0x544865 = -伏惟圣朝以(_0x4effa3, _0x16b39c, 'pitch_pos');
        const _0x270407 = getDistance(_0x4effa3, _0x16b39c);
        let _0x12420e = true;
        for (let _0xb1104f = 0x0; _0xb1104f < _0x270407; _0xb1104f += 0.5) {
            const _0xf4f469 = 非臣陨首所(_0xb1104f, _0x16b39c, {
                'yaw': _0x3eefcf,
                'pitch': _0x544865
            });
            const _0x36e86d = getBlock(_0xf4f469['x'], _0xf4f469['y'], _0xf4f469['z']);
            if (_0x36e86d['namespace'] != 'minecraft:air') {
                _0x12420e = false;
                break;
            }
        }
        return _0x12420e;
    };
    const 贱当侍东宫 = (_0x23e2eb, _0x25740d) => {
        let _0x566cf9 = getWorldPlayerList()['sort']((_0x1bdd33, _0xcf445d) => _0x1bdd33['name']['localeCompare'](_0xcf445d['name']));
        let _0x47f8c4 = _0x566cf9['length'] > 0x0 ? _0x566cf9['map'](_0x29c838 => ({
            'text': '§e' + _0x29c838['name'] + '\n§b距离: ' + 就职诏书切(self_id, _0x29c838['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x5cc8f3 = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x47f8c4
        };
        const _0x440831 = JSON['stringify'](_0x5cc8f3);
        addForm(_0x440831, function(_0x4251b7) {
            if (_0x566cf9['length'] > 0x0 && _0x4251b7 >= 0x0) {
                const _0x466c20 = _0x25740d === 0x0 ? _0x566cf9[_0x4251b7]['name'] : _0x566cf9[_0x4251b7]['id'];
                if (typeof globalThis[_0x23e2eb] === 'object') globalThis[_0x23e2eb]['push'](_0x466c20);
                if (typeof globalThis[_0x23e2eb] === 'string') globalThis[_0x23e2eb] = _0x466c20;
                以表闻辞不(0x0, 'addTarget', _0x466c20, '§r');
            }
        });
    };
    const 非臣陨首所 = (_0x4a37f1, _0x3293e9, _0x1c9996) => {
        if (_0x4a37f1 === 0x0) return _0x3293e9;
        let _0x1572c4 = _0x4a37f1 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x1c9996;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        if (pitch < -0x5a) pitch = -0x5a;
        if (pitch > 0x5a) pitch = 0x5a;
        _0x4a37f1 = Math['abs'](_0x4a37f1);
        const _0x54fa9f = yaw * Math['PI'] / 0xb4;
        const _0x30e2ef = pitch * Math['PI'] / 0xb4;
        let _0x5e6a19 = pitch != 0x0 ? Math['sin'](_0x30e2ef) * _0x4a37f1 : 0x0;
        let _0x532c68 = pitch != 0x0 ? _0x5e6a19 / Math['tan'](_0x30e2ef) : _0x4a37f1;
        let _0x13aa35 = _0x532c68 < 0x0;
        _0x532c68 = Math['abs'](_0x532c68);
        const _0x5be4f6 = Math['cos'](_0x54fa9f) * _0x532c68;
        const _0x52c3dc = Math['sin'](_0x54fa9f) * _0x532c68;
        let _0x53657e = -Math['sin'](_0x54fa9f) * _0x532c68;
        let _0x2d7349 = Math['cos'](_0x54fa9f) * _0x532c68;
        if (_0x1572c4 || _0x13aa35) {
            _0x53657e = -_0x53657e;
            if (!_0x13aa35) _0x5e6a19 = -_0x5e6a19;
            _0x2d7349 = -_0x2d7349;
        }
        return {
            'x': _0x3293e9['x'] + _0x53657e,
            'y': _0x3293e9['y'] - _0x5e6a19,
            'z': _0x3293e9['z'] + _0x2d7349
        };
    };
    const getPlayerItemCount = _0x4abd63 => Array['from']({
        'length': 0x24
    }, (_0x22e073, _0x13ee75) => getInventory(_0x4abd63, _0x13ee75))['filter'](_0x43ec0d => _0x43ec0d['count'] !== 0x0)['reduce']((_0x3d6796, _0x47184a) => _0x3d6796 + _0x47184a['count'], 0x0);
    const isSimilar = (_0x439707, _0x2ec0eb, _0x434e71) => Math['abs'](_0x439707 - _0x2ec0eb) < _0x434e71;
    const 能上报臣具 = _0x4f578a => {
        let _0x44d460 = [];
        if (at_entity) _0x44d460['push'](...getEntityList());
        if (at_player) _0x44d460['push'](...getPlayerList());
        let _0x48d58a = Math['min'](at_maxCount, _0x44d460['length']);
        let _0x348f56 = [];
        for (const _0x4495dd of _0x44d460) {
            if (!鲜兄弟门衰(_0x4495dd)) continue;
            const _0xdd2dc5 = getEntityNamespace(_0x4495dd);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0x26778e => _0xdd2dc5['includes'](_0x26778e)) != at_back) continue;
            const _0x440c2d = getPos(_0x4495dd);
            const _0x56dcd3 = getDistance(_0x440c2d, getPos(_0x4f578a));
            if ((_0x56dcd3 > at_maxDist || _0x56dcd3 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x224f41 = getEntityAttribute(_0x4495dd, 'minecraft:health');
            if (at_heal && (!_0x224f41 || _0x224f41['min'] > _0x224f41['max'] || _0x224f41['max'] > 0x186a0 || _0x224f41['current'] <= 0x0 || _0x224f41['max'] === 0x0) != at_back) continue;
            if (_0xdd2dc5 === 'minecraft:player') {
                const _0x3f3162 = getEntityRot(_0x4495dd);
                const _0x4a29d3 = at_BWM ? getEntityAttribute(_0x4495dd, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x2dc96c = getEntityName(_0x4495dd);
                if (at_BWM && _0x4a29d3['current'] >= 0.5 && !_0x2dc96c['includes']('[') && !_0x2dc96c['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x4495dd);
                    continue;
                }
                if (at_fov && (typeof _0x3f3162['yaw'] === 'undefined' || typeof _0x3f3162['pitch'] === 'undefined' || _0x3f3162['yaw']['toFixed'](0x2) === 0x0 || _0x3f3162['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x42d933 = getEntityFlag(_0x4495dd, 0x5);
                if (at_hide && _0x42d933 != at_back) continue;
                const _0x1562d2 = getEntityIsGround(_0x4495dd);
                if (at_ground && _0x1562d2 === at_back) continue;
                if (at_wall && !洗马猥以微(getPos(self_id), _0x440c2d, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x2dc96c['startsWith'](ct_team) || ct_team['includes']('[') && _0x2dc96c['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x4495dd) != at_back || !at_name && (_0x2dc96c === getEntityName(_0x4f578a) || _0x2dc96c === '') != at_back || (_0x440c2d['y'] > at_maxY || _0x440c2d['y'] < at_minY) != at_back && !at_infY || _0x4495dd === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x303fa6 => _0x2dc96c['includes'](_0x303fa6))) continue;
                const _0x744d8d = teams_armor ? teams_blur ? getPlayerArmorItem(_0x4495dd, teams_slot) : 亲抚养臣少(getPlayerArmorItem(_0x4495dd, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0x744d8d != '{}' && _0x744d8d === teams_self || !teams_blur && _0x744d8d['color'] && _0x744d8d['color'] === teams_self['color'])) continue;
                const _0x32ae58 = at_size ? getEntitySize(_0x4495dd) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x32ae58['x'] > at_defaultSize['x'] + 0.1 || _0x32ae58['x'] < at_defaultSize['x'] - 0.1) && (_0x32ae58['y'] > 1.66 || _0x32ae58['y'] < 1.64) && (_0x32ae58['y'] < at_defaultSize['y'] || _0x32ae58['y'] > at_defaultSize['y'] + 0.1) && (_0x32ae58['y'] > 1.51 || _0x32ae58['y'] < 1.49)) != at_back) continue;
            }
            const _0x153cb0 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x4495dd) : 0x0;
            const _0x3c6895 = modes['at_mode'] === 0x3 ? 伏惟圣朝以(self_id, _0x4495dd, 'yaw_rot') : 0x0;
            const _0x59c80a = modes['at_mode'] === 0x3 ? 伏惟圣朝以(self_id, _0x4495dd, 'pitch_rot') : 0x0;
            const _0xb29e9a = modes['at_mode'] === 0x2 ? 守臣逵察臣(_0x4495dd, -0x1) : 0x0;
            _0x348f56['push']({
                'distance': _0x56dcd3,
                'target': _0x4495dd,
                'damage': _0xb29e9a,
                'heal': _0x224f41['current'],
                'crosshair': Math['sqrt'](_0x3c6895 * _0x3c6895 + _0x59c80a * _0x59c80a),
                'items': _0x153cb0,
                'random': 命诏书特下(0x0, _0x44d460['length'] - 0x1)
            });
        }
        const _0x4d3d5b = [(_0x213fc6, _0x59dbb7) => _0x213fc6['distance'] - _0x59dbb7['distance'], (_0x51c93f, _0x3c13b4) => _0x51c93f['heal'] - _0x3c13b4['heal'], (_0x2378de, _0x649fa3) => _0x2378de['damage'] - _0x649fa3['damage'], (_0x26cbc9, _0x5a67e9) => _0x26cbc9['crosshair'] - _0x5a67e9['crosshair'], (_0x4f7e26, _0x3323b4) => _0x3323b4['items'] - _0x4f7e26['items'], (_0x4b2bf3, _0x4000b0) => _0x4b2bf3['random'] - _0x4000b0['random']];
        _0x348f56['sort'](_0x4d3d5b[modes['at_mode']]);
        if (at_reverse) _0x348f56['reverse']();
        if (at_infCount) return _0x348f56['map'](_0x49372d => _0x49372d['target']);
        return _0x348f56['slice'](0x0, _0x48d58a)['map'](_0x513e90 => _0x513e90['target']);
    };
    const 以表闻辞不 = (_0x912dc9 = 0x0, _0x338bba = 'Tip', _0x4b60e6, _0x217379 = '§r') => {
        if (!FuncTip) return false;
        if (_0x912dc9 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x338bba + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x217379) + ' ' + _0x4b60e6);
        if (_0x912dc9 == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0x338bba + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x217379) + _0x4b60e6;
            if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x217379) + _0x4b60e6;
        }
    };
    const getDistance = (_0x1e8839, _0x207e0f) => Math['sqrt'](Math['pow'](_0x1e8839['x'] - _0x207e0f['x'], 0x2) + Math['pow'](_0x1e8839['y'] - _0x207e0f['y'], 0x2) + Math['pow'](_0x1e8839['z'] - _0x207e0f['z'], 0x2));
    const 就职诏书切 = (_0x33bcdc, _0x57e600) => {
        if (!鲜兄弟门衰(_0x33bcdc) || !鲜兄弟门衰(_0x57e600)) return Infinity;
        const _0x47b4ee = getPos(_0x33bcdc);
        const _0x7c1a12 = getPos(_0x57e600);
        return Math['sqrt'](Math['pow'](_0x47b4ee['x'] - _0x7c1a12['x'], 0x2) + Math['pow'](_0x47b4ee['y'] - _0x7c1a12['y'], 0x2) + Math['pow'](_0x47b4ee['z'] - _0x7c1a12['z'], 0x2));
    };
    const 峻责臣逋慢 = (_0x2f5a9a, _0x1149a7) => {
        if (!鲜兄弟门衰(_0x2f5a9a) || !鲜兄弟门衰(_0x1149a7)) return Infinity;
        const _0x5a5da0 = getPos(_0x2f5a9a);
        const _0x312308 = getPos(_0x1149a7);
        return Math['sqrt'](Math['pow'](_0x5a5da0['x'] - _0x312308['x'], 0x2) + Math['pow'](_0x5a5da0['z'] - _0x312308['z'], 0x2));
    };
    const 郡县逼迫催 = (_0x25d6a4, _0x24a152, _0x4790a3) => {
        let _0x1f8fcc = {
            'fn-set-player-pos': {
                'x': _0x25d6a4,
                'y': _0x24a152,
                'z': _0x4790a3
            }
        };
        callModule(0x5, JSON['stringify'](_0x1f8fcc));
    };
    const getHorizontalDistance = (_0x582fb8, _0x31e401) => Math['sqrt'](Math['pow'](_0x582fb8['x'] - _0x31e401['x'], 0x2) + Math['pow'](_0x582fb8['z'] - _0x31e401['z'], 0x2));
    const setRealPos = (_0x236c2a, _0x4f0bdd, _0x3e60ac, _0x59ea7f) => setEntityPos(_0x236c2a, _0x4f0bdd, _0x3e60ac + setPos_offset, _0x59ea7f);
    const setPos = (_0x23063b, _0x3f82a1, _0x4f9900) => setRealPos(self_id, _0x23063b, _0x3f82a1, _0x4f9900);
    const setMotion = (_0x4f1b12, _0x3a98b3, _0x1a7844) => setEntityMotion(self_id, _0x4f1b12, _0x3a98b3, _0x1a7844);
    const 臣上道州司 = _0x14ecfb => {
        if (_0x14ecfb === '') return [];
        return _0x14ecfb['split'](',');
    };
    const 临门急于星 = _0x91fcee => {
        if (typeof _0x91fcee != 'object' || _0x91fcee['length'] === 0x0) return '';
        return _0x91fcee['join'](',');
    };
    const 火臣欲奉诏 = (_0xe26d41, _0x3632a1) => {
        let _0x187818 = typeof _0x3632a1 === 'object' ? 临门急于星(_0x3632a1) : _0x3632a1;
        let _0x110619 = typeof _0x3632a1 === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0xe26d41 + '","placeholder":"","default":"' + _0x187818 + '"}]}', function(_0x599120) {
            if (_0x110619 === 0x1) globalThis[_0xe26d41] = _0x599120;
            if (_0x110619 === 0x0) globalThis[_0xe26d41] = 臣上道州司(_0x599120);
            以表闻辞不(0x0, 'setValue', _0xe26d41 + ' §7>>>§r ' + _0x599120, '§r');
            nx_cfg[_0xe26d41] = globalThis[_0xe26d41];
        });
    };
    const 奔驰则刘病 = _0x9dab58 => {
        if (typeof _0x9dab58 != 'string' || _0x9dab58 === '') return 'None';
        let _0x28ed0b = _0x9dab58['match'](/\[(.*?)\]/g);
        if (_0x28ed0b === null) return 'None';
        return _0x28ed0b[0x0];
    };
    const 日笃欲苟顺 = _0x2b8526 => {
        if (!File['exist'](_0x2b8526)) return '{}';
        const _0x13b6bc = File['read'](_0x2b8526);
        return _0x13b6bc ? _0x13b6bc : '{}';
    };
    const 私情则告诉 = _0x1970e4 => {
        const _0x206315 = getPos(_0x1970e4);
        let _0x126f06 = _0x1970e4 === self_id ? Math['floor'](_0x206315['y']) - 0x1 : Math['floor'](_0x206315['y']);
        return {
            'x': Math['floor'](_0x206315['x']),
            'y': _0x126f06,
            'z': Math['floor'](_0x206315['z'])
        };
    };
    const 不许臣之进 = (_0x165b88, _0x21366a) => {
        if (_0x165b88['length'] === _0x21366a['length']) {
            return [];
        }
        const _0x3ca7fe = _0x165b88['length'] >= _0x21366a['length'] ? _0x165b88 : _0x21366a;
        const _0x5358e8 = _0x165b88['length'] < _0x21366a['length'] ? _0x165b88 : _0x21366a;
        return _0x3ca7fe['filter'](_0x2028d5 => !_0x5358e8['includes'](_0x2028d5));
    };
    const 退实为狼狈 = (_0x4bc531, _0x4f87b1) => {
        const _0x5ba247 = aa_speed;
        const _0x329e11 = aa_g;
        const _0x5a295b = Math['atan'](Math['floor'](-_0x4f87b1) / _0x4bc531);
        const _0xd8022b = Math['sqrt'](_0x4bc531 * _0x4bc531 + _0x4f87b1 * _0x4f87b1);
        const _0xd1cfe4 = Math['atan'](_0xd8022b / _0x5ba247 / 0x2 / _0x5ba247 * _0x329e11);
        return -((_0xd1cfe4 + _0x5a295b) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x43905d, _0x23f0e6) => _0x43905d / _0x23f0e6;
    const roundAngle = (_0x3f8082, _0x112386) => Math['round'](_0x3f8082 / _0x112386) * _0x112386;
    const 伏惟圣朝以 = (_0x394e0c, _0x248d3d, _0x4ed0e0, _0x1b210b = false, _0x404a9f = false, _0x3f2919 = 0x0, _0x5879d5 = 0x0) => {
        let _0x332dd9 = typeof _0x248d3d != 'string' ? _0x248d3d : getPos(_0x248d3d);
        let _0x4e7ba6 = typeof _0x394e0c != 'string' ? _0x394e0c : getPos(_0x394e0c);
        let _0x7f5007 = getEntityRot(_0x394e0c);
        if (!_0x332dd9 || !_0x4e7ba6) return Infinity;
        const _0x2bcca8 = getHorizontalDistance(_0x4e7ba6, _0x332dd9);
        if (_0x1b210b) _0x332dd9 = 拜臣郎中寻(getEntityMotion(_0x248d3d), getPos(_0x248d3d), getFlyTime(_0x2bcca8, aa_speed) * 0x14);
        let _0x4a8860 = _0x332dd9['x'] - _0x4e7ba6['x'];
        let _0x55e2e5 = _0x4e7ba6['y'] - _0x332dd9['y'] + (aa_y - 0x14) / 0xa + 命诏书特下(-_0x5879d5, _0x5879d5) / 0xa;
        let _0x318bf4 = _0x332dd9['z'] - _0x4e7ba6['z'];
        let _0x3f16cb = Math['atan2'](_0x318bf4, _0x4a8860) * 0xb4 / Math['PI'];
        const _0x2e98c1 = 退实为狼狈(_0x2bcca8, _0x55e2e5);
        let _0x47e43e = _0x404a9f ? _0x2e98c1 : Math['atan2'](_0x55e2e5, _0x2bcca8) * 0xb4 / Math['PI'];
        if (_0x4ed0e0 === 'yaw_pos') return _0x3f16cb > -0xb4 && _0x3f16cb <= 0x5a ? _0x3f16cb + 0x5a : _0x3f16cb - 0x10e;
        if (_0x4ed0e0 === 'yaw_rot') {
            _0x3f16cb = _0x3f16cb > -0xb4 && _0x3f16cb <= 0x5a ? _0x3f16cb + 0x5a : _0x3f16cb - 0x10e;
            let _0x237ff3 = _0x3f16cb - _0x7f5007['yaw'] + 命诏书特下(-_0x3f2919 / 0x2, _0x3f2919 / 0x2);
            return _0x237ff3 > 0x0 ? -_0x237ff3 + 0xb4 : -_0x237ff3 - 0xb4;
        }
        if (_0x4ed0e0 === 'pitch_pos') return _0x47e43e;
        if (_0x4ed0e0 === 'pitch_rot') return _0x47e43e - _0x7f5007['pitch'];
    };
    const 孝治天下凡 = (_0xa967a2, _0x2dff31, _0x3c83df, _0x6fa712) => {
        let _0x5c5676 = Math['abs'](伏惟圣朝以(_0xa967a2, _0x2dff31, 'yaw_rot'));
        let _0x1a03be = Math['abs'](伏惟圣朝以(_0xa967a2, _0x2dff31, 'pitch_rot'));
        if (_0x6fa712 === 0x0) return Math['sqrt'](_0x5c5676 * _0x5c5676 + _0x1a03be * _0x1a03be) < _0x3c83df;
        if (_0x6fa712 === 0x1) return Math['abs'](_0x5c5676) < _0x3c83df;
        if (_0x6fa712 === 0x2) return Math['abs'](_0x1a03be) < _0x3c83df;
    };
    const 在故老犹蒙 = _0x15c8ba => {
        let _0x215905 = '';
        for (let _0x101b70 = 0x0; _0x101b70 < _0x15c8ba['length']; _0x101b70 += 0x2) {
            _0x215905 += String['fromCharCode'](parseInt(_0x15c8ba['substr'](_0x101b70, 0x2), 0x10));
        }
        return _0x215905;
    };
    const 矜育况臣孤 = (_0x579462, _0x374c85, _0x35c037 = 0.5, _0x33b80d = false) => {
        let _0x259444 = [];
        let _0x22e58d = 伏惟圣朝以(_0x579462, _0x374c85, 'yaw_pos');
        let _0x13e6f2 = 伏惟圣朝以(_0x579462, _0x374c85, 'pitch_pos');
        if (getDistance(_0x579462, _0x374c85) < _0x35c037) return [_0x579462];
        for (let _0x282f36 = 0x0; _0x282f36 <= getDistance(_0x579462, _0x374c85); _0x282f36 += _0x35c037) {
            let _0x486a66 = 非臣陨首所(-_0x282f36, _0x579462, {
                'yaw': _0x22e58d,
                'pitch': _0x33b80d ? -_0x13e6f2 : 0x0
            });
            if (getBlock(_0x486a66['x'], _0x486a66['y'], _0x486a66['z'])['namespace'] === 'minecraft:air') _0x259444['push']({
                'x': _0x486a66['x'],
                'y': _0x486a66['y'],
                'z': _0x486a66['z']
            });
        }
        return _0x259444;
    };
    const 苦特为尤甚 = (_0x3c4bfa, _0x2c1823) => {
        if (!鲜兄弟门衰(_0x3c4bfa)) return '';
        let _0x3e5d3c = getEntityAttribute(_0x3c4bfa, 'minecraft:health');
        let _0x4ae21e = _0x3e5d3c['current'];
        let _0x4f762e = _0x3e5d3c['max'];
        const _0x306962 = _0x4ae21e / _0x4f762e;
        switch (_0x2c1823) {
            case 0x0:
                return _0x306962['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x129e48 = '§c';
                for (let _0x462f78 = 0x0; _0x462f78 < Math['floor'](_0x306962 * 0x14); _0x462f78++) _0x129e48 += '❤';
                return _0x129e48 + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x4ae21e);
            case 0x3:
                return Math['floor'](_0x4ae21e) + '/' + Math['floor'](_0x4f762e);
            case 0x4:
                return getProgress(_0x4ae21e, _0x4f762e, '▌', 0x14);
            default:
                return _0x4ae21e;
        }
    };
    const 且臣少仕伪 = _0x13575c => {
        let _0x27406a = '';
        let _0xda6273 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x5526ea = 0x0; _0x5526ea < _0x13575c; _0x5526ea++) {
            let _0xa04e83 = 命诏书特下(0x0, _0xda6273['length'] - 0x1);
            _0x27406a += _0xda6273[_0xa04e83];
        }
        return _0x27406a;
    };

    function getProgress(_0x560ec5, _0x462569, _0x5e6e2c = '▌', _0x448eae = 0x28) {
        let _0xffb7ef = Math['min'](_0x560ec5 / _0x462569, 0x1);
        const _0x21f03e = '4c6e2a3b195d591b3a2e6c4' ['split']('');
        let _0x4e5e91 = _0x21f03e[Math['min'](Math['floor'](_0xffb7ef * _0x21f03e['length']), _0x21f03e['length'] - 0x1)];
        let _0x2de6e2 = _0x5e6e2c['repeat'](_0x448eae)['split']('');
        let _0x2743ae = Math['min'](Math['floor'](_0xffb7ef * _0x2de6e2['length']), _0x2de6e2['length']);
        _0x2de6e2[Math['min'](_0x2743ae, _0x2de6e2['length'] - 0x1)] = _0x5e6e2c + '§r§o§l';
        return '§r[§o§l§' + _0x4e5e91 + _0x2de6e2['join']('') + '§r]';
    }
    const 朝历职郎署 = _0x437165 => {
        for (let _0x5aa494 = Math['ceil'](-cd_size / 0x2); _0x5aa494 < Math['floor'](cd_size / 0x2 + 0x1); _0x5aa494++) {
            for (let _0x121d47 = Math['ceil'](-cd_size / 0x2); _0x121d47 < Math['floor'](cd_size / 0x2 + 0x1); _0x121d47++) {
                for (let _0x5175e0 = Math['ceil'](-cd_size / 0x2); _0x5175e0 < Math['floor'](cd_size / 0x2 + 0x1); _0x5175e0++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x437165;
                    const _0x47be28 = getBlock(x + _0x5aa494, y + _0x121d47, z + _0x5175e0);
                    if (_0x47be28['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x437165['y'] + _0x121d47 <= _0x437165['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x5aa494, y + _0x121d47, z + _0x5175e0, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x437165['x'] + _0x5aa494, _0x437165['y'] + _0x121d47, _0x437165['z'] + _0x5175e0, 0x0);
                    if (cd_packet) 不行零丁孤(_0x437165['x'] + _0x5aa494, _0x437165['y'] + _0x121d47, _0x437165['z'] + _0x5175e0, true, true);
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
            for (let _0x23b2cd = 0x0; _0x23b2cd < ia_move; _0x23b2cd++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const hex2format = _0x2f509b => {
        let _0x12b02f = '';
        let _0x22971b = _0x2f509b['split']('');
        for (let _0x3cd4fd in _0x22971b) {
            let _0x45fb8a = _0x22971b[_0x3cd4fd]['toUpperCase']();
            if (_0x3cd4fd != _0x22971b['length'] - 0x1) {
                if (_0x3cd4fd % 0x2 === 0x1) _0x12b02f += _0x45fb8a + ' ';
                else _0x12b02f += _0x45fb8a;
            } else _0x12b02f += _0x45fb8a;
        }
        if (rpc_remark) {
            let _0x5be7ef = _0x12b02f['split'](' ');
            let _0x321813 = '';
            for (let _0xad0824 in _0x5be7ef) _0x321813 += _0x5be7ef[_0xad0824] + '(' + 在故老犹蒙(_0x5be7ef[_0xad0824]) + ') ';
            return _0x321813;
        } else return _0x12b02f;
    };
    const setTarget = (_0x299bc0, _0x3ed3e1, _0x265314 = false) => {
        setEntityTarget(_0x299bc0, _0x3ed3e1);
        if (_0x265314) setEntityTarget(_0x3ed3e1, _0x299bc0);
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
    modes['gm_mode'] = 0x2;
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
    var hs_damage = false;
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
    var rc_antiair = true;
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
    var akb_rare = 0x64;
    var tr_g = 0x14;
    var tr_speed = 0x64;
    var tr_len = 0xc8;
    var tr_type = 0x38;
    var tr_offset = 0x14;
    var tr_show = true;
    var tr_dens = 0xa;
    modes['tr_mode'] = 0x0;
    var ad_sword = false;
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
    var ms_speed = 0x0;
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
    var em_eff = false;
    var em_nv = true;
    var em_level = 0x1;
    var sb_interact = false;
    var sb_long = false;
    var sb_back = false;
    var sb_click = false;
    var sb_right = false;
    var sb_forward = true;
    var sb_left = false;
    var sb_list = [];
    var mwm_speed = 0x5;
    var mwm_text = 'NoveXare';
    var mwm_size = 0.8;
    var mwm_pos = [命诏书特下(0x0, nx_screen['screenWidth']), 命诏书特下(0x0, nx_screen['screenHeight'])];
    var mwm_id = createText('', 'Center', mwm_pos[0x0], mwm_pos[0x1]);
    var mwm_vector = [命诏书特下(-0x1, 0x1), 命诏书特下(-0x1, 0x1)];
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
    var EffEctManager = false;
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
    var SimulateButton = false;
    var MobileWaterMark = false;
    var AutoTool = false;
    var NoSlowDown = false;

    function onTickEvent() {
        try {
            if (PauseNX) return;
            let _0x1d7107 = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 亲抚养臣少(getPlayerArmorItem(self_id, teams_slot));
            let _0x2e78f4 = getEntityAttribute(self_id, 'minecraft:health');
            let _0x332a42 = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x332a42['y'], 0x0);
            let _0x2cfeee = getCameraRotation();
            let _0xc4c431 = {
                'yaw': _0x2cfeee['yaw'] > 0x0 ? 0xb4 - _0x2cfeee['yaw'] : -0xb4 - _0x2cfeee['yaw'],
                'pitch': -_0x2cfeee['pitch']
            };
            let _0xfd46 = getDistance(self_pos, prev_pos) / 0.05;
            let _0x2b9cec = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x26fad2 = 无主辞不赴(self_id);
            let _0x1b791b = 私情则告诉(self_id);
            let _0x1d935d = getWorldPlayerList();
            let _0x5aa854 = getEntityIsGround(self_id);
            let _0x3fdd34 = getScreenName();
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x55e7c6, _0x17b222) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
            }
            self_item = getCarried(self_id);
            if (_0x2e78f4['current'] - prev_heal > 0x8) {
                if (DeathInfo) 以表闻辞不(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 命诏书特下(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 命诏书特下(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x2e78f4['current'] < prev_heal) death_pos = self_pos;
            if (ShowScreenHud) 以表闻辞不(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
            if (DeadCross) dc_pos['forEach'](_0x331ba3 => {
                sendShadow(_0x331ba3['x'], _0x331ba3['y'], _0x331ba3['z']);
                sendShadow(_0x331ba3['x'], _0x331ba3['y'] + 0x1, _0x331ba3['z']);
                sendShadow(_0x331ba3['x'], _0x331ba3['y'] + 0x2, _0x331ba3['z']);
                sendShadow(_0x331ba3['x'] + 0x1, _0x331ba3['y'] + 0x2, _0x331ba3['z']);
                sendShadow(_0x331ba3['x'] - 0x1, _0x331ba3['y'] + 0x2, _0x331ba3['z']);
                sendShadow(_0x331ba3['x'], _0x331ba3['y'] + 0x3, _0x331ba3['z']);
            });
            if (AdminShow) {
                let _0x37e1fa = _0x1d935d['filter'](_0x4825b7 => _0x4825b7['permissionLevel'] === as_level || _0x4825b7['commandPermissionLevel'] === as_level);
                if (_0x37e1fa['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Admin', '服务器管理员: ' + 临门急于星(_0x37e1fa['map'](_0x1126ad => _0x1126ad['name'])), '§r'));
                let _0x1a9911 = _0x37e1fa['filter'](_0x2658ad => 就职诏书切(_0x2658ad['id'], self_id) < as_range);
                if (_0x1a9911['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 临门急于星(_0x1a9911['map'](_0x2b8e79 => _0x2b8e79['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 能上报臣具(self_id);
            if (NoHider) {
                const _0x5d15f8 = getPlayerList();
                _0x5d15f8['forEach'](_0x25542d => {
                    if (_0x25542d != self_id) {
                        removeEntityEffect(_0x25542d, 0xe);
                        setEntityFlag(_0x25542d, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x25542d)) at_lists['splice'](at_lists['indexOf'](_0x25542d), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x1b791b['x'], _0x1b791b['y'] - 0x1, _0x1b791b['z'])['namespace'] === 'minecraft:glass' && _0x5aa854) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals) silentMove(self_pos['x'], self_pos['y'] + 0x64, self_pos['z'], {
                'x': 0x0,
                'y': -0x1,
                'z': 0x0
            });
            if (SpinAttack) setEntityFlag(self_id, 0x38, true);
            if (RandomTP && ticks % rt_delay === 0x0 && (!rt_target || at_lists['length'] > 0x0)) {
                const _0x349838 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x349838) setPos(_0x349838['x'] + 命诏书特下(-rt_range, rt_range), _0x349838['y'] + (rt_y ? 命诏书特下(-rt_range, rt_range) : 0x0), _0x349838['z'] + 命诏书特下(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x1c081a = 命诏书特下(ac_min, ac_max);
                let _0x4d55a7 = Math['round'](0x3e8 / _0x1c081a);
                const _0x578cb7 = at_lists['length'] > 0x0 ? 孝治天下凡(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x40532e = 0x0; _0x40532e < ac_times; _0x40532e++) {
                    if (!_0x578cb7) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 强近之亲内();
                }
                ac_t_2 = ac_t_1 + _0x4d55a7;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x34e8c0 = getEntityList()['forEach'](_0x4ed93e => {
                    if (getEntityNamespace(_0x4ed93e) != 'minecraft:item' || !findEntity(_0x4ed93e) || 就职诏书切(_0x4ed93e, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x5b2e54 = getPos(_0x4ed93e);
                    silentMove(_0x5b2e54['x'], _0x5b2e54['y'], _0x5b2e54['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0xc4c431,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0xc4c431['yaw']
            });
            if (CustomItem) {
                const _0x3918b2 = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x3918b2);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x3918b2);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x3918b2);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x307c69 = [];
                if (modes['sb_mode'] == 0x0) _0x307c69 = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x307c69 = at_lists;
                if (modes['sb_mode'] == 0x2) _0x307c69 = ['lock_pos'];
                _0x307c69['forEach'](_0x39c604 => {
                    if (sb_exclude && _0x39c604 == self_id) return;
                    let _0x44a64d = null;
                    if (_0x39c604 == 'lock_pos') _0x44a64d = sb_pos;
                    else _0x44a64d = 私情则告诉(_0x39c604);
                    if (!_0x44a64d) return;
                    let _0x4ab83a = getEntityRot(_0x39c604);
                    if (modes['sb_mode'] < 0x2) {
                        _0x44a64d = 非臣陨首所(sb_offset, _0x44a64d, _0x4ab83a);
                        _0x44a64d['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x816fef = JSON['parse'](日笃欲苟顺(nx_paths + '/Shadow.json'));
                        _0x816fef['forEach'](_0x43e169 => {
                            let _0x4b1765 = Math['sqrt'](_0x43e169['x'] * _0x43e169['x'] + _0x43e169['y'] * _0x43e169['y'] + _0x43e169['z'] * _0x43e169['z']);
                            let _0x1f3378 = 伏惟圣朝以({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x43e169, 'yaw_pos');
                            let _0x46e04a = 伏惟圣朝以({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x43e169, 'pitch_pos');
                            let _0x14945b = 非臣陨首所(_0x4b1765, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x46e04a,
                                'yaw': _0x1f3378 + sb_rc_yaw
                            });
                            sendShadow(_0x44a64d['x'] + _0x14945b['x'], _0x44a64d['y'] + _0x14945b['y'], _0x44a64d['z'] + _0x14945b['z']);
                        });
                    } else {
                        for (let _0x247a68 = Math['ceil'](-sb_length / 0x2); _0x247a68 < Math['floor'](sb_length / 0x2 + 0x1); _0x247a68++) {
                            for (let _0x5c8208 = Math['ceil'](-sb_length / 0x2); _0x5c8208 < Math['floor'](sb_length / 0x2 + 0x1); _0x5c8208++) {
                                for (let _0x20462b = Math['ceil'](-sb_length / 0x2); _0x20462b < Math['floor'](sb_length / 0x2 + 0x1); _0x20462b++) {
                                    sendShadow(_0x44a64d['x'] + _0x247a68, _0x44a64d['y'] + _0x5c8208 + 0x2, _0x44a64d['z'] + _0x20462b);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0xa6548 = [
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
                let _0x58bab9 = [];
                if (sm_player) _0x58bab9['push'](...getPlayerList());
                if (sm_entity) _0x58bab9['push'](...getEntityList());
                if (sm_target) _0x58bab9['push'](...at_lists);
                _0x58bab9['forEach'](_0x41e0b5 => {
                    let _0x474bbc = 伏惟圣朝以(self_id, _0x41e0b5, 'yaw_rot');
                    let _0x54a345 = 就职诏书切(self_id, _0x41e0b5);
                    let _0x4a0fa3 = Math['floor'](_0x54a345 / sm_size * sm_proportion * -Math['sin'](_0x474bbc * Math['PI'] / 0xb4) * 0xa);
                    let _0x55d2ba = Math['floor'](_0x54a345 / sm_size * sm_proportion * -Math['cos'](_0x474bbc * Math['PI'] / 0xb4) * 0xa);
                    if (_0x4a0fa3 > 0x5) _0x4a0fa3 = 0x5;
                    if (_0x55d2ba > 0x5) _0x55d2ba = 0x5;
                    if (_0x4a0fa3 < -0x5) _0x4a0fa3 = -0x5;
                    if (_0x55d2ba < -0x5) _0x55d2ba = -0x5;
                    _0xa6548[_0x55d2ba + 0x5][_0x4a0fa3 + 0x5] = ' §e◆§r ';
                });
                let _0x25a715 = _0xa6548['map'](_0x40d509 => _0x40d509['join'](''))['join']('\n');
                _0x1d7107['push'](以表闻辞不(0x1, 'Map', '\n' + _0x25a715, '§r'));
            }
            if (ShirokoAura) {
                for (let _0x4280cf = 0x0; _0x4280cf < 0x168; _0x4280cf += sa_density) {
                    const _0x44f8bc = sa_inner * Math['cos'](_0x4280cf * Math['PI'] / 0xb4);
                    const _0x319902 = sa_inner * Math['sin'](_0x4280cf * Math['PI'] / 0xb4);
                    息外无期功(0x1a, self_pos['x'] + _0x44f8bc, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x319902, 0x1);
                    const _0x354307 = sa_outer * Math['cos'](_0x4280cf * Math['PI'] / 0xb4);
                    const _0x4ed9ff = sa_outer * Math['sin'](_0x4280cf * Math['PI'] / 0xb4);
                    息外无期功(0x1a, self_pos['x'] + _0x354307, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x4ed9ff, 0x1);
                }
                for (let _0x548357 = 0x0; _0x548357 < sa_length; _0x548357 += sa_density / 0xa) {
                    let _0x3a33c3 = 非臣陨首所(_0x548357 + sa_outer, self_pos, {
                        'yaw': _0xc4c431['yaw'],
                        'pitch': 0x0
                    });
                    let _0x4220c1 = 非臣陨首所(_0x548357 + sa_outer, self_pos, {
                        'yaw': 0x5a + _0xc4c431['yaw'],
                        'pitch': 0x0
                    });
                    let _0x1e5ad7 = 非臣陨首所(_0x548357 + sa_outer, self_pos, {
                        'yaw': -0x5a + _0xc4c431['yaw'],
                        'pitch': 0x0
                    });
                    let _0x4141c8 = 非臣陨首所(_0x548357 + sa_outer, self_pos, {
                        'yaw': _0xc4c431['yaw'] + 0xb4,
                        'pitch': 0x0
                    });
                    息外无期功(0x1a, _0x3a33c3['x'], self_pos['y'] + sa_offset / 0xa, _0x3a33c3['z'], 0x1);
                    息外无期功(0x1a, _0x4141c8['x'], self_pos['y'] + sa_offset / 0xa, _0x4141c8['z'], 0x1);
                    息外无期功(0x1a, _0x4220c1['x'], self_pos['y'] + sa_offset / 0xa, _0x4220c1['z'], 0x1);
                    息外无期功(0x1a, _0x1e5ad7['x'], self_pos['y'] + sa_offset / 0xa, _0x1e5ad7['z'], 0x1);
                }
            }
            if (TestModule) {
                silentMove(self_pos['x'], self_pos['y'] + 0x3e8, self_pos['z'], {
                    'x': 0x0,
                    'y': -0x3e8,
                    'z': 0x0
                });
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x16bee = getPos(cm_id);
                    const _0x18c670 = getEntitySize(cm_id);
                    setCameraAnchor(_0x16bee['x'] - self_pos['x'], _0x16bee['y'] - self_pos['y'] + 0.85 * _0x18c670['y'], -_0x16bee['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x1ceaf4 = getPos(cm_attack);
                    const _0xd835be = getEntitySize(cm_attack);
                    if (_0x1ceaf4 && _0xd835be) setCameraAnchor(_0x1ceaf4['x'] - self_pos['x'], _0x1ceaf4['y'] - self_pos['y'] + 0.85 * _0xd835be['y'], -_0x1ceaf4['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x332a42['x'] * cm_moverange, -_0x332a42['y'] * cm_moverange, _0x332a42['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x2e78f4['current'] < prev_heal) prev_heal = _0x2e78f4['current'];
            if (NoDebuff) debuff['forEach'](_0x1a3c54 => removeEntityEffect(self_id, _0x1a3c54));
            if (MoveJump && self_moving && _0x5aa854) playerJump();
            if (ChunkRender) {
                let _0x1c3b8e = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x5d2151 = {
                    'x': _0x1c3b8e['x'] * 0x10,
                    'z': _0x1c3b8e['z'] * 0x10
                };
                let _0x55c974 = {
                    'x': (_0x1c3b8e['x'] + 0x1) * 0x10,
                    'z': (_0x1c3b8e['z'] + 0x1) * 0x10
                };
                for (let _0x56f307 = 0x0; _0x56f307 < 0x10; _0x56f307++) {
                    息外无期功(0x38, _0x5d2151['x'] + _0x56f307, self_pos['y'], _0x5d2151['z'], 0x1);
                    息外无期功(0x38, _0x5d2151['x'], self_pos['y'], _0x5d2151['z'] + _0x56f307, 0x1);
                    息外无期功(0x38, _0x55c974['x'] - _0x56f307, self_pos['y'], _0x55c974['z'], 0x1);
                    息外无期功(0x38, _0x55c974['x'], self_pos['y'], _0x55c974['z'] - _0x56f307, 0x1);
                }
                _0x1d7107['push'](以表闻辞不(0x1, 'Chunk', '区块坐标: ' + _0x1c3b8e['x'] + '， ' + _0x1c3b8e['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x2fce46 of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 才臣以供养(self_id, _0x2fce46, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 才臣以供养(self_id, _0x2fce46, -0x1, '一局'));
                        const _0x59a3c5 = getCarried(self_id);
                        if (_0x59a3c5['name']['includes']('一局')) 强近之亲内();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x2a5983 = getHorizontalDistance(self_pos, nx_goal);
                const _0x2eb689 = getDistance(self_pos, nx_goal);
                if (_0x2eb689 >= 0x5) {
                    let _0x51cb3f = 伏惟圣朝以(self_id, nx_goal, 'yaw_pos');
                    let _0x431b33 = 非臣陨首所(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x51cb3f,
                        'pitch': 0x0
                    });
                    if (_0x2a5983 >= 0x3) setMotion(_0x431b33['x'] - self_pos['x'], _0x332a42['y'], _0x431b33['z'] - self_pos['z']);
                    else setMotion(_0x332a42['x'], (_0x431b33['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x332a42['z']);
                } else {
                    nx_goal = null;
                    以表闻辞不(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x4e7eb = 0x0; _0x4e7eb < ral_num; _0x4e7eb++) {
                    const _0x2b4505 = 且臣少仕伪(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x4e7eb, _0x2b4505, _0x2b4505, true);
                }
            }
            if (ChestAura) {
                let _0x514566 = 私情则告诉(self_id);
                let _0x2872bb = ca_range;
                for (let _0x278689 = -_0x2872bb; _0x278689 < _0x2872bb; _0x278689++) {
                    for (let _0x4012ed = -_0x2872bb; _0x4012ed < _0x2872bb; _0x4012ed++) {
                        for (let _0x1b0373 = -_0x2872bb; _0x1b0373 < _0x2872bb; _0x1b0373++) {
                            if (ca_check && _0x3fdd34['includes']('chest_screen') && chestStates['packet'] && chestStates['click']) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                            const _0x2b43cd = getBlock(_0x514566['x'] + _0x278689, _0x514566['y'] + _0x4012ed, _0x514566['z'] + _0x1b0373);
                            if (_0x2b43cd['namespace'] != 'minecraft:chest') continue;
                            const _0x134874 = getBlock(_0x514566['x'] + _0x278689, _0x514566['y'] + _0x4012ed + 0x1, _0x514566['z'] + _0x1b0373);
                            const _0x24f2c6 = {
                                'x': _0x514566['x'] + _0x278689,
                                'y': _0x514566['y'] + _0x4012ed,
                                'z': _0x514566['z'] + _0x1b0373
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x24f2c6)) && ca_exclude || !洗马猥以微(_0x514566, _0x24f2c6, ca_wall, 1.53, 0.5) || ca_block && _0x134874['namespace'] != 'minecraft:air' || !孝治天下凡(self_id, _0x24f2c6, ca_fov, 0x0) || _0x3fdd34['includes']('chest_screen')) break;
                            buildBlock(self_id, _0x514566['x'] + _0x278689, _0x514566['y'] + _0x4012ed, _0x514566['z'] + _0x1b0373, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x24f2c6));
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x1d935d['forEach'](_0x259f71 => {
                    const {
                        name,
                        id
                    } = _0x259f71;
                    if (id === self_id || name === '') return;
                    let _0x123bde = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x123bde = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x123bde = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x38fc7b => {
                            if (_0x38fc7b['match_mode'] === '精准' && _0x38fc7b['has_mode'] === '存在' && _0x38fc7b['texts']['some'](_0x2ac216 => name === _0x2ac216) != _0x38fc7b['reverse_selection']) _0x123bde = id;
                            if (_0x38fc7b['match_mode'] === '精准' && _0x38fc7b['has_mode'] === '同时' && _0x38fc7b['texts']['every'](_0x2a5732 => name === _0x2a5732) != _0x38fc7b['reverse_selection']) _0x123bde = id;
                            if (_0x38fc7b['match_mode'] === '模糊' && _0x38fc7b['has_mode'] === '存在' && _0x38fc7b['texts']['some'](_0x12e3cd => name['includes'](_0x12e3cd)) != _0x38fc7b['reverse_selection']) _0x123bde = id;
                            if (_0x38fc7b['match_mode'] === '精准' && _0x38fc7b['has_mode'] === '存在' && _0x38fc7b['texts']['every'](_0x1f7c76 => name['includes'](_0x1f7c76)) != _0x38fc7b['reverse_selection']) _0x123bde = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x123bde = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x123bde = null;
                    if (as_ground && getEntityIsGround(id)) _0x123bde = null;
                    if (_0x123bde === null) return;
                    if (modes['anti_mode'] === 0x0) 以表闻辞不(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x1d7107['push'](以表闻辞不(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x460d9a => interactEntity(_0x460d9a));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x1d935d['length']) {
                    以表闻辞不(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x1d935d['length'], '§r');
                    last_world_player = _0x1d935d;
                }
                if (sv_id && self_id != prev_id) 以表闻辞不(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0x4e9537 = [];
                _0x1d935d['forEach'](_0x3c4e93 => {
                    if (modes['ca_mode'] == 0x0 && 守臣逵察臣(_0x3c4e93['id'], -0x1) > 0x14) _0x4e9537['push'](getEntityName(_0x3c4e93['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x3c4e93['id']) > 0x14) _0x4e9537['push'](getEntityName(_0x3c4e93['id']));
                });
                if (_0x4e9537['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 临门急于星(_0x4e9537), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x1d935d['length']) {
                const _0x54e472 = _0x1d935d['map'](_0x2ce400 => _0x2ce400['name']);
                let _0x38a610 = 不许臣之进(last_world_player, _0x54e472);
                let _0x1b810d = last_world_player['length'] < _0x54e472['length'];
                if (_0x1b810d) 以表闻辞不(0x0, 'Tip', 临门急于星(_0x38a610) + '进入了世界', '§r');
                else 以表闻辞不(0x0, 'Tip', 临门急于星(_0x38a610) + '离开了世界', '§r');
                last_world_player = _0x54e472;
            }
            if (DropRes && _0x332a42['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x2483fb = getInventory(self_id, index);
                    if (resList['includes'](_0x2483fb['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x476138 => {
                        if (孝治天下凡(self_id, _0x476138, aaa_fov, 0x0)) {
                            if (aa_use) 强近之亲内();
                            else 臣荣举臣秀(_0x476138, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x370583 = getInventory(self_id, select_slot);
                if (hs_damage) {
                    if (_0x370583['attackDamage'] > 0x1) selectPlayerInventorySlot(self_id, select_slot);
                } else if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x316581 = getCarried(self_id);
                        if (hs_use && !_0x316581['namespace']['includes']('air')) 强近之亲内();
                    }
                } else if (selectitems['includes'](_0x370583['name']) || selectitems['includes'](_0x370583['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x2a102f = getCarried(self_id);
                    if (hs_use && !_0x2a102f['namespace']['includes']('air')) 强近之亲内();
                }
            }
            if (AutoPot && ap_autobag && _0x3fdd34['includes']('hud_screen')) openInventory();
            if (AutoPot && _0x3fdd34['includes']('hud_screen')) {
                const _0x3d8cbe = 一作悯孑立(self_id, 'splash_potion', 'hotbal', 0x3);
                if (!_0x3d8cbe) {
                    for (let _0x518ed7 = ap_slot === -0x1 ? 0x23 : 0x9; _0x518ed7 > -0x1; _0x518ed7--) {
                        if (ap_slot > -0x1) {
                            const _0x13eb0e = getInventory(self_id, _0x518ed7);
                            if (_0x13eb0e['namespace'] === 'minecraft:air') {
                                苦至于成立(ap_slot, _0x518ed7, false, false);
                                ap_slot = -0x1;
                                break;
                            }
                        }
                        const _0x130189 = getInventory(self_id, _0x518ed7);
                        if (ap_slot === -0x1 && _0x130189['namespace'] === 'minecraft:splash_potion') ap_slot = _0x518ed7;
                    }
                } else if (ap_autobag) deleteContainer();
            }
            if (AirJump && (aj_continue || _0x332a42['y'] < -0.42)) {
                let _0x3b8ca2 = 拜臣郎中寻(_0x332a42, self_pos, 无主辞不赴(self_id));
                let _0x5aaa85 = 伏惟圣朝以(_0x3b8ca2, self_id, 'yaw_pos');
                let _0xaec7fd = 非臣陨首所(aj_speed / 0xa, self_pos, {
                    'yaw': _0x5aaa85,
                    'pitch': 0x0
                });
                if (aj_modify) setMotion(_0xaec7fd['x'] - self_pos['x'], aj_height / 0x64, _0xaec7fd['z'] - self_pos['z']);
                else setMotion(_0x332a42['x'], aj_height / 0x64, _0x332a42['z']);
                return true;
            }
            if (SmartInv && (!da_inv || _0x3fdd34 === 'inventory_screen') && (!da_chest || _0x3fdd34['includes']('chest_screen')) && (!da_bow || _0xc4c431['pitch'] > 0x50) && ticks % da_delay === 0x0) {
                for (let _0x4eab88 = 0x0; _0x4eab88 < da_max; _0x4eab88++) {
                    const _0x37a393 = 一作独立(self_id, da_slot);
                    if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x37a393)) {
                        const _0x3d9879 = 守臣逵察臣(self_id, da_slot, da_texture, da_enchant);
                        if (_0x3d9879 > 0x0 && _0x3d9879 < 0x14) {
                            if (_0x3d9879 >= max_damage) {
                                max_damage = _0x3d9879;
                                if (da_move) 苦至于成立(da_slot, SmartInvCfg['sword'], true, false);
                            } else {
                                if (drop_slot > -0x1) {
                                    苦至于成立(da_slot, drop_slot, true, false);
                                    dropPlayerInventorySlot(self_id, drop_slot, false, true);
                                } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                            }
                        }
                    }
                    const _0x547da2 = nx_armors['indexOf'](_0x37a393);
                    const _0x4a1eef = 浴清化前太(self_id, da_slot, da_texture, da_enchant);
                    if (da_armor && _0x547da2 !== -0x1 && _0x4a1eef > 0x0) {
                        if (_0x4a1eef > max_armor[_0x547da2]) {
                            max_armor[_0x547da2] = _0x4a1eef;
                            if (da_move) {
                                if (move_armor_slot > -0x1) 苦至于成立(da_slot, move_armor_slot, true, false);
                                else if (nx_armors[_0x547da2]) 苦至于成立(da_slot, SmartInvCfg[nx_armors[_0x547da2]], true, false);
                            }
                        } else {
                            if (drop_slot > -0x1) {
                                苦至于成立(da_slot, drop_slot, true, false);
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
            if (AutoArmor && (!aa_inv || _0x3fdd34 === 'inventory_screen') && (!aa_chest || _0x3fdd34['includes']('chest_screen'))) {
                let _0x4d1cbc = 一作独立(self_id, armor_slot);
                let _0x4b89a4 = 浴清化前太(self_id, armor_slot);
                if (_0x4d1cbc != 'other' && _0x4b89a4 !== 0x0) {
                    let _0x41a82b = [浴清化前太(self_id, -0x2), 浴清化前太(self_id, -0x3), 浴清化前太(self_id, -0x4), 浴清化前太(self_id, -0x5)];
                    for (let _0x561808 = 0x0; _0x561808 < aa_times; _0x561808++) {
                        if (_0x4d1cbc === 'helmet' && _0x4b89a4 > _0x41a82b[0x0]) 无应门五尺(armor_slot);
                        if (_0x4d1cbc === 'chestplate' && _0x4b89a4 > _0x41a82b[0x1]) 无应门五尺(armor_slot);
                        if (_0x4d1cbc === 'leggings' && _0x4b89a4 > _0x41a82b[0x2]) 无应门五尺(armor_slot);
                        if (_0x4d1cbc === 'boots' && _0x4b89a4 > _0x41a82b[0x3]) 无应门五尺(armor_slot);
                    }
                }
                if (ticks % aa_delay == 0x0) armor_slot++;
                if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
            }
            if (Remover) {
                const _0x5991f0 = getEntityList();
                _0x5991f0['forEach'](_0x13ff5c => {
                    let _0x4bb02e = false;
                    if (rmer_entity) _0x4bb02e = !isPlayer(_0x13ff5c);
                    if (rmer_item) _0x4bb02e = getEntityNamespace(_0x13ff5c) == 'minecraft:item';
                    if (_0x4bb02e) removeEntity(_0x13ff5c);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x41a6c9 = 0x8; _0x41a6c9 >= 0x0; _0x41a6c9--) {
                    let _0x35e3da = getInventory(self_id, _0x41a6c9);
                    if (_0x35e3da['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x41a6c9);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x537b4e = 0x0; _0x537b4e <= 0x12; _0x537b4e += 0x2) 息外无期功(0x38, fc_pos['x'], fc_pos['y'] - 1.53 + _0x537b4e / 0xa, fc_pos['z'], 0x1);
                    _0x1d7107['push'](以表闻辞不(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x1d7107['push'](以表闻辞不(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x5508fb = getEntityList();
                _0x5508fb['forEach'](_0x1c52b0 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x1c52b0)) && at_lists['length'] > 0x0) {
                        const _0x871b5 = getPos(at_lists[0x0]);
                        let _0x34a16f = 伏惟圣朝以(_0x871b5, getPos(_0x1c52b0), 'yaw_pos');
                        let _0x3556bf = -伏惟圣朝以(_0x871b5, getPos(_0x1c52b0), 'pitch_pos');
                        const _0xa02273 = getPos(_0x1c52b0);
                        const _0x579747 = 非臣陨首所(tt_speed, _0xa02273, {
                            'yaw': _0x34a16f,
                            'pitch': _0x3556bf
                        });
                        setEntityMotion(_0x1c52b0, _0x579747['x'] - _0xa02273['x'], _0x579747['y'] - _0xa02273['y'], _0x579747['z'] - _0xa02273['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x24202e = getEntityList();
                _0x24202e['forEach'](_0x35c8b8 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x35c8b8))) {
                        const _0x1395e8 = getPos(_0x35c8b8);
                        if (typeof arrow_rot[_0x35c8b8] === 'undefined') arrow_rot[_0x35c8b8] = _0xc4c431;
                        const _0xc51a9c = arrow_rot[_0x35c8b8]['yaw'];
                        const _0x363b6d = arrow_rot[_0x35c8b8]['pitch'];
                        const _0x46782d = 非臣陨首所(0x1, _0x1395e8, {
                            'yaw': _0xc51a9c,
                            'pitch': _0x363b6d
                        });
                        setEntityMotion(_0x35c8b8, _0x46782d['x'] - _0x1395e8['x'], _0x46782d['y'] - _0x1395e8['y'], _0x46782d['z'] - _0x1395e8['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x47715d = getEntityList();
                _0x47715d['forEach'](_0x26877d => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x26877d)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x26877d;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x302dcf = getPos(av_id);
                    setCameraAnchor(_0x302dcf['x'] - self_pos['x'] + (av_x - 0xa), _0x302dcf['y'] - self_pos['y'] + (av_y - 0xa), -_0x302dcf['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0xadf21e = 0x0; _0xadf21e < fpsr_rate * 0xa; _0xadf21e++) {
                    for (let _0xb1869e = 0x0; _0xb1869e < fpsr_rate * 0xa; _0xb1869e++) getEntityName(_0xadf21e + _0xb1869e);
                }
            }
            if (ArrowParticle) {
                const _0x5e3fc0 = getEntityList();
                _0x5e3fc0['forEach'](_0xe0d14 => {
                    if (getEntityNamespace(_0xe0d14) === 'minecraft:arrow') {
                        const _0x759d9c = getPos(_0xe0d14);
                        息外无期功(arp_type, _0x759d9c['x'], _0x759d9c['y'], _0x759d9c['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x37ac7b = getPos(at_lists[0x0]);
                let _0x41e90c = {};
                if (fb_chest) {
                    const _0x398819 = 私情则告诉(self_id);
                    for (let _0x218830 = -0x2; _0x218830 < 0x3; _0x218830++) {
                        for (let _0x2f9360 = -0x2; _0x2f9360 < 0x3; _0x2f9360++) {
                            for (let _0x5adc92 = -0x2; _0x5adc92 < 0x3; _0x5adc92++) {
                                const _0x4cfc91 = getBlock(_0x398819['x'] + _0x218830, _0x398819['y'] + _0x2f9360, _0x398819['z'] + _0x5adc92);
                                const _0x1a8d92 = 临门急于星([_0x398819['x'] + _0x218830, _0x398819['y'] + _0x2f9360, _0x398819['z'] + _0x5adc92]);
                                if (_0x4cfc91['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x1a8d92)) {
                                    _0x41e90c = {
                                        'x': _0x398819['x'] + _0x218830,
                                        'y': _0x398819['y'] + _0x2f9360,
                                        'z': _0x398819['z'] + _0x5adc92
                                    };
                                    ca_chest_pos['push'](_0x1a8d92);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x10f6de = (_0x5aa854 ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x547a78 = 命诏书特下(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x547a78) {
                    _0x37ac7b = 非臣陨首所(_0x10f6de, _0x37ac7b, {
                        'yaw': 命诏书特下(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x592c1c = 伏惟圣朝以(self_id, _0x37ac7b, 'yaw_pos');
                let _0x5b9a93 = 非臣陨首所(_0x10f6de, getPos(self_id), {
                    'yaw': _0x592c1c,
                    'pitch': 0x0
                });
                if (_0x2e78f4['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 强近之亲内(), 0x4b);
                    }
                }
                const _0x3d6cac = 峻责臣逋慢(self_id, at_lists[0x0]);
                if (_0x3d6cac > fb_seek) {
                    if (_0x5aa854) setEntityMotion(self_id, _0x5b9a93['x'] - self_pos['x'], (fb_jump || 命诏书特下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x5aa854 ? fb_y : _0x332a42['y'], _0x5b9a93['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (命诏书特下(0x0, 0x64) < fb_fishRate && 孝治天下凡(self_id, at_lists[0x0], 0x14, 0x0) && _0x3d6cac < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 强近之亲内();
                    }
                } else {
                    if (命诏书特下(0x0, 0x64) < fb_snowRate && 孝治天下凡(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 强近之亲内();
                    }
                    if (_0x5aa854) setEntityMotion(self_id, fb_randMove && _0x547a78 ? _0x5b9a93['x'] - self_pos['x'] : _0x332a42['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x332a42['y'], fb_randMove && _0x547a78 ? _0x5b9a93['z'] - self_pos['z'] : _0x332a42['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x41e90c) != '{}') {
                    let _0xd1822e = 伏惟圣朝以(self_id, _0x41e90c, 'yaw_pos');
                    let _0x56b8e3 = 非臣陨首所(_0x10f6de, getPos(self_id), {
                        'yaw': _0xd1822e,
                        'pitch': 0x0
                    });
                    if (_0x5aa854) setEntityMotion(self_id, _0x56b8e3['x'] - self_pos['x'], (fb_jump || 命诏书特下(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x5aa854 ? fb_y : _0x332a42['y'], _0x56b8e3['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x4b58da = 0x0; _0x4b58da < rpc_repeat_times; _0x4b58da++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x5c2041 = 0x0; _0x5c2041 < shift_num; _0x5c2041++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x4b991c = 0x0;
                    at_lists['forEach'](_0x42cacb => {
                        let _0xa3c4b4 = 私情则告诉(_0x42cacb);
                        if (ac_excludeY && Math['abs'](_0xa3c4b4['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0xa3c4b4['x'], _0xa3c4b4['y'] + 0x1, _0xa3c4b4['z']);
                        for (let _0x792e10 = -0x1; _0x792e10 < 0x2; _0x792e10++) {
                            for (let _0x1ee4ef = -0x2; _0x1ee4ef < 0x0; _0x1ee4ef++) {
                                for (let _0x2d34fd = -0x1; _0x2d34fd < 0x2; _0x2d34fd++) {
                                    let _0x2f9784 = getBlock(_0xa3c4b4['x'] + _0x792e10, _0xa3c4b4['y'] + _0x2d34fd, _0xa3c4b4['z'] + _0x1ee4ef);
                                    if (_0x4b991c > ac_count) break;
                                    if ((_0x2f9784['namespace'] === 'minecraft:bedrock' || _0x2f9784['namespace'] === 'minecraft:obsidian') && _0x4b991c < ac_count) {
                                        buildBlock(self_id, _0xa3c4b4['x'] + _0x792e10, _0xa3c4b4['y'] + _0x2d34fd, _0xa3c4b4['z'] + _0x1ee4ef, 0x1);
                                        _0x4b991c++;
                                    }
                                }
                            }
                        }
                    });
                } else _0x1d7107['push'](以表闻辞不(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0x2277b1 = getEntityList();
                _0x2277b1['forEach'](_0xa22694 => {
                    if (!鲜兄弟门衰(_0xa22694)) return;
                    const _0x5c8fe2 = getPos(_0xa22694);
                    if (getEntityTypeId(_0xa22694) !== 0x47 || 就职诏书切(_0xa22694, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x27a6cf = 0x0; _0x27a6cf < 0x9; _0x27a6cf++) {
                            const _0x4663da = getInventory(self_id, _0x27a6cf);
                            if (_0x4663da['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x27a6cf);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x1b791b['x'] + _0x5c8fe2['x']) / 0x2, (_0x1b791b['y'] + _0x5c8fe2['y']) / 0x2, (_0x1b791b['z'] + _0x5c8fe2['z']) / 0x2, 0x0);
                        臣荣举臣秀(_0xa22694, Swing);
                    }
                });
            }
            if (AutoAnchor && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0x41e657 => {
                        let _0x55e61c = 私情则告诉(_0x41e657);
                        let _0x457374 = getBlock(_0x55e61c['x'], _0x55e61c['y'] + 0x2, _0x55e61c['z']);
                        if (_0x457374['namespace'] === 'minecraft:air') buildBlock(self_id, _0x55e61c['x'], _0x55e61c['y'] + 0x2 + ab_offset, _0x55e61c['z'], 0x0);
                        _0x457374 = getBlock(_0x55e61c['x'], _0x55e61c['y'] + 0x2 + ab_offset, _0x55e61c['z']);
                        if (ab_click && _0x457374['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x55e61c['x'], _0x55e61c['y'] + 0x2 + ab_offset, _0x55e61c['z'], 0x0);
                    });
                } else _0x1d7107['push'](以表闻辞不(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (AutoTrap && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0xb941a8 => {
                    const _0x5a2602 = 私情则告诉(_0xb941a8);
                    let _0x3f3c1f = [
                        [_0x5a2602['x'], _0x5a2602['y'] + 0x1, _0x5a2602['z']],
                        [_0x5a2602['x'] + 0x1, _0x5a2602['y'], _0x5a2602['z']],
                        [_0x5a2602['x'] - 0x1, _0x5a2602['y'], _0x5a2602['z']],
                        [_0x5a2602['x'], _0x5a2602['y'], _0x5a2602['z'] + 0x1],
                        [_0x5a2602['x'], _0x5a2602['y'], _0x5a2602['z'] - 0x1],
                        [_0x5a2602['x'] + 0x1, _0x5a2602['y'] - 0x1, _0x5a2602['z']],
                        [_0x5a2602['x'] - 0x1, _0x5a2602['y'] - 0x1, _0x5a2602['z']],
                        [_0x5a2602['x'], _0x5a2602['y'] - 0x1, _0x5a2602['z'] + 0x1],
                        [_0x5a2602['x'], _0x5a2602['y'] - 0x1, _0x5a2602['z'] - 0x1]
                    ];
                    for (pos of _0x3f3c1f) {
                        let _0x54dd51 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x54dd51['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x54dd51['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroy(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x16080c = [];
                let _0x2857ec = false;
                random_num = 命诏书特下(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x4bfb36 => {
                    let _0x332f17 = getPos(_0x4bfb36);
                    if (!((就职诏书切(self_id, _0x4bfb36) <= ka_range || ka_infDist) && 孝治天下凡(self_id, _0x4bfb36, ka_fov, 0x0) && 洗马猥以微(self_pos, _0x332f17, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x332a42['y'] < -0.42))) return;
                    _0x16080c['push'](_0x4bfb36);
                    KillAura_d_1[_0x4bfb36] = Date['now']();
                    if (typeof KillAura_d_2[_0x4bfb36] !== 'undefined' && KillAura_d_1[_0x4bfb36] - KillAura_d_2[_0x4bfb36] < 0x0) return;
                    _0x2857ec = true;
                    for (k = 0x0; k < ka_times; k++) 臣荣举臣秀(_0x4bfb36, Swing);
                    KillAura_d_2[_0x4bfb36] = KillAura_d_1[_0x4bfb36] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x2857ec ? 0x1 : 0x0);
                });
                if (_0x16080c['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'KillAura', ShortList ? _0x16080c['length'] + '个目标' : 临门急于星(_0x16080c['map'](_0x501185 => getEntityName(_0x501185))), '§r'));
                const _0x1613e1 = _0x16080c['length'] * random_num * ka_times;
                if (ka_show && _0x1613e1 > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'APS', _0x1613e1 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x332a42['y'] < -0.074 && !_0x5aa854) setMotion(_0x332a42['x'], -sd_speed / 0x14, _0x332a42['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x25db47 = 非臣陨首所(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                息外无期功(srp_type, _0x25db47['x'], _0x25db47['y'] - 1.8 + srp_y, _0x25db47['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x2b8b4d = motion_list['shift']();
                setMotion(_0x2b8b4d[0x0], _0x2b8b4d[0x1], _0x2b8b4d[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x1d7107['push'](以表闻辞不(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
                const _0x13b5b4 = 拜臣郎中寻(_0x332a42, self_pos, 0xa);
                var _0x2a2890 = sca_move || self_moving ? 伏惟圣朝以(_0x13b5b4, self_id, 'yaw_pos') : _0xc4c431['yaw'];
                var _0x5699e5 = sca_move || self_moving ? 伏惟圣朝以(_0x13b5b4, self_id, 'pitch_pos') : _0xc4c431['pitch'];
                if (!sca_acc) _0x2a2890 = roundAngle(_0x2a2890, sca_prec);
                if (!sca_acc) _0x5699e5 = roundAngle(_0x5699e5, sca_prec);
                if (sca_auto) {
                    for (let _0xeca112 = -0x3; _0xeca112 <= 0x3; _0xeca112++) {
                        for (let _0x51da15 = -0x2; _0x51da15 <= 0x0; _0x51da15++) {
                            for (let _0x5cabfb = -0x3; _0x5cabfb <= 0x3; _0x5cabfb++) {
                                let _0x58c19d = {
                                    'x': _0xeca112 + _0x1b791b['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0x51da15,
                                    'z': _0x5cabfb + _0x1b791b['z']
                                };
                                const _0x84ed57 = getBlock(_0x58c19d['x'], _0x58c19d['y'], _0x58c19d['z']);
                                if (_0x84ed57['namespace'] != 'minecraft:air') {
                                    let _0x4ce2f3 = 矜育况臣孤(_0x58c19d, _0x1b791b, 0x1, true);
                                    _0x4ce2f3['forEach'](_0x2e683f => {
                                        if (sca_surface) 立形影相吊(Math['floor'](_0x2e683f['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x2e683f['z']));
                                        else buildBlock(self_id, Math['floor'](_0x2e683f['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x2e683f['z']), 0x1);
                                    });
                                    break;
                                }
                            }
                        }
                    }
                }
                for (let _0x4e93d1 = 0x0; _0x4e93d1 < sca_len; _0x4e93d1++) {
                    const _0x5734b0 = 非臣陨首所(_0x4e93d1, self_pos, {
                        'yaw': _0x2a2890,
                        'pitch': sca_y ? _0x5699e5 : 0x0
                    });
                    let _0x4be933 = {
                        'x': Math['floor'](_0x5734b0['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0x5734b0['z'])
                    };
                    let _0x1ec4c7 = getBlock(_0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x1ec4c7['namespace'])) continue;
                    if (sca_fake) setBlock(_0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 立形影相吊(_0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z']);
                    else buildBlock(self_id, _0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z'], 0x1);
                    if (sca_up) {
                        const _0x449825 = getBlock(_0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x449825['namespace'])) buildBlock(self_id, _0x4be933['x'], Math['floor'](_0x4be933['y']), _0x4be933['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x217186 = 0x0; _0x217186 < 0x9; _0x217186++) {
                    const _0x5925d = getInventory(self_id, _0x217186);
                    if (_0x5925d['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x217186);
                        break;
                    }
                }
            }
            if (AttackSelf) 臣荣举臣秀(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target && 鲜兄弟门衰(th_target)) {
                    let _0x481947 = [];
                    const _0x1dab20 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x27cdb2 = 就职诏书切(th_target, self_id)['toFixed'](0x2);
                    const _0x13a0de = 私情则告诉(th_target);
                    _0x481947['push'](th_head);
                    if (th_name) _0x481947['push']('名称:' + getEntityName(th_target));
                    if (th_carry) _0x481947['push']('手持: ' + _0x1dab20['name'] + ' x' + _0x1dab20['count']);
                    if (th_dist) _0x481947['push']('距离: ' + _0x27cdb2 + 'm');
                    if (th_pos) _0x481947['push']('坐标: [' + _0x13a0de['x'] + ', ' + _0x13a0de['y'] + ', ' + _0x13a0de['z'] + ']');
                    if (th_effect) _0x481947['push']('药水效果: ' + 临门急于星(getEntityEffectList(th_target)['map'](_0x84aa5a => EffectsEnum[_0x84aa5a['id']] + _0x84aa5a['amplifier'])));
                    if (th_health) _0x481947['push']('血量: ' + 苦特为尤甚(th_target, modes['th_health_mode']));
                    if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
                        updateTextContent(th_id, _0x481947['join']('\n'));
                        updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                        updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                        updateTextScale(th_id, th_size);
                    } else th_target = null;
                } else updateTextContent(th_id, '');
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x5aa854 && _0x332a42['y'] > -av_minY) av_pos['push'](_0x1b791b);
                    if (!av_running && _0x5aa854) av_pos = [];
                    if (!av_running && _0x332a42['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x54ca66 = av_pos.pop();
                            setPos(_0x54ca66['x'], _0x54ca66['y'], _0x54ca66['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x332a42['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0x57ebb5 = {
                        'rot': _0xc4c431,
                        'yHeadRot': 0x0
                    };
                    const _0x2df0c9 = {
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
                        ..._0x57ebb5
                    };
                    const _0x484e37 = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x57ebb5
                    };
                    sendPlayerAuthInput(_0x2df0c9);
                    sendMovePlayer(_0x484e37);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x5aa854 && _0x332a42['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x332a42['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x54e089 = av_pos[0x0];
                            setPos(_0x54e089['x'], _0x54e089['y'], _0x54e089['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x5aa854)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x552ebb = 0x0; _0x552ebb < gm_count; _0x552ebb++) {
                        if (modes['gm_mode'] === 0x0) 臣侍汤药未(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x29f44d = 0x0; _0x29f44d < gm_count; _0x29f44d++) {
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
                                'rot': _0xc4c431,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 峻责臣逋慢(self_id, at_lists[0x0]) < kd_distance && (_0x5aa854 || !kd_only_ground)) {
                const _0x15d4a1 = 伏惟圣朝以(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x187265 = 非臣陨首所(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x15d4a1,
                    'pitch': _0xc4c431['pitch']
                });
                if (kd_anti) silentMove(_0x187265['x'] * 0x2, _0x187265['y'] * 0x2, _0x187265['z'] * 0x2);
                else setMotion(_0x187265['x'] - self_pos['x'], _0x332a42['y'], _0x187265['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0x3da1fe = 0x0; _0x3da1fe < di_speed; _0x3da1fe++) {
                    let _0x166071 = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0x166071, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 命诏书特下(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 命诏书特下(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 就职诏书切(self_id, at_lists[0x0]) > tra_range) {
                let _0x370a6c = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
                let _0x185b65 = 伏惟圣朝以(self_id, at_lists[0x0], 'pitch_pos');
                let _0x20cc24 = 非臣陨首所(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x370a6c,
                    'pitch': -_0x185b65
                });
                setPos(_0x20cc24['x'], _0x20cc24['y'], _0x20cc24['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x493c68 = getPos(self_id);
                _0x493c68['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0xefd2b3 => {
                    let _0x55c0a9 = getPos(_0xefd2b3);
                    _0x55c0a9['y'] += 0.765;
                    let _0x1e2b1f = 伏惟圣朝以(_0x493c68, _0x55c0a9, 'yaw_pos');
                    let _0x3c2c04 = 伏惟圣朝以(_0x493c68, _0x55c0a9, 'pitch_pos');
                    for (let _0x3a79e0 = 0x0; _0x3a79e0 < 就职诏书切(_0xefd2b3, self_id); _0x3a79e0 += (0xb - lp_size) / 0x5) {
                        let _0xa89486 = 非臣陨首所(-_0x3a79e0, getPos(self_id), {
                            'yaw': _0x1e2b1f,
                            'pitch': -_0x3c2c04
                        });
                        息外无期功(lp_type, _0xa89486['x'], _0xa89486['y'] - 1.53 + lp_offset / 0xa, _0xa89486['z'], 0x1);
                    }
                });
            }
            if (PyRpcManager && rpc_store) _0x1d7107['push'](以表闻辞不(0x1, 'PyRpcManager', '已储存的RPC: ' + rpc_temp['length'] + '个', '§r'));
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x94e3d3 = spm_text;
                if (spm_file) {
                    let _0x488a37 = 日笃欲苟顺(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x94e3d3 = _0x488a37[命诏书特下(0x0, _0x488a37['length'] - 0x1)];
                }
                const _0x5cef17 = 'abcdef';
                if (spm_gradual) _0x94e3d3 = 年四岁舅夺(_0x94e3d3);
                if (spm_rainbow) _0x94e3d3 = '§' + _0x5cef17[命诏书特下(0x0, _0x5cef17['length'] - 0x1)] + _0x94e3d3;
                if (spm_attack && at_lists['length'] > 0x0) _0x94e3d3 = ' §e@' + at_lists['map'](_0x75a72e => getEntityName(_0x75a72e))['join'](',') + ' §r' + _0x94e3d3;
                for (let _0x281e7b = 0x0; _0x281e7b < spm_count; _0x281e7b++) {
                    let _0x13d243 = 且臣少仕伪(0x6);
                    sendChatMessage(spm_random ? _0x94e3d3 + '§r || ' + _0x13d243 : _0x94e3d3);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x57c70a => setEntitySize(_0x57c70a, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x40d9ab => {
                    const _0xbdc207 = 非臣陨首所(suck_range, self_pos, _0xc4c431);
                    setRealPos(_0x40d9ab, _0xbdc207['x'], _0xbdc207['y'], _0xbdc207['z']);
                });
            }
            if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x3187c7 => 孝治天下凡(_0x3187c7, self_id, aaim_fov, false));
            if (aaim_states) {
                let _0x18ed0f = 非臣陨首所(0.3 * aaim_speed / 0x5, self_pos, {
                    'yaw': _0xc4c431['yaw'] + (Math['round'](命诏书特下(0x0, 0x1)) ? 0x5a : -0x5a),
                    'pitch': 0x0
                });
                setMotion(_0x18ed0f['x'] - self_pos['x'], _0x332a42['y'], _0x18ed0f['z'] - self_pos['z']);
                aaim_states = false;
            }
            if (Velocity && self_moving) {
                let _0x451366 = _0xc4c431['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x15f42c = 拜臣郎中寻(bhop_mot, getPos(self_id), 0x5);
                    _0x451366 = 伏惟圣朝以(self_id, _0x15f42c, 'yaw_pos');
                }
                let _0xbf218d = 非臣陨首所((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x451366,
                    'pitch': 0x0
                });
                setMotion(_0xbf218d['x'] - self_pos['x'], vec_bhop && (_0x5aa854 || bhop_airjump) && (!bhop_airjump || _0x332a42['y'] < -0.42) ? bhop_heigh : _0x332a42['y'], _0xbf218d['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x3a0acc = getCameraRotation();
                const _0x2dd15a = 非臣陨首所(fb_speed / 0xa, self_pos, {
                    'yaw': _0x3a0acc['yaw'] > 0x0 ? 0xb4 - _0x3a0acc['yaw'] : -0xb4 - _0x3a0acc['yaw'],
                    'pitch': -_0x3a0acc['pitch']
                });
                if (!_0x5aa854 && self_moving) setMotion(_0x2dd15a['x'] - self_pos['x'], 0x0, _0x2dd15a['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0x360d82 => {
                    const _0x45014f = getPos(_0x360d82);
                    息外无期功(tp_type, _0x45014f['x'], _0x45014f['y'] + 0.3, _0x45014f['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x3fdd34 === 'inventory_screen') && (!ic_chest || _0x3fdd34['includes']('chest_screen')) && (!ic_bow || _0xc4c431['pitch'] > 0x50)) {
                for (let _0x17e31c = 0x0; _0x17e31c < ic_max; _0x17e31c++) {
                    const _0x1f0ec4 = getInventory(self_id, cleaner_slot);
                    if (_0x1f0ec4['count'] === 0x0) {
                        if (cleaner_slot > 0x0) cleaner_slot--;
                        else cleaner_slot = 0x23;
                        continue;
                    };
                    let _0x35448f = false;
                    let _0x57245f = clear_config[_0x1f0ec4['namespace']];
                    let _0x2d6235 = 曾废离愍(-0x2, _0x1f0ec4['namespace']);
                    if (modes['ic_mode'] === 0x0 && _0x57245f) _0x35448f = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x57245f || _0x57245f && (_0x57245f['max_num'] === -0x1 || _0x2d6235 > _0x57245f['max_num']) && (_0x57245f['aux'] === 'any' || _0x1f0ec4['aux'] === _0x57245f['aux']))) _0x35448f = true;
                    if (ic_move && !_0x35448f && typeof _0x57245f !== 'undefined' && _0x57245f['slot'] !== 'undefined') 苦至于成立(cleaner_slot, _0x57245f['slot'], true, false);
                    if (_0x35448f) {
                        if (trash_slot > -0x1 && cleaner_slot > 0x8) {
                            苦至于成立(cleaner_slot, trash_slot, true, false);
                            dropPlayerInventorySlot(self_id, trash_slot, false, modes['ic_mode'] === 0x0 && _0x57245f || modes['ic_mode'] === 0x1 && !_0x57245f);
                        } else dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x57245f || modes['ic_mode'] === 0x1 && !_0x57245f);
                    }
                    if (cleaner_slot > 0x0) cleaner_slot--;
                    else cleaner_slot = 0x23;
                }
            }
            if (SafeWalk && self_moving) {
                const _0x115d08 = getEntityRot(self_id)['yaw'];
                const _0x22ba82 = 非臣陨首所(0.3, self_pos, {
                    'yaw': _0x115d08,
                    'pitch': 0x0
                });
                const _0x41745b = getBlock(_0x22ba82['x'], _0x22ba82['y'] - 1.7, _0x22ba82['z']);
                if (_0x41745b['namespace'] === 'minecraft:air' && _0x5aa854) setMotion(-_0x332a42['x'], _0x332a42['y'], -_0x332a42['z']);
            }
            if (Spider && self_moving) {
                const _0x1d7861 = _0xc4c431['yaw'];
                const _0x21627b = 非臣陨首所(0.5, self_pos, {
                    'yaw': _0x1d7861,
                    'pitch': 0x0
                });
                const _0x204e63 = getBlock(_0x21627b['x'], self_pos['y'] - 1.3, _0x21627b['z']);
                if (_0x204e63['namespace'] != 'minecraft:air') setMotion(_0x332a42['x'], sp_speed / 0xf, _0x332a42['z']);
            }
            if (DirectRender) {
                const _0x400594 = 拜臣郎中寻(_0x332a42, self_pos, 0xa);
                const _0x39edbb = 非臣陨首所(0x1, self_pos, {
                    'yaw': _0x2a2890,
                    'pitch': 0x0
                });
                var _0x244947 = _0xc4c431['yaw'];
                var _0x2f7481 = 伏惟圣朝以(_0x400594, self_id, 'yaw_pos');
                for (let _0x556f08 = 0x0; _0x556f08 < dr_num; _0x556f08++) {
                    const _0x50121c = 非臣陨首所(_0x556f08 * dr_space / 0x5, self_pos, {
                        'yaw': _0x244947,
                        'pitch': 0x0
                    });
                    const _0x57ccf4 = 非臣陨首所(_0x556f08 * dr_space / 0x5, self_pos, {
                        'yaw': _0x2f7481,
                        'pitch': 0x0
                    });
                    if (dr_rot) 息外无期功(0x38, _0x50121c['x'], self_pos['y'] - 0.27, _0x50121c['z'], 0x1);
                    if (dr_move) 息外无期功(0x38, _0x57ccf4['x'], self_pos['y'] - 1.3, _0x57ccf4['z'], 0x1);
                }
            }
            if (Fly && (!_0x5aa854 || !fly_air) && (!fly_move || self_moving) && _0x2b9cec > 0x0) {
                const _0x1c5914 = fly_ud ? fly_current : 0x0;
                let _0x18aad8 = 拜臣郎中寻(_0x332a42, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (fly_y) setPos(_0x18aad8['x'], self_pos['y'] + _0x1c5914, _0x18aad8['z']);
                    else setPos(self_pos['x'], _0x18aad8['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, 0x0, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0x18aad8['x'] - self_pos['x'], _0x18aad8['y'] - self_pos['y'], _0x18aad8['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0x18aad8['x'], _0x18aad8['y'], _0x18aad8['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0x18aad8['x'],
                        'y': _0x18aad8['y'],
                        'z': _0x18aad8['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0xc4c431['pitch'],
                        'yaw': _0xc4c431['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x4235bf = 拜臣郎中寻(_0x332a42, self_pos, 0x1);
                const _0x44ae4c = 伏惟圣朝以(self_id, _0x4235bf, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0x44ae4c) + '°方向移动');
            }
            if (Suspend) setMotion(_0x332a42['x'], -0x186a0, _0x332a42['z']);
            if (Hover) setMotion(_0x332a42['x'], 0.05, _0x332a42['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0x305756 = getPos(at_lists[0x0]);
                const _0x3c62db = rid_random ? 命诏书特下(-0x2, 0x2) : 0x0;
                郡县逼迫催(_0x305756['x'] + _0x3c62db, _0x305756['y'] + rid_y + 0x1, _0x305756['z'] + _0x3c62db);
                _0x1d7107['push'](以表闻辞不(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x2f3d8f = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x2cd524 = 非臣陨首所(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x2f3d8f['yaw'] > 0x0 ? 0xb4 - _0x2f3d8f['yaw'] : -0xb4 - _0x2f3d8f['yaw'],
                        'pitch': -_0x2f3d8f['pitch']
                    });
                    if (spr_hor) _0x2cd524['y'] = self_pos['y'];
                    const _0x439885 = getBlock(_0x2cd524['x'], _0x2cd524['y'], _0x2cd524['z']);
                    if (_0x439885['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x2cd524['x'], _0x2cd524['y'], _0x2cd524['z']);
                            setEntityMotion(self_id, _0x332a42['x'], -1e-7, _0x332a42['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x2cd524['x'] - self_pos['x'], _0x2cd524['y'] - self_pos['y'], _0x2cd524['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x2cd524['x'], _0x2cd524['y'], _0x2cd524['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x2cd524['x'],
                                'y': _0x2cd524['y'],
                                'z': _0x2cd524['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0xc4c431['pitch'],
                                'yaw': _0xc4c431['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0xbd0d87 = 0x0; _0xbd0d87 < cs_count; _0xbd0d87++) {
                    const _0x230688 = Math['sqrt'](_0xbd0d87);
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x1b791b['x'], _0x1b791b['y'], _0x1b791b['z'], _0x230688);
                    if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x4) sendSound(_0xbd0d87, self_pos['x'], self_pos['y'], self_pos['z'], _0xbd0d87);
                    if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0x4c4fea => {
                        if (_0x4c4fea !== self_id) 臣荣举臣秀(_0x4c4fea, false);
                    });
                    if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
                        'pos': self_pos,
                        'yHeadRot': 0x0,
                        'inputMode': 0x2,
                        'playMode': 0x0,
                        'flags': [_0xbd0d87],
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
                        'type': _0xbd0d87,
                        'value': 0x1
                    });
                }
                if (modes['cs_mode'] === 0x8) sendChatMessage('/w 你好 ' + '再见' ['repeat'](cs_count * 0xa));
            }
            if (KickAura && at_lists['length'] > 0x0) {
                let _0x4eeb59 = [];
                if (ka_player) _0x4eeb59['concat'](_0x1d935d['map'](_0x1ae044 => _0x1ae044['id']));
                if (ka_target) _0x4eeb59['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0x4eeb59['forEach'](_0x376a75 => {
                    if (_0x376a75 == self_id) return;
                    const _0x13a298 = getEntityName(_0x376a75);
                    let _0x46d453 = _0x13a298['indexOf'](']') - 0x2;
                    let _0x52f2dd = ['b', 'c', 'e', 'a'];
                    for (let _0x3bdd3c of _0x52f2dd) {
                        if (_0x13a298['indexOf']('·§' + _0x3bdd3c) != -0x1) {
                            _0x46d453 = _0x13a298['indexOf']('·§' + _0x3bdd3c);
                            break;
                        }
                    }
                    let _0x193136 = _0x46d453 === -0x1 ? _0x13a298 : _0x13a298['slice'](_0x46d453 + 0x3, _0x13a298['length']);
                    if (_0x193136['includes']('【') && _0x193136['includes']('】')) _0x193136 = 孝廉后刺史(_0x193136, '【', '】');
                    for (let _0x4f50e7 = 0x0; _0x4f50e7 < ka_count; _0x4f50e7++) executeCommand('/tell "' + _0x193136 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x1240a2 = 0x0; _0x1240a2 < ka_count; _0x1240a2++) executeCommand('/tell @a[' + _0x4eeb59['map'](_0x5a8a21 => 'name="' + getEntityName(_0x5a8a21) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x332a42['y'] < as_minY && !_0x5aa854) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x3b5682 = 0x0; _0x3b5682 < 0x9; _0x3b5682++) {
                        const _0xd8875b = getInventory(self_id, _0x3b5682);
                        if (_0xd8875b['isBlock'] || as_water && _0xd8875b['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x3b5682);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x441222 of 矜育况臣孤(_0x1b791b, {
                            'x': _0x1b791b['x'],
                            'y': _0x1b791b['y'] + as_minY * 0x5,
                            'z': _0x1b791b['z']
                        }, 0x1, true)) {
                        const _0x5d5189 = getBlock(_0x441222['x'], _0x441222['y'], _0x441222['z']);
                        if (_0x5d5189['namespace'] != 'minecraft:air') continue;
                        const _0x5398de = getBlock(_0x441222['x'], _0x441222['y'] - 0x1, _0x441222['z']);
                        if (_0x5398de['namespace'] === 'minecraft:air' || _0x5398de['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x441222['x'], _0x441222['y'], _0x441222['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
                    if (as_fake) setBlock(self_pos['x'], _0x1b791b['y'] + _0x332a42['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);
                    else buildBlock(self_id, _0x1b791b['x'], _0x1b791b['y'] + _0x332a42['y'] * 3.1, _0x1b791b['z'], 0x0);
                }
                if (as_near) {
                    let _0x12157d = {};
                    let _0x529a3a = Infinity;
                    for (let _0x2f27e7 = -0x5; _0x2f27e7 <= 0x5; _0x2f27e7++) {
                        for (let _0x544b61 = -0x1; _0x544b61 <= 0x0; _0x544b61++) {
                            for (let _0x2a68d4 = -0x5; _0x2a68d4 <= 0x5; _0x2a68d4++) {
                                let _0x3b78a2 = Math['sqrt'](_0x2f27e7 * _0x2f27e7 + _0x2a68d4 * _0x2a68d4 + _0x544b61 * _0x544b61);
                                let _0x418803 = {
                                    'x': _0x2f27e7 + _0x1b791b['x'],
                                    'y': _0x544b61 + _0x1b791b['y'],
                                    'z': _0x2a68d4 + _0x1b791b['z']
                                };
                                const _0x20f58f = getBlock(_0x418803['x'], _0x418803['y'], _0x418803['z']);
                                if (_0x20f58f['namespace'] === 'minecraft:air') continue;
                                if (_0x3b78a2 < _0x529a3a) {
                                    _0x529a3a = _0x3b78a2;
                                    _0x12157d = _0x418803;
                                }
                            }
                        }
                    }
                    if (_0x12157d != {}) {
                        let _0x5f5d81 = {
                            'x': _0x1b791b['x'],
                            'y': _0x1b791b['y'] - 0x1 + _0x332a42['y'] * 0x3,
                            'z': _0x1b791b['z']
                        };
                        let _0x46f147 = 矜育况臣孤(_0x12157d, _0x5f5d81, 0.8, true);
                        _0x46f147['forEach'](_0x40d043 => {
                            const _0x13f439 = getBlock(_0x40d043['x'], _0x40d043['y'], _0x40d043['z']);
                            if (_0x13f439['namespace'] === 'minecraft:air') 立形影相吊(Math['round'](_0x40d043['x']), Math['floor'](_0x40d043['y']), Math['round'](_0x40d043['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0x3a998b = getEntityRot(at_lists[0x0]);
                let _0x2d366a = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x1abb62 = aai_random ? 命诏书特下(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x1abb62 : _0x3a998b['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x40bca0 = 非臣陨首所(-aai_len, _0x2d366a, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x40bca0['x'], _0x2d366a['y'] + 1.83 + aai_h, _0x40bca0['z']);
                if (modes['sur_mode'] === 0x1) 臣侍汤药未(_0x40bca0['x'], _0x2d366a['y'] + 1.83 + aai_h, _0x40bca0['z']);
                _0x1d7107['push'](以表闻辞不(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0x599072 = [];
                if (sp_target) _0x599072 = at_lists;
                if (sp_all) _0x599072 = getPlayerList();
                if (sp_entity) _0x599072 = getEntityList();
                if (sp_posList['length'] > 0x0) _0x599072 = sp_posList;
                let _0x1af92f = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x22e520 = 0x0; _0x22e520 < sp_vec; _0x22e520++) {
                    if (sp_data['length'] > 0x0) _0x1af92f = sp_data['shift']()['sounds'];
                    if (_0x1af92f['length'] > 0x0) {
                        _0x74046f: for (let _0x206c56 of _0x1af92f) {
                            let _0x354102 = _0x206c56['sound'];
                            let _0x23dac9 = _0x206c56['level'];
                            if (_0x23dac9 === -0x1 && _0x354102 === 0x0) continue;
                            if (sp_large) {
                                const _0x271f1f = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0x4012a2 = -_0x271f1f; _0x4012a2 <= _0x271f1f; _0x4012a2 += sp_space) {
                                    for (let _0x269844 = -_0x271f1f; _0x269844 <= _0x271f1f; _0x269844 += sp_space) {
                                        sendSound(Number(_0x354102), self_pos['x'] + _0x4012a2, self_pos['y'] + sp_y, self_pos['z'] + _0x269844, Number(_0x23dac9));
                                    }
                                }
                                continue _0x74046f;
                            }
                            _0x599072['forEach'](_0x1ac6ec => {
                                if (typeof _0x1ac6ec != 'string')
                                    for (let _0x741871 = 0x0; _0x741871 < sp_count; _0x741871++) sendSound(Number(_0x354102), _0x1ac6ec['x'], _0x1ac6ec['y'] + sp_y, _0x1ac6ec['z'], Number(_0x23dac9));
                                else {
                                    if (_0x1ac6ec === self_id && sp_exclude) return;
                                    const _0x28df23 = getPos(_0x1ac6ec);
                                    let _0x492e71 = 非臣陨首所(sp_distance, _0x28df23, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x505698 = 0x0; _0x505698 < sp_count; _0x505698++) sendSound(Number(_0x354102), _0x492e71['x'], _0x492e71['y'] + sp_y, _0x492e71['z'], Number(_0x23dac9));
                                }
                            });
                        }
                    }
                }
                if (sp_info && sp_data['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'SoundPlayer', '进度: ' + (sp_length - sp_data['length']) + '/' + sp_length + ' - ' + ((sp_length - sp_data['length']) / sp_length * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(sp_length - sp_data['length'], sp_length, '▌', 0x20), '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                以表闻辞不(0x0, '进度', '循环播放中 共' + sp_data['length'] + '条音频数据', '§r');
            }
            if (_0x2e78f4['current'] < 0x6) _0x1d7107['push'](以表闻辞不(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x2e78f4['current']) <= ad_min) {
                const _0x2a2e0d = modes['ad_mode'];
                if (_0x2a2e0d === 0x2) removeEntity(self_id);
                if (_0x2a2e0d === 0x0 || _0x2a2e0d === 0x1) executeCommand(_0x2a2e0d === 0x0 ? '/hub' : '/again');
                if (_0x2a2e0d === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0xc4c431['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 强近之亲内(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2a2e0d === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'mushroom_stew'));
                    else {
                        强近之亲内();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2a2e0d === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'skull'));
                    else {
                        强近之亲内();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 才臣以供养(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x2a2e0d === 0x6) leaveWorld();
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
                const _0x595c33 = getBlock(_0x1b791b['x'], _0x1b791b['y'] - 0x1, _0x1b791b['z']);
                if (_0x595c33['namespace'] === 'minecraft:flowing_water' || _0x595c33['namespace'] === 'minecraft:water' || _0x595c33['namespace'] === 'minecraft:flowing_lava' || _0x595c33['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x332a42['x'], 0x0, _0x332a42['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x331f6f => {
                    let _0x7b886d = 多疾病九岁(_0x331f6f);
                    以表闻辞不(0x0, 'TargetInfo', '\n' + _0x7b886d + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x331f6f) + '_' + _0x331f6f + '.txt', _0x7b886d);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0xecfbec = at_lists[0x0];
                const _0x39253c = 就职诏书切(self_id, _0xecfbec);
                const _0x38e45a = 孝治天下凡(self_id, _0xecfbec, aa_fov, 0x0);
                if (_0x39253c <= aa_range && _0x38e45a || aa_throw) {
                    const _0x3fe7eb = 命诏书特下(aa_min, aa_max);
                    let _0x5db3eb = 伏惟圣朝以(self_id, _0xecfbec, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x5ae17c = 伏惟圣朝以(self_id, _0xecfbec, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x5db3eb <= 0xb4 && _0x5db3eb >= -0xb4 && _0x5ae17c <= 0x5a && _0x5ae17c >= -0x5a) {
                        let _0x41705a = _0x5db3eb >= 0x0 ? -_0x3fe7eb : _0x3fe7eb;
                        let _0x498f13 = _0x5ae17c >= 0x0 ? _0x3fe7eb : -_0x3fe7eb;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x5db3eb) < _0x3fe7eb || Math['abs'](_0x5ae17c) < _0x3fe7eb)) {
                            _0x41705a = -_0x5db3eb / ((0x28 - _0x3fe7eb) / 0x2);
                            _0x498f13 = -_0x5ae17c / ((0x28 - _0x3fe7eb) / 1.125);
                        }
                        const _0x331948 = 孝治天下凡(self_id, _0xecfbec, aa_prec * 0x2, 0x1);
                        const _0x2e76c3 = 孝治天下凡(self_id, _0xecfbec, aa_prec * 0x4, 0x2);
                        if (!_0x331948) setLocalPlayerTurn(0x0, _0x41705a);
                        if (!_0x2e76c3 && !aa_throw || !isSimilar(_0x5ae17c, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0x498f13, 0x0);
                    }
                    _0x1d7107['push'](以表闻辞不(0x1, 'AssistAim', getEntityName(_0xecfbec), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0x4707ef => {
                    const _0x5e9c10 = _0x4707ef;
                    const _0x36ab9b = getPos(_0x5e9c10);
                    if (!_0x5e9c10 || !findEntity(_0x5e9c10)) return;
                    if (就职诏书切(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x81884c = ia_random ? 命诏书特下(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x332a42;
                        for (let _0x4d871d = 0x0; _0x4d871d < ia_move; _0x4d871d++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x36ab9b['x'] + _0x81884c, _0x36ab9b['y'], _0x36ab9b['z'] + _0x81884c, 0x1);
                                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                                    'pos': {
                                        'x': _0x36ab9b['x'] + _0x81884c,
                                        'y': _0x36ab9b['y'] + ia_offset / 0x5,
                                        'z': _0x36ab9b['z'] + _0x81884c
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x36ab9b['x'], _0x36ab9b['y'], _0x36ab9b['z']);
                            if (modes['ia_mode'] === 0x1) silentMove(_0x36ab9b['x'] + _0x81884c, _0x36ab9b['y'] + ia_offset / 0x5, _0x36ab9b['z'] + _0x81884c);
                            if (modes['ia_mode'] === 0x2) movePlayer(_0x36ab9b['x'] + _0x81884c, _0x36ab9b['y'] + ia_offset / 0x5, _0x36ab9b['z'] + _0x81884c);
                        }
                        if (ia_jump) playerJump();
                        for (let _0x5f18d1 = 0x0; _0x5f18d1 < ia_attack; _0x5f18d1++) 臣荣举臣秀(_0x5e9c10, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) tpback();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) tpback();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x1d7107['push'](以表闻辞不(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 临门急于星(ia_targets['map'](_0x748937 => getEntityName(_0x748937))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 朝历职郎署(_0x1b791b);
            if (AutoVoid) {
                const _0x2d3aa2 = 私情则告诉(self_id);
                const _0x2eb283 = getBlock(_0x2d3aa2['x'], _0x1b791b['y'] - 0x1, _0x2d3aa2['z']);
                for (let _0x55869d = -0x2; _0x55869d < 0x3; _0x55869d++) {
                    for (let _0x110fbd = -0x2; _0x110fbd < 0x3; _0x110fbd++) {
                        const _0x36dfd0 = getBlock(_0x2d3aa2['x'] + _0x55869d, _0x1b791b['y'] - 0x1, _0x2d3aa2['z'] + _0x110fbd);
                        if (_0x36dfd0['namespace'] === 'minecraft:air' && _0x332a42['y'] < -0.0783 && _0x332a42['y'] > -0.0785 && _0x2eb283['namespace'] != 'minecraft:air') {
                            const _0x3fe859 = -伏惟圣朝以(self_id, {
                                'x': _0x2d3aa2['x'] + _0x55869d,
                                'y': self_pos['y'],
                                'z': _0x2d3aa2['z'] - _0x110fbd
                            }, 'yaw_pos');
                            const _0x2ebc3f = 非臣陨首所(0.5, self_pos, {
                                'yaw': _0x3fe859,
                                'pitch': 0x0
                            });
                            setMotion(_0x2ebc3f['x'] - self_pos['x'], _0x332a42['y'], _0x2ebc3f['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0xa12897 = getEntityList();
                _0xa12897['forEach'](_0xa6608e => {
                    if ((getEntityTypeId(_0xa6608e) === 0x400055 || getEntityTypeId(_0xa6608e) === 0x400056 || getEntityTypeId(_0xa6608e) === 0xc00050) && 就职诏书切(_0xa6608e, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0xa6608e);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0xb428e3 = 伏惟圣朝以(getPos(_0xa6608e), self_id, 'yaw_pos');
                            const _0x64d557 = 非臣陨首所(0.5, self_pos, {
                                'yaw': _0xb428e3,
                                'pitch': _0xc4c431['pitch']
                            });
                            setMotion(_0x64d557['x'] - self_pos['x'], _0x332a42['y'], _0x64d557['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 臣荣举臣秀(_0xa6608e, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x3beaf8 = getPlayerList();
                let _0x440b37 = [];
                let _0x523eb6 = false;
                let _0x272092 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x58d765 = 0x1; _0x58d765 <= tr_len; _0x58d765 += tr_dens / 0xa) {
                    let _0x38fe3f = 之僮茕茕孑(_0x58d765, _0xc4c431['pitch'], tr_speed, tr_g)['data'];
                    let _0x454622 = 非臣陨首所(_0x58d765, self_pos, {
                        'yaw': _0xc4c431['yaw'],
                        'pitch': 0x0
                    });
                    let _0x6952b7 = getBlock(_0x454622['x'], _0x454622['y'] + _0x38fe3f, _0x454622['z']);
                    if (tr_show || !_0x523eb6) {
                        _0x3beaf8['forEach'](_0x5e8d30 => {
                            if (!_0x523eb6) {
                                let _0x344df7 = getPos(_0x5e8d30);
                                let _0x21e1da = {
                                    'x': _0x454622['x'],
                                    'y': _0x454622['y'] + _0x38fe3f,
                                    'z': _0x454622['z']
                                };
                                let _0x2e45f5 = getEntitySize(_0x5e8d30);
                                if (_0x21e1da['x'] <= _0x344df7['x'] + _0x2e45f5['x'] / 0x2 && _0x21e1da['x'] >= _0x344df7['x'] - _0x2e45f5['x'] / 0x2 && _0x21e1da['y'] <= _0x344df7['y'] + _0x2e45f5['y'] / 0x2 && _0x21e1da['y'] >= _0x344df7['y'] - _0x2e45f5['y'] / 0x2 && _0x21e1da['z'] <= _0x344df7['z'] + _0x2e45f5['x'] / 0x2 && _0x21e1da['z'] >= _0x344df7['z'] - _0x2e45f5['x'] / 0x2) {
                                    _0x1d7107['push'](以表闻辞不(0x1, 'HasAimed', getEntityName(_0x5e8d30), '§r'));
                                    _0x523eb6 = true;
                                }
                            }
                        });
                    }
                    if (_0x6952b7['namespace'] != 'minecraft:air' || _0x523eb6) {
                        _0x272092 = _0x454622;
                        if (modes['tr_mode'] === 0x1 && _0x6952b7['namespace'] != 'minecraft:air') {
                            for (let _0x411f93 = 0x0; _0x411f93 <= 0x14; _0x411f93 += 0x2) 息外无期功(tr_type, _0x272092['x'], _0x272092['y'] + _0x38fe3f + _0x411f93 / 0xa, _0x272092['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0x4bdd2b = getDistance(_0x272092, self_pos);
                    for (let _0xd80419 = 0x1; _0xd80419 <= _0x4bdd2b; _0xd80419 += tr_dens / 0xa) {
                        let _0x27b13e = 之僮茕茕孑(_0xd80419, _0xc4c431['pitch'], tr_speed, tr_g)['data'];
                        let _0x1fdec1 = (tr_offset - 0xa) / 0xa;
                        let _0xc7e2c1 = _0xc4c431['yaw'] + 0x5a;
                        if (_0xc7e2c1 > 0xb4) _0xc7e2c1 = _0xc7e2c1 - 0x168;
                        if (_0xc7e2c1 < -0xb4) _0xc7e2c1 = _0xc7e2c1 + 0x168;
                        let _0x56a4cb = 非臣陨首所(_0x1fdec1, self_pos, {
                            'yaw': _0xc7e2c1,
                            'pitch': 0x0
                        });
                        let _0x16a019 = 非臣陨首所(_0xd80419, _0x56a4cb, {
                            'yaw': _0xc4c431['yaw'] - Math['atan'](_0x1fdec1 / _0x4bdd2b) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x456419 = getBlock(_0x16a019['x'], _0x16a019['y'] + _0x27b13e, _0x16a019['z']);
                        if (modes['tr_mode'] === 0x0 && _0x456419['namespace'] === 'minecraft:air') 息外无期功(tr_type, _0x16a019['x'], _0x16a019['y'] + _0x27b13e + 0.5, _0x16a019['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x5cb8f5 = 私情则告诉(self_id);
                for (let _0x31a8e5 = -fa_range; _0x31a8e5 < fa_range; _0x31a8e5++) {
                    for (let _0x1009f8 = -fa_range; _0x1009f8 < fa_range; _0x1009f8++) {
                        const _0x3d58e8 = getBlock(_0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'] - 0x1, _0x5cb8f5['z'] + _0x1009f8);
                        const _0x2742e9 = getBlock(_0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'], _0x5cb8f5['z'] + _0x1009f8);
                        if ((_0x3d58e8['namespace'] === 'minecraft:dirt' || _0x3d58e8['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'] - 0x1, _0x5cb8f5['z'] + _0x1009f8, 0x1);
                        if (_0x3d58e8['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'] - 0x1, _0x5cb8f5['z'] + _0x1009f8, 0x1);
                        if (_0x2742e9['aux'] === 0x7 && (_0x2742e9['namespace'] === 'minecraft:beetroot' || _0x2742e9['namespace'] === 'minecraft:wheat' || _0x2742e9['namespace'] === 'minecraft:carrots' || _0x2742e9['namespace'] === 'minecraft:potatoes')) destroy(self_id, _0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'], _0x5cb8f5['z'] + _0x1009f8, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x2742e9['aux'] <= 0x6 && (_0x2742e9['namespace'] === 'minecraft:beetroot' || _0x2742e9['namespace'] === 'minecraft:wheat' || _0x2742e9['namespace'] === 'minecraft:carrots' || _0x2742e9['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x5cb8f5['x'] + _0x31a8e5, _0x1b791b['y'], _0x5cb8f5['z'] + _0x1009f8, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x582c28 = 0x0; _0x582c28 < am_count; _0x582c28++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x1b791b['x'],
                                'y': _0x1b791b['y'] - 0x1,
                                'z': _0x1b791b['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x1d3989 = JSON['parse'](日笃欲苟顺(nx_paths + '/PlayerAction.json'));
                    _0x1d3989['forEach'](_0x33aa8f => {
                        if (_0x33aa8f['delay'] % am_tick === 0x0) {
                            for (let _0x2bc226 = 0x0; _0x2bc226 < _0x33aa8f['count']; _0x2bc226++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x33aa8f['value'],
                                'type': Number(_0x33aa8f['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x12de4f = 0x0; _0x12de4f < pam_count; _0x12de4f++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x1b791b['x'],
                        'y': _0x1b791b['y'] - 0x1,
                        'z': _0x1b791b['z']
                    },
                    'inputs': pam_array['map'](_0x1086b3 => Number(_0x1086b3)),
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
            if (AutoJump && _0x5aa854) setMotion(_0x332a42['x'], aj_y / 0x64, _0x332a42['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x289cb5 => {
                if (bc_packet) silentMove(_0x289cb5['x'], _0x289cb5['y'], _0x289cb5['z']);
                buildBlock(self_id, _0x289cb5['x'], _0x289cb5['y'], _0x289cb5['z'], 0x0);
            });
            if (NoFall && _0x332a42['y'] < -nf_max && !_0x5aa854) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x5aa854 && _0x5aa854)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x2d7cb1 = 0x0; _0x2d7cb1 < 0x168; _0x2d7cb1 += do_density / 0xa) {
                    const _0x2f9431 = do_l_axis * Math['cos'](_0x2d7cb1 * Math['PI'] / 0xb4);
                    const _0x2f8871 = do_s_axis * Math['sin'](_0x2d7cb1 * Math['PI'] / 0xb4);
                    息外无期功(0x38, do_pos[0x0] + _0x2f9431, do_pos[0x1], do_pos[0x2] + _0x2f8871, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x1d7107['push'](以表闻辞不(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x675c4d = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x675c4d['x']), Math['round'](_0x675c4d['y'] - 0x1), Math['round'](_0x675c4d['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Health', 'Health: ' + 苦特为尤甚(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Targets', 临门急于星(at_lists['map'](_0x32db37 => getEntityName(_0x32db37))), '§r'));
            if (ShowInfo) {
                const _0x554fe0 = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x3cd7b9 = Math['sqrt'](_0x332a42['x'] * _0x332a42['x'] + _0x332a42['z'] * _0x332a42['z']);
                if (show_speed) _0x1d7107['push'](以表闻辞不(0x1, 'Speed', '水平移动速度: ' + _0x3cd7b9['toFixed'](0x2) + 'm/s 移动速度: ' + _0x26fad2['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0x2b9cec['toFixed'](0x2) + 'm/s 坐标速度:' + _0xfd46['toFixed'](0x2) + 'm/s 能力速度:' + _0x554fe0['current']['toFixed'](0x2) + ('\n移动值: [' + _0x332a42['x']['toFixed'](0x2) + ', ' + _0x332a42['y']['toFixed'](0x2) + ', ' + _0x332a42['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x1d7107['push'](以表闻辞不(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x1b791b['x'] + ', Y:' + _0x1b791b['y'] + ', Z:' + _0x1b791b['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x1d7107['push'](以表闻辞不(0x1, 'Item', self_item['name'] + ' §r§ox' + 曾废离愍(-0x1), '§r'));
                if (show_resources) {
                    const _0x8d160b = {
                        'gold': 曾废离愍(-0x2, 'minecraft:gold_ingot'),
                        'iron': 曾废离愍(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 曾废离愍(-0x2, 'minecraft:diamond'),
                        'emerald': 曾废离愍(-0x2, 'minecraft:emerald'),
                        'star': 曾废离愍(-0x2, 'minecraft:nether_star')
                    };
                    const _0x6109f = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x1d7107['push'](以表闻辞不(0x1, 'Resource', '绿宝石:' + _0x8d160b['emerald'] + ', 钻石:' + _0x8d160b['diamond'] + ', 金锭:' + _0x8d160b['gold'] + ', 铁锭:' + _0x8d160b['iron'] + '\n下界之心:' + _0x8d160b['star'] + ', 经验:' + _0x6109f, '§r'));
                }
                if (show_kill_num) _0x1d7107['push'](以表闻辞不(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x1d7107['push'](以表闻辞不(0x1, 'Time', 'Time: ' + 蒙国恩除臣(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x1d7107['push'](以表闻辞不(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x1d7107['push'](以表闻辞不(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x1d7107['push'](以表闻辞不(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x1d7107['push'](以表闻辞不(0x1, 'Health', '当前血量: ' + _0x2e78f4['current'] + ', 最大值:' + _0x2e78f4['max'] + ', 最小值:' + _0x2e78f4['min'], '§r'));
                if (show_detail_item) _0x1d7107['push'](以表闻辞不(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x37ed1d = new Date();
                    const _0x1e8431 = _0x37ed1d['getFullYear']();
                    const _0x3be7cd = ('0' + (_0x37ed1d['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x509d2b = ('0' + _0x37ed1d['getDate']())['slice'](-0x2);
                    const _0x5eb791 = ('0' + _0x37ed1d['getHours']())['slice'](-0x2);
                    const _0x44cf27 = ('0' + _0x37ed1d['getMinutes']())['slice'](-0x2);
                    const _0x3c4b1a = ('0' + _0x37ed1d['getSeconds']())['slice'](-0x2);
                    const _0x5d5fab = _0x1e8431 + '-' + _0x3be7cd + '-' + _0x509d2b + ' ' + _0x5eb791 + ':' + _0x44cf27 + ':' + _0x3c4b1a;
                    _0x1d7107['push'](以表闻辞不(0x1, 'RealTime', _0x5d5fab, '§r'));
                }
            }
            if (ModifySwing && ms_speed != 0x0) setEntityEffect(self_id, {
                'id': ms_speed < 0x0 ? 0x4 : 0x3,
                'duration': 0x14,
                'amplifier': ms_speed < 0x0 ? -ms_speed : ms_speed,
                'displayOnScreenTextureAnimation': false,
                'noCounter': true,
                'ambient': true,
                'effectVisible': false
            });
            if (EffEctManager) {
                if (em_nv) setEntityEffect(self_id, {
                    'id': 0x10,
                    'duration': 0x14,
                    'amplifier': em_level,
                    'displayOnScreenTextureAnimation': false,
                    'noCounter': true,
                    'effectVisible': false,
                    'ambient': true
                });
                if (em_eff) setEntityEffect(self_id, {
                    'id': 0x3,
                    'duration': 0x14,
                    'amplifier': em_level,
                    'displayOnScreenTextureAnimation': false,
                    'noCounter': true,
                    'effectVisible': false,
                    'ambient': true
                });
            }
            if (rc_angles['angle']) {
                let _0x3e3f52 = _0xc4c431['yaw'];
                _0x3e3f52 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0x3e3f52 >= 0xb4) _0x3e3f52 -= 0x168;
                if (_0x3e3f52 <= -0xb4) _0x3e3f52 += 0x168;
                let _0x31830b = (_0x5aa854 ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x328b08 = (_0x5aa854 ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x4f2ae0 = {};
                if (rc_surround && at_lists['length'] > 0x0 && 就职诏书切(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0x28a3c6 = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x2754a1 = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x5551a6 = _0x2754a1 > -0x5a || _0x2754a1 < 0x5a ? rc_speed : -rc_speed;
                    let _0x30c80c = _0x3e3f52 > -0x5a || _0x3e3f52 < 0x5a ? rc_speed : -rc_speed;
                    let _0x562ddc = rc_relative ? _0x5551a6 : _0x30c80c;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x28a3c6 -= _0x562ddc * 0x5 : _0x28a3c6 += _0x562ddc * 0x5;
                    if (_0x28a3c6 > 0xb4) _0x28a3c6 -= 0x168;
                    if (_0x28a3c6 < -0xb4) _0x28a3c6 += 0x168;
                    let _0x5c7293 = 非臣陨首所(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0x28a3c6,
                        'pitch': 0x0
                    });
                    let _0xe7c06b = 伏惟圣朝以(_0x5c7293, self_id, 'yaw_pos');
                    _0x4f2ae0 = 非臣陨首所(rc_legal ? modes['rc_mode'] === 0x0 ? _0x31830b : _0x328b08 : rc_speed / 0x8, self_pos, {
                        'yaw': _0xe7c06b,
                        'pitch': 0x0
                    });
                } else _0x4f2ae0 = 非臣陨首所(rc_legal ? modes['rc_mode'] === 0x0 ? _0x31830b : _0x328b08 : rc_speed / 0x8, self_pos, {
                    'yaw': _0x3e3f52,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0x4f2ae0['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0x4f2ae0['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 既无伯叔终(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x3e3f52 + sca_yaw);
                    else 既无伯叔终(_0xc4c431['pitch'], _0x3e3f52 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0x4f2ae0 = 非臣陨首所(rc_speed / 0x8, self_pos, _0xc4c431);
                        setMotion(_0x4f2ae0['x'] - self_pos['x'], _0x4f2ae0['y'] - self_pos['y'], _0x4f2ae0['z'] - self_pos['z']);
                    } else {
                        const _0x20cde5 = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0x2d6668 = getCameraRotation();
                        rc_roll += (_0x20cde5 ? 0x1 : -0x1) * 无主辞不赴(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0x4f2ae0['x'] - self_pos['x'], rc_bhop && _0x5aa854 || rc_ahop && _0x332a42['y'] < -0.4 ? rc_y : _0x332a42['y'], _0x4f2ae0['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0x4f2ae0['x'], self_pos['y'], _0x4f2ae0['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined' && (_0x5aa854 || !rc_antiair)) {
                const _0x4ad960 = getEntityMotion(self_id);
                const _0x3ddc34 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x4ad960['x'], rc_y, _0x4ad960['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x3ddc34['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x3ddc34['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x4ad960['x'], -rc_y, _0x4ad960['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x3ddc34['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x3ddc34['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x1d7107['push'](以表闻辞不(0x1, 'BalanceTimer', '储存的Tick: ' + BalanceTimer_t + 'ticks', '§r'));
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
                    let _0x2b047e = ticks * mt_speed / 0x14 % 0x5dc0;
                    setWorldData({
                        'time': _0x2b047e
                    });
                } else if (mt_custom === 0x19) {
                    let _0x2d0494 = 0x0;
                    if (modes['mt_time'] === 0x0) _0x2d0494 = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x2d0494 = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x2d0494 = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x2d0494 = 0x30d4;
                    setWorldData({
                        'time': _0x2d0494
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
                        showTipMessage('§bProtoHax §r| ' + _0xfd46['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0xcc526e, _0xf80014) => globalThis['current_poem'] = JSON['parse'](_0xf80014)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0xfd46['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x1cf182 = 0x0; _0x1cf182 < mine_speed; _0x1cf182++) {
                    let _0x1af30e = mine_list['shift']();
                    if (typeof _0x1af30e != 'object' || _0x1af30e['length'] === 0x0) continue;
                    const _0x52cdbc = getBlock(_0x1af30e[0x0], _0x1af30e[0x1], _0x1af30e[0x2]);
                    if (_0x52cdbc['namespace'] != 'minecraft:air' && _0x52cdbc['namespace'] === mine_name) {
                        destroy(self_id, _0x1af30e[0x0], _0x1af30e[0x1], _0x1af30e[0x2], 0x0);
                        mine_current++;
                    }
                }
                if (mine_info) _0x1d7107['push'](以表闻辞不(0x1, 'Miner', '进度: ' + mine_current + '/' + mine_num + ' - ' + (mine_current / mine_num * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(mine_current, mine_num, '▌', 0x20), '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x5aa854) setMotion(0x0, 0x0, 0x0);
            if (_0x1d7107['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x1d7107['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x1d7107['join']('\n'));
                if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x1d7107['join'](' | '));
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
            prev_heal = _0x2e78f4['current'];
            prev_ground = _0x5aa854;
            prev_itemCount = self_itemCount;
        } catch (_0x317ea1) {
            clientMessage(_0x317ea1['stack']);
        }
        if (ShowNXInfo) addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0xc617cc = bn_list['length'] - 0x1; _0xc617cc >= 0x0; _0xc617cc--) {
                bn_list[_0xc617cc]['x'] -= bn_list[_0xc617cc]['speed'];
                if (bn_list[_0xc617cc]['x'] < 0x0) {
                    bn_list['splice'](_0xc617cc, 0x1);
                    removeText(bn_list[_0xc617cc]['id']);
                } else updateTextPosition(bn_list[_0xc617cc]['id'], bn_list[_0xc617cc]['x'], bn_list[_0xc617cc]['y']);
            }
        }
        if (MobileWaterMark) {
            mwm_pos[0x0] += mwm_vector[0x0] * mwm_speed / 0x5;
            mwm_pos[0x1] += mwm_vector[0x1] * mwm_speed / 0x5;
            if (mwm_pos[0x0] > nx_screen['screenWidth'] || mwm_pos[0x0] < 0x0) mwm_vector[0x0] *= -0x1;
            if (mwm_pos[0x1] > nx_screen['screenHeight'] || mwm_pos[0x1] < 0x0) mwm_vector[0x1] *= -0x1;
            updateTextPosition(mwm_id, mwm_pos[0x0], mwm_pos[0x1]);
            updateTextScale(mwm_id, mwm_size);
        }
        if (Derp) {
            var _0x52d168 = getEntityRot(self_id);
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
            if (!dp_head) dp_pitch = _0x52d168['pitch'];
            if (!dp_body) dp_yaw = _0x52d168['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x1081b9 = getCameraRotation();
            const _0x226af3 = 拜臣郎中寻(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x2161f8 = sca_move ? 伏惟圣朝以(_0x226af3, self_id, 'yaw_pos') : _0x1081b9['yaw'] > 0x0 ? 0xb4 - _0x1081b9['yaw'] : -0xb4 - _0x1081b9['yaw'];
            既无伯叔终(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x2161f8 + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0x5eb1da = 伏惟圣朝以(self_id, at_lists[0x0], 'pitch_pos');
            let _0x7f03c9 = 伏惟圣朝以(self_id, at_lists[0x0], 'yaw_pos');
            既无伯叔终(_0x5eb1da, _0x7f03c9);
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

    function onExecuteCommandEvent(_0x4665bb) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 以表闻辞不(0x0, 'ExecuteCMD', _0x4665bb, '§r');
        const _0x4c7816 = _0x4665bb['split'](' ');
        if (_0x4c7816[0x0] === '/set' && _0x4c7816[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x4c7816[0x2]),
                'y': Number(_0x4c7816[0x3]),
                'z': Number(_0x4c7816[0x4])
            };
            if (_0x4c7816[0x5]) nx_goalSpeed = Number(_0x4c7816[0x5]);
            以表闻辞不(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x4c7816[0x0] === '/set' && _0x4c7816[0x1] === 'default' && _0x4c7816[0x2] === 'config') {
            if (_0x4c7816[0x3] === 'clear') {
                以表闻辞不(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (日笃欲苟顺(nx_cfgs + '/' + _0x4c7816[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x4c7816[0x3]);
                以表闻辞不(0x0, 'Tip', '已设置默认配置 - ' + _0x4c7816[0x3], '§r');
            } else 以表闻辞不(0x0, 'Tip', '文件为空或不存在 - ' + _0x4c7816[0x3], '§r');
            return true;
        }
        if (_0x4c7816[0x0] === '/target') {
            if (_0x4c7816[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x4c7816[0x1] === 'player') at_lists = getPlayerList();
            if (_0x4c7816[0x1] === 'all') at_lists = getEntityList();
            以表闻辞不(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x4c7816[0x0] === '/cleaner') {
            if (_0x4c7816[0x1] === 'reload') clear_config = JSON['parse'](日笃欲苟顺(cleaner_path));
            if (_0x4c7816[0x1] === 'load') clear_config = JSON['parse'](日笃欲苟顺(_0x4c7816[0x2]));
        }
        if (_0x4c7816[0x0] === '/bind') {
            if (_0x4c7816[0x1] === 'RunAway') {
                if (typeof globalThis[_0x4c7816[0x2]] == 'undefined' && typeof nx_funcid[_0x4c7816[0x2]] == 'undefined' || typeof globalThis[_0x4c7816[0x3]] == 'undefined' && typeof nx_funcid[_0x4c7816[0x3]] == 'undefined') {
                    以表闻辞不(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x59c40b = typeof globalThis[_0x4c7816[0x3]] !== 'undefined';
                nx_raBinds[_0x4c7816[0x2]] = {
                    'module': _0x4c7816[0x3],
                    'isNX': _0x59c40b
                };
                以表闻辞不(0x0, 'Tip', '绑定 ' + _0x4c7816[0x2] + ' 与 ' + _0x4c7816[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x4c7816[0x1] === 'key' && typeof globalThis[_0x4c7816[0x2]] !== 'undefined') {
                nx_isBind = _0x4c7816[0x2];
                以表闻辞不(0x0, 'Tip', '按下任意按键与' + _0x4c7816[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x4c7816[0x1]] === 'undefined') nx_binds[_0x4c7816[0x1]] = [];
            if (typeof globalThis[_0x4c7816[0x2]] !== 'undefined' && typeof globalThis[_0x4c7816[0x1]] !== 'undefined') {
                nx_binds[_0x4c7816[0x1]]['push'](_0x4c7816[0x2]);
                以表闻辞不(0x0, 'Tip', '绑定 ' + _0x4c7816[0x1] + ' 与 ' + _0x4c7816[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 以表闻辞不(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x4c7816[0x0] === '/unbind') {
            if (_0x4c7816[0x1] === 'key' && typeof globalThis[_0x4c7816[0x2]] !== 'undefined') {
                for (let _0xc95dcc in nx_keys) {
                    if (nx_keys[_0xc95dcc] === _0x4c7816[0x2]) {
                        delete nx_keys[_0xc95dcc];
                        break;
                    }
                }
                nx_isBind = _0x4c7816[0x2];
                以表闻辞不(0x0, 'Tip', '解除' + _0x4c7816[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x4c7816[0x1]] === 'undefined') {
                以表闻辞不(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x4c7816[0x1]] !== 'undefined' && _0x4c7816[0x2] === 'all') {
                delete nx_binds[_0x4c7816[0x1]];
                以表闻辞不(0x0, 'Tip', '解除 ' + _0x4c7816[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x4c7816[0x1] === 'all') {
                nx_binds = {};
                以表闻辞不(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x4c7816[0x2]] !== 'undefined' && typeof globalThis[_0x4c7816[0x1]] !== 'undefined') {
                nx_binds[_0x4c7816[0x1]]['splice'](nx_binds[_0x4c7816[0x1]]['indexOf'](_0x4c7816[0x2]), 0x1);
                if (nx_binds[_0x4c7816[0x1]]['length'] === 0x0) delete nx_binds[_0x4c7816[0x1]];
                以表闻辞不(0x0, 'Tip', '解除绑定 ' + _0x4c7816[0x1] + ' 和 ' + _0x4c7816[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 以表闻辞不(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x4c7816[0x0] === '/nx') {
            if (typeof globalThis[_0x4c7816[0x2]] === 'undefined') {
                以表闻辞不(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x4c7816[0x1] === 'num') globalThis[_0x4c7816[0x2]] = Number(_0x4c7816[0x3]);
            if (_0x4c7816[0x1] === 'bool') globalThis[_0x4c7816[0x2]] = Boolean(_0x4c7816[0x3]);
            if (_0x4c7816[0x1] === 'str') globalThis[_0x4c7816[0x2]] = _0x4c7816[0x3];
            if (_0x4c7816[0x1] === 'arr') globalThis[_0x4c7816[0x2]] = 臣上道州司(_0x4c7816[0x3]);
            if (_0x4c7816[0x1] === 'obj') globalThis[_0x4c7816[0x2]] = JSON['parse'](_0x4c7816[0x3]);
            以表闻辞不(0x0, 'setValue', globalThis[_0x4c7816[0x2]] + ' => ' + _0x4c7816[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x4a5e01, _0x1a81e7, _0x2e08a2) {
        if (ShowCommandOutput) 以表闻辞不(0x0, 'Tip', '§e类型:§r' + _0x4a5e01 + ' §e结果:§r' + _0x2e08a2 + ' §e数据:§r' + JSON['stringify'](_0x1a81e7, null, 0x2), '§r');
        if (Crasher && modes['cs_mode'] === 0x8 && !_0x2e08a2) return true;
    }

    function onCallModuleEvent(_0xcde93) {
        if (ShowUI) 以表闻辞不(0x0, 'UI-Data', JSON['stringify'](_0xcde93, null, 0x4), '§r');
        try {
            if (typeof _0xcde93 !== 'undefined' && typeof _0xcde93['fun'] !== 'undefined' && typeof nx_raBinds[_0xcde93['fun']] !== 'undefined') {
                const _0xf1d763 = nx_raBinds[_0xcde93['fun']]['module'];
                if (!nx_raBinds[_0xcde93['fun']]['isNX']) callModule(nx_funcid[_0xf1d763], JSON['stringify']({
                    'value': _0xcde93['value']
                }));
                else 祚薄晚有儿(_0xf1d763, _0xcde93['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (typeof _0xcde93['name'] === 'undefined') {
                if (Rocker && typeof _0xcde93['angle'] !== 'undefined') rc_angles = _0xcde93;
                if (Rocker && typeof _0xcde93['direction'] !== 'undefined') rc_directions = _0xcde93;
                if (Rocker && typeof _0xcde93['operation'] !== 'undefined') rc_uds = _0xcde93;
                return;
            }
            if (!_0xcde93['name']['includes']('NoveXare') && _0xcde93['fun'] != 'fun_ride_flying') return;
            if (typeof _0xcde93['SauthLogin'] !== 'undefined') {
                Sauths = _0xcde93['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0xcde93['CustomBanTip'] !== 'undefined') bantip = _0xcde93['CustomBanTip'];
            if (typeof _0xcde93['key'] !== 'undefined') {
                const _0x4c848b = _0xcde93['key'];
                if (_0x4c848b === 'ItemEditor') {
                    const _0x99e49e = getEntityCarriedItem(self_id);
                    const _0x4c29a4 = 慈父见背行(_0x99e49e, 'Damage:', 's');
                    const _0x358a9c = 慈父见背行(_0x99e49e, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x99e49e['replace']('Damage:' + _0x4c29a4 + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x99e49e['replace']('{Damage:' + _0x358a9c, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x99e49e['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id), false, true), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x4c848b === 'EditBackGround') {
                    const _0x578603 = 'loginVideoNew.mp4';
                    const _0x171bf3 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x578603)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x171bf3 + _0x578603);
                    file_copy(getResource() + '/' + _0x578603, _0x171bf3 + _0x578603);
                    showToast('已复制文件');
                }
                if (_0x4c848b === 'ServerTeleport') {
                    let _0x58624c = getWorldPlayerList();
                    let _0x4281ca = _0x58624c['length'] > 0x0 ? _0x58624c['map'](_0x1fd521 => ({
                        'text': _0x1fd521['name']
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x34d717 = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x4281ca
                    };
                    const _0x277484 = JSON['stringify'](_0x34d717);
                    addForm(_0x277484, function(_0x1e85f7) {
                        if (_0x58624c['length'] > 0x0 && _0x1e85f7 >= 0x0) {
                            险衅夙遭闵(_0x58624c[_0x1e85f7]['id']);
                            isTP = true;
                        }
                    });
                }
                if (_0x4c848b === 'exit') {
                    以表闻辞不(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        以表闻辞不(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x5b9c34 = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x5b9c34 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x5b9c34);
                    }
                    exit();
                    gc();
                }
                if (_0x4c848b === 'DropInv') {
                    for (let _0x543e58 = 0x0; _0x543e58 < 0x24; _0x543e58++) {
                        const _0x310c31 = getInventory(self_id, _0x543e58);
                        if (_0x310c31['namespace'] === 'minecraft:air') continue;
                        if (_0x310c31['count'] < 0x1) continue;
                        dl_list['push'](_0x543e58);
                    }
                }
                if (_0x4c848b === 'LookTP') {
                    let _0x4648fd = {};
                    for (let _0x1c310c = 0x0; _0x1c310c < 0x1f4; _0x1c310c++) {
                        _0x4648fd = 非臣陨首所(_0x1c310c, getPos(self_id), getEntityRot(self_id));
                        const _0x2ce778 = getBlock(_0x4648fd['x'], _0x4648fd['y'], _0x4648fd['z']);
                        if (_0x2ce778['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x4648fd != {}) {
                        const _0x57b09b = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 臣侍汤药未(_0x4648fd['x'], _0x4648fd['y'] + 1.53, _0x4648fd['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x4648fd['x'], _0x4648fd['y'] + 1.53, _0x4648fd['z']);
                    }
                }
                if (_0x4c848b === 'OpenChest') {
                    let _0x44e9d8 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x45cb91 = [];
                    let _0x27a141 = 0x0;
                    let _0x32372a = 私情则告诉(self_id);
                    const _0x223b91 = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x6dfac6 = 'shulker_box';
                    for (let _0x3e6c9c = -0x7; _0x3e6c9c < 0x7; _0x3e6c9c++) {
                        for (let _0x29d434 = -0x7; _0x29d434 < 0x7; _0x29d434++) {
                            for (let _0x49dc63 = -0x7; _0x49dc63 < 0x7; _0x49dc63++) {
                                const _0x196567 = _0x3e6c9c + _0x32372a['x'];
                                const _0x30b9bc = _0x29d434 + _0x32372a['y'];
                                const _0x3084c4 = _0x49dc63 + _0x32372a['z'];
                                const _0x1e7973 = getBlock(_0x196567, _0x30b9bc, _0x3084c4);
                                if (_0x223b91['includes'](_0x1e7973['namespace']) || _0x1e7973['namespace']['includes'](_0x6dfac6)) {
                                    const _0x3433a1 = getBlock(_0x196567, _0x30b9bc + 0x1, _0x3084c4);
                                    _0x44e9d8['buttons'][_0x27a141] = {
                                        'text': '命名空间: ' + _0x1e7973['namespace'] + '\n坐标:   ' + (_0x3433a1['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x45cb91[_0x27a141] = {
                                        'x': _0x196567,
                                        'y': _0x30b9bc,
                                        'z': _0x3084c4
                                    };
                                    _0x27a141++;
                                }
                            }
                        }
                    }
                    if (_0x27a141 === 0x0) {
                        以表闻辞不(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x44e9d8), function(_0x56f8f5) {
                        var _0xc3124e = _0x45cb91[_0x56f8f5];
                        buildBlock(self_id, _0xc3124e['x'], _0xc3124e['y'], _0xc3124e['z'], 0x1);
                        以表闻辞不(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x4c848b === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x4c848b === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x4c848b === 'rpc_repeat') {
                    for (let _0x5ad567 = 0x0; _0x5ad567 < rpc_repeat_times; _0x5ad567++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0x4c848b === 'AttackSelf_one') 臣荣举臣秀(self_id, Swing);
                if (_0x4c848b === 'RemoveSelf') removeEntity(self_id);
                if (_0x4c848b === 'QuitGame') leaveWorld();
                if (_0x4c848b === 'sl_delete') setData('sauths', '');
                if (_0x4c848b === 'dc_delete') dc_pos = [];
                if (_0x4c848b === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x1e12bc, _0x2a4dbd, _0x1574ee, _0x3899d2) {
                        var _0x3324bc = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0x59605f = 0x0;
                        var _0x58751f = getResource();
                        var _0x12e500 = JSON['parse'](File['read'](_0x58751f + '/ui/ui_definition.json'))['ui']['map'](_0x39bd03 => ({
                            'name': _0x39bd03 + '.json',
                            'path': _0x58751f + '/ui/' + _0x39bd03 + '.json'
                        }));
                        for (var _0x522632 of _0x12e500) {
                            if (!_0x522632['name']['includes']('NoveXare')) continue;
                            var _0x239714 = JSON['parse'](File['read'](_0x522632['path']));
                            if (typeof _0x239714['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x4447a6 of _0x239714['items'][0x0]['items']) {
                                if (typeof _0x4447a6['name'] === 'undefined' || typeof _0x4447a6['key'] === 'undefined') continue;
                                if (_0x1574ee && _0x4447a6['type'] != 'Switch') continue;
                                if (_0x3899d2 && _0x4447a6['type'] == 'Switch') continue;
                                if (!_0x2a4dbd && (_0x4447a6['name'] === _0x1e12bc || _0x4447a6['key'] === _0x1e12bc) || _0x2a4dbd && (_0x4447a6['name']['includes'](_0x1e12bc) || _0x4447a6['key']['includes'](_0x1e12bc))) {
                                    _0x3324bc['items'][0x0]['items'][_0x59605f] = _0x4447a6;
                                    _0x59605f++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x1e12bc, JSON['stringify'](_0x3324bc));
                        showMenu('search_' + _0x1e12bc);
                    });
                }
                if (_0x4c848b === 'sp_clear') sp_posList = [];
                if (_0x4c848b === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 私情则告诉(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 临门急于星([x, y, z]) + '"}]}', function(_0x37c72f) {
                        var _0xaa0517 = _0x37c72f['split'](',');
                        sp_posList['push']({
                            'x': Number(_0xaa0517[0x0]),
                            'y': Number(_0xaa0517[0x1]),
                            'z': Number(_0xaa0517[0x2])
                        });
                        以表闻辞不(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0x4c848b === 'sp_load') {
                    const _0x34cfb0 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0x34cfb0, function(_0x2712d0) {
                        var _0x48eb0c = File['read'](_0x2712d0);
                        if (_0x48eb0c != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0x48eb0c);
                            sp_file = _0x48eb0c;
                            sp_length = sp_data['length'];
                            以表闻辞不(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 以表闻辞不(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x4c848b === 'sp_select') {
                    const _0x465e2f = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x2205ad = file_list(getResource() + '/sound_manager');
                    _0x2205ad['sort']((_0x304b41, _0x3a15ba) => _0x304b41['name']['localeCompare'](_0x3a15ba['name']));
                    for (let _0x5ee959 = 0x0; _0x5ee959 < _0x2205ad['length']; _0x5ee959++) {
                        _0x465e2f['buttons'][_0x5ee959] = {
                            'text': _0x2205ad[_0x5ee959]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x459cf4 = JSON['stringify'](_0x465e2f);
                    addForm(_0x459cf4, function(_0x2eb0dd) {
                        if (_0x2205ad['length'] > 0x0 && _0x2eb0dd >= 0x0) {
                            var _0x4dede4 = File['read'](_0x2205ad[_0x2eb0dd]['path']);
                            if (_0x4dede4 != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0x4dede4);
                                sp_file = _0x4dede4;
                                sp_length = sp_data['length'];
                                以表闻辞不(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 以表闻辞不(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x4c848b === 'save_config') {
                    const _0x15acf7 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x15acf7, function(_0x37b6c8, _0x3dcdff) {
                        File['write'](nx_cfgs + '/' + _0x37b6c8 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        以表闻辞不(0x0, 'Tip', '保存成功', '§r');
                        if (_0x3dcdff) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x4c848b === 'load_config') {
                    const _0x5f96a5 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x505816 = file_list(nx_cfgs);
                    _0x505816['sort']((_0x5bf2be, _0x808ef3) => _0x5bf2be['name']['localeCompare'](_0x808ef3['name']));
                    for (let _0x583fe0 = 0x0; _0x583fe0 < _0x505816['length']; _0x583fe0++) {
                        _0x5f96a5['buttons'][_0x583fe0] = {
                            'text': '§e' + _0x505816[_0x583fe0]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x46db56 = JSON['stringify'](_0x5f96a5);
                    addForm(_0x46db56, function(_0x161ad0) {
                        if (_0x505816['length'] > 0x0 && _0x161ad0 >= 0x0) {
                            let _0x369dd8 = JSON['parse'](日笃欲苟顺(_0x505816[_0x161ad0]['path']));
                            let _0x5ee6e2 = 0x0;
                            nx_binds = _0x369dd8['binds'];
                            nx_keys = _0x369dd8['key_binds'];
                            nx_raBinds = _0x369dd8['nx_raBinds'];
                            for (let _0x29f30a in _0x369dd8) {
                                _0x5ee6e2++;
                                if (_0x29f30a['includes']('_mode') && _0xcde93['index']) modes[_0x29f30a] = _0x369dd8[_0x29f30a];
                                if (_0x29f30a != 'nx_raBinds' && _0x29f30a != 'key_binds' && _0x29f30a != 'binds' && _0x29f30a != 'name') 祚薄晚有儿(_0x29f30a, _0x369dd8[_0x29f30a]);
                            }
                            nx_cfg = _0x369dd8;
                            以表闻辞不(0x0, 'Tip', '成功加载' + _0x369dd8['name'] + '的配置，共' + _0x5ee6e2 + '条配置', '§r');
                        }
                    });
                }
                if (_0x4c848b === 'rpc_select') {
                    const _0x3b8def = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x5bd0ca = JSON['parse'](File['read'](getResource() + '/GBRC/NoveXare/PyRpc_Record.json'));
                    for (let _0x39f1ae = 0x0; _0x39f1ae < _0x5bd0ca['length']; _0x39f1ae++) {
                        _0x3b8def['buttons'][_0x39f1ae] = {
                            'text': (_0x5bd0ca[_0x39f1ae]['type'] === 'Send' ? '§a' : '§c') + _0x5bd0ca[_0x39f1ae]['packet_str']
                        };
                    }
                    const _0x14e812 = JSON['stringify'](_0x3b8def);
                    addForm(_0x14e812, function(_0x3c7655) {
                        var _0x313eb1 = Object['values'](_0x5bd0ca[_0x3c7655]['packet_bin']);
                        var _0xb8cfe9 = new ArrayBuffer(_0x313eb1['length']);
                        var _0x568166 = new Uint8Array(_0xb8cfe9);
                        _0x313eb1['forEach']((_0x6ab8b9, _0x3e927f) => {
                            _0x568166[_0x3e927f] = _0x6ab8b9;
                        });
                        prev_rpc = {
                            'id': _0x5bd0ca[_0x3c7655]['id'],
                            'data': _0xb8cfe9
                        };
                        以表闻辞不(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x4c848b === 'cw_range') {
                    let _0x430bc8 = getPlayerList();
                    let _0x5e3b4f = 0x0;
                    for (let _0x2e68ac of _0x430bc8) {
                        const _0x1f10bf = getPos(_0x2e68ac);
                        const _0x3bade0 = getDistance(_0x1f10bf, getPos(self_id));
                        if (!at_whileLists['includes'](_0x2e68ac) && _0x3bade0 < cw_size && _0x2e68ac != self_id) {
                            at_whileLists['push'](_0x2e68ac);
                            _0x5e3b4f++;
                        }
                    }
                    以表闻辞不(0x0, 'Tip', '已添加' + _0x5e3b4f + '个玩家到白名单', '§r');
                }
                if (_0x4c848b === 'KickSelf')
                    for (let _0x12cffb = 0x0; _0x12cffb < 0x3e8; _0x12cffb++) 臣荣举臣秀(self_id, Swing);
                if (_0x4c848b === 'bc_delete') ac_pos = [];
                if (_0x4c848b === 'cm_depart') departCamera();
                if (_0x4c848b === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x4c848b === 'cm_reset') resetCamera();
                if (_0x4c848b === 'cm_lock') lockCamera();
                if (_0x4c848b === 'ou_recover') otherId = null;
                if (_0x4c848b === 'delete_chest') ca_chest_pos = [];
                if (_0x4c848b === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x4c848b === 'fm_place') fm_pos = self_pos;
                if (_0x4c848b && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex', 'mwm_text']['includes'](_0x4c848b)) 火臣欲奉诏(_0x4c848b, globalThis[_0x4c848b]);
                if (_0x4c848b === 'cw_add' || _0x4c848b === 'ct_add' || _0x4c848b === 'ct_add') 贱当侍东宫(_0x4c848b === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0x4c848b === 'fw_target' || _0x4c848b === 'fc_target') 贱当侍东宫(_0x4c848b === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x4c848b === 'cm_target') 贱当侍东宫('cm_target', 0x0);
                if (_0x4c848b === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x4c848b === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x4c848b === 'cw_remove') at_whileLists = [];
                if (_0x4c848b === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x23ad99 => ({
                        'name': getEntityName(_0x23ad99),
                        'id': _0x23ad99,
                        'namespace': getEntityNamespace(_0x23ad99)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0xec1aa8 => ({
                        'name': getEntityName(_0xec1aa8),
                        'id': _0xec1aa8,
                        'namespace': getEntityNamespace(_0xec1aa8)
                    }))
                }));
                if (_0x4c848b === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x4c848b === 'ImportWorldInfo') setWorldData(JSON['parse'](日笃欲苟顺(nx_paths + '/WorldInfo.json')));
                if (_0x4c848b === 'Rusher') {
                    const _0x51e7f5 = getCameraRotation();
                    let _0x4b153f = 非臣陨首所(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x51e7f5['yaw'] > 0x0 ? 0xb4 - _0x51e7f5['yaw'] : -0xb4 - _0x51e7f5['yaw'],
                        'pitch': -_0x51e7f5['pitch']
                    });
                    setMotion(_0x4b153f['x'] - self_pos['x'], _0x4b153f['y'] - self_pos['y'], _0x4b153f['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x24917c in _0xcde93) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x24917c)) continue;
                if (typeof _0xcde93['index'] !== 'undefined' && modes[_0x24917c] !== _0xcde93['index'] - 0x1 && _0xcde93['index'] > 0x0) {
                    modes[_0x24917c] = _0xcde93['index'] - 0x1;
                    nx_cfg[_0x24917c] = _0xcde93['index'] - 0x1;
                    以表闻辞不(0x0, _0x24917c['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0xcde93[_0x24917c], '§r');
                    if (_0x24917c === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, JSON['stringify']({
                            'array_list': true,
                            'array_offset_x': fst_x / 0x5,
                            'array_offset_y': fst_y / 0x5
                        }));
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x24917c === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
                    'value': _0xcde93[_0x24917c],
                    'count': ka_packet
                }));
                if (_0x24917c === 'RandomArrayList' && !_0xcde93[_0x24917c]) {
                    for (let _0x403e8d = 0x0; _0x403e8d < ral_num; _0x403e8d++) addCustomArrayList('RandomArrayList' + _0x403e8d, '', '', false);
                }
                if (_0x24917c === 'Rocker') callModule(0x39, JSON['stringify']({
                    'value': modes['rc_mode'] === 0x1 && _0xcde93[_0x24917c],
                    'fov': 0x96
                }));
                if (_0x24917c === 'SimulateButton') {
                    if (_0xcde93[_0x24917c]) sb_list['forEach'](_0x457d32 => simulateButtonDown(_0x457d32));
                    else sb_list['forEach'](_0x3537b3 => simulateButtonUp(_0x3537b3));
                }
                if (_0x24917c === 'MobileWaterMark') {
                    if (_0xcde93[_0x24917c]) updateTextContent(mwm_id, mwm_text);
                    else updateTextContent(mwm_id, '');
                }
                if (_0x24917c === 'sb_interact') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.interact');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.interact'), 0x1);
                        simulateButtonUp('button.interact');
                    }
                }
                if (_0x24917c === 'sb_forward') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.up');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.up'), 0x1);
                        simulateButtonUp('button.up');
                    }
                }
                if (_0x24917c === 'sb_right') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.right');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.right'), 0x1);
                        simulateButtonUp('button.right');
                    }
                }
                if (_0x24917c === 'sb_left') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.left');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.left'), 0x1);
                        simulateButtonUp('button.left');
                    }
                }
                if (_0x24917c === 'sb_back') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.down');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.down'), 0x1);
                        simulateButtonUp('button.down');
                    }
                }
                if (_0x24917c === 'sb_long') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.destroy_or_interact');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.destroy_or_interact'), 0x1);
                        simulateButtonUp('button.destroy_or_interact');
                    }
                }
                if (_0x24917c === 'sb_click') {
                    if (_0xcde93[_0x24917c]) sb_list['push']('button.build_or_attack');
                    else {
                        sb_list['splice'](sb_list['indexOf']('button.build_or_attack'), 0x1);
                        simulateButtonUp('button.build_or_attack');
                    }
                }
                if (_0x24917c === 'FakeMove') {
                    if (_0xcde93[_0x24917c]) fmo_pos = getPos(self_id);
                    else if (!_0xcde93[_0x24917c]) 郡县逼迫催(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x571625 = {
                        'enable': !_0xcde93[_0x24917c],
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
                    callModule(0x7, JSON['stringify'](_0x571625));
                    setTimeout(() => 郡县逼迫催(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x24917c === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
                    'value': _0xcde93[_0x24917c],
                    'count': cs_packet
                }));
                if (_0x24917c === 'ShowNXInfo' && !_0xcde93[_0x24917c]) addCustomArrayList('NoveXare', '', '', false);
                if (_0x24917c === 'RandomFunc') {
                    const _0x3d43cd = Object['keys'](globalThis);
                    let _0x1c9250 = [];
                    for (let _0x4a4428 of _0x3d43cd) {
                        if (typeof globalThis[_0x4a4428] === 'boolean') _0x1c9250['push'](_0x4a4428);
                    }
                    const _0x23d3ea = _0x1c9250[命诏书特下(0x0, _0x1c9250['length'] - 0x1)];
                    祚薄晚有儿(_0x23d3ea, _0xcde93[_0x24917c]);
                }
                if (_0x24917c === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
                    'value': _0xcde93[_0x24917c],
                    'count': ia_packet
                }));
                if (_0x24917c === 'FlashBack') sb();
                if (_0x24917c === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0xcde93[_0x24917c]) + '}');
                if (_0x24917c === 'PyRpcManager' && rpc_store && !_0xcde93[_0x24917c]) {
                    rpc_temp['forEach'](_0x40397d => sendRpc(_0x40397d['id'], _0x40397d['data']));
                    以表闻辞不(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x24917c === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0xcde93[_0x24917c],
                    'defaultValue': false
                });
                if (_0x24917c === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0xcde93[_0x24917c],
                    'defaultValue': false
                });
                if (_0x24917c === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0xcde93[_0x24917c],
                    'defaultValue': false
                });
                if (_0x24917c === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0xcde93[_0x24917c],
                    'defaultValue': false
                });
                if (_0x24917c === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0xcde93[_0x24917c],
                    'defaultValue': false
                });
                if (_0x24917c === 'FreeCam') {
                    let _0x235dc7 = {
                        'value': _0xcde93[_0x24917c],
                        'noclip': _0xcde93[_0x24917c],
                        'flying': _0xcde93[_0x24917c]
                    };
                    callModule(0x1, JSON['stringify'](_0x235dc7));
                    if (_0xcde93[_0x24917c]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x24917c === 'FakeMotion' && fm_auto && _0xcde93[_0x24917c]) fm_pos = getPos(self_id);
                if (_0x24917c === 'ShadowBoomer' && _0xcde93[_0x24917c]) sb_pos = getPos(self_id);
                if (_0x24917c === 'AvoidAttack' && _0xcde93[_0x24917c]) aa_pos = getPos(self_id);
                else if (_0x24917c === 'AvoidAttack' && !_0xcde93[_0x24917c]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x24917c === 'NoClip') {
                    let _0x2d3474 = {
                        'value': _0xcde93[_0x24917c],
                        'noclip': _0xcde93[_0x24917c],
                        'flying': _0xcde93[_0x24917c]
                    };
                    if (nc_depart && _0xcde93[_0x24917c]) departCamera();
                    if (nc_depart && !_0xcde93[_0x24917c]) resetCamera();
                    if (nc_bypass) callModule(0x2c, JSON['stringify']({
                        'no_move_check': _0xcde93[_0x24917c],
                        'no_fall_check': _0xcde93[_0x24917c],
                        'value': _0xcde93[_0x24917c]
                    }));
                    callModule(0x1, JSON['stringify'](_0x2d3474));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x24917c === 'BalanceTimer') {
                    callModule(0x25, JSON['stringify']({
                        'value': _0xcde93[_0x24917c]
                    }));
                    BalanceTimer_st = !_0xcde93[_0x24917c];
                }
                if (_0x24917c === 'IQBoost') {
                    const _0x1cb270 = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x8be08 = 命诏书特下(0x0, _0x1cb270['length'] - 0x1);
                    sendChatMessage('!' + _0x1cb270[_0x8be08]);
                }
                if (_0x24917c === 'AutoTarget' && !_0xcde93[_0x24917c]) at_lists = [];
                if (_0x24917c === 'SoundPlayer' && !_0xcde93[_0x24917c]) sp_data = [];
                if (_0x24917c === 'FightBot' && !_0xcde93[_0x24917c]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x24917c === 'ShowSendPacket' && !_0xcde93[_0x24917c] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x557908 = '';
                    for (let _0x597389 in PacketTmp['send']) _0x557908 += '名称:' + _0x597389 + '，ID:' + PacketTmp['send'][_0x597389]['id'] + '，发送数量:' + PacketTmp['send'][_0x597389]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    以表闻辞不(0x0, 'sendPacket', '\n' + _0x557908, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x24917c === 'ShowReceivePacket' && !_0xcde93[_0x24917c] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x3c9666 = '';
                    for (let _0x4427f8 in PacketTmp['receive']) _0x3c9666 += '名称:' + _0x4427f8 + '，ID:' + PacketTmp['receive'][_0x4427f8]['id'] + '，接受数量:' + PacketTmp['receive'][_0x4427f8]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    以表闻辞不(0x0, 'receivePacket', '\n' + _0x3c9666, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x24917c === 'Scaffold' && sca_keep && _0xcde93[_0x24917c]) sca_current = 0x0;
                if (_0x24917c === 'SmartInv' && _0xcde93[_0x24917c]) {
                    da_slot = 0x23;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x24917c === 'sp_loop' && !_0xcde93[_0x24917c]) sp_file = null;
                if (_0x24917c === 'NoLiquid' && _0xcde93[_0x24917c]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x24917c === 'NoLiquid' && !_0xcde93[_0x24917c]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0xcde93[_0x24917c] === 'boolean' || typeof _0xcde93[_0x24917c] === 'number') {
                    if (typeof _0xcde93[_0x24917c] === 'boolean') {
                        祚薄晚有儿(_0x24917c, _0xcde93[_0x24917c]);
                        return;
                    }
                    nx_cfg[_0x24917c] = _0xcde93[_0x24917c];
                    globalThis[_0x24917c] = _0xcde93[_0x24917c];
                }
            }
        } catch (_0x452aac) {
            clientMessage(_0x452aac['stack']);
        }
    }

    function onPlayerAttackEvent(_0xf4f0cb, _0x99ede9) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/音效/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x99ede9;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x99ede9));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x99ede9));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x99ede9));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x99ede9));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x99ede9;
            else {
                if (te_all) getEntityList()['forEach'](_0x5cc9ec => {
                    if (_0x5cc9ec != te_target) setTarget(_0x5cc9ec, te_target, te_two);
                });
                else setTarget(_0x99ede9, te_target, te_two);
                te_target = null;
                以表闻辞不(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x99ede9);
            else startRidingEntity(_0x99ede9);
            以表闻辞不(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x99ede9;
            else {
                setEntityNBT(_0x99ede9, getEntityNBT(te_target));
                enc_target = null;
                以表闻辞不(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x99ede9));
        if (!attack_list['includes'](_0x99ede9)) attack_list['push'](_0x99ede9);
        if (_0x99ede9 === null || attack_list['every'](_0x453fe4 => last_attack_target['includes'](_0x453fe4))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x99ede9;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x99ede9;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x99ede9;
            以表闻辞不(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x99ede9), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            if (ap_crit) {
                const _0x26e4a2 = getPos(_0x99ede9);
                const _0x5ee7da = getEntitySize(_0x99ede9);
                for (let _0xe9ecb1 = 0x0; _0xe9ecb1 < 命诏书特下(ap_count, ap_count + 0x14); _0xe9ecb1++) 息外无期功(ap_type, _0x26e4a2['x'] + 命诏书特下(-_0x5ee7da['x'] * 命诏书特下(0x5, ap_density), _0x5ee7da['x'] * 命诏书特下(0x5, ap_density)) / 0xa, _0x26e4a2['y'] + 命诏书特下(-_0x5ee7da['y'] * 0x9, _0x5ee7da['y'] * 0x2) / 0xa + ap_offset / 0xa, _0x26e4a2['z'] + 命诏书特下(-_0x5ee7da['x'] * 命诏书特下(0x5, ap_density), _0x5ee7da['x'] * 命诏书特下(0x5, ap_density)) / 0xa, 0x1);
            }
            if (ap_slashblade) {
                let _0x530a5f = getCameraRotation();
                let _0xaab4d8 = {
                    'yaw': _0x530a5f['yaw'] > 0x0 ? 0xb4 - _0x530a5f['yaw'] : -0xb4 - _0x530a5f['yaw'],
                    'pitch': -_0x530a5f['pitch']
                };
                let _0x46daa9 = 命诏书特下(0x0, 0x1);
                let _0xf24b = (ap_random_slope ? 命诏书特下(0x0, 0x2d) : ap_sb_slope) / 0xa;
                for (let _0x3318d4 = -ap_sb_count * 0x2; _0x3318d4 <= ap_sb_count * 0x2; _0x3318d4 += ap_sb_space) {
                    let _0x5231a3 = _0x46daa9 ? _0x3318d4 : -_0x3318d4;
                    const _0x2090aa = 非臣陨首所(ap_sb_dist, self_pos, {
                        'yaw': _0xaab4d8['yaw'] + _0x5231a3,
                        'pitch': _0xaab4d8['pitch'] + _0x3318d4 * _0xf24b
                    });
                    息外无期功(ap_type, _0x2090aa['x'], _0x2090aa['y'] + ap_offset / 0xa, _0x2090aa['z'], 0x1);
                }
            }
        }
        if (NoSlowDown) {
            let _0x4e0fac = getEntityMotion(self_id);
            setMotion(_0x4e0fac['x'], _0x4e0fac['y'], _0x4e0fac['z']);
        }
        if (AttackSound) {
            病常在床蓐(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x1f9375 = 就职诏书切(self_id, _0x99ede9);
            callModule(0x4b, JSON['stringify']({
                'value': true,
                'line_width': 0.25,
                'mode': 0x2,
                'distance': _0x1f9375 * 1.01
            }));
            setTimeout(() => callModule(0x4b, JSON['stringify']({
                'value': false
            })), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x3ed2a5 = 多疾病九岁(_0x99ede9);
            以表闻辞不(0x0, 'Info', '\n' + _0x3ed2a5 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x99ede9) + '_' + _0x99ede9 + '.txt', _0x3ed2a5);
            return true;
        }
        if (SmartWeapon) {
            let _0x17b429 = [];
            let _0x431319 = modes['sw_mode'] ? 0x24 : 0x9;
            for (let _0x181ea5 = 0x0; _0x181ea5 < _0x431319; _0x181ea5++) _0x17b429['push']({
                'slot': _0x181ea5,
                'd': 守臣逵察臣(self_id, _0x181ea5, sw_texture, sw_enchant)
            });
            _0x17b429['sort']((_0x24675d, _0x353e6a) => _0x353e6a['d'] - _0x24675d['d']);
            let _0x3db488 = _0x17b429[0x0];
            let _0xa31c36 = getPlayerSelectItemSlot(self_id);
            if (_0x3db488['d'] > 0x1 && _0x3db488['slot'] !== _0xa31c36) {
                if (_0x3db488['slot'] > 0x8) {
                    if (sw_open) openInventory();
                    setTimeout(() => 苦至于成立(_0x3db488['slot'], _0xa31c36, true, false), 0xc8);
                } else selectPlayerInventorySlot(self_id, _0x3db488['slot']);
            }
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x99ede9)) at_lists['push'](_0x99ede9);
            else at_lists['splice'](at_lists['indexOf'](_0x99ede9), 0x1);
            以表闻辞不(0x0, !at_lists['includes'](_0x99ede9) ? 'delTarget' : 'addTarget', getEntityName(_0x99ede9), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x32c60c = getPos(_0x99ede9);
            const _0x1f0cb4 = 伏惟圣朝以(self_pos, _0x32c60c, 'yaw_pos');
            const _0x5e6739 = 非臣陨首所(-ckb_len / 0x2, self_pos, {
                'yaw': _0x1f0cb4,
                'pitch': 0x0
            });
            setEntityMotion(_0x99ede9, _0x5e6739['x'] - self_pos['x'], ckb_y, _0x5e6739['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x99ede9)) at_whileLists['push'](_0x99ede9);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x99ede9), 0x1);
            以表闻辞不(0x0, !at_whileLists['includes'](_0x99ede9) ? 'delTarget' : 'addTarget', getEntityName(_0x99ede9), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 奔驰则刘病(getEntityName(_0x99ede9));
            以表闻辞不(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) {
            th_target = _0x99ede9;
            th_tick = 0x0;
        }
        if (KillAura) return 命诏书特下(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x514cfb) {
        if (_0x514cfb === '') return true;
        if (ReplaceMsg) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x514cfb);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x514cfb);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x514cfb);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x514cfb);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x514cfb);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x514cfb);
            return true;
        }
        if (ChatSuffix && !_0x514cfb['includes'](cs_text)) {
            sendChatMessage(_0x514cfb + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0x4a5b09, _0x187eb7) {
        if (ChatManager && (_0x4a5b09 != getEntityName(self_id) && cm_other || _0x4a5b09 == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x205efb = 0x0; _0x205efb < cm_repeat_times; _0x205efb++) sendChatMessage(_0x187eb7);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 以表闻辞不(0x0, 'clientMsg', '来源: ' + _0x4a5b09 + ', 消息:' + _0x187eb7, '§r');
        if (ChatManager) return cm_black['some'](_0x2970db => _0x187eb7['includes'](_0x2970db));
        if (ChatManager && _0x187eb7['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x1e62fd = Math['round'](命诏书特下(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x320200 = bn_format['replaceAll']('[名字]', _0x4a5b09)['replaceAll']('[消息]', _0x187eb7);
            const _0x247673 = 'abcdef';
            if (bn_format) _0x320200 = 年四岁舅夺(_0x320200);
            if (bn_rainbow) _0x320200 = '§' + _0x247673[命诏书特下(0x0, _0x247673['length'] - 0x1)] + _0x320200;
            let _0x425783 = createText(_0x320200, 'Center', nx_screen['screenWidth'], _0x1e62fd);
            if (_0x425783 !== -0x1) bn_list['push']({
                'id': _0x425783,
                'speed': 命诏书特下(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x1e62fd
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x520dd3) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (Scaffold && sca_tower) {
            let _0x294d1d = Date['now']();
            if (_0x294d1d - sca_prevTower < sca_space * 0x32 && setPos(self_pos['x'], self_pos['y'] + 1.3, self_pos['z']) && buildBlock(self_id, self_pos['x'], self_pos['y'] - 2.3, self_pos['z'], 0x1) && sca_keep) sca_current = Math['floor'](self_pos['y']) + 0x1;
            sca_prevTower = _0x294d1d;
        }
        if (LongJump) {
            const _0x3d5d81 = getEntityMotion(_0x520dd3);
            const _0x2c8a4f = getCameraRotation();
            const _0x7c8a0e = 拜臣郎中寻(_0x3d5d81, self_pos, 0x14);
            const _0x49446a = 非臣陨首所(lj_len / 0x4, self_pos, {
                'yaw': _0x2c8a4f['yaw'] > 0x0 ? 0xb4 - _0x2c8a4f['yaw'] : -0xb4 - _0x2c8a4f['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x49446a['x'] - self_pos['x'], lj_y, _0x49446a['z'] - self_pos['z']);
            return true;
        }
    }

    function onPyRpcReceiveEvent(_0x58ffb7, _0x497042) {
        if (isTP) {
            const _0x27c11f = 凶生孩六月(_0x497042)['toLowerCase']();
            if (_0x27c11f['includes']('posmap')) {
                const _0x481070 = new Uint8Array(_0x497042);
                const _0x3e4a7a = Array['from'](_0x481070, _0x5eb87e => _0x5eb87e['toString'](0x10)['padStart'](0x2, '0'))['join']('');
                let _0x274863 = calHexPos(_0x3e4a7a);
                以表闻辞不(0x0, 'Pos', '坐标: [' + _0x274863['x'] + ', ' + _0x274863['y'] + ', ' + _0x274863['z'] + ']', '§r');
                if (st_tp) setPos(_0x274863['x'], _0x274863['y'] + st_offset, _0x274863['z']);
                isTP = false;
            }
        }
        if (PyRpcManager && rpc_rec) {
            const _0x3ec81d = new Uint8Array(_0x497042);
            const _0x20aec9 = Array['from'](_0x3ec81d, _0x4562cc => _0x4562cc['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x390c4e = 凶生孩六月(_0x497042)['toLowerCase']();
            let _0x3f7cdf = false;
            let _0x761865 = rpc_tipWhite['some'](_0x18fd2a => _0x390c4e['includes'](_0x18fd2a));
            if (!_0x3f7cdf) _0x3f7cdf = rpc_black['some'](_0x290157 => _0x390c4e['includes'](_0x290157));
            if (!_0x3f7cdf) _0x3f7cdf = rpc_recBlack['some'](_0x1da1de => _0x390c4e['includes'](_0x1da1de));
            if (rpc_white['some'](_0x47269f => _0x390c4e['includes'](_0x47269f))) _0x3f7cdf = false;
            if (rpc_recWhite['some'](_0x383e9f => _0x390c4e['includes'](_0x383e9f))) _0x3f7cdf = false;
            if (rpc_record && (!_0x761865 || !rpc_exclude)) {
                const _0x4466a2 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
                const _0x32995d = JSON['parse'](日笃欲苟顺(_0x4466a2));
                _0x32995d[_0x32995d['length']] = {
                    'packet_hex': _0x20aec9,
                    'packet_format': hex2format(_0x20aec9),
                    'packet_str': 凶生孩六月(_0x497042),
                    'packet_bin': _0x3ec81d,
                    'time': Date['now'](),
                    'id': _0x58ffb7,
                    'type': 'Receive',
                    'keword': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x3f7cdf
                };
                File['write'](_0x4466a2, JSON['stringify'](_0x32995d, null, 0x4));
            }
            let _0x4dbb45 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x4dbb45 = 凶生孩六月(_0x497042);
            if (modes['rpc_mode'] === 0x1) _0x4dbb45 = _0x20aec9;
            if (modes['rpc_mode'] === 0x2) _0x4dbb45 = hex2format(_0x20aec9);
            if (modes['rpc_mode'] === 0x3) _0x4dbb45 = JSON['stringify'](_0x497042);
            const _0x3490f1 = _0x3f7cdf ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x761865 && (rpc_showDisintercept && !_0x3f7cdf || rpc_showIntercept && _0x3f7cdf)) 以表闻辞不(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x58ffb7 + '\n' : '') + _0x4dbb45 + _0x3490f1, '§r');
            return _0x3f7cdf;
        }
    }

    function onPyRpcSendEvent(_0x192e86, _0x93caf3) {
        if (PyRpcManager && rpc_send) {
            const _0x416765 = new Uint8Array(_0x93caf3);
            const _0x28ddf2 = Array['from'](_0x416765, _0x5bf78a => _0x5bf78a['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x311f81 = 凶生孩六月(_0x93caf3)['toLowerCase']();
            let _0x462c57 = false;
            let _0x15d0fa = rpc_tipWhite['some'](_0x1fbef9 => _0x311f81['includes'](_0x1fbef9));
            if (!_0x462c57) _0x462c57 = rpc_black['some'](_0x2ce501 => _0x311f81['includes'](_0x2ce501));
            if (!_0x462c57) _0x462c57 = rpc_sendBlack['some'](_0x37d785 => _0x311f81['includes'](_0x37d785));
            if (rpc_white['some'](_0xb069bd => _0x311f81['includes'](_0xb069bd))) _0x462c57 = true;
            if (rpc_sendWhite['some'](_0x4b44e6 => _0x311f81['includes'](_0x4b44e6))) _0x462c57 = false;
            if (!_0x15d0fa) prev_rpc = {
                'id': _0x192e86,
                'data': _0x416765
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x192e86,
                'data': _0x416765
            });
            if (rpc_intercept) _0x462c57 = true;
            if (rpc_record && (!_0x15d0fa || !rpc_exclude)) {
                const _0x290318 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
                const _0x4eef20 = JSON['parse'](日笃欲苟顺(_0x290318));
                _0x4eef20[_0x4eef20['length']] = {
                    'packet_hex': _0x28ddf2,
                    'packet_format': hex2format(_0x28ddf2),
                    'packet_str': 凶生孩六月(_0x93caf3),
                    'packet_bin': _0x416765,
                    'time': Date['now'](),
                    'id': _0x192e86,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x462c57
                };
                File['write'](_0x290318, JSON['stringify'](_0x4eef20, null, 0x4));
            }
            let _0x54e9c4 = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x54e9c4 = 凶生孩六月(_0x93caf3);
            if (modes['rpc_mode'] === 0x1) _0x54e9c4 = _0x28ddf2;
            if (modes['rpc_mode'] === 0x2) _0x54e9c4 = hex2format(_0x28ddf2);
            if (modes['rpc_mode'] === 0x3) _0x54e9c4 = JSON['stringify'](_0x93caf3);
            for (let _0x46da32 of rpc_config) {
                if (typeof _0x46da32 === 'object') {
                    if (_0x46da32['match_mode'] === 0x0 && _0x54e9c4['includes'](_0x46da32['packet'])) _0x54e9c4 = remarks;
                    if (_0x46da32['match_mode'] === 0x1 && _0x54e9c4['includes'] === _0x46da32['packet']) _0x54e9c4 = remarks;
                } else continue;
            }
            let _0x425b6b = _0x462c57 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x15d0fa && (rpc_showDisintercept && !_0x462c57 || rpc_showIntercept && _0x462c57)) 以表闻辞不(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x192e86 + '\n' : '') + _0x54e9c4 + _0x425b6b, '§r');
            return _0x462c57;
        }
    }

    function onEntityBehaviorEvent(_0x2dfb98, _0x17e5cc, _0x4446de) {
        if (ShowEntityAnime) 以表闻辞不(0x0, 'EntityBehavior', '实体ID:' + _0x2dfb98 + ' 实体昵称:' + getEntityName(_0x2dfb98) + ' 行为ID:' + _0x17e5cc + ' 行为数据:' + _0x4446de, '§r');
        if (_0x17e5cc === 0x27 && _0x2dfb98 === av_id) av_id = null;
        if (_0x17e5cc === 0x3 && attack_list['includes'](_0x2dfb98)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x351141 = 0x0; _0x351141 < 0x32; _0x351141++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x2dfb98) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            以表闻辞不(0x0, 'Kill', 'You Kill ' + getEntityName(_0x2dfb98), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/音效/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/音效/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x17e5cc === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x2dfb98);
        if (_0x17e5cc === 0x2 && attack_list['includes'](_0x2dfb98)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x17e5cc === 0x4 && _0x2dfb98 != self_id)) {
            let _0x4b78a3 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x2dfb98;
            if (就职诏书切(_0x4b78a3, self_id) < fb_range) 臣荣举臣秀(_0x2dfb98, Swing);
            fb_ishurt = false;
        }
        if (_0x17e5cc === 0x2 && _0x2dfb98 === self_id) {
            let _0x23a523 = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/音效/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 以表闻辞不(0x0, 'Hurt', '受伤类型: ' + _0x4446de, '§r');
            if (HurtJump) setMotion(_0x23a523['x'], hj_height, _0x23a523['z']);
            if (AntiKB && 命诏书特下(0x0, 0x64) <= akb_rare) {
                let _0x309121 = akb_hor / 0x64;
                let _0x3f9ad1 = akb_y / 0x64;
                setMotion(_0x23a523['x'] - _0x309121 * _0x23a523['x'], _0x23a523['y'] - _0x3f9ad1 * _0x23a523['y'], _0x23a523['z'] - _0x309121 * _0x23a523['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x4446de == 0x2) fb_ishurt = true;
            if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
        }
        if (_0x17e5cc === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x47091b, _0x3065aa, _0x29dc29, _0x164bfc, _0x5534a2) {
        const _0x2eae87 = getCarried(_0x47091b);
        const _0x30aa6d = getBlock(_0x3065aa, _0x29dc29, _0x164bfc);
        if (_0x30aa6d['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/音效/destroy.mp3');
        if (ShowDestroyBlock) 以表闻辞不(0x0, 'destroy', '命名空间:' + _0x30aa6d['namespace'] + ', §rID:' + _0x30aa6d['id'] + ', 方块选择面:' + _0x5534a2 + ', §r特殊值:' + _0x30aa6d['aux'] + '\n手持:' + _0x2eae87['name'] + '-[' + _0x2eae87['namespace'] + '], 特殊值:' + _0x2eae87['aux'] + '\n坐标:[' + _0x3065aa + ', ' + _0x29dc29 + ', ' + _0x164bfc + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x3065aa + ' ' + _0x29dc29 + ' ' + _0x164bfc + '的' + _0x30aa6d['namespace']);
        if (Miner && (_0x30aa6d['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current <= mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x33be54 => _0x30aa6d['namespace']['includes'](_0x33be54))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x1944fd => !_0x30aa6d['namespace']['includes'](_0x1944fd)))) {
                mine_destroy = true;
                mine_name = _0x30aa6d['namespace'];
            }
            if (mine_destroy && mine_name != _0x30aa6d['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x30aa6d['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x3065aa,
                    'y': _0x29dc29,
                    'z': _0x164bfc
                }) <= mine_distance && mine_destroy) {
                let _0x1c065d = [
                    [_0x3065aa + 0x1, _0x29dc29, _0x164bfc],
                    [_0x3065aa - 0x1, _0x29dc29, _0x164bfc],
                    [_0x3065aa, _0x29dc29, _0x164bfc + 0x1],
                    [_0x3065aa, _0x29dc29, _0x164bfc - 0x1],
                    [_0x3065aa, _0x29dc29 + 0x1, _0x164bfc],
                    [_0x3065aa, _0x29dc29 - 0x1, _0x164bfc]
                ];
                for (p of _0x1c065d) {
                    const _0x5ed206 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x5ed206['namespace'] != 'minecraft:air' && _0x30aa6d['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x181c4e = getWorldData();
            if (ShowGameInfo) 以表闻辞不(0x0, 'Tip', '进入世界 ' + _0x181c4e['levelName'] + ' ，难度:' + _0x181c4e['difficulty'] + ' 游戏模式:' + _0x181c4e['gameType'] + ' 游戏时间:' + _0x181c4e['time'] + ' 随机刻速度:' + _0x181c4e['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x4b0af5, _0x1edea0, _0x30db8b, _0x42f8e7, _0x1b95b4) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/音效/build.mp3');
        const _0x4d5555 = getCarried(self_id);
        const _0x42147f = getBlock(_0x1edea0, _0x30db8b, _0x42f8e7);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x4d5555['name']);
        if (ShowClickBlock) 以表闻辞不(0x0, 'build', '命名空间:' + _0x42147f['namespace'] + ', §rID:' + _0x42147f['id'] + ', 方块选择面:' + _0x1b95b4 + ', §r特殊值:' + _0x42147f['aux'] + '\n手持:' + _0x4d5555['name'] + '-[' + _0x4d5555['namespace'] + '], 特殊值:' + _0x4d5555['aux'] + '\n坐标:[' + _0x1edea0 + ', ' + _0x30db8b + ', ' + _0x42f8e7 + ']', '§r');
        if (ClickTP) 郡县逼迫催(_0x1edea0, _0x30db8b + 0x2, _0x42f8e7);
        if (AutoTool) {
            let _0x64c93d = [];
            let _0x2013c2 = 0x9;
            for (let _0x1172d8 = 0x0; _0x1172d8 < _0x2013c2; _0x1172d8++) _0x64c93d['push']({
                'slot': _0x1172d8,
                'd': getBlockDestroyTime(_0x42147f['namespace'], getInventory(self_id, _0x1172d8)['namespace'], {})
            });
            _0x64c93d['sort']((_0x490a71, _0x57a465) => _0x490a71['d'] - _0x57a465['d']);
            let _0x554d38 = _0x64c93d[0x0];
            let _0x4f7696 = getPlayerSelectItemSlot(self_id);
            if (_0x554d38['slot'] !== _0x4f7696) selectPlayerInventorySlot(self_id, _0x554d38['slot']);
        }
        const _0x39d913 = ChestAura && ca_rot && _0x42147f['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(self_id) || ClickRot;
        if (_0x39d913) {
            let _0x3cf856 = {
                'x': _0x1edea0,
                'y': _0x30db8b,
                'z': _0x42f8e7
            };
            const _0x2a8e6e = 拜臣郎中寻(getEntityMotion(self_id), getPos(self_id), 0x14);
            let _0x5ab83a = 伏惟圣朝以(_0x2a8e6e, _0x3cf856, 'pitch_pos');
            let _0x8a1aab = 伏惟圣朝以(_0x2a8e6e, _0x3cf856, 'yaw_pos');
            既无伯叔终(_0x5ab83a, _0x8a1aab);
        }
        if (GetCommand && _0x42147f['namespace']['includes']('command_block')) {
            let _0x18b425 = getBlockEntityNBT(_0x1edea0, _0x30db8b, _0x42f8e7);
            let _0x4d0bd6 = 孝廉后刺史(_0x18b425, 'Command:"', '",Cu');
            let _0x347221 = 孝廉后刺史(_0x18b425, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x106f8b = 孝廉后刺史(_0x18b425, 'TickDelay:', ',Tr');
            以表闻辞不(0x0, 'Cmd', '坐标:[' + _0x1edea0 + ' ' + _0x30db8b + ' ' + _0x42f8e7 + ']\n指令:' + _0x4d0bd6 + '\n是否自动:' + _0x347221 + '\n执行延迟:' + _0x106f8b + 'Tick', '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x1edea0, _0x30db8b, _0x42f8e7];
            else {
                setBlockEntityData(_0x1edea0, _0x30db8b, _0x42f8e7, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                以表闻辞不(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x344712 = [
                [_0x1edea0, _0x30db8b - 0x1, _0x42f8e7],
                [_0x1edea0, _0x30db8b + 0x1, _0x42f8e7],
                [_0x1edea0, _0x30db8b, _0x42f8e7 - 0x1],
                [_0x1edea0, _0x30db8b, _0x42f8e7 + 0x1],
                [_0x1edea0 - 0x1, _0x30db8b, _0x42f8e7],
                [_0x1edea0 + 0x1, _0x30db8b, _0x42f8e7]
            ];
            setBlock(_0x344712[_0x1b95b4][0x0], _0x344712[_0x1b95b4][0x1], _0x344712[_0x1b95b4][0x2], _0x4d5555['namespace'], _0x4d5555['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x1edea0, _0x30db8b, _0x42f8e7, _0x4d5555['namespace'], _0x4d5555['aux']);
        if (ClickDestroy && !AutoDestroy) 朝历职郎署({
            'x': _0x1edea0,
            'y': _0x30db8b,
            'z': _0x42f8e7
        });
        if (AutoBed && _0x42147f['namespace'] === 'minecraft:bed' && !ab_running) {
            以表闻辞不(0x0, 'Tip', '请手持方块', '§r');
            let _0x578fd1 = [
                [_0x1edea0 + 0x1, _0x30db8b, _0x42f8e7],
                [_0x1edea0 - 0x1, _0x30db8b, _0x42f8e7],
                [_0x1edea0, _0x30db8b, _0x42f8e7 + 0x1],
                [_0x1edea0, _0x30db8b, _0x42f8e7 - 0x1],
                [_0x1edea0, _0x30db8b + 0x1, _0x42f8e7]
            ];
            ab_running = true;
            for (let _0x59974c of _0x578fd1) {
                const _0x266759 = getBlock(_0x59974c[0x0], _0x59974c[0x1], _0x59974c[0x2]);
                if (_0x266759['namespace'] === 'minecraft:air') 立形影相吊(_0x59974c[0x0], _0x59974c[0x1], _0x59974c[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x4d5555['namespace']['includes']('_sword') || _0x4d5555['namespace']['includes']('_pickaxe') || _0x4d5555['namespace']['includes']('_axe') || _0x4d5555['namespace']['includes']('shears'))) {
            if (bk_origin) {
                callModule(0xf, JSON['stringify']({
                    'value': true
                }));
                setTimeout(() => callModule(0xf, JSON['stringify']({
                    'value': false
                })), bk_last * 0x32);
                return true;
            }
            if (bk_tool) {
                let _0x5ecec8 = [];
                let _0x4aa5db = 0x9;
                for (let _0x5c29e9 = 0x0; _0x5c29e9 < _0x4aa5db; _0x5c29e9++) _0x5ecec8['push']({
                    'slot': _0x5c29e9,
                    'd': getBlockDestroyTime(_0x42147f['namespace'], getInventory(self_id, _0x5c29e9)['namespace'], {})
                });
                _0x5ecec8['sort']((_0x480cd3, _0x5ee766) => _0x480cd3['d'] - _0x5ee766['d']);
                let _0x2daf04 = _0x5ecec8[0x0];
                let _0x519e84 = getPlayerSelectItemSlot(self_id);
                if (_0x2daf04['slot'] !== _0x519e84) selectPlayerInventorySlot(self_id, _0x2daf04['slot']);
            }
            const _0x58f408 = Math['round'](bk_range);
            _0x19f934: for (let _0x515085 = -_0x58f408; _0x515085 <= _0x58f408; _0x515085++) {
                for (let _0x2bd6c0 = -_0x58f408; _0x2bd6c0 < _0x58f408; _0x2bd6c0++) {
                    for (let _0x22d9e9 = -_0x58f408; _0x22d9e9 <= _0x58f408; _0x22d9e9++) {
                        let _0x3b4da1 = _0x1edea0 + _0x515085;
                        let _0x24a5cf = _0x30db8b + _0x2bd6c0;
                        let _0x1d0774 = _0x42f8e7 + _0x22d9e9;
                        let _0x30e247 = getBlock(_0x3b4da1, _0x24a5cf, _0x1d0774);
                        if (bk_bed && _0x30e247['namespace'] === 'minecraft:bed' || bk_chest && _0x30e247['namespace'] === 'minecraft:chest') {
                            let _0x475ff3 = getBlock(_0x3b4da1, _0x24a5cf + 0x1, _0x1d0774);
                            if (_0x475ff3['namespace'] != 'minecraft:air' && bk_up) _0x24a5cf += 0x1;
                            bk_pos = {
                                'ex': _0x3b4da1,
                                'ey': _0x24a5cf,
                                'ez': _0x1d0774
                            };
                            bk_timer = 0x0;
                            break _0x19f934;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x1edea0,
                'y': _0x30db8b,
                'z': _0x42f8e7
            });
            以表闻辞不(0x0, 'Tip', '已添加[' + _0x1edea0 + ', ' + _0x30db8b + ', ' + _0x42f8e7 + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x3262b5 = getCameraRotation();
            for (let _0x1c80fb = 0x0; _0x1c80fb < fb_len + 0x1; _0x1c80fb++) fb_list['push'](非臣陨首所(_0x1c80fb, 私情则告诉(self_id), {
                'pitch': 0x0,
                'yaw': _0x3262b5['yaw'] > 0x0 ? 0xb4 - _0x3262b5['yaw'] : -0xb4 - _0x3262b5['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0x42147f['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0x527bc1) {
        if (ShowPressKey) 以表闻辞不(0x0, 'KeyBoard', '按下键值 ' + _0x527bc1, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x527bc1] !== 'undefined') 祚薄晚有儿(nx_keys[_0x527bc1], !globalThis[nx_keys[_0x527bc1]]);
        if (nx_isBind != null && _0x527bc1 != 0x42) {
            nx_keys[_0x527bc1] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            以表闻辞不(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x527bc1, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x1fa21f) {
        if (ShowUpliftKey) 以表闻辞不(0x0, 'Tip', '释放键值 ' + _0x1fa21f, '§r');
    }

    function onSendServerPacketEvent(_0xfb7c9, _0x31823e) {
        if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0xfb7c9 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0xfb7c9 === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0xfb7c9 === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0xfb7c9 === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0xe55605 = PacketTranslate[PacketTranslate['map'](_0x3f0e4c => _0x3f0e4c['id'])['indexOf'](_0xfb7c9)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x31823e] === 'undefined') PacketTmp['send'][_0x31823e] = {
                    'id': _0xfb7c9,
                    'Translate': _0xe55605,
                    'count': 0x1
                };
                PacketTmp['send'][_0x31823e]['count']++;
            }
            const _0x216901 = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x1ff477 = [];
            if (sp_id) _0x1ff477['push'](_0xfb7c9);
            if (sp_name) _0x1ff477['push'](_0x31823e);
            if (sp_trans) _0x1ff477['push'](_0xe55605);
            let _0x28165f = sp_intercept && (intercept['includes'](_0xfb7c9) || intercept['includes'](_0x31823e));
            if (!sp_ignore || !(ignore['includes'](_0xfb7c9) || ignore['includes'](_0x31823e))) 以表闻辞不(0x0, 'SendPacket', '发送数据包: ' + _0x1ff477['join'](' - ') + (_0x28165f ? '\n§e已拦截数据包' : ''), '§r');
            return _0x28165f;
        }
    }

    function onReceiveServerPacketEvent(_0x9e25fb, _0x1a8a74) {
        if (ShadowBoomer && _0x9e25fb == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x9e25fb == 0x55) {
            KillAura = false;
            以表闻辞不(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x9e25fb === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x9e25fb === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x9e25fb === 0x9) return true;
        if (ModifyTime && _0x9e25fb === 0xa) return true;
        if (ca_check && _0x9e25fb === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x9e25fb === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0x9e25fb === 0x12) return true;
        if (NoCamShake && _0x9e25fb === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x5a6739 = PacketTranslate[PacketTranslate['map'](_0x48ce43 => _0x48ce43['id'])['indexOf'](_0x9e25fb)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x1a8a74] === 'undefined') PacketTmp['receive'][_0x1a8a74] = {
                    'id': _0x9e25fb,
                    'Translate': _0x5a6739,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x1a8a74]['count']++;
            }
            const _0x2ab848 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x4648a0 = [];
            if (srp_id) _0x4648a0['push'](_0x9e25fb);
            if (srp_name) _0x4648a0['push'](_0x1a8a74);
            if (srp_trans) _0x4648a0['push'](_0x5a6739);
            let _0x293b23 = srp_intercept && (intercept['includes'](_0x9e25fb) || intercept['includes'](_0x1a8a74));
            if (!srp_ignore || !(ignore['includes'](_0x9e25fb) || ignore['includes'](_0x1a8a74))) 以表闻辞不(0x0, 'ReceivePacket', '接收数据包: ' + _0x4648a0['join'](' - ') + (_0x293b23 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x293b23;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x9e25fb === 0x9;
    }

    function onTouchMotionDownEvent(_0x588fd7, _0x42ca6d, _0x4cfe23) {
        if (SafeAttack) {
            const _0xb2c55b = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x59c72d = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x5159ea = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x86f54f = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 孝治天下凡(self_id, at_lists[0x0], sa_fov, 0x0) && 就职诏书切(self_id, at_lists[0x0]) < sa_range && _0x42ca6d > _0xb2c55b && _0x42ca6d < _0x59c72d && _0x4cfe23 > _0x5159ea && _0x4cfe23 < _0x86f54f) 臣荣举臣秀(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x4b0465, _0xa253dc) {
        const _0x7665b2 = 亲抚养臣少(_0xa253dc);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x7665b2['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x7665b2['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x4b0465 > cs_sort) && cs_current < cs_maxCount) {
            let _0x4b6483 = cs_black['length'] === 0x0 || cs_black['some'](_0x3b567d => _0x7665b2['namespace']['includes'](_0x3b567d));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x4f306c => _0x7665b2['namespace']['includes'](_0x4f306c))) _0x4b6483 = false;
            if (_0x4b0465 < cs_min && _0x4b0465 > cs_max) _0x4b6483 = false;
            if (_0x7665b2['attackDamage'] !== 0x0 && _0x7665b2['attackDamage'] < cs_min_damage) _0x4b6483 = false;
            if (_0x7665b2['damage'] !== 0x0 && _0x7665b2['damage'] < cs_min_lasting) _0x4b6483 = false;
            if (!cs_weapon && _0x7665b2['attackDamage'] > 0x0 && _0x7665b2['damage'] > 0x0) _0x4b6483 = false;
            if (!cs_armor && _0x7665b2['attackDamage'] === 0x0 && _0x7665b2['damage'] > 0x0) _0x4b6483 = false;
            if (!cs_other && _0x7665b2['attackDamage'] === 0x0 && _0x7665b2['damage'] === 0x0) _0x4b6483 = false;
            if (cs_sort) cs_sort = _0x4b0465;
            if (_0x4b6483) cs_timer = 0x0;
            if (_0x4b6483) cs_current++;
            return _0x4b6483;
        }
        if (ShowMoveContainer) 以表闻辞不(0x0, 'Container', '§e容器所在格子: §r' + _0x4b0465 + '\n§e物品NBT数据: §r' + _0xa253dc, '§r');
    }

    function onPlayerAuthInputEvent(_0x9f6c33) {
        if (PlayerAuthInputPacket) 以表闻辞不(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x9f6c33.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x9f6c33.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x9f6c33['pos']['x']['toFixed'](0x2) + ', ' + _0x9f6c33['pos']['y']['toFixed'](0x2) + ',' + _0x9f6c33['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x9f6c33['delta']['x']['toFixed'](0x2) + ', ' + _0x9f6c33['delta']['y']['toFixed'](0x2) + ', ' + _0x9f6c33['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x9f6c33['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x9f6c33['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x9f6c33['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x9f6c33['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x9f6c33['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x3befd0) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0x3befd0);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x3b7dc0 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0x27524c = _0x3befd0['replace'](孝廉后刺史(_0x3befd0, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x3b7dc0)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0x27524c['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0x5f10cb) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0x5f10cb);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x33764e) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x33764e);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x45a3d0 = JSON['parse'](Sauths);
            if (typeof _0x45a3d0['sauth_json'] !== 'undefined') _0x45a3d0 = _0x45a3d0['sauth_json'];
            return _0x45a3d0;
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