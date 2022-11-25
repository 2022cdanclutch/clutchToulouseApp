export default interface Ilocations {
    '@id': 'string',
    '@type': 'string',
    'name': 'string',
    'image': 'string',
    'content': 'string',
    'phone': 'string',
    'facebook': 'string',
    'twitter': 'string',
    'youtube': 'string',
    'instagram': 'string',
    'latitude': 0,
    'longitude': 0,
    'is_city_guide': true,
    'is_education': true,
    'tags': [
        'string'
    ],
    'business_hours': 'string',
    'is_closed': true,
    'photos': [
        {
            '@context': 'string',
            '@id': 'string',
            '@type': 'string'
        }
    ],
    'website': 'string',
    'email': 'string',
    'street_number': 'string',
    'street_name': 'string',
    'postcode': 'string',
    'city': 'string',
    'country': 'string',
    'country_code': 'string'
}
