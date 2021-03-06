/*
 * Copyright (c) 2016-present Samsung Electronics Co., Ltd
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2 of the License, or (at your option) any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */

#ifndef CatchClauseNode_h
#define CatchClauseNode_h

#include "BlockStatementNode.h"
#include "ExpressionNode.h"
#include "IdentifierNode.h"
#include "Node.h"

namespace Escargot {

class FunctionDeclarationNode;

// interface CatchClause <: Node {
class CatchClauseNode : public Node {
public:
    friend class ScriptParser;
    CatchClauseNode(Node *param, Node *guard, Node *body, std::vector<FunctionDeclarationNode *> &fd)
        : Node()
    {
        m_param = (IdentifierNode *)param;
        m_guard = (ExpressionNode *)guard;
        m_body = (BlockStatementNode *)body;
        m_innerFDs = std::move(fd);
    }

    virtual ~CatchClauseNode()
    {
    }

    IdentifierNode *param()
    {
        return m_param.get();
    }

    BlockStatementNode *body()
    {
        return m_body.get();
    }

    std::vector<FunctionDeclarationNode *> &innerFDs()
    {
        return m_innerFDs;
    }

    virtual ASTNodeType type() { return ASTNodeType::CatchClause; }
private:
    RefPtr<IdentifierNode> m_param;
    RefPtr<ExpressionNode> m_guard;
    RefPtr<BlockStatementNode> m_body;
    std::vector<FunctionDeclarationNode *> m_innerFDs;
};

typedef std::vector<RefPtr<Node>> CatchClauseNodeVector;
}

#endif
