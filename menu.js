define(function () {
    var needLogin = true;
    var menu = [
        // level 1 menu
        {
            hash: '#login',
            path: 'login',
            level: '1',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#home',
            path: 'home',
            level: '1',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#status',
            path: 'status/device_info',
            level: '1',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#sms',
            path: 'sms/smslist',
            level: '1',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#phonebook',
            path: 'phonebook/phonebook',
            level: '1',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#setting',
            path: 'network/dial_setting',
            level: '1',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#net_setting',
            path: 'network/dial_setting',
            level: '2',
            parent: '#setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#device_setting',
            path: 'adm/pin',
            level: '2',
            parent: '#setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#favorites_page',
            path: 'adm/digitel_web_page',
            level: '2',
            parent: '#setting',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#digitel_web_page',
            path: 'adm/digitel_web_page',
            level: '3',
            parent: '#favorites_page',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#digitel_recharge_page',
            path: 'adm/digitel_recharge_page',
            level: '3',
            parent: '#favorites_page',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#group_all',
            path: 'phonebook/phonebook',
            level: '2',
            parent: '#phonebook',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#group_common',
            path: 'phonebook/phonebook',
            level: '2',
            parent: '#phonebook',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#group_family',
            path: 'phonebook/phonebook',
            level: '2',
            parent: '#phonebook',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#group_friend',
            path: 'phonebook/phonebook',
            level: '2',
            parent: '#phonebook',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#group_colleague',
            path: 'phonebook/phonebook',
            level: '2',
            parent: '#phonebook',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#device_info',
            path: 'status/device_info',
            level: '2',
            parent: '#status',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#traffic_statistics',
            path: 'status/traffic_statistics',
            level: '2',
            parent: '#status',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#traffic_alert',
            path: 'status/traffic_alert',
            level: '2',
            parent: '#status',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#smslist',
            path: 'sms/smslist',
            level: '2',
            parent: '#sms',
            requireLogin: needLogin,
            checkSIMStatus: false
        },
        {
            hash: '#sim_messages',
            path: 'sms/sim_messages',
            level: '2',
            parent: '#sms',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#sms_setting',
            path: 'sms/sms_setting',
            level: '2',
            parent: '#sms',
            requireLogin: needLogin,
            checkSIMStatus: true
        }
        // level 3 menu
        ,
        {
            hash: '#dial_setting',
            path: 'network/dial_setting',
            level: '3',
            parent: '#net_setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#net_select',
            path: 'network/net_select',
            level: '3',
            parent: '#net_setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#apn_setting',
            path: 'network/apn_setting',
            level: '3',
            parent: '#net_setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#pin_management',
            path: 'adm/pin',
            level: '3',
            parent: '#device_setting',
            requireLogin: needLogin,
            checkSIMStatus: true
        },
        {
            hash: '#port_forward',
            path: 'firewall/port_forward',
            level: '3',
            parent: '#device_setting',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#router_setting',
            path: 'adm/lan',
            level: '3',
            parent: '#device_setting',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#dmz_setting',
            path: 'firewall/dmz_setting',
            level: '3',
            parent: '#device_setting',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#upnp_setting',
            path: 'firewall/upnp_setting',
            level: '3',
            parent: '#device_setting',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#port_filter',
            path: 'firewall/port_filter',
            level: '3',
            parent: '#device_setting',
            requireLogin: false,
            checkSIMStatus: false
        },
        {
            hash: '#update_management',
            path: 'update/update_info',
            level: '3',
            parent: '#device_setting',
            requireLogin: needLogin
        }
    ];

    return menu;
});
