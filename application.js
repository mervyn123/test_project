/**
 * Created by csd on 2017/4/17.
 */
Ext.application({
    name: 'Fiddle',

    requires: [
        //'Ext.ux.grid.FiltersFeature',
        'Ext.ux.data.PagingMemoryProxy'
    ],

    launch: function () {

        var itemsPerPage = 10; // set the number of items you want per page

        var store = Ext.create('Ext.data.Store', {
            id: 'simpsonsStore',
            autoLoad: false,
            fields: ['name', 'email', 'phone'],

            pageSize: itemsPerPage, // items per page
            //一定要为true
            remoteFilter: true, // REQUIRED for correct filtering using paging memory
            proxy: {
                type: 'pagingmemory',
                //enablePaging: true,
                // data: [{
                //     name: 'Lisa',
                //     email: 'lisa',
                //     phone: '555'
                // }],
                reader: {
                    type: 'json'
                }
            },

        });

        Ext.create('Ext.grid.Panel', {
            title: 'Simpsons',
            store: 'simpsonsStore',
            // features: [{
            //     ftype: 'filters',
            //     // filters: [{
            //     //     type: 'string',
            //     //     dataIndex: 'name'
            //     // }]
            // }],
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                filter: {
                    type: 'string'
                }
            }, {
                text: 'Email',
                dataIndex: 'email',
                flex: 1
            }, {
                text: 'Phone',
                dataIndex: 'phone'
            }, {
                text: 'action',
                flex: 1,
                renderer: function (value, m, rec) {
                    return '<a data-action="delete" title="Delete this row" style="cursor:pointer;color:red;">DELETE</a>'
                }
            }],
            listeners: {
                cellclick: function(_this, td, cellIndex, record, tr, rowIndex, e, eOpts){
                    var action = e.getTarget().dataset.action;
                    if(action == 'delete') {
                        var sd= _this.up('grid').getStore().getProxy().data;
                        sd.forEach(function(item,index,arry){
                            if(item.name === record.data.name) {
                                sd.splice(index,1);
                            }
                        });
                        _this.up('grid').getStore().load();
                    }
                }
            },
            width: 400,
            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: 'simpsonsStore', // same store GridPanel is using
                dock: 'bottom',
                displayInfo: true
            }],
            buttons: [{
                text: 'Load Date',
                handler: function(btn){
                    var data1= [{
                        name: '1',
                        email: 'mamimamihong@dsfsdf.com',
                        phone: '11111111111111111'
                    }, {
                        name: '2',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: '3',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: '4',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: '5',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: '6',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: '7',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: '8',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: '9',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: '10',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: '11',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 12',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 13',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 14',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 15',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 16',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 17',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 18',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 19',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 20',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 21',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 22',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 23',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 24',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 25',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 26',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 27',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 28',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 29',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 30',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 31',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 32',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 33',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 34',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 35',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 36',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 37',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 38',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 39',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 40',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 41',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 42',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 43',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 44',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 45',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 46',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 47',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 48',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 49',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 50',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 51',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa 52',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 53',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 54',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 55',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'
                    }, {
                        name: 'Lisa',
                        email: 'lisa@simpsons.com',
                        phone: '555-111-1224'
                    }, {
                        name: 'Bart 56',
                        email: 'bart@simpsons.com',
                        phone: '555-222-1234'
                    }, {
                        name: 'Homer 57',
                        email: 'homer@simpsons.com',
                        phone: '555-222-1244'
                    }, {
                        name: 'Marge 58',
                        email: 'marge@simpsons.com',
                        phone: '555-222-1254'

                    }];
                    btn.up('grid').getStore().getProxy().data = data1;
                    btn.up('grid').getStore().load();
                }
            },{
                text: 'Filter Bart',
                handler: function (btn) {
                    btn.up('grid').getStore().clearFilter(true);
                    btn.up('grid').getStore().filter([
                        {filterFn: function(item) { return (item.get("name").slice(-1))%2==0; }}
                    ]);
                    //btn.up('grid').getStore().filter('name', 'bart', true, true)
                    console.log('filter bart');
                }
            }, {
                text: 'Clear Filter',
                handler: function (btn) {
                    btn.up('grid').getStore().clearFilter();
                }
            }],
            renderTo: Ext.getBody()
        });
    }
});
