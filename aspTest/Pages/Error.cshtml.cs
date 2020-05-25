using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace aspTest.Pages
{
    /// <summary>
    /// The Error Page
    /// </summary>
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public class ErrorModel : PageModel
    {
        // getter and setter for the request id
        public string RequestId { get; set; }

        // The show request id reference
        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

        // local Logger reference
        private readonly ILogger<ErrorModel> _logger;

        /// <summary>
        /// Constructor
        /// Injecting the Logger
        /// </summary>
        public ErrorModel(ILogger<ErrorModel> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Get for the Error page
        /// 
        /// Returns the request id related to an error
        /// </summary>
        public void OnGet()
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
        }
    }
}
