using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Domain
{
   public class Crowd
    {
        public int SpotId { get; set; }
        public int Busy { get; set; }
        public int Moderate { get; set; }
        public int Empty { get; set; }
    }
}
