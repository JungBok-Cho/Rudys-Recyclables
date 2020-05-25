using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace aspTest.Pages
{
    /// <summary>
    /// The Privacy Page
    /// </summary>
    public class PrivacyModel : PageModel
    {
        // local Logger reference
        private readonly ILogger<PrivacyModel> _logger;

        /// <summary>
        /// Constructor
        /// Injecting the Logger
        /// </summary>
        public PrivacyModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Get for the Privacy page
        /// </summary>
        public void OnGet()
        {
        }
    }
}
