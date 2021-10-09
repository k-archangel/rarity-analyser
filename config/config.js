const config = {
    app_name: 'rugstore rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x868193f5743436b7052549e6a3640580a9355f27',
    collection_name: 'Rugstore',
    collection_description: 'we like the rugs.',
    collection_id_from: 0,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: undefined,
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'rug',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;