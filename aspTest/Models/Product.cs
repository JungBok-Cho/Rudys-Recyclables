using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace aspTest.Models
{
    /// <summary>
    /// The Product Page
    /// </summary>
    public class Product
    {
        // The product id 
        public string Id { get; set; }

        // The product maker 
        public string Maker { get; set; }

        // The product image 
        [JsonPropertyName("img")]
        public string Image { get; set; }

        // The product url 
        public string Url { get; set; }

        // The product title 
        public string Title { get; set; }

        // The product description 
        public string Description { get; set; }

        // The product ratings
        public int[] Ratings { get; set; }

        // The string representation of the product
        // It includes every information above
        public override string ToString() => JsonSerializer.Serialize<Product>(this);

    }
}
