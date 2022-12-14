export interface ProductInfo {
	id: string
	site_id: string
	title: string
	subtitle: null | string
	seller_id: number
	category_id: string
	official_store_id: number
	price: number
	base_price: number
	original_price: null | number
	currency_id: string
	initial_quantity: number
	available_quantity: number
	sold_quantity: number
	sale_terms: Attribute[]
	buying_mode: string
	listing_type_id: string
	start_time: Date
	stop_time: Date
	condition: string
	permalink: string
	thumbnail_id: string
	thumbnail: string
	secure_thumbnail: string
	pictures: Picture[]
	video_id: null
	descriptions: object[]
	accepts_mercadopago: boolean
	non_mercado_pago_payment_methods: object[]
	shipping: Shipping
	international_delivery_mode: string
	seller_address: SellerAddress
	seller_contact: null
	location: object
	coverage_areas: object[]
	attributes: Attribute[]
	warnings: object[]
	listing_source: string
	variations: object[]
	status: string
	sub_status: object[]
	tags: string[]
	warranty: string
	catalog_product_id: string
	domain_id: string
	parent_item_id: null
	differential_pricing: null
	deal_ids: object[]
	automatic_relist: boolean
	date_created: Date
	last_updated: Date
	health: null
	catalog_listing: boolean
	channels: string[]
	quantity: number
}

export interface Attribute {
	id: string
	name: string
	value_id: null | string
	value_name: string
	value_struct: Struct | null
	values: Value[]
	attribute_group_id?: AttributeGroupID
	attribute_group_name?: AttributeGroupName
}

export enum AttributeGroupID {
	Others = 'OTHERS',
}

export enum AttributeGroupName {
	Otros = 'Otros',
}

export interface Struct {
	number: number
	unit: string
}

export interface Value {
	id: null | string
	name: string
	struct: Struct | null
}

export interface Picture {
	id: string
	url: string
	secure_url: string
	size: string
	max_size: string
	quality: string
}

export interface SellerAddress {
	city: City
	state: Country
	country: Country
	search_location: SearchLocation
	id: number
}

export interface City {
	name: string
}

export interface Country {
	id: string
	name: string
}

export interface SearchLocation {
	neighborhood: Country
	city: Country
	state: Country
}

export interface Shipping {
	mode: string
	methods: object[]
	tags: string[]
	dimensions: null
	local_pick_up: boolean
	free_shipping: boolean
	logistic_type: string
	store_pick_up: boolean
}
