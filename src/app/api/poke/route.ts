import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const yelpApiKey = process.env.NEXT_PUBLIC_YELP_API_KEY;
const yelpApiUrl = 'https://api.yelp.com/v3/businesses/search';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  try {
    const response = await axios.get(yelpApiUrl, {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
        'User-Agent': 'BestDish',
      },
      params: {
        term: 'poke',
        latitude,
        longitude,
        limit: 5,
      },
    });
    return NextResponse.json(response.data.businesses);
  } catch (error) {
    console.error('Error fetching data from Yelp API:', error);
    return new NextResponse('Failed to fetch data', { status: 500 });
  }
}
