/*
 *一辈又一辈,你依旧在.
 *Crack By Unknow.
 *Time: 2025 - 06 - 11  00：15：31
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
        clientMessage('§e§l[NoveXare] §r§7>>>§r 版本号 §7>>>§r NX版本:NoveXare - §u2025§e06§b11§f001531§bC§dr§ca§ac§ek §7' + msg + ' §fVersion， 跑路版本: ' + version);
    });

    curl_get("http://w.t3yanzheng.com/NXAnnou", {}, function(code, msg) {
        clientMessage("§e§l[NoveXare] §r§7>>>§r 公告 §r§7>>>§r " + msg);
    });

    const sendShadow = (_0x5c899c, _0xb0562c, _0x54792c) => sendPlayerAction({
        'id': self_id,
        'pos': {
            'x': _0x5c899c,
            'y': _0xb0562c,
            'z': _0x54792c
        },
        'type': 0x11
    });
    const getPos = _0x159beb => {
        let _0x4f992c = getEntityPos(_0x159beb);
        if (_0x4f992c) _0x4f992c['y'] += getPos_offset;
        return _0x4f992c || {
            'x': 0x0,
            'y': 0x0,
            'z': 0x0
        };
    };
    const silentMove = (_0x223616, _0x4a9a33, _0x3e02d2) => sendPlayerAuthInput({
        'pos': {
            'x': _0x223616,
            'y': _0x4a9a33,
            'z': _0x3e02d2
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
    const movePlayer = (_0x4cb63d, _0xd2536b, _0x4792fb, _0x3ad43a = true) => sendMovePlayer({
        'id': self_id,
        'pos': {
            'x': _0x4cb63d,
            'y': _0xd2536b,
            'z': _0x4792fb
        },
        'yHeadRot': 0x0,
        'mode': 0x0,
        'rot': {
            'yaw': 0x0,
            'pitch': 0x0
        },
        'ground': _0x3ad43a
    });
    const 臣密言臣以 = _0x5a4dda => {
        const _0x53c80d = new Uint8Array(_0x5a4dda);
        let _0x7c5684 = '';
        for (let _0x5e4c47 = 0x0; _0x5e4c47 < _0x53c80d['length'];) {
            let _0x1eaa02 = _0x53c80d[_0x5e4c47++];
            if (_0x1eaa02 <= 0x7f) _0x7c5684 += String['fromCharCode'](_0x1eaa02);
            else if (_0x1eaa02 >> 0x5 === 0x6) {
                let _0x2fce8c = _0x53c80d[_0x5e4c47++];
                _0x7c5684 += String['fromCharCode']((_0x1eaa02 & 0x1f) << 0x6 | _0x2fce8c & 0x3f);
            } else if (_0x1eaa02 >> 0x4 === 0xe) {
                let _0x49c686 = _0x53c80d[_0x5e4c47++];
                let _0x5466d7 = _0x53c80d[_0x5e4c47++];
                _0x7c5684 += String['fromCharCode']((_0x1eaa02 & 0xf) << 0xc | (_0x49c686 & 0x3f) << 0x6 | _0x5466d7 & 0x3f);
            } else if (_0x1eaa02 >> 0x3 === 0x1e) {
                let _0xca587d = _0x53c80d[_0x5e4c47++];
                let _0x58c12e = _0x53c80d[_0x5e4c47++];
                let _0x10cb6b = _0x53c80d[_0x5e4c47++];
                let _0x327468 = (_0x1eaa02 & 0x7) << 0x12 | (_0xca587d & 0x3f) << 0xc | (_0x58c12e & 0x3f) << 0x6 | _0x10cb6b & 0x3f;
                _0x7c5684 += String['fromCodePoint'](_0x327468);
            }
        }
        return _0x7c5684;
    };
    const 险衅夙遭闵 = (_0x26c591, _0x6c7815, _0x2b35f2, _0x47c2c7) => {
        let _0x199582 = _0x26c591['indexOf'](_0x6c7815) + _0x6c7815['length'];
        let _0x572004 = _0x26c591['indexOf'](_0x2b35f2, _0x199582);
        if (typeof _0x47c2c7 !== 'undefined' && _0x26c591['indexOf'](_0x47c2c7, _0x199582) < _0x572004 && _0x26c591['indexOf'](_0x47c2c7, _0x199582) != -0x1) _0x572004 = _0x26c591['indexOf'](_0x47c2c7, _0x199582);
        if (_0x199582 === -0x1 || _0x572004 === -0x1) return null;
        return _0x26c591['substring'](_0x199582, _0x572004);
    };
    const 凶生孩六月 = _0x5758a3 => {
        let _0x39decf = _0x5758a3['split']('');
        let _0x276982 = '';
        let _0x5557a7 = '4c6e2a3b195d' ['split']('');
        for (let _0x32301c in _0x39decf) _0x276982 += '§' + _0x5557a7[_0x32301c % _0x5557a7['length']] + _0x39decf[_0x32301c];
        return _0x276982;
    };
    const 慈父见背行 = _0x322f77 => {
        if (_0x322f77['startsWith']('0x')) _0x322f77 = _0x322f77['slice'](0x2);
        const _0x2e6dfc = [];
        for (let _0xb32824 = 0x0; _0xb32824 < _0x322f77['length']; _0xb32824 += 0x2) {
            const _0x12b94f = parseInt(_0x322f77['slice'](_0xb32824, _0xb32824 + 0x2), 0x10);
            _0x2e6dfc['push'](_0x12b94f);
        }
        return new Uint8Array(_0x2e6dfc);
    };
    const 年四岁舅夺 = (_0x3f2a8e, _0x578f56, _0x4017a9 = 0x1) => {
        if (_0x4017a9 == 0x1) sendRpc(_0x3f2a8e, 慈父见背行(_0x578f56));
        if (_0x4017a9 == 0x2) sendRpc(_0x3f2a8e, _0x578f56);
        if (_0x4017a9 == 0x3) {
            const _0x2f3df1 = new Uint8Array(str['length']);
            for (let _0x1b2d98 = 0x0; _0x1b2d98 < str['length']; _0x1b2d98++) _0x2f3df1[_0x1b2d98] = str['charCodeAt'](_0x1b2d98);
            sendRpc(_0x3f2a8e, _0x2f3df1);
        }
    };
    const 母志祖母刘 = _0x1001b9 => {
        if (nx_nbts[_0x1001b9] !== undefined) return nx_nbts[_0x1001b9];
        const _0x2670ac = 险衅夙遭闵(_0x1001b9, ',Name:"', '",WasPickedUp');
        if (_0x2670ac === '' || typeof _0x2670ac !== 'string') return {
            'aux': 0x0,
            'count': 0x0,
            'namespace': 'minecraft:air',
            'enchants': []
        };
        const _0x1f2f70 = Number(险衅夙遭闵(_0x1001b9, ',aux:', ','));
        const _0x3fde55 = Number(险衅夙遭闵(_0x1001b9, 'Count:', 'b,D'));
        const _0x4155cc = _0x1001b9['includes'](',name:"') ? 险衅夙遭闵(_0x1001b9, ',name:"', '",') : _0x2670ac['replace']('minecraft:', '');
        const _0x22b1de = _0x1001b9['includes'](',netId:') ? Number(险衅夙遭闵(_0x1001b9, ',netId:', '}')) : 0x0;
        const _0x3e4848 = _0x1001b9['includes']('maxDamage') ? Number(险衅夙遭闵(_0x1001b9, ',maxDamage:', ',')) : 0x0;
        const _0x461a5a = _0x1001b9['includes']('attackDamage') ? Number(险衅夙遭闵(_0x1001b9, 'attackDamage:', ',')) : 0x1;
        const _0x58299c = _0x1001b9['includes']('customColor') ? 险衅夙遭闵(_0x1001b9, 'customColor:', '}', ',') : '';
        const _0x5c728b = _0x1001b9['includes']('ench:[{') ? ('[{' + 险衅夙遭闵(_0x1001b9, 'ench:[{', '}]'))['replace'](/s/g, '')['replace'](/id/g, '"id"')['replace'](/lvl/g, '"lvl"')['replace'](/modEnchant/g, '"modEnchant"') + '}]' : '[]';
        const _0x3b943c = _0x1001b9['startsWith']('{Block:');
        const _0x330287 = {
            'name': _0x4155cc,
            'namespace': _0x2670ac,
            'aux': _0x1f2f70,
            'damage': _0x3e4848,
            'attackDamage': _0x461a5a,
            'count': _0x3fde55,
            'color': _0x58299c,
            'isBlock': _0x3b943c,
            'id': _0x22b1de,
            'enchants': JSON['parse'](_0x5c728b)
        };
        nx_nbts[_0x1001b9] = _0x330287;
        return _0x330287;
    };
    const 愍臣孤弱躬 = _0x3f94f3 => {
        const _0xf8fd72 = getEntitySize(_0x3f94f3);
        const _0x417cb0 = getEntityMotion(_0x3f94f3);
        const _0x414446 = getPos(_0x3f94f3);
        const _0x30dede = getEntityName(_0x3f94f3);
        const _0x3503c0 = getEntityNamespace(_0x3f94f3);
        const _0x43fdc1 = 能上报臣具(self_id, _0x3f94f3);
        const _0x3e2baa = getCarried(_0x3f94f3);
        const _0x2f8845 = 臣荣举臣秀(_0x3f94f3);
        const _0x525d75 = getEntityAttribute(_0x3f94f3, 'minecraft:health');
        const _0x16c892 = getEntityAttribute(_0x3f94f3, 'minecraft:movement');
        const _0x1ce4ea = getEntityTypeId(_0x3f94f3);
        const _0x3ef190 = getEntityTarget(_0x3f94f3);
        const _0x2f0fe2 = getPlayerInventorySize(_0x3f94f3);
        const _0x36a3bb = getPlayerHotBarSize(_0x3f94f3);
        const {
            yaw,
            pitch
        } = getEntityRot(_0x3f94f3);
        const _0x4d1b1f = _0x2ce9dc => _0x2ce9dc['toFixed'](0x2);
        const _0x12a204 = ['唯一ID:' + _0x3f94f3 + ' 昵称:' + _0x30dede + '§r 实体命名空间:' + _0x3503c0 + ' 水平碰撞箱:' + _0x4d1b1f(_0xf8fd72['x']) + ' 垂直碰撞箱:' + _0x4d1b1f(_0xf8fd72['y']) + ' Mot速度:' + _0x2f8845, 'ability速度:[max:' + _0x16c892['max'] + ', min:' + _0x16c892['min'] + ', current:' + _0x16c892['current'] + '] 血量:[max:' + _0x525d75['max'] + ', min:' + _0x525d75['min'] + ', current:' + _0x525d75['current'] + ']', '手持:[id:' + _0x3e2baa['id'] + ', namespace:' + _0x3e2baa['namespace'] + ', name:' + _0x3e2baa['name'] + '§r, aux:' + _0x3e2baa['aux'] + '] 距离:' + _0x43fdc1 + ' 实体类型:' + _0x1ce4ea, '仰俯角:' + _0x4d1b1f(pitch) + '° 偏航角:' + _0x4d1b1f(yaw) + '° 仇恨目标:' + getEntityName(_0x3ef190) + '^' + _0x3ef190, '移动值:[' + _0x4d1b1f(_0x417cb0['x']) + ', ' + _0x4d1b1f(_0x417cb0['y']) + ', ' + _0x4d1b1f(_0x417cb0['z']) + '] 坐标值:[' + _0x4d1b1f(_0x414446['x']) + ', ' + _0x4d1b1f(_0x414446['y']) + ', ' + _0x4d1b1f(_0x414446['z']) + ']', '背包容量:' + _0x2f0fe2 + ' 物品栏容量:' + _0x36a3bb];
        return _0x12a204['join']('\n');
    };
    const getCarried = _0x5f4b65 => 母志祖母刘(getEntityCarriedItem(_0x5f4b65));
    const getOffhand = _0xd3e67d => 母志祖母刘(getEntityOffhandItem(_0xd3e67d));
    const getInventory = (_0x59c9bd, _0x3f1630) => 母志祖母刘(getPlayerInventoryItem(_0x59c9bd, _0x3f1630));
    const 亲抚养臣少 = (_0x16bcf6, _0x46a3c5, _0x5ad048, _0x490a5b = false, _0x38bfd2 = false) => {
        let _0x56b089 = {
            'x': _0x16bcf6,
            'y': _0x46a3c5,
            'z': _0x5ad048
        };
        const _0xf9d3ab = [0x0, 0xd, 0x12, 0x19, 0x1a, 0x1b, 0x25];
        const _0x9380fa = _0x4d0410 => sendPlayerAuthInput({
            'pos': self_pos,
            'inputMode': 0x2,
            'playMode': 0x0,
            'flags': [0x23],
            'actions': _0x4d0410['map'](_0x5ebca6 => ({
                'type': _0x5ebca6,
                'pos': _0x56b089,
                'value': 0x1
            }))
        });
        const _0x4be337 = _0x3ae66b => sendPlayerAction({
            'id': self_id,
            'pos': _0x56b089,
            'type': _0x3ae66b
        });
        if (_0x490a5b) _0x9380fa(_0xf9d3ab);
        if (_0x38bfd2) _0xf9d3ab['forEach'](_0x3224ab => _0x4be337(_0x3224ab));
    };
    const 多疾病九岁 = (_0x253027, _0x34941c, _0x37d06d = true, _0x6a42f1 = false) => {
        if (_0x253027 === _0x34941c || getScreenName() !== 'inventory_screen') return false;
        let _0x5dc120 = getInventory(self_id, _0x253027);
        let _0xdc5342 = getInventory(self_id, _0x34941c);
        if (_0x37d06d && _0x34941c < 0x9 && _0xdc5342['namespace'] != 'minecraft:air') {
            for (let _0x27a29b = 0x23; _0x27a29b > 0x8; _0x27a29b--) {
                const _0x52bd9f = getInventory(self_id, _0x27a29b);
                if (_0x52bd9f['namespace'] === 'minecraft:air') {
                    moveInventoryItem(_0x34941c, _0x27a29b);
                    break;
                }
            }
        }
        if (_0x6a42f1 && _0x5dc120['namespace'] === 'minecraft:air' && _0xdc5342['namespace'] !== 'minecraft:air') moveInventoryItem(_0x34941c, _0x253027);
        if (_0x5dc120['namespace'] !== 'minecraft:air' && _0xdc5342['namespace'] === 'minecraft:air') moveInventoryItem(_0x253027, _0x34941c);
    };
    const 不行零丁孤 = (_0x783b95, _0x5798d9) => {
        let _0x5c7699 = _0x5798d9 - 0xb4;
        if (_0x783b95 > 0x5a) _0x783b95 -= 0x5a;
        if (_0x783b95 < -0x5a) _0x783b95 += 0x5a;
        if (_0x5c7699 > 0xb4) _0x5c7699 = _0x5c7699 - 0x168;
        if (_0x5c7699 < -0xb4) _0x5c7699 = 0x168 + _0x5c7699;
        if (getPlayerViewPerspective() === 0x0 || _0x5c7699 > 0xb4 || _0x5c7699 < -0xb4 || _0x783b95 > 0x5a || _0x783b95 < -0x5a) return false;
        setEntityBodyRot(self_id, _0x5c7699);
        setEntityRot(self_id, _0x783b95, _0x5c7699);
    };
    const 苦至于成立 = _0x51ca53 => {
        const _0x2ea759 = getEntityAttribute(_0x51ca53, 'minecraft:health');
        const _0x5ae327 = getPos(_0x51ca53);
        if (typeof _0x5ae327 != 'object' || !_0x5ae327 || !_0x5ae327['x'] || !_0x5ae327['y'] || !_0x5ae327['z']) return false;
        if (!findEntity(_0x51ca53) && (_0x2ea759['max'] === undefined || _0x2ea759['min'] === undefined || _0x2ea759['current'] === undefined)) return false;
        if (_0x2ea759['current'] > 0x0) return true;
    };
    const 既无伯叔终 = (_0xc1646f, _0xdc1ce2) => {
        if (typeof globalThis[_0xc1646f] === 'undefined' || globalThis[_0xc1646f] === _0xdc1ce2) return;
        globalThis[_0xc1646f] = _0xdc1ce2;
        nx_cfg[_0xc1646f] = _0xdc1ce2;
        if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch.mp3', 0x64, 0x64);
        if (SoundManager && sm_switch) playSound(nx_paths + '/音效/switch_' + (_0xdc1ce2 ? 'on' : 'off') + '.mp3', 0x64, 0x64);
        if (FuncSwitchTip && (!FuncMessage || !_0xc1646f['includes']('_'))) {
            if (modes['tip_mode'] === 0x0) {
                if (_0xdc1ce2) 非臣陨首所(0x0, _0xc1646f, '§oEnable ◆', '§a');
                else 非臣陨首所(0x0, _0xc1646f, '§oDisable ◇', '§c');
            }
            if (modes['tip_mode'] === 0x1) {
                addCustomArrayList(_0xc1646f, _0xc1646f + (_0xdc1ce2 ? ' - Enable' : ' - Disable'), _0xc1646f + (_0xdc1ce2 ? ' - Enable' : ' - Disable'), true);
                setTimeout(() => addCustomArrayList(_0xc1646f, _0xc1646f + (_0xdc1ce2 ? ' - Enable' : ' - Disable'), _0xc1646f + (_0xdc1ce2 ? ' - Enable' : ' - Disable'), false), 0x32 * fst_time);
            }
        }
        if (typeof nx_arraylist[_0xc1646f] !== 'undefined') addCustomArrayList(_0xc1646f, nx_arraylist[_0xc1646f]['CN'], nx_arraylist[_0xc1646f]['EN'], _0xdc1ce2);
        else if (modes['tip_mode'] != 0x1 && ArrayList && !_0xc1646f['includes']('_')) addCustomArrayList(_0xc1646f, _0xc1646f, _0xc1646f, _0xdc1ce2);
        if (typeof nx_binds[_0xc1646f] !== 'undefined') nx_binds[_0xc1646f]['forEach'](_0x5e9885 => 既无伯叔终(_0x5e9885, _0xdc1ce2));
        if (typeof nx_raBinds[_0xc1646f] !== 'undefined' && !nx_raBinds[_0xc1646f]['isNX']) callModule(nx_funcid[nx_raBinds[_0xc1646f]['module']], JSON['stringify']({
            'value': _0xdc1ce2
        }));
    };
    const 鲜兄弟门衰 = (_0xf70c77, _0x5081c6, _0x59c058, _0xed7f15, _0x3e1c8d, _0x35ac9a = false, _0x1470c2 = {}) => {
        for (let _0x271fe8 = 0x0; _0x271fe8 < _0x3e1c8d; _0x271fe8++) addParticle(Number(_0xf70c77), _0x5081c6, _0x59c058, _0xed7f15, _0x35ac9a ? _0x1470c2['x'] : _0x5081c6, _0x35ac9a ? _0x1470c2['y'] : _0x59c058, _0x35ac9a ? _0x1470c2['z'] : _0xed7f15, 0x1, _0x35ac9a);
    };
    const 祚薄晚有儿 = () => {
        const _0xbf3d7 = getEntityCarriedItem(self_id);
        const _0x2137d0 = getPos(self_id);
        if (!_0xbf3d7['includes']('count:0')) buildBlock(self_id, _0x2137d0['x'], _0x2137d0['y'], _0x2137d0['z'], 0x6);
    };
    const 息外无期功 = _0x495742 => {
        const _0x6d8a91 = 曾废离愍(self_id, _0x495742);
        const _0x147f47 = ['helmet', 'chestplate', 'leggings', 'boots'];
        if (_0x495742 > 0x8) 多疾病九岁(_0x495742, 0x8, true, false);
        if (_0x147f47['includes'](_0x6d8a91) && selectPlayerInventorySlot(self_id, _0x495742) && getPlayerSelectItemSlot(self_id) === _0x495742) 祚薄晚有儿();
    };
    const 强近之亲内 = (_0x15dc28, _0x46e19a, _0x206093, _0x2931cc) => {
        let _0x4783ad = _0x46e19a > 0x0;
        _0x46e19a = Math['abs'](_0x46e19a);
        let _0x57cb2e = _0x206093 * Math['cos'](_0x46e19a * Math['PI'] / 0xb4);
        let _0x147a63 = _0x206093 * Math['sin'](_0x46e19a * Math['PI'] / 0xb4);
        let _0x4ace7c = _0x147a63 / _0x2931cc;
        let _0x577a9e = _0x2931cc * (_0x4ace7c * _0x4ace7c) * 0.5;
        let _0x5a462d = _0x57cb2e * _0x4ace7c;
        let _0x44c331 = -_0x577a9e / (_0x5a462d * _0x5a462d);
        return {
            'data': _0x44c331 * Math['pow'](_0x15dc28 - (_0x4783ad ? -_0x5a462d : _0x5a462d), 0x2) + _0x577a9e,
            'bool': _0x4783ad
        };
    };
    const getLocal = _0x567f25 => typeof _0x567f25 === 'undefined' || _0x567f25 === null ? getLocalPlayerUniqueID() : _0x567f25;
    const 无应门五尺 = (_0x34db54, _0x418c3d, _0x105003, _0x21eea2 = false) => {
        const _0x529fe2 = getBlock(_0x34db54, _0x418c3d, _0x105003);
        if (_0x529fe2['id'] !== 0x0) return;
        const _0x4ea412 = [
            [_0x34db54, _0x418c3d + 0x1, _0x105003],
            [_0x34db54, _0x418c3d - 0x1, _0x105003],
            [_0x34db54, _0x418c3d, _0x105003 + 0x1],
            [_0x34db54, _0x418c3d, _0x105003 - 0x1],
            [_0x34db54 + 0x1, _0x418c3d, _0x105003],
            [_0x34db54 - 0x1, _0x418c3d, _0x105003]
        ];
        _0x4ea412['some']((_0x158030, _0x97eb07) => {
            const _0x50da26 = getBlock(_0x158030[0x0], _0x158030[0x1], _0x158030[0x2]);
            if (_0x50da26['namespace'] !== 'minecraft:air') return buildBlock(self_id, _0x158030[0x0], _0x158030[0x1], _0x158030[0x2], _0x97eb07);
        });
    };
    const 立形影相吊 = (_0x41b51a, _0x84b9d4) => {
        const _0x18ad79 = getPos(self_id);
        sendSound(_0x41b51a, _0x18ad79['x'], _0x18ad79['y'], _0x18ad79['z'], _0x84b9d4);
    };
    const 而刘夙婴疾 = (_0x4ce745, _0xebdf21, _0x13ed11) => {
        const _0x240de6 = getPos(self_id);
        motion_list['push']([_0x4ce745 - _0x240de6['x'], _0xebdf21 - _0x240de6['y'], _0x13ed11 - _0x240de6['z']]);
        motion_list['push']([0x0, 0x0, 0x0]);
    };
    const 病常在床蓐 = (_0xd384d7, _0x33f31e) => {
        let _0x2e4796 = _0xd384d7 === -0x1 ? getCarried(self_id) : getInventory(self_id, _0xd384d7);
        if (typeof _0x33f31e !== 'undefined') _0x2e4796['namespace'] = _0x33f31e;
        return Array['from']({
            'length': 0x24
        }, (_0xd14b3e, _0x488c20) => getInventory(self_id, _0x488c20))['filter'](_0x1021b4 => _0x1021b4['namespace'] === _0x2e4796['namespace'] && (typeof _0x33f31e !== 'undefined' || _0x1021b4['aux'] === _0x2e4796['aux']))['reduce']((_0x1f9296, _0x5591b2) => _0x1f9296 + _0x5591b2['count'], 0x0);
    };
    const 臣侍汤药未 = (_0x37a909, _0x219d65, _0x438a2a = 'hotbar', _0x3f445f = 0x0) => {
        const _0x59dee6 = _0x438a2a == 'hotbar' ? 0x9 : 0x24;
        let _0x17d036 = Array['from']({
            'length': _0x59dee6
        }, (_0x3c4184, _0x65daf1) => getInventory(_0x37a909, _0x65daf1));
        let _0x4b0850 = _0x17d036['some'](_0x3230e6 => _0x3230e6['namespace']['includes'](_0x219d65));
        let _0x1bba95 = _0x17d036['reduce']((_0x84dc59, _0x5549a3) => _0x84dc59 + _0x5549a3['count'], 0x0);
        return _0x4b0850 && _0x1bba95 > _0x3f445f;
    };
    const 曾废离愍 = (_0x243dec, _0x125fec, _0x41e329) => {
        let _0x5407db = _0x125fec === -0x1 ? getCarried(_0x243dec) : getInventory(_0x243dec, _0x125fec);
        if (!_0x5407db['namespace']['includes']('_') && typeof _0x41e329 === 'undefined') return 'other';
        let _0x1874a0 = typeof _0x41e329 === 'undefined' ? _0x5407db['namespace']['replace']('minecraft:', '') : _0x41e329['replace']('minecraft:', '');
        const _0x5c6228 = _0x1874a0['split']('_');
        return _0x5c6228[0x1];
    };
    const getEntityMaxDamage = _0xe7054a => Array['from']({
        'length': 0x24
    }, (_0xe5314c, _0x1667a8) => 逮奉圣朝沐(_0xe7054a, _0x1667a8))['reduce']((_0x37415b, _0x2ca745) => Math['max'](_0x37415b, _0x2ca745), 0x0);
    const 一作悯孑立 = (_0x3c11ce, _0xd0ada6, _0x38b173 = false) => {
        let _0x34607f = _0x38b173 ? [0x0, 0x0, 0x0, 0x0] : 0x0;
        const _0x583d9a = ['helmet', 'chestplate', 'leggings', 'boots'];
        for (let _0x154f66 = 0x0; _0x154f66 < 0x24; _0x154f66++) {
            const _0x5d26b0 = 曾废离愍(_0x3c11ce, _0x154f66);
            const _0x469b6d = _0x583d9a['indexOf'](_0x5d26b0);
            if (_0x469b6d === -0x1) continue;
            const _0x365700 = 一作独立(_0x3c11ce, _0x154f66);
            if (!_0x38b173 && _0x5d26b0 === _0xd0ada6 && _0x34607f < _0x365700) _0x34607f = _0x365700;
            if (_0x38b173 && _0x34607f[_0x469b6d] < _0x365700) _0x34607f[_0x469b6d] = _0x365700;
        }
        return _0x34607f;
    };
    const 一作独立 = (_0x25aaf6, _0x337eaf, _0x48c2c7 = true, _0x12c795 = true) => {
        let _0xc59cb5 = _0x337eaf === -0x1 ? getCarried(_0x25aaf6) : getInventory(_0x25aaf6, _0x337eaf);
        if (_0x337eaf < -0x1) _0xc59cb5 = 母志祖母刘(getPlayerArmorItem(_0x25aaf6, Math['abs'](_0x337eaf) - 0x2));
        if (_0xc59cb5['count'] === 0x0 || _0xc59cb5['damage'] === 0x0 || _0xc59cb5['attackDamage'] > 0x0) return 0x0;
        if (!_0x12c795) return _0xc59cb5['damage'];
        let _0x35f6fd = 0x0;
        let _0x479583 = _0xc59cb5['enchants']['findIndex'](_0x18bfa0 => _0x18bfa0['id'] === 0x0);
        if (_0x479583 > -0x1) _0x35f6fd = _0xc59cb5['enchants'][_0x479583]['lvl'];
        if (!_0x48c2c7) return 0x1 + _0x35f6fd / 0x64;
        return _0xc59cb5['damage'] * (0x1 + _0x35f6fd / 0x64);
    };
    const 逮奉圣朝沐 = (_0x3c99aa, _0x115390, _0x4a772e = true, _0x1fe337 = true) => {
        let _0xc2e7d5 = _0x115390 === -0x1 ? getCarried(_0x3c99aa) : getInventory(_0x3c99aa, _0x115390);
        if (_0xc2e7d5['count'] === 0x0 || _0xc2e7d5['attackDamage'] === 0x0 || _0xc2e7d5['attackDamage'] === 0x0) return 0x1;
        if (!_0x1fe337) return _0xc2e7d5['attackDamage'];
        let _0x304510 = 0x0;
        let _0xf94512 = _0xc2e7d5['enchants']['findIndex'](_0x3a0fbe => _0x3a0fbe['id'] === 0x9);
        if (_0xf94512 > -0x1) _0x304510 = _0xc2e7d5['enchants'][_0xf94512]['lvl'] * 1.25;
        if (!_0x4a772e) return _0x304510;
        return _0xc2e7d5['attackDamage'] + _0x304510;
    };
    const b2s = _0x5d6a77 => _0x5d6a77 ? 'true' : 'false';
    const 浴清化前太 = (_0x2ad0c3, _0x507165, _0x71d373) => {
        let _0x27355f = _0x2ad0c3['split'](_0x507165)['length'] - 0x1;
        let _0x279b8f = 0x0;
        let _0x3fa80c = [];
        for (let _0x1c83ce = 0x0; _0x1c83ce < _0x27355f; _0x1c83ce++) {
            let _0x155ca8 = _0x2ad0c3['indexOf'](_0x507165, _0x279b8f) + _0x507165['length'];
            let _0x5a7208 = _0x2ad0c3['indexOf'](_0x71d373, _0x155ca8);
            if (_0x5a7208 === -0x1 || _0x155ca8 === -0x1) break;
            _0x279b8f = _0x5a7208;
            _0x3fa80c['push'](_0x2ad0c3['substring'](_0x155ca8, _0x5a7208));
        }
        return _0x27355f > 0x1 ? _0x3fa80c : _0x3fa80c[0x0];
    };
    const 守臣逵察臣 = (_0x2aed9e, _0x3c3597) => {
        if (ECAttack) 年四岁舅夺(0x5db23ae, '93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0');
        return attackEntity(_0x2aed9e, _0x3c3597);
    };
    const 孝廉后刺史 = (_0x2fa466, _0x41d5f0, _0x5db128, _0x11c18e) => {
        if (typeof _0x5db128 === 'undefined') _0x5db128 = -0x1;
        if (typeof _0x11c18e === 'undefined') _0x11c18e = -0x1;
        let _0x1f4803 = null;
        for (index = 0x0; index < 0x9; index++) {
            const _0x470418 = getInventory(_0x2fa466, index);
            if (!_0x470418['namespace'] || !_0x470418['name']) continue;
            if (_0x470418['namespace']['includes'](_0x41d5f0) && (_0x470418['aux'] === _0x5db128 || _0x5db128 === -0x1) && (_0x470418['name']['includes'](_0x11c18e) || _0x11c18e === -0x1)) {
                _0x1f4803 = index;
                break;
            }
        }
        return _0x1f4803;
    };
    const 臣荣举臣秀 = _0x345005 => {
        const _0x2832fa = getEntityMotion(_0x345005);
        const _0x5f1ba7 = Math['sqrt'](_0x2832fa['x'] * _0x2832fa['x'] + _0x2832fa['y'] * _0x2832fa['y'] + _0x2832fa['z'] * _0x2832fa['z']);
        return _0x5f1ba7 * 0x14;
    };
    const 才臣以供养 = (_0x4622c9, _0x2a840a) => {
        const _0x4070ef = _0x2a840a - _0x4622c9 + 0x1;
        return Math['floor'](Math['random']() * _0x4070ef) + _0x4622c9;
    };
    const 无主辞不赴 = (_0x528858, _0x165e41, _0x15a582) => {
        return {
            'x': _0x165e41['x'] + _0x528858['x'] * _0x15a582,
            'y': _0x165e41['y'] + _0x528858['x'] * _0x15a582,
            'z': _0x165e41['z'] + _0x528858['z'] * _0x15a582
        };
    };
    const 命诏书特下 = _0xaaba2f => {
        if (_0xaaba2f < 0x3c) return _0xaaba2f + 's';
        if (_0xaaba2f >= 0x3c) return Math['floor'](_0xaaba2f / 0x3c) + 'min ' + _0xaaba2f % 0x3c + 's';
    };
    const 拜臣郎中寻 = (_0x21bb2f, _0x3a07ff, _0x231dff, _0x74c075 = 0x0, _0xd33e = 0x0) => {
        if (!_0x231dff) return true;
        _0x21bb2f['y'] += _0x74c075;
        _0x3a07ff['y'] += _0xd33e;
        const _0xeef859 = 不许臣之进(_0x21bb2f, _0x3a07ff, 'yaw_pos');
        const _0x4c322d = -不许臣之进(_0x21bb2f, _0x3a07ff, 'pitch_pos');
        const _0x589804 = getDistance(_0x21bb2f, _0x3a07ff);
        let _0x23ee20 = true;
        for (let _0xe45f43 = 0x0; _0xe45f43 < _0x589804; _0xe45f43 += 0.5) {
            const _0x4f8ae2 = 洗马猥以微(_0xe45f43, _0x3a07ff, {
                'yaw': _0xeef859,
                'pitch': _0x4c322d
            });
            const _0x2b0f7f = getBlock(_0x4f8ae2['x'], _0x4f8ae2['y'], _0x4f8ae2['z']);
            if (_0x2b0f7f['namespace'] != 'minecraft:air') {
                _0x23ee20 = false;
                break;
            }
        }
        return _0x23ee20;
    };
    const 蒙国恩除臣 = (_0x113345, _0x515dc6) => {
        let _0x1f2b7a = getWorldPlayerList()['sort']((_0x17e18d, _0x2031f0) => _0x17e18d['name']['localeCompare'](_0x2031f0['name']));
        let _0x5a70d5 = _0x1f2b7a['length'] > 0x0 ? _0x1f2b7a['map'](_0x1ca5ed => ({
            'text': '§e' + _0x1ca5ed['name'] + '\n§b距离: ' + 能上报臣具(self_id, _0x1ca5ed['id'])['toFixed'](0x2)
        })) : [{
            'text': '没有玩家'
        }];
        let _0x34a36a = {
            'type': 'form',
            'title': '§5选择',
            'content': '§5选择一个目标',
            'buttons': _0x5a70d5
        };
        const _0x10fcac = JSON['stringify'](_0x34a36a);
        addForm(_0x10fcac, function(_0x59b91b) {
            if (_0x1f2b7a['length'] > 0x0 && _0x59b91b >= 0x0) {
                var _0x23fce3 = _0x515dc6 === 0x0 ? _0x1f2b7a[_0x59b91b]['name'] : _0x1f2b7a[_0x59b91b]['id'];
                if (typeof globalThis[_0x113345] === 'object') globalThis[_0x113345]['push'](_0x23fce3);
                if (typeof globalThis[_0x113345] === 'string') globalThis[_0x113345] = _0x23fce3;
                非臣陨首所(0x0, 'addTarget', _0x23fce3, '§r');
            }
        });
    };
    const 洗马猥以微 = (_0xadae75, _0x331cce, _0x2e4f64) => {
        if (_0xadae75 === 0x0) return _0x331cce;
        let _0x4e399c = _0xadae75 < 0x0 ? true : false;
        let {
            yaw,
            pitch
        } = _0x2e4f64;
        if (yaw > 0xb4) yaw = yaw - 0x168;
        if (yaw < -0xb4) yaw = 0x168 + yaw;
        if (pitch < -0x5a) pitch = -0x5a;
        if (pitch > 0x5a) pitch = 0x5a;
        _0xadae75 = Math['abs'](_0xadae75);
        const _0x5d2209 = yaw * Math['PI'] / 0xb4;
        const _0x5f2bde = pitch * Math['PI'] / 0xb4;
        let _0x4cf66f = pitch != 0x0 ? Math['sin'](_0x5f2bde) * _0xadae75 : 0x0;
        let _0x48fe38 = pitch != 0x0 ? _0x4cf66f / Math['tan'](_0x5f2bde) : _0xadae75;
        let _0xc78248 = _0x48fe38 < 0x0;
        _0x48fe38 = Math['abs'](_0x48fe38);
        const _0x1b3360 = Math['cos'](_0x5d2209) * _0x48fe38;
        const _0x51c239 = Math['sin'](_0x5d2209) * _0x48fe38;
        let _0x5a24f0 = -Math['sin'](_0x5d2209) * _0x48fe38;
        let _0x3b85b0 = Math['cos'](_0x5d2209) * _0x48fe38;
        if (_0x4e399c || _0xc78248) {
            _0x5a24f0 = -_0x5a24f0;
            if (!_0xc78248) _0x4cf66f = -_0x4cf66f;
            _0x3b85b0 = -_0x3b85b0;
        }
        return {
            'x': _0x331cce['x'] + _0x5a24f0,
            'y': _0x331cce['y'] - _0x4cf66f,
            'z': _0x331cce['z'] + _0x3b85b0
        };
    };
    const getPlayerItemCount = _0x22d168 => Array['from']({
        'length': 0x24
    }, (_0x48884f, _0x30b2fc) => getInventory(_0x22d168, _0x30b2fc))['filter'](_0x3c0608 => _0x3c0608['count'] !== 0x0)['reduce']((_0x22f49e, _0x34480d) => _0x22f49e + _0x34480d['count'], 0x0);
    const isSimilar = (_0x43ee2d, _0x1f03c9, _0x300063) => Math['abs'](_0x43ee2d - _0x1f03c9) < _0x300063;
    const 贱当侍东宫 = _0x1ec1a3 => {
        let _0x2b8b52 = [];
        if (at_entity) _0x2b8b52['push'](...getEntityList());
        if (at_player) _0x2b8b52['push'](...getPlayerList());
        let _0x19ab6b = Math['min'](at_maxCount, _0x2b8b52['length']);
        let _0x162656 = [];
        for (const _0x24fe2c of _0x2b8b52) {
            if (!苦至于成立(_0x24fe2c)) continue;
            const _0x564238 = getEntityNamespace(_0x24fe2c);
            if (at_typeWhite['length'] > 0x0 && at_typeWhite['some'](_0xc7c45a => _0x564238['includes'](_0xc7c45a)) != at_back) continue;
            const _0x2252c2 = getPos(_0x24fe2c);
            const _0x3611f1 = getDistance(_0x2252c2, getPos(_0x1ec1a3));
            if ((_0x3611f1 > at_maxDist || _0x3611f1 < at_minDist) != at_back && !InfiniteAura && !at_inf) continue;
            const _0x31d065 = getEntityAttribute(_0x24fe2c, 'minecraft:health');
            if (at_heal && (!_0x31d065 || _0x31d065['min'] > _0x31d065['max'] || _0x31d065['max'] > 0x186a0 || _0x31d065['current'] <= 0x0 || _0x31d065['max'] === 0x0) != at_back) continue;
            if (_0x564238 === 'minecraft:player') {
                const _0x3db64b = getEntityRot(_0x24fe2c);
                const _0x589a9f = at_BWM ? getEntityAttribute(_0x24fe2c, 'minecraft:movement') : {
                    'current': 0x0
                };
                const _0x3737c5 = getEntityName(_0x24fe2c);
                if (at_BWM && _0x589a9f['current'] >= 0.5 && !_0x3737c5['includes']('[') && !_0x3737c5['includes']('【')) {
                    if (DeleteDummy) removeEntity(_0x24fe2c);
                    continue;
                }
                if (at_fov && (typeof _0x3db64b['yaw'] === 'undefined' || typeof _0x3db64b['pitch'] === 'undefined' || _0x3db64b['yaw']['toFixed'](0x2) === 0x0 || _0x3db64b['pitch']['toFixed'](0x2) === 0x0) != at_back) continue;
                const _0x232997 = getEntityFlag(_0x24fe2c, 0x5);
                if (at_hide && _0x232997 != at_back) continue;
                const _0x2a9173 = getEntityIsGround(_0x24fe2c);
                if (at_ground && _0x2a9173 === at_back) continue;
                if (at_wall && !拜臣郎中寻(getPos(self_id), _0x2252c2, at_wall, true, 1.53, 0.9) != at_back) continue;
                if (Teams && teams_name && (_0x3737c5['startsWith'](ct_team) || ct_team['includes']('[') && _0x3737c5['includes'](ct_team))) continue;
                if (at_whileLists['includes'](_0x24fe2c) != at_back || !at_name && (_0x3737c5 === getEntityName(_0x1ec1a3) || _0x3737c5 === '') != at_back || (_0x2252c2['y'] > at_maxY || _0x2252c2['y'] < at_minY) != at_back && !at_infY || _0x24fe2c === self_id) continue;
                if (at_regexEnable && at_regex['some'](_0x4c54ab => _0x3737c5['includes'](_0x4c54ab))) continue;
                const _0x14572b = teams_armor ? teams_blur ? getPlayerArmorItem(_0x24fe2c, teams_slot) : 母志祖母刘(getPlayerArmorItem(_0x24fe2c, teams_slot)) : {};
                if (Teams && teams_armor && (teams_blur && _0x14572b != '{}' && _0x14572b === teams_self || !teams_blur && _0x14572b['color'] && _0x14572b['color'] === teams_self['color'])) continue;
                const _0x1ac228 = at_size ? getEntitySize(_0x24fe2c) : {
                    'x': 0x0,
                    'y': 0x0
                };
                if (at_size && !HitBox && ((_0x1ac228['x'] > at_defaultSize['x'] + 0.1 || _0x1ac228['x'] < at_defaultSize['x'] - 0.1) && (_0x1ac228['y'] > 1.66 || _0x1ac228['y'] < 1.64) && (_0x1ac228['y'] < at_defaultSize['y'] || _0x1ac228['y'] > at_defaultSize['y'] + 0.1) && (_0x1ac228['y'] > 1.51 || _0x1ac228['y'] < 1.49)) != at_back) continue;
            }
            const _0x176c15 = modes['at_mode'] === 0x4 ? getPlayerItemCount(_0x24fe2c) : 0x0;
            const _0x155bad = modes['at_mode'] === 0x3 ? 不许臣之进(self_id, _0x24fe2c, 'yaw_rot') : 0x0;
            const _0x34a930 = modes['at_mode'] === 0x3 ? 不许臣之进(self_id, _0x24fe2c, 'pitch_rot') : 0x0;
            const _0x57f6de = modes['at_mode'] === 0x2 ? 逮奉圣朝沐(_0x24fe2c, -0x1) : 0x0;
            _0x162656['push']({
                'distance': _0x3611f1,
                'target': _0x24fe2c,
                'damage': _0x57f6de,
                'heal': _0x31d065['current'],
                'crosshair': Math['sqrt'](_0x155bad * _0x155bad + _0x34a930 * _0x34a930),
                'items': _0x176c15,
                'random': 才臣以供养(0x0, _0x2b8b52['length'] - 0x1)
            });
        }
        const _0x4a5262 = [(_0x41d15b, _0x52149f) => _0x41d15b['distance'] - _0x52149f['distance'], (_0x28fc92, _0x43ca01) => _0x28fc92['heal'] - _0x43ca01['heal'], (_0x397a3b, _0x2b00dd) => _0x397a3b['damage'] - _0x2b00dd['damage'], (_0x15c149, _0xcb9837) => _0x15c149['crosshair'] - _0xcb9837['crosshair'], (_0xdb3147, _0x38c252) => _0x38c252['items'] - _0xdb3147['items'], (_0x5ca33c, _0x59c8bd) => _0x5ca33c['random'] - _0x59c8bd['random']];
        _0x162656['sort'](_0x4a5262[modes['at_mode']]);
        if (at_reverse) _0x162656['reverse']();
        if (at_infCount) return _0x162656['map'](_0x12daec => _0x12daec['target']);
        return _0x162656['slice'](0x0, _0x19ab6b)['map'](_0x518b40 => _0x518b40['target']);
    };
    const 非臣陨首所 = (_0x507a93 = 0x0, _0x311b38 = 'Tip', _0x3b0fd3, _0x1eeaca = '§r') => {
        if (!FuncTip) return false;
        if (_0x507a93 == 0x0) return clientMessage('§b◇ §r§lNoveXare §r§7>>>§r ' + _0x311b38 + ' §7>>>' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1eeaca) + ' ' + _0x3b0fd3);
        if (_0x507a93 == 0x1) {
            if (modes['tipType_mode'] === 0x0) return '§r' + _0x311b38 + ' §7>>> ' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1eeaca) + _0x3b0fd3;
            if (modes['tipType_mode'] >= 0x1) return '' + (RainbowTip ? '§' + rgb_color[rgb_l] : _0x1eeaca) + _0x3b0fd3;
        }
    };
    const getDistance = (_0x32c74c, _0x2f88e8) => Math['sqrt'](Math['pow'](_0x32c74c['x'] - _0x2f88e8['x'], 0x2) + Math['pow'](_0x32c74c['y'] - _0x2f88e8['y'], 0x2) + Math['pow'](_0x32c74c['z'] - _0x2f88e8['z'], 0x2));
    const 能上报臣具 = (_0x1ffff2, _0x360459) => {
        if (!苦至于成立(_0x1ffff2) || !苦至于成立(_0x360459)) return Infinity;
        const _0x18373d = getPos(_0x1ffff2);
        const _0x3b5e9a = getPos(_0x360459);
        return Math['sqrt'](Math['pow'](_0x18373d['x'] - _0x3b5e9a['x'], 0x2) + Math['pow'](_0x18373d['y'] - _0x3b5e9a['y'], 0x2) + Math['pow'](_0x18373d['z'] - _0x3b5e9a['z'], 0x2));
    };
    const 以表闻辞不 = (_0x4a5510, _0x4fc5e5) => {
        if (!苦至于成立(_0x4a5510) || !苦至于成立(_0x4fc5e5)) return Infinity;
        const _0x3eebb4 = getPos(_0x4a5510);
        const _0x3576b6 = getPos(_0x4fc5e5);
        return Math['sqrt'](Math['pow'](_0x3eebb4['x'] - _0x3576b6['x'], 0x2) + Math['pow'](_0x3eebb4['z'] - _0x3576b6['z'], 0x2));
    };
    const 就职诏书切 = (_0x26d853, _0x3ffeae, _0x4492da) => {
        let _0x3e0799 = {
            'fn-set-player-pos': {
                'x': _0x26d853,
                'y': _0x3ffeae,
                'z': _0x4492da
            }
        };
        callModule(0x5, JSON['stringify'](_0x3e0799));
    };
    const getHorizontalDistance = (_0x39087d, _0x49a159) => Math['sqrt'](Math['pow'](_0x39087d['x'] - _0x49a159['x'], 0x2) + Math['pow'](_0x39087d['z'] - _0x49a159['z'], 0x2));
    const setRealPos = (_0x153cb4, _0x4906d8, _0x102971, _0x5573f7) => setEntityPos(_0x153cb4, _0x4906d8, _0x102971 + setPos_offset, _0x5573f7);
    const setPos = (_0x3d2aa6, _0x32e45f, _0x2e024d) => setRealPos(self_id, _0x3d2aa6, _0x32e45f, _0x2e024d);
    const setMotion = (_0x1e97a8, _0x556d19, _0x4424d6) => setEntityMotion(self_id, _0x1e97a8, _0x556d19, _0x4424d6);
    const 峻责臣逋慢 = _0x3da805 => {
        if (_0x3da805 === '') return [];
        return _0x3da805['split'](',');
    };
    const 郡县逼迫催 = _0x1453b5 => {
        if (typeof _0x1453b5 != 'object' || _0x1453b5['length'] === 0x0) return '';
        return _0x1453b5['join'](',');
    };
    const 臣上道州司 = (_0x4ba823, _0x148671) => {
        let _0x351946 = typeof _0x148671 === 'object' ? 郡县逼迫催(_0x148671) : _0x148671;
        let _0x1a4c2a = typeof _0x148671 === 'object' ? 0x0 : 0x1;
        addForm('{"type":"custom_form","title":"编辑变量","content":[{"type":"input","text":"' + _0x4ba823 + '","placeholder":"","default":"' + _0x351946 + '"}]}', function(_0x3935e5) {
            if (_0x1a4c2a === 0x1) globalThis[_0x4ba823] = _0x3935e5;
            if (_0x1a4c2a === 0x0) globalThis[_0x4ba823] = 峻责臣逋慢(_0x3935e5);
            非臣陨首所(0x0, 'setValue', _0x4ba823 + ' §7>>>§r ' + _0x3935e5, '§r');
            nx_cfg[_0x4ba823] = globalThis[_0x4ba823];
        });
    };
    const 临门急于星 = _0x20e10f => {
        if (typeof _0x20e10f != 'string' || _0x20e10f === '') return 'None';
        let _0x5806f2 = _0x20e10f['match'](/\[(.*?)\]/g);
        if (_0x5806f2 === null) return 'None';
        return _0x5806f2[0x0];
    };
    const 火臣欲奉诏 = _0xa0fc43 => {
        if (!File['exist'](_0xa0fc43)) return '{}';
        const _0x4a462c = File['read'](_0xa0fc43);
        return _0x4a462c ? _0x4a462c : '{}';
    };
    const 奔驰则刘病 = _0x3b4d36 => {
        const _0xabcb60 = getPos(_0x3b4d36);
        let _0x5db0eb = _0x3b4d36 === self_id ? Math['floor'](_0xabcb60['y']) - 0x1 : Math['floor'](_0xabcb60['y']);
        return {
            'x': Math['floor'](_0xabcb60['x']),
            'y': _0x5db0eb,
            'z': Math['floor'](_0xabcb60['z'])
        };
    };
    const 日笃欲苟顺 = (_0x323bac, _0x48d92c) => {
        if (_0x323bac['length'] === _0x48d92c['length']) {
            return [];
        }
        const _0x24bdf9 = _0x323bac['length'] >= _0x48d92c['length'] ? _0x323bac : _0x48d92c;
        const _0x257e00 = _0x323bac['length'] < _0x48d92c['length'] ? _0x323bac : _0x48d92c;
        return _0x24bdf9['filter'](_0x2fcaa9 => !_0x257e00['includes'](_0x2fcaa9));
    };
    const 私情则告诉 = (_0x497a25, _0x136a0e) => {
        const _0x46db93 = aa_speed;
        const _0x14e084 = aa_g;
        const _0x5657bf = Math['atan'](Math['floor'](-_0x136a0e) / _0x497a25);
        const _0x346f4a = Math['sqrt'](_0x497a25 * _0x497a25 + _0x136a0e * _0x136a0e);
        const _0x178f86 = Math['atan'](_0x346f4a / _0x46db93 / 0x2 / _0x46db93 * _0x14e084);
        return -((_0x178f86 + _0x5657bf) / Math['PI'] * 0xb4);
    };
    const getFlyTime = (_0x272521, _0x3dc624) => _0x272521 / _0x3dc624;
    const roundAngle = (_0x1bcca5, _0x2b2ef8) => Math['round'](_0x1bcca5 / _0x2b2ef8) * _0x2b2ef8;
    const 不许臣之进 = (_0x438ff, _0xec0f41, _0x501e28, _0x51d36e = false, _0x457703 = false, _0x954b8e = 0x0, _0x2cdaa4 = 0x0) => {
        let _0x129d57 = typeof _0xec0f41 != 'string' ? _0xec0f41 : getPos(_0xec0f41);
        let _0xaf5d29 = typeof _0x438ff != 'string' ? _0x438ff : getPos(_0x438ff);
        let _0x5c9dbb = getEntityRot(_0x438ff);
        if (!_0x129d57 || !_0xaf5d29) return Infinity;
        const _0x34fb91 = getHorizontalDistance(_0xaf5d29, _0x129d57);
        if (_0x51d36e) _0x129d57 = 无主辞不赴(getEntityMotion(_0xec0f41), getPos(_0xec0f41), getFlyTime(_0x34fb91, aa_speed) * 0x14);
        let _0x10a5ca = _0x129d57['x'] - _0xaf5d29['x'];
        let _0x43ff34 = _0xaf5d29['y'] - _0x129d57['y'] + (aa_y - 0x14) / 0xa + 才臣以供养(-_0x2cdaa4, _0x2cdaa4) / 0xa;
        let _0x2677e0 = _0x129d57['z'] - _0xaf5d29['z'];
        let _0x2f236f = Math['atan2'](_0x2677e0, _0x10a5ca) * 0xb4 / Math['PI'];
        const _0x40a127 = 私情则告诉(_0x34fb91, _0x43ff34);
        let _0xb2e078 = _0x457703 ? _0x40a127 : Math['atan2'](_0x43ff34, _0x34fb91) * 0xb4 / Math['PI'];
        if (_0x501e28 === 'yaw_pos') return _0x2f236f > -0xb4 && _0x2f236f <= 0x5a ? _0x2f236f + 0x5a : _0x2f236f - 0x10e;
        if (_0x501e28 === 'yaw_rot') {
            _0x2f236f = _0x2f236f > -0xb4 && _0x2f236f <= 0x5a ? _0x2f236f + 0x5a : _0x2f236f - 0x10e;
            let _0x38c735 = _0x2f236f - _0x5c9dbb['yaw'] + 才臣以供养(-_0x954b8e / 0x2, _0x954b8e / 0x2);
            return _0x38c735 > 0x0 ? -_0x38c735 + 0xb4 : -_0x38c735 - 0xb4;
        }
        if (_0x501e28 === 'pitch_pos') return _0xb2e078;
        if (_0x501e28 === 'pitch_rot') return _0xb2e078 - _0x5c9dbb['pitch'];
    };
    const 退实为狼狈 = (_0x37842e, _0x3ed47c, _0x3f1c0d, _0x484fdf) => {
        let _0x804aa3 = Math['abs'](不许臣之进(_0x37842e, _0x3ed47c, 'yaw_rot'));
        let _0x408698 = Math['abs'](不许臣之进(_0x37842e, _0x3ed47c, 'pitch_rot'));
        if (_0x484fdf === 0x0) return Math['sqrt'](_0x804aa3 * _0x804aa3 + _0x408698 * _0x408698) < _0x3f1c0d;
        if (_0x484fdf === 0x1) return Math['abs'](_0x804aa3) < _0x3f1c0d;
        if (_0x484fdf === 0x2) return Math['abs'](_0x408698) < _0x3f1c0d;
    };
    const 伏惟圣朝以 = _0x11e122 => {
        let _0x5e6ccf = '';
        for (let _0x28540e = 0x0; _0x28540e < _0x11e122['length']; _0x28540e += 0x2) {
            _0x5e6ccf += String['fromCharCode'](parseInt(_0x11e122['substr'](_0x28540e, 0x2), 0x10));
        }
        return _0x5e6ccf;
    };
    const 孝治天下凡 = (_0x473aac, _0x46c992, _0x38274a = 0.5, _0x254916 = false) => {
        let _0x943fd5 = [];
        let _0x3465ca = 不许臣之进(_0x473aac, _0x46c992, 'yaw_pos');
        let _0x2b86e0 = 不许臣之进(_0x473aac, _0x46c992, 'pitch_pos');
        if (getDistance(_0x473aac, _0x46c992) < _0x38274a) return [_0x473aac];
        for (let _0x4d0581 = 0x0; _0x4d0581 <= getDistance(_0x473aac, _0x46c992); _0x4d0581 += _0x38274a) {
            let _0x4b42df = 洗马猥以微(-_0x4d0581, _0x473aac, {
                'yaw': _0x3465ca,
                'pitch': _0x254916 ? -_0x2b86e0 : 0x0
            });
            if (getBlock(_0x4b42df['x'], _0x4b42df['y'], _0x4b42df['z'])['namespace'] === 'minecraft:air') _0x943fd5['push']({
                'x': _0x4b42df['x'],
                'y': _0x4b42df['y'],
                'z': _0x4b42df['z']
            });
        }
        return _0x943fd5;
    };
    const 在故老犹蒙 = (_0x1f0326, _0x3b5065) => {
        if (!苦至于成立(_0x1f0326)) return '';
        let _0x3c2867 = getEntityAttribute(_0x1f0326, 'minecraft:health');
        let _0x92bd77 = _0x3c2867['current'];
        let _0x155b43 = _0x3c2867['max'];
        const _0x12d8ab = _0x92bd77 / _0x155b43;
        switch (_0x3b5065) {
            case 0x0:
                return _0x12d8ab['toFixed'](0x2) * 0x64 + '%%';
            case 0x1:
                let _0x4bb0ae = '§c';
                for (let _0xee4406 = 0x0; _0xee4406 < Math['floor'](_0x12d8ab * 0x14); _0xee4406++) _0x4bb0ae += '❤';
                return _0x4bb0ae + '§r';
            case 0x2:
                return '§c❤§rx' + Math['floor'](_0x92bd77);
            case 0x3:
                return Math['floor'](_0x92bd77) + '/' + Math['floor'](_0x155b43);
            case 0x4:
                return getProgress(_0x92bd77, _0x155b43, '▌', 0x14);
            default:
                return _0x92bd77;
        }
    };
    const 矜育况臣孤 = _0x2a7d97 => {
        let _0x3de25e = '';
        let _0x4ca498 = '.,?!@":;+-*/=~|_\\^`&#%$·' ['split']('');
        for (let _0x4b8339 = 0x0; _0x4b8339 < _0x2a7d97; _0x4b8339++) {
            let _0x242182 = 才臣以供养(0x0, _0x4ca498['length'] - 0x1);
            _0x3de25e += _0x4ca498[_0x242182];
        }
        return _0x3de25e;
    };

    function getProgress(_0x2284f0, _0x354917, _0x3236e5 = '▌', _0x4a3894 = 0x28) {
        let _0x402e4c = Math['min'](_0x2284f0 / _0x354917, 0x1);
        const _0x286a40 = '4c6e2a3b195d591b3a2e6c4' ['split']('');
        let _0x489181 = _0x286a40[Math['min'](Math['floor'](_0x402e4c * _0x286a40['length']), _0x286a40['length'] - 0x1)];
        let _0x51b313 = _0x3236e5['repeat'](_0x4a3894)['split']('');
        let _0x2e9144 = Math['min'](Math['floor'](_0x402e4c * _0x51b313['length']), _0x51b313['length']);
        _0x51b313[Math['min'](_0x2e9144, _0x51b313['length'] - 0x1)] = _0x3236e5 + '§r§o§l';
        return '§r[§o§l§' + _0x489181 + _0x51b313['join']('') + '§r]';
    }
    const 苦特为尤甚 = _0x1315f6 => {
        for (let _0x25dc09 = Math['ceil'](-cd_size / 0x2); _0x25dc09 < Math['floor'](cd_size / 0x2 + 0x1); _0x25dc09++) {
            for (let _0x42b080 = Math['ceil'](-cd_size / 0x2); _0x42b080 < Math['floor'](cd_size / 0x2 + 0x1); _0x42b080++) {
                for (let _0x5105f3 = Math['ceil'](-cd_size / 0x2); _0x5105f3 < Math['floor'](cd_size / 0x2 + 0x1); _0x5105f3++) {
                    const {
                        x,
                        y,
                        z
                    } = _0x1315f6;
                    const _0x3e0b57 = getBlock(x + _0x25dc09, y + _0x42b080, z + _0x5105f3);
                    if (_0x3e0b57['namespace'] === 'minecraft:air') continue;
                    if (cd_exclude && _0x1315f6['y'] + _0x42b080 <= _0x1315f6['y'] - 0x1) continue;
                    if (cd_fake) setBlock(x + _0x25dc09, y + _0x42b080, z + _0x5105f3, 'air', 0x0);
                    if (!cd_fake) destroyBlock(self_id, _0x1315f6['x'] + _0x25dc09, _0x1315f6['y'] + _0x42b080, _0x1315f6['z'] + _0x5105f3, 0x0);
                    if (cd_packet) 亲抚养臣少(_0x1315f6['x'] + _0x25dc09, _0x1315f6['y'] + _0x42b080, _0x1315f6['z'] + _0x5105f3, true, true);
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
            for (let _0x45ff22 = 0x0; _0x45ff22 < ia_move; _0x45ff22++) {
                if (modes['ia_mode'] === 0x0) setPos(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x1) silentMove(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
                if (modes['ia_mode'] === 0x2) movePlayer(InfiniteAura_backPos['x'], InfiniteAura_backPos['y'], InfiniteAura_backPos['z']);
            }
            setMotion(InfiniteAura_backMot['x'], InfiniteAura_backMot['y'], InfiniteAura_backMot['z']);
        }
        InfiniteAura_backMot = null;
        InfiniteAura_backPos = null;
    };
    const 朝历职郎署 = _0x37a539 => {
        let _0x50b4c5 = '';
        let _0x505357 = _0x37a539['split']('');
        for (let _0x473df3 in _0x505357) {
            let _0x519609 = _0x505357[_0x473df3]['toUpperCase']();
            if (_0x473df3 != _0x505357['length'] - 0x1) {
                if (_0x473df3 % 0x2 === 0x1) _0x50b4c5 += _0x519609 + ' ';
                else _0x50b4c5 += _0x519609;
            } else _0x50b4c5 += _0x519609;
        }
        if (rpc_remark) {
            let _0x4b598e = _0x50b4c5['split'](' ');
            let _0x1e04f7 = '';
            for (let _0x5e4096 in _0x4b598e) _0x1e04f7 += _0x4b598e[_0x5e4096] + '(' + 伏惟圣朝以(_0x4b598e[_0x5e4096]) + ') ';
            return _0x1e04f7;
        } else return _0x50b4c5;
    };
    const 本图宦达不 = (_0x5627fb, _0x3dd7ae, _0x4f147f = false) => {
        setEntityTarget(_0x5627fb, _0x3dd7ae);
        if (_0x4f147f) setEntityTarget(_0x3dd7ae, _0x5627fb);
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
    var nx_arraylist = JSON['parse'](火臣欲奉诏(nx_paths + '/FuncArrayList.json'));
    var nx_funcid = JSON['parse'](火臣欲奉诏(nx_paths + '/RunAwayFunc.json'));
    var nx_keys = [];
    var nx_cfgs = getResource() + '/GBRC/NoveXare/配置';
    var nx_ui = JSON['parse'](火臣欲奉诏(getResource() + '/ui/ui_definition.json'));
    var nx_blocks = 火臣欲奉诏(getResource() + '/GBRC/NoveXare/blocks.json');
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
    } = JSON['parse'](火臣欲奉诏(nx_paths + '/Cleaner.json'));
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
    var rpc_config = JSON['parse'](火臣欲奉诏(getResource() + '/GBRC/NoveXare/PyRpc_Config.json'));
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
            let _0x4fb45a = [];
            self_id = getLocal(otherId);
            self_pos = getPos(self_id);
            prev_pos = getEntityPosPrev(self_id);
            teams_self = 母志祖母刘(getPlayerArmorItem(self_id, teams_slot));
            let _0x1c3588 = getEntityAttribute(self_id, 'minecraft:health');
            let _0x3bddca = getEntityMotion(self_id);
            self_moving = getEntityFlag(self_id, 0x22) || typeof rc_angles['angle'] !== 'undefined';
            if (FastStop && !self_moving) setMotion(0x0, _0x3bddca['y'], 0x0);
            let _0x15549d = getCameraRotation();
            let _0x3f20ba = {
                'yaw': _0x15549d['yaw'] > 0x0 ? 0xb4 - _0x15549d['yaw'] : -0xb4 - _0x15549d['yaw'],
                'pitch': -_0x15549d['pitch']
            };
            let _0xa9f2b8 = getDistance(self_pos, prev_pos) / 0.05;
            let _0xcda338 = getHorizontalDistance(self_pos, prev_pos) / 0.05;
            let _0x366358 = 臣荣举臣秀(self_id);
            let _0x13a789 = 奔驰则刘病(self_id);
            let _0x14da34 = getWorldPlayerList();
            let _0x50b75f = getEntityIsGround(self_id);
            let _0x25a7ce = getScreenName();
            if (ticks % getSelf == 0x0) {
                if (getDelay) {
                    gd_ping1 = Date['now']();
                    curl_get('https://www.baidu.com', {}, (_0x4ea07d, _0x18350a) => globalThis['gd_ping2'] = Date['now']());
                    gd_ping = Math['abs'](gd_ping2 - gd_ping1);
                }
            }
            self_item = getCarried(self_id);
            if (_0x1c3588['current'] - prev_heal > 0x8) {
                if (DeathInfo) 非臣陨首所(0x0, 'Tip', 'You are Dead - DeathPos: ' + Math['round'](death_pos['x']) + ', ' + Math['round'](death_pos['y']) + ', ' + Math['round'](death_pos['z']), '§r');
                if (LocalRespawn) setTimeout(() => {
                    departCamera();
                    setTimeout(() => setPos(death_pos['x'] + 才臣以供养(-lr_random + 0x1, lr_random - 0x1), death_pos['y'], death_pos['z'] + 才臣以供养(-lr_random + 0x1, lr_random - 0x1)), 0x64);
                    setTimeout(() => resetCamera(), 0xc8);
                }, 0x32 * lr_delay);
                if (DeadCross) dc_pos['push'](death_pos);
            } else if (_0x1c3588['current'] < prev_heal) death_pos = self_pos;
            if (ShowScreenHud) 非臣陨首所(0x0, 'Tip', '当前所处屏幕: ' + getScreenName(), '§r');
            if (DeadCross) dc_pos['forEach'](_0x30836f => {
                sendShadow(_0x30836f['x'], _0x30836f['y'], _0x30836f['z']);
                sendShadow(_0x30836f['x'], _0x30836f['y'] + 0x1, _0x30836f['z']);
                sendShadow(_0x30836f['x'], _0x30836f['y'] + 0x2, _0x30836f['z']);
                sendShadow(_0x30836f['x'] + 0x1, _0x30836f['y'] + 0x2, _0x30836f['z']);
                sendShadow(_0x30836f['x'] - 0x1, _0x30836f['y'] + 0x2, _0x30836f['z']);
                sendShadow(_0x30836f['x'], _0x30836f['y'] + 0x3, _0x30836f['z']);
            });
            if (AdminShow) {
                let _0x4f9338 = _0x14da34['filter'](_0x47cc95 => _0x47cc95['permissionLevel'] === as_level || _0x47cc95['commandPermissionLevel'] === as_level);
                if (_0x4f9338['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Admin', '服务器管理员: ' + 郡县逼迫催(_0x4f9338['map'](_0x5b0099 => _0x5b0099['name'])), '§r'));
                let _0x2efd09 = _0x4f9338['filter'](_0x231fa2 => 能上报臣具(_0x231fa2['id'], self_id) < as_range);
                if (_0x2efd09['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Warn', '附近' + as_range + '格管理员: ' + 郡县逼迫催(_0x2efd09['map'](_0x5b1ca7 => _0x5b1ca7['name'])), '§r'));
            }
            if (AutoTarget && (!at_lock || !findEntity(at_lists[0x0])) && ticks % at_delay == 0x0) at_lists = 贱当侍东宫(self_id);
            if (NoHider) {
                const _0x5af7cd = getPlayerList();
                _0x5af7cd['forEach'](_0x524b29 => {
                    if (_0x524b29 != self_id) {
                        removeEntityEffect(_0x524b29, 0xe);
                        setEntityFlag(_0x524b29, 0x5, false);
                        if (nh_exclude && at_lists['includes'](_0x524b29)) at_lists['splice'](at_lists['indexOf'](_0x524b29), 0x1);
                    }
                });
            }
            if (BJDEscape && getBlock(_0x13a789['x'], _0x13a789['y'] - 0x1, _0x13a789['z'])['namespace'] === 'minecraft:glass' && _0x50b75f) setPos(self_pos['x'], self_pos['y'] - 0x6, self_pos['z']);
            if (AutoSwing) swingArm();
            if (AutoCamera) {
                if (getPlayerViewPerspective() === 0x0) resetCamera();
                else departCamera();
            }
            if (Criticals && !cc_status && _0x3bddca['y'] < 0x0) {
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
                const _0x4803b8 = rt_target ? getPos(at_lists[0x0]) : self_pos;
                if (_0x4803b8) setPos(_0x4803b8['x'] + 才臣以供养(-rt_range, rt_range), _0x4803b8['y'] + (rt_y ? 才臣以供养(-rt_range, rt_range) : 0x0), _0x4803b8['z'] + 才臣以供养(-rt_range, rt_range));
            }
            if (NoWall) setEntityFlag(self_id, 0x30, false);
            if (AutoClicker && ac_t_1 - ac_t_2 >= 0x0) {
                let _0x3bb85c = 才臣以供养(ac_min, ac_max);
                let _0xdd2b4b = Math['round'](0x3e8 / _0x3bb85c);
                const _0x516d0e = at_lists['length'] > 0x0 ? 退实为狼狈(self_id, at_lists[0x0], ac_fov, 0x0) || !ac_aimed : !ac_aimed;
                for (let _0x1bb6bd = 0x0; _0x1bb6bd < ac_times; _0x1bb6bd++) {
                    if (!_0x516d0e) break;
                    if (ac_click) simulateClick();
                    if (ac_use) 祚薄晚有儿();
                }
                ac_t_2 = ac_t_1 + _0xdd2b4b;
            }
            ac_t_1 = Date['now']();
            if (FakeMotion && ticks % fm_cycle === 0x0 && fm_item) {
                const _0x150315 = getEntityList()['forEach'](_0x2006b7 => {
                    if (getEntityNamespace(_0x2006b7) != 'minecraft:item' || !findEntity(_0x2006b7) || 能上报臣具(_0x2006b7, self_id) > fm_range && fm_range != -0x1) return;
                    const _0x345830 = getPos(_0x2006b7);
                    silentMove(_0x345830['x'], _0x345830['y'], _0x345830['z']);
                });
            } else if (FakeMotion && ticks % fm_cycle === 0x0 && fm_pos && !fm_item) sendPlayerAuthInput({
                'pos': fm_pos,
                'rot': _0x3f20ba,
                'inputMode': 0x2,
                'playMode': 0x0,
                'yHeadRot': _0x3f20ba['yaw']
            });
            if (CustomItem) {
                const _0x44a9ea = getEntityCarriedItem(self_id);
                if (modes['custom_mode'] < 0x4) setPlayerArmorItem(self_id, modes['custom_mode'], _0x44a9ea);
                else if (modes['custom_mode'] === 0x4) setEntityOffhandItem(self_id, _0x44a9ea);
                else if (modes['custom_mode'] === 0x5) setPlayerInventoryItem(self_id, ci_slot, _0x44a9ea);
            }
            if (ShadowBoomer && ticks % sb_tick == 0x0) {
                let _0x5ac77a = [];
                if (modes['sb_mode'] == 0x0) _0x5ac77a = getPlayerList();
                if (modes['sb_mode'] == 0x1) _0x5ac77a = at_lists;
                if (modes['sb_mode'] == 0x2) _0x5ac77a = ['lock_pos'];
                _0x5ac77a['forEach'](_0x4f16bf => {
                    if (sb_exclude && _0x4f16bf == self_id) return;
                    let _0x83aaf4 = null;
                    if (_0x4f16bf == 'lock_pos') _0x83aaf4 = sb_pos;
                    else _0x83aaf4 = 奔驰则刘病(_0x4f16bf);
                    if (!_0x83aaf4) return;
                    let _0x129590 = getEntityRot(_0x4f16bf);
                    if (modes['sb_mode'] < 0x2) {
                        _0x83aaf4 = 洗马猥以微(sb_offset, _0x83aaf4, _0x129590);
                        _0x83aaf4['y'] += sb_ud;
                    }
                    if (sb_custom) {
                        const _0x473fd8 = JSON['parse'](火臣欲奉诏(nx_paths + '/Shadow.json'));
                        _0x473fd8['forEach'](_0x2b77a7 => {
                            let _0x4329ff = Math['sqrt'](_0x2b77a7['x'] * _0x2b77a7['x'] + _0x2b77a7['y'] * _0x2b77a7['y'] + _0x2b77a7['z'] * _0x2b77a7['z']);
                            let _0x1ddf10 = 不许臣之进({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x2b77a7, 'yaw_pos');
                            let _0x265726 = 不许臣之进({
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, _0x2b77a7, 'pitch_pos');
                            let _0x47f198 = 洗马猥以微(_0x4329ff, {
                                'x': 0x0,
                                'y': 0x0,
                                'z': 0x0
                            }, {
                                'pitch': _0x265726,
                                'yaw': _0x1ddf10 + sb_rc_yaw
                            });
                            sendShadow(_0x83aaf4['x'] + _0x47f198['x'], _0x83aaf4['y'] + _0x47f198['y'], _0x83aaf4['z'] + _0x47f198['z']);
                        });
                    } else {
                        for (let _0x387e21 = Math['ceil'](-sb_length / 0x2); _0x387e21 < Math['floor'](sb_length / 0x2 + 0x1); _0x387e21++) {
                            for (let _0xcb274 = Math['ceil'](-sb_length / 0x2); _0xcb274 < Math['floor'](sb_length / 0x2 + 0x1); _0xcb274++) {
                                for (let _0x2d64d3 = Math['ceil'](-sb_length / 0x2); _0x2d64d3 < Math['floor'](sb_length / 0x2 + 0x1); _0x2d64d3++) {
                                    sendShadow(_0x83aaf4['x'] + _0x387e21, _0x83aaf4['y'] + _0xcb274 + 0x2, _0x83aaf4['z'] + _0x2d64d3);
                                }
                            }
                        }
                    }
                });
            }
            if (sb_rc_yaw < 0xb4) sb_rc_yaw += sb_rot;
            else sb_rc_yaw = -0xb4;
            if (SmallMap) {
                let _0x1bb8cc = [
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
                let _0x24fd43 = [];
                if (sm_player) _0x24fd43['push'](...getPlayerList());
                if (sm_entity) _0x24fd43['push'](...getEntityList());
                if (sm_target) _0x24fd43['push'](...at_lists);
                _0x24fd43['forEach'](_0x45bc6a => {
                    let _0x1f46d4 = 不许臣之进(self_id, _0x45bc6a, 'yaw_rot');
                    let _0xf8d30d = 能上报臣具(self_id, _0x45bc6a);
                    let _0x29b8e6 = Math['floor'](_0xf8d30d / sm_size * sm_proportion * -Math['sin'](_0x1f46d4 * Math['PI'] / 0xb4) * 0xa);
                    let _0x20f9d7 = Math['floor'](_0xf8d30d / sm_size * sm_proportion * -Math['cos'](_0x1f46d4 * Math['PI'] / 0xb4) * 0xa);
                    if (_0x29b8e6 > 0x5) _0x29b8e6 = 0x5;
                    if (_0x20f9d7 > 0x5) _0x20f9d7 = 0x5;
                    if (_0x29b8e6 < -0x5) _0x29b8e6 = -0x5;
                    if (_0x20f9d7 < -0x5) _0x20f9d7 = -0x5;
                    _0x1bb8cc[_0x20f9d7 + 0x5][_0x29b8e6 + 0x5] = ' §e◆§r ';
                });
                let _0x444e85 = _0x1bb8cc['map'](_0x595159 => _0x595159['join'](''))['join']('\n');
                _0x4fb45a['push'](非臣陨首所(0x1, 'Map', '\n' + _0x444e85, '§r'));
            }
            if (ShirokoAura) {
                for (let _0x15720b = 0x0; _0x15720b < 0x168; _0x15720b += sa_density) {
                    const _0x1c24f2 = sa_inner * Math['cos'](_0x15720b * Math['PI'] / 0xb4);
                    const _0x3873fd = sa_inner * Math['sin'](_0x15720b * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x1a, self_pos['x'] + _0x1c24f2, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x3873fd, 0x1);
                    const _0x2a9165 = sa_outer * Math['cos'](_0x15720b * Math['PI'] / 0xb4);
                    const _0x138bd0 = sa_outer * Math['sin'](_0x15720b * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x1a, self_pos['x'] + _0x2a9165, self_pos['y'] + sa_offset / 0xa, self_pos['z'] + _0x138bd0, 0x1);
                }
                for (let _0x29f97c = 0x0; _0x29f97c < sa_length; _0x29f97c += sa_density / 0xa) {
                    let _0x381123 = 洗马猥以微(_0x29f97c + sa_outer, self_pos, {
                        'yaw': _0x3f20ba['yaw'],
                        'pitch': 0x0
                    });
                    let _0x59eebc = 洗马猥以微(_0x29f97c + sa_outer, self_pos, {
                        'yaw': 0x5a + _0x3f20ba['yaw'],
                        'pitch': 0x0
                    });
                    let _0xacc51e = 洗马猥以微(_0x29f97c + sa_outer, self_pos, {
                        'yaw': -0x5a + _0x3f20ba['yaw'],
                        'pitch': 0x0
                    });
                    let _0x509fab = 洗马猥以微(_0x29f97c + sa_outer, self_pos, {
                        'yaw': _0x3f20ba['yaw'] + 0xb4,
                        'pitch': 0x0
                    });
                    鲜兄弟门衰(0x1a, _0x381123['x'], self_pos['y'] + sa_offset / 0xa, _0x381123['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0x509fab['x'], self_pos['y'] + sa_offset / 0xa, _0x509fab['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0x59eebc['x'], self_pos['y'] + sa_offset / 0xa, _0x59eebc['z'], 0x1);
                    鲜兄弟门衰(0x1a, _0xacc51e['x'], self_pos['y'] + sa_offset / 0xa, _0xacc51e['z'], 0x1);
                }
            }
            if (TestModule) {
                selectPlayerInventorySlot(self_id, 0x0);
                selectPlayerInventorySlot(self_id, 0x8);
            }
            if (CameraManager) {
                if (cm_roll > 0x0) setCameraRotation(0x5a, 0x0, cm_roll);
                if (cm_id === self_id) setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                else {
                    const _0x13f234 = getPos(cm_id);
                    const _0x1cbd4b = getEntitySize(cm_id);
                    setCameraAnchor(_0x13f234['x'] - self_pos['x'], _0x13f234['y'] - self_pos['y'] + 0.85 * _0x1cbd4b['y'], -_0x13f234['z'] + self_pos['z']);
                }
                if (cm_attack != null) {
                    const _0x31efde = getPos(cm_attack);
                    const _0x214552 = getEntitySize(cm_attack);
                    if (_0x31efde && _0x214552) setCameraAnchor(_0x31efde['x'] - self_pos['x'], _0x31efde['y'] - self_pos['y'] + 0.85 * _0x214552['y'], -_0x31efde['z'] + self_pos['z']);
                } else if (cm_actioncamera) setCameraAnchor(-_0x3bddca['x'] * cm_moverange, -_0x3bddca['y'] * cm_moverange, _0x3bddca['z'] * cm_moverange);
                else setCameraAnchor(0x0, (cm_anchor_y - 0xf) / 0x5, 0x0);
                setCameraOffset(cm_x / 0x3, cm_y / 0x3, cm_z / 0x3);
                setCameraPitchLimit(-cm_pitch, cm_pitch);
                if (!cm_unlock) cm_pos = self_pos;
                if (cm_unlock) setCameraAnchor(cm_pos['x'] - self_pos['x'], cm_pos['y'] - self_pos['y'], -cm_pos['z'] + self_pos['z']);
            }
            if (_0x1c3588['current'] < prev_heal) prev_heal = _0x1c3588['current'];
            if (NoDebuff) debuff['forEach'](_0x20bee4 => removeEntityEffect(self_id, _0x20bee4));
            if (MoveJump && self_moving && _0x50b75f) playerJump();
            if (ChunkRender) {
                let _0x394a2e = {
                    'x': Math['floor'](self_pos['x'] / 0x10),
                    'z': Math['floor'](self_pos['z'] / 0x10)
                };
                let _0x367711 = {
                    'x': _0x394a2e['x'] * 0x10,
                    'z': _0x394a2e['z'] * 0x10
                };
                let _0x42c6b8 = {
                    'x': (_0x394a2e['x'] + 0x1) * 0x10,
                    'z': (_0x394a2e['z'] + 0x1) * 0x10
                };
                for (let _0x4c605a = 0x0; _0x4c605a < 0x10; _0x4c605a++) {
                    鲜兄弟门衰(0x37, _0x367711['x'] + _0x4c605a, self_pos['y'], _0x367711['z'], 0x1);
                    鲜兄弟门衰(0x37, _0x367711['x'], self_pos['y'], _0x367711['z'] + _0x4c605a, 0x1);
                    鲜兄弟门衰(0x37, _0x42c6b8['x'] - _0x4c605a, self_pos['y'], _0x42c6b8['z'], 0x1);
                    鲜兄弟门衰(0x37, _0x42c6b8['x'], self_pos['y'], _0x42c6b8['z'] - _0x4c605a, 0x1);
                }
                _0x4fb45a['push'](非臣陨首所(0x1, 'Chunk', '区块坐标: ' + _0x394a2e['x'] + '， ' + _0x394a2e['z'], '§r'));
            }
            if (AutoGG) {
                for (let _0x232f02 of gg_list) {
                    if (modes['gg_mode'] === 0x0) dropPlayerInventorySlot(self_id, 孝廉后刺史(self_id, _0x232f02, -0x1, '一局'), false, true);
                    if (modes['gg_mode'] === 0x1) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, _0x232f02, -0x1, '一局'));
                        const _0x224a00 = getCarried(self_id);
                        if (_0x224a00['name']['includes']('一局')) 祚薄晚有儿();
                    }
                }
            }
            if (nx_goal != null) {
                const _0x1ed77a = getHorizontalDistance(self_pos, nx_goal);
                const _0x46484c = getDistance(self_pos, nx_goal);
                if (_0x46484c >= 0x5) {
                    let _0x5c1189 = 不许臣之进(self_id, nx_goal, 'yaw_pos');
                    let _0x1e5c1c = 洗马猥以微(-nx_goalSpeed / 0xa, self_pos, {
                        'yaw': _0x5c1189,
                        'pitch': 0x0
                    });
                    if (_0x1ed77a >= 0x3) setMotion(_0x1e5c1c['x'] - self_pos['x'], _0x3bddca['y'], _0x1e5c1c['z'] - self_pos['z']);
                    else setMotion(_0x3bddca['x'], (_0x1e5c1c['y'] - self_pos['y'] > 0x0 ? nx_goalSpeed : -nx_goalSpeed) / 0xa, _0x3bddca['z']);
                } else {
                    nx_goal = null;
                    非臣陨首所(0x0, 'Tip', '已到达设置目的地', '§r');
                }
            }
            if (RandomArrayList) {
                for (let _0x21dfcd = 0x0; _0x21dfcd < ral_num; _0x21dfcd++) {
                    const _0x5a84c4 = 矜育况臣孤(ral_length);
                    addCustomArrayList('RandomArrayList' + _0x21dfcd, _0x5a84c4, _0x5a84c4, true);
                }
            }
            if (ChestAura) {
                let _0x526517 = 奔驰则刘病(self_id);
                let _0x54118 = ca_range;
                for (let _0x27bdd0 = -_0x54118; _0x27bdd0 < _0x54118; _0x27bdd0++) {
                    for (let _0x304f41 = -_0x54118; _0x304f41 < _0x54118; _0x304f41++) {
                        for (let _0x594f4a = -_0x54118; _0x594f4a < _0x54118; _0x594f4a++) {
                            if (ca_check && _0x25a7ce['includes']('chest_screen') && chestStates['packet'] && chestStates['click']) {
                                chestStates['click'] = false;
                                chestStates['packet'] = false;
                            }
                            const _0x1a1d1b = getBlock(_0x526517['x'] + _0x27bdd0, _0x526517['y'] + _0x304f41, _0x526517['z'] + _0x594f4a);
                            if (_0x1a1d1b['namespace'] != 'minecraft:chest') continue;
                            const _0x3e7630 = getBlock(_0x526517['x'] + _0x27bdd0, _0x526517['y'] + _0x304f41 + 0x1, _0x526517['z'] + _0x594f4a);
                            const _0x2e067d = {
                                'x': _0x526517['x'] + _0x27bdd0,
                                'y': _0x526517['y'] + _0x304f41,
                                'z': _0x526517['z'] + _0x594f4a
                            };
                            if (ca_chest_pos['includes'](JSON['stringify'](_0x2e067d)) && ca_exclude || !拜臣郎中寻(_0x526517, _0x2e067d, ca_wall, 1.53, 0.5) || ca_block && _0x3e7630['namespace'] != 'minecraft:air' || !退实为狼狈(self_id, _0x2e067d, ca_fov, 0x0) || _0x25a7ce['includes']('chest_screen')) break;
                            buildBlock(self_id, _0x526517['x'] + _0x27bdd0, _0x526517['y'] + _0x304f41, _0x526517['z'] + _0x594f4a, 0x1);
                            if (!ca_check || chestStates['packet'] && chestStates['click']) ca_chest_pos['push'](JSON['stringify'](_0x2e067d));
                        }
                    }
                }
            }
            if (AntiStaff) {
                _0x14da34['forEach'](_0x520d43 => {
                    const {
                        name,
                        id
                    } = _0x520d43;
                    if (id === self_id || name === '') return;
                    let _0x135933 = null;
                    if (modes['as_mode'] === 0x0 && (!name['includes']('§') || !name['includes']('[') || !name['includes'](']')) && !name['includes']('锭') && !name === '村民') _0x135933 = id;
                    if (modes['as_mode'] === 0x1 && (name['includes']('管') && name['includes']('理') && name['includes']('员') || name['includes']('管理员'))) _0x135933 = id;
                    if (modes['as_mode'] === 0x2) {
                        as_config['forEach'](_0x4443a6 => {
                            if (_0x4443a6['match_mode'] === '精准' && _0x4443a6['has_mode'] === '存在' && _0x4443a6['texts']['some'](_0x477591 => name === _0x477591) != _0x4443a6['reverse_selection']) _0x135933 = id;
                            if (_0x4443a6['match_mode'] === '精准' && _0x4443a6['has_mode'] === '同时' && _0x4443a6['texts']['every'](_0x558741 => name === _0x558741) != _0x4443a6['reverse_selection']) _0x135933 = id;
                            if (_0x4443a6['match_mode'] === '模糊' && _0x4443a6['has_mode'] === '存在' && _0x4443a6['texts']['some'](_0x3c40d7 => name['includes'](_0x3c40d7)) != _0x4443a6['reverse_selection']) _0x135933 = id;
                            if (_0x4443a6['match_mode'] === '精准' && _0x4443a6['has_mode'] === '存在' && _0x4443a6['texts']['every'](_0x4687f9 => name['includes'](_0x4687f9)) != _0x4443a6['reverse_selection']) _0x135933 = id;
                        });
                    }
                    if (modes['as_mode'] === 0x3) _0x135933 = id;
                    if (as_hide && !getEntityFlag(id, 0x5)) _0x135933 = null;
                    if (as_ground && getEntityIsGround(id)) _0x135933 = null;
                    if (_0x135933 === null) return;
                    if (modes['anti_mode'] === 0x0) 非臣陨首所(0x0, 'Tip', '可能存在协管: ' + name, '§r');
                    else if (modes['anti_mode'] === 0x1) executeCommand('/hub');
                    else if (modes['anti_mode'] === 0x2) executeCommand('/again');
                    else if (modes['anti_mode'] === 0x3) _0x4fb45a['push'](非臣陨首所(0x1, 'Staff', '可能存在协管: ' + name, '§r'));
                    else if (modes['anti_mode'] === 0x4) leaveWorld();
                });
            }
            if (InteractAura) at_lists['forEach'](_0x5274a4 => interactEntity(_0x5274a4));
            if (InfinityExp) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.level', {
                'current': 0x7fff
            });
            if (NoHunger) setEntityAttribute(getLocalPlayerUniqueID(), 'minecraft:player.hunger', {
                'current': 0x14
            });
            if (cm_transfer && cm_attack != null && ticks % (cm_ts_delay * 0x14) === 0x0) cm_attack = null;
            if (LockPerson) setPlayerViewPerspective(modes['person_mode']);
            if (ShowVariable) {
                if (sv_player && last_world_player['length'] != _0x14da34['length']) {
                    非臣陨首所(0x0, 'Tip', '玩家数量发生变化 ' + last_world_player['length'] + ' => ' + _0x14da34['length'], '§r');
                    last_world_player = _0x14da34;
                }
                if (sv_id && self_id != prev_id) 非臣陨首所(0x0, 'Tip', '玩家本地ID发生变化 ' + prev_id + ' => ' + self_id, '§r');
            }
            if (CheckAxe && ticks % ca_delay === 0x1) {
                let _0xb2e0e9 = [];
                _0x14da34['forEach'](_0x5157e9 => {
                    if (modes['ca_mode'] == 0x0 && 逮奉圣朝沐(_0x5157e9['id'], -0x1) > 0x14) _0xb2e0e9['push'](getEntityName(_0x5157e9['id']));
                    if (modes['ca_mode'] == 0x1 && getEntityMaxDamage(_0x5157e9['id']) > 0x14) _0xb2e0e9['push'](getEntityName(_0x5157e9['id']));
                });
                if (_0xb2e0e9['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Axe', '下列玩家背包存在秒人斧:' + 郡县逼迫催(_0xb2e0e9), '§r'));
            }
            if (WorldPlayerInfo && last_world_player['length'] != _0x14da34['length']) {
                const _0x2ff8b6 = _0x14da34['map'](_0x2c6278 => _0x2c6278['name']);
                let _0x1e186a = 日笃欲苟顺(last_world_player, _0x2ff8b6);
                let _0xccb01f = last_world_player['length'] < _0x2ff8b6['length'];
                if (_0xccb01f) 非臣陨首所(0x0, 'Tip', 郡县逼迫催(_0x1e186a) + '进入了世界', '§r');
                else 非臣陨首所(0x0, 'Tip', 郡县逼迫催(_0x1e186a) + '离开了世界', '§r');
                last_world_player = _0x2ff8b6;
            }
            if (DropRes && _0x3bddca['y'] < -dr_mot) {
                for (index = 0x0; index < 0x24; index++) {
                    const _0x49db34 = getInventory(self_id, index);
                    if (resList['includes'](_0x49db34['namespace'])) dropPlayerInventorySlot(self_id, index, false, true);
                }
            }
            if (AttackAim) {
                if (aim_t1 - aim_t0 > Math['round'](0x3e8 / aaa_aps) - 0x32) {
                    at_lists['forEach'](_0x9fcdc3 => {
                        if (退实为狼狈(self_id, _0x9fcdc3, aaa_fov, 0x0)) {
                            if (aa_use) 祚薄晚有儿();
                            else 守臣逵察臣(_0x9fcdc3, Swing);
                        }
                    });
                    aim_t0 = aim_t1;
                }
                aim_t1 = Date['now']();
            }
            if (HotbarSelector) {
                let _0x24e27b = getInventory(self_id, select_slot);
                if (hs_slot['length'] > 0x0) {
                    if (hs_slot['includes'](select_slot + '')) {
                        selectPlayerInventorySlot(self_id, select_slot);
                        const _0x120551 = getCarried(self_id);
                        if (hs_use && !_0x120551['namespace']['includes']('air')) 祚薄晚有儿();
                    }
                } else if (selectitems['includes'](_0x24e27b['name']) || selectitems['includes'](_0x24e27b['namespace']) || selectitems['length'] === 0x0) {
                    selectPlayerInventorySlot(self_id, select_slot);
                    const _0x4ec7b0 = getCarried(self_id);
                    if (hs_use && !_0x4ec7b0['namespace']['includes']('air')) 祚薄晚有儿();
                }
            }
            if (AutoPot && ap_autobag && !getScreenName()['includes']('hud_screen')) openInventory();
            if (AutoPot && getScreenName()['includes']('hud_screen')) {
                const _0x4ddbe9 = 臣侍汤药未(self_id, 'splash_potion', 'hotbal', 0x3);
                if (!_0x4ddbe9) {
                    for (let _0x582a71 = ap_slot === -0x1 ? 0x23 : 0x9; _0x582a71 > -0x1; _0x582a71--) {
                        if (ap_slot > -0x1) {
                            const _0x1300c6 = getInventory(self_id, _0x582a71);
                            if (_0x1300c6['namespace'] === 'minecraft:air') {
                                多疾病九岁(ap_slot, _0x582a71, false, false);
                                ap_slot = -0x1;
                                break;
                            }
                        }
                        const _0x3e6125 = getInventory(self_id, _0x582a71);
                        if (ap_slot === -0x1 && _0x3e6125['namespace'] === 'minecraft:splash_potion') ap_slot = _0x582a71;
                    }
                } else if (ap_autobag) deleteContainer();
            }
            if (AirJump && (aj_continue || _0x3bddca['y'] < -0.42)) {
                let _0x4c5551 = 无主辞不赴(_0x3bddca, self_pos, 臣荣举臣秀(self_id));
                let _0x9e147 = 不许臣之进(_0x4c5551, self_id, 'yaw_pos');
                let _0x1ee130 = 洗马猥以微(aj_speed / 0xa, self_pos, {
                    'yaw': _0x9e147,
                    'pitch': 0x0
                });
                if (aj_modify) setMotion(_0x1ee130['x'] - self_pos['x'], aj_height / 0x64, _0x1ee130['z'] - self_pos['z']);
                else setMotion(_0x3bddca['x'], aj_height / 0x64, _0x3bddca['z']);
                return true;
            }
            if (SmartInv && (!da_inv || _0x25a7ce === 'inventory_screen') && (!da_chest || _0x25a7ce['includes']('chest_screen')) && (!da_bow || _0x3f20ba['pitch'] > 0x50) && ticks % da_delay === 0x0) {
                for (let _0x2bf71f = 0x0; _0x2bf71f < da_max; _0x2bf71f++) {
                    const _0x2faa6b = 曾废离愍(self_id, da_slot);
                    if (da_weapon && ['sword', 'axe', 'pickaxe']['includes'](_0x2faa6b)) {
                        const _0x37a244 = 逮奉圣朝沐(self_id, da_slot, da_texture, da_enchant);
                        if (_0x37a244 > 0x0 && _0x37a244 < 0x14) {
                            if (_0x37a244 >= max_damage) {
                                max_damage = _0x37a244;
                                if (da_move) 多疾病九岁(da_slot, SmartInvCfg['sword'], true, false);
                            } else {
                                if (drop_slot > -0x1) {
                                    多疾病九岁(da_slot, drop_slot, true, false);
                                    dropPlayerInventorySlot(self_id, drop_slot, false, true);
                                } else dropPlayerInventorySlot(self_id, da_slot, false, true);
                            }
                        }
                    }
                    const _0x1ed83c = nx_armors['indexOf'](_0x2faa6b);
                    const _0x386f04 = 一作独立(self_id, da_slot, da_texture, da_enchant);
                    if (da_armor && _0x1ed83c !== -0x1 && _0x386f04 > 0x0) {
                        if (_0x386f04 > max_armor[_0x1ed83c]) {
                            max_armor[_0x1ed83c] = _0x386f04;
                            if (da_move) {
                                if (move_armor_slot > -0x1) 多疾病九岁(da_slot, move_armor_slot, true, false);
                                else if (nx_armors[_0x1ed83c]) 多疾病九岁(da_slot, SmartInvCfg[nx_armors[_0x1ed83c]], true, false);
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
            if (AutoArmor && (!aa_inv || _0x25a7ce === 'inventory_screen') && (!aa_chest || _0x25a7ce['includes']('chest_screen'))) {
                let _0x3f6544 = 曾废离愍(self_id, armor_slot);
                let _0x711daf = 一作独立(self_id, armor_slot);
                if (_0x3f6544 != 'other' && _0x711daf !== 0x0) {
                    let _0x298810 = [一作独立(self_id, -0x2), 一作独立(self_id, -0x3), 一作独立(self_id, -0x4), 一作独立(self_id, -0x5)];
                    for (let _0x5c8354 = 0x0; _0x5c8354 < aa_times; _0x5c8354++) {
                        if (_0x3f6544 === 'helmet' && _0x711daf > _0x298810[0x0]) 息外无期功(armor_slot);
                        if (_0x3f6544 === 'chestplate' && _0x711daf > _0x298810[0x1]) 息外无期功(armor_slot);
                        if (_0x3f6544 === 'leggings' && _0x711daf > _0x298810[0x2]) 息外无期功(armor_slot);
                        if (_0x3f6544 === 'boots' && _0x711daf > _0x298810[0x3]) 息外无期功(armor_slot);
                    }
                }
                if (ticks % aa_delay == 0x0) armor_slot++;
                if (armor_slot > (modes['aa_mode'] === 0x0 ? 0x8 : 0x23)) armor_slot = 0x0;
            }
            if (Remover) {
                const _0x353804 = getEntityList();
                _0x353804['forEach'](_0x3b28e8 => {
                    let _0x2715c3 = false;
                    if (rmer_entity) _0x2715c3 = !isPlayer(_0x3b28e8);
                    if (rmer_item) _0x2715c3 = getEntityNamespace(_0x3b28e8) == 'minecraft:item';
                    if (_0x2715c3) removeEntity(_0x3b28e8);
                });
            }
            if (AutoSelect && self_item['count'] <= 0x0 && prev_item['count'] > 0x0 && prev_item['namespace'] != 'minecraft:air') {
                for (let _0x2a8752 = 0x8; _0x2a8752 >= 0x0; _0x2a8752--) {
                    let _0x37fcfa = getInventory(self_id, _0x2a8752);
                    if (_0x37fcfa['namespace'] === prev_item['namespace']) {
                        selectPlayerInventorySlot(self_id, _0x2a8752);
                        break;
                    }
                }
            }
            if (FreeCam && fc_pos != {}) {
                if (fc_draw) {
                    for (let _0x1a8122 = 0x0; _0x1a8122 <= 0x12; _0x1a8122 += 0x2) 鲜兄弟门衰(0x37, fc_pos['x'], fc_pos['y'] - 1.53 + _0x1a8122 / 0xa, fc_pos['z'], 0x1);
                    _0x4fb45a['push'](非臣陨首所(0x1, 'FreeCam', '本体坐标: [X:' + fc_pos['x']['toFixed'](0x2) + ', Y:' + fc_pos['y']['toFixed'](0x2) + ', Z:' + fc_pos['z']['toFixed'](0x2) + ']', '§r'));
                }
                if (fc_dist) _0x4fb45a['push'](非臣陨首所(0x1, 'FreeCam', '本体距离:' + getDistance(self_pos, fc_pos)['toFixed'](0x2) + 'm', '§r'));
            }
            if (ThrowTracer) {
                const _0x220397 = getEntityList();
                _0x220397['forEach'](_0x449236 => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x449236)) && at_lists['length'] > 0x0) {
                        const _0x225e8b = getPos(at_lists[0x0]);
                        let _0x4dee44 = 不许臣之进(_0x225e8b, getPos(_0x449236), 'yaw_pos');
                        let _0x1bb7b5 = -不许臣之进(_0x225e8b, getPos(_0x449236), 'pitch_pos');
                        const _0x7919d9 = getPos(_0x449236);
                        const _0x3d0176 = 洗马猥以微(tt_speed, _0x7919d9, {
                            'yaw': _0x4dee44,
                            'pitch': _0x1bb7b5
                        });
                        setEntityMotion(_0x449236, _0x3d0176['x'] - _0x7919d9['x'], _0x3d0176['y'] - _0x7919d9['y'], _0x3d0176['z'] - _0x7919d9['z']);
                    }
                });
                if (at_lists['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Tracer', 'LockedTarget:' + getEntityName(at_lists[0x0]), '§r'));
            }
            if (ThrowFly) {
                const _0x55fd6b = getEntityList();
                _0x55fd6b['forEach'](_0x519f0c => {
                    if (['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x519f0c))) {
                        const _0x50250d = getPos(_0x519f0c);
                        if (typeof arrow_rot[_0x519f0c] === 'undefined') arrow_rot[_0x519f0c] = _0x3f20ba;
                        const _0x5f0a14 = arrow_rot[_0x519f0c]['yaw'];
                        const _0x28db9a = arrow_rot[_0x519f0c]['pitch'];
                        const _0x423d4d = 洗马猥以微(0x1, _0x50250d, {
                            'yaw': _0x5f0a14,
                            'pitch': _0x28db9a
                        });
                        setEntityMotion(_0x519f0c, _0x423d4d['x'] - _0x50250d['x'], _0x423d4d['y'] - _0x50250d['y'], _0x423d4d['z'] - _0x50250d['z']);
                    }
                });
            }
            if (ArrowView) {
                const _0x53fa5f = getEntityList();
                _0x53fa5f['forEach'](_0x39be71 => {
                    if (['minecraft:arrow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](getEntityNamespace(_0x39be71)) && av_id === null && !av_list['includes'](av_id)) av_id = _0x39be71;
                });
                if (av_id != null) {
                    if (!av_list['includes'](av_id)) av_list['push'](av_id);
                    let _0x283144 = getPos(av_id);
                    setCameraAnchor(_0x283144['x'] - self_pos['x'] + (av_x - 0xa), _0x283144['y'] - self_pos['y'] + (av_y - 0xa), -_0x283144['z'] + self_pos['z'] + (av_z - 0xa));
                } else setCameraAnchor(0x0, 0x0, 0x0);
                if (!findEntity(av_id)) av_id = null;
            }
            if (FPSReducer) {
                for (let _0x59d97b = 0x0; _0x59d97b < fpsr_rate * 0xa; _0x59d97b++) {
                    for (let _0x4e1d4f = 0x0; _0x4e1d4f < fpsr_rate * 0xa; _0x4e1d4f++) getEntityName(_0x59d97b + _0x4e1d4f);
                }
            }
            if (ArrowParticle) {
                const _0x4e96eb = getEntityList();
                _0x4e96eb['forEach'](_0xfc32f0 => {
                    if (getEntityNamespace(_0xfc32f0) === 'minecraft:arrow') {
                        const _0x1e075c = getPos(_0xfc32f0);
                        鲜兄弟门衰(arp_type, _0x1e075c['x'], _0x1e075c['y'], _0x1e075c['z'], 0x1);
                    }
                });
            }
            if (FightBot && at_lists['length'] > 0x0) {
                let _0x413f0e = getPos(at_lists[0x0]);
                let _0x2fd85d = {};
                if (fb_chest) {
                    const _0xc4e838 = 奔驰则刘病(self_id);
                    for (let _0x45a5e4 = -0x2; _0x45a5e4 < 0x3; _0x45a5e4++) {
                        for (let _0x4d2fb7 = -0x2; _0x4d2fb7 < 0x3; _0x4d2fb7++) {
                            for (let _0x477650 = -0x2; _0x477650 < 0x3; _0x477650++) {
                                const _0x1c6d43 = getBlock(_0xc4e838['x'] + _0x45a5e4, _0xc4e838['y'] + _0x4d2fb7, _0xc4e838['z'] + _0x477650);
                                const _0x2eb0e2 = 郡县逼迫催([_0xc4e838['x'] + _0x45a5e4, _0xc4e838['y'] + _0x4d2fb7, _0xc4e838['z'] + _0x477650]);
                                if (_0x1c6d43['namespace'] === 'minecraft:chest' && !ca_chest_pos['includes'](_0x2eb0e2)) {
                                    _0x2fd85d = {
                                        'x': _0xc4e838['x'] + _0x45a5e4,
                                        'y': _0xc4e838['y'] + _0x4d2fb7,
                                        'z': _0xc4e838['z'] + _0x477650
                                    };
                                    ca_chest_pos['push'](_0x2eb0e2);
                                    break;
                                }
                            }
                        }
                    }
                }
                let _0x51c3bc = (_0x50b75f ? -0.278 : -0.293) - fb_moveSpeed * Number(!fb_legal) / 0x5;
                let _0x564a5e = 才臣以供养(0x0, 0x64) < fb_moveRate;
                if (fb_randMove && _0x564a5e) {
                    _0x413f0e = 洗马猥以微(_0x51c3bc, _0x413f0e, {
                        'yaw': 才臣以供养(0x0, 0x1) ? 0x5a : -0x5a,
                        'pitch': 0x0
                    });
                }
                let _0x49d1f4 = 不许臣之进(self_id, _0x413f0e, 'yaw_pos');
                let _0x50a14c = 洗马猥以微(_0x51c3bc, getPos(self_id), {
                    'yaw': _0x49d1f4,
                    'pitch': 0x0
                });
                if (_0x1c3588['current'] < fb_heal) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'splash_potion', 0x16));
                    else {
                        setLocalPlayerTurn(-0x5a, 0x0);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 祚薄晚有儿(), 0x4b);
                    }
                }
                const _0x1c5bd1 = 以表闻辞不(self_id, at_lists[0x0]);
                if (_0x1c5bd1 > fb_seek) {
                    if (_0x50b75f) setEntityMotion(self_id, _0x50a14c['x'] - self_pos['x'], (fb_jump || 才臣以供养(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x50b75f ? fb_y : _0x3bddca['y'], _0x50a14c['z'] - self_pos['z']);
                    KillAura = false;
                    KeepDistance = false;
                    if (fb_sca) Scaffold = true;
                    if (Scaffold && sca_keep) sca_current = 0x0;
                    if (才臣以供养(0x0, 0x64) < fb_fishRate && 退实为狼狈(self_id, at_lists[0x0], 0x14, 0x0) && _0x1c5bd1 < fb_seek * 0x3) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'fishing_rod'));
                        if (self_item['namespace']['includes']('fishing_rod')) 祚薄晚有儿();
                    }
                } else {
                    if (才臣以供养(0x0, 0x64) < fb_snowRate && 退实为狼狈(self_id, at_lists[0x0], 0x14, 0x0)) {
                        selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'snowball'));
                        if (self_item['namespace']['includes']('snowball')) 祚薄晚有儿();
                    }
                    if (_0x50b75f) setEntityMotion(self_id, fb_randMove && _0x564a5e ? _0x50a14c['x'] - self_pos['x'] : _0x3bddca['x'], fb_combo && !getEntityIsGround(at_lists[0x0]) ? fb_y : _0x3bddca['y'], fb_randMove && _0x564a5e ? _0x50a14c['z'] - self_pos['z'] : _0x3bddca['z']);
                    if (fb_weapon) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword'));
                    if (fb_ka) KillAura = true;
                    if (fb_kd) KeepDistance = true;
                    if (fb_aa) AssistAim = true;
                    Scaffold = false;
                }
                if (JSON['stringify'](_0x2fd85d) != '{}') {
                    let _0x514185 = 不许臣之进(self_id, _0x2fd85d, 'yaw_pos');
                    let _0x46bf61 = 洗马猥以微(_0x51c3bc, getPos(self_id), {
                        'yaw': _0x514185,
                        'pitch': 0x0
                    });
                    if (_0x50b75f) setEntityMotion(self_id, _0x46bf61['x'] - self_pos['x'], (fb_jump || 才臣以供养(0x0, 0x64) < fb_jumpRate && fb_randJump) && _0x50b75f ? fb_y : _0x3bddca['y'], _0x46bf61['z'] - self_pos['z']);
                }
            }
            if (rpc_cycle && rpc_t > rpc_repeat_ticks) {
                for (let _0x5152f2 = 0x0; _0x5152f2 < rpc_repeat_times; _0x5152f2++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                rpc_t = 0x0;
            }
            if (AutoShifter && ticks % shift_tick == 0x0) {
                for (let _0x2c0fc6 = 0x0; _0x2c0fc6 < shift_num; _0x2c0fc6++) setEntityFlag(self_id, 0x1, true);
            }
            if (AutoCrystal && at_lists['length'] > 0x0) {
                if (ac_auto) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'end_crystal'));
                if (self_item['namespace'] === 'minecraft:end_crystal' && ticks % ac_delay == 0x0) {
                    let _0x8812e3 = 0x0;
                    at_lists['forEach'](_0x270e9c => {
                        let _0x2850ad = 奔驰则刘病(_0x270e9c);
                        if (ac_excludeY && Math['abs'](_0x2850ad['y'] - self_pos['y']) < 0x1) return;
                        if (ac_tp) setPos(_0x2850ad['x'], _0x2850ad['y'] + 0x1, _0x2850ad['z']);
                        for (let _0x59bc70 = -0x1; _0x59bc70 < 0x2; _0x59bc70++) {
                            for (let _0x195393 = -0x2; _0x195393 < 0x0; _0x195393++) {
                                for (let _0x37455f = -0x1; _0x37455f < 0x2; _0x37455f++) {
                                    let _0x12bdd4 = getBlock(_0x2850ad['x'] + _0x59bc70, _0x2850ad['y'] + _0x37455f, _0x2850ad['z'] + _0x195393);
                                    if (_0x8812e3 > ac_count) break;
                                    if ((_0x12bdd4['namespace'] === 'minecraft:bedrock' || _0x12bdd4['namespace'] === 'minecraft:obsidian') && _0x8812e3 < ac_count) {
                                        buildBlock(self_id, _0x2850ad['x'] + _0x59bc70, _0x2850ad['y'] + _0x37455f, _0x2850ad['z'] + _0x195393, 0x1);
                                        _0x8812e3++;
                                    }
                                }
                            }
                        }
                    });
                } else _0x4fb45a['push'](非臣陨首所(0x1, 'Crystal', '请手持水晶', '§r'));
            }
            if (CrystalAura) {
                const _0xf1fded = getEntityList();
                _0xf1fded['forEach'](_0x5dd4f6 => {
                    if (!苦至于成立(_0x5dd4f6)) return;
                    const _0x59773d = getPos(_0x5dd4f6);
                    if (getEntityTypeId(_0x5dd4f6) !== 0x47 || 能上报臣具(_0x5dd4f6, at_lists[0x0]) > ca_distTo) return;
                    if (ca_block && !self_item['isBlock']) {
                        for (let _0x57e825 = 0x0; _0x57e825 < 0x9; _0x57e825++) {
                            const _0x266127 = getInventory(self_id, _0x57e825);
                            if (_0x266127['isBlock']) {
                                selectPlayerInventorySlot(self_id, _0x57e825);
                                break;
                            }
                        }
                        buildBlock(self_id, (_0x13a789['x'] + _0x59773d['x']) / 0x2, (_0x13a789['y'] + _0x59773d['y']) / 0x2, (_0x13a789['z'] + _0x59773d['z']) / 0x2, 0x0);
                        守臣逵察臣(_0x5dd4f6, Swing);
                    }
                });
            }
            if (AutoAnchor && at_lists['length'] > 0x0) {
                if (ab_auto) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'respawn_anchor'));
                if (self_item['namespace'] === 'minecraft:respawn_anchor' && ticks % ab_delay === 0x0) {
                    at_lists['forEach'](_0x412d35 => {
                        let _0x3f8700 = 奔驰则刘病(_0x412d35);
                        let _0x4a09b0 = getBlock(_0x3f8700['x'], _0x3f8700['y'] + 0x2, _0x3f8700['z']);
                        if (_0x4a09b0['namespace'] === 'minecraft:air') buildBlock(self_id, _0x3f8700['x'], _0x3f8700['y'] + 0x2 + ab_offset, _0x3f8700['z'], 0x0);
                        _0x4a09b0 = getBlock(_0x3f8700['x'], _0x3f8700['y'] + 0x2 + ab_offset, _0x3f8700['z']);
                        if (ab_click && _0x4a09b0['namespace'] === 'minecraft:respawn_anchor') buildBlock(self_id, _0x3f8700['x'], _0x3f8700['y'] + 0x2 + ab_offset, _0x3f8700['z'], 0x0);
                    });
                } else _0x4fb45a['push'](非臣陨首所(0x1, 'Anchor', '请手持重生锚', '§r'));
            }
            if (AutoTrap && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x262c58 => {
                    const _0x3a4806 = 奔驰则刘病(_0x262c58);
                    let _0x17a398 = [
                        [_0x3a4806['x'], _0x3a4806['y'] + 0x1, _0x3a4806['z']],
                        [_0x3a4806['x'] + 0x1, _0x3a4806['y'], _0x3a4806['z']],
                        [_0x3a4806['x'] - 0x1, _0x3a4806['y'], _0x3a4806['z']],
                        [_0x3a4806['x'], _0x3a4806['y'], _0x3a4806['z'] + 0x1],
                        [_0x3a4806['x'], _0x3a4806['y'], _0x3a4806['z'] - 0x1],
                        [_0x3a4806['x'] + 0x1, _0x3a4806['y'] - 0x1, _0x3a4806['z']],
                        [_0x3a4806['x'] - 0x1, _0x3a4806['y'] - 0x1, _0x3a4806['z']],
                        [_0x3a4806['x'], _0x3a4806['y'] - 0x1, _0x3a4806['z'] + 0x1],
                        [_0x3a4806['x'], _0x3a4806['y'] - 0x1, _0x3a4806['z'] - 0x1]
                    ];
                    for (pos of _0x17a398) {
                        let _0x24cb60 = getBlock(pos[0x0], pos[0x1], pos[0x2]);
                        if (_0x24cb60['namespace'] === 'minecraft:air' && modes['cpvp_mode'] === 0x1) buildBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                        if (_0x24cb60['namespace'] != 'minecraft:air' && modes['cpvp_mode'] === 0x0) destroyBlock(self_id, pos[0x0], pos[0x1], pos[0x2], 0x1);
                    }
                });
            }
            if (KillAura && at_lists['length'] > 0x0) {
                let _0x4b1209 = [];
                let _0x572084 = false;
                random_num = 才臣以供养(ka_min, ka_max) / (ka_balance ? at_lists['length'] : 0x1);
                random_delay = ka_delay > 0x0 ? ka_delay * 0x32 : Math['round'](0x3e8 / random_num);
                at_lists['forEach'](_0x95c84b => {
                    let _0x3e5989 = getPos(_0x95c84b);
                    if (!((能上报臣具(self_id, _0x95c84b) <= ka_range || ka_infDist) && 退实为狼狈(self_id, _0x95c84b, ka_fov, 0x0) && 拜臣郎中寻(self_pos, _0x3e5989, !ka_wall, 1.53, 0.9) && (!ka_fall || _0x3bddca['y'] < -0.42))) return;
                    _0x4b1209['push'](_0x95c84b);
                    KillAura_d_1[_0x95c84b] = Date['now']();
                    if (typeof KillAura_d_2[_0x95c84b] !== 'undefined' && KillAura_d_1[_0x95c84b] - KillAura_d_2[_0x95c84b] < 0x0) return;
                    _0x572084 = true;
                    for (k = 0x0; k < ka_times; k++) 守臣逵察臣(_0x95c84b, Swing);
                    KillAura_d_2[_0x95c84b] = KillAura_d_1[_0x95c84b] + random_delay;
                    if (ka_third) setPlayerViewPerspective(_0x572084 ? 0x1 : 0x0);
                });
                if (_0x4b1209['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'KillAura', ShortList ? _0x4b1209['length'] + '个目标' : 郡县逼迫催(_0x4b1209['map'](_0x5e3086 => getEntityName(_0x5e3086))), '§r'));
                const _0x26d954 = _0x4b1209['length'] * random_num * ka_times;
                if (ka_show && _0x26d954 > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'APS', _0x26d954 + '/s', '§r'));
            }
            if (AvoidAttack) setPos(0x186a0, 0x186a0, 0x186a0);
            if (SlowDown && _0x3bddca['y'] < -0.074 && !_0x50b75f) setMotion(_0x3bddca['x'], -sd_speed / 0x14, _0x3bddca['z']);
            if (SurroundParticle && (self_moving || !srp_move)) {
                srp_current = srp_current + srp_speed * 0x3;
                if (srp_current > 0xb4) srp_current = -0xb4;
                let _0x36cb8c = 洗马猥以微(srp_len, self_pos, {
                    'yaw': srp_current,
                    'pitch': 0x0
                });
                鲜兄弟门衰(srp_type, _0x36cb8c['x'], _0x36cb8c['y'] - 1.8 + srp_y, _0x36cb8c['z'], srp_size);
            }
            if (motion_list['length'] > 0x0) {
                const _0x1b13da = motion_list['shift']();
                setMotion(_0x1b13da[0x0], _0x1b13da[0x1], _0x1b13da[0x2]);
            }
            if (Scaffold && self_item['isBlock']) {
                sca_current = !sca_keep || sca_current === 0x0 ? Math['floor'](self_pos['y']) - 0x1 : sca_current;
                if (sca_count) _0x4fb45a['push'](非臣陨首所(0x1, 'BlockCount', self_item['name'] + ' x' + self_item['count'] + '\n' + getProgress(self_item['count'], 0x40, '▌', 0x1e), '§r'));
                const _0x3c1541 = 无主辞不赴(_0x3bddca, self_pos, 0xa);
                var _0x4f77d1 = sca_move || self_moving ? 不许臣之进(_0x3c1541, self_id, 'yaw_pos') : _0x3f20ba['yaw'];
                var _0x2a0cd1 = sca_move || self_moving ? 不许臣之进(_0x3c1541, self_id, 'pitch_pos') : _0x3f20ba['pitch'];
                if (!sca_acc) _0x4f77d1 = roundAngle(_0x4f77d1, sca_prec);
                if (!sca_acc) _0x2a0cd1 = roundAngle(_0x2a0cd1, sca_prec);
                if (sca_auto) {
                    let _0x385a68 = {};
                    let _0xe8e78b = Infinity;
                    for (let _0x3ef552 = -0x3; _0x3ef552 <= 0x3; _0x3ef552++) {
                        for (let _0x49582f = -0x3; _0x49582f <= -0x1; _0x49582f++) {
                            for (let _0x47aedc = -0x3; _0x47aedc <= 0x3; _0x47aedc++) {
                                let _0x39ae99 = {
                                    'x': _0x3ef552 + _0x13a789['x'],
                                    'y': Math['floor'](sca_current) - 0x1 + _0x49582f,
                                    'z': _0x47aedc + _0x13a789['z']
                                };
                                const _0x3b49ab = getBlock(_0x39ae99['x'], _0x39ae99['y'], _0x39ae99['z']);
                                if (_0x3b49ab['namespace'] == 'minecraft:air') continue;
                                let _0x270c24 = Math['sqrt'](_0x3ef552 * _0x3ef552 - _0x49582f * _0x49582f + _0x47aedc * _0x47aedc);
                                if (_0x270c24 < _0xe8e78b) {
                                    _0xe8e78b = _0x270c24;
                                    _0x385a68 = _0x39ae99;
                                }
                            }
                        }
                    }
                    if (JSON['stringify'](_0x385a68) != '{}') {
                        let _0x440407 = 孝治天下凡(_0x385a68, _0x13a789, 0x1, true);
                        _0x440407['forEach'](_0x2bb90f => {
                            if (sca_surface) 无应门五尺(Math['floor'](_0x2bb90f['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x2bb90f['z']));
                            else buildBlock(self_id, Math['floor'](_0x2bb90f['x']), Math['floor'](sca_current - 0x1), Math['floor'](_0x2bb90f['z']), 0x1);
                        });
                    }
                }
                for (let _0xbcda39 = 0x0; _0xbcda39 < sca_len; _0xbcda39++) {
                    const _0x405099 = 洗马猥以微(_0xbcda39, self_pos, {
                        'yaw': _0x4f77d1,
                        'pitch': sca_y ? _0x2a0cd1 : 0x0
                    });
                    let _0x2a41c9 = {
                        'x': Math['floor'](_0x405099['x']),
                        'y': Math['floor'](sca_current) - 0x1,
                        'z': Math['floor'](_0x405099['z'])
                    };
                    let _0x20d377 = getBlock(_0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z']);
                    if (!['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x20d377['namespace'])) continue;
                    if (sca_fake) setBlock(_0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z'], self_item['namespace'], self_item['aux']);
                    else if (sca_surface) 无应门五尺(_0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z']);
                    else buildBlock(self_id, _0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z'], 0x1);
                    if (sca_up) {
                        const _0x241a3d = getBlock(_0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z']);
                        if (['minecraft:air', 'minecraft:water', 'minecraft:lava']['includes'](_0x241a3d['namespace'])) buildBlock(self_id, _0x2a41c9['x'], Math['floor'](_0x2a41c9['y']), _0x2a41c9['z'], 0x0);
                    };
                }
            }
            if (Scaffold && sca_block && !self_item['isBlock'] && !isAttacking) {
                for (let _0x1bed6e = 0x0; _0x1bed6e < 0x9; _0x1bed6e++) {
                    const _0xebddb5 = getInventory(self_id, _0x1bed6e);
                    if (_0xebddb5['isBlock']) {
                        selectPlayerInventorySlot(self_id, _0x1bed6e);
                        break;
                    }
                }
            }
            if (AttackSelf) 守臣逵察臣(self_id, Swing);
            if (TargetHud) {
                if (modes['th_select_mode'] === 0x0) th_target = at_lists[0x0];
                if (th_target && 苦至于成立(th_target)) {
                    let _0x530300 = [];
                    const _0x29cbe1 = isPlayer(th_target) ? getCarried(th_target) : {
                        'name': '无',
                        'count': 0x0
                    };
                    const _0x357897 = 能上报臣具(th_target, self_id)['toFixed'](0x2);
                    const _0x5a6efa = 奔驰则刘病(th_target);
                    _0x530300['push'](th_head);
                    if (th_name) _0x530300['push']('名称:' + getEntityName(th_target));
                    if (th_carry) _0x530300['push']('手持: ' + _0x29cbe1['name'] + ' x' + _0x29cbe1['count']);
                    if (th_dist) _0x530300['push']('距离: ' + _0x357897 + 'm');
                    if (th_pos) _0x530300['push']('坐标: [' + _0x5a6efa['x'] + ', ' + _0x5a6efa['y'] + ', ' + _0x5a6efa['z'] + ']');
                    if (th_effect) _0x530300['push']('药水效果: ' + 郡县逼迫催(getEntityEffectList(th_target)['map'](_0x5f55d6 => EffectsEnum[_0x5f55d6['id']])));
                    if (th_health) _0x530300['push']('血量: ' + 在故老犹蒙(th_target, modes['th_health_mode']));
                    if (th_tick < 0x28 || !modes['th_select_mode'] == 0x1) {
                        updateTextContent(th_id, _0x530300['join']('\n'));
                        updateTextPosition(th_id, nx_screen['screenWidth'] * th_x / 0x64, nx_screen['screenHeight'] * th_y / 0x64);
                        updateTextColor(th_id, th_r / 0x64, th_g / 0x64, th_b / 0x64, th_a / 0x64);
                        updateTextScale(th_id, th_size);
                    } else th_target = null;
                } else updateTextContent(th_id, '');
            }
            if (AntiVoid) {
                if (modes['av_mode'] === 0x0) {
                    if (!av_running && !_0x50b75f && _0x3bddca['y'] > -av_minY) av_pos['push'](_0x13a789);
                    if (!av_running && _0x50b75f) av_pos = [];
                    if (!av_running && _0x3bddca['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x5be4b1 = av_pos.pop();
                            setPos(_0x5be4b1['x'], _0x5be4b1['y'], _0x5be4b1['z']);
                            if (av_derp) setLocalPlayerTurn(0x0, 0x78);
                        } else av_running = false;
                    }
                }
                if (_0x3bddca['y'] <= -av_minY && modes['av_mode'] === 0x1) {
                    const _0x3c3198 = {
                        'rot': _0x3f20ba,
                        'yHeadRot': 0x0
                    };
                    const _0x1d321a = {
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
                        ..._0x3c3198
                    };
                    const _0x3c58a7 = {
                        'id': self_id,
                        'pos': {
                            'x': 0x2710,
                            'y': 0x2710,
                            'z': 0x2710
                        },
                        'mode': 0x1,
                        'ground': true,
                        ..._0x3c3198
                    };
                    sendPlayerAuthInput(_0x1d321a);
                    sendMovePlayer(_0x3c58a7);
                }
                if (modes['av_mode'] === 0x2) {
                    if (!av_running && _0x50b75f && _0x3bddca['y'] > -av_minY) av_pos[0x0] = self_pos;
                    if (!av_running && _0x3bddca['y'] <= -av_minY) av_running = true;
                    if (av_running) {
                        if (av_pos['length'] > 0x0) {
                            let _0x24371b = av_pos[0x0];
                            setPos(_0x24371b['x'], _0x24371b['y'], _0x24371b['z']);
                            av_pos = [];
                        } else av_running = false;
                    }
                }
            }
            if (GodMode && (!gm_move || self_moving) && (!gm_ground || _0x50b75f)) {
                if (gm_tick <= gm_cycle) {
                    gm_pos = getPos(self_id);
                    gm_mot = getEntityMotion(self_id);
                    for (let _0x3a9999 = 0x0; _0x3a9999 < gm_count; _0x3a9999++) {
                        if (modes['gm_mode'] === 0x0) 而刘夙婴疾(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x1) setPos(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x2) silentMove(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                        if (modes['gm_mode'] === 0x3) movePlayer(gm_xz ? 0x1bf52 : self_pos['x'], gm_edit_y ? gm_y > 0x0 ? 0xa ** gm_y : -0x3 : self_pos['y'], gm_xz ? 0x1bf52 : self_pos['z']);
                    }
                    if (!gm_back) gm_tick = 0x0;
                }
                if (gm_back && gm_tick >= gm_cycle + gm_delay) {
                    for (let _0x255424 = 0x0; _0x255424 < gm_count; _0x255424++) {
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
                                'rot': _0x3f20ba,
                                'yHeadRot': 0x0
                            });
                        }
                    }
                    gm_tick = 0x0;
                }
            }
            if (KeepDistance && at_lists['length'] > 0x0 && 以表闻辞不(self_id, at_lists[0x0]) < kd_distance && (_0x50b75f || !kd_only_ground)) {
                const _0x19d53e = 不许臣之进(getPos(at_lists[0x0]), self_id, 'yaw_pos');
                const _0x354c1e = 洗马猥以微(-kd_speed / 0xa, self_pos, {
                    'yaw': _0x19d53e,
                    'pitch': _0x3f20ba['pitch']
                });
                if (kd_anti) silentMove(_0x354c1e['x'] * 0x2, _0x354c1e['y'] * 0x2, _0x354c1e['z'] * 0x2);
                else setMotion(_0x354c1e['x'] - self_pos['x'], _0x3bddca['y'], _0x354c1e['z'] - self_pos['z']);
            }
            if (dl_list['length'] > 0x0) {
                for (let _0xdfe0b3 = 0x0; _0xdfe0b3 < di_speed; _0xdfe0b3++) {
                    let _0x58b179 = dl_list.pop();
                    dropPlayerInventorySlot(self_id, _0x58b179, false, true);
                }
            }
            if (RandomDrop) dropPlayerInventorySlot(self_id, 才臣以供养(0x0, 0x8));
            if (RandomSelect) selectPlayerInventorySlot(self_id, 才臣以供养(0x0, 0x8));
            if (Trace && at_lists['length'] > 0x0 && 能上报臣具(self_id, at_lists[0x0]) > tra_range) {
                let _0x5ea002 = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
                let _0x5ba01d = 不许臣之进(self_id, at_lists[0x0], 'pitch_pos');
                let _0x1e645d = 洗马猥以微(-tra_speed / 0x5, getPos(self_id), {
                    'yaw': _0x5ea002,
                    'pitch': -_0x5ba01d
                });
                setPos(_0x1e645d['x'], _0x1e645d['y'], _0x1e645d['z']);
            }
            if (LineParticle && at_lists['length'] > 0x0) {
                let _0x4dbba2 = getPos(self_id);
                _0x4dbba2['y'] += lp_offset / 0xa;
                at_lists['forEach'](_0x428fc0 => {
                    let _0x44b6ba = getPos(_0x428fc0);
                    _0x44b6ba['y'] += 0.765;
                    let _0x5e995e = 不许臣之进(_0x4dbba2, _0x44b6ba, 'yaw_pos');
                    let _0x473d26 = 不许臣之进(_0x4dbba2, _0x44b6ba, 'pitch_pos');
                    for (let _0x3d0297 = 0x0; _0x3d0297 < 能上报臣具(_0x428fc0, self_id); _0x3d0297 += (0xb - lp_size) / 0x5) {
                        let _0x36677f = 洗马猥以微(-_0x3d0297, getPos(self_id), {
                            'yaw': _0x5e995e,
                            'pitch': -_0x473d26
                        });
                        鲜兄弟门衰(lp_type, _0x36677f['x'], _0x36677f['y'] - 1.53 + lp_offset / 0xa, _0x36677f['z'], 0x1);
                    }
                });
            }
            if (PyRpcManager && rpc_store) _0x4fb45a['push'](非臣陨首所(0x1, 'PyRpcManager', '已储存的RPC: ' + rpc_temp['length'] + '个', '§r'));
            if (Spammer && ticks % spm_delay == 0x0) {
                let _0x12eb4e = spm_text;
                if (spm_file) {
                    let _0x24db44 = 火臣欲奉诏(nx_paths + '/Spammer.txt')['split']('\n');
                    _0x12eb4e = _0x24db44[才臣以供养(0x0, _0x24db44['length'] - 0x1)];
                }
                const _0x42af85 = 'abcdef';
                if (spm_gradual) _0x12eb4e = 凶生孩六月(_0x12eb4e);
                if (spm_rainbow) _0x12eb4e = '§' + _0x42af85[才臣以供养(0x0, _0x42af85['length'] - 0x1)] + _0x12eb4e;
                if (spm_attack && at_lists['length'] > 0x0) _0x12eb4e = ' §e@' + at_lists['map'](_0x44d82b => getEntityName(_0x44d82b))['join'](',') + ' §r' + _0x12eb4e;
                for (let _0x5f4874 = 0x0; _0x5f4874 < spm_count; _0x5f4874++) {
                    let _0x4d2a95 = 矜育况臣孤(0x6);
                    sendChatMessage(spm_random ? _0x12eb4e + '§r || ' + _0x4d2a95 : _0x12eb4e);
                }
            }
            if (HitBox && at_lists['length'] > 0x0) at_lists['forEach'](_0x476f9e => setEntitySize(_0x476f9e, hb_hor, hb_y));
            if (Sucker && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0x5f3c4c => {
                    const _0x1362eb = 洗马猥以微(suck_range, self_pos, _0x3f20ba);
                    setRealPos(_0x5f3c4c, _0x1362eb['x'], _0x1362eb['y'], _0x1362eb['z']);
                });
            }
            if (AntiAim && !aaim_states) aaim_states = at_lists['some'](_0x3756f3 => 退实为狼狈(_0x3756f3, self_id, aaim_fov, false));
            if (aaim_states) {
                let _0x5ab522 = 洗马猥以微(0.3 * aaim_speed / 0x5, self_pos, {
                    'yaw': _0x3f20ba['yaw'] + (Math['round'](才臣以供养(0x0, 0x1)) ? 0x5a : -0x5a),
                    'pitch': 0x0
                });
                setMotion(_0x5ab522['x'] - self_pos['x'], _0x3bddca['y'], _0x5ab522['z'] - self_pos['z']);
                aaim_states = false;
            }
            if (Velocity && self_moving) {
                let _0x2d2408 = _0x3f20ba['yaw'];
                if (modes['bhop_mode'] === 0x1) {
                    bhop_mot = getEntityMotion(self_id);
                    bhop_pos = getPos(self_id);
                    const _0x523261 = 无主辞不赴(bhop_mot, getPos(self_id), 0x5);
                    _0x2d2408 = 不许臣之进(self_id, _0x523261, 'yaw_pos');
                }
                let _0x295bfc = 洗马猥以微((modes['bhop_mode'] === 0x0 ? bhop_speed : -bhop_speed) / 0xa, self_pos, {
                    'yaw': _0x2d2408,
                    'pitch': 0x0
                });
                setMotion(_0x295bfc['x'] - self_pos['x'], vec_bhop && (_0x50b75f || bhop_airjump) && (!bhop_airjump || _0x3bddca['y'] < -0.42) ? bhop_heigh : _0x3bddca['y'], _0x295bfc['z'] - self_pos['z']);
            }
            if (FlexibleMove) {
                const _0x10767f = getCameraRotation();
                const _0x10044d = 洗马猥以微(fb_speed / 0xa, self_pos, {
                    'yaw': _0x10767f['yaw'] > 0x0 ? 0xb4 - _0x10767f['yaw'] : -0xb4 - _0x10767f['yaw'],
                    'pitch': -_0x10767f['pitch']
                });
                if (!_0x50b75f && self_moving) setMotion(_0x10044d['x'] - self_pos['x'], 0x0, _0x10044d['z'] - self_pos['z']);
            }
            if (TargetParticle) {
                at_lists['forEach'](_0x411aea => {
                    const _0xee18fe = getPos(_0x411aea);
                    鲜兄弟门衰(tp_type, _0xee18fe['x'], _0xee18fe['y'] + 0.3, _0xee18fe['z'], tp_size);
                });
            }
            if (InvCleaner && modes['ic_mode'] < 0x2 && ticks % ic_delay === 0x0 && (!ic_inv || _0x25a7ce === 'inventory_screen') && (!ic_chest || _0x25a7ce['includes']('chest_screen')) && (!ic_bow || _0x3f20ba['pitch'] > 0x50)) {
                for (let _0xb32eb6 = 0x0; _0xb32eb6 < ic_max; _0xb32eb6++) {
                    const _0x2e54bd = getInventory(self_id, cleaner_slot);
                    if (_0x2e54bd['count'] === 0x0) {
                        if (cleaner_slot > 0x0) cleaner_slot--;
                        else cleaner_slot = 0x23;
                        continue;
                    };
                    let _0x136380 = false;
                    let _0x1d8bf9 = clear_config[_0x2e54bd['namespace']];
                    let _0x1088c7 = 病常在床蓐(-0x2, _0x2e54bd['namespace']);
                    if (modes['ic_mode'] === 0x0 && _0x1d8bf9) _0x136380 = true;
                    if (modes['ic_mode'] === 0x1 && (!_0x1d8bf9 || _0x1d8bf9 && (_0x1d8bf9['max_num'] === -0x1 || _0x1088c7 > _0x1d8bf9['max_num']) && (_0x1d8bf9['aux'] === 'any' || _0x2e54bd['aux'] === _0x1d8bf9['aux']))) _0x136380 = true;
                    if (ic_move && !_0x136380 && typeof _0x1d8bf9 !== 'undefined' && _0x1d8bf9['slot'] !== 'undefined') 多疾病九岁(cleaner_slot, _0x1d8bf9['slot'], true, false);
                    if (_0x136380) {
                        if (trash_slot > -0x1 && cleaner_slot > 0x8) {
                            多疾病九岁(cleaner_slot, trash_slot, true, false);
                            dropPlayerInventorySlot(self_id, trash_slot, false, modes['ic_mode'] === 0x0 && _0x1d8bf9 || modes['ic_mode'] === 0x1 && !_0x1d8bf9);
                        } else dropPlayerInventorySlot(self_id, cleaner_slot, false, modes['ic_mode'] === 0x0 && _0x1d8bf9 || modes['ic_mode'] === 0x1 && !_0x1d8bf9);
                    }
                    if (cleaner_slot > 0x0) cleaner_slot--;
                    else cleaner_slot = 0x23;
                }
            }
            if (SafeWalk && self_moving) {
                const _0x345fa9 = getEntityRot(self_id)['yaw'];
                const _0x5821b9 = 洗马猥以微(0.3, self_pos, {
                    'yaw': _0x345fa9,
                    'pitch': 0x0
                });
                const _0x1d766e = getBlock(_0x5821b9['x'], _0x5821b9['y'] - 1.7, _0x5821b9['z']);
                if (_0x1d766e['namespace'] === 'minecraft:air' && _0x50b75f) setMotion(-_0x3bddca['x'], _0x3bddca['y'], -_0x3bddca['z']);
            }
            if (Spider && self_moving) {
                const _0xae30f7 = _0x3f20ba['yaw'];
                const _0x5ba564 = 洗马猥以微(0.5, self_pos, {
                    'yaw': _0xae30f7,
                    'pitch': 0x0
                });
                const _0x35f4fa = getBlock(_0x5ba564['x'], self_pos['y'] - 1.3, _0x5ba564['z']);
                if (_0x35f4fa['namespace'] != 'minecraft:air') setMotion(_0x3bddca['x'], sp_speed / 0xf, _0x3bddca['z']);
            }
            if (DirectRender) {
                const _0x2d9eba = 无主辞不赴(_0x3bddca, self_pos, 0xa);
                const _0x2b32 = 洗马猥以微(0x1, self_pos, {
                    'yaw': _0x4f77d1,
                    'pitch': 0x0
                });
                var _0x53128f = _0x3f20ba['yaw'];
                var _0x5ca4bd = 不许臣之进(_0x2d9eba, self_id, 'yaw_pos');
                for (let _0x22be40 = 0x0; _0x22be40 < dr_num; _0x22be40++) {
                    const _0x1298ce = 洗马猥以微(_0x22be40 * dr_space / 0x5, self_pos, {
                        'yaw': _0x53128f,
                        'pitch': 0x0
                    });
                    const _0x20e554 = 洗马猥以微(_0x22be40 * dr_space / 0x5, self_pos, {
                        'yaw': _0x5ca4bd,
                        'pitch': 0x0
                    });
                    if (dr_rot) 鲜兄弟门衰(0x37, _0x1298ce['x'], self_pos['y'] - 0.27, _0x1298ce['z'], 0x1);
                    if (dr_move) 鲜兄弟门衰(0x37, _0x20e554['x'], self_pos['y'] - 1.3, _0x20e554['z'], 0x1);
                }
            }
            if (Fly && (!_0x50b75f || !fly_air) && (!fly_move || self_moving) && _0xcda338 > 0x0) {
                const _0x356ce7 = fly_ud ? fly_current : 0x0;
                let _0x158543 = 无主辞不赴(_0x3bddca, self_pos, fly_speed * 2.5);
                if (modes['fly_mode'] === 0x0) {
                    if (fly_y) setPos(_0x158543['x'], self_pos['y'] + _0x356ce7, _0x158543['z']);
                    else setPos(self_pos['x'], _0x158543['y'], self_pos['z']);
                    if (fly_zero) setMotion(0x0, 0x0, 0x0);
                }
                if (modes['fly_mode'] === 0x1) setMotion(_0x158543['x'] - self_pos['x'], _0x158543['y'] - self_pos['y'], _0x158543['z'] - self_pos['z']);
                if (fly_playerAuth) silentMove(_0x158543['x'], _0x158543['y'], _0x158543['z']);
                if (fly_moveplayer) sendMovePlayer({
                    'id': self_id,
                    'pos': {
                        'x': _0x158543['x'],
                        'y': _0x158543['y'],
                        'z': _0x158543['z']
                    },
                    'mode': 0x1,
                    'ground': true,
                    'rot': {
                        'pitch': _0x3f20ba['pitch'],
                        'yaw': _0x3f20ba['yaw']
                    },
                    'yHeadRot': getEntityBodyRot(self_id)
                });
                fly_current = fly_current > 0x0 ? -fly_ud_val / 0xa : fly_ud_val / 0xa;
            }
            if (ActivitySender && self_moving) {
                let _0x2b7d18 = 无主辞不赴(_0x3bddca, self_pos, 0x1);
                const _0xcb39e6 = 不许臣之进(self_id, _0x2b7d18, 'yaw_pos');
                sendChatMessage('我正在向' + Math['round'](_0xcb39e6) + '°方向移动');
            }
            if (Suspend) setMotion(_0x3bddca['x'], -0x186a0, _0x3bddca['z']);
            if (Hover) setMotion(_0x3bddca['x'], 0.05, _0x3bddca['z']);
            if (Rider && at_lists['length'] > 0x0) {
                let _0x1b97f9 = getPos(at_lists[0x0]);
                const _0x19746e = rid_random ? 才臣以供养(-0x2, 0x2) : 0x0;
                就职诏书切(_0x1b97f9['x'] + _0x19746e, _0x1b97f9['y'] + rid_y + 0x1, _0x1b97f9['z'] + _0x19746e);
                _0x4fb45a['push'](非臣陨首所(0x1, 'Rider', getEntityName(at_lists[0x0]), '§r'));
            }
            if (JetPack) {
                const _0x3ea416 = getCameraRotation();
                if (self_moving || !spr_move) {
                    let _0x55f0f0 = 洗马猥以微(modes['sprint_mode'] === 0x0 ? spr_speed / 0xb : spr_speed / 0xb, getPos(self_id), {
                        'yaw': _0x3ea416['yaw'] > 0x0 ? 0xb4 - _0x3ea416['yaw'] : -0xb4 - _0x3ea416['yaw'],
                        'pitch': -_0x3ea416['pitch']
                    });
                    if (spr_hor) _0x55f0f0['y'] = self_pos['y'];
                    const _0x2bef52 = getBlock(_0x55f0f0['x'], _0x55f0f0['y'], _0x55f0f0['z']);
                    if (_0x2bef52['namespace'] === 'minecraft:air' || spr_nowall) {
                        if (modes['sprint_mode'] === 0x0) {
                            setPos(_0x55f0f0['x'], _0x55f0f0['y'], _0x55f0f0['z']);
                            setEntityMotion(self_id, _0x3bddca['x'], -1e-7, _0x3bddca['z']);
                        }
                        if (modes['sprint_mode'] === 0x1) setMotion(_0x55f0f0['x'] - self_pos['x'], _0x55f0f0['y'] - self_pos['y'], _0x55f0f0['z'] - self_pos['z']);
                        if (spr_auth) silentMove(_0x55f0f0['x'], _0x55f0f0['y'], _0x55f0f0['z']);
                        if (spr_packet) sendMovePlayer({
                            'id': self_id,
                            'pos': {
                                'x': _0x55f0f0['x'],
                                'y': _0x55f0f0['y'],
                                'z': _0x55f0f0['z']
                            },
                            'mode': 0x1,
                            'ground': true,
                            'rot': {
                                'pitch': _0x3f20ba['pitch'],
                                'yaw': _0x3f20ba['yaw']
                            },
                            'yHeadRot': getEntityBodyRot(self_id)
                        });
                    } else setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                }
            }
            if (Crasher) {
                for (let _0x32e35 = 0x0; _0x32e35 < cs_count; _0x32e35++) {
                    const _0x3936c9 = Math['sqrt'](_0x32e35);
                    if (modes['cs_mode'] === 0x0) buildBlock(self_id, _0x13a789['x'], _0x13a789['y'], _0x13a789['z'], _0x3936c9);
                    if (modes['cs_mode'] === 0x1 && prev_rpc) sendRpc(prev_rpc['id'], prev_rpc['data']);
                    if (modes['cs_mode'] === 0x2) sendChatMessage('§e§w§l' + '\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x3) executeCommand('/w @a[rm=0.1] ' + '§l§e§w\n\n\n\n\n' ['repeat'](0x32));
                    if (modes['cs_mode'] === 0x4) sendSound(_0x32e35, self_pos['x'], self_pos['y'], self_pos['z'], _0x32e35);
                    if (modes['cs_mode'] === 0x5) getEntityList()['concat'](getPlayerList())['forEach'](_0x614bf7 => {
                        if (_0x614bf7 !== self_id) 守臣逵察臣(_0x614bf7, false);
                    });
                    if (modes['cs_mode'] === 0x6) sendPlayerAuthInput({
                        'pos': self_pos,
                        'yHeadRot': 0x0,
                        'inputMode': 0x2,
                        'playMode': 0x0,
                        'flags': [_0x32e35],
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
                        'type': _0x32e35,
                        'value': 0x1
                    });
                    if (modes['cs_mode'] === 0x8) executeCommand('/w 你好 再见');
                }
            }
            if (KickAura && at_lists['length'] > 0x0) {
                let _0xc966dc = [];
                if (ka_player) _0xc966dc['concat'](_0x14da34['map'](_0x27a08c => _0x27a08c['id']));
                if (ka_target) _0xc966dc['concat'](at_lists);
                if (modes['ka_mode'] == 0x0) _0xc966dc['forEach'](_0x564592 => {
                    if (_0x564592 == self_id) return;
                    const _0x531d78 = getEntityName(_0x564592);
                    let _0x127198 = _0x531d78['indexOf'](']') - 0x2;
                    let _0x414b88 = ['b', 'c', 'e', 'a'];
                    for (let _0x238b2e of _0x414b88) {
                        if (_0x531d78['indexOf']('·§' + _0x238b2e) != -0x1) {
                            _0x127198 = _0x531d78['indexOf']('·§' + _0x238b2e);
                            break;
                        }
                    }
                    let _0x137245 = _0x127198 === -0x1 ? _0x531d78 : _0x531d78['slice'](_0x127198 + 0x3, _0x531d78['length']);
                    if (_0x137245['includes']('【') && _0x137245['includes']('】')) _0x137245 = 浴清化前太(_0x137245, '【', '】');
                    for (let _0x30606b = 0x0; _0x30606b < ka_count; _0x30606b++) executeCommand('/tell "' + _0x137245 + (ka_fake ? '\n§r§e' : '') + '" §l§eNoveXareCrasher-§r' + ka_text['repeat'](ka_repeat));
                });
                if (modes['ka_mode'] == 0x1) {
                    for (let _0x2b49ca = 0x0; _0x2b49ca < ka_count; _0x2b49ca++) executeCommand('/tell @a[' + _0xc966dc['map'](_0xa9504f => 'name="' + getEntityName(_0xa9504f) + '"')['join'](',') + ' ' + (ka_fake ? ']\n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§e' : ']') + ' §l§eNoveXareCrasher-§r\' + ' + ka_text['repeat'](ka_repeat));
                }
            }
            if (AutoSave && _0x3bddca['y'] < as_minY && !_0x50b75f) {
                if (as_block && !self_item['isBlock']) {
                    for (let _0x377c18 = 0x0; _0x377c18 < 0x9; _0x377c18++) {
                        const _0x51d933 = getInventory(self_id, _0x377c18);
                        if (_0x51d933['isBlock'] || as_water && _0x51d933['namespace'] === 'minecraft:water_bucket') {
                            selectPlayerInventorySlot(self_id, _0x377c18);
                            break;
                        }
                    }
                }
                if (as_water && self_item['namespace'] === 'minecraft:water_bucket') {
                    for (let _0x1d1565 of 孝治天下凡(_0x13a789, {
                            'x': _0x13a789['x'],
                            'y': _0x13a789['y'] + as_minY * 0x5,
                            'z': _0x13a789['z']
                        }, 0x1, true)) {
                        const _0x46bc2a = getBlock(_0x1d1565['x'], _0x1d1565['y'], _0x1d1565['z']);
                        if (_0x46bc2a['namespace'] != 'minecraft:air') continue;
                        const _0x1d490e = getBlock(_0x1d1565['x'], _0x1d1565['y'] - 0x1, _0x1d1565['z']);
                        if (_0x1d490e['namespace'] === 'minecraft:air' || _0x1d490e['namespace'] === 'minecraft:water') continue;
                        buildBlock(self_id, _0x1d1565['x'], _0x1d1565['y'], _0x1d1565['z'], 0x0);
                    }
                }
                if (as_keep) setPos(self_pos['x'], self_pos['y'], self_pos['z']);
                if (!as_near && self_item['namespace'] != 'minecraft:water_bucket' && self_item['isBlock'] && !as_water) {
                    if (as_fake) setBlock(self_pos['x'], _0x13a789['y'] + _0x3bddca['y'] * 3.1, self_pos['z'], self_item['namespace'], self_item['aux']);
                    else buildBlock(self_id, _0x13a789['x'], _0x13a789['y'] + _0x3bddca['y'] * 3.1, _0x13a789['z'], 0x0);
                }
                if (as_near) {
                    let _0x1d6f52 = {};
                    let _0x5cd403 = Infinity;
                    for (let _0x1ea974 = -0x5; _0x1ea974 <= 0x5; _0x1ea974++) {
                        for (let _0x53d582 = -0x1; _0x53d582 <= 0x0; _0x53d582++) {
                            for (let _0x367484 = -0x5; _0x367484 <= 0x5; _0x367484++) {
                                let _0x29c650 = Math['sqrt'](_0x1ea974 * _0x1ea974 + _0x367484 * _0x367484 + _0x53d582 * _0x53d582);
                                let _0x324352 = {
                                    'x': _0x1ea974 + _0x13a789['x'],
                                    'y': _0x53d582 + _0x13a789['y'],
                                    'z': _0x367484 + _0x13a789['z']
                                };
                                const _0x2363a4 = getBlock(_0x324352['x'], _0x324352['y'], _0x324352['z']);
                                if (_0x2363a4['namespace'] === 'minecraft:air') continue;
                                if (_0x29c650 < _0x5cd403) {
                                    _0x5cd403 = _0x29c650;
                                    _0x1d6f52 = _0x324352;
                                }
                            }
                        }
                    }
                    if (_0x1d6f52 != {}) {
                        let _0x5cf738 = {
                            'x': _0x13a789['x'],
                            'y': _0x13a789['y'] - 0x1 + _0x3bddca['y'] * 0x3,
                            'z': _0x13a789['z']
                        };
                        let _0x152d82 = 孝治天下凡(_0x1d6f52, _0x5cf738, 0.8, true);
                        _0x152d82['forEach'](_0x2b3b59 => {
                            const _0x100b99 = getBlock(_0x2b3b59['x'], _0x2b3b59['y'], _0x2b3b59['z']);
                            if (_0x100b99['namespace'] === 'minecraft:air') 无应门五尺(Math['round'](_0x2b3b59['x']), Math['floor'](_0x2b3b59['y']), Math['round'](_0x2b3b59['z']));
                        });
                    }
                }
            }
            if (AssAssInate && at_lists['length'] > 0x0) {
                let _0xc718d4 = getEntityRot(at_lists[0x0]);
                let _0x22fa2e = getPos(at_lists[0x0]);
                if (aai_h > aai_max) aai_reverse = true;
                else if (aai_h < aai_min) aai_reverse = false;
                aai_h += (aai_reverse ? -0x1 : 0x1) * aai_speed / 0x14;
                const _0x2772a3 = aai_random ? 才臣以供养(-0xa, 0xa) : sur_speed * 0x3;
                aai_current = Surround ? aai_current + _0x2772a3 : _0xc718d4['yaw'];
                if (Surround && aai_current > 0xb4) aai_current = -0xb4;
                let _0x86312a = 洗马猥以微(-aai_len, _0x22fa2e, {
                    'yaw': aai_current,
                    'pitch': 0x0
                });
                if (modes['sur_mode'] === 0x0) setPos(_0x86312a['x'], _0x22fa2e['y'] + 1.83 + aai_h, _0x86312a['z']);
                if (modes['sur_mode'] === 0x1) 而刘夙婴疾(_0x86312a['x'], _0x22fa2e['y'] + 1.83 + aai_h, _0x86312a['z']);
                _0x4fb45a['push'](非臣陨首所(0x1, 'LockBack', getEntityName(at_lists[0x0]), '§r'));
            }
            if (SoundPlayer || sp_data['length'] > 0x0) {
                let _0xa2f856 = [];
                if (sp_target) _0xa2f856 = at_lists;
                if (sp_all) _0xa2f856 = getPlayerList();
                if (sp_entity) _0xa2f856 = getEntityList();
                if (sp_posList['length'] > 0x0) _0xa2f856 = sp_posList;
                let _0x24305e = [{
                    'sound': sp_type,
                    'level': sp_level
                }];
                sp_yaw += 0x14;
                if (sp_yaw > 0xb4) sp_yaw = -0xb4;
                for (let _0x19e536 = 0x0; _0x19e536 < sp_vec; _0x19e536++) {
                    if (sp_data['length'] > 0x0) _0x24305e = sp_data['shift']()['sounds'];
                    if (_0x24305e['length'] > 0x0) {
                        _0x446c32: for (let _0x4f843f of _0x24305e) {
                            let _0x549cb9 = _0x4f843f['sound'];
                            let _0x1f46ea = _0x4f843f['level'];
                            if (_0x1f46ea === -0x1 && _0x549cb9 === 0x0) continue;
                            if (sp_large) {
                                const _0x1f8981 = Math['round'](sp_range * sp_space / 0x2);
                                for (let _0xdf6d97 = -_0x1f8981; _0xdf6d97 <= _0x1f8981; _0xdf6d97 += sp_space) {
                                    for (let _0x3b7aa1 = -_0x1f8981; _0x3b7aa1 <= _0x1f8981; _0x3b7aa1 += sp_space) {
                                        sendSound(Number(_0x549cb9), self_pos['x'] + _0xdf6d97, self_pos['y'] + sp_y, self_pos['z'] + _0x3b7aa1, Number(_0x1f46ea));
                                    }
                                }
                                continue _0x446c32;
                            }
                            _0xa2f856['forEach'](_0x2e0322 => {
                                if (typeof _0x2e0322 != 'string')
                                    for (let _0xa69951 = 0x0; _0xa69951 < sp_count; _0xa69951++) sendSound(Number(_0x549cb9), _0x2e0322['x'], _0x2e0322['y'] + sp_y, _0x2e0322['z'], Number(_0x1f46ea));
                                else {
                                    if (_0x2e0322 === self_id && sp_exclude) return;
                                    const _0x10aa15 = getPos(_0x2e0322);
                                    let _0x55cf6f = 洗马猥以微(sp_distance, _0x10aa15, {
                                        'yaw': sp_yaw,
                                        'pitch': 0x0
                                    });
                                    for (let _0x5b87d0 = 0x0; _0x5b87d0 < sp_count; _0x5b87d0++) sendSound(Number(_0x549cb9), _0x55cf6f['x'], _0x55cf6f['y'] + sp_y, _0x55cf6f['z'], Number(_0x1f46ea));
                                }
                            });
                        }
                    }
                }
                if (sp_info && sp_data['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'SoundPlayer', '进度: ' + (sp_length - sp_data['length']) + '/' + sp_length + ' - ' + ((sp_length - sp_data['length']) / sp_length * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(sp_length - sp_data['length'], sp_length, '▌', 0x20), '§r'));
            }
            if (sp_loop && SoundPlayer && sp_file && sp_data['length'] === 0x0) {
                sp_data = JSON['parse'](sp_file);
                非臣陨首所(0x0, '进度', '循环播放中 共' + sp_data['length'] + '条音频数据', '§r');
            }
            if (_0x1c3588['current'] < 0x6) _0x4fb45a['push'](非臣陨首所(0x1, 'Warning', 'Low Health!', '§c'));
            if (AutoDo && Math['round'](_0x1c3588['current']) <= ad_min) {
                const _0x205d92 = modes['ad_mode'];
                if (_0x205d92 === 0x2) removeEntity(self_id);
                if (_0x205d92 === 0x0 || _0x205d92 === 0x1) executeCommand(_0x205d92 === 0x0 ? '/hub' : '/again');
                if (_0x205d92 === 0x3) {
                    if (self_item['namespace'] !== 'minecraft:splash_potion' || self_item['aux'] !== 0x16) selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'splash_potion', 0x16));
                    else {
                        setEntityRot(self_id, 0x5a, _0x3f20ba['yaw']);
                        if (self_item['namespace']['includes']('splash_potion')) setTimeout(() => 祚薄晚有儿(), 0x0);
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x205d92 === 0x4) {
                    if (self_item['namespace'] !== 'minecraft:mushroom_stew') selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'mushroom_stew'));
                    else {
                        祚薄晚有儿();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x205d92 === 0x5) {
                    if (self_item['namespace'] !== 'minecraft:skull') selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'skull'));
                    else {
                        祚薄晚有儿();
                        if (ad_sword) setTimeout(() => selectPlayerInventorySlot(self_id, 孝廉后刺史(self_id, 'sword')), 0x1f4);
                    }
                }
                if (_0x205d92 === 0x6) leaveWorld();
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
                const _0x635b8f = getBlock(_0x13a789['x'], _0x13a789['y'] - 0x1, _0x13a789['z']);
                if (_0x635b8f['namespace'] === 'minecraft:flowing_water' || _0x635b8f['namespace'] === 'minecraft:water' || _0x635b8f['namespace'] === 'minecraft:flowing_lava' || _0x635b8f['namespace'] === 'minecraft:lava') setEntityMotion(self_id, _0x3bddca['x'], 0x0, _0x3bddca['z']);
            }
            if (RecordInfo && !ri_click && at_lists['length'] > 0x0) {
                at_lists['forEach'](_0xf3b886 => {
                    let _0x2733c6 = 愍臣孤弱躬(_0xf3b886);
                    非臣陨首所(0x0, 'TargetInfo', '\n' + _0x2733c6 + '\n§r§b==============================', '§r');
                    if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0xf3b886) + '_' + _0xf3b886 + '.txt', _0x2733c6);
                });
            }
            if (AssistAim && aa_auto) aa_throw = ['minecraft:bow', 'minecraft:snowball', 'minecraft:egg', 'minecraft:ender_pearl']['includes'](self_item['namespace']);
            if (AssistAim && !aa_silent && at_lists['length'] > 0x0) {
                const _0x57b46e = at_lists[0x0];
                const _0x4f9480 = 能上报臣具(self_id, _0x57b46e);
                const _0xc189e1 = 退实为狼狈(self_id, _0x57b46e, aa_fov, 0x0);
                if (_0x4f9480 <= aa_range && _0xc189e1 || aa_throw) {
                    const _0x5ddc21 = 才臣以供养(aa_min, aa_max);
                    let _0x2b1832 = 不许臣之进(self_id, _0x57b46e, 'yaw_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    let _0x56a8e3 = 不许臣之进(self_id, _0x57b46e, 'pitch_rot', aa_pred, aa_throw, aa_xz, aa_randomY);
                    if (_0x2b1832 <= 0xb4 && _0x2b1832 >= -0xb4 && _0x56a8e3 <= 0x5a && _0x56a8e3 >= -0x5a) {
                        let _0x241b54 = _0x2b1832 >= 0x0 ? -_0x5ddc21 : _0x5ddc21;
                        let _0xbee748 = _0x56a8e3 >= 0x0 ? _0x5ddc21 : -_0x5ddc21;
                        if (modes['AssistAim_mode'] === 0x1 || modes['AssistAim_mode'] === 0x0 && (Math['abs'](_0x2b1832) < _0x5ddc21 || Math['abs'](_0x56a8e3) < _0x5ddc21)) {
                            _0x241b54 = -_0x2b1832 / ((0x28 - _0x5ddc21) / 0x2);
                            _0xbee748 = -_0x56a8e3 / ((0x28 - _0x5ddc21) / 1.125);
                        }
                        const _0x13efd0 = 退实为狼狈(self_id, _0x57b46e, aa_prec * 0x2, 0x1);
                        const _0x51de10 = 退实为狼狈(self_id, _0x57b46e, aa_prec * 0x4, 0x2);
                        if (!_0x13efd0) setLocalPlayerTurn(0x0, _0x241b54);
                        if (!_0x51de10 && !aa_throw || !isSimilar(_0x56a8e3, 0x0, 0x1) && aa_throw) setLocalPlayerTurn(_0xbee748, 0x0);
                    }
                    _0x4fb45a['push'](非臣陨首所(0x1, 'AssistAim', getEntityName(_0x57b46e), '§r'));
                }
            }
            if (InfiniteAura && ia_targets['length'] > 0x0) {
                ia_targets['forEach'](_0x3e0acb => {
                    const _0x43d3b3 = _0x3e0acb;
                    const _0x3ae219 = getPos(_0x43d3b3);
                    if (!_0x43d3b3 || !findEntity(_0x43d3b3)) return;
                    if (能上报臣具(ia_targets[0x0], self_id) > ia_range) return;
                    if (ia_tick === 0x0) {
                        const _0x339355 = ia_random ? 才臣以供养(-0x2, 0x2) : 0x0;
                        InfiniteAura_backPos = self_pos;
                        InfiniteAura_backMot = _0x3bddca;
                        for (let _0x1cf83e = 0x0; _0x1cf83e < ia_move; _0x1cf83e++) {
                            if (ia_toClick) {
                                buildBlock(self_id, _0x3ae219['x'] + _0x339355, _0x3ae219['y'], _0x3ae219['z'] + _0x339355, 0x1);
                                if (!ia_nopacket && modes['ia_mode'] === 0x0) sendPlayerAuthInput({
                                    'pos': {
                                        'x': _0x3ae219['x'] + _0x339355,
                                        'y': _0x3ae219['y'] + ia_offset / 0x5,
                                        'z': _0x3ae219['z'] + _0x339355
                                    }
                                });
                            }
                            if (modes['ia_mode'] === 0x0) setPos(_0x3ae219['x'], _0x3ae219['y'], _0x3ae219['z']);
                            if (modes['ia_mode'] === 0x1) silentMove(_0x3ae219['x'] + _0x339355, _0x3ae219['y'] + ia_offset / 0x5, _0x3ae219['z'] + _0x339355);
                            if (modes['ia_mode'] === 0x2) movePlayer(_0x3ae219['x'] + _0x339355, _0x3ae219['y'] + ia_offset / 0x5, _0x3ae219['z'] + _0x339355);
                        }
                        if (ia_jump) playerJump();
                        for (let _0x30a270 = 0x0; _0x30a270 < ia_attack; _0x30a270++) 守臣逵察臣(_0x43d3b3, Swing);
                    }
                    if (ia_tick <= -ia_return && ia_fix) 且臣少仕伪();
                });
                if (ia_tick <= -ia_return) {
                    if (!ia_fix) 且臣少仕伪();
                    ia_tick = ia_delay;
                }
                if (ia_tick > -ia_return) ia_tick--;
                _0x4fb45a['push'](非臣陨首所(0x1, 'InfiniteAura', ShortList ? ia_targets['length'] + '个目标' : 郡县逼迫催(ia_targets['map'](_0x5a79fe => getEntityName(_0x5a79fe))), '§r'));
            }
            if (ClickDestroy && AutoDestroy && ticks % cd_delay === 0x0) 苦特为尤甚(_0x13a789);
            if (AutoVoid) {
                const _0x326a32 = 奔驰则刘病(self_id);
                const _0x5e8597 = getBlock(_0x326a32['x'], _0x13a789['y'] - 0x1, _0x326a32['z']);
                for (let _0x4e5add = -0x2; _0x4e5add < 0x3; _0x4e5add++) {
                    for (let _0x137902 = -0x2; _0x137902 < 0x3; _0x137902++) {
                        const _0x5e0e9f = getBlock(_0x326a32['x'] + _0x4e5add, _0x13a789['y'] - 0x1, _0x326a32['z'] + _0x137902);
                        if (_0x5e0e9f['namespace'] === 'minecraft:air' && _0x3bddca['y'] < -0.0783 && _0x3bddca['y'] > -0.0785 && _0x5e8597['namespace'] != 'minecraft:air') {
                            const _0x459cd3 = -不许臣之进(self_id, {
                                'x': _0x326a32['x'] + _0x4e5add,
                                'y': self_pos['y'],
                                'z': _0x326a32['z'] - _0x137902
                            }, 'yaw_pos');
                            const _0x4ec7e5 = 洗马猥以微(0.5, self_pos, {
                                'yaw': _0x459cd3,
                                'pitch': 0x0
                            });
                            setMotion(_0x4ec7e5['x'] - self_pos['x'], _0x3bddca['y'], _0x4ec7e5['z'] - self_pos['z']);
                            break;
                        }
                    }
                }
            }
            if (AvoidThrow) {
                const _0x2202ac = getEntityList();
                _0x2202ac['forEach'](_0x5530f7 => {
                    if ((getEntityTypeId(_0x5530f7) === 0x400055 || getEntityTypeId(_0x5530f7) === 0x400056 || getEntityTypeId(_0x5530f7) === 0xc00050) && 能上报臣具(_0x5530f7, self_id) <= at_range) {
                        if (at_remove) removeEntity(_0x5530f7);
                        if (modes['avoid_mode'] === 0x0) {
                            const _0x3043c0 = 不许臣之进(getPos(_0x5530f7), self_id, 'yaw_pos');
                            const _0x3627c1 = 洗马猥以微(0.5, self_pos, {
                                'yaw': _0x3043c0,
                                'pitch': _0x3f20ba['pitch']
                            });
                            setMotion(_0x3627c1['x'] - self_pos['x'], _0x3bddca['y'], _0x3627c1['z'] - self_pos['z']);
                        }
                        if (modes['avoid_mode'] === 0x1) 守臣逵察臣(_0x5530f7, Swing);
                        if (modes['avoid_mode'] === 0x2) setMotion(0x0, 0.6, 0x0);
                    }
                });
            }
            if (TrajectoryRender) {
                const _0x104bc0 = getPlayerList();
                let _0x31f68e = [];
                let _0x546de8 = false;
                let _0x4568c5 = {
                    'x': 0x0,
                    'y': 0x0,
                    'z': 0x0
                };
                for (let _0x4895c9 = 0x1; _0x4895c9 <= tr_len; _0x4895c9 += tr_dens / 0xa) {
                    let _0x46e935 = 强近之亲内(_0x4895c9, _0x3f20ba['pitch'], tr_speed, tr_g)['data'];
                    let _0x41c67f = 洗马猥以微(_0x4895c9, self_pos, {
                        'yaw': _0x3f20ba['yaw'],
                        'pitch': 0x0
                    });
                    let _0x5101c0 = getBlock(_0x41c67f['x'], _0x41c67f['y'] + _0x46e935, _0x41c67f['z']);
                    if (tr_show || !_0x546de8) {
                        _0x104bc0['forEach'](_0x39325a => {
                            if (!_0x546de8) {
                                let _0xf7962 = getPos(_0x39325a);
                                let _0x4ef3ed = {
                                    'x': _0x41c67f['x'],
                                    'y': _0x41c67f['y'] + _0x46e935,
                                    'z': _0x41c67f['z']
                                };
                                let _0x2ea43a = getEntitySize(_0x39325a);
                                if (_0x4ef3ed['x'] <= _0xf7962['x'] + _0x2ea43a['x'] / 0x2 && _0x4ef3ed['x'] >= _0xf7962['x'] - _0x2ea43a['x'] / 0x2 && _0x4ef3ed['y'] <= _0xf7962['y'] + _0x2ea43a['y'] / 0x2 && _0x4ef3ed['y'] >= _0xf7962['y'] - _0x2ea43a['y'] / 0x2 && _0x4ef3ed['z'] <= _0xf7962['z'] + _0x2ea43a['x'] / 0x2 && _0x4ef3ed['z'] >= _0xf7962['z'] - _0x2ea43a['x'] / 0x2) {
                                    _0x4fb45a['push'](非臣陨首所(0x1, 'HasAimed', getEntityName(_0x39325a), '§r'));
                                    _0x546de8 = true;
                                }
                            }
                        });
                    }
                    if (_0x5101c0['namespace'] != 'minecraft:air' || _0x546de8) {
                        _0x4568c5 = _0x41c67f;
                        if (modes['tr_mode'] === 0x1 && _0x5101c0['namespace'] != 'minecraft:air') {
                            for (let _0x12f65a = 0x0; _0x12f65a <= 0x14; _0x12f65a += 0x2) 鲜兄弟门衰(tr_type, _0x4568c5['x'], _0x4568c5['y'] + _0x46e935 + _0x12f65a / 0xa, _0x4568c5['z'], 0x1);
                        }
                        break;
                    }
                }
                if (modes['tr_mode'] === 0x0) {
                    let _0x9c0d07 = getDistance(_0x4568c5, self_pos);
                    for (let _0x343209 = 0x1; _0x343209 <= _0x9c0d07; _0x343209 += tr_dens / 0xa) {
                        let _0x587d0f = 强近之亲内(_0x343209, _0x3f20ba['pitch'], tr_speed, tr_g)['data'];
                        let _0x34fdd2 = (tr_offset - 0xa) / 0xa;
                        let _0x9a51a0 = _0x3f20ba['yaw'] + 0x5a;
                        if (_0x9a51a0 > 0xb4) _0x9a51a0 = _0x9a51a0 - 0x168;
                        if (_0x9a51a0 < -0xb4) _0x9a51a0 = _0x9a51a0 + 0x168;
                        let _0x1694b2 = 洗马猥以微(_0x34fdd2, self_pos, {
                            'yaw': _0x9a51a0,
                            'pitch': 0x0
                        });
                        let _0x3d79e9 = 洗马猥以微(_0x343209, _0x1694b2, {
                            'yaw': _0x3f20ba['yaw'] - Math['atan'](_0x34fdd2 / _0x9c0d07) * (0xb4 / Math['PI']),
                            'pitch': 0x0
                        });
                        let _0x52f20b = getBlock(_0x3d79e9['x'], _0x3d79e9['y'] + _0x587d0f, _0x3d79e9['z']);
                        if (modes['tr_mode'] === 0x0 && _0x52f20b['namespace'] === 'minecraft:air') 鲜兄弟门衰(tr_type, _0x3d79e9['x'], _0x3d79e9['y'] + _0x587d0f + 0.5, _0x3d79e9['z'], 0x1);
                    }
                }
            }
            if (FarmAura) {
                const _0x1dd779 = 奔驰则刘病(self_id);
                for (let _0x557b10 = -fa_range; _0x557b10 < fa_range; _0x557b10++) {
                    for (let _0x29ca31 = -fa_range; _0x29ca31 < fa_range; _0x29ca31++) {
                        const _0x4d8541 = getBlock(_0x1dd779['x'] + _0x557b10, _0x13a789['y'] - 0x1, _0x1dd779['z'] + _0x29ca31);
                        const _0x346a46 = getBlock(_0x1dd779['x'] + _0x557b10, _0x13a789['y'], _0x1dd779['z'] + _0x29ca31);
                        if ((_0x4d8541['namespace'] === 'minecraft:dirt' || _0x4d8541['namespace'] === 'minecraft:grass') && self_item['namespace']['includes']('hoe')) buildBlock(self_id, _0x1dd779['x'] + _0x557b10, _0x13a789['y'] - 0x1, _0x1dd779['z'] + _0x29ca31, 0x1);
                        if (_0x4d8541['namespace'] === 'minecraft:farmland' && (self_item['namespace'] === 'minecraft:beetroot_seeds' || self_item['namespace'] === 'minecraft:wheat_seeds' || self_item['namespace'] === 'minecraft:carrot' || self_item['namespace'] === 'minecraft:potato')) buildBlock(self_id, _0x1dd779['x'] + _0x557b10, _0x13a789['y'] - 0x1, _0x1dd779['z'] + _0x29ca31, 0x1);
                        if (_0x346a46['aux'] === 0x7 && (_0x346a46['namespace'] === 'minecraft:beetroot' || _0x346a46['namespace'] === 'minecraft:wheat' || _0x346a46['namespace'] === 'minecraft:carrots' || _0x346a46['namespace'] === 'minecraft:potatoes')) destroyBlock(self_id, _0x1dd779['x'] + _0x557b10, _0x13a789['y'], _0x1dd779['z'] + _0x29ca31, 0x1);
                        if (self_item['namespace'] === 'minecraft:bone_meal' && _0x346a46['aux'] <= 0x6 && (_0x346a46['namespace'] === 'minecraft:beetroot' || _0x346a46['namespace'] === 'minecraft:wheat' || _0x346a46['namespace'] === 'minecraft:carrots' || _0x346a46['namespace'] === 'minecraft:potatoes')) buildBlock(self_id, _0x1dd779['x'] + _0x557b10, _0x13a789['y'], _0x1dd779['z'] + _0x29ca31, 0x1);
                    }
                }
            }
            if (ActionManager) {
                if (!am_file) {
                    if (ticks % am_delay == 0x0) {
                        for (let _0x2b0049 = 0x0; _0x2b0049 < am_count; _0x2b0049++) sendPlayerAction({
                            'id': self_id,
                            'pos': {
                                'x': _0x13a789['x'],
                                'y': _0x13a789['y'] - 0x1,
                                'z': _0x13a789['z']
                            },
                            'type': Number(am_id),
                            'value': Number(am_value)
                        });
                    }
                } else {
                    const _0x3e7cef = JSON['parse'](火臣欲奉诏(nx_paths + '/PlayerAction.json'));
                    _0x3e7cef['forEach'](_0x2098d2 => {
                        if (_0x2098d2['delay'] % am_tick === 0x0) {
                            for (let _0x2780ec = 0x0; _0x2780ec < _0x2098d2['count']; _0x2780ec++) sendPlayerAction({
                                'id': self_id,
                                'pos': self_pos,
                                'value': _0x2098d2['value'],
                                'type': Number(_0x2098d2['id'])
                            });
                        }
                    });
                }
            }
            if (PlayerAuthManager && ticks % pam_delay === 0x0) {
                for (let _0x1c7266 = 0x0; _0x1c7266 < pam_count; _0x1c7266++) sendPlayerAuthInput({
                    'pos': {
                        'x': _0x13a789['x'],
                        'y': _0x13a789['y'] - 0x1,
                        'z': _0x13a789['z']
                    },
                    'inputs': pam_array['map'](_0x23e8c7 => Number(_0x23e8c7)),
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
            if (AutoJump && _0x50b75f) setMotion(_0x3bddca['x'], aj_y / 0x64, _0x3bddca['z']);
            if (BlockClicker && !bc_select && ac_pos['length'] > 0x0 && ticks % bc_delay == 0x0) ac_pos['forEach'](_0x41c0de => {
                if (bc_packet) silentMove(_0x41c0de['x'], _0x41c0de['y'], _0x41c0de['z']);
                buildBlock(self_id, _0x41c0de['x'], _0x41c0de['y'], _0x41c0de['z'], 0x0);
            });
            if (NoFall && _0x3bddca['y'] < -nf_max && !_0x50b75f) {
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
            if (DrawOval && (ticks % do_delay === 0x0 && do_cycle || do_jump && prev_ground != _0x50b75f && _0x50b75f)) {
                if (do_lock) do_pos = [self_pos['x'], self_pos['y'] - 1.5, self_pos['z']];
                for (let _0x5adadb = 0x0; _0x5adadb < 0x168; _0x5adadb += do_density / 0xa) {
                    const _0x5adddf = do_l_axis * Math['cos'](_0x5adadb * Math['PI'] / 0xb4);
                    const _0x2b0fc2 = do_s_axis * Math['sin'](_0x5adadb * Math['PI'] / 0xb4);
                    鲜兄弟门衰(0x37, do_pos[0x0] + _0x5adddf, do_pos[0x1], do_pos[0x2] + _0x2b0fc2, 0x1);
                }
            }
            if (FakeLag) {
                if (fl_t >= fl_normal + fl_abnormal) {
                    fakelag_status = !fl_reverse;
                    fl_t = 0x0;
                }
                if (fl_t > fl_normal && fl_t < fl_normal + fl_abnormal) fakelag_status = fl_reverse;
                if (fl_show) _0x4fb45a['push'](非臣陨首所(0x1, 'LagStatus', '停止发包: ' + (fakelag_status && modes['fl_mode'] === 0x0) + ', 停止发送移动包: ' + (fakelag_status && modes['fl_mode'] === 0x1) + ', 停止接受移动包 ' + (fakelag_status && modes['fl_mode'] === 0x2) + ', 停止收包: ' + (fakelag_status && modes['fl_mode'] === 0x3), '§r'));
            }
            if (fb_list['length'] > 0x0 && fb_t > fb_delay && !fb_success) {
                const _0x4d21de = fb_list['shift']();
                buildBlock(self_id, Math['round'](_0x4d21de['x']), Math['round'](_0x4d21de['y'] - 0x1), Math['round'](_0x4d21de['z']), 0x0);
                fb_t = 0x0;
                if (fb_list['length'] === 0x0) fb_success = true;
            }
            if (TargetHealth && at_lists['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Health', 'Health: ' + 在故老犹蒙(at_lists[0x0], modes['health_mode']), '§r'));
            if (ShowTargetList && at_lists['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Targets', 郡县逼迫催(at_lists['map'](_0x582747 => getEntityName(_0x582747))), '§r'));
            if (ShowInfo) {
                const _0x28be0d = getEntityAttribute(self_id, 'minecraft:movement');
                const _0x1042eb = Math['sqrt'](_0x3bddca['x'] * _0x3bddca['x'] + _0x3bddca['z'] * _0x3bddca['z']);
                if (show_speed) _0x4fb45a['push'](非臣陨首所(0x1, 'Speed', '水平移动速度: ' + _0x1042eb['toFixed'](0x2) + 'm/s 移动速度: ' + _0x366358['toFixed'](0x2) + 'm/s\n水平坐标速度: ' + _0xcda338['toFixed'](0x2) + 'm/s 坐标速度:' + _0xa9f2b8['toFixed'](0x2) + 'm/s 能力速度:' + _0x28be0d['current']['toFixed'](0x2) + ('\n移动值: [' + _0x3bddca['x']['toFixed'](0x2) + ', ' + _0x3bddca['y']['toFixed'](0x2) + ', ' + _0x3bddca['z']['toFixed'](0x2) + ']'), '§r'));
                if (show_pos) _0x4fb45a['push'](非臣陨首所(0x1, 'Pos', 'EntityPos:[X:' + self_pos['x'] + ', Y:' + self_pos['y'] + ', Z:' + self_pos['z'] + ']\nBlockPos:[X:' + _0x13a789['x'] + ', Y:' + _0x13a789['y'] + ', Z:' + _0x13a789['z'] + ']', '§r'));
                if (show_item && self_item['count'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Item', self_item['name'] + ' §r§ox' + 病常在床蓐(-0x1), '§r'));
                if (show_resources) {
                    const _0x5c3dd3 = {
                        'gold': 病常在床蓐(-0x2, 'minecraft:gold_ingot'),
                        'iron': 病常在床蓐(-0x2, 'minecraft:iron_ingot'),
                        'diamond': 病常在床蓐(-0x2, 'minecraft:diamond'),
                        'emerald': 病常在床蓐(-0x2, 'minecraft:emerald'),
                        'star': 病常在床蓐(-0x2, 'minecraft:nether_star')
                    };
                    const _0xe22399 = getEntityAttribute(self_id, 'minecraft:player.level')['current'];
                    _0x4fb45a['push'](非臣陨首所(0x1, 'Resource', '绿宝石:' + _0x5c3dd3['emerald'] + ', 钻石:' + _0x5c3dd3['diamond'] + ', 金锭:' + _0x5c3dd3['gold'] + ', 铁锭:' + _0x5c3dd3['iron'] + '\n下界之心:' + _0x5c3dd3['star'] + ', 经验:' + _0xe22399, '§r'));
                }
                if (show_target_dis && at_lists['length'] > 0x0) _0x4fb45a['push'](非臣陨首所(0x1, 'Distance', '三维距离: ' + 能上报臣具(self_id, at_lists[0x0])['toFixed'](0x2) + 'm 水平距离: ' + 以表闻辞不(self_id, at_lists[0x0])['toFixed'](0x2) + 'm', '§r'));
                if (show_player_list) _0x4fb45a['push'](非臣陨首所(0x1, 'PlayerList', '世界玩家: ' + _0x14da34['length'] + '人 附近玩家:' + getPlayerList()['length'] + '人 目标数量:' + at_lists['length'] + '人', '§r'));
                if (show_kill_num) _0x4fb45a['push'](非臣陨首所(0x1, 'Kills', '击杀: ' + kills + '人', '§r'));
                if (show_time) _0x4fb45a['push'](非臣陨首所(0x1, 'Time', 'Time: ' + 命诏书特下(seconds) + ', Ticks: ' + ticks, '§r'));
                if (show_attack_rate) _0x4fb45a['push'](非臣陨首所(0x1, 'AttackInfo', '命中率: ' + Math['round'](real_attack / attack_frequency * 0x64) + '%%, 攻击总次数: ' + attack_frequency + ', 空刀次数:' + (attack_frequency - real_attack) + ', 命中次数:' + real_attack, '§r'));
                if (show_real_aps) _0x4fb45a['push'](非臣陨首所(0x1, 'CPS', '点击CPS: ' + (Math['round'](click_num / click_t * 0x14) - 0x14) + '/s 预期APS: ' + (Math['round'](attack_frequency / attack_ticks * 0x14) - 0x14) + '/s, 实际APS: ' + Math['round'](real_attack / attack_ticks * 0x14) + '/s', '§r'));
                if (show_ping) _0x4fb45a['push'](非臣陨首所(0x1, 'PING', gd_ping + 'ms', '§r'));
                if (show_self_health) _0x4fb45a['push'](非臣陨首所(0x1, 'Health', '当前血量: ' + _0x1c3588['current'] + ', 最大值:' + _0x1c3588['max'] + ', 最小值:' + _0x1c3588['min'], '§r'));
                if (show_detail_item) _0x4fb45a['push'](非臣陨首所(0x1, 'ItemData', 'JSON:' + JSON['stringify'](self_item) + '\n\nNBT:' + getEntityCarriedItem(self_id), '§r'));
                if (show_real_time) {
                    const _0x215409 = new Date();
                    const _0x2569a7 = _0x215409['getFullYear']();
                    const _0xa9fb14 = ('0' + (_0x215409['getMonth']() + 0x1))['slice'](-0x2);
                    const _0x5cce80 = ('0' + _0x215409['getDate']())['slice'](-0x2);
                    const _0x196330 = ('0' + _0x215409['getHours']())['slice'](-0x2);
                    const _0x22e93e = ('0' + _0x215409['getMinutes']())['slice'](-0x2);
                    const _0x254ba8 = ('0' + _0x215409['getSeconds']())['slice'](-0x2);
                    const _0xcf2369 = _0x2569a7 + '-' + _0xa9fb14 + '-' + _0x5cce80 + ' ' + _0x196330 + ':' + _0x22e93e + ':' + _0x254ba8;
                    _0x4fb45a['push'](非臣陨首所(0x1, 'RealTime', _0xcf2369, '§r'));
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
                let _0x5e2476 = _0x3f20ba['yaw'];
                _0x5e2476 += rc_angles['angle'] < 0x5a ? rc_angles['angle'] + 0x5a : rc_angles['angle'] - 0x10e;
                if (_0x5e2476 >= 0xb4) _0x5e2476 -= 0x168;
                if (_0x5e2476 <= -0xb4) _0x5e2476 += 0x168;
                let _0x3bb2ee = (_0x50b75f ? 0.22 : 0.23) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0x11e815 = (_0x50b75f ? 0.29 : 0.3) + (rc_boost ? rc_speed / 0x64 : 0x0);
                let _0xba3263 = {};
                if (rc_surround && at_lists['length'] > 0x0 && 能上报臣具(self_id, at_lists[0x0]) <= rc_lock) {
                    let _0x2cc4dc = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
                    let _0x202eeb = 不许臣之进(self_id, at_lists[0x0], 'yaw_rot');
                    let _0x57352b = _0x202eeb > -0x5a || _0x202eeb < 0x5a ? rc_speed : -rc_speed;
                    let _0x37d0fe = _0x5e2476 > -0x5a || _0x5e2476 < 0x5a ? rc_speed : -rc_speed;
                    let _0x2071ed = rc_relative ? _0x57352b : _0x37d0fe;
                    Angel = rc_angles['angle'] > 0x1c2 - rc_range && rc_angles['angle'] <= rc_range + 0xb4 || rc_angles['angle'] > 0xb4 - rc_range && rc_angles['angle'] <= rc_range - 0x5a ? _0x2cc4dc -= _0x2071ed * 0x5 : _0x2cc4dc += _0x2071ed * 0x5;
                    if (_0x2cc4dc > 0xb4) _0x2cc4dc -= 0x168;
                    if (_0x2cc4dc < -0xb4) _0x2cc4dc += 0x168;
                    let _0x2fd56e = 洗马猥以微(rc_dist, getPos(at_lists[0x0]), {
                        'yaw': _0x2cc4dc,
                        'pitch': 0x0
                    });
                    let _0x5449dd = 不许臣之进(_0x2fd56e, self_id, 'yaw_pos');
                    _0xba3263 = 洗马猥以微(rc_legal ? modes['rc_mode'] === 0x0 ? _0x3bb2ee : _0x11e815 : rc_speed / 0x8, self_pos, {
                        'yaw': _0x5449dd,
                        'pitch': 0x0
                    });
                } else _0xba3263 = 洗马猥以微(rc_legal ? modes['rc_mode'] === 0x0 ? _0x3bb2ee : _0x11e815 : rc_speed / 0x8, self_pos, {
                    'yaw': _0x5e2476,
                    'pitch': 0x0
                });
                Camera_anchor_pos = {
                    'x': Camera_anchor_pos['x'] + (_0xba3263['x'] - self_pos['x']),
                    'y': Camera_anchor_pos['y'],
                    'z': Camera_anchor_pos['z'] + (-_0xba3263['z'] + self_pos['z'])
                };
                if (rc_follow && modes['rocker_mode'] < 0x3) {
                    if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) 不行零丁孤(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x5e2476 + sca_yaw);
                    else 不行零丁孤(_0x3f20ba['pitch'], _0x5e2476 - 0xb4);
                }
                if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                if (modes['rocker_mode'] === 0x3) {
                    if (rc_angles['angle'] < 0x13b && rc_angles['angle'] > 0xe1 || rc_angles['angle'] > 0x2d && rc_angles['angle'] < 0x87) {
                        _0xba3263 = 洗马猥以微(rc_speed / 0x8, self_pos, _0x3f20ba);
                        setMotion(_0xba3263['x'] - self_pos['x'], _0xba3263['y'] - self_pos['y'], _0xba3263['z'] - self_pos['z']);
                    } else {
                        const _0x2a01dd = rc_angles['angle'] > 0x13b || rc_angles['angle'] < 0x2d;
                        const _0x23b807 = getCameraRotation();
                        rc_roll += (_0x2a01dd ? 0x1 : -0x1) * 臣荣举臣秀(self_id) / 0x5;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (modes['rocker_mode'] === 0x0) setMotion(_0xba3263['x'] - self_pos['x'], rc_bhop && _0x50b75f || rc_ahop && _0x3bddca['y'] < -0.4 ? rc_y : _0x3bddca['y'], _0xba3263['z'] - self_pos['z']);
                if (modes['rocker_mode'] === 0x1) setPos(_0xba3263['x'], self_pos['y'], _0xba3263['z']);
                if (rc_directions['direction'] === 0x0) rc_angles = {};
            }
            if (typeof rc_uds['operation'] !== 'undefined') {
                const _0x35b73f = getEntityMotion(self_id);
                const _0x4f3131 = getCameraRotation();
                if (rc_uds['operation'] === 'up') {
                    Camera_anchor_pos['y'] += rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] + rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x35b73f['x'], rc_y, _0x35b73f['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw -= Math['sin'](_0x4f3131['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch += Math['cos'](_0x4f3131['roll'] * Math['PI'] / 0xb4) * 0x2;
                        setCameraRotation(rc_pitch, rc_yaw, rc_roll);
                    }
                }
                if (rc_uds['operation'] === 'down') {
                    Camera_anchor_pos['y'] -= rc_y;
                    if (modes['rocker_mode'] === 0x1) setPos(self_pos['x'], self_pos['y'] - rc_y, self_pos['z']);
                    if (modes['rocker_mode'] === 0x0) setMotion(_0x35b73f['x'], -rc_y, _0x35b73f['z']);
                    if (modes['rocker_mode'] === 0x2) setCameraAnchor(Camera_anchor_pos['x'], Camera_anchor_pos['y'], Camera_anchor_pos['z']);
                    if (modes['rocker_mode'] === 0x3) {
                        rc_yaw += Math['sin'](_0x4f3131['roll'] * Math['PI'] / 0xb4) * 0x2;
                        rc_pitch -= Math['cos'](_0x4f3131['roll'] * Math['PI'] / 0xb4) * 0x2;
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
                _0x4fb45a['push'](非臣陨首所(0x1, 'BalanceTimer', '储存的Tick: ' + BalanceTimer_t + 'ticks', '§r'));
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
                    let _0x5465e1 = ticks * mt_speed / 0x14 % 0x5dc0;
                    setWorldData({
                        'time': _0x5465e1
                    });
                } else if (mt_custom === 0x19) {
                    let _0x30f232 = 0x0;
                    if (modes['mt_time'] === 0x0) _0x30f232 = 0x3e8;
                    if (modes['mt_time'] === 0x1) _0x30f232 = 0x32c8;
                    if (modes['mt_time'] === 0x2) _0x30f232 = 0x1770;
                    if (modes['mt_time'] === 0x3) _0x30f232 = 0x30d4;
                    setWorldData({
                        'time': _0x30f232
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
                        showTipMessage('§bProtoHax §r| ' + _0xa9f2b8['toFixed'](0x2) + ' §eBlocks/sec');
                        break;
                    case 0x1:
                        if (tip_t1 > 0xc8) {
                            curl_get('https://v1.jinrishici.com/jieri/chunjie', {}, (_0x3cc16d, _0x41c655) => globalThis['current_poem'] = JSON['parse'](_0x41c655)['content']);
                            tip_t1 = 0x0;
                        }
                        showTipMessage('[§bCheat§ePlugin§r] ' + current_poem);
                        break;
                    case 0x5:
                        showTipMessage('Ping: ' + gd_ping + 'ms Speed: ' + _0xa9f2b8['toFixed'](0x2) + 'B/S APS: ' + Math['round'](real_attack / attack_ticks * 0x14));
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
                for (let _0x111c61 = 0x0; _0x111c61 < mine_speed; _0x111c61++) {
                    let _0xacd953 = mine_list['shift']();
                    if (typeof _0xacd953 != 'object' || _0xacd953['length'] === 0x0) continue;
                    const _0x37ab7d = getBlock(_0xacd953[0x0], _0xacd953[0x1], _0xacd953[0x2]);
                    if (_0x37ab7d['namespace'] != 'minecraft:air' && _0x37ab7d['namespace'] === mine_name) {
                        destroyBlock(self_id, _0xacd953[0x0], _0xacd953[0x1], _0xacd953[0x2], 0x0);
                        mine_current++;
                    }
                }
                if (mine_info) _0x4fb45a['push'](非臣陨首所(0x1, 'Miner', '进度: ' + mine_current + '/' + mine_num + ' - ' + (mine_current / mine_num * 0x64)['toFixed'](0x2) + '%%\n' + getProgress(mine_current, mine_num, '▌', 0x20), '§r'));
            }
            if (AirStuck && as_time_t < as_time && !_0x50b75f) setMotion(0x0, 0x0, 0x0);
            if (_0x4fb45a['length'] > 0x0 && !FakeTip) {
                if (modes['tipType_mode'] === 0x0) showTipMessage('§b◇ §r§lNoveXare §r§7>>> §r' + _0x4fb45a['join']('\n'));
                if (modes['tipType_mode'] === 0x1) updateTextContent(tip_id, _0x4fb45a['join']('\n'));
                if (modes['tipType_mode'] === 0x2) updateTextContent(tip_id, _0x4fb45a['join'](' | '));
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
            prev_heal = _0x1c3588['current'];
            prev_ground = _0x50b75f;
            prev_itemCount = self_itemCount;
        } catch (_0x5bbe2b) {
            clientMessage(_0x5bbe2b['stack']);
        }
        if (ShowNXInfo) addCustomArrayList('NoveXare', 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], 'NoveXare | 用户: ' + getEntityName(self_id) + ' | 目标数量: ' + at_lists['length'] + '个 实体数量: ' + getEntityList()['length'] + ' 玩家数量: ' + getWorldPlayerList()['length'], true);
    }
    setInterval(() => {
        if (bn_list['length'] > 0x0) {
            for (let _0x4d4ff6 = bn_list['length'] - 0x1; _0x4d4ff6 >= 0x0; _0x4d4ff6--) {
                let _0x2742d6 = bn_list[_0x4d4ff6];
                _0x2742d6['x'] -= _0x2742d6['speed'];
                if (_0x2742d6['x'] < 0x0) {
                    bn_list['splice'](_0x4d4ff6, 0x1);
                    removeText(_0x2742d6['id']);
                } else updateTextPosition(_0x2742d6['id'], _0x2742d6['x'], _0x2742d6['y']);
            }
        }
        if (Derp) {
            var _0x3de162 = getEntityRot(self_id);
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
            if (!dp_head) dp_pitch = _0x3de162['pitch'];
            if (!dp_body) dp_yaw = _0x3de162['yaw'];
            if (dp_lock) dp_pitch = 0x5a;
        }
        if (Scaffold && sca_moveRot && self_moving && getEntityIsGround(self_id) && self_item['isBlock']) {
            const _0x71165e = getCameraRotation();
            const _0x3c7257 = 无主辞不赴(getEntityMotion(self_id), getPos(self_id), 0x5);
            const _0x12a8cf = sca_move ? 不许臣之进(_0x3c7257, self_id, 'yaw_pos') : _0x71165e['yaw'] > 0x0 ? 0xb4 - _0x71165e['yaw'] : -0xb4 - _0x71165e['yaw'];
            不行零丁孤(sca_pitch, (sca_len === 0x1 ? 0x0 : 0xb4) + _0x12a8cf + sca_yaw);
        }
        if (AssistAim && aa_silent && at_lists['length'] > 0x0) {
            let _0x198e76 = 不许臣之进(self_id, at_lists[0x0], 'pitch_pos');
            let _0x27ca5c = 不许臣之进(self_id, at_lists[0x0], 'yaw_pos');
            不行零丁孤(_0x198e76, _0x27ca5c);
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

    function onExecuteCommandEvent(_0x40c14d) {
        if (ActivitySender) sendChatMessage('我正在执行命令');
        if (ShowCommand) 非臣陨首所(0x0, 'ExecuteCMD', _0x40c14d, '§r');
        const _0x330383 = _0x40c14d['split'](' ');
        if (_0x330383[0x0] === '/set' && _0x330383[0x1] === 'pos') {
            nx_goal = {
                'x': Number(_0x330383[0x2]),
                'y': Number(_0x330383[0x3]),
                'z': Number(_0x330383[0x4])
            };
            if (_0x330383[0x5]) nx_goalSpeed = Number(_0x330383[0x5]);
            非臣陨首所(0x0, 'Tip', '已设置目标坐标 准备赶路', '§r');
            return true;
        }
        if (_0x330383[0x0] === '/set' && _0x330383[0x1] === 'default' && _0x330383[0x2] === 'config') {
            if (_0x330383[0x3] === 'clear') {
                非臣陨首所(0x0, 'Tip', '已清除默认配置', '§r');
                setData('nx_defaultCfg', 'null');
                return true;
            }
            if (火臣欲奉诏(nx_cfgs + '/' + _0x330383[0x3] + '.json') != '{}') {
                setData('nx_defaultCfg', _0x330383[0x3]);
                非臣陨首所(0x0, 'Tip', '已设置默认配置 - ' + _0x330383[0x3], '§r');
            } else 非臣陨首所(0x0, 'Tip', '文件为空或不存在 - ' + _0x330383[0x3], '§r');
            return true;
        }
        if (_0x330383[0x0] === '/target') {
            if (_0x330383[0x1] === 'self') at_lists[0x0] = self_id;
            if (_0x330383[0x1] === 'player') at_lists = getPlayerList();
            if (_0x330383[0x1] === 'all') at_lists = getEntityList();
            非臣陨首所(0x0, 'Tip', '已设置' + at_lists['length'] + '个目标', '§r');
            return true;
        }
        if (_0x330383[0x0] === '/cleaner') {
            if (_0x330383[0x1] === 'reload') clear_config = JSON['parse'](火臣欲奉诏(cleaner_path));
            if (_0x330383[0x1] === 'load') clear_config = JSON['parse'](火臣欲奉诏(_0x330383[0x2]));
        }
        if (_0x330383[0x0] === '/bind') {
            if (_0x330383[0x1] === 'RunAway') {
                if (typeof globalThis[_0x330383[0x2]] == 'undefined' && typeof nx_funcid[_0x330383[0x2]] == 'undefined' || typeof globalThis[_0x330383[0x3]] == 'undefined' && typeof nx_funcid[_0x330383[0x3]] == 'undefined') {
                    非臣陨首所(0x0, 'Tip', 'NX功能Key不存在 或跑路功能Tag不存在', '§r');
                    return true;
                }
                let _0x2d34d6 = typeof globalThis[_0x330383[0x3]] !== 'undefined';
                nx_raBinds[_0x330383[0x2]] = {
                    'module': _0x330383[0x3],
                    'isNX': _0x2d34d6
                };
                非臣陨首所(0x0, 'Tip', '绑定 ' + _0x330383[0x2] + ' 与 ' + _0x330383[0x3] + ' 成功', '§r');
                nx_cfg['nx_raBinds'] = nx_raBinds;
                return true;
            }
            if (_0x330383[0x1] === 'key' && typeof globalThis[_0x330383[0x2]] !== 'undefined') {
                nx_isBind = _0x330383[0x2];
                非臣陨首所(0x0, 'Tip', '按下任意按键与' + _0x330383[0x2] + '绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x330383[0x1]] === 'undefined') nx_binds[_0x330383[0x1]] = [];
            if (typeof globalThis[_0x330383[0x2]] !== 'undefined' && typeof globalThis[_0x330383[0x1]] !== 'undefined') {
                nx_binds[_0x330383[0x1]]['push'](_0x330383[0x2]);
                非臣陨首所(0x0, 'Tip', '绑定 ' + _0x330383[0x1] + ' 与 ' + _0x330383[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 非臣陨首所(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x330383[0x0] === '/unbind') {
            if (_0x330383[0x1] === 'key' && typeof globalThis[_0x330383[0x2]] !== 'undefined') {
                for (let _0x1342f2 in nx_keys) {
                    if (nx_keys[_0x1342f2] === _0x330383[0x2]) {
                        delete nx_keys[_0x1342f2];
                        break;
                    }
                }
                nx_isBind = _0x330383[0x2];
                非臣陨首所(0x0, 'Tip', '解除' + _0x330383[0x2] + '的按键绑定', '§r');
                return true;
            }
            if (typeof nx_binds[_0x330383[0x1]] === 'undefined') {
                非臣陨首所(0x0, 'Tip', '该功能没有绑定任何功能', '§r');
                return true;
            }
            if (typeof globalThis[_0x330383[0x1]] !== 'undefined' && _0x330383[0x2] === 'all') {
                delete nx_binds[_0x330383[0x1]];
                非臣陨首所(0x0, 'Tip', '解除 ' + _0x330383[0x1] + ' 的所有绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (_0x330383[0x1] === 'all') {
                nx_binds = {};
                非臣陨首所(0x0, 'Tip', '解除所有功能绑定', '§r');
                nx_cfg['binds'] = nx_binds;
                return true;
            }
            if (typeof globalThis[_0x330383[0x2]] !== 'undefined' && typeof globalThis[_0x330383[0x1]] !== 'undefined') {
                nx_binds[_0x330383[0x1]]['splice'](nx_binds[_0x330383[0x1]]['indexOf'](_0x330383[0x2]), 0x1);
                if (nx_binds[_0x330383[0x1]]['length'] === 0x0) delete nx_binds[_0x330383[0x1]];
                非臣陨首所(0x0, 'Tip', '解除绑定 ' + _0x330383[0x1] + ' 和 ' + _0x330383[0x2] + ' 成功', '§r');
                nx_cfg['binds'] = nx_binds;
            } else 非臣陨首所(0x0, 'Tip', '功能Key不存在', '§r');
            return true;
        }
        if (_0x330383[0x0] === '/nx') {
            if (typeof globalThis[_0x330383[0x2]] === 'undefined') {
                非臣陨首所(0x0, 'Tip', '变量不存在', '§r');
                return true;
            }
            if (_0x330383[0x1] === 'num') globalThis[_0x330383[0x2]] = Number(_0x330383[0x3]);
            if (_0x330383[0x1] === 'bool') globalThis[_0x330383[0x2]] = Boolean(_0x330383[0x3]);
            if (_0x330383[0x1] === 'str') globalThis[_0x330383[0x2]] = _0x330383[0x3];
            if (_0x330383[0x1] === 'arr') globalThis[_0x330383[0x2]] = 峻责臣逋慢(_0x330383[0x3]);
            if (_0x330383[0x1] === 'obj') globalThis[_0x330383[0x2]] = JSON['parse'](_0x330383[0x3]);
            非臣陨首所(0x0, 'setValue', globalThis[_0x330383[0x2]] + ' => ' + _0x330383[0x2], '§r');
            return true;
        }
    }

    function onCommandOutputEvent(_0x1ff186, _0x251aff, _0x2d3106) {
        if (ShowCommandOutput) 非臣陨首所(0x0, 'Tip', '§e类型:§r' + _0x1ff186 + ' §e结果:§r' + _0x2d3106 + ' §e数据:§r' + JSON['stringify'](_0x251aff, null, 0x2), '§r');
        if (Crasher && modes['cs_mode'] === 0x8 && !_0x2d3106) return true;
    }

    function onCallModuleEvent(_0x559e2a) {
        if (ShowUI) 非臣陨首所(0x0, 'UI-Data', JSON['stringify'](_0x559e2a, null, 0x4), '§r');
        try {
            if (typeof _0x559e2a !== 'undefined' && typeof _0x559e2a['fun'] !== 'undefined' && typeof nx_raBinds[_0x559e2a['fun']] !== 'undefined') {
                const _0x588b42 = nx_raBinds[_0x559e2a['fun']]['module'];
                if (!nx_raBinds[_0x559e2a['fun']]['isNX']) callModule(nx_funcid[_0x588b42], JSON['stringify']({
                    'value': _0x559e2a['value']
                }));
                else 既无伯叔终(_0x588b42, _0x559e2a['value']);
            }
            if (ActivitySender) sendChatMessage('我正在调用UI');
            if (PVPDaLao) setTitle('又或是红石大佬');
            if (typeof _0x559e2a['name'] === 'undefined') {
                if (Rocker && typeof _0x559e2a['angle'] !== 'undefined') rc_angles = _0x559e2a;
                if (Rocker && typeof _0x559e2a['direction'] !== 'undefined') rc_directions = _0x559e2a;
                if (Rocker && typeof _0x559e2a['operation'] !== 'undefined') rc_uds = _0x559e2a;
                return;
            }
            if (!_0x559e2a['name']['includes']('NoveXare') && _0x559e2a['fun'] != 'fun_ride_flying') return;
            if (typeof _0x559e2a['SauthLogin'] !== 'undefined') {
                Sauths = _0x559e2a['SauthLogin'];
                setData('sauths', Sauths);
                showToast('请退出我的世界登录 并重新登录');
            }
            if (typeof _0x559e2a['CustomBanTip'] !== 'undefined') bantip = _0x559e2a['CustomBanTip'];
            if (typeof _0x559e2a['key'] !== 'undefined') {
                const _0x44969b = _0x559e2a['key'];
                if (_0x44969b === 'ItemEditor') {
                    const _0x3c07b2 = getEntityCarriedItem(self_id);
                    const _0x2080a7 = 险衅夙遭闵(_0x3c07b2, 'Damage:', 's');
                    const _0xe789fb = 险衅夙遭闵(_0x3c07b2, '{Damage:', '}', ',');
                    if (modes['itemedit_mode'] === 0x0) setEntityCarriedItem(self_id, _0x3c07b2['replace']('Damage:' + _0x2080a7 + 's', 'Damage:' + ie_data + 's'));
                    if (modes['itemedit_mode'] === 0x1) setEntityCarriedItem(self_id, _0x3c07b2['replace']('{Damage:' + _0xe789fb, '{Damage:' + ie_data));
                    if (modes['itemedit_mode'] > 0x1) setEntityCarriedItem(self_id, _0x3c07b2['replace']('{', '{' + (modes['itemedit_mode'] === 0x2 ? 'CanPlaceOn' : 'CanDestroy') + ':' + nx_blocks + ','));
                    if (ie_drop) setTimeout(() => dropPlayerInventorySlot(self_id, getPlayerSelectItemSlot(self_id), false, true), ie_delay * 0x32);
                    else showToast('请长按物品栏丢弃手中物品');
                }
                if (_0x44969b === 'EditBackGround') {
                    const _0x491d7a = 'loginVideoNew.mp4';
                    const _0x579a20 = '/data/user/0/com.netease.x19/files/games/com.netease/storge/asset/';
                    if (!file_exist(getResource() + '/' + _0x491d7a)) {
                        showToast('请将视频改成loginVideoNew.mp4 并放在 ' + getResource() + ' 中');
                        return;
                    }
                    file_delete(_0x579a20 + _0x491d7a);
                    file_copy(getResource() + '/' + _0x491d7a, _0x579a20 + _0x491d7a);
                    showToast('已复制文件');
                }
                if (_0x44969b === 'BJDTp') {
                    let _0x38b881 = getPlayerList();
                    let _0x42e74e = _0x38b881['length'] > 0x0 ? _0x38b881['map'](_0x3cddb7 => ({
                        'text': getEntityName(_0x3cddb7) + '\n距离: ' + 能上报臣具(self_id, _0x3cddb7)['toFixed'](0x2)
                    })) : [{
                        'text': '没有数据'
                    }];
                    let _0x32b1fe = {
                        'type': 'form',
                        'title': '选择',
                        'content': '选择一个目标',
                        'buttons': _0x42e74e
                    };
                    const _0x12ba02 = JSON['stringify'](_0x32b1fe);
                    addForm(_0x12ba02, function(_0x3ef7ef) {
                        if (_0x38b881['length'] > 0x0 && _0x3ef7ef >= 0x0) {
                            var _0x3d7829 = _0x38b881[_0x3ef7ef];
                            var _0x124eb3 = getPos(_0x3d7829);
                            setPos(_0x124eb3['x'], _0x124eb3['y'] + 1.8, _0x124eb3['z']);
                            buildBlock(self_id, _0x124eb3['x'], _0x124eb3['y'], _0x124eb3['z'], 0x1);
                        }
                    });
                }
                if (_0x44969b === 'exit') {
                    非臣陨首所(0x0, 'Tip', 'Exit Script!', '§c');
                    if (AutoSaveCfg) {
                        非臣陨首所(0x0, 'Tip', '自动保存当前配置', '§r');
                        const _0x239992 = Date['now']();
                        File['write'](nx_cfgs + '/自动保存配置 - ' + _0x239992 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        if (AutoLoadCfg) setData('nx_defaultCfg', '自动保存配置 - ' + _0x239992);
                    }
                    exit();
                    gc();
                }
                if (_0x44969b === 'DropInv') {
                    for (let _0x52f03a = 0x0; _0x52f03a < 0x24; _0x52f03a++) {
                        const _0xcc71f = getInventory(self_id, _0x52f03a);
                        if (_0xcc71f['namespace'] === 'minecraft:air') continue;
                        if (_0xcc71f['count'] < 0x1) continue;
                        dl_list['push'](_0x52f03a);
                    }
                }
                if (_0x44969b === 'LookTP') {
                    let _0x120b4e = {};
                    for (let _0x508145 = 0x0; _0x508145 < 0x1f4; _0x508145++) {
                        _0x120b4e = 洗马猥以微(_0x508145, getPos(self_id), getEntityRot(self_id));
                        const _0x2124f3 = getBlock(_0x120b4e['x'], _0x120b4e['y'], _0x120b4e['z']);
                        if (_0x2124f3['namespace'] != 'minecraft:air') break;
                    }
                    if (_0x120b4e != {}) {
                        const _0x171386 = getPos(self_id);
                        if (modes['LookTP_mode'] === 0x0) 而刘夙婴疾(_0x120b4e['x'], _0x120b4e['y'] + 1.53, _0x120b4e['z']);
                        if (modes['LookTP_mode'] === 0x1) setPos(_0x120b4e['x'], _0x120b4e['y'] + 1.53, _0x120b4e['z']);
                    }
                }
                if (_0x44969b === 'OpenChest') {
                    let _0x4763d6 = {
                        'type': 'form',
                        'title': '容器列表',
                        'content': '请选择需要打开的容器',
                        'buttons': [{
                            'text': '暂无容器'
                        }]
                    };
                    let _0x626c52 = [];
                    let _0x105ecf = 0x0;
                    let _0x46b0ac = 奔驰则刘病(self_id);
                    const _0x51df5e = ['minecraft:barrel', 'minecraft:chest', 'minecraft:trapped_chest'];
                    const _0x4ac2cd = 'shulker_box';
                    for (let _0x5ab1bb = -0x7; _0x5ab1bb < 0x7; _0x5ab1bb++) {
                        for (let _0x2bc9b6 = -0x7; _0x2bc9b6 < 0x7; _0x2bc9b6++) {
                            for (let _0x5669ed = -0x7; _0x5669ed < 0x7; _0x5669ed++) {
                                const _0x224816 = _0x5ab1bb + _0x46b0ac['x'];
                                const _0x1cc1e8 = _0x2bc9b6 + _0x46b0ac['y'];
                                const _0x565cc8 = _0x5669ed + _0x46b0ac['z'];
                                const _0x4a7085 = getBlock(_0x224816, _0x1cc1e8, _0x565cc8);
                                if (_0x51df5e['includes'](_0x4a7085['namespace']) || _0x4a7085['namespace']['includes'](_0x4ac2cd)) {
                                    const _0x5c4023 = getBlock(_0x224816, _0x1cc1e8 + 0x1, _0x565cc8);
                                    _0x4763d6['buttons'][_0x105ecf] = {
                                        'text': '命名空间: ' + _0x4a7085['namespace'] + '\n坐标:   ' + (_0x5c4023['namespace'] === 'minecraft:air' ? '' : ' §c=>§e 容器顶上存在方块')
                                    };
                                    _0x626c52[_0x105ecf] = {
                                        'x': _0x224816,
                                        'y': _0x1cc1e8,
                                        'z': _0x565cc8
                                    };
                                    _0x105ecf++;
                                }
                            }
                        }
                    }
                    if (_0x105ecf === 0x0) {
                        非臣陨首所(0x0, 'Tip', '暂无容器', '§r');
                        return;
                    }
                    addForm(JSON['stringify'](_0x4763d6), function(_0x5bee54) {
                        var _0x4de542 = _0x626c52[_0x5bee54];
                        buildBlock(self_id, _0x4de542['x'], _0x4de542['y'], _0x4de542['z'], 0x1);
                        非臣陨首所(0x0, 'Tip', '已打开该容器', '§r');
                    });
                }
                if (_0x44969b === 'UpJump') setMotion(0x0, up_down_speed, 0x0);
                if (_0x44969b === 'DownJump') setMotion(0x0, -up_down_speed, 0x0);
                if (_0x44969b === 'rpc_repeat') {
                    for (let _0x12d237 = 0x0; _0x12d237 < rpc_repeat_times; _0x12d237++) sendRpc(prev_rpc['id'], prev_rpc['data']);
                }
                if (_0x44969b === 'AttackSelf_one') 守臣逵察臣(self_id, Swing);
                if (_0x44969b === 'RemoveSelf') removeEntity(self_id);
                if (_0x44969b === 'QuitGame') leaveWorld();
                if (_0x44969b === 'sl_delete') setData('sauths', '');
                if (_0x44969b === 'dc_delete') dc_pos = [];
                if (_0x44969b === 'SearchModule') {
                    addForm('{"type":"custom_form","title":"搜索功能","content":[{"type":"input","text":"功能名或者功能Key","placeholder":"AssistAim或自动瞄准","default":""},{"type": "toggle","text": "模糊搜索","default": true},{"type": "toggle","text": "搜索功能","default": true},{"type": "toggle","text": "搜索功能选项","default": false}]}', function(_0x31f4a6, _0x17ad6f, _0x157541, _0x1d8fcd) {
                        var _0x1c6711 = JSON['parse']('{"type":"Menu","title":{"name":"『Search』","size":12,"elevation":3,"background":"$menu_title_background_color","padding":[5,4,5,4],"colors":["$menu_title_gradient_text_begin_color","$menu_title_gradient_text_end_color"]},"color":"$menu_color","alpha":0.9,"items":[{"type":"TextView","name":"NoveXare搜索结果","size":13,"color":"$menu_item_color","tag":"extra_nove_xare","padding":[5,5,5,5],"items":[{"type":"TextView","name":"没有结果","color":"$menu_item_color","size":12,"padding":[5,5,5,5]}]}]}');
                        var _0x3eb606 = 0x0;
                        var _0x3b590b = getResource();
                        var _0x25c9e6 = JSON['parse'](File['read'](_0x3b590b + '/ui/ui_definition.json'))['ui']['map'](_0x3cf248 => ({
                            'name': _0x3cf248 + '.json',
                            'path': _0x3b590b + '/ui/' + _0x3cf248 + '.json'
                        }));
                        for (var _0x4b31c1 of _0x25c9e6) {
                            if (!_0x4b31c1['name']['includes']('NoveXare')) continue;
                            var _0x3cf7f5 = JSON['parse'](File['read'](_0x4b31c1['path']));
                            if (typeof _0x3cf7f5['items'][0x0]['items'] === 'undefined') continue;
                            for (var _0x4df17b of _0x3cf7f5['items'][0x0]['items']) {
                                if (typeof _0x4df17b['name'] === 'undefined' || typeof _0x4df17b['key'] === 'undefined') continue;
                                if (_0x157541 && _0x4df17b['type'] != 'Switch') continue;
                                if (_0x1d8fcd && _0x4df17b['type'] == 'Switch') continue;
                                if (!_0x17ad6f && (_0x4df17b['name'] === _0x31f4a6 || _0x4df17b['key'] === _0x31f4a6) || _0x17ad6f && (_0x4df17b['name']['includes'](_0x31f4a6) || _0x4df17b['key']['includes'](_0x31f4a6))) {
                                    _0x1c6711['items'][0x0]['items'][_0x3eb606] = _0x4df17b;
                                    _0x3eb606++;
                                }
                            }
                        }
                        loadMenu('search_' + _0x31f4a6, JSON['stringify'](_0x1c6711));
                        showMenu('search_' + _0x31f4a6);
                    });
                }
                if (_0x44969b === 'sp_clear') sp_posList = [];
                if (_0x44969b === 'sp_add') {
                    const {
                        x,
                        y,
                        z
                    } = 奔驰则刘病(self_id);
                    addForm('{"type":"custom_form","title":"添加坐标","content":[{"type":"input","text":"以英文逗号 , 分割坐标","placeholder":"0,0,0","default":"' + 郡县逼迫催([x, y, z]) + '"}]}', function(_0x531524) {
                        var _0x14c4d9 = _0x531524['split'](',');
                        sp_posList['push']({
                            'x': Number(_0x14c4d9[0x0]),
                            'y': Number(_0x14c4d9[0x1]),
                            'z': Number(_0x14c4d9[0x2])
                        });
                        非臣陨首所(0x0, 'Tip', '添加坐标成功 当前' + sp_posList['length'] + '组坐标', '§r');
                    });
                }
                if (_0x44969b === 'sp_load') {
                    const _0xb65f39 = '{"type":"custom_form","title":"输入路径","content":[{"type":"input","text":"路径:","default":""}]}';
                    addForm(_0xb65f39, function(_0x151555) {
                        var _0x3e4a62 = File['read'](_0x151555);
                        if (_0x3e4a62 != '' && SoundPlayer) {
                            sp_data = JSON['parse'](_0x3e4a62);
                            sp_file = _0x3e4a62;
                            sp_length = sp_data['length'];
                            非臣陨首所(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                        } else 非臣陨首所(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                    });
                }
                if (_0x44969b === 'sp_select') {
                    const _0x957313 = {
                        'type': 'form',
                        'title': '音乐文件',
                        'content': '选择要加载的音乐',
                        'buttons': [{
                            'text': '没有文件'
                        }]
                    };
                    const _0x59f3ef = file_list(getResource() + '/sound_manager');
                    _0x59f3ef['sort']((_0x4bed91, _0x74e962) => _0x4bed91['name']['localeCompare'](_0x74e962['name']));
                    for (let _0x2bb1bc = 0x0; _0x2bb1bc < _0x59f3ef['length']; _0x2bb1bc++) {
                        _0x957313['buttons'][_0x2bb1bc] = {
                            'text': _0x59f3ef[_0x2bb1bc]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/sound_glyph_color_2x.png'
                            }
                        };
                    }
                    const _0x3f5062 = JSON['stringify'](_0x957313);
                    addForm(_0x3f5062, function(_0x14d71d) {
                        if (_0x59f3ef['length'] > 0x0 && _0x14d71d >= 0x0) {
                            var _0x4d4999 = File['read'](_0x59f3ef[_0x14d71d]['path']);
                            if (_0x4d4999 != '' && SoundPlayer) {
                                sp_data = JSON['parse'](_0x4d4999);
                                sp_file = _0x4d4999;
                                sp_length = sp_data['length'];
                                非臣陨首所(0x0, 'Tip', '加载成功 共' + sp_data['length'] + '条音频数据', '§r');
                            } else 非臣陨首所(0x0, 'Tip', '加载失败 - 文件为空或不存在或未启用功能', '§r');
                        }
                    });
                }
                if (_0x44969b === 'save_config') {
                    const _0x151c36 = '{"type":"custom_form","title":"输入保存名称","content":[{"type":"input","text":"名称:","default":"配置_' + (Object['keys'](nx_cfg)['length'] - 0x4) + '_' + Date['now']() + '"},{"type": "toggle","text": "清除记录的配置","default": false}]}';
                    addForm(_0x151c36, function(_0x485443, _0x1042a9) {
                        File['write'](nx_cfgs + '/' + _0x485443 + '.json', JSON['stringify'](nx_cfg, null, 0x4));
                        非臣陨首所(0x0, 'Tip', '保存成功', '§r');
                        if (_0x1042a9) nx_cfg = {
                            'binds': {},
                            'key_binds': [],
                            'nx_raBinds': [],
                            'name': getEntityName(self_id)
                        };
                    });
                }
                if (_0x44969b === 'load_config') {
                    const _0x4b8290 = {
                        'type': 'form',
                        'title': '配置文件',
                        'content': '选择要加载的配置',
                        'buttons': [{
                            'text': '§c没有配置'
                        }]
                    };
                    const _0x1694f6 = file_list(nx_cfgs);
                    _0x1694f6['sort']((_0x1ae0c5, _0x781fd0) => _0x1ae0c5['name']['localeCompare'](_0x781fd0['name']));
                    for (let _0x5ce7e4 = 0x0; _0x5ce7e4 < _0x1694f6['length']; _0x5ce7e4++) {
                        _0x4b8290['buttons'][_0x5ce7e4] = {
                            'text': '§e' + _0x1694f6[_0x5ce7e4]['name'],
                            'image': {
                                'type': 'path',
                                'data': 'textures/ui/gear.png'
                            }
                        };
                    }
                    const _0x515783 = JSON['stringify'](_0x4b8290);
                    addForm(_0x515783, function(_0x42df64) {
                        if (_0x1694f6['length'] > 0x0 && _0x42df64 >= 0x0) {
                            let _0x3a8e2d = JSON['parse'](火臣欲奉诏(_0x1694f6[_0x42df64]['path']));
                            let _0x514782 = 0x0;
                            nx_binds = _0x3a8e2d['binds'];
                            nx_keys = _0x3a8e2d['key_binds'];
                            nx_raBinds = _0x3a8e2d['nx_raBinds'];
                            for (let _0x3b04f8 in _0x3a8e2d) {
                                _0x514782++;
                                if (_0x3b04f8['includes']('_mode') && _0x559e2a['index']) modes[_0x3b04f8] = _0x3a8e2d[_0x3b04f8];
                                if (_0x3b04f8 != 'nx_raBinds' && _0x3b04f8 != 'key_binds' && _0x3b04f8 != 'binds' && _0x3b04f8 != 'name') 既无伯叔终(_0x3b04f8, _0x3a8e2d[_0x3b04f8]);
                            }
                            nx_cfg = _0x3a8e2d;
                            非臣陨首所(0x0, 'Tip', '成功加载' + _0x3a8e2d['name'] + '的配置，共' + _0x514782 + '条配置', '§r');
                        }
                    });
                }
                if (_0x44969b === 'rpc_select') {
                    const _0x18e6a8 = {
                        'type': 'form',
                        'title': 'PyRpc列表',
                        'content': '选择PyRpc',
                        'buttons': [{
                            'text': '没有PyRpc'
                        }]
                    };
                    let _0x277301 = JSON['parse'](File['read'](getResource() + '/GBRC/NoveXare/PyRpc_Record.json'));
                    for (let _0x3862ca = 0x0; _0x3862ca < _0x277301['length']; _0x3862ca++) {
                        _0x18e6a8['buttons'][_0x3862ca] = {
                            'text': (_0x277301[_0x3862ca]['type'] === 'Send' ? '§a' : '§c') + _0x277301[_0x3862ca]['packet_str']
                        };
                    }
                    const _0x4d3894 = JSON['stringify'](_0x18e6a8);
                    addForm(_0x4d3894, function(_0x300b28) {
                        prev_rpc = {
                            'id': _0x277301[_0x300b28]['id'],
                            'data': _0x277301[_0x300b28]['packet_bin']
                        };
                        非臣陨首所(0x0, 'Tip', '已设置上一条PyRpc', '§r');
                    });
                }
                if (_0x44969b === 'cw_range') {
                    let _0x1216e1 = getPlayerList();
                    let _0xcdbe5e = 0x0;
                    for (let _0x40b2c3 of _0x1216e1) {
                        const _0x428564 = getPos(_0x40b2c3);
                        const _0x49f447 = getDistance(_0x428564, getPos(self_id));
                        if (!at_whileLists['includes'](_0x40b2c3) && _0x49f447 < cw_size && _0x40b2c3 != self_id) {
                            at_whileLists['push'](_0x40b2c3);
                            _0xcdbe5e++;
                        }
                    }
                    非臣陨首所(0x0, 'Tip', '已添加' + _0xcdbe5e + '个玩家到白名单', '§r');
                }
                if (_0x44969b === 'KickSelf')
                    for (let _0xe28d9e = 0x0; _0xe28d9e < 0x3e8; _0xe28d9e++) 守臣逵察臣(self_id, Swing);
                if (_0x44969b === 'bc_delete') ac_pos = [];
                if (_0x44969b === 'cm_depart') departCamera();
                if (_0x44969b === 'cm_anchor') setCameraAnchor(0x0, 0x0, 0x0);
                if (_0x44969b === 'cm_reset') resetCamera();
                if (_0x44969b === 'cm_lock') lockCamera();
                if (_0x44969b === 'ou_recover') otherId = null;
                if (_0x44969b === 'delete_chest') ca_chest_pos = [];
                if (_0x44969b === 'do_place') do_pos = [self_pos['x'], self_pos['y'], self_pos['z']];
                if (_0x44969b === 'fm_place') fm_pos = self_pos;
                if (_0x44969b && ['ct_team', 'km_text', 'spm_text', 'am_text', 'ka_text', 'tp_type', 'lp_type', 'ap_type', 'arp_type', 'srp_type', 'th_head', 'tr_type', 'as_type', 'sp_type', 'as_level', 'am_id', 'am_value', 'pam_id', 'pam_value', 'pam_array', 'sp_level', 'cs_text', 'rpc_black', 'rpc_tipWhite', 'rpc_sendBlack', 'cm_black', 'rpc_recBlack', 'rpc_white', 'hs_item', 'hs_slot', 'rpc_sendWhite', 'rpc_recWhite', 'at_typeWhite', 'ie_data', 'mine_white', 'cs_white', 'mine_black', 'cs_black', 'at_regex']['includes'](_0x44969b)) 臣上道州司(_0x44969b, globalThis[_0x44969b]);
                if (_0x44969b === 'cw_add' || _0x44969b === 'ct_add' || _0x44969b === 'ct_add') 蒙国恩除臣(_0x44969b === 'cw_add' ? 'at_whileLists' : 'at_lists', 0x1);
                if (_0x44969b === 'fw_target' || _0x44969b === 'fc_target') 蒙国恩除臣(_0x44969b === 'fw_target' ? 'fw_target' : 'fc_target', 0x0);
                if (_0x44969b === 'cm_target') 蒙国恩除臣('cm_target', 0x0);
                if (_0x44969b === 'EditY') setPos(self_pos['x'], Edit_Y, self_pos['z']);
                if (_0x44969b === 'srp_add') srp_type = Number(srp_type) + 0x1;
                if (_0x44969b === 'cw_remove') at_whileLists = [];
                if (_0x44969b === 'DumpList') File['write'](nx_paths + '/List.json', JSON['stringify']({
                    'targets': at_lists['map'](_0x38d411 => ({
                        'name': getEntityName(_0x38d411),
                        'id': _0x38d411,
                        'namespace': getEntityNamespace(_0x38d411)
                    })),
                    'players': getWorldPlayerList(),
                    'entities': getEntityList()['map'](_0x2d84ac => ({
                        'name': getEntityName(_0x2d84ac),
                        'id': _0x2d84ac,
                        'namespace': getEntityNamespace(_0x2d84ac)
                    }))
                }));
                if (_0x44969b === 'DumpWorldInfo') File['write'](nx_paths + '/WorldInfo.json', JSON['stringify'](getWorldData(), null, 0x2));
                if (_0x44969b === 'ImportWorldInfo') setWorldData(JSON['parse'](火臣欲奉诏(nx_paths + '/WorldInfo.json')));
                if (_0x44969b === 'Rusher') {
                    const _0x342c50 = getCameraRotation();
                    let _0x10c3dc = 洗马猥以微(rush_length / 0x6, getPos(self_id), {
                        'yaw': _0x342c50['yaw'] > 0x0 ? 0xb4 - _0x342c50['yaw'] : -0xb4 - _0x342c50['yaw'],
                        'pitch': -_0x342c50['pitch']
                    });
                    setMotion(_0x10c3dc['x'] - self_pos['x'], _0x10c3dc['y'] - self_pos['y'], _0x10c3dc['z'] - self_pos['z']);
                }
                return;
            }
            for (let _0x829ed4 in _0x559e2a) {
                if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x829ed4)) continue;
                if (typeof _0x559e2a['index'] !== 'undefined' && modes[_0x829ed4] !== _0x559e2a['index'] - 0x1 && _0x559e2a['index'] > 0x0) {
                    modes[_0x829ed4] = _0x559e2a['index'] - 0x1;
                    nx_cfg[_0x829ed4] = _0x559e2a['index'] - 0x1;
                    非臣陨首所(0x0, _0x829ed4['toUpperCase'](), '§7>>>§r SetMode §7>> §r' + _0x559e2a[_0x829ed4], '§r');
                    if (_0x829ed4 === 'tip_mode' && modes['tip_mode'] === 0x1) {
                        callModule(0x29, JSON['stringify']({
                            'array_list': true,
                            'array_offset_x': fst_x / 0x5,
                            'array_offset_y': fst_y / 0x5
                        }));
                        showToast('注: 该功能会影响正常的ArrayList显示');
                    }
                    return true;
                }
                if (_0x829ed4 === 'Criticals') {
                    if (_0x559e2a[_0x829ed4]) playerJump();
                    else {
                        cc_status = false;
                        callModule(0x2c, JSON['stringify']({
                            'value': false,
                            'no_move_check': true,
                            'no_fall_check': true
                        }));
                    }
                }
                if (_0x829ed4 === 'KickAura' && ka_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x559e2a[_0x829ed4],
                    'count': ka_packet
                }));
                if (_0x829ed4 === 'RandomArrayList' && !_0x559e2a[_0x829ed4]) {
                    for (let _0x5c013c = 0x0; _0x5c013c < ral_num; _0x5c013c++) addCustomArrayList('RandomArrayList' + _0x5c013c, '', '', false);
                }
                if (_0x829ed4 === 'Rocker') callModule(0x39, JSON['stringify']({
                    'value': modes['rc_mode'] === 0x1 && _0x559e2a[_0x829ed4],
                    'fov': 0x96
                }));
                if (_0x829ed4 === 'FakeMove') {
                    if (_0x559e2a[_0x829ed4]) fmo_pos = getPos(self_id);
                    else if (!_0x559e2a[_0x829ed4]) 就职诏书切(fmo_pos['x'], fmo_pos['y'], fmo_pos['z']);
                    let _0x1b1b2f = {
                        'enable': !_0x559e2a[_0x829ed4],
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
                    callModule(0x7, JSON['stringify'](_0x1b1b2f));
                    setTimeout(() => 就职诏书切(fmo_pos['x'] + 0xf, fmo_pos['y'] + 0xf, fmo_pos['z'] + 0xf), 0x3e8);
                }
                if (_0x829ed4 === 'Crasher' && cs_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x559e2a[_0x829ed4],
                    'count': cs_packet
                }));
                if (_0x829ed4 === 'ShowNXInfo' && !_0x559e2a[_0x829ed4]) addCustomArrayList('NoveXare', '', '', false);
                if (_0x829ed4 === 'RandomFunc') {
                    const _0x295099 = Object['keys'](globalThis);
                    let _0x3f35a4 = [];
                    for (let _0x3fd50c of _0x295099) {
                        if (typeof globalThis[_0x3fd50c] === 'boolean') _0x3f35a4['push'](_0x3fd50c);
                    }
                    const _0x5d55be = _0x3f35a4[才臣以供养(0x0, _0x3f35a4['length'] - 0x1)];
                    既无伯叔终(_0x5d55be, _0x559e2a[_0x829ed4]);
                }
                if (_0x829ed4 === 'InfiniteAura' && ia_multi) callModule(0x23, JSON['stringify']({
                    'value': _0x559e2a[_0x829ed4],
                    'count': ia_packet
                }));
                if (_0x829ed4 === 'FlashBack') sb();
                if (_0x829ed4 === 'ClickTP') callModule(0x38, '{"reach":255,"value":' + b2s(_0x559e2a[_0x829ed4]) + '}');
                if (_0x829ed4 === 'PyRpcManager' && rpc_store && !_0x559e2a[_0x829ed4]) {
                    rpc_temp['forEach'](_0x1ed26e => sendRpc(_0x1ed26e['id'], _0x1ed26e['data']));
                    非臣陨首所(0x0, 'Tip', '成功发送储存的' + rpc_temp['length'] + '个rpc数据包', '§r');
                    rpc_temp = [];
                }
                if (_0x829ed4 === 'HideHud') setBooleanOption(0x14f, {
                    'value': _0x559e2a[_0x829ed4],
                    'defaultValue': false
                });
                if (_0x829ed4 === 'EntityXRay') setBooleanOption(0x149, {
                    'value': _0x559e2a[_0x829ed4],
                    'defaultValue': false
                });
                if (_0x829ed4 === 'ShowChunk') setBooleanOption(0x147, {
                    'value': _0x559e2a[_0x829ed4],
                    'defaultValue': false
                });
                if (_0x829ed4 === 'NoPractice') setBooleanOption(0x14c, {
                    'value': _0x559e2a[_0x829ed4],
                    'defaultValue': false
                });
                if (_0x829ed4 === 'NoWeather') setBooleanOption(0x14e, {
                    'value': _0x559e2a[_0x829ed4],
                    'defaultValue': false
                });
                if (_0x829ed4 === 'FreeCam') {
                    let _0x3864bc = {
                        'value': _0x559e2a[_0x829ed4],
                        'noclip': _0x559e2a[_0x829ed4],
                        'flying': _0x559e2a[_0x829ed4]
                    };
                    callModule(0x1, JSON['stringify'](_0x3864bc));
                    if (_0x559e2a[_0x829ed4]) fc_pos = getPos(self_id);
                    else setPos(fc_pos['x'], fc_pos['y'], fc_pos['z']);
                }
                if (_0x829ed4 === 'FakeMotion' && fm_auto && _0x559e2a[_0x829ed4]) fm_pos = getPos(self_id);
                if (_0x829ed4 === 'ShadowBoomer' && _0x559e2a[_0x829ed4]) sb_pos = getPos(self_id);
                if (_0x829ed4 === 'AvoidAttack' && _0x559e2a[_0x829ed4]) aa_pos = getPos(self_id);
                else if (_0x829ed4 === 'AvoidAttack' && !_0x559e2a[_0x829ed4]) setPos(aa_pos['x'], aa_pos['y'], aa_pos['z']);
                if (_0x829ed4 === 'NoClip') {
                    let _0x3369b1 = {
                        'value': _0x559e2a[_0x829ed4],
                        'noclip': _0x559e2a[_0x829ed4],
                        'flying': _0x559e2a[_0x829ed4]
                    };
                    if (nc_depart && _0x559e2a[_0x829ed4]) departCamera();
                    if (nc_depart && !_0x559e2a[_0x829ed4]) resetCamera();
                    if (nc_bypass) callModule(0x2c, JSON['stringify']({
                        'no_move_check': _0x559e2a[_0x829ed4],
                        'no_fall_check': _0x559e2a[_0x829ed4],
                        'value': _0x559e2a[_0x829ed4]
                    }));
                    callModule(0x1, JSON['stringify'](_0x3369b1));
                    if (nc_blink) nc_pos = getPos(self_id);
                    else nc_pos = {};
                }
                if (_0x829ed4 === 'BalanceTimer') {
                    callModule(0x25, JSON['stringify']({
                        'value': _0x559e2a[_0x829ed4]
                    }));
                    BalanceTimer_st = !_0x559e2a[_0x829ed4];
                }
                if (_0x829ed4 === 'IQBoost') {
                    const _0x22ffef = File['read'](nx_paths + '/iQBoost.txt')['split']('\n');
                    let _0x5e1484 = 才臣以供养(0x0, _0x22ffef['length'] - 0x1);
                    sendChatMessage('!' + _0x22ffef[_0x5e1484]);
                }
                if (_0x829ed4 === 'AutoTarget' && !_0x559e2a[_0x829ed4]) at_lists = [];
                if (_0x829ed4 === 'SoundPlayer' && !_0x559e2a[_0x829ed4]) sp_data = [];
                if (_0x829ed4 === 'FightBot' && !_0x559e2a[_0x829ed4]) {
                    if (fb_ka) KillAura = false;
                    if (fb_aa) AssistAim = false;
                    if (fb_kd) KeepDistance = false;
                    if (fb_sca) Scaffold = false;
                }
                if (_0x829ed4 === 'ShowSendPacket' && !_0x559e2a[_0x829ed4] && JSON['stringify'](PacketTmp['send']) != '{}') {
                    let _0x59327e = '';
                    for (let _0x326cc0 in PacketTmp['send']) _0x59327e += '名称:' + _0x326cc0 + '，ID:' + PacketTmp['send'][_0x326cc0]['id'] + '，发送数量:' + PacketTmp['send'][_0x326cc0]['count'] + '\n';
                    if (sp_save) File['write'](nx_paths + '/SendPacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['send'], null, 0x2));
                    非臣陨首所(0x0, 'sendPacket', '\n' + _0x59327e, '§r');
                    PacketTmp['send'] = {};
                }
                if (_0x829ed4 === 'ShowReceivePacket' && !_0x559e2a[_0x829ed4] && JSON['stringify'](PacketTmp['receive']) != '{}') {
                    let _0x26cf94 = '';
                    for (let _0x321f70 in PacketTmp['receive']) _0x26cf94 += '名称:' + _0x321f70 + '，ID:' + PacketTmp['receive'][_0x321f70]['id'] + '，接受数量:' + PacketTmp['receive'][_0x321f70]['count'] + '\n';
                    if (srp_save) File['write'](nx_paths + '/ReceivePacket-' + Date['now']() + '.json', JSON['stringify'](PacketTmp['receive'], null, 0x2));
                    非臣陨首所(0x0, 'receivePacket', '\n' + _0x26cf94, '§r');
                    PacketTmp['receive'] = {};
                }
                if (_0x829ed4 === 'Scaffold' && sca_keep && _0x559e2a[_0x829ed4]) sca_current = 0x0;
                if (_0x829ed4 === 'SmartInv' && _0x559e2a[_0x829ed4]) {
                    da_slot = 0x23;
                    max_damage = 0x0;
                    max_armor = [0x0, 0x0, 0x0, 0x0];
                }
                if (_0x829ed4 === 'sp_loop' && !_0x559e2a[_0x829ed4]) sp_file = null;
                if (_0x829ed4 === 'NoLiquid' && _0x559e2a[_0x829ed4]) {
                    nl_water = getEntityAttribute(self_id, 0x2);
                    nl_lava = getEntityAttribute(self_id, 0x6);
                } else if (_0x829ed4 === 'NoLiquid' && !_0x559e2a[_0x829ed4]) {
                    setEntityAttribute(self_id, 'minecraft:underwater_movement', nl_water);
                    setEntityAttribute(self_id, 'minecraft:lava_movement', nl_lava);
                }
                if (typeof _0x559e2a[_0x829ed4] === 'boolean' || typeof _0x559e2a[_0x829ed4] === 'number') {
                    if (typeof _0x559e2a[_0x829ed4] === 'boolean') {
                        既无伯叔终(_0x829ed4, _0x559e2a[_0x829ed4]);
                        return;
                    }
                    nx_cfg[_0x829ed4] = _0x559e2a[_0x829ed4];
                    globalThis[_0x829ed4] = _0x559e2a[_0x829ed4];
                }
            }
        } catch (_0x564b52) {
            clientMessage(_0x564b52['stack']);
        }
    }

    function onPlayerAttackEvent(_0x43f66b, _0x450686) {
        if (SoundManager && sm_attack) playSound(nx_paths + '/音效/attack.mp3');
        if (CameraManager && cm_transfer) cm_attack = _0x450686;
        if (SlowMotion && sm_onhit && !sm_status) sm_status = true;
        if (FakeTip && modes['fakeTip_mode'] === 0x2) showTipMessage('§b[Relic] §r§lAttacking | §r' + getEntityName(_0x450686));
        if (FakeTip && modes['fakeTip_mode'] === 0x3) showTipMessage('§a§l[Kaleidoscop - 万花筒]\n§r§l正在攻击： §r' + getEntityName(_0x450686));
        if (FakeTip && modes['fakeTip_mode'] === 0x4) showTipMessage('§2[Heal Module] §r§l正在攻击： §r' + getEntityName(_0x450686));
        if (FakeTip && modes['fakeTip_mode'] === 0x7) showTipMessage('§6正在攻击: ' + getEntityName(_0x450686));
        if (TargetEdit) {
            if (te_target === null) te_target = _0x450686;
            else {
                if (te_all) getEntityList()['forEach'](_0xf7556f => {
                    if (_0xf7556f != te_target) 本图宦达不(_0xf7556f, te_target, te_two);
                });
                else 本图宦达不(_0x450686, te_target, te_two);
                te_target = null;
                非臣陨首所(0x0, 'Tip', '设置完成', '§r');
            }
            return true;
        }
        if (RiderEdit) {
            if (re_cancel) stopRidingEntity(_0x450686);
            else startRidingEntity(_0x450686);
            非臣陨首所(0x0, 'Tip', '已骑乘目标', '§r');
            return true;
        }
        if (EntityNBTCopy) {
            if (enc_target === null) enc_target = _0x450686;
            else {
                setEntityNBT(_0x450686, getEntityNBT(te_target));
                enc_target = null;
                非臣陨首所(0x0, 'Tip', '已复制NBT', '§r');
            }
            return true;
        }
        if (ActivitySender) sendChatMessage('我正在攻击' + getEntityName(_0x450686));
        if (!attack_list['includes'](_0x450686)) attack_list['push'](_0x450686);
        if (_0x450686 === null || attack_list['every'](_0x5de692 => last_attack_target['includes'](_0x5de692))) {
            attack_frequency++;
            isAttacking = true;
        } else {
            last_attack_target = _0x450686;
            attack_ticks = 0x0;
            real_attack = 0x0;
            attack_frequency = 0x0;
            click_num = 0x0;
            click_t = 0x0;
        }
        if (PVPDaLao) setTitle('还是PVP大佬');
        if (OtherUser) {
            otherId = _0x450686;
            return true;
        }
        if (CameraManager && cm_editanchor) {
            cm_id = _0x450686;
            非臣陨首所(0x0, 'Tip', '正在视奸: ' + getEntityName(_0x450686), '§r');
            return true;
        }
        if (AttackMessage) sendChatMessage(am_text);
        if (AttackParticle) {
            if (ap_crit) {
                const _0x57c004 = getPos(_0x450686);
                const _0x151b6d = getEntitySize(_0x450686);
                for (let _0x54228d = 0x0; _0x54228d < 才臣以供养(ap_count, ap_count + 0x14); _0x54228d++) 鲜兄弟门衰(ap_type, _0x57c004['x'] + 才臣以供养(-_0x151b6d['x'] * 才臣以供养(0x5, ap_density), _0x151b6d['x'] * 才臣以供养(0x5, ap_density)) / 0xa, _0x57c004['y'] + 才臣以供养(-_0x151b6d['y'] * 0x9, _0x151b6d['y'] * 0x2) / 0xa + ap_offset / 0xa, _0x57c004['z'] + 才臣以供养(-_0x151b6d['x'] * 才臣以供养(0x5, ap_density), _0x151b6d['x'] * 才臣以供养(0x5, ap_density)) / 0xa, 0x1);
            }
            if (ap_slashblade) {
                let _0x2bbf7c = getCameraRotation();
                let _0x5a7d84 = {
                    'yaw': _0x2bbf7c['yaw'] > 0x0 ? 0xb4 - _0x2bbf7c['yaw'] : -0xb4 - _0x2bbf7c['yaw'],
                    'pitch': -_0x2bbf7c['pitch']
                };
                let _0x3eebf3 = 才臣以供养(0x0, 0x1);
                let _0xc66007 = (ap_random_slope ? 才臣以供养(0x0, 0x2d) : ap_sb_slope) / 0xa;
                for (let _0x5193c9 = -ap_sb_count * 0x2; _0x5193c9 <= ap_sb_count * 0x2; _0x5193c9 += ap_sb_space) {
                    let _0x1f182a = _0x3eebf3 ? _0x5193c9 : -_0x5193c9;
                    const _0x55a479 = 洗马猥以微(ap_sb_dist, self_pos, {
                        'yaw': _0x5a7d84['yaw'] + _0x1f182a,
                        'pitch': _0x5a7d84['pitch'] + _0x5193c9 * _0xc66007
                    });
                    鲜兄弟门衰(ap_type, _0x55a479['x'], _0x55a479['y'] + ap_offset / 0xa, _0x55a479['z'], 0x1);
                }
            }
        }
        if (AttackSound) {
            立形影相吊(Number(as_type), Number(as_level));
            if (as_gradually) as_level = Number(as_level) + 0x1;
            if (as_gradually) attack_tick = 0x0;
        }
        if (AttackRender) {
            const _0x28c4da = 能上报臣具(self_id, _0x450686);
            callModule(0x4b, JSON['stringify']({
                'value': true,
                'line_width': 0.25,
                'mode': 0x2,
                'distance': _0x28c4da * 1.01
            }));
            setTimeout(() => callModule(0x4b, JSON['stringify']({
                'value': false
            })), 0xc8);
        }
        if (RecordInfo && ri_click) {
            let _0x5d9eb0 = 愍臣孤弱躬(_0x450686);
            非臣陨首所(0x0, 'Info', '\n' + _0x5d9eb0 + '\n§r§b==============================', '§r');
            if (ri_save) File['write'](nx_paths + '/' + getEntityName(_0x450686) + '_' + _0x450686 + '.txt', _0x5d9eb0);
            return true;
        }
        if (SmartWeapon) {
            let _0x17ffa8 = [];
            let _0x3276c7 = modes['sw_mode'] ? 0x24 : 0x9;
            for (let _0x582bb6 = 0x0; _0x582bb6 < _0x3276c7; _0x582bb6++) _0x17ffa8['push']({
                'slot': _0x582bb6,
                'd': 逮奉圣朝沐(self_id, _0x582bb6, sw_texture, sw_enchant)
            });
            _0x17ffa8['sort']((_0x23197d, _0x1ef990) => _0x1ef990['d'] - _0x23197d['d']);
            let _0x384523 = _0x17ffa8[0x0];
            let _0x38dde6 = getPlayerSelectItemSlot(self_id);
            if (_0x384523['d'] > 0x1 && _0x384523['slot'] !== _0x38dde6) {
                if (_0x384523['slot'] > 0x8) {
                    if (sw_open) openInventory();
                    setTimeout(() => 多疾病九岁(_0x384523['slot'], _0x38dde6, true, false), 0xc8);
                } else selectPlayerInventorySlot(self_id, _0x384523['slot']);
            }
        }
        if (ClickTarget) {
            if (!at_lists['includes'](_0x450686)) at_lists['push'](_0x450686);
            else at_lists['splice'](at_lists['indexOf'](_0x450686), 0x1);
            非臣陨首所(0x0, !at_lists['includes'](_0x450686) ? 'delTarget' : 'addTarget', getEntityName(_0x450686), '§r');
            return true;
        }
        if (CustomKB) {
            const _0x2872f2 = getPos(_0x450686);
            const _0x14287d = 不许臣之进(self_pos, _0x2872f2, 'yaw_pos');
            const _0x587f77 = 洗马猥以微(-ckb_len / 0x2, self_pos, {
                'yaw': _0x14287d,
                'pitch': 0x0
            });
            setEntityMotion(_0x450686, _0x587f77['x'] - self_pos['x'], ckb_y, _0x587f77['z'] - self_pos['z']);
        }
        if (ClickWhiteList) {
            if (!at_whileLists['includes'](_0x450686)) at_whileLists['push'](_0x450686);
            else at_whileLists['splice'](at_whileLists['indexOf'](_0x450686), 0x1);
            非臣陨首所(0x0, !at_whileLists['includes'](_0x450686) ? 'delTarget' : 'addTarget', getEntityName(_0x450686), '§r');
            return true;
        }
        if (ClickTeam && (!KillAura || ct_team === 'NoveXare')) {
            ct_team = 临门急于星(getEntityName(_0x450686));
            非臣陨首所(0x0, 'setTeam', ct_team, '§r');
            return true;
        }
        if (TargetHud && modes['th_select_mode'] == 0x1) {
            th_target = _0x450686;
            th_tick = 0x0;
        }
        if (KillAura) return 才臣以供养(0x0, 0x64) < ka_empty;
    }

    function onSendChatMessageEvent(_0x7fca57) {
        if (_0x7fca57 === '') return true;
        if (ReplaceMsg) {
            if (modes['bm_mode'] === 0x0) executeCommand('me ' + _0x7fca57);
            if (modes['bm_mode'] === 0x1) executeCommand('tell @a ' + _0x7fca57);
            if (modes['bm_mode'] === 0x2) executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n§r§f' + _0x7fca57);
            return true;
        }
        if (ChatManager && cm_fake) {
            executeCommand('tell @a \n\n\n\n\n\n\n\n\n\n\n\n\n\n §r§f<' + cm_target + '> ' + _0x7fca57);
            return true;
        }
        if (FakeChat) {
            chatMessage(fc_target, _0x7fca57);
            return true;
        }
        if (FakeWhisper) {
            whisperMessage(fw_target, _0x7fca57);
            return true;
        }
        if (ChatSuffix && !_0x7fca57['includes'](cs_text)) {
            sendChatMessage(_0x7fca57 + cs_text);
            return true;
        }
    }

    function onClientMessageEvent(_0xb338a6, _0x5b8a52) {
        if (ChatManager && (_0xb338a6 != getEntityName(self_id) && cm_other || _0xb338a6 == getEntityName(self_id) && cm_self) && !isRepeating) {
            isRepeating = true;
            for (let _0x5a29a3 = 0x0; _0x5a29a3 < cm_repeat_times; _0x5a29a3++) sendChatMessage(_0x5b8a52);
            setTimeout(() => isRepeating = false, 0x64);
        };
        if (ShowClientMessage) 非臣陨首所(0x0, 'clientMsg', '来源: ' + _0xb338a6 + ', 消息:' + _0x5b8a52, '§r');
        if (ChatManager) return cm_black['some'](_0x4420d8 => _0x5b8a52['includes'](_0x4420d8));
        if (ChatManager && _0x5b8a52['length'] > cm_length) return;
        if (BulletNotice) {
            let _0x1761c5 = Math['round'](才臣以供养(0x0, nx_screen['screenHeight'] * bn_range / 0x64));
            let _0x2daf70 = bn_format['replaceAll']('[名字]', _0xb338a6)['replaceAll']('[消息]', _0x5b8a52);
            const _0x2550d1 = 'abcdef';
            if (bn_format) _0x2daf70 = 凶生孩六月(_0x2daf70);
            if (bn_rainbow) _0x2daf70 = '§' + _0x2550d1[才臣以供养(0x0, _0x2550d1['length'] - 0x1)] + _0x2daf70;
            let _0x27badc = createText(_0x2daf70, 'Center', nx_screen['screenWidth'], _0x1761c5);
            if (_0x27badc !== -0x1) bn_list['push']({
                'id': _0x27badc,
                'speed': 才臣以供养(bn_min, bn_max),
                'x': nx_screen['screenWidth'],
                'y': _0x1761c5
            });
            return bn_intercept;
        }
        return ShowClientMessage;
    }

    function onPlayerJumpEvent(_0x27ac57) {
        if (ActivitySender) sendChatMessage('我正在跳跃');
        if (PVPDaLao) setTitle('还是什么都不知道的小白');
        if (Scaffold && sca_tower) {
            let _0x28f901 = Date['now']();
            if (_0x28f901 - sca_prevTower < sca_space * 0x32 && setPos(self_pos['x'], self_pos['y'] + 1.3, self_pos['z']) && buildBlock(self_id, self_pos['x'], self_pos['y'] - 2.3, self_pos['z'], 0x1) && sca_keep) sca_current = Math['floor'](self_pos['y']) + 0x1;
            sca_prevTower = _0x28f901;
        }
        if (LongJump) {
            const _0x3a233f = getEntityMotion(_0x27ac57);
            const _0xe4108e = getCameraRotation();
            const _0x2e1c70 = 无主辞不赴(_0x3a233f, self_pos, 0x14);
            const _0x46c7ec = 洗马猥以微(lj_len / 0x4, self_pos, {
                'yaw': _0xe4108e['yaw'] > 0x0 ? 0xb4 - _0xe4108e['yaw'] : -0xb4 - _0xe4108e['yaw'],
                'pitch': 0x0
            });
            setMotion(_0x46c7ec['x'] - self_pos['x'], lj_y, _0x46c7ec['z'] - self_pos['z']);
            return true;
        }
    }

    function onPyRpcReceiveEvent(_0x4a0c27, _0x2ae911) {
        if (PyRpcManager && rpc_rec) {
            const _0x51bfcb = new Uint8Array(_0x2ae911);
            const _0x3ffafc = Array['from'](_0x51bfcb, _0x13382a => _0x13382a['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x588a80 = 臣密言臣以(_0x2ae911)['toLowerCase']();
            let _0x452d57 = false;
            let _0x4dac73 = rpc_tipWhite['some'](_0x38de08 => _0x588a80['includes'](_0x38de08));
            if (!_0x452d57) _0x452d57 = rpc_black['some'](_0x352d89 => _0x588a80['includes'](_0x352d89));
            if (!_0x452d57) _0x452d57 = rpc_recBlack['some'](_0x16a4c5 => _0x588a80['includes'](_0x16a4c5));
            if (rpc_white['some'](_0x26bc64 => _0x588a80['includes'](_0x26bc64))) _0x452d57 = false;
            if (rpc_recWhite['some'](_0x18542d => _0x588a80['includes'](_0x18542d))) _0x452d57 = false;
            if (rpc_record && (_0x4dac73 && rpc_exclude || !_0x4dac73)) {
                const _0x4316a8 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
                const _0x1ccff8 = JSON['parse'](火臣欲奉诏(_0x4316a8));
                _0x1ccff8[_0x1ccff8['length']] = {
                    'packet_hex': _0x3ffafc,
                    'packet_format': 朝历职郎署(_0x3ffafc),
                    'packet_str': 臣密言臣以(_0x2ae911),
                    'packet_bin': _0x51bfcb,
                    'time': Date['now'](),
                    'id': _0x4a0c27,
                    'type': 'Receive',
                    'rpc_black': rpc_recBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0x452d57
                };
                File['write'](_0x4316a8, JSON['stringify'](_0x1ccff8, null, 0x4));
            }
            let _0x21721d = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x21721d = 臣密言臣以(_0x2ae911);
            if (modes['rpc_mode'] === 0x1) _0x21721d = _0x3ffafc;
            if (modes['rpc_mode'] === 0x2) _0x21721d = 朝历职郎署(_0x3ffafc);
            if (modes['rpc_mode'] === 0x3) _0x21721d = JSON['stringify'](_0x2ae911);
            const _0x3ee758 = _0x452d57 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================\n' : '\n§r§e==============================\n';
            if (rpc_tip && !_0x4dac73 && (rpc_showDisintercept && !_0x452d57 || rpc_showIntercept && _0x452d57)) 非臣陨首所(0x0, 'Receive-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4a0c27 + '\n' : '') + _0x21721d + _0x3ee758, '§r');
            return _0x452d57;
        }
    }

    function onPyRpcSendEvent(_0x4b5472, _0x334829) {
        if (PyRpcManager && rpc_send) {
            const _0x442db6 = new Uint8Array(_0x334829);
            const _0x38eccb = Array['from'](_0x442db6, _0x321016 => _0x321016['toString'](0x10)['padStart'](0x2, '0'))['join']('');
            const _0x403ee5 = 臣密言臣以(_0x334829)['toLowerCase']();
            let _0xcb8019 = false;
            let _0x3e7129 = rpc_tipWhite['some'](_0x21a16b => _0x403ee5['includes'](_0x21a16b));
            if (!_0xcb8019) _0xcb8019 = rpc_black['some'](_0x3ea925 => _0x403ee5['includes'](_0x3ea925));
            if (!_0xcb8019) _0xcb8019 = rpc_sendBlack['some'](_0x254b77 => _0x403ee5['includes'](_0x254b77));
            if (rpc_white['some'](_0x3b9bb0 => _0x403ee5['includes'](_0x3b9bb0))) _0xcb8019 = true;
            if (rpc_sendWhite['some'](_0x3cf60a => _0x403ee5['includes'](_0x3cf60a))) _0xcb8019 = false;
            if (!_0x3e7129) prev_rpc = {
                'id': _0x4b5472,
                'data': _0x442db6
            };
            if (rpc_store) rpc_temp['push']({
                'id': _0x4b5472,
                'data': _0x442db6
            });
            if (rpc_intercept) _0xcb8019 = true;
            if (rpc_record && (_0x3e7129 && rpc_exclude || !_0x3e7129)) {
                const _0x465214 = getResource() + '/GBRC/NoveXare/PyRpc_Record.json';
                const _0x3cd16a = JSON['parse'](火臣欲奉诏(_0x465214));
                _0x3cd16a[_0x3cd16a['length']] = {
                    'packet_hex': _0x38eccb,
                    'packet_format': 朝历职郎署(_0x38eccb),
                    'packet_str': 臣密言臣以(_0x334829),
                    'packet_bin': _0x442db6,
                    'time': Date['now'](),
                    'id': _0x4b5472,
                    'type': 'Send',
                    'keword': rpc_sendBlack,
                    'global_keyword': rpc_black,
                    'intercept': _0xcb8019
                };
                File['write'](_0x465214, JSON['stringify'](_0x3cd16a, null, 0x4));
            }
            let _0x53194e = 'Null';
            if (modes['rpc_mode'] === 0x0) _0x53194e = 臣密言臣以(_0x334829);
            if (modes['rpc_mode'] === 0x1) _0x53194e = _0x38eccb;
            if (modes['rpc_mode'] === 0x2) _0x53194e = 朝历职郎署(_0x38eccb);
            if (modes['rpc_mode'] === 0x3) _0x53194e = JSON['stringify'](_0x334829);
            for (let _0x211037 of rpc_config) {
                if (typeof _0x211037 === 'object') {
                    if (_0x211037['match_mode'] === 0x0 && _0x53194e['includes'](_0x211037['packet'])) _0x53194e = remarks;
                    if (_0x211037['match_mode'] === 0x1 && _0x53194e['includes'] === _0x211037['packet']) _0x53194e = remarks;
                } else continue;
            }
            let _0x2a4e77 = _0xcb8019 ? '\n§e§l已拦截该PyRpc数据包\n§r§e==============================' : '\n§r§e==============================';
            if (rpc_tip && !_0x3e7129 && (rpc_showDisintercept && !_0xcb8019 || rpc_showIntercept && _0xcb8019)) 非臣陨首所(0x0, 'Send-PyRpc', '\n' + (rpc_id ? 'ID: ' + _0x4b5472 + '\n' : '') + _0x53194e + _0x2a4e77, '§r');
            return _0xcb8019;
        }
    }

    function onEntityBehaviorEvent(_0x4f33b1, _0x526011, _0x2cee20) {
        if (ShowEntityAnime) 非臣陨首所(0x0, 'EntityBehavior', '实体ID:' + _0x4f33b1 + ' 实体昵称:' + getEntityName(_0x4f33b1) + ' 行为ID:' + _0x526011 + ' 行为数据:' + _0x2cee20, '§r');
        if (_0x526011 === 0x27 && _0x4f33b1 === av_id) av_id = null;
        if (_0x526011 === 0x3 && attack_list['includes'](_0x4f33b1)) {
            if (SlowMotion && sm_onkill && !sm_status) sm_status = true;
            if (KillMessage) {
                if (km_hide) {
                    for (let _0x4decbb = 0x0; _0x4decbb < 0x32; _0x4decbb++) executeCommand('tell @a \n\n\n\n\n\n\n' + getEntityName(_0x4f33b1) + ' 死了');
                    executeCommand('tell @a \n\n\n\n\n\n\n' + km_text);
                } else sendChatMessage(km_text);
            }
            非臣陨首所(0x0, 'Kill', 'You Kill ' + getEntityName(_0x4f33b1), '§r');
            if (SoundManager && sm_kill) playSound(nx_paths + '/音效/kill.mp3');
            kills++;
            mini_tick = 0x0;
            if (FunnyKill && mini_kills < 0xa) mini_kills++;
            setTimeout(() => {
                if (FunnyKill && mini_kills > 0x0) playSound(nx_paths + '/音效/' + (mini_kills > 0x6 ? 0x6 : mini_kills) + '.mp3');
                if (FunnyKill && mini_kills > 0x0 && mini_title) setTitle(mini_tip[mini_kills - 0x1]);
            }, mini_delay * 0x3e8);
        }
        if (_0x526011 === 0x2 && AvoidInvalid) Swing = attack_list['includes'](_0x4f33b1);
        if (_0x526011 === 0x2 && attack_list['includes'](_0x4f33b1)) real_attack++;
        if (FightBack && fb_ishurt && (modes['fb_mode'] == 0x0 || _0x526011 === 0x4 && _0x4f33b1 != self_id)) {
            let _0x3a5d89 = modes['fb_mode'] == 0x0 ? getEntityList()[0x0] : _0x4f33b1;
            if (能上报臣具(_0x3a5d89, self_id) < fb_range) 守臣逵察臣(_0x4f33b1, Swing);
            fb_ishurt = false;
        }
        if (_0x526011 === 0x2 && _0x4f33b1 === self_id) {
            let _0x5b2e1b = getEntityMotion(self_id);
            if (SoundManager && sm_hurt) playSound(nx_paths + '/音效/hurt.mp3');
            if (SlowMotion && sm_onhurt && !sm_status) sm_status = true;
            if (ActivitySender) sendChatMessage('我正在被攻击');
            if (ShowHurt) 非臣陨首所(0x0, 'Hurt', '受伤类型: ' + _0x2cee20, '§r');
            if (HurtJump) setMotion(_0x5b2e1b['x'], hj_height, _0x5b2e1b['z']);
            if (AntiKB) {
                let _0x553708 = akb_hor / 0x64;
                let _0x5476db = akb_y / 0x64;
                setMotion(_0x5b2e1b['x'] - _0x553708 * _0x5b2e1b['x'], _0x5b2e1b['y'] - _0x5476db * _0x5b2e1b['y'], _0x5b2e1b['z'] - _0x553708 * _0x5b2e1b['z']);
            }
            if (AirStuck) as_time_t = 0x0;
            if (FightBack && _0x2cee20 == 0x2) fb_ishurt = true;
            if (AntiAim && aaim_hurt && !aaim_states) aaim_states = true;
        }
        if (_0x526011 === 0x2) attack_list = [];
    }

    function onPlayerDestroyBlockEvent(_0x2508a3, _0x4595b6, _0x290452, _0x4f31bd, _0x1c5dfa) {
        const _0x44749e = getCarried(_0x2508a3);
        const _0x2b7e34 = getBlock(_0x4595b6, _0x290452, _0x4f31bd);
        if (_0x2b7e34['namespace'] == 'minecraft:air') return;
        if (SoundManager && sm_destroy) playSound(nx_paths + '/音效/destroy.mp3');
        if (ShowDestroyBlock) 非臣陨首所(0x0, 'destroy', '命名空间:' + _0x2b7e34['namespace'] + ', §rID:' + _0x2b7e34['id'] + ', 方块选择面:' + _0x1c5dfa + ', §r特殊值:' + _0x2b7e34['aux'] + '\n手持:' + _0x44749e['name'] + '-[' + _0x44749e['namespace'] + '], 特殊值:' + _0x44749e['aux'] + '\n坐标:[' + _0x4595b6 + ', ' + _0x290452 + ', ' + _0x4f31bd + ']', '§r');
        if (ActivitySender) sendChatMessage('我正在破坏' + _0x4595b6 + ' ' + _0x290452 + ' ' + _0x4f31bd + '的' + _0x2b7e34['namespace']);
        if (Miner && (_0x2b7e34['namespace'] === mine_name || !mine_destroy)) {
            if (!mine_destroy && mine_current <= mine_num && (mine_white['length'] === 0x0 || mine_white['some'](_0x14bfd1 => _0x2b7e34['namespace']['includes'](_0x14bfd1))) && (mine_black['length'] === 0x0 || mine_black['every'](_0x204882 => !_0x2b7e34['namespace']['includes'](_0x204882)))) {
                mine_destroy = true;
                mine_name = _0x2b7e34['namespace'];
            }
            if (mine_destroy && mine_name != _0x2b7e34['namespace'] && mine_current < mine_num && mine_list['length'] > 0x0) mine_name = _0x2b7e34['namespace'];
            if (getDistance(self_pos, {
                    'x': _0x4595b6,
                    'y': _0x290452,
                    'z': _0x4f31bd
                }) <= mine_distance && mine_destroy) {
                let _0x950c7b = [
                    [_0x4595b6 + 0x1, _0x290452, _0x4f31bd],
                    [_0x4595b6 - 0x1, _0x290452, _0x4f31bd],
                    [_0x4595b6, _0x290452, _0x4f31bd + 0x1],
                    [_0x4595b6, _0x290452, _0x4f31bd - 0x1],
                    [_0x4595b6, _0x290452 + 0x1, _0x4f31bd],
                    [_0x4595b6, _0x290452 - 0x1, _0x4f31bd]
                ];
                for (p of _0x950c7b) {
                    const _0x3b2455 = getBlock(p[0x0], p[0x1], p[0x2]);
                    if (_0x3b2455['namespace'] != 'minecraft:air' && _0x2b7e34['namespace'] === mine_name) mine_list['push'](p);
                }
            }
        }
    }

    function onReadyEvent() {
        if (ShowGameInfo) {
            const _0x46cc16 = getWorldData();
            if (ShowGameInfo) 非臣陨首所(0x0, 'Tip', '进入世界 ' + _0x46cc16['levelName'] + ' ，难度:' + _0x46cc16['difficulty'] + ' 游戏模式:' + _0x46cc16['gameType'] + ' 游戏时间:' + _0x46cc16['time'] + ' 随机刻速度:' + _0x46cc16['randomTickSpeed'], '§r');
        }
    }

    function onPlayerBuildBlockEvent(_0x717122, _0x368e7c, _0x2f87f1, _0x44a176, _0x352394) {
        if (PVPDaLao) setTitle('又或是建筑大佬');
        if (SoundManager && sm_build) playSound(nx_paths + '/音效/build.mp3');
        const _0x57c8e8 = getCarried(_0x717122);
        const _0x26c856 = getBlock(_0x368e7c, _0x2f87f1, _0x44a176);
        if (ActivitySender) sendChatMessage('我正在放置' + _0x57c8e8['name']);
        if (ShowClickBlock) 非臣陨首所(0x0, 'build', '命名空间:' + _0x26c856['namespace'] + ', §rID:' + _0x26c856['id'] + ', 方块选择面:' + _0x352394 + ', §r特殊值:' + _0x26c856['aux'] + '\n手持:' + _0x57c8e8['name'] + '-[' + _0x57c8e8['namespace'] + '], 特殊值:' + _0x57c8e8['aux'] + '\n坐标:[' + _0x368e7c + ', ' + _0x2f87f1 + ', ' + _0x44a176 + ']', '§r');
        if (ClickTP) 就职诏书切(_0x368e7c, _0x2f87f1 + 0x2, _0x44a176);
        const _0x314e4d = ChestAura && ca_rot && _0x26c856['namespace'] === 'minecraft:chest' || Scaffold && sca_clickRot && self_item['isBlock'] && !getEntityIsGround(_0x717122) || ClickRot;
        if (_0x314e4d) {
            let _0x329715 = {
                'x': _0x368e7c,
                'y': _0x2f87f1,
                'z': _0x44a176
            };
            const _0x2fcebc = 无主辞不赴(getEntityMotion(_0x717122), getPos(_0x717122), 0x14);
            let _0x457066 = 不许臣之进(_0x2fcebc, _0x329715, 'pitch_pos');
            let _0x1a1507 = 不许臣之进(_0x2fcebc, _0x329715, 'yaw_pos');
            不行零丁孤(_0x457066, _0x1a1507);
        }
        if (GetCommand && _0x26c856['namespace']['includes']('command_block')) {
            let _0x3ba6aa = getBlockEntityNBT(_0x368e7c, _0x2f87f1, _0x44a176);
            let _0x60558a = 浴清化前太(_0x3ba6aa, 'Command:"', '",Cu');
            let _0x2575c8 = 浴清化前太(_0x3ba6aa, 'auto:', 'b,c') === '1' ? '是' : '否';
            let _0x487562 = 浴清化前太(_0x3ba6aa, 'TickDelay:', ',Tr');
            非臣陨首所(0x0, 'Cmd', '坐标:[' + _0x368e7c + ' ' + _0x2f87f1 + ' ' + _0x44a176 + ']\n指令:' + _0x60558a + '\n是否自动:' + _0x2575c8 + '\n执行延迟:' + _0x487562 + 'Tick', '§r');
            return true;
        }
        if (BlockTagCopy) {
            if (btc_pos === null) btc_pos = [_0x368e7c, _0x2f87f1, _0x44a176];
            else {
                setBlockEntityData(_0x368e7c, _0x2f87f1, _0x44a176, getBlockEntityData(btc_pos[0x0], btc_pos[0x1], btc_pos[0x2]));
                btc_pos = null;
                非臣陨首所(0x0, 'Tip', '复制标签成功', '§r');
            }
            return true;
        }
        if (FakeBuilder) {
            let _0x4401e8 = [
                [_0x368e7c, _0x2f87f1 - 0x1, _0x44a176],
                [_0x368e7c, _0x2f87f1 + 0x1, _0x44a176],
                [_0x368e7c, _0x2f87f1, _0x44a176 - 0x1],
                [_0x368e7c, _0x2f87f1, _0x44a176 + 0x1],
                [_0x368e7c - 0x1, _0x2f87f1, _0x44a176],
                [_0x368e7c + 0x1, _0x2f87f1, _0x44a176]
            ];
            setBlock(_0x4401e8[_0x352394][0x0], _0x4401e8[_0x352394][0x1], _0x4401e8[_0x352394][0x2], _0x57c8e8['namespace'], _0x57c8e8['aux']);
            return true;
        }
        if (ClickBlock) return setBlock(_0x368e7c, _0x2f87f1, _0x44a176, _0x57c8e8['namespace'], _0x57c8e8['aux']);
        if (ClickDestroy && !AutoDestroy) 苦特为尤甚({
            'x': _0x368e7c,
            'y': _0x2f87f1,
            'z': _0x44a176
        });
        if (AutoBed && _0x26c856['namespace'] === 'minecraft:bed' && !ab_running) {
            非臣陨首所(0x0, 'Tip', '请手持方块', '§r');
            let _0x3f5ee8 = [
                [_0x368e7c + 0x1, _0x2f87f1, _0x44a176],
                [_0x368e7c - 0x1, _0x2f87f1, _0x44a176],
                [_0x368e7c, _0x2f87f1, _0x44a176 + 0x1],
                [_0x368e7c, _0x2f87f1, _0x44a176 - 0x1],
                [_0x368e7c, _0x2f87f1 + 0x1, _0x44a176]
            ];
            ab_running = true;
            for (let _0x19d02c of _0x3f5ee8) {
                const _0x458b0c = getBlock(_0x19d02c[0x0], _0x19d02c[0x1], _0x19d02c[0x2]);
                if (_0x458b0c['namespace'] === 'minecraft:air') 无应门五尺(_0x19d02c[0x0], _0x19d02c[0x1], _0x19d02c[0x2]);
            }
            ab_running = false;
        }
        if (Breaker && (_0x57c8e8['namespace']['includes']('_sword') || _0x57c8e8['namespace']['includes']('_pickaxe') || _0x57c8e8['namespace']['includes']('_axe') || _0x57c8e8['namespace']['includes']('shears'))) {
            if (bk_origin) {
                callModule(0xf, JSON['stringify']({
                    'value': true
                }));
                setTimeout(() => callModule(0xf, JSON['stringify']({
                    'value': false
                })), bk_last * 0x32);
                return true;
            }
            const _0x51adc5 = Math['round'](bk_range);
            _0x36ed84: for (let _0x54d85c = -_0x51adc5; _0x54d85c <= _0x51adc5; _0x54d85c++) {
                for (let _0x96ff73 = -_0x51adc5; _0x96ff73 < _0x51adc5; _0x96ff73++) {
                    for (let _0xbfd70a = -_0x51adc5; _0xbfd70a <= _0x51adc5; _0xbfd70a++) {
                        let _0x23548f = _0x368e7c + _0x54d85c;
                        let _0x5aad27 = _0x2f87f1 + _0x96ff73;
                        let _0x300fa7 = _0x44a176 + _0xbfd70a;
                        let _0x328e9e = getBlock(_0x23548f, _0x5aad27, _0x300fa7);
                        if (bk_bed && _0x328e9e['namespace'] === 'minecraft:bed' || bk_chest && _0x328e9e['namespace'] === 'minecraft:chest') {
                            let _0x2b9ca9 = getBlock(_0x23548f, _0x5aad27 + 0x1, _0x300fa7);
                            if (_0x2b9ca9['namespace'] != 'minecraft:air' && bk_up) _0x5aad27 += 0x1;
                            if (bk_tool && _0x2b9ca9['namespace']['includes']('stone')) selectPlayerInventorySlot(_0x717122, 孝廉后刺史(_0x717122, '_pickaxe'));
                            if (bk_tool && _0x2b9ca9['namespace']['includes']('planks')) selectPlayerInventorySlot(_0x717122, 孝廉后刺史(_0x717122, '_axe'));
                            if (bk_tool && _0x2b9ca9['namespace']['includes']('wool')) selectPlayerInventorySlot(_0x717122, 孝廉后刺史(_0x717122, 'shears'));
                            bk_pos = {
                                'ex': _0x23548f,
                                'ey': _0x5aad27,
                                'ez': _0x300fa7
                            };
                            bk_timer = 0x0;
                            break _0x36ed84;
                        }
                    }
                }
            }
        }
        if (bc_select && BlockClicker) {
            ac_pos['push']({
                'x': _0x368e7c,
                'y': _0x2f87f1,
                'z': _0x44a176
            });
            非臣陨首所(0x0, 'Tip', '已添加[' + _0x368e7c + ', ' + _0x2f87f1 + ', ' + _0x44a176 + ']', '§r');
            return true;
        }
        if (FastBuild && fb_list['length'] === 0x0 && fb_success) {
            const _0x234d7c = getCameraRotation();
            for (let _0x433a65 = 0x0; _0x433a65 < fb_len + 0x1; _0x433a65++) fb_list['push'](洗马猥以微(_0x433a65, 奔驰则刘病(_0x717122), {
                'pitch': 0x0,
                'yaw': _0x234d7c['yaw'] > 0x0 ? 0xb4 - _0x234d7c['yaw'] : -0xb4 - _0x234d7c['yaw']
            }));
            fb_success = false;
            return true;
        }
        if (ca_check && _0x26c856['namespace'] === 'minecraft:chest') chestStates['click'] = true;
    }

    function onKeyboardDownEvent(_0x357c43) {
        if (ShowPressKey) 非臣陨首所(0x0, 'KeyBoard', '按下键值 ' + _0x357c43, '§r');
        if (nx_keys['length'] > 0x0 && typeof nx_keys[_0x357c43] !== 'undefined') 既无伯叔终(nx_keys[_0x357c43], !globalThis[nx_keys[_0x357c43]]);
        if (nx_isBind != null && _0x357c43 != 0x42) {
            nx_keys[_0x357c43] = nx_isBind;
            nx_cfg['key_binds'] = nx_keys;
            非臣陨首所(0x0, 'Tip', '绑定 ' + nx_isBind + ' 与键值 ' + _0x357c43, '§r');
            nx_isBind = null;
        }
    }

    function onKeyboardUpEvent(_0x425d5c) {
        if (ShowUpliftKey) 非臣陨首所(0x0, 'Tip', '释放键值 ' + _0x425d5c, '§r');
    }

    function onSendServerPacketEvent(_0x4dafaf, _0x4fb936) {
        if (NoClip && nc_blink && Object['keys'](nc_pos)['length'] > 0x0) {
            if (getDistance(nc_pos, self_pos) > nc_dist) nc_pos = self_pos;
            else return true;
        }
        if (FakeLag && modes['fl_mode'] === 0x0 && fakelag_status) return true;
        if (FakeLag && modes['fl_mode'] === 0x1 && fakelag_status && _0x4dafaf === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x1 && _0x4dafaf === 0x13) return true;
        if (FreeCam && modes['fc_mode'] === 0x2 && _0x4dafaf === 0xa1) return true;
        if (FreeCam && modes['fc_mode'] === 0x3 && _0x4dafaf === 0x90) return true;
        if (FreeCam && modes['fc_mode'] === 0x0) return true;
        if (ShowSendPacket) {
            const _0x1da898 = PacketTranslate[PacketTranslate['map'](_0x3c615d => _0x3c615d['id'])['indexOf'](_0x4dafaf)]['text'];
            if (sp_statistic) {
                if (typeof PacketTmp['send'][_0x4fb936] === 'undefined') PacketTmp['send'][_0x4fb936] = {
                    'id': _0x4dafaf,
                    'Translate': _0x1da898,
                    'count': 0x1
                };
                PacketTmp['send'][_0x4fb936]['count']++;
            }
            const _0xce68bb = PacketCfg['send'];
            const {
                ignore,
                intercept
            } = PacketCfg['send'];
            let _0x2ee746 = [];
            if (sp_id) _0x2ee746['push'](_0x4dafaf);
            if (sp_name) _0x2ee746['push'](_0x4fb936);
            if (sp_trans) _0x2ee746['push'](_0x1da898);
            let _0x1a9c5b = sp_intercept && (intercept['includes'](_0x4dafaf) || intercept['includes'](_0x4fb936));
            if (!sp_ignore || !(ignore['includes'](_0x4dafaf) || ignore['includes'](_0x4fb936))) 非臣陨首所(0x0, 'SendPacket', '发送数据包: ' + _0x2ee746['join'](' - ') + (_0x1a9c5b ? '\n§e已拦截数据包' : ''), '§r');
            return _0x1a9c5b;
        }
    }

    function onReceiveServerPacketEvent(_0x2f8525, _0x29ce9d) {
        if (ShadowBoomer && _0x2f8525 == 0x19 && sb_hide) return true;
        if (KillAura && ka_close && _0x2f8525 == 0x55) {
            KillAura = false;
            非臣陨首所(0x0, 'Tip', 'Auto Disable KillAura', '§r');
        }
        if ((TimePause || AvoidAttack) && _0x2f8525 === 0x13) return true;
        if (NoAnyReceive) return true;
        if (AntiText && _0x2f8525 === 0x9) at_current++;
        if ((KickAura || AntiText && at_current > at_max_text) && _0x2f8525 === 0x9) return true;
        if (ModifyTime && _0x2f8525 === 0xa) return true;
        if (ca_check && _0x2f8525 === 0x2f) chestStates['packet'] = true;
        if (FakeLag && modes['fl_mode'] === 0x2 && fakelag_status && _0x2f8525 === 0x13) return true;
        if (FakeLag && modes['fl_mode'] === 0x3 && fakelag_status) return true;
        if (FreeCam && modes['fc_mode'] === 0x4 && _0x2f8525 === 0x12) return true;
        if (NoCamShake && _0x2f8525 === 0x1b) return true;
        if (ShowReceivePacket) {
            const _0x113003 = PacketTranslate[PacketTranslate['map'](_0x6af124 => _0x6af124['id'])['indexOf'](_0x2f8525)]['text'];
            if (srp_statistic) {
                if (typeof PacketTmp['receive'][_0x29ce9d] === 'undefined') PacketTmp['receive'][_0x29ce9d] = {
                    'id': _0x2f8525,
                    'Translate': _0x113003,
                    'count': 0x1
                };
                PacketTmp['receive'][_0x29ce9d]['count']++;
            }
            const _0x46bc91 = PacketCfg['receive'];
            const {
                ignore,
                intercept
            } = PacketCfg['receive'];
            let _0x53bfd3 = [];
            if (srp_id) _0x53bfd3['push'](_0x2f8525);
            if (srp_name) _0x53bfd3['push'](_0x29ce9d);
            if (srp_trans) _0x53bfd3['push'](_0x113003);
            let _0x4b07e6 = srp_intercept && (intercept['includes'](_0x2f8525) || intercept['includes'](_0x29ce9d));
            if (!srp_ignore || !(ignore['includes'](_0x2f8525) || ignore['includes'](_0x29ce9d))) 非臣陨首所(0x0, 'ReceivePacket', '接收数据包: ' + _0x53bfd3['join'](' - ') + (_0x4b07e6 ? '\n§e已拦截数据包' : ''), '§r');
            return _0x4b07e6;
        }
        return (modes['cs_mode'] === 0x2 || modes['cs_mode'] === 0x3) && _0x2f8525 === 0x9;
    }

    function onTouchMotionDownEvent(_0x5a8db5, _0x3e51b9, _0x588e67) {
        if (SafeAttack) {
            const _0x59cb80 = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x19e99c = nx_screen['deviceWidth'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceWidth'];
            const _0x5185fb = 0x0 + (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            const _0x2f17ba = nx_screen['deviceHeight'] - (0x1 - sa_size) / 0x2 * nx_screen['deviceHeight'];
            if (at_lists['length'] > 0x0 && 退实为狼狈(self_id, at_lists[0x0], sa_fov, 0x0) && 能上报臣具(self_id, at_lists[0x0]) < sa_range && _0x3e51b9 > _0x59cb80 && _0x3e51b9 < _0x19e99c && _0x588e67 > _0x5185fb && _0x588e67 < _0x2f17ba) 守臣逵察臣(at_lists[0x0], Swing);
        }
        if (ClickSwing) swingArm();
        isClicking = true;
        click_num++;
    }

    function onContainerItemMoveEvent(_0x5da26b, _0x3d7444) {
        const _0x5d88af = 母志祖母刘(_0x3d7444);
        if (InvCleaner && modes['ic_mode'] >= 0x2 && typeof clear_config[_0x5d88af['namespace']] !== 'undefined' && modes['ic_mode'] == 0x2 || typeof clear_config[_0x5d88af['namespace']] == 'undefined' && modes['ic_mode'] == 0x3) return true;
        if (ChestStealer && (!cs_sort || _0x5da26b > cs_sort) && cs_current < cs_maxCount) {
            let _0x967b03 = cs_black['length'] === 0x0 || cs_black['some'](_0xe1781a => _0x5d88af['namespace']['includes'](_0xe1781a));
            if (cs_white['length'] !== 0x0 && cs_white['some'](_0x1a0b26 => _0x5d88af['namespace']['includes'](_0x1a0b26))) _0x967b03 = false;
            if (_0x5da26b < cs_min && _0x5da26b > cs_max) _0x967b03 = false;
            if (_0x5d88af['attackDamage'] !== 0x0 && _0x5d88af['attackDamage'] < cs_min_damage) _0x967b03 = false;
            if (_0x5d88af['damage'] !== 0x0 && _0x5d88af['damage'] < cs_min_lasting) _0x967b03 = false;
            if (!cs_weapon && _0x5d88af['attackDamage'] > 0x0 && _0x5d88af['damage'] > 0x0) _0x967b03 = false;
            if (!cs_armor && _0x5d88af['attackDamage'] === 0x0 && _0x5d88af['damage'] > 0x0) _0x967b03 = false;
            if (!cs_other && _0x5d88af['attackDamage'] === 0x0 && _0x5d88af['damage'] === 0x0) _0x967b03 = false;
            if (cs_sort) cs_sort = _0x5da26b;
            if (_0x967b03) cs_timer = 0x0;
            if (_0x967b03) cs_current++;
            return _0x967b03;
        }
        if (ShowMoveContainer) 非臣陨首所(0x0, 'Container', '§e容器所在格子: §r' + _0x5da26b + '\n§e物品NBT数据: §r' + _0x3d7444, '§r');
    }

    function onPlayerAuthInputEvent(_0x9a90b2) {
        if (PlayerAuthInputPacket) 非臣陨首所(0x0, 'Tip', '玩家授权输入:\n视角:[仰俯角:' + _0x9a90b2.rot['pitch']['toFixed'](0x2) + ', 偏航角:' + _0x9a90b2.rot['yaw']['toFixed'](0x2) + '],\n坐标[' + _0x9a90b2['pos']['x']['toFixed'](0x2) + ', ' + _0x9a90b2['pos']['y']['toFixed'](0x2) + ',' + _0x9a90b2['pos']['z']['toFixed'](0x2) + '],\n移动值:[' + _0x9a90b2['delta']['x']['toFixed'](0x2) + ', ' + _0x9a90b2['delta']['y']['toFixed'](0x2) + ', ' + _0x9a90b2['delta']['z']['toFixed'](0x2) + '],\n预测移动值:[左右:' + _0x9a90b2['analogMove']['x']['toFixed'](0x2) + ', 上下:' + _0x9a90b2['analogMove']['y']['toFixed'](0x2) + '], 实际移动值:[左右:' + _0x9a90b2['moveVec']['x']['toFixed'](0x2) + ', 上下:' + _0x9a90b2['moveVec']['y']['toFixed'](0x2) + '],\n操作标识组:' + (0x1 << _0x9a90b2['flags']), '§r');
    }

    function onSAuthLoginRequestEvent(_0x5858ac) {
        if (DumpRequestSauth) {
            File['write'](nx_paths + '/SauthRequest.json', _0x5858ac);
            showToast('已导出请求体');
        }
        if (Sauths != null && Sauths != '' && !sl_hook) {
            let _0x287790 = Sauths['replace'](/\\"/g, '"')['replace']('"{', '{')['replace']('"}"}', '"}}')['replace'](/\\\\"/g, '转义')['replace']('}}"}', '}"}}');
            const _0xd5591f = _0x5858ac['replace'](浴清化前太(_0x5858ac, '"sauth_json":', ',"seed'), JSON['stringify'](JSON['parse'](_0x287790)['sauth_json']));
            showToast('已拦截替换Sauth');
            return _0xd5591f['replace'](/转义/g, '\\"');
        }
    }

    function onSAuthLoginResponseEvent(_0xc8e378) {
        if (DumpResponseSauth) {
            File['write'](nx_paths + '/SauthResponse.json', _0xc8e378);
            showToast('已导出响应体');
        }
        if (bantip != null && bantip != '') return '{"code":29,"message":"' + bantip + '","details":"{"ban_type":"login","ban_to_ts":"0","ban_msg":"' + bantip + '"}","entity":null}';
    }

    function onSAuthJsonHookEvent(_0x21bbea) {
        if (DumpCookieSauth) {
            File['write'](nx_paths + '/SauthCookie.json', _0x21bbea);
            showToast('已导出本账号Cookie');
        }
        if (Sauths != null && Sauths != '' && sl_hook) {
            showToast('已拦截替换Sauth');
            let _0x22a100 = JSON['parse'](Sauths);
            if (typeof _0x22a100['sauth_json'] !== 'undefined') _0x22a100 = _0x22a100['sauth_json'];
            return _0x22a100;
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