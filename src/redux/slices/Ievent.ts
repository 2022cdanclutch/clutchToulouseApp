export default interface Ievent {
    '@id':string,
    '@type': string,
    '@context': string,
    'id': number,
    'parent': string,
    'name': string,
    'content': string,
    'price': string,
    'location': {
        '@context': string,
        '@id': string,
        '@type': string,
        'name': string,
        'image': string,
        'content': string,
        'phone': string,
        'facebook': string,
        'twitter': string,
        'youtube': string,
        'instagram': string,
        'latitude': number,
        'longitude': number,
        'is_city_guide': boolean,
        'is_education': boolean,
        'tags': [
            string
        ],
        'business_hours': string,
        'is_closed': boolean,
        'photos': [
            {
                '@context': string,
                '@id': string,
                '@type': string
            }
        ],
        'website': string,
        'email': string,
        'street_number': string,
        'street_name': string,
        'postcode': string,
        'city': string,
        'country': string,
        'country_code': string
    },
    'start_date': string,
    'tags': string[],
    'is_free': boolean,
    'is_free_participation': boolean,
    'image': string,
    'category': number,
    'is_clutchorama': boolean,
    'artists': string[],
    'is_recurrent': string,
    'organisers': string[],
    'external_url': string[]
}
