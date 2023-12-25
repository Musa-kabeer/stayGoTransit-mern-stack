export interface Trending {
     _id: string;
     id: string;
     image: string;
     location: string;
     name: string;
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
