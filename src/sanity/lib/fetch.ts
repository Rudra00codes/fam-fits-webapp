import { client } from "@/sanity/client";

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, any>;
}): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, params, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    });
}
