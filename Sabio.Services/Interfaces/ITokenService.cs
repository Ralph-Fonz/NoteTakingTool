﻿using Sabio.Models.Domain;
using Sabio.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Services.Interfaces
{
    public interface  ITokenService
    {
        List<Token> GetAll();
        int Create(TokenRequest request);
    }
}
