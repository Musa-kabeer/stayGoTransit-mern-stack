export interface Trending {
     _id: string;
     id: string;
     image: string;
     location: string;
     name: string;
     uniqueId: string;
}

export interface TrendingProps {
     header: string;
     paragraph: string;
}

export interface TrendingItem {
     image: string;
     location: string;
     name: string;
     link: string;
}

export interface Room {
     address: string;
     amenities: string[];
     description: string;
     hotelId: string;
     hotelName: string;
     id: string;
     images: string[];
     location: [number, number];
     price: number;
     roomId: string;
     shortDescription: string;
     state: string;
     town: string;
     _id: string;
}
